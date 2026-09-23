# TASK — C1

TASK ID: C1
REPO: remexstudio/remex-atelier
BASE: main tip after C0 merge (`9015ee1`)
GOAL: Replace the site-wide footer with a product footer. Kill the gray Prototype/About slab (`site-footer--film` leftover lab chrome). Appearance and product close only.

## Cycle

**Canon Cycle — ACTIVE C1.** C0 is CLOSED (Canon PASS `b25bc43` / merge `9015ee1`). Do not start C2 in this PR.

## Required

Same product footer on every main route:

1. Product lockup: Remex Studio
2. Quiet legal row: Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC
3. Four links: Work · Services · Approach · Contact (≥44 hit targets; focus-visible)
4. Prototype and About only as quiet text links
5. Footer reads as the product close after the CTA
6. Tokens: #fff / #f5f5f7 / #1d1d1f / #6e6e73; hairlines; no #1d4ed8; no drop shadows
7. 375 and 1440 stack cleanly; no horizontal overflow

## ALLOWED FILES

- `components/SiteFooter.tsx`
- `components/SiteChrome.tsx`
- `app/globals.css` (footer classes only)
- `ops/*`

## OUT OF SCOPE

C2 Approach body legal rewrite. C3 home dedupe. C4 motion. Four-desk copy. New offers.

## ACCEPTANCE

- [x] Gray Prototype/About slab gone site-wide
- [x] Product footer: Remex Studio + legal row with three names + four nav links
- [x] Prototype/About only quiet text
- [x] No Seattle; routes locked; four-link header nav unchanged
- [x] `pnpm build` PASS
- [x] PR ready for review; not merged; C2 not started

## COMMIT

feat(site): replace lab footer with product footer for C1
