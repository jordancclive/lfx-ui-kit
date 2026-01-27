/**
 * PAGE PATTERN — NORMATIVE
 * 
 * This file defines a reusable page-level pattern.
 * It is a structural blueprint, not a product page.
 * 
 * Agents may copy this pattern when creating new pages.
 * 
 * Rules are locked by docs/page-patterns/table-page.md
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * TABLE PAGE PATTERN
 * 
 * The canonical single-table page pattern for LFX One.
 * 
 * Used by:
 * - Votes
 * - Surveys
 * - Projects
 * - Drive
 * - Mailing Lists
 * 
 * NOT used by:
 * - Groups (uses Segmented Table Page pattern)
 * 
 * Key characteristics:
 * - Page title == Table title (no section titles)
 * - One table per page
 * - TIGHT header → table handoff (workflow-optimized vertical rhythm)
 * - Filters DOCK to table (read as table's top edge, not floating toolbar)
 * - Search is FULL-WIDTH by default (primary scoping mechanism)
 * - Semantic column widths (flexible vs intrinsic)
 * - Filter order matches column semantics (cognitive ease)
 * 
 * CANONICAL STRUCTURE:
 * 
 * AppShell
 * └─ PageLayout (gap: 8px — TIGHTER than default)
 *    ├─ AppHeader (dense: true)
 *    │  ├─ title (page title == table title)
 *    │  └─ description (optional)
 *    └─ PageSection (dense: true)
 *       └─ Card
 *          ├─ TableToolbar (DOCKED — no margin, internal padding)
 *          │  ├─ SearchInput (flex: 1 — FULL-WIDTH by default)
 *          │  └─ Filters (order matches columns)
 *          ├─ Table (semantic columns)
 *          └─ TablePagination (optional — Level 2 component)
 * 
 * VISUAL GOALS:
 * - Header hands off directly into table (no buffer feeling)
 * - Toolbar feels like table's top edge (not floating controls)
 * - Page reads as ONE workflow top → bottom
 * 
 * ARCHITECTURAL LAYERING:
 * - Table component: Pure grid layout (no filter/pagination knowledge)
 * - TableToolbar component: Search + filter layout (Level 2)
 * - TablePagination component: Pagination controls (Level 2)
 * - Table Page pattern: Composition authority (WHERE components go)
 * 
 * If something feels off visually:
 * - Identify which component owns the issue
 * - Fix in components or tokens
 * - Do NOT patch in this pattern
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createCard } from '../../../../components/card/card';
import { createTable, createTableHeader, createTableBody, type ColumnDefinition } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createSearchInput } from '../../../../components/search-input/search-input';
import { createFilterDropdownTrigger } from '../../../../components/filter-dropdown-trigger/filter-dropdown-trigger';
import { createTableToolbar } from '../../../../components/table-toolbar/table-toolbar';
import { createTablePagination } from '../../../../components/table-pagination/table-pagination';
import { createDataTable } from '../../../../components/data-table/data-table';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTag } from '../../../../components/tag/tag';

// =============================================================================
// DATA: Representative table data for canonical table pages
// =============================================================================

interface ProjectRow {
  name: string;
  status: string;
  category: string;
  maintainers: number;
  lastActivity: string;
}

const projectsData: ProjectRow[] = [
  {
    name: 'Cloud Native Platform',
    status: 'Active',
    category: 'Infrastructure',
    maintainers: 12,
    lastActivity: 'Today',
  },
  {
    name: 'Security Toolkit',
    status: 'Active',
    category: 'Security',
    maintainers: 8,
    lastActivity: 'Yesterday',
  },
  {
    name: 'Developer Portal',
    status: 'Active',
    category: 'Documentation',
    maintainers: 5,
    lastActivity: 'Jan 24, 2026',
  },
  {
    name: 'API Gateway',
    status: 'Incubating',
    category: 'Infrastructure',
    maintainers: 15,
    lastActivity: 'Jan 23, 2026',
  },
  {
    name: 'Data Pipeline',
    status: 'Active',
    category: 'Data',
    maintainers: 10,
    lastActivity: 'Jan 22, 2026',
  },
  {
    name: 'Monitoring Dashboard',
    status: 'Active',
    category: 'Operations',
    maintainers: 6,
    lastActivity: 'Jan 21, 2026',
  },
  {
    name: 'Authentication Service',
    status: 'Archived',
    category: 'Security',
    maintainers: 3,
    lastActivity: 'Jan 15, 2026',
  },
  {
    name: 'Message Queue',
    status: 'Active',
    category: 'Infrastructure',
    maintainers: 9,
    lastActivity: 'Jan 20, 2026',
  },
];

const minimalProjectsData: ProjectRow[] = [
  projectsData[0],
  projectsData[1],
  projectsData[2],
];

// =============================================================================
// HELPERS: Component creation functions
// =============================================================================

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

/**
 * Creates the toolbar with search and filters.
 * 
 * OWNERSHIP: TableToolbar component owns layout, spacing, and flex behavior.
 * 
 * Pattern responsibility:
 * - Define WHICH controls appear (search, which filters)
 * - Define filter ORDER (matches column semantics)
 * - Place toolbar inside Card, immediately above table
 * 
 * TableToolbar responsibility:
 * - HOW controls are laid out (flex, gap, padding)
 * - SearchInput full-width behavior (flex: 1)
 * - Docking to table (internal padding, no margin)
 * 
 * Structure:
 * - Renders inside Card, immediately above table
 * - Docks to table header (no gap)
 * - SearchInput spans full width automatically
 * - Filter order matches column semantics
 */
