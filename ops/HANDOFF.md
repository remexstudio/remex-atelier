# Handoff V3-3 Atelier Concierge

- Status: delivered (await PM review)
- SHA: pending (do not commit from executor)
- Preview: local / pending parent push
- Commit msg (parent): `feat(work): atelier concierge unique chapter`

## Skills used
- apple-design, apple-design-web, apple-design-motion
- emil-design-eng
- gsap-scrolltrigger, gsap-timeline, gsap-react
- cinematic-scroll-storytelling, zero-jank-scroll
- review-animations, writing-guidelines
- docs/scroll-score-v3.md Concierge; docs/copy-locks.md

## Files
- `components/AtelierConciergeChapter.tsx` — unique Concierge chapter (NOT StoryScenes)
- `app/work/atelier-concierge/page.tsx` — film SiteChrome + Concierge chapter
- `app/globals.css` — `.cq-*` Concierge styles + reduced-motion visibility
- ops HANDOFF / STATUS / BACKLOG

## Acceptance
- [x] Unique still DNA: skin → hero → try-on → bag → human at pay (pipeline stills)
- [x] Exact lines: job, pain, abilities×3, gate, record LUM-1042, refusal, CTA, study footer
- [x] StoryScenes **not** used for this page
- [x] Default pin:no; shallow once-reveals only; transform/opacity; no Lenis
- [x] 375 stack + reduced-motion: all lines visible (`[data-cq-reveal]`)
- [x] Canvas #fff / gutter #f5f5f7; SiteChrome variant=film; CTA ≥44px; no Open demo
- [x] pnpm build PASS (see below)

## DEV: PASS
Await Vision / Apple / UX PM + Leader.
