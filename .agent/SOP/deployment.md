# Documentation Site - Deployment SOP

**Project:** docs.genfeed.ai  
**Last Updated:** 2025-01-27

---

## Purpose

Standard operating procedures for deploying the GenFeed documentation site to production.

## Deployment Methods

### Automatic Deployment (Default)

Vercel automatically deploys on git push:

- **Main branch** → Production
- **PR branches** → Preview

### Manual Deployment

```bash
vercel --prod
```

## Pre-Deployment Checklist

- [ ] All changes tested locally
- [ ] Build succeeds (`pnpm build`)
- [ ] No console errors
- [ ] Links validated (`npm run docusaurus check-links`)
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] Content reviewed

## Deployment Steps

### 1. Pre-Deployment

```bash
# Test build
pnpm build

# Check for errors
pnpm serve

# Validate links
npm run docusaurus check-links
```

### 2. Deploy

**Automatic:**

```bash
git push origin main
```

**Manual:**

```bash
vercel --prod
```

### 3. Post-Deployment

- [ ] Verify site loads
- [ ] Test navigation
- [ ] Check all links
- [ ] Verify images
- [ ] Test search (if enabled)
- [ ] Check mobile view

## Rollback Procedure

### Via Vercel Dashboard

1. Go to project → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Via CLI

```bash
vercel promote <deployment-url>
```

## Monitoring

### Vercel Dashboard

- Deployment status
- Build logs
- Error logs
- Analytics (if enabled)

### Health Checks

- Site availability
- Build success rate
- Error rates
- Performance metrics

## Troubleshooting

### Build Failures

**Check:**

- Build logs in Vercel
- Local build output
- Environment variables
- Dependencies

**Fix:**

- Resolve errors
- Update dependencies
- Fix configuration
- Redeploy

### Deployment Issues

**Site not updating:**

- Clear Vercel cache
- Force rebuild
- Check deployment logs

**Environment variables:**

- Verify in Vercel dashboard
- Check variable names
- Restart deployment

---

**Last Updated:** 2025-01-27
