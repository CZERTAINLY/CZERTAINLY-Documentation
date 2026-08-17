# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for ILM (Identity Lifecycle Management) — an open-source trust lifecycle management platform. Built with **Docusaurus 3.7** and deployed to GitHub Pages at https://docs.otilm.com.

## Commands

```bash
yarn install                # Install dependencies
yarn start                  # Dev server at http://localhost:3000
yarn build                  # Production build to ./build (requires ~10GB memory: NODE_OPTIONS="--max_old_space_size=10240")
yarn serve                  # Serve production build locally
yarn clear                  # Clear Docusaurus cache
yarn render-diagrams        # Render all PlantUML diagrams to static/img/plantuml/ (also runs automatically on start/build)
yarn test                   # Run unit tests (node --test)
```

> **Prerequisite:** `yarn start` and `yarn build` render all PlantUML diagrams at build time through a pinned
> `plantuml-server` Docker image, so a running **Docker daemon is required**. `yarn build` renders up-front via the
> `prebuild` hook; `yarn start` renders via the `plantumlRenderPlugin` Docusaurus lifecycle plugin, which also
> re-renders diagrams live as docs change during dev. To render against an already-running server instead, set
> `PLANTUML_SERVER_URL` (e.g. `PLANTUML_SERVER_URL=http://127.0.0.1:8080 yarn build`).

The build fetches 30+ OpenAPI specs from `https://api.otilm.com/` and renders them via Redocusaurus — it is slow and network-dependent but still worth it.

**Build memory is dominated by these specs.** Measured on the 2.19.0 tree: the site without any spec peaks at ~1.1 GB and builds in 22 s; with all 48 it peaks at ~9.5 GB and takes ~65 s. That is roughly **175 MB of peak heap per spec**, because Redoc server-renders every API page during static generation. Adding a spec is therefore a build-infrastructure decision, not just a config line.

The heap limit is set in two places that must stay in sync: the `NODE_OPTIONS` above and `.github/workflows/documentation.yml`. When a release adds a section or a spec, run one cold build (`yarn clear && NODE_OPTIONS=--max_old_space_size=<limit> yarn build`) before merging — the failure mode is a `SIGABRT` heap-limit crash that reads like CI infrastructure flakiness. To build on a memory-constrained machine, the only effective lever is publishing fewer specs; page count, redirects, and `DOCUSAURUS_SSR_CONCURRENCY` were each measured and make no meaningful difference.

### Remote docs (five synced sets)

These directories are **not authored here**. `docusaurus-plugin-remote-content` downloads them from their source repositories at a pinned ref, so local edits are overwritten on the next download — fix errors upstream.

| Target directory | Source repository and path | Pin | Download command |
|---|---|---|---|
| `docs/certificate-key/installation-guide/deployment/deployment-helm/` | `OmniTrustILM/helm-charts` `charts/ilm/docs/` | `chartVersion` | `yarn docusaurus download-remote-helm-docs` |
| `docs/certificate-key/installation-guide/deployment/deployment-operator/` | `OmniTrustILM/operator` `docs/site/` (the five journey pages) | `operatorDocsRef` | `yarn docusaurus download-remote-operator-docs` |
| `docs/certificate-key/installation-guide/deployment/deployment-operator/custom-resources/` | `OmniTrustILM/operator` `docs/site/custom-resources/` (the four CR guides) | `operatorDocsRef` | `yarn docusaurus download-remote-operator-cr-docs` |
| `docs/certificate-key/cli/` | `OmniTrustILM/cli` `docs/site/` | `cliDocsRef` | `yarn docusaurus download-remote-cli-docs` |
| `docs/contributors/development-environment.md` | `OmniTrustILM/development-environment` `docs/site/` | `devenvDocsRef` | `yarn docusaurus download-remote-devenv-docs` |

The two operator entries share `operatorDocsRef` and are always re-pinned together. The `_category_.json` in each target directory **is** authored here — it is not in any `documents` array, so a download never touches it.

The operator, cli and devenv pages follow two rules, enforced upstream: every page carries `sidebar_position` front matter, and links are relative within the synced set (same-directory, or one level between `docs/site/` and `docs/site/custom-resources/` in the operator set) — everything else is an absolute URL. (The helm set predates both rules and carries no front matter.) `markdown.hooks.onBrokenMarkdownLinks` is `'throw'`, so a link violation fails `yarn build` rather than printing a warning nobody reads.

> **The helm set is pinned behind its fix.** `charts/ilm/docs/overview.md` carried a link out of its own directory (`../../messaging-rabbitmq`), which was hand-patched here after a sync — the exact failure mode the `'throw'` flip exists to prevent. The upstream fix is merged on `helm-charts` `main` but is **not** in the `2.19.0` tag that `chartVersion` pins, so `download-remote-helm-docs` must not be re-run until `chartVersion` advances. If it is, the build now fails loudly instead of regressing silently.

