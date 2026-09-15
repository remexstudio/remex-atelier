# Handoff

- Status: **DEV PASS**
- TASK: V6-1 — strip geo slogan sitewide
- Commit: `fix(copy): remove Seattle and global-clients slogan sitewide`
- Notes:
  - Removed `Seattle studio. Global clients.` / `A Seattle studio.` / `a Seattle atelier` from product surface (chrome default, home close, services/approach/contact/about/lab/pulse, metadata, README).
  - Footer omits the place line. Study pages keep `Studio study. Client identity anonymized.` Legal `Jiyuyun Studio LLC` stays on About / Approach.
  - No replacement city / global-clients / worldwide / mobile-studio slogan.
  - `rg "Seattle studio|Global clients|A Seattle studio"` is zero in `app/`, `components/`, `lib/`; README neutralized.
  - Did not vercel deploy (coordinator). Did not open V6-2.
