import type { Meta, StoryObj } from '@storybook/html';
import { createTablePagination, type TablePaginationProps } from './table-pagination';

const meta: Meta<TablePaginationProps> = {
  title: '1. Components / 2. Level 2 / TablePagination',
  tags: ['autodocs'],
  render: (args) => createTablePagination(args),
  parameters: {
    docs: {
      description: {
        component: `
TablePagination is a Level 2 (Molecule) component that owns layout, spacing, 
and hierarchy for table pagination controls.

## Purpose

TablePagination exists to:
- Provide consistent pagination layout for table pages
- Display current page range and total items
- Render numbered page navigation with intelligent windowing
- Render Previous/Next navigation controls
- Create visual subordination to table content
- Eliminate pagination layout drift across table page examples

## Architectural Role

**Level:** Level 2 — Molecule

**Owns:**
- Pagination control layout (info + numbered pages + prev/next buttons)
- Page number display and formatting
- Page windowing with ellipsis for large datasets
- Internal spacing and alignment
- Visual subordination to table rows
- Defensive rendering (no pagination when not needed)

**Does NOT Own:**
- Data fetching logic
- Sorting logic
- Filtering logic
- Row rendering
- Table grid layout
- Background color (inherits from Card)

## When to Use

Use TablePagination when:
- Building a table page with more items than fit on one page
- Dataset size exceeds reasonable single-page display
- User needs to navigate between pages of data

## When NOT to Use

Do NOT use TablePagination when:
- Dataset is small enough to display on one page
- Implementing infinite scroll (different pattern)
- Building a form (use form navigation)
- Creating a wizard (use wizard navigation)

## Defensive Behavior

**Automatic Hiding:**

If pagination is not needed (\`totalItems <= pageSize\`):
- TablePagination renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint in layout

This defensive behavior prevents phantom spacing when pagination
is conditionally unnecessary.

**Why this matters:**
- Page patterns can safely render TablePagination even when not needed
- No layout shifts when pagination becomes unnecessary
- No need for conditional rendering at pattern level

## Layout Behavior

**Info Display (left side):**
- Format: "Rows 1–10 of 42"
- Uses secondary text styling
- Visually subordinate to table content

**Controls (right side):**
- Previous button (disabled at first page)
- Numbered page buttons (1, 2, 3, …)
  - Current page highlighted with border and background
  - Ellipsis (…) for skipped pages in large datasets
  - Maximum 7 visible page numbers in window
  - Always shows first and last page
- Next button (disabled at last page)
- Minimal visual weight (not primary actions)

**Page Windowing Examples:**
- Page 1 of 5: \`[1] 2 3 4 5\`
- Page 3 of 10: \`1 2 [3] 4 5 … 10\`
- Page 10 of 42: \`1 … 8 9 [10] 11 12 … 42\`
- Page 40 of 42: \`1 … 38 39 [40] 41 42\`

**Spacing:**
- Top padding: \`spacing-16\` (extra space above to distinguish from rows)
- Bottom padding: \`spacing-4\` (minimal, keeps subordinate)
- Left/Right padding: \`spacing-16\` (aligns with table content)
- No external margins (clean placement)

## Usage in Table Page Pattern

\`\`\`typescript
// In Table Page pattern:
Card
├─ TableToolbar (search + filters)
├─ Table (data grid)
└─ TablePagination (page navigation)
\`\`\`

## Component Boundaries

**TablePagination vs Table:**
- TablePagination: Pagination controls
- Table: Grid layout for data rows

**TablePagination vs TableToolbar:**
- TablePagination: Page navigation (bottom)
- TableToolbar: Search + filters (top)

**TablePagination vs Card:**
- TablePagination: Control layout
- Card: Surface container

**TablePagination vs Page Pattern:**
- TablePagination: HOW pagination is displayed
- Pattern: WHERE pagination is placed

## NON-GOALS (Forbidden Usage)

**TablePagination MUST NOT:**
- ❌ Render inside the Table component
- ❌ Be passed to Table as a prop
- ❌ Be rendered by Table in any way
- ❌ Assume data fetching ownership
- ❌ Assume sorting ownership
- ❌ Assume filtering ownership
- ❌ Own page-level vertical rhythm

**Correct Placement:**
- ✅ TablePagination is ALWAYS placed by a Page Pattern (e.g. Table Page)
- ✅ TablePagination sits inside Card, below Table (sibling, not child)
- ✅ Table remains layout-agnostic for data rows only

**Why this boundary exists:**
- Table is a pure grid layout component (Level 2)
- TablePagination is a pagination control component (Level 2)
- They are siblings at the same architectural level
- Neither should own or render the other

## Ownership Lock

**This section defines permanent architectural boundaries.**

**TablePagination owns (LOCKED):**
- Pagination control layout
- Page number display and formatting
- Numbered page button rendering
- Page windowing with ellipsis
- Prev/Next button rendering
- Internal spacing (padding, gap)
- Visual subordination styling
- Defensive empty state rendering

**Table Page Pattern owns (LOCKED):**
- WHERE pagination appears (inside Card, below Table)
- WHICH page number to display (current page state)
- Total items count (from data)
- Page size configuration

**Table Component owns (LOCKED):**
- Grid layout for data rows
- Row rendering
- Cell rendering
- Column semantic width behavior

**TableToolbar Component owns (LOCKED):**
- Search + filter layout (top of table)
- Does NOT own pagination

**No other component may assume these responsibilities.**

If you are modifying this component and feel it should own additional
responsibilities, you are likely introducing architectural drift.

STOP and consult the design system architecture documentation.

## Relationship to TableToolbar

TablePagination and TableToolbar are **sibling components** at the same
architectural level (Level 2 — Molecule).

**Similarities:**
- Both are Level 2 components
- Both are placed by Page Pattern (not by Table)
- Both sit inside Card as siblings to Table
- Both have defensive empty behavior
- Both have locked ownership boundaries

**Differences:**
- TableToolbar: Top of table (search + filters)
- TablePagination: Bottom of table (page navigation)

**Neither owns the other. Neither renders the other.**
        `,
      },
    },
  },
  argTypes: {
    page: {
      control: 'number',
      description: 'Current page number (1-based)',
    },
    pageSize: {
      control: 'number',
      description: 'Number of items per page',
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items across all pages',
    },
  },
};

