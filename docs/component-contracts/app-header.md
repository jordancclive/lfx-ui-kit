# AppHeader

**Component Tier:** Tier 3 — Composite Layout Component

> **This component exists to provide structured layout for page titles, descriptions, and action slots, and nothing else.**

---

## Purpose

Defines the top-of-page header region for LFX One pages. Provides structured layout for page title, optional description, optional metadata (breadcrumbs, status pills), and optional actions area (buttons, filters, tabs, search).

AppHeader owns spacing and layout only. It does NOT implement routing, state management, or styling of child components.

---

## If This Component Were Deleted

If AppHeader were removed from the system:
- No standardized page title presentation
- No consistent title/description stacking
- No standardized header layout (left content + right actions)
- Dense spacing mode unavailable for headers
- No consistent divider behavior for headers

If you find yourself answering "buttons look wrong" or "tabs aren't styled" — the contract is leaking responsibility. AppHeader owns layout and spacing, not child styling.

---

## Composition Placement

```
AppShell
└─ PageLayout
   ├─ AppHeader   ← VALID: first child of PageLayout
   ├─ PageSection
   └─ PageSection
```

**Rules:**
- AppHeader MUST appear inside PageLayout
- AppHeader MUST NOT appear directly under AppShell
- AppHeader SHOULD be the first child of PageLayout (before PageSections)
- AppHeader MUST NOT be nested inside PageSection
- AppHeader MUST NOT be used as a standalone container

---

## Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Layout of title/description stack | Typography tokens (reuses existing) |
| Layout of actions slot (right-aligned) | Styling or behavior of buttons, filters, tabs |
| Layout of meta slot (left-aligned, before title) | Routing or navigation logic |
| Optional bottom divider (page-level token) | State management or data fetching |
| Dense spacing mode | Hover, selected, or disabled states |
| Padding (internal spacing only) | Surface/background (sits on page background) |
| | Click handlers or interaction logic |

---

## Non-Goals

- Does NOT implement breadcrumb navigation
- Does NOT manage page state or URL routing
- Does NOT style buttons, pills, tabs, or dropdowns
- Does NOT implement responsive breakpoints beyond layout wrapping
- Does NOT manage focus or keyboard navigation
- Does NOT implement animations or transitions

---

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No (stateless layout only)

---

## Supported Variants

| Variant | Description |
|---------|-------------|
| Default | Title only with standard spacing |
| With Description | Title + description text below |
| With Actions | Right-aligned actions slot |
| With Meta | Left-aligned metadata before title |
| With Divider | Bottom border separator |
| Dense | Reduced vertical spacing |

---

## API Contract

```typescript
interface AppHeaderProps {
  title: string;              // Required
  description?: string;       // Optional subtitle/description
  meta?: HTMLElement;         // Optional metadata (breadcrumbs, pills)
  actions?: HTMLElement;      // Optional actions area (buttons, filters)
  withDivider?: boolean;      // Optional bottom border
  dense?: boolean;            // Reduced spacing mode
}
```

---

## State Rules

AppHeader has **no internal state**.

All visual presentation is derived from props only. There are no hover, selected, or disabled states at the header level.

---

## Token Ownership

### Layout Tokens (Owned)

AppHeader may ONLY reference:
- `spacing.app-header.*`
- `ui.surface.divider` (for optional bottom divider only)

**Surface:** AppHeader does NOT own surface. It renders transparently on the page background. The first Card or surface component below it should appear as the first contained surface.

### Typography Tokens (Referenced, Not Owned)

Title and description MUST bind to existing typography role tokens. AppHeader does NOT introduce new typography tokens.

**Typography:** AppHeader binds exclusively to system-level UI role typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

---

## Layout Strategy

AppHeader uses **flexbox** layout:

```
┌─────────────────────────────────────────────────────────┐
│  [meta?]  [title + description]        [actions?]       │
└─────────────────────────────────────────────────────────┘
          (optional divider below)
```

- Outer container: `display: flex`, `justify-content: space-between`, `align-items: flex-start`
- Left region: meta (optional) + title/description stack
- Right region: actions slot (optional)
- Wraps to vertical stack on narrow viewports

---

## Composition Examples

### Title Only
```typescript
createAppHeader({ title: "Projects" })
```

### Title + Description
```typescript
createAppHeader({
  title: "Projects",
  description: "Manage your open source projects and contributors"
})
```

### Title + Actions
```typescript
createAppHeader({
  title: "Projects",
  actions: createButton({ label: "New Project", variant: "primary" })
})
```

### Title + Description + Actions
```typescript
createAppHeader({
  title: "Projects",
  description: "Manage your open source projects and contributors",
  actions: createTabsGroup({ ... })
})
```

### Meta + Title + Actions
```typescript
createAppHeader({
  meta: createBreadcrumb({ ... }),
  title: "Project Settings",
  actions: createButton({ label: "Save", variant: "primary" })
})
```

### Full Example (Meta + Title + Description + Actions + Divider)
```typescript
createAppHeader({
  meta: createFilterPill({ label: "Active", selected: true }),
  title: "Team Members",
  description: "Invite and manage team member access",
  actions: createButton({ label: "Invite Member", variant: "primary" }),
  withDivider: true
})
```

---

## Responsibilities

### AppHeader IS Responsible For:
- Rendering title as primary heading
- Rendering description below title when provided
- Rendering meta slot before title when provided
- Rendering actions slot on the right when provided
- Applying consistent spacing between regions
- Applying optional bottom divider
- Switching between default and dense spacing modes

### AppHeader is NOT Responsible For:
- Styling buttons, filters, or tabs passed as actions
- Implementing routing or navigation logic
- Managing selection state
- Handling click events
- Fetching or managing data
- Implementing breadcrumb navigation logic
- Applying hover or focus styles to children

---

## Token Bindings

| Visual Property | Token |
|----------------|--------|
| Background | `transparent` (no surface ownership) |
| Bottom divider | `ui.surface.divider` |
| Horizontal padding | `spacing.app-header.padding-x` |
| Vertical padding | `spacing.app-header.padding-y` |
| Vertical padding (dense) | `spacing.app-header.padding-y-dense` |
| Gap between regions | `spacing.app-header.gap` |
| Gap between regions (dense) | `spacing.app-header.gap-dense` |
| Gap between title/description | `spacing.app-header.title-gap` |
| Gap between title/description (dense) | `spacing.app-header.title-gap-dense` |
| Gap between meta/title | `spacing.app-header.meta-gap` |
| Gap between action children | `spacing.app-header.actions-gap` |

---

## Storybook Coverage

Stories MUST include:
- TitleOnly
- TitleAndDescription
- WithActions
- WithMeta
- Full (meta + title + description + actions)
- WithDivider
- Dense
- ResponsiveWrap

Docs page MUST clearly state that AppHeader does NOT own child styling or interaction logic.

---

## Contract Lock

**This contract is considered stable.** Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.

### Slot Boundaries (Locked)

| Slot | Purpose | Must NOT |
|------|---------|----------|
| `meta` | Breadcrumbs, status pills | Style content, manage state |
| `actions` | Buttons, tabs, filters | Style content, manage state |
| `title` | Page heading text | Be interactive |
| `description` | Supporting text | Be interactive |

These slots are **positional only**. AppHeader renders them unchanged.
