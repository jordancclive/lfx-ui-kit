import type { Meta, StoryObj } from '@storybook/html';
import { createTableGrid, createTableHeader, createTableBody, type TableGridProps, type ColumnDefinition } from './table-grid';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createTableCell } from '../table-cell/table-cell';
import { createTag } from '../tag/tag';

const meta: Meta<TableGridProps> = {
  title: '1. Components / 2. Molecules / TableGrid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## TableGrid — Grid Layout Component

**Level 2 — Molecule (Grid Layout ONLY)**

> **TableGrid provides grid layout for tabular data ONLY.**
> It does NOT include search, filters, pagination, or data logic.

TableGrid is a pure grid layout component that coordinates header rows and data rows using CSS Grid.

### ⚠️ Critical: What TableGrid Is NOT

**TableGrid is NOT a full table solution.**

TableGrid does NOT own:
- ❌ Search or filtering controls (owned by **TableToolbar**)
- ❌ Pagination controls (owned by **TablePagination**)
- ❌ Sorting logic (owned by parent controller)
- ❌ Selection logic (owned by parent controller)
- ❌ Row hover or interaction states (owned by **TableRow**)
- ❌ Cell styling or typography (owned by **TableCell**)
- ❌ Data fetching or management

### Architectural Boundaries (LOCKED)

\`\`\`
Card
├─ TableToolbar (search + filters)
├─ TableGrid (grid layout ONLY)
└─ TablePagination (page controls)
\`\`\`

**TableGrid = Grid layout for rows/cells**
**TableToolbar = Search + filters (sibling, above)**
**TablePagination = Pagination controls (sibling, below)**

These are separate Level 2 components with clear boundaries.

### What TableGrid DOES Own

TableGrid owns:
- ✅ CSS Grid layout for tabular data
- ✅ Column alignment (header ↔ body)
- ✅ Semantic column width behavior
- ✅ Grid spacing and structure

---

### Why This Is Called TableGrid

**TableGrid renders ONLY:**
- Columns
- Rows
- Cells

**TableGrid does NOT include:**
- Search
- Filters
- Pagination
- Card
- Workflow structure

> **If you want the standard LFX One table workflow, use \`DataTable\`, not \`TableGrid\`.**

**Naming Clarity:**
- **TableGrid** = grid layout component (Level 2)
- **DataTable** = complete table workflow surface (Level 3)

⚠️ **Note:** \`Table\` is deprecated terminology.  
Use \`TableGrid\` when referring to the data grid component.  
Use \`DataTable\` when referring to the full single-table workflow.

---

### Layout Strategy

TableGrid uses **CSS Grid** for column alignment:
- Header cells and body cells align via shared grid column definitions
- Uses \`display: contents\` on rows to allow cells to participate in grid
- Column count and semantics controlled via \`columns\` prop

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-table-surface-background\` |
| Container border | \`--color-table-surface-border\` |
| Container radius | \`--radius-table\` |

### Composition

TableGrid expects these children:
- **Header:** \`createTableHeader()\` wrapping \`TableHeaderCell\` components
- **Body:** \`createTableBody()\` wrapping \`TableRow\` components with \`TableCell\` children

---

### Architectural Guardrails

This component is part of the **LFX One table system**.

The table system is intentionally layered to prevent layout drift and ownership confusion.

#### Core Principle

> **Each layer owns exactly one responsibility.  
No component may "help" another by re-implementing layout or behavior.**

If something feels missing, it belongs in a **different layer**, not as an override.

#### DO

- Use this component only for its documented responsibility
- Assume sibling components exist and will handle adjacent concerns
- Rely on defensive behavior instead of conditional rendering
- Let Page Patterns decide *where* things appear
- Let Molecules decide *how* things are laid out

#### DO NOT

- Re-implement spacing, flex, or padding outside this component
- Add layout flags or overrides
- Move responsibilities up or down the stack
- Render sibling components inside this one
- Special-case page examples

#### Ownership Boundaries (Locked)

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

#### Agent & Contributor Warning

If you feel tempted to:
- add flex logic to a page example
- add spacing to a pattern that belongs in a component
- move toolbar or pagination into TableGrid

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.
        `,
      },
    },
  },
  argTypes: {
    columns: {
      control: { type: 'number', min: 2, max: 8 },
      description: 'Number of columns for grid layout',
    },
    withBorder: {
      control: 'boolean',
      description: 'Apply container border',
    },
    withBackground: {
      control: 'boolean',
      description: 'Apply surface background',
    },
    dense: {
      control: 'boolean',
      description: 'Reduced vertical spacing',
    },
  },
};

