---
sidebar_position: 3
id: howto-send_bundle
title: Sending a Bundle Transaction
description: How to guide on Sending a Bundle Transaction to SecureRpc
---



```typescript
import { providers,Wallet } from "ethers.js";
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";
const provider = new providers.JsonRpcProvider({ url: ETHEREUM_RPC_URL,
});
// Standard json rpc provider directly from ethers.js. For example you can use Infura, Alchemy, or your own node.

const authSigner = new Wallet( "0x0000000000000000000000000000000000000000000000000000000000000000"
);

// `authSigner` is an Ethereum private key that does NOT store funds and is NOT your bot's primary key.
// This is an identifying key for signing payloads to establish reputation and whitelisting

const flashbotsProvider = await FlashbotsBundleProvider.create(
  provider,
  authSigner
);
// Flashbots provider requires passing in a standard provider and an auth signer
```

```typescript
const ethers = require("ethers.js");
const {
  FlashbotsBundleProvider,
} = require("@flashbots/ethers-provider-bundle");
const provider = new ethers.providers.JsonRpcProvider({
  url: ETHEREUM_RPC_URL,
});

const authSigner = new ethers.Wallet( "0x2000000000000000000000000000000000000000000000000000000000000000"
);
const flashbotsProvider = await FlashbotsBundleProvider.create(
  provider,
  authSigner
);

const signedBundle = await flashbotsProvider.signBundle([
  {
    signer: SOME_SIGNER_TO_SEND_FROM,
    transaction: SOME_TRANSACTION_TO_SEND,
  },
]);

const bundleReceipt = await flashbotsProvider.sendRawBundle(
  signedBundle,
  TARGET_BLOCK_NUMBER
);
```