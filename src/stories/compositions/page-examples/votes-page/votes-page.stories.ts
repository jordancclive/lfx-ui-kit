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
 * The Votes product page for LFX One.
 * 
 * This page implements the Table Page pattern defined in
 * docs/page-patterns/table-page.md
 * 
 * Votes is NOT a new pattern — it is a concrete implementation:
 * - Page title == Table title ("Votes")
 * - One table per page
 * - Optional filters inside the Card, above the table
 * - Optional pagination inside the Card, below the table
 * - Semantic column widths (flexible vs intrinsic)
 * - Row-level navigation
 * 
 * VOTES-SPECIFIC BEHAVIOR:
 * - Default sorting: Status (Open → Pending Review → Closed), then Due Date (ascending)
 * - Filters: "All Groups", "All Statuses" (example labels, non-functional)
 * - Status Tags use semantic variants (success=Open, warning=Pending, default=Closed)
 * - Action column shows "Review" or "View" based on status (text only, non-interactive)
 * - Vote Name styled as link (blue color) to signal primary entry point
 * - SearchInput spans full width in filter row (dominates visually)
 * - No dense variant (one confident default presentation)
 * 
 * PAGE STRUCTURE (from Table Page pattern):
 * 
 * AppShell
 * └─ PageLayout
 *    ├─ AppHeader (dense: true for workflow pages)
 *    │  ├─ title: "Votes"
 *    │  ├─ description: "Make decisions with your project groups."
 *    │  └─ actions: "Create Vote" button (primary variant)
 *    └─ PageSection (dense: true)
 *       └─ Card
 *          ├─ Filter Row (optional)
 *          │  ├─ SearchInput (variant="toolbar", full-width)
 *          │  ├─ FilterDropdownTrigger: "All Groups"
 *          │  └─ FilterDropdownTrigger: "All Statuses"
 *          ├─ Table (semantic columns, default rows for comfort)
 *          └─ Pagination Row (optional)
 * 
 * STRUCTURAL RULES (from pattern):
 * - Exactly ONE table
 * - NO section titles
 * - Filters and pagination INSIDE the Card
 * - No additional wrappers
 * 
 * INSTANCE-LEVEL POLISH NOTES:
 * - Default sorting implemented (Votes-specific, not generalized)
 * - Vote Name styled as link (blue, visual dominance)
 * - Row interaction feels confident (clickable rows, strong hover, no typography jitter)
 * - Rows use default (comfortable) height for action-oriented table
 * - Column widths balanced via semantic types
 * - Filter row attached to table (SearchInput full-width)
 * - AppHeader uses dense spacing for workflow pages (tight vertical rhythm)
 * - Primary action (Create Vote) visible and aligned with title
 * - Dense variant removed (one confident default presentation)
 * - Header → table rhythm feels intentional and connected
 * 
 * DEFERRED ISSUES (requiring component/token changes):
 * - None identified at instance level
 * - All visual concerns resolved via existing component contracts
 * 
 * If something feels off visually:
 * - Identify which component owns the issue
 * - Fix in components or tokens, NOT here
 * - Document as follow-up if unclear
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
import { createButton } from '../../../../components/button/button';

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
// HELPER: Filter Row (canonical placement inside Card)
// =============================================================================

/**
 * Creates a filter row for Votes table.
 * 
 * Structure:
 * - SearchInput (toolbar variant, full-width, dominates)
 * - FilterDropdownTrigger: "All Groups" (intrinsic width)
 * - FilterDropdownTrigger: "All Statuses" (intrinsic width)
 * 
 * Placement: Inside the Card, above the table.
 * 
 * This matches the canonical Table Page filter row pattern.
 */
function createFiltersRow(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-8)';
  container.style.alignItems = 'center';

  const searchInput = createSearchInput({ 
    placeholder: 'Search votes…',
    variant: 'toolbar',
  });
  searchInput.style.flex = '1'; // Full-width, dominates the row
  
  container.appendChild(searchInput);
  container.appendChild(createFilterDropdownTrigger({ label: 'All Groups' }));
  container.appendChild(createFilterDropdownTrigger({ label: 'All Statuses' }));

  return container;
}

