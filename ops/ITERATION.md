# Iteration after V3-13

Live preview: https://remex-atelier.vercel.app
V3-13 content commit: pending (this slice). Formal TASK issued at `0bb6d84`.

Vision / Apple / UX KEEP/KILL/ADD after V3-12 landed as V3-13. This slice closes the paper-shell leaks. Do not start V3-14 until V3-13 PASS.

## Closed in V3-13

1. **Root canvas locked** — `body` no longer uses `bg-paper`. Document root paints `--gutter` (`#f5f5f7`); `--background` aliases `--canvas` (`#ffffff`). 46px nav and shallow scroll kept.
2. **PulseLoop native film** — paper/Tailwind utilities removed; film/gutter/hairline classes in `PulseLoop.tsx` + `pulse.css`. Prototype behavior unchanged.
3. **Services / About wayfinding** — footer secondary links to `/services` and `/about` (≥44). Labels are wayfinding only, not product-sell copy. Primary nav stays Work / Approach / Lab / Contact. Lab `aria-label="Lab prototypes"`.
4. **404 film** — `SiteChrome variant="film"` + film panel grammar; `btn-primary` / `btn-secondary`.
5. **Offers stub deleted** — unused `components/Offers.tsx` removed.

## Held for V3-14 (out of scope here)

- Home H2/H7 density glyphs
- Contact BRIEF_ASKS checklist
- Services offer nails / About SAY echo
- Soft chapter-beat density (hairlines, type scale, still staging) — not new slogans, not six-clone pins

## Hard bans (unchanged)

- No English-products market claims; no founder name; no CumuLabs/outsourcing; no Lenis/normalizeScroll/body lock; H3-only pin with pinOk; locked copy verbatim.
- Do not move 机羽云 or the refuse list.
- No `/demo` marketing CTAs; no long pins.

## Prior loop (after V3-12) — historical

Tip at close: 8ef5e18 / content 03d5281 / merge fc0673f

### Still thin / leftover canvas / product-call risks (pre-V3-13)

1. **Root canvas not locked** — closed in V3-13.
2. **PulseLoop still remapped via CSS** — closed in V3-13.
3. **Services off primary nav** — resolved as footer wayfinding, not restored to primary.
4. **Soft density** — remains for V3-14.

## Prior loop (after V3-8) — historical

Tip at close: 0af8433 / content 45c891a

### Still thin / repetitive / not Apple-like / leftover payload risks

1. **Legacy routes still ship** — `app/work/lumen-atelier`, `northline`, `kite`, `paperline` and full `app/demo/*` trees remain in the build alongside V3 unique chapters. Primary work index links the four new routes, but old URLs dilute IA and risk empty-grammar leftovers.
2. **Primary nav IA drift** — `SiteChrome` still lists Services / Lab / About beside Work / Approach / Contact. Film chapter map is good on home; marketing chrome may still feel like Studio v1 sitemap rather than Apple product chapter nav.
3. **Still fidelity** — product and home stills are CSS frames; Apple PM notes room to raise fidelity without changing locked copy.
4. **Lab / Pulse** — if Lab stays in nav, Prototype · not a client engagement must be unmistakable; do not sell demos as products.
5. **Density** — after uniqueness lands, next loop should add information density and module craft (hairlines, type scale, still staging) — not new slogans, not six-clone pins.

### V3-9 ticket synthesized

Leader synthesized **only V3-9** from post-V3-8 PM KEEP/KILL/ADD. Still-fidelity, isomorphic layout, and Services/Lab/About canvas lift stay later tickets. No V3-10 until V3-9 PASS.

Sources (three PMs, post V3-8):

- **Vision PM** — KEEP the four unique V3 work routes; KILL legacy dual work URLs (`/work/lumen-atelier`, `/work/northline`, `/work/kite`, `/work/paperline`); ADD permanent redirects to `/work/atelier-concierge`, `/work/ledger-clerk`, `/work/morning-remex`, `/work/exception-copilot`.
- **UX PM** — KILL “Open demo” and marketing CTAs into `/demo/*` (legacy work pages, teaser, home, work index); KILL dual work surfaces as marketed studies; ADD SiteChrome primary nav that never links `/demo/*` (prefer Work, Approach, Contact; optional Lab only if Prototype-labeled).
- **Apple PM** — KEEP film chapter map (Gate / Jobs / Brief / Roadmap) **only on home**; KILL home chapter anchors on product / approach / contact; Services / Lab / About remain thin — do not invent slogans; defer film-canvas lift to V3-12 (or demote).
