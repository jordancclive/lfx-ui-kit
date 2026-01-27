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

### Row-Level Interaction

- Segmented Table Page patterns permit row-level navigation per table block
- Page patterns do not restrict row clickability
- Interaction behavior is governed by component contracts, not page structure
- Agents MUST NOT disable row hover or click unless forbidden by TableRow contract
- Each table block may independently have clickable or non-clickable rows
- No assumptions may be made based on block position (top vs bottom)

**If navigation exists, it should be implemented at the row level, not via individual columns.**

**Row interaction must be declared per table block and must not be inferred across blocks.**

---

## Interaction Flexibility (Non-Structural)

**Page patterns lock STRUCTURE only.**

Interaction affordances are governed by:
- Component contracts
- Token rules
- Explicit props

The following are **ALLOWED variations** within the pattern and must NOT be inferred away by agents:

- Table rows MAY be hoverable or not
- Individual columns MAY be clickable
- Primary column text MAY be rendered as a link
- Tags MAY have semantic color variants (info, success, warning, etc.)
- Column header alignment MAY differ from cell alignment
- Search inputs MAY be full-width or intrinsic
- Multiple filter controls MAY appear in the filter row

**Note:** These variations are intentional and context-dependent. They do not violate the page pattern.

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

---

## Agent Safety Appendix

### Agents MUST:
- Enforce page structure exactly as defined
- Respect component contracts for interaction
- Look to component APIs for behavior
- Ask when interaction intent is unclear
- Preserve row click behavior when explicitly enabled
- Look to TableRow contract for row interaction rules

### Agents MUST NOT:
- Infer interaction rules from page patterns
- Disable hover, click, or links unless forbidden by component contract
- Assume filters or pagination behave identically across pages
- Remove semantic affordances to "simplify" the UI
- Infer column-level navigation instead of row-level
- Replace row clicks with links or buttons
- Remove hover affordances "for consistency"

**Critical:** Page patterns describe WHAT is on the page, not HOW users interact with each element.
