# Handoff — week maintenance UI/copy and heatmap backfill

- Status: **DELIVERED** — PR open. Not merged. Not squashed.
- PR: https://github.com/remexstudio/remex-atelier/pull/53
- Batch: Owner maintenance (2026-09-27 and 2026-09-28, America/Los_Angeles). Not a Canon cycle.
- Branch: `cursor/week-maintenance-heatmap-9dd7`
- Base: `99a0403` on `main` (Merge pull request #52)
- Commit count: **28** (27 polish commits plus this handoff)
- Parent of this handoff: `0f943de605d4915fc1587ef60eab29c9c79f9a25`
- Tip SHA: this handoff commit, one commit after `0f943de605d4915fc1587ef60eab29c9c79f9a25`. Confirm with `git rev-parse HEAD` on the branch.
- Authorship email: **remexstudio.dev@gmail.com**
- Author and committer on every commit: `remexstudio <remexstudio.dev@gmail.com>`
- `cursoragent@cursor.com`: **none**. `git log origin/main..HEAD --format='%an <%ae> | %cn <%ce>'` shows only that identity on both sides.
- Planned map: **C0–C6 stay closed**. Do not invent C7. Propose-first default unchanged.
- Build: `pnpm build` PASS (Next.js 16.3.5, 19 static routes) at parent `0f943de`.

## Author dates (America/Los_Angeles)

- 2026-09-27: **10** commits, 10:08–19:44 PT
- 2026-09-28 daytime: **10** commits, 10:06–16:41 PT
- 2026-09-28 evening: **8** commits, 17:04–19:36 PT (7 polish commits plus this handoff)
- 2026-09-26 was left alone

Evening polish commits were pushed about 130 seconds apart.

## What changed

One concern per commit. English UI only. No new routes, no new pages, no dependency adds.

1. `4ac9d5c` — Footer legal line mixes secondary ink toward ink.
2. `a323019` — Footer Lab and About links mix secondary ink toward ink.
3. `c69162f` — Footer stack gap opens from 0.15rem to 0.4rem.
4. `13e999f` — Skip link focus uses a paper ring.
5. `e8f407e` — Missing-page line says “This address is not on the site.”
6. `1bff133` — Film actions open to 0.85rem / 1.4rem.
7. `6da76b5` — About fact labels track at 0.02em.
8. `d7d0eba` — Lab step chips gap opens to 0.7rem.
9. `f645597` — Contact hints use a darker ink mix.
10. `3758f64` — Secondary button border mixes ink into the rule.
11. `35a476b` — Film kickers track at 0.02em.
12. `e964e79` — Brief receipt note uses a darker ink mix.
13. `09bf6b5` — Lab prototype mark tracks at -0.022em.
14. `068a19f` — Work index lede margin opens to 0.9rem.
15. `87a8921` — Work example list is named from the index heading.
16. `b0480a9` — Approach method rows pad to 1.7rem.
17. `55b5003` — Contact reply line says “when the fit is clear.”
18. `1df54d1` — Pulse step list is named “Loop steps.”
19. `b72eae4` — Brief receipt padding opens to 1.5rem / 1.35rem.
20. `4d54c1d` — Menu toggle tracks at 0.02em.
21. `cd31651` — Film titles sit 0.85rem under the kicker.
22. `e2ed11b` — Film ledes use a darker ink mix.
23. `19a9955` — Footer home link is named “Remex Studio home.”
24. `9a83567` — Footer hairline mixes 14% ink.
25. `d4e80e2` — Lab prototype flag pads to 1rem / 1.1rem.
26. `4bcbc76` — Brief receipt line says “We read it and reply when the fit is clear.”
27. `0f943de` — Contact mail line uses a darker ink mix.
28. This commit — handoff.

## Acceptance

- [x] 28 commits on one branch, not squashed
- [x] Author and committer are `remexstudio <remexstudio.dev@gmail.com>` on every commit ahead of main
- [x] No `cursoragent@cursor.com` on the branch
- [x] Author-date counts in PT: 2026-09-27 = 10, 2026-09-28 = 18
- [x] `pnpm build` PASS
- [x] C0–C6 not reopened; C7 not invented
- [x] PR left open. Not merged.
- [ ] Leader review

## Files

- `app/globals.css`
- `app/not-found.tsx`
- `app/contact/page.tsx`
- `app/work/page.tsx`
- `components/ContactForm.tsx`
- `components/SiteFooter.tsx`
- `components/lab/PulseLoop.tsx`
- `ops/HANDOFF.md`
