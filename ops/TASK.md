# TASK S6

```text
TASK ID: S6
REPO: remexstudio/remex-atelier
GOAL: Ship the Paperline Retail study page and the /demo/paperline family (Exception Copilot) with a 6-ticket queue, case timeline, suggested actions, refund approval gate, and no real payouts.
ALLOWED FILES:
- app/work/page.tsx
- app/work/paperline/page.tsx
- app/demo/paperline/**
- content/studies/paperline.mdx
- content/**
- components/**
- components/lumen/data.ts
- docs/sitemap.md
- ops/TASK.md
- ops/HANDOFF.md
- ops/STATUS.md
OUT OF SCOPE: /lab, personal site, Chinese UI, real payouts, real brand logos, fake %, new deps unless pick-ui-library requires one.
ACCEPTANCE:
- [ ] /work marks Paperline Live (all four studies live)
- [ ] /work/paperline study template + Studio study. Client identity anonymized.
- [ ] /demo/paperline + /queue /case/[id] /policy reachable
- [ ] Queue shows 6 tickets
- [ ] Case page has timeline + suggested actions
- [ ] Refund requires approval; no real payouts
- [ ] apple-design + emil-design-eng always; other emilkowalski if relevant; webapp-testing smoke
- [ ] No Chinese; build passes
SKILLS TO USE: apple-design, emil-design-eng, frontend-design, writing-guidelines, web-design-guidelines, webapp-testing, vercel-react-best-practices (+ relevant emilkowalski)
COMMIT MESSAGE: feat(paperline): add exception copilot demo
```
