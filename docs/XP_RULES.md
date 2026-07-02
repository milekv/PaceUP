# XP Rules

XP should reward consistent activity without making progress easy to duplicate or exploit.

## Reward Principles

- Reward completed actions, not opened screens.
- Tie every reward to a stable `actionId`.
- Keep XP amounts understandable and predictable.
- Prefer streak and quest bonuses over random rewards.
- Make level-up moments visible but not disruptive.

## Example Events

| Event | Description |
| --- | --- |
| `solo_activity_completed` | User completes a solo workout. |
| `group_activity_completed` | User completes or checks in to a group activity. |
| `strength_workout_completed` | User logs a strength session with useful training data. |
| `plan_workout_completed` | User completes a workout from an active plan. |
| `event_joined` | User joins a local event or race preparation group. |
| `team_joined` | User joins a team or crew. |

## Anti-Duplication

- Store completed reward actions.
- Ignore repeated events with the same `actionId`.
- Keep an XP event log for debugging.
- Make quest progress idempotent where possible.
