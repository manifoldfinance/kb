---
sidebar_position: 1
id: intro
title: Manifold Finance Introduction
description: An introduction to Manifold Finance
---

# Ethereum network

Ethereum is a decentralized, open-source blockchain platform that runs turing complete smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference. These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property. This enables developers to create markets, store registries of debts or promises, move funds in accordance with instructions given long in the past (like a will or a futures contract) and many other things that have not been invented yet, all without a middleman or counterparty risk.

The Ethereum platform is powered by ether, a cryptocurrency that serves as fuel for the distributed applications running on the Ethereum network. Ether is used to pay for the gas that is required to execute smart contracts and decentralized applications on the Ethereum platform.

Ethereum was initially proposed in 2013 by Vitalik Buterin, a cryptocurrency researcher and programmer. Development of Ethereum was funded by an online crowdsale in 2014. The system went live on 30 July 2015, with 11.9 million coins "premined" for the crowdsale. This accounts for approximately 13 percent of the total circulating supply. In 2016, as a result of the collapse of The DAO project, Ethereum was split into Ethereum (ETH) and Ethereum Classic (ETC). Ethereum (ETH) has continued to grow in popularity and value since its launch, with ether becoming one of the top cryptocurrencies by market capitalization.

## Ethereum upgrades

As with any software, Ethereum is subject to updates and improvements over time. These updates are referred to as "upgrades" and can be implemented through a process called a "hard fork."

A hard fork is a change to the Ethereum protocol that is not backwards-compatible. This means that in order to implement the upgrade, all users and miners must upgrade their software to the latest version. If some users do not upgrade, the network will be split into two separate chains: one running the new version of the software, and one running the old version.

Hard forks are used to introduce new features and functionality to the Ethereum network, as well as to fix security vulnerabilities and address other issues. Some examples of upgrades that have been implemented through hard forks on the Ethereum network include:

    Byzantium: This hard fork introduced several new features to the Ethereum network, including improved smart contract functionality and increased privacy. It was implemented on October 16, 2017.

    Constantinople: This hard fork introduced additional optimizations and improvements to the Ethereum network, including changes to the way that transaction fees are calculated. It was implemented on February 28, 2019.

    Istanbul: This hard fork introduced additional improvements to the Ethereum network, including changes to the EVM to improve its efficiency and security. It was implemented on December 7, 2019.

    Berlin: This hard fork introduced further improvements to the Ethereum network, including changes to the way that the EVM handles certain types of arithmetic operations. It was implemented on April 14, 2021.

    London: This hard fork introduced EIP-1559; a dynamic fee market that adjusts the fees based on demand, which should reduce fees for users and make the network more efficient. It was implemented on August 5th, 2021.

    Paris: This hard fork switched off the proof-of-work mining algorithm and associated consensus logic and switched on proof-of-stake instead. It was implemented on September 15th, 2022.

### Block Construction in Ethereum 2.0

Manifold Finance enables and provides access to high-value transaction pools on EVM-compatible chains, through our infrastructure: _SecureRPC_. We aggregate multiple endpoints along with maintaining direct access to disparate mining pools/validator nodes.

> In short, we believe that access to transaction sets will be **the defining advantage for block builders** in Ethereum2. The **ultimate goal for a block builder is to build the highest-value block that it can**. To do this, it needs to build from high-value transactions. **The combined value of MEV opportunities at any point in time will in general outweigh any delta that could be obtained by smart block building algorithms, so access to a high-value transaction pool will be the defining advantage for block builders**. The only logical choice is to send it to the single builder that already has the highest-value transaction pool. And as searchers are financially driven, they are all likely to make the same choice.

This appears to create a positive feedback situation, leading to the end result of a single large high-value transaction pool, and a single major builder. Smaller transaction pools may survive if backed by validators willing to sacrifice financial rewards for some other value, however, validators that are monetarily driven will end up taking the block from the single major builder.

## Reading this documentation

-   Guides, for broad hands-on understanding and connections to other learning resources
-   Tutorials, intended to teach a particular process or project
-   Cookbooks, collections of tips and tricks
-   Reference, full manuals and technical coverage
-   Pedias, for encyclopedic description

*   If information is more encyclopedic (with a similar scope and tone to pages on Wikipedia), a page would be considered a pedia.
*   If information is less encyclopedic and more similar to a compendium, study guide, or bibliographic guide, a page would be considered a guide.
*   If information is more about direct instruction to achieve a specific task, a page would be considered a tutorial.
*   If a page is more just a set of tips and tricks (less instructive than a tutorial), it would be a cookbook.
*   If a page is a detailed reference (like a man page or full software manual), it would fit under references.
