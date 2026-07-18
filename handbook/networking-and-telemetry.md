---
id: networking-telemetry
title: Networking And Telemetry
status: current
owner: Grid Labs
applies_to: reference-network
last_verified: 2026-07-18
---

# Networking And Telemetry

GridPool uses layered transport rather than treating one mechanism as both the
reliability path and the latency path.

## Current Shape

- HTTP state bundles and share submission provide canonical full-proof recovery.
- Persistent WebSocket sessions provide bidirectional relay for reachable and
  outbound-connected peers.
- Compact authenticated UDP datagrams race the reliable path for low-latency
  share and pulse observations when a proof fits safely within the datagram
  budget.
- Chain-tip header gossip records when a peer learned of a Bitcoin tip versus
  local ZMQ or MempoolSpace notification. It is telemetry today, not permission
  to mine or finalize consensus from an unvalidated header.
- Public endpoints support hidden home nodes, but the long-term design seeks to
  prevent a few seeds from becoming mandatory relays.

## Pulse Proofs

The network can relay a bounded cadence of valid lower-difficulty proofs that
do not mutate the unpaid Work Set. Pulse proofs measure path health, preserve a
network heartbeat when reserve difficulty is high, and provide samples for
transport latency. Pulse rate limiting applies to peer relay; high-rate local
DATUM ingress must remain on its own trusted hot path.

## Telemetry Semantics

Measure separately:

- socket ingress time before validation;
- proof-of-work precheck completion;
- full validation completion;
- first observed transport;
- duplicate arrival deltas for UDP, WebSocket, and HTTP;
- payload bytes and rejection category;
- local Bitcoin tip arrival and peer header arrival.

These timestamps distinguish network latency from validation cost on a server
versus a Raspberry Pi. Forward-after-PoW can reduce propagation delay, but a
forwarded proof remains provisional until each receiving node completes full
validation.

## Field Evidence

The July 2026 public network demonstrated observable multi-transport relay and
instances where compact UDP beat WebSocket for shares. Chain-tip samples were
mixed and exposed Bitcoin P2P lag and duplicated ZMQ publishers on one node.
The sample involved only a few nodes and does not prove global latency behavior.

## NAT And Discovery Roadmap

1. Persist peers and diversify DNS/bootstrap seeds.
2. Attempt PCP, NAT-PMP, and UPnP port mapping with explicit UI status.
3. Advertise only endpoints confirmed reachable from outside.
4. Maintain outbound persistent sessions when mapping fails.
5. Measure how often private peers remain relay-dependent.
6. Add authenticated UDP hole punching if those measurements justify the
   complexity.
7. Keep bounded relay fallback as availability insurance, not the default
   topology.

The end state for Umbrel/Start9 is one-click setup after a payout address: local
discovery, automatic connectivity attempts, no publicly exposed UI by default,
and clear degradation rather than silent centralization when direct reachability
is impossible.
