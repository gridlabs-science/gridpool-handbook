---
id: research-findings
title: Research And Field Findings
status: current
owner: Grid Labs
applies_to: evidence-through-2026-07-18
last_verified: 2026-07-18
---

# Research And Field Findings

The canonical data, commands, and detailed caveats live in
`gridpool-simulations`. This page records the project-level interpretation.

## Findings With Strong Support

- Achieved-difficulty order statistics provide a compact estimator of aggregate
  attempted work. A full 897-proof cutoff has approximately 3.34% relative
  standard error under the independent uniform-order-statistic model.
- Comparing actual bitcoin payout, not slot frequency alone, materially changes
  the variance analysis. Increased team block frequency can offset lower slot
  occupancy for a fixed miner.
- Larger fixed payout lists substantially reduce realized payout variance for
  small miners compared with short lists in the modeled regimes. This supports
  retaining roughly 300 conceptual positions despite firmware cost.
- Proof decay is not required to make the baseline pool-hopping story coherent;
  adding it would introduce complexity and new strategy surface.
- Sum of achieved difficulty is unstable because the distribution is heavy
  tailed. The full-reserve cutoff is a better aggregate work estimator when the
  reserve is fixed and full.
- V2.1 set merge for compatible current-parent proofs is materially different
  from selecting an entire peer branch by claimed weight.

## Findings That Remain Conditional

- Modeled pool hopping into solo may be attractive to miners large enough to
  tolerate solo variance after a lucky retained-position streak. That does not
  automatically reduce honest miners' expected value, but strategy boundaries
  depend on miner size, team size, fees, and decision horizon.
- Slot-0 plus fees raises the cost of withholding, but realistic slot-0 changes
  are not a strong enough lever to replace strict stale-proof admission rules.
- Boundary disagreement probability improves sharply with faster propagation
  in simulation, but persistence depends on proof displacement, payment, and
  actual network topology.
- Live UDP/WebSocket observations are a field sanity check on a tiny network,
  not proof of Internet-scale performance.

## Important Negative Results

- A generic “heaviest Work Set wins” rule recreates majority-hashrate branch
  selection and allows late stale work to influence new joiners.
- Best-share and aggregate-sum branch scoring do not safely solve retroactive
  snapshot selection. Common proofs create ties; heavy-tail outliers distort
  sums.
- Decaying or TTL-based proofs punish honest miners and complicate incentives.
- Reducing payout count solely for firmware compatibility weakens the fixed-list
  game and can let large miners omit small miners. Compatibility tiers remain a
  possible future design, not current consensus.
- A full JDC/JDS SV2 path works but is excessive for the sovereign one-node use
  case; the SRI pool fork is the simpler active direction.

## Reproducibility Boundary

The July 17 research update records scenario files, commands, generated tables,
test summaries, and field windows. Future reports should preserve this pattern
and record code revision, random seed, wall-clock window, node restarts, missing
data, and any manual exclusions.
