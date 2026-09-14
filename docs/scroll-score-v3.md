# Scroll score V3

Marketing stills only. No live widgets, fake checkout, real refunds, or auto-posting. Prefer transform/opacity. Respect `prefers-reduced-motion`: full payload stays readable. Pin ids are the contract for later GSAP ScrollTrigger work.

Restage reason: `ops/pm/V3-0-REJECT.md`. This file **replaces** the six-pin home score in `docs/scroll-score.md` for V3 implementation. Keep `scroll-score.md` as historical reference only.

## Canvas tokens (locked) — Apple PM

| Token | Value | Use |
| --- | --- | --- |
| Product canvas | `#ffffff` | Default stage / page background |
| Gutter | `#f5f5f7` | Module gutters, rails, soft bands |

## Hard bans (Apple PM)

- **Banned:** six isomorphic full-bleed pin chapters on home (the old `#home-s1`…`#home-s6` clone film).
- **Required:** ≥3 distinct layout grammars across the nine home modules.
- Motion: transform/opacity only. Nav and footer always reachable. No scroll hijack.
- **Hard ban (scroll stack):** no Lenis, no ScrollTrigger `normalizeScroll`, no `body` / `html` overflow lock while pinned — preserve native scroll (zero-jank).

## UX defaults (Leader align)

- **Default motion = shallow scroll** (once-reveal or short scrub). Not long pin traps (`+=150%` ×6 or `+=420%` story runways from REJECT KILL).
- Every home module below annotates: **pin allowed?**, **end ceiling if pin**, **375 stack**, **reduced-motion full-facts**.
- Pin only where marked yes; ceilings are hard caps for implementers.

Layout grammars on home: `hero`, `shallow-deep`, `pin-stage`, `horizontal rail`, `bento`, `specs cluster`, `method columns`, `timeline band`, `footer map` (≥3 satisfied).

## Home `/` — nine modules

### H1 Hero

| Field | Value |
| --- | --- |
| id | `#home-hero` |
| layout grammar | `hero` |
| visual still | Silent product frame on `#ffffff`; soft `#f5f5f7` gutter edge |
| headline (exact) | Agents, built to the brief. |
| supporting facts (exact) | Remex Studio designs custom AI agents as products. / One workflow. One agent. A human still decides. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Centered headline + two support lines stacked; CTA optional below; no side-by-side that squeezes type under 16px |
| reduced-motion full-facts | (1) Agents, built to the brief. (2) Remex Studio designs custom AI agents as products. (3) One workflow. One agent. A human still decides. |
| motion | Entrance opacity/y only; shallow scroll |

### H2 The hire

| Field | Value |
| --- | --- |
| id | `#home-hire` |
| layout grammar | `shallow-deep` |
| visual still | Single seat / job card lighting up: one workflow named |
| headline (exact) | One painful workflow. One agent. A human gate. |
| supporting facts (exact) | Most tools answer everything. We hire an agent for one job. / Seattle studio. Global clients. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Still above copy; copy block full width; support lines stacked not columns |
| reduced-motion full-facts | (1) One painful workflow. One agent. A human gate. (2) Most tools answer everything. We hire an agent for one job. (3) Seattle studio. Global clients. |
| motion | Scroll-triggered reveal once; optional shallow parallax on still (transform only) |

### H3 The gate

| Field | Value |
| --- | --- |
| id | `#home-gate` |
| layout grammar | `pin-stage` (single short pin; not one of six clones) |
| visual still | Three-step still: Propose → Approve → Record |
| headline (exact) | The agent proposes. A person approves. The record stays. |
| supporting facts (exact) | Propose: the agent drafts the next action; it does not execute irreversible work alone. / Approve: a named person accepts, edits, or rejects before anything ships, posts, charges, or moves money. / Record: proposal, decision, and outcome stay linked in an auditable log. |
| pin allowed? | **yes** (only home pin by default) |
| end ceiling if pin | **`+=80%` max** (hard cap; no `+=150%`) |
| 375 stack | Headline, then three mechanism bullets in document order; still may sit above or collapse to icons; all three bullets visible without scrub |
| reduced-motion full-facts | (1) The agent proposes. A person approves. The record stays. (2) Propose bullet. (3) Approve bullet. (4) Record bullet. All four visible in static stack. |
| motion | Optional short pin + scrub of three steps; escape hatch: nav/footer reachable |

### H4 Four jobs stills rail