function createToolbar(): HTMLElement {
  // Pattern defines WHICH controls and their ORDER
  const searchInput = createSearchInput({ 
    placeholder: 'Search projects…',
    variant: 'toolbar',
  });
  
  // Filter order matches column semantics: Category → Status
  const filters = [
    createFilterDropdownTrigger({ label: 'All Categories' }),
    createFilterDropdownTrigger({ label: 'All Statuses' }),
  ];
  
  // TableToolbar owns HOW they're laid out
  return createTableToolbar({
    search: searchInput,
    filters,
  });
}

/**
 * Creates the pagination controls.
 * 
 * ARCHITECTURAL LAYERING:
 * - TablePagination (Level 2) owns pagination layout, spacing, and hierarchy
 * - Table Page pattern defines WHICH page to display and total items
 * 
 * Structure:
 * - Positioned inside Card, directly below table
 * - TablePagination owns layout (padding, alignment, button styling)
 * - Pattern provides data only (page, pageSize, totalItems)
 * 
 * NO MANUAL LAYOUT:
 * - No manual padding (TablePagination owns it)
 * - No manual button styling (TablePagination owns it)
 * - No manual alignment (TablePagination owns it)
 */
function createPagination(totalItems: number): HTMLElement {
  // Pattern provides data — TablePagination owns HOW it's displayed
  return createTablePagination({
    page: 1,
    pageSize: 10,
    totalItems,
  });
}

/**
 * Creates the projects table with semantic column widths.
 * 
 * Column semantics:
 * - Name: Primary text (flexible width, expands)
 * - Status: Categorical (intrinsic width, Tag)
 * - Category: Categorical (intrinsic width, Tag)
 * - Maintainers: Numeric (intrinsic width, right-aligned)
 * - Last Activity: Meta (intrinsic width, date/time)
 */
function createProjectsTable(data: ProjectRow[], dense = false): HTMLElement {
  
  // Define semantic column widths
  const columns: ColumnDefinition[] = [
    { key: 'name', semanticType: 'primary' },
    { key: 'status', semanticType: 'categorical' },
    { key: 'category', semanticType: 'categorical' },
    { key: 'maintainers', semanticType: 'numeric' },
    { key: 'lastActivity', semanticType: 'meta' },
  ];

  // Create header cells
  const headerCells = [
    createTableHeaderCell({ children: 'Name' }),
    createTableHeaderCell({ children: 'Status' }),
    createTableHeaderCell({ children: 'Category' }),
    createTableHeaderCell({ children: 'Maintainers', align: 'right' }),
    createTableHeaderCell({ children: 'Last Activity' }),
  ];

  // Create data rows
  const rows = data.map((project) => {
    const cells = [
      // Primary text column - flexible width
      createTableCell({ children: project.name, contentType: 'primary' }),
      
      // Categorical column - intrinsic width, uses Tag
      createTableCell({ children: createTag({ children: project.status }), contentType: 'secondary' }),
      
      // Categorical column - intrinsic width, uses Tag
      createTableCell({ children: createTag({ children: project.category }), contentType: 'secondary' }),
      
      // Numeric column - intrinsic width, right-aligned
      createTableCell({ children: String(project.maintainers), contentType: 'numeric', align: 'right' }),
      
      // Meta column - intrinsic width, date/time
      createTableCell({ children: project.lastActivity, contentType: 'muted' }),
    ];

    return createTableRow({ children: cells, clickable: true });
  });

  return createTableGrid({
    columns,
    dense,
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });
}

