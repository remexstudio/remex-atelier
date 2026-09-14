# TASK V3-18

TASK ID: V3-18
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines

GOAL:
Residual craft. Shorten remaining long decorative labels on register / ribbon / packet / spine rows at 375. Do not edit locked score lines.

Cite: UX post-V3-17 ADD; Apple/Vision craft closed with no hard gaps.

ALLOWED:
- components/AtelierConciergeChapter.tsx (decorative chips / ribbon rows only)
- components/LedgerClerkChapter.tsx (decorative chips / register rows only)
- components/MorningRemexChapter.tsx (decorative chips / packet rows only)
- components/ExceptionCopilotChapter.tsx (decorative chips / spine rows only)
- app/globals.css (nowrap/balance helpers only; no type shrink)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Locked score lines (job / pain / ability×3 / gate / record / refusal / CTA / study footer)
- BRIEF_ASKS edits; HomeScenes copy; Services/About/Contact
- Moving 机羽云 or refuse list
- New pins, Lenis, normalizeScroll, body overflow lock
- Empty gray-bar chrome return

REQUIRED:
1. Audit register / ribbon / packet / spine decorative still-fact (and similar chip) strings at ~375. Shorten awkward wraps (examples: `Month-end question` → shorter chip; `§12.4 · Close pack` → shorter DNA-preserving chip if needed). Keep LUM-1042 / Never Execute / Human before send / Policy cite / Refund hold when they are identity markers.
2. Do not rewrite locked module paragraphs.
3. Preserve CTA ≥44; `.still-fact` ≥ 0.8125rem.
4. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] Remaining long decorative chips shortened or wrap cleanly at 375
- [ ] Locked ability×3 / gate / record / refusal / CTA / footer unchanged
- [ ] DNA identity markers retained; no 机羽云/refuse move
- [ ] Build green; prod refreshed

COMMIT: `feat(site): v3 short register ribbon still-fact chips`

Await three PM + Leader. No V3-19 until PASS.
