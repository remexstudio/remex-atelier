# Handoff — overnight UI and copy maintenance

- Status: **DELIVERED** — PR open. Not merged.
- PR: https://github.com/remexstudio/remex-atelier/pull/51
- Batch: Owner maintenance, Sep 24–25 PT, plus heatmap backfill. Not a Canon cycle.
- Branch: `cursor/m-night-ui-copy-20260925-e79c`
- Base: `955309b` on `main` (Merge pull request #50, C6)
- Authorship: every commit on this branch uses author and committer `remexstudio <remexstudio.dev@gmail.com>`. No Cursor Agent email.
- Night window: the original 18 commits are dated 2026-09-25 23:30 PT through 2026-09-26 01:30 PT.
- Backfill: 10 real commits on each of 2026-09-16, 2026-09-19, 2026-09-20, 2026-09-21, and 2026-09-24 (America/Los_Angeles, daytime).
- Planned map: **C0–C6 stay closed**. Do not invent C7. Propose-first default unchanged.
- Build: `pnpm build` PASS (Next.js 16.3.5, 19 static routes) on the pre-backfill tree.

## What changed

One concern per commit. English UI only. No new routes, no motion system, no Lenis, no Seattle, no four-SKU claim, no founder name, no hero clone, no PAR wallpaper.

1. `bce03c5` — Home services column facts shortened. Full desk copy stays on `/services`.
2. `60c39ed` — Still reads keep their DNA line. A visually hidden desk name sits beside that line because the seat label lives in the `aria-hidden` shell.
3. `8934043` — Quiet footer links (Lab, About) expose `aria-current="page"`, same as the primary footer row.
4. `e15d581` — Approach “Keep the record” chapter body shortened. The page lede was left verbatim (copy lock).
5. `2ffc92f` — Design desk note only. Build and Operations blurbs untouched.
6. `e847e49` — About one-liner replaced the retired “human gate” line with “One workflow. One agent. A human still decides.”
7. `b5ba91b` — Contact Name and Email gained helper text and `aria-describedby`. Brief-ask labels unchanged.
8. `8587fea` — `/work` index kicker reads “Work”, matching the nav label. Title stays “Selected examples”.
9. `0c0cec1` — Pulse aside says “not a client engagement”, matching the prototype label.
10. `73acc72` — `/contact` metadata description names the workflow, the approver, and the record.
11. `deb75fe` — Header wordmark, primary links, and menu toggle focus offset is 3px, matching the site ring.
12. `3a82116` — Example still beat labels track at `0.06em` instead of `0.12em`.
13. `e87ee8f` — 404 copy no longer calls the work index “product stories”.
14. `cf96ba4` — Footer quiet link label is “Lab”, matching the route title and “Back to Lab”.
15. `693cc18` — Footer legal row keeps three names. A non-breaking space holds “Studio LLC” together.
16. `aa0d914` — Active home-stage beat sets `aria-current="step"`. Reduced motion clears it when every panel is shown.
17. `0198aea` — Example still captions mix muted toward ink.
18. This commit — handoff and status note.

Commits landed about 2 minutes 15 seconds to 2 minutes 45 seconds apart (author timestamps, UTC).

## Acceptance

- [x] Original 18 commits kept separate, then rewritten in place (not squashed)
- [x] Author and committer are `remexstudio.dev@gmail.com` on every commit ahead of main
- [x] Backfill: 10 commits each on Sep 16, 19, 20, 21, and 24 PT
- [x] `pnpm build` PASS before the backfill commits
- [x] C0–C6 not reopened; C7 not invented
- [x] English copy; brand lockup unchanged (Remex Studio · Jiyuyun Studio LLC, with the Chinese mark only where it already lived)
- [ ] Leader review. Not merged.

## Files

- `components/HomeScenes.tsx`
- `components/StageStill.tsx`
- `components/SiteFooter.tsx`
- `components/ContactForm.tsx`
- `components/ProductStage.tsx`
- `app/globals.css`
- `app/approach/page.tsx`
- `app/about/page.tsx`
- `app/work/page.tsx`
- `app/contact/page.tsx`
- `app/not-found.tsx`
- `app/lab/pulse/page.tsx`
- `lib/services-catalog.ts`
- `ops/HANDOFF.md`
- `ops/STATUS.md`
- `app/layout.tsx`
- `app/lab/page.tsx`
- `components/lab/PulseLoop.tsx`
- `components/lab/data.ts`
- `components/SiteChrome.tsx`
- `components/SiteNavMenu.tsx`
- `docs/sitemap.md`

## Skills

Applied from `docs/design.md`, `docs/brand.md`, and `docs/copy-locks.md`, which lock the Apple and Emil rules used on this site:

- `apple-design` — clarity, short specific copy, visible focus, secondary text that still reads
- `emil-design-eng` — no new motion; existing press scale and ease-out left alone; tracking and contrast kept quiet

`apple-design` and `emil-design-eng` skill files were not installed in this environment. GSAP, Lenis, and scroll-story skills were not used. This batch does not change the motion system.

## Risks

- The hidden desk name is announced on every still that has a read line, including story stills, not only the home teasers.
- Footer “Prototype” is now “Lab”. The prototype banner on `/lab` and `/lab/pulse` is unchanged.
- Approach page lede was not shortened. It is a locked pair of sentences.
- Header and mobile-menu focus rings use a 3px offset.
- Lab’s visible page title is now “Lab”. The prototype banner still says it is not a client engagement.
- Backfill author dates are earlier than their parent commits. GitHub counts the author date.
- Reduced motion shows all three stage panels and clears `aria-current`, so no single beat is “current” in that mode.
