# PageLayout

**Component Tier:** Tier 3 — Composite Layout Component

## Purpose

PageLayout provides a consistent content wrapper for all LFX One pages. It enforces width, padding, and vertical spacing rules inside the AppShell content area.

PageLayout standardizes the layout inside the AppShell content region. It defines content width, horizontal padding, vertical rhythm, and scroll behavior — but does not style content.

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Content max-width behavior | Typography |
| Horizontal padding | Page header (owned by AppHeader) |
| Vertical spacing between page sections | Cards, tables, lists, charts |
| Scroll containment for page content | Data fetching or routing |
| Dense spacing variant | Visual styling of child components |

---

## Non-Goals

- Does NOT style child components
- Does NOT implement page headers or titles
- Does NOT manage responsive breakpoints beyond layout constraints
- Does NOT apply background or surface styling by default
- Does NOT implement animations or transitions
- Does NOT manage focus or keyboard navigation

---

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No (stateless layout only)

---

## Supported Variants

| Variant | Description |
|---------|-------------|
| Default | Standard max-width, padding, and section spacing |
| Dense | Reduced vertical spacing between sections |
| Full Width | No max-width constraint (edge-to-edge content) |

---

## API Contract

```typescript
interface PageLayoutProps {
  children: HTMLElement | HTMLElement[];  // Required page content
  dense?: boolean;                         // Reduced vertical spacing
  fullWidth?: boolean;                     // Disable max-width constraint
}
```

---

## State Rules

PageLayout has **no internal state**.

All visual presentation is derived from props only. There are no hover, selected, or disabled states.

---

## Token Ownership

### Layout Tokens (Owned)

PageLayout may ONLY reference:
- `spacing.page.max-width`
- `spacing.page.padding-x`
- `spacing.page.section-gap`
- `spacing.page.section-gap-dense`

### Forbidden Tokens

PageLayout MUST NOT reference:
- Any color tokens
- Any typography tokens
- Any component-specific tokens (AppHeader, GlobalNav, etc.)
- Any interactive state tokens

---

## Layout Strategy

PageLayout uses **flexbox** for vertical stacking:

```
┌────────────────────────────────────────────────────────────┐
│                    AppShell Content Area                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    PageLayout                        │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │              [Child Section 1]                 │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                        ↕ gap                         │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │              [Child Section 2]                 │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                        ↕ gap                         │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │              [Child Section 3]                 │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

- Outer wrapper: centers content with max-width
- Inner container: flex column with gap for vertical rhythm
- Content scrolls naturally within the AppShell content region

---

## Composition

PageLayout expects arbitrary child content. It is intended to wrap page sections, not individual components.

### Typical Usage

```typescript
createPageLayout({
  children: [
    createAppHeader({ title: 'Dashboard', description: '...' }),
    createTable({ ... }),
    createListGroup({ ... }),
  ]
})
```

### With AppShell

```typescript
createAppShell({
  nav: createGlobalNav({ ... }),
  content: createPageLayout({
    children: [
      createAppHeader({ title: 'Projects' }),
      // Page content here
    ]
  })
})
```

---

## Responsibilities

### PageLayout IS Responsible For:
- Constraining content to a readable max-width
- Applying consistent horizontal padding
- Providing vertical rhythm between child sections
- Allowing content to scroll naturally
- Supporting dense spacing mode

### PageLayout is NOT Responsible For:
- Styling child components
- Implementing page headers or titles (use AppHeader)
- Managing responsive breakpoints beyond max-width
- Applying backgrounds or surface colors
- Data fetching or routing
- Managing focus or accessibility

---

## Token Bindings

| Visual Property | Token |
|-----------------|-------|
| Max width | `--spacing-page-max-width` |
| Horizontal padding | `--spacing-page-padding-x` |
| Section gap | `--spacing-page-section-gap` |
| Section gap (dense) | `--spacing-page-section-gap-dense` |

---

## Storybook Coverage

Stories MUST include:
- Default
- Dense
- FullWidth
- WithScrollableContent
- WithMultipleSections
- InContextWithAppShell
- ContentOnly

Docs page MUST clearly state that PageLayout does NOT own child styling, headers, or visual design.
