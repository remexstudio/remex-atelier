# TASK S9

```text
TASK ID: S9
REPO: remexstudio/remex-atelier
GOAL: Close studio v1 — production README, ops/STATUS.md green against the studio Definition of Done, deploy sanity against the live preview, English-only ship checklist.
ALLOWED FILES:
- README.md
- AGENTS.md
- docs/**
- ops/TASK.md
- ops/HANDOFF.md
- ops/STATUS.md
- ops/BACKLOG.md
- ops/REVIEW.md
- package.json
- public/**
OUT OF SCOPE: personal site, new features/routes, Chinese UI, brand changes, scope beyond DoD verification + docs.
ACCEPTANCE:
- [ ] README.md is production-ready English (stack, scripts, brand voice, links to constitution docs, preview note)
- [ ] ops/STATUS.md marks studio v1 DoD items checked against reality (routes, studies, demos, lab/pulse, contact, English UI, footer disclaimer, no founder PII, no fake %, responsive intent, focus/labels, metadata/OG, reduced-motion, Vercel preview)
- [ ] All checklist routes respond (no 404 on DoD routes) — verify via build and/or smoke
- [ ] Preview URL documented; Deployment Protection caveat OK if still present
- [ ] No new Chinese; build passes
- [ ] HANDOFF declares DEV PASS with DoD self-check table
SKILLS TO USE: writing-guidelines, frontend-design (docs tone), webapp-testing (route smoke), vercel-optimize (if deploy sanity), apple-design + emil-design-eng (if any UI touch — prefer docs-only)
COMMIT MESSAGE: docs(site): production readme and status green
```
