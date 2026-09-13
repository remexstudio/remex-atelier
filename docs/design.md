# Design

## Principles

- Editorial atelier, not a dashboard kit
- Light paper ground, stone ink, restrained accent
- Large serif display, clean sans body
- Visible focus rings; labeled forms
- Motion: transform and opacity only; respect `prefers-reduced-motion`
- Responsive targets: 375 and 1280

## Palette (S0)

- Paper: `#f4f0e8`
- Ink: `#1c1917`
- Muted stone: `#78716c`
- Rule: `#e5dfd4`
- Accent ink: `#292524`

## Type

- Display / wordmark: Newsreader (serif)
- Body: Source Sans 3 (sans)
- Avoid Inter-only or Geist-default AI landing type

## Do not ship

- Purple gradients
- Neon SaaS chrome
- Generic Inter-on-white AI landing patterns
- Chatbot widgets
- Fake metrics charts

## Components

Default: no UI kit. Add a library only when a ticket plus `pick-ui-library` requires it.
