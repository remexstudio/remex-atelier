# TASK V3-9

TASK ID: V3-9
REPO: remexstudio/remex-atelier

SKILLS (before edits):
/apple-design /apple-design-web /emil-design-eng /writing-guidelines /web-design-guidelines /zero-jank-scroll

GOAL:
Kill legacy dual work routes and marketing paths into toy demos. Fix film chapter-map IA so product/approach/contact pages do not show home Gate/Jobs/Brief/Roadmap. Do not paraphrase locked product copy. Do not break four unique chapters.

Cite: ops/ITERATION.md + Vision/UX/Apple KEEP/KILL/ADD (post V3-8).

ALLOWED:
- next.config.ts / next.config.js / next.config.mjs (redirects only)
- app/work/lumen-atelier/**, app/work/northline/**, app/work/kite/**, app/work/paperline/** (delete pages or replace with redirects)
- app/demo/** (unlink from marketing; may leave files but no marketing CTA; optional redirect to /lab with Prototype)
- components/LumenTeaser.tsx and any imports
- components/SiteChrome.tsx (nav IA)
- app/work/page.tsx (ensure no Open demo / legacy links)
- app/sitemap.ts or equivalent if present
- app/lab/** only for Prototype labeling if demos are parked there
- app/globals.css only if required for nav
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rewriting four unique chapter copy locks
- Breaking chapter layout isomorphism (V3-10+)
- Home/Work still gradient fidelity polish (V3-10+)
- Full Services/Lab/About film redesign (V3-11+)
- Personal site

REQUIRED:
1. Redirects (301/permanent):
   - /work/lumen-atelier → /work/atelier-concierge
   - /work/northline → /work/ledger-clerk
   - /work/kite → /work/morning-remex
   - /work/paperline → /work/exception-copilot
2. Remove Open demo / links to /demo/* from all marketing surfaces (old work pages if kept momentarily, teaser, home, work index).
3. Primary nav: never link /demo/*. Prefer primary: Work, Approach, Contact (+ optional Lab only if Prototype-labeled). Services/About: either keep with no demo CTAs or demote from primary if still thin stubs — do not invent new slogans.
4. SiteChrome: film chapter map (Gate/Jobs/Brief/Roadmap) **only on home** (`/` or explicit prop). Product / approach / contact must NOT show home chapter anchors.
5. Delete or stop shipping LumenTeaser if it points at legacy study.
6. Grep clean: no marketing CTA to /demo/*; four V3 work routes remain canonical.
7. pnpm build PASS.

COMMIT: `feat(site): v3 kill legacy demos and dual work routes`

After push: HANDOFF. Await three PM + Leader. No V3-10 until PASS.
