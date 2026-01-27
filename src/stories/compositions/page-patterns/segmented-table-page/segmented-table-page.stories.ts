/**
 * PAGE PATTERN — NORMATIVE
 * 
 * This file defines a reusable page-level pattern.
 * It is a structural blueprint, not a product page.
 * 
 * Agents may copy this pattern when creating new pages.
 * 
 * Rules are locked by docs/page-patterns/segmented-table-page.md
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * SEGMENTED TABLE PAGE PATTERN
 * 
 * A specialized page pattern for displaying multiple related datasets
 * simultaneously, each in its own table block.
 * 
 * This pattern demonstrates the structure using Groups (My Groups, Other Groups)
 * as example data. Groups is a concrete instance of this pattern, not the
 * pattern itself.
 * 
 * PATTERN DEFINITION:
 * A segmented table page is composed of multiple independent table blocks.
 * Each table block can independently declare:
 * - Section title (required)
 * - Filter row (optional)
 * - TableGrid (required)
 * - Pagination row (optional)
 * 
 * No assumptions are made about which tables are filterable or paginated.
 * Each table block is self-contained and explicit.
 * 
 * CANONICAL STRUCTURE:
 * 
 * AppHeader (page title)
 * └─ PageSection (dense: true)
 *    ├─ Table Block 1 (e.g. "My Groups")
 *    │  ├─ Section Title
 *    │  ├─ Card
 *    │  │  ├─ (optional) Filter Row
 *    │  │  ├─ TableGrid
 *    │  │  └─ (optional) Pagination Row
 *    └─ Table Block 2 (e.g. "Other Groups")
 *       ├─ Section Title
 *       └─ Card
 *          ├─ (optional) Filter Row
 *          ├─ TableGrid
 *          └─ (optional) Pagination Row
 * 
 * KEY DIFFERENCES FROM TABLE PAGE PATTERN:
 * - Multiple tables (segmented by section)
 * - Section titles present (required per table block)
 * - Page title != Section titles
 * - Each table block is independent
 * 
 * ⚠️ TERMINOLOGY NOTE:
 * - "Table" is deprecated terminology
 * - Use "TableGrid" when referring to the data grid component
 * - Use "DataTable" when referring to the full single-table workflow
 * 
 * EXAMPLE USAGE:
 * - Groups page (My Groups, Other Groups)
 * - Future: Projects page (My Projects, All Projects)
 * - Future: Any page with multiple related table views
 * 
 * PATTERN RULES:
 * - No styling overrides allowed
 * - No new tokens or props may be introduced
 * - If something looks wrong, fix in:
 *   - tokens
 *   - component contracts
 *   - or missing pattern components
 * - Never in this pattern
 * 
 * WHAT THIS VALIDATES:
 * - Multiple independent table blocks compose cleanly
 * - Filters + tables compose per block
 * - Pagination can be added per block
 * - Card surfaces behave consistently
 * - PageSection spacing scales across variants
 * - Tables support real product density
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createCard } from '../../../../components/card/card';
import { createTableGrid, createTableHeader, createTableBody } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createSearchInput } from '../../../../components/search-input/search-input';
import { createFilterDropdownTrigger } from '../../../../components/filter-dropdown-trigger/filter-dropdown-trigger';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTag } from '../../../../components/tag/tag';

// =============================================================================
// DATA: Static representative data for Groups tables
// =============================================================================

interface GroupRow {
  name: string;
  type: string;
  description: string;
  members: number;
  voting: boolean;
  lastUpdated: string;
}

const myGroupsData: GroupRow[] = [
  {
    name: 'Security Working Group',
    type: 'Working Group',
    description: 'Addresses security vulnerabilities and best practices for project security.',
    members: 8,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Technical Advisory Group',
    type: 'TAG',
    description: 'Provides expert guidance on technical architecture and standards.',
    members: 6,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
];

const otherGroupsData: GroupRow[] = [
  {
    name: 'Board of Directors',
    type: 'Other',
    description: 'Provides strategic oversight and governance for the organization.',
    members: 8,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Cloud Native SIG',
    type: 'Special Interest',
    description: 'Focuses on cloud-native practices and containerization strategies.',
    members: 24,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Technical Oversight Committee',
    type: 'TOC',
    description: 'Oversees technical operations and cross-project coordination.',
    members: 11,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Technical Steering Committee',
    type: 'TSC',
    description: 'Guides technical direction and roadmap decisions.',
    members: 12,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
];

// Long descriptions for testing wrapping
const longDescriptionMyGroups: GroupRow[] = [
  {
    name: 'Security Working Group',
    type: 'Working Group',
    description: 'Addresses security vulnerabilities and best practices for project security. This group meets weekly to review CVEs, coordinate disclosure timelines, and establish security guidelines that all projects must follow. Members include security researchers, maintainers, and industry experts.',
    members: 8,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Technical Advisory Group',
    type: 'TAG',
    description: 'Provides expert guidance on technical architecture and standards. The TAG reviews proposed changes to core infrastructure, evaluates new technology adoption, and publishes recommendations for the broader community. Regular office hours are held for project maintainers.',
    members: 6,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
];

const longDescriptionOtherGroups: GroupRow[] = [
  {
    name: 'Board of Directors',
    type: 'Other',
    description: 'Provides strategic oversight and governance for the organization. The board meets quarterly to review financial reports, approve major initiatives, and ensure alignment with the organization\'s mission. Members are elected by the community for two-year terms.',
    members: 8,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
  {
    name: 'Cloud Native SIG',
    type: 'Special Interest',
    description: 'Focuses on cloud-native practices and containerization strategies. This special interest group explores Kubernetes, service mesh technologies, and cloud provider integrations. Monthly demos showcase new tools and patterns adopted by member projects.',
    members: 24,
    voting: true,
    lastUpdated: 'Mar 14, 2025',
  },
];

// Minimal data (one group each)
const minimalMyGroups: GroupRow[] = [myGroupsData[0]];
const minimalOtherGroups: GroupRow[] = [otherGroupsData[0]];

// =============================================================================
// HELPERS: Component creation functions
// =============================================================================

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createCheckmark(): HTMLElement {
  const span = document.createElement('span');
  span.textContent = '✓';
  span.style.color = 'var(--success-500)';
  return span;
}

/**
 * Creates a Groups table with proper column semantics.
 * 
 * Column semantics (per LFX One design):
 * - Name: Primary text column (flexible width, left aligned)
 * - Type: Categorical column (intrinsic width, uses Tag/Badge)
 * - Description: Primary text column (flexible width, left aligned)
 * - Members: Numeric column (intrinsic width, right aligned)
 * - Voting: Categorical column (intrinsic width, icon/symbol)
 * - Last Updated: Secondary text column (intrinsic width, muted)
 * 
 * Note: Equal-width columns are a CSS Grid default. In production,
 * column widths should be semantic (flexible vs intrinsic) but this
 * requires grid-template-columns tuning at the TableGrid component level.
 */
