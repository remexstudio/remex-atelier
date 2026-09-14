# Handoff V3-1

- Status: delivered
- SHA: 81234b7
- Preview: https://remex-atelier.vercel.app (local `pnpm build` required for DEV PASS)
- Commit message when allowed: `feat(site): v3 tokens nav and type`

## Files changed
- `app/globals.css` — product canvas/gutter as film shell defaults; display type tokens (`--tracking-display`, `--size-display*`, `--leading-display`); `--hit-target-min: 44px`; sticky frosted nav retained (`--nav-height: 46px`, backdrop-filter); chapter-map styles; scroll-padding-top for hash jumps
- `app/layout.tsx` — scroll-padding utility on body for sticky-nav chapter targets
- `components/SiteChrome.tsx` — film variant: primary route nav + secondary hairline chapter map (`/#home-gate`, `/#home-jobs`, `/#home-brief`, `/#home-roadmap`)
- `docs/design.md` — product canvas `#ffffff` / gutter `#f5f5f7` vs legacy paper; type + chrome tokens documented
- `AGENTS.md` — skill-gate paragraph (ten skills before UI tickets)
- `docs/scroll-score-v3.md` — one-line hard ban: no Lenis, no normalizeScroll, no body overflow lock while pinned (module facts untouched)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`

## Chapter map exposure
On `SiteChrome variant="film"` (home + film product shells): secondary nav `aria-label="Home chapters"` under primary routes. Hairline uppercase links:
- Gate → `/#home-gate`
- Jobs → `/#home-jobs`
- Brief → `/#home-brief`
- Roadmap → `/#home-roadmap`
Targets may not exist until V3-2; links are present in chrome now. Default (non-film) shell keeps primary routes only.

## Acceptance self-check
- [x] Skills invoked before edits (listed below)
- [x] Product canvas `#ffffff`, gutter `#f5f5f7` as film/product tokens
- [x] Sticky frosted nav ~46px (`--nav-height`), backdrop-filter blur + translucent
- [x] Chapter map links in film chrome
- [x] Large display negative-tracking tokens ready for V3-2
- [x] Focus-visible + 44px CTA/hit floor preserved (`--hit-target-min`)
- [x] Explicit ban: no Lenis / normalizeScroll / body overflow lock while pinned
- [x] Skill gate in `AGENTS.md`
- [x] `design.md` palette aligned (product canvas vs legacy paper)
- [x] `pnpm build` PASS (Next.js 16.3.5)
- [x] Commit: `feat(site): v3 tokens nav and type`

## Skills used (all ten — skill gate)
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

## Reduced-motion note
Existing `@media (prefers-reduced-motion: reduce)` and `prefers-reduced-transparency` rules kept: nav frost falls back to solid canvas/paper; no transform press scale; home/story scenes force opacity 1 / transform none. V3-1 did not add motion libraries.

## Out of scope (not touched)
- HomeScenes nine modules (V3-2)
- Product story rebuilds
- /demo, personal site
- Six isomorphic pins restore
- V3-0 constitution payload (copy-locks / ia-v3 module facts / scroll-score module lines)

## Blockers
- None for V3-1 chrome
- Await Apple / UX / Vision + Leader PASS before V3-2
- DEV: PASS

## DEV
- `pnpm build` PASS
- Preview URL: https://remex-atelier.vercel.app
- Reduced-motion: existing CSS reduce paths preserved; no Lenis/body-lock introduced
