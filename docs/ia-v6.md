# Information architecture V6

Owner corrections on the live V5 commercial site. Later tickets implement this map. V6-0 is docs only.

V5 closed the commercial rebuild. The boutique thesis still holds: Layer A is the services catalog; Layer B is selected examples as proof of method, not SKUs. This file restages **chrome, example surfaces, first viewport, desktop measure, and the Approach roadmap**. Do not reopen a four-SKU shop. Do not reopen the six-pin slogan film.

Locked English lives in `docs/copy-locks.md`. Do not paraphrase SAY lines or the trust-stance paragraph. V6 copy locks supersede V5 where they conflict — especially the geography slogan.

English is a **build constraint**, never a market claim. No founder legal name. No personal site.

---

## Commercial thesis (still holds)

Remex is not a model lab and not a four-product shop.

Remex is a boutique that designs, ships, and tightens custom AI agents for one painful company workflow at a time — with a human gate as the product surface.

**Buyer:** founder / ops lead / GM whose desk already feels broken.

**Vs Copilot Studio / Agentforce / Big-4:** they sell a platform. Remex designs the **job** and the **gate** for a seat that does not fit a template.

An angel or other serious reader in their 60s must still see, in one sitting:

1. A repeatable offer (Layer A — services catalog)
2. A path from first seat to the next seat (engagement + Now / Next / Later)
3. Proof of method via examples (Layer B — not SKUs)
4. How risk is held (gate + record)
5. How to start (Start a brief)

**Extensibility** is one section, never a shipped SaaS claim. Label future as direction only.

Studio base is **mobile**. Do not market geography or “global clients.” Do not invent a replacement location slogan.

---

## 1. Why V6

The live V5 site still fails the owner read on six points. V6 corrects those surfaces. It does not restage the offer.

| Failure | What the live surface does | What the owner needs |
| --- | --- | --- |
| Geo slogan | `Seattle studio. Global clients.` prints sitewide (home, services, work chrome, approach, contact, footer, metadata) | Delete the line everywhere. Studio base is mobile. Do not emphasize geography or “global clients.” Do not replace it with another location slogan. |
| Essay on the teaser | `/work` cards and home examples either dump a long case or jump straight into a long `/work/[desk]` article with no short entry | Two layers: **teaser** (short description + `Read the full example →`) then **story** (`/work/[desk]/story` or equivalent) as a layered essay |
| Nav inconsistency | Home chrome grows a chapter row (four primary + five chapters ≈ nine items). Other routes drop to four primaries with no shared structure | Primary nav **identical on every route**: Work · Services · Approach · Contact. Home chapters are in-page anchors only, or a slim secondary row that does **not** appear or disappear by route |
| Desktop not first-class | 1280 / 1440 crush text, lose a card in empty space, or run an uneven three-column catalog on Approach / Services / home | 1280 / 1440 max-width, grid, column balance. 375 stays usable |
| Home not services-first enough | First viewport is the headline plus a JOB/GATE card. The three buyable services sit below the fold | First viewport must include Design / Build / Operations. The JOB/GATE card cannot be the only object under the headline. Examples stay after services |
| Approach Next wrong | Next reads as deepen the four named desks, or as modules-as-products before method reuse | Now = ship one gated seat. Next = reuse the method (job spec + gate + record) on a new seat. Later = modules / studio products still gated. Four desks stay examples |

Keep from V5: boutique thesis; Layer A before Layer B; Propose → Approve → Record; desk display names; trust stance; `#ffffff` / `#f5f5f7`; frosted nav band; English as build constraint; no Lenis / `normalizeScroll` / body scroll lock.

Kill from V5 chrome and copy: the geography slogan as SAY or footer default; essay-length copy on a teaser card; a home-only chapter bar that vanishes on other routes; Approach Next as “deepen four jobs.”

---

## 2. Primary nav lock + home chapter policy

### 2.1 Primary (identical on every route)

| Item | Href | Notes |
| --- | --- | --- |
| Work | `/work` | Selected examples index (teasers) |
| Services | `/services` | Layer A catalog |
| Approach | `/approach` | Method + roadmap |
| Contact | `/contact` | Start a brief |

Wordmark → `/`. Lab stays off-primary (footer / Prototype). Never put `/demo` in primary nav. Do not add Blog, Pricing, or Team.

The four primary links, their order, and their chrome treatment are **the same on `/`, `/work`, `/services`, `/approach`, `/contact`, story routes, and remaining secondary routes that use site chrome**.

### 2.2 Home chapters

Home chapter links are **not** a second primary set.

Allowed:

