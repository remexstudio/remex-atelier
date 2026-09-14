# Handoff R4

- Status: delivered
- SHA: pending (do not commit from this slice — owner/agent commit separately)
- Commit message (ready): `feat(site): motion a11y and copy cleanup`
- Preview: https://remex-atelier.vercel.app
- Local build: `pnpm build` PASS (Next.js 16.3.5)

## Skills read
- review-animations
- apple-design-motion
- gsap-performance
- zero-jank-scroll
- web-design-guidelines (fetched Vercel Web Interface Guidelines)
- emil-design-eng (brief)
- apple-design (brief)

## Files changed
- `components/HomeScenes.tsx` — matchMedia reduce/short-viewport; pin end `+=90%`; transform/opacity only; fonts.ready refresh; no Lenis/normalizeScroll; no per-frame setState
- `components/StoryScenes.tsx` — same motion hardening for `#story-s1`…`#story-s5`
- `app/globals.css` — film overflow-x clip; 375 padding/type floors; hardened `prefers-reduced-motion` (force visible + kill will-change leaks on scenes)
- `app/page.tsx` — absolute home metadata
- `app/not-found.tsx` — editorial 404 polish (no founder name)
- `app/about/page.tsx` — removed “outsourcing shop”
- `app/work/lumen-atelier/page.tsx`, `paperline/page.tsx`, `northline/page.tsx`, `kite/page.tsx` — purged “English only” market claims
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`

## Copy purge results
- UI scan of `app/` + `components/`: zero hits for outsourcing / English-first / English products / English-language / English-speaking / “English only”
- `docs/copy-locks.md` left as constitution (not rendered UI)
- Primary nav (`SiteChrome`): no `/demo/*`
- `/work` index: no Open demo buttons (stories only)

## Motion changes
- Architecture: cinematic pin/scrub (GSAP ScrollTrigger) with native scroll preserved
- Pins audited: `#home-s1`…`#home-s6`, story `#story-s1`…`#story-s5` (all four stories share `StoryScenes`)
- Tweens: `autoAlpha` / `y` / `scale` only
- `pin: true`, `scrub: 1`, `anticipatePin: 1`, `invalidateOnRefresh: true`
- `gsap.matchMedia`: skip all pins/timelines when `prefers-reduced-motion: reduce` OR viewport height &lt; 520px
- After fonts: `document.fonts.ready` → `ScrollTrigger.refresh()` (+ load listener)
- useGSAP scope + `mm.revert()` cleanup
- No Lenis; no `normalizeScroll`

## A11y / chrome verified
- `not-found.tsx` on-brand
- Metadata sane: home, work, four stories, approach, contact
- ContactForm labels present (`Name` / `Email` / `Brief`)
- `:focus-visible` rules intact in `globals.css`
- Film CSS readable intent at ~375 and ~1280 (padding + clamp floors)

## Acceptance checklist
- [x] Audit every pinned scene (home + four stories): transform/opacity; pin/scrub healthy; shorter pin end
- [x] Jank / performance: no per-frame React setState; refresh after fonts; will-change cleared under reduced motion
- [x] Repo UI purged of English-market / outsourcing claims
- [x] Primary nav: no `/demo/*`; work index: no Open demo buttons
- [x] `app/not-found.tsx` present and on-brand
- [x] Metadata sane on key routes
- [x] Layouts readable at ~375 and ~1280 (CSS; runtime browser measure incomplete — see risks)
- [x] Visible `:focus-visible`; contact form fields labeled
- [x] `prefers-reduced-motion`: no pin theater (matchMedia + CSS)
- [x] `pnpm build` PASS
- [ ] Commit: `feat(site): motion a11y and copy cleanup` — SHA pending (explicitly not committed this turn)

## Residual risks
- Runtime scroll FPS / pin feel not profiled in browser harness (daemon unavailable); static + build evidence only
- Legacy `/work/lumen-atelier|paperline|northline|kite` still expose Open *demo* CTAs (out of primary nav + work index; demos allowed to remain)
- ContactForm remains client mock — no message sent
- Pin distance `+=90%` is a craft judgment; may need one more pass after live scroll feel on device

## DEV
PASS

## Stop
R4 complete — do not open next slice.
