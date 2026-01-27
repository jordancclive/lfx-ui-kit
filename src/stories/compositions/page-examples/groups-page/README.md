# Groups Page Example

**PAGE EXAMPLE — NOT A PATTERN**

This directory represents the Groups product page for LFX One.

## Pattern Used

Groups implements the **Segmented Table Page** pattern.

The complete implementation is shown in:
```
Page Patterns / Segmented Table Page
```

## Why No Separate Story File?

The Groups page is the canonical demonstration of the Segmented Table Page pattern.
Rather than duplicate the implementation, the pattern itself uses Groups as its
example data (My Groups, Other Groups).

**Key Point:**
- Segmented Table Page (under Page Patterns) = The reusable structural blueprint
- Groups page content = The example data used to demonstrate that blueprint

## For Agents

**Do NOT copy or modify Groups page structure directly.**

Instead:
1. Reference the Segmented Table Page pattern
2. Copy the pattern structure
3. Replace Groups-specific data with your page's data

## Pattern Location

```
src/stories/compositions/page-patterns/segmented-table-page/
```

## Pattern Documentation

```
docs/page-patterns/segmented-table-page.md
```

---

This approach prevents duplication and makes clear that Groups is an instance
of a reusable pattern, not a unique page structure.
