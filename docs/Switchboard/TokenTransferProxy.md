# TokenTransferProxy

_Amir Bandeali - &lt;amir@0xProject.com&gt;, Will Warren - &lt;will@0xProject.com&gt;_

> TokenTransferProxy - Transfers tokens on behalf of contracts that have been approved via decentralized governance.

## Methods

### addAuthorizedAddress

```solidity
function addAuthorizedAddress(address target) external nonpayable
```

_Authorizes an address._

#### Parameters

| Name   | Type    | Description           |
| ------ | ------- | --------------------- |
| target | address | Address to authorize. |

### authorized

```solidity
function authorized(address) external view returns (bool)
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

### removeAuthorizedAddress

```solidity
function removeAuthorizedAddress(address target) external nonpayable
```

_Removes authorizion of an address._

#### Parameters

| Name   | Type    | Description                           |
| ------ | ------- | ------------------------------------- |
| target | address | Address to remove authorization from. |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```

_Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner._

### transferFrom

```solidity
function transferFrom(address token, address from, address to, uint256 value) external nonpayable
```

_Calls into ERC20 Token contract, invoking transferFrom._

#### Parameters

| Name  | Type    | Description                     |
| ----- | ------- | ------------------------------- |
| token | address | Address of token to transfer.   |
| from  | address | Address to transfer token from. |
| to    | address | Address to transfer token to.   |
| value | uint256 | Amount of token to transfer.    |

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

### LogAuthorizedAddressAdded

```solidity
event LogAuthorizedAddressAdded(address indexed target, address indexed caller)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| target `indexed` | address | undefined   |
| caller `indexed` | address | undefined   |

### LogAuthorizedAddressRemoved

```solidity
event LogAuthorizedAddressRemoved(address indexed target, address indexed caller)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| target `indexed` | address | undefined   |
| caller `indexed` | address | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
