# Handoff

- Status: **DEV PASS**
- TASK ID: UI-0
- Phase: UI campaign open
- Allowed files only: `app/globals.css`, `app/layout.tsx` (font only), ops stamps. SiteChrome/nav files unchanged (four links already Work / Services / Approach / Contact).
- Out of scope kept: no first-viewport rebuild (UI-1), no dark gate rebuild (UI-2), no inner IA (UI-3), no copy rewrites.
- Preview / Production: https://remex-atelier.vercel.app
- Content SHA: pending this commit
- Deploy: pending stamp
- Note: Do not start UI-1 until Leader PASS. STATUS prepared for next.

## Acceptance

- Display headlines locked to weight 600; `--tracking-display-tight: -0.03em` at 56–80px (`--size-display-lg`)
- Geist via `next/font`; Newsreader import removed; `--font-serif` remapped to Geist/system
- No `#1d4ed8`; `--cta: #1d1d1f` pill (`--radius-pill: 999px`)
- Owner palette tokens present
- Nav `--nav-height: 46px`; `--nav-frost: rgba(255,255,255,0.72)`; blur 20px / saturate 180%
- Four primary links unchanged
