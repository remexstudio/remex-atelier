# Iteration after V3-12

Live preview: https://remex-atelier.vercel.app
Tip at close: 8ef5e18 / content 03d5281 / merge fc0673f

Vision / Apple / UX / Leader PASS on V3-12. Overnight loop continues. V3-13 stays TBD until three PM KEEP/KILL/ADD reviews of the gaps below.

## Still thin / leftover canvas / product-call risks

1. **Root canvas not locked** — `body` still uses the `bg-paper` utility. Film pages (`/services`, `/lab`, `/lab/pulse`, `/about`, plus approach/contact) sit on the film canvas, but the document root is not locked to `#fff` / `#f5f5f7`.
2. **PulseLoop still remapped via CSS** — `components/lab/PulseLoop.tsx` still ships paper/Tailwind utilities; V3-12 remaps them under `.lab-loop`. Native film classes on PulseLoop are pending (outside V3-12 ALLOWED).
3. **Services off primary nav** — `/services` has a film page, but Services stays off SiteChrome primary nav. Product call: restore to primary, keep off-nav, or treat as a deep link only.
4. **Soft density** — chapter beat skeleton is still shared across product pages after the V3-11 grammar break. Hire-still polish remains soft (hairlines, type scale, still staging) — not new slogans, not six-clone pins.

## Hard bans (unchanged)

- No English-products market claims; no founder name; no CumuLabs/outsourcing; no Lenis/normalizeScroll/body lock; H3-only pin with pinOk; locked copy verbatim.

## Next tickets (intent)

- V3-13: TBD from three PM KEEP/KILL/ADD on the gaps above. Leader issues the ticket only after those reviews. Do not start implementation on standby.

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
