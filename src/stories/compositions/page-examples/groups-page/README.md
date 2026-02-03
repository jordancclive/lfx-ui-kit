# Groups Page Example

**PAGE EXAMPLE — NOT A PATTERN**

This directory represents the Groups product page for LFX One.

## Pattern Used

Groups uses the **Table Page** pattern via `createTablePageFromConfig`.

The complete implementation is shown in:
```
Page Patterns / Table Page
```

## Structure

Groups follows the canonical Table Page structure:
- AppShell → PageLayout → AppHeader → PageSection → DataTable
- Single table surface with search, filters, and optional pagination
- Configuration-only approach (no custom layout)

## For Agents

**Do NOT copy or modify Groups page structure directly.**

Instead:
1. Reference the Table Page pattern
2. Use `createTablePageFromConfig` as demonstrated in `groups-page.stories.ts`
3. Replace Groups-specific data with your page's data

## Pattern Location

```
src/stories/compositions/page-patterns/table-page/
```

---

This approach ensures Groups follows the canonical single-table workflow
pattern used by Votes, Surveys, Drive, and Mailing Lists.
