# Documentation Site - Testing SOP

**Project:** docs.genfeed.ai  
**Last Updated:** 2025-01-27

---

## Purpose

Standard operating procedures for testing the Genfeed documentation site.

## Testing Types

### Content Testing

- **Accuracy**: Verify all information is correct
- **Completeness**: Ensure all sections are complete
- **Clarity**: Check content is easy to understand
- **Consistency**: Verify consistent terminology

### Functional Testing

- **Links**: All links work correctly
- **Navigation**: Sidebar navigation works
- **Search**: Search functionality works (if enabled)
- **Images**: All images display correctly
- **Code Examples**: All code examples are valid

### Technical Testing

- **Build**: Site builds without errors
- **Performance**: Site loads quickly
- **Mobile**: Mobile-responsive design
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags and structure

## Testing Procedures

### Pre-Commit Testing

```bash
# Start dev server
pnpm start

# Test locally
# - Navigate through pages
# - Check all links
# - Verify images display
# - Test code examples
```

### Pre-Deployment Testing

```bash
# Build site
pnpm build

# Check for errors
pnpm serve

# Validate links
npm run docusaurus check-links

# Test production build
# - Verify all pages load
# - Check navigation
# - Test search (if enabled)
# - Verify mobile responsiveness
```

### Post-Deployment Testing

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Links work
- [ ] Images display
- [ ] Search works (if enabled)
- [ ] Mobile responsive
- [ ] No console errors

## Testing Checklist

### Content

- [ ] All information accurate
- [ ] Content is complete
- [ ] Writing is clear
- [ ] Terminology consistent
- [ ] Examples work

### Functionality

- [ ] All links work
- [ ] Navigation works
- [ ] Search works (if enabled)
- [ ] Images display
- [ ] Code examples valid

### Technical

- [ ] Build succeeds
- [ ] No errors
- [ ] Mobile responsive
- [ ] Accessible
- [ ] SEO optimized

## Automated Testing

### Link Validation

```bash
npm run docusaurus check-links
```

### Build Validation

```bash
pnpm build
```

## Manual Testing

### Browser Testing

Test on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

Test on:

- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## Reporting Issues

When reporting issues:

1. **Describe the issue** clearly
2. **Include steps to reproduce**
3. **Specify browser/device**
4. **Include screenshots** if applicable
5. **Note expected vs actual behavior**

---

**Last Updated:** 2025-01-27
