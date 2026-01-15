# Documentation Site Project

**Nextra-powered documentation site (Next.js).**

Rules auto-load from `../.claude/rules/`. Docs in `.agent/`.

## Tech Stack

- Nextra 3
- Next.js 15
- MDX
- Tailwind CSS (via Nextra)

## Commands

```bash
bun dev         # Local preview on port 3007
bun build       # Production build
bun start       # Start production server
```

## Structure

- `pages/` - Documentation pages (MDX)
- `pages/_meta.json` - Navigation structure
- `theme.config.tsx` - Nextra theme configuration
- `public/` - Static assets (favicon)
- `styles/` - Custom CSS

## Docs

- `.agent/README.md` - Project guide
- `.agent/SYSTEM/RULES.md` - Documentation standards
