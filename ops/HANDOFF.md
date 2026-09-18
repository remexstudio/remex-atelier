# Handoff UI-3

- Status: **DEV PASS**
- TASK ID: UI-3
- SHA: `e8da48f`
- PR: https://github.com/remexstudio/remex-atelier/pull/39
- Preview: https://remex-atelier-git-cursor-ui-3-inner-pages-62b7-qinlinj-projects.vercel.app (`dpl_3yR2dWhC3wdfFRgfwD1oNoJFP64F`)
- Production: https://remex-atelier.vercel.app (remains UI-2 / prior tip until merge)
- Phase: UI campaign open
- Allowed files only: `app/services/page.tsx`, `app/work/page.tsx`, `app/approach/page.tsx`, `app/contact/page.tsx`, inner-page classes in `app/globals.css`, ops stamps.
- Out of scope kept: no UI-4 polish, no copy/route rewrites, no new offers, HomeScenes / ProductStage / `#home-gate` untouched, four-link nav unchanged.
- Do not start UI-4.

## UI-2 closed

Unanimous PASS (Apple / UX / Vision / Leader) at tip `f969b96` on `main`.

## Inner skeleton

- `/services` — page title `Services`; three large Design / Build / Operations rows; small `ServiceStageStill` beside each (200×209); no `.product-stage`. Catalog grammar.
- `/work` — still (184) + locked short teaser + `Read the full example →` at 44px. Hrefs stay `/work/[desk]/story`.
- `/work/[desk]/story` — reading column 680px; five stacked stills under body (Ask → One recommendation → One recommendation → Gate → Record). Display 44px, not home 80.
- `/approach` — three full-width 1280 bands: method (`#fff`) / refuse (`#f5f5f7`) / Now-Next-Later path (`#fff`). Name meaning + `Jiyuyun Studio LLC` stay in the method band.
- `/contact` — one hairline sheet (radius 22px); labeled fields; near-black submit 44px; success state `Brief received` kept.

## Home UI-1 / UI-2 (unchanged)

Measured local `pnpm start` (Chrome):

| Surface | h1 | CTA | Stage | Strip / gate |
| --- | --- | --- | --- | --- |
| 1280×800 | Geist 600 **80px** **-0.03em**; `Agents, built to the brief.` | **44** / `#1d1d1f` | **520** | DESIGN / BUILD / OPERATIONS; `#home-gate` **`#000`** |
| 375×812 | Geist 600 **56px** **-0.03em** | **44** | **520** | — |

Nav: Work · Services · Approach · Contact. No Seattle. `--cta` `#1d1d1f` (not `#1d4ed8`).

## Verify

`pnpm build` PASS. Local smoke `/` `/services` `/work` `/work/atelier-concierge/story` `/approach` `/contact` HTTP 200. Contact submit → Brief received. Reduced-motion story: 27 reveal/text nodes opacity 1. No Lenis / body lock.

## Acceptance self-check

- [x] Inner pages do not clone home hero pattern
- [x] `/services` three large rows + small stills
- [x] `/work` short + still + Read the full example
- [x] `/story` narrow ~680 reading + still sequence
- [x] `/approach` full-width bands
- [x] `/contact` hairline sheet + black submit
- [x] Home UI-1/UI-2 not regressed; four-link nav; no Seattle; lock copy
- [x] `pnpm build` PASS; open PR #39
- [x] HANDOFF DEV PASS; UI-2 CLOSED in REVIEW; STATUS Active=UI-3 awaiting PMs

## Skills used

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, zero-jank-scroll (no new motion; existing story reveals kept, transform/opacity only)

## Risks

Services / work stills share `StageStill` chrome; sized down on those routes only. Home `ProductStage` untouched. Preview deploy is branch-only — do not promote until PM PASS.

## Blockers

None. Awaiting PMs. Do not start UI-4.
