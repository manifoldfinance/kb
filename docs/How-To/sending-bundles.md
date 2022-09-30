---
sidebar_position: 3
id: howto-send_bundle
title: Sending a Bundle Transaction
description: How to guide on Sending a Bundle Transaction to SecureRpc
---

# Interacting with SecureRpc

Certain RPC methods may be aliased with `manifold_` prefix instead of the `eth_` prefix. We support the `X-Flashbots` header as well.

The endpoint for sending bundles, private txs, etc is located at:

```console
https://api.securerpc.com/v1
```

> No API key is needed to use the endpoint

## `manifold_sendBundle`

### Description

Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle.

| **Name** | **Type** | **Description** | **Comment** |
| --- | --- | --- | --- |
| `txs` | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded) | a no-op in the light mode |
| `blockNumber` | `Quantity` | Exact block number at which the bundle can be included. | bundle is evicted after the block |
| `minTimestamp` | `Quantity` | Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `maxTimestamp` | `Quantity` | Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `revertingTxHashes` | Array<`Data`> | Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block. |

### Returns

{`boolean`} - `true` if bundle has been accepted by the node, otherwise `false`

### Example Request

```bash

curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "manifold_sendBundle",
    "params": [
        {
          "txs" : [
              "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",
              "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"
          ],
          "blockNumber" : "0xce7b22",
          "minTimestamp" : 0,
          "minTimestamp" : 0,
          "revertingTxHashes": []
        }
    ]
}' <url>
```

#### Response

```jsonc
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": true
}
```


## `manifold_sendPrivateRawTransaction`

Sends a raw transaction to be included for block construction. Transaction is marked as private which means that it will not be broadcast to any other node for as long as the configured `txpool.privatetxlifespan` in hours. Except for the no broadcast rule the transaction should be treated equally with all the public transaction pool transactions.

| **Name** | **Type**      | **Description**                                                             |
| -------- | ------------- | --------------------------------------------------------------------------- |
| `input`  | `Array<Data>` | Signed transaction (`eth_sendRawTransaction` style, signed and RLP-encoded) |

### Returns

"error|value" : `Data` - txhash or error

### Example Request

```bash
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_sendPrivateRawTransaction",
    "params": [
        "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878"
    ]
}' <url>
```

#### Response
```jsonc
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": "0xdeadbeef883764809a94a5320e4557102f5a3fdd98dabd8cd48773b0eca00666"
}
```

## `manifold_callBundle`

Simulate a bundle of transactions at the top of a block.

After retrieving the block specified in the `blockNrOrHash` it takes the same `blockhash`, `gasLimit`, `difficulty`, same `timestamp` unless the `blockTimestamp` property is specified, and increases the block number by `1`. `manifold_callBundle` will time out after `5` seconds.

### Note about `callBundle`

This RPC Method was removed without notice by flashbots in v0.4.0 of their client, then added in the most recent release, v0.6.0. We maintain a separate client to ensure availability of this RPC Method

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| `txs` | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded) |
| `blockNumber` | `Quantity` | A hex encoded block number for which this bundle is valid on |
| `stateBlockNumber` | `Quantity\|string\|Block Identifier` | Either a hex encoded number or a {Block Identifier} for which state to base this simulation on. |
| `timestamp` | `Quantity` | Block timestamp to be used in replacement of the timestamp taken from the parent block. |

### Returns

Map<`Data`, "error|value" : `Data`> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "manifold_callBundle", // the same as flashbots `eth_callBundle`
  "params": [
    {
      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle
      blockNumber,       // String, a hex encoded block number for which this bundle is valid on
      stateBlockNumber,  // String, either a hex encoded number or a block tag for which state to base this simulation on. Can use "latest"
      timestamp,         // (Optional) Number, the timestamp to use for this bundle simulation, in seconds since the unix epoch
    }
  ]
}
```
