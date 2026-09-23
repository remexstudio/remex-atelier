# Handoff C1

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C1
- Commit: `feat(site): replace lab footer with product footer for C1`
- Base: `9015ee1` (`main`, C0 merge)
- Phase: **CANON CYCLE — ACTIVE C1**
- Previous: C0 **CLOSED** — Canon PASS `b25bc43` / merge `9015ee1`
- Next: C2 Approach legal. Do not start C2 in this PR. Do not merge this PR from Dev.

## What shipped

- Product footer on every `SiteChrome` route: lockup **Remex Studio**, legal row **Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC**, wayfinding **Work · Services · Approach · Contact**.
- Prototype and About remain quiet text links (`#6e6e73`), not a second chrome system.
- Removed `site-footer--film` / `site-footer--default` inset slab. Footer is full-bleed `#fff` with a hairline, no drop shadow.
- Study line `Studio study. Client identity anonymized.` stays quiet text on story routes.
- Header four-link nav unchanged.

## Before / after

- Before: after “Start a brief.”, a gray film band held a white max-width slab whose only links were Prototype and About.
- After: the footer continues the white product surface. Hairline, lockup, three-name legal row, four nav links, then quiet Prototype / About. No gray inset bar.

## Scope held

Approach body still prints the legal entity alone (C2). Home stage and chapter map untouched (C3/C4). No four-desk copy changes. No new offers.

## Verify

- `pnpm exec tsc --noEmit` PASS
- `pnpm exec eslint components/SiteFooter.tsx components/SiteChrome.tsx` PASS
- `pnpm build` PASS
- Headless Chrome at 375 and 1440 on `/`, `/services`, `/work`, `/approach`, `/contact`, `/work/atelier-concierge/story`: footer full-bleed `#fff`, shadow none, hairline `rgba(0,0,0,0.08)`, no horizontal overflow, nav links height 44, focus ring `#1d1d1f` 2px, footer Services link navigates to `/services`. No Seattle / Global clients in body text. No `site-footer--film`.

## Acceptance

- [x] Gray Prototype/About slab gone site-wide
- [x] Product footer: Remex Studio + legal row with three names + four nav links
- [x] Prototype/About only quiet text
- [x] No Seattle; routes locked; four-link header nav unchanged
- [x] `pnpm build` PASS
- [x] PR ready for review; not merged; C2 not started
