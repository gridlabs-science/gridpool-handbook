---
id: faq
title: GridPool Technical FAQ
status: current
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# GridPool Technical FAQ

## Is GridPool A Conventional Pool?

No. There is no pool wallet or private payout ledger. Miners construct Bitcoin
templates whose coinbase directly pays slot 0 and the active GridPool snapshot.
GridPool coordinates the verifiable payout suffix.

## Is It A Sharechain?

No. Proofs are independent, difficulty-ranked objects in a bounded set. Their
arrival order does not create a chain. Bitcoin block boundaries create payout
snapshots, and paid lineage prevents reuse.

## Why Does Pool Hopping Not Obviously Steal From Other Miners?

A retained proof represents real completed work. Leaving does not fabricate
that work or reduce anyone else's proof difficulty. A miner that leaves also
gives up future slot-0 opportunities and the chance to improve or defend its
positions. Very large miners may still prefer solo after a lucky streak because
they can tolerate solo variance; simulations treat this as a strategy question,
not moral cheating.

## Does An Inactive Large Miner Make Small Miners Work For Free?

No. If the inactive miner's strong proofs remain in a paid snapshot, those
proofs are claims for earlier work. Remaining miners still compete for other
positions and slot 0. Over time stronger new proofs displace old unpaid proofs,
and payment removes the exact paid IDs.

## Can A Miner Gain By Using Many Addresses?

No in expectation. Addresses do not receive weight; independently verified
hashes do. Splitting one hash stream across identities does not change its
achieved-difficulty distribution.

## Why Would I Include Another Miner's Proof?

The protocol rule is symmetric and mechanically validated. Accepting all valid,
compatible strong proofs produces a payout set other miners can independently
reconstruct and accept. Selective exclusion can create an incompatible smaller
team, reduce mutual reward-sharing opportunities, and make the censor's own
proofs less useful to inclusive peers. This is an incentive, not social voting.

## What Happens At A Snapshot Race?

Two nodes can honestly place a last-millisecond proof on opposite sides of a
Bitcoin boundary and finalize different active snapshots. Their compatible
current-parent reserve proofs can merge, but shares mined against incompatible
active snapshots cannot simply be relabeled. The disagreement resolves when
the distinguishing proof is displaced or paid, or through an explicit recovery
path. V2.1 does not let a peer backdate late stale proofs to rewrite the other
node's boundary.

## Is GridPool Immune To A 51% Attack?

That phrase is too broad. GridPool has no sharechain to reorganize, so the
classic sharechain-majority attack does not apply in the same form. A majority
miner can still partition, censor, or create a separate team. V2.1 prevents a
generic claimed-heavy stale branch from automatically rewriting honest state.

## Can GridPool Detect Transaction Censorship?

Peers validate proof-of-work, coinbase payouts, and Merkle commitment, but do
not need the full transaction list. That makes protocol-level transaction
blacklisting difficult. A hosted adapter or a miner's local software can still
choose or censor templates; sovereign local construction is the defense.

## Why 300 Slots And 897 Proofs?

Think of 300 seats: slot 0 is the driver/block finder, while the remaining seats
share the subsidy. The 897-proof reserve is a waiting line three times as deep,
providing verified work for lucky consecutive blocks and a lower-noise aggregate
cutoff. The values are protocol design choices, not Bitcoin constants.

## Will Every ASIC Work?

No. Some Stratum V1 firmware cannot accept coinbases with hundreds of payout
outputs. GridPool rejects truncated payouts. Compatible DATUM firmware, native
SV2 header-only mining, or future tested compatibility mechanisms are required.

## Is The Support Fee Mandatory?

The beta supports a canonical optional support output. Nodes may disable it;
they may not substitute an arbitrary custom address into that special role.
The mechanism is under review and should not be described as permanent.

## Is GridPool Ready For Production?

It is a public beta with live nodes, miners, tests, simulations, and telemetry.
One-click packaging, complete independent protocol vectors, broader firmware
testing, and adversarial multi-implementation testing remain launch work.
