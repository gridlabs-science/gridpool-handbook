---
id: adr-0001
title: Rank Achieved Difficulty
status: accepted
owner: Grid Labs
applies_to: protocol
last_verified: 2026-07-18
---

# ADR 0001: Rank Achieved Difficulty

## Context

Traditional pools count many shares above an assigned threshold. A decentralized
counter cannot rely on one private ledger, while a sharechain adds ordering,
latency, and consensus machinery.

## Decision

Retain a bounded set of independently verifiable proofs ranked by achieved
difficulty. Treat the fixed full-reserve cutoff as the aggregate-work estimator.
Do not use identity counts or sum of heavy-tailed achieved difficulty as the
canonical estimator.

## Consequences

State is compact and order-independent for compatible proofs. Individual micro
miner hashrate estimates remain noisy, and the mechanism requires careful
snapshot/payment semantics rather than ordinary per-share balances.
