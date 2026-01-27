/**
 * PAGE EXAMPLE — NOT A PATTERN
 * 
 * This file is a concrete product page.
 * It demonstrates usage of a page pattern, but does NOT define one.
 * 
 * Pattern used: Table Page
 * 
 * Agents must NOT treat this file as reusable structure.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * VOTES PAGE
 * 
 * Concrete instance of the canonical Table Page pattern using DataTable.
 * 
 * This page demonstrates a configuration-only usage of the standard
 * single-table workflow surface. All layout, spacing, and interaction
 * behavior are inherited from the Table Page pattern and DataTable component.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * CANONICAL STRUCTURE
 * 
 * This page uses the standard Table Page + DataTable workflow:
 * 
 * AppShell
 * └─ PageLayout
 *    ├─ AppHeader (page-level actions)
 *    └─ PageSection (dense)
 *       └─ DataTable
 *          ├─ TableToolbar
 *          ├─ TableGrid
 *          └─ TablePagination
 * 
 * - Exactly ONE DataTable per page
 * - DataTable bundles:
 *   - TableToolbar (search + filters)
 *   - TableGrid (rows + columns only)
 *   - TablePagination (page navigation)
 * - Page-level actions live in AppHeader
 * - Page examples provide configuration only (labels, filters, data)
 * 
 * For full architectural rules, see:
 * - Table Page documentation
 * - DataTable documentation
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * WHAT'S DIFFERENT IN THIS EXAMPLE
 * 
 * - 2 filters instead of 3
 * - Action column uses Review / View semantics
 * - Sorting prioritizes Open → Pending → Closed
 * - Status Tags use semantic variants (success=Open, warning=Pending, default=Closed)
 * - Vote Name styled as link (blue color) to signal primary entry point
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * COLUMN SEMANTICS
 * 
 * Column semantics are defined at the TableGrid level and configured
 * by this page example.
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createTableGrid, createTableHeader, createTableBody, type ColumnDefinition } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createTablePageFromConfig } from '../../page-patterns/table-page/table-page.stories';
import { createTag } from '../../../../components/tag/tag';

// =============================================================================
// DATA: Representative vote data
// =============================================================================

interface VoteRow {
  name: string;
  group: string;
  status: 'Open' | 'Closed' | 'Pending Review';
  responses: number;
  dueDate: string;
  action: string;
}

const votesDataRaw: VoteRow[] = [
  {
    name: 'Budget Allocation Q1 2026',
    group: 'Board of Directors',
    status: 'Open',
    responses: 5,
    dueDate: 'Jan 31, 2026',
    action: 'Review',
  },
  {
    name: 'Approval of Technical Charter Update',
    group: 'Technical Steering Committee',
    status: 'Open',
    responses: 8,
    dueDate: 'Feb 2, 2026',
    action: 'Review',
  },
  {
    name: 'New Project Proposal: Edge Computing',
    group: 'Technical Oversight Committee',
    status: 'Pending Review',
    responses: 3,
    dueDate: 'Feb 5, 2026',
    action: 'View',
  },
  {
    name: 'Security Policy Update',
    group: 'Security Working Group',
    status: 'Open',
    responses: 12,
    dueDate: 'Jan 28, 2026',
    action: 'Review',
  },
  {
    name: 'Annual Report Approval',
    group: 'Board of Directors',
    status: 'Closed',
    responses: 8,
    dueDate: 'Jan 15, 2026',
    action: 'View',
  },
  {
    name: 'Community Guidelines Revision',
    group: 'Technical Advisory Group',
    status: 'Open',
    responses: 6,
    dueDate: 'Feb 10, 2026',
    action: 'Review',
  },
  {
    name: 'Infrastructure Budget Approval',
    group: 'Technical Steering Committee',
    status: 'Closed',
    responses: 11,
    dueDate: 'Jan 20, 2026',
    action: 'View',
  },
  {
    name: 'Marketing Campaign Authorization',
    group: 'Board of Directors',
    status: 'Pending Review',
    responses: 2,
    dueDate: 'Feb 8, 2026',
    action: 'View',
  },
];

// =============================================================================
// DEFAULT SORTING (VOTES-SPECIFIC BEHAVIOR)
// =============================================================================

/**
 * Sorts votes by status priority, then by due date.
 * 
 * VOTES-SPECIFIC SORTING LOGIC:
 * This sorting logic is specific to the Votes product page and reflects
 * real-world priority rules for voting workflows.
 * 
 * Sorting rules:
 * 1. Status order (highest to lowest priority):
 *    - Open (requires immediate attention)
 *    - Pending Review (awaiting action)
 *    - Closed (archived)
 * 
 * 2. Within each status group:
 *    - Sort by Due Date (ascending - soonest first)
 * 
 * This is example-specific logic and should NOT be extracted to shared utilities
 * unless other pages require identical behavior.
 */
