# Handoff C2

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C2
- Commit: `feat(approach): print three studio names for C2`
- Base: `963df8d` (`main`, C1 merge)
- Phase: **CANON CYCLE — ACTIVE C2**
- Previous: C1 **CLOSED** — Canon PASS `c86afe0` / merge `963df8d`
- Next: C3 home, one stage, one loop. Do not start C3 in this PR. Do not merge this PR from Dev.

## What shipped

- Approach Studio block prints the three names together: **Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC**.
- Labeled rows under that line: English Remex Studio, Chinese 机羽云 Studio, Legal Jiyuyun Studio LLC. The legal entity is not the only name in the block. No second company.
- Name meaning stays once on Approach, after the three names (Remex = remiges; 机 / 羽 / 云). It is not repeated on other routes.
- Now / Next / Later unchanged: one gated seat / reuse the method on a new seat / modules still gated.
- C1 product footer untouched: lockup Remex Studio, legal row with the same three names, four wayfinding links, quiet Prototype / About.

## Dead CSS

Scanned `app/globals.css` for leftover film-footer selectors (`.site-footer--film`, `.site-footer--default`, `.site-footer__row`, `.site-footer__links`). C1 already removed them. None remain. No footer CSS deleted in this slice. Added only `.approach-studio__line`.

## Scope held

Home stage and chapters untouched (C3/C4). No footer redesign. No new offers. No Seattle, global-clients, English-first, or founder name.

## Verify

- `pnpm build` PASS
- Approach body contains the Canon name line and the three labeled rows. Footer on `/approach` still the C1 product close.

## Acceptance

- [x] Approach shows Remex Studio + 机羽云 Studio + Jiyuyun Studio LLC together
- [x] LLC not alone; no Seattle; C1 footer not regressed
- [x] `pnpm build` PASS; PR open; not merged; C3 not started
- [x] C1 CLOSED stamped in REVIEW (Canon PASS `c86afe0` / merge `963df8d`)
