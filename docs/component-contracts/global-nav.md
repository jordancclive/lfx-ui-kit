# GlobalNav

**Component Tier:** Tier 3 — Composite Layout Component

## Purpose

GlobalNav provides structural layout for application navigation. It renders vertical navigation sections with support for selected item highlighting. Used for primary and secondary navigation menus.

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical layout structure | Text color or typography |
| Section spacing | Icon styling |
| Container background/border | Active/hover states of individual items |
| Selected item background highlight | Routing logic |
| Padding and gaps | Focus management |
| | Click handlers |

## Non-Goals

- Does NOT implement routing or URL management
- Does NOT style text or icons
- Does NOT manage keyboard navigation
- Does NOT implement collapsible sections
- Does NOT manage focus states
- Does NOT implement dropdown menus
- Does NOT validate or enforce nav item structure

## Interaction Model

- **Interactive:** No (children handle clicks)
- **Selectable:** Yes (visual only, controlled by activeItemId prop)
- **Controlled by parent:** Yes (activeItemId)

## Token Ownership

### Allowed (Layout Only)

- `color.nav.surface.background` — Container background
- `color.nav.surface.border` — Container border
- `color.nav.item.background.selected` — Selected item highlight
- `radius.nav` — Container border radius
- `spacing.nav.padding` — Container padding
- `spacing.nav.section.gap` — Gap between sections
- `spacing.nav.item.gap` — Gap between items

### Forbidden

- Text color tokens
- Typography tokens
- Icon tokens
- Hover state tokens (owned by nav items if implemented)

## State Model

- **Selected state:** Controlled via `activeItemId` prop
- **No internal state:** Purely presentational
- **Comparison:** Selected item receives `--color-nav-item-background-selected`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | HTMLElement \| HTMLElement[] | — | Nav sections/items |
| activeItemId | string \| null | null | ID of currently selected nav item |
| withBackground | boolean | false | Apply container background |
| withBorder | boolean | false | Apply container border |
| dense | boolean | false | Reduced spacing |

## Layout Strategy

- Uses `flex-direction: column`
- Sections/items stacked vertically
- Gap controlled via spacing tokens
- Selected item receives background highlight via `data-nav-item-id` matching

## Composition

GlobalNav expects:
- **Nav sections:** Containers grouping related nav items
- **Nav items:** Individual clickable elements with `data-nav-item-id` attribute

Visual ownership:
- GlobalNav: selected background highlight
- Nav items: text, icons, click handling
- Parent: routing logic, activeItemId state

## Token Bindings

| Property | Token |
|----------|-------|
| Container background | `--color-nav-surface-background` |
| Container border | `--color-nav-surface-border` |
| Selected item background | `--color-nav-item-background-selected` |
| Container radius | `--radius-nav` |
| Container padding | `--spacing-nav-padding` |
| Section gap | `--spacing-nav-section-gap` |
| Item gap | `--spacing-nav-item-gap` |

## Responsibilities

- Render children in vertical layout
- Apply selected background to item matching activeItemId
- Apply container styling (background, border, padding)
- Control spacing between sections and items

## Not Responsible For

- Text or icon styling
- Click handling
- Routing logic
- Hover states
- Keyboard navigation
- Focus management
- Dropdown behavior

## Storybook Coverage

- Default
- SelectedItem
- MultipleSections
- Dense
- WithBackground
- WithBorder
- InContext