1. **In-page anchors only**, placed **below** the primary nav (page body or a home-only band that is not the primary bar), **or**
2. A **slim secondary row** that is present on every route and does **not** appear or disappear by route

Home chapter targets stay in-page: `#home-services`, `#home-method`, `#home-examples`, `#home-brief`, `#home-roadmap` (or the same jobs under V6-5 module ids). They do not become extra primary destinations.

### 2.3 Forbidden chrome

- Swapping a 9-item bar for a 4-item bar with no shared structure
- A home-only chapter row inside the sticky header that vanishes on `/work`, `/services`, `/approach`, or `/contact`
- Route-specific primary labels, counts, or order
- Putting home chapter labels into the primary list on `/` and dropping them elsewhere

V6-2 implements this lock. Do not start V6-2 until V6-0 is PASS.

---

## 3. Example teaser vs story

Examples prove the method. They are not the offer. Index label: **Selected examples**.

Two layers. **Forbidden: an essay on a teaser card.**

### 3.1 Teaser — `/work` + home examples chapter

Short description only. One job, one gate fact, no layered paragraphs, no subheads, no 500-word case.

Every teaser has a clear entry, verbatim:

**Read the full example →**

That entry opens the story. Do not dump the essay on the card. Do not send the teaser into a demo, a lab, or a SKU sell.

Desk display names and slugs stay:

| URL slug (keep) | Display | Gate fact |
| --- | --- | --- |
| `atelier-concierge` | Demand desk | Human before pay |
| `ledger-clerk` | Knowledge desk | Human before execute corpus change |
| `morning-remex` | Attention desk | Priority / Watch / Noise; human before send |
| `exception-copilot` | Exception desk | Human before money moves |

### 3.2 Story — `/work/[desk]/story` (or equivalent)

A layered essay: narrow measure, real paragraphs, subheads. This is the long article. It is not a card.

Under the essay, a **demo still sequence** (media, not more essay), in this ask order:

1. **Ask** — the painful input on the desk
2. **One recommendation** — a single proposed next step (not a pile)
3. **Gate** — the line the agent cannot cross
4. **Record** — proposal, decision, and outcome stay linked

Then the locked closer: **This is one seat. The next brief will be a different job.**

Footer on every story: **Studio study. Client identity anonymized.**
CTA: **Start a brief.** → `/contact`

Existing `/work/[desk]` long cases are the story payload. V6-4 moves them to `/work/[desk]/story` (or keeps that path as the equivalent). If `/work/[desk]` remains, it must not present as a teaser and should 301 (or equivalent) to the story so old links do not become a second essay surface.

### 3.3 Other seats this method fits

Optional band on `/work` only. **Method fits — not shipped products.** Do not turn into SKUs or story pages.

- Support triage
- Vendor onboarding
- Invoice exceptions
- Sales follow-up
- Internal policy Q&A

Four desks stay examples. Other seats do not become a catalog.

---

## 4. Routes map

Primary commercial routes. `/demo` is not in primary nav. Lab is secondary and labeled Prototype.

| Route | Payload |
| --- | --- |
| `/` | First viewport: promise + three buyable services (Design / Build / Operations). Then method (job + gate + record). Then example **teasers** (short + `Read the full example →`). Then how a brief starts. Then Now / Next / Later (V6 rewrite). Then Start a brief. No geography slogan. |
| `/services` | Full catalog (design / build / operations) + engagement shape + for / not-for + trust stance + FAQ. Desktop 1280 / 1440 column balance. No geography slogan. |
| `/work` | **Selected examples** teasers only (+ optional other-seats band). Short description + `Read the full example →`. No essays on cards. |
| `/work/atelier-concierge/story` | Demand desk — layered essay + still sequence (ask → one recommendation → gate → record) |
| `/work/ledger-clerk/story` | Knowledge desk — same story shape |
| `/work/morning-remex/story` | Attention desk — same story shape |
| `/work/exception-copilot/story` | Exception desk — same story shape |
| `/work/[desk]` | Equivalent or 301 → `/work/[desk]/story`. Not a teaser. |
| `/approach` | Method + name meaning once + refuse + extensibility (Now / Next / Later rewrite). Legal: Jiyuyun Studio LLC. **No** Seattle / global-clients line. Desktop 1280 / 1440 column balance. |
| `/contact` | Brief form: workflow / who approves / never-do / record + `hello@remexstudio.com`. No geography slogan. |

### 4.1 Home `/` module order (services in the first viewport)

