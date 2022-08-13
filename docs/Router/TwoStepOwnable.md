Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions.

This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be aplied to your functions to restrict their use to the owner.

In order to transfer ownership, a recipient must be specified, at which point the specified recipient can call `acceptOwnership` and take ownership.

## Functions

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

Allows a new account (`newOwner`) to accept ownership. Can only be called by the current owner.

### cancelOwnershipTransfer

```solidity
  function cancelOwnershipTransfer(
  ) external
```

Cancel a transfer of ownership to a new account. Can only be called by the current owner.

### acceptOwnership

```solidity
  function acceptOwnership(
  ) external
```

Transfers ownership of the contract to the caller. Can only be called by a new potential owner set by the current owner.

## Events

### OwnershipTransferred

```solidity
  event OwnershipTransferred(
  )
```
