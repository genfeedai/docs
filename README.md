# GenFeed Documentation Site (`docs.genfeed.ai`)

Docusaurus 3 project aggregating all GenFeed documentation: platform architecture, service guides, MCP onboarding, extension/mobile quickstarts, and migration notes.

## Responsibilities
- Provide up-to-date guides for every microservice (API, Files, Notifications, Frontend, MCP, Extension, Mobile).
- Host architecture diagrams (C4) and migration timelines.
- Surface quickstarts for MCP setup, browser extension installation, and mobile onboarding.
- Serve as the canonical reference for developers, operators, and AI agents.

## Local Development
```bash
pnpm install
pnpm start          # dev server (default http://localhost:3007)
```
Changes hot-reload in the browser. Update sidebar structure in `sidebars.ts` as new sections are added.

## Build & Preview
```bash
pnpm build          # outputs to build/
pnpm serve          # preview production build
```
Deployments run via Vercel (`vercel.json`). Ensure builds pass before merging.

## Content Guidelines
- Keep docs in sync with service READMEs/AGENTS; duplicate critical steps so readers never dig through repos.
- Use placeholders (`TBD`) when final URLs (extension store, mobile app, MCP endpoints) are pending, and track them in `TODO.md`.
- Prefer MDX for interactive examples; static assets live in `static/`.
- Document new features (queue-based media processing, notifications migration, MCP tools, extension/mobile) as part of release notes.

## Current Focus (September 2025)
- Publish updated architecture diagrams covering all microservices and data flows.
- Add dedicated pages: MCP quickstart, extension onboarding, mobile getting started.
- Set up automated Vercel preview comments for documentation PRs.

## Useful Links
- Platform README: `../README.md`
- Migration logs: `../migrations.md`, `../notifications.md`
- MCP repo: `../mcp.genfeed.ai`
- Extension repo: `../extension.genfeed.ai`
- Mobile repo: `../mobile.genfeed.ai`

Keep this README and the site content updated whenever service docs change.
