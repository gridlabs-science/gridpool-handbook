---
id: adr-0008
title: Prefer Minimal SRI Pool Fork
status: accepted
owner: Grid Labs
applies_to: sv2-integration
last_verified: 2026-07-18
---

# ADR 0008: Prefer Minimal SRI Pool Fork

## Decision

Use SRI's pool implementation as the base for GridPool SV2 integration rather
than requiring the full JDC/JDS protocol for a sovereign miner colocated with a
GridPool node. Keep modifications modular and generically upstreamable.

## Consequences

Header-only mining and per-channel slot-0 attribution remain possible with less
protocol overhead. GridPool must maintain an upstream delta until generic payout
suffix/work-selection hooks are accepted by SRI. The earlier sidecar repository
is retained as historical evidence, not the default deployment.