function sortVotesByPriority(votes: VoteRow[]): VoteRow[] {
  const statusOrder: Record<VoteRow['status'], number> = {
    'Open': 1,
    'Pending Review': 2,
    'Closed': 3,
  };

  return [...votes].sort((a, b) => {
    // First: Sort by status priority
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;

    // Second: Sort by due date (ascending)
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return dateA - dateB;
  });
}

// Apply default sorting to votes data
const votesData: VoteRow[] = sortVotesByPriority(votesDataRaw);

const minimalVotesData: VoteRow[] = votesData.slice(0, 3);

// =============================================================================
// HELPER: Text Node
// =============================================================================

function createTextNode(text: string): Text {
  return document.createTextNode(text);
}

// =============================================================================
// HELPER: Link-Styled Vote Name (Votes-Specific)
// =============================================================================

/**
 * Creates a link-styled Vote Name element.
 * 
 * VOTES-SPECIFIC AFFORDANCE:
 * Vote Name is the primary entry point to each vote. It must:
 * - Use brand blue (accent-600) to signal interactivity
 * - Look like a link at rest (no hover changes needed)
 * - NOT change font size or weight (stable typography)
 * - NOT shift layout on hover
 * 
 * Row-level hover (background + left-edge indicator) carries the
 * interaction signal. Vote Name color simply reinforces the entry point.
 */
function createVoteNameLink(name: string): HTMLElement {
  const link = document.createElement('span');
  link.textContent = name;
  link.style.color = 'var(--accent-600)'; // Brand blue for link affordance
  link.style.textDecoration = 'none'; // No underline (row hover is enough)
  return link;
}


// =============================================================================
// HELPER: Votes Table with semantic columns
// =============================================================================

/**
 * Creates the Votes table with semantic column definitions.
 * 
 * Columns (semantic types):
 * 1. Vote Name (primary) — flexible, visually dominant
 * 2. Group (categorical) — intrinsic, uses Tag
 * 3. Status (categorical) — intrinsic, uses Tag with variants
 * 4. Responses (numeric) — intrinsic, right-aligned
 * 5. Due Date (meta) — intrinsic, muted
 * 6. Actions (action) — intrinsic, text actions
 * 
 * Row interaction:
 * - Rows are clickable via TableRow props
 * - Row owns navigation, not columns
 * - Hover affordance appears only when clickable
 */
