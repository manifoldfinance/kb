---
sidebar_position: 1
id: router-zapper
title: Atomic deposits and withdrawls
description: OpenMevZapperV01
---

# OpenMevZapperV01

Provides an optimal UniswapV2Pair Liquidity deposits and withdrawls with a single token / eth (or relevant native currency)

## Functions

### constructor

```solidity
  function constructor(
  ) public
```

### receive

```solidity
  function receive(
  ) external
```

### withdrawLiquidityAndSwap

```solidity
  function withdrawLiquidityAndSwap(
    address pairAddress,
    uint256 withdrawAmount,
    address desiredToken,
    uint256 desiredTokenOutMin
  ) external returns (uint256 amountOut)
```

Removes liquidity from an ERC-20⇄ERC-20 pool into a single token / ETH . msg.sender should have already given the zapper an allowance of at least liquidity on the pool.

#### Parameters:

| Name                 | Type    | Description                                    |
| :------------------- | :------ | :--------------------------------------------- |
| `pairAddress`        | address | Address of V2 pool                             |
| `withdrawAmount`     | uint256 | Amount of liquidity to withdraw                |
| `desiredToken`       | address | Withdrawl token desired                        |
| `desiredTokenOutMin` | uint256 | Minimum amount of total desiredToken, can be 0 |

#### Return Values:

| Type    | Description                               |
| :------ | :---------------------------------------- |
| uint256 | amountOut Amount of desiredToken received |

### swapAndStakeLiquidity

```solidity
  function swapAndStakeLiquidity(
    address tokenA,
    address tokenB,
    uint256 amountA,
    uint256 amountBMin
  ) external returns (uint256 liquidity)
```

/ @notice Adds liquidity to an ERC-20⇄ERC-20 pool from a single token. msg.sender should have already given the router an allowance of at least amountA on tokenA

#### Parameters:

| Name         | Type    | Description                                                                |
| :----------- | :------ | :------------------------------------------------------------------------- |
| `tokenA`     | address | Token in pool                                                              |
| `tokenB`     | address | Token in pool                                                              |
| `amountA`    | uint256 | Amount of token A desired to add to pool, inclusive of swap half to tokenB |
| `amountBMin` | uint256 | Minimum amount of token B on swap, can be 0                                |

#### Return Values:

| Type    | Description                                                      |
| :------ | :--------------------------------------------------------------- |
| uint256 | liquidity amount of liquidity token received, sent to msg.sender |

### swapETHAndStakeLiquidity

```solidity
  function swapETHAndStakeLiquidity(
    address tokenB,
    uint256 amountBMin
  ) external returns (uint256 liquidity)
```

Adds liquidity to an ERC-20⇄ERC-20 pool from eth. msg.value is treated as a amountETHDesired. Leftover ETH, if any, is returned to msg.sender

#### Parameters:

| Name         | Type    | Description                                 |
| :----------- | :------ | :------------------------------------------ |
| `tokenB`     | address | Token in pool                               |
| `amountBMin` | uint256 | Minimum amount of token B on swap, can be 0 |

#### Return Values:

| Type    | Description                                                      |
| :------ | :--------------------------------------------------------------- |
| uint256 | liquidity amount of liquidity token received, sent to msg.sender |

    f
