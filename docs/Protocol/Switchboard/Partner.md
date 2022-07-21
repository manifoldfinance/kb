# Partner



> Partner





## Methods

### companyBeneficiary

```solidity
function companyBeneficiary() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### companyPercentage

```solidity
function companyPercentage() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getTotalFeePercentage

```solidity
function getTotalFeePercentage() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### init

```solidity
function init(contract PartnerRegistry _registry, address payable _overrideCompanyBeneficiary, uint256 _overrideCompanyPercentage, address payable _partnerBeneficiary, uint256 _partnerPercentage) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _registry | contract PartnerRegistry | undefined |
| _overrideCompanyBeneficiary | address payable | undefined |
| _overrideCompanyPercentage | uint256 | undefined |
| _partnerBeneficiary | address payable | undefined |
| _partnerPercentage | uint256 | undefined |

### overrideCompanyBeneficiary

```solidity
function overrideCompanyBeneficiary() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### overrideCompanyPercentage

```solidity
function overrideCompanyPercentage() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### partnerBeneficiary

```solidity
function partnerBeneficiary() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### partnerPercentage

```solidity
function partnerPercentage() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### payout

```solidity
function payout(address[] tokens) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokens | address[] | undefined |

### registry

```solidity
function registry() external view returns (contract PartnerRegistry)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract PartnerRegistry | undefined |



## Events

### LogPayout

```solidity
event LogPayout(address[] tokens, uint256[] amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokens  | address[] | undefined |
| amount  | uint256[] | undefined |



