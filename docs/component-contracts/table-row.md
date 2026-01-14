# TableRow

**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable, hoverable row used in tables and lists.

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
