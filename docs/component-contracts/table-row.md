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

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- Clickable vs non-clickable

## Lock Statement

This contract is considered stable. Visual changes must be achieved through tokens, not by expanding component responsibilities.
