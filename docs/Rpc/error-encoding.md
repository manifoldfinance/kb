---
id: ref-error-codes-rpc
title: Error encoding and responses
weight: 7
---

# Error encoding and responses for JSON-RPC

:::warning

Error encoding respones may not match the underlying issue, take care in assuming 1:1 relationships

:::

## Provider and RPC

```typescript
// ErrorCodes from OpenMevSdk
export const errorCodes: ErrorCodes = {
  rpc: {
    invalidInput       : -32_000,
    resourceNotFound   : -32_001,
    resourceUnavailable: -32_002,
    transactionRejected: -32_003,
    methodNotSupported : -32_004,
    limitExceeded      : -32_005,
    parse              : -32_700,
    invalidRequest     : -32_600,
    methodNotFound     : -32_601,
    invalidParams      : -32_602, /* Invalid transaction envelope type: specified type \"0x02\" but including maxFeePerGas and maxPriorityFeePerGas requires type: \"0x2\"", data: None })) */
    internal           : -32_603, /* Cannot read properties of undefined (reading 'message', data: Some(Object({"originalError": Object({}) })) */
  },
  provider: {
    userRejectedRequest: 4_001,
    unauthorized       : 4_100, /* UNAUTHORIZED */
    unsupportedMethod  : 4_200, /* UNSUPPORTEDMETHOD */
    disconnected       : 4_900,
    chainDisconnected  : 4_901,
  },
};
```

## Flashbots RPC Methods Parameters

| **Parameters** | **Description** |
| --- | --- |
| txs | Array[String], A list of signed transactions to execute in an atomic bundle |
| blockNumber | String, a hex encoded block number for which this bundle is valid on |
| minTimestamp(Optional) | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| maxTimestamp(Optional) | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| revertingTxHashes(Optional) | Array[String], list of tx hashes within the bundle that are allowed to revert |

### Default Parameters

The default block parameter The following methods have an extra default block parameter:

-   eth_getBalance
-   eth_getCode
-   eth_getTransactionCount
-   eth_getStorageAt
-   eth_call

When requests are made that act on the state of Ethereum, the last default block parameter determines the height of the block.

The following options are possible for the defaultBlock parameter:

| **Encoding** | **param**  | **description**                    |
| ------------ | ---------- | ---------------------------------- |
| HEX          | String     | an integer block number            |
| String       | "earliest" | for the earliest/genesis block     |
| String       | "latest"   | for the latest mined block         |
| String       | "pending"  | for the pending state/transactions |

| **Type**          | **Code** | **Description**  | **0** |
| ----------------- | -------- | ---------------- | ----- |
| PARSE_ERROR:      | -32700,  | Parse error      | 1     |
| INVALID_REQUEST:  | -32600,  | Invalid Request  | 2     |
| METHOD_NOT_FOUND: | -32601,  | Method not found | 3     |
| INVALID_PARAMS:   | -32602,  | Invalid params   | 4     |
| INTERNAL_ERROR:   | -32603,  | Internal error   | 5     |
| SERVER_ERROR:     | -32000,  | Server error     | 6     |

---

### Reference: WalletConnect Typescript Error Encoding

```typescript
// source: https://github.com/WalletConnect/walletconnect-utils/blob/master/jsonrpc/utils/src/constants.ts#L1-#L20
export const PARSE_ERROR = "PARSE_ERROR";
export const INVALID_REQUEST = "INVALID_REQUEST";
export const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
export const INVALID_PARAMS = "INVALID_PARAMS";
export const INTERNAL_ERROR = "INTERNAL_ERROR";
export const SERVER_ERROR = "SERVER_ERROR";

export const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
export const SERVER_ERROR_CODE_RANGE = [-32000, -32099];

export const STANDARD_ERROR_MAP = {
	[PARSE_ERROR]: { code: -32700, message: "Parse error" },
	[INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
	[METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
	[INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
	[INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
	[SERVER_ERROR]: { code: -32000, message: "Server error" },
};

export const DEFAULT_ERROR = SERVER_ERROR;
```

### Reference: Anvil Error Codes

```rust
// https://github.com/foundry-rs/foundry/blob/master/anvil/rpc/src/error.rs#L103-#L124
impl ErrorCode {
    /// Returns the error code as `i64`
    pub fn code(&self) -> i64 {
        match *self {
            ErrorCode::ParseError => -32700,
            ErrorCode::InvalidRequest => -32600,
            ErrorCode::MethodNotFound => -32601,
            ErrorCode::InvalidParams => -32602,
            ErrorCode::InternalError => -32603,
            ErrorCode::TransactionRejected => -32003,
            ErrorCode::ExecutionError => 3,
            ErrorCode::ServerError(c) => c,
        }
    }

    /// Returns the message associated with the error
    pub const fn message(&self) -> &'static str {
        match *self {
            ErrorCode::ParseError => "Parse error",
            ErrorCode::InvalidRequest => "Invalid request",
            ErrorCode::MethodNotFound => "Method not found",
            ErrorCode::InvalidParams => "Invalid params",
            ErrorCode::InternalError => "Internal error",
            ErrorCode::TransactionRejected => "Transaction rejected",
            ErrorCode::ServerError(_) => "Server error",
            ErrorCode::ExecutionError => "Execution error",
        }
    }
}
```

