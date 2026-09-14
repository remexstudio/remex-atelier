# TASK V3-16

TASK ID: V3-16
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines /review-animations

GOAL:
Visual craft polish only. Improve `.still-fact` readability at 375 and trim chapter visual noise / CTA crowding. Do not move locked copy landings or reopen density payload work.

Cite: Apple/UX/Vision post-V3-15 KEEP/KILL/ADD (non-blocking ADD). Vision: density checklist closed.

ALLOWED:
- app/globals.css (`.still-fact` type scale; chapter still/CTA spacing helpers)
- components/AtelierConciergeChapter.tsx
- components/LedgerClerkChapter.tsx
- components/MorningRemexChapter.tsx
- components/ExceptionCopilotChapter.tsx
- components/HomeScenes.tsx (only if needed for hire-still / still-fact shared styles — no copy edits)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Changing locked score lines (job/pain/ability/gate/record/refusal/CTA/footer)
- BRIEF_ASKS string edits or relocating the module
- Moving 机羽云 or refuse list
- New pins, Lenis, normalizeScroll, body overflow lock
- Services/About/Contact copy rewrites
- Reintroducing empty `__bar` gray chrome

REQUIRED:
1. **still-fact type** — raise `.still-fact` from ~0.75rem toward ~0.8125–0.875rem (or equivalent) so 375 remains readable without competing with module titles.
2. **Chapter polish** — on all four chapters: reduce decorative noise; keep text-bearing rows; ensure primary `Start a brief` / chapter CTAs stay ≥44, focus-visible, and not stacked into a crowded band.
3. Preserve: still-fact DNA labels, ability×3/gate/record/refusal verbatim, shallow once-reveal, RM `showStatic`, pinOk home-only.
4. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] `.still-fact` more readable at 375; hierarchy under titles intact
- [ ] Four chapters quieter visually; CTAs ≥44; no empty gray-bar return
- [ ] Locked lines unchanged; no 机羽云/refuse move; BRIEF_ASKS stays single-source
- [ ] Build green; prod refreshed

COMMIT: `feat(site): v3 visual polish still-fact and chapter cta`

Await three PM + Leader. No V3-17 until PASS.