> **Unresolved state — the three new pins are placeholders.** `operatorDocsRef`, `cliDocsRef` and `devenvDocsRef` are all `'REPLACE-ON-MERGE'`. The source branches are not pushed yet, so **no download command in the last three rows works** — each one 404s. The committed pages under `deployment-operator/`, `cli/` and `docs/contributors/` were seeded by copying the local source files byte-for-byte (a simulated first sync) so the site could be reviewed before anything shipped — `cli/commands.md` included, which upstream generates with `make docs`.
>
> On merge: replace each ref with its 40-character merge SHA, run the matching download, and confirm it reproduces the committed bytes.

## Architecture

### Documentation Structure

All docs live in `/docs` and are organized into two major domains:

- **`certificate-key/`** — PKI: certificate management, key management, connectors, protocols (ACME, CMP, SCEP), deployment, integrations (ADCS, EJBCA, HashiCorp Vault, Keycloak, Intune)
- **`signing/`** — Digital signatures: AdES formats (PAdES, CAdES, XAdES, JAdES, ASiC), validation, HSM integration (nShield, Utimaco, Trident), CSC component
- **`contributors/`** — Developer/contributor guides
- **`community/`** — Community resources

Sidebar is auto-generated from the filesystem (`sidebars.js` uses `autogenerated`). Page ordering is controlled by `sidebar_position` in MDX front matter.

### Custom Remark Plugins (`src/plugins/`)

- **`remarkFindReplacePlugin.mjs`** — Replaces `%API_BASE_URL%` with `https://docs.otilm.com/api/` in all doc content. Use `%API_BASE_URL%` when linking to API docs within markdown.
- **`remarkSimplePlantumlPlugin.mjs`** — Rewrites fenced `plantuml` code blocks into `<img>` tags pointing at build-time-rendered static SVGs in `static/img/plantuml/<hash>.svg`. The SVGs are produced by `scripts/render-diagrams.mjs`.

### API Documentation

31+ OpenAPI specs are integrated via Redocusaurus. Versions are controlled at the top of `docusaurus.config.js`:
- `apiVersion` — Core and connector API version
- `chartVersion` — Helm chart version (used by `docusaurus-plugin-remote-content`)
- `cscVersion` — CSC component API version

### Custom React Components (`src/components/`)

TSX components used on the homepage and in docs: `HomepageFeatures`, `PlatformModules`, `WhatIsILM`, `CardLink`, `Divider`.

### Key Configuration

- `docusaurus.config.js` — Main config: plugins, presets, API specs, navbar, Algolia search, theme
- `sidebars.js` — Auto-generated sidebar config
- Syntax highlighting includes: PowerShell, Java, HCL, Scala, Bash (via Prism)
- `onBrokenLinks: 'throw'` — Build fails on broken internal links

## Writing Documentation

- Docs use **MDX** (JSX in Markdown) — `.md` and `.mdx` extensions both work
- Use `%API_BASE_URL%` placeholder to reference API documentation URLs
- PlantUML diagrams: use fenced code blocks with language `plantuml`
- The `documentation` branch is the main/default branch for this repo
- Prose uses **US English** (`behavior`, `finalize`, `synchronized`)

### Naming the product

Write **"the platform"**, not the brand name, wherever a functional term works — "the platform validates the request", not "ILM validates the request". A page may name the product once where it genuinely introduces it (a section intro, a GitHub link label); everywhere else the brand name is churn waiting for the next rename. Never coin compound names like "ILM Core" — the component is `Core`. The same applies inside diagrams: participants are `Core`, `Platform`, `Connector`.

### Diagrams

Rendered PlantUML SVGs scale down to the content column (`img[src^="/img/plantuml/"]` in `src/css/custom.css`), so a wide diagram no longer overflows — but it renders small. Keep a diagram under roughly 1000px natural width: wrap long message labels with `\n`, stack multi-word participant names, and split a diagram that outgrows that rather than letting it shrink. To check a diagram's rendered width, run `yarn render-diagrams` and read the `width:` value from its SVG in `static/img/plantuml/`.

Within a diagram, keep message labels consistent with each other and with the page's prose: sentence case for actions (`Validate certificate`, not `validate certificate`), and the same component names the surrounding text uses.

### Integration Guides

Each integration lives in its own directory under `docs/certificate-key/integration-guides/<technology>/`:

- A `_category_.json` sets the sidebar `label`, an explicit `position` (integrations are ordered by product, not alphabetically), and a `link` of type `doc` pointing at the entry page
- Multi-page guides use `overview.md` as that entry page, with a step table linking to one page per task; single-page guides use `integration-guide.md`
- Page order inside the directory comes from `sidebar_position` in the front matter, with the overview at position 1
- Guides describe what to configure in the third-party product and in the platform. Deploying the connector itself belongs in the installation guide, not here
- Prefer naming entities and their attributes over navigation paths — product menus change more often than the concepts do

## CI/CD

GitHub Actions workflow (`.github/workflows/documentation.yml`):
- **On PR to `documentation`**: runs `yarn install --frozen-lockfile && yarn build` as a check
- **On push to `documentation`**: builds and deploys to GitHub Pages
