# UI Role Typography Tokens

## Purpose

UI role typography tokens are the **only typography interface** that components may bind to.

They provide a stable abstraction layer between semantic typography roles and component implementations, enabling:
- Consistent typography across all components
- Safe hierarchy changes via semantic roles
- Safe density adjustments via primitive tokens
- Clear boundaries for agent-assisted development

---

## Binding Rule

> **Components MUST bind to UI role typography tokens, never to semantic roles or primitives.**

This rule is absolute. Any component that bypasses UI role tokens is in violation of the design system contract.

---

## Non-Goals

UI role typography tokens do NOT:
- Define visual density (that's primitives)
- Introduce new values (they only reference semantic roles)
- Encode component-specific styling (use component-scoped tokens for that)
- Replace semantic roles (they delegate to them)

---

## Token Architecture

```
PRIMITIVES (font-size, font-weight, leading-text)
     ↓
SEMANTIC ROLES (font-role-page-title, font-role-body-primary, etc.)
     ↓
UI ROLE TOKENS (ui-text-page-title, ui-text-body-primary, etc.)  ← COMPONENTS BIND HERE
     ↓
COMPONENTS
```

---

## Mapping Table

| UI Role Token | References Semantic Role | Usage |
|---------------|-------------------------|-------|
| `ui-text-page-title` | `font-role-page-title` | Primary page headings |
| `ui-text-section-title` | `font-role-section-title` | Section headings within pages |
| `ui-text-body-primary` | `font-role-body-primary` | Main body text |
| `ui-text-body-secondary` | `font-role-body-secondary` | Supporting/secondary text |
| `ui-text-label` | `font-role-label` | Form labels, metadata labels |
| `ui-text-data` | `font-role-data` | Tabular data, metrics, values |

Each UI role token provides four properties:
- `--ui-text-{role}-font-family`
- `--ui-text-{role}-font-size`
- `--ui-text-{role}-font-weight`
- `--ui-text-{role}-line-height`

---

## Usage Rules

### For Agents

Agents may only reference UI role typography tokens marked as system-level.

Component-scoped UI role tokens require human approval.

### For Components

Components must:
- ✅ Bind to `--ui-text-*` tokens
- ❌ Never reference `--font-role-*` semantic tokens directly
- ❌ Never reference `--text-*` primitive tokens directly
- ❌ Never reference `--leading-*` primitive tokens directly

### For Density Changes

Visual density adjustments (e.g., making body text smaller) must be achieved by modifying **primitive tokens**, not UI role or semantic tokens.

### For Hierarchy Changes

Hierarchy adjustments (e.g., making page titles more prominent) must be achieved by modifying **semantic role tokens**, not UI role or primitive tokens.

---

## Transitional State

**Current state:** Components may still reference primitive tokens directly.

This is a known transitional state. Component migration to UI role tokens will occur incrementally.

The validation rule is:
- New components MUST use UI role tokens
- Existing components SHOULD migrate when modified

---

## Contract Lock

**This UI role typography layer is considered stable.**

- Visual density changes must occur in primitive tokens.
- Hierarchy changes must occur in semantic roles.
- Components must never bypass this layer.

Any changes to this contract require explicit human approval.
