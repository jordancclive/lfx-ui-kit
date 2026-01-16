# SearchInput

**Component:** SearchInput  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Provides a text input for search/filter operations.

## Non-Goals

- Validation
- Submission logic
- Error display

## Interaction Model

- **Interactive:** Yes
- **Selectable:** No
- **Controlled by parent:** Yes (value)

## Supported States

- `default`
- `focus`
- `disabled`

## Token Ownership

### Allowed

- `ui.input.surface.*` (component-scoped UI role surface tokens)
- `ui.text.control.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `text.*` (UI role text colors)
- `spacing.*`
- `rounded-*`

**Typography:** SearchInput binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** SearchInput binds exclusively to component-scoped UI role surface tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Button color tokens
- Layout container tokens

## Responsibilities

- Display focus affordance
- Propagate disabled state
- Render left icon consistently

## Storybook Coverage

- Default
- Focus
- Disabled
- WithIcon

---

**Lock Statement:** This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