| Field | Value |
| --- | --- |
| id | `#home-jobs` |
| layout grammar | `horizontal rail` |
| visual still | Four distinct product stills (not one morph chrome) |
| headline (exact) | Four jobs we know how to hire an agent for. |
| supporting facts (exact) | Atelier Concierge. Ledger Clerk. Morning Remex. Exception Copilot. / Each card links to its `/work/*` route. 44px hit targets. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Vertical stack of four cards (no horizontal trap); 44px min hit; order Concierge → Ledger → Morning → Exception |
| reduced-motion full-facts | (1) Four jobs headline. (2–5) Four product names as links. No “Open demo”. |
| motion | Desktop: horizontal snap/scrub rail optional; 375: static vertical stack |

### H5 For whom / not for whom

| Field | Value |
| --- | --- |
| id | `#home-for` |
| layout grammar | `bento` |
| visual still | Two-pane bento: Fit / Refuse |
| headline (exact) | We design the job an agent is allowed to do — and the gate it cannot cross. |
| supporting facts (exact) | For: teams with one painful workflow and a human who must stay in the loop. / Not for (What we do not sell): hours factory or body shop; generic chatbot or chatbot widget; “ChatGPT for X”; cloud-migration mill; replacing the client team. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Fit pane then Refuse pane stacked; refuse list as bullets, not truncated slogan |
| reduced-motion full-facts | (1) Wayfinding headline. (2) For whom sentence. (3–7) Five refuse items from What we do not sell. |
| motion | Staggered card reveal once |

### H6 What a brief asks

| Field | Value |
| --- | --- |
| id | `#home-brief` |
| layout grammar | `specs cluster` |
| visual still | Specs / checklist cluster on `#f5f5f7` gutter band |
| headline (exact) | What a brief asks. |
| supporting facts (exact) | Which workflow hurts. / Who approves. / What the agent may never do. / What record you must keep. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Headline + four checklist rows stacked full width |
| reduced-motion full-facts | (1) What a brief asks. (2) Which workflow hurts. (3) Who approves. (4) What the agent may never do. (5) What record you must keep. |
| motion | Static or light stagger; list always visible |

### H7 Method three

| Field | Value |
| --- | --- |
| id | `#home-method` |
| layout grammar | `method columns` |
| visual still | Three equal columns; each with a concrete still glyph |
| headline (exact) | Design the job. Build the gate. Keep the record. |
| supporting facts (exact) | Design the job: name the seat, the inputs, and the done state. / Build the gate: decide what requires a human before ship, post, charge, or money move. / Keep the record: link proposal, decision, and outcome so the team can reopen it. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Three blocks stacked (not three skinny columns); each keeps title + substance sentence |
| reduced-motion full-facts | (1) Design the job + substance. (2) Build the gate + substance. (3) Keep the record + substance. |
| motion | Column stagger once; **not** a sixth full-bleed pin clone |

### H8 Roadmap three

| Field | Value |
| --- | --- |
| id | `#home-roadmap` |
| layout grammar | `timeline band` |
| visual still | Now / Next / Later on one band (summary only; detail on `/approach`) |
| headline (exact) | Now. Next. Later. |
| supporting facts (exact) | Now: ship gated agents for one workflow at a time. / Next: deepen records and chapter wayfinding across the four jobs. / Later: broaden seats only after gates and records hold. |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Three rows Now → Next → Later; each label + one sentence |
| reduced-motion full-facts | (1) Now + sentence. (2) Next + sentence. (3) Later + sentence. |
| motion | Optional short horizontal progress scrub ≤`+=40%` without pin; default static |

### H9 Start a brief

| Field | Value |
| --- | --- |
| id | `#home-close` |
| layout grammar | `footer map` |
| visual still | Close band; chapter map hairlines back to Gate / Jobs / Brief / Roadmap |
| headline (exact) | Start a brief. |
| supporting facts (exact) | Tell us the painful workflow. We design the agent and the gate. / CTA → `/contact` |
| pin allowed? | **no** |
| end ceiling if pin | n/a |
| 375 stack | Headline, support, CTA (44px), chapter map links below |
| reduced-motion full-facts | (1) Start a brief. (2) Tell us the painful workflow. We design the agent and the gate. (3) CTA to `/contact`. (4) Chapter map links visible. |
| motion | Soft rise; no hijack |

## Four product scores (Vision — REJECT uniqueness)