// =============================================================================
// HELPER: Pagination Placeholder (inside Card, below table)
// =============================================================================

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

  return createTable({
    columns,
    dense,
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });
}

// =============================================================================
// HELPER: Demo Navigation
// =============================================================================

function createDemoNav(activeItemId = 'votes') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'members', children: createTextNode('Members') }),
      ]),
    ],
  });
}

// =============================================================================
// HELPER: Story-only page width wrapper
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

  // Card children: optional filters + table + optional pagination
  const cardChildren: HTMLElement[] = [];

  // Optional: Filter row (inside Card, above table)
  if (showFilters) {
    cardChildren.push(createFiltersRow());
  }

  // Required: Table
  cardChildren.push(createVotesTable(votes, false));

  // Optional: Pagination row (inside Card, below table)
  if (showPagination) {
    cardChildren.push(createPaginationPlaceholder(1, votes.length));
  }

  // Page structure (MUST MATCH Table Page pattern)
  const pageChildren: HTMLElement[] = [
    // AppHeader with primary action (tighter spacing for workflow pages)
    createAppHeader({
      title: 'Votes',
      description: 'Make decisions with your project groups.',
      actions: createButton({
        children: 'Create Vote',
        variant: 'primary',
      }),
      dense: true, // Tighter header spacing for workflow pages
    }),

    // PageSection (dense) → Card → [Filters, Table, Pagination]
    createPageSection({
      dense: true,
      children: createCard({
        children: cardChildren,
      }),
    }),
  ];

  const pageContent = createPageLayout({
    children: pageChildren,
  });

  const appShell = createAppShell({
    nav: createDemoNav(),
    content: pageContent,
  });

  return wrapForStorybook(appShell);
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<VotesTablePageArgs> = {
  title: '3. Page Examples / Votes',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Votes Table Page Composition

**Concrete instance of canonical Table Page pattern**

This composition demonstrates the canonical Table Page pattern (defined in
\`docs/page-patterns/table-page.md\`) using Votes as a concrete example.

### Pattern Characteristics

- **Page title == Table title** — "Votes" (no section titles)
- **One table per page** — Single votes table
- **Filters inside Card** — SearchInput + FilterDropdownTriggers above table
- **Pagination inside Card** — Optional pagination below table
- **Semantic columns** — Primary, categorical, numeric, meta, action
- **Row-level navigation** — Rows are clickable, hover affordance enabled

### Page-Level Action

AppHeader includes a primary action button: "Create Vote"

This is a page-level action, not a table-level action.

### Column Semantics

| Column | Semantic Type | Characteristics |
|--------|---------------|-----------------|
| Vote Name | primary | Flexible width, visually dominant |
| Group | categorical | Intrinsic width, uses Tag |
| Status | categorical | Intrinsic width, uses Tag with variants |
| Responses | numeric | Intrinsic width, right-aligned |
| Due Date | meta | Intrinsic width, muted text |
| Actions | action | Intrinsic width, text actions |

### Row Interaction

- Rows are clickable via \`TableRow\` props
- Row owns navigation (not columns or cells)
- Hover affordance appears only when row is clickable
- Primary column text may be styled visually like a link, but row handles navigation

### Structure (from pattern)

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader (with primary action)
   └─ PageSection (dense: true)
      └─ Card
         ├─ (optional) Filter Row
         ├─ Table
         └─ (optional) Pagination
\`\`\`

### Structural Rules

- ✅ Exactly ONE table
- ✅ NO section titles
- ✅ Filters and pagination INSIDE Card
- ✅ Semantic column definitions (ColumnDefinition[])
- ✅ Row-level navigation

If something feels off visually, fix in components or tokens, not here.
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
