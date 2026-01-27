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
- Data rows are clickable by default; hover applies to clickable rows

---

## Interaction Rules

- Row-level navigation uses TableRow clickable behavior
- Inline navigation (e.g. Name links) must be explicit links
- Do not combine implicit row click and inline links unless intentionally designed

### Default Row Interaction (Normative)

**Table rows are clickable by default.**

This is the expected interaction model for Table Page patterns.

Rules:
- Row-level navigation is the primary interaction model
- The primary column MAY be visually styled as a link to reinforce row-level navigation
- Visual link styling does NOT imply cell-level click ownership
- Navigation is owned by the row, not by individual cells or columns

> **This behavior is the DEFAULT for Table Page patterns.**
> 
> Pages that do NOT support row-level navigation MUST explicitly disable it.

This is not a stylistic preference. This is the expected interaction model for table pages like Votes, Projects, Drive, Mailing Lists, and similar LFX One views.

**If navigation exists, it should be implemented at the row level, not via individual columns.**

---

## Density Rules

- Default density is compact and scan-friendly
- Dense mode may be used for high-volume datasets
- Scanability is achieved through spacing and rhythm, not typography escalation

---

## Interaction Flexibility (Non-Structural)

**Page patterns lock STRUCTURE and define DEFAULT interaction expectations.**

How interactions work is governed by:
- Component contracts
- Token rules
- Explicit props

The following are **ALLOWED variations** within the default clickable row model and must NOT be inferred away by agents:

- Primary column text MAY be rendered as a link (visual reinforcement of row navigation)
- Tags MAY have semantic color variants (info, success, warning, etc.)
- Column header alignment MAY differ from cell alignment
- Search inputs MAY be full-width or intrinsic
- Multiple filter controls MAY appear in the filter row

**Note:** These variations are intentional and context-dependent. They do not violate the page pattern or the default interaction model.

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

**Critical:** Page patterns define STRUCTURE and DEFAULT interaction expectations.
- Component contracts govern HOW interaction works
- Page patterns govern WHETHER interaction is expected by default

### Agents MUST:
- Enforce page structure exactly as defined
- Respect the default clickable row interaction model
- Preserve row click behavior and primary-column link styling by default
- Look to component contracts for HOW interaction works
- Look to TableRow contract for row interaction rules
- Ask when deviation from defaults is needed

### Agents MUST NOT:
- Remove row-level navigation or primary-column link styling "for consistency"
- Disable clickable rows unless explicitly instructed
- Disable hover affordances unless explicitly instructed
- Assume non-clickable rows without explicit guidance
- Infer column-level navigation instead of row-level
- Replace row clicks with column/cell-level handlers

**Note:** Agents must not remove row-level navigation or primary-column link styling "for consistency" unless explicitly instructed.