function createDemoNav(activeItemId = 'projects') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'members', children: createTextNode('Members') }),
        createNavItem({ id: 'settings', children: createTextNode('Settings') }),
      ]),
    ],
  });
}

// =============================================================================
// STORY-ONLY PAGE WIDTH WRAPPER
// This exists to make composition stories readable in Storybook.
// Mirrors real LFX One laptop viewport usage (~1280px constraint).
// This is NOT part of the production UI — it's a presentation aid only.
// =============================================================================

function wrapForStorybook(content: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '1280px';
  wrapper.style.margin = '0 auto';
  wrapper.appendChild(content);
  return wrapper;
}

// =============================================================================
// MAIN COMPOSITION FUNCTION
// =============================================================================

interface TablePageConfig {
  // Page configuration
  title: string;
  description?: string;
  actions?: HTMLElement;
  
  // Toolbar configuration
  searchPlaceholder?: string;
  filters?: Array<{ label: string }>;
  
  // Table configuration
  table: HTMLElement;
  
  // Pagination configuration
  page?: number;
  pageSize?: number;
  totalItems?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  
  // Display options
  dense?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  
  // Composition mode
  /**
   * Use DataTable as the default table surface.
   * 
   * When true (default): TablePage uses DataTable internally.
   * When false: TablePage manually composes TableToolbar + TableGrid + TablePagination.
   * 
   * Set to false for:
   * - Advanced layouts
   * - Segmented table pages
   * - Custom composition requirements
   */
  useDataTable?: boolean;
  
  // Navigation
  nav?: HTMLElement;
}

// Legacy interface for backward compatibility with existing stories
interface TablePageArgs {
  dense?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  projectsData?: ProjectRow[];
}

/**
 * Creates a canonical Table Page composition (configurable version).
 * 
 * DEFAULT MODE (useDataTable = true):
 * - Uses DataTable internally
 * - Bundles TableToolbar + TableGrid + TablePagination automatically
 * - Preferred for single-table workflows
 * 
 * ESCAPE HATCH (useDataTable = false):
 * - Manually composes TableToolbar + TableGrid + TablePagination
 * - Required for advanced layouts, segmented pages, or custom composition
 * 
 * Structure:
 * - AppHeader with page title (== table title)
 * - TIGHT vertical handoff (workflow-optimized)
 * - PageSection (dense) containing DataTable OR Card with manual composition
 * - Filters DOCK to table (no gap)
 * 
 * NO section titles inside the page.
 * Page title == Table title.
 * 
 * Visual goals:
 * - Header hands off directly into table
 * - Filters read as table's top edge (not floating toolbar)
 * - Page reads as ONE workflow, not separate regions
 */
