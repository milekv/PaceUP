# PaceUP QA Checklist

This checklist keeps manual testing consistent before merging visible product changes.

## Core Product Flow

- [ ] Landing or start screen loads without console errors.
- [ ] Authentication and onboarding states are understandable.
- [ ] Dashboard shows XP, level, plan, and activity information clearly.
- [ ] Solo activity flow can be started, completed, and summarized.
- [ ] Group activity flow shows join/check-in/status behavior clearly.
- [ ] Quest progress and XP rewards are not duplicated for the same action.
- [ ] Profile and settings screens handle missing or partial user data.

## Activity Types

- [ ] Running shows distance, time, and pace.
- [ ] Walking supports low-friction activity logging.
- [ ] Cycling uses speed-oriented language instead of running pace.
- [ ] Strength training uses sets, reps, weight, RPE, and volume.
- [ ] Social activities do not require sport-specific metrics.

## Mobile Experience

- [ ] Primary actions are reachable with one hand on mobile.
- [ ] Text does not overflow buttons, cards, tabs, or navigation.
- [ ] Tap targets are comfortable on narrow screens.
- [ ] Modals and sheets can be closed without losing context.
- [ ] Empty, loading, and error states are visible and helpful.

## Data Safety

- [ ] No real API keys, tokens, or private credentials are committed.
- [ ] `.env.example` contains placeholders only.
- [ ] Mock/local state can be reset during testing.
- [ ] Database-backed features handle failed requests gracefully.

## Release Readiness

- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] README and product docs match the current user-facing behavior.
- [ ] Known follow-up work is captured in issues or roadmap docs.
