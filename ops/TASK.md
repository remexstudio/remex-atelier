# TASK V3-1 — REWORK

TASK ID: V3-1
REPO: remexstudio/remex-atelier
MODE: REWORK (narrow)

SKILLS: /apple-design-web /emil-design-eng /web-design-guidelines (if available) /zero-jank-scroll

GOAL: Hit targets ≥44px on film chapter map and primary nav links. No nine-module home.

ALLOWED:
- app/globals.css
- components/SiteChrome.tsx (only if markup needed for hit area)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

FIX:
1. `.site-nav__chapters a` min hit ≥ `var(--hit-target-min)` (44px) via padding; keep hairline visual
2. Primary `.site-nav__links a` likewise ≥44px if currently short
3. Do not open V3-2 / HomeScenes nine modules

COMMIT: `fix(site): v3 nav 44px hit targets`

After push: HANDOFF + DEV PASS. Await UX re-PASS.
