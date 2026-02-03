/**
 * DataTable — Level 3 (Organism)
 * 
 * Storybook documentation and examples for the DataTable component.
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createDataTable, type DataTableProps } from './data-table';
import { createSearchInput } from '../search-input/search-input';
import { createFilterDropdownTrigger } from '../filter-dropdown-trigger/filter-dropdown-trigger';
import { createTableGrid, createTableHeader, createTableBody, type ColumnDefinition } from '../table-grid/table-grid';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createTableCell } from '../table-cell/table-cell';
import { createTag } from '../tag/tag';

const meta: Meta<DataTableProps> = {
  title: '1. Components / 3. Organisms / DataTable',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DataTable — Canonical Single-Table Workflow Surface

## Quick Start

• **What:** Bundles Card + TableToolbar + TableGrid + TablePagination into one component for single-table workflows  
• **When to use:** Pages with ONE dataset, ONE search/filter surface, ONE pagination (Votes, Surveys, Projects, Drive)  
• **When NOT to use:** SegmentedTablePage, multiple tables, comparison pages, or dashboards  
• **Structure:** Fixed composition (Card → Toolbar → Grid → Pagination) with zero layout logic  
• **Use TablePage pattern when:** You need page-level control or custom structures  
• **Default:** TablePage uses DataTable unless explicitly disabled

---

## Purpose

DataTable is a **Level 3 (Organism)** component that represents the canonical
single-table workflow surface for LFX One.

DataTable bundles Card, TableToolbar, TableGrid, and TablePagination with
opinionated defaults that are VALID ONLY for single-table pages.

It exists to:
- Reduce boilerplate for common single-table pages
- Encode correct defaults by convention
- Prevent misuse through clear architectural boundaries

> **DataTable is the default table surface used by TablePage** unless explicitly disabled.
> It is not required for advanced or segmented layouts.

---

## When to Use

✅ **USE DataTable for:**
- Pages with exactly ONE dataset
- Pages with a single search + filter surface
- Pages with ONE pagination control
- Workflow-style list pages:
  - Votes
  - Surveys
  - Projects
  - Drive
  - Mailing Lists

---

## When NOT to Use

❌ **DO NOT USE DataTable for:**
- SegmentedTablePage (multiple tables)
- Pages with multiple independent tables
- Pages where filters scope only part of the data
- Comparison pages
- Dashboard pages with multiple data surfaces

> **WARNING:** Do NOT use DataTable in SegmentedTablePage or multi-table layouts.
> Use TableGrid, TableToolbar, and TablePagination directly instead.

---

## Structure (FIXED)

DataTable renders EXACTLY this structure:

\`\`\`
Card
├─ TableToolbar        (search + filters)
├─ TableGrid           (data grid only)
└─ TablePagination     (page navigation)
\`\`\`

No other structure is allowed.

⚠️ **Note:** \`Table\` is deprecated terminology.  
Use \`TableGrid\` when referring to the data grid component.  
Use \`DataTable\` when referring to the full single-table workflow.

---

## Rules & Contracts (Normative)

### Architectural Boundaries (LOCKED)

**DataTable owns:**
- Composition ONLY
- Bundling child components into Card

**DataTable does NOT own:**
- Search + filter layout → TableToolbar
- Data grid layout → TableGrid
- Pagination controls → TablePagination
- Page placement → Page Patterns (Table Page)

**DataTable MUST NOT:**
- Style children directly
- Apply padding, margins, or flex rules
- Detect child types
- Contain conditional spacing logic

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

### Core Principle

> **Each layer owns exactly one responsibility.  
No component may "help" another by re-implementing layout or behavior.**

If something feels missing, it belongs in a **different layer**, not as an override.

### Binding Rules

**Page Examples MUST NOT invent layout.**  
They either configure DataTable or configure TablePage.

Anything else is a bug.

---

## API

**Required:**
- \`table\` (HTMLElement) — TableGrid component

**Optional:**
- \`toolbar\` (object) — Search input and filter controls
  - \`search\` (HTMLElement) — SearchInput with variant="toolbar"
  - \`filters\` (HTMLElement[]) — FilterDropdownTrigger components
- \`pagination\` (object) — Pagination configuration
  - \`page\` (number) — Current page (1-based)
  - \`pageSize\` (number) — Items per page
  - \`totalItems\` (number) — Total items across all pages
  - \`pageSizeOptions\` (number[]) — Optional page size selector
  - \`onPageChange\` (function) — Page change callback
  - \`onPageSizeChange\` (function) — Page size change callback

---

## Appendix: Defensive Behavior

**Empty states are handled by child components:**
- If \`toolbar\` is undefined → TableToolbar renders \`display: none\`
- If \`pagination\` not needed → TablePagination renders \`display: none\`
- DataTable itself never conditionally renders children

This ensures consistent layout without phantom spacing.

---

## Appendix: Composition Pattern

DataTable is a **thin composition wrapper**:
1. Creates child components (TableToolbar, TablePagination)
2. Wraps them in Card
3. Delegates ALL layout behavior to children

**Zero layout logic beyond composition.**

---

## Appendix: Relationship to Page Patterns

**Table Page pattern decides:**
- WHERE DataTable is placed
- AppHeader configuration
- PageSection density
- Vertical rhythm with header

**DataTable decides:**
- Card composition
- Child component ordering

---

## Appendix: Choosing Between TablePage and DataTable

Both **TablePage** and **DataTable** exist intentionally.  
They solve different problems.

### Use DataTable (Level 3) when:

- Exactly ONE dataset
- Exactly ONE search + filter surface
- Exactly ONE pagination surface
- Workflow-style list page
- Convention over configuration is desired

Typical examples:
- Votes
- Surveys
- Projects
- Drive
- Mailing Lists

**Mental model:**  
"I just want the standard LFX One table workflow."

### Use TablePage (Pattern) when:

- You need page-level control
- The table is only part of the page
- You are composing custom structures
- You expect future divergence

**Mental model:**  
"I want to assemble the page myself, but correctly."

### Do NOT use DataTable when:

- Multiple tables exist on the page
- SegmentedTablePage is used
- Filters scope only part of the data
- The page is comparative or analytical
- Layout overrides are required

In these cases, compose:
- TableGrid
- TableToolbar
- TablePagination
directly under the appropriate Page Pattern.

### Decision Shortcut

If all are true:
- One dataset
- One toolbar
- One pagination row
- Standard list workflow

→ Use **DataTable**

Otherwise:
→ Use **TablePage**

---

## Appendix: Architectural Guardrails for Agents

This component is part of the **LFX One table system**.

The table system is intentionally layered to prevent layout drift and ownership confusion.

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

### Agent & Contributor Warning

If you feel tempted to:
- add flex logic to a page example
- add spacing to a pattern that belongs in a component
- move toolbar or pagination into TableGrid

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.

---

## Appendix: Level 3 Philosophy

DataTable is opinionated by design:
- Single-table only
- Workflow-oriented
- Convention over configuration
- No layout flags or overrides
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DataTableProps>;

/**
 * Helper: Create a simple placeholder table for demonstration.
 */
