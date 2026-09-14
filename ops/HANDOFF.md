# Handoff V3-15

- Status: delivered — PM board lock
- Content SHA: d2c9f3f
- Tip SHA: 0b680a2
- Preview / Production: https://remex-atelier.vercel.app
- Deploy: coordinator `vercel deploy --prod` after merge
- PR: https://github.com/remexstudio/remex-atelier/pull/7

## Board lock

| Lock | Evidence |
| --- | --- |
| BRIEF_ASKS single source (Home H6 + ContactForm + contact page) | `lib/brief-asks.ts` only. Three consumers import `@/lib/brief-asks`. Exact four strings. |
| Four chapter stills: readable product DNA | Ability×3 / gate / record / refusal stay as locked copy in document order. Still chrome uses product facts (LUM-1042, §12.4, P/W/N, EX-441 / §4.2). Empty gray-bar chatbot chrome killed. |
| Locked score lines verbatim | Job / pain / ability×3 / gate / record / refusal / CTA unchanged from `docs/scroll-score-v3.md`. |
| Shallow scroll; RM/375 full facts; no new pins | Chapters: once-reveal only; `prefers-reduced-motion` → `showStatic`. Home pin still H3-only (`+=80%`). No Lenis. |
| No 机羽云 / refuse move | Approach name-meaning and Home H5 refuse list untouched. |

## Files (ALLOWED only)

- `lib/brief-asks.ts`
- `components/HomeScenes.tsx` (H6 import + H2 PAR microchips)
- `components/ContactForm.tsx`, `app/contact/page.tsx`
- Four `*Chapter.tsx`
- `app/globals.css` (hire-still / chapter still-fact helpers)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`, `ops/ITERATION.md`

## Acceptance

- [x] BRIEF_ASKS defined once; three consumers import it
- [x] Ability×3 / gate / record / refusal visible per chapter; no empty gray-bar chatbot chrome
- [x] Locked lines verbatim; shallow once-reveal; no new pins
- [x] No 机羽云 / refuse move
- [x] `pnpm build` PASS
- [ ] prod refresh — coordinator after merge

## Skills

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, writing-guidelines, review-animations

## Blockers

None. Await three PM + Leader. No V3-16 until PASS.
