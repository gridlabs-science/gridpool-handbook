---
id: adr-0003
title: V2 Snapshots And Paid Lineage
status: accepted
owner: Grid Labs
applies_to: protocol-v2
last_verified: 2026-07-18
---

# ADR 0003: V2 Snapshots And Paid Lineage

## Decision

Every observed Bitcoin block creates an active payout snapshot from unpaid work.
An accepted GridPool block pays its active snapshot. Remove exactly the paid
proof IDs once and preserve all other valid unpaid reserve work.

## Consequences

Genesis payout reflects contributed work sooner, miners need not wait a full
GridPool round to become eligible, and lucky consecutive blocks walk into
reserve depth. Nodes must retain snapshot contexts and exact paid lineage.
