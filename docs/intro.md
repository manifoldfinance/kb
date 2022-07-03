---
sidebar_position: 1
id: intro
title: Manifold Finance Introduction
description: An introduction to Manifold Finance
---

Manifold Finance enables and provides access to high-value transaction pools on EVM compatible chains, through our infrastructure: _SecureRPC_. We aggregate multiple endpoints along with maintaining direct access to disparate mining pools/validator nodes.

> In short, we believe that access to transaction sets will be **the defining advantage for block builders** in Ethereum2. The **ultimate goal for a block builder is to build the highest-value block that it can**. To do this, it needs to build from high-value transactions. **The combined value of MEV opportunities at any point in time will in general outweigh any delta that could be obtained by smart block building algorithms, so access to a high-value transaction pool will be the defining advantage for block builders**. The only logical choice is to send it to the single builder that already has the highest-value transaction pool. And as searchers are financially driven, they are all likely to make the same choice.

This appears to create a positive feedback situation, leading to the end result of a single large high-value transaction pool, and a single major builder. Smaller transaction pools may survive if backed by validators willing to sacrifice financial rewards for some other value, however for validators that are monetarily-driven they will end up taking the block from the single major builder.
