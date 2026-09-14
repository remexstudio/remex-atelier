# Review R4

- TASK ID: R4
- Delivery SHA: 596aa52 (`feat(site): motion a11y and copy cleanup`)
- Handoff tip: ec86862
- Preview: https://remex-atelier.vercel.app (Git auto-deploy may lag; CLI refresh if needed)

## Checks

- [x] Home `#home-s1`…`#home-s6` + stories `#story-s1`…`#story-s5`: matchMedia skips reduce / short viewport; `pin` + `scrub: 1`; transform/opacity only; `fonts.ready` refresh; no Lenis / normalizeScroll; no per-frame setState
- [x] UI purged of English-first / English products / English only / outsourcing claims in `app/` + `components/` (docs/copy-locks constitution retained)
- [x] Primary nav: no `/demo/*`; `/work` index: no Open demo
- [x] `not-found.tsx` on-brand; metadata on key routes; `:focus-visible`; ContactForm labels
- [x] `prefers-reduced-motion` + CSS floors for ~375 / ~1280
- [x] `pnpm build` PASS

## Notes

- Legacy study pages may still link into `/demo/*` (allowed; out of primary nav + work index).
- Runtime FPS / pin feel not browser-profiled — accepted with residual risk noted.
- Production alias may lag Git until a CLI or Git-linked deploy lands.

## Verdict

**LEADER: PASS**

R4 closed. **Stop.** No further slices until owner says otherwise.
