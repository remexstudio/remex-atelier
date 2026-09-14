# TASK R2

TASK ID: R2
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke before coding):
/apple-design /apple-design-web /gsap-scrolltrigger /gsap-timeline /gsap-react /cinematic-scroll-storytelling /zero-jank-scroll /writing-guidelines

GOAL:
Add scroll product stories for the four agent jobs. Each story page is a pinned product stage with five copy scenes that scrub in. Work index lists the four stories with stills only. Unlink /demo/* from primary navigation.

ALLOWED:
- app/work/page.tsx (and related work-index components if needed)
- app/work/atelier-concierge/**
- app/work/ledger-clerk/**
- app/work/morning-remex/**
- app/work/exception-copilot/**
- Shared story film components under components/ (e.g. StoryScenes) required to compile
- app/globals.css (story film styles only as needed)
- components/SiteChrome.tsx (nav: unlink /demo/* from primary navigation if any remain; keep Work link)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rebuilding /demo/* as the product
- Fake payments, live refunds, auto-posting
- Home rebuild (R1 closed)
- Personal site
- New slogans outside docs/scroll-score.md and docs/copy-locks.md
- Claiming employment at study brands

ACCEPTANCE:
- [ ] Routes live: /work, /work/atelier-concierge, /work/ledger-clerk, /work/morning-remex, /work/exception-copilot
- [ ] Each story page: pinned product stage + five scrub scenes A–E
  - A pain (one sentence, exact from docs/scroll-score.md)
  - B the agent appears in the work
  - C the human gate
  - D the record
  - E Start a brief. (CTA → /contact)
- [ ] GSAP ScrollTrigger: pin + scrub; animate only transform/opacity; prefers-reduced-motion: no pin theater
- [ ] Staged UI frames only (marketing stills / quiet product frames — no live widgets)
- [ ] Footer line on story pages: Studio study. Client identity anonymized.
- [ ] Do not claim employment at the study brands
- [ ] Work index lists the four stories with stills; no toy launch / Open demo buttons
- [ ] Primary navigation has no /demo/* links
- [ ] Copy matches scroll-score exactly (no paraphrase)
- [ ] pnpm build PASS
- [ ] Commit: feat(work): add scroll product stories

Exact lines (from docs/scroll-score.md):

Atelier Concierge:
1. Concierge notes scatter across fittings, holds, and aftercare.
2. Atelier Concierge drafts the next step for each client thread.
3. A stylist approves before anything reaches the client.
4. Every proposal and approval stays on the desk log.
5. Start a brief.

Ledger Clerk:
1. Month-end questions bury the team in the same spreadsheet hunt.
2. Ledger Clerk cites the source before it answers.
3. A controller signs the change before books move.
4. Ask, source, and approval sit in one change log.
5. Start a brief.

Morning Remex:
1. Overnight threads arrive without a single readable brief.
2. Morning Remex drafts the morning packet from the inbox.
3. An operator edits tone before the digest goes out.
4. Brief, thread, and send decision stay linked.
5. Start a brief.

Exception Copilot:
1. Exceptions pile up faster than policy can be reread.
2. Exception Copilot ranks the queue and drafts a disposition.
3. A lead approves before inventory or credit moves.
4. Case, policy cite, and decision stay on the ticket.
5. Start a brief.

COMMIT MESSAGE: feat(work): add scroll product stories

After push: write ops/HANDOFF.md, declare DEV PASS or DEV REWORK. Do not open R3.