function createVotesTable(votes: VoteRow[], dense = false): HTMLElement {
  // Semantic column definitions (REQUIRED by Table Page pattern)
  const columns: ColumnDefinition[] = [
    { key: 'name', semanticType: 'primary' },
    { key: 'group', semanticType: 'categorical' },
    { key: 'status', semanticType: 'categorical' },
    { key: 'responses', semanticType: 'numeric' },
    { key: 'dueDate', semanticType: 'meta' },
    { key: 'actions', semanticType: 'action' },
  ];

  // Header row
  const headerCells = [
    createTableHeaderCell({ children: 'Vote Name' }),
    createTableHeaderCell({ children: 'Group' }),
    createTableHeaderCell({ children: 'Status' }),
    createTableHeaderCell({ children: 'Responses', align: 'right' }),
    createTableHeaderCell({ children: 'Due Date' }),
    createTableHeaderCell({ children: '' }), // Actions column (no header label)
  ];

  // Data rows
  const rows = votes.map(vote => {
    // Status variant mapping
    let statusVariant: 'success' | 'warning' | 'default' = 'default';
    if (vote.status === 'Open') statusVariant = 'success';
    else if (vote.status === 'Pending Review') statusVariant = 'warning';
    else if (vote.status === 'Closed') statusVariant = 'default';

    return createTableRow({
      clickable: true, // Row-level navigation
      dense,
      children: [
        // Vote Name — primary column (link-styled for visual dominance)
        createTableCell({ 
          children: createVoteNameLink(vote.name), 
          contentType: 'primary',
        }),
        
        // Group — categorical (Tag)
        createTableCell({ 
          children: createTag({ children: vote.group }), 
          contentType: 'secondary',
        }),
        
        // Status — categorical (Tag with variant)
        createTableCell({ 
          children: createTag({ 
            children: vote.status, 
            variant: statusVariant,
          }), 
          contentType: 'secondary',
        }),
        
        // Responses — numeric
        createTableCell({ 
          children: vote.responses.toString(), 
          contentType: 'numeric', 
          align: 'right',
        }),
        
        // Due Date — meta
        createTableCell({ 
          children: vote.dueDate, 
          contentType: 'secondary',
        }),
        
        // Actions — action column (text only, no click ownership)
        createTableCell({ 
          children: vote.action, 
          contentType: 'secondary',
        }),
      ],
    });
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

// =============================================================================
// MAIN COMPOSITION FUNCTION
// Creates Votes Table Page (instance of canonical Table Page pattern)
// =============================================================================

interface VotesTablePageArgs {
  showFilters?: boolean;
  showPagination?: boolean;
  votes?: VoteRow[];
}

function createVotesTablePage(args: VotesTablePageArgs = {}): HTMLElement {
  const {
    showFilters = true,
    showPagination = false,
    votes = votesData,
  } = args;

  // Use demo totalItems > pageSize when pagination should be visible
  // Real pages would use actual dataset count
  const effectiveTotalItems = showPagination ? 42 : votes.length;

  // Votes is now a pure configuration object
  // All composition and layout owned by Table Page pattern
  return createTablePageFromConfig({
    // Page configuration
    title: 'Votes',
    description: 'Make decisions with your project groups.',
    useDataTable: true,
    
    // Primary action (semantic page intent)
    primaryAction: {
      label: 'Create Vote',
    },
    
    // Toolbar configuration
    searchPlaceholder: 'Search votes…',
    filters: [
      { label: 'All Groups' },
      { label: 'All Statuses' },
    ],
    
    // Table configuration
    table: createVotesTable(votes, false),
    
    // Pagination configuration
    page: 1,
    pageSize: 10,
    totalItems: effectiveTotalItems,
    
    // Display options
    showFilters,
    showPagination,
    
    // Navigation (inherited from Table Page pattern)
    navKey: 'votes',
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<VotesTablePageArgs> = {
  title: '3. Page Examples / 1. Table Pages / 2. Votes',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Votes Table Page Composition

**Concrete instance of the canonical Table Page pattern using DataTable.**

This page demonstrates a configuration-only usage of the standard
single-table workflow surface. All layout, spacing, and interaction
behavior are inherited from the Table Page pattern and DataTable component.

## Canonical Structure

This page uses the standard **Table Page + DataTable** workflow:

- Exactly ONE DataTable per page
- DataTable bundles:
  - TableToolbar (search + filters)
  - TableGrid (rows + columns only)
  - TablePagination (page navigation)
- Page-level actions live in AppHeader
- Page examples provide configuration only (labels, filters, data)

For full architectural rules, see:
- Table Page documentation
- DataTable documentation

### Structure Diagram

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader (page-level actions)
   └─ PageSection (dense)
      └─ DataTable
         ├─ TableToolbar
         ├─ TableGrid
         └─ TablePagination
\`\`\`

## What's Different in This Example

- 2 filters instead of 3
- Action column uses Review / View semantics
- Sorting prioritizes Open → Pending → Closed
- Status Tags use semantic variants (success=Open, warning=Pending, default=Closed)
- Vote Name styled as link (blue color) to signal primary entry point

## Column Semantics

Column semantics are defined at the TableGrid level and configured
by this page example.

| Column | Semantic Type | Characteristics |
|--------|---------------|-----------------|
| Vote Name | primary | Flexible width, visually dominant |
| Group | categorical | Intrinsic width, uses Tag |
| Status | categorical | Intrinsic width, uses Tag with variants |
| Responses | numeric | Intrinsic width, right-aligned |
| Due Date | meta | Intrinsic width, muted text |
| Actions | action | Intrinsic width, text actions |

---

> This page example does NOT own layout, spacing, or interaction behavior.
> If something feels visually incorrect, it must be fixed in:
> - DataTable
> - TableToolbar
> - TableGrid
> - TablePagination
> or the Table Page pattern — not here.
        `,
      },
    },
  },
  argTypes: {
    showFilters: {
      control: 'boolean',
      description: 'Show search and filter controls',
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination controls',
    },
  },
  render: (args) => createVotesTablePage(args),
};

export default meta;
type Story = StoryObj<VotesTablePageArgs>;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default Votes Table Page composition.
 * 
 * Demonstrates typical table page layout:
 * - Filters enabled (search + filter dropdowns)
 * - Pagination disabled (typical small dataset)
 * - Rows clickable (hover affordance enabled)
 */
export const Default: Story = {
  args: {
    showFilters: true,
    showPagination: false,
  },
};

/**
 * Votes Table Page with pagination.
 * 
 * Demonstrates:
 * - Pagination row below table
 * - Pagination inside Card (canonical placement)
 * - Filters enabled
 */
export const WithPagination: Story = {
  args: {
    showFilters: true,
    showPagination: true,
  },
};

/**
 * Minimal Votes Table Page.
 * 
 * Demonstrates:
 * - Minimum viable content (3 rows)
 * - Filters disabled
 * - Pagination disabled
 * - Clean baseline composition
 */
export const Minimal: Story = {
  args: {
    showFilters: false,
    showPagination: false,
    votes: minimalVotesData,
  },
};

// =============================================================================
// VERIFICATION COMMENT
// =============================================================================

/**
 * PATTERN COMPLIANCE:
 * ✓ Follows docs/page-patterns/table-page.md exactly
 * ✓ Exactly ONE table
 * ✓ NO section titles
 * ✓ Page title == Table title ("Votes")
 * ✓ Filters INSIDE Card, above table
 * ✓ Pagination INSIDE Card, below table
 * ✓ Semantic column definitions (ColumnDefinition[])
 * ✓ Row-level navigation (clickable rows)
 * ✓ No additional wrappers
 * ✓ No inline spacing hacks
 * 
 * COMPONENT USAGE:
 * ✓ No components modified
 * ✓ No tokens modified
 * ✓ No new abstractions introduced
 * ✓ Uses existing Button for primary action
 * ✓ Uses existing Tag with variants for status
 * ✓ Uses existing SearchInput (toolbar variant)
 * ✓ Uses existing FilterDropdownTrigger
 * 
 * FOLLOW-UP NOTES:
 * - If hover affordance feels too subtle, document as component/token issue
 * - Pagination placeholder is story-only; proper Pagination component needed
 * - Action column interaction is intentionally text-only (no click ownership)
 */
