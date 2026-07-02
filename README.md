# PaceUP

PaceUP is a training-focused web app for runners who want to plan goals, calculate race pace, and track progress without spreadsheet chaos.

The repository is prepared as a production-style frontend starter: typed React, Vite, documented architecture, CI, GitHub Pages deployment, issue templates, and a clear project roadmap.

## Live Demo

Planned GitHub Pages URL:

```text
https://milekv.github.io/PaceUP/
```

## Why This Project Exists

Many runners know the race goal they want, but not the day-to-day pace and training structure needed to get there. PaceUP turns a goal such as "10 km under 50 minutes" into practical pacing guidance, weekly training blocks, and progress insights.

## Core Features

- Pace calculator for distance, time, and target pace.
- Goal cards for 5K, 10K, half marathon, and custom distances.
- Training week overview with easy, tempo, interval, and recovery sessions.
- Progress dashboard with recent activity summaries.
- Clean, mobile-first interface for quick use before or after training.

## Tech Stack

- React
- TypeScript
- Vite
- CSS modules through plain CSS structure
- GitHub Actions
- GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
npm run lint
```

## Project Structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── docs/
│   ├── adr/
│   ├── ARCHITECTURE.md
│   ├── PRODUCT_BRIEF.md
│   └── ROADMAP.md
├── src/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── CONTRIBUTING.md
├── SECURITY.md
└── package.json
```

## Development Standard

Before opening a pull request:

- Keep TypeScript clean.
- Run `npm run build`.
- Add or update docs when behavior changes.
- Keep UI copy short and product-focused.
- Use pull requests for meaningful changes.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md).

## License

MIT License. See [LICENSE](LICENSE).
