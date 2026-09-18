# TASK V7-1 — inner pages appearance restyle

TASK ID: V7-1
REPO: remexstudio/remex-atelier
BASE: tip after V7-0 PASS (`9a49584` or newer main after this ops stamp)
GOAL: Restyle inner pages to apple.com product-page grammar using V7-0 tokens (Geist 600, `#fff` / `#f5f5f7` / `#1d1d1f`, hairline, black pill CTA, radius-stage). Keep all copy and routes. No second home hero on inner pages.

Owner override 2026-09-17: **APPEARANCE ONLY**. Do not change offers, routes, or thesis sentences. No Seattle / Global clients. No founder page. Do not revive `/demo` as product.

## /services

- Title “Services” (or existing catalog title) — no giant home-style hero with product stage
- Three large rows (Design / Build / Operations), small still each in product-stage language (fabricated UI vignette, not chip stack)
- Keep existing service copy; restyle layout only

## /work

- Still thumbnail + short line + `Read the full example →`
- Kill giant empty gray field / sparse ocean of gray
- Teasers stay short (V6-4 contract intact)

## /work/[desk]/story

- Reading column max-width ~680px
- UI still sequence under essay in same stage language as ProductStage (ask → recommend → gate → record already exist — restyle chrome)

## /approach

- Three full-width bands (method beats), not stacked white cards floating in gray
- Keep Now / Next / Later content as-is (do not rewrite Next thesis — appearance only)

## /contact

- One hairline sheet form
- Black / near-black submit pill (≥44px)
- Keep form fields and success copy

## Sitewide constraints

- Nav: Work · Services · Approach · Contact identical every route (already)
- Tokens from V7-0; kill any leftover SaaS blue
- 375: Menu with four links; 44px targets; readable
- 1280 / 1440: no crushed columns, no tiny card in ocean of gray

## ALLOWED FILES

- `app/services/page.tsx`, `app/work/page.tsx`, `app/work/*/story/page.tsx`, `app/approach/page.tsx`, `app/contact/page.tsx` (and related contact components)
- `components/*Chapter.tsx`, SiteChrome, form components as needed for styling
- `app/globals.css` (inner-page modules only; do not regress home V7-0)
- tiny new still/row components under `components/` if needed
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Rewriting thesis / Approach Next meaning
- Changing service offers or story essays
- Home first-viewport redesign (already V7-0)
- Soft ADD aria-hidden on ProductStage (optional tiny fix OK if zero risk, not required)

## ACCEPTANCE

- [ ] Inner pages do not reuse home hero + product stage as their title block
- [ ] /services three large rows with small stills
- [ ] /work still + short + Read the full example; no giant empty gray
- [ ] /story reading ≤680px + stage-language stills
- [ ] /approach full-width bands not white card stack
- [ ] /contact hairline sheet + black submit pill
- [ ] Copy/routes unchanged; four-link nav; `pnpm build` PASS; `vercel deploy --prod` preferred
- [ ] HANDOFF; DEV PASS; do not open V7-2 until Leader PASS

## SKILLS TO USE

`apple-design` `apple-design-web` `emil-design-eng` `gsap-scrolltrigger` `gsap-react` `zero-jank-scroll` `review-animations` `web-design-guidelines`

Also read `docs/ia-v3.md`, `docs/scroll-score-v3.md`, `docs/design.md`, and chrome named above. Skill files may be absent in this environment — apply those principles from `docs/design.md` and the locks in `docs/copy-locks.md`.

## COMMIT MESSAGE

`feat(site): restyle inner pages to product-stage grammar`
