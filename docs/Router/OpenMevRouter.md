---
sidebar_position: 1
id: router-openmev
title: OpenMev Swap Router
description: OpenMevRouterV01
---

# OpenMevRouter



## Functions
### constructor
```solidity
  function constructor(
  ) public
```

Initialize contract by setting aave assets


### factory
```solidity
  function factory(
  ) external returns (address)
```




### WETH
```solidity
  function WETH(
  ) external returns (address)
```




### addLiquidity
```solidity
  function addLiquidity(
    address tokenA,
    address tokenB,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
  ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```
Adds liquidity to an ERC-20⇄ERC-20 pool. msg.sender should have already given the router an allowance of at least amountADesired/amountBDesired on tokenA/tokenB


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenA` | address | Token in pool
|`tokenB` | address | Token in pool
|`amountADesired` | uint256 | Amount of token A desired to add to pool
|`amountBDesired` | uint256 | Amount of token B desired to add to pool
|`amountAMin` | uint256 | Minimum amount of token A, can be 0
|`amountBMin` | uint256 | Minimum amount of token B, can be 0
|`to` | address | Address to receive liquidity token
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountA exact amount of token A added to pool
| uint256 | amountB exact amount of token B added to pool
| uint256 | liquidity amount of liquidity token received
### addLiquidityETH
```solidity
  function addLiquidityETH(
    address token,
    uint256 amountTokenDesired,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline
  ) external returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```
/ @notice Adds liquidity to an ERC-20⇄WETH pool with ETH. msg.sender should have already given the router an allowance of at least amountTokenDesired on token. msg.value is treated as a amountETHDesired. Leftover ETH, if any, is returned to msg.sender


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token in pool
|`amountTokenDesired` | uint256 | Amount of token desired to add to pool
|`amountTokenMin` | uint256 | Minimum amount of token, can be 0
|`amountETHMin` | uint256 | Minimum amount of ETH, can be 0
|`to` | address | Address to receive liquidity token
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountToken exact amount of token added to pool
| uint256 | amountETH exact amount of ETH added to pool
| uint256 | liquidity amount of liquidity token received
### removeLiquidity
```solidity
  function removeLiquidity(
    address tokenA,
    address tokenB,
    uint256 liquidity,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
  ) public returns (uint256 amountA, uint256 amountB)
```
Removes liquidity from an ERC-20⇄ERC-20 pool. msg.sender should have already given the router an allowance of at least liquidity on the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenA` | address | Token in pool
|`tokenB` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountAMin` | uint256 | Minimum amount of token A, can be 0
|`amountBMin` | uint256 | Minimum amount of token B, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountA Amount of token A received
| uint256 | amountB Amount of token B received
    f
### removeLiquidityETH
```solidity
  function removeLiquidityETH(
    address token,
    uint256 liquidity,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline
  ) public returns (uint256 amountToken, uint256 amountETH)
```
otice Removes liquidity from an ERC-20⇄WETH pool and receive ETH. msg.sender should have already given the router an allowance of at least liquidity on the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountTokenMin` | uint256 | Minimum amount of token, can be 0
|`amountETHMin` | uint256 | Minimum amount of ETH, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountToken Amount of token received
| uint256 | amountETH Amount of ETH received
    fun
### removeLiquidityWithPermit
```solidity
  function removeLiquidityWithPermit(
    address tokenA,
    address tokenB,
    uint256 liquidity,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amountA, uint256 amountB)
```
ice Removes liquidity from an ERC-20⇄ERC-20 pool without pre-approval, thanks to permit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenA` | address | Token in pool
|`tokenB` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountAMin` | uint256 | Minimum amount of token A, can be 0
|`amountBMin` | uint256 | Minimum amount of token B, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or uint(-1)
|`v` | uint8 | The v component of the permit signature
|`r` | bytes32 | The r component of the permit signature
|`s` | bytes32 | The s component of the permit signature

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountA Amount of token A received
| uint256 | amountB Amount of token B received
    funct
### removeLiquidityETHWithPermit
```solidity
  function removeLiquidityETHWithPermit(
    address token,
    uint256 liquidity,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amountToken, uint256 amountETH)
```
e Removes liquidity from an ERC-20⇄WETTH pool and receive ETH without pre-approval, thanks to permit


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountTokenMin` | uint256 | Minimum amount of token, can be 0
|`amountETHMin` | uint256 | Minimum amount of ETH, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or uint(-1)
|`v` | uint8 | The v component of the permit signature
|`r` | bytes32 | The r component of the permit signature
|`s` | bytes32 | The s component of the permit signature

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountToken Amount of token received
| uint256 | amountETH Amount of ETH received
    functio
### removeLiquidityETHSupportingFeeOnTransferTokens
```solidity
  function removeLiquidityETHSupportingFeeOnTransferTokens(
    address token,
    uint256 liquidity,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline
  ) public returns (uint256 amountETH)
