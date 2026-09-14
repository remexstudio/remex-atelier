# TASK V3-5

TASK ID: V3-5
REPO: remexstudio/remex-atelier

SKILLS (before edits):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations /writing-guidelines

GOAL:
Rebuild `/work/morning-remex` as a **unique** product chapter — not StoryScenes five-beat empty grammar. Exact lines from `docs/scroll-score-v3.md` § Morning Remex. Distinct still DNA: Priority/Watch/Noise triage → two-tone drafts → escalate → never auto-publish → brief+draft+escalate record.

ALLOWED:
- app/work/morning-remex/**
- components/MorningRemexChapter.tsx (or equivalent unique component; NOT StoryScenes)
- app/globals.css (morning-remex styles only)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Concierge / Ledger / Exception pages
- Home, /demo, personal site
- StoryScenes as sole structure

REQUIRED (exact from scroll-score-v3):
- Job + user: Operator desk turning overnight threads into one morning packet.
- Pain: Overnight mail arrives without a single readable brief.
- Ability 1: Sort threads into Priority, Watch, and Noise.
- Ability 2: Draft in two tones for the operator to choose.
- Ability 3: Escalate threads that need a human before send.
- Gate: Never auto-publish. An operator edits before anything goes out.
- Record: Brief, draft, and escalate decision stay linked.
- Refusal: Will not auto-publish digests or posts.
- CTA: Start a brief. → `/contact`
- Footer: Studio study. Client identity anonymized.

MOTION/UX: pin:no default; once-reveal OK; transform/opacity; no Lenis / normalizeScroll / body overflow lock; 375+RM full lines visible; canvas #fff / gutter #f5f5f7; film SiteChrome; CTA ≥44px; no Open demo.

VISUAL DNA (must not look like Concierge skin/try-on/bag or Ledger corpus/Propose≠Execute sheets):
thread triage chips Priority / Watch / Noise → dual tone draft cards → escalate handoff → linked brief+draft+decision record.

COMMIT: `feat(work): morning remex unique chapter`

After push: write ops/HANDOFF.md. Await three PM + Leader. Do not start V3-6 until PASS.
