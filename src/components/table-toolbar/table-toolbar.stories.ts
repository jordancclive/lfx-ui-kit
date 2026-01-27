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
- Remove layout responsibility from Table component
- Eliminate layout drift across table page examples

## Architectural Role

**Level:** Level 2 — Molecule

**Owns:**
- Horizontal flex layout for controls
- Internal padding and spacing
- Search input flex: 1 behavior
- Filter intrinsic width behavior

**Does NOT Own:**
- Table component rendering or logic
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
 * Empty toolbar (edge case).
 */
export const Empty: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
**Empty Toolbar**

Edge case where no controls are provided.

The toolbar renders but is effectively invisible (no content, no background).
        `,
      },
    },
  },
};
