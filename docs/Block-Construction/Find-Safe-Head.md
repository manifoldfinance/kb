---
title: Finding the Safe Head
---

## How to find safe head

First, find latest justified epoch

1. For all later epochs except current epoch:
2. Ensure at least 33% of target votes for this epoch
2.a If any epoch fails, safe head is last justified block
2.b From last justified epoch, for each slot, verify that it cannot be reorged
3. Count all attestation for descendants of this slot. If it is an empty slot, attestations for non-empty descendants are counted fully and attestations as “empty slot” half
4. The slot is safe if >50%, otherwise unsafe
5. Return last safe block

> Attestations for empty slot only count half because they are only votes for previous block

Always following the head of fork choice is not safe
However, we can find a safe head that follows the latest head by 4s in normal circumstances
Under the assumption that the network is synchronous and >50% of stake is honest, safe head will never revert
It is best to expose this safe head by default, although the unsafe head should be made available as a user choice