```
Identical to removeLiquidityETH, but succeeds for tokens that take a fee on transfer. msg.sender should have already given the router an allowance of at least liquidity on the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountTokenMin` | uint256 | Minimum amount of token, can be 0
|`amountETHMin` | uint256 | Minimum amount of ETH, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountETH Amount of ETH received
    functio
### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
```solidity
  function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    address token,
    uint256 liquidity,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amountETH)
```
Identical to removeLiquidityETHWithPermit, but succeeds for tokens that take a fee on transfer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token in pool
|`liquidity` | uint256 | Amount of liquidity tokens to remove
|`amountTokenMin` | uint256 | Minimum amount of token, can be 0
|`amountETHMin` | uint256 | Minimum amount of ETH, can be 0
|`to` | address | Address to receive pool tokens
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or uint(-1)
|`v` | uint8 | The v component of the permit signature
|`r` | bytes32 | The r component of the permit signature
|`s` | bytes32 | The s component of the permit signature

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256 | amountETH Amount of ETH received
    functio
### swapExactTokensForTokens
```solidity
  function swapExactTokensForTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through. msg.sender should have already given the router an allowance of at least amountIn on the input token.

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountIn` | uint256 | Amount of input tokens to send.
|`amountOutMin` | uint256 | Minimum amount of output tokens that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapTokensForExactTokens
```solidity
  function swapTokensForExactTokens(
    uint256 amountOut,
    uint256 amountInMax,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. msg.sender should have already given the router an allowance of at least amountInMax on the input token.

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | Amount of output tokens to receive
|`amountInMax` | uint256 | Maximum amount of input tokens
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapExactETHForTokens
```solidity
  function swapExactETHForTokens(
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Swaps an exact amount of ETH for as many output tokens as possible, along the route determined by the path. The first element of path must be WETH, the last is the output token. amountIn = msg.value

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOutMin` | uint256 | Minimum amount of output tokens that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapTokensForExactETH
```solidity
  function swapTokensForExactETH(
    uint256 amountOut,
    uint256 amountInMax,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Receive an exact amount of ETH for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH. msg.sender should have already given the router an allowance of at least amountInMax on the input token.

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | Amount of ETH to receive
|`amountInMax` | uint256 | Maximum amount of input tokens
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapExactTokensForETH
```solidity
  function swapExactTokensForETH(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Swaps an exact amount of tokens for as much ETH as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH.

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountIn` | uint256 | Amount of input tokens to send.
|`amountOutMin` | uint256 | Minimum amount of ETH that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapETHForExactTokens
```solidity
  function swapETHForExactTokens(
    uint256 amountOut,
    address[] path,
    address to,
    uint256 deadline
  ) external returns (uint256[] amounts)
```
Receive an exact amount of tokens for as little ETH as possible, along the route determined by the path. The first element of path must be WETH. Leftover ETH, if any, is returned to msg.sender. amountInMax = msg.value

Require has been replaced with revert for gas optimization. Fallback alternate router check for insufficient output amount. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | Amount of output tokens that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| uint256[] | amounts Array of input token amount and all subsequent output token amounts
    functio
### swapExactTokensForTokensSupportingFeeOnTransferTokens
```solidity
  function swapExactTokensForTokensSupportingFeeOnTransferTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external
```
Identical to swapExactTokensForTokens, but succeeds for tokens that take a fee on transfer. msg.sender should have already given the router an allowance of at least amountIn on the input token.

Require has been replaced with revert for gas optimization. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountIn` | uint256 | Amount of input tokens to send.
|`amountOutMin` | uint256 | Minimum amount of output tokens that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
    functio

### swapExactETHForTokensSupportingFeeOnTransferTokens
```solidity
  function swapExactETHForTokensSupportingFeeOnTransferTokens(
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external
```
Identical to swapExactETHForTokens, but succeeds for tokens that take a fee on transfer. amountIn = msg.value

Require has been replaced with revert for gas optimization. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOutMin` | uint256 | Minimum amount of output tokens that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
    functio

### swapExactTokensForETHSupportingFeeOnTransferTokens
```solidity
  function swapExactTokensForETHSupportingFeeOnTransferTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] path,
    address to,
    uint256 deadline
  ) external
```
Identical to swapExactTokensForETH, but succeeds for tokens that take a fee on transfer.

Require has been replaced with revert for gas optimization. Attempt to back-run swaps.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountIn` | uint256 | Amount of input tokens to send.
|`amountOutMin` | uint256 | Minimum amount of ETH that must be received
|`path` | address[] | Array of token addresses. path.length must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity
|`to` | address | Address of receiver
|`deadline` | uint256 | Unix timestamp in seconds after which the transaction will revert
    functio

### quote
```solidity
  function quote(
  ) external returns (uint256 amountB)
```




### getAmountOut
```solidity
  function getAmountOut(
  ) external returns (uint256 amountOut)
```




### getAmountIn
```solidity
  function getAmountIn(
  ) external returns (uint256 amountIn)
```




### getAmountsOut
```solidity
  function getAmountsOut(
  ) external returns (uint256[] amounts)
```




### getAmountsIn
```solidity
  function getAmountsIn(
  ) external returns (uint256[] amounts)
```




### onFlashLoan
```solidity
  function onFlashLoan(
    address sender,
    address token,
    uint256 amount,
    uint256 fee,
    bytes data
  ) external
```
Called from BentoBox Lending pool after contract has received the flash loaned amount

Reverts if not profitable.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`sender` | address | Address of flashloan initiator
|`token` | address | Token to loan
|`amount` | uint256 | Amount to loan
|`fee` | uint256 | Fee to repay on loan amount
|`data` | bytes | Encoded factories and tokens
    functio

### executeOperation
```solidity
  function executeOperation(
    address[] assets,
    uint256[] amounts,
    uint256[] premiums,
    address initiator,
    bytes params
  ) external returns (bool)
```
Called from Aave Lending pool after contract has received the flash loaned amount (https://docs.aave.com/developers/v/2.0/guides/flash-loans)

Reverts if not profitable.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`assets` | address[] | Array of tokens to loan
|`amounts` | uint256[] | Array of amounts to loan
|`premiums` | uint256[] | Array of premiums to repay on loan amounts
|`initiator` | address | Address of flashloan initiator
|`params` | bytes | Encoded factories and tokens

#### Return Values:
| Type          | Description                                                                  |
| :------------ | :--------------------------------------------------------------------------- |
| bool | success indicating success
    functio
### harvest
```solidity
  function harvest(
    uint256 percentage,
    address[] tokens,
    address[] receivers
  ) external
```
Multi-sig consensus call to distribute a given percentage of specified tokens to specified receivers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`percentage` | uint256 | Percentage of balance to distribute
|`tokens` | address[] | Array of token addresses to distribute
|`receivers` | address[] | Array of addresses for receiving distribution
    functio

### updateAaveAsset
```solidity
  function updateAaveAsset(
    bool isActive,
    address asset
  ) external
```
Update internal Aave asset flag


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`isActive` | bool | Boolean flagging whether to use the asset for Aave flashloans
|`asset` | address | Address of asset
    functio

### updateAllAaveAssets
```solidity
  function updateAllAaveAssets(
  ) external
```
Update all internal Aave assets
    functio



### receive
```solidity
  function receive(
  ) external
```
Function to receive Ether. msg.data must be empty
    receive



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function is called when msg.data is not empty
    fallbac



### owner
```solidity
  function owner(
  ) external returns (address)
```

Returns the address of the current owner.


### isOwner
```solidity
  function isOwner(
  ) public returns (bool)
```

Returns true if the caller is the current owner.


### transferOwnership
```solidity
  function transferOwnership(
  ) external
```

Allows a new account (`newOwner`) to accept ownership.
Can only be called by the current owner.


### cancelOwnershipTransfer
```solidity
  function cancelOwnershipTransfer(
  ) external
```

Cancel a transfer of ownership to a new account.
Can only be called by the current owner.


### acceptOwnership
```solidity
  function acceptOwnership(
  ) external
```

Transfers ownership of the contract to the caller.
Can only be called by a new potential owner set by the current owner.


## Events
### OpenMEV
```solidity
  event OpenMEV(
  )
```



### LoanError
```solidity
  event LoanError(
  )
```



### OwnershipTransferred
```solidity
  event OwnershipTransferred(
  )
```



