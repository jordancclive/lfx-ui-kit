# PageSection

**Component Tier:** Tier 2 — Structural Content Wrapper

> **This component exists to enforce vertical section spacing and optional dividers within a page, and nothing else.**

---

## Purpose

PageSection represents a single vertical section within a page. It provides consistent vertical spacing, optional dividers, and optional section-level padding, without styling its children.

PageSection enforces vertical rhythm within PageLayout. It does NOT replace cards, surfaces, or containers — it exists purely to provide structural spacing between logical content groups.

---

## If This Component Were Deleted

If PageSection were removed from the system:
- Inconsistent vertical rhythm between sections
- No standardized divider behavior
- Dense spacing cannot be toggled safely per-section

If you find yourself answering "cards look wrong" or "text spacing breaks" — the contract is leaking responsibility. PageSection owns structure, not visuals.

---

## Composition Placement

```
AppShell
└─ PageLayout
   ├─ AppHeader
   ├─ PageSection  ← VALID: inside PageLayout
   ├─ PageSection
   └─ PageSection
```

**Rules:**
- PageSection MUST appear inside PageLayout
- PageSection MUST NOT appear directly under AppShell
- PageSection MUST NOT replace PageLayout
- PageSection MUST NOT be used as a standalone container

PageSection sits inside PageLayout and wraps individual content groups (tables, lists, cards, etc.) to provide consistent spacing and optional visual separation.

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing between sections | Typography |
| Optional section divider | Backgrounds or surfaces |
| Optional section-level padding | Cards, tables, lists, charts |
| Dense spacing variant | Page titles or descriptions |
| | Visual styling of children |

---

## Non-Goals

- Does NOT style child components
- Does NOT implement data fetching
- Does NOT implement layout beyond vertical stacking
- Does NOT handle page-level concerns (handled by PageLayout)
- Does NOT replace cards or surface containers
- Does NOT implement responsive breakpoints
- Does NOT manage focus or keyboard navigation

---

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No (stateless)

---

## Supported Variants

| Variant | Description |
|---------|-------------|
| Default | Standard vertical padding |
| Dense | Reduced vertical padding |
| With Divider | Bottom border separator |

---

## API Contract

```typescript
interface PageSectionProps {
  children: HTMLElement | HTMLElement[];  // Section content
  dense?: boolean;                         // Reduced vertical padding
  withDivider?: boolean;                   // Show bottom divider
}
```

---

## State Rules

PageSection has **no internal state**.

All visual presentation is derived from props only. There are no hover, selected, or disabled states.

---

## Token Ownership

### Layout Tokens (Owned)

PageSection may ONLY reference:
- `spacing.page.section.padding-y`
- `spacing.page.section.padding-y-dense`
- `color.page.section.divider` (divider only)

### Forbidden Tokens

PageSection MUST NOT reference:
- Any typography tokens
- Any background/surface tokens
- Any interactive state tokens
- Any component-specific tokens

---

## Layout Strategy

PageSection uses a simple **flex column** wrapper:

```
┌─────────────────────────────────────────┐
│           PageSection                   │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │        [Child Content]            │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│─────────────────────────────────────────│ ← optional divider
└─────────────────────────────────────────┘
```

- Applies vertical padding only
- Children render unchanged
- Optional bottom divider for visual separation

---

## Composition

PageSection wraps individual content groups within PageLayout.

### Typical Usage

```typescript
createPageLayout({
  children: [
    createAppHeader({ title: 'Dashboard' }),
    createPageSection({
      children: createTable({ ... }),
    }),
    createPageSection({
      children: createListGroup({ ... }),
      withDivider: true,
    }),
  ]
})
```

### Multiple Sections

```typescript
createPageLayout({
  children: [
    createAppHeader({ title: 'Settings' }),
    createPageSection({
      children: [...generalSettings],
      withDivider: true,
    }),
    createPageSection({
      children: [...notificationSettings],
      withDivider: true,
    }),
    createPageSection({
      children: [...securitySettings],
    }),
  ]
})
```

---

## Responsibilities

### PageSection IS Responsible For:
- Providing consistent vertical padding around content
- Rendering optional bottom divider
- Supporting dense spacing mode
- Rendering children unchanged

### PageSection is NOT Responsible For:
- Styling child components
- Implementing backgrounds or surfaces
- Managing page layout (use PageLayout)
- Implementing page headers (use AppHeader)
- Data fetching or routing
- Managing focus or accessibility

---

## Token Bindings

| Visual Property | Token |
|-----------------|-------|
| Vertical padding | `--spacing-page-section-padding-y` |
| Vertical padding (dense) | `--spacing-page-section-padding-y-dense` |
| Divider color | `--color-page-section-divider` |

---

## Storybook Coverage

Stories MUST include:
- Default
- Dense
- WithDivider
- MultipleSections
- WithRealContent
- InContextWithPageLayout
- SpacingComparison

Docs page MUST clearly state that PageSection does NOT style children, does NOT replace cards/surfaces, and exists to enforce vertical rhythm only.

---

## Contract Lock

**This contract is considered stable.** Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