Cite `ops/pm/V3-0-REJECT.md` product uniqueness. Each product **must** ship ability×3 + unique gate + unique record + unique refusal. Lines are not interchangeable across products. Footer on every story: **Studio study. Client identity anonymized.** CTA: **Start a brief.** → `/contact`. Canvas `#ffffff`, gutter `#f5f5f7`.

### 1. Atelier Concierge — `/work/atelier-concierge`

Flow seed (REJECT): skin/occasion → one hero → try-on → bag → human at pay; refuse invent catalog / charge without approval; record consult + LUM-1042.

| Module | Line (exact) |
| --- | --- |
| Job + user | Concierge desk for high-touch retail clients who expect one clear next step. |
| Pain | Skin, occasion, and fit notes scatter across fittings, holds, and aftercare. |
| Ability 1 | Map skin and occasion to one hero SKU. |
| Ability 2 | Stage a try-on still for the stylist desk. |
| Ability 3 | Draft the bag for human review before pay. |
| Gate | Human at pay. A stylist approves; nothing charges without that person. |
| Record | Consult thread stays with ticket LUM-1042. |
| Refusal | Will not invent catalog SKUs. Will not charge without approval. |
| CTA | Start a brief. |
| Footer | Studio study. Client identity anonymized. |

### 2. Ledger Clerk — `/work/ledger-clerk`

Flow seed (REJECT): corpus-only; Propose never Execute; citations; Approve/Reject; audit log.

| Module | Line (exact) |
| --- | --- |
| Job + user | Controller desk answering month-end questions from a fixed corpus. |
| Pain | The same source hunt buries the team every close. |
| Ability 1 | Answer from the corpus only. |
| Ability 2 | Attach citations before the answer is shown. |
| Ability 3 | Package a Propose draft. Never Execute. |
| Gate | Approve or Reject by a named controller before books move. |
| Record | Ask, citation, and decision sit in one audit log. |
| Refusal | Will not answer outside the corpus. Will not Execute ledger changes. |
| CTA | Start a brief. |
| Footer | Studio study. Client identity anonymized. |

### 3. Morning Remex — `/work/morning-remex`

Flow seed (REJECT): Priority/Watch/Noise + two tones; never auto-publish; brief+draft+escalate.

| Module | Line (exact) |
| --- | --- |
| Job + user | Operator desk turning overnight threads into one morning packet. |
| Pain | Overnight mail arrives without a single readable brief. |
| Ability 1 | Sort threads into Priority, Watch, and Noise. |
| Ability 2 | Draft in two tones for the operator to choose. |
| Ability 3 | Escalate threads that need a human before send. |
| Gate | Never auto-publish. An operator edits before anything goes out. |
| Record | Brief, draft, and escalate decision stay linked. |
| Refusal | Will not auto-publish digests or posts. |
| CTA | Start a brief. |
| Footer | Studio study. Client identity anonymized. |

### 4. Exception Copilot — `/work/exception-copilot`

Flow seed (REJECT): queue + policy suggest; human for refunds/irreversible money; case timeline.

| Module | Line (exact) |
| --- | --- |
| Job + user | Ops lead clearing exception queues against written policy. |
| Pain | Exceptions pile faster than policy can be reread. |
| Ability 1 | Rank the exception queue by urgency and policy fit. |
| Ability 2 | Suggest a policy disposition with the cite attached. |
| Ability 3 | Draft the case note for the lead. |
| Gate | A human handles refunds and irreversible money moves. |
| Record | Case timeline keeps policy cite and decision together. |
| Refusal | Will not issue refunds or move money without a human. |
| CTA | Start a brief. |
| Footer | Studio study. Client identity anonymized. |

### Product motion / 375 (all four)

| Field | Rule |
| --- | --- |
| pin allowed? | **no** long story pin (`+=420%` banned). Optional per-module once-reveal only. |
| end ceiling if pin | n/a (default shallow scroll) |
| 375 stack | Job, pain, abilities×3, gate, record, refusal, CTA, study footer all readable in document order; no absolute-stack hide |
| reduced-motion full-facts | Every module line in the product table above must remain visible without scrub |

## Implementation notes (score only)

- Home: nine module ids; ≥3 grammars; ban six-clone pin film; default shallow scroll; only H3 may pin, ceiling `+=80%`.
- Products: REJECT uniqueness lines as written; still frames only.
- Do not implement ScrollTrigger in V3-0; score docs only.
