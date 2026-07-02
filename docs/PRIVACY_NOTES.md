# Privacy Notes

PaceUP should make it clear which activity and profile details are private, shared with teams, or public.

## Privacy Defaults

- Keep profile data private unless the user chooses to share it.
- Treat location and event participation as sensitive.
- Avoid exposing detailed activity history in public surfaces.
- Let users understand what teams and events can see.

## Social Features

- Public event cards should avoid private user metrics.
- Team views should show only data needed for shared goals.
- Chat and check-in features should have clear moderation paths.
- Profile summaries should avoid leaking exact routines by default.

## Implementation Notes

- Separate private profile fields from public profile fields.
- Scope database reads by active user and membership.
- Review all new public surfaces for accidental data exposure.
- Keep privacy language short and understandable in settings.
