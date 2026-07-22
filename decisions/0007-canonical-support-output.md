---
id: adr-0007
title: Canonical Support Output (Reference Network Fee-On)
status: accepted
owner: Grid Labs
applies_to: protocol-v2.1-beta, protocol-v2.2
last_verified: 2026-07-19
---

# ADR 0007: Canonical Support Output (Reference Network Fee-On)

## Decision

The public reference GridPool network uses **support-on only**.

Within the fixed 300 conceptual subsidy slots:

- Slot 0 remains the block finder's sovereign payout.
- Exactly one post-slot-0 position is the **canonical Grid Labs support output**.
- Up to 298 positions are shared proof payouts ranked by achieved difficulty.

The support address is canonical. Compatible implementations MUST use that
address when constructing the reference-network payout suffix. They MUST NOT
substitute an arbitrary operator fee address and still claim reference-network
compatibility.

Support-off construction (up to 299 shared proof positions, no support slot)
is **not** an interoperable dialect of the public reference network. It may
exist only as an experimental build, private deployment, or future coordinated
migration — not as a mixed peer of fee-on mainnet nodes.

## Rationale

1. **CONS-003:** Fee-on and fee-off suffixes produce different snapshot
   identities and different paid proof sets. Both can be locally valid
   constructions, but mixed operation makes paid-lineage bookkeeping ambiguous.
   A single public dialect removes that class of cross-variant consensus bugs
   for launch.
2. **Transparency:** One fixed ~1/300 subsidy slot (~0.33% before remainder
   details) is simpler to explain than optional dialects or probabilistic
   full-template skims.
3. **Funding honesty:** The slot is optional upside for Grid Labs lab work, not
   a substitute for grants, donations, or other non-consensus funding. Block
   discovery remains rare at early hashrate; protocol design must not assume
   salary-scale fee income.
4. **Competition:** GridPool competes on non-custodial ranked-set payouts and
   multi-node operation, not on racing pure 0% solo pools. A tiny canonical slot
   is acceptable product cost for a single clean network.

## Consequences

- Public packages, seeds, and docs default to and require support-on for the
  reference network.
- Paid lineage is single-variant (support-on). Cross-variant consensus is
  explicitly deferred (CONS-003 resolution path).
- A future move to support-off or dual-dialect operation requires a coordinated
  height- or version-gated migration and a new ADR; it is not a silent config
  flip among mixed peers.
- Grant and donation funding remain first-class so the project is not dependent
  on support-slot EV.

## Prior status

Earlier beta text allowed configuration to enable or disable the canonical slot
while forbidding address substitution. That optional-on/off interoperability
goal is superseded for the public reference network by this acceptance.