function createPlaceholderTable(rows: number = 5): HTMLElement {
  const columns: ColumnDefinition[] = [
    { key: 'name', semanticType: 'primary' },
    { key: 'type', semanticType: 'categorical' },
    { key: 'status', semanticType: 'categorical' },
    { key: 'count', semanticType: 'numeric' },
  ];

  const header = createTableHeader([
    createTableHeaderCell({ children: 'Name' }),
    createTableHeaderCell({ children: 'Type' }),
    createTableHeaderCell({ children: 'Status' }),
    createTableHeaderCell({ children: 'Count', align: 'right' }),
  ]);

  const bodyRows: HTMLElement[] = [];
  for (let i = 0; i < rows; i++) {
    bodyRows.push(
      createTableRow({
        clickable: true,
        children: [
          createTableCell({ children: `Item ${i + 1}`, contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'Type A', variant: 'info' }) }),
          createTableCell({ children: createTag({ children: 'Active', variant: 'success' }) }),
          createTableCell({ children: String(Math.floor(Math.random() * 100)), align: 'right' }),
        ],
      })
    );
  }

  const body = createTableBody(bodyRows);

  return createTableGrid({
    columns,
    children: [header, body],
  });
}

/**
 * Default
 * 
 * Canonical DataTable with all features enabled:
 * - Toolbar (search + filters)
 * - TableGrid (data)
 * - Pagination (page navigation)
 * 
 * This is the most common configuration for single-table pages.
 */