| # | Module | Fact it must carry |
| --- | --- | --- |
| 1 | First viewport | Locked promise **and** three buyable services (Design / Build / Operations). JOB/GATE media may support; it cannot be the only object under the headline. |
| 2 | Method / gate | Job + gate + Propose → Approve → Record |
| 3 | Example teasers | Four desks as proof: short description + `Read the full example →` |
| 4 | How a brief starts | Workflow / who approves / never-do / record |
| 5 | Now / Next / Later | V6 roadmap (see §7). Direction only. |
| 6 | Start a brief | CTA → `/contact`. No location slogan. |

Examples stay **after** services. Home must not lead with four SKUs. Teasers are proof after the offer.

≥3 distinct layout grammars. Ban six isomorphic pins. Ban chip-as-page. Ban horizontal chip rails as the home hero.

### 4.2 `/services`

Unchanged commercial payload from V5, plus the V6 desktop contract and geo kill:

- Catalog: Agent product design, Agent build, Agent operations
- Engagement shape labels in order
- For / Not for
- Trust stance (locked paragraph)
- FAQ (plain English; no fake badges)
- CTA: Start a brief.

### 4.3 `/work` and stories

- Index title: **Selected examples**
- Cards: desk display names, short description, verbatim entry
- Optional “Other seats this method fits”
- No “Open demo”
- Stories follow §3.2

### 4.4 `/approach`

- Method with substance (design the job / build the gate / keep the record)
- Name meaning **once** (glyphs only here in UI)
- Legal: Jiyuyun Studio LLC
- **Do not print** `Seattle studio. Global clients.` or a replacement place line
- What we refuse
- Extensibility Now / Next / Later (V6 rewrite; home shows the three-beat summary)

### 4.5 `/contact`

Form fields map to the brief. Also: `hello@remexstudio.com`. Reply when there is a fit. No prices. No invented week counts. No geography slogan.

### 4.6 Secondary / existing, not restaged as commercial primary

| Route | V6 stance |
| --- | --- |
| `/lab`, `/lab/pulse` | Prototype only. Secondary. Labeled Prototype. Not a client engagement. |
| `/demo` and `/demo/*` | Not primary nav. Existing 301s to `/lab` stay until a later ticket says otherwise. |
| `/about` | Studio + legal if it remains. Not a team page. No founder legal name. No geography slogan. |

---

## 5. Desktop layout contract (1280 / 1440) + 375

Desktop is first-class. 375 stays usable. V6-3 implements Approach + Services (+ home). V6-6 re-checks 375.

### 5.1 1280 / 1440

At **1280** and **1440**, marketing shells use a first-class max-width (do not leave a 42rem column floating in a wide stage, and do not stretch a single card across empty space).

| Rule | Meaning |
| --- | --- |
| Max-width | Stage to 1280 / 1440. Grid inside that measure. |
| Column balance | Approach, Services, and home catalogs share even columns. No uneven three-column catalog. |
| Type | No crushed text. Body and display keep a readable measure. |
| Cards | No single card lost in empty space. No one orphan column. |
| Services / home | Design / Build / Operations read as three equal buyable beats, not a leftover third. |

Grammar awareness from Apple / Emil / GSAP / zero-jank / review-animations / web-design-guidelines. No app work in V6-0.

### 5.2 375 still usable

- Collapsed nav (primary four stay available; no chip-rail wrap)
- Stacked modules; still above copy
- **No horizontal chip rails**
- Hit targets **≥44px**
- Forms usable: visible labels, full-width fields, no horizontal trap
- Type remains readable

### 5.3 Materials (unchanged craft)

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#ffffff` | Default page / product stage |
| Gutter | `#f5f5f7` | Section gutters, rails, soft bands |
| CTA | existing `--cta` | CTA fill only — never a page wash |

- **Nav:** 44–48px sticky frosted bar (`backdrop-filter` blur + saturate). Hairline under the bar.
- **Rules:** hairlines, not heavy cards. Stills are **media**, not chip stacks pretending to be a page.
- **Hard ban (scroll stack):** no Lenis, no ScrollTrigger `normalizeScroll`, no `body` / `html` overflow lock while pinned. Native scroll. Zero jank.
- `prefers-reduced-motion`: full payload still readable (static stack).

---

## 6. Home first-viewport contract

V6-5 implements this. Do not hide the offer behind a JOB/GATE still.

**In the first viewport the reader must see:**

1. The locked promise (wayfinding headline / support lines from copy-locks)
2. **Three buyable services** — Design / Build / Operations — mapping to Agent product design, Agent build, Agent operations

The JOB/GATE card **cannot** be the only object under the headline. It may sit beside or under the three services as supporting media. It may not replace them.

Examples stay **after** services. Do not pull Selected examples into the first viewport to fill space.

