# ListItem

**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a single row in a list. Can be selectable, hoverable, clickable, or static. Used in list views, menus, and simple collections.

## Key Characteristics

- Owns row-level background and interaction states
- Stateless except for visual state derived from props
- Does NOT manage child content styling

## Non-Goals

- Does NOT own text color or typography
- Does NOT manage icons or avatars
- Does NOT manage list layout or grouping
- Does NOT implement selection logic (visual only)
- Does NOT manage keyboard navigation

## Interaction Model

- **Interactive:** Yes (when clickable)
- **Selectable:** Yes (visual only, controlled by parent)
- **Controlled by parent:** Yes (selected, disabled states)

## Token Ownership

### Allowed

- `color.list.item.background.*` — Background colors for all states
- `color.list.item.border` — Bottom divider only
- `spacing.*` — Padding

### Forbidden

- Text color tokens
- Typography tokens
- Icon tokens
- Layout tokens (list-level)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| selected | boolean | false | Visual selection state |
| disabled | boolean | false | Disabled state |
| clickable | boolean | false | Enable hover and pointer cursor |
| children | HTMLElement \| HTMLElement[] | — | Content to render |

## State Precedence

From highest to lowest priority:

1. **disabled** — Overrides all other states
2. **selected** — Overrides hover
3. **hover** — Only applies when clickable and not selected/disabled
4. **default** — Base state

## Behavior Rules

- Cursor is `pointer` only when `clickable` is true and not disabled
- Hover state applies only when `clickable` is true
- Bottom border provides visual separation between items
- Children are rendered without modification

## Responsibilities

- Apply background color based on state
- Apply bottom border for item separation
- Apply padding for consistent spacing
- Show pointer cursor when clickable

## Not Responsible For

- Text styling
- Icon or avatar styling
- Selection logic (receives `selected` as prop)
- List layout or grouping
- Keyboard navigation
- Click handlers (visual component only)

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- Clickable
- Static
- MultipleItems
