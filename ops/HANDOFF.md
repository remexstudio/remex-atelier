# Handoff

- Status: **DEV PASS**
- TASK ID: UI-0
- Phase: UI campaign open
- Allowed files only: `app/globals.css`, `app/layout.tsx` (font only), ops stamps. SiteChrome/nav files unchanged (four links already Work / Services / Approach / Contact).
- Out of scope kept: no first-viewport rebuild (UI-1), no dark gate rebuild (UI-2), no inner IA (UI-3), no copy rewrites.
- Preview / Production: https://remex-atelier.vercel.app
- Content SHA: `2ea0c4e9ea1f235dc934cfaa89d07003e030c602`
- Deploy: `dpl_FBrAqT1q8cnRu2K2RFg2f8iXqERK`
- Note: Do not start UI-1 until Leader PASS. STATUS prepared for next.

## Verify (local + prod 1280)

`pnpm build` PASS. Smoke `/` `/work` `/services` `/approach` `/contact` HTTP 200.

Home `h1` (“Agents, built to the brief.”) computed on production:

| Surface | font-family | font-weight | font-size | letter-spacing | tracking |
| --- | --- | --- | --- | --- | --- |
| prod 1280 | Geist, system-ui | **600** | **80px** | **-2.4px** | **-0.03em** |

Also: body 17px / line-height 1.47 / `#1d1d1f`; nav 46px / `rgba(255,255,255,0.72)`; CTA `#1d1d1f` / radius 999px; no Newsreader, no Source Sans, no `#1d4ed8`; no Seattle / Global / `/demo` in primary nav.

## Acceptance

- Display headlines locked to weight 600; `--tracking-display-tight: -0.03em` at 56–80px
- Geist via `next/font`; Newsreader import removed
- No `#1d4ed8`; `--cta: #1d1d1f` pill
- Owner palette tokens present
- Nav 46px frosted; four primary links unchanged