---

## 7. Approach Now / Next / Later rewrite

Print once on home (summary) and once on `/approach` (detail). Never as a product catalog. **Do not deepen the four named jobs.**

| Beat | Direction |
| --- | --- |
| **Now** | Ship one gated seat. One workflow. One agent. A human still decides. |
| **Next** | Reuse the method — job spec + gate + record — on a **new** seat. Not “go deeper on Demand / Knowledge / Attention / Exception.” Not four SKUs. |
| **Later** | Modules / studio-owned products that still ship with a gate. Direction only. |

Four desks stay examples. Other seats = method fits, not shipped products.

No dates. No store. No “coming soon” product grid.

V6-6 implements the rewrite and the 375 regression.

---

## 8. Slice map (planned — owner brief)

Planned map for later Leader tickets. **Not issued except V6-0.** Do not start V6-1 until V6-0 is PASS. Leader writes one TASK at a time; order below is the intended correction, not a license to skip the gate.

| ID | Slice | Intent |
| --- | --- | --- |
| V6-0 | Docs | `docs/ia-v6.md` + `docs/copy-locks.md` (this ticket) |
| V6-1 | Geo kill | strip Seattle studio. Global clients. sitewide |
| V6-2 | Header | unify header: identical 4 primary links every route |
| V6-3 | Desktop | desktop 1280/1440 Approach + Services (+ home) |
| V6-4 | Examples | /work short teasers + /work/[desk]/story long + stills |
| V6-5 | Home | home first viewport three services; examples after |
| V6-6 | Approach + 375 | Approach roadmap rewrite; 375 regression |

`ops/BACKLOG.md` lists the same owner order. Leader’s issued TASK always wins for the active slice. Do not start next until PASS.

---

## 9. Hard bans

Never in V6 UI or V6 docs that implementers will copy into UI:

- `Seattle studio. Global clients.` anywhere (home, services, work, approach, contact, footer, metadata)
- A replacement geography / “global clients” / “mobile studio” slogan
- Four-SKU shop framing (“we only build these four agents,” “our four products,” productized Concierge / Clerk / Morning / Copilot as the catalog)
- Deepening the four named desks as the Approach Next
- English-first / English products / English-speaking markets (English is a build constraint only)
- Essay on a teaser card; long article copy on `/work` or home example cards
- Swapping a 9-item bar for a 4-item bar with no shared structure
- Fake metrics, fake percentages, real-brand logos
- Founder legal name; personal site; phone; school list
- Employment at study brands (Lumen / Northline / Kite / Paperline)
- CumuLabs; cloud-migration factory; outsourcing body shop
- SOC 2 / ISO badges we do not have
- Invented week counts or prices
- ChatGPT for X as an offer
- We replace your team
- Blog, pricing page, team page (Studio v1 / V6)
- Purple gradient AI-SaaS; chatbot widgets; neon / robots as “tech”
- Lenis; ScrollTrigger `normalizeScroll`; `body` / `html` scroll lock
- Chip rails as page hero; chip-as-page
- Six isomorphic pins; pin that does not reveal a new fact
- Future tools sold as shipped SaaS

---

## 10. Reduced motion / a11y (IA contract)

- `prefers-reduced-motion`: full commercial payload (offer, path, proof, risk, start) stays readable
- Transform / opacity only for motion
- Escape hatches: footer + nav always reachable; no scroll hijack
- Visible focus rings; labeled form fields
- Skip link targets `#main`

---

## 11. Supersession

| Source | Status under V6 |
| --- | --- |
| `docs/ia-v6.md` (this file) | Chrome, example surfaces, first viewport, desktop measure, and Approach roadmap source of truth |
| `docs/copy-locks.md` | Locked English source of truth. V6 geo kill and teaser entry supersede V5 SAY / footer defaults. |
| `docs/ia-v5.md` | Historical commercial thesis. KEEP Layer A / Layer B, desk seeds, engagement shape, trust. KILL geo slogan, essay-on-teaser, home-only chapter chrome, Approach Next as four-job deepen, and any first-viewport that is JOB/GATE only. |
| `docs/ia-v3.md` | Historical. KEEP craft tokens and uniqueness seeds. KILL four-SKU home and product-shop framing where they conflict. |
| `docs/scroll-score-v3.md` | Historical motion score. V6 home module ids and pin rules in this file win when they conflict. |
| `docs/sitemap.md` | Route inventory. Story routes and primary-nav jobs follow this file until a later ticket rewrites the sitemap. |
| `docs/design.md` | Tokens. 1280 / 1440 first-class measure wins for V6-3+. |
