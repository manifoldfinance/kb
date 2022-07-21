# ZeroExV3SwitchBoard

> ZeroExV3SwitchBoard

Handles the all ZeroExExchange trades for the primary contract

## Methods

### exchange

```solidity
function exchange() external view returns (contract IExchangeCoreV3)
```

#### Returns

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| \_0  | contract IExchangeCoreV3 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### performOrder

```solidity
function performOrder(bytes genericPayload, uint256 availableToSpend, uint256 targetAmount) external payable returns (uint256 amountSpentOnOrder, uint256 amountReceivedFromOrder)
```

_Fills the input order._

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| genericPayload | bytes | Encoded data for this order. This is specific to exchange and is done by encoding a per-exchange struct |
| availableToSpend | uint256 | The amount of assets that are available for the ward to spend. |
| targetAmount | uint256 | The target for amount of assets to spend - it may spend less than this and return the change. |

#### Returns

| Name                    | Type    | Description                                               |
| ----------------------- | ------- | --------------------------------------------------------- |
| amountSpentOnOrder      | uint256 | The amount of source asset spent on this order.           |
| amountReceivedFromOrder | uint256 | The amount of destination asset received from this order. |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```

_Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```

_Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |

### withdrawETH

```solidity
function withdrawETH(uint256 _amount) external nonpayable
```

Withdraw ether contained in this contract and send it back to owner

_onlyOwner modifier only allows the contract owner to run the code_

#### Parameters

| Name     | Type    | Description                                           |
| -------- | ------- | ----------------------------------------------------- |
| \_amount | uint256 | The amount of ether that the caller wants to withdraw |

### withdrawToken

```solidity
function withdrawToken(address _token, uint256 _amount) external nonpayable
```

Withdraw ether contained in this contract and send it back to owner

_onlyOwner modifier only allows the contract owner to run the code_

#### Parameters

| Name     | Type    | Description                                              |
| -------- | ------- | -------------------------------------------------------- |
| \_token  | address | The address of the token that the user wants to withdraw |
| \_amount | uint256 | The amount of tokens that the caller wants to withdraw   |

## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
