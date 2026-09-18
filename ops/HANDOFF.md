# Handoff UI-1

- Status: **DEV PASS**
- TASK ID: UI-1
- SHA (content / tip): `ff8a3ae` (PR #37 squash merge; branch tip was `b0eb3a6`)
- Preview / Production: https://remex-atelier.vercel.app
- Prod deploy: `dpl_BajZ9YiRPeKz2SijNgx7NUsjfBdS`
- Phase: UI campaign open
- Allowed files only: `components/HomeScenes.tsx`, `components/ProductStage.tsx`, `app/globals.css` (first viewport / stage / Georgia soft ADD), ops stamps.
- Out of scope kept: no dark gate rebuild (UI-2), no inner IA (UI-3), no copy/route rewrites, four-link nav unchanged.
- Do not start UI-2.

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

`pnpm build` PASS. Local smoke `/` `/work` `/services` `/approach` `/contact` HTTP 200. Production HTML contains `product-stage`, `home-hero__strip`, Design / Build / Operations, Propose → Approve → Record.

Measured first viewport (production `next start` / cloud smoke):

| Surface | Stage h | CTA h | Strip in 1280 first view | h1 |
| --- | --- | --- | --- | --- |
| 1280×800 | **520** | **44** / `#1d1d1f` / 999px | yes (top 748 / bottom 799) | Geist 600 / 80px / **-0.03em** |
| 375×812 | **520** | **44** | n/a (1280 contract) | Geist 600 / 56px / **-0.03em** |

CTA click → `/contact` (`Start a brief.`). See services → `#home-services`. Approve filled. No Seattle. No `#1d4ed8`. Four-link nav. Reduced motion shows Propose / Approve / Record panels.

## Acceptance self-check

- [x] First viewport is NOT title + gray JOB/GATE card alone
- [x] Product stage ≥520px with Propose→Approve→Record UI language
- [x] Design / Build / Operations visible in first viewport on 1280
- [x] Black pill CTA ≥44; UI-0 tokens kept
- [x] Copy/routes unchanged; four-link nav; no Seattle
- [x] `pnpm build` PASS; PR #37 merged
- [x] HANDOFF DEV PASS; do NOT start UI-2

## Skills used

apple-design, apple-design-web, emil-design-eng, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations, web-design-guidelines

## Risks

None blocking. Soft ADD Georgia cleanup absorbed. UI-2 dark gate still out of scope.

## Blockers

None. Awaiting three PMs + Leader. Do not open UI-2 until dual PASS.
