---
id: protocol-v22
title: GridPool V2.2 Protocol Model
status: scheduled
owner: Grid Labs
applies_to: protocol-v2.2
last_verified: 2026-07-22
---

# GridPool V2.2 Protocol Model

This is the cross-project explanatory summary. The detailed reference design,
state machine, implementation tests, and cutover notes remain required for a
consensus implementation.

V2.2 preserves V2.1's ranked unpaid Work Set, active payout snapshot, retained
contexts, paid-once lineage, slot-0 attribution, and strict rejection of new
previous-parent direct-ingress proofs after a locally observed boundary. Its
major addition is deterministic recovery when honest nodes form different
snapshots at the same Bitcoin-block boundary.

## Deployment Status

The public nodes run V2.2-capable software but remain on active V2.1 consensus
and state schema 2 until Bitcoin height `959500`. At that height, upgraded nodes
activate consensus version 22 and schema 3 together. Legacy V2.1 nodes then
become visibly incompatible. A peer-relayed header cannot trigger activation;
the attached Bitcoin node supplies the trusted activation height.

## Snapshot Families

Snapshots may reconcile only when they share the same protocol/network,
predecessor snapshot, Bitcoin boundary hash and height, payout variant, and
canonical support-output rules. These fields define a **snapshot family**.
Different Bitcoin blocks, predecessors, networks, or payout rules are isolated
and never unioned silently.

## Monotonic Snapshot Reconciliation

When a node fully validates two sibling boundary reserves in one family, it:

1. unions their valid proof IDs;
2. removes globally paid proof IDs;
3. deduplicates by proof ID;
4. ranks by achieved difficulty descending and proof ID ascending;
5. retains the bounded reserve, 897 proofs by default; and
6. deterministically rebuilds the active payout snapshot.

Omitting a proof cannot remove work already known by a node. Adding a proof
requires complete independently verifiable proof of work and payout context.
Post-boundary hashrate, peer identity/count, first arrival, endpoint reputation,
and claimed aggregate weight do not elect a sibling branch.

The operation is designed to be commutative, idempotent, and independent of
member arrival order. Family members and retained contexts are bounded to keep
consumer-node resource use predictable.

## Paid Once

A locally validated GridPool block pays the snapshot proven by its actual
coinbase. Exactly those proof IDs are marked paid and removed once, including
when the block paid a recognized sibling context. Other valid unpaid proofs
remain available for the next state.

## What V2.2 Does Not Do

- It does not trust peer timestamps to backdate ordinary stale shares.
- It does not follow the branch with the most subsequent hashrate.
- It does not use node identities or votes for consensus weight.
- It does not activate snapshots or payment transitions from an unvalidated
  peer header.
- It does not yet complete all two-block reorganization and paid-confirmation
  rollback policy.
- It does not implement V3 multi-team or branch-market concepts.

## Beta Validation Gate

The first package-ready V2.2 milestone requires coordinated activation followed
by seven stable days across independently operated nodes. The soak must show
convergence without state wipes, deterministic reconciliation if a sibling
split occurs, preserved paid-once lineage, bounded state, and explainable mining
adapter rejection rates.

