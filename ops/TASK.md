# TASK V3-0

TASK ID: V3-0
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke before writing):
/apple-design-web /writing-guidelines /cinematic-scroll-storytelling /emil-design-eng

GOAL:
Docs-only restage. Current live site is REJECTED (see ops/pm/V3-0-REJECT.md). Write the V3 constitution docs that later tickets will implement. No app pages.

ALLOWED:
- docs/copy-locks.md (replace/extend — keep English as build law; expand SAY/DO NOT SAY and approved wayfinding headlines; never market-claim English)
- docs/ia-v3.md (NEW — information architecture)
- docs/scroll-score-v3.md (NEW — home ≥9 distinct modules + four unique product scores)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md
- ops/pm/V3-0-REJECT.md (already present; do not delete)

OUT OF SCOPE:
- Any app/, components/ UI
- Personal site / founder name
- Polishing old HomeScenes / StoryScenes layouts
- /demo rebuild

## docs/copy-locks.md must include (English)

SAY (verbatim blocks as appropriate):
- Remex Studio designs custom AI agents as products.
- One painful workflow. One agent. A human gate.
- The agent proposes. A person approves. The record stays.
- Agents, built to the brief.
- Seattle studio. Global clients.
- Legal: Jiyuyun Studio LLC (for chrome/about/approach as specified in IA)
- Mechanism lines for Propose / Approve / Record
- What we do not sell (hours factory, generic chatbot, ChatGPT for X, cloud-migration mill, replacing the client team)

DO NOT SAY:
- English-first / English products / English-speaking markets / we build English products
- Cloud migration factory / outsourcing / body shop
- Chatbot widget / ChatGPT for X
- Fake percentages, fake logos, founder legal name, school list
- Employment at Lumen / Northline / Kite / Paperline
- We replace your team
- CumuLabs

Approved wayfinding headlines (not the only copy on six scenes):
- Agents, built to the brief.
- One workflow. One agent. A human still decides.
- We design the job an agent is allowed to do — and the gate it cannot cross.
- Start a brief.

Name meaning (Approach once only): 机 = machine; 羽 = remex flight feather (control surface); 云 = work runs in the cloud; Remex = remiges.

## docs/ia-v3.md must map

Routes and which payload lands where:
- `/` — nine+ modules listed below (titles + fact each module must carry)
- `/work` — four distinct stills, no toy Open demo
- `/work/atelier-concierge` `/work/ledger-clerk` `/work/morning-remex` `/work/exception-copilot` — each: job+user, concrete pain, three unique abilities, unique gate, unique record, unique refusal, CTA
- `/approach` — methods + name meaning once + legal/Seattle/global + what we refuse + roadmap Now/Next/Later
- `/contact` — Start a brief form + hello@remexstudio.com
- Lab/Pulse note as prototype only
- Vision checklist mirrored as acceptance map

Home modules (minimum 9, each a different fact):
1 Hero
2 The hire
3 The gate
4 Four jobs stills rail
5 For whom / not for whom
6 What a brief asks
7 Method three
8 Roadmap three
9 Start a brief

Layout diversity rule: same page must use ≥3 distinct layout grammars (not six identical pins).

## docs/scroll-score-v3.md must specify

For each home module: id, layout grammar (hero / pin-stage / shallow-deep / bento / horizontal rail / method columns / footer map / etc.), visual still, exact headline, exact supporting facts (not slogan-only).

For each of four products: scene/module list with UNIQUE lines for abilities, gate, record, refusal (no shared five empty sentences). Footer: Studio study. Client identity anonymized.

Motion notes: pin+scrub allowed only where UX accepts; transform/opacity only; reduced-motion keeps full payload readable.

ACCEPTANCE:
- [ ] Three PM reject doc present and cited
- [ ] Three files written in English as specified
- [ ] Vision payload checklist fully mapped to routes/modules
- [ ] Four products have non-interchangeable copy plans
- [ ] No app code changed
- [ ] Commit: `docs(site): lock v3 ia copy and scroll score`

After push: HANDOFF + DEV PASS/REWORK. Do not start V3-1 until Leader + PM board PASS.
