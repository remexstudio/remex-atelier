# Handoff V3-18

- Status: delivered — PM board lock checked
- Content SHA: `f504ca9`
- Tip: `00af722` (this stamp follows)
- Base: `5a89e93` on main
- Preview: https://remex-atelier.vercel.app
- PR: https://github.com/remexstudio/remex-atelier/pull/10
- Deploy: coordinator `vercel deploy --prod` after merge (not run in this slice)

## PM board lock

1. **Register / ribbon / packet / spine chips at 375** — shortened decorative still-facts only. Register: `§12.4` / `Month-end`. Ribbon: `Skin` / `Held` (LUM-1042 kept). Packet: `Overnight` (Human before send kept). Spine: `§4.2` (Policy cite / Refund hold kept). nowrap + balance helpers; spine stays 3-col. `.still-fact` ≥ `0.8125rem`. No type shrink.
2. **DNA identity markers visible** — LUM-1042 / Never Execute / Human before send / Policy cite / Refund hold remain on-page. Decorative chips shortened; identity strings not rewritten away.
3. **Locked score lines untouched** — ability×3 / gate / record / refusal stay in document order on all four chapters. Not edited, not hidden (`display: none` / absolute-stack). `aria-hidden` only on decorative stills; score lines stay in headings / ability copy.
4. **Hard stay** — no 机羽云 / refuse list move; canvas `#ffffff` / gutter `#f5f5f7`; shallow once-reveal; RM `showStatic`; pinOk home-only; CTA `min-height: 44px`. BRIEF_ASKS / HomeScenes / Services / About / Contact / empty gray-bar untouched.

### DNA inventory (verbatim, still on page)

| Marker | Where |
| --- | --- |
| LUM-1042 | Concierge desk chip + ribbon ticket id + locked record line |
| Never Execute | Ledger propose still + locked ability 3 |
| Human before send | Morning escalate still + packet row |
| Policy cite | Exception dock still + spine key |
| Refund hold | Exception queue tickets (pain + rank) |

| Chapter | Ability×3 | Gate | Record | Refusal |
| --- | --- | --- | --- | --- |
| Concierge | Map skin… / Stage a try-on… / Draft the bag… | Human at pay. A stylist approves… | Consult thread stays with ticket LUM-1042. | Will not invent catalog SKUs… |
| Ledger | Answer from the corpus only. / Attach citations… / Package a Propose draft. Never Execute. | Approve or Reject by a named controller… | Ask, citation, and decision sit in one audit log. | Will not answer outside the corpus… |
| Morning | Sort threads into Priority, Watch, and Noise. / Draft in two tones… / Escalate threads… | Never auto-publish. An operator edits… | Brief, draft, and escalate decision stay linked. | Will not auto-publish digests or posts. |
| Exception | Rank the exception queue… / Suggest a policy disposition… / Draft the case note… | A human handles refunds… | Case timeline keeps policy cite and decision together. | Will not issue refunds… |

## Files (ALLOWED only)

- `components/AtelierConciergeChapter.tsx` — ribbon chips only
- `components/LedgerClerkChapter.tsx` — register chips only
- `components/MorningRemexChapter.tsx` — packet chips only
- `components/ExceptionCopilotChapter.tsx` — spine chips only
- `app/globals.css` — 375 nowrap/balance helpers; spine 3-col; no type shrink
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`, `ops/ITERATION.md`

## Acceptance

- [x] Remaining long decorative chips shortened or wrap cleanly at 375
- [x] Locked ability×3 / gate / record / refusal / CTA / footer unchanged and not hidden
- [x] DNA identity markers retained; no 机羽云/refuse move
- [x] Canvas / shallow / RM / CTA ≥44 unchanged
- [x] `pnpm build` PASS
- [ ] Prod refresh — coordinator after merge

Skills: apple-design, apple-design-web, emil-design-eng, web-design-guidelines, writing-guidelines.

Blockers: none. Await three PM + Leader. No V3-19 until PASS.
