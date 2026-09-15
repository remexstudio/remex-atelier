# Handoff V5-4

- Status: delivered — DEV PASS
- TASK: V5-4 — 375 + reduced-motion on primary routes
- Files: `components/SiteNavMenu.tsx`, `components/SiteChrome.tsx`, `app/globals.css`, `ops/HANDOFF.md`, `ops/STATUS.md`
- Deploy: not run (coordinator)

## Acceptance

- [x] 375: primary nav collapsed (no four-link nowrap horizontal trap); chapter links not a chip rail
- [x] Menu controls ≥44px; keyboard + `aria-expanded` / `aria-controls`; Escape + focus trap; focus-visible
- [x] `[data-ex-mod]` and home `.home-mod[id]` keep `scroll-margin-top: var(--nav-height)`
- [x] Primary routes stacked at 375; contact form labels visible, fields full-width; example narratives wrap
- [x] RM: panel opacity-only; home/examples once-reveal already static; full commercial payload remains visible; no pin theater
- [x] No Lenis / normalizeScroll / body overflow lock
- [ ] `pnpm build` PASS — stamped after verify

## Narrow nav

- Below 900px: Menu / Close button (≥44px) opens a `#fff` / `#f5f5f7` sheet under the 46px frosted bar
- Home chapter map (Services / Method / Examples / Brief / Roadmap) lives in the same sheet under **On this page**
- Desktop (≥900px) keeps the inline primary row + hairline chapter map
- No body / html overflow lock

## Skills

apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations

## Blockers

Await three PM + Leader. No V5-5 until PASS.
