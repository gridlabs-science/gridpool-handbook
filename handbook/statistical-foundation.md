---
id: statistical-foundation
title: Statistical Foundation
status: current
owner: Grid Labs
applies_to: protocol-v2.1
last_verified: 2026-07-18
---

# Statistical Foundation

GridPool's core innovation is accounting by **achieved difficulty**, not by
counting every share above an assigned minimum.

## Achieved Difficulty

Every hash is a random draw. Conditional on meeting a minimum difficulty
`d_min`, achieved difficulty `D` has the tail:

```text
P(D >= x | D >= d_min) = d_min / x, for x >= d_min
```

Equivalently, `V = d_min / D` is uniform on `(0, 1]`. The best hashes are the
smallest order statistics of `V`. If `S` qualifying hashes were attempted and
the protocol retains the best `m`, the cutoff approximately satisfies:

```text
S_hat ~= m / V_(m) = m * D_(m) / d_min
```

The relative standard error is approximately `1 / sqrt(m)`. For a reserve of
897 proofs this is about 3.34% for **aggregate work over the observation
window**, under the model assumptions.

## What The Estimate Does Not Say

The cutoff is an aggregate estimator. It does not estimate every miner equally
well. A large miner represented by many retained proofs is sampled more tightly;
a micro miner represented by one unusually strong proof has much higher
individual uncertainty. Fair expected payout does not require an accurate
instantaneous per-miner hashrate estimate.

The estimate also assumes comparable observation windows, honest proof
validation, and a full fixed-size reserve. Missing entries are conceptually
zero. Sum of achieved difficulties is a poor replacement because the heavy
tail makes it dominated by rare outliers.

## Why Ranking Is Sybil-Neutral

Proofs are ranked by independently verified work, not by usernames, IPs,
connections, or addresses. Splitting one miner into many identities does not
change the distribution of its hashes or its expected number of retained
positions. Identity can help organize workers, but it does not create work.

## Payout Variance

GridPool payout variance must be measured in bitcoin actually received, not
merely in slot-inclusion frequency. If a fixed-size team doubles in hashrate,
blocks arrive roughly twice as often while a fixed miner occupies positions
roughly half as often. Those effects can offset, leaving similar payout cadence
and expected value once the team is large enough to sustain the ranked list.

This is why “299 shared positions” is not just a display choice. It defines the
maximum variance-reduction envelope, while the 897-proof reserve provides depth
for successive payments and a more stable aggregate work cutoff.

## Lucky-Proof Survival

A strong early proof is not automatically paid. It must remain above the active
cutoff until included in a paid snapshot. If a proof has difficulty `D_s` and
Bitcoin network difficulty is `D_network`, an approximate probability of
remaining in the top 300 through a pool round is:

```text
1 - (D_network / (D_s + D_network))^300
```

The formula captures why trivially easy shares earned when a team is small do
not create durable claims: later, stronger work pushes them out.

## Evidence Boundary

The order-statistic relationships are mathematical under stated assumptions.
Claims about miner behavior, network convergence, pool hopping, withholding,
or realized payout variance rely on simulations and field measurements linked
from `research-findings.md`.
