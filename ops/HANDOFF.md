# Handoff — day-2 UI and copy maintenance

- Status: **DELIVERED** — PR open. Not merged. Not squashed.
- PR: https://github.com/remexstudio/remex-atelier/pull/52
- Batch: Owner maintenance, day 2 (2026-09-25, America/Los_Angeles). Not a Canon cycle.
- Branch: `cursor/day2-maintenance-polish-1854`
- Base: `06b9f5b` on `main` (Merge pull request #51)
- Commit count: **18** (17 polish commits plus this handoff)
- Parent of this handoff: `ebb9f88ff01e42c94baf000291a57c5f085ae898`
- Tip SHA: this handoff commit, one commit after `ebb9f88ff01e42c94baf000291a57c5f085ae898`. Confirm with `git rev-parse HEAD` on the branch.
- Authorship email: **remexstudio.dev@gmail.com**
- Author and committer on every commit: `remexstudio <remexstudio.dev@gmail.com>`
- `cursoragent@cursor.com`: **none**. `git log origin/main..HEAD --format='%an <%ae> | %cn <%ce>'` shows only that identity on both sides.
- Planned map: **C0–C6 stay closed**. Do not invent C7. Propose-first default unchanged.
- Build: `pnpm build` PASS (Next.js 16.3.5, 19 static routes) at parent `ebb9f88`.

## What changed

One concern per commit. English UI only. No new routes, no new brand names, no component library, no motion system.

1. `5af4cd5` — Desktop primary nav marks the current page in ink, semibold.
2. `886b4fb` — Contact placeholders use secondary ink instead of a wash toward white.
3. `0972c15` — Contact field focus offset is 3px, matching the site ring.
4. `ec9b57d` — Header wordmark tracking eased from 0.12em to 0.08em.
5. `2684870` — Work teaser descriptions mix secondary ink toward ink.
6. `6779397` — Home support copy mixes secondary ink toward ink.
7. `07be454` — Home timeline body mixes secondary ink toward ink.
8. `f7f1b3a` — Method kickers track at 0.06em.
9. `ec831a8` — Timeline labels track at 0.06em.
10. `12fd793` — Chapter kickers track at 0.06em.
11. `1e7ced1` — Chapter eyebrows track at 0.06em.
12. `32f805e` — Home service blurbs use a darker ink mix.
13. `86099dc` — About fact labels mix secondary ink toward ink on the gutter chip.
14. `441171c` — Work teaser stacks open from 0.35rem to 0.55rem.
15. `d89be8d` — The contact form has an accessible name: Brief.
16. `4eee8fc` — About close names the workflow and the job.
17. `ebb9f88` — Lab index lede says “not a client engagement”.
18. This commit — handoff.

Pushes landed about 150 seconds apart on 2026-09-25 (America/Los_Angeles daytime).

## Acceptance

- [x] 18 commits on one branch, not squashed
- [x] Author and committer are `remexstudio <remexstudio.dev@gmail.com>` on every commit ahead of main
- [x] No `cursoragent@cursor.com` on the branch
- [x] `pnpm build` PASS
- [x] C0–C6 not reopened; C7 not invented
- [x] PR left open. Not merged.
- [ ] Leader review

## Files

- `app/globals.css`
- `app/about/page.tsx`
- `app/lab/page.tsx`
- `components/ContactForm.tsx`
- `ops/HANDOFF.md`
