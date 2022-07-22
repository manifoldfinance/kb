# IExchangeCore

## Methods

### ZRX_ASSET_DATA

```solidity
function ZRX_ASSET_DATA() external view returns (bytes)
```

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | bytes | undefined   |

### fillOrder

```solidity
function fillOrder(LibOrder.Order order, uint256 takerAssetFillAmount, bytes signature) external nonpayable returns (struct LibFillResults.FillResults fillResults)
```

#### Parameters

| Name                 | Type           | Description |
| -------------------- | -------------- | ----------- |
| order                | LibOrder.Order | undefined   |
| takerAssetFillAmount | uint256        | undefined   |
| signature            | bytes          | undefined   |

#### Returns

| Name        | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| fillResults | LibFillResults.FillResults | undefined   |

### fillOrderNoThrow

```solidity
function fillOrderNoThrow(LibOrder.Order order, uint256 takerAssetFillAmount, bytes signature) external nonpayable returns (struct LibFillResults.FillResults fillResults)
```

#### Parameters

| Name                 | Type           | Description |
| -------------------- | -------------- | ----------- |
| order                | LibOrder.Order | undefined   |
| takerAssetFillAmount | uint256        | undefined   |
| signature            | bytes          | undefined   |

#### Returns

| Name        | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| fillResults | LibFillResults.FillResults | undefined   |

### getAssetProxy

```solidity
function getAssetProxy(bytes4 assetProxyId) external view returns (address)
```

_Gets an asset proxy._

#### Parameters

| Name         | Type   | Description            |
| ------------ | ------ | ---------------------- |
| assetProxyId | bytes4 | Id of the asset proxy. |

#### Returns

| Name | Type    | Description                                                                        |
| ---- | ------- | ---------------------------------------------------------------------------------- |
| \_0  | address | The asset proxy registered to assetProxyId. Returns 0x0 if no proxy is registered. |

### getOrderInfo

```solidity
function getOrderInfo(LibOrder.Order order) external view returns (struct LibOrder.OrderInfo orderInfo)
```

#### Parameters

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| order | LibOrder.Order | undefined   |

#### Returns

| Name      | Type               | Description |
| --------- | ------------------ | ----------- |
| orderInfo | LibOrder.OrderInfo | undefined   |

### isValidSignature

```solidity
function isValidSignature(bytes32 hash, address signerAddress, bytes signature) external view returns (bool isValid)
```

#### Parameters

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| hash          | bytes32 | undefined   |
| signerAddress | address | undefined   |
| signature     | bytes   | undefined   |

#### Returns

| Name    | Type | Description |
| ------- | ---- | ----------- |
| isValid | bool | undefined   |
