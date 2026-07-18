---
id: adr-0006
title: Layered Peer Transports
status: accepted
owner: Grid Labs
applies_to: peer-network
last_verified: 2026-07-18
---

# ADR 0006: Layered Peer Transports

## Decision

Use HTTP/state bundles and persistent WebSocket sessions as reliable canonical
paths, with authenticated compact UDP as a racing fast path. Fall back to full
proof relay whenever compact reconstruction or context lookup fails.

## Consequences

Latency optimization cannot make reliability or validation optional. Nodes
must deduplicate cross-transport arrivals and record ingress, validation, and
payload telemetry separately.
