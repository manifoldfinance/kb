---
id: ref-mev-rpc
title: MEV RPC methods
weight: 3
---

## MEV RPC Methods

These are flashbots-standardd interfaces as of v0.6.

### eth_sendBundle

`ethSendBundle` can be used to send your bundles to the relay. The `eth_sendBundle` RPC has the following payload format:

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendBundle",
  "params": [
    {
      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle
      blockNumber,       // String, a hex encoded block number for which this bundle is valid on
      minTimestamp,      // (Optional) Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch
      maxTimestamp,      // (Optional) Number, the maximum timestamp for which this bundle is valid, in seconds since the unix epoch
      revertingTxHashes, // (Optional) Array[String], A list of tx hashes that are allowed to revert
    }
  ]
}
```

example:

```jsonc
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "eth_sendBundle",
	"params": [
		{
			"txs": ["0x123abc...", "0x456def..."],
			"blockNumber": "0xb63dcd",
			"minTimestamp": 0,
			"maxTimestamp": 1615920932
		}
	]
}
```

example response:

```jsonc
{
	"jsonrpc": "2.0",
	"id": "123",
	"result": {
		"bundleHash": "0x2228f5d8954ce31dc1601a8ba264dbd401bf1428388ce88238932815c5d6f23f"
	}
}
```

### eth_callBundle

`eth_callBundle` can be used to simulate a bundle against a specific block number, including simulating a bundle at the top of the next block. The `eth_callBundle` RPC has the following payload format:

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_callBundle",
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

> example:

```json
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "eth_callBundle",
	"params": [
		{
			"txs": ["0x123abc...", "0x456def..."],
			"blockNumber": "0xb63dcd",
			"stateBlockNumber": "latest",
			"timestamp": 1615920932
		}
	]
}
```

> example response:

```json
{
	"jsonrpc": "2.0",
	"id": "123",
	"result": {
		"bundleGasPrice": "476190476193",
		"bundleHash": "0x73b1e258c7a42fd0230b2fd05529c5d4b6fcb66c227783f8bece8aeacdd1db2e",
		"coinbaseDiff": "20000000000126000",
		"ethSentToCoinbase": "20000000000000000",
		"gasFees": "126000",
		"results": [
			{
				"coinbaseDiff": "10000000000063000",
				"ethSentToCoinbase": "10000000000000000",
				"fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",
				"gasFees": "63000",
				"gasPrice": "476190476193",
				"gasUsed": 21000,
				"toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",
				"txHash": "0x669b4704a7d993a946cdd6e2f95233f308ce0c4649d2e04944e8299efcaa098a",
				"value": "0x"
			},
			{
				"coinbaseDiff": "10000000000063000",
				"ethSentToCoinbase": "10000000000000000",
				"fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",
				"gasFees": "63000",
				"gasPrice": "476190476193",
				"gasUsed": 21000,
				"toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",
				"txHash": "0xa839ee83465657cac01adc1d50d96c1b586ed498120a84a64749c0034b4f19fa",
				"value": "0x"
			}
		],
		"stateBlockNumber": 5221585,
		"totalGasUsed": 42000
	}
}
```

### flashbots_getUserStats

The `flashbots_getUserStats` JSON-RPC method returns a quick summary of how a searcher is performing in the relay, including their [reputation-based priority](/flashbots-auction/searchers/advanced/reputation). It is currently updated once every hour and has the following payload format:

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "flashbots_getUserStats",
  "params": [
      blockNumber, //String, a hex encoded recent block number, in order to prevent replay attacks. Must be within 20 blocks of the current chain tip.
  ]
}
```

> example response:

```json
{
	"is_high_priority": true,
	"all_time_miner_payments": "1280749594841588639",
	"all_time_gas_simulated": "30049470846",
	"last_7d_miner_payments": "1280749594841588639",
	"last_7d_gas_simulated": "30049470846",
	"last_1d_miner_payments": "142305510537954293",
	"last_1d_gas_simulated": "2731770076"
}
```

where

-   `is_high_priority`: boolean representing if this searcher has a high enough reputation to be in the high priority queue
-   `all_time_miner_payments`: the total amount paid to miners over all time
-   `all_time_gas_simulated`: the total amount of gas simulated across all bundles submitted to the relay. This is the actual gas used in simulations, not gas limit

### flashbots_getBundleStats

The `flashbots_getBundleStats` JSON-RPC method returns stats for a single bundle. You must provide a blockNumber and the bundleHash, and the signing address must be the same as the one who submitted the bundle.

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "flashbots_getBundleStats",
  "params": [
    {
      bundleHash,       // String, returned by the flashbots api when calling eth_sendBundle
      blockNumber,      // String, a hex encoded block number
    }
  ]
}
```

> example response:

```jsonc
{
	"isSimulated": true,
	"isSentToMiners": true,
	"isHighPriority": true,
	"simulatedAt": "2021-08-06T21:36:06.317Z",
	"submittedAt": "2021-08-06T21:36:06.250Z",
	"sentToMinersAt": "2021-08-06T21:36:06.343Z"
}
```
