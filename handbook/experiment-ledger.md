---
id: experiment-ledger
title: Experiment And Incident Ledger
status: current
owner: Grid Labs
applies_to: project-history
last_verified: 2026-07-18
---

# Experiment And Incident Ledger

This ledger records why important directions changed. Detailed artifacts stay
in their owning repositories.

| Experiment or incident | Result | Consequence | Evidence owner |
| --- | --- | --- | --- |
| V1 genesis donation payout | Early miners effectively faced an unattractive first-block split and delayed reward | Replaced by V2 periodic snapshots and paid lineage | `gridpool-spec`, simulations |
| Destructive round clearing | Discarded unpaid useful work and behaved poorly during lucky streaks | V2 removes only proofs actually paid | Reference tests/spec |
| Whole-state “heaviest list” convergence | Preserved work after beta splits but exposed stale-branch/majority concerns | V2.1 merges compatible proofs and finalizes boundaries locally | Consensus audit |
| 897th-proof estimator sweep | Full-reserve cutoff outperformed sums/medians for aggregate work under tested assumptions | Use fixed full reserve and cutoff for estimation; not peer voting | Simulations |
| Pool-hopping sweeps | Slot frequency was the wrong primary metric; actual BTC payout changed interpretation | Model miner BTC EV/variance against solo and idealized FPPS | Simulations |
| Proof decay proposal | Added strategy and fairness complexity without demonstrated need | Keep vanilla unpaid proofs for V2.1 | Research notes |
| DATUM session churn | Incorrect response/session behavior caused high reject rates and gateway restarts | Preserve coinbaser/session semantics and test accepted-share hot path | Runtime tests/compatibility note |
| V2 state-bundle payout mismatch | Missing/incorrect retained snapshot context made peers validate proofs against the wrong payout context | Export required contexts, repair/prune invalid recovered proofs, add bundle smoke checks | Runtime tests |
| One-way hidden peer split recovery | Public node could not fetch a hidden node's heavier valid bundle | Add outbound persistent sessions; continue NAT traversal work | Networking plan |
| Compact UDP share relay | Small live sample showed useful first-arrival improvements and exposed need for pre/post-validation timestamps | Retain reliable WebSocket/HTTP fallback and collect larger samples | Live telemetry |
| Chain-tip header gossip | Revealed peer lead potential, duplicated ZMQ publishers, and Bitcoin P2P lag; not consistently faster than WebSocket | Keep as telemetry/redundancy; do not trigger consensus or optimistic mining yet | Live telemetry |
| Forced 300-output DATUM test | LuxOS eventually sustained thousands of accepted test shares in unsafe full mode | Maintain community compatibility matrix and explicit unsafe testing | Testnet runbook/matrix |
| Stock SRI JDC/JDS adapter | Functional direction but excessive overhead and fixed-suffix accounting patch | Prefer minimal SRI pool fork; retain adapter as historical design record | SV2 repositories |
| Testnet trigger/block observations | Some apparent rotations/blocks were UI/test-trigger or setup artifacts | Distinguish snapshots, real GridPool blocks, and chain acceptance in telemetry | Runtime/monitor docs |

## Incident Recording Standard

New entries should include date/window, affected versions, symptoms, root cause,
repair, regression test, deployment status, and remaining risk. Public entries
must sanitize operator identities and private infrastructure. Operational
commands and private topology belong in the private operations repository.
