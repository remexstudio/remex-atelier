# Remex Studio

**Agents, built to the brief.**

A Seattle studio. Legal entity: Jiyuyun Studio LLC.

Repository: [remexstudio/remex-atelier](https://github.com/remexstudio/remex-atelier).

## Stack

- Next.js App Router (16)
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm
- Vercel

## Scripts

```bash
pnpm install
pnpm dev      # local Next.js
pnpm build    # production build
pnpm start    # serve the build
pnpm lint     # ESLint
```

Node.js 20+. Package manager: `pnpm@12` (see `packageManager` in `package.json`).

## Brand voice

Editorial atelier. Light paper ground, large type, short specific copy. Studies are fictional clients. Every study page carries the footer line `Studio study. Client identity anonymized.` English UI only. No fake conversion percentages, no founder PII, no purple or neon SaaS chrome.

One-liner: Agents, built to the brief.

Longer: We turn one painful workflow into a working agent, then keep molting it.

## Constitution docs

- [`AGENTS.md`](AGENTS.md): Leader / Dev loop, language rules, Studio v1 forbids
- [`docs/brand.md`](docs/brand.md): names, offers, studies, voice locks
- [`docs/design.md`](docs/design.md): palette, type, motion, a11y tokens
- [`docs/sitemap.md`](docs/sitemap.md): shipped Studio v1 routes

## Studio v1 routes

### Marketing

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/work` | Studies index |
| `/work/lumen-atelier` | Lumen Atelier study |
| `/work/northline` | Northline Analytics study |
| `/work/kite` | Kite & Co. study |
| `/work/paperline` | Paperline Retail study |
| `/services` | Offers |
| `/approach` | How the studio works |
| `/lab` | Lab index |
| `/lab/pulse` | Pulse prototype (not a client engagement) |
| `/about` | Studio + legal |
| `/contact` | Brief form |

### Demo families

| Family | Routes |
| --- | --- |
| Lumen | `/demo/lumen`, `/demo/lumen/consult`, `/demo/lumen/try-on`, `/demo/lumen/bag`, `/demo/lumen/pay`, `/demo/lumen/desk` |
| Northline | `/demo/northline`, `/demo/northline/ask`, `/demo/northline/source`, `/demo/northline/change`, `/demo/northline/log` |
| Kite | `/demo/kite`, `/demo/kite/brief`, `/demo/kite/thread/[id]`, `/demo/kite/digest` |
| Paperline | `/demo/paperline`, `/demo/paperline/queue`, `/demo/paperline/case/[id]`, `/demo/paperline/policy` |

Full paths are listed in [`docs/sitemap.md`](docs/sitemap.md).

## Preview

Public alias: [https://remex-atelier.vercel.app](https://remex-atelier.vercel.app)

The Vercel project lives under the `qinlinj-projects` team (no `remexstudio` Vercel team on the deploy account used for Studio v1). Team-scoped preview URLs may require Vercel login when Deployment Protection is on. Prefer the public alias above; if anonymous curl hits SSO or a stale page, open the latest production deployment in the Vercel dashboard or use an authenticated `vercel curl`.

GitHub `main` is the source of truth. Confirm the production alias points at the commit you expect after each push.

## Legal

- Geography: A Seattle studio.
- Entity: Jiyuyun Studio LLC.
