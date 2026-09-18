# TASK — UI-0

TASK ID: UI-0
REPO: remexstudio/remex-atelier
GOAL: Lock visual tokens sitewide. Do not rebuild home stage layout yet (UI-1). Do not restyle inner page skeletons yet (UI-3).

## Owner FAIL (obey)

Live home still fails apple.com product-page grammar: soft poster type and/or brochure first screen. Fix tokens first (UI-0), then later slices fix stage/inner pages.

Continuous UI campaign. Appearance only. Do not ask to stop. No Seattle/Global. No founder. No /demo as product. Do not rewrite thesis/offers/routes.

## Required tokens (globals + layout font)

- Type: Geist (next/font) or system-ui with optical sizing. Kill Source Sans / soft weight-400 display posters / residual serif on display.
- Display: font-weight 600; tracking ~-0.03em at 56–80px (tracking tightens with size).
- Body: 17–21px, tracking near 0, line-height ~1.47, color #1d1d1f.
- Eyebrows: 12px, +0.04em, #6e6e73.
- Colors: --bg #ffffff; --gutter #f5f5f7; --ink #1d1d1f; --secondary #6e6e73; --line rgba(0,0,0,0.08); --dark #000; --dark-ink #f5f5f7; --cta #1d1d1f near-black pill. KILL #1d4ed8 SaaS blue if present.
- Nav: 44–48px; rgba(255,255,255,0.72); blur(20px) saturate(180%); four links Work Services Approach Contact identical every route.
- Radius: 18–28px on stages; pill CTA (~999px). Almost no drop shadow.

## ALLOWED FILES

- app/globals.css
- app/layout.tsx (font only)
- components/SiteChrome.tsx / SiteNav* only if needed for nav height/frost/CTA pill class
- ops/TASK.md, ops/STATUS.md, ops/HANDOFF.md, ops/ITERATION.md, ops/BACKLOG.md, ops/REVIEW.md

## OUT OF SCOPE

- Rebuilding first-viewport stage composition (UI-1)
- Dark gate rebuild (UI-2)
- Inner page IA (UI-3)
- Copy rewrites

## ACCEPTANCE

- [ ] Display headlines compute weight 600 and ~-0.03em tracking at large sizes
- [ ] No Source Sans as display; Geist/system-ui in use
- [ ] No #1d4ed8; CTA uses near-black pill token
- [ ] Color tokens match owner palette
- [ ] Nav 44–48 frosted; four links unchanged
- [ ] pnpm build PASS; vercel deploy --prod preferred; smoke /
- [ ] Write ops/ITERATION.md noting FAIL first screen + UI-0 delivered + next UI-1
- [ ] HANDOFF DEV PASS; do not start UI-1 until Leader PASS (but prepare STATUS for next)

## COMMIT

feat(ui): lock Geist display tokens and kill soft poster type

## SKILLS TO USE

apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-timeline, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations. Docs: ia-v3, scroll-score-v3, design, SiteChrome.
