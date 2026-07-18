---
id: roadmap-open-questions
title: Roadmap And Open Questions
status: current
owner: Grid Labs
applies_to: public-beta
last_verified: 2026-07-18
---

# Roadmap And Open Questions

The detailed package gate remains the `boot-protocol` Umbrel/Start9 checklist.
This page records project-level priorities.

## Near-Term Beta

- Complete V2.1 direct-ingress and state-bundle regression coverage, then publish
  deterministic protocol vectors.
- Finish a coordinated protocol/version compatibility process suitable for
  public package users rather than ad hoc `main` pulls.
- Complete multi-node soak monitoring, restart/recovery tests, backup/restore,
  and actionable state-divergence diagnostics.
- Build one-click Umbrel and Start9 packages with private UI defaults, payout
  address setup, nearby Bitcoin-node discovery, and clear degraded networking.
- Expand the firmware/rental compatibility matrix using the forced full-coinbase
  test endpoint and community reports.
- Upstream or maintain the minimal DATUM forced-coinbase behavior and stabilize
  the SRI-derived SV2 integration.
- Continue a presentation-correct UI pass: active snapshot positions are locked;
  unpaid Work Set positions are provisional and may be displaced.

## Networking

- Measure automatic PCP/NAT-PMP/UPnP success and external reachability.
- Diversify seed/discovery methods and avoid permanent relay dependence.
- Decide whether authenticated UDP hole punching is justified by observed
  private-node topology and latency.
- Add transport encryption/privacy without coupling identity count to consensus.
- Evaluate chain-tip header gossip as snapshot-awareness assistance only after
  reorg, validation, and spoofing behavior is explicit.

## Consensus Questions

- Publish a complete normative V2.1 merge/quarantine specification and vectors.
- Define clean recovery for accidental long-lived incompatible snapshots without
  reintroducing retroactive stale-branch election.
- Model delayed snapshots by fixed time or Bitcoin-block depth and their reorg,
  payout-delay, and withholding tradeoffs.
- Specify behavior for one- and two-block Bitcoin reorganizations and potential
  consensus-affecting chain splits such as BIP110 scenarios.
- Revisit whether the optional support output is the cleanest sustainable
  funding mechanism.
- Explore variable coinbase capability only if a mechanism preserves fixed-list
  incentives; no such mechanism is accepted today.

## Longer-Term Research

- V3 multi-team or branch-market ideas intentionally embrace rather than hide
  pool splits. They require bounded resource models, legible UX, and much deeper
  incentive analysis before implementation.
- Compare GridPool and P2PoolV2 against common scenarios with shared assumptions
  rather than marketing claims.
- Expand live telemetry to more geographies and commodity nodes.
- Explore FIBRE interoperability for full-block propagation rather than turning
  GridPool header gossip into a bespoke full relay network.
