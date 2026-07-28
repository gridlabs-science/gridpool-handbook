# GridPool Agent Map

GridPool is an experimental decentralized reward-sharing protocol for
sovereign Bitcoin miners. It is public beta software, not a conventional
custodial pool and not a finished consensus standard.

## Read First

1. `handbook/project-overview.md`
2. `handbook/source-of-truth.md`
3. `handbook/protocol-v22.md` and the V2.1 foundation in
   `handbook/protocol-v21.md`
4. `handbook/statistical-foundation.md`
5. `handbook/security-and-threat-model.md`
6. The scoped `AGENTS.md` in the repository being changed

Use `handbook/reading-paths.md` for role-specific paths.

## Hard Rules

- Call the public project **GridPool**. `Boot Protocol` survives only in legacy
  code, config, service, API, and repository names.
- Never describe a simulation result as a protocol guarantee.
- Never describe intended specification behavior as deployed behavior without
  checking the reference implementation and tests.
- Preserve sovereign template construction and direct non-custodial coinbase
  payouts as core design constraints.
- Payout attribution comes from the actual slot-0 coinbase output, not usernames
  or sender metadata.
- V2.2 preserves V2.1 direct-ingress boundary finality and adds deterministic
  monotonic union for fully validated sibling reserves in one exact snapshot
  family. It does not elect a branch from subsequent hashrate, peer count, or a
  peer's claimed aggregate weight.
- Do not introduce identity-counted voting. Identities are cheap and Sybil
  neutral only when they do not create payout or consensus weight.
- Treat public network addresses, code, and research as public. Never place raw
  credentials, private keys, seed phrases, tokens, or private operator details
  in this repository.

## Source Precedence

1. Bitcoin consensus plus normative GridPool specifications and test vectors.
2. Accepted architecture decision records in `decisions/`.
3. Current handbook explanations.
4. Runtime and adapter implementation documentation.
5. Simulations and field reports as evidence.
6. Historical documents and archived plans.

If code, tests, and intended specification disagree, document all three and
open a correction. Do not infer consensus from UI labels or old planning notes.

## Repository Map

- `boot-protocol`: C#/.NET reference node, DATUM server, HTTP API, UI, peer
  networking, deployment, and health monitoring.
- `gridpool-spec`: protocol language, whitepapers, and future test vectors.
- `gridpool-simulations`: Python models, sweeps, reports, and figures.
- `gridpool-web`: static public website and connection guidance.
- `gridpool-sv2-pool`: SRI-derived SV2 pool integration. This is the active SV2
  direction; verify its current branch and upstream before changing it.
- `gridpool-umbrel`: thin Umbrel wrapper for the reference node plus native SV2.
- `gridpool-startos`: thin StartOS wrapper for the same pinned runtime pair.
- `gridpool-sv2-adapter`: earlier JDC/JDS prototype and design artifacts. Treat
  it as historical unless a current ADR reactivates it.
- `datum_gateway`: upstream DATUM fork/PR work; keep changes generic enough for
  non-GridPool non-custodial pools where possible.
- `esp-miner`: experimental direct-template Bitaxe firmware integration.

## Change Discipline

- Consensus changes require specification text, migration/versioning analysis,
  deterministic tests, coordinated rollout notes, and documentation updates.
- Networking changes require compatibility behavior, bounded resource use,
  telemetry, and NAT/private-node analysis.
- Research changes must preserve seeds/configuration, raw outputs, assumptions,
  and caveats needed for reproduction.
- Public claims must separate proven mathematics, simulation evidence, small
  field samples, implementation tests, and hypotheses.
- Update an existing canonical document instead of creating a competing copy.
  Superseded material belongs in an archive with a redirect or status marker.

## Validation

From this repository:

```bash
node scripts/build-project-brain.mjs
node scripts/check-handbook.mjs
```

Then run the tests documented by the repository being changed. Generated
bundles must match their modular sources before merging.
