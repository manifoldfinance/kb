---
sidebar_position: 7
id: ref-plugins
title: Golang RPC Plugins
description: Reference guide to RPC Pluins for Go
---

## Custom RPC Methods

Custom RPC methods can be called with the `w3` client by creating a
[`core.Caller`](https://pkg.go.dev/github.com/lmittmann/w3/core#Caller)
implementation.
The `w3/module/eth` package can be used as implementation reference.


## Utils

Static addresses, hashes, hex byte slices or `big.Int`'s can be parsed from
strings with the following utility functions.

```go
var (
	addr  = w3.A("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")
	hash  = w3.H("0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3")
	bytes = w3.B("0x27c5342c")
	big   = w3.I("12.34 ether")
)
```

Note that these functions panic if the string cannot be parsed. Use
[go-ethereum/common](https://pkg.go.dev/github.com/ethereum/go-ethereum/common)
to parse strings that may not be valid instead.


## RPC Methods

List of supported RPC methods.

### `eth`

| Method                      | Go Code
| :-------------------------- | :-------
| `eth_blockNumber`           | `eth.BlockNumber().Returns(blockNumber *big.Int)`
| `eth_call`                  | `eth.Call(msg ethereum.CallMsg, blockNumber *big.Int).Returns(output *[]byte)`<br>`eth.CallFunc(fn core.Func, contract common.Address, args ...any).Returns(returns ...any)`
| `eth_chainId`               | `eth.ChainID().Returns(chainID *uint64)`
| `eth_gasPrice`              | `eth.GasPrice().Returns(gasPrice *big.Int)`
| `eth_getBalance`            | `eth.Balance(addr common.Address, blockNumber *big.Int).Returns(balance *big.Int)`
| `eth_getBlockByHash`        | `eth.BlockByHash(hash common.Hash).Returns(block *types.Block)`<br>`eth.BlockByHash(hash common.Hash).ReturnsRAW(block *eth.RPCBlock)` <br>`eth.HeaderByHash(hash common.Hash).Returns(header *types.Header)`<br>`eth.HeaderByHash(hash common.Hash).ReturnsRAW(header *eth.RPCHeader)`
| `eth_getBlockByNumber`      | `eth.BlockByNumber(number *big.Int).Returns(block *types.Block)`<br>`eth.BlockByNumber(number *big.Int).ReturnsRAW(block *eth.RPCBlock)`<br>`eth.HeaderByNumber(number *big.Int).Returns(header *types.Header)`<br>`eth.HeaderByNumber(number *big.Int).ReturnsRAW(header *eth.RAWHeader)`
| `eth_getCode`               | `eth.Code(addr common.Address, blockNumber *big.Int).Returns(code *[]byte)`
| `eth_getLogs`               | `eth.Logs(q ethereum.FilterQuery).Returns(logs *[]types.Log)`
| `eth_getStorageAt`          | `eth.StorageAt(addr common.Address, slot common.Hash, blockNumber *big.Int).Returns(storage *common.Hash)`
| `eth_getTransactionByHash`  | `eth.TransactionByHash(hash common.Hash).Returns(tx *types.Transaction)`<br>`eth.TransactionByHash(hash common.Hash).ReturnsRAW(tx *eth.RPCTransaction)`
| `eth_getTransactionCount`   | `eth.Nonce(addr common.Address, blockNumber *big.Int).Returns(nonce *uint64)`
| `eth_getTransactionReceipt` | `eth.TransactionReceipt(hash common.Hash).Returns(receipt *types.Receipt)`<br>`eth.TransactionReceipt(hash common.Hash).ReturnsRAW(receipt *eth.RPCReceipt)`
| `eth_sendRawTransaction`    | `eth.SendTransaction(tx *types.Transaction).Returns(hash *common.Hash)`<br>`eth.SendRawTransaction(rawTx []byte).Returns(hash *common.Hash)`

### `debug`

| Method                   | Go Code
| :----------------------- | :-------
| `debug_traceCall`        | TODO <!-- `debug.TraceCall(msg ethereum.CallMsg).Returns(blockNumber *big.Int)` -->
| `debug_traceTransaction` | TODO <!--`debug.TraceTransaction(hash common.Hash).Returns(blockNumber *big.Int)` -->


## Error Messaging 

| Status Message 	| HandleId 	| Description 	|
|---	|---	|---	|
| QUEUED 	| 2 	| The default state when initially creating a transaction during the initial API call. This indicates that this transaction is waiting to be picked up by a background worker. 	|
| PROCESSING 	| 3 	| A background worker has started to process this transaction. 	|
| FUNDING 	| 4 	| An auxiliary funding transaction is being initiated (this only applies to non-Ether transactions). 	|
| FUNDED 	| 5 	| An auxiliary funding transaction was successful (this only applies to non-Ether transactions). 	|
| BROADCASTING 	| 6 	| The transaction is being announced to the blockchain network nodes. 	|
| BROADCASTED 	| 7 	| The transaction was successfully announced to the blockchain network nodes. 	|
| PENDING 	| 8 	| The transaction is "pending" / "in the mempool", i.e. known to (some) blockchain network nodes, and awaiting inclusion/mining into a block. 	|
| CONFIRMING 	| 9 	| The transaction was mined into a block, but not enough subsequent blocks have yet been mined to consider that transaction "safe" / confirmed. 	|
| CONFIRMED 	| 10 	| The transaction was mined into a block and enough subsequent blocks have been mined to consider that transaction "safe" / confirmed. 	|
| FAILED 	| 11 	| The transaction was mined into a block, but the execution of its smart contract code failed. Several reasons are possible, most notably "out of gas". The transaction is still included in a block because its gas is still awarded to the miner who attempted to execute it. 	|
| REJECTED 	| 12 	| The transaction was mined into a block but was rejected during the execution of its smart contract code. Several reasons are possible, most notably Solidity's require() assertions not being satisfied. The transaction is still included in a block because it's gas is still awarded to the miner who attempted to execute it. 	|
| UN-PROCESSABLE 	| 13 	| An unrecoverable error occurred which prevents us from getting this transaction onto the blockchain. We have given up (or the customer requested us not to retry). 	|
| RETRYING 	| 14 	| A temporary/recoverable error occurred, and this transaction was re-queued as to try getting this transaction onto the blockchain at a later time. This state is more or less equivalent to QUEUED, but its name is more telling. 	|
| PENDING 	| X_ETHERS 	| The transaction was received and is currently being submitted to the network 	|
| INCLUDED 	| X_ETHERS 	| The transaction was included on <% value > 	|
| FAILED 	| X_ETHERS 	| The transaction was submitted for 25 blocks and failed to be included on <% value> 	|
| CANCELLED 	| X_ETHERS 	| The transaction was cancelled by the user and not included on <% value> 	|
| UNKNOWN 	| X_ETHERS 	| The transaction was not received [PANIC] 	|
| MissingRequiredParameterError 	| 1101 	| Request parameter PARAMETER NAME is missing. 	|
| IncorrectFormatError 	| 1102 	| Request input in incorrect format. 	|
| UnknownParameterError 	| 1103 	| Request parameter NAME is not recognized 	|
| AmountError 	| 1201 	| Swap amounts must be greater than 0. 	|
| InvalidAddressError 	| 1202 	| The wallet address ADDRESS format is invalid. 	|
| TokenNotFoundError 	| 1203 	| This token contract ADDRESS is not found. 	|
| InvalidSlippagePercentError 	| 1204 	| The maximum MARKET/EXECUTION slippage must be between 0-99. 	|
| InvalidFillPercentError 	| 1205 	| Minimum fill percent must be between 1-100. 	|
| IsOptionalError 	| 1206 	| Is optional must be boolean (true or false). 	|
| InsufficientFundsError 	| 3100 	| User wallet has insufficient funds. 	|
| ExecutionError 	| 2000 	| An internal error occurred while attempting simulation. 	|
| NotEnoughVolumeError 	| 2100 	| We couldn’t find enough orders to fill your request for SOURCE SYMBOL => DESTINATION SYMBOL. Please try again later. 	|
| NoUsableExchangeError 	| 2102 	| No exchange from the list EXCHANGES is usable. 	|