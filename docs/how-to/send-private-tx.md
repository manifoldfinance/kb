---
sidebar_position: 1
id: howto-send_private_tx
title: Sending a Private Transaction
description: How to guide on Sending a Private Transaction tto SecureRpc
---

## Sending a Private Transaction

To send a _single_ transaction without having to send it as a bundle, use the `sendPrivateTransaction` function. This method allows us to process transactions faster and more efficiently than regular bundles. When you send a transaction using this method, we will try to send it to miners over the next 25 blocks (up to, but not past the target block number).

```js
const tx = {
	from: wallet.address,
	to: wallet.address,
	value: "0x42",
	gasPrice: BigNumber.from(99).mul(1e9), // 99 gwei
	gasLimit: BigNumber.from(21000),
};
const privateTx = {
	transaction: tx,
	signer: wallet,
};
const res = await flashbotsProvider.sendPrivateTransaction(privateTx);
```

Optionally, you can set the following parameters to fine-tune your submission:

```js
// highest block number your tx can be included in
const maxBlockNumber = (await provider.getBlockNumber()) + 10;
// timestamp for simulations
const minTimestamp = 1645753192;
const res = await flashbotsProvider.sendPrivateTransaction(privateTx, { maxBlockNumber, minTimestamp });
```
