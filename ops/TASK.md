# TASK V5-1 — /services full catalog

TASK ID: V5-1
REPO: remexstudio/remex-atelier
BASE: tip after V5-0 PASS (`d4d7088` or newer main)
GOAL: Implement `/services` as the commercial catalog page per `docs/ia-v5.md` §4.2 and `docs/copy-locks.md`. Film canvas. Not a four-SKU shop. Not warm-paper magazine.

## Must ship on `/services`

1. **Catalog** — three lines in paragraphs (who / deliverable / refuse / done):
   - Agent product design
   - Agent build (Propose → Approve → Record; may draft/retrieve/route/classify/queue; may not silently move money/publish/delete)
   - Agent operations (evals, tighter gates, better records; next seat only when first gate holds)
2. **Engagement shape** (verbatim labels): Start a brief → Design job+gate → Ship first seat → Operate / decide second seat
3. **For / Not for** (from ia-v5 + locked refuse list)
4. **Trust stance** — locked paragraph verbatim (no paraphrase, no SOC2/ISO)
5. **FAQ** (plain English): platform vs Remex; do you sell four agents?; after first seat?; how is risk held?; how do we start?
6. **CTA** — Start a brief. → `/contact`
7. Optional short note: first seats are narrowly scoped; **no** invented week counts or prices

## Visual / UX

- Canvas `#ffffff` / gutter `#f5f5f7`; SF-like sans; large negative-tracking display; hairlines; frosted nav already in shell
- Varied modules (≥2 grammars on page): hero + method columns or split still+copy + FAQ stack — **not** chip-as-page, **not** horizontal chip rail
- 375: stacked, ≥44px targets, readable; no horizontal chip rails
- `prefers-reduced-motion`: full catalog + FAQ + trust still visible
- No Lenis / normalizeScroll / body scroll lock

## Nav / chrome (minimal if needed)

- Primary nav must include **Services** and reach `/services`
- `/demo` not in primary nav
- Lab secondary / Prototype if touched
- Do not rewrite home, work cases, or approach narratives in this ticket

## ALLOWED FILES

- `app/services/page.tsx`
- `app/globals.css` (services-only tokens/classes)
- `components/SiteChrome.tsx` (nav link label/order only if required)
- `lib/` only if extracting shared catalog/FAQ constants (English)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Home rebuild (V5-3)
- `/work` long cases (V5-2)
- Approach rewrite, contact form field rewrite beyond linking CTA
- Inventing prices, weeks, SOC2/ISO, named customers
- Personal site / founder name

## ACCEPTANCE

- [ ] `/services` shows three catalog lines with who/deliverable/refuse/done
- [ ] Engagement shape labels verbatim
- [ ] For/Not for + trust paragraph locked + FAQ + Start a brief CTA
- [ ] No four-SKU framing; no Agent Apps/Ops/Advisory as catalog
- [ ] Film canvas; 375 usable; no chip-as-page hero
- [ ] Copy matches `docs/copy-locks.md` SAY lines where used
- [ ] typecheck/lint clean; commit + push; HANDOFF; DEV PASS; do not open V5-2

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`feat(services): ship V5 catalog engagement trust and FAQ`
