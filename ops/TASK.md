# TASK V3-17

TASK ID: V3-17
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines

GOAL:
Residual craft after V3-16 type bump. Shorten wrapping decorative still-fact chips at 375 where pipelines break. Do not edit locked score lines or move payload landings.

Cite: Apple/UX/Vision post-V3-16 KEEP/KILL/ADD. Vision: payload mainline closed.

ALLOWED:
- components/AtelierConciergeChapter.tsx (decorative still-fact chip text / layout only)
- components/LedgerClerkChapter.tsx (same)
- components/MorningRemexChapter.tsx (same)
- components/ExceptionCopilotChapter.tsx (same)
- app/globals.css (still-fact / flow still wrap helpers only)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Changing locked score lines (job / pain / ability×3 / gate / record / refusal / CTA / study footer)
- BRIEF_ASKS edits
- Moving 机羽云 or refuse list
- New pins, Lenis, normalizeScroll, body overflow lock
- HomeScenes copy; Services/About/Contact copy
- Reintroducing empty gray-bar chrome

REQUIRED:
1. Audit four chapter flow/pipeline still-fact chips at ~375 width. Where labels wrap awkwardly after 0.8125rem, shorten decorative chips only (keep product DNA meaning: Propose≠Execute, Never Execute, Human before send, Policy cite, LUM-1042, etc.).
2. Optional CSS: allow still chips to stay single-line or wrap cleanly without colliding (white-space / max-width / gap) — do not shrink below readable size.
3. Locked module body copy stays verbatim.
4. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] 375 pipeline still-facts no longer awkward-wrap (or intentionally wrap cleanly)
- [ ] Locked ability×3 / gate / record / refusal / CTA / footer unchanged
- [ ] CTA ≥44; no gray-bar return; no 机羽云/refuse move
- [ ] Build green; prod refreshed

COMMIT: `feat(site): v3 short still-fact labels at 375`

Await three PM + Leader. No V3-18 until PASS.
