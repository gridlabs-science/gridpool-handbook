---
id: document-inventory
title: Cross-Repository Document Inventory
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-18
---

# Cross-Repository Document Inventory

This inventory assigns document families to a system of record. Generated
outputs and dated archives remain in their owning repository and are not
individually promoted to project-wide canon.

## Handbook-Owned

- Project overview, principles, source precedence, reading paths, terminology.
- V2.1 explanatory model and statistical foundation.
- Project-wide FAQ, threat model, GridPool/P2Pool comparison.
- Cross-repository architecture, integration map, evidence summary, experiment
  ledger, ADRs, and project-level roadmap.

## `gridpool-spec`

| Document | Status | Purpose |
| --- | --- | --- |
| `gridpool-whitepaper-draft.md` | draft/current | Technical protocol explanation and mathematical basis |
| `gridpool-whitepaper-plain-language.md` | draft/current | Miner-oriented explanation |
| Corresponding PDFs | generated | Printable views; Markdown is canonical |

Future normative state/wire specifications and test vectors belong here.

## `gridpool-simulations`

| Family | Status | Purpose |
| --- | --- | --- |
| `reports/july17/gridpool-july17-research-update-v1.md` | current evidence | Canonical July 2026 research report |
| `reports/july17/gridpool-v2.1-consensus-note.md` | current evidence | V2.1 interpretation of earlier adversarial models |
| `reports/july17/live-telemetry/` | current field evidence | Small-network sanity checks |
| `docs/modeling-and-simulation-roadmap.md` | active plan | Remaining modeling work |
| `docs/v21-selective-inclusion-model.md` | current model | Selective inclusion/merge-forward threat model |
| `docs/consensus-selection-audit-results-2026-06.md` | dated evidence | Earlier estimator/scoring study |
| `docs/HANDOFF-2026-07-10.md`, `docs/next-runs-before-july-17.md` | historical | Session/deadline planning context |
| `reports/july17/archive/` | archived | Superseded handouts/editor copies |
| `docs/critic-faq.md` | redirect | Handbook is canonical |

Scenario files, model source, raw/generated data, and chart tooling stay here.

## `boot-protocol`

Current implementation/operator documentation remains in `docs/`:

- `consensus-selection-audit.md`, `hashrate-estimation.md`, `scaling-analysis.md`,
  `mining-hot-paths.md`, and `robust-networking-architecture-plan.md` describe
  reference behavior and active implementation work.
- `release-process.md`, `release-notes-template.md`,
  `umbrel-start9-launch-checklist.md`, service/install/testnet runbooks, health
  monitoring, launch infrastructure, and stress plans are operational canon.
- DATUM, Hydrapool, SV2, firmware, and full-coinbase documents are
  implementation/compatibility canon for the reference node.
- `ui-modes-plan.md`, `v3-branch-market-examples.md`, foundation proposals, and
  funding backlog are proposals, not current consensus.

Redirects now occupy the former project-wide FAQ, architecture-map, modeling
roadmap, and June simulation-findings paths. Their previous content is retained
under `docs/archive/` with other investigations and superseded launch notes.

## Website And Adapters

- `gridpool-web` owns public page operation and connection presentation, not
  protocol claims.
- `gridpool-sv2-pool` owns the current SRI fork delta and runbooks.
- `gridpool-sv2-adapter` is a historical prototype unless reactivated by ADR.
- `datum_gateway` owns generic DATUM client behavior proposed upstream.
- `esp-miner` owns firmware-specific integration behavior.

## Review Rule

When a new document overlaps an existing family, update or supersede the
canonical document. Do not create another “latest” copy. Dated research reports
are valid snapshots and should link forward to the newer interpretation.
