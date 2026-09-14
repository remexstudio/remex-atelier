# TASK V3-0 — REWORK

TASK ID: V3-0
REPO: remexstudio/remex-atelier
MODE: REWORK (docs only)

SKILLS: /apple-design-web /writing-guidelines /cinematic-scroll-storytelling /emil-design-eng

GOAL: Close UX hard constraints on V3-0 docs. No app/.

ALLOWED: docs/copy-locks.md, docs/ia-v3.md, docs/scroll-score-v3.md, ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

FIX (from UX REWORK):
1. Every home module in scroll-score-v3: columns `pin` (yes/no) | `end_max` (`none` or e.g. `+=80%`) | `375_stack` | `reduced_motion_facts` (full list)
2. H3/H4/H8: no soft “optional pin/scrub” — hard pin:no or pin:yes with numeric end_max ≤ +=100%
3. Whole-home pin budget ≲ two viewports; ban +=150%×6 and +=420% story traps in V3 contract
4. Four product modules: each row gets 375 + rm:all lines visible; default motion static/stagger; **default pin:no**
5. ia-v3: SiteChrome chapter map must link `#home-gate` `#home-jobs` `#home-brief` `#home-roadmap` (hero/close optional)
6. Explicit ban Lenis / normalizeScroll / body overflow lock during pin
7. Commit + push: `docs(site): lock v3 ia copy and scroll score` (or `docs(site): tighten v3 scroll ux contracts` if already committed once)
8. Write ops/HANDOFF.md for V3-0

ACCEPTANCE: UX can PASS only when every module has the four columns and chapter-map contract is explicit.
