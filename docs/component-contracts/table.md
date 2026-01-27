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
| columns | number \| ColumnDefinition[] | — | Column count or semantic column definitions |
| controls | HTMLElement | — | Optional controls row (search + filters) above table header |
| withBorder | boolean | false | Apply container border |
| withBackground | boolean | false | Apply surface background |
| dense | boolean | false | Reduced vertical spacing |

### `controls` Prop (NEW)

**Purpose:** Allows Table to own its top controls (search + filters).

**Behavior:**
- Renders INSIDE the table container
- Renders IMMEDIATELY ABOVE the table header (no gap)
- Internal padding for breathing room (12px top/bottom, 16px left/right)
- Docks directly to table header (visually reads as table's "top edge")
- SearchInput automatically receives `flex: 1` (full-width by default)

**Usage:**
```typescript
const controls = document.createElement('div');
controls.appendChild(createSearchInput({ placeholder: 'Search...', variant: 'toolbar' }));
controls.appendChild(createFilterDropdownTrigger({ label: 'All Types' }));

createTable({
  controls,
  children: [tableHeader, tableBody],
  columns: columnDefinitions,
});
```

**Rules:**
- Table owns layout, spacing, and docking
- Pages do NOT manage filter row spacing
- No margin, padding, or flex overrides needed in parent
- Filter order should match column semantics

## Layout Strategy

Table uses **CSS Grid** for column alignment:
- Header cells and body cells align via shared grid column definitions
- Column widths can be controlled via `columns` prop or auto-fit
- Rows span full grid width

## Column Semantics

Tables MUST NOT assume equal-width columns. Column width behavior is semantic, not visual.

The table component does NOT decide content rendering — cells do.

### Column Types

**Primary Text Column**
- Flexible width (expands to fill available space)
- Left aligned
- Truncates last when space is constrained
- Example: Group name, project name

**Categorical Column**
- Intrinsic width (sized to content)
- Uses Tag/Badge content for visual grouping
- Example: Type, status, category

**Numeric Column**
- Intrinsic width (sized to content)
- Right aligned for scannability
- Example: Counts, metrics, percentages

**Action Column**
- Fixed or intrinsic width
- Contains interactive controls only (buttons, menus)
- Example: Row actions, overflow menus

### Column Width Rules

- Table provides grid structure only
- Cells declare their semantic width intent
- Flexible columns share remaining space
- Intrinsic columns size to content
- Fixed columns enforce explicit dimensions

## Column Width Semantics

**Tables MUST NOT assume equal-width columns.**

Column width behavior is semantic, not visual. The Table component owns column width behavior. TableCell and TableHeaderCell do NOT control column width.

### Semantic Column Width Types

**primary**
- Purpose: Main textual content (e.g., Name, Description, Title)
- Width behavior: Flexible (expands to fill available space)
- Multiple primary columns share available space proportionally
- Example: Group name, Project description

**categorical**
- Purpose: Tags, labels, short categorical values
- Width behavior: Intrinsic (content-sized)
- Wraps Tag components or short text labels
- Example: Type, Status, Category

**numeric**
- Purpose: Numbers, counts, metrics
- Width behavior: Intrinsic (content-sized)
- Alignment: Right (for scannability)
- Example: Member count, Percentage, Duration

**meta**
- Purpose: Dates, timestamps, secondary metadata
- Width behavior: Intrinsic (content-sized)
- Example: Last Updated, Created Date, Modified By

**action**
- Purpose: Icons, menus, row actions
- Width behavior: Intrinsic or fixed
- Contains interactive controls only
- Example: Row actions, Overflow menu, Quick actions

### Implementation Rules

- **Equal-width columns are forbidden by default**
- Column width semantics MUST be encoded in Table component, not inferred in stories
- The `columns` prop accepts semantic column definitions
- Table generates `grid-template-columns` based on semantic types
- Cells do NOT control their own width via CSS

### Width Priority

When multiple primary columns exist:
1. First primary column receives priority (larger flex basis)
2. Subsequent primary columns share remaining space
3. All intrinsic columns size to content first

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
