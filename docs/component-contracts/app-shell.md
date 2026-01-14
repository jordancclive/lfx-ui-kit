# AppShell

**Component Tier:** Tier 3 — Composite Layout Component

## Purpose

AppShell defines the high-level page layout for LFX One. It composes major regions (navigation, header, content, optional aside) and establishes spacing, scrolling, and containment rules.

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Page layout structure | Text styling |
| Region positioning (nav, header, content, aside) | Icon styling |
| Container padding and gaps | GlobalNav logic or styling |
| Scroll containment | ProjectSelector logic or styling |
| Responsive layout behavior (layout only) | Routing or URL state |
| | Data fetching |
| | Page-level business logic |

## Non-Goals

- Does NOT implement routing
- Does NOT style child components
- Does NOT manage active navigation state
- Does NOT implement responsiveness beyond layout rules
- Does NOT implement animations or transitions

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No

## Token Ownership

### Allowed (Layout Only)

- `layout.app-shell.surface.background` — Container background
- `layout.app-shell.surface.border` — Container border
- `layout.app-shell.region.gap` — Gap between regions
- `layout.app-shell.padding` — Container padding
- `layout.app-shell.nav.width` — Navigation width
- `radius.app-shell` — Container border radius

### Forbidden

- Text color tokens
- Typography tokens
- Icon tokens
- Child component tokens (GlobalNav, etc.)
- Interactive state tokens

## Composition

AppShell exposes named slots:

| Slot | Required | Description |
|------|----------|-------------|
| nav | Optional | Navigation region (typically GlobalNav) |
| header | Optional | Header region (typically app header) |
| content | Required | Main content region |
| aside | Optional | Aside region (typically sidebar) |

## Layout Strategy

- Uses **CSS Grid** for layout
- Fixed navigation with scrollable content
- Header may be fixed or static depending on configuration
- Three-column grid: `[nav] [content] [aside]`
- Header spans full width above content area

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| nav | HTMLElement | — | Navigation region |
| header | HTMLElement | — | Header region |
| content | HTMLElement | — | Main content region (required) |
| aside | HTMLElement | — | Aside region |
| withBorder | boolean | false | Apply container border |
| withBackground | boolean | false | Apply surface background |
| dense | boolean | false | Reduced spacing |

## Token Bindings

| Property | Token |
|----------|-------|
| Container background | `--color-app-shell-surface-background` |
| Container border | `--color-app-shell-surface-border` |
| Container radius | `--radius-app-shell` |
| Container padding | `--spacing-app-shell-padding` |
| Region gap | `--spacing-app-shell-region-gap` |
| Nav width | `--spacing-app-shell-nav-width` |

## Responsibilities

- Define page-level grid layout
- Position major regions (nav, header, content, aside)
- Apply container styling (background, border)
- Control spacing between regions
- Manage scroll behavior

## Not Responsible For

- Child component styling
- Routing logic
- Navigation state
- Data management
- Interactive behaviors
- Responsive breakpoints (beyond layout)

## Storybook Coverage

- Default
- WithHeader
- WithAside
- WithBackground
- WithBorder
- Dense
- InContext
