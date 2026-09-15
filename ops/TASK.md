# TASK V5-0 REWORK — align slice map §6 to owner order

TASK ID: V5-0 (same ID — REWORK)
REPO: remexstudio/remex-atelier
GOAL: Fix only `docs/ia-v5.md` §6 Slice map so it matches the owner brief. No other scope creep. No `app/`.

## REQUIRED §6 table (exact order)

| ID | Slice | Intent |
| --- | --- | --- |
| V5-0 | Docs | `docs/ia-v5.md` + `docs/copy-locks.md` (this ticket) |
| V5-1 | `/services` | Full catalog + FAQ + engagement shape + for/not-for + trust |
| V5-2 | Examples | Four long cases + `/work` relabeled Selected examples (+ optional other-seats) |
| V5-3 | Home | Services first → examples → roadmap (Now/Next/Later) → Start a brief |
| V5-4 | Mobile / RM | 375 + reduced-motion on every primary route |
| V5-5 | Apple / motion | Kill chip-as-page; add still media; type/nav tokens |

Delete the prior Chrome / Home / Services+contact / Work / Approach planned rows.

Keep the note: Leader’s issued TASK always wins for the active slice; Do not start next until PASS.

## ALLOWED FILES

- `docs/ia-v5.md` (§6 only preferred; touch intro lines in §6 only)
- `ops/HANDOFF.md`
- `ops/STATUS.md` (optional)

## OUT OF SCOPE

- `docs/copy-locks.md` (KEEP as shipped)
- Any `app/`, `components/`, CSS
- Soft ADD items unless trivial one-line in §6 footnote

## ACCEPTANCE

- [ ] §6 matches owner order above
- [ ] No app/ changes
- [ ] HANDOFF + push; declare DEV PASS for rework

## COMMIT MESSAGE

`docs(v5): align ia-v5 slice map to owner order`
