# TabsGroup

**Component:** TabsGroup  
**Component Tier:** Tier 3 — Composite / Coordinator Component

## Purpose

Coordinates layout and selection for multiple TabItem components.

## Non-Goals

- Styling individual tabs
- Owning tab color or typography tokens

## Interaction Model

- **Interactive:** Yes
- **Selectable:** Indirectly
- **Controlled by parent:** Yes (selectedId)

## Responsibilities

- Layout TabItem children
- Propagate selected, disabled, and size
- Manage wrapping / scrolling

## Token Ownership

### Allowed

- `spacing.*`
- `neutral.*` (surface only)

### Forbidden

- `color.tabs.item.*`
- Any TabItem visual tokens

## Composition Rules

- TabsGroup passes state → TabItem
- TabItem retains full visual control

## Storybook Coverage

- Default
- WithBackground
- Wrapped
- Small
- Disabled
- WithIcons
- Interactive selection demo