export default meta;
type Story = StoryObj<TablePaginationProps>;

/**
 * Default pagination state (middle page with numbered navigation).
 */
export const Default: Story = {
  args: {
    page: 2,
    pageSize: 10,
    totalItems: 42,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Default Pagination**

Demonstrates pagination in a typical middle page state with numbered page buttons.

- Current page: 2 (highlighted)
- Showing items 11–20 of 42
- Total pages: 5
- All pages visible: 1 [2] 3 4 5
- Both Previous and Next are enabled
        `,
      },
    },
  },
};

/**
 * First page state with numbered navigation.
 */
export const FirstPage: Story = {
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 42,
  },
  parameters: {
    docs: {
      description: {
        story: `
**First Page**

Demonstrates pagination at the first page with numbered navigation.

- Current page: 1 (highlighted)
- Showing items 1–10 of 42
- Total pages: 5
- Page display: [1] 2 3 4 5
- Previous button is disabled
- Next button is enabled
        `,
      },
    },
  },
};

/**
 * Last page state with numbered navigation.
 */
export const LastPage: Story = {
  args: {
    page: 5,
    pageSize: 10,
    totalItems: 42,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Last Page**

Demonstrates pagination at the last page with numbered navigation.

- Current page: 5 (highlighted)
- Showing items 41–42 of 42
- Total pages: 5
- Page display: 1 2 3 4 [5]
- Previous button is enabled
- Next button is disabled
        `,
      },
    },
  },
};

/**
 * Single page (no pagination needed).
 */
export const SinglePage: Story = {
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 5,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Single Page (Defensive Behavior)**

Demonstrates what happens when pagination is not needed.

**Scenario:**
- Total items: 5
- Page size: 10
- Only 1 page needed

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TablePagination even when not needed
- No phantom spacing introduced
- No layout shifts when data size changes

This is defensive behavior built into the component itself, not a story-only rule.
        `,
      },
    },
  },
};

/**
 * Empty dataset (no pagination needed).
 */
export const Empty: Story = {
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 0,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Empty Dataset (Defensive Behavior)**

Demonstrates pagination with no items.

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

This prevents phantom spacing when table has no data.
        `,
      },
    },
  },
};

/**
 * Medium dataset showing ellipsis on right side.
 */
export const MediumDataset: Story = {
  args: {
    page: 3,
    pageSize: 10,
    totalItems: 120,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Medium Dataset (Ellipsis on Right)**

Demonstrates pagination windowing when near the beginning of many pages.

- Current page: 3 (highlighted)
- Showing items 21–30 of 120
- Total pages: 12
- Page display: \`1 2 [3] 4 … 12\`
- Both Previous and Next are enabled

**Windowing Strategy:**
- Show pages 1-4 (window around page 3)
- Skip pages 5-11 (ellipsis)
- Always show last page (12)
        `,
      },
    },
  },
};

/**
 * Large dataset with ellipsis on both sides.
 */
export const LargeDataset: Story = {
  args: {
    page: 15,
    pageSize: 10,
    totalItems: 342,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Large Dataset (Ellipsis on Both Sides)**

Demonstrates pagination windowing in the middle of many pages.

- Current page: 15 (highlighted)
- Showing items 141–150 of 342
- Total pages: 35
- Page display: \`1 … 14 [15] 16 … 35\`
- Both Previous and Next are enabled

**Windowing Strategy:**
- Always show first page (1)
- Skip pages 2-13 (ellipsis)
- Show pages 14-16 (window around page 15)
- Skip pages 17-34 (ellipsis)
- Always show last page (35)

**Maximum 7 visible page numbers prevents UI clutter.**
        `,
      },
    },
  },
};
