# Handoff C-DoD

- Status: **CLOSED** — live Canon DoD **11/11 PASS**
- TASK ID: C-DoD
- Tip: `ff9fab7` (`Merge pull request #48 from remexstudio/cursor/c5-inner-canon-polish-2e15`)
- C5 commit: `c00477d` (`feat(site): inner pages canon polish for C5`)
- Prod: `dpl_B7pChHN78p1pBgLzV9hEgemw2yKA` **READY**
- URL: https://remex-atelier.vercel.app
- Phase: **CANON CYCLE CLOSED**
- Previous: C5 **CLOSED** — Canon PASS `c00477d` / merge `ff9fab7`
- Next: do not invent C6. Dev standby. Leader opens a polish slice only if the owner wants the loop to continue.

## Deploy

The production alias was still UI-5 (`11406c3`, `dpl_boxRtYBsw4QApNXGYxA5CjdAGhbe`). A production deployment of `main` @ `ff9fab77dad6dc4bef5d69f3371aa039d4dafb47` was created. It reached READY and took `remex-atelier.vercel.app`.

## What was measured

Headless Chrome against the live alias, viewports 1440×900 and 375×812, motion and `prefers-reduced-motion: reduce`.

Routes: `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story`.

- One home ProductStage. Scrub steps Propose → Approve → Record on that pin only. Approve pill `rgb(29, 29, 31)`.
- Reduced motion: three static frames, mechanism lines have height, zero pins, scroll reaches the document end, overflow stays `visible`.
- Catalog names are 32px (1440) / 24px (375), weight 600, ink.
- Selected examples are short cards (114 / 142 / 117 / 135) with “Read the full example →”.
- No Seattle, no “global clients”, no English-first. Services FAQ asks “Do you sell four agents?” and answers No.
- Header is the four links. Footer is the product close. Prototype / About are transparent text, not a gray slab.
- Approach prints Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC together.
- `/services` has zero product stages. Story reading is 680px at 1440 and 343px at 375, with five stills under 240px.

## Acceptance

- [x] Prod READY on tip `ff9fab7` (`dpl_B7pChHN78p1pBgLzV9hEgemw2yKA`)
- [x] Checklist 1–11 PASS at 375 and 1440
- [x] No C6 ticket
- [x] C0–C5 marked CLOSED
- [x] Soft polish left on the backlog
