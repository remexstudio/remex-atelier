# Canon

Company spirit and site construction doctrine for the Canon Cycle.

This file is the source for how Remex names itself, what it sells, and how the marketing site is built. It does not change live pages. Slices C1–C5 implement it. C0 is this document only.

English in git and on the site is a build rule. It is not a market claim.

When this file conflicts with an older geography line in `docs/brand.md` or early IA (“A Seattle studio.”, “Seattle studio. Global clients.”), this file wins for Canon Cycle work. Verbatim SAY lines in `docs/copy-locks.md` still govern UI strings until the slice that is allowed to change them.

---

## Company spirit

### Names

Three names. They are not interchangeable, and none of them is a slogan.

| Name | Form | Validity | Where the site prints it |
| --- | --- | --- | --- |
| English | Remex Studio | Valid everywhere | Product lockup, footer product close, Approach, and any surface that names the studio |
| Chinese | 机羽云 Studio | Valid everywhere | Approach, and the footer legal row. It does not replace Remex Studio |
| Legal | Jiyuyun Studio LLC | The legal entity | Approach and the footer legal row, always **with** Remex Studio. Never alone, as if it were the only name |

“Valid everywhere” means the name is a real name of the studio in any channel: conversation, documents, legal, and the site. It does not mean every UI string switches language. Site UI stays English except the printed name rows named above.

On Approach, print all three together:

**Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC**

The legal entity is the company behind Remex Studio. It is not a substitute lockup.

### Etymology

- **Remex** = remiges. Flight feathers. The control surface.
- **机** = machine.
- **羽** = remex / control.
- **云** = where the work runs.

Say this once, on Approach, with the three names. Do not turn the etymology into a second headline on every page.

### Spirit

Do not sell hours. Do not sell a chat widget. Do not sell a platform.

Hire an agent for one painful desk.

The product is the job plus the gate.

The agent proposes. A named person approves. The record stays.

Irreversible actions stay behind that named person. The proposal, the decision, and the outcome stay linked so the team can reopen them.

### Positioning

Remex is not a model lab and not a four-product shop.

| Path | What they sell | What Remex sells instead |
| --- | --- | --- |
| Off-the-shelf | A template agent, a chatbot widget, a “ChatGPT for X” wrapper | One painful desk that does not fit the template. The job and the gate are designed for that desk |
| Giant custom | Hours, a staffed body shop, an unbounded build | A bounded product: one job and the gate around it. Not a clock |
| Platforms | A platform the client has to live inside | Not a platform. One agent, hired for one desk, with a human still deciding |

The catalog is how that hire is bought. The examples are proof that the method has been done. They are not the offer.

### Now / Next / Later

Direction, not a store. Do not sell this sequence as shipped SaaS, a module shop, or a roadmap of four desks.

| Beat | Meaning |
| --- | --- |
| Now | One gated seat |
| Next | Reuse the method (job spec + gate + record) on a new seat |
| Later | Modules that still ship with a gate |

Do not write Next as “deepen these four desks” or as a four-SKU roadmap.

### Ban

Never print these on the marketing site:

- A Seattle shop geography slogan, including “A Seattle studio.” and “Seattle studio. Global clients.”
- A “global clients” slogan, or any replacement location slogan
- The founder’s legal name, phone, personal site, or school list
- English-first as a market claim: “English-first”, “English products”, “English-speaking markets”, or the like
- Only-four-agents: “we only build these four agents”, “our four products”, “our four agents”
- The four desks as SKUs. Demand, Knowledge, Attention, and Exception are selected examples of the method, not the catalog

Also still banned: fake percentages, real-brand logos, purple-gradient AI-SaaS templates, chatbot widgets, blog, pricing, and a team page during this cycle.

---

## What the site is for

A buyer who never opens Work must still be able to answer four questions:

