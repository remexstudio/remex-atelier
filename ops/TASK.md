# TASK S8

```text
TASK ID: S8
REPO: remexstudio/remex-atelier
GOAL: Sitewide polish — motion respects prefers-reduced-motion, keyboard focus visible, form labels, metadata + OG on home and work pages, English 404 polish; review against review-animations and web-design-guidelines.
ALLOWED FILES:
- app/layout.tsx
- app/page.tsx
- app/globals.css
- app/not-found.tsx
- app/work/page.tsx
- app/work/**/page.tsx
- app/**/layout.tsx
- components/**
- docs/design.md
- docs/sitemap.md
- ops/TASK.md
- ops/HANDOFF.md
- ops/STATUS.md
OUT OF SCOPE: personal site, new client studies, Chinese UI, new product routes beyond polish, new deps unless pick-ui-library requires one.
ACCEPTANCE:
- [ ] prefers-reduced-motion respected sitewide (no vestibular motion when reduced)
- [ ] Keyboard focus visible on interactive controls
- [ ] Forms retain labels (contact + demos)
- [ ] Metadata + Open Graph on home and /work (and preferably study pages)
- [ ] English 404 remains coherent with atelier system
- [ ] review-animations + web-design-guidelines applied; apple-design + emil-design-eng always
- [ ] No Chinese; build passes; smoke key routes if interactive polish touched
SKILLS TO USE: apple-design, emil-design-eng, review-animations, animate (if adding motion), animation-vocabulary (if naming motion), web-design-guidelines, frontend-design, writing-guidelines, vercel-react-best-practices, webapp-testing (if smoke needed)
COMMIT MESSAGE: feat(site): polish motion a11y and metadata
```
