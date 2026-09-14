# Handoff V3-2 UX REWORK

- Status: delivered
- SHA: pending
- Preview: https://remex-atelier.vercel.app
- Commit: `fix(home): gate static on narrow viewports`

## Files
- `components/HomeScenes.tsx` — `pinOk` requires `min-width: 720px` (+ min-height 520 + no reduced-motion). On narrow / !pinOk, gate copy + three steps forced visible (`autoAlpha: 1`); no pin theater.
- ops HANDOFF / STATUS / BACKLOG

## Acceptance
- [x] pinOk includes min-width:720px
- [x] Narrow: gate bullets visible without scrub; no start autoAlpha:0 on gate copy/steps
- [x] No V3-3 / product pages
- [x] Skills: gsap-scrolltrigger, zero-jank-scroll, apple-design-web

## DEV: PASS
Await UX re-PASS.
