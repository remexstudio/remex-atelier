# TASK V3-1 — REWORK (merged UX + Apple)

TASK ID: V3-1
REPO: remexstudio/remex-atelier
MODE: REWORK

SKILLS (before edits):
/apple-design /apple-design-web /emil-design-eng /zero-jank-scroll

GOAL:
Fix film sticky nav: (1) chapter + primary hit targets ≥44px, (2) frosted sticky bar measured height ≤48px (target 46px). Chapters must live in the **same** 46px band as primary — not a second stacked row that grows the bar.

ALLOWED:
- app/globals.css
- components/SiteChrome.tsx
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

FIX:
1. UX: `.site-nav__chapters a` and primary `.site-nav__links a` hit area ≥ `var(--hit-target-min)` (44px). Prefer padding / invisible expand; keep hairline look.
2. Apple: Remove film `.site-nav { height: auto; min-height; padding-block }` growth. Sticky frosted header **≤48px** (lock `--nav-height: 46px` as actual bar height). Put chapter hairline **inline** with primary (same row / trailing micro type), not a second stacked row.
3. `scroll-padding-top` stays tied to `--nav-height`.
4. No nine-module HomeScenes. No Lenis.

COMMIT: `fix(site): v3 nav 44px hits in 46px bar`

ACCEPTANCE:
- [ ] Chapter + primary links ≥44px hit
- [ ] Film sticky nav computed height ≤48px
- [ ] Four chapter anchors unchanged
- [ ] pnpm build PASS

After push: HANDOFF. Await UX + Apple re-PASS.
