# Documentation Site Architecture

**Project:** docs.genfeed.ai  
**Version:** v0.0.0  
**Framework:** Docusaurus  
**Deployment:** Vercel

> For workspace architecture, see: `../../../.agent/SYSTEM/WORKSPACE-ARCHITECTURE.md`

---

## Overview

User documentation and guides for GenFeed platform. Built with Docusaurus for easy content management and versioning.

## Tech Stack

- **Framework:** Docusaurus 3.x
- **Content:** Markdown + MDX
- **Language:** TypeScript
- **Styling:** CSS Modules + Custom CSS
- **Deployment:** Vercel
- **Search:** Algolia DocSearch (future)

## Structure

```
docs.genfeed.ai/
├── docs/                      # Documentation content
│   ├── getting-started.md
│   ├── features.md
│   ├── prompting-guide.md
│   └── api/                   # API docs (future)
├── src/
│   ├── pages/                 # Custom pages
│   ├── components/            # React components
│   └── css/                   # Global styles
├── static/                    # Static assets
│   └── img/
├── docusaurus.config.ts       # Config
└── sidebars.ts                # Navigation
```

## Key Features

### 1. Content Organization

- Getting started guides
- Feature documentation
- Video tutorials
- API reference (future)
- FAQ sections

### 2. Versioning (Future)

```typescript
// docusaurus.config.ts
versions: {
  current: {
    label: 'Next',
    path: 'next',
  },
}
```

### 3. Search Integration (Future)

- Algolia DocSearch
- Full-text search
- Instant results

## Deployment

```bash
# Build
pnpm build

# Serve locally
pnpm serve

# Deploy (automatic via Vercel)
git push origin main
```

## Content Guidelines

### Markdown Structure

```markdown
---
sidebar_position: 1
title: Getting Started
---

# Getting Started

Introduction paragraph...

## Installation

Step-by-step guide...
```

### MDX Components

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm">
    npm install
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    pnpm install
  </TabItem>
</Tabs>
```

---

**Last Updated:** 2025-10-07  
**Version:** 2.0.0
