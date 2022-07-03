---
sidebar_position: 2
id: dev-pltform
title: Platform Overview
description: An overview of the Manifold Platform
---

# Platform Overview

> Documentation for Integration Partners, Application Partners, End Users and Searchers

> [status page](https://status.manifoldfinance.com/)

> v2022.01.11 v2022.02.10

## Content summary

-   [📚 Summary](#---summary)
-   [✅ Overview](#--overview)
-   [📖 Comparison](#comparison)
-   [📐 Sushi Relay API Reference](#---sushi-relay-api-reference)
-   [🧰 Specification](#---specification)
-   [📐 Technical Integration / SDK](#---technical-integration---sdk)
    -   [New Features for SDK](#new-features-for-sdk)

## 📚 Summary

> OpenMEV is a (permission-based) RPC network layer connected to MEV-enabled block producer pools. By having a private connection we can enable protocols and dapps a consistent protection against MEV (maximal extracted value). MEV is a category of transactions that include 'sandwich trades, front running, back running, arbitrage, etc'. Additional services can be built and offered, such as 'Pay for Order Flow', 'Account Abstraction (Buterin, EIP 4337), Carrier Transactions, etc. By privatizing user transaction flow we can enable the recapture of arbitrage/slippage back to the originating user trade.

## ✅ Overview

**[docs.openmev.org](https://docs.openmev.org)**

## Comparison

[see docs.openmev.org/compare](https://docs.openmev.org/compare)

> Note, we are in the process of overhauling our documentation process - please only refer to docs.openmev.org, docs.sushirelay.com or this repo

## SushiGuard: OpenMEV for SushiSwap

> 🔍 Note SushiRelay is the backend infrastructure component, while SushiGuard is the forward facing name of the service to end users

[see the available RPC methods](https://docs.sushirelay.com)

### app.sushi.com](https://app.sushi.com)

OpenMEV/Sushi Relay is live on app.sushi.com - to see the frontend integration you can see this feature branch [integration branch on the sushiswap frontend](https://github.com/manifoldfinance/sushiswap-interface/tree/feat/openmev-relay)

## 📐 Sushi Relay API Reference

> v0.0.1 RPC and API Overview

## Response RPC Methods

These are methods we support for which we return static responses to ensure compliance

```
eth_chainId
eth_protocolVersion
eth_mining
eth_hashrate
eth_accounts
eth_syncing
eth_coinbase
net_listening
net_peerCount
net_version
web3_clientVersion
```

## Supported RPC

These are all methods we expose and proxy to our internal eth clients

```
eth_blockNumber
eth_call
eth_estimateGas
eth_gasPrice
eth_getBalance
eth_getBlockByHash
eth_getBlockByNumber
eth_getBlockTransactionCountByHash
eth_getBlockTransactionCountByNumber
eth_getCode
eth_getStorageAt
eth_getTransactionByBlockHashAndIndex
eth_getTransactionByBlockNumberAndIndex
eth_getTransactionByHash
eth_getTransactionCount
eth_getTransactionReceipt
eth_getUncleByBlockHashAndIndex
eth_getUncleByBlockNumberAndIndex
eth_getUncleCountByBlockHash
eth_getUncleCountByBlockNumber
eth_sign
eth_signTypedData
eth_sendRawTransaction
```

### OpenMEV

To send a transaction that you would want a rebate on, you use this custom rpc methods:

```
manifold_sendTransaction
```

#### RPC Endpoints

##### HTTPS

https://api.sushirelay.com/v1

### WebSocket

#### Staging

```
wss://api-stag.sushirelay.com/v1
```

#### Production

```
wss://api.sushirelay.com/v1
```

#### Example: Web socket usage

```sh
$ wscat -c wss://api.sushirelay.com/v1
```

```bash
< {"method":"manifold_motd","jsonrpc":"2.0","params":{"result":{"notice":"THIS IS A NOTICE OF MONITORING OF MANIFOLD FINANCE, INC NETWORK INFORMATION SYSTEMS  By logging into Manifold Finance, Inc computer systems, you acknowledge and consent to monitoring of this system.  Network Policy <https://docs.manifoldfinance.com/network/policy>  By using this network, you certify that you have read, understand, and agree to abide by the Rules of Behavior for Manifold Finance Network Platform."}}}
>
```
