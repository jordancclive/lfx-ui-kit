# MetricsRow

## Component Tier

**Tier 3 — Layout / Composition Component**

## One-Sentence Responsibility

This component exists to arrange multiple MetricCard components in a horizontal row with consistent spacing and wrapping, and nothing else.

---

## Purpose

MetricsRow arranges multiple MetricCard components in a horizontal row. It standardizes spacing, wrapping, and alignment for metric groups. It provides layout only, not visual styling.

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Horizontal spacing between MetricCards | Card surface (delegated to Card) |
| Wrapping behavior at smaller widths | Metric layout or typography (delegated to MetricCard) |
| Alignment of cards within the row | Data semantics or calculation |
| Optional dense spacing variant | Color or trend semantics |
| | Page-level spacing (delegated to PageSection) |

---

## State

- **Stateless**
- No hover/selected/disabled logic

---

## Composition

MetricsRow expects MetricCard children only and is intended to live inside PageSection.

### Composition Tree

```
PageLayout
└─ PageSection
   └─ MetricsRow
      ├─ MetricCard
      ├─ MetricCard
      └─ MetricCard
```

---

## Token Bindings

MetricsRow uses **only layout tokens**.

| Property | Token |
|----------|-------|
| Gap | `--ui-metrics-row-gap` |
| Gap (dense) | `--ui-metrics-row-gap-dense` |

**Rules:**
- No surface or color tokens
- No typography tokens
- Relies entirely on existing Card and MetricCard tokens for visual styling

---

## Non-Goals

- Does NOT define dashboards
- Does NOT impose grid column counts
- Does NOT introduce new tokens beyond layout spacing
- Does NOT style children
- Does NOT manage responsive breakpoints beyond flex-wrap

---

## How It's Used

### 2 metrics

```
┌─────────────────┐ ┌─────────────────┐
│   MetricCard    │ │   MetricCard    │
└─────────────────┘ └─────────────────┘
```

### 3 metrics

```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   MetricCard    │ │   MetricCard    │ │   MetricCard    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Wrapping on narrow viewports

```
┌─────────────────┐ ┌─────────────────┐
│   MetricCard    │ │   MetricCard    │
└─────────────────┘ └─────────────────┘
┌─────────────────┐
│   MetricCard    │
└─────────────────┘
```

### Dense vs default spacing

```
Default (16px gap):
┌─────────────┐     ┌─────────────┐     ┌─────────────┐

Dense (12px gap):
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
```

---

## Storybook Coverage

- Default (3 MetricCards)
- TwoMetrics
- ManyMetrics (wrapping)
- Dense
- CenterAligned
- InContextWithPageLayout
- InContextWithPageSection
- WithMixedMetricValues

---

## Lock Statement

This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