function createTablePageFromConfig(config: TablePageConfig): HTMLElement {
  const {
    title,
    description,
    actions,
    searchPlaceholder,
    filters = [],
    table,
    page = 1,
    pageSize = 10,
    totalItems = 0,
    pageSizeOptions,
    onPageChange,
    onPageSizeChange,
    dense = false,
    showFilters = false,
    showPagination = false,
    useDataTable = true, // DEFAULT: Use DataTable
    nav = createDemoNav(),
  } = config;

  const pageChildren: HTMLElement[] = [
    // AppHeader must be first child
    createAppHeader({
      title,
      description,
      actions,
      dense: true, // DEFAULT: Dense header for workflow pages
    }),
  ];

  // MODE A (DEFAULT): Use DataTable
  if (useDataTable) {
    const dataTable = createDataTable({
      toolbar: showFilters && searchPlaceholder ? {
        search: createSearchInput({ 
          placeholder: searchPlaceholder,
          variant: 'toolbar',
        }),
        filters: filters.map(f => createFilterDropdownTrigger({ label: f.label })),
      } : undefined,
      table,
      pagination: showPagination ? {
        page,
        pageSize,
        totalItems,
        pageSizeOptions,
        onPageChange,
        onPageSizeChange,
      } : undefined,
    });

    pageChildren.push(
      createPageSection({
        dense: true,
        children: [dataTable],
      })
    );
  } 
  // MODE B (ESCAPE HATCH): Manual composition
  else {
    const cardChildren: HTMLElement[] = [];
    
    if (showFilters && searchPlaceholder) {
      const searchInput = createSearchInput({ 
        placeholder: searchPlaceholder,
        variant: 'toolbar',
      });
      
      const filterElements = filters.map(f => 
        createFilterDropdownTrigger({ label: f.label })
      );
      
      cardChildren.push(createTableToolbar({
        search: searchInput,
        filters: filterElements,
      }));
    }
    
    cardChildren.push(table);
    
    if (showPagination && totalItems > 0) {
      cardChildren.push(createTablePagination({
        page,
        pageSize,
        totalItems,
        pageSizeOptions,
        onPageChange,
        onPageSizeChange,
      }));
    }

    pageChildren.push(
      createPageSection({
        dense: true,
        children: [
          createCard({
            dense,
            children: cardChildren,
          }),
        ],
      })
    );
  }

  // Build the page content with tighter vertical rhythm
  const pageContent = createPageLayout({
    dense: true,
    children: pageChildren,
  });
  
  pageContent.style.gap = 'var(--spacing-8)';

  // Full AppShell with nav
  const appShell = createAppShell({
    nav,
    content: pageContent,
  });

  return wrapForStorybook(appShell);
}

/**
 * Creates a canonical Table Page composition (legacy version for existing stories).
 */
