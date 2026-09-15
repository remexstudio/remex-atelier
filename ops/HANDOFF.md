# Handoff V5-2

- Status: delivered — DEV PASS
- TASK: V5-2 — Selected examples + four long cases
- Base: `b266a60`
- Files:
  - `app/work/page.tsx`
  - `app/work/atelier-concierge/page.tsx`
  - `app/work/ledger-clerk/page.tsx`
  - `app/work/morning-remex/page.tsx`
  - `app/work/exception-copilot/page.tsx`
  - `components/AtelierConciergeChapter.tsx`
  - `components/LedgerClerkChapter.tsx`
  - `components/MorningRemexChapter.tsx`
  - `components/ExceptionCopilotChapter.tsx`
  - `app/globals.css` (work / example-only classes)
  - `lib/selected-examples.ts`
  - `ops/HANDOFF.md`, `ops/STATUS.md`
- Out of scope kept: Home (V5-3), `/services`, approach, contact schema, 375 nav collapse, URL slugs, Vercel deploy

## Acceptance self-check

- [x] `/work` H1 is **Selected examples**; cards use desk display names + gate facts
- [x] Other-seats band labeled **Method fits — not shipped products**
- [x] No Open demo; no four-SKU shop language on `/work` or `/work/*`
- [x] Four chapters: context + unique 500–800w narrative + 5 captioned stills + locked closer + study footer + Start a brief → `/contact`
- [x] DNA distinct (ability / gate / record / refusal not interchangeable)
- [x] Film `#fff` / `#f5f5f7`; large negative-tracking desk H1; hairlines; shallow once-reveal; no pin; no Lenis
- [x] Chip-as-page is not the chapter grammar; stills sit under the article as media frames
- [x] 375 stacked narrative + stills; CTA ≥44; RM shows full text
- [x] Nav label stays **Work**; page title is Selected examples
- [x] `pnpm build` PASS (Next.js 16.3.5, 15 static routes)
- [x] Slugs unchanged

## Word counts (narrative body only)

| Desk | Words | Paras |
| --- | --- | --- |
| Demand desk | 796 | 7 |
| Knowledge desk | 721 | 7 |
| Attention desk | 729 | 7 |
| Exception desk | 713 | 7 |

All inside 500–800.

## DNA inventory

| Desk | May | Gate | Record | Refuse |
| --- | --- | --- | --- | --- |
| Demand | occasion → one hero; stage try-on still; draft bag | Human before pay | Consult thread + ticket | Invent SKUs; charge without approval |
| Knowledge | corpus-only; citations; Propose package | Human before execute corpus change; Propose never Execute | Ask + cite + decision audit log | Answer outside corpus; Execute writes |
| Attention | Priority / Watch / Noise; two draft tones; escalate | Human before send; never auto-publish | Brief + draft + escalate linked | Auto-publish digests or posts |
| Exception | rank queue; policy disposition; case note | Human before money moves | Case timeline (cite + decision) | Refunds / money without a human |

## Skills used

apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations

Grammar applied: film canvas; sans display with size-specific negative tracking; frosted nav unchanged; stills as product-page media under prose; GSAP `useGSAP` + ScrollTrigger once-reveal (`transform` / `opacity` only, `power3.out`, 480ms); no pin, no Lenis, no `normalizeScroll`, no body scroll lock; hover behind fine pointer; RM static full payload.

## Blockers

Await three PM + Leader. No V5-3 until PASS.
