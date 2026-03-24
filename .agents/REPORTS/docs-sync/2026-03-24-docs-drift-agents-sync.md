# Docs Drift + Agents Sync Audit

- **Run date:** 2026-03-24
- **Run time:** 2026-03-24T09:03:15+0100
- **Automation:** `docs-drift-check`
- **Scope:** Root workspace `.agents` canon plus project-local `.agents` overlays
- **Excluded from sync enforcement:** `SESSIONS/`, `archive/`, `backups/`, `temp/`, generated `REPORTS/`

## Checks Run

1. Existing architecture drift checker
   - Command: `node .agents/skills/architecture-expert/scripts/check-drift.js`
   - Result: **PASS**
   - Summary: 8 checks passed, 0 drift items found
   - Note: script attempted to write `.agents/skills/architecture-expert/references/drift-report.md`, which is blocked in this sandbox with `EPERM`

2. Docs lint helper
   - Command: `bash scripts/sh/lint-docs.sh`
   - Result: **PASS**

3. Agent docs lint helper
   - Command: `bash scripts/sh/lint-agent-docs.sh`
   - Result: **PASS**

4. Markdown route inventory
   - `docs/content/` currently exposes 33 routes, including nested publishing/social pages
   - `docs/content/guides/publishing/_meta.ts` and `docs/content/guides/publishing/social-media/_meta.ts` are present, so the route tree is consistent

## Canon Status

- Root workspace `.agents` remains the shared canon for business, system, and workspace-wide guidance.
- `docs/.agents/README.md` is an exact mirror of root [`/.agents/README.md`](/Users/decod3rs/www/genfeedai/.agents/README.md).
- `docs/.agents/TASKS/README.md` is an exact mirror of root [`/.agents/TASKS/README.md`](/Users/decod3rs/www/genfeedai/.agents/TASKS/README.md).
- `docs/.agents/SYSTEM/ARCHITECTURE.md` and `docs/.agents/SYSTEM/RULES.md` are project-local overlays, not 1:1 canon mirrors.
- `docs/.agents/SYSTEM/SUMMARY.md` has no obvious root equivalent and should stay manual-review only unless a shared canon is introduced.

## Findings By Area

### Workspace / Docs Entry Files

- No drift detected in the docs-site entry files.
- [`/Users/decod3rs/www/genfeedai/docs/AGENTS.md`](/Users/decod3rs/www/genfeedai/docs/AGENTS.md), [`/Users/decod3rs/www/genfeedai/docs/CODEX.md`](/Users/decod3rs/www/genfeedai/docs/CODEX.md), and [`/Users/decod3rs/www/genfeedai/docs/CLAUDE.md`](/Users/decod3rs/www/genfeedai/docs/CLAUDE.md) still point at the shared workspace canon paths.
- Root workspace entry docs also exist and remain valid: [`/Users/decod3rs/www/genfeedai/AGENTS.md`](/Users/decod3rs/www/genfeedai/AGENTS.md), [`/Users/decod3rs/www/genfeedai/CLAUDE.md`](/Users/decod3rs/www/genfeedai/CLAUDE.md), [`/Users/decod3rs/www/genfeedai/CODEX.md`](/Users/decod3rs/www/genfeedai/CODEX.md).

### Root Canon Drift

- Canonical SOP navigation is stale in a few places and should be repaired in the root `.agents` tree.
- [`/Users/decod3rs/www/genfeedai/.agents/SOP/README.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/README.md) links to paths that no longer exist:
  - `./quality/code-review/code-review.md`
  - `./quality/troubleshooting/troubleshooting.md`
  - `./ai/schemas/ai-schema-documentation.md`
- Canonical target files currently live at:
  - [`/Users/decod3rs/www/genfeedai/.agents/SOP/quality/testing/code-review.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/quality/testing/code-review.md)
  - [`/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/troubleshooting.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/troubleshooting.md)
  - [`/Users/decod3rs/www/genfeedai/.agents/SOP/ai/ai-schema-documentation.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/ai/ai-schema-documentation.md)