function createGroupsTable(data: GroupRow[], dense = false): HTMLElement {
  const headerCells = [
    createTableHeaderCell({ children: 'Name' }),
    createTableHeaderCell({ children: 'Type' }),
    createTableHeaderCell({ children: 'Description' }),
    createTableHeaderCell({ children: 'Members', align: 'right' }),
    createTableHeaderCell({ children: 'Voting' }),
    createTableHeaderCell({ children: 'Last Updated' }),
  ];

  const rows = data.map((group) => {
    const cells = [
      // Primary text column - flexible width
      createTableCell({ children: group.name, contentType: 'primary' }),
      
      // Categorical column - intrinsic width, uses Tag component
      createTableCell({ children: createTag({ children: group.type }), contentType: 'secondary' }),
      
      // Primary text column - flexible width
      createTableCell({ children: group.description, contentType: 'secondary' }),
      
      // Numeric column - intrinsic width, right aligned
      createTableCell({ children: String(group.members), contentType: 'numeric', align: 'right' }),
      
      // Categorical column - intrinsic width, icon/symbol
      createTableCell({ children: group.voting ? createCheckmark() : createTextNode('—') }),
      
      // Secondary text column - intrinsic width, muted
      createTableCell({ children: group.lastUpdated, contentType: 'muted' }),
    ];

    return createTableRow({ children: cells, clickable: true });
  });

  return createTableGrid({
    columns: 6,
    dense,
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });
}

/**
 * Creates the search + filter control row.
 * 
 * This row is intentionally compact and left-aligned to read as a single
 * horizontal control unit that feels attached to the table it filters.
 * 
 * Layout:
 * - SearchInput dominates (expands naturally)
 * - FilterDropdownTrigger is secondary (intrinsic width)
 * - Tight gap (spacing-8) creates unified control bar feel
 * 
 * Uses toolbar variant for SearchInput:
 * - Pill shape (fully rounded)
 * - Reduced height for compact toolbar context
 * - Matches LFX One Groups Figma design
 */
