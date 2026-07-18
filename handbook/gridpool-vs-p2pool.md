---
id: gridpool-vs-p2pool
title: GridPool And P2Pool Comparison
status: current
owner: Grid Labs
applies_to: research-comparison-2026-07
last_verified: 2026-07-18
---

# GridPool And P2Pool Comparison

This comparison is dated July 2026. It distinguishes original P2Pool from the
active P2PoolV2 effort; P2PoolV2 is evolving and must be reviewed against its
current upstream code and design documents before repeating specific claims.

## Shared Goal

Both systems try to reduce solo variance without handing transaction selection
and reward custody to a conventional pool operator. Both make miners prove work
to peers and both must cope with Internet latency, partitions, hostile peers,
and practical coinbase limits.

## Different Accounting Primitive

Original P2Pool and current P2PoolV2 designs use a sharechain: frequent weak
blocks establish ordering and PPLNS accounting. GridPool uses a bounded,
difficulty-ranked set of independent Bitcoin share proofs and periodic payout
snapshots. It intentionally has no secondary canonical chain.

That distinction drives most tradeoffs:

| Property | GridPool V2.1 | P2Pool / P2PoolV2 direction |
| --- | --- | --- |
| Ordering | Difficulty-ranked set plus Bitcoin boundaries | Ordered sharechain |
| Latency sensitivity | Boundary races; no continuous tip race | Every sharechain extension can race; uncles aim to reward near-tip work |
| Majority attack shape | Cannot reorganize a sharechain that does not exist; partitions/teams remain | Sharechain security strengthens with accumulated chain work and majority participation |
| Accounting data | Bounded reserve plus retained contexts | Replicated sharechain/window and associated state |
| Coinbase payouts | Up to roughly 300 direct positions | Original paid many directly; V2 explores limited direct recipients plus share trading/market makers |
| Variance scaling | Fixed shared-position envelope; modeled BTC cadence can remain useful as team grows | Depends on share interval, PPLNS window, uncle policy, and payout market design |
| Template adapters | Consensus layer is intended to be DATUM/SV2/direct-firmware agnostic | Pool node and sharechain integrate template/mining interfaces |
| Maturity | Novel public beta with a small field network | Original has historical deployment; V2 is active redesign/reimplementation |

## Latency

Original P2Pool's roughly 30-second share cadence made propagation latency a
recurring race for the next canonical tip and encouraged low-latency
aggregation. P2PoolV2's uncle-share work explicitly targets this weakness by
crediting valid near-tip branches.

GridPool replaces the continuous tip race with a sorted set. Two peers can
receive ordinary current-parent proofs in different orders and still merge the
same union. Latency matters most at Bitcoin snapshot boundaries, where a proof
seen just before the boundary by one node and just after it by another can
create different active snapshots. This is less frequent than a 30-second tip
race, but not zero.

## Scale And Variance

GridPool's retained state is intentionally fixed at 897 unpaid proofs and about
300 conceptual payout positions. Models indicate that actual BTC payout cadence
for a fixed miner can remain approximately stable as team hashrate grows:
position probability falls while team block frequency rises. This claim depends
on list saturation, miner scale, and the payout model; it is not a promise of
FPPS variance.

A sharechain can increase its share difficulty or alter its window to keep
network traffic bounded as hashrate grows. Doing so changes the number and
frequency of accounting events available for small miners. P2PoolV2's proposed
share trading and limited coinbase recipients address a different scaling
constraint but introduce market-maker/liquidity assumptions GridPool avoids.

## Honest Bottom Line

P2Pool has the conceptual advantage of an explicit ordered consensus history
and decades of accumulated sharechain reasoning. P2PoolV2 can incorporate
uncle rewards and transactional payout mechanisms that GridPool does not have.

GridPool has the conceptual advantage of bounded state, order-independent
merge for compatible proofs, direct fixed-slot payouts, and adapter-neutral
template construction. Its cost is unusual snapshot semantics, large coinbase
requirements, incomplete partition recovery policy, and substantially less
production experience. These are complementary experiments, not a basis for
claiming that either project has already solved decentralized mining.

## Primary References

- P2PoolV2 upstream: https://github.com/p2poolv2/p2poolv2
- P2PoolV2 network simulation proposal:
  https://gist.github.com/pool2win/e189c697547251312361b6d920749912
- P2PoolV2 payout user story:
  https://gist.github.com/pool2win/ba1db237a76d2ebf51829f5a5df6663b
- GridPool technical whitepaper and July 2026 research update are embedded in
  `GRIDPOOL-FULL-CORPUS.md`.
