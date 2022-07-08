---
sidebar_position: 1
id: intro
title: Liquid Rational Staking
description: Liquid Staking in Eth2
---

## Liquid Rational Staking

The short summary of staking with validators in Proof-of-Stake blockchains is that **validators**, the machines that confirm reality in a blockchain, are limited by how much of the blockchain token they have. It’s expensive for them to buy more, so if you stake your tokens with them, they’ll share some of their fees with you.

If you stake your tokens, you can’t do anything else with them. It would be nice if you could stake and then also use that token for other purposes.

**Liquid staking** protocols like Lido allow you to do this. Deposit ETH into Lido and it will give you back a Lido-wrapped token called stETH. Its price tracks ETH price, and it theoretically can be used just like ETH, but only if other protocols accept it. As you earn fees from the underlying staked ETH, you’ll get more stETH in your wallet as you hold it.

One major criticism of Lido is that it works with a few validators. Lido takes the pooled ETH and distributes it only among these validators. There are less than 20 Ethereum validators onboarded to Lido at the time of writing.

Lido takes 10% of all fees earned. 5% of those fees get returned to the validators. The other 5% goes to a Lido treasury that holders of the native token LDO control.

> ⚠️ [note] Prefixed Assets and Rebasing Since stETH is a **rebase** (i.e. fee on transfer) token its balance changes with interest (ref: Aave [aTokens](https://protocolnotes.com/aave/) are similar). They need balance to stay the same while price increases with interest, similar to how Compound [cTokens](https://protocolnotes.com/compound/) work. Lido offers _another_ wrapped token called wstETH, which uses this second model of distributing fees.

Validators in ETH2 are assigned attestations and block proposals **on a schedule**. This is very different from ETH1's proof of work system, where everyone is constantly trying to race each other and come up with the next block before everyone else. This means that, unlike ETH1 where you aren't guaranteed to earn a block reward unless you find the next block, ETH2 validators are guaranteed to have slow, steady income as long as they perform their duties. If a validator is offline and misses an attestation or a block proposal, it will be **slightly penalized**. The penalties are quite small though; as a rule of thumb, if a validator is offline for X hours, it will make all of its lost ETH back after the same X hours of being back online [^2]

## Parametrizing the System: Establishing baseline Model Behavior

We position ourselves under the assumption that: everyone views their assets as a portfolio of coins that are either _staked_ or _lent_ — this forms the basis of our agent-based model and how to set up the initial values and parameters of the system.

• **Rational actors view their staking coins as a portfolio that is earning yield** • **Rational actors are expected yield optimizers** • **Agent i’s wealth Wi is a portfolio staked/lent**

$$
S _{ i } \text { and lent } L _{ i }\left( W _{ i }= S _{ i }+ L _{ i }\right)
$$

• **Interest rates for staking and lending at block height:**

$$
h: r_{h}, \gamma_{h}
$$

Ensemble of agents, each with a risk preference that represents how ‘fast’ they will migrate assets from staking to lending

• **Risky**: Immediately move assets from the staked asset pool to the lending asset pool • **Risk-Averse**: Wait for a longer time before reallocating

### Additional Properties

-   **Discretizing inflation curve** i.e. halvenings instead of continuous decay

-   **Rational Staking**: We define rational staking agents to be those that optimize their individual beliefs based on their risk preferences (represented by Σ) and the observed staking and lending yields μ

## Validator Mechanic Model

> Assumptions made

• **No Transaction Fees** Rational validators only base decisions on rewards/inflation yield

• **No Immediate Compounding/Autocompounding** Validators must wait until the end of an epoch before their rewards increase their relative stake and future expected income.

• **Single Validator per Block** This simplifies how to handle committee reward splitting. Having multiple validators would add additional variance

• **No Explicit Unbonding Period** This would add in autocorrelation that makes concentration inequalities unusable

-   **Agents don’t interact with external lending markets** This would reduce rebalance variance by N1/2 for N independent lenders
