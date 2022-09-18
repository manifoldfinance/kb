---
sidebar_position: 6
id: howto-send_setup_teku
title: MEV Boost\Builder API
description: How to guide use Teku and Builder API
---

# MEV Boost & Builder API (Teku)

**This document is deprecated. Please refer to https://docs.teku.consensys.net/en/latest/HowTo/Builder-Network/ for the official documentation.**

#### Useful Links

https://github.com/flashbots/mev-boost/wiki
https://ethereum.github.io/builder-specs/

#### Table of Contents

* [Setup](#Setup)
* [Logging](#Logging)

## Setup 

The following steps need to be taken in order to enable mev boost (builder flow) in Teku. If everything is setup correctly, new blocks will be recommended by the builder and the proposers (validators) will start receiving MEV Rewards.

* [Enable blinded blocks](#Enable-blinded-blocks)
* [Specify Builder endpoint](#Specify-Builder-endpoint)
* [Validator Registration](#Validator-Registration)

### Enable blinded blocks

Blinded block production must be enabled.

`--validators-proposer-blinded-blocks-enabled=true`

#### Note
If `--validators-builder-registration-default-enabled` is set to true, then `--validators-proposer-blinded-blocks-enabled` automatically will default to true, so no need to set it explicitly.



### Specify Builder endpoint

A builder endpoint must be specified.

`--builder-endpoint=&#34;https://builder-relay-kiln.flashbots.net/&#34;`

The following builder relay endpoints are live and can be used for testing.

| Network | Endpoint |
| -------- | -------- |
| Kiln | https://0xb5246e299aeb782fbc7c91b41b3284245b1ed5206134b0028b81dfb974e5900616c67847c2354479934fc4bb75519ee1@builder-relay-kiln.flashbots.net | 
| Ropsten | https://0xb124d80a00b80815397b4e7f1f05377ccc83aeeceb6be87963ba3649f1e6efa32ca870a88845917ec3f26a8e2aa25c77@builder-relay-ropsten.flashbots.net |  
| Sepolia | https://0x845bd072b7cd566f02faeb0a4033ce9399e42839ced64e8b2adcfc859ed1e8e1a5a293336a49feac6d9a5edb779be53a@builder-relay-sepolia.flashbots.net |
| Goerli | https://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net |

To use multiple relays, a middleware like [mev-boost](https://github.com/flashbots/mev-boost) can be used.

`--builder-endpoint=&#34;http://127.0.0.1:18550 &#34;`

For testing purpose [Mergemock](https://github.com/protolambda/mergemock) can be used to set up a local builder relay.

`--builder-endpoint=&#34;http://127.0.0.1:28545 &#34;`

### Validator Registration

https://github.com/ethereum/builder-specs/blob/main/specs/validator.md#validator-registration

Validators must be registered with the builder prior to proposing a block.

* [Enabling Validator Registration](#Enabling-Validator-Registration)
* [Validator registration overrides](#Validator-registration-overrides)
* [Fee Recipient](#Fee-Recipient)
* [Batch sending of validator registrations](#Batch-sending-of-validator-registrations)

#### Enabling Validator Registration

There are couple of ways to enable validator registration.

* [CLI Arguments](#CLI-Arguments)
* [Proposer Configuration](#Proposer-Configuration)

##### CLI Arguments

This will enable registration for all validators. The default value is false.

`--validators-builder-registration-default-enabled=true`

Enabling this option will automatically enable `--validators-proposer-blinded-blocks-enabled=true`.

Also, the default gas limit for the registrations can be changed. The default is 30 million.

`--Xvalidators-builder-registration-default-gas-limit=29000000`

In case a more fine-grained configuration is needed, a proposer configuration must be used.

##### Proposer Configuration

The proposer configuration is a json, which can be either loaded from URL or from a file.

`--validators-proposer-config=/etc/teku/proposerConfig.json`

An example of a proposer config is:

```json
{
  &#34;proposer_config &#34;: {
    &#34;0xa057816155ad77931185101128655c0191bd0214c201ca48ed887f6c4c6adf334070efcd75140eada5ac83a92506dd7a &#34;: {
      &#34;fee_recipient &#34;: &#34;0x50155530FCE8a85ec7055A5F8b2bE214B3DaeFd3 &#34;,
      &#34;builder &#34;: {
        &#34;enabled &#34;: true,
        &#34;gas_limit &#34;: &#34;12345654321 &#34;}
    }
  },
  &#34;default_config &#34;: {
    &#34;fee_recipient &#34;: &#34;0x6e35733c5af9B61374A128e6F85f553aF09ff89A &#34;,
    &#34;builder &#34;: {
      &#34;enabled &#34;: false
    }
  }
}
```

In this example, the validator `0xa057816...` is eligible for registering, since it has specified a `builder` with `enabled` set to true in the `proposer_config`. The `builder` also allows a custom gas limit value. In case there is no `builder` the values in the `default_config` would be used. In case there is no `builder` both in the `proposer_config` and in the `default_config`, then the CLI values are used.

#### Validator registration overrides

It is possible to override validator registration values. It is an useful feature in deployments where validator keys are shared between multiple nodes (Obol, SSV or similar), where nodes require to register using the exact same registration message.

You can override timestamp and public key registration values using CLI options:

* `--Xvalidators-builder-registration-timestamp-override`
* `--Xvalidators-builder-registration-public-key-override`

These values could also be overriden via `registration_overrides` field in the proposer config:

```json
{
  &#34;proposer_config &#34;: {
    &#34;0xa057816155ad77931185101128655c0191bd0214c201ca48ed887f6c4c6adf334070efcd75140eada5ac83a92506dd7a &#34;: {
      &#34;fee_recipient &#34;: &#34;0x50155530FCE8a85ec7055A5F8b2bE214B3DaeFd3 &#34;,
      &#34;builder &#34;: {
        &#34;enabled &#34;: true,
        &#34;registration_overrides &#34;: {
          &#34;timestamp &#34;: &#34;1234 &#34;,
          &#34;public_key &#34;: &#34;0xb53d21a4cfd562c469cc81514d4ce5a6b577d8403d32a394dc265dd190b47fa9f829fdd7963afdf972e5e77854051f6f &#34;}
      }
    }
  },
  &#34;default_config &#34;: {
    &#34;fee_recipient &#34;: &#34;0x6e35733c5af9B61374A128e6F85f553aF09ff89A &#34;,
    &#34;builder &#34;: {
      &#34;enabled &#34;: false,
      &#34;registration_overrides &#34;: {
        &#34;timestamp &#34;: &#34;1235 &#34;,
        &#34;public_key &#34;: &#34;0xa491d1b0ecd9bb917989f0e74f0dea0422eac4a873e5e2644f368dffb9a6e20fd6e10c1b77654d067c0618f6e5a7f79a &#34;}
    }
  }
}
```

In case the proposer config is used, it will take precendence over the CLI options.

#### Fee Recipient

Currently, the same fee recipient is used in both the normal flow and the builder flow for a given validator.

You can look at https://docs.teku.consensys.net/en/latest/HowTo/Prepare-for-The-Merge/#configure-the-fee-recipient for how to configure the fee recipient in Teku.

#### Batch sending of validator registrations

Currently, the validator registrations are sent in batches of 100 registrations when sent to the Beacon Node (which then forwards them to mev-boost/relay). This value is configurable by setting `--Xvalidators-builder-registration-sending-batch-size`

### Simple setup example (solo staker, VC and BN in sigle process)

```text
--validators-proposer-default-fee-recipient=&#34;0x6e35733c5af9B61374A128e6F85f553aF09ff89A &#34;--ee-endpoint=&#34;http://127.0.0.1:8551 &#34;#points to local EL
--ee-jwt-secret-file=&#34;/etc/jwt-secret.hex &#34;#jwt authentication againts local EL
--validators-builder-registration-default-enabled=true #all validators will be using MEV
--builder-endpoint=&#34;http://127.0.0.1:18550 &#34;#points to local mev-boost
```

### Complex setup example (VC and BN in separate process)

#### VC params

```text
--validators-proposer-blinded-blocks-enabled=true
--validators-proposer-config=&#34;/etc/teku/proposerConfig.json &#34;```

Let &#39;s enable MEV by default, and keep it disabled for a specific key.
```json
{
  &#34;proposer_config &#34;: {
    &#34;0xa057816155ad77931185101128655c0191bd0214c201ca48ed887f6c4c6adf334070efcd75140eada5ac83a92506dd7a &#34;: {
      &#34;fee_recipient &#34;: &#34;0x50155530FCE8a85ec7055A5F8b2bE214B3DaeFd3 &#34;,
      &#34;builder &#34;: {
        &#34;enabled &#34;: false
      }
    }
  },
  &#34;default_config &#34;: {
    &#34;fee_recipient &#34;: &#34;0x6e35733c5af9B61374A128e6F85f553aF09ff89A &#34;,
    &#34;builder &#34;: {
      &#34;enabled &#34;: true
    }
  }
}
```

#### BN params

```text
--validators-proposer-default-fee-recipient=&#34;0x6e35733c5af9B61374A128e6F85f553aF09ff89A &#34;# fallback fee recipient
--ee-endpoint=&#34;http://127.0.0.1:8551 &#34;#points to local EL
--ee-jwt-secret-file=&#34;/etc/jwt-secret.hex &#34;#jwt authentication againts local EL
--builder-endpoint=&#34;http://127.0.0.1:18550 &#34;#points to local mev-boost
```

## Logging

* Whenever the beacon node receives a [BuilderBid](https://github.com/ethereum/builder-specs/blob/main/specs/builder.md#builderbid), it will be logged.

```text
INFO  | ExecutionLayerManagerImpl | Received Builder Bid (Block Number = 622344, Block Hash = 0x7bfb24a2c4f54524e41af074557684e0ab17391af425ef23268640dace637954, MEV Reward (wei) = 105000000147000, Gas Limit = 29999972, Gas Used = 21000)
```

* If the builder goes down while Teku is running, a warning would be logged. If the builder is still down during proposing, block production duty would fallback to the EL.

```text
WARN  | teku-event-log | The execution builder is offline: &lt;error-message &gt;. Block production will fallback to the execution engine.
```

* In the beginning of every epoch, the VC will send validator registrations to the BN, which will forward them to the builder network.

```text
INFO | validator-async-0 | 2500 out of 2500 validator(s) registrations were successfully sent to the Beacon Node.
```

* In case of error during registration, the error will be logged. Keep in mind, some registrations may still have succeeded, because they are sent in batches.

```text
INFO | validator-async-3 | 500 out of 2500 validator(s) registrations were successfully sent to the Beacon Node.
ERROR | validator-async-3 | Validator   *** Failed to send validator registrations to Beacon Node
java.util.concurrent.CompletionException:java.util.concurrent.CompletionException...............
```
