# TASK — C3

TASK ID: C3
REPO: remexstudio/remex-atelier
BASE: main tip after C2 merge (`a5139cc`)
GOAL: Home teaches one gate loop and sells three services. Not wallpaper of the same Propose → Approve → Record UI.

## Cycle

**Canon Cycle — ACTIVE C3.** C2 is CLOSED (Canon PASS `45e6761` / merge `a5139cc`). Do not start C4 in this PR.

## Required

1. First viewport: headline + one gate ProductStage (≥520) + Design / Build / Operations + Start a brief.
2. One explanation of the Propose → Approve → Record loop.
3. Delete duplicate stage instances and recycled three-step sentences.
4. Services read as the catalog. Four desks stay selected examples.
5. Dark `#home-gate` may keep one distinct fact without a second ProductStage.
6. No Seattle / Global clients / English-first / four SKUs. Do not regress C1 footer or C2 Approach names.

## ALLOWED FILES

- `components/HomeScenes.tsx`
- `components/ProductStage.tsx` (wiring only if needed)
- `app/globals.css` (home chapters only)
- `ops/*`

## OUT OF SCOPE

C4 full GSAP three-state scrub. C5 inner pages. Footer redesign. Approach legal rewrite.

## ACCEPTANCE

- [x] One primary PAR stage on home (not duplicated)
- [x] One clear loop explanation; no recycled three-sentence wallpaper
- [x] Services catalog readable as what we sell in first viewport / near it
- [x] Examples stay short method proof, not SKUs
- [x] C1/C2 not regressed; `pnpm build` PASS; PR open; not merged; C4 not started
- [x] C2 CLOSED stamped in REVIEW (Canon PASS `45e6761` / merge `a5139cc`)

## COMMIT

feat(home): one stage one loop for C3
