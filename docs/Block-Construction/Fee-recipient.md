---
title: Rewards and Fee Recipient
sidebar_position: 3
id: block-rewards
description: Rewards and Fee Recipient and Liquid Staking
---

# Fee Receipent 

Every time a validator proposes a block, it will get the sum of all tips paid by all the transactions contained in that block. 

> `COINBASE` / `ETHERBASE`

### Types of Fee's

1⃣ Consensus Rewards ⛓️ <br>
2⃣ Execution Rewards 🖥️ <br>
3⃣ MEV Rewards 🤖 <br>

> This is not technically true all the time, but we mention it
4⃣ Decrease in ETH supply 🔥 <br>


## Lido

Lido: Operators to set the fee recipient to a dedicated fee vault and restakes it into `stETH`[^1]


![](/img/eth2-rewards.png)


## Rocket Pool

Rocket Pool: Operator to set the fee recipient to the distributor contract address. Its oDAO (Oracle DAO) that monitors operator's behavior will monitor and penalize operators that do not comply.[^2]

[see https://dao.rocketpool.net/t/mev-and-penalty-system/772](https://dao.rocketpool.net/t/mev-and-penalty-system/772)

## Footnotes

[^1]: [see https://research.lido.fi/t/lip-12-on-chain-part-of-the-rewards-distribution-after-the-merge/1625](https://research.lido.fi/t/lip-12-on-chain-part-of-the-rewards-distribution-after-the-merge/1625)
[^2]: [see https://dao.rocketpool.net/t/mev-and-penalty-system/772](https://dao.rocketpool.net/t/mev-and-penalty-system/772)
