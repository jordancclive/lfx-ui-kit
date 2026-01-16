# TableCell

**Component Tier:** Tier 2 — Structural Content Component

## Purpose

Represents a single cell within a table row. Owns text presentation, alignment, and optional leading/trailing content.

## Non-Goals

- Does NOT handle row background, hover, selection, or click behavior
- Does NOT manage table layout or column sizing
- Does NOT define borders between rows
- Does NOT apply hover, selected, or disabled styles
- Does NOT manage sorting or header behavior

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No (stateless)

## Token Ownership

### Allowed

- `color.table.cell.text.*`
- `spacing.*`
- Typography tokens (`font-family`, `font-size`, `font-weight`, `line-height`)

**Typography:** TableCell binds exclusively to system-level UI role typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

### Forbidden

- `color.table.row.*`
- Background tokens
- Border tokens
- Interactive tokens

## Variants

### contentType

- `primary` — Default text color
- `secondary` — Subdued text color
- `muted` — Lowest contrast text
- `numeric` — Right-aligned, same typography as primary

### align

- `left` — Left-aligned (default)
- `right` — Right-aligned

### size

- `default`
- `small`

## Typography Rules

- **Primary:** Default text color
- **Secondary:** Subdued text color
- **Muted:** Lowest contrast text
- **Numeric:** Right-aligned, same typography as primary

## State Rules

- TableCell is **stateless**
- Visual state comes ONLY from parent TableRow background
- No hover/selected/disabled styles applied at the cell level

## Responsibilities

- Apply text color based on contentType
- Apply text alignment based on align
- Apply spacing tokens for padding
- Render children without modification

## Not Responsible For

- Row-level interactions
- Background changes
- Border rendering
- Column width management

## Storybook Coverage

- Primary
- Secondary
- Muted
- Numeric (right-aligned)
- Small variant
- With avatar/icon content
