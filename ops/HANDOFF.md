# Handoff S9

- Status: delivered
- SHA: 9f7ff95b23764b62b8b0e4795e97cd8984bdb608
- Preview: https://remex-atelier.vercel.app
- Vercel: project under `qinlinj-projects`; team-scoped URLs may SSO via Deployment Protection; public alias documented
- Files changed:
  - `README.md` — production English README (stack, scripts, voice, constitution links, routes table, preview + protection caveat, Seattle / LLC)
  - `docs/sitemap.md` — shipped S0–S8 reality (marketing + demo families + 404)
  - `ops/STATUS.md` — studio v1 DoD checklist marked green vs reality
  - `ops/BACKLOG.md` — S9 checked done
  - `AGENTS.md` — light refresh (pointers to sitemap / STATUS / brand / design)
  - `ops/HANDOFF.md`, `ops/TASK.md` (handoff only; TASK unchanged scope)
- Build: `pnpm build` pass (43 static routes generated)
- Smoke: Playwright via `with_server.py` + `pnpm exec next start -p 3019` — **50/50** (12 marketing + 19 demos + landmarks/disclaimer/labels/OG/reduced-motion + English 404)
- Live alias note: anonymous GET `/` on `remex-atelier.vercel.app` returned 200; `/work` returned app 404 at S9 verify time (alias may lag GitHub `main`). Team URLs `*-qinlinj-projects.vercel.app` redirected to Vercel SSO (Deployment Protection still true).

## DoD self-check

| Item | Result |
| --- | --- |
| Marketing routes `/` `/work` `/work/lumen-atelier` `/work/northline` `/work/kite` `/work/paperline` `/services` `/approach` `/lab` `/lab/pulse` `/about` `/contact` | pass (local 200) |
| Demos lumen / northline / kite / paperline families | pass (local 200; kite-01, PL-2401) |
| English UI only | pass (smoke + source spot-check) |
| Study footer disclaimer | pass (`/work/lumen-atelier`) |
| No founder PII | pass |
| No fake % | pass |
| No purple / neon | pass (tokens paper/ink) |
| focus-visible | pass (prior S8 + globals) |
| Form labels | pass (`/contact`) |
| metadata / OG | pass (home og:title) |
| prefers-reduced-motion | pass (btn transitionProperty) |
| Vercel preview documented + protection / qinlinj-projects caveat | pass (README + STATUS) |
| `pnpm build` | pass |
| Production README (no Chinese, no fake %) | pass |
| sitemap reflects shipped reality | pass |

## Skills used

- writing-guidelines (fetched Vercel rules; README/STATUS/sitemap English, sentence-case headings, no banned fillers / fake %)
- frontend-design (docs tone only: atelier restraint in README voice; no UI code)
- webapp-testing (`with_server.py` + Playwright DoD route smoke)
- vercel-optimize (deploy sanity notes only; no metric audit / no cost claims)

## Skills judged N/A

- apple-design, emil-design-eng: docs-only closeout; no UI touch
- animate, animation-vocabulary, review-animations, improve-animations, find-animation-opportunities, pick-ui-library, ask-sonner, prototype

## Forbidden skills not read

animate-expo, write-swift, react-native-guidelines

## Risks

- Deployment Protection on `qinlinj-projects` team previews (SSO for anonymous clients)
- Production alias may lag or diverge from `main` until Vercel redeploys / re-aliases
- No `remexstudio` Vercel team on current deploy auth
- vercel-optimize not run (no linked CLI / Observability in this box)

## Blockers

none for GitHub docs closeout

## DEV verdict

**DEV PASS**
