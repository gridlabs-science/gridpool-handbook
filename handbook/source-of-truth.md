---
id: source-of-truth
title: Source Of Truth And Documentation Governance
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-18
---

# Source Of Truth And Documentation Governance

GridPool uses a federated canon. The handbook is the map and the source for
cross-project reasoning, but it does not copy ownership away from specifications
or implementation repositories.

## Precedence

1. Bitcoin consensus and the normative GridPool specification/test vectors.
2. Accepted architecture decision records.
3. Current handbook explanations.
4. Current implementation documentation next to the affected code.
5. Reproducible simulation reports and field telemetry.
6. Drafts, proposals, archived documents, and historical discussion.

This order does not mean code is automatically correct. A mismatch between
specification, tests, and deployed behavior is a defect or an unresolved
decision and must be reported as such.

## Repository Ownership

| Repository | Canonical responsibility |
| --- | --- |
| `gridpool-handbook` | Project concepts, decisions, history, roadmap, cross-repo navigation |
| `gridpool-spec` | Protocol rules, wire semantics, whitepapers, test vectors |
| `boot-protocol` | Reference implementation, APIs, UI, networking, deployment/runbooks |
| `gridpool-simulations` | Models, raw/generated evidence, research reports |
| `gridpool-web` | Public landing content and connection instructions |
| `gridpool-sv2-pool` | Active SV2 integration behavior and upstream delta |
| Adapter/fork repositories | Integration-specific behavior and compatibility notes |

## Evidence Labels

- **Mathematical result:** derived from explicit assumptions; those assumptions
  must be stated.
- **Simulation result:** reproducible under a named model and parameter set; it
  is not automatically a live-network guarantee.
- **Regression-tested behavior:** exercised by implementation tests at a named
  revision.
- **Field observation:** observed on a bounded network and time window; sample
  size and topology matter.
- **Design intent:** desired behavior that may not yet be normative or deployed.
- **Hypothesis:** plausible claim still requiring analysis or measurement.

## Lifecycle

Every maintained handbook module declares a status, owner, applicability, and
verification date. Superseded material is archived or replaced by a redirect;
it is never left looking current. Consensus and release changes must update
their canonical documents in the same change. A quarterly documentation pass
checks ownership, links, stale dates, unresolved contradictions, and whether
active plans have become historical.

## Private Operations

Machine inventories, LAN addresses, SSH aliases, operator details, and recovery
procedures belong in the local-only `gridpool-operations-private` repository.
Raw passwords, tokens, private keys, wallet seeds, and bot tokens belong in a
credential manager or protected environment file, never in either repository.
