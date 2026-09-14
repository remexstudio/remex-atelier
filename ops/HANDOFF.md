# Handoff V3-8

- Status: delivered
- SHA: 45c891a
- Preview: https://remex-atelier.vercel.app
- Commit msg for parent: `feat(site): v3 motion a11y and residual cleanup`

## Skills read
- review-animations
- apple-design-motion
- gsap-performance
- zero-jank-scroll
- web-design-guidelines
- gsap-scrolltrigger
- emil-design-eng
- apple-design-web

## Files
- `components/StoryScenes.tsx` — **deleted** (unused by any route; long `+=420%` pin runway)
- `components/HomeScenes.tsx` — hard ban comment; pin only `#home-gate` when `pinOk` (min-width 720 + min-height 520 + no RM); end `+=80%`
- `components/{AtelierConcierge,LedgerClerk,MorningRemex,ExceptionCopilot}Chapter.tsx` — once-reveal only annotations; no pins
- `components/SiteChrome.tsx` — primary nav comment: never `/demo/*`
- `app/globals.css` — removed dead story-film CSS; scroll-stack HARD BAN; RM full-facts (no story selectors); `.btn-secondary` ≥44 hit
- `app/not-found.tsx` — metadata + secondary CTA uses `.btn-secondary` (≥44)
- ops HANDOFF / STATUS / BACKLOG

## Acceptance checklist
- [x] Home gate pin only when pinOk; product pages once-reveal only; no long pins
- [x] prefers-reduced-motion: no pin theater; all facts visible (CSS + GSAP showStatic)
- [x] No Lenis / normalizeScroll / body overflow lock; hard ban kept in HomeScenes + globals
- [x] No English-first / English products / English-speaking / CumuLabs / founder real name in rendered UI
- [x] `/work` index: four stills only; no Open demo buttons
- [x] StoryScenes deleted; four unique chapters remain
- [x] not-found + metadata on key routes; focus-visible; form labels; ≥44 hit targets
- [x] Primary nav: no `/demo/*` links
- [x] pnpm build PASS
- [x] No commit/push; no V3-9 opened

## DEV: PASS
Await three PM + Leader.