export default meta;
type Story = StoryObj<TableGridProps>;

// ========================================
// Helper to create sample data
// ========================================

function createSampleTable(options: {
  columns?: number;
  withBorder?: boolean;
  withBackground?: boolean;
  dense?: boolean;
  rowCount?: number;
  withSort?: 'asc' | 'desc' | null;
  selectedRow?: number;
  disabledRow?: number;
} = {}) {
  const {
    columns = 4,
    withBorder = false,
    withBackground = false,
    dense = false,
    rowCount = 3,
    withSort = null,
    selectedRow,
    disabledRow,
  } = options;

  // Create header cells
  const headerCells = [
    createTableHeaderCell({ children: 'Name', sortDirection: withSort }),
    createTableHeaderCell({ children: 'Status', showTooltip: true }),
    createTableHeaderCell({ children: 'Date' }),
    createTableHeaderCell({ children: 'Amount', align: 'right' }),
  ];

  // Create data rows
  const sampleData = [
    { name: 'John Doe', status: 'Active', date: 'Jan 15, 2026', amount: '$1,234.56' },
    { name: 'Jane Smith', status: 'Pending', date: 'Jan 14, 2026', amount: '$567.89' },
    { name: 'Bob Johnson', status: 'Inactive', date: 'Jan 13, 2026', amount: '$2,345.67' },
    { name: 'Alice Brown', status: 'Active', date: 'Jan 12, 2026', amount: '$890.12' },
    { name: 'Charlie Wilson', status: 'Pending', date: 'Jan 11, 2026', amount: '$3,456.78' },
  ];

  const rows = sampleData.slice(0, rowCount).map((data, index) => {
    const isSelected = selectedRow === index;
    const isDisabled = disabledRow === index;

    const cells = [
      createTableCell({ children: data.name, contentType: 'primary', disabled: isDisabled }),
      createTableCell({ children: data.status, contentType: 'secondary', disabled: isDisabled }),
      createTableCell({ children: data.date, contentType: 'muted', disabled: isDisabled }),
      createTableCell({ children: data.amount, contentType: 'numeric', disabled: isDisabled }),
    ];

    return createTableRow({
      children: cells,
      selected: isSelected,
      disabled: isDisabled,
      clickable: !isDisabled,
    });
  });

  return createTableGrid({
    columns,
    withBorder,
    withBackground,
    dense,
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });
}

// ========================================
// Basic Stories
// ========================================

export const Default: Story = {
  render: () => createSampleTable(),
};

export const WithBorder: Story = {
  render: () => createSampleTable({ withBorder: true }),
  parameters: {
    docs: {
      description: {
        story: 'Table with container border and rounded corners.',
      },
    },
  },
};

export const WithBackground: Story = {
  render: () => createSampleTable({ withBackground: true }),
  parameters: {
    docs: {
      description: {
        story: 'Table with surface background color.',
      },
    },
  },
};

export const WithBorderAndBackground: Story = {
  render: () => createSampleTable({ withBorder: true, withBackground: true }),
  parameters: {
    docs: {
      description: {
        story: 'Table with both border and background for a card-like appearance.',
      },
    },
  },
};

export const Dense: Story = {
  render: () => createSampleTable({ dense: true, withBorder: true }),
  parameters: {
    docs: {
      description: {
        story: 'Dense table with reduced vertical spacing.',
      },
    },
  },
};

// ========================================
// Semantic Column Widths
// ========================================

