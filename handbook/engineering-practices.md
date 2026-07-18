---
id: engineering-practices
title: Engineering And Contribution Practices
status: current
owner: Grid Labs
applies_to: project
last_verified: 2026-07-18
---

# Engineering And Contribution Practices

## General

- Inspect the target repository and its tests before proposing architecture.
- Preserve unrelated dirty work. Use focused commits and never reset user work.
- Prefer explicit versioned behavior over silent compatibility guesses.
- Keep Bitcoin/network selection, payout construction, and fee variants
  fail-closed.
- Add concise comments only where protocol reasoning is not evident from code.
- Public names use GridPool; legacy `Boot` identifiers change only with a
  compatibility plan.

## Consensus Changes

Every consensus change needs:

1. An accepted ADR explaining problem, alternatives, decision, and consequence.
2. Specification/state-transition changes and protocol version impact.
3. Unit and multi-node regression tests, including malformed/adversarial cases.
4. State migration and rollback analysis.
5. Coordinated deployment instructions and visible mismatch diagnostics.
6. Handbook, FAQ, UI, and public-claim updates.

## Adapter Changes

Keep pool-protocol details outside consensus. Test actual coinbase outputs,
slot-0 attribution, block submission, reconnect/session behavior, low-difficulty
telemetry, and high-difficulty full-proof reconstruction. Compatibility guidance
must be version-specific and should never promise untested firmware support.

## Research

Store scenario configuration, random seed, code revision, raw machine-readable
output, and report-generation commands. Define outcome metrics before inspecting
results. Compare actual bitcoin payout against solo and idealized FPPS where
applicable. Report negative and null findings.

## Documentation

Update the canonical source instead of copying text. Give every maintained
handbook module an owner/status/date. Mark evidence class and protocol version.
Archive superseded decisions with context; failed experiments are project
knowledge, not clutter.
