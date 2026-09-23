# Handoff C0

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C0
- Commit: `docs(canon): add CANON.md for C0`
- Base: `b8af298` (`main`, UI appearance campaign CLOSED)
- Phase: **CANON CYCLE — ACTIVE C0**
- Previous: UI-0…UI-5 appearance DoD **CLOSED**. Do not invent UI-6.
- Next: C1 product footer. Do not start C1 in this PR. Do not merge this PR from Dev.

## What shipped

- `docs/CANON.md` — company spirit (names, etymology, product = job + gate, positioning, Now / Next / Later, bans), what the site is for, four construction tests, C0–C5 slice map.
- Ops stamped Active C0. Closed UI campaign note retained in STATUS, BACKLOG, and ITERATION.

## Scope held

No edits under `app/` or `components/`. Footer UI left for C1. Approach page left for C2. No live copy rewrite.

## Verify

`pnpm build` — PASS. No application code change. Docs and ops only.

## Acceptance

- [x] `docs/CANON.md` exists, English, complete canon
- [x] ops stamped Active C0
- [x] `pnpm build` PASS
- [x] PR ready for review; not merged; C1 not started
