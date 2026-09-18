# Handoff UI-4

- Status: **DEV PASS**
- TASK ID: UI-4
- SHA: `38906ce`
- PR: pending
- Phase: UI campaign open
- Allowed files only: `app/globals.css`, ops stamps.
- Out of scope kept: no UI-5, no copy/route rewrites, no ProductStage redesign, no dark-gate rewrite, HomeScenes / ProductStage TSX untouched.
- Do not start UI-5.

## UI-3 closed

Unanimous PASS (Apple / UX / Vision / Leader) at merge tip `5531561` on `main`.

## Layout hold

- **375 home** — Menu disclosure (Work · Services · Approach · Contact, 48px); type then stage (not beside); Design / Build / Operations strip 1-col; CTA / nav / menu ≥44.
- **1280 / 1440 home** — first viewport packs headline + support + ProductStage 520 + three-service strip; type+stage share one product-page row (no gray-ocean orphan column).
- **Inner** — services three stacked rows (still after type at 375; copy+200 still at 1440); work teasers full stage-max; story 680 centered; approach bands full-bleed with stage-max inner; contact hairline sheet centered, inputs 48 / CTA 44.
- **Nav** — frosted 46px (44–48 band) on every route; mobile menu ≥44 + focus-visible.
- **Motion** — no Lenis / normalizeScroll / body lock. Reduced-motion: text visible; transform/opacity only. (RM stacks ProductStage panels so all three facts remain readable; default motion keeps stage at 520 in the first viewport.)
- **Soft ADD** — no leftover Georgia / `ui-serif` literals in `components/lab/pulse.css` (cleared in UI-2; rechecked).

## Measured (local `pnpm start`, Chrome, `prefers-reduced-motion: no-preference`)

| Surface | Nav | h1 | Stage | Strip / other | First viewport |
| --- | --- | --- | --- | --- | --- |
| Home 375×812 | 46; Menu 44; panel Work/Services/Approach/Contact **48** | Geist 600 **56px** **-0.03em** (`Agents, built to the brief.`); type top 60, stage top 323 (under) | **520** × 335 | 1-col 335; CTA **44** / `#1d1d1f` | stage under type (strip below fold — expected) |
| Home 1280×800 | 46; four inline 44 | Geist 600 **80px** **-0.03em** | **520** × 526; left 626 (beside type at 128) | 3-col; strip bottom **799** / 800 | **fits** (hero 754 = 800 − 46) |
| Home 1440×900 | 46; four inline 44 | Geist 600 **80px** **-0.03em** | **520** × 526; left 706 (beside type at 208) | 3-col; strip bottom **899** / 900 | **fits** (hero 854 = 900 − 46) |
| Services 375 | 46 + Menu | Services 36 | rows 1-col, still after type | — | hold |
| Services 1440 | 46 | Services 56 | three rows `772 + 200` | not 3-col island | hold |
| Work 375 | 46 + Menu | 36 | teasers 1-col 343; read **44** | — | hold |
| Work 1440 | 46 | 56 | teasers `184 + 876` = 1088 (stage-max) | not a thin island | hold |
| Story 1440 | 46 | Demand desk 44 | reading **680** centered | stills under body | hold |
| Approach 1440 | 46 | 56 | bands 1440 full-bleed; inner 1088 | method `#fff` / refuse `#f5f5f7` / path `#fff` | hold |
| Contact 375 | 46 + Menu | 36 | sheet 343; inputs **48**; mail/CTA **44** | hairline sheet | hold |

Screenshots: `/opt/cursor/artifacts/screenshots/home-375.png`, `home-375-menu.png`, `home-1280.png`, `home-1440.png`, `services-375.png`, `services-1440.png`, `work-1440.png`, `story-1440.png`, `contact-375.png`, `approach-1440.png`.

Gate `#home-gate` remains `#000`. `--cta` `#1d1d1f` (not `#1d4ed8`). No Seattle.

## Verify

`pnpm build` PASS. Local smoke `/` `/services` `/work` `/work/atelier-concierge/story` `/approach` `/contact` HTTP 200. Reduced-motion: reveal/text opacity 1; nav panel transform dropped. No Lenis / body lock.

## Acceptance self-check

- [x] 375: four-link menu, stage under type, strip vertical, ≥44 everywhere critical
- [x] 1280/1440: first viewport = headline + stage ≥520 + three services; no gray-ocean orphan column
- [x] Inner pages hold at both widths without hero-clone regression
- [x] UI-1/UI-2/UI-3 not regressed; four-link nav; no Seattle; lock copy
- [x] `pnpm build` PASS; open PR ready-for-review
- [x] UI-3 CLOSED in REVIEW (unanimous PASS, merge tip `5531561`); STATUS Active=UI-4; HANDOFF DEV PASS

## Skills used

apple-design, apple-design-web (via apple-design WWDC web mapping), emil-design-eng, web-design-guidelines, zero-jank-scroll (no new motion; no Lenis / normalizeScroll / body lock), gsap-scrolltrigger / gsap-react (read-only; HomeScenes untouched), review-animations (motion not added)

## Risks

375 first viewport cannot hold 56px type + 520 stage + 3-row strip in 812 — strip stacks below, as specified. Reduced-motion still stacks ProductStage panels so all three facts stay readable (stage grows; default motion stays 520 in-viewport). Preview deploy is branch-only — do not promote until PM PASS.

## Blockers

None. Awaiting PMs. Do not start UI-5.
