---
id: project-overview
title: GridPool Project Overview
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-22
---

# GridPool Project Overview

GridPool is a decentralized reward-sharing protocol for sovereign Bitcoin
miners. It aims to reduce solo-mining payout variance without a custodial pool
wallet, a private accounting database, or a separate sharechain.

The shortest explanation is: traditional pools keep a private spreadsheet of
who did how much work. GridPool replaces that spreadsheet with a public,
bounded leaderboard of verifiable proof-of-work. Miners build templates that
pay the currently active leaderboard directly in the Bitcoin coinbase.

## Design Goals

- Miners or their local gateways choose Bitcoin transactions and build their
  own templates.
- A found block pays miners directly. No pool wallet receives and redistributes
  the block reward.
- Every payout position is supported by independently verifiable proof-of-work.
- A miner cannot gain expected payout by creating extra identities.
- The network remains useful with private, outbound-only home nodes while
  progressively reducing reliance on public seeds.
- Resource requirements remain practical on consumer-grade sovereign nodes.
- Mining protocol adapters remain modular: DATUM, SV2, direct firmware, and
  future gateways can all feed the same consensus and peer network.
- The system should fail visibly and conservatively when peers disagree about
  protocol version, Bitcoin network, parent context, or payout construction.

## Non-Goals

- GridPool does not promise FPPS-like zero variance or guaranteed payout.
- GridPool does not hide that Bitcoin mining itself is probabilistic.
- It does not use social identity, node count, or one-node-one-vote consensus.
- It does not attempt to prevent a miner from leaving, solo mining, or creating
  a separate compatible or incompatible team.
- It does not make state-sponsored network partitioning or global Internet
  censorship disappear. The long-term roadmap reduces these dependencies.
- The current beta does not support every legacy Stratum V1 firmware. Large
  coinbases remain a real compatibility constraint.

## Current Maturity

The reference implementation is public beta software. Public nodes currently
run V2.2-capable binaries under a height-gated rollout: V2.1 remains active
until Bitcoin height `959500`, when compatible nodes activate V2.2 Monotonic
Snapshot Reconciliation together. The protocol repository still labels its
whitepaper as a draft and does not yet contain a complete independent
interoperability vector suite. Live telemetry and regression tests are evidence
of engineering progress, not proof that all adversarial cases are closed.

## Naming

The project was originally called **Boot Protocol**. Public writing and UI
should use **GridPool**. Legacy `boot` names remain in repository paths, C#
types, configuration keys, headers, and service names during the beta because
renaming them all at once would create avoidable compatibility risk.

## Company And Protocol

Grid Labs maintains the first reference implementation and may receive an
optional canonical support output. GridPool itself is intended to be an open
protocol: another implementation should be able to validate and exchange the
same proofs without using Grid Labs software or DATUM.
