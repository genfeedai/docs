# Docs Quick Start - Essential Context

**Total reading time: ~3 min | ~5K tokens**

## 🚀 Minimum Context to Start

### 1. Critical Rules (3K tokens)

```bash
cat ../../.agent/SYSTEM/critical/CROSS-PROJECT-RULES.md    # 3K tokens
```

**Key takeaways for docs:**

- ✅ Clear, concise writing
- ✅ Code examples that work
- ✅ Keep docs up to date
- ✅ SEO-friendly structure

### 2. Current State (1.5K tokens)

```bash
cat ./SYSTEM/SUMMARY.md     # What docs exist
```

### 3. Docusaurus Basics (Optional)

```bash
cat ./SYSTEM/ARCHITECTURE.md    # Docusaurus setup
```

**Total: ~5K tokens (3% of budget)**

---

## 📚 Docs-Specific Patterns

### File Structure

```
docs/
├── getting-started.md
├── features/
│   ├── studio.md
│   ├── manager.md
│   └── ...
└── api/
    └── reference.md
```

### Docusaurus Config

- `docusaurus.config.ts` - Site config
- `sidebars.ts` - Navigation structure

---

## 📍 Resource Map

**Workspace resources:**

| Need        | Location                  |
| ----------- | ------------------------- |
| Workflows   | `../../.cursor/commands/` |
| Shared SOPs | `../../.agent/SOP/`       |

**Project resources:**

| Need              | Location                   |
| ----------------- | -------------------------- |
| Docs Architecture | `./SYSTEM/ARCHITECTURE.md` |
| Docs Tasks        | `./TASKS/`                 |

---

## ⚡ Emergency Quick Start (1 min, 1K tokens)

**Need to update docs RIGHT NOW?**

Just follow existing docs structure:

1. Find similar doc
2. Copy format
3. Update content
4. Test local build

---

**TL;DR:** Docs are simple - just keep format consistent and content accurate!
