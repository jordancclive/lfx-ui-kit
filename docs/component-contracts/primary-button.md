# Primary Button

**Component:** PrimaryButton  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a primary user action. Used wherever an explicit action is required.

## Non-Goals

- No layout orchestration
- No navigation logic
- No data fetching

## Interaction Model

- **Interactive:** Yes
- **Selectable:** No
- **Controlled by parent:** Partially (loading / disabled)

## Supported States

- `default`
- `hover`
- `loading`
- `disabled`

## State Precedence

1. `loading`
2. `disabled`
3. `hover`
4. `default`

## Token Ownership

### Allowed

- `interactive-primary-*` (UI role interactive tokens)
- `color.spinner.*`
- `ui.text.control.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `spacing.*`
- `rounded-*`
- `button-stroke`

**Typography:** Button binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** Button binds exclusively to UI role interactive tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Raw color values
- Tokens owned by parent containers

## Size Variants

- `default`
- `large`

Size affects typography and spacing only.

## Responsibilities

- Render correct visuals per state
- Enforce loading vs disabled precedence
- Replace label with spinner during loading

## Not Responsible For

- Form submission
- Navigation
- State orchestration across siblings

## Storybook Coverage

- Default
- Hover
- Loading
- Disabled
- LoadingOverridesDisabled
- WithIcon

---

**Lock Statement:** This contract is considered stable. Visual changes must be achieved through tokens or child components, not by expanding this component's responsibilities.
