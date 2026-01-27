# Tag

**Component Tier:** Tier 2 — Pattern / Inline Visual Component

## Purpose

Tag displays categorical information in a compact, non-interactive visual form.

## Non-Goals

- Does NOT implement click behavior or interaction
- Does NOT implement filtering logic
- Does NOT manage selection state
- Does NOT express status semantics (success/warning/error)
- Does NOT interpret or validate data meaning
- Does NOT control table layout or column width
- Does NOT stretch to fill containers

## Interaction Model

- **Interactive:** No
- **Selectable:** No
- **Controlled by parent:** No (stateless)

## Token Ownership

### Allowed

- `ui.tag.surface.*` (background, border)
- `ui.tag.text.*` (typography bindings)
- `spacing.*` (padding)
- `radius.*` (border radius)

### Forbidden

- Semantic color tokens (e.g., `success.*`, `warning.*`, `error.*`)
- Primitive color tokens (e.g., `--color-blue-500`)
- `ui.text.control.*` (Tag is not interactive)
- Interaction tokens (hover, focus, disabled)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string \| HTMLElement | — | Tag content (typically categorical text) |

## State Rules

- Tag is **stateless**
- No hover, selected, disabled, or focus behavior
- Visual appearance is consistent regardless of context
- Parent containers may provide layout context, but Tag does not respond to it

## Composition Rules

- **Intrinsic width only** — Tag sizes to its content
- Tag must not stretch to fill parent containers
- May appear inside: table cells, cards, lists, headers, page sections
- Multiple tags may appear in a row (parent controls spacing)

## Typography Rules

- Uses label typography tokens via `ui.text.label.*`
- Font size, weight, and line-height are bound to system label roles
- No custom typography sizing

## Responsibilities

- Render categorical content in a compact form
- Provide visual grouping via subtle background
- Use intrinsic width (no stretching)
- Bind to system UI role tokens for consistency

## Not Responsible For

- Click handling
- Keyboard interaction
- Status indication (success/warning/error)
- Filtering or selection logic
- Column width or table layout
- Content validation or transformation

## How It's Used

### Inside a Table Cell (Groups → Type Column)

```typescript
createTableCell({
  children: createTag({ children: 'Working Group' }),
  contentType: 'secondary'
})
```

### Multiple Tags in a Row

```typescript
const tags = ['Open Source', 'Security', 'Community'].map(label =>
  createTag({ children: label })
);
// Parent controls spacing via flex gap or margins
```

### Inline with Text

```typescript
createCard({
  children: [
    createTextNode('Project status: '),
    createTag({ children: 'Active' }),
  ]
})
```

## Storybook Coverage

- Default
- InsideTableCell
- MultipleTags
- InGroupsContext

## Lock Statement

This contract is considered stable. Visual changes must be achieved through tokens, not expanded responsibilities.

Tag remains a stateless, non-interactive visual component for categorical data display. It does not interpret meaning, handle interaction, or control layout beyond its own intrinsic width.
