---
id: rpc-errortypes
title: RPC Error Types
description: RPC Error Types and Structures
sidebar_position: 3
---

# Motivation

The [RPC specification](https://github.com/ethereum/wiki/wiki/JSON-RPC) implements a subset of the [JSON-RPC](http://www.jsonrpc.org/specification) specification. It defines the available RPC methods together with in- and outputs and serialization format. It however doesn't specify anything about the errors these methods can return. As a result, implementations return different errors which makes it hard for DApp developers to act appropriately. Another problem is that currently there are no well-defined error codes. This causes some clients (e.g. Mist) to do string matching to determine what happened. This is brittle and not generic.

# DApp Error Support

Define a standard for Ethereum JSON-RPC errors. One of the problems is finding the correct balance between informing a DApp what happened and being not too specific. Being too specific will make it hard to become fully compliant with the specification and would make DApp's more complicated. Being too generic DApps' won't be able to determine what happened.

This problem is tackled by introducing the concept of an error category and allowing a node to supply optional extra information about an error. This allows a DApp to get a general understanding of what went wrong by looking at the category error code. It also allows a node to provide additional information about an error that the DApp can decide to use.

This proposal contains 2 parts. First, it describes how the errors are defined. The second part describes a list with standardized error categories and detailed error messages.

## Error structure

JSON-RPC 2.0 has a [section](http://www.jsonrpc.org/specification#error_object) dedicated how errors are defined. The `code` field will be used for an error category. This field is mandatory and used by DApp's to get a general understanding of what happened. Together with the `code` field, the `message`` field is filled with a brief description of the category.

The `data` field is an optional field. Nodes can decide to supply additional information through this field. If a node provides detailed information the data field must be an array of objects with the following fields:

| **Field**   | **Type** | **Mandatory** |
| ----------- | -------- | ------------- |
| Code        | Integer  | Yes           |
| Description | String   | No            |

By using this approach DApp's can get a general understanding of what happened through the `code` field. In most cases this is sufficient. It also allows nodes to supply additional information when available.

### Error categories

The JSON-RPC 2.0 specification defines the range -32000 to -32099 for application-specific errors.

| **Code** | **Category**  |               **Meaning**                |
| :------: | :-----------: | :--------------------------------------: |
| \-32000  | INVALID_VALUE |     Parameter Contains Invalid Value     |
| \-32001  |   NOT_FOUND   |       Requested Resource Not Found       |
| \-32002  |  UNAVAILABLE  |          Resource Not Available          |
| \-32003  |  TX_REJECTED  |           Transaction Rejected           |
| \-32099  |     MISC      | Error, Allow Nodes To Send Custom Errors |

## Error details

If a node wants to send additional information about an error it can use the `data` field.

| **Code** | **Category**  |                  **Meaning**                  |
| :------: | :-----------: | :-------------------------------------------: |
|    0     | INVALID_VALUE | Invalid Input, E\.g\. Missing Mandatory Input |
|    0     |  TX_REJECTED  |                 Invalid Nonce                 |
|    1     |  TX_REJECTED  |          Unable To Sign Transaction           |
|    2     |  TX_REJECTED  |        Transaction Already In Tx Pool         |
|    3     |  TX_REJECTED  | Transaction Gas Price Too Low For Acceptance  |
|    4     |  TX_REJECTED  |         Sender Account Doesn'T Exists         |
|    5     |  TX_REJECTED  |       Gas Limit Exceeds Block Gas Limit       |
|    6     |  TX_REJECTED  |              Insufficient Funds               |
|    7     |  TX_REJECTED  |          Insufficient Intrinsic Gas           |
|    8     |  TX_REJECTED  |            From Account Is Locked             |
|    99    |      \*       |         Implementation Specific Field         |

It is worth noting that `99` is a general code that can be used in any of the categories. It allows a node to provide non-standardized information to a DApp. Also, this table doesn't specify the `description` field. Nodes are free to choose what they put into the `description` field, it is allowed to omit the `description` field.

### Example

Value transaction from an account with a balance of 0. The node determines this transaction will always fail and rejects the transaction. The returned error would look like this:

```jsonc
{
	"jsonrpc": "2.0",
	"error": {
		"code": -32003,
		"message": "transaction rejected",
		"data": [
			{
				"code": 6,
				"description": "insufficient funds"
			}
		]
	},
	"id": 1234
}
```

The node doesn't use the account management most implementations provide but forwards a transaction to an external signing service. When this service could not be reached the node can return the following error:

```jsonc
{
	"jsonrpc": "2.0",
	"error": {
		"code": -32003,
		"message": "transaction rejected",
		"data": [
			{
				"code": 1,
				"description": "unable to sign transaction"
			},
			{
				"code": 99,
				"description": "signing service not available"
			}
		]
	},
	"id": null
}
```
