# Documentation Site

**Project:** docs.genfeed.ai  
**Stack:** Nextra 4, Next.js 16 (App Router), React 19  
**Port:** 3007

## Commands

```bash
bun install           # Install dependencies
bun run dev           # Start dev server
bun run build         # Production build (.next output)
bun run start         # Start production server
bun run pre:install   # Update all packages
```

## Structure

```text
docs/
├── app/
│   ├── layout.tsx              # Nextra docs shell
│   └── [[...mdxPath]]/page.tsx # MDX route handler
├── content/                    # MDX docs + _meta.ts navigation
├── components/                 # React components (SwaggerUI, etc.)
├── styles/                     # Custom CSS
├── mdx-components.tsx          # MDX component mapping
└── next.config.mjs             # Next.js + Nextra config
```

## Key Files

- `content/_meta.ts` - Root navigation ordering
- `app/layout.tsx` - Logo, footer, docs layout config
- `app/[[...mdxPath]]/page.tsx` - Static params and MDX page loading
- `components/SwaggerUI.tsx` - API docs component

## Patterns

- MDX files live in `content/`
- `_meta.ts` files control sidebar navigation in each section
- API docs live under `content/api-reference/`
- Prefer linking API docs to `/api-reference/overview` and `/api-reference/reference`

## Workspace References

- Workspace rules: `../.agents/SYSTEM/critical/CROSS-PROJECT-RULES.md`
- Workspace architecture: `../.agents/SYSTEM/architecture/WORKSPACE-ARCHITECTURE.md`
- Workspace SOPs: `../.agents/SOP/`

## Sessions

See `SESSIONS/` for migration history and past work.
