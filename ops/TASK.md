# TASK R4 — REWORK

TASK ID: R4
REPO: remexstudio/remex-atelier
MODE: REWORK (same TASK ID; no scope expansion)

SKILLS TO USE (invoke BEFORE touching files):
/apple-design-web /review-animations /gsap-scrolltrigger

GOAL:
Make `/` and the four product stories feel like apple.com product chapters: pinned stage, one idea per scene, copy already locked in docs/scroll-score.md and docs/copy-locks.md. Fix only the defects listed in ops/REVIEW.md.

ALLOWED:
- components/HomeScenes.tsx
- components/StoryScenes.tsx
- app/globals.css (film/chapter typography and layout only)
- app/work/{atelier-concierge,ledger-clerk,morning-remex,exception-copilot}/page.tsx (only if needed to pass props / remove kicker)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- New pages or routes
- Paraphrasing locked copy
- /demo rebuild
- Personal / founder content

DEFECTS TO FIX:
1. Stories: one pinned stage + five scrubbing copy beats (not five separate full pins)
2. Home: longer pin runway (~140–160%) with readable hold
3. No blank-slide autoAlpha:0 blackouts — stage stays present
4. S2: replace literal “Job title” with lit job-name still
5. S5: headline vs support hierarchy for three method lines
6. Story beat A: copy column = locked pain line only (no productName kicker)

ACCEPTANCE:
- [ ] Re-read docs/copy-locks.md + docs/scroll-score.md; all locked lines still exact
- [ ] Skills invoked before edits
- [ ] Story pages: single pin + five scrub copy beats; stage morphs; transform/opacity only
- [ ] Home: six chapter pins with longer runway; one idea per scene; no blank slides
- [ ] S2 / S5 / story kicker defects cleared
- [ ] prefers-reduced-motion: no pin theater
- [ ] pnpm build PASS
- [ ] Commit: `fix(site): apple chapter pin and scrub feel` (or `feat(site):` if preferred; one commit)

After push: HANDOFF + DEV PASS or DEV REWORK. Both bots PASS again. Then stop.