function createFiltersRow(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-8)';
  container.style.alignItems = 'center';

  container.appendChild(createSearchInput({ 
    placeholder: 'Search Groups…',
    variant: 'toolbar',
  }));
  container.appendChild(createFilterDropdownTrigger({ label: 'All Types' }));

  return container;
}

function createSectionTitle(text: string): HTMLElement {
  const title = document.createElement('div');
  title.textContent = text;
  title.style.fontFamily = 'var(--ui-text-section-title-font-family)';
  title.style.fontSize = 'var(--ui-text-section-title-font-size)';
  title.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
  title.style.lineHeight = 'var(--ui-text-section-title-line-height)';
  title.style.color = 'var(--text-primary)';
  title.style.marginBottom = 'var(--spacing-12)';
  return title;
}

/**
 * Creates a minimal pagination row placeholder.
 * 
 * PLACEHOLDER ONLY - This is a story-only helper demonstrating where
 * pagination controls would sit. This will be replaced by a proper
 * Pagination component in the future.
 * 
 * No inline spacing hacks. No visual styling beyond basic structure.
 * Sits directly below the table when enabled.
 */
function createPaginationPlaceholder(currentPage = 1, totalItems = 42): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.justifyContent = 'space-between';
  container.style.alignItems = 'center';
  
  // Info text
  const info = document.createElement('span');
  info.textContent = `Rows ${(currentPage - 1) * 10 + 1}–${Math.min(currentPage * 10, totalItems)} of ${totalItems}`;
  info.style.fontFamily = 'var(--ui-text-body-secondary-font-family)';
  info.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
  info.style.color = 'var(--text-secondary)';
  
  // Controls
  const controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.gap = 'var(--spacing-8)';
  
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.style.fontFamily = 'var(--ui-text-control-font-family)';
  prevButton.style.fontSize = 'var(--ui-text-control-font-size)';
  
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPage * 10 >= totalItems;
  nextButton.style.fontFamily = 'var(--ui-text-control-font-family)';
  nextButton.style.fontSize = 'var(--ui-text-control-font-size)';
  
  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  
  container.appendChild(info);
  container.appendChild(controls);
  
  return container;
}

function createDemoNav(activeItemId = 'groups') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'surveys', children: createTextNode('Surveys') }),
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
// Creates a Segmented Table Page using Groups as the example
// =============================================================================

interface SegmentedTablePageArgs {
  dense?: boolean;
  myGroups?: GroupRow[];
  otherGroups?: GroupRow[];
  // Per-table block controls
  myGroupsShowFilters?: boolean;
  myGroupsShowPagination?: boolean;
  otherGroupsShowFilters?: boolean;
  otherGroupsShowPagination?: boolean;
}