export const SemanticColumnWidths: Story = {
  render: () => {
    // Define column semantics
    const columns: ColumnDefinition[] = [
      { key: 'name', semanticType: 'primary' },
      { key: 'type', semanticType: 'categorical' },
      { key: 'description', semanticType: 'primary' },
      { key: 'count', semanticType: 'numeric' },
      { key: 'updated', semanticType: 'meta' },
    ];

    // Create header cells
    const headerCells = [
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Type' }),
      createTableHeaderCell({ children: 'Description' }),
      createTableHeaderCell({ children: 'Count', align: 'right' }),
      createTableHeaderCell({ children: 'Updated' }),
    ];

    // Create data rows with semantic content
    const data = [
      { 
        name: 'Security Working Group',
        type: 'Working Group',
        description: 'Addresses security vulnerabilities and best practices',
        count: 8,
        updated: 'Mar 14, 2026'
      },
      { 
        name: 'Technical Advisory Group',
        type: 'TAG',
        description: 'Provides expert guidance on technical architecture',
        count: 6,
        updated: 'Mar 14, 2026'
      },
      { 
        name: 'Cloud Native SIG',
        type: 'Special Interest',
        description: 'Focuses on cloud-native practices and containerization',
        count: 24,
        updated: 'Mar 13, 2026'
      },
    ];

    const rows = data.map(item => {
      const cells = [
        // Primary text column - expands to fill space
        createTableCell({ children: item.name, contentType: 'primary' }),
        
        // Categorical column - intrinsic width with Tag
        createTableCell({ children: createTag({ children: item.type }), contentType: 'secondary' }),
        
        // Primary text column - expands to fill space
        createTableCell({ children: item.description, contentType: 'secondary' }),
        
        // Numeric column - intrinsic width, right aligned
        createTableCell({ children: String(item.count), contentType: 'numeric', align: 'right' }),
        
        // Meta column - intrinsic width
        createTableCell({ children: item.updated, contentType: 'muted' }),
      ];

      return createTableRow({ children: cells, clickable: true });
    });

    return createTableGrid({
      columns,
      withBorder: true,
      withBackground: true,
      children: [
        createTableHeader(headerCells),
        createTableBody(rows),
      ],
    });
  },
  parameters: {
    docs: {
      description: {
        story: `
**Semantic Column Width Behavior**

This table demonstrates semantic column widths based on content type:

- **primary** columns (Name, Description): Flexible width, expand to fill available space
- **categorical** column (Type): Intrinsic width, sized to Tag content
- **numeric** column (Count): Intrinsic width, right-aligned for scannability
- **meta** column (Updated): Intrinsic width, sized to date content

Column width behavior is semantic, not visual. Primary columns share available space after intrinsic columns are sized.

This replaces equal-width columns with LFX One-aligned semantic behavior.
        `,
      },
    },
  },
};

// ========================================
// State Examples
// ========================================

export const WithSelectedRow: Story = {
  render: () => createSampleTable({ withBorder: true, selectedRow: 1 }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing a selected row. Selection styling is owned by TableRow, not Table.',
      },
    },
  },
};

export const WithDisabledRow: Story = {
  render: () => createSampleTable({ withBorder: true, disabledRow: 2 }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing a disabled row. Disabled styling is owned by TableRow and TableCell, not Table.',
      },
    },
  },
};

export const WithSortIndicator: Story = {
  render: () => createSampleTable({ withBorder: true, withSort: 'asc' }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing sort indicator on header. Sort indicator is owned by TableHeaderCell. **Table does NOT implement sorting logic.**',
      },
    },
  },
};

// ========================================
// In Context - Realistic Example
// ========================================

