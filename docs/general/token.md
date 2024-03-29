---
sidebar_position: 1
id: general-token
title: FOLD Protocol
description: FOLD Token Mechanics and Subsystems
---

# Manifold Subsystems: FOLD Protocol

> This document describes the model for which we reason on token mechanics. It is by this model and frame of reference that we draw mechanics to which to implement ontop of the the underlying instrument, i.e. the FOLD token. Mechanics of the FOLD token are discussed within the context of the "version 2" model.

## Motivation

The purposes of this document is to provide a design overview of Manifold Finance's *Sub Systems*. Subsystems are a 'collection of services that are viable'. Viable means that these services are production ready. 

### Core Subsystems 

The core subsystems are:

SecureRpc
Relay Service
Virtual Mempool

Applications, like OpenMEV, are built on these core subsystems. Below is a diaram expanding on the SecureRpc subsystem, detailing touchpoints such as fee generation opportunities and interfaces for 3rd parties to interact with (integrations). 

![](https://d.pr/i/PaQ7t0.jpeg)


### Network Subsystems

The core subsystems by themselves do not provide end to end connectivity or service availability. For such data availability requirements the Network Subsystem 

![](https://d.pr/i/VsxdOs.jpeg)



### Determining the Token Viability Model

> Every protocol which can be forked will be forked into becoming a _hyperstructure_; unless these tokens either: govern capital and/or underwrite useful risk/facilitate the transfer of risk. -- Token Corollary Axiom

As the space trends towards efficiency, all tokens will trend towards 0. This principle is called the _zero-sum_ principle. They will be re-rated for the risks that they underwrite or adjusted for EV of capital owned. If they do not own capital or are not underwriting risk, then they are useless over the macro.

> All happy defi projects are different: each one earns a monopoly by solving a unique problem All failed defi projects are the same: they failed to escape competition" -- The Anna Karenina Principle

The Anna Karenina principle states that a deficiency in any one of a number of factors dooms an endeavor to failure. Consequently, a successful endeavor (subject to this principle) is one for which every possible deficiency has been avoided.[^1]

### Footnotes

[^1]: There are any number of ways in which a dataset may violate the null hypothesis and only one in which all the assumptions are satisfied

“The behavior of any bureaucratic organization can best be understood by assuming that it is controlled by a secret cabal of its enemies.”
