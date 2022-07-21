# PartnerRegistry



> PartnerRegistry





## Methods

### basePercentage

```solidity
function basePercentage() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### companyBeneficiary

```solidity
function companyBeneficiary() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### deletePartner

```solidity
function deletePartner(address partnerContract) external nonpayable
```



*Marks a partner contract as no longer valid*

#### Parameters

| Name | Type | Description |
|---|---|---|
| partnerContract | address | The partner contract address to disable |

### isValidPartner

```solidity
function isValidPartner(address partnerContract) external view returns (bool)
```



*Validate partnerContract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| partnerContract | address | The partner contract address to validate |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### overrideRegisterPartner

```solidity
function overrideRegisterPartner(address payable _companyBeneficiary, uint256 _companyPercentage, address payable partnerBeneficiary, uint256 partnerPercentage) external nonpayable
```



*registers a partner and deploys a partner contract with custom company values, only usable by owner*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _companyBeneficiary | address payable | The address that the company will receive payments to - NON-CHANGEABLE |
| _companyPercentage | uint256 | The percentage fee the company wants to take - this is out of 1**18, so 1**16 would be 1% fee |
| partnerBeneficiary | address payable | The address that the partner will receive payments to - NON-CHANGEABLE |
| partnerPercentage | uint256 | The percentage fee the partner wants to take - this is out of 1**18, so 1**16 would be 1% fee |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### previousRegistry

```solidity
function previousRegistry() external view returns (contract PartnerRegistry)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract PartnerRegistry | undefined |

### registerPartner

```solidity
function registerPartner(address payable partnerBeneficiary, uint256 partnerPercentage) external nonpayable
```



*registers a partner and deploys a partner contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| partnerBeneficiary | address payable | The address that the partner will receive payments to - NON-CHANGEABLE |
| partnerPercentage | uint256 | The percentage fee the partner wants to take - this is out of 1**18, so 1**16 would be 1% fee |

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

### updateCompanyInfo

```solidity
function updateCompanyInfo(address payable newCompanyBeneficiary, uint256 newBasePercentage) external nonpayable
```



*Updates the beneficiary and default percentage for the company*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newCompanyBeneficiary | address payable | New beneficiary address for company |
| newBasePercentage | uint256 | New base percentage for company |



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

### PartnerRegistered

```solidity
event PartnerRegistered(address indexed creator, address indexed beneficiary, address partnerContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| creator `indexed` | address | undefined |
| beneficiary `indexed` | address | undefined |
| partnerContract  | address | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



