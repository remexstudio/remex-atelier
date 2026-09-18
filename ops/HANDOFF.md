# Handoff

- Status: **DEV PASS**
- TASK ID: UI-0
- Phase: UI campaign open
- Allowed files only: `app/globals.css`, `app/layout.tsx` (font only), ops stamps. SiteChrome/nav files unchanged (four links already Work / Services / Approach / Contact).
- Out of scope kept: no first-viewport rebuild (UI-1), no dark gate rebuild (UI-2), no inner IA (UI-3), no copy rewrites.
- Preview / Production: https://remex-atelier.vercel.app
- Branch tip: `cursor/ui-0-geist-tokens-10fb`
- Deploy: pending production after merge
- Note: Do not start UI-1 until Leader PASS. STATUS prepared for next.

## Local verify (1280 / 1440)

`pnpm build` PASS. Smoke `/` `/work` `/services` `/approach` `/contact` HTTP 200.

Home `h1` (“Agents, built to the brief.”) computed:

| Viewport | font-family | font-weight | font-size | letter-spacing | tracking |
| --- | --- | --- | --- | --- | --- |
| 1280 | Geist, system-ui | **600** | **80px** | **-2.4px** | **-0.03em** |
| 1440 | Geist, system-ui | **600** | **80px** | **-2.4px** | **-0.03em** |

Also measured: body 17px / line-height 24.99px (1.47) / `#1d1d1f`; nav height 46px / `rgba(255,255,255,0.72)`; CTA `rgb(29,29,31)` / radius 999px; no Newsreader, no Source Sans, no `#1d4ed8`; no Seattle / Global / `/demo` in primary nav.

## Acceptance

- Display headlines locked to weight 600; `--tracking-display-tight: -0.03em` at 56–80px (`--size-display-lg`)
- Geist via `next/font`; Newsreader import removed; `--font-serif` remapped to Geist/system
- No `#1d4ed8`; `--cta: #1d1d1f` pill (`--radius-pill: 999px`)
- Owner palette tokens present
- Nav `--nav-height: 46px`; `--nav-frost: rgba(255,255,255,0.72)`; blur 20px / saturate 180%
- Four primary links unchanged
