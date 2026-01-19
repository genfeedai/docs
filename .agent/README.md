# Documentation Site

**Project:** docs.genfeed.ai
**Stack:** Nextra 4, Next.js 16, React 19
**Port:** 3007

## Commands

```bash
bun dev           # Start dev server
bun build         # Production build
bun run pre:install  # Update all packages
```

## Structure

```
docs/
├── pages/           # MDX documentation pages
│   ├── _meta.ts     # Navigation config
│   └── *.mdx        # Documentation files
├── components/      # React components (SwaggerUI, etc.)
├── styles/          # Custom CSS
├── theme.config.tsx # Nextra theme config
└── next.config.mjs  # Next.js + Nextra config
```

## Key Files

- `pages/_meta.ts` - Root navigation ordering
- `theme.config.tsx` - Logo, footer, theme settings
- `components/SwaggerUI.tsx` - API docs component

## Patterns

- MDX files in `pages/` for all documentation
- `_meta.ts` files for navigation ordering in each folder
- Components in `components/` folder
- No `pages/api/` - reserved for Next.js API routes (use `pages/api-reference/`)

## Sessions

See `SESSIONS/` for migration history and past work.
