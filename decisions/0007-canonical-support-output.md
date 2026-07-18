---
id: adr-0007
title: Canonical Optional Support Output
status: revisit
owner: Grid Labs
applies_to: protocol-v2.1-beta
last_verified: 2026-07-18
---

# ADR 0007: Canonical Optional Support Output

## Decision

The beta permits one canonical Grid Labs support position within the fixed 300
conceptual slots. Configuration may enable or disable it but cannot replace its
address with an arbitrary operator address.

## Consequences

The default is roughly one three-hundredth of subsidy attribution, or 0.333%,
before considering variant details. Fee-on and fee-off templates must both be
valid and distinguishable. The mechanism complicates payout variants and is
explicitly scheduled for design review.
