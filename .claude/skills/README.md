# Documentation Skills

This directory contains Claude skills specific to technical documentation and content creation for the GenFeed.ai documentation site.

## Project Overview

**docs.genfeed.ai** is the official documentation site for GenFeed.ai, built with Docusaurus 3.9.1. It provides comprehensive guides, API documentation, and tutorials for users and developers.

## Technology Stack

- **Framework**: Docusaurus 3.9.1
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **MDX**: 3.1.1 (Markdown with JSX)
- **Styling**: Sass 1.93.2 + Custom SCSS
- **API Docs**: Swagger UI React 5.29.4
- **Syntax Highlighting**: Prism React Renderer 2.4.1

## Available Skills

### 1. docusaurus-writer

**Path:** `/Users/decod3rs/www/genfeedai/docs.genfeed.ai/.claude/skills/docusaurus-writer/SKILL.md`

**Purpose:** Expert technical writer for creating clear, comprehensive documentation with Docusaurus, MDX, and modern documentation patterns

**Covers:**
- Docusaurus 3.9.1 configuration and architecture
- MDX syntax and advanced markdown patterns
- Frontmatter standards for SEO and navigation
- Sidebar configuration (sidebars.ts)
- Admonitions (note, tip, info, warning, danger)
- Interactive components (tabs, collapsible sections)
- Code blocks with syntax highlighting and line highlighting
- API documentation with Swagger UI integration
- Information architecture best practices
- Documentation page templates
- Keyboard shortcuts documentation
- Troubleshooting guides and FAQs
- Search optimization
- Writing style guide (voice, tone, formatting)
- Image optimization and accessibility
- Versioning strategy
- Custom React components in MDX
- Build and deployment processes

**When to use:**
- Writing new documentation pages
- Updating existing docs
- Creating API documentation
- Organizing documentation structure
- Implementing interactive components
- Optimizing for search and discovery
- Setting up navigation and sidebars
- Creating tutorials and guides
- Writing troubleshooting content
- Documenting features and workflows

---

## Quick Start

### To work on documentation:
```bash
# Skills activate automatically based on your task context
# Just start working on documentation tasks

# Example: Creating a new guide
"Create a guide for setting up social media integrations"
# This automatically activates: docusaurus-writer

# Example: Updating API docs
"Update the API documentation for the new video endpoint"
# This automatically activates: docusaurus-writer

# Example: Improving navigation
"Reorganize the sidebar structure for better user flow"
# This automatically activates: docusaurus-writer
```

## Project Structure Reference

```
docs.genfeed.ai/
├── docs/                      # Documentation content
│   ├── home.md               # Landing page (routeBasePath: '/')
│   ├── getting-started.md    # Quick start guide
│   ├── features.md           # Feature documentation
│   ├── api/                  # API documentation
│   └── guides/               # Tutorial guides
├── src/
│   ├── pages/                # Custom pages (React components)
│   │   └── api.tsx          # Swagger UI integration
│   ├── components/           # Custom React components
│   └── css/
│       └── custom.scss      # Custom styling
├── static/                   # Static assets
│   └── img/
├── docusaurus.config.ts      # Main configuration
├── sidebars.ts              # Sidebar navigation
└── package.json
```

## Documentation Standards

### Frontmatter for All Documents

```markdown
---
sidebar_position: 2
title: Custom Page Title
description: SEO-friendly description
keywords:
  - ai
  - video generation
  - genfeed
---

# Document Title

Content starts here...
```

### MDX Syntax Examples

#### Code Blocks with Highlighting

````markdown
```typescript title="src/types/user.ts" {2,4-6}
function example() {
  const highlighted = true;  // This line is highlighted
  const normal = false;
  // Lines 4-6 are highlighted
  return {
    result: true
  };
}
```
````

#### Admonitions

```markdown
:::note
This is a standard note with general information.
:::

:::tip Pro Tip
Use keyboard shortcuts to speed up your workflow!
:::

:::warning Prerequisites
Before publishing, ensure you've connected your accounts.
:::

:::danger Critical
This action is irreversible and will delete all data!
:::
```

#### Interactive Tabs

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install @genfeed/sdk
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```bash
    yarn add @genfeed/sdk
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add @genfeed/sdk
    ```
  </TabItem>
</Tabs>
```

## Documentation Hierarchy

```
1. Quick Start (5-10 minutes)
   - Get value immediately
   - Minimal setup
   - First success

2. Core Concepts (Understanding)
   - How the system works
   - Mental models
   - Key terminology

3. Feature Documentation (Reference)
   - Comprehensive coverage
   - All options and parameters
   - Edge cases

4. Guides & Tutorials (Learning)
   - Step-by-step workflows
   - Real-world scenarios
   - Best practices

5. API Reference (Technical)
   - Endpoint documentation
   - Request/response examples
   - Authentication