## EIP-234

```typescript

/**
 *
 * @export
 * errorValues
 * @summary EIP-234 Error Values
 * @see {@link https://github.com/ethereum/EIPs/blob/master/EIPS/eip-234.md}
 */

export const errorValues = {
  '-32700': {
    'PARSE_ERROR': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
  },
},
  '-32600': {
    'INVALID_REQUEST': {
    standard: 'JSON RPC 2.0',
    message: 'The JSON sent is not a valid Request object.',
    },
  },
  '-32601': {
    'METHOD_NOT_FOUND': {
    standard: 'JSON RPC 2.0',
    message: 'The method does not exist / is not available.',
    },
  },
  '-32602': {
    'INVALID_PARAMS': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid method parameter(s).',
   /* Example */
   /* Invalid transaction envelope type: specified type \"0x02\" but including maxFeePerGas and maxPriorityFeePerGas requires type: \"0x2\"", data: None })) */
    },
  },
  '-32603': {
    'INTERNAL_ERROR': {
    standard: 'JSON RPC 2.0',
    message: 'Internal JSON-RPC error.',
    },
    /* Example */
    /* /* Cannot read properties of undefined (reading 'message', data: Some(Object({"originalError": Object({}) })) */
  },
  // eth_getStorageAt [ "0x<address>", { "blockHash": "0x<non-canonical-block-hash>", "requireCanonical": true } -> raise block-not-canonical error
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md#:~:text=If%20the%20block%20is%20not%20found,found%20rather%20than%20block%2Dnot%2Dcanonical.
  '-32000': {
    'SERVER_ERROR': {
    standard: 'EIP-1474, EIP-1898',
    message: 'Server error: Invalid input, unable to locate canonical block',
    },
  },
  // eth_getStorageAt [ "0x<address>", { "blockHash": "0x<non-existent-block-hash>" } -> raise block-not-found error
  // eth_getStorageAt [ "0x<address>", { "blockHash": "0x<non-existent-block-hash>", "requireCanonical": false } -> raise block-not-found error
  // eth_getStorageAt [ "0x<address>", { "blockHash": "0x<non-existent-block-hash>", "requireCanonical": true } -> raise block-not-found error
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md#:~:text=If%20the%20block%20is%20not%20found,found%20rather%20than%20block%2Dnot%2Dcanonical.
  '-32001': {
    standard: 'EIP-1474, EIP-1898',
    message: 'Server error: Requested resource, block,  not found.',
  },
  '-32002': {
    standard: 'EIP-1474',
    message: 'Resource unavailable.',
  },
  '-32003': {
    standard: 'EIP-1474',
    message: 'Transaction rejected.',
  },
  '-32004': {
    standard: 'EIP-1474',
    message: 'Method not supported.',
  },
  '-32005': {
    standard: 'EIP-1474',
    message: 'Request limit exceeded.',
  },
  '4001': {
    standard: 'EIP-1193',
    message: 'User rejected the request.',
  },
  '4100': {
    "UNAUTHORIZED": {
    standard: 'EIP-1193',
    message: 'The requested account and/or method has not been authorized by the user.',
  },
},
  '4200': {
    "UNSUPPORTED_METHOD": {
    standard: 'EIP-1193',
    message: 'The requested method is not supported by this Ethereum provider.',
  },
},
  '4900': {
    "DISCONNECTED":{
    standard: 'EIP-1193',
    message: 'The provider is disconnected from all chains.',
  },
},
  '4901': {
    "CHAIN_DISCONNECTED": {
    standard: 'EIP-1193',
    message: 'The provider is disconnected from the specified chain.',
    },
  }
}
```

## EVM execution status codes

> These codes require custom provider support

```typescript
/**
 * EVM execution status codes
 */
enum class EVMExecutionStatusCode(val number: Int) {
  SUCCESS(0),
  FAILURE(1),
  REVERT(2),
  OUT_OF_GAS(3),
  INVALID_INSTRUCTION(4),
  UNDEFINED_INSTRUCTION(5),
  STACK_OVERFLOW(6),
  STACK_UNDERFLOW(7),
  BAD_JUMP_DESTINATION(8),
  INVALID_MEMORY_ACCESS(9),
  CALL_DEPTH_EXCEEDED(10),
  STATIC_MODE_VIOLATION(11),
  PRECOMPILE_FAILURE(12),
  CONTRACT_VALIDATION_FAILURE(13),
  ARGUMENT_OUT_OF_RANGE(14),
  WASM_UNREACHABLE_INSTRUCTION(15),
  WASM_TRAP(16),
  INTERNAL_ERROR(-1),
  REJECTED(-2),
  OUT_OF_MEMORY(-3),
  HALTED(-4);
}
```
