# Card

## Component Tier

**Tier 2 — Pattern / Surface Wrapper**

## One-Sentence Responsibility

This component exists to provide a consistent visual surface for grouping content, and nothing else.

---

## Purpose

Card provides a consistent surface for grouping content. It standardizes background, border, radius, and internal padding. It is a visual container, not a layout system.

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Surface background | Typography |
| Border (optional) | Tables, lists, charts, metrics |
| Border radius | Data fetching or logic |
| Internal padding | Page layout or section spacing |
| Optional header and footer slots (layout only) | Hover/selected state (unless explicitly added later) |

---

## State

- **Stateless by default**
- No hover/selected/disabled logic in this version

---

## Composition

Card exposes three content slots:

| Slot | Required | Description |
|------|----------|-------------|
| `header` | No | Optional header area (layout only, no typography styling) |
| `children` | Yes | Main body/content area |
| `footer` | No | Optional footer area (layout only, no typography styling) |

---

## Token Bindings

Card uses only UI role surface tokens:

| Property | Token |
|----------|-------|
| Background | `--ui-card-surface-background` → `ui.surface.container` |
| Border | `--ui-card-surface-border` → `ui.surface.divider` |
| Radius | `--ui-card-radius` |
| Padding | `--ui-card-padding` / `--ui-card-padding-dense` |

**Rules:**
- Card must NOT reference semantic or primitive color tokens directly
- Card must inherit global surface language via `ui.surface.*` tokens

---

## Non-Goals

- Does NOT style child typography
- Does NOT impose grid or column layout
- Does NOT manage interaction states
- Does NOT implement elevation/shadow beyond tokens
- Does NOT replace PageSection or PageLayout

---

## How It's Used

### Card wrapping metrics

```
┌─────────────────────────────┐
│ [Header: "Revenue"]         │
├─────────────────────────────┤
│                             │
│   $1,234,567                │
│   +12.5% from last month    │
│                             │
└─────────────────────────────┘
```

### Card wrapping a table

```
┌─────────────────────────────┐
│ [Header: "Recent Orders"]   │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ TableHeaderCell...      │ │
│ ├─────────────────────────┤ │
│ │ TableRow...             │ │
│ │ TableRow...             │ │
│ │ TableRow...             │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

### Card wrapping an empty state

```
┌─────────────────────────────┐
│                             │
│     [Empty state icon]      │
│     No data available       │
│     [Action button]         │
│                             │
└─────────────────────────────┘
```

---

## Storybook Coverage

- Default
- WithHeader
- WithFooter
- WithHeaderAndFooter
- Dense
- WithTable
- WithListGroup
- WithMetrics
- EmptyState
- InContextWithPageLayout

---

## Lock Statement

This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