6. Advanced Topics (Deep Dive)
   - Complex scenarios
   - Performance optimization
   - Troubleshooting
```

## Writing Style Guide

### Voice and Tone
- **Active voice**: "Click the button" not "The button should be clicked"
- **Present tense**: "This generates a video" not "This will generate a video"
- **Direct address**: "You can configure" not "Users can configure"
- **Conversational but professional**: Friendly without being casual
- **Confident without being arrogant**: "This approach works best"

### Formatting Standards

#### Code References
- Use `inline code` for:
  - Commands: `npm install`
  - File names: `docusaurus.config.ts`
  - API endpoints: `/api/generate`
  - Variable names: `API_KEY`
  - Short code snippets: `const x = 1;`

- Use code blocks for:
  - Multi-line code
  - Complete examples
  - Configuration files
  - API responses

#### Emphasis
- **Bold** for UI elements: **Button**, **Settings**, **Dashboard**
- *Italics* for emphasis or new terms on first use
- Use sparingly - too much emphasis = no emphasis

## Documentation Checklist

Before publishing:

### Content Quality
- [ ] Clear, descriptive title
- [ ] One-sentence summary at top
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] No orphaned content
- [ ] Consistent terminology
- [ ] Technical accuracy verified
- [ ] All claims supported with examples

### Structure
- [ ] Frontmatter with sidebar_position
- [ ] Logical flow (overview → details → examples)
- [ ] Quick start near the top
- [ ] Advanced content toward bottom
- [ ] Related links at the end

### Code Examples
- [ ] All code blocks have language specified
- [ ] Examples are complete and runnable
- [ ] Complex examples have explanatory comments
- [ ] API responses show expected output
- [ ] Error cases documented

### Media
- [ ] All images have descriptive alt text
- [ ] Screenshots are up-to-date
- [ ] Images compressed for web
- [ ] Dark mode screenshots if relevant

### Links
- [ ] All internal links tested
- [ ] External links open appropriately
- [ ] No broken links
- [ ] Anchor links work correctly

### Accessibility
- [ ] Semantic heading structure
- [ ] Alt text for all images
- [ ] Color contrast meets WCAG AA
- [ ] Code examples readable
- [ ] No information conveyed by color alone

### SEO
- [ ] Meta description in frontmatter
- [ ] Keywords specified
- [ ] Title is clear and descriptive
- [ ] URL slug is readable
- [ ] Internal linking strategy

## Common Commands

```bash
# Development
pnpm run start              # Start dev server
pnpm run start:dev          # Start with custom host
pnpm run build              # Build static site
pnpm run serve              # Test production build
pnpm run clear              # Clear cache

# Deployment
pnpm run deploy             # Deploy to hosting
```

## Common Patterns

### API Endpoint Documentation Template

```markdown
## Generate Video

Create a new AI-generated video from a text prompt.

### Endpoint

```http
POST /api/v1/generate/video
```

### Authentication

Requires API key in header:

```http
Authorization: Bearer YOUR_API_KEY
```

### Request Body

```typescript
{
  "prompt": string;          // Required: Description
  "model": string;           // Required: Model ID
  "duration": number;        // Optional: Duration in seconds
  "aspectRatio": string;     // Optional: "16:9" | "9:16" | "1:1"
}
```

### Example Request

```bash
curl -X POST https://api.genfeed.ai/v1/generate/video \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A serene mountain landscape",
    "model": "kling-ai",
    "duration": 5
  }'
```

### Response

```json
{
  "id": "vid_abc123",
  "status": "processing",
  "url": null,
  "estimatedTime": 120
}
```
```

### Feature Comparison Table

```markdown
| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Monthly credits | 100 | 1,000 | Custom |
| Team members | 1 | 5 | Unlimited |
| Priority support | ❌ | ✅ | ✅ |
| API access | ❌ | ✅ | ✅ |
```

### Troubleshooting Guide Template

```markdown
## Troubleshooting

### Common Issues

#### Video Generation Fails

**Symptoms:**
- Generation spinner stops
- Error message appears
- Credit is not refunded

**Possible Causes:**
1. Insufficient credits
2. Invalid prompt
3. Model temporarily unavailable

**Solutions:**

1. **Check your credit balance:**
   - Go to Dashboard → Credits
   - Ensure you have enough credits

2. **Review your prompt:**
   - Avoid restricted content
   - Simplify complex prompts

3. **Contact support:**
   - Email support@genfeed.ai
   - Include generation ID from error
```

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [MDX Documentation](https://mdxjs.com/)
- [React Documentation](https://react.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- Main Site: https://genfeed.ai
- API Docs: https://api.genfeed.ai/v1/openapi.json

---

**Last Updated:** 2025-10-22

**Skills Version:** 1.0.0
