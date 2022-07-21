# AreciboPrimary

> The primary contract for Arecibo

## Methods

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### addSigner

```solidity
function addSigner(address newSigner) external nonpayable
```

Add a new signer as valid

#### Parameters

| Name      | Type    | Description                          |
| --------- | ------- | ------------------------------------ |
| newSigner | address | The address to set as a valid signer |

### name

```solidity
function name() external view returns (string)
```

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### nonces

```solidity
function nonces(address) external view returns (uint256)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### paused

```solidity
function paused() external view returns (bool)
```

_Returns true if the contract is paused, and false otherwise._

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### performSwapBundle

```solidity
function performSwapBundle(AreciboPrimary.SwapBundle swaps) external payable
```

#### Parameters

| Name  | Type                      | Description |
| ----- | ------------------------- | ----------- |
| swaps | AreciboPrimary.SwapBundle | undefined   |

### removeSigner

```solidity
function removeSigner(address signer) external nonpayable
```

Removes a signer

#### Parameters

| Name   | Type    | Description                             |
| ------ | ------- | --------------------------------------- |
| signer | address | The address to remove as a valid signer |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```

_Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner._

### signers

```solidity
function signers(address) external view returns (bool)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### tokenTransferProxy

```solidity
function tokenTransferProxy() external view returns (contract TokenTransferProxy)
```

#### Returns

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| \_0  | contract TokenTransferProxy | undefined   |

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

### LogSwap

```solidity
event LogSwap(bytes32 indexed id, address sourceAsset, address destinationAsset, uint256 sourceAmount, uint256 destinationAmount, address feeAsset, uint256 feeAmount)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| id `indexed`      | bytes32 | undefined   |
| sourceAsset       | address | undefined   |
| destinationAsset  | address | undefined   |
| sourceAmount      | uint256 | undefined   |
| destinationAmount | uint256 | undefined   |
| feeAsset          | address | undefined   |
| feeAmount         | uint256 | undefined   |

### LogSwapBundle

```solidity
event LogSwapBundle(bytes32 indexed id, address indexed partnerContract, address indexed user)
```

#### Parameters

| Name                      | Type    | Description |
| ------------------------- | ------- | ----------- |
| id `indexed`              | bytes32 | undefined   |
| partnerContract `indexed` | address | undefined   |
| user `indexed`            | address | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

### Paused

```solidity
event Paused(address account)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

### Unpaused

```solidity
event Unpaused(address account)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |
