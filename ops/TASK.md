# TASK V6-4 — short /work teasers + /work/[desk]/story long + stills

TASK ID: V6-4
REPO: remexstudio/remex-atelier
BASE: tip after V6-3 PASS (`a327326` or newer main)
GOAL: Split examples into two surfaces per `docs/ia-v6.md` §3 and `docs/copy-locks.md`. Teasers stay short. Long essay + demo stills live on `/work/[desk]/story`. Forbidden: essay dumped on the index card.

## Display names (unchanged)

| URL slug | Display |
| --- | --- |
| atelier-concierge | Demand desk |
| ledger-clerk | Knowledge desk |
| morning-remex | Attention desk |
| exception-copilot | Exception desk |

## `/work` — teaser index only

- Title: Selected examples
- Each card: desk display name + **short** description (≈1–3 sentences / gate one-liner) + still thumbnail optional
- Clear entry link verbatim: **`Read the full example →`** → `/work/[desk]/story`
- Optional other-seats band: method fits, not shipped products
- No 500–800w narrative on the card; no Open demo

## `/work/[desk]/story` — long-form

- Layered essay: narrow reading measure, real paragraphs, subheads (reuse existing narrative payload from `lib/selected-examples.ts` / chapters — do not invent named customers or %)
- Under the essay: **demo still sequence** captioned to the story beat: **ask → one recommendation → gate → record** (4–6 frames OK; DNA distinct per desk)
- Closer verbatim: `This is one seat. The next brief will be a different job.`
- Study footer + `Start a brief.` → `/contact`
- Film canvas; media-stage stills (not chip-as-page)

## `/work/[desk]` (landing)

- Either 301 (or Next redirect) to `/work/[desk]/story`, **or** a short landing that immediately offers `Read the full example →` / auto-forwards
- Must not remain a second full essay surface that duplicates the story

## Home examples chapter

- If home still links teasers: same short + `Read the full example →` pattern (full first-viewport services reorder is **V6-5** — here only ensure home example entries do not dump long essays)

## ALLOWED FILES

- `app/work/page.tsx`
- `app/work/*/page.tsx` (redirects / short landings)
- `app/work/*/story/page.tsx` (create)
- `components/*Chapter.tsx` (move/adapt for story route)
- `lib/selected-examples.ts` (teaser short vs narrative split helpers)
- `components/HomeScenes.tsx` (example teaser links/copy only)
- `app/globals.css` (teaser / story typography)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- V6-5 home first-viewport three services reorder
- V6-6 Approach Next rewrite
- Changing desk DNA facts or inventing metrics

## ACCEPTANCE

- [ ] `/work` is short teasers + `Read the full example →` only
- [ ] Four `/work/[desk]/story` pages: layered essay + ask→recommend→gate→record stills + locked closer
- [ ] Old `/work/[desk]` does not keep a duplicate full essay (redirect or short landing)
- [ ] No essay-on-teaser-card; DNA distinct; film stills
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod` + smoke story URLs
- [ ] HANDOFF; DEV PASS; do not open V6-5

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`feat(work): split teasers from story pages with still sequences`
