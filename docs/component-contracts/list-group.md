# ListGroup

**Component Tier:** Tier 3 — Composite Layout Component

## Purpose

ListGroup provides structural layout for vertical lists. It composes ListItem components and optionally applies container-level background and border styling.

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing between items | ListItem hover, selected, or disabled states |
| Optional container background | Text color or typography |
| Optional container border | Icons or avatars |
| Optional container padding | Selection logic |
| Rounded container corners | Keyboard navigation |
| | Focus management |

## Non-Goals

- Does NOT manage list item state
- Does NOT implement selection logic
- Does NOT style child ListItem content
- Does NOT manage list virtualization
- Does NOT manage keyboard interactions
- Does NOT validate or enforce child types at runtime

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No

## Token Ownership

### Allowed (Layout Only)

- `color.list.surface.background` — Container background
- `color.list.surface.border` — Container border
- `radius.list` — Container border radius
- `spacing.*` — Gap and padding

### Forbidden

- `color.list.item.*` — Owned by ListItem
- Text color tokens
- Typography tokens
- Interactive state tokens

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | HTMLElement \| HTMLElement[] | — | List content (expects ListItem children) |
| withBackground | boolean | false | Apply container background |
| withBorder | boolean | false | Apply container border |
| dense | boolean | false | Reduced gap between items |

## Layout Strategy

- Uses `flex-direction: column`
- Gap controlled via spacing tokens
- Children rendered directly (expects ListItem children)
- Padding applied when background is enabled

## Token Bindings

| Property | Token |
|----------|-------|
| Container background | `--color-list-surface-background` |
| Container border | `--color-list-surface-border` |
| Container radius | `--radius-list` |
| Gap (default) | `--spacing-0` (items touch) |
| Gap (dense) | `--spacing-0` |
| Padding (when background) | `--spacing-4` |

## Composition

- Expects `ListItem` children only
- Does not validate or enforce child types at runtime
- ListItem components own their own interaction states

## Responsibilities

- Render children in vertical stack
- Apply container background when enabled
- Apply container border when enabled
- Apply border radius to container
- Control gap between items

## Not Responsible For

- Item hover states
- Item selection states
- Item disabled states
- Text styling
- Icon/avatar styling
- Selection logic
- Keyboard navigation

## Storybook Coverage

- Default
- WithBackground
- WithBorder
- WithBackgroundAndBorder
- Dense
- WithListItems
- DisabledItems
- MixedStates
