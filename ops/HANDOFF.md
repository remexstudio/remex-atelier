# Handoff C6

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C6
- Base: `6ddf2b5` on `main`
- Phase: **CANON CYCLE — ACTIVE C6**
- Planned map: **C0–C5 CLOSED**. Do not invent C7.
- Build: `pnpm build` PASS (Next.js 16.3.5, 19 static routes)

## What changed

Soft craft only. No new pages and no commercial thesis rewrite.

- Compact still DNA is a larger negative-tracking line (`stage-still__read`, about 16–21px, tracking near `-0.03em`) on work teasers, home example stills, and story stills. Service spec rows step up to `0.8125rem` with the same negative tracking. The four marks stay on their own desks: LUM-1042, Propose ≠ Execute, Priority · Watch · Noise, Refund hold.
- `StageStill` keeps the chrome and sheet `aria-hidden`. The DNA line sits outside that shell. Story frames no longer wrap the whole still in `aria-hidden`, so the line is reachable next to the existing figcaption.
- Record action pill is canvas with ink type and a 1.5px ink ring. Approve stays the near-black fill. Propose stays the quiet outline. Not a second filled wallpaper pill.
- Home scrub still opens on Propose. Pin runs only at `min-width: 720px`. At 375 the stage is not pinned.
- Untouched: one home ProductStage, product footer three names, Approach three names, services catalog, no Seattle.

## Acceptance

- [x] Soft still/fact readability improved without wallpaper
- [x] `pnpm build` PASS
- [x] C0–C5 stay CLOSED in ops; C6 marked active
- [ ] Leader REVIEW. PR open. Not merged.

## Files

- `components/StageStill.tsx`
- `components/HomeScenes.tsx`
- `components/AtelierConciergeChapter.tsx`
- `components/LedgerClerkChapter.tsx`
- `components/MorningRemexChapter.tsx`
- `components/ExceptionCopilotChapter.tsx`
- `app/globals.css`
- `ops/*`
