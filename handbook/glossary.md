---
id: glossary
title: GridPool Glossary
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-18
---

# GridPool Glossary

- **Achieved difficulty:** Quality of the hash actually found, rather than the
  assigned threshold it was asked to meet.
- **Active snapshot:** Locked post-slot-0 payout suffix used in current block
  templates for a given local Bitcoin boundary.
- **Assigned difficulty:** Threshold a miner or gateway is asked to meet for
  ordinary share/telemetry cadence.
- **Boundary race:** Different honest observations near a Bitcoin tip causing
  nodes to finalize different active snapshots.
- **Candidate state:** Peer-proposed synchronized state awaiting validation.
- **Coinbase transaction:** The first transaction in a Bitcoin block, creating
  the subsidy and collecting transaction fees. It is unrelated to the exchange.
- **Current-parent proof:** Proof mined on the Bitcoin parent currently accepted
  for merge-forward admission.
- **DATUM:** Mining protocol/gateway enabling miners to construct templates with
  their own Bitcoin node while communicating with a pool server.
- **GridPool block:** Bitcoin-valid block whose coinbase pays a valid active
  GridPool snapshot.
- **Merge-forward:** Validate and union compatible individual proofs rather than
  choose one peer's whole Work Set.
- **Paid lineage:** Exact snapshot/proof IDs already paid and therefore removed
  once from future eligibility.
- **Pulse proof:** Valid lower-difficulty network heartbeat that is observable
  but does not mutate the Work Set.
- **Share proof:** Header, coinbase, Merkle path, and context needed to validate
  work and payout attribution independently.
- **Slot 0:** Block finder's output. It receives its fixed subsidy slot,
  transaction fees, and integer remainder.
- **Snapshot context:** Retained payout and parent information required to
  validate a proof mined against an earlier active snapshot.
- **Team:** Miners working on compatible active snapshots and sharing proofs. It
  is not a registered membership list.
- **Unpaid Work Set:** Bounded reserve of strongest valid unpaid share proofs.
- **Vardiff:** Adjusting assigned share difficulty to maintain a useful local
  reporting cadence; it does not change achieved proof ranking.
- **Winners List:** Legacy/reference-implementation name for the active
  post-slot-0 snapshot. Prefer **active snapshot** in public explanations.
- **On Deck List:** Legacy/UI name for a top slice of the unpaid Work Set. Its
  positions are provisional, not locked.
