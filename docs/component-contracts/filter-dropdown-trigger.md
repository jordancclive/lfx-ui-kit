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

- `color.text.*`
- `color.interactive.primary.*`
- `neutral.*`
- `font.button.*`
- `spacing.*`
- `rounded-*`

## Responsibilities

- Signal open/focus state
- Display current selection
- Render chevron affordance

## Storybook Coverage

- Default
- Focus
- Disabled
