# TASK V5-2 — Selected examples + four long cases

TASK ID: V5-2
REPO: remexstudio/remex-atelier
BASE: tip after V5-1 PASS (`e46a3b6` or newer main)
GOAL: Relabel `/work` as **Selected examples** (proof of method, not SKUs). Rewrite four chapter pages as long written cases + captioned stills per `docs/ia-v5.md` §3 and `docs/copy-locks.md`. Keep URL slugs. Change **display names** only.

## Display names (locked)

| URL slug (keep) | Display |
| --- | --- |
| `/work/atelier-concierge` | Demand desk |
| `/work/ledger-clerk` | Knowledge desk |
| `/work/morning-remex` | Attention desk |
| `/work/exception-copilot` | Exception desk |

Never print Atelier Concierge / Ledger Clerk / Morning Remex / Exception Copilot as shop SKU titles.
Index label: **Selected examples** (not Products / Our agents / Work as product wall).

## `/work` index

- Title / H1 framing: Selected examples
- Cards use desk display names + one-line method proof (gate fact), not product SKU chrome
- Optional band: **Other seats this method fits** — Support triage; Vendor onboarding; Invoice exceptions; Sales follow-up; Internal policy Q&A — labeled method fits, **not shipped products**
- No “Open demo”; no four-SKU shop language
- Film canvas; stills as media; 375 stacked; ≥44 targets

## Each `/work/*` page shape (required)

1. **Context** — seat + constraint (desk DNA from ia-v5 §3.2)
2. **Narrative** — 500–800 English words: pain, design choices, what the agent may do, the gate, the record, what we refused. Unique abilities / gate / record / refusal — not interchangeable across desks.
3. **Stills** — 4–6 captioned stills under the article (media frames, not chip-as-page heroes)
4. **Closer (verbatim):** This is one seat. The next brief will be a different job.
5. Footer pattern: Studio study. Client identity anonymized.
6. CTA: Start a brief. → `/contact`

### Desk DNA (must stay distinct)

**Demand desk** — human before pay; may map occasion→one hero / stage try-on / draft bag; refuse invent SKUs / charge without approval; record consult+ticket

**Knowledge desk** — human before execute corpus change; corpus-only + citations + Propose package; refuse answer outside corpus / Execute writes; record audit log

**Attention desk** — Priority/Watch/Noise + two draft tones; human before send; refuse auto-publish; record brief+draft+escalate

**Exception desk** — queue + policy suggestion + case note; human before money moves; refuse refunds/money without human; record case timeline

## Visual / UX

- Film `#fff/#f5f5f7`; large negative-tracking display for desk H1; hairlines; shallow scroll (no long pin traps; no Lenis)
- Kill chip-as-page as the primary chapter grammar; stills under article
- 375: stacked narrative + stills; no horizontal chip rails; full text readable under reduced-motion
- Nav label may stay “Work” in primary chrome (route `/work`) while page title is Selected examples — or soft-label “Examples” only if it does not confuse; do not invent new primary routes

## ALLOWED FILES

- `app/work/page.tsx`
- `app/work/atelier-concierge/page.tsx`
- `app/work/ledger-clerk/page.tsx`
- `app/work/morning-remex/page.tsx`
- `app/work/exception-copilot/page.tsx`
- `components/AtelierConciergeChapter.tsx`
- `components/LedgerClerkChapter.tsx`
- `components/MorningRemexChapter.tsx`
- `components/ExceptionCopilotChapter.tsx`
- `app/globals.css` (work/example-only classes)
- `lib/` for shared example constants (English)
- `components/SiteChrome.tsx` only if index/nav microcopy needs Selected examples alignment
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Home rebuild (V5-3)
- `/services` rewrite (already PASS)
- Approach rewrite, contact form schema beyond CTA link
- 375 nav collapse (V5-4 soft carry)
- Inventing named customers, quotes, percentages, prices, week counts
- Renaming URL slugs

## ACCEPTANCE

- [ ] `/work` is Selected examples; cards use desk display names; optional other-seats band labeled method-fits
- [ ] Four chapters: context + 500–800w unique narrative + 4–6 captioned stills + locked closer + study footer + Start a brief CTA
- [ ] DNA distinct; no interchangeable copy; no four-SKU shop framing
- [ ] Film canvas; no chip-as-page hero; no Lenis; 375 readable
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod` + smoke
- [ ] HANDOFF; DEV PASS; do not open V5-3

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`feat(work): rewrite selected examples as long cases with stills`
