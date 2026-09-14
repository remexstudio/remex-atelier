# TASK R4

TASK ID: R4
REPO: remexstudio/remex-atelier

SKILLS TO USE (invoke before coding):
/review-animations /apple-design-motion /gsap-performance /zero-jank-scroll /web-design-guidelines

GOAL:
Final polish pass. Audit every pinned scene (home + four product stories). Kill jank, layout thrash, and scroll hijack that breaks reading. Remove leftover “English-first” / “English products” (and similar market claims) from the whole repo **UI**. Keep `/demo/*` unlinked from primary navigation if demo files remain. Verify 404, metadata, 375 and 1280 layouts, visible focus, labeled form, and `prefers-reduced-motion`.

ALLOWED (as needed to meet acceptance):
- components/HomeScenes.tsx, components/StoryScenes.tsx
- app/page.tsx, app/work/** (index + four story routes), app/globals.css
- components/SiteChrome.tsx, components/ContactForm.tsx
- app/layout.tsx, app/not-found.tsx, metadata on existing routes
- Any other UI file that still prints forbidden English-market claims
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- New product pages or new slogans outside copy-locks / scroll-score
- Rebuilding `/demo/*` as the product
- Personal site / founder bio
- Deleting demo routes is optional; if they remain they must stay out of primary nav and work index

ACCEPTANCE:
- [ ] Audit every pinned scene (`#home-s1`…`#home-s6`, `#story-s1`…`#story-s5` on all four stories): no layout thrash; no scroll hijack that breaks reading; transform/opacity only; ScrollTrigger pin/scrub healthy
- [ ] Jank / performance: no per-frame React setState; refresh after fonts; avoid unnecessary will-change leaks; `gsap-performance` / zero-jank guidance applied
- [ ] Repo UI purged of “English-first”, “English products”, “English-language software”, “English-speaking markets” and similar market claims (docs/copy-locks.md DO NOT SAY list may remain as the constitution — do not print those phrases in rendered UI)
- [ ] Primary nav: no `/demo/*` links; work index: no toy Open demo buttons
- [ ] `app/not-found.tsx` present and on-brand
- [ ] Metadata sane on key routes (home, work, stories, approach, contact)
- [ ] Layouts readable at ~375 and ~1280
- [ ] Visible `:focus-visible`; contact form fields labeled
- [ ] `prefers-reduced-motion`: no pin theater on home and stories (verified)
- [ ] `pnpm build` PASS
- [ ] Commit: `feat(site): motion a11y and copy cleanup`

COMMIT MESSAGE: feat(site): motion a11y and copy cleanup

After push: write ops/HANDOFF.md, declare DEV PASS or DEV REWORK.
When both PASS, **stop** — no further slices until owner says otherwise.
