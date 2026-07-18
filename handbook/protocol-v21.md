---
id: protocol-v21
title: GridPool V2.1 Protocol Model
status: current
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# GridPool V2.1 Protocol Model

This is an explanatory summary, not the normative wire specification. The
draft technical whitepaper and reference tests remain required reading for a
consensus implementation.

## Core Objects

- **Share proof:** Bitcoin header, coinbase transaction, Merkle path, slot-0
  attribution, parent context, achieved difficulty, and snapshot reference
  sufficient for independent validation.
- **Unpaid Work Set:** bounded, deduplicated reserve of the strongest valid
  unpaid proofs. The beta default is 897 proofs.
- **Active snapshot:** the payout suffix currently locked into miners' block
  templates. It contains proof lineage and a Bitcoin parent/boundary context.
- **Paid lineage:** exact proof IDs paid by accepted GridPool blocks, preventing
  a proof from being paid twice while preserving unpaid reserve work.
- **Candidate state:** a peer's proposed synchronized state. It is not trusted
  merely because it claims greater aggregate work.

## Payout Construction

There are 300 conceptual subsidy slots. Slot 0 belongs to the block finder and
receives its fixed slot, transaction fees, and integer remainder. The remaining
outputs represent the active snapshot. With the canonical optional support fee
enabled, one post-slot-0 position is the support output and up to 298 are shared
proof positions. With it disabled, up to 299 are shared positions.

Payout attribution is derived from the actual slot-0 output in the coinbase.
Username, source node, worker suffix, and submitted metadata cannot override it.

## State Transitions

On an ordinary new Bitcoin block:

1. Each node finalizes a new active snapshot from its locally valid unpaid Work
   Set for that boundary.
2. The proofs remain unpaid and remain in the reserve.
3. New work uses the new parent and active snapshot.

On an accepted GridPool block:

1. Validate the complete block/share proof and the snapshot it actually paid.
2. Record paid lineage for that snapshot.
3. Remove exactly those paid proof IDs once.
4. Keep other valid unpaid proofs, including reserve depth and qualifying work
   received after the paid snapshot was formed.
5. Build subsequent snapshots from the remaining reserve.

## V2.1 Merge-Forward Rule

Nodes merge independently valid proofs that share compatible current-parent
and snapshot context. They deduplicate by proof ID, rank the union, and keep the
best bounded reserve. They do not select an entire peer reserve as an atomic
winner merely because the peer reports a higher sum.

Snapshot boundaries are locally final. A proof tied to the previous Bitcoin
parent that arrives after a node has finalized the next boundary is rejected or
quarantined; a peer cannot backdate its clock or provide a private context to
retroactively rewrite that local snapshot.

This sharply limits the old “heaviest stale branch wins” attack entry point,
but it does not guarantee that every node instantly has an identical active
snapshot. A last-millisecond proof can still produce temporarily incompatible
snapshots. Compatible future work can merge; incompatible active snapshots may
coexist until their differing proof is displaced or paid. Recovery policy and
operator visibility remain active engineering concerns.

## Fixed Resource Bounds

The default 897-proof reserve is three times the 299 shared-position capacity.
This bounds steady-state validation, storage, and synchronization work and
provides depth for lucky streaks. Snapshot contexts are retained while active
or unpaid proofs depend on them, then pruned when no longer referenced.

## Versioning

Protocol, network, and relay capabilities are explicit. Incompatible peers
must fail visibly rather than importing a state under different payout or
parent rules. Consensus-changing releases require coordinated deployment until
backward-compatible negotiation exists.
