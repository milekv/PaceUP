# Contributing

Thanks for improving PaceUP.

## Workflow

1. Create a focused branch from `main`.
2. Keep changes small enough to review.
3. Run the local checks.
4. Open a pull request using the template.

## Local Checks

```bash
npm run typecheck
npm run lint
npm run build
```

For visible product changes, also use [docs/QA_CHECKLIST.md](docs/QA_CHECKLIST.md) before requesting or merging a review.

## Commit Style

Use short, clear commit messages:

```text
feat: add pace calculator
fix: handle zero distance input
docs: update roadmap
```

## Review Standard

A pull request should explain:

- What changed.
- Why it changed.
- How it was tested.
- Any follow-up work.
