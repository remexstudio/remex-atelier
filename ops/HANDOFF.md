# Handoff V3-16

- Status: delivered — PM board lock checked
- Content SHA: `04c535d`
- Tip: `b0f21c0` (this stamp follows)
- Preview: https://remex-atelier.vercel.app
- PR: https://github.com/remexstudio/remex-atelier/pull/8
- Deploy: coordinator `vercel deploy --prod` after merge (not run in this slice)

## PM board lock

1. **still-fact at 375** — `0.8125rem` (13px). Desktop ≥720: `0.875rem` (14px). Kicker stays `0.6875rem`. Headlines remain 24–48px. Does not compete with titles.
2. **Four chapters quieter** — decorative swatches / SKU mark / ticket + thread dots removed. Text-bearing `__row`s kept. CTAs `min-height: 44px`, `:focus-visible`, 40px air from locked headline. No empty gray-bar return.
3. **Locked DNA visible** — ability×3 / gate / record / refusal remain in document order on all four chapters. Nothing hidden with `display: none` / absolute-stack. `aria-hidden` only on decorative stills; score lines stay in headings / ability copy.
4. **Hard stay** — no locked-line copy edits; no 机羽云 / refuse list move; canvas `#ffffff` / gutter `#f5f5f7`; shallow once-reveal; RM `showStatic`; pinOk home-only. BRIEF_ASKS single-source.

### DNA inventory (verbatim, still on page)

| Chapter | Ability×3 | Gate | Record | Refusal |
| --- | --- | --- | --- | --- |
| Concierge | Map skin… / Stage a try-on… / Draft the bag… | Human at pay. A stylist approves… | Consult thread stays with ticket LUM-1042. | Will not invent catalog SKUs… |
| Ledger | Answer from the corpus only. / Attach citations… / Package a Propose draft. Never Execute. | Approve or Reject by a named controller… | Ask, citation, and decision sit in one audit log. | Will not answer outside the corpus… |
| Morning | Sort threads into Priority, Watch, and Noise. / Draft in two tones… / Escalate threads… | Never auto-publish. An operator edits… | Brief, draft, and escalate decision stay linked. | Will not auto-publish digests or posts. |
| Exception | Rank the exception queue… / Suggest a policy disposition… / Draft the case note… | A human handles refunds… | Case timeline keeps policy cite and decision together. | Will not issue refunds… |

## Files (ALLOWED only)

- `app/globals.css` — `.still-fact` type; chapter CTA air + ≥44 / focus-visible; quieter chrome
- `components/AtelierConciergeChapter.tsx` — drop decorative only; `chapter-cta`
- `components/LedgerClerkChapter.tsx` — `chapter-cta`
- `components/MorningRemexChapter.tsx` — drop thread dots; `chapter-cta`
- `components/ExceptionCopilotChapter.tsx` — `chapter-cta`
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`, `ops/ITERATION.md`

## Acceptance

- [x] `.still-fact` 0.8125–0.875rem; hierarchy under titles intact
- [x] Four chapters quieter; CTAs ≥44; no empty gray-bar return
- [x] Ability×3 / gate / record / refusal not hidden
- [x] Locked lines unchanged; no 机羽云/refuse move; BRIEF_ASKS single-source
- [x] `pnpm build` PASS
- [ ] Prod refresh — coordinator after merge

Skills: apple-design, emil-design-eng, web-design-guidelines, writing-guidelines, review-animations.

Blockers: none. Await three PM + Leader. No V3-17 until PASS.
