# Architecture

## Overview

PaceUP starts as a client-side React application deployed to GitHub Pages.

```text
Browser
  |
  v
React App
  |
  +-- components: reusable UI
  +-- lib: pace calculation and domain logic
  +-- styles: global styling
```

## Frontend

- React renders the interface.
- TypeScript protects domain calculations and component contracts.
- Vite provides local development and production builds.
- Static deployment keeps hosting simple.

## Domain Logic

Running calculations live in `src/lib`.

Initial domain functions:

- pace per kilometer
- pace formatting
- distance and time conversions

Future domain modules can include training load, race predictions, and weekly plan generation.

## Data

The MVP uses static sample data. User persistence is intentionally deferred.

Future options:

- local storage for personal settings
- Supabase or Firebase for accounts and saved plans
- imported activity files from external tracking tools

## Deployment

GitHub Actions builds the app and deploys it to GitHub Pages.

The Vite `base` value is `/PaceUP/`, which matches the repository name.
