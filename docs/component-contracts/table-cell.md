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

**Typography:** TableCell binds exclusively to system-level UI role body typography tokens. It must not reference data or control typography roles.

Allowed typography bindings:
- `ui.text.body-primary.*`
- `ui.text.body-secondary.*`

NOT allowed:
- `ui.text.data.*`
- Primitive typography tokens
- Semantic typography roles

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
- Provide interior horizontal spacing for scan comfort

## Not Responsible For

- Row-level interactions
- Background changes
- Border rendering
- Column width management
- Row height or vertical padding
- Column width behavior (owned by Table)

---

## Interior Spacing & Scanability

**TableCell owns interior horizontal spacing only.**

### Core Principle

TableCell must provide comfortable scan spacing for all content types without affecting row height or density:

- **Categorical content** (Tags) — Must not feel cramped
- **Numeric values** — Need breathing room from grid edges
- **Meta text** (dates) — Require calm spacing
- **Action text** — Need sufficient padding

### Spacing Strategy

- **Horizontal padding** — Adjusted to prevent visual compression in intrinsic-width columns
- **Vertical padding** — Fixed per density variant (default vs dense)
- **Proportional scaling** — Dense variant maintains relative relationships

### Lock Note

> Interior spacing exists to prevent visual compression in intrinsic-width columns
> while preserving dense row height. TableCell must not affect row-level interaction,
> column width behavior, or typography scale.

---

## Storybook Coverage

- Primary
- Secondary
- Muted
- Numeric (right-aligned)
- Small variant
- With avatar/icon content
