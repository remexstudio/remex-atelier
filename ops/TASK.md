# TASK — C2

TASK ID: C2
REPO: remexstudio/remex-atelier
BASE: main tip after C1 merge (`963df8d`)
GOAL: On Approach, print the Studio / Legal block with all three valid names together. Owner lock.

## Cycle

**Canon Cycle — ACTIVE C2.** C1 is CLOSED (Canon PASS `c86afe0` / merge `963df8d`). Do not start C3 in this PR.

## Required

1. Approach Studio / Legal prints Remex Studio, 机羽云 Studio, and Jiyuyun Studio LLC together.
2. Prefer the Canon form: Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC, with labeled rows. Do not print only Jiyuyun Studio LLC. Do not invent a second company.
3. Etymology appears once on Approach with the three names. It is not a second headline on every page.
4. Pathway Now / Next / Later stays one gated seat / reuse the method on a new seat / modules still gated.
5. No Seattle, global clients, English-first, or founder name.
6. Remove leftover unused film footer CSS in `app/globals.css` if still present. Dead CSS only. Do not regress the C1 product footer.

## ALLOWED FILES

- `app/approach/**`
- Components used only by Approach for the legal / name block
- `app/globals.css` (dead footer CSS cleanup + Approach styles only)
- `ops/*`

## OUT OF SCOPE

C3 home dedupe. C4 motion. Footer redesign (already C1). New offers.

## ACCEPTANCE

- [x] Approach shows Remex Studio + 机羽云 Studio + Jiyuyun Studio LLC together
- [x] LLC not alone; no Seattle; C1 footer not regressed
- [x] `pnpm build` PASS; PR open; not merged; C3 not started
- [x] C1 CLOSED stamped in REVIEW (Canon PASS `c86afe0` / merge `963df8d`)

## COMMIT

feat(approach): print three studio names for C2
