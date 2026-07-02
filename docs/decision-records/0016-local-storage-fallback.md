# 0016 - Local Storage Fallback

Mock mode needs predictable fallback behavior.

Decision:
Local state should be resettable and clearly separate from production persistence.

Reason:
Testing progress and rewards is easier when mock data is controlled.
