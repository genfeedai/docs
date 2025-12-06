# Documentation Site - Deployment Guide

**Project:** docs.genfeed.ai  
**Last Updated:** 2025-01-27

---

## Overview

This guide covers deployment procedures for the Genfeed documentation site on Vercel.

## Prerequisites

- Vercel account
- Git repository access
- Vercel CLI installed (optional)

## Deployment Methods

### Automatic Deployment (Recommended)

Vercel automatically deploys on git push:

1. **Push to main branch** → Production deployment
2. **Create PR** → Preview deployment
3. **Merge PR** → Production deployment

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Vercel Configuration

### Project Settings

- **Framework Preset**: Docusaurus
- **Build Command**: `bun run build`
- **Output Directory**: `build`
- **Install Command**: `bun install`

### Environment Variables

Set in Vercel dashboard:

- `ALGOLIA_APP_ID` - Algolia app ID (if using search)
- `ALGOLIA_API_KEY` - Algolia API key (if using search)
- `ALGOLIA_INDEX_NAME` - Algolia index name (if using search)

## Build Process

### Pre-Deployment Checklist

- [ ] All links work (`npm run docusaurus check-links`)
- [ ] Build succeeds locally (`bun build`)
- [ ] No console errors
- [ ] Images optimized
- [ ] Mobile responsive

### Build Configuration

```json
// vercel.json
{
  "buildCommand": "bun run build",
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

## Deployment Steps

### 1. Pre-Deployment

```bash
# Test build locally
bun build

# Check for errors
bun serve

# Validate links
npm run docusaurus check-links
```

### 2. Deploy

**Automatic:**

- Push to main branch
- Vercel builds automatically

**Manual:**

```bash
vercel --prod
```

### 3. Post-Deployment

- [ ] Verify site loads correctly
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Verify search works (if enabled)
- [ ] Test on multiple browsers

## Rollback Procedure

### Via Vercel Dashboard

1. Go to Vercel project
2. Navigate to Deployments
3. Find previous deployment
4. Click "Promote to Production"

### Via CLI

```bash
# List deployments
vercel ls

# Promote specific deployment
vercel promote <deployment-url>
```

## Monitoring

### Vercel Analytics

- View deployment status
- Monitor build times
- Check error logs
- View analytics (if enabled)

### Health Checks

- Site availability
- Build success rate
- Error rates
- Performance metrics

## Troubleshooting

### Build Failures

**Common causes:**

- Syntax errors in markdown
- Missing dependencies
- Invalid frontmatter
- Broken links

**Solutions:**

- Check build logs in Vercel
- Test build locally
- Fix errors and redeploy

### Deployment Issues

**Site not updating:**

- Clear Vercel cache
- Force rebuild
- Check deployment logs

**Environment variables:**

- Verify variables set in Vercel
- Check variable names match code
- Restart deployment

---

**Last Updated:** 2025-01-27
