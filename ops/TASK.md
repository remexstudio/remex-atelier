# TASK — UI-2

TASK ID: UI-2
REPO: remexstudio/remex-atelier
BASE: main tip `f4dad76` (or newer; after UI-1 CLOSED `ff8a3ae`)
GOAL: Rebuild HOME GATE chapter appearance only — true dark #000 stage with ProductStage dark (Approve filled), clearly distinct from the light method chapter. Do not regress UI-1 first viewport. Do not rewrite thesis/offers/routes.

## Owner

UI-1 CLOSED (full PASS). Continuous UI campaign. Gate chapter must read as apple.com product-page dark module, not a gray band.

## Required

1. `#home-gate` chapter canvas is true black `#000` (or near-black locked token), light type `#f5f5f7` / muted rgba — distinct from `#home-method` light/`--gutter` canvas.
2. Gate uses `ProductStage variant="dark"` with Propose → Approve → Record, Approve filled, specular + inset hairline language matching UI-1 stage quality (not a gray JOB/GATE card).
3. Keep distinct gate H2 + lede already on tip (`A human still decides.` / irreversible-actions line) — do not rewrite locked copy; do not steal method H2.
4. UI-1 first viewport unchanged: headline, black pill, light ProductStage ≥520, Design/Build/Operations strip, tokens.
5. prefers-reduced-motion: gate panels/text fully visible; transform/opacity only if motion; no Lenis / body lock; no pin that hides gate content.
6. Soft debt from UI-1 review: clear literal `Georgia` / `ui-serif` fallbacks in `components/lab/pulse.css` (lab only; do not import Chinese UI).

## ALLOWED FILES

- `components/HomeScenes.tsx` (gate chapter chrome/layout only)
- `components/ProductStage.tsx` (dark variant polish only)
- `app/globals.css` (gate / dark stage / contrast only; do not undo UI-1 hero tokens)
- `components/lab/pulse.css` (Georgia soft cleanup only)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/TASK.md`, `ops/ITERATION.md`, `ops/BACKLOG.md`, `ops/REVIEW.md` as needed

## OUT OF SCOPE

UI-3 inner pages, copy rewrites of locked lines, nav chrome, first-viewport rebuild, route changes, new offers.

## ACCEPTANCE

- [ ] `#home-gate` is true dark `#000` chapter; visually distinct from light method
- [ ] Dark ProductStage Propose→Approve→Record with Approve filled; not gray JOB/GATE card
- [ ] UI-1 first viewport not regressed (stage ≥520, strip, black pill, Geist tokens)
- [ ] Gate H2/lede distinct from method; lock copy/routes; four-link nav; no Seattle
- [ ] lab `pulse.css` Georgia/`ui-serif` literal fallbacks cleared
- [ ] `pnpm build` PASS; open PR
- [ ] HANDOFF DEV PASS; do NOT start UI-3; prefer open PR for merge

## COMMIT

feat(home): rebuild dark gate stage for UI-2

## SKILLS TO USE

apple-design, apple-design-web, emil-design-eng, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations, web-design-guidelines