export const Default: Story = {
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar',
        }),
        filters: [
          createFilterDropdownTrigger({ label: 'All Types' }),
          createFilterDropdownTrigger({ label: 'All Statuses' }),
        ],
      },
      table: createPlaceholderTable(10),
      pagination: {
        page: 2,
        pageSize: 10,
        totalItems: 42,
        pageSizeOptions: [10, 20, 50],
      },
    });
  },
};

/**
 * No Toolbar
 * 
 * DataTable without search or filters.
 * 
 * Use when:
 * - Dataset is small and does not require filtering
 * - Search and filters are handled externally
 * - Minimal workflow pages
 * 
 * TableToolbar will render with display: none (no phantom spacing).
 */
export const NoToolbar: Story = {
  render: () => {
    return createDataTable({
      table: createPlaceholderTable(10),
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 42,
      },
    });
  },
};

/**
 * No Pagination
 * 
 * DataTable without pagination controls.
 * 
 * Use when:
 * - Dataset is small (fits on one page)
 * - Pagination is handled externally
 * - Infinite scroll is used instead
 * 
 * TablePagination will render with display: none (no phantom spacing).
 */
export const NoPagination: Story = {
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar',
        }),
      },
      table: createPlaceholderTable(5),
    });
  },
};

/**
 * Minimal
 * 
 * DataTable with ONLY the table (no toolbar, no pagination).
 * 
 * Use when:
 * - Dataset is simple and self-contained
 * - No search, filter, or pagination required
 * - Read-only data display
 * 
 * Both TableToolbar and TablePagination will render with display: none.
 * 
 * **Note:** This is the absolute minimum configuration.
 * If you need more control over layout, consider using TableGrid directly.
 */
export const Minimal: Story = {
  render: () => {
    return createDataTable({
      table: createPlaceholderTable(5),
    });
  },
};

/**
 * With Page Size Selector
 * 
 * DataTable with page size options enabled.
 * 
 * Use when:
 * - Users need to control results per page
 * - Dataset size varies significantly
 * - Power users benefit from density control
 * 
 * Page size selector appears on right side of pagination row.
 */
export const WithPageSizeSelector: Story = {
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar',
        }),
        filters: [
          createFilterDropdownTrigger({ label: 'All Types' }),
        ],
      },
      table: createPlaceholderTable(10),
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 120,
        pageSizeOptions: [10, 25, 50, 100],
      },
    });
  },
};

/**
 * Large Dataset
 * 
 * DataTable with a large dataset requiring pagination windowing.
 * 
 * Demonstrates:
 * - Ellipsis in page navigation
 * - Page windowing (max 7 visible pages)
 * - Page size selector with multiple options
 * 
 * This configuration is common for high-volume data pages.
 */
export const LargeDataset: Story = {
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar',
        }),
        filters: [
          createFilterDropdownTrigger({ label: 'All Types' }),
          createFilterDropdownTrigger({ label: 'All Statuses' }),
          createFilterDropdownTrigger({ label: 'All Groups' }),
        ],
      },
      table: createPlaceholderTable(20),
      pagination: {
        page: 15,
        pageSize: 20,
        totalItems: 680,
        pageSizeOptions: [10, 20, 50, 100],
      },
    });
  },
};
