# Documentation Site - Development Guide

**Project:** docs.genfeed.ai  
**Last Updated:** 2025-01-27

---

## Overview

This guide covers the development workflow for the GenFeed documentation site built with Docusaurus.

## Prerequisites

- Node.js 18+ installed
- pnpm installed
- Git configured

## Setup

### Initial Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Serve production build locally
pnpm serve
```

## Development Workflow

### Adding New Documentation

1. **Create markdown file** in `docs/` directory
2. **Add frontmatter** with metadata
3. **Update sidebar** in `sidebars.ts`
4. **Test locally** with `pnpm start`
5. **Commit and push** changes

### File Structure

```
docs/
├── getting-started.md
├── features/
│   ├── studio.md
│   └── manager.md
└── api/
    └── reference.md
```

### Frontmatter Format

```markdown
---
sidebar_position: 1
title: Page Title
description: Page description for SEO
keywords: [keyword1, keyword2]
---

# Page Title

Content here...
```

### Sidebar Configuration

```typescript
// sidebars.ts
export default {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: ['features/studio', 'features/manager'],
    },
  ],
};
```

## Content Guidelines

### Writing Style

- **User-focused**: Write for end users, not developers
- **Action-oriented**: Use imperative mood
- **Clear structure**: Use headings properly (H1 → H2 → H3)
- **Complete examples**: All code must be runnable

### Code Examples

- Use language-specific code blocks
- Include complete, runnable examples
- Add comments for clarity
- Test all examples before publishing

### Images

- Use descriptive alt text
- Optimize images (WebP format)
- Store in `static/img/` directory
- Reference with relative paths

## MDX Components

### Using React Components

```mdx
import FeatureCard from '@site/src/components/FeatureCard';

# Features

<FeatureCard title="AI Studio" description="Generate content with AI" />
```

### Custom Components

Create reusable components in `src/components/`:

```typescript
// src/components/FeatureCard.tsx
interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

## Testing

### Local Testing

```bash
# Start dev server
pnpm start

# Build and test
pnpm build
pnpm serve
```

### Link Validation

```bash
# Check for broken links
npm run docusaurus check-links
```

### Build Validation

```bash
# Build to catch errors
pnpm build
```

## Deployment

### Vercel Deployment

Deployment is automatic via Vercel:

1. Push to main branch
2. Vercel builds automatically
3. Preview URLs for PRs
4. Production deployment on merge

### Manual Deployment

```bash
# Build
pnpm build

# Deploy to Vercel
vercel --prod
```

## Troubleshooting

### Common Issues

**Build fails:**

- Check for syntax errors in markdown
- Verify frontmatter format
- Check for broken links

**Images not displaying:**

- Verify image path is correct
- Check image is in `static/img/`
- Ensure image format is supported

**Sidebar not updating:**

- Verify `sidebars.ts` configuration
- Check file paths are correct
- Restart dev server

---

**Last Updated:** 2025-01-27