function createTablePage(args: TablePageArgs = {}): HTMLElement {
  const {
    dense = false,
    showFilters = false,
    showPagination = false,
    projectsData: data = projectsData,
  } = args;

  const pageChildren: HTMLElement[] = [
    // AppHeader must be first child
    // Page title == Table title (no section titles)
    createAppHeader({
      title: 'Projects',
      description: 'Active projects and initiatives across the organization.',
      dense: true, // DEFAULT: Dense header for workflow pages
    }),
  ];

  // Build Card children: optional toolbar + table + optional pagination
  // Pattern defines WHERE components are placed
  // Components (TableToolbar, TablePagination) define HOW they're laid out
  const cardChildren: HTMLElement[] = [];
  
  if (showFilters) {
    cardChildren.push(createToolbar());
  }
  
  cardChildren.push(createProjectsTable(data, dense));
  
  if (showPagination) {
    cardChildren.push(createPagination(data.length));
  }

  // Single PageSection with Card containing table
  pageChildren.push(
    createPageSection({
      dense: true,
      children: [
        createCard({
          dense,
          children: cardChildren,
        }),
      ],
    })
  );

  // Build the page content with tighter vertical rhythm for workflow pages
  const pageContent = createPageLayout({
    dense: true, // ALWAYS dense for Table Pages (workflow handoff)
    children: pageChildren,
  });
  
  // WORKFLOW HANDOFF: Reduce gap between header and content
  // This overrides the default 16px gap to create a tighter visual connection
  // between the page title and the table data
  pageContent.style.gap = 'var(--spacing-8)'; // Tighter than default dense (16px → 8px)

  // Full AppShell with nav
  const appShell = createAppShell({
    nav: createDemoNav(),
    content: pageContent,
  });

  // Wrap for Storybook presentation (story-only constraint)
  return wrapForStorybook(appShell);
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<TablePageArgs> = {
  title: '2. Page Patterns / Table Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Table Page Composition

**This is the canonical table-driven page pattern for LFX One.**

### Pattern Characteristics

- **Single table per page**
- **Page title == Table title** (no section titles)
- **Optional search + filters** inside the Card, above the table
- **Semantic column widths** (flexible vs intrinsic)
- **Clean vertical rhythm**
- **Compact, scan-friendly density**

### Used By

This pattern is used for:
- Votes
- Surveys
- Projects
- Drive
- Mailing Lists

### NOT Used By

- **Groups** (Groups uses a segmented variant with multiple tables and section titles)

### Composition Structure

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   │  ├─ title: "Projects" (page title == table title)
   │  └─ description: "Active projects..."
   └─ PageSection (dense: true)
      └─ Card
         ├─ Search + Filter row (optional)
         └─ Table (semantic columns)
\`\`\`

### Toolbar Placement Pattern

When filters are present:
- Use **TableToolbar** component (Level 2) to contain search + filters
- TableToolbar sits inside the Card, directly above the table
- TableToolbar owns layout, spacing, and flex behavior
- SearchInput automatically receives \`flex: 1\` (full-width)
- Pattern defines WHICH controls and their ORDER
- No section titles or intermediate wrappers

### Column Semantics

Tables use semantic column definitions:
- **Primary text columns** (Name): Flexible width, expand to fill space
- **Categorical columns** (Status, Category): Intrinsic width, use Tags
- **Numeric columns** (Maintainers): Intrinsic width, right-aligned
- **Meta columns** (Last Activity): Intrinsic width, dates/times

### Key Differences from Groups

| Aspect | Table Page (Canonical) | Groups (Segmented) |
|--------|------------------------|-------------------|
| Tables per page | One | Multiple |
| Section titles | None | Yes (My Groups, Other Groups) |
| Page title | == Table title | != Section titles |
| Pattern usage | Most pages | Groups only |

### Architecture Notes

This composition is considered **stable and normative**.

If something feels off visually:
1. Identify which component owns the issue
2. Fix in component contracts or tokens
3. Do NOT patch in this composition

### Validation Points

✓ Page reads as a single, focused workflow  
✓ Table feels dense but readable  
✓ Column widths match semantic intent  
✓ Filters feel attached, not floating  
✓ No section titles clutter the page  
✓ Scanability is optimal

---

## TablePage × DataTable Relationship

**TablePage uses DataTable by default** for single-table workflows.

### Default Behavior (useDataTable = true)

TablePage renders DataTable internally, which bundles:
- TableToolbar (search + filters)
- TableGrid (data grid)
- TablePagination (page navigation)

This is the preferred approach for:
- One dataset
- One toolbar
- One pagination row
- Standard list workflows (Votes, Surveys, Projects, Drive, Mailing Lists)

**Mental model:** "I want the standard LFX One table workflow with minimal configuration."

### Manual Composition (useDataTable = false)

TablePage can opt out of DataTable for advanced layouts by setting \`useDataTable: false\`.

In this mode, TablePage manually composes:
- Card → TableToolbar → TableGrid → TablePagination

Use manual composition for:
- Multiple tables on one page
- SegmentedTablePage
- Partial filter scoping
- Custom layout requirements

**Mental model:** "I need full control over component placement."

### Decision Table

| Situation | Configuration |
|---------|-----|
| One dataset, standard workflow | \`useDataTable: true\` (default) |
| Multiple tables | \`useDataTable: false\` |
| SegmentedTablePage | \`useDataTable: false\` |
| Partial filter scoping | \`useDataTable: false\` |
| Custom composition | \`useDataTable: false\` |

### Important Notes

- DataTable is OPTIONAL inside TablePage, but used by default
- Setting \`useDataTable: false\` does NOT change visual output
- Both modes produce identical page layouts
- The choice affects composition strategy, not appearance

---

## Choosing Between TablePage and DataTable

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

### Final Rule

> Page Examples MUST NOT invent layout.  
They either configure DataTable or configure TablePage.

Anything else is a bug.

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
        `,
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Apply dense spacing to all components',
    },
    showFilters: {
      control: 'boolean',
      description: 'Show search and filter controls',
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination row below table',
    },
  },
  render: (args) => createTablePage(args),
};

export default meta;
type Story = StoryObj<TablePageArgs>;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default Table Page composition.
 * 
 * Canonical representation:
 * - Page title == Table title
 * - No section titles
 * - No filters (clean baseline)
 * - Semantic column widths
 * - Compact, scannable density
 */
export const Default: Story = {
  args: {
    dense: false,
    showFilters: false,
  },
};

/**
 * Table Page with search + filter controls + pagination.
 * 
 * Demonstrates canonical pattern with all standard elements:
 * - Filters inside Card, above table
 * - SearchInput full-width by default
 * - Pagination below table, aligned with content
 * - Complete workflow page structure
 */
export const WithFilters: Story = {
  args: {
    dense: false,
    showFilters: true,
    showPagination: true,
  },
};

/**
 * Dense variant with compact spacing.
 * 
 * Demonstrates:
 * - Dense mode across all components
 * - Scanability maintained at higher density
 * - Useful for data-heavy views
 * - Headers remain distinguishable
 */
