# TASK R3

TASK ID: R3
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke before coding):
/apple-design /apple-design-web /writing-guidelines /emil-design-eng

GOAL:
Ship `/approach` and `/contact` for the marketing rebuild. Approach is three method blocks only. Contact is Start a brief form plus studio email with success state. No personal bio, founder name, phone, school, or pricing table.

ALLOWED:
- app/approach/**
- app/contact/**
- Shared chrome needed for these pages (components/SiteChrome.tsx, ContactForm or equivalent, app/globals.css styles for these pages)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Personal bio, real founder name, phone, school list
- Pricing table
- Rebuilding home or product stories
- /demo rebuild
- Outsourcing language; “English products” / English-first claims

ACCEPTANCE:
- [ ] `/approach` three blocks only, English headlines exact:
  1. Design the job
  2. Build the gate
  3. Keep the record
- [ ] Supporting text may explain propose / approve / log; no outsourcing language; no “English products”
- [ ] `/contact`: Start a brief form + `hello@remexstudio.com`
- [ ] Contact success state present
- [ ] No founder name on either page
- [ ] `pnpm build` PASS
- [ ] Commit: `feat(site): add approach and contact`

COMMIT MESSAGE: feat(site): add approach and contact

After push: write ops/HANDOFF.md, declare DEV PASS or DEV REWORK. Do not open R4.
