# TableHeaderCell

**Component Tier:** Tier 2 — Structural + Visual Indicator Component

## Purpose

Represents a single header cell in a table. Owns header text presentation and optional visual indicators (tooltip icon, sort indicator). Does NOT own sorting logic or table layout.

## Non-Goals

- Does NOT manage sorting logic or callbacks
- Does NOT manage column widths or table layout
- Does NOT manage row or table state
- Does NOT apply row hover/selection styles
- Does NOT apply backgrounds to rows or tables
- Does NOT implement tooltip behavior (visual indicator only)

## Interaction Model

- **Interactive:** No (visual indicators only)
- **Selectable:** No
- **Controlled by parent:** Yes (sortDirection, disabled)

## Token Ownership

### Allowed

- `color.table.header.text.*`
- `color.table.header.icon.*`
- `spacing.*`
- Typography tokens (`font-family`, `font-size`, `font-weight`, `line-height`)

### Forbidden

- `color.table.row.*`
- `color.table.cell.*`
- Background tokens
- Border tokens
- Interactive tokens

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string \| HTMLElement \| HTMLElement[] | — | Header content |
| align | 'left' \| 'right' | 'left' | Text alignment |
| sortDirection | 'asc' \| 'desc' \| null | null | Visual sort indicator direction |
| showTooltip | boolean | false | Show tooltip icon (visual only) |
| disabled | boolean | false | Disabled state |

## State Rules

- TableHeaderCell is **mostly stateless**
- Visual state is derived from props only
- `sortDirection` controls sort icon visibility and rotation
- `disabled` affects text and icon colors
- No hover/selected state beyond text/icon color changes

## Typography Rules

- Uses label/heading typography tokens
- Bolder weight than TableCell to establish hierarchy
- Same font family as system

## Responsibilities

- Render header text
- Control header typography
- Control text color based on state
- Control alignment (left/right)
- Render optional tooltip icon
- Render optional sort indicator (visual only)
- Reflect sort direction visually if provided

## Not Responsible For

- Sorting logic or callbacks
- Column width management
- Table layout
- Row or table state
- Tooltip behavior/popover
- Click handling for sort

## Storybook Coverage

- Default
- RightAligned
- WithTooltip
- SortAsc
- SortDesc
- Disabled
- AllVariants
