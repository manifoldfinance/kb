---
id: ref-validator-rate
title: Etherbase Overnight Rate
description: Etherbase Overnight Rate Index Calculation 
---

### EOR - Etherbase Overnight Rate

The Ethereum 2 network is secured with a proof of stake mechanism. Users stake their ETH to become a validator on the network. Validators that are actively working to secure the network receive rewards to increase their staked balance, conversely, validators that perform actions to destabilize or attack the network risk having the balance reduced.

The Etherbase Overnight Rate is a volume-weighted median of the annualized rate of return for every eligible validator that is active on the network over a 24-hour period. The eligible validators are ordered from lowest to highest return, and the returns associated with the 50th percentile of staked volume are published as the Etherbase Overnight Rate.

-   The rates are published one day in arrears[^1]

-   They are expressed as a percentage rounded to six decimal places.

The 1st, 25th, 75th and 99th percentiles for each rate are also calculated using the same volume-weighted methodology.

### Index Calculation Specification

The return at time ${t-1}$ (where ${t}$ is measured in days) on an eligible validator is calculated as

$(\frac{Vt}{Vt-1} - 1) * 365.2425$

${Vt-1}$ is the validator balance at time ${t-1}$

${Vt}$ is the validator balance at time ${t}$

```shell
date -u '+%Y-%m-%dT%k:%M:%S%z'

#> 2022-06-13T 12:00:00+0000
```

Validator balances are taken at 12:00:00+0000 UTC. A validator’s balance is the amount of ETH held by the validator.

An eligible validator is a validator that is in the active state[^2] at time ${t-1}$ and exclusively remains in the active state until, and including, time ${t}$.

#### footnotes:

[^1]: arrears, a financial and legal term that refers to the status of payments in relation to their due dates. The word is most commonly used to describe an obligation or liability that has not received payment by its due date. Therefore, the term arrears apply to an overdue payment. [source, investopedia, June 2022](https://www.investopedia.com/terms/a/arrears.asp)
[^2]: [See eth2.0-specs, beacon chain v1.0.0](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/beacon-chain.md#is_active_validator)
