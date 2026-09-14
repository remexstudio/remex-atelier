# TASK V3-19

TASK ID: V3-19
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines

GOAL:
Chrome + jump landing + chapter display type. Align SiteChrome defaults to film tokens, add scroll-margin for sticky nav jumps, bump four chapter job H1s toward Apple product-chapter scale. Do not touch locked score lines or reopen short-chip craft.

Cite: Apple/UX/Vision post-V3-18 KEEP/KILL/ADD. Short-label loop closed.

ALLOWED:
- components/SiteChrome.tsx (footerLine default; mark class only — no Tailwind utility soup)
- app/globals.css (scroll-margin; `.site-nav__mark`; chapter headline sizes; optional delete unused `.site-shell--default` / `.site-footer--default`; footer link focus-visible)
- Optional: `lib/refuse.ts` + wire `HomeScenes.tsx` / `app/approach/page.tsx` imports only (exact refuse strings; landings stay home H5 + approach)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- CTA curtain de-isomorphism / unique CTA stills (V3-20)
- `/work` product-wall still upgrade (V3-20)
- Changing locked score lines; moving 机羽云 or refuse list landings
- New pins, Lenis, normalizeScroll, body overflow lock
- Short-chip micro-edits; StoryScenes / demo revival

REQUIRED:
1. **SiteChrome footer default** — change default `footerLine` from `A Seattle studio.` to exact SAY `Seattle studio. Global clients.`
2. **SiteChrome mark** — remove Tailwind utility classes from wordmark; style only via `.site-nav__mark` in film CSS; hit ≥44.
3. **scroll-margin** — `scroll-margin-top: var(--nav-height)` on home `.home-mod[id]` and four-chapter section ids (or shared `[data-*-mod]` / `#cq-` `#lc-` `#mr-` `#ec-` pattern) so chapter map / in-page jumps clear the 46px sticky nav.
4. **Chapter job H1** — bump `.cq-headline` / `.lc-headline` / `.mr-headline` / `.ec-headline` from `--size-display-sm` to `--size-display` (or `--size-display-lg` if tokens allow); keep secondary section titles smaller.
5. Soft: remove unused default paper shell CSS blocks if truly unused; `.site-footer__links a:focus-visible` explicit outline.
6. Optional: DRY refuse list to `lib/refuse.ts` (home + approach only).
7. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] Default footerLine matches `Seattle studio. Global clients.`
- [ ] Nav mark film-only CSS; ≥44
- [ ] Home + chapter anchors clear sticky nav via scroll-margin
- [ ] Four chapter job H1s at display scale (not display-sm)
- [ ] Locked copy / 机羽云 / refuse landings unchanged; no Lenis; no new pins
- [ ] Build green; prod refreshed

COMMIT: `feat(site): v3 chrome scroll-margin and chapter display`

Await three PM + Leader. No V3-20 until PASS.
