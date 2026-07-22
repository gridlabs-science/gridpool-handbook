---
id: project-architecture
title: Project And Repository Architecture
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-22
---

# Project And Repository Architecture

GridPool separates consensus/networking from mining-protocol adapters so one
reward-sharing network can accept work from different sovereign mining stacks.

## Core Repositories

- **`boot-protocol`:** reference GridPool node. It validates proofs, maintains
  Work Set/snapshot/paid lineage, synchronizes peers, serves HTTP/WebSocket/UDP,
  exposes the UI, and accepts DATUM and HTTP-submitted work.
- **`gridpool-spec`:** draft protocol and whitepapers. It must eventually hold
  wire schemas, deterministic vectors, state-transition vectors, and version
  compatibility requirements independent of the reference implementation.
- **`gridpool-simulations`:** research environment. It must never be imported as
  consensus code merely because a model supports a mechanism.
- **`gridpool-web`:** static public information and connection guidance. It is
  not a node, source of consensus truth, or secret-bearing deployment repo.

## Mining Integrations

- DATUM is currently the most mature sovereign adapter. A user's DATUM Gateway
  gets templates from the user's Bitcoin node, serves miners over Stratum V1,
  submits valid Bitcoin blocks locally, and sends GridPool share proofs to the
  connected node.
- `gridpool-sv2-pool` is the active SRI-derived direction. Forking the pool role
  avoids unnecessary JDC/JDS overhead for the common one-sovereign-node case
  and supports header-only SV2 mining.
- `gridpool-sv2-adapter` records an earlier JDC/JDS sidecar experiment. It is
  useful history but is not the preferred architecture.
- Hydrapool provides a Stratum V1/HTTP integration path and hosted endpoint.
- `gridpool-ckpool` plus `gridpool-ckpool-adapter` provide an early public-beta
  Stratum V1 gateway using the generic GridPool work-plan, SSE, full-proof, and
  telemetry contract. Ordinary CKPool users remain on ordinary templates;
  GridPool mode is explicit.
- PublicPool is the next integration candidate because of its self-hosted
  footprint. No integration is implemented yet; the first step is an upstream
  architecture seam review, not PublicPool-specific consensus code.
- `esp-miner` demonstrates direct firmware template construction and HTTP share
  submission without a traditional Stratum pool layer.

## Dependency Direction

Adapters may depend on GridPool's published work-selection/share APIs. The
GridPool consensus layer must not depend on DATUM-, SV2-, Hydrapool-, or
firmware-specific identity semantics. Full proof validation remains in the
GridPool node. Adapter telemetry may inform UI and vardiff but cannot override
coinbase-derived attribution.

## Adding An Adapter

An adapter must:

1. Obtain the current active payout suffix and snapshot identity.
2. Construct work with the miner/operator's actual slot-0 output.
3. Preserve the complete coinbase and Merkle material needed for proof
   reconstruction.
4. Submit low-difficulty local heartbeat telemetry separately from proofs that
   meet network admission thresholds.
5. Submit a found Bitcoin block through a local trusted Bitcoin path, not rely
   solely on GridPool relay.
6. Fail closed on wrong network, payout truncation, snapshot mismatch, or
   unsupported protocol versions.

## Architecture Debt

The reference repository still combines consensus, networking, DATUM server,
UI, and operator tooling. That is acceptable for the beta but increases the
blast radius of changes. The long-term modular boundary is a reusable consensus
and peer engine with optional adapter packages, not a rewrite before packaging.

The combined UI/API currently also mixes public network status with detailed
operator diagnostics. Packaging requires an explicit disclosure boundary:
public node identity, private/outbound-only identity, and local authenticated
diagnostics must use distinct response policies rather than relying on the UI to
hide raw fields.
