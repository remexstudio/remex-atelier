# TASK V3-2 — REWORK

TASK ID: V3-2
REPO: remexstudio/remex-atelier
MODE: REWORK (narrow UX)

SKILLS: /apple-design-web /gsap-scrolltrigger /zero-jank-scroll /emil-design-eng

GOAL: Fix 375/narrow gate visibility. Pin only on wide viewports.

ALLOWED:
- components/HomeScenes.tsx
- app/globals.css (only if needed for static gate visibility)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

FIX:
1. `pinOk` / matchMedia must require `(min-width: 720px)` AND `(min-height: 520px)` AND no-preference motion. Below 720px width: no pin, static full-facts path (same as short/reduce).
2. On narrow path: never set gate copy/steps to `autoAlpha: 0` at start — all three Propose/Approve/Record bullets visible without scrub.
3. Do not open V3-3. Do not change locked copy.

COMMIT: `fix(home): gate static on narrow viewports`

ACCEPTANCE:
- [ ] Width <720: no ScrollTrigger pin on `#home-gate`
- [ ] Width <720: gate bullets visible without scrub
- [ ] Width ≥720 + tall + no RM: pin end still ≤ +=80%
- [ ] pnpm build PASS

After push: HANDOFF. Await UX re-PASS.
