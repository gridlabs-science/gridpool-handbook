---
id: roadmap-open-questions
title: Roadmap And Open Questions
status: current
owner: Grid Labs
applies_to: public-beta
last_verified: 2026-07-27
---

# Roadmap And Open Questions

The detailed package gate remains the `boot-protocol` Umbrel/Start9 checklist.
This page records project-level priorities.

## Near-Term Beta

- V2.2 activated at Bitcoin height `959500`. Pin Main and Oregon to one
  provenanced release, pass a 24-hour canary, then run a clean seven-day
  protocol soak. Other operator nodes contribute evidence when available but
  do not control the clock.
- Freeze consensus, payout, state, peer, and mining hot-path behavior during the
  soak except for demonstrated safety or availability defects.
- Publish V2.2 Monotonic Snapshot Reconciliation language and deterministic
  vectors independently of the reference implementation.
- Finish a coordinated protocol/version compatibility process suitable for
  public package users rather than ad hoc `main` pulls.
- Complete multi-node soak monitoring, restart/recovery tests, backup/restore,
  reconciliation telemetry, and actionable same-boundary divergence diagnostics.
- Expand StratumRace from one effective vantage to Main plus at least one remote
  site with an attached Bitcoin node and verified clock quality.
- Build Umbrel and StartOS sideload packages now and run them concurrently with
  the protocol soak. Keep package-canary resets distinct from shared-runtime
  soak resets.
- Make native SV2 the only promised initial miner transport. Continue the
  firmware/rental matrix as community research; SV1 and rental paths remain
  unsupported unless an exact version is tested.
- Complete a pre-package security/privacy review. Remove prototype-era secret
  logging, classify unauthenticated API/UI fields, keep outbound-only endpoints
  private, and make private UI/network exposure the package default.
- Deprecate DATUM in initial appliance onboarding until deterministic forced
  coinbase selection is available upstream. Retain it as experimental tooling
  while stabilizing and packaging the SRI-derived native SV2 integration.
- Continue a presentation-correct UI pass: active snapshot positions are locked;
  unpaid Work Set positions are provisional and may be displaced.
- Design the full UI refresh against captured V2.2 states during the soak, but
  deploy it afterward so presentation work does not invalidate stability data.

## Mining Gateway Integrations

- Stabilize the existing CKPool/AtlasPool fork and sidecar through a bounded
  canary before broad operator instructions.
- Use the generic work-plan/SSE/proof/telemetry contract as the common adapter
  boundary; adapter identity metadata never overrides coinbase slot-0.
- Perform a PublicPool architecture spike next. Map its current NestJS/TypeScript
  job construction, vardiff, per-user attribution, and local block submission
  before choosing a narrow upstream interface, optional module, or sidecar.
- Do not deploy PublicPool integration to the reference network during the V2.2
  soak. Design and regtest work may proceed in parallel.

## Networking

- Measure automatic PCP/NAT-PMP/UPnP success and external reachability.
- Diversify seed/discovery methods and avoid permanent relay dependence.
- Decide whether authenticated UDP hole punching is justified by observed
  private-node topology and latency.
- Add transport encryption/privacy without coupling identity count to consensus.
- Evaluate chain-tip header gossip as snapshot-awareness assistance only after
  reorg, validation, and spoofing behavior is explicit.
- Separate peer-protocol identity from public presentation: an outbound-only
  node may reveal a cryptographic node ID over its encrypted session without
  publishing an observed IP, LAN address, socket endpoint, or miner identity.

## Security And Privacy

- Treat long-term Ed25519/X25519 identity keys as secrets. The reference node's
  prototype-era startup logging of private keys is a confirmed defect being
  removed before the soak; retained provider/container logs may require a
  deliberate identity rotation after migration is tested.
- Inventory unauthenticated UI/API, peer gossip, telemetry, incident captures,
  and support bundles for endpoint and miner-identity disclosure.
- Define public, private, and operator-only status DTOs rather than relying on
  CSS or UI hiding to protect sensitive fields.
- Review key-file permissions, reverse proxies, forwarded-header trust,
  WebSocket/admin authentication, rate limits, container privileges, and log
  retention before Umbrel/Start9 launch.

## Consensus Questions

- Complete the normative V2.2 MSR specification and vectors. V2.2 addresses
  honest sibling-boundary splits through validated monotonic union without
  post-boundary hashrate or peer-count branch voting.
- Validate V2.2 recovery on the public network without a manual state wipe or
  whole-state heaviest-branch selection.
- Model delayed snapshots by fixed time or Bitcoin-block depth and their reorg,
  payout-delay, and withholding tradeoffs.
- Specify behavior for one- and two-block Bitcoin reorganizations and potential
  consensus-affecting chain splits such as BIP110 scenarios.
- Reference-network funding uses a single canonical support slot (~0.33%);
  dual fee-on/off dialects are deferred (ADR-0007 accepted 2026-07-19). Grant and
  donation funding remain first-class.
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
