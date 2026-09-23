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
- Headless Chrome on `/approach` at 1440 and 375: Studio line reads `Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC`. Labeled rows: English Remex Studio, Chinese 机羽云 Studio, Legal Jiyuyun Studio LLC. Name meaning is one H2 on Approach only. Now / Next / Later bases stay one gated seat / reuse the method on a new seat / modules still gated. No Seattle / Global clients / English-first. No horizontal overflow (1440 scrollWidth 1425, 375 scrollWidth 375). Name line wraps to two lines at 375.
- Footer on `/approach` and `/` still the C1 product close: lockup Remex Studio, legal row with the three names, Work · Services · Approach · Contact at height 44, quiet Prototype / About. No `.site-footer--film`.
- Footer Services link on `/approach` navigates to `/services`. Etymology block is not on the home page.

## Acceptance

- [x] Approach shows Remex Studio + 机羽云 Studio + Jiyuyun Studio LLC together
- [x] LLC not alone; no Seattle; C1 footer not regressed
- [x] `pnpm build` PASS; PR open; not merged; C3 not started
- [x] C1 CLOSED stamped in REVIEW (Canon PASS `c86afe0` / merge `963df8d`)
