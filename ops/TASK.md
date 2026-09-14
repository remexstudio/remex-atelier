# TASK V3-12

TASK ID: V3-12
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /writing-guidelines /web-design-guidelines

GOAL:
Lift `/services`, `/lab`, `/lab/pulse`, `/about` onto the V3 film canvas (same grammar as approach/contact). Kill paper/Tailwind stub shell. Keep Lab unmistakably Prototype. Do not move 机羽云 Chinese etymology off `/approach`. No founder name. No English-products claims.

Cite: Apple/UX ITERATION ADD Services/Lab/About dual-shell.

ALLOWED:
- app/services/**
- app/lab/**
- app/about/**
- app/globals.css (page styles for these routes only)
- components/SiteChrome.tsx only if needed for film variant consistency
- Optional: delete unused `components/{lumen,kite,northline,paperline}/**` orphans (no routes)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rewriting home nine modules or four product chapters
- Reintroducing /demo marketing CTAs
- Adding Chinese etymology anywhere except `/approach`
- Personal site

REQUIRED:
1. All four routes use `SiteChrome variant="film"` (or equivalent film shell) with canvas `#fff` / gutter `#f5f5f7`, display negative tracking, hairline sections, hit targets ≥44.
2. `/lab` + `/lab/pulse`: label `Prototype · not a client engagement` unmistakable; one scannable still OK; never sold as client product.
3. `/about`: include `Jiyuyun Studio LLC` and `Seattle studio. Global clients.` (verbatim SAY); no founder name/phone/school; do NOT duplicate Approach Chinese 机/羽/云 block.
4. `/services`: three offers stay Agent Apps / Agent Ops / Advisory with substance; link to `/approach` and `/contact` (Start a brief); no outsourcing / English-products language.
5. 375 readable; focus-visible; pnpm build PASS; prefer vercel deploy --prod.

COMMIT: `feat(site): v3 film canvas for services lab about`

Await three PM + Leader. After PASS, write next ITERATION if still thin — do not stop overnight loop without owner.
