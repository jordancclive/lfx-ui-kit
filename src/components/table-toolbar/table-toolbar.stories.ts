import type { Meta, StoryObj } from '@storybook/html';
import { createTableToolbar, type TableToolbarProps } from './table-toolbar';
import { createSearchInput } from '../search-input/search-input';
import { createFilterDropdownTrigger } from '../filter-dropdown-trigger/filter-dropdown-trigger';

const meta: Meta<TableToolbarProps> = {
  title: '1. Components / 2. Level 2 / TableToolbar',
  tags: ['autodocs'],
  render: (args) => createTableToolbar(args),
  parameters: {
    docs: {
      description: {
        component: `
TableToolbar is a Level 2 (Molecule) component that owns layout, spacing, 
and hierarchy for table search + filter controls.

## Purpose

TableToolbar exists to:
- Provide consistent layout for search and filter controls
- Enforce search input full-width behavior by default
- Create visual docking between controls and table header
- Remove layout responsibility from TableGrid component
- Eliminate layout drift across table page examples

## Architectural Role

**Level:** Level 2 — Molecule

**Owns:**
- Horizontal flex layout for controls
- Internal padding and spacing
- Search input flex: 1 behavior
- Filter intrinsic width behavior

**Does NOT Own:**
- TableGrid component rendering or logic
- Filter semantics or data logic
- Filter ordering (determined by caller)
- Pagination (separate concern)
- Background color (inherits from Card)

## When to Use

Use TableToolbar when:
- Building a table page with search and/or filters
- Implementing a filter bar above a table
- You need consistent search + filter layout

## When NOT to Use

Do NOT use TableToolbar when:
- Building a form (use form layout components)
- Creating a global search (use AppHeader)
- Implementing standalone filters (use filter components directly)
- Building a toolbar unrelated to tables

## Layout Behavior

**Search Input:**
- If provided, receives \`flex: 1\` automatically
- Spans available width
- Dominates the toolbar visually

**Filters:**
- Render at intrinsic width
- Appear after search
- Order determined by caller

**Spacing:**
- Gap between controls: \`spacing-8\`
- Internal padding: \`spacing-12\` vertical, \`spacing-16\` horizontal
- No external margins (clean docking)

## Usage in Table Page Pattern

\`\`\`typescript
// In Table Page pattern:
Card
├─ TableToolbar
│  ├─ SearchInput (flex: 1)
│  └─ FilterDropdownTriggers (intrinsic)
└─ Table
\`\`\`

## Component Boundaries

**TableToolbar vs Table:**
- TableToolbar: Search + filter layout
- Table: Grid layout for data rows

**TableToolbar vs Card:**
- TableToolbar: Control layout
- Card: Surface container

**TableToolbar vs Page Pattern:**
- TableToolbar: HOW controls are laid out
- Pattern: WHERE toolbar is placed

## Defensive Behavior

**Empty State:**

If no controls are provided (\`search\` is undefined AND \`filters\` is empty):
- TableToolbar renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint in layout

This defensive behavior prevents phantom spacing and layout drift when
toolbars are conditionally empty.

**Why this matters:**
- Page patterns can safely render TableToolbar even when filters are disabled
- No layout shifts when controls are removed
- No need for conditional rendering at pattern level

## NON-GOALS (Forbidden Usage)

**TableToolbar MUST NOT:**
- ❌ Render inside the TableGrid component
- ❌ Be passed to Table as a prop
- ❌ Be rendered by Table in any way
- ❌ Assume pagination ownership
- ❌ Assume page-level vertical rhythm
- ❌ Own filter data logic or semantics

**Correct Placement:**
- ✅ TableToolbar is ALWAYS placed by a Page Pattern (e.g. Table Page)
- ✅ TableToolbar sits inside Card, above Table (sibling, not child)
- ✅ Table remains layout-agnostic for data rows only

**Why this boundary exists:**
- Table is a pure grid layout component (Level 2)
- TableToolbar is a search + filter layout component (Level 2)
- They are siblings at the same architectural level
- Neither should own or render the other

---

## Architectural Guardrails

This component is part of the **LFX One table system**.

The table system is intentionally layered to prevent layout drift and ownership confusion.

### Core Principle

> **Each layer owns exactly one responsibility.  
No component may "help" another by re-implementing layout or behavior.**

If something feels missing, it belongs in a **different layer**, not as an override.

### DO

- Use this component only for its documented responsibility
- Assume sibling components exist and will handle adjacent concerns
- Rely on defensive behavior instead of conditional rendering
- Let Page Patterns decide *where* things appear
- Let Molecules decide *how* things are laid out

### DO NOT

- Re-implement spacing, flex, or padding outside this component
- Add layout flags or overrides
- Move responsibilities up or down the stack
- Render sibling components inside this one
- Special-case page examples

### Ownership Boundaries (Locked)

| Layer | Owns |
|------|------|
| **TableGrid (Level 2)** | Grid layout for rows & cells only |
| **TableToolbar (Level 2)** | Search + filter layout only |
| **TablePagination (Level 2)** | Pagination controls only |
| **DataTable (Level 3)** | Bundling the three above into a single workflow surface |
| **Table Page (Pattern)** | Page placement, header, vertical rhythm |
| **Page Examples** | Configuration only (labels, data, callbacks) |

> **No other ownership model is valid.**

If you find yourself wanting to violate this table, stop and redesign the layer instead of patching around it.

### Agent & Contributor Warning

If you feel tempted to:
- add flex logic to a page example
- add spacing to a pattern that belongs in a component
- move toolbar or pagination into TableGrid

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.

---

## Ownership Lock

**This section defines permanent architectural boundaries.**

**TableToolbar owns (LOCKED):**
- Search + filter horizontal layout
- Internal spacing (padding, gap)
- SearchInput \`flex: 1\` behavior
- Filter intrinsic width behavior
- Empty state defensive rendering

**Table Page Pattern owns (LOCKED):**
- WHERE toolbar appears (inside Card, above Table)
- WHICH controls to render (search, filters)
- Filter ORDER (matches column semantics)
- Vertical rhythm between header, toolbar, and table

**Table Component owns (LOCKED):**
- Grid layout for data rows
- Row rendering
- Cell rendering
- Column semantic width behavior

**No other component may assume these responsibilities.**

If you are modifying this component and feel it should own additional
responsibilities, you are likely introducing architectural drift.

STOP and consult the design system architecture documentation.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TableToolbarProps>;

/**
 * Default TableToolbar with search only.
 */
export const Default: Story = {
  args: {
    search: createSearchInput({
      placeholder: 'Search...',
      variant: 'toolbar',
      showIcon: true,
    }),
  },
  parameters: {
    docs: {
      description: {
        story: `
**Search Only**

Minimal toolbar with only a search input.

The search input automatically receives \`flex: 1\` and spans the full width.
        `,
      },
    },
  },
};

