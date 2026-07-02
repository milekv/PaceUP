# Performance Budget

PaceUP is a mobile-first product, so performance should be treated as a product feature.

## Targets

- Keep the initial experience fast on mid-range phones.
- Avoid blocking the main thread during dashboard load.
- Lazy-load heavy product areas when they are not needed on first paint.
- Keep animation smooth and purposeful.
- Prefer predictable layout dimensions to avoid content shifts.

## Watch Areas

- authentication and onboarding screens,
- dashboard metric cards,
- quest and badge reward animations,
- activity history lists,
- analytics charts,
- event and team cards,
- profile media.

## Review Checklist

- The app still builds with `npm run build`.
- New dependencies are justified by product value.
- Repeated cards and lists do not re-render unnecessarily.
- Images and future media assets are optimized before release.
- Loading states make slow network behavior understandable.
