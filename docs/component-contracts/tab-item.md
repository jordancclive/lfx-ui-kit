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

- `color.tabs.item.*`
- `font.button.*`
- `spacing.*`
- `rounded-full`

### Forbidden

- `color.interactive.primary.*` directly
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
