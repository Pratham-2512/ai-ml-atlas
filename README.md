# AI/ML Atlas

A personal recreation of [viveknaskar/everything-ai-ml](https://viveknaskar.github.io/everything-ai-ml/) — a curated field guide to 227 AI/ML learning resources across 30 categories.

Built with Next.js (App Router) + React + TypeScript. Dark/light themed, terminal-inspired design with live search, clickable category filters, per-entry bookmarking (saved in your browser), and copy-link buttons — all backed by a single typed data file (`src/data/resources.ts`) generated from the original static list.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/data/resources.ts` — the 30 categories / 227 resources, typed. Auto-generated from the original `legacy/index.html`; hand-edit here going forward, not by re-running the generator.
- `src/context/AtlasContext.tsx` — shared state: theme, bookmarks, search query, active category filter (persisted to `localStorage`).
- `src/components/` — page sections (Hero, Stats, CategoryGrid, FullIndex, etc.).
- `legacy/` — the original single-file static site, kept for reference.

## Deploy

```bash
vercel deploy --prod
```

Original list and credit: Vivek Naskar — https://github.com/viveknaskar/everything-ai-ml (MIT licensed). This is an unofficial fan recreation for personal use, not affiliated with the original author.