function createSegmentedTablePage(args: SegmentedTablePageArgs = {}): HTMLElement {
  const {
    dense = false,
    myGroups = myGroupsData,
    otherGroups = otherGroupsData,
    myGroupsShowFilters = true,
    myGroupsShowPagination = false,
    otherGroupsShowFilters = false,
    otherGroupsShowPagination = false,
  } = args;

  const pageChildren: HTMLElement[] = [
    // AppHeader must be first child
    createAppHeader({
      title: 'Groups',
      description: 'A group is a team of people like committees, boards, or working groups organized to collaborate across your project.',
      dense,
    }),
  ];

  // =========================================================================
  // TABLE BLOCK 1: My Groups
  // 
  // Each table block is self-contained and independently declares:
  // - Section title (required)
  // - Filter row (optional)
  // - TableGrid (required)
  // - Pagination row (optional)
  // 
  // No assumptions about which blocks have filters or pagination.
  // =========================================================================
  
  const myGroupsCardChildren: HTMLElement[] = [];
  
  // Optional: Filter row (sits directly above table)
  if (myGroupsShowFilters) {
    myGroupsCardChildren.push(createFiltersRow());
  }
  
  // Required: Table
  myGroupsCardChildren.push(createGroupsTable(myGroups, dense));
  
  // Optional: Pagination row (sits directly below table)
  if (myGroupsShowPagination) {
    myGroupsCardChildren.push(createPaginationPlaceholder(1, myGroups.length));
  }
  
  // Table Block 1: Section title outside Card
  pageChildren.push(
    createPageSection({
      dense: true,
      children: [
        createSectionTitle('My Groups'),
        createCard({
          dense,
          children: myGroupsCardChildren,
        }),
      ],
    })
  );

  // =========================================================================
  // TABLE BLOCK 2: Other Groups
  // 
  // Independent table block with its own controls.
  // =========================================================================
  
  const otherGroupsCardChildren: HTMLElement[] = [];
  
  // Optional: Filter row
  if (otherGroupsShowFilters) {
    otherGroupsCardChildren.push(createFiltersRow());
  }
  
  // Required: Table
  otherGroupsCardChildren.push(createGroupsTable(otherGroups, dense));
  
  // Optional: Pagination row
  if (otherGroupsShowPagination) {
    otherGroupsCardChildren.push(createPaginationPlaceholder(1, otherGroups.length));
  }
  
  // Table Block 2: Section title outside Card
  pageChildren.push(
    createPageSection({
      dense: true,
      children: [
        createSectionTitle('Other Groups'),
        createCard({
          dense,
          children: otherGroupsCardChildren,
        }),
      ],
    })
  );

  // Build the page content
  const pageContent = createPageLayout({
    dense,
    children: pageChildren,
  });

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

const meta: Meta<SegmentedTablePageArgs> = {
  title: '2. Page Patterns / 2. Segmented Table Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Segmented Table Page Composition

**Pattern with Groups Example**

This composition demonstrates the Segmented Table Page pattern using Groups
(My Groups, Other Groups) as a concrete example.

A segmented table page is composed of multiple independent table blocks.
Each table block can independently declare filters and pagination.

### Pattern Characteristics

- **Multiple tables per page** (My Groups, Other Groups)
- **Section titles** (required per table block)
- **Independent table blocks** (each has its own optional filters/pagination)
- **No position-based assumptions** (any block can have filters/pagination)

### Table Block Structure

Each table block consists of:
1. **Section Title** (required) — sits outside Card
2. **Card** containing:
   - **(Optional)** Filter Row — SearchInput + FilterDropdownTrigger
   - **(Required)** Table — with semantic column widths
   - **(Optional)** Pagination Row — pagination controls placeholder

### Architecture

\`\`\`
AppHeader (title: "Groups")
└─ PageSection (dense: true)
   ├─ Table Block 1 ("My Groups")
   │  ├─ Section Title
   │  └─ Card
   │     ├─ (optional) Filter Row
   │     ├─ Table
   │     └─ (optional) Pagination Row
   └─ Table Block 2 ("Other Groups")
      ├─ Section Title
      └─ Card
         ├─ (optional) Filter Row
         ├─ Table
         └─ (optional) Pagination Row
\`\`\`

### Independent Block Controls

Each table block independently declares:
- \`showFilters\` — whether to render filter row
- \`showPagination\` — whether to render pagination row

No assumptions are made based on:
- Block position (top vs bottom)
- Block name (My Groups vs Other Groups)
- Table content

### Key Differences from Canonical Table Page

| Aspect | Segmented Table Page | Table Page (Canonical) |
|--------|----------------------|------------------------|
| Tables | Multiple | Single |
| Section Titles | Yes (per block) | None |
| Page Title | != Section titles | == Table title |
| Example Usage | Groups, Projects (future) | Most pages |

### What This Validates

- Multiple independent table blocks compose cleanly
- Filters can be added per table block
- Pagination can be added per table block
- Card surfaces behave consistently across blocks
- PageSection spacing scales across variants
- Tables support real product density
- Column semantics work via composition

### Composition Rules

- No styling overrides allowed
- No new tokens or props introduced
- If something looks wrong, fix in:
  - tokens
  - component contracts
  - or missing pattern components
- Never in this story
        `,
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Apply dense spacing to all components',
    },
    myGroupsShowFilters: {
      control: 'boolean',
      description: 'Show filter row for My Groups table block',
    },
    myGroupsShowPagination: {
      control: 'boolean',
      description: 'Show pagination row for My Groups table block',
    },
    otherGroupsShowFilters: {
      control: 'boolean',
      description: 'Show filter row for Other Groups table block',
    },
    otherGroupsShowPagination: {
      control: 'boolean',
      description: 'Show pagination row for Other Groups table block',
    },
  },
  render: (args) => createSegmentedTablePage(args),
};

export default meta;
type Story = StoryObj<SegmentedTablePageArgs>;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default Segmented Table Page composition (Groups example).
 * 
 * Demonstrates typical segmented table page layout:
 * - First table block (My Groups) has filters (typical user workflow)
 * - Second table block (Other Groups) has no filters (browse-only)
 * - No pagination (typical small dataset)
 */
