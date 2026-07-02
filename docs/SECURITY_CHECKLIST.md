# Security Checklist

PaceUP handles profile, progress, and activity data, so security rules should be visible before backend work expands.

## Secrets

- Do not commit real API keys, tokens, or service credentials.
- Keep `.env.example` limited to safe placeholders.
- Rotate any credential that appears in a public branch.

## Authentication

- Keep login and registration errors generic.
- Avoid exposing whether an email exists.
- Make logout available from settings.
- Treat session refresh failures as recoverable states.

## Data Access

- Use Row Level Security for user-owned records.
- Keep profiles, activities, quests, teams, and XP events scoped to the active user.
- Validate write operations on the server side before trusting UI state.
- Log important state changes without exposing private payloads.

## Product Safety

- Prevent duplicated XP rewards for the same action.
- Avoid leaking private activity details into public team or event views.
- Review social features before enabling public discovery.
