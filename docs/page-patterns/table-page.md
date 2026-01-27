# Table Page — Canonical Pattern

## Purpose

The Table Page is the **default page-level pattern** for displaying a single dataset in LFX One.

It is used for pages such as:
- Projects
- Votes
- Surveys
- Drive
- Mailing Lists
- Any view where the page title and table represent the same dataset

This pattern is **normative**.

---

## Canonical Structure

```
AppHeader
└─ PageSection (dense)
   └─ Card
      ├─ (optional) Filter Row
      │  ├─ SearchInput (variant="toolbar")
      │  └─ One or more filter controls
      ├─ Table
      └─ (optional) Pagination
```

---

## Structural Rules (Do Not Violate)

- Exactly **one table per page**
- **No section titles**
- Page title **equals** table title
- Filters, when present, live **inside the Card**, above the table
- Pagination, when present, lives **inside the Card**, below the table
- No additional wrappers or layout containers

---

## Filter Row Rules

- SearchInput is flexible width and dominates the row
- All other controls are intrinsic width
- Multiple filter controls are allowed
- Filter rows are optional
- Filter rows apply to the **entire table**

---

## Table Rules

- Table MUST use semantic column definitions (flexible vs intrinsic)
- Primary text columns expand
- Categorical, numeric, meta, and action columns are intrinsic
- Table headers are left-aligned, regardless of cell alignment
- Data rows may be clickable; hover only applies to clickable rows

---

## Interaction Rules

- Row-level navigation uses TableRow clickable behavior
- Inline navigation (e.g. Name links) must be explicit links
- Do not combine implicit row click and inline links unless intentionally designed

---

## Density Rules

- Default density is compact and scan-friendly
- Dense mode may be used for high-volume datasets
- Scanability is achieved through spacing and rhythm, not typography escalation

---

## Forbidden Patterns

- ❌ Multiple tables
- ❌ Section titles
- ❌ Filters outside the Card
- ❌ Equal-width columns
- ❌ Visual hacks or spacing overrides
- ❌ Story-only CSS fixes

---

## Lock Statement

This pattern is considered **normative**.
Changes require explicit design system approval.
Agents must treat this pattern as a hard constraint.
