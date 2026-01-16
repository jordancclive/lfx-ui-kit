# Color Token Contract

## Purpose

This document defines the color token architecture for LFX One. Colors follow the same abstraction ladder as typography:

```
PRIMITIVES → SEMANTIC → UI ROLE → COMPONENT
```

Components bind to UI role color tokens only. Dark mode is achieved by remapping semantic tokens.

---

## Semantic Color Meanings

Semantic color tokens encode **meaning**, not component usage or state.

| Semantic Role | Meaning                        |
|---------------|--------------------------------|
| `neutral`     | Base UI surfaces, text, dividers |
| `accent`      | Primary emphasis, selection    |
| `success`     | Positive status                |
| `warning`     | Caution                        |
| `danger`      | Error / destructive            |
| `discovery`   | Informational / exploratory    |

**Rule:** Semantic color tokens must never be referenced directly by components.

---

## System-Level Surface Roles

These tokens define the **universal surface language** for the entire design system.

| UI Role Token         | Meaning                        | Semantic Binding     |
|-----------------------|--------------------------------|----------------------|
| `ui.surface.page`     | Page-level background          | `neutral-50`         |
| `ui.surface.container`| Cards, panels, content areas   | `color-white`        |
| `ui.surface.subtle`   | Subtle elevated surfaces       | `neutral-100`        |
| `ui.surface.hover`    | Hover state for interactive    | `neutral-100`        |
| `ui.surface.selected` | Selected state highlight       | `accent-100`         |
| `ui.surface.disabled` | Disabled state background      | `color-white`        |
| `ui.surface.divider`  | Dividers and borders           | `neutral-200`        |

---

## System-Level Text Roles

| UI Role Token         | Meaning                        | Semantic Binding     |
|-----------------------|--------------------------------|----------------------|
| `ui.text.primary`     | Primary content text           | `neutral-900`        |
| `ui.text.secondary`   | Secondary / supporting text    | `neutral-600`        |
| `ui.text.disabled`    | Disabled text                  | `neutral-400`        |
| `ui.text.on-accent`   | Text on accent backgrounds     | `color-white`        |

---

## System-Level Interactive Roles

| UI Role Token                 | Meaning                        | Semantic Binding     |
|-------------------------------|--------------------------------|----------------------|
| `ui.interactive.background`   | Interactive element default    | `accent-500`         |
| `ui.interactive.background-hover` | Interactive hover          | `accent-600`         |
| `ui.interactive.background-disabled` | Interactive disabled    | `neutral-300`        |
| `ui.interactive.border`       | Interactive borders            | `accent-500`         |
| `ui.interactive.text`         | Text on interactive elements   | `color-white`        |

---

## Binding Rules

1. **Components MUST bind to UI role color tokens, never to semantic tokens or primitives.**

2. **All UI role color tokens MUST reference semantic tokens, never primitives.**

3. **Dark mode is achieved by remapping semantic tokens only.**
   - No component changes required
   - No UI role token changes required
   - Only semantic → primitive bindings change

4. **New surface colors require human approval.**
   - Agents may use existing UI role tokens freely
   - Component-scoped color tokens require explicit approval

---

## Component Token Rebinding

Component-specific color tokens should reference system-level surface roles:

| Component Token                       | → System Role              |
|---------------------------------------|----------------------------|
| `color.table.row.background.hover`    | `ui.surface.hover`         |
| `color.table.row.background.selected` | `ui.surface.selected`      |
| `color.list.item.background.hover`    | `ui.surface.hover`         |
| `color.list.item.background.selected` | `ui.surface.selected`      |
| `color.nav.item.background.selected`  | `ui.surface.selected`      |
| `color.app-shell.surface.background`  | `ui.surface.page`          |
| `color.app-header.surface.background` | `ui.surface.container`     |
| `color.table.surface.background`      | `ui.surface.container`     |
| `color.list.surface.background`       | `ui.surface.container`     |
| `color.*.surface.border`              | `ui.surface.divider`       |

---

## Lock Statement

This color token contract is considered stable.

- Visual density changes must occur in primitive tokens.
- Meaning changes must occur in semantic tokens.
- Dark mode must be achieved by remapping semantic tokens only.
- Components must never bypass the UI role layer.
