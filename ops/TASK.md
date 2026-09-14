# TASK V3-20

TASK ID: V3-20
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines /review-animations

GOAL:
Break isomorphic CTA finales across the four product chapters and lift `/work` from a padded 2×2 card catalog toward an Apple-like product wall. Keep locked CTA copy and DNA markers.

Cite: Apple post-V3-18 / V3-19 KEEP/KILL/ADD. Vision/UX: do not move locked landings.

ALLOWED:
- components/AtelierConciergeChapter.tsx
- components/LedgerClerkChapter.tsx
- components/MorningRemexChapter.tsx
- components/ExceptionCopilotChapter.tsx
- app/work/page.tsx
- app/globals.css (chapter CTA finales + `.work-story-card*` + optional scroll-padding/margin simplification)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Changing locked ability×3 / gate / record / refusal / study footer strings
- Moving 机羽云 or refuse list
- New pins, Lenis, normalizeScroll, body overflow lock
- HomeScenes nine-module rewrite; Services/About/Contact copy
- Short-chip micro tickets; StoryScenes / demo revival

REQUIRED:
1. **CTA de-iso** — each chapter CTA finale uses a distinct layout grammar with a product-unique large still (Concierge / Ledger / Morning / Exception DNA). Do not share one identical `*-mod--cta` curtain. CTA label may remain `Start a brief.` with ≥44 hit target + focus-visible.
2. **`/work` wall** — larger story stills, less card padding/chrome; readable product names + one DNA cue per card; links ≥44; 375 stacks cleanly.
3. Soft: reduce double sticky offset if both `scroll-padding-top` and `scroll-margin-top` feel excessive.
4. Preserve shallow once-reveal / RM showStatic; no new pins.
5. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] Four CTA finales visually non-isomorphic with unique DNA stills
- [ ] `/work` reads as product wall, not thin brochure grid
- [ ] Locked score lines + Start a brief + DNA markers intact
- [ ] CTA ≥44; no Lenis; no gray-bar return; no 机羽云/refuse move
- [ ] Build green; prod refreshed

COMMIT: `feat(site): v3 chapter cta de-iso and work wall`

Await three PM + Leader. No V3-21 until PASS.
