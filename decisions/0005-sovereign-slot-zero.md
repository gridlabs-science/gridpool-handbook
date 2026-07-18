---
id: adr-0005
title: Sovereign Slot Zero
status: accepted
owner: Grid Labs
applies_to: protocol
last_verified: 2026-07-18
---

# ADR 0005: Sovereign Slot Zero

## Decision

The block finder controls slot 0 and receives its fixed subsidy slot,
transaction fees, and integer remainder. Attribution is the actual coinbase
script, never username or sender metadata.

## Consequences

Miners keep a direct incentive to find and publish a block, and adapters can
serve different workers without a centralized account ledger. Every adapter
must construct and preserve the real slot-0 output correctly.
