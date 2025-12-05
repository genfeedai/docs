# Documentation Site - Coding Rules

**Project:** docs.genfeed.ai  
**Extends:** `../../../.agent/SYSTEM/critical/CROSS-PROJECT-RULES.md`  
**Last Updated:** 2025-10-07

> **Read workspace rules first:** `../../../.agent/SYSTEM/critical/CROSS-PROJECT-RULES.md`  
> This file contains documentation-specific additions and overrides.

---

## Docusaurus-Specific Rules

### File Organization

```
docs/                           # Documentation content
├── getting-started.md          # User guides
├── features/                   # Feature docs
│   ├── studio.md
│   └── manager.md
├── api/                        # API reference (future)
└── guides/                     # Tutorial guides

src/
├── pages/                      # Custom pages
│   ├── index.tsx              # Homepage
│   └── pricing.tsx            # Pricing page
└── components/                 # React components
    └── FeatureCard.tsx
```

### Markdown Best Practices

```markdown
✅ CORRECT - Clear, structured content

# Page Title (H1 - One per page)

Brief introduction explaining what this page covers.

## Section Heading (H2)

Content for this section.

### Subsection (H3)

More specific content.

## Code Examples

Use language-specific code blocks:

\`\`\`typescript
// TypeScript example
const example = "code";
\`\`\`

## Important Notes

:::tip Pro Tip
Use admonitions for important information.
:::

:::warning
Highlight warnings and gotchas.
:::

:::danger
Critical information that could cause issues.
:::
```

---

## Content Writing Rules

### Documentation Style

```markdown
✅ CORRECT - User-focused, action-oriented

## How to Create a New Post

1. Navigate to the Studio
2. Click "New Post"
3. Select your content type
4. Write your content
5. Click "Generate"

❌ WRONG - Technical jargon without context

## Post Creation Workflow

The post creation service utilizes the IngredientService
singleton to instantiate a new post entity...
```

### Code Examples

```markdown
✅ CORRECT - Complete, runnable examples

\`\`\`typescript
// Create a new ingredient
const ingredient = await IngredientsService.getInstance().create({
type: 'image',
url: 'https://example.com/image.jpg',
metadata: {
width: 1920,
height: 1080,
},
});
\`\`\`

❌ WRONG - Incomplete snippets

\`\`\`typescript
const ingredient = service.create(data);
\`\`\`
```

---

## Docusaurus Configuration

### Frontmatter

```markdown
✅ CORRECT - Use frontmatter for metadata

---

title: Getting Started
description: Quick start guide for new users
sidebar_position: 1
keywords: [tutorial, getting started, setup]

---

# Getting Started

Your content here...
```

### Sidebar Configuration

```javascript
// ✅ CORRECT - sidebars.ts
export default {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started', 'installation'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['features/studio', 'features/manager'],
    },
  ],
};
```

---

## MDX Components

### Using React Components

```mdx
✅ CORRECT - Import and use React components

import FeatureCard from '@site/src/components/FeatureCard';

# Features

<FeatureCard title="AI Studio" description="Generate content with AI" icon="✨" />
```

### Custom Components

```typescript
// ✅ CORRECT - Create reusable doc components
// src/components/FeatureCard.tsx
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

---

## Styling Rules

### Custom CSS

```css
/* ✅ CORRECT - Use CSS variables */
:root {
  --docs-color-primary: #0066cc;
  --docs-color-text: #1c1e21;
}

.feature-card {
  border: 1px solid var(--ifm-color-emphasis-300);
  padding: 1rem;
  border-radius: 8px;
}

/* ❌ WRONG - Hardcoded values */
.feature-card {
  border: 1px solid #e0e0e0; /* Use variables! */
}
```

---

## Search & SEO

### Meta Tags

```typescript
// ✅ CORRECT - docusaurus.config.ts
export default {
  title: 'Genfeed Documentation',
  tagline: 'AI-powered content creation platform',
  url: 'https://docs.genfeed.ai',
  baseUrl: '/',

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'ai, content creation, social media' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  },
};
```

### Algolia Search (Future)

```typescript
// ✅ CORRECT - Configure Algolia when ready
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'genfeed-docs',
  },
}
```

---

## Versioning (Future)

```bash
# ✅ CORRECT - Version docs when releasing
npm run docusaurus docs:version 1.0.0

# This creates:
# - versioned_docs/version-1.0.0/
# - versioned_sidebars/version-1.0.0-sidebars.json
```

---

## Images & Assets

### Image Optimization

```markdown
✅ CORRECT - Use descriptive alt text and optimized images

![AI Studio interface showing the prompt bar](./img/studio-prompt-bar.png)

❌ WRONG - Missing alt text or large images

![](./screenshot.png) <!-- No alt text! -->
![](./huge-image-5mb.png) <!-- Too large! -->
```

### Static Assets

```
static/
├── img/
│   ├── logo.svg
│   ├── screenshots/
│   └── features/
└── files/
    └── downloads/
```

---

## Documentation Workflow

### Before Adding New Docs

1. ✅ Check if content already exists
2. ✅ Plan the structure (which section?)
3. ✅ Add to sidebars.ts
4. ✅ Write frontmatter
5. ✅ Use clear, action-oriented language

### After Adding Content

1. ✅ Test locally (`pnpm start`)
2. ✅ Check all links work
3. ✅ Verify code examples are correct
4. ✅ Build to catch errors (`pnpm build`)
5. ✅ Preview the build (`pnpm serve`)

---

## API Documentation (Future)

### OpenAPI/Swagger Integration

```typescript
// ✅ CORRECT - When adding API docs
import { ApiDocs } from '@docusaurus/preset-openapi';

<ApiDocs spec="https://api.genfeed.ai/v1/openapi.json" route="/api" />;
```

---

## Testing Rules

### Link Validation

```bash
# ✅ CORRECT - Check for broken links
npm run docusaurus check-links
```

### Build Validation

```bash
# ✅ CORRECT - Always build before deploying
pnpm build

# This will catch:
# - Broken links
# - MDX syntax errors
# - Missing images
# - Invalid frontmatter
```

---

## Deployment Rules

### Vercel Deployment

```json
// ✅ CORRECT - vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "build",
  "framework": "docusaurus"
}
```

### Environment Variables

```bash
# ✅ CORRECT - Set in Vercel dashboard
ALGOLIA_APP_ID=xxx
ALGOLIA_API_KEY=xxx
```

---

## Critical Documentation Rules

1. ✅ **User-first language** - Write for users, not developers
2. ✅ **Complete examples** - All code must be runnable
3. ✅ **Clear structure** - Use headings properly (H1 → H2 → H3)
4. ✅ **Add alt text** - All images need descriptions
5. ✅ **Test builds** - Run `pnpm build` before committing
6. ✅ **Use admonitions** - Highlight important info with :::tip, :::warning
7. ✅ **Keep it current** - Update docs when features change
8. ✅ **Link validation** - Check internal and external links

---

**Last Updated:** 2025-10-07  
**Version:** 1.0.0