- [`/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/README.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/README.md) still links to missing workspace-guide targets:
  - `../.agents/SYSTEM/SETUP-GUIDE.md`
  - `../.agents/SYSTEM/USER-GUIDE.md`
- Canonical targets currently live at:
  - [`/Users/decod3rs/www/genfeedai/.agents/SYSTEM/guides/SETUP-GUIDE.md`](/Users/decod3rs/www/genfeedai/.agents/SYSTEM/guides/SETUP-GUIDE.md)
  - [`/Users/decod3rs/www/genfeedai/.agents/SYSTEM/guides/USER-GUIDE.md`](/Users/decod3rs/www/genfeedai/.agents/SYSTEM/guides/USER-GUIDE.md)

### Docs Project Overlay Drift

- [`/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/ARCHITECTURE.md`](/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/ARCHITECTURE.md) is intentionally shorter and project-specific, but it is no longer a faithful mirror of root [`/Users/decod3rs/www/genfeedai/.agents/SYSTEM/architecture/WORKSPACE-ARCHITECTURE.md`](/Users/decod3rs/www/genfeedai/.agents/SYSTEM/architecture/WORKSPACE-ARCHITECTURE.md).
- [`/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/RULES.md`](/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/RULES.md) diverges materially from root [`/Users/decod3rs/www/genfeedai/.agents/SYSTEM/critical/CROSS-PROJECT-RULES.md`](/Users/decod3rs/www/genfeedai/.agents/SYSTEM/critical/CROSS-PROJECT-RULES.md).
- [`/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/SUMMARY.md`](/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/SUMMARY.md) has no obvious shared-canon counterpart and should be treated as local planning/reporting context only.

## Sync Plan

### Priority 1: Fix broken root canonical links

- Update [`/Users/decod3rs/www/genfeedai/.agents/SOP/README.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/README.md) to point at the current canonical files listed above.
- Update [`/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/README.md`](/Users/decod3rs/www/genfeedai/.agents/SOP/operations/debugging/README.md) to point at the current `SYSTEM/guides/` targets.

### Priority 2: Decide whether docs-local overlays stay local

- Keep [`/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/ARCHITECTURE.md`](/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/ARCHITECTURE.md) local if it is docs-site specific.
- Keep [`/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/RULES.md`](/Users/decod3rs/www/genfeedai/docs/.agents/SYSTEM/RULES.md) local if the GitHub-only task policy is intentionally docs-site specific.
- If either file is meant to be shared workspace canon, replace the local overlay with a pointer to the root canonical file instead of maintaining two divergent copies.

### Priority 3: Refresh stale verification markers

- Refresh `Last Verified` dates in [`/Users/decod3rs/www/genfeedai/.agents/README.md`](/Users/decod3rs/www/genfeedai/.agents/README.md), [`/Users/decod3rs/www/genfeedai/docs/README.md`](/Users/decod3rs/www/genfeedai/docs/README.md), and the docs-site entry docs if their content is still expected to represent current state.
- The current stale marker is `2026-03-04`; the newest architecture verification is `2026-03-23`.

### Priority 4: Leave exact mirrors alone

- No content sync is needed for [`/Users/decod3rs/www/genfeedai/docs/.agents/README.md`](/Users/decod3rs/www/genfeedai/docs/.agents/README.md) or [`/Users/decod3rs/www/genfeedai/docs/.agents/TASKS/README.md`](/Users/decod3rs/www/genfeedai/docs/.agents/TASKS/README.md) because they match the root canon exactly.

## Bottom Line

- Architecture drift checks are green.
- Docs route generation is consistent.
- The remaining work is link hygiene in the root canon plus a policy decision on the docs-local overlay files.
- Highest-priority mismatches: stale SOP links in the root `.agents` tree and the non-canonical docs-local `SYSTEM/ARCHITECTURE.md` / `SYSTEM/RULES.md` overlays.
