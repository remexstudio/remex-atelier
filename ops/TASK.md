# TASK V6-1 — strip geo slogan sitewide

TASK ID: V6-1
REPO: remexstudio/remex-atelier
BASE: tip after V6-0 PASS (`e32be58` or newer main)
GOAL: Delete `Seattle studio. Global clients.` (and near-equivalents like `A Seattle studio.`) from the **entire product surface**. Studio base is mobile. Do **not** invent a replacement location slogan. Legal `Jiyuyun Studio LLC` may remain where appropriate.

## Must remove / rewrite

Known hits (verify with repo search; catch any remaining):

- `components/SiteChrome.tsx` — default `footerLine`
- `components/HomeScenes.tsx`
- `app/services/page.tsx`, `app/approach/page.tsx`, `app/contact/page.tsx`, `app/about/page.tsx`, `app/lab/page.tsx`, `app/lab/pulse/page.tsx` (footerLine / place lines / dd)
- `app/layout.tsx` metadata descriptions containing `A Seattle studio.`
- Any `/work` or chapter chrome still printing the line
- `README.md` geography lines (English docs for the repo — remove or neutralize; do not invent a new place slogan)

## Rules

- Do **not** replace with another city / “global clients” / “worldwide” marketing line
- Footer may omit the place line, or keep only non-geo studio framing already locked (e.g. study disclaimer on examples). Prefer empty/omit over a new slogan
- Keep: Agents, built to the brief. / legal LLC where already used / Start a brief.
- Do not change nav chrome (V6-2), desktop grids (V6-3), story routes (V6-4), or home first viewport (V6-5)

## ALLOWED FILES

- Any file that still prints the banned geo line (app/, components/, lib/, README.md)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Nav unification, 1280 layout, teaser/story split, Approach Next rewrite
- Inventing new footer geography

## ACCEPTANCE

- [ ] `rg "Seattle studio|Global clients|A Seattle studio"` returns **zero** hits in app/, components/, lib/ (and README neutralized)
- [ ] No replacement location slogan
- [ ] Site still builds; prefer `vercel deploy --prod`
- [ ] HANDOFF; DEV PASS; do not open V6-2

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`fix(copy): remove Seattle and global-clients slogan sitewide`
