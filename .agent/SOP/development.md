# Documentation Site - Development SOP

**Project:** docs.genfeed.ai  
**Last Updated:** 2025-01-27

---

## Purpose

Standard operating procedures for developing and maintaining the Genfeed documentation site.

## Workflow

### Adding New Content

1. **Create markdown file** in appropriate `docs/` subdirectory
2. **Add frontmatter** with required metadata
3. **Write content** following style guide
4. **Update sidebar** in `sidebars.ts`
5. **Test locally** with `pnpm start`
6. **Review content** for accuracy and clarity
7. **Commit and push** changes

### Updating Existing Content

1. **Locate file** in `docs/` directory
2. **Update content** while maintaining format
3. **Update frontmatter** if needed (dates, keywords)
4. **Test locally** to verify changes
5. **Commit and push** updates

### Adding Images

1. **Optimize image** (WebP format preferred)
2. **Save to** `static/img/` directory
3. **Reference in markdown** with relative path
4. **Add alt text** for accessibility
5. **Test image display** locally

## Content Standards

### Markdown Format

- Use proper heading hierarchy (H1 → H2 → H3)
- Include frontmatter on all pages
- Use code blocks for examples
- Add alt text to images
- Link to related content

### Code Examples

- Complete, runnable examples
- Language-specific code blocks
- Comments for clarity
- Test all examples before publishing

### Writing Style

- User-focused language
- Action-oriented instructions
- Clear, concise explanations
- Consistent terminology

## Quality Checklist

Before committing:

- [ ] Content is accurate
- [ ] Links work correctly
- [ ] Images display properly
- [ ] Code examples are complete
- [ ] Frontmatter is correct
- [ ] Sidebar updated if needed
- [ ] Mobile-friendly formatting
- [ ] Accessibility checked

## Testing Procedures

### Local Testing

```bash
# Start dev server
pnpm start

# Build and test
pnpm build
pnpm serve

# Check links
npm run docusaurus check-links
```

### Pre-Deployment Testing

- [ ] Build succeeds
- [ ] No console errors
- [ ] All links work
- [ ] Images display
- [ ] Mobile responsive
- [ ] Search works (if enabled)

## Deployment Process

1. **Test locally** (`pnpm build`)
2. **Commit changes** with descriptive message
3. **Push to repository**
4. **Vercel builds automatically**
5. **Verify deployment** in Vercel dashboard
6. **Test production site**

## Troubleshooting

### Common Issues

**Build fails:**

- Check markdown syntax
- Verify frontmatter format
- Check for broken links

**Images not displaying:**

- Verify image path
- Check image is in `static/img/`
- Ensure correct format

**Sidebar not updating:**

- Verify `sidebars.ts` configuration
- Check file paths
- Restart dev server

---

**Last Updated:** 2025-01-27
