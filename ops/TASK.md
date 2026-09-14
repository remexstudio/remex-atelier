# TASK R0

TASK ID: R0
REPO: remexstudio/remex-atelier
GOAL: Lock English copy and home/product scroll scores as constitution docs only. No app pages. No new components. Personal site out of scope. No founder name.

ALLOWED FILES:
- docs/copy-locks.md (new)
- docs/scroll-score.md (new)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)

OUT OF SCOPE:
- app/** pages, components, styles
- personal site (justin-jia)
- starting R1 or any product scroll implementation
- paraphrasing SAY / DO NOT SAY / approved headlines

SKILLS TO USE (read before write):
- apple-design-web
- writing-guidelines
- cinematic-scroll-storytelling
- Also keep campaign invokes available: apple-design, apple-design-motion, emil-design-eng (docs tone only this slice)

COMMIT MESSAGE: docs(site): lock copy and scroll score

## docs/copy-locks.md — required content (verbatim)

### SAY (verbatim)

- Remex Studio designs custom AI agents as products.
- One painful workflow. One agent. A human gate.
- The agent proposes. A person approves. The record stays.
- Agents, built to the brief.
- Seattle studio. Global clients.

### DO NOT SAY (verbatim)

- We build English products / English-language software / English-first AI
- Cloud migration factory / outsourcing / body shop
- Chatbot widget / ChatGPT for X
- Fake percentages, fake logos, founder legal name, school list
- Employment at Lumen / Northline / Kite / Paperline
- We replace your team

### Approved headlines (verbatim — do not paraphrase)

- Agents, built to the brief.
- One workflow. One agent. A human still decides.
- We design the job an agent is allowed to do — and the gate it cannot cross.
- Start a brief.

Also document: English is a build constraint (code/commits/UI language), not a market claim. Positioning: global studio. Never claim “English-first markets” on site.

## docs/scroll-score.md — required content

### Home — six pinned scenes

For each scene: pin target, visual on stage, exact headline, exact supporting line.

| Scene | Pin target | Visual on stage | Headline (exact) | Supporting line (exact) |
| --- | --- | --- | --- | --- |
| S1 Promise | `#home-s1` (or documented pin id) | silent product frame | Agents, built to the brief. | One workflow. One agent. A human still decides. |
| S2 The job | `#home-s2` | the job title lights up | Most tools answer. | Ours is hired for one job. |
| S3 The gate | `#home-s3` | Propose then Approve | The agent proposes. | A person approves. The record stays. |
| S4 Four jobs | `#home-s4` | four stills linking to the four stories | Four jobs we know how to hire an agent for. | (supporting line: short pointer to the four stories; keep specific, no market English claim) |
| S5 Method | `#home-s5` | three method beats | Design the job. | Build the gate. / Keep the record. (three lines as specified: Design the job. Build the gate. Keep the record.) |
| S6 Close | `#home-s6` | close CTA | Start a brief. | (CTA support; no fake metrics) |

S5 Method must carry three lines exactly: Design the job. Build the gate. Keep the record.

### Four product stories — five scenes each, same grammar

Routes (use these paths in the score; note slug fix):

1. `/work/atelier-concierge` (Atelier Concierge / former Lumen study lineage — anonymized product story)
2. `/work/ledger-clerk`
3. `/work/morning-remex`
4. `/work/exception-copilot` (slug **exception-copilot**, not exception-copier)

Each story: five scenes —

1. pain
2. agent appears
3. human gate
4. record
5. Start a brief

Each scene: one sentence pain or action. No live widgets. Marketing stills only.

## Acceptance

- [ ] `docs/copy-locks.md` contains SAY / DO NOT SAY / Approved headlines **verbatim**
- [ ] `docs/scroll-score.md` has Home S1–S6 with pin, visual, exact headline, exact support as specified
- [ ] Four product stories × five scenes; slug `exception-copilot`
- [ ] No app/** changes; no personal site; no founder name
- [ ] Commit message exact: `docs(site): lock copy and scroll score`
- [ ] HANDOFF lists skills used; DEV PASS or DEV REWORK

## Stop

Do **not** start R1. Dual PASS closes R0 only. Wait for owner’s next prompt before any R1 ticket.
