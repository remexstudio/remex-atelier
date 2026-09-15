# Handoff V5-5

- Status: delivered — DEV PASS
- Base: `18cab4e` on main
- Preview / Production: https://remex-atelier.vercel.app (coordinator deploys)
- Files: `app/globals.css`, `components/*Chapter.tsx` (still hooks), `components/HomeScenes.tsx` (teasers), `app/work/page.tsx`, `components/SiteNavMenu.tsx`, `app/approach/page.tsx`, ops
- Acceptance:
  - [x] Example stills + home teasers read as product media stages, not DNA mini-chip heroes; captions kept; desk DNA facts stay distinct
  - [x] 375: single-column stills; no horizontal chip rails; overflow contained
  - [x] Chip-as-page leftovers removed from primary still grammar (decorative chips no longer carry the chapter)
  - [x] Type/nav film-locked: `#ffffff` / `#f5f5f7`, SF-like sans, large negative-tracking display on hero/desk H1; frosted sticky nav 46px (44–48); hairlines; CTA-only accent ≥44
  - [x] Menu open moves focus into the first panel link
  - [x] Motion: transform/opacity only; RM full payload; no Lenis / normalizeScroll / body lock; no new long pins; no six-isomorphic home return
  - [x] `/approach` carries method + name meaning once + refuse + Now/Next/Later detail + locked trust; film grammar; Chinese only on etymology glyphs
  - [x] Commercial locks untouched (desk names, SAY, trust paragraph, engagement labels, example closer)
  - [x] `pnpm build` PASS
  - [ ] `vercel deploy --prod` — coordinator; Dev did not deploy
- Skills: apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations
- Blockers: Await three PM + Leader. Do not invent V5-6.
