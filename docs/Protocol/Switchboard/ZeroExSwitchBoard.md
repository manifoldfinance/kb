# ZeroExSwitchBoard



> ZeroExSwitchBoard

Handles the all ZeroExExchange trades for the primary contract



## Methods

### addArecibo

```solidity
function addArecibo(address _areciboPrimary) external nonpayable
```

addArecibo Function which enables ONLY the owner to change the address of areciboPrimary

*onlyOwner modifier only enables the contract owner to run the code*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _areciboPrimary | address | Address of the contract to be set as areciboPrimary |

### authorizedPrimaries

```solidity
function authorizedPrimaries(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### exchange

```solidity
function exchange() external view returns (contract IExchangeCore)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IExchangeCore | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### performOrder

```solidity
function performOrder(bytes genericPayload, uint256 availableToSpend, uint256 targetAmount) external payable returns (uint256 amountSpentOnOrder, uint256 amountReceivedFromOrder)
```



*Fills the input order.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| genericPayload | bytes | Encoded data for this order. This is specific to exchange and is done by encoding a per-exchange struct |
| availableToSpend | uint256 | The amount of assets that are available for the ward to spend. |
| targetAmount | uint256 | The target for amount of assets to spend - it may spend less than this and return the change. |

#### Returns

| Name | Type | Description |
|---|---|---|
| amountSpentOnOrder | uint256 | The amount of source asset spent on this order. |
| amountReceivedFromOrder | uint256 | The amount of destination asset received from this order. |

### removeArecibo

```solidity
function removeArecibo(address _areciboPrimary) external nonpayable
```

removeArecibo Function which enables ONLY the owner to change the address of areciboPrimary

*onlyOwner modifier only enables the contract owner to run the code*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _areciboPrimary | address | Address of the contract to be set as areciboPrimary |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### withdrawETH

```solidity
function withdrawETH(uint256 _amount) external nonpayable
```

Withdraw ether contained in this contract and send it back to owner

*onlyOwner modifier only allows the contract owner to run the code*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | The amount of ether that the caller wants to withdraw |

### withdrawToken

```solidity
function withdrawToken(address _token, uint256 _amount) external nonpayable
```

Withdraw ether contained in this contract and send it back to owner

*onlyOwner modifier only allows the contract owner to run the code*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | The address of the token that the user wants to withdraw |
| _amount | uint256 | The amount of tokens that the caller wants to withdraw |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



