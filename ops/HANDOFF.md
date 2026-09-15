# Handoff V5-3

- Status: delivered — DEV PASS
- TASK: V5-3 — home services-first rebuild
- Base: `113798a`
- Files:
  - `components/HomeScenes.tsx`
  - `app/page.tsx` (metadata)
  - `app/globals.css` (home modules)
  - `components/SiteChrome.tsx` (chapter map / home anchors)
  - `ops/HANDOFF.md`, `ops/STATUS.md`
- Out of scope kept: `/services` rewrite, four long cases, approach full rewrite, V5-4 nav collapse, V5-5 polish, Vercel deploy

## Acceptance self-check

- [x] Home order: hero → services → method/gate → example teasers → brief asks → Now/Next/Later → Start a brief
- [x] Services module is Layer A catalog (Agent product design / Agent build / Agent operations) from `lib/services-catalog.ts` — not four desks
- [x] Example teasers use desk display names + **Selected examples** framing from `lib/selected-examples.ts`
- [x] Locked SAY lines on hero / mechanism / CTA; no four-SKU / English-products / Atelier Concierge SKU titles
- [x] ≥3 grammars: hero, method columns, shallow-deep, stacked proof stills, specs cluster, timeline band, footer map
- [x] No six isomorphic pins; no home pin; no Lenis; no `normalizeScroll`; no body lock
- [x] Chip-as-page hero and horizontal chip/jobs rail removed
- [x] Chapter map restaged to `#home-services` `#home-method` `#home-examples` `#home-brief` `#home-roadmap`
- [x] `scroll-margin-top: var(--nav-height)` on new home module ids
- [x] 375 stacked; stills above copy on split; CTA / text links / teasers ≥44; RM keeps full commercial payload
- [x] `pnpm build` PASS (Next.js 16.3.5, 15 static routes)
- [x] No Vercel deploy (coordinator)

## Skills used

apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations

Grammar applied: `#ffffff` / `#f5f5f7` film canvas; sans display with size-specific negative tracking; frosted nav unchanged; CTA-only accent; GSAP `useGSAP` + ScrollTrigger once-reveal (`transform` / `opacity` only, `power3.out`); shallow default — no pin; no Lenis; hover behind fine pointer; RM static full payload.

## Blockers

Await three PM + Leader. No V5-4 until PASS.
