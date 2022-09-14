---
sidebar_position: 1
id: block-overview
title: PBS Overview
description: PBS Introduction
---

# PBS Introduction

A **hierarchy** is a system of nested groups. A standard organizational chart is a hierarchy, with employees grouped into business units and departments reporting to a centralized authority. Other kinds of hierarchies include government bureaucracies, biological taxonomies, and a system of menus in a software program. Hierarchies are inherently “top-down,” in that they are designed to enable centralized control from a single, privileged position.

A **network**, by contrast, has no “correct” orientation, and thus no bottom and no top. Each individual, or “node,” in a network functions autonomously, negotiating its own relationships and coalescing into groups. Examples of networks include a flock of birds, the World Wide Web, and the social ties in a neighborhood. Networks are inherently “bottom-up,” in that the structure emerges organically from small interactions without direction from a central authority.

### MEV-Boost

[MEV-Boost](https://github.com/flashbots/mev-boost) is used by validators to delegate block building to third-party software. It polls relays and fetches from them variants of the suggested payload and the value that could be extracted by using this payload. The payload with the maximum value is selected and included to a block.

### Relay

Relays are used by MEV-Boost to get built blocks. In the monitoring design we assume that relays provide a method, which returns the list of payloads and values that were suggested to a validator for a slot. The method has not yet been implemented, but we are [discussing the possibility](https://github.com/flashbots/mev-boost/issues/120).
