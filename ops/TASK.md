# TASK V3-7

TASK ID: V3-7
REPO: remexstudio/remex-atelier

SKILLS (before edits):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations /writing-guidelines

GOAL:
Bring `/approach` and `/contact` to V3 payload depth per `docs/ia-v3.md` and `docs/copy-locks.md`. Apple chapter grammar (light canvas, large type, hairlines, frosted film nav ok). No founder name, phone, school, pricing, personal bio. No English-products market claims.

ALLOWED:
- app/approach/**
- app/contact/**
- components/ContactForm.tsx (if needed for labels/success)
- app/globals.css (approach/contact styles only)
- components/SiteChrome.tsx only if required for film/default chrome consistency on these routes
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Home nine modules rewrite
- Product story pages
- /demo, personal site, Lab rebuild as sold product

## `/approach` REQUIRED
- Method three with substance: Design the job / Build the gate / Keep the record (deeper than home summary; may use Propose/Approve/Record mechanism lines from copy-locks)
- Name meaning **once only** (Chinese glyphs only here):
  - 机 = machine
  - 羽 = remex flight feather (control surface)
  - 云 = work runs in the cloud
  - Remex = remiges
- Legal: Jiyuyun Studio LLC
- Seattle studio. Global clients. (verbatim SAY)
- What we do not sell (locked list from copy-locks, verbatim bullets)
- Roadmap Now / Next / Later with detail (may expand home three-beat; do not invent English-first claims). Prefer locked home supporting facts as base:
  - Now: ship gated agents for one workflow at a time.
  - Next: deepen records and chapter wayfinding across the four jobs.
  - Later: broaden seats only after gates and records hold.
- Canvas #fff / gutter #f5f5f7; display negative tracking; ≥44px hits; labeled content; 375 readable
- No founder name / phone / school / pricing table / CumuLabs / outsourcing language

## `/contact` REQUIRED
- Headline: Start a brief. (verbatim)
- Form: Start a brief (labeled fields; success state)
- Email: hello@remexstudio.com
- No founder name

COMMIT: `feat(site): v3 approach and contact`

After push: write ops/HANDOFF.md. Await three PM + Leader. Do not start V3-8 until PASS.
