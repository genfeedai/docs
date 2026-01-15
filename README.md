# Genfeed Documentation Site (`docs.genfeed.ai`)

Docusaurus 3 project aggregating all Genfeed documentation: platform architecture, service guides, MCP onboarding, extension/mobile quickstarts, and migration notes.

## Responsibilities

- Provide up-to-date guides for every microservice (API, Files, Notifications, Frontend, MCP, Extension, Mobile).
- Host architecture diagrams (C4) and migration timelines.
- Surface quickstarts for MCP setup, browser extension installation, and mobile onboarding.
- Serve as the canonical reference for developers, operators, and AI agents.

## Local Development

```bash
bun install
bun start          # dev server (default http://localhost:3007)
```

Changes hot-reload in the browser. Update sidebar structure in `sidebars.ts` as new sections are added.

## Build & Preview

```bash
bun build          # outputs to build/
bun serve          # preview production build
```

Deployments run via Vercel (`vercel.json`). Ensure builds pass before merging.

## Content Guidelines

- Keep docs in sync with service READMEs/AGENTS; duplicate critical steps so readers never dig through repos.
- Use placeholders (`TBD`) when final URLs (extension store, mobile app, MCP endpoints) are pending, and track them in `TODO.md`.
- Prefer MDX for interactive examples; static assets live in `static/`.
- Document new features (queue-based media processing, notifications migration, MCP tools, extension/mobile) as part of release notes.

## Current Focus (January 2026)

- Publish updated architecture diagrams covering all microservices and data flows.
- Add dedicated pages: MCP quickstart, extension onboarding, mobile getting started.
- Set up automated Vercel preview comments for documentation PRs.

## Useful Links

- Platform README: `../README.md`
- API (includes MCP): `../api`
- Extension: `../extension`
- Mobile: `../mobile`
- Frontend: `../web`

Keep this README and the site content updated whenever service docs change.
