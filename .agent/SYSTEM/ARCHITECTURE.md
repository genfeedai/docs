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

## Integration Points

### API Integration

The documentation site integrates with `api.genfeed.ai` for:

- **API Reference Generation**: OpenAPI/Swagger spec integration
- **Live Examples**: Interactive API examples with real endpoints
- **Authentication Docs**: Clerk authentication flow documentation

**Integration Pattern:**

```typescript
// src/components/ApiExample.tsx
import { useEffect, useState } from 'react';

export function ApiExample({ endpoint }: { endpoint: string }) {
  const [response, setResponse] = useState(null);

  // Fetch from api.genfeed.ai
  useEffect(() => {
    fetch(`https://api.genfeed.ai${endpoint}`)
      .then((res) => res.json())
      .then(setResponse);
  }, [endpoint]);

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
```

### Frontend Integration

Documentation references features from `genfeed.ai`:

- **Feature Screenshots**: From actual frontend apps
- **Component Examples**: Live component demos
- **Workflow Documentation**: Based on actual user flows

### Extension Integration

Documentation includes guides for `extension.genfeed.ai`:

- **Installation Guide**: Chrome Web Store installation
- **Usage Tutorials**: Step-by-step extension usage
- **Feature Documentation**: Extension-specific features

### Mobile Integration

Documentation includes guides for `mobile.genfeed.ai`:

- **App Store Installation**: iOS and Android installation
- **Mobile-Specific Features**: Camera, notifications, offline mode
- **Cross-Platform Guides**: Features available on mobile vs web

## Architectural Patterns

### Content Management

**Markdown-First Approach:**

- All content written in Markdown
- MDX for interactive components
- Frontmatter for metadata
- Version control for all content

**Content Structure:**

```markdown
---
sidebar_position: 1
title: Getting Started
description: Quick start guide
keywords: [tutorial, getting started]
---

# Getting Started

Content here...
```

### Component Architecture

**Custom React Components:**

```typescript
// src/components/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="feature-card">
      {icon && <span className="icon">{icon}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

**MDX Usage:**

```mdx
import FeatureCard from '@site/src/components/FeatureCard';

# Features

<FeatureCard title="AI Studio" description="Generate content with AI" icon="✨" />
```

### Performance Optimization

**Static Site Generation:**

- All pages pre-rendered at build time
- Fast initial load
- SEO-friendly
- CDN-optimized via Vercel

**Image Optimization:**

- WebP format for modern browsers
- Responsive images
- Lazy loading
- Optimized file sizes

### Search Architecture (Future)

**Algolia DocSearch Integration:**

```typescript
// docusaurus.config.ts
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'genfeed-docs',
    contextualSearch: true,
  },
}
```

**Search Features:**

- Full-text search across all pages
- Instant results
- Contextual search
- Search analytics

## Deployment Architecture

### Vercel Deployment

**Build Process:**

1. Git push triggers build
2. Docusaurus builds static site
3. Vercel deploys to CDN
4. Automatic preview URLs for PRs

**Configuration:**

```json
// vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "build",
  "framework": "docusaurus",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### CI/CD Pipeline

**Automated Workflows:**

- Build on every push
- Deploy previews for PRs
- Production deployment on merge to main
- Build failure notifications

## Security Considerations

### Content Security Policy

- No inline scripts
- External resources whitelisted
- Secure headers configured
- HTTPS only

### API Integration Security

- API calls from client-side only for public examples
- No sensitive data in documentation
- Rate limiting on API examples
- CORS properly configured

## Performance Considerations

### Build Performance

- Incremental builds
- Parallel page generation
- Optimized asset bundling
- Cache-friendly static assets

### Runtime Performance

- Static HTML (fast initial load)
- Minimal JavaScript
- Optimized images
- CDN delivery

## Content Guidelines

### Writing Style

- **User-Focused**: Write for end users, not developers
- **Action-Oriented**: Use imperative mood ("Click here" not "User clicks")
- **Clear Structure**: Use headings properly (H1 → H2 → H3)
- **Complete Examples**: All code must be runnable
- **Visual Aids**: Use screenshots, diagrams, videos

### Code Examples

**Best Practices:**

- Complete, runnable examples
- Include error handling
- Add comments for clarity
- Test all examples before publishing
- Update examples when APIs change

### Documentation Maintenance

**Update Triggers:**

- New features added to platform
- API changes
- UI/UX updates
- User feedback
- Quarterly review cycle

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