export const Default: Story = {
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
  },
};

/**
 * Dense variant of Segmented Table Page.
 * 
 * Demonstrates:
 * - Dense mode across all components
 * - First table block (My Groups) has filters
 * - Scanability maintained at higher density
 */
export const Dense: Story = {
  args: {
    dense: true,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
  },
};

/**
 * Segmented Table Page without filters.
 * 
 * Demonstrates:
 * - Clean baseline with no filter rows
 * - Both table blocks filter-free
 * - Layout resilience without controls
 */
export const WithoutFilters: Story = {
  args: {
    dense: false,
    myGroupsShowFilters: false,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
  },
};

/**
 * Segmented Table Page with pagination.
 * 
 * Demonstrates:
 * - Pagination row below each table
 * - Independent pagination per table block
 * - Pagination placeholder sits directly below table
 */
export const WithPagination: Story = {
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: true,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: true,
  },
};

/**
 * Segmented Table Page with long descriptions.
 * 
 * Demonstrates:
 * - Increased description text length
 * - Table wrapping behavior
 * - First table block (My Groups) has filters
 */
export const LongDescriptions: Story = {
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
    myGroups: longDescriptionMyGroups,
    otherGroups: longDescriptionOtherGroups,
  },
};

/**
 * Minimal Segmented Table Page.
 * 
 * Demonstrates:
 * - Minimum viable content (one row per table)
 * - First table block (My Groups) has filters
 * - Clean baseline composition
 */
export const Minimal: Story = {
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
    myGroups: minimalMyGroups,
    otherGroups: minimalOtherGroups,
  },
};

// =============================================================================
// VERIFICATION COMMENT
// =============================================================================

/**
 * COMPOSITION VALIDATION:
 * ✓ No component CSS was modified
 * ✓ No tokens were added or changed
 * ✓ No new components introduced (pagination is placeholder only)
 * ✓ Uses existing components and props only
 * ✓ Composition uses only existing components
 * 
 * TABLE BLOCK STRUCTURE:
 * ✓ Each table block is independent and self-contained
 * ✓ Each block independently declares:
 *   - Section title (required)
 *   - Filter row (optional per block)
 *   - TableGrid (required)
 *   - Pagination row (optional per block)
 * ✓ No assumptions based on block position or name
 * ✓ Filters sit directly above table (no wrappers)
 * ✓ Pagination sits directly below table (no wrappers)
 * 
 * COLUMN SEMANTICS VALIDATED:
 * ✓ Primary text columns (Name, Description) use primary/secondary content types
 * ✓ Categorical column (Type) uses Tag component for semantic intent
 * ✓ Numeric column (Members) uses right alignment and numeric content type
 * ✓ Icon/symbol column (Voting) uses visual indicator elements
 * ✓ Metadata column (Last Updated) uses muted content type
 * 
 * FILTER + PAGINATION COMPOSITION:
 * ✓ Filter row: SearchInput (toolbar variant) + FilterDropdownTrigger
 * ✓ Tight horizontal gap (spacing-8) for unified toolbar feel
 * ✓ Pagination placeholder: Minimal structure, no styling
 * ✓ Each table block controls its own filters and pagination
 * ✓ No implied defaults or position-based behavior
 * 
 * PATTERN GENERALIZATION:
 * ✓ Segmented Table Page is now a repeatable pattern
 * ✓ Groups serves as the example/instance of this pattern
 * ✓ Each table block is explicit and obvious
 * ✓ Safe for agentic design environment
 * ✓ No abstractions extracted prematurely
 * 
 * KNOWN LIMITATIONS (future enhancements):
 * - Section titles use inline styles for typography binding
 *   (SectionTitle component may be needed if pattern repeats 3+ times)
 * - Filters row uses inline styles for flex layout
 *   (FilterBar component may be needed if pattern repeats 3+ times)
 * - Pagination uses placeholder elements
 *   (Pagination component needed for production)
 * - Column widths use legacy equal-width (6 columns)
 *   (semantic ColumnDefinition[] available but not yet applied)
 * 
 * FINDINGS:
 * - Search + filters + pagination per table block is validated pattern
 * - Column semantics work correctly via composition and content types
 * - Tag component successfully integrated for categorical data
 * - Table blocks are independent and composable
 * - Pattern is explicit and safe for agents
 * 
 * If this page feels wrong, the fix must occur in tokens or contracts — never here.
 */
