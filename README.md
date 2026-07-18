# GridPool Handbook

This repository is the public, cross-project knowledge map for GridPool. It is
written for contributors, reviewers, researchers, miners, and AI agents that
need enough context to reason about the project without reconstructing years of
design discussion from chat logs.

Start with [AGENTS.md](AGENTS.md). It identifies authoritative sources and
reading paths. The modular handbook under `handbook/` is the maintained source;
generated bundles are portable views of that source.

## Portable Agent Context

- `GRIDPOOL-PROJECT-BRAIN.md`: curated current context and decision rationale.
- `GRIDPOOL-FULL-CORPUS.md`: the project brain plus selected specifications,
  reports, checklists, and implementation references.

Do not edit generated bundles directly. Rebuild them with:

```bash
node scripts/build-project-brain.mjs
node scripts/check-handbook.mjs
```

## Systems Of Record

- This handbook: project-wide concepts, decisions, roadmap, history, and source
  navigation.
- [`gridpool-spec`](https://github.com/keegreil/gridpool-spec): draft normative
  protocol documents and future interoperability vectors.
- [`boot-protocol`](https://github.com/gridlabs-science/boot-protocol): reference
  node implementation, API, UI, networking, packaging, and operator runbooks.
- [`gridpool-simulations`](https://github.com/gridlabs-science/gridpool-simulations):
  models, generated evidence, and research reports.
- Adapter repositories: integration-specific implementation and runbooks.

When sources disagree, follow the precedence in
[`handbook/source-of-truth.md`](handbook/source-of-truth.md) and report the
discrepancy rather than silently resolving it.

## License

Unless a file says otherwise, handbook prose is licensed under
[Creative Commons Attribution 4.0 International](LICENSE.md).
