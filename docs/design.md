# Design

## Principles

- Editorial atelier, not a dashboard kit
- Product canvas `#ffffff` / gutter `#f5f5f7` on film; legacy paper on inner pages; stone ink; CTA-only accent
- Large serif display, clean sans body
- Visible focus rings; labeled forms
- Motion: transform and opacity only; respect `prefers-reduced-motion`
- Press feedback: `scale(0.97)` with ease-out; hover only behind `@media (hover: hover) and (pointer: fine)`
- Responsive targets: 375 and 1280

## Palette

Named tokens used in `app/globals.css` and components.

### Product / film shell (V3 default)

| Token | Role | Hex |
| --- | --- | --- |
| `--canvas` | Product stage / page canvas | `#ffffff` |
| `--gutter` | Section gutters, rails, soft bands | `#f5f5f7` |
| `--cta` | CTA fill only (never page wash) | `#1d4ed8` |

Film and product routes use `SiteChrome variant="film"`: outer wash `--gutter`, stages paint `--canvas`. Accent for marketing CTAs is `--cta` only.

### Legacy editorial paper (inner pages only)

| Token | Role | Hex |
| --- | --- | --- |
| `--paper` | Legacy page ground (Approach, About, Services, Contact, etc.) | `#f4f0e8` |
| `--ink` | Primary text / body ink | `#1c1917` |
| `--muted` | Secondary text | `#78716c` |
| `--rule` | Hairline dividers, borders | `#e5dfd4` |
| `--accent` | Strong ink for wordmark, buttons, focus | `#292524` |

Aliases: `--background` → paper on default shell; film shell remaps `--background` → canvas. `--foreground` → ink. Tailwind theme maps `bg-paper`, `text-ink`, `text-muted`, `border-rule`, `bg-background`, `text-foreground`, `text-accent`, plus `bg-canvas` / `bg-gutter` / `bg-cta`.

## Type roles

| Role | Face | Use |
| --- | --- | --- |
| `display` | Newsreader (serif) | Wordmark, page titles, offer names. Tokens: `--size-display`, `--leading-display`, `--tracking-display` (negative) |
| `display-lg` | Newsreader (serif) | Hero-scale display for V3 home. Tokens: `--size-display-lg`, `--tracking-display-tight` |
| `body` | Source Sans 3 (sans) | Paragraphs, form controls. Leading ~1.6, tracking near 0 |
| `meta` | Source Sans 3 (sans) | Captions, disclaimers, location. Smaller size, muted color |

CSS classes: `.type-display`, `.type-display-lg`, `.type-body`, `.type-meta`. Large display uses negative tracking; body stays near `0`.

## Chrome

- Sticky frosted nav: `--nav-height: 46px` (~44–48px band), `backdrop-filter: blur(20px) saturate(180%)`, translucent canvas/paper mix
- Hit target floor: `--hit-target-min: 44px` on primary CTAs and job cards
- Film chrome: primary route nav + hairline chapter map (`#home-gate` / `#home-jobs` / `#home-brief` / `#home-roadmap`)

## Motion

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for UI feedback
- `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement
- `--duration-press: 160ms`; `--duration-ui: 200ms`
- Press duration ~160ms; never `transition: all`
- Animate `transform` and `opacity` only (GPU-friendly)
- Under `prefers-reduced-motion: reduce`: drop scale and translate motion sitewide; keep short opacity (~160ms) where state indication still helps; no vestibular slides
- Demo / lab panels (`kite`, `northline`, `paperline`, `pulse`) mirror the same rule locally so opacity reveals survive the global reduce pass
- Skip link: slide via transform by default; opacity reveal when reduced

## Accessibility tokens

- Focus: `:focus-visible` ring uses `--accent` at 2px / 3px offset on links, buttons, inputs, selects, textareas, and pressed toggles
- Forms: visible `.field-label` + matching `htmlFor` / `id`; contact and demo payment fields keep labels
- Skip link targets `#main`
- Prefer labels and legends over placeholder-only controls

## Do not ship

- Purple gradients
- Neon SaaS chrome
- Generic Inter-on-white AI landing patterns
- Chatbot widgets
- Fake metrics charts

## Components

Default: no UI kit. Add a library only when a ticket plus `pick-ui-library` requires it.
