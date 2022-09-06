---
sidebar_position: 1
id: rpc-intro
title: JSON RPC Overview
description: Overview and introduction for Ethereum JSON RPC
---

## JSON-RPC Conformance Reference

Type and data information for validation and conformance.

### Validation and Types

Below type description can also be found in [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)

### `Quantity`

Values of a field of `QUANTITY` type **MUST** be encoded as a hexadecimal string with a `0x` prefix and the leading 0s stripped (except for the case of encoding the value `0`) matching the regular expression

```
^0x(?:0|(?:[a-fA-F1-9][a-fA-F0-9]*))
```

-   A `Quantity` value **MUST** be hex-encoded.
-   A `Quantity` value **MUST** be "0x"-prefixed.
-   A `Quantity` value **MUST** be expressed using the fewest possible hex digits per byte.
-   A `Quantity` value **MUST** express zero as "0x0".

### `Data`

Values of a field of `DATA` type **MUST** be encoded as a hexadecimal string with a `0x` prefix matching the regular expression `

```
^0x(?:[a-fA-F0-9]{2})*
```

-   A `Data` value **MUST** be hex-encoded.
-   A `Data` value **MUST** be “0x”-prefixed.
-   A `Data` value **MUST** be expressed using two hex digits per byte.

## What is the difference between `DATA` and `QUANTITY`?

The difference between the types “`DATA`” and “`QUANTITY`” is that “`DATA`” always comes specified with a required length (ex: 20 Bytes), so you'll need to make sure the string you pass in is the right length. In contrast, `QUANTITY` does not have length requirements.

For example given a parameter type: “DATA, 20 Bytes”, a valid input would be:

```
"0x0000000000000000000000000000000000000003"
```

_note: every two hex characters make one byte, so that string is `0x` followed by forty hex characters_

However, if this were a QUANTITY, a valid input would be:

```
"0x3"
```

### `Block Identifier`

Since there is no way to clearly distinguish between a `Data` parameter and a `Quantity` parameter, [EIP-1898](https://eips.ethereum.org/EIPS/eip-1898) provides a format to specify a block either using the block hash or block number. The block identifier is a JSON `object` with the following fields:

| **Position** | **Name** | **Type** | **Description** |
| --- | --- | --- | --- |
| `0A` | `blockNumber` | `Quantity` | The block in the canonical chain with this number |
| `0B` | `blockHash` | `Data` | The block uniquely identified by this hash. The blockNumber and blockHash properties are mutually exclusive; exactly one of them must be set. |
| `1B` | `requireCanonical` | `boolean` | (optional) Whether to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the blockHash tag. Defaults to false. |

If the block is not found, the callee SHOULD raise a JSON-RPC error (the recommended error code is `-32001: Resource not found`. If the tag is `blockHash` and `requireCanonical` is `true`, the callee _SHOULD_ additionally raise a JSON-RPC error if the block is not in the canonical chain (the recommended error code is `-32000: Invalid input` and in any case should be different than the error code for the block not found case so that the caller can distinguish the cases). The block-not-found check _SHOULD_ take precedence over the block-is-canonical check, so that if the block is not found the callee raises block-not-found rather than block-not-canonical.

## Errors

The list of error codes introduced by this specification can be found below.

| Code   | Message                    | Meaning                                        |
| ------ | -------------------------- | ---------------------------------------------- |
| -32700 | Parse error                | Invalid JSON was received by the server.       |
| -32600 | Invalid Request            | The JSON sent is not a valid Request object.   |
| -32601 | Method not found           | The method does not exist / is not available.  |
| -32602 | Invalid params             | Invalid method parameter(s).                   |
| -32603 | Internal error             | Internal JSON-RPC error.                       |
| -32000 | Server error               | Generic client error while processing request. |
| -38001 | Unknown payload            | Payload does not exist / is not available.     |
| -38002 | Invalid payload attributes | Payload attributes are invalid / inconsistent. |

Each error returns a `null` `data` value, except `-32000` which returns the `data` object with a `err` member that explains the error encountered.

### Authorization Error Codes

| Code | Possible Return message | Description |
| --- | --- | --- |
| 1 | Unauthorized | Should be used when some action is not authorized, e.g. sending from a locked account. |
| 2 | Action not allowed | Should be used when some action is not allowed, e.g. preventing an action, while another depending action is processing on, like sending again when a confirmation popup is shown to the user (?). |
| 3 | Execution error | Will contain a subset of custom errors in the data field. See below. |

### Ethereum Error Codes

Custom error `3` can contain custom error(s) to further explain what went wrong.  
They will be contained in the `data` field of the RPC error message as follows:

| Code | Possible Return message | Description |
| --- | --- | --- |
| 100 | X doesn’t exist | Should be used when something which should be there is not found. (Doesn’t apply to eth_getTransactionBy\_ and eth_getBlock\_. They return a success with value `null`) |
| 101 | Requires ether | Should be used for actions which require something else, e.g. gas or a value. |
| 102 | Gas too low | Should be used when a to low value of gas was given. |
| 103 | Gas limits exceeded | Should be used when a limit is exceeded, e.g. for the gas limit in a block. |
| 104 | Rejected | Should be used when an action was rejected, e.g. because of its content (too long contract code, containing wrong characters ?, should differ from `-32602` - Invalid params). |
| 105 | Ether too low | Should be used when a to low value of Ether was given. |

#### Ethereum Generic Codes

| Code | Possible Return message | Description                                                             |
| ---- | ----------------------- | ----------------------------------------------------------------------- |
| 106  | Timeout                 | Should be used when an action timedout.                                 |
| 107  | Conflict                | Should be used when an action conflicts with another (ongoing?) action. |
