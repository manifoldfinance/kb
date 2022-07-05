---
sidebar_position: 1
id: router-intro
title: OpenMev Router
description: Overview and introduction for OpenMevRouterV01
---

# OpenMevRouter

Optimal MEV router contract (IUniswapV2Router compatible)

For the User it aims to offer:

1. Better order routing for minimal slippage
2. At source MEV
3. Lower gas costs for swaps and liquidity changes

For the Liquidity providers:

1. Inclusive rewards
2. Reduced impermanent loss

For the Exchange providers:

1. Inclusive rewards
2. Increased adoption

For the Ethereum environment:

1. Reduced MEV attacks and fee spikes
2. Healthy growth in MEV space with inclusive incentives

Version 1 MEV Strategies

-   cross-dex backruns for swaps
-   reduced slippage fallback router The contract leverages and depends on 3 external protocols:

1. Uniswap V2 (or equivalent on another network) for backrun completion and fallback swaps
2. BentoBox for flashloan backruns
3. Aave V2 for flashloan backruns that require more liquidity than BentoBox has

Business logic

-   Profits from backruns are retained on the contract to improve efficiency (gas cost and profit) of future backruns The contract should therefore be deployed or ownership transferred to a multisig address
-   Harvest function can be called from the multisig owners to distribute profits by consensus

Dev Notes

-   Normal sushiswap router functions. Swaps have 2 material changes:
    1. slippage fallback router (uniswap v2)
    2. backruns after user swap
-   For gas and size efficiency, requirements are modified to revert with custom errors
-   Factory hash is now passed to library functions because we are working with 2 factories
-   Other changes are trade-offs for reducing contract size and / or gas usage and stack too deep errors

## Methods

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### acceptOwnership

```solidity title="Solidity"
function acceptOwnership() external nonpayable
```

:::note acceptOwnership

Details Transfers ownership of the contract to the caller. Can only be called by a new potential owner set by the current owner. 

:::

### addLiquidity

Adds liquidity to an ERC-20⇄ERC-20 pool. `msg.sender` should have already given the router an allowance of at least `amountADesired`/`amountBDesired` on `tokenA`/`tokenB`

```solidity title="Solidity"
function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external nonpayable returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```

#### Parameters

| Name           | Type    | Description                                                       |
| -------------- | ------- | ----------------------------------------------------------------- |
| tokenA         | address | Token in pool                                                     |
| tokenB         | address | Token in pool                                                     |
| amountADesired | uint256 | Amount of token A desired to add to pool                          |
| amountBDesired | uint256 | Amount of token B desired to add to pool                          |
| amountAMin     | uint256 | Minimum amount of token A, can be 0                               |
| amountBMin     | uint256 | Minimum amount of token B, can be 0                               |
| to             | address | Address to receive liquidity token                                |
| deadline       | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name      | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| amountA   | uint256 | exact amount of token A added to pool |
| amountB   | uint256 | exact amount of token B added to pool |
| liquidity | uint256 | amount of liquidity token received    |

### addLiquidityETH

Adds liquidity to an ERC-20⇄WETH pool with ETH. msg.sender should have already given the router an allowance of at least amountTokenDesired on token. msg.value is treated as a `amountETHDesired`. Leftover ETH, if any, is returned to msg.sender

```solidity title="Solidity"
function addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```

#### Parameters

| Name               | Type    | Description                                                       |
| ------------------ | ------- | ----------------------------------------------------------------- |
| token              | address | Token in pool                                                     |
| amountTokenDesired | uint256 | Amount of token desired to add to pool                            |
| amountTokenMin     | uint256 | Minimum amount of token, can be 0                                 |
| amountETHMin       | uint256 | Minimum amount of ETH, can be 0                                   |
| to                 | address | Address to receive liquidity token                                |
| deadline           | uint256 | Unix timestamp in seconds after which the transaction will revert |

#### Returns

| Name        | Type    | Description                         |
| ----------- | ------- | ----------------------------------- |
| amountToken | uint256 | exact amount of token added to pool |
| amountETH   | uint256 | exact amount of ETH added to pool   |
| liquidity   | uint256 | amount of liquidity token received  |

### cancelOwnershipTransfer

```solidity title="Solidity"
function cancelOwnershipTransfer() external payable
```

:::note
 Details Cancel a transfer of ownership to a new account. Can only be called by the current owner. 

:::

### executeOperation

Called from Aave Lending pool after the contract has received the flash loaned amount [^1]

```solidity title="Solidity"
function executeOperation(address[] assets, uint256[] amounts, uint256[] premiums, address initiator, bytes params) external nonpayable returns (bool)
```

:::note 
Details Reverts if not profitable. 
:::

#### Parameters

| Name      | Type      | Description                                |
| --------- | --------- | ------------------------------------------ |
| assets    | address[] | Array of tokens to loan                    |
| amounts   | uint256[] | Array of amounts to loan                   |
| premiums  | uint256[] | Array of premiums to repay on loan amounts |
| initiator | address   | Address of flashloan initiator             |
| params    | bytes     | Encoded factories and tokens               |

#### Returns

| Name | Type | Description                |
| ---- | ---- | -------------------------- |
| \_0  | bool | success indicating success |

## Events

### LoanError

```solidity title="Solidity"
event LoanError(bool indexed isAave, address indexed token, uint256 amountIn)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| isAave `indexed` | bool    | undefined   |
| token `indexed`  | address | undefined   |
| amountIn         | uint256 | undefined   |

### OpenMEV

```solidity title="Solidity"
event OpenMEV(address indexed user, address indexed token, uint256 value)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| user `indexed`  | address | undefined   |
| token `indexed` | address | undefined   |
| value           | uint256 | undefined   |

### OwnershipTransferred

```solidity title="Solidity"
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

[^1]: see the Aave documentation for more information: <https://docs.aave.com/developers/v/2.0/guides/flash-loans>