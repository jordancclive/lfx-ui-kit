# TableRow

**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable, hoverable row used in tables and lists.

TableRow provides a hover affordance for scannability and interactivity.

## Non-Goals

- Does not render cell content
- Does not own cell typography
- Does not manage table layout
- Does not define or constrain column structure

## Interaction Model

- **Interactive:** Yes
- **Selectable:** Yes
- **Controlled by parent:** Yes

## Supported States

- `default`
- `hover`
- `selected`
- `disabled`

## State Precedence

1. `disabled`
2. `selected`
3. `hover`
4. `default`

## State Behavior

- Hover is supported for interactive rows
- Hover is suppressed for disabled rows
- Hover does not override selected state

## Token Ownership

### Allowed

- `color.table.row.background.*`
- `color.table.row.border`
- `spacing.*`
- `button-stroke`

### Forbidden

- `color.table.cell.*`
- `color.text.*` (cells handle text)
- Any content-specific tokens

## Responsibilities

- Apply background per state
- Apply row divider/border
- Handle cursor + click affordance

## Not Responsible For

- Cell hover behavior
- Text color changes
- Sorting logic

---

## Row Interaction Semantics

**Row is the primary interactive unit, not individual cells.**

### Normative Rules

- Rows MAY be clickable when explicitly enabled via props (e.g. `clickable: true`)
- Row clickability MUST be explicit — no inferred interaction
- Hover affordance MAY appear only when the row is clickable
- Disabled rows MUST NOT respond to hover or click
- Row click behavior MUST NOT be implemented at the column or cell level

### Explicit Prohibitions

- ❌ Columns MUST NOT own navigation or click behavior
- ❌ Cells MUST NOT register click handlers for navigation
- ❌ Visual link styling inside cells does not imply click ownership

### Clarification

Primary column text MAY be styled to look like a link when the row is clickable, but **navigation is still owned by the row**.

This means:
- The row handles the click event
- The row determines navigation behavior
- Cell styling is visual only, not functional

---

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- Clickable vs non-clickable

## Lock Statement

This contract is considered stable. Row-level interaction semantics must not be altered without explicit design system approval. Visual changes must be achieved through tokens, not by expanding component responsibilities.
