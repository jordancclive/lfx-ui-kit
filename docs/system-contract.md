# LFX One UI Kit — System Contract

This document defines the governance rules for the LFX One design system. All components, tokens, and Storybook stories must comply with these rules.

---

## Token Architecture

### Token Layers

| Layer | Purpose | Example |
|-------|---------|---------|
| **Primitives** | Raw values with no semantic meaning | `color.azure.azure-500`, `spacing-8`, `text-sm` |
| **Semantic** | Domain-level aliases | `accent-500`, `neutral-200`, `button.horizontal-padding` |
| **UI Role** | Component-bound decisions | `color.interactive.primary.background`, `color.text.primary` |

### Token Flow

```
Primitives → Semantic → UI Role → Component
```

- Components MUST only reference **UI Role** or **Semantic** tokens
- Components MUST NOT reference **Primitive** tokens directly
- Components MUST NOT hardcode colors, spacing, font sizes, or radii

### Token Ownership

Each component owns a defined set of tokens. Components:
- MUST use only tokens listed in their contract's "Allowed" section
- MUST NOT use tokens listed in their contract's "Forbidden" section
- MUST NOT introduce new tokens without explicit approval

---

## Component Responsibility Boundaries

### Tier 1 — Primitive / Atom

- No interactivity
- Pure presentation
- Example: Icon, Spinner

### Tier 2 — Interactive Single Component

- Handles own visual states (hover, focus, disabled, etc.)
- Controlled by parent for selection/loading state
- Does NOT orchestrate siblings
- Examples: PrimaryButton, SearchInput, FilterPill, TabItem

### Tier 3 — Composite / Coordinator Component

- Orchestrates layout and state for child components
- Propagates state (selected, disabled, size) to children
- Does NOT own child visual tokens
- Examples: TabsGroup, FilterPillGroup

### Separation of Concerns

| Responsibility | Tier 2 (Single) | Tier 3 (Composite) |
|----------------|-----------------|-------------------|
| Visual styling | ✅ Owns | ❌ Forbidden |
| State rendering | ✅ Owns | ❌ Delegates to children |
| Layout | ❌ None | ✅ Owns |
| State propagation | ❌ None | ✅ Owns |

---

## Interaction State Rules

### Supported States

| State | Description |
|-------|-------------|
| `default` | Initial idle state |
| `hover` | Mouse over (desktop) |
| `focus` | Keyboard focus |
| `active` | Being pressed |
| `selected` | Chosen/active in a group |
| `loading` | Async operation in progress |
| `disabled` | Non-interactive |

### State Precedence

States must be applied in precedence order. Higher-priority states override lower ones.

**Example (PrimaryButton):**
1. `loading` (highest)
2. `disabled`
3. `hover`
4. `default` (lowest)

**Example (TabItem):**
1. `disabled` (highest)
2. `selected`
3. `hover`
4. `default` (lowest)

### State Rules

- `loading` MUST take precedence over `disabled` for buttons
- `disabled` MUST override `selected` for selectable components
- `selected` MUST persist through `hover` (hover does not override selected)
- `disabled` MUST suppress all interactive states (hover, focus, active)

---

## Sizing Rules

### Size Variants

Components may support size variants:
- `default`
- `small`
- `large`

### Size Affects

- Typography (font-size, line-height)
- Spacing (padding, gap)
- Icon/spinner size (derived from font-size)

### Size Does NOT Affect

- Colors
- Border radius
- State behavior

### Size Derivation

- Icon size MUST derive from font-size (use `1em`)
- Spinner size MUST derive from font-size (use `1em`)
- Height MUST derive from typography + padding (no fixed heights)

---

## Storybook Expectations

### Required Stories

Each component MUST have stories covering:

1. **All supported states** (default, hover, loading, disabled, selected, etc.)
2. **All size variants** (if applicable)
3. **State precedence edge cases** (e.g., LoadingOverridesDisabled)
4. **Icon variants** (if component supports icons)

### Story Naming Convention

```
Default
Hover
Loading
Disabled
Selected
LoadingOverridesDisabled
WithIcon
Small
SmallSelected
```

### Documentation

Each component's Storybook Docs page MUST include:
- Token bindings table
- State descriptions
- Size variant descriptions (if applicable)
- State precedence explanation (if applicable)

### Storybook vs Contracts

| Storybook | Component Contracts |
|-----------|---------------------|
| Shows behavior | Defines rules |
| Visual verification | Enforcement criteria |
| Interactive demos | Static specification |

---

## Enforcement Rules

### Pre-Implementation

Before implementing a component:
1. Component contract MUST exist in `docs/component-contracts/`
2. Contract MUST define: purpose, states, token ownership, responsibilities
3. Contract MUST be reviewed and approved

### During Implementation

1. Component MUST only use tokens listed in contract
2. Component MUST implement all states listed in contract
3. Component MUST follow state precedence rules
4. Component MUST NOT hardcode values that should come from tokens

### Post-Implementation

1. Storybook stories MUST cover all states in contract
2. Visual output MUST match Figma design
3. Component MUST be exported from `src/index.ts`

### Violation Handling

If a component violates its contract:
1. Issue is logged against the component
2. Component is not approved for production use
3. Fix must be implemented before next release

---

## File Structure

```
lfx-ui-kit/
├── docs/
│   ├── system-contract.md          ← This file
│   └── component-contracts/
│       ├── primary-button.md
│       ├── search-input.md
│       ├── filter-pill.md
│       ├── filter-dropdown-trigger.md
│       ├── tab-item.md
│       └── tabs-group.md
├── tokens/
│   ├── primitives.json
│   ├── semantic.json
│   └── ui-role.json
├── src/
│   ├── components/
│   ├── styles/
│   │   └── tokens.css
│   └── index.ts
└── .storybook/
```

---

## Changelog

| Date | Change |
|------|--------|
| 2026-01-14 | Initial system contract created |
