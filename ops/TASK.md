# TASK V5-0 — docs only: IA + copy locks for commercial rebuild

TASK ID: V5-0
REPO: remexstudio/remex-atelier
GOAL: Write `docs/ia-v5.md` and rewrite `docs/copy-locks.md` so later slices implement a buyer showcase + serious studio surface. Docs only. No `app/` or `components/` edits.

## Commercial thesis (do not dilute in the docs)

Remex is not a model lab and not a four-product shop.
Remex is a boutique that designs, ships, and tightens custom AI agents for one painful company workflow at a time — with a human gate as the product surface.

Buyer: founder / ops lead / GM whose desk already feels broken.

Vs Copilot Studio / Agentforce / Big-4: they sell a platform; Remex designs the JOB and the GATE for a seat that does not fit a template.

Angel / serious reader in 60s must see: (1) repeatable offer, (2) path first seat → next seats / later tools, (3) proof of method via examples, (4) how risk is held (gate + record), (5) how to start. Not a student portfolio of four widgets.

Extensibility (one section, never as shipped SaaS):
- Now: scoped custom agents (services revenue)
- Next: repeated modules become internal tools / small products
- Later: studio-owned products that still ship with a gate
Label future as direction only.

English is a **build constraint**, never a market claim. No founder legal name. No personal site.

## ALLOWED FILES

- `docs/ia-v5.md` (create)
- `docs/copy-locks.md` (rewrite; keep SAY/DO NOT SAY structure; supersede V3 locks that conflict with V5 thesis)
- `ops/HANDOFF.md`
- `ops/STATUS.md` (optional one-line phase note only)

## OUT OF SCOPE

- Any `app/`, `components/`, `lib/`, CSS, nav wiring
- V5-1…V5-5 implementation
- Inventing prices, week counts, SOC2/ISO, named customers, quotes, percentages
- Relabeling routes in code (docs map only)

## `docs/ia-v5.md` must include

1. **Why V5** — live site failed as four-SKU / slogan-thin / not mobile / not Apple product-page. V3 craft closed; V5 restages commercial layer.
2. **Layer A — Services catalog** (primary; home BEFORE examples):
   - Agent product design — who, deliverable, refuse, done state
   - Agent build — Propose → Approve → Record; may draft/retrieve/route/classify/queue; may not silently move money / publish / delete
   - Agent operations — evals, tighter gates, better records; next seat only when first gate holds
   - Engagement shape: Start a brief → Design job+gate → Ship first seat → Operate / decide second seat
   - For / Not for
   - Trust stance (plain English; no fake compliance badges)
3. **Layer B — Selected examples** (proof of method, not SKUs):
   - Demand desk (was Concierge) — human before pay
   - Knowledge desk (was Clerk) — human before execute corpus change
   - Attention desk (was Morning Remex) — Priority/Watch/Noise; human before send
   - Exception desk (was Copilot) — human before money moves
   - Each page shape: context → 500–800w narrative → 4–6 captioned stills → “This is one seat. The next brief will be a different job.”
   - Optional on `/work`: “Other seats this method fits” (support triage, vendor onboarding, invoice exceptions, sales follow-up, internal policy Q&A) — method fits, not shipped products
4. **Routes map**
   - `/` — services → method → 4 example teasers → how brief starts → Now/Next/Later → Start a brief
   - `/services` — catalog + engagement + for/not-for + trust + FAQ
   - `/work` — Selected examples index (+ optional other seats)
   - `/work/*` — long case + stills (keep existing URL slugs unless a later ticket renames; docs may note display names Demand/Knowledge/Attention/Exception desk)
   - `/approach` — method + name meaning once + refuse + extensibility
   - `/contact` — brief form: workflow / who approves / never-do / record + hello@remexstudio.com
   - `/demo` not in primary nav; Lab secondary, labeled prototype
5. **Visual / mobile contract** (reference for later tickets)
   - Canvas `#ffffff` / gutter `#f5f5f7`; SF-like sans; large negative-tracking display; 44–48px frosted nav; hairlines; stills as media; CTA-only accent
   - Kill warm-paper magazine as primary grammar; kill chip-as-page
   - Varied modules; no six isomorphic pins; pin only to reveal a NEW fact
   - 375: collapsed nav, stacked modules, no horizontal chip rails, ≥44px targets, forms usable
   - Tech feel = gate stills + type + chapter rhythm — not neon/robots
6. **Slice map** V5-0…V5-5 as owner brief
7. **Hard bans** — four-SKU shop framing; English-first market claims; fake metrics/logos; founder name; employment at study brands; Lenis / normalizeScroll / body scroll lock; chip rails as page hero

## `docs/copy-locks.md` must include

### SAY (verbatim)

- Agents, built to the brief.
- One workflow. One agent. A human still decides.
- We design the job an agent is allowed to do — and the gate it cannot cross.
- Seattle studio. Global clients.
- Start a brief.
- Legal: Jiyuyun Studio LLC
- Propose / Approve / Record mechanism bullets (keep V3 mechanism language if still accurate; align “human still decides”)
- Remex Studio designs custom AI agents as products. (keep if not conflicting)
- Engagement shape labels as above

### DO NOT SAY

- English-first / English products / English-speaking markets
- We only build these four agents / our four products (as SKUs)
- ChatGPT for X as an offer
- We replace your team
- Fake % / real logos / founder legal name / employment at study brands
- CumuLabs / cloud-migration factory / outsourcing body shop
- SOC2 / ISO badges we do not have
- Invented week counts or prices

### Desk display names (examples layer)

| URL slug (keep) | Display |
| --- | --- |
| atelier-concierge | Demand desk |
| ledger-clerk | Knowledge desk |
| morning-remex | Attention desk |
| exception-copilot | Exception desk |

Index label: **Selected examples** (not “Products” / “Our agents”).

### Trust stance (locked paragraph — paraphrase forbidden in UI)

Client data is used to do the job, not to train a Remex foundation model. Irreversible actions stay behind a named person. Every proposal keeps a reopenable record.

## ACCEPTANCE

- [ ] `docs/ia-v5.md` exists and covers thesis, Layer A, Layer B, routes, visual/mobile, slices, bans
- [ ] `docs/copy-locks.md` rewritten with V5 SAY / DO NOT SAY / desk names / trust stance
- [ ] No `app/` or `components/` changes
- [ ] English only in both docs (no Chinese in git artifacts)
- [ ] `ops/HANDOFF.md` filled; commit + push; declare DEV PASS or DEV REWORK

## SKILLS TO USE

Docs ticket — read for grammar awareness only (no app code):
`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`docs(v5): add ia-v5 and rewrite copy locks for commercial rebuild`
