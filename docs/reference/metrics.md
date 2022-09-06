---
id: ref-metrics
title: Metrics and Key Performance Indicators
description: Collected KPI's and Metrics
sidebar_position: 4
---

# Manifold Finance Public Dashboard Metrics

> last updated 2022.08.24

## Business Metrics

Latest Dollar Value - Send Transaction  
[api.securerpc.com/v1](api.securerpc.com/v1)- SushiSwapV1  
[api.securerpc.com/v1](api.securerpc.com/v1)- Uniswap2/V3

Latest Dollar Value - External Successful Send Bundle - 14 day  
[api.securerpc.com/v1](api.securerpc.com/v1)- SushiSwapV1  
[api.securerpc.com/v1](api.securerpc.com/v1)- Uniswap2/V3

Total Dollar Value - External Submitted Successful Bundles/Transactions 28day  
[api.securerpc.com/v1](api.securerpc.com/v1)- SushiSwapV1  
[api.securerpc.com/v1](api.securerpc.com/v1)- Uniswap2/V3

Delta Dollar Value - External Successful Bundles 14day  
[api.securerpc.com/v1](api.securerpc.com/v1)- SushiSwapV1  
[api.securerpc.com/v1](api.securerpc.com/v1)- Uniswap2/V3

## Transaction and Bundle Metrics

### Successful Requests

### Failed Requests

Failed Requests - Client Error  
Failed Requests - Internal Error

### Transaction Routing

Total Send Transaction Requests  
Successful Send Transaction Requests  
Failed Send Transaction Requests  
Successful Relay Transaction Requests  
Failed Relay Transaction Requests

### Bundle Routing

Total Send Bundle Requests  
Successful Send Bundle Requests  
Failed Send Bundle Requests  
Total Relay Bundle Requests

## Custom Queries

These are log topics

## Process Filter Topics

| **process_filter**                                                                   |
| ------------------------------------------------------------------------------------ |
| processing_chain_inclusion_events_repartition_v2_repartition_offsets_total           |
| processing_filter_chain_inclusion_events_left_repartition_offsets_total              |
| processing_filter_chain_inclusion_events_other_join_store_changelog_offsets_total    |
| processing_filter_chain_inclusion_events_right_repartition_offsets_total             |
| processing_filter_chain_inclusion_events_this_join_store_changelog_offsets_total     |
| processing_filter_chain_inclusion_events_v2_other_join_store_changelog_offsets_total |
| processing_filter_chain_inclusion_events_v2_right_repartition_offsets_total          |
| processing_filter_chain_inclusion_events_v2_this_join_store_changelog_offsets_total  |
| processing_send_bundle_keys_for_timeout_changelog_offsets_total                      |
| processing_send_bundle_timeout_cache_changelog_offsets_total                         |
| processing_send_bundle_timeout_for_key_changelog_offsets_total                       |
| processing_send_tx_keys_for_timeout_changelog_offsets_total                          |
| processing_send_tx_timeout_cache_changelog_offsets_total                             |
| processing_send_tx_timeout_for_key_changelog_offsets_total                           |
| processing_uniswap_v2_events_reorg_state_changelog_offsets_total                     |
| processing_uniswap_v2_liquidity_state_changelog_offsets_total                        |

## Eth Topics

| **eth_topics**                              |
| ------------------------------------------- |
| eth_block_account_balances_offsets_total    |
| eth_block_account_balances_v2_offsets_total |
| eth_block_receipts_offsets_total            |
| eth_block_receipts_v2_offsets_total         |
| eth_block_sushi_liquidity_offsets_total     |
| eth_block_uni_liquidity_offsets_total       |
| eth_blocks_offsets_total                    |
| eth_blocks_v2_offsets_total                 |
| eth_gas_prices_offsets_total                |
| eth_gas_prices_v2_offsets_total             |
| eth_raw_transaction_new_offsets_total       |
| eth_uniswap_v2_events_offsets_total         |
| eth_uniswap_v2_liquidity_offsets_total      |
| eth_uniswap_v2_pair_offsets_total           |
| eth_uniswap_v2_router_offsets_total         |

## Manifold / MEV Topics

| **manifold_topics**                                   |
| ----------------------------------------------------- |
| manifold_transaction_timed_out_offsets_total          |
| manifold_transaction_timeouts_pending_offsets_total   |
| manifold_transaction_timeouts_triggered_offsets_total |
| manifold_bundle_timeouts_pending_offsets_total        |
| manifold_bundle_timeouts_triggered_offsets_total      |
| manifold_bundle_unsigned_offsets_total                |
| manifold_platform_account_offsets_total               |
| manifold_platform_token_offsets_total                 |
| manifold_relay_bundle_error_offsets_total             |
| manifold_relay_bundle_sent_offsets_total              |
| manifold_relay_transaction_error_offsets_total        |
| manifold_relay_transaction_sent_offsets_total         |
| manifold_transaction_arbing_offsets_total             |
| manifold_transaction_events_offsets_total             |
| manifold_transaction_mempool_error_offsets_total      |
| manifold_transaction_mempool_sent_offsets_total       |
| manifold_transaction_new_offsets_total                |
| manifold_transaction_pending_offsets_total            |
| manifold_transaction_relayed_offsets_total            |
| manifold_transaction_timed_out_offsets_total          |
| manifold_transaction_timeouts_pending_offsets_total   |
| manifold_transaction_timeouts_triggered_offsets_total |

## JSON-RPC Methods

### Requests

eth_accounts  
eth_blockNumber  
eth_call  
eth_chainId  
eth_coinbase  
eth_estimateGas  
eth_gasPrice  
eth_getBalance  
eth_getBlockByHash  
eth_getBlockByNumber  
eth_getBlockTransactionCountByHash  
eth_getBlockTransactionCountByNumber  
eth_getCode  
eth_getLogs  
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
eth_protocolVersion  
eth_createAccessList[^1]

net_listening  
net_peerCount  
net_version  
web3_clientVersion  
eth_sendRawTransaction

### Flashbots Namespace

eth_sendBundle  
eth_callBundle flashbots_getBundleStats flashbots_getUserStats

### Manifold Namespace

eth_multicall eth_callMultiBundle eth_submitRawBlock eth_watchCall eth_sendUncheckedTransaction eth_getPairAddress eth_getPairReserves eth_getBlocksFromArray

#### Admin Namespace

> These Methods are Authenticated and Authorized only manifold_dropTransaction manifold_evictTransaction trace_replayTransactions debug_traceTransaction

> [see https://github.com/manifoldfinance/libsushi](https://github.com/manifoldfinance/libsushi) for usage manifold_bundleStatus  
> manifold_getGasPrices  
> manifold_sendBundle  
> manifold_sendTransaction  
> manifold_transactionStatus

[^1]: takes eth_callBundle and adds the arguments:

    SimulationLogs bool CreateAccessList bool
