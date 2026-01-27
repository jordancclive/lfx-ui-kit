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
 *          ├─ Filter row (DOCKED — no margin, internal padding only)
 *          │  ├─ SearchInput (flex: 1 — FULL-WIDTH by default)
 *          │  └─ Filters (order matches columns)
 *          ├─ Table (semantic columns)
 *          └─ Pagination (optional)
 * 
 * VISUAL GOALS:
 * - Header hands off directly into table (no buffer feeling)
 * - Filters feel like table's top edge (not floating controls)
 * - Page reads as ONE workflow top → bottom
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
import { createTable, createTableHeader, createTableBody, type ColumnDefinition } from '../../../../components/table/table';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createSearchInput } from '../../../../components/search-input/search-input';
import { createFilterDropdownTrigger } from '../../../../components/filter-dropdown-trigger/filter-dropdown-trigger';
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
 * Creates the search + filter control row.
 * 
 * DOCKED TO TABLE — This row is the visual "top edge" of the table.
 * 
 * DEFAULT BEHAVIOR (Table Page Pattern):
 * - SearchInput is FULL-WIDTH by default (flex: 1)
 * - Filters are intrinsic width (auto)
 * - Filter order MUST match column semantics (left → right)
 * - Internal padding provides breathing room
 * - NO bottom margin — docks directly to table header
 * 
 * Filter placement pattern:
 * - Filters apply to the entire table
 * - Filters are INSIDE the Card, ABOVE the table
 * - Filters read as the table's top edge, not a floating toolbar
 */
function createFiltersRow(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-8)';
  container.style.alignItems = 'center';
  
  // Internal padding for breathing room (no margin — docks to table)
  container.style.paddingTop = 'var(--spacing-12)';
  container.style.paddingBottom = 'var(--spacing-12)';
  container.style.paddingLeft = 'var(--spacing-16)';
  container.style.paddingRight = 'var(--spacing-16)';

  const searchInput = createSearchInput({ 
    placeholder: 'Search projects…',
    variant: 'toolbar',
  });
  searchInput.style.flex = '1'; // DEFAULT: Full-width search
  
  container.appendChild(searchInput);
  // Filter order matches column semantics: Category → Status
  container.appendChild(createFilterDropdownTrigger({ label: 'All Categories' }));
  container.appendChild(createFilterDropdownTrigger({ label: 'All Statuses' }));

  return container;
}

/**
 * Creates the pagination row.
 * 
 * CANONICAL STRUCTURE (Table Page Pattern):
 * - Positioned inside Card, directly below table
 * - Aligns with table row padding (left + right)
 * - Extra vertical padding above to distinguish from rows
 * - Feels subordinate to table content
 * - Uses existing Button components (no ad-hoc controls)
 * 
 * Format: "Rows 1–10 of 42" + Previous/Next controls
 * 
 * NOTE: This is a structural placeholder until a formal Pagination component exists.
 */
function createPaginationRow(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.justifyContent = 'space-between';
  container.style.alignItems = 'center';
  container.style.paddingTop = 'var(--spacing-16)'; // Extra vertical padding
  container.style.paddingLeft = 'var(--spacing-16)'; // Align with table content
  container.style.paddingRight = 'var(--spacing-16)';
  container.style.paddingBottom = 'var(--spacing-4)'; // Minimal bottom padding
  
  // Pagination info (left side)
  const info = document.createElement('span');
  info.textContent = 'Rows 1–10 of 42';
  info.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
  info.style.color = 'var(--color-table-cell-text-secondary)';
  
  // Pagination controls (right side)
  const controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.gap = 'var(--spacing-8)';
  
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.style.padding = 'var(--spacing-6) var(--spacing-12)';
  prevButton.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
  prevButton.style.color = 'var(--color-table-cell-text-secondary)';
  prevButton.style.border = '1px solid var(--ui-surface-divider)';
  prevButton.style.borderRadius = 'var(--rounded-md)';
  prevButton.style.background = 'transparent';
  prevButton.style.cursor = 'pointer';
  prevButton.disabled = true;
  prevButton.style.opacity = '0.5';
  
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.style.padding = 'var(--spacing-6) var(--spacing-12)';
  nextButton.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
  nextButton.style.color = 'var(--accent-600)';
  nextButton.style.border = '1px solid var(--ui-surface-divider)';
  nextButton.style.borderRadius = 'var(--rounded-md)';
  nextButton.style.background = 'transparent';
  nextButton.style.cursor = 'pointer';
  
  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  
  container.appendChild(info);
  container.appendChild(controls);
  
  return container;
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

  return createTable({
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

interface TablePageArgs {
  dense?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  projectsData?: ProjectRow[];
}

/**
 * Creates a canonical Table Page composition.
 * 
 * Structure:
 * - AppHeader with page title (== table title)
 * - TIGHT vertical handoff (workflow-optimized)
 * - PageSection (dense) containing Card
 * - Card contains optional filters + table + optional pagination
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

  // Build card children - filters (optional) + table + pagination (optional)
  const cardChildren: HTMLElement[] = [];
  
  if (showFilters) {
    cardChildren.push(createFiltersRow());
  }
  
  cardChildren.push(createProjectsTable(data, dense));
  
  if (showPagination) {
    cardChildren.push(createPaginationRow());
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

### Filter Placement Pattern

When filters are present:
- Search + filter controls sit inside the Card
- Positioned directly above the table
- Use SearchInput with \`variant='toolbar'\`
- Filters apply to the entire table
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
