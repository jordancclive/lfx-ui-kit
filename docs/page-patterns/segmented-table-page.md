# Segmented Table Page — Pattern

## Purpose

The Segmented Table Page is a **specialized pattern** used when a page must display **multiple related datasets** simultaneously.

This pattern is intentionally more explicit than the Table Page to prevent agent inference errors.

Groups is a **concrete example**, not the pattern itself.

---

## Canonical Structure

```
AppHeader
└─ PageSection (dense)
   ├─ Table Block
   │  ├─ Section Title
   │  └─ Card
   │     ├─ (optional) Filter Row
   │     ├─ Table
   │     └─ (optional) Pagination
   ├─ Table Block
   │  ├─ Section Title
   │  └─ Card
   │     ├─ (optional) Filter Row
   │     ├─ Table
   │     └─ (optional) Pagination
```

---

## Table Block Definition

A **Table Block** is a self-contained unit consisting of:
- A required section title
- A Card
- Optional filters
- A Table
- Optional pagination

Each block is **independent**.

---

## Structural Rules

- Multiple table blocks are allowed
- Each block MUST declare its own filters and pagination
- No assumptions based on position (top vs bottom)
- Section titles are REQUIRED for each block
- Blocks may be reordered freely

---

## Filter Rules

- Filters are optional per table block
- A block may have zero, one, or many filter controls
- SearchInput (variant="toolbar") dominates when present
- Filters apply ONLY to their table block

---

## Pagination Rules

- Pagination is optional per table block
- Pagination applies ONLY to its table
- Pagination lives inside the Card, below the table

---

## Table Rules

- Tables follow the same semantic column rules as Table Page
- Column semantics are required
- Equal-width columns are forbidden
- Header alignment rules remain unchanged

---

## Interaction Rules

- Clickability is declared per table
- Hover only applies to clickable rows
- Inline links must be explicit

---

## Relationship to Table Page

| Aspect | Table Page | Segmented Table Page |
|--------|-----------|----------------------|
| Tables per page | One | Multiple |
| Section titles | None | Required |
| Filters | Optional | Optional per block |
| Pagination | Optional | Optional per block |
| Use case | Default | Specialized |

---

## Forbidden Patterns

- ❌ Implicit behavior based on position
- ❌ Shared filters across blocks
- ❌ Missing section titles
- ❌ Unequal treatment without explicit flags
- ❌ Visual hacks or inline spacing

---

## Lock Statement

This pattern is considered **normative**.
Agents must not infer behavior across blocks.
All behavior must be explicit.
