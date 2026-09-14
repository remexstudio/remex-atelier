# TASK V3-2

TASK ID: V3-2
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke BEFORE any edit — skill gate):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations

GOAL:
Replace the failed six-pin HomeScenes film with **nine distinct home modules** from `docs/scroll-score-v3.md` + `docs/ia-v3.md`. Verbatim locked lines. ≥3 layout grammars. Not six clones of one pin.

ALLOWED:
- components/HomeScenes.tsx (rewrite or replace)
- app/page.tsx
- app/globals.css (home module styles only as needed)
- components/SiteChrome.tsx (only if 375 chapter overflow-x needed)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Product story pages (V3-3…V3-6)
- /approach /contact rewrite (V3-7)
- /demo rebuild, personal site
- Restoring six isomorphic pins
- Changing copy-locks / product uniqueness tables

HOME MODULES (ids + grammars from scroll-score-v3 — implement all nine):
1. `#home-hero` — hero — Agents, built to the brief. + locked supports — **pin:no**
2. `#home-hire` — shallow-deep — One painful workflow… + Seattle studio. Global clients. — **pin:no**
3. `#home-gate` — pin-stage — Propose/Approve/Record — **pin:yes end_max +=80% only**
4. `#home-jobs` — horizontal rail (375 = vertical stack) — four job cards → product routes — **pin:no**
5. `#home-for` — bento — wayfinding headline + For / Not for (refuse list) — **pin:no**
6. `#home-brief` — specs cluster — What a brief asks. + four questions — **pin:no**
7. `#home-method` — method columns — Design the job / Build the gate / Keep the record (+ substance) — **pin:no**
8. `#home-roadmap` — timeline — Now / Next / Later — **pin:no**
9. `#home-close` — footer map — Start a brief. → /contact + chapter hairlines — **pin:no**

HARD RULES:
- Copy exact from scroll-score-v3 / copy-locks — no paraphrase
- ≥3 distinct layout grammars on the page
- Transform/opacity only; no Lenis / normalizeScroll / body overflow lock
- prefers-reduced-motion: full payload visible (all reduced_motion_facts)
- Chapter map targets must exist for gate/jobs/brief/roadmap
- 375 first-class; job cards + CTA ≥44px
- Canvas #ffffff / gutter #f5f5f7

ACCEPTANCE:
- [ ] Skills listed in HANDOFF
- [ ] Nine modules with correct ids and verbatim copy
- [ ] Only H3 pins; end ≤ +=80%
- [ ] No six-clone pin film
- [ ] reduced-motion full facts
- [ ] pnpm build PASS
- [ ] Commit: `feat(home): add v3 nine module film`

After push: HANDOFF + DEV PASS. Await Apple/UX/Vision + Leader. Do not open V3-3 until PASS.