/**
 * TableToolbar with search and single filter.
 */
export const WithSingleFilter: Story = {
  args: {
    search: createSearchInput({
      placeholder: 'Search...',
      variant: 'toolbar',
      showIcon: true,
    }),
    filters: [
      createFilterDropdownTrigger({ label: 'All Types' }),
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
**Search + Single Filter**

Common pattern for table pages with one categorical filter.

Search dominates, filter is secondary and intrinsic width.
        `,
      },
    },
  },
};

/**
 * TableToolbar with search and multiple filters.
 */
export const WithMultipleFilters: Story = {
  args: {
    search: createSearchInput({
      placeholder: 'Search votes...',
      variant: 'toolbar',
      showIcon: true,
    }),
    filters: [
      createFilterDropdownTrigger({ label: 'All Statuses' }),
      createFilterDropdownTrigger({ label: 'All Groups' }),
      createFilterDropdownTrigger({ label: 'All Types' }),
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
**Search + Multiple Filters**

Pattern used by Votes, Surveys, and other data-heavy pages.

Filter order is determined by caller (usually matching column order).
        `,
      },
    },
  },
};

/**
 * TableToolbar with filters only (no search).
 */
export const FiltersOnly: Story = {
  args: {
    filters: [
      createFilterDropdownTrigger({ label: 'All Statuses' }),
      createFilterDropdownTrigger({ label: 'All Types' }),
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
**Filters Only**

Less common pattern where search is not needed.

Filters render at intrinsic width with consistent gap.
        `,
      },
    },
  },
};

/**
 * Empty toolbar — demonstrates defensive behavior.
 */
export const Empty: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
**Empty Toolbar (Defensive Behavior)**

Demonstrates what happens when no controls are provided.

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TableToolbar even when filters are disabled
- No phantom spacing introduced
- No layout shifts when controls are conditionally removed

This is defensive behavior built into the component itself, not a story-only rule.
        `,
      },
    },
  },
};
