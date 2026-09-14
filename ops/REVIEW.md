# Review R1

- TASK ID: R1
- Delivery SHA: 70a6e4c (`feat(home): add pinned product scenes`)
- Handoff tip: 8f9b3b4
- Preview: https://remex-atelier.vercel.app (CLI prod refresh after Git lag)

## Checks

- [x] `/` six full-viewport scenes `#home-s1`…`#home-s6`
- [x] Headlines and supports match `docs/scroll-score.md` (incl. S5 three beats; S6 CTA `Start a brief.`)
- [x] GSAP ScrollTrigger `pin: true`, `scrub: 1`; motion via transform/opacity (`autoAlpha` / `y` / `scale`)
- [x] Canvas `#ffffff` / gutter `#f5f5f7`; CTA accent only (`--cta`)
- [x] Sticky translucent nav height 46px
- [x] `prefers-reduced-motion`: no pin theater (JS skip + CSS transform suppress)
- [x] No English-first / purple mesh / chatbot on home
- [x] `pnpm build` PASS
- [x] Production HTML shows `home-film` + `home-s1`…`home-s6` (Offers/LumenTeaser gone)

## Notes

- S4 story routes intentionally 404 until later tickets (allowed by R1 scope).
- Lenis omitted — acceptable (optional in R1).
- Sticky nav applies site-wide; film vs default shells remain distinct.

## Verdict

**LEADER: PASS**

R1 closed. Do not start R2 until owner prompt.
