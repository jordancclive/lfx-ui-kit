# FilterDropdownTrigger

**Component:** FilterDropdownTrigger  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Acts as the trigger for a dropdown or select menu.

## Non-Goals

- Rendering menu items
- Keyboard navigation
- Portal logic

## Interaction Model

- **Interactive:** Yes
- **Selectable:** No
- **Controlled by parent:** Yes (open/closed)

## Supported States

- `default`
- `focus / open`
- `disabled`

## Token Ownership

### Allowed

- `ui.input.surface.*` (component-scoped UI role surface tokens)
- `ui.text.control.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `text.*` (UI role text colors)
- `spacing.*`
- `rounded-*`

**Typography:** FilterDropdownTrigger binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** FilterDropdownTrigger binds exclusively to component-scoped UI role surface tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Button color tokens
- Layout container tokens

## Responsibilities

- Signal open/focus state
- Display current selection
- Render chevron affordance

## Storybook Coverage

- Default
- Focus
- Disabled

---

**Lock Statement:** This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
