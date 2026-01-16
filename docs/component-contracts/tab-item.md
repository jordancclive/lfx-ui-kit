# TabItem

**Component:** TabItem  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a navigational tab within a group.

## Non-Goals

- Layout orchestration
- Managing which tab is selected

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

- `color.tabs.item.*` (UI role tab-specific tokens)
- `ui.text.control.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `text.*` (UI role text colors)
- `spacing.*`
- `rounded-full`

**Typography:** TabItem binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** TabItem binds exclusively to UI role tab tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Container background tokens

## Size Variants

- `default`
- `small`

Size affects typography and spacing only.

## Responsibilities

- Render correct visual state
- Apply 4-sided border (no bottom-only borders)
- Icon inherits text color

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- Small variants
- WithIcon

---

**Lock Statement:** This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
