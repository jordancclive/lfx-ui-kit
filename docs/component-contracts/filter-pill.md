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

- `color.text.*`
- `color.interactive.primary.*`
- `neutral.*`
- `ui.text.label.*` (system-level UI role typography)
- `spacing.*`
- `rounded-full`

**Typography:** FilterPill binds exclusively to system-level UI role typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

## Responsibilities

- Render selected vs unselected visuals
- Maintain visual persistence for selected state

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- WithIcon
