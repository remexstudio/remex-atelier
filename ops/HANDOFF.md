# Handoff V3-1 REWORK (merged)

- Status: delivered
- SHA: pending
- Preview: https://remex-atelier.vercel.app
- Commit: `fix(site): v3 nav 44px hits in 46px bar`

## Files changed
- `components/SiteChrome.tsx` — chapter map sits in same cluster row as primary (not stacked)
- `app/globals.css` — film `.site-nav` fixed `height: var(--nav-height)` / `max-height: 48px`; cluster `flex-direction: row`; chapter + primary links `height/min-height: var(--hit-target-min)` (44px) inside the 46px bar
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`

## Acceptance
- [x] Chapter hairlines in the **same** 46px sticky row as primary
- [x] Measured bar height capped ≤48px (`max-height: 48px`, no second row)
- [x] Chapter + primary hit ≥44px
- [x] No nine-module home / V3-2
- [x] Skills: apple-design-web, emil-design-eng, zero-jank-scroll

## DEV: PASS
Await Apple + UX re-PASS.
