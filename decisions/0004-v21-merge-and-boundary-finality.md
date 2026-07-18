---
id: adr-0004
title: V2.1 Merge And Boundary Finality
status: accepted
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# ADR 0004: V2.1 Merge And Boundary Finality

## Decision

Merge individually valid compatible current-parent proofs, deduplicate, rank,
and bound the union. Do not choose a peer's entire reserve by claimed aggregate
weight. Once a node observes a new Bitcoin boundary, late previous-parent proofs
cannot retroactively rewrite its active snapshot.

## Consequences

Ordinary ordering differences converge without a sharechain or majority vote,
and intentional stale mining cannot enter through generic branch replacement.
Last-millisecond boundary races can still create incompatible active snapshots;
they require visibility and bounded recovery rather than timestamp trust.
