# Handoff V3-2 (nine module home)

- Status: delivered
- SHA: e45869e
- Preview: https://remex-atelier.vercel.app
- Commit message (parent): `feat(home): add v3 nine module film`

## Skills used (all 10)
1. apple-design
2. apple-design-web
3. apple-design-motion
4. emil-design-eng
5. gsap-scrolltrigger
6. gsap-timeline
7. gsap-react
8. cinematic-scroll-storytelling
9. zero-jank-scroll
10. review-animations

Also read: `docs/scroll-score-v3.md` (entire), `docs/copy-locks.md`, `docs/ia-v3.md`, prior `HomeScenes` / `page.tsx` / film `SiteChrome`.

## Files changed
- `components/HomeScenes.tsx` — full rewrite: nine modules, kill six-clone pin film
- `app/globals.css` — home module grammars + film chapter `overflow-x` only (46px bar height untouched)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`
- `app/page.tsx` — unchanged (already `SiteChrome variant="film"`)
- `components/SiteChrome.tsx` — unchanged (chapter targets already `#home-gate|jobs|brief|roadmap`)

## Module ids present
1. `#home-hero` — hero — pin: **no**
2. `#home-hire` — shallow-deep — pin: **no**
3. `#home-gate` — pin-stage — pin: **yes** `end: "+=80%"` `scrub: 1` (only pin)
4. `#home-jobs` — horizontal rail (375 vertical stack) — pin: **no**
5. `#home-for` — bento (For / Not for + five refuse items) — pin: **no**
6. `#home-brief` — specs cluster (four brief questions) — pin: **no**
7. `#home-method` — method columns (title + substance; 375 stacked) — pin: **no**
8. `#home-roadmap` — timeline (Now / Next / Later full sentences) — pin: **no**
9. `#home-close` — footer map (CTA `/contact` + chapter links) — pin: **no**

## Pin config
- Only `#home-gate`: `pin: true`, `start: "top top"`, `end: "+=80%"`, `scrub: 1`, `anticipatePin: 1`
- Transform/opacity only; no Lenis / `normalizeScroll` / body overflow lock
- `prefers-reduced-motion` + short viewport: skip pin; all facts static / visible
- Other modules: once-reveal (or static); no pin

## Layout grammars (≥3)
hero · shallow-deep · pin-stage · horizontal rail · bento · specs cluster · method columns · timeline · footer map

## Acceptance checklist
- [x] All 10 skills listed
- [x] Nine modules, correct ids, verbatim scroll-score-v3 / copy-locks
- [x] Only H3 (`#home-gate`) pins; end ≤ `+=80%`
- [x] No six-clone pin film (`#home-s1`…`#home-s6` removed)
- [x] reduced-motion full facts (CSS + GSAP skip pin)
- [x] Chapter anchors `#home-gate` / `#home-jobs` / `#home-brief` / `#home-roadmap` exist
- [x] 375: jobs vertical stack; method stacked; chapter nav overflow-x
- [x] Job cards + CTA ≥44px; no “Open demo”
- [x] Canvas `#ffffff` / gutter `#f5f5f7`
- [x] `pnpm build` PASS
- [x] Commit: `feat(home): add v3 nine module film`

## DEV: PASS
Await Apple + UX + Vision + Leader re-PASS. Do not open V3-3 until PASS.
