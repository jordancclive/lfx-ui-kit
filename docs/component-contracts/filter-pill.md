# FilterPill

**Component:** FilterPill  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable filter or toggle.

## Non-Goals

- Managing selection groups
- Persisting selection state

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

- `ui.pill.surface.*` (component-scoped UI role surface tokens)
- `ui.text.label.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `text.*` (UI role text colors)
- `spacing.*`
- `rounded-full`

**Typography:** FilterPill binds exclusively to system-level UI role typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** FilterPill binds exclusively to component-scoped UI role surface tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Button color tokens
- Layout container tokens

## Responsibilities

- Render selected vs unselected visuals
- Maintain visual persistence for selected state

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- WithIcon

---

**Lock Statement:** This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
