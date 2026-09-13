# TASK S2

```text
TASK ID: S2
REPO: remexstudio/remex-atelier
GOAL: Ship the /work index, Lumen Atelier study page, and the full /demo/lumen family with mock interactive flows.
ALLOWED FILES:
- app/work/page.tsx
- app/work/lumen-atelier/page.tsx
- app/demo/lumen/**
- content/studies/lumen-atelier.mdx
- content/**
- components/**
- mdx-components.tsx
- next.config.ts
- next.config.mjs
- package.json
- pnpm-lock.yaml
- docs/sitemap.md
- ops/TASK.md
- ops/HANDOFF.md
- ops/STATUS.md
OUT OF SCOPE: Northline, Kite, Paperline, /services /approach /about /lab, personal site, Chinese UI, real payments, real brand logos, fake conversion %.
ACCEPTANCE:
- [ ] /work lists four cards (Lumen live; others may be "in progress")
- [ ] /work/lumen-atelier follows study template: Client card / Brief / Constraints / What shipped / Live prototype / How it runs / Next molt / Start a brief
- [ ] Footer line on study: Studio study. Client identity anonymized.
- [ ] /demo/lumen and routes consult / try-on / bag / pay / desk are reachable
- [ ] Consult asks skin/occasion and recommends one hero SKU
- [ ] Try-on overlay works (mock)
- [ ] Mock checkout path exists
- [ ] Aftercare / desk returns mock shipment for order LUM-1042
- [ ] Request-human shows a session summary
- [ ] No Chinese; no purple/Inter-slop/neon; build passes
SKILLS TO USE: apple-design, emil-design-eng, frontend-design, writing-guidelines, web-design-guidelines, webapp-testing, vercel-react-best-practices
COMMIT MESSAGE: feat(lumen): add atelier concierge demo
```
