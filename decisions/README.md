# GridPool Architecture Decisions

Architecture decision records preserve why the project chose a mechanism. They
do not replace the normative specification or implementation tests.

Statuses:

- `proposed`: under discussion, not an implementation requirement.
- `accepted`: current project direction.
- `superseded`: retained for history; follow the replacing ADR.
- `revisit`: deployed or previously accepted but intentionally under review.

| ADR | Decision | Status |
| --- | --- | --- |
| [0001](0001-ranked-achieved-difficulty.md) | Rank achieved difficulty instead of count every share | accepted |
| [0002](0002-fixed-payout-and-reserve-size.md) | 300 conceptual slots and 897-proof reserve | accepted |
| [0003](0003-v2-snapshots-and-paid-lineage.md) | Bitcoin-boundary snapshots and paid-once lineage | accepted |
| [0004](0004-v21-merge-and-boundary-finality.md) | Merge compatible proofs; reject late stale rewrites | accepted |
| [0005](0005-sovereign-slot-zero.md) | Coinbase-derived sovereign slot-0 attribution | accepted |
| [0006](0006-layered-peer-transports.md) | Reliable relay plus compact UDP fast path | accepted |
| [0007](0007-canonical-support-output.md) | Optional canonical support output | revisit |
| [0008](0008-sv2-pool-fork.md) | Prefer minimal SRI pool fork over JDC/JDS sidecar | accepted |
