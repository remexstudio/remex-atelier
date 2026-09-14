# TASK V3-8

TASK ID: V3-8
REPO: remexstudio/remex-atelier

SKILLS (before edits):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations /web-design-guidelines

GOAL:
Site-wide motion + a11y pass for V3. Kill jank, scroll traps, leftover empty StoryScenes coupling, and banned copy. Verify prefers-reduced-motion keeps full facts. Keep product uniqueness chapters intact.

ALLOWED:
- app/** (a11y/metadata/404/layout polish only — no IA rewrite)
- components/** (motion/a11y; may delete or unlink dead StoryScenes if unused)
- app/globals.css
- app/work/page.tsx (stills index polish; no Open demo)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rewriting unique product chapter copy locks
- New marketing slogans
- Personal site
- Reintroducing Lenis / normalizeScroll / body overflow lock during pin

ACCEPTANCE:
- [ ] Audit every ScrollTrigger: home gate pin only when pinOk (min-width 720 + height + no reduced-motion); product chapters once-reveal only; no long story pins
- [ ] prefers-reduced-motion: no pin theater; all module facts visible (CSS + matchMedia)
- [ ] No Lenis, no normalizeScroll, no body overflow lock during pin
- [ ] Transform/opacity only for motion; kill layout thrash / scroll hijack
- [ ] Strip leftover “English-first” / “English products” / CumuLabs / founder name if any remain in UI
- [ ] /work index: four story stills, no Open demo launch buttons; study disclaimer where required
- [ ] StoryScenes: if unused by any live route, remove imports or delete file; four unique chapters remain sole product UI
- [ ] 404, metadata, 375 and 1280 readable; visible :focus-visible; forms labeled; CTA/inputs ≥44px
- [ ] Keep /demo/* unlinked from primary nav if files remain
- [ ] pnpm build PASS

COMMIT: `feat(site): v3 motion a11y and residual cleanup`

After push: write ops/HANDOFF.md. Await three PM + Leader. Do not announce campaign complete; after PASS Leader will open next iteration loop.
