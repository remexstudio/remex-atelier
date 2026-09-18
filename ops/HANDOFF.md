# Handoff

- Status: **DEV PASS**
- TASK ID: UI-1
- Phase: UI campaign open
- Allowed files only: `components/HomeScenes.tsx`, `components/ProductStage.tsx`, `app/globals.css` (first viewport / stage / Georgia soft ADD), ops stamps.
- Out of scope kept: no dark gate rebuild (UI-2), no inner IA (UI-3), no copy/route rewrites, four-link nav unchanged.
- Do not start UI-2. Prefer open PR for Leader / Dev merge.

## First viewport

- Headline locked: `Agents, built to the brief.`
- One existing support line: `We design the job an agent is allowed to do — and the gate it cannot cross.`
- Pill CTA `Start a brief.` → `/contact` (min-height 44 / `--hit-target-min`)
- Text link `See services` → `#home-services`
- Product STAGE: fabricated Propose → Approve → Record console, Approve filled, specular edge, inset hairline, min-height 520px
- Quiet strip in the same section: Design / Build / Operations (one line each)
- No pin at load. Approve stays filled. Optional scrub only after the hero leaves. No Lenis / body lock.
- Reduced motion: all three panels visible; transform dropped

## Soft ADD

Literal `Georgia` / `ui-serif` fallbacks in `app/globals.css` replaced with Geist/system. Approach name glyphs keep Songti / Noto Serif CJK. Do not reintroduce serif posters.

## Verify

`pnpm build` PASS. Local smoke `/` `/work` `/services` `/approach` `/contact` HTTP 200.

Measured first viewport (production `next start`):

| Surface | Stage h | CTA h | Strip in 1280 first view | h1 |
| --- | --- | --- | --- | --- |
| 1280×800 | **520** | **44** / `#1d1d1f` / 999px | yes (top 748 / bottom 799) | Geist 600 / 80px / **-0.03em** |
| 375×812 | **520** | **44** | n/a (1280 contract) | Geist 600 / 56px / **-0.03em** |

CTA click → `/contact` (`Start a brief.`). See services → `#home-services`. Approve filled. No Seattle. No `#1d4ed8`. Four-link nav. Reduced motion shows Propose / Approve / Record panels.

Cloud cannot `vercel login` here — Dev deploys after merge. Do not start UI-2.
