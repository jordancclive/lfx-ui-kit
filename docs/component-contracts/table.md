# Table

**Component Tier:** Tier 3 — Composite Layout Component

## Purpose

Provides structural layout for tabular data. Coordinates header rows and data rows. Establishes column alignment and spacing.

## Non-Goals

- Does NOT implement sorting logic
- Does NOT implement selection logic
- Does NOT manage hover or disabled states
- Does NOT own row or cell visual styles
- Does NOT fetch or manage data
- Does NOT implement pagination or virtualization
- Does NOT inspect or modify child props

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No

## Token Ownership

### Allowed

- Layout tokens (`spacing.*`, `radius.*`)
- Surface tokens for container only (`color.table.surface.*`)

### Forbidden

- `color.table.row.*`
- `color.table.cell.*`
- `color.table.header.*`
- Typography tokens for content

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | HTMLElement \| HTMLElement[] | — | Table content (header row, data rows) |
| columns | number | — | Number of columns for grid layout |
| withBorder | boolean | false | Apply container border |
| withBackground | boolean | false | Apply surface background |
| dense | boolean | false | Reduced vertical spacing |

## Layout Strategy

Table uses **CSS Grid** for column alignment:
- Header cells and body cells align via shared grid column definitions
- Column widths can be controlled via `columns` prop or auto-fit
- Rows span full grid width

## Responsibilities

- Render TableHeaderCell and TableRow children
- Provide column layout via CSS Grid
- Provide consistent column alignment between header and body
- Optionally provide outer container styling (border, radius)

## Not Responsible For

- Sorting logic or callbacks
- Selection state management
- Hover/disabled visual states
- Row or cell styling
- Data fetching or management
- Pagination or virtualization

## Composition

Table expects these children:
- **Header row:** Container with `TableHeaderCell` components
- **Body rows:** `TableRow` components containing `TableCell` components

Visual ownership remains with child components:
- `TableRow` owns hover, selected, disabled backgrounds
- `TableCell` owns text color, alignment, typography
- `TableHeaderCell` owns header text, sort indicators

## Storybook Coverage

- Default
- WithBorder
- WithBackground
- Dense
- InContext (realistic example)
