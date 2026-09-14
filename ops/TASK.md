# TASK V3-1

TASK ID: V3-1
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke BEFORE any file touch — skill gate):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations

GOAL:
Establish V3 product chrome: canvas tokens, type, sticky frosted nav with chapter map. No full home nine-module build yet (that is V3-2). No product story rebuild yet.

ALLOWED:
- app/globals.css
- app/layout.tsx
- components/SiteChrome.tsx
- docs/design.md (align product canvas to #ffffff / #f5f5f7; note if paper remains for legacy inner pages only)
- docs/ia-v3.md or AGENTS.md (add skill-gate paragraph if missing)
- docs/scroll-score-v3.md (optional one-line Lenis/normalizeScroll/body-lock hard ban if not explicit)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rebuilding HomeScenes nine modules (V3-2)
- Product story pages (V3-3…V3-6)
- /demo rebuild, personal site, founder name
- Restoring six isomorphic pins

ACCEPTANCE:
- [ ] Skills invoked before edits (list in HANDOFF)
- [ ] Product canvas `#ffffff`, gutter `#f5f5f7` as default film/product tokens
- [ ] Sticky frosted nav ~44–48px
- [ ] Chapter map links present: `#home-gate` `#home-jobs` `#home-brief` `#home-roadmap` (targets may 404-ish until V3-2 lands — links must exist in nav/chrome)
- [ ] Large display type negative tracking tokens ready for V3-2
- [ ] Focus-visible + 44px CTA/hit target floor preserved
- [ ] Explicit ban documented: no Lenis, no normalizeScroll, no body overflow lock while pinned
- [ ] Skill gate written into ia-v3 or AGENTS.md
- [ ] design.md palette aligned or scoped
- [ ] pnpm build PASS
- [ ] Commit: `feat(site): v3 tokens nav and type`

After push: HANDOFF + DEV PASS. Await Apple/UX/Vision + Leader before V3-2.
