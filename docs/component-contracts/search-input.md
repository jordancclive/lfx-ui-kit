# SearchInput

**Component:** SearchInput  
**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Provides a text input for search/filter operations.

## Non-Goals

- Validation
- Submission logic
- Error display

## Interaction Model

- **Interactive:** Yes
- **Selectable:** No
- **Controlled by parent:** Yes (value)

## Supported States

- `default`
- `focus`
- `disabled`

## Token Ownership

### Allowed

- `ui.input.surface.*` (component-scoped UI role surface tokens)
- `ui.text.control.*` (system-level UI role typography)
- `ui.focus-ring.*` (system-level focus ring)
- `text.*` (UI role text colors)
- `spacing.*`
- `rounded-*`

**Typography:** SearchInput binds exclusively to system-level UI role control typography tokens. It must not reference semantic typography roles or primitive typography tokens directly.

**Surface:** SearchInput binds exclusively to component-scoped UI role surface tokens. It must not reference semantic color tokens or primitive color tokens directly.

### Forbidden

- Semantic color tokens (`neutral-*`, `accent-*`)
- Primitive color tokens (`color-white`, `color-*`)
- Button color tokens
- Layout container tokens

## Variants

SearchInput supports two visual variants that control shape and density:

### variant="form" (default)

- **Purpose:** Data entry in forms
- **Visual traits:**
  - Standard input height and radius
  - Form-field visual weight
- **Used in:** Forms, dialogs, settings, data entry contexts

### variant="toolbar"

- **Purpose:** Search/filter control in toolbars and filter bars
- **Visual traits:**
  - Rounded corners (rounded-lg) matching other toolbar controls
  - Slightly reduced height
  - Lighter visual weight
  - Compact for toolbar contexts
- **Used in:** Groups, Votes, Surveys, table filter rows, list headers

### Variant Rules

- Variants affect shape and density only
- No change to accessibility, events, or semantics
- No new interaction states
- All variants support the same props and behavior
- ARIA roles remain consistent across variants

## Responsibilities

- Display focus affordance
- Propagate disabled state
- Render left icon consistently
- Apply variant-specific visual styling

## Storybook Coverage

- Default (form variant)
- Toolbar (toolbar variant)
- Focus
- Disabled
- WithIcon

---

**Lock Statement:** This contract is considered stable. Variants may adjust visual density and shape, but must not change semantics, accessibility, or behavior.
