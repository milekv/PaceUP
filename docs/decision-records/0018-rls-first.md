# 0018 - RLS First

User-owned records need strict access rules.

Decision:
Backend tables should be designed with Row Level Security in mind.

Reason:
Profile, activity, XP, and team data should not leak across users.
