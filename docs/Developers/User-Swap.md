---
sidebar_position: 5
id: dev-example-swap
title: User Swaps
description: Example User Swap workflow and response
---

## Transaction Workflow from user perspective 

0. Swap Tx Generated

1. Tx received by SushiGuard

2. Tx relayed by SushiGuard (success)

> **Note**   
> Message error populated back to user

### Example: JSON API Response 

```json
{
  "Ethermine RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "result": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "jsonrpc": "2.0"
    }
  },
  "Flashbots RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "result": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "jsonrpc": "2.0"
    }
  },
  "Eden Network RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "error": {
        "code": -32000,
        "message": "already known"
      },
      "jsonrpc": "2.0"
    }
  }
}

3. Tx mined successfully

4. Swap Successful


```json
{
  "Ethermine RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "result": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "jsonrpc": "2.0"
    }
  },
  "Flashbots RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "result": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "jsonrpc": "2.0"
    }
  },
  "Eden Network RPC": {
    "response": {
      "id": "0x1390a5e28b11f3b3af86f79f313445895f35b6b320f7b30138aea6200f263509",
      "error": {
        "code": -32000,
        "message": "already known"
      },
      "jsonrpc": "2.0"
    }
  }
}
```
