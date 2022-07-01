---
title: Backbone Network Reference Verion 01.05.PC
version: 2022.05.11, 2022.06.01
author: CommoidtyStream, Inc
license: COPYRIGHT 2022, CommoidtyStream, Inc.
sidebar_position: 1
id: protocol-backbonev01
description: Contributing and Community Dogma and Social Rules
---

# Backbone Network Reference

v1.05 Specification Document

> click to expand TOC

<details>
<summary>Table of Contents</summary>

**Describe the bug** A clear and concise description of what the bug is.

-   [Backbone Network Reference](#backbone-network-reference)
    -   [Mempool behavior](#mempool-behavior)
    -   [Removing and replacing transactions](#removing-and-replacing-transactions)
    *   [Automatic error messages](#automatic-error-messages)
        -   [Logging](#logging)
    *   [Supported hardforks](#supported-hardforks)
        -   [Transaction ordering](#transaction-ordering)
    *   [Golang](#golang)
-   [Custom RPC Methods](#custom-rpc-methods)
    -   [Flashbots/MEV Geth RPC Methods](#flashbots-mev-geth-rpc-methods)
        -   [`eth_sendBundle`](#-eth-sendbundle-)
        -   [`eth_callBundle`](#-eth-callbundle-)
        -   [`eth_callMultiBundle`](#-eth-callmultibundle-)
    -   [Manifold Backbone Methods](#manifold-backbone-methods)
        -   [`manifold_dropTransaction`](#-manifold-droptransaction-)
        -   [`manifold_evictTransaction`](#-manifold-evicttransaction-)
        -   [`manifold_setLoggingEnabled`](#-manifold-setloggingenabled-)
        -   [`manifold_CreateAccessList`](#-manifold-createaccesslist-)
        -   [`eth_multiCall`](#-eth-multicall-)
    -   [Parity Methods](#parity-methods)
        -   [`trace_call`](#-trace-call-)
            -   [Parameters](#parameters)
            -   [Returns](#returns)
            -   [Request](#request)
                -   [Response](#response)
        -   [`trace_callMany`](#-trace-callmany-)
            -   [Parameters](#parameters-1)
            -   [Returns](#returns-1)
            -   [Request](#request-1)
            -   [Response](#response-1)
        -   [`trace_rawTransaction`](#-trace-rawtransaction-)
            -   [`Parameters`](#-parameters-)
            -   [Returns](#returns-2)
            -   [Request](#request-2)
        -   [`trace_replayBlockTransactions`](#-trace-replayblocktransactions-)
            -   [Parameters](#parameters-2)
            -   [Returns](#returns-3)
            -   [Request](#request-3)
            -   [Response](#response-2)
        -   [`trace_replayTransaction`](#-trace-replaytransaction-)
            -   [Parameters](#parameters-3)
            -   [Returns](#returns-4)
            -   [Request](#request-4)
            -   [Response](#response-3)
        -   [`trace_block`](#-trace-block-)
            -   [Parameters](#parameters-4)
            -   [Returns](#returns-5)
            -   [Request](#request-5)
            -   [Response](#response-4)
        -   [`trace_filter`](#-trace-filter-)
            -   [Parameters](#parameters-5)
            -   [Returns](#returns-6)
            -   [Request](#request-6)
            -   [Response](#response-5)
        -   [`trace_get`](#-trace-get-)
            -   [Parameters](#parameters-6)
            -   [Returns](#returns-7)
            -   [Request](#request-7)
            -   [Response](#response-6)
        -   [`trace_transaction`](#-trace-transaction-)
            -   [Parameters](#parameters-7)
            -   [Returns](#returns-8)
            -   [Request](#request-8)
    -   [Relay Switchboard](#relay-switchboard)
    -   [Global Virtual Mempool](#global-virtual-mempool)
        -   [`manifold_txpool_health`](#-manifold-txpool-health-)
        -   [`manifold_txpool_map`](#-manifold-txpool-map-)
            -   [Parameters](#parameters-8)
        -   [`manifold_txpool_search`](#-manifold-txpool-search-)
            -   [Parameters](#parameters-9)
-   [Statediff](#statediff)
    -   [Statediff object](#statediff-object)
    -   [Usage](#usage)
        -   [CLI configuration](#cli-configuration)
        -   [RPC endpoints](#rpc-endpoints)
            -   [Subscription endpoint](#subscription-endpoint)
            -   [Unary endpoints](#unary-endpoints)
        -   [Direct indexing into Postgres](#direct-indexing-into-postgres)
            -   [Postgres setup](#postgres-setup)
            -   [Schema overview](#schema-overview)
        -   [Optimization](#optimization)
    -   [HEX value encoding](#hex-value-encoding)
    -   [Appendix](#appendix)
    </details>

## Overview

### Features

-   **CDN**: CDN like block propagation network that utilizes optimizations for filtering and connecting nodes, i.e. using eth2 bitvector attrs for node connectivity

-   **Front-running protection:** transactions will not be seen by generalized bots in the public mempool.

-   **No failed transactions:** transactions will only be mined if it doesn't include any reverts, so users don't pay for failed transactions. Note: transactions could be included in uncle blocks, emitted to the mempool, and then included on-chain.

-   **Priority in blocks**: transactions sent via SecureRPC are mined either at the top OR bottom of blocks, giving end users flexability in their use caes.

-   **Transaction Status integration:** users can see the status of their transactions on either Etherscan or via our API.

-   **Backfilling**

### Mempool behavior

When `OpenMEV` is _disabled_, every sent transaction is added to the mempool, which contains all the transactions that could be mined in the future. By default, Backbone Network's mempool follows the same rules as Geth. This means, among other things, that:

-   Transactions with a higher gas price are included first

-   If two transactions can be included and both are offering the miner the same total fees, the one that was received first is included first

-   If a transaction is invalid (for example, its nonce is lower than the nonce of the address that sent it), the transaction is dropped.

You can get the list of pending transactions that will be included in the next block by using the "pending" block tag:

```ts twoslash
const pendingBlock = await network.provider.send("eth_getBlockByNumber", ["pending", false]);
```

```ts twoslash
const pendingBlock = await ethers.provider.send("eth_getBlockByNumber", ["latest", false]);
blockGasLimit = BigNumber.from(pendingBlock.gasLimit);
```

### Transaction ordering

Backbone Network can sort mempool transactions in two different ways. How they are sorted will alter which transactions from the mempool get included in the next block, and in which order.

The first ordering mode, called `"priority"`, mimics Geth's behavior. This means that it prioritizes transactions based on the fees paid to the miner. This is the default.

The second ordering mode, called `"fifo"`, keeps the mempool transactions sorted in the order they arrive.

> [see https://brandur.org/nanoglyphs/027-15-minutes#randomness](https://brandur.org/nanoglyphs/027-15-minutes#randomness)

### Transaction ID's

[see https://www.cockroachlabs.com/blog/how-to-choose-db-index-keys/](https://www.cockroachlabs.com/blog/how-to-choose-db-index-keys/)

-   Uses Crockford's base32 for better efficiency and readability (5 bits per character).
-   Case insensitive.
-   No special characters (URL safe).
-   Monotonic sort order (correctly detects and handles the same millisecond).

Notes: [see postgres ext. that uses ID's that wrap around every 45 days, maybe for consideration as thats when we remove data?](https://github.com/tvondra/sequential-uuids#design)

### Removing and replacing transactions

Transactions in the mempool can be removed using the `manifold_dropTransaction` method:

```typescript
const txHash = "0xabc...";
await network.provider.send("hardhat_dropTransaction", [txHash]);
```

You can also replace a transaction by sending a new one with the same nonce as the one that it's already in the mempool but with a higher gas price. Keep in mind that, like in Go-Ethereum, for this to work the new gas/fees prices have to be at least 10% higher than the gas price of the current transaction.

## Automatic error messages

Backbone Network always knows why your transaction or call failed, and it uses this information to make debugging your contracts easier.

When a transaction fails without a reason, Backbone Network will create a clear error message in the following cases:

-   Calling a non-payable function with ETH
-   Sending ETH to a contract without a payable fallback or receive function
-   Calling a non-existent function when there's no fallback function
-   Calling a function with incorrect parameters
-   Calling an external function that doesn't return the right amount of data
-   Calling an external function on a non-contract account
-   Failing to execute an external call because of its parameters (e.g. trying to send too much ETH)
-   Calling a library without `DELEGATECALL`
-   Incorrectly calling a precompiled contract
-   Trying to deploy a contract that exceeds the bytecode size limit imposed by `EIP-170`

### Logging

Backbone Network uses its tracing infrastructure to offer rich logging that will help you develop and debug smart contracts.

For example, a successful transaction and a failed call would look like this:

```bash
eth_sendTransaction
  Contract deployment: Greeter
  Contract address: 0x8858eeb3dfffa017d4bce9801d340d36cf895ccf
  Transaction: 0x7ea2754e53f09508d42bd3074046f90595bedd61fcdf75a4764453454733add0
  From: 0xc783df8a850f42e7f7e57013759c285caa701eb6
  Value: 0 ETH
  Gas used: 568851 of 2844255
  Block: #2 - Hash: 0x4847b316b12170c576999183da927c2f2056aa7d8f49f6e87430e6654a56dab0

  console.log:
    Deploying a Greeter with greeting: Hello, world!

eth_call
  Contract call: Greeter#greet
  From: 0xc783df8a850f42e7f7e57013759c285caa701eb6

  Error: VM Exception while processing transaction: revert Not feeling like it
      at Greeter.greet (contracts/Greeter.sol:14)
      at process._tickCallback (internal/process/next_tick.js:68:7)
```

## Supported hardforks

| Hardfork          | blockNumber |
| ----------------- | ----------- |
| FHomestead        | 1150000     |
| FTangerineWhistle | 2463000     |
| FSpuriousDragon   | 2675000     |
| FByzantium        | 4370000     |
| FConstantinople   | 7280000     |
| FPetersburg       | 7280000     |
| FIstanbul         | 9069000     |
| FMuirGlacier      | 9200000     |
| FBerlin           | 12244000    |
| FLondon           | 12965000    |
| FArrowGlacier     | 13773000    |

[^1](https://ethereum.github.io/yellowpaper/paper.pdf)

# Custom RPC Methods

## Flashbots/MEV Geth RPC Methods

### `eth_sendBundle`

> flashbots standard latest

`ethSendBundle` can be used to send your bundles to the relay.

### `eth_callBundle`

`eth_callBundle` can be used to simulate a bundle against a specific block number, including simulating a bundle at the top of the next block.

### `eth_callMultiBundle`

`eth_callMultiBundle` Multi CallBundle will simulate a bundle of transactions on top of the most recent block. Partially follows flashbots spec v0.5.

```golang
// CallBundleArgs represents the arguments for a bundle of calls.
type CallBundleArgs struct {
	Txs        []TransactionArgs `json:"txs"`
	Coinbase   *string           `json:"coinbase"`
	Timestamp  *uint64           `json:"timestamp"`
	Timeout    *int64            `json:"timeout"`
	GasLimit   *uint64           `json:"gasLimit"`
	Difficulty *big.Int          `json:"difficulty"`
	BaseFee    *big.Int          `json:"baseFee"`
}
```

## Manifold Backbone Methods

### `manifold_dropTransaction`

Remove a transaction from the mempool (must be signed by originating account)

### `manifold_evictTransaction`

Remove a transaction from the mempool (admin only)

### `manifold_setLoggingEnabled`

Enable or disable logging in Backbone Network (auth required)

### `manifold_CreateAccessList`

takes `eth_callBundle` and adds the arguments:

-   SimulationLogs bool
-   CreateAccessList bool

### `eth_multiCall`

implements `eth_call`. Executes a new message call immediately without creating a transaction on the block chain.

## Parity Methods

`trace_rawTransaction`

trace Transaction trace. An equivalent trace to that in the previous section. vmTrace Virtual Machine execution trace. Provides a full trace of the VM’s state throughout the execution of the transaction, including for any subcalls.

stateDiff State difference. Provides information detailing all altered portions of the Ethereum state made due to the execution of the transaction.

### `trace_call`

Executes the given call and returns a number of possible traces for it.

#### Parameters

| Parameters         | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| Object             | where `from` field is optional and `nonce` field is ommited.                      |
| Quantity, or 'tag' | Integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`. |
| Array              | Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.             |

#### Returns

-   `Array` - Block traces

#### Request

```bash
curl --data '{"method":"trace_call","params":[{ ... },["trace"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

##### Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [{
      "action": { ... },
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "type": "call"
    }],
    "vmTrace": null
  }
}
```

### `trace_callMany`

Performs multiple call traces on top of the same block. i.e. transaction `n` will be executed on top of a pending block with all `n-1` transactions applied (traced) first. Allows to trace dependent transactions.

#### Parameters

1.  `Array` - List of trace calls with the type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.
2.  `Quantity` or `Tag` - (optional) integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](https://openethereum.github.io/JSONRPC-trace-module#the-default-block-parameter).

```json
params: [
  [
    [
      {
        "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
        "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "value": "0x186a0"
      },
      ["trace"]
    ],
    [
      {
        "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
        "to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "value": "0x186a0"
      },
      ["trace"]
    ]
  ],
  "latest"
]
```

#### Returns

-   `Array` - Array of the given transactions’ traces

#### Request

```bash
curl --data '{"method":"trace_callMany","params":[[[{"from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1","to":"0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b","value":"0x186a0"},["trace"]],[{"from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1","to":"0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b","value":"0x186a0"},["trace"]]],"latest"],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

#### Response

```json
{
	"id": 1,
	"jsonrpc": "2.0",
	"result": [
		{
			"output": "0x",
			"stateDiff": null,
			"trace": [
				{
					"action": {
						"callType": "call",
						"from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
						"gas": "0x1dcd12f8",
						"input": "0x",
						"to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
						"value": "0x186a0"
					},
					"result": {
						"gasUsed": "0x0",
						"output": "0x"
					},
					"subtraces": 0,
					"traceAddress": [],
					"type": "call"
				}
			],
			"vmTrace": null
		},
		{
			"output": "0x",
			"stateDiff": null,
			"trace": [
				{
					"action": {
						"callType": "call",
						"from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
						"gas": "0x1dcd12f8",
						"input": "0x",
						"to": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
						"value": "0x186a0"
					},
					"result": {
						"gasUsed": "0x0",
						"output": "0x"
					},
					"subtraces": 0,
					"traceAddress": [],
					"type": "call"
				}
			],
			"vmTrace": null
		}
	]
}
```

---

### `trace_rawTransaction`

Traces a call to `eth_sendRawTransaction` without making the call, returning the traces

#### `Parameters`

1.  `Data` - Raw transaction data.
2.  `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.

```json
{
	"params": ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675", ["trace"]]
}
```

#### Returns

-   `Object` - Block traces.

#### Request

```bash
'{"method":"trace_rawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",["trace"]],"id":1,"jsonrpc":"2.0"}'
```

Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [{
      "action": { ... },
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "type": "call"
    }],
    "vmTrace": null
  }
}
```

### `trace_replayBlockTransactions`

Replays all transactions in a block returning the requested traces for each transaction.

#### Parameters

| Parameters         | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| Quantity, or 'tag' | Integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`. |
| Array              | Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.             |

```json
params: [
  "0x2ed119",
  ["trace"]
]
```

#### Returns

-   `Array` - Block transactions traces.

#### Request

```bash
curl --data '{"method":"trace_replayBlockTransactions","params":["0x2ed119",["trace"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

#### Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "output": "0x",
      "stateDiff": null,
      "trace": [{
        "action": { ... },
        "result": {
          "gasUsed": "0x0",
          "output": "0x"
        },
        "subtraces": 0,
        "traceAddress": [],
        "type": "call"
      }],
      "transactionHash": "0x...",
      "vmTrace": null
    },
    { ... }
  ]
}
```

### `trace_replayTransaction`

Replays a transaction, returning the traces.

#### Parameters

1.  `Hash` - Transaction hash.
2.  `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.

```json
{ "params": ["0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f", ["trace"]] }
```

#### Returns

-   `Object` - Block traces.

#### Request

```bash
curl --data '{"method":"trace_replayTransaction","params":["0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",["trace"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

#### Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [{
      "action": { ... },
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "type": "call"
    }],
    "vmTrace": null
  }
}
```

### `trace_block`

Returns traces created at given block.

#### Parameters

1.  `Quantity` or `Tag` - Integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`.

```json
"params": [
  "0x2ed119" // 3068185
]
```

#### Returns

-   `Array` - Block traces.

#### Request

```json
"{\"method\":\"trace_block\",\"params\":[\"0x2ed119\"],\"id\":1,\"jsonrpc\":\"2.0\"}"
```

#### Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0xaa7b131dc60b80d3cf5e59b5a21a666aa039c951",
        "gas": "0x0",
        "input": "0x",
        "to": "0xd40aba8166a212d6892125f079c33e6f5ca19814",
        "value": "0x4768d7effc3fbe"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x07da28d752aba3b9dd7060005e554719c6205c8a3aea358599fc9b245c52f1f6",
      "transactionPosition": 0,
      "type": "call"
    },
    ...
  ]
}
```

### `trace_filter`

Returns traces matching given filter

#### Parameters

| Parameter       | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| - `Object`      | The filter object                                                       |
| - `fromBlock`   | `Quantity` or `Tag` - (optional) From this block.                       |
| - `toBlock`     | `Quantity` or `Tag` - (optional) To this block.                         |
| - `fromAddress` | `Array` - (optional) Sent from these addresses.                         |
| - `toAddress`   | `Address` - (optional) Sent to these addresses.                         |
| - `after`       | `Quantity` - (optional) The offset trace number                         |
| - `count`       | `Quantity` - (optional) Integer number of traces to display in a batch. |

```json
params: [{
  "fromBlock": "0x2ed0c4", // 3068100
  "toBlock": "0x2ed128", // 3068200
  "toAddress": ["0x8bbB73BCB5d553B5A556358d27625323Fd781D37"],
  "after": 1000,
  "count": 100
}]
```

#### Returns

-   `Array` - Traces matching given filter

#### Request

```json
'{"method":"trace_filter","params":[{"fromBlock":"0x2ed0c4","toBlock":"0x2ed128","toAddress":["0x8bbB73BCB5d553B5A556358d27625323Fd781D37"],"after":1000,"count":100}],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json"
```

#### Response

```
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0x32be343b94f860124dc4fee278fdcbd38c102d88",
        "gas": "0x4c40d",
        "input": "0x",
        "to": "0x8bbb73bcb5d553b5a556358d27625323fd781d37",
        "value": "0x3f0650ec47fd240000"
      },
      "blockHash": "0x86df301bcdd8248d982dbf039f09faf792684e1aeee99d5b58b77d620008b80f",
      "blockNumber": 3068183,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x3321a7708b1083130bd78da0d62ead9f6683033231617c9d268e2c7e3fa6c104",
      "transactionPosition": 3,
      "type": "call"
    },
    ...
  ]
}
```

---

### `trace_get`

Returns trace at given position.

#### Parameters

| Name  | Required   | Description                    |
| ----- | ---------- | ------------------------------ |
| Hash  | Yes (req.) | Transaction hash.              |
| Array | Yes (req.) | Index positions of the traces. |

```json
params: [
  "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
  ["0x0"]
]
```

#### Returns

-   `Object` - Trace object

#### Request

```bash
curl --data '{"method":"trace_get","params":["0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",["0x0"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

#### Response

```json
{
	"id": 1,
	"jsonrpc": "2.0",
	"result": {
		"action": {
			"callType": "call",
			"from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
			"gas": "0x13e99",
			"input": "0x16c72721",
			"to": "0x2bd2326c993dfaef84f696526064ff22eba5b362",
			"value": "0x0"
		},
		"blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
		"blockNumber": 3068185,
		"result": {
			"gasUsed": "0x183",
			"output": "0x0000000000000000000000000000000000000000000000000000000000000001"
		},
		"subtraces": 0,
		"traceAddress": [0],
		"transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
		"transactionPosition": 2,
		"type": "call"
	}
}
```

### `trace_transaction`

Returns all traces of the given transaction

#### Parameters

1.  `Hash` - Transaction hash

```json
"params": ["0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3"]
```

#### Returns

-   `Array` - Traces of given transaction

#### Request

```bash
'{"method":"trace_transaction","params":["0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3"],"id":1,"jsonrpc":"2.0"}'
```

> Response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "gas": "0x13e99",
        "input": "0x16c72721",
        "to": "0x2bd2326c993dfaef84f696526064ff22eba5b362",
        "value": "0x0"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x183",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    },
    ...
  ]
}
```

## Relay Switchboard

> TODO

-   `eth_setRelayPeer`
-   `eth_getRelayPeer`
-   `eth_getRelayStats`

## Global Virtual Mempool

-   `manifold_txpool_health`
-   `manifold_txpool_map`
-   `manifold_txpool_search`

methods `manifold_txpool_*` are available only for users with access to SecureRPC

> curl -X POST -H 'Content-type: application/json' -d

### `manifold_txpool_health`

Returns the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.

> Request

```bash
'{"jsonrpc": "2.0", "method": "txpool_health", "id": 1}'
```

> Response

```json
{ "jsonrpc": "2.0", "id": 1, "result": { "pending": "0x1400", "queued": "0x400" } }
```

```bash
curl -X POST -H 'Content-type: application/json' -d '{"jsonrpc": "2.0", "method": "manifold_txpool_health", "id": 1}' https://q.securerpc.com/v1/eth/YOUR-APP-ID
```

```json
{ "jsonrpc": "2.0", "id": 1, "result": { "pending": "0xdc2e", "queued": "0xbbbe", "total": "0x197ec" } }
```

### `manifold_txpool_map`

Returns a list with the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.

#### Parameters

| Name   | Required      | Description                                     |
| ------ | ------------- | ----------------------------------------------- |
| offset | No (optional) | start index (default is == 0)                   |
| limit  | No (optional) | number of items to return (maxResults = 10_000) |

> Example

```bash
curl -X POST -H 'Content-type: application/json' -d '{"jsonrpc": "2.0", "method": "manifold_txpool_map", "params":[0, 10], "id": 1}' https://q.securerpc.com/v1/eth/YOUR-APP-ID
```

```json
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"pending": {
			"0x5f7a3238efb2d450be97afcf5b1dd34451024d860fe65a9eea1fe116508ec124": {
				"302213": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x077d360f11d220e4d5d831430c81c26c9be7c4a4",
					"gas": "0x15f90",
					"gasPrice": "0x9d21fb900",
					"hash": "0x5f7a3238efb2d450be97afcf5b1dd34451024d860fe65a9eea1fe116508ec124",
					"input": "0x",
					"nonce": "0x49c85",
					"to": "0xe0f70bc1c864b7ace8a80d454565ee5b6f68dfd4",
					"transactionIndex": null,
					"value": "0x388b7b360f3000",
					"type": "0x0",
					"v": "0x26",
					"r": "0x25e22877938610b58ed2f941399b551d9749030c2112f4845fe382ea504fa4bd",
					"s": "0x129832f580977771e1184b39d55a699700855562badb656a6c12d59d01efbd48"
				}
			},
			"0xe2e22009fc6ca711311b354f75c15de2a96cd8f8aea7f8baf91911881b5d78e1": {
				"315739": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x48c04ed5691981c42154c6167398f95e8f38a7ff",
					"gas": "0x2bf20",
					"gasPrice": "0x9d21fb900",
					"hash": "0xe2e22009fc6ca711311b354f75c15de2a96cd8f8aea7f8baf91911881b5d78e1",
					"input": "0xa9059cbb000000000000000000000000f8f0036fd0c89113ad06fec122ce8fc50c4bd8b500000000000000000000000000000000000000000000000000000000c20c945d",
					"nonce": "0x4d15b",
					"to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
					"transactionIndex": null,
					"value": "0x0",
					"type": "0x0",
					"v": "0x25",
					"r": "0x4c803af95903e07f34bc52db272015c5e3a3340f8ff8c436c970617e1179661f",
					"s": "0x2693cd957456b3481aefc968f1730ffdfb3bd81e6dc4115fc2771ccfa82d1b9a"
				}
			},
			"0xe5f74e7e3d8bbc47341e2c30d38166d7f7fa76807597acc9d2f5d0ede6f775b5": {
				"9": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x5060734d755a235b8fb6a2769824ee07ce1e0e1d",
					"gas": "0x5208",
					"gasPrice": "0x2cefb24a00",
					"maxFeePerGas": "0x2cefb24a00",
					"maxPriorityFeePerGas": "0x77359400",
					"hash": "0xe5f74e7e3d8bbc47341e2c30d38166d7f7fa76807597acc9d2f5d0ede6f775b5",
					"input": "0x",
					"nonce": "0x9",
					"to": "0x9ccf394fdbeec9926cb1ae877cc28c606fbd2cab",
					"transactionIndex": null,
					"value": "0x68ce6f220edaa",
					"type": "0x2",
					"accessList": [],
					"chainId": "0x1",
					"v": "0x0",
					"r": "0xc3f2cb393319e6506f0fb2ebc46c19d6ad2838577dcf8f049f00b8e117423c35",
					"s": "0x777c0ec1daf7ba7f030356a60ea3be11217fb319c77a5367e00a0423ae535636"
				}
			},
			"0x313cec5a71bfdbb3e50550f6289c1a0ab9b8150ada201f8eebebf6f1936fdac5": {
				"10": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x5060734d755a235b8fb6a2769824ee07ce1e0e1d",
					"gas": "0x5208",
					"gasPrice": "0x400746fe00",
					"maxFeePerGas": "0x400746fe00",
					"maxPriorityFeePerGas": "0x77359400",
					"hash": "0x313cec5a71bfdbb3e50550f6289c1a0ab9b8150ada201f8eebebf6f1936fdac5",
					"input": "0x",
					"nonce": "0xa",
					"to": "0x5060734d755a235b8fb6a2769824ee07ce1e0e1d",
					"transactionIndex": null,
					"value": "0x346fe398e12",
					"type": "0x2",
					"accessList": [],
					"chainId": "0x1",
					"v": "0x1",
					"r": "0x79f0f6dcd1cd931c8cd5ceaf86e412a0a60226cda3f82a064af71b86493601ee",
					"s": "0x291185c574299706653983845210e33629d428e5e4b92a5f0fcc6868a3427d7b"
				}
			},
			"0xfe972fd2b99babab1d0b038456c7d97a62714cbbf6983ad180cc2113b7d11ae8": {
				"11": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x5060734d755a235b8fb6a2769824ee07ce1e0e1d",
					"gas": "0x5208",
					"gasPrice": "0x13532f7e00",
					"maxFeePerGas": "0x13532f7e00",
					"maxPriorityFeePerGas": "0x77359400",
					"hash": "0xfe972fd2b99babab1d0b038456c7d97a62714cbbf6983ad180cc2113b7d11ae8",
					"input": "0x",
					"nonce": "0xb",
					"to": "0x5060734d755a235b8fb6a2769824ee07ce1e0e1d",
					"transactionIndex": null,
					"value": "0x34796070b78",
					"type": "0x2",
					"accessList": [],
					"chainId": "0x1",
					"v": "0x1",
					"r": "0x6f40aaf13320a8a05d9e2c123524f9204a09614c166e5979522cbfddc38528fe",
					"s": "0x393a10aeab49e2751f2db15e4f94a973730f1728a2b2b1db92b614f7e7cb4dae"
				}
			}
		}
	}
}
```

### `manifold_txpool_search`

Returns a list with the exact details of all the pending/queued transactions in the global public mempool. Takes parameters for input on search criteria.

#### Parameters

1: `from ` - (optional) exact match in the transaction 'from' property 2: `to` - (optional) exact match in the transaction 'to' property 3: `value` - (optional) exact match in the transaction 'value' property 4: `input` - (optional) wildcard match of the transaction 'input' data

> Example:

Sample usage how to get all pending/queued transactions to Uniswap V2 Router (0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D) with method call:

```solidity
swapExactTokensForTokens(uint256,uint256,address[],address,uint256)
```

This sample usage is often used during the `gasPrice` analyze of the arbitrages on Uniswap.

```bash
curl -X POST -H 'Content-type: application/json' -d '{"jsonrpc": "2.0", "method": "manifold_txpool_search", "params":[{"to": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", "input": "0x38ed1739*"}], "id": 1}' https://q.securerpc.com/v1/eth/YOUR-APP-ID
```

```json
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"pending": {
			"0x87b23e2124e50bc1e6539b61043f39e0071afd6f11311b19b29b865d6c138882": {
				"70223": {
					"blockHash": null,
					"blockNumber": null,
					"from": "0x98041ab523024dacaefa3bb70dd982dbac68e855",
					"gas": "0x61a80",
					"gasPrice": "0x14e7458a40",
					"maxFeePerGas": "0x14e7458a40",
					"maxPriorityFeePerGas": "0x14e7458a40",
					"hash": "0x87b23e2124e50bc1e6539b61043f39e0071afd6f11311b19b29b865d6c138882",
					"input": "0x38ed17390000000000000000000000000000000000000000000006999e1c5668566c39b6000000000000000000000000000000000000000000000035a83bffd099a3ffff00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000098041ab523024dacaefa3bb70dd982dbac68e85500000000000000000000000000000000000000000000000000000000624f1c5f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000853d955acef822db058eb8505911ed77f175b99e0000000000000000000000003432b6a60d23ca0dfca7761b7ab56459d9c964d0",
					"nonce": "0x1124f",
					"to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
					"transactionIndex": null,
					"value": "0x0",
					"type": "0x2",
					"accessList": [],
					"chainId": "0x1",
					"v": "0x1",
					"r": "0xf0eb5d621aeab0a952fcb233e271f9ca0f71e1acd39c91dcb4295fa966ea870e",
					"s": "0x6f238592d31ec1b36f9314a0eb6f190c6e833cfcebcbf66ebd95c8451630a3d3"
				}
			}
		},
		"queued": {}
	}
}
```

> Max results for `manifold_txpool_search` are limited to 10_000 results

# Statediff

> source: https://github.com/vulcanize/go-ethereum/blob/3aead03aeb0d22a0cec6f921fc301f2335e61bb5/statediff/README.md

This package provides an auxiliary service that asynchronously processes state diff objects from chain events, either relaying the state objects to RPC subscribers or writing them directly to Postgres as IPLD objects.

It also exposes RPC endpoints for fetching or writing to Postgres the state diff at a specific block height or for a specific block hash, this operates on historical block and state data and so depends on a complete state archive.

Data is emitted in this differential format in order to make it feasible to IPLD-ize and index the _entire_ Ethereum state (including intermediate state and storage trie nodes). If this state diff process is ran continuously from genesis, the entire state at any block can be materialized from the cumulative differentials up to that point.

## Statediff object

A state diff `StateObject` is the collection of all the state and storage trie nodes that have been updated in a given block. For convenience, we also associate these nodes with the block number and hash, and optionally the set of code hashes and code for any contracts deployed in this block.

A complete state diff `StateObject` will include all state and storage intermediate nodes, which is necessary for generating proofs and for traversing the tries.

```go
// StateObject is a collection of state (and linked storage nodes) as well as the associated block number, block hash,
// and a set of code hashes and their code
type StateObject struct {
	BlockNumber       *big.Int                `json:"blockNumber"     gencodec:"required"`
	BlockHash         common.Hash             `json:"blockHash"       gencodec:"required"`
	Nodes             []StateNode             `json:"nodes"           gencodec:"required"`
	CodeAndCodeHashes []CodeAndCodeHash       `json:"codeMapping"`
}
// StateNode holds the data for a single state diff node
type StateNode struct {
	NodeType     NodeType      `json:"nodeType"        gencodec:"required"`
	Path         []byte        `json:"path"            gencodec:"required"`
	NodeValue    []byte        `json:"value"           gencodec:"required"`
	StorageNodes []StorageNode `json:"storage"`
	LeafKey      []byte        `json:"leafKey"`
}
// StorageNode holds the data for a single storage diff node
type StorageNode struct {
	NodeType  NodeType `json:"nodeType"        gencodec:"required"`
	Path      []byte   `json:"path"            gencodec:"required"`
	NodeValue []byte   `json:"value"           gencodec:"required"`
	LeafKey   []byte   `json:"leafKey"`
}
// CodeAndCodeHash struct for holding codehash => code mappings
// we can't use an actual map because they are not rlp serializable
type CodeAndCodeHash struct {
	Hash common.Hash `json:"codeHash"`
	Code []byte      `json:"code"`
}
```

These objects are packed into a `Payload` structure which can additionally associate the `StateObject` with the block (header, uncles, and transactions), receipts, and total difficulty. This `Payload` encapsulates all of the differential data at a given block, and allows us to index the entire Ethereum data structure as hash-linked IPLD objects.

```go
// Payload packages the data to send to state diff subscriptions
type Payload struct {
	BlockRlp        []byte   `json:"blockRlp"`
	TotalDifficulty *big.Int `json:"totalDifficulty"`
	ReceiptsRlp     []byte   `json:"receiptsRlp"`
	StateObjectRlp  []byte   `json:"stateObjectRlp"    gencodec:"required"`
	encoded []byte
	err     error
}
```

## Usage

This state diffing service runs as an auxiliary service concurrent to the regular syncing process of the geth node.

### CLI configuration

This service introduces a CLI flag namespace `statediff`

`--statediff` flag is used to turn on the service  
`--statediff.writing` is used to tell the service to write state diff objects it produces from synced ChainEvents directly to a configured Postgres database  
`--statediff.workers` is used to set the number of concurrent workers to process state diff objects and write them into the database  
`--statediff.db.type` is the type of database we write out to (current options: postgres, dump, file)  
`--statediff.dump.dst` is the destination to write to when operating in database dump mode (stdout, stderr, discard)  
`--statediff.db.driver` is the specific driver to use for the database (current options for postgres: pgx and sqlx)  
`--statediff.db.host` is the hostname/ip to dial to connect to the database  
`--statediff.db.port` is the port to dial to connect to the database  
`--statediff.db.name` is the name of the database to connect to  
`--statediff.db.user` is the user to connect to the database as  
`--statediff.db.password` is the password to use to connect to the database  
`--statediff.db.conntimeout` is the connection timeout (in seconds)  
`--statediff.db.maxconns` is the maximum number of database connections  
`--statediff.db.minconns` is the minimum number of database connections  
`--statediff.db.maxidleconns` is the maximum number of idle connections  
`--statediff.db.maxconnidletime` is the maximum lifetime for an idle connection (in seconds)  
`--statediff.db.maxconnlifetime` is the maximum lifetime for a connection (in seconds)  
`--statediff.db.nodeid` is the node id to use in the Postgres database  
`--statediff.db.clientname` is the client name to use in the Postgres database  
`--statediff.file.path` full path (including filename) to write statediff data out to when operating in file mode

The service can only operate in full sync mode (`--syncmode=full`), but only the historical RPC endpoints require an archive node (`--gcmode=archive`)

e.g. `./build/bin/geth --syncmode=full --gcmode=archive --statediff --statediff.writing --statediff.db.type=postgres --statediff.db.driver=sqlx --statediff.db.host=localhost --statediff.db.port=5432 --statediff.db.name=vulcanize_test --statediff.db.user=postgres --statediff.db.nodeid=nodeid --statediff.db.clientname=clientname`

When operating in `--statediff.db.type=file` mode, the service will write SQL statements out to the file designated by `--statediff.file.path`. Please note that it writes out SQL statements with all `ON CONFLICT` constraint checks dropped. This is done so that we can scale out the production of the SQL statements horizontally, merge the separate SQL files produced, de-duplicate using unix tools (`sort statediff.sql | uniq` or `sort -u statediff.sql`), bulk load using psql (`psql db_name --set ON_ERROR_STOP=on -f statediff.sql`), and then add our primary and foreign key constraints and indexes back afterwards.

### RPC endpoints

The state diffing service exposes both a WS subscription endpoint, and a number of HTTP unary endpoints.

Each of these endpoints requires a set of parameters provided by the caller

```go
// Params is used to carry in parameters from subscribing/requesting clients configuration
type Params struct {
	IntermediateStateNodes   bool
	IntermediateStorageNodes bool
	IncludeBlock             bool
	IncludeReceipts          bool
	IncludeTD                bool
	IncludeCode              bool
	WatchedAddresses         []common.Address
	WatchedStorageSlots      []common.Hash
}
```

Using these params we can tell the service whether to include state and/or storage intermediate nodes; whether to include the associated block (header, uncles, and transactions); whether to include the associated receipts; whether to include the total difficulty for this block; whether to include the set of code hashes and code for contracts deployed in this block; whether to limit the diffing process to a list of specific addresses; and/or whether to limit the diffing process to a list of specific storage slot keys.

#### Subscription endpoint

A websocket supporting RPC endpoint is exposed for subscribing to state diff `StateObjects` that come off the head of the chain while the geth node syncs.

```go
// Stream is a subscription endpoint that fires off state diff payloads as they are created
Stream(ctx context.Context, params Params) (*rpc.Subscription, error)
```

To expose this endpoint the node needs to have the websocket server turned on (`--ws`), and the `statediff` namespace exposed (`--ws.api=statediff`).

Go code subscriptions to this endpoint can be created using the `rpc.Client.Subscribe()` method, with the "statediff" namespace, a `statediff.Payload` channel, and the name of the statediff api's rpc method: "stream".

e.g.

```go
cli, err := rpc.Dial("ipcPathOrWsURL")
if err != nil {
	// handle error
}
stateDiffPayloadChan := make(chan statediff.Payload, 20000)
methodName := "stream"
params := statediff.Params{
    IncludeBlock:             true,
    IncludeTD:                true,
    IncludeReceipts:          true,
    IntermediateStorageNodes: true,
    IntermediateStateNodes:   true,
}
rpcSub, err := cli.Subscribe(context.Background(), statediff.APIName, stateDiffPayloadChan, methodName, params)
if err != nil {
	// handle error
}
for {
	select {
	case stateDiffPayload := <- stateDiffPayloadChan:
            // process the payload
        case err := <- rpcSub.Err():
    	    // handle rpc subscription error
        }
}
```

#### Unary endpoints

The service also exposes unary RPC endpoints for retrieving the state diff `StateObject` for a specific block height/hash.

```go
// StateDiffAt returns a state diff payload at the specific blockheight
StateDiffAt(ctx context.Context, blockNumber uint64, params Params) (*Payload, error)
// StateDiffFor returns a state diff payload for the specific blockhash
StateDiffFor(ctx context.Context, blockHash common.Hash, params Params) (*Payload, error)
```

To expose this endpoint the node needs to have the HTTP server turned on (`--http`), and the `statediff` namespace exposed (`--http.api=statediff`).

### Direct indexing into Postgres

If `--statediff.writing` is set, the service will convert the state diff `StateObject` data into IPLD objects, persist them directly to Postgres, and generate secondary indexes around the IPLD data.

The schema and migrations for this Postgres database are provided in `statediff/db/`.

#### Postgres setup

We use [pressly/goose](https://github.com/pressly/goose) as our Postgres migration manager. You can also load the Postgres schema directly into a database using

`psql database_name < schema.sql`

This will only work on a version 12.4 Postgres database.

#### Schema overview

Our Postgres schemas are built around a single IPFS backing Postgres IPLD blockstore table (`public.blocks`) that conforms with [go-ds-sql](https://github.com/ipfs/go-ds-sql/blob/master/postgres/postgres.go). All IPLD objects are stored in this table, where `key` is the blockstore-prefixed multihash key for the IPLD object and `data` contains the bytes for the IPLD block (in the case of all Ethereum IPLDs, this is the RLP byte encoding of the Ethereum object).

The IPLD objects in this table can be traversed using an IPLD DAG interface, but since this table only maps multihash to raw IPLD object it is not particularly useful for searching through the data by looking up Ethereum objects by their constituent fields (e.g. by block number, tx source/recipient, state/storage trie node path). To improve the accessibility of these objects we create an Ethereum [advanced data layout](https://github.com/ipld/specs#schemas-and-advanced-data-layouts) (ADL) by generating secondary indexes on top of the raw IPLDs in other Postgres tables.

These secondary index tables fall under the `eth` schema and follow an `{objectType}_cids` naming convention. These tables provide a view into individual fields of the underlying Ethereum IPLD objects, allowing lookups on these fields, and reference the raw IPLD objects stored in `public.blocks` by foreign keys to their multihash keys. Additionally, these tables maintain the hash-linked nature of Ethereum objects to one another. E.g. a storage trie node entry in the `storage_cids` table contains a `state_id` foreign key which references the `id` for the `state_cids` entry that contains the state leaf node for the contract that storage node belongs to, and in turn that `state_cids` entry contains a `header_id` foreign key which references the `id` of the `header_cids` entry that contains the header for the block these state and storage nodes were updated (diffed).

### Optimization

On mainnet this process is extremely IO intensive and requires significant resources to allow it to keep up with the head of the chain. The state diff processing time for a specific block is dependent on the number and complexity of the state changes that occur in a block and the number of updated state nodes that are available in the in-memory cache vs must be retrieved from disc.

If memory permits, one means of improving the efficiency of this process is to increase the in-memory trie cache allocation. This can be done by increasing the overall `--cache` allocation and/or by increasing the % of the cache allocated to trie usage with `--cache.trie`.

## HEX value encoding

At present there are two key datatypes that are passed over JSON: unformatted byte arrays and quantities. Both are passed with a hex encoding, however with different requirements to formatting:

When encoding QUANTITIES (integers, numbers): encode as hex, prefix with “0x”, the most compact representation (slight exception: zero should be represented as “0x0”).

<pre>
0x41 (65 in decimal)
0x400 (1024 in decimal)
WRONG: 0x (should always have at least one digit - zero is “0x0”)
WRONG: 0x0400 (no leading zeroes allowed)
WRONG: ff (must be prefixed 0x)
</pre>

When encoding UNFORMATTED DATA (byte arrays, account addresses, hashes, bytecode arrays): encode as hex, prefix with “0x”, two hex digits per byte. Examples:

<pre>
0x41 (size 1, “A”)
0x004200 (size 3, “\0B\0”)
0x (size 0, “”)
WRONG: 0xf0f0f (must be even number of digits)
WRONG: 004200 (must be prefixed 0x)
</pre>

| Code | Possible Return message | Description |
| --- | --- | --- |
| 32700 | Parse error | Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text. |
| 32600 | Invalid Request | The JSON sent is not a valid Request object. |
| 32601 | Method not found | The method does not exist / is not available. |
| 32602 | Invalid params | Invalid method parameter(s). |
| 32603 | Internal error | Internal JSON-RPC error. |
| 32000 to -32099 | `Server error`. Reserved for implementation-defined server-errors. |  |

| Code | Possible Return message | Description |
| --- | --- | --- |
| 1 | Unauthorized | Should be used when some action is not authorized, e.g. sending from a locked account. |
| 2 | Action not allowed | Should be used when some action is not allowed, e.g. preventing an action, while another depending action is processing on, like sending again when a confirmation popup is shown to the user (?). |
| 3 | Execution error | Will contain a subset of custom errors in the data field. See below. |

Custom error `3` can contain custom error(s) to further explain what went wrong.  
They will be contained in the `data` field of the RPC error message as follows:

| Code | Possible Return message | Description |
| --- | --- | --- |
| 100 | X doesn’t exist | Should be used when something which should be there is not found. (Doesn’t apply to eth_getTransactionBy\_ and eth_getBlock\_. They return a success with value `null`) |
| 101 | Requires ether | Should be used for actions which require somethin else, e.g. gas or a value. |
| 102 | Gas too low | Should be used when a to low value of gas was given. |
| 103 | Gas limit exceeded | Should be used when a limit is exceeded, e.g. for the gas limit in a block. |
| 104 | Rejected | Should be used when an action was rejected, e.g. because of its content (too long contract code, containing wrong characters ?, should differ from `-32602` - Invalid params). |
| 105 | Ether too low | Should be used when a to low value of Ether was given. |

| Code | Possible Return message | Description                                                             |
| ---- | ----------------------- | ----------------------------------------------------------------------- |
| 106  | Timeout                 | Should be used when an action timedout.                                 |
| 107  | Conflict                | Should be used when an action conflicts with another (ongoing?) action. |

## Appendix

```typescript
interface ErrorCodes {
	readonly rpc: {
		readonly invalidInput: -32000;
		readonly resourceNotFound: -32001;
		readonly resourceUnavailable: -32002;
		readonly transactionRejected: -32003;
		readonly methodNotSupported: -32004;
		readonly limitExceeded: -32005;
		readonly parse: -32700;
		readonly invalidRequest: -32600;
		readonly methodNotFound: -32601;
		readonly invalidParams: -32602;
		readonly internal: -32603;
	};
	readonly provider: {
		readonly userRejectedRequest: 4001;
		readonly unauthorized: 4100;
		readonly unsupportedMethod: 4200;
		readonly disconnected: 4900;
		readonly chainDisconnected: 4901;
	};
}

export const errorCodes: ErrorCodes = {
	rpc: {
		invalidInput: -32000,
		resourceNotFound: -32001,
		resourceUnavailable: -32002,
		transactionRejected: -32003,
		methodNotSupported: -32004,
		limitExceeded: -32005,
		parse: -32700,
		invalidRequest: -32600,
		methodNotFound: -32601,
		invalidParams: -32602,
		internal: -32603,
	},
	provider: {
		userRejectedRequest: 4001,
		unauthorized: 4100,
		unsupportedMethod: 4200,
		disconnected: 4900,
		chainDisconnected: 4901,
	},
};
```

```json
{
	"4001": {
		"standard": "EIP-1193",
		"message": "User rejected the request."
	},
	"4100": {
		"standard": "EIP-1193",
		"message": "The requested account and/or method has not been authorized by the user."
	},
	"4200": {
		"standard": "EIP-1193",
		"message": "The requested method is not supported by this Ethereum provider."
	},
	"4900": {
		"standard": "EIP-1193",
		"message": "The provider is disconnected from all chains."
	},
	"4901": {
		"standard": "EIP-1193",
		"message": "The provider is disconnected from the specified chain."
	},
	"-32700": {
		"standard": "JSON RPC 2.0",
		"message": "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
	},
	"-32600": {
		"standard": "JSON RPC 2.0",
		"message": "The JSON sent is not a valid Request object."
	},
	"-32601": {
		"standard": "JSON RPC 2.0",
		"message": "The method does not exist / is not available."
	},
	"-32602": {
		"standard": "JSON RPC 2.0",
		"message": "Invalid method parameter(s)."
	},
	"-32603": {
		"standard": "JSON RPC 2.0",
		"message": "Internal JSON-RPC error."
	},
	"-32000": {
		"standard": "EIP-1474",
		"message": "Invalid input."
	},
	"-32001": {
		"standard": "EIP-1474",
		"message": "Resource not found."
	},
	"-32002": {
		"standard": "EIP-1474",
		"message": "Resource unavailable."
	},
	"-32003": {
		"standard": "EIP-1474",
		"message": "Transaction rejected."
	},
	"-32004": {
		"standard": "EIP-1474",
		"message": "Method not supported."
	},
	"-32005": {
		"standard": "EIP-1474",
		"message": "Request limit exceeded."
	}
}
```

[^](/nCeNAQLrTDKs42oLSFgUOg)2.2. Which History?, Ethereum Yellowpaper
