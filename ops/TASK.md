# TASK — C4

TASK ID: C4
REPO: remexstudio/remex-atelier
BASE: main tip after C3 merge (`7953363`)
GOAL: The one home ProductStage scrubs Propose → Approve → Record as the visitor scrolls. Not a static Approve poster.

## Cycle

**Canon Cycle — ACTIVE C4.** C3 is CLOSED (Canon PASS `ff610e4` / merge `7953363`). Do not start C5 in this PR.

## Required

1. Pin+scrub only the single home ProductStage module. Transform/opacity only.
2. Scroll progresses Propose → Approve → Record. Approve is filled on the Approve beat.
3. Do not pin the headline six times. Do not add a second ProductStage.
4. prefers-reduced-motion: no pin. Three static frames, all text visible.
5. No Lenis, no normalizeScroll, no body overflow lock during pin.
6. Keep C3 structure: services catalog, one loop, dark gate chapter without a second stage, C1 footer, C2 Approach names.

## ALLOWED FILES

- `components/ProductStage.tsx`
- `components/HomeScenes.tsx`
- `app/globals.css` (stage motion only)
- `ops/*`

## OUT OF SCOPE

C5 inner pages. Footer. Approach. Re-adding deleted wallpaper chapters.

## ACCEPTANCE

- [ ] Scroll drives Propose→Approve→Record on the one stage
- [ ] RM: three frames + all text; no scroll trap
- [ ] One stage only; C3 structure held; pnpm build PASS; PR open; not merged; C5 not started
- [ ] C3 CLOSED stamped in REVIEW (Canon PASS `ff610e4` / merge `7953363`)

## COMMIT

feat(home): scrub stage states for C4
