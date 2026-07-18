---
id: security-threat-model
title: Security And Threat Model
status: current
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# Security And Threat Model

GridPool is designed for miners that distrust custodial pool accounting and
want to retain transaction selection. It reduces several attack surfaces; it
does not make Bitcoin mining or peer-to-peer networking risk-free.

## Strong Structural Properties

- **Fabricated shares:** rejected by header proof-of-work, Merkle, coinbase,
  parent, snapshot, and duplicate validation.
- **Sybil accounting:** identities carry no weight; only valid achieved work
  competes for positions.
- **Custodial theft:** the block coinbase pays miners directly rather than a
  pool wallet.
- **Template censorship by a pool operator:** transaction contents are not
  needed for internode reward proof beyond the coinbase commitment and Merkle
  path. Sovereign adapters can build templates from local Bitcoin nodes.
- **Simple block withholding:** the finder keeps slot 0 and transaction fees,
  increasing the opportunity cost of withholding compared with giving every
  reward component to a shared ledger. This is a mitigation, not a proof that
  withholding is impossible.
- **Sharechain majority attacks:** there is no continuously extended
  winner-take-all sharechain tip to reorganize. V2.1 also rejects retroactive
  previous-parent snapshot rewrites.

## Remaining Risks

- Boundary races can create different active snapshots when a strong proof
  reaches nodes on opposite sides of a Bitcoin tip event.
- A network partition can sustain separate teams. Identity voting is not used
  to choose between them; recovery must preserve independently valid unpaid
  work without accepting stale rewrites.
- Public seeds and relays remain availability concentration points for private
  outbound-only nodes. NAT traversal and diversified discovery are incomplete.
- Denial-of-service resistance depends on proof floors, bounded reserves,
  request guards, rate limits that exempt trusted local mining hot paths, and
  resource-safe bundle validation.
- Legacy firmware may silently truncate coinbase outputs. Strict validation
  rejects those shares, but miners can waste work before noticing.
- Software supply chain, operator key compromise, Bitcoin node eclipse, DNS
  interference, and endpoint censorship remain operational threats.

## Majority Hashrate

A miner with most instantaneous team hashrate can create a separate team,
exclude others, or withhold work. V2.1 is intentionally not a “follow whatever
the majority later claims was heavier” protocol. The attacker cannot use late
stale proofs to rewrite another node's finalized boundary, but can still mine an
incompatible snapshot and attract miners through external coordination.

Therefore the defensible claim is narrower than “immune to 51% attacks”:
GridPool removes the classic sharechain reorganization mechanism and makes
validated proof inclusion set-like, while partitions and competing teams remain
possible.

## Censorship-Resistance Roadmap

The short-term beta can function with several public nodes and private peers.
The long-term adversarial target requires diversified bootstrap discovery,
automatic port mapping where possible, UDP hole punching, relay fallback,
encrypted/authenticated sessions, transport agility, and continued support for
local template construction. Header gossip can flatten awareness and reduce
boundary disagreement, but it is not yet a consensus clock or a substitute for
validating a Bitcoin block.
