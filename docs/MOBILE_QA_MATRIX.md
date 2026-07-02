# Mobile QA Matrix

PaceUP should be tested first as a mobile product, then expanded to larger screens.

## Viewports

| Target | Width | Focus |
| --- | --- | --- |
| Small phone | 360px | Text fit, tap targets, stacked layouts |
| Common phone | 390px | Primary day-to-day experience |
| Large phone | 430px | Sheet and modal spacing |
| Tablet | 768px | Dashboard density and navigation |
| Desktop | 1280px | Wide layout and README screenshots |

## Critical Flows

- login and onboarding,
- start dashboard,
- solo activity completion,
- group activity details,
- quest reward feedback,
- profile and settings,
- analytics overview.

## Failure States

- slow network,
- empty activity history,
- missing profile image,
- expired session,
- duplicated reward event,
- unavailable database request.
