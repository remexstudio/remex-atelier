# TASK V6-3 — desktop 1280 / 1440 layout (Approach + Services + home)

TASK ID: V6-3
REPO: remexstudio/remex-atelier
BASE: tip after V6-2 PASS (`0071284` or newer main)
GOAL: Fix first-class desktop measure at **1280** and **1440** on `/approach`, `/services`, and `/` per `docs/ia-v6.md` §5. No crushed text, no single card lost in empty side fields, no uneven three-column catalog.

## Must ship

1. **Shared stage measure**
   - Marketing shells at 1280/1440 use a coherent max-width + horizontal padding (do not leave a ~42rem column floating in a wide stage; do not stretch one lonely card edge-to-edge)
   - Prefer aligning film pages to a common stage (~68–72rem or documented equivalent) with balanced gutters

2. **`/services`**
   - Three catalog lines: even columns / stack rules that stay aligned at 1280/1440
   - Engage split + fit grid: no collapse that leaves huge empty fields or crushed copy
   - FAQ / trust bands: readable measure, not ultra-narrow ribbon in a wide viewport

3. **`/approach`**
   - Proportions: method / etymology / refuse / roadmap / trust blocks balanced
   - Kill leftover empty place anchors if any; optional soft purge `.approach-place` dead CSS

4. **`/` home**
   - Hero / services / method / examples / brief / roadmap / close: stage widths consistent at 1280/1440
   - Services module columns even; method split not “tiny copy + huge empty still”
   - Do **not** yet force three services into first viewport (that is V6-5) — only desktop measure

5. **Keep**
   - Four-item unified nav (V6-2)
   - No geo slogan
   - 375 still usable (no regression into horizontal traps)
   - Film canvas `#fff/#f5f5f7`; ≥44 CTAs

## ALLOWED FILES

- `app/globals.css`
- `app/approach/page.tsx` (structure/class only if needed)
- `app/services/page.tsx` (structure/class only if needed)
- `components/HomeScenes.tsx` (layout classes only — no commercial reorder)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- V6-4 story routes, V6-5 first-viewport services reorder, V6-6 Approach Next copy rewrite
- Inventing new slogans

## ACCEPTANCE

- [ ] 1280 and 1440: Approach, Services, home look balanced (no crushed text, no lost card, even catalog)
- [ ] Shared stage / padding coherent across those routes
- [ ] 375 not broken; nav still four items
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod`
- [ ] HANDOFF; DEV PASS; do not open V6-4

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`fix(layout): balance Approach Services and home at 1280 1440`