export const Dense: Story = {
  args: {
    dense: true,
    showFilters: true,
  },
};

/**
 * Minimal dataset (3 rows).
 * 
 * Demonstrates:
 * - Clean baseline with minimal content
 * - Table structure clarity
 * - Vertical rhythm at low density
 * - Column semantics visibility
 */
export const Minimal: Story = {
  args: {
    dense: false,
    showFilters: false,
    projectsData: minimalProjectsData,
  },
};

/**
 * DEFAULT MODE: Uses DataTable Internally
 * 
 * Demonstrates TablePage's default behavior:
 * - useDataTable = true (default, not shown)
 * - DataTable bundles TableToolbar + TableGrid + TablePagination automatically
 * - Preferred for single-table workflows
 * - Most common configuration
 * 
 * This is the CANONICAL single-table workflow.
 * Use this mode for:
 * - Votes, Surveys, Projects, Drive, Mailing Lists
 * - Any page with one dataset, one toolbar, one pagination row
 * 
 * DataTable provides:
 * - ✅ Automatic composition of table surface components
 * - ✅ Defensive rendering (empty states handled)
 * - ✅ Convention over configuration
 * - ✅ Reduced boilerplate
 */
export const DefaultWithDataTable: Story = {
  render: () => {
    return createTablePageFromConfig({
      title: 'Projects',
      description: 'Active projects and initiatives across the organization.',
      searchPlaceholder: 'Search projects…',
      filters: [
        { label: 'All Categories' },
        { label: 'All Statuses' },
      ],
      table: createProjectsTable(projectsData, false),
      page: 1,
      pageSize: 10,
      totalItems: projectsData.length,
      pageSizeOptions: [10, 20, 50],
      showFilters: true,
      showPagination: true,
      useDataTable: true, // EXPLICIT: Use DataTable (this is the default)
    });
  },
};

/**
 * ESCAPE HATCH: Manual Composition Without DataTable
 * 
 * Demonstrates TablePage's manual composition mode:
 * - useDataTable = false
 * - Manually composes TableToolbar + TableGrid + TablePagination
 * - Required for advanced layouts
 * 
 * Use this mode ONLY when:
 * - Building segmented table pages (multiple tables)
 * - Custom composition requirements
 * - Advanced layout scenarios
 * 
 * For standard single-table workflows, use DEFAULT MODE instead.
 * 
 * Manual composition provides:
 * - ✅ Full control over component placement
 * - ✅ Support for multiple tables
 * - ✅ Custom layout patterns
 * - ⚠️ More boilerplate required
 * - ⚠️ Must manage defensive rendering manually
 */
export const AdvancedComposition: Story = {
  render: () => {
    return createTablePageFromConfig({
      title: 'Projects',
      description: 'Active projects and initiatives across the organization.',
      searchPlaceholder: 'Search projects…',
      filters: [
        { label: 'All Categories' },
        { label: 'All Statuses' },
      ],
      table: createProjectsTable(projectsData, false),
      page: 1,
      pageSize: 10,
      totalItems: projectsData.length,
      pageSizeOptions: [10, 20, 50],
      showFilters: true,
      showPagination: true,
      useDataTable: false, // EXPLICIT: Manual composition (escape hatch)
    });
  },
};

// =============================================================================
// VALIDATION CHECKLIST
// =============================================================================

/**
 * COMPOSITION VALIDATION:
 * ✓ Page title == Table title (no section titles)
 * ✓ One table per page
 * ✓ Optional filters inside Card, above table
 * ✓ SearchInput uses toolbar variant
 * ✓ Semantic column widths (not equal-width)
 * ✓ No story-only spacing hacks
 * ✓ No inline styles beyond layout containers
 * ✓ Uses existing components and props only
 * 
 * CANONICAL PATTERN VERIFIED:
 * ✓ Represents Votes, Surveys, Projects, Drive, Mailing Lists pattern
 * ✓ Distinct from Groups (segmented) pattern
 * ✓ Clean vertical rhythm
 * ✓ Scan-friendly density
 * ✓ Intentional column width behavior
 * 
 * If this page feels wrong, fix in components or tokens — not here.
 */

// =============================================================================
// EXPORTS: For page examples to use
// =============================================================================

export { createTablePageFromConfig, type TablePageConfig };
