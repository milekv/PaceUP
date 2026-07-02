# 0017 - Service Boundary

UI should not directly own persistence details.

Decision:
Database access should sit behind service-layer boundaries.

Reason:
This makes it easier to switch between mock mode and hosted persistence.
