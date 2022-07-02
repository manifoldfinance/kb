---
sidebar_position: 1
id: ref-glossary
title: Glossary
description: Glossary of Terms and Definitions
---

# Single-Domain Maximal Extractable Value

Definition. Maximal Extractable Value (MEV) is the maximal value extractable between one or more blocks, given any arbitrary re-ordering, insertion or censorship of pending or existing transactions. We can then simply take the maximum of our definition above over all valid sequences of actions for player P, essentially looking for the reachable state where our balance is maximized.


\begin{equation*} 

\operatorname{mev}*{i}^{j}(P, s)=\max *{a*{1} \ldots a*{n} \in A*{j}}\left\{e v*{i}\left(P, s, a*{1} \ldots a*{n}\right)\right\} 

\end{equation*}

## Frontrunning

Frontrunning consists of capitalizing on knowledge of a pending transaction before it has been included in a block.

## Backrunning

Backrunning can occur when the knowledge of a transaction is used to insert an order right after the target transaction. In most cases, the price slippage due to a transaction will change the exchange rate on one exchange, but not on others. 