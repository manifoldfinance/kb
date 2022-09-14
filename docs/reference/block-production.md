---
title: Block production in Ethereum after the Merge
author: Alex Stokes
source: https://notes.ethereum.org/DaWh-02HQ4qftum1xdphkg?view
---
# Block production in Ethereum after the Merge

The Ethereum protocol is about to undergo a long-awaited upgrade called &#34;the Merge &#34;that delivers a move away from the current proof-of-work consensus to a new proof-of-stake consensus.
This new consensus mechanism brings some fundamental differences to how blocks are produced and I &#39;d like to explore in detail how we get from transactions individual users make to getting them on-chain.

First, we will explore some key differences between a proof-of-work chain and a proof-of-stake chain. With this background at hand, we can look at a detailed round of the consensus protocol and how various features work together to manufacture the canonical chain. Then, we will take a detailed look at the actual block production process following the specifications implemented by client software. Finally, we look at a variety of considerations outside the core &#34;honest &#34;behavior that can affect block production.

Before we begin, note that the mechanics of the transaction pool (the &#34;mempool &#34;) are out of scope; we will simply assume block producers have access to this resource.

## A new consensus model

Proof-of-stake represents a different point in the design space of decentralized consensus protocols relative to proof-of-work. Let &#39;s look at some key differences.

### Synchronous protocol execution

Ethereum &#39;s proof-of-stake views the consensus protocol as a series of &#34;rounds &#34;where each round takes a *fixed* amount of time. Each round is called a *slot* and on mainnet each slot is 12 seconds. This differs from proof-of-work where the rounds of the consensus protocol have no relation to an external reference time. Rounds in a proof-of-work chain instead proceed by the number of blocks -- the block height.

Slots are further aggregated into a larger span of time called an *epoch*. There are a certain number of slots per epoch and on mainnet each epoch is 32 slots. The protocol is batched this way to amortize the cost of infrequent, relatively expensive computations across the entire execution.

&lt;img style=&#34;display: block; margin-left: auto; margin-right: auto; width: 100%;&#34;src=&#34;https://storage.googleapis.com/ethereum-hackmd/upload_a024cd654e697b992b5827fb9f628e55.png &#34;&gt;This diagram shows 6 slots and 2 epochs, implying the `SLOTS_PER_EPOCH` of this chain is 3. Slot and epoch numbers start at 0 and simply increment -- nothing fancy here.

We will build on this type of diagram across this article, essentially zooming in at each stage to reveal more detail about the block production process.

### Deterministic, public leader election

At any given time, there is a fixed set of actors on the network who can participate in the consensus protocol. We call these actors &#34;validators &#34;or &#34;stakers &#34;relating to the facts that they &#34;validate &#34;the chain in order to know what to form consensus on and the reason they have say in this matter is that they have a cryptoeconomic &#34;stake &#34;at risk of forfeiture if they misbehave.

A pseudo-random input from the chain is used to shuffle this fixed set and select one validator from the set per slot who is allowed to propose a single block in that slot. No other validator can propose in that slot.

This is different from proof-of-work where the next proposer in the chain is not known and in principle can be anyone running the mining protocol.

This diagram shows a span of slots across multiple epochs with a proposer shuffling labeled by validator:

&lt;img style=&#34;display: block; margin-left: auto; margin-right: auto; width: 100%;&#34;src=&#34;https://storage.googleapis.com/ethereum-hackmd/upload_07671ae6275059a08ef80e11f4c5b0a0.png &#34;&gt;The diagram also calls out the &#34;epoch processing &#34;at the epoch boundaries where batched computation summarizing the previous `SLOTS_PER_EPOCH` slots of activity occurs.

One output of epoch processing is the proposer shuffling for the next epoch. This means the proposer in the first slot of an epoch has very little lookahead on their assignment, whereas the last proposer in an epoch has essentially `SLOTS_PER_EPOCH - 1` lookahead.

Note that once the chain has been processed through the epoch processing for the previous epoch (e.g `epoch processing E - 1` in the diagram for epoch `E`) then the proposer shuffling for that epoch is fixed and will not change. This stability reduces the space of valid blocks and helps nodes validate the messages they do receive on the network.

### Fork choice driven by validator set

A &#34;fork choice &#34;rule is an algorithm for selecting a unique chain from the set of all blocks a consensus client may have locally. Proposers are free to build on top of any block in the chain which means a &#34;fork &#34;in the chain -- multiple blocks with the same parent block -- can occur. 
In proof-of-work, a common fork choice rule is &#34;select the chain with the highest total difficulty &#34;. 
The difficulty refers to the amount of &#34;work &#34;done to &#34;seal &#34;a given block and a proof-of-work client can simply sum up all the difficulties to get a &#34;total difficulty &#34;. 
Favoring a chain with more work than another suggests a majority of the hashpower views that chain as more &#34;canonical &#34;than another and by all making the same inference we identify a unique chain.

In proof-of-stake, we lose this &#34;difficulty &#34;metric and instead rely on the stake &#34;weight &#34;of the validators. 
The algorithm currently used in Ethereum is called [`LMD-GHOST`](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.md) and it leverages the messages validator use to come to consensus. 

Each of these messages, called an *attestation*, carries the validator &#39;s current view of the chain and by tallying the amount of stake attesting to a given chain we can infer what the majority of the consensus set thinks is the &#34;canonical &#34;chain, just like in proof-of-work.

![](https://storage.googleapis.com/ethereum-hackmd/upload_7726e18f64fbdc34c18b541cb59cfc44.png)

source: https://vitalik.ca/general/2018/12/05/cbc_casper.html

This diagram illustrates the fork choice. Each block is marked with its &#34;stake weight &#34;, i.e. a normalized weight indicating how much of the active stake has attested to a given chain. At each fork, the algorithm simply picks the direct child with the most weight. For example, at the fork with two children the fork choice algorithm would select the chain with weight 3 over the chain with weight 2. Given a tie breaking rule (e.g. pick block with lowest hash), we can then identify a unique head from the set of three blocks in the lower group.

## A round of the consensus protocol

We can see how block production fits into the protocol by examining the activity of a single slot.

We know that a given validator has the opportunity to propose a block in a given slot and the exact block they produce is influenced by the current state of the chain, as given by the fork choice. The exact context for a proposal is influenced by events that each have strict synchrony assumptions so we can include them on our timing diagram and then go into greater detail below.

&lt;img style=&#34;display: block; margin-left: auto; margin-right: auto; width: 100%;&#34;src=&#34;https://storage.googleapis.com/ethereum-hackmd/upload_38dd15c7a8214b7e096a9bd6a0ce2cc2.png &#34;&gt;This diagram shows a span of three slots, with the middle slot `S` of primary focus. 
We see that any given slot is divided into a number of &#34;subslots &#34;that dictate when a validator should perform some duty. This subdivision helps honest validators coordinate their behavior and allow for plenty of time for message dissemination throughout the peer-to-peer network.

Note that there are additional duties a validator should perform in the full consensus protocol but are out of scope for this document.

### Evaluating fork choice

As soon as the local clock moves to the next slot, consensus nodes should run the fork choice to determine the latest state of the chain. In the default case this will simply recognize the block in the prior slot as the head of the chain. In a more extreme case, attestations from the prior slot could induce a reorg to another branch of the block tree. The head of the chain determines key inputs to the block production process as we will see later.

### Block production

The proposer for slot `S` can produce a single block for this slot. At a high-level, block production involves assembling some consensus-level information and some execution-level information and constructing a block that respects the state transition function of the protocol. Some of these inputs are deterministic based on the protocol state and the validator &#39;s identity. Some of the inputs are gathered from public pools like the attestation pool or the transaction mempool. The operations gathered from the public pools are not synchronized in any way across nodes (this is why we have a blockchain the first place!) so the exact data that goes into a block depends on the proposer &#39;s local view.

### Broadcast block

The assembled block is broadcast to the peers of the proposer over a gossip network. The gossip dissemination ensures that messages quickly reach all peers on the network.

### Broadcast attestation

Just like we have a &#34;shuffling &#34;of proposers, all active validators are employed in a separate shuffling process each epoch and assigned to groups called &#34;committees &#34;. To illustrate, think something like chunks of 128 validators out of a set of 262,144 active validators implying 64 committees pseudo-randomly assigned to a given slot. For this set of parameters, 8,192 validators need to attest in each slot.

Each active validator ends up asssigned to *some* slot each epoch via the committee assignemnt where they are expected to make an *attestation*, a claim about their local view of the chain that is broadcast to consensus nodes in this step. Weights in the `LMD-GHOST` algorithm described above are derived from these attestations so this step directly influences the fork choice.

In the normal, honest execution, a validator who is called to attest in slot `S` would receive the block just broadcast by the proposer, validate it with respect to the protocol rules, and then assemble their own attestation including a reference to the block.

Honest nodes will have `1/3 * SECONDS_PER_SLOT` from the start of the slot to either receive the block or decide there was no block produced and attest to an &#34;empty &#34;or &#34;skip &#34;slot. Once this time has elapsed, attesters should broadcast their attestation reflecting their local view of the chain. 

This &#34;race &#34;between the proposer and the attesters will be important later when we talk about incentives proposers have around timing the release of their own block and the impact this has on block production.

### Broadcast aggregated attestation

A key design goal of Ethereum &#39;s consensus is to scale to a large, diverse validator set across many logically different entities to maximize decentralization. Doing so makes it substantially harder to attack the protocol. 

The proof-of-stake protocol employs a hierarchical network design in order to deal with the large message load induced by the large validator set. This design is realized via &#34;subnets &#34;of the broader gossip network where only a fraction of the entire attester set publishes their individual attestations. This division is a scaling technique as only a subset of all nodes on the network need to deal with the full load of the protocol. If there is an &#34;aggregation factor &#34;of `A` (e.g. 64 on mainnet), then the validator set can be `A` times bigger given the same set of computational resources contributed by that set.

However, block producers still need to get the full message set and the bridge from the subnets to the global attestation channel with all messages is established by an &#34;aggregator &#34;role that exists at the network level. 
An attestation aggregator is pseudo-randomly selected from the attesters in a given committee and their job is to listen to the appropriate subnet and aggregate attestations from individual committee members into a single attestation. (There is [some cool cryptography](https://hackmd.io/@benjaminion/bls12-381) that makes this aggregation possible, even if relatively expensive.)

This aggregate attestation is what is forwarded to *all* validators, including the proposer for the next slot who can then include this contribution on-chain. Honest aggregators are expected to do this at `2/3 * SECONDS_PER_SLOT` from the start of the slot.

It is worth repeating: even if a node is not proposing (or even attesting) in the next slot, the attestations collected from the network at this stage do influence each node &#39;s fork choice. In extreme cases, a single attestation received could cause a reorg of the chain.

### Repeat

The next proposer for slot `S + 1` should be ready and waiting for the start of `S + 1` to repeat the cycle by running the fork choice given their local view (incorporating any new attestation information), assembling a full block and broadcasting this block to advance the state of chain.

Time is a flat circle.

## Architecture of the Merge

To understand the various steps of block production we need a clear idea of the software components found in Ethereum implementations. This section describes the most common patterns found in clients today.

### All good things have layers

The move to proof-of-stake transitions Ethereum from a single, monolithic chain to one that has multiple, specialized layers. The main layers to be aware of are the *consensus layer (CL)* and the *execution layer (EL)*. There are a set of *consensus clients* and *execution clients* that implement the functionality of each layer. Taken together, they implement the Ethereum protocol. 

These clients communicate over the [Engine API](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md). This architecture lets each client specialize in their respective domain -- CL clients handle the proof-of-stake protocol while outsourcing execution concerns to the EL clients. 

Another important element is the *validator client (VC)*. This piece of software separates the high-security concerns of validating the chain from the relatively lower-security concern of just following the consensus as a full node. There is a [Beacon API](https://ethereum.github.io/beacon-APIs) that VCs commonly use to talk to a local CL client.

As a diagram:

![](https://storage.googleapis.com/ethereum-hackmd/upload_b13075221c0253487e8702b134686286.png)

One subtlety worth noticing is that each layer peers with other clients of the same type across the public internet but communication across layers only happens locally.

### How do the layers communicate?

All of the communication described so far is between a consensus client and an attached validator client communicating over the Beacon API. The consensus clients in this network form the gossip &#34;mesh &#34;so that validator clients are not directly connected to the public internet.

After the Merge, a consensus client must have an attached execution client as post-Merge blocks will have execution data in them that only the execution client can verify. A consensus client cannot include a block into the fork choice computation without having the full verification performed. Moreover, an execution client is not passing around blocks from the consensus layer to respect the separation of concerns. Consensus layer blocks are only gossiped at that layer and transactions are only gossiped at the execution layer.

The Engine API facilitates this communication where there are high-level flows for the consensus layer to learn &#34;is this execution payload valid?&#34;and for the execution layer to learn &#34;ok, the fork choice has updated to this head &#34;. These flows correspond to two Engine API methods: [`engine_newPayload`](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md#engine_newpayloadv1) and [`engine_forkchoiceUpdated`](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md#engine_forkchoiceupdatedv1).

### Better together

Let &#39;s examine how the consensus client and execution client can work together to verify a full post-Merge block.

Upon receiving a block, a consenus client can validate the consensus data but must defer to the local execution client to determine the validity of the execution payload. The execution client is notified via `engine_newPayload` which responds with the validation status. 

If the full block is valid, then the consensus client can add it to its block tree where it can become a candidate for the new head of the chain. In the default case where the canonical chain is extended by this incoming block, the fork choice yields this block as the new head and issues a separate call using the `engine_forkchoiceUpdated` method to inform the execution client of this outcome.

This new verification flow extends our timing diagram:

![](https://storage.googleapis.com/ethereum-hackmd/upload_5d3c1122835d70c05e7b8839249fdda9.png)

The fork choice in slot `S` reflects any blocks and attestations collected in slot `S - 1` and the result of the fork choice is sent to the execution client in the call to `engine_forkchoiceUpdated`. This diagram includes a propagation latency `d` which represents the time it takes for the block produced by the proposer of slot `S` to travel around the gossip network to a different node who would then verify the block according to the marker after the delay. This step is where the consensus node, after validating the consensus data in the block, needs to make a call to notify the execution node about the new payload with `engine_newPayload`. If the payload is valid, then the consensus node will include the block into its block tree as a candidate for the head of the chain during the next evaluation of the fork choice.

## Block production in detail

We will now examine block production in detail and see how a proposer uses the Engine API to orchestrate block production.

To begin the process, we enter a slot `S` in which a validator has learned of a proposal assignment. The validator client managing this validator has learned of the assigned duty by calling the [`getProposerDuties` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Validator/getProposerDuties) ahead of time.

For reasons that will become clear later, the validator client is responsible for issuing two messages. The first uses [`prepareBeaconProposer` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Validator/prepareBeaconProposer) to send data that is validator-dependent but is required when building an execution payload. The second uses the [`produceBlock` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Validator/produceBlockV2) to signal to the consensus client that it should start building a valid block. 

The `prepareBeaconProposer` call includes the `fee_recipient` the validator chooses for this execution payload. 
This field refers to the execution layer address the validator wants any EIP-1559 tips to go to.
These tips include priority fees and any MEV in the block so validators will want to select an EL address they control to maximize revenue.

### Assembling the consensus envelope

The consensus client begins the build process upon receipt of the `produceBlock` call. This call can race with the consensus client &#39;s execution of the fork choice so servicing the `produceBlock` request should block until the fork choice in slot `S` has been determined.

This part of the build process will fill in a `BeaconBlock` up to the `execution_payload` based on the current state of the consensus client. 

:::spoiler Click here to see definitions of block data
- Beacon block header
    - https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#beaconblock
- Beacon block body
    - https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#beaconblockbody
- With extensions for `altair` fork
    - https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.md#beaconblockbody
- With extensions for `bellatrix` fork
    - https://github.com/ethereum/consensus-specs/blob/dev/specs/bellatrix/beacon-chain.md#beaconblockbody
:::

#### Validator inputs

The `produceBlock` call requires the following input from the validator:

- `slot` 
- `randao_reveal` 
- `graffiti` 

The `slot` identifies which the block proposal corresponding to this request. The `randao_reveal` is this validator &#39;s contribution to the on-chain randomness. This data is verifiably linked to the validator &#39;s private signing key and is a pure function of the current epoch. The `graffiti` is 32 bytes of the validator &#39;s choosing to be included in the proposal. This field is optional and if not provided a consensus client can choose whatever they see fit.

#### Deterministic CL inputs

Based on the request &#39;s data and the beacon state for the requested `slot`, the beacon block will have the following additonal data fixed:

- `proposer_index`
- `parent_root`

The following inputs are also deterministic in the sense that they are derived from the corresponding execution state to the beacon state in `slot`. An execution client could then produce:

- `eth1_data`
- `deposits`

These fields currently faciliate one-way deposits from the EL into the CL.

#### Nondeterministic CL inputs

The remainder of the CL operations are gathered from local mempools containing messages that have been observed via gossip. These fields are:

- `proposer_slashings`
- `attester_slashings`
- `attestations`
- `voluntary_exits`
- `sync_aggregate`

These inputs support execution of the proof-of-stake consensus, exits from the validator set and efficient light clients of the consensus chain.
There are conditions on assembling valid inputs here but this is out of scope for this document which focuses on the end-to-end orchestration of block production after the Merge with an emphasis on getting user transactions on-chain. 

:::spoiler Click here to learn more about the details of building a consensus block
- https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#block-proposal
- https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/validator.md#block-proposal
- https://lighthouse-blog.sigmaprime.io/attestation-packing.html
- Optimizing Eth2 by Michael Sproul (Devcon5): https://www.youtube.com/watch?v=68s_hdM4fHY
:::

### Orchestrating the execution payload build

After performing the previous steps, a consensus client will have a `BeaconBlock` without an `execution_payload`. It is the responsibility of the execution client to build this payload. The communication flow that supports this build process is structured across two messages of the Engine API. Having two messages allows for an asynchronous build process that allows the execution client a maximum amount of time to build the most valuable payload it can to maximize a proposer &#39;s revenue.

To dispatch the build, the consensus client uses the `engine_forkchoiceUpdated` method we have already seen. The semantics of this method allow for an optional [`PayloadAttributes`](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md#payloadattributesv1) that contain the relevant consensus information required to build a valid execution payload. 

We already saw `engine_forkchoiceUpdated` in the normal operation of advancing the head of the canonical chain. The idea here is that a consensus client can &#34;piggyback &#34;onto this message when it knows it has a proposer expecting a payload. The consensus client learns it has a proposer in a given slot by tracking `prepareBeaconProposer` messages we saw previously.

Reusing the `engine_forkchoiceUpdated` method helps performance by avoiding a separate round trip of communication to signal a payload build. The reuse also avoids race conditions between what would otherwise be multiple calls in parallel. This method call returns an opaque `PayloadId` that uniquely refers to the payload the execution client has started building in response to the `PayloadAttributes`.

To retrieve the payload, the consensus client can use this `PayloadId` along with the second message involved in the build process: the [`engine_getPayload` method of the Engine API](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md#engine_getpayloadv1).

### Assembling the execution payload

Let &#39;s now examine the mechanics of the execution client to understand how an execution payload is made.

#### Validator inputs

The validator can provide direct inputs for the execution payload:

- `fee_recipient`
- `extra_data`
- `gas_limit`

We already saw that the `fee_recipient` comes from the `PayloadAttributes` sent from the consensus client in the `engine_forkchoiceUpdated` message (and that the consensus client got this information from the `prepareBeaconProposer` message). It is referred to as a `suggestedFeeRecipient` in the Engine API to reflect the fact that the execution client may use a different fee recipient than the one provided here. This flexibility supports diversity in payload builder designs.

The `extra_data` is similar to the beacon block &#39;s `graffiti` and is between 0 and 32 bytes of the validator &#39;s choosing. Today &#39;s client implementations make it a bit tricky to configure `extra_data` per validator but there is ongoing work to extend the Engine API to support this use case.

A validator should be able to choose a `gas_limit` the execution client should respect when deciding which transactions to put into a block. The `gas_limit` is something that traditionally has been under control of the miners and it makes sense to move this responsibility to validators with the Merge. The execution client has protocol rules to follow around how much the `gas_limit` can change from block to block, but to the extent possible it should move the proposal &#39;s `gas_limit` to be in line with this proposer &#39;s preference. There is not a direct way to set the `gas_limit` per validator but there is ongoing work to extend the Engine API for this use case.

#### Deterministic CL inputs

There are only a few inputs the EL requires from the CL to build a valid payload:

- `timestamp`
- `prev_randao`
- `parent_hash`

The `timestamp` refers to a &#34;legacy &#34;field of the proof-of-work chain where a miner could include some timestamp to serve as an oracle of time off-chain.
With the Merge, this field simply becomes a pure function of the current `slot`, i.e. the wall clock time corresponding to the start of `slot`.

The `prev_randao` is the `randao_mix` from the beacon state as of the previous slot `S - 1` and provides a source of weak randomness on-chain.

The `parent_hash` is exactly the `headBlockHash` from the `engine_forkchoiceUpdated` call that triggers the build process.

#### Determinstic EL inputs

The `parent_hash` fixes a particular execution state to build on top of. Fixing this state also fixes the following data:

- `block_number`
- `base_fee_per_gas`

The `block_number` is simply the increment of the parent &#39;s block number. And EIP-1559 specifies a deterministic formula for deciding a block &#39;s `base_fee_per_gas` given the parent &#39;s `base_fee_per_gas` and the parent &#39;s `gas_used`.

#### Nondeterministic EL inputs

- `transactions`

The prior inputs fix the execution context and now it is the job of the payload builder to select the `transactions` they wish to put into the block. The builder has freedom to include (or not!) any valid transactions they have at hand as long as they consume no more gas than the declared `gas_limit`. Selecting a transaction set can be a very involved process and doing so efficiently to maximize revenue merits its own article (incoming!). For the purposes of this article, we see how a transaction we make ends up actually getting into a block: via inclusion in this list by the builder of this payload.

### Sealing the complete block

Given all of the above inputs, an execution client can compute the remaining fields of the execution payload after applying the selected transactions against the head execution state.

- `state_root`
- `receipts_root`
- `logs_bloom`
- `gas_used`
- `block_hash`

These fields all commit to particular outputs of the EVM after applying the state transition implicit in the sequence of `transactions`. The `block_hash` itself functions as a succinct commitment to everything in this execution block.
   
Having built a valid execution payload, the execution client waits for an `engine_getPayload` message with the `PayloadId` associated with this build and returns the full payload to the consensus client. 

The consensus client can finally(!) fill the remainder of the beacon block and compute the `state_root` of the beacon state after applying the complete proposal.

With a complete beacon block, the consensus client can answer the `produceBlock` request. The validator client at this point signs the block as a &#34;seal &#34;, conferring the cryptoecononimc weight of the validator &#39;s stake onto the block.

To complete the block production process, the validator client returns the signed beacon block via the [`publishBlock` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Beacon/publishBlock) where the consensus client can broadcast the signed block via gossip to its peers.

## Optimizations for block production

We have seen the full lifecycle of block production beginning in the proposer &#39;s slot and tracing the data flow across layers of the protocol stack until a signed block is broadcast. Assuming we want to maximize the value a proposer collects from a given block and knowing that in general more time to build a payload will yield a more valuable payload, it is natural to ask how early we can begin the execution build process.

To answer this question, we can look at the execution inputs just identified:

- `fee_recipient`
- `extra_data`
- `gas_limit`
- `timestamp`
- `prev_randao`
- `parent_hash`

Let &#39;s assume we have the `extra_data` and `gas_limit` fields ahead of time. They will generally be set upon boot of the execution node and not change throughout the node &#39;s lifetime. The `fee_recipient` came from the `prepareBeaconProser` message which we saw can be sent separately to the rest of the orchestration messages. And in fact, the spec currently dictates 3 epochs of persistence for this message so it can be sent well in advance. Handling the `fee_recipient` this way takes it off the &#34;critical path &#34;of block production so helps performance overall.

The remaining inputs are all determined by the beacon state that serves as input to the state transition of the proposal &#39;s slot. This state determines the proposer shuffling which gives us the target `slot` so that we can compute the `timetamp` and select the `prev_randao`. This state also references the proposal &#39;s `parent_hash`.

Our question now becomes: how early do we know this input beacon state for a proposal in slot `S`? As soon as we can compute the head of slot `S - 1`. And this suggests a proposer can optimistically start a build process in the slot prior to its target slot.

Assuming a proposer can accept the re-org risk of about 1 slot (which is quite low), then a consensus client can be configured to attach the appropriate `PayloadAttributes` to an `engine_forkchoiceUpdated` call as soon as the block in slot `S - 1` has been processed, rather than waiting for the next slot. And in fact, this is how the execution payload build process is implemented in clients today.

Putting everything together, we get a timing diagram that looks like this:

![](https://storage.googleapis.com/ethereum-hackmd/upload_940583e26ce53d66917444ea3cac60af.png)

We see that at the cost of an additional `engine_forkchoiceUpdated`, the execution client gets much more time to build a payload rather then essentially doing it inline during the slot of the proposal.

## An external builder network

So far, we have explored block production in the context of a consensus client working with a local execution client as directed by a validator client to build blocks to propose for inclusion into the canonical chain. It turns out that the task of constructing an execution payload is valuable enough to support a set of actors (referred to as &#34;builders &#34;) outside of consensus who specialize in crafting the most valuable payloads they can.

To avoid centralization pressures that would colocate proposers with these builders (as the outsized returns from sophisticated building would encourage pooling of stake), a second pathway has been specified in the Beacon API that connects any proposer with this &#34;external builder &#34;network. This pathway will not be live until the Merge but we can expect any rational validator to take advantage of it.

This pathway follows a similar design to the pathway we have looked at so far. Common designs as popularized by [Flashbot &#39;s `mev-boost`](https://github.com/flashbots/mev-boost/) involve another software component that handles communication between the local validator client and the external builder network as a &#34;sidecar &#34;.

This extends our earlier architecture diagram:

![](https://storage.googleapis.com/ethereum-hackmd/upload_7b60a30733135ba31003f2e1110c5302.png)


### A second block production pathway

Rather than a local `prepareBeaconProposer` message, validators send a [`registerValidator` message from the Beacon API](https://ethereum.github.io/beacon-APIs/#/Validator/registerValidator) to upstream their building preferences to this external network. This message is assumed to be sent and propagated throughout the builder network well ahead of the actual proposal slot just like the `prepareBeaconProposer` message. The relevant data in this message for the payload construction process are the `fee_recipient` and the `gas_limit` which function the same way as discussed above. 

To signal that a validator wishes to use the external builder network in lieu of the local execution client, it calls the [`produceBlindedBlock` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Validator/produceBlindedBlock). This method has the same inputs as the `produceBlock` method but instructs the consensus client to produce a &#34;blinded &#34;block. In order to ensure any proposer can participate in this network, the data flow resembles a &#34;commit-reveal &#34;scheme where the builder network produces payloads in the first step that commit to a given transaction set but do not reveal this set to the proposer. This way a proposer cannot &#34;steal &#34;the output of the builder &#39;s work for themselves. To opt-in to a given built payload, the proposer can respond with a signature that binds them to this committed transaction set (and the rest of the complete block). Once the proposer has released a signature for the block, the payload can be made public and anyone can assemble the corresponding `SignedBeaconBlock`.

The implementation of `produceBlindedBlock` works similarly to the local pathway, with the exception of calling out to the external builder network for the execution payload rather than the local execution client. Rather than calling `engine_getPayload` with some local `PayloadId`, the consensus client knows to instead call external builder software that implements the [Builder API](https://ethereum.github.io/builder-specs/), an interface connecting proposers to builders on this network.
This API exposes a method [`getHeader` from the Builder API](https://ethereum.github.io/builder-specs/#/Builder/getHeader) to fetch the best execution payload header that builders can offer for the given slot. This header is included in the `BlindedBeaconBlock` that the proposer can then sign. Once signed, they can upstream the `SignedBlindedBeaconBlock` to the builder network with the [`publishBlindedBlock` method of the Beacon API](https://ethereum.github.io/beacon-APIs/#/Beacon/publishBlindedBlock) which in turn calls the [`submitBlindedBlock` method of the Builder API](https://ethereum.github.io/builder-specs/#/Builder/submitBlindedBlock). Once builders have the blinded block, they are free to release the &#34;unblinded &#34;execution payload so that anyone (including themselves) can assemble the `SignedBeaconBlock` the network is waiting for and broadcast it.
This pathway adds an additional roundtrip of communication compared to the local pathway but builders are expected to provide highly available and low (enough) latency services so their blocks are included in the chain. The value-add from specialized building should be enough of an incentive for proposers to use this service, even if it adds a small amount of end-to-end latency to the full block production pipeline.

## Further considerations

The block production process described so far assumes the optimal case where the next block in the chain simply extends the canonical chain by following the specification. In this honest setting we have continuity in the protocol so implementations have some predictive power to ensure smooth production of blockspace. 

Block producers should be prepared to handle a variety of conditions outside this honest setting, either via accidental or adversarial behavior, so we will explore some additional points before concluding.

### Proposer lookahead

This first point is a subtlety of the consensus protocol itself. There is one &#34;ambient &#34;input to the block production process that was not explicitly called out as it fundamentally determines when a validator should propose: the proposer shuffling.

This shuffling *technically* has no lookahead due to a corner of the consensus protocol design, unlike the other shufflings in the protcol that have at least one epoch (if not much more) lookahead so validators have ample time to prepare.

The lookahead on proposer duties is given by using a RANDAO input from a past epoch, just like the attestation duties. The wrinkle appears when we realize that proposers are selected not only via a shuffling driven by RANDAO but also in proportion to their balance. These balances can change when processing the results of an epoch. In the *worst* case, enough balances change that the proposer shuffling computed in epoch `E - 1` differs from the proposer shuffling computed in epoch `E`.

The chances of this happening seem relatively low (there is a &#34;hysteresis &#34;applied so balances aren &#39;t a source of frequent thrash) and a straightforward analysis of the chain to date would provide empirical data to back up this intuition (research incoming!). However, for completeness, a block producer would want to keep track of the likelihood of the shuffling changing and be prepared to quickly update any work they do ahead of time. Regardless of what the shuffling ends up being, it is fixed for the entire epoch so this consideration applies to early-epoch proposers more than late-epoch proposers.

### Reorgs

We saw all parameters of the build process are highly sensitive to the current state of the chain. If a reorg occurs that switches from one head to another in the block tree, there will be a different head state to build upon which means a different set of inputs to the build process. As discussed above, reorgs in Ethereum after the Merge occur in response to the attestation flow a local consensus client sees. The timing of attestation production and processing via the call to the fork choice then become critical junctures where a proposer may need to start building upon a different head of the chain. In the worst case, block production software needs to be tolerant to the situation where it thinks the proposer at slot `S` is one validator but a reorg at the start of slot `S` moves the chain head elsewhere with divergent shuffling.

Well-resourced block builders, like those in the external builder network, will likely have blocks built on all possible heads of the chain to anticipate a request across any chain tip. Sophisticated builders could even try to predict the &#34;reorg probability &#34;and use this distribution to direct computational resources to one payload over another.

Local execution clients should be assumed to not have as many resources available (as it helps decentralization to not require it up front) and will likely only build on top of one head in response to an appropriate `engine_forkchoiceUpdated` call. In the worst case, a local execution client will have to respond to a quick succession of `engine_forkchoiceUpdated` and `engine_getPayload` where they may only have time to build a (nearly) empty execution payload.

&gt;TODO: consider: can motivate all of the earlier material on attestation timing/model by making a stronger tie-in here

### Timing of broadcast

Proposers have some flexibility in the exact time they release their block to the network. The honest behavior is to produce and then broadcast the block as close to the start of the slot as possible. But it is possible a proposer is behind on this schedule for a number of reasons including a spiking load (e.g. from epoch processing) or simply network latency that increases propagation time. 

If we consider the situation where a new block reaches only some attesters before the honest attesters are expected to broadcast their own attestations, you can see the possibility for a race condition. There is a lot of nuance here in the interplay between when a block can be accepted against what fraction of the network has attested to what view of the chain, but ultimately a late broadcast can trigger a reorg where all of the prior considerations for block production apply.

This feature is worth calling out explicitly because there is an additional incentive post-Merge for a proposer to delay their broadcast as much as possible to allow for the construction of an increasingly more valuable payload. The only real back-pressure for the time being (there are proposals to harden the fork choice to this behavior) is the risk of being orphaned in the event a proposer broadcasting right at the deadline does not make it into enough attesters &#39;views in time. But assuming you can manage the orphan-risk (i.e. well-capitalized builders) then in the same breath this flexibility can be exploited as an optimization to make more valuable blocks.

&gt;TODO: consider: can motivate all of the earlier material on attestation timing/model by making a stronger tie-in here

### External builder failure

Proposers who wish to use the external builder network may collect outsized revenue but do take on some additional amount of risk. There are two primary failure modes of this pathway: an availability failure of the provided payloads and simple software failure that prohibit proper functioning in the first place.

We saw earlier how proposers enter into a &#34;commit-reveal &#34;game with builders to prevent stealing of valuable payloads. Proposers take on counterparty risk in this game that the builder will release the transaction set in time for the rest of the network to incorporate the &#34;unblinded &#34;block into their local view. A failure here is tricky to mitigate as a proposer who signs a blinded block cannot make a different block for their slot. Operators of this network can deploy increasingly sophisticated techniques to ensure availability but at the time of the Merge the network relies on a fully trusted model. In the early days, builders with good reputation will be preferred to reduce exposure to this risk.

Aside from availability concerns, there could simply be a failure at some point in the interaction between the proposer and the external builder network. In this event, no block would be produced and would result in a liveness fault in the chain. Honest proposers are instructed to build an execution payload in parallel and fall back to this payload after some timeout to mitigate this risk. It is assumed reputable actors in the builder network will have low failure rates but they will never be 0% so the local fallback for proposers is critical to ensure the chain &#39;s liveness.

## Conclusion

We have looked at the end-to-end block production process that gets a transaction from the mempool into the canonical chain. The specifics of the Merge software architecture gave us a canvas to illustrate how the various components are orchestrated and an analysis of the inputs at each stage revealed some nice optimizations to ensure quality block production. The exploration of the honest behavior set the stage for behavior at the edges that any block producer should be aware of when performing their role. Hopefully you feel you understand the process a bit better and that this article can serve as a useful reference.</div>
        
