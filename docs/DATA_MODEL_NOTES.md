# Data Model Notes

These notes describe the main product entities PaceUP should keep stable as the backend grows.

## Core Entities

| Entity | Purpose |
| --- | --- |
| User profile | Public and private profile details, level, XP, and preferences. |
| Activity | Solo or group movement record with type-specific metrics. |
| Quest | Time-bounded challenge with progress and reward rules. |
| XP event | Immutable record of rewarded user action. |
| Badge | Unlockable achievement tied to progress or behavior. |
| Team | Crew of users with shared goals and activity context. |
| Event | Local sport event or race preparation space. |

## Design Rules

- Keep reward events append-only.
- Separate activity metrics by type instead of forcing one schema.
- Treat public team/event data differently from private profile data.
- Store external integrations behind service boundaries.
- Prefer explicit timestamps for progress, completion, and reward actions.
