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

- `color.text.*`
- `color.interactive.primary.*`
- `ui.text.control.*` (system-level UI role typography)
- `spacing.*`
- `rounded-*`

**Typography:** SearchInput binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

### Forbidden

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