export const InContext: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 24px; background: var(--neutral-50);';

    // Title
    const title = document.createElement('h2');
    title.textContent = 'Recent Transactions';
    title.style.cssText = 'margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);';
    container.appendChild(title);

    // Create a realistic table
    const headerCells = [
      createTableHeaderCell({ children: 'Transaction', sortDirection: 'desc' }),
      createTableHeaderCell({ children: 'Category', showTooltip: true }),
      createTableHeaderCell({ children: 'Date' }),
      createTableHeaderCell({ children: 'Amount', align: 'right' }),
    ];

    const transactions = [
      { name: 'Coffee Shop', category: 'Food & Drink', date: 'Today', amount: '-$4.50' },
      { name: 'Salary Deposit', category: 'Income', date: 'Yesterday', amount: '+$3,500.00' },
      { name: 'Electric Bill', category: 'Utilities', date: 'Jan 12', amount: '-$125.00' },
      { name: 'Online Purchase', category: 'Shopping', date: 'Jan 11', amount: '-$67.99' },
      { name: 'Transfer from Savings', category: 'Transfer', date: 'Jan 10', amount: '+$500.00' },
    ];

    const rows = transactions.map((tx, index) => {
      const isIncome = tx.amount.startsWith('+');
      const cells = [
        createTableCell({ children: tx.name, contentType: 'primary' }),
        createTableCell({ children: tx.category, contentType: 'secondary' }),
        createTableCell({ children: tx.date, contentType: 'muted' }),
        createTableCell({ children: tx.amount, contentType: 'numeric' }),
      ];

      // Style the amount cell based on income/expense
      const amountCell = cells[3];
      if (isIncome) {
        amountCell.style.color = 'var(--success-600)';
      }

      return createTableRow({
        children: cells,
        clickable: true,
      });
    });

    const table = createTableGrid({
      columns: 4,
      withBorder: true,
      withBackground: true,
      children: [
        createTableHeader(headerCells),
        createTableBody(rows),
      ],
    });

    container.appendChild(table);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
A realistic example showing Table composing TableHeaderCell, TableRow, and TableCell.

**Component ownership:**
- **Table:** Layout grid, container border/background
- **TableHeaderCell:** Header text, sort indicator, tooltip icon
- **TableRow:** Row background, hover state, click handling
- **TableCell:** Text color, alignment, typography
        `,
      },
    },
  },
};

// ========================================
// Empty State
// ========================================

export const EmptyState: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Status' }),
      createTableHeaderCell({ children: 'Date' }),
      createTableHeaderCell({ children: 'Amount', align: 'right' }),
    ];

    // Empty body with message
    const emptyRow = document.createElement('div');
    emptyRow.style.cssText = `
      grid-column: 1 / -1;
      padding: 48px 16px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
    `;
    emptyRow.textContent = 'No data available';

    const body = createTableBody(emptyRow);

    return createTableGrid({
      columns: 4,
      withBorder: true,
      withBackground: true,
      children: [
        createTableHeader(headerCells),
        body,
      ],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with empty state. The empty message spans all columns using grid-column.',
      },
    },
  },
};

// ========================================
// Different Column Counts
// ========================================

export const ThreeColumns: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'Product' }),
      createTableHeaderCell({ children: 'Quantity' }),
      createTableHeaderCell({ children: 'Price', align: 'right' }),
    ];

    const rows = [
      { product: 'Widget A', qty: '10', price: '$99.00' },
      { product: 'Widget B', qty: '5', price: '$149.00' },
      { product: 'Widget C', qty: '20', price: '$49.00' },
    ].map(item => createTableRow({
      children: [
        createTableCell({ children: item.product, contentType: 'primary' }),
        createTableCell({ children: item.qty, contentType: 'secondary' }),
        createTableCell({ children: item.price, contentType: 'numeric' }),
      ],
    }));

    return createTableGrid({
      columns: 3,
      withBorder: true,
      children: [
        createTableHeader(headerCells),
        createTableBody(rows),
      ],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 3 columns.',
      },
    },
  },
};

export const SixColumns: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'ID' }),
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Email' }),
      createTableHeaderCell({ children: 'Role' }),
      createTableHeaderCell({ children: 'Status' }),
      createTableHeaderCell({ children: 'Actions', align: 'right' }),
    ];

    const rows = [
      { id: '001', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
      { id: '002', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
      { id: '003', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    ].map(item => createTableRow({
      children: [
        createTableCell({ children: item.id, contentType: 'muted' }),
        createTableCell({ children: item.name, contentType: 'primary' }),
        createTableCell({ children: item.email, contentType: 'secondary' }),
        createTableCell({ children: item.role, contentType: 'secondary' }),
        createTableCell({ children: item.status, contentType: 'secondary' }),
        createTableCell({ children: '•••', contentType: 'muted', align: 'right' }),
      ],
    }));

    return createTableGrid({
      columns: 6,
      withBorder: true,
      children: [
        createTableHeader(headerCells),
        createTableBody(rows),
      ],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 6 columns demonstrating wider layouts.',
      },
    },
  },
};
