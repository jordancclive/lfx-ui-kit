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

### Row-Level Interaction

- Table Page patterns permit row-level navigation
- Page patterns do not restrict row clickability
- Interaction behavior is governed by component contracts, not page structure
- Agents MUST NOT disable row hover or click unless forbidden by TableRow contract

**If navigation exists, it should be implemented at the row level, not via individual columns.**

---

## Density Rules

- Default density is compact and scan-friendly
- Dense mode may be used for high-volume datasets
- Scanability is achieved through spacing and rhythm, not typography escalation

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
