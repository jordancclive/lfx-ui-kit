# MetricCard

## Component Tier

**Tier 2 — Pattern Component**

## One-Sentence Responsibility

This component exists to display a single metric value with consistent hierarchy and layout, and nothing else.

---

## Purpose

MetricCard displays a single metric value in a Card surface. It standardizes metric hierarchy and layout, not data semantics.

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Internal layout of label, value, and optional meta/trend | Card surface styling (delegated to Card) |
| Typography role usage (via UI role tokens only) | Data formatting logic |
| Spacing between metric elements | Fetching or calculation |
| | Color semantics of values (positive/negative) |
| | Icons beyond layout placement |

---

## State

- **Stateless**
- No hover/selected/disabled logic

---

## Composition

MetricCard always wraps content in Card (composition, not inheritance).

### Internal Regions

| Region | Required | Description |
|--------|----------|-------------|
| `label` | No | Optional label above the value |
| `value` | Yes | The primary metric value (required) |
| `meta` | No | Optional supporting text (delta, description) |
| `footer` | No | Optional slot for actions or links |

### Composition Tree

```
MetricCard
└─ Card
   └─ [internal layout]
      ├─ label (optional)
      ├─ value (required)
      ├─ meta (optional)
      └─ footer slot (optional)
```

---

## Token Bindings

MetricCard uses **only existing system-level UI role typography tokens**.

| Element | Token | Rationale |
|---------|-------|-----------|
| Label | `ui.text.label.*` | Labels are metadata |
| Value | `ui.text.page-title.*` | Values are the primary visual element, should be prominent |
| Meta | `ui.text.body-secondary.*` | Supporting text, visually subordinate |

**Typography Decision:**
- `value` uses `ui.text.page-title.*` rather than `ui.text.data.*` because metric values are the focal point of the card and require visual prominence similar to page titles.

**Rules:**
- No new typography tokens may be introduced
- No typography primitives may be referenced
- No semantic typography roles may be referenced
- Only `ui.text.*` bindings allowed

---

## Non-Goals

- Does NOT define dashboards
- Does NOT implement charts
- Does NOT impose grid layout
- Does NOT handle trend color semantics (positive/negative)
- Does NOT format numbers or currencies

---

## How It's Used

### Single metric

```
┌─────────────────────────────┐
│                             │
│   $1,234,567                │
│                             │
└─────────────────────────────┘
```

### Metric with label and delta

```
┌─────────────────────────────┐
│   Revenue                   │
│                             │
│   $1,234,567                │
│   +12.5% from last month    │
│                             │
└─────────────────────────────┘
```

### Metric with footer action

```
┌─────────────────────────────┐
│   Active Users              │
│                             │
│   8,432                     │
│   Updated 5 min ago         │
├─────────────────────────────┤
│   [View Details]            │
└─────────────────────────────┘
```

---

## Storybook Coverage

- Default
- WithLabel
- WithMeta
- WithFooter
- Dense
- NumericValue
- MultipleCards (side-by-side)
- InContextWithPageLayout

---

## Lock Statement

This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
