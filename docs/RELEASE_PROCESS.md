# Release Process

PaceUP releases should be small, reversible, and easy to verify on mobile.

## Before Merge

- Confirm the change matches the product roadmap.
- Check that public copy, README content, and visible UI language stay consistent.
- Run the relevant local checks for source changes.
- Use the QA checklist for any visible product flow.
- Capture follow-up work in docs or issues instead of hiding it in comments.

## After Merge

- Confirm the default branch contains the expected commit.
- Check the live product URL after deployment finishes.
- Verify that no secrets or environment values were exposed.
- Keep release notes short and focused on user-facing impact.

## Rollback Signal

Rollback or hotfix the release when:

- authentication blocks normal usage,
- the dashboard cannot load,
- XP or quest progress is duplicated,
- mobile layout breaks primary actions,
- production data becomes inconsistent.
