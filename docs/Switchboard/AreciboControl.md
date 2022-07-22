# AreciboControl

> A contract which can be used to ensure only the AreciboPrimary contract can call some functions

_Defines a modifier which should be used when only the arecibo contract should able able to call a function_

## Methods

### addArecibo

```solidity
function addArecibo(address _areciboPrimary) external nonpayable
```

addArecibo Function which enables ONLY the owner to change the address of areciboPrimary

_onlyOwner modifier only enables the contract owner to run the code_

#### Parameters

| Name             | Type    | Description                                         |
| ---------------- | ------- | --------------------------------------------------- |
| \_areciboPrimary | address | Address of the contract to be set as areciboPrimary |

### authorizedPrimaries

```solidity
function authorizedPrimaries(address) external view returns (bool)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### removeArecibo

```solidity
function removeArecibo(address _areciboPrimary) external nonpayable
```

removeArecibo Function which enables ONLY the owner to change the address of areciboPrimary

_onlyOwner modifier only enables the contract owner to run the code_

#### Parameters

| Name             | Type    | Description                                         |
| ---------------- | ------- | --------------------------------------------------- |
| \_areciboPrimary | address | Address of the contract to be set as areciboPrimary |

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
