---
id: adr-0002
title: Fixed Payout And Reserve Size
status: accepted
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# ADR 0002: Fixed Payout And Reserve Size

## Decision

Use 300 conceptual payout slots and a default 897-proof unpaid reserve. Slot 0
belongs to the finder; remaining positions are fixed shared/support positions.
Missing reserve entries are conceptually zero.

## Rationale And Consequence

The fixed count prevents miners from opportunistically omitting lower-ranked
participants. The 3x reserve improves cutoff precision and supplies depth after
lucky blocks. Hundreds of outputs exceed some legacy firmware coinbase limits,
so compatibility is solved in adapters/firmware or future explicit tiers, not
by accepting truncated consensus payouts.