1. **What we sell** — Design, Build, and Operations. An agent hired for one painful desk. The product is the job and the gate.
2. **Who it is for** — the person who owns that desk and can name the workflow, who approves, and what the agent may never do.
3. **What the gate is** — the agent proposes; a named person approves; the record stays.
4. **What next** — Start a brief. Ship one gated seat. The next seat reuses the method. Later modules stay gated. Direction, not a store.

Work can prove the method. It is not required to learn the offer.

### Catalog

The offer is three names:

- **Design**
- **Build**
- **Operations**

Those are the first-viewport short labels. Do not print Agent Apps / Agent Ops / Advisory as the catalog.

### Four desks

The four desks are selected examples of the method. They are not SKUs.

| URL slug (keep) | Display |
| --- | --- |
| `atelier-concierge` | Demand desk |
| `ledger-clerk` | Knowledge desk |
| `morning-remex` | Attention desk |
| `exception-copilot` | Exception desk |

Index label: **Selected examples**. Not “Products”. Not “Our agents”.

### English on the site

English on the site is a build rule: source language, commits, and UI strings. It is never a market claim. Do not say we are English-first.

The Chinese name is valid everywhere as a name. On the site it prints on Approach and in the footer legal row, beside Remex Studio. Other chrome stays English.

### Visual grammar

Use apple.com product-page grammar. Do not use Apple assets, Apple logos, or an Apple template kit.

- **STAGE is the media.** The gate is a stage the buyer can see, not a text card pretending to be a product.
- **One new fact per chapter.** A chapter earns its place by adding a fact the previous chapter did not already show.
- **Four-link nav, identical on every route:** Work · Services · Approach · Contact.
- **Black pill CTA.** Fill `#1d1d1f`. Label: Start a brief.
- **Ground:** `#fff` canvas, `#f5f5f7` gutter, `#1d1d1f` ink and pill.

Primary nav does not grow a second system. Home chapters, if any, stay in the page. They are not extra primary links.

---

## Construction tests

These are the tests later slices must pass. C0 only writes them down.

### 1. First viewport

The first viewport shows all of:

- the headline
- the gate STAGE
- the three service names (Design, Build, Operations)
- Start a brief

Fail if the first viewport is a text card pretending to be the product.

### 2. Anti-wallpaper

Do not repeat the same stage and the same three sentences on every chapter.

Each chapter adds one new fact. A second copy of the home stage is not a chapter.

### 3. Footer is the product close

The footer closes the product. It is not a second site.

- Product line: **Remex Studio**
- Quiet legal row: **Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC**
- Wayfinding: **Work · Services · Approach · Contact**
- Prototype and About may be quiet text links only

**Never** a gray Prototype / About slab as a second visual system. No filled gray panel, no alternate button row, no second nav that looks like another product.

### 4. Approach prints the three names

Approach prints Remex Studio, 机羽云 Studio, and Jiyuyun Studio LLC together.

Jiyuyun Studio LLC does not appear there alone, as if it were the only name.

---

## Slice map

Reference only. Do not start the next slice inside the previous PR.

| ID | Slice | Owns |
| --- | --- | --- |
| C0 | This file | `docs/CANON.md` and the ops stamp that opens the cycle |
| C1 | Product footer | Footer becomes the product close in test 3 |
| C2 | Approach legal | Approach prints the three names in test 4 |
| C3 | Home, one stage, one loop | First viewport is test 1; chapters obey test 2 |
| C4 | Stage scroll motion | The gate STAGE moves as media, still one fact per chapter |
| C5 | Inner pages | Services, Work, Approach, and Contact obey the same grammar without cloning the home stage |

### Out of scope for C0

- `app/`
- `components/`
- Footer UI (C1)
- Approach page edit (C2)
- Any live copy rewrite (C1–C5)

---

## Precedence

1. This file governs company spirit and construction for the Canon Cycle.
2. `docs/copy-locks.md` still governs verbatim UI strings until a slice is allowed to change them.
3. Older IA that prints a Seattle or “global clients” line does not override the ban in this file.
4. C1 implements the footer. C2 implements Approach legal print. C3–C5 implement home, motion, and inner pages. None of those start in the C0 change.
