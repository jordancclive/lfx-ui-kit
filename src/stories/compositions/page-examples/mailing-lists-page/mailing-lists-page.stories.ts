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
 * MAILING LISTS PAGE
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
 * - 3 filters (Visibility, Posting, Groups)
 * - Visibility and Posting shown as Tags with semantic variants
 * - Email address displayed for direct reference
 * - Subscriber and email counts as numeric columns
 * - Associated groups shown as secondary text
 * - Sorting: Public lists first, then by subscriber count
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
// DATA: Representative mailing list data
// =============================================================================

interface MailingListRow {
  name: string;
  address: string;
  description: string;
  visibility: 'Public' | 'Private';
  posting: 'Open' | 'Moderated';
  groups: string;
  subscribers: number;
  emailCount: number;
  action: string;
}

const mailingListsDataRaw: MailingListRow[] = [
  {
    name: 'Announcements',
    address: 'announcements@groups.io',
    description: 'Official project announcements and important updates for all community members.',
    visibility: 'Public',
    posting: 'Moderated',
    groups: 'All Members',
    subscribers: 1247,
    emailCount: 89,
    action: 'View',
  },
  {
    name: 'Technical Discussion',
    address: 'technical@groups.io',
    description: 'Technical architecture discussions, design proposals, and implementation questions.',
    visibility: 'Public',
    posting: 'Open',
    groups: 'Technical Committee',
    subscribers: 456,
    emailCount: 1823,
    action: 'View',
  },
  {
    name: 'Board of Directors',
    address: 'board@groups.io',
    description: 'Private board communications, governance decisions, and strategic planning.',
    visibility: 'Private',
    posting: 'Moderated',
    groups: 'Board of Directors',
    subscribers: 8,
    emailCount: 342,
    action: 'View',
  },
  {
    name: 'Security Advisories',
    address: 'security@groups.io',
    description: 'Security vulnerability reports, incident response, and security best practices.',
    visibility: 'Private',
    posting: 'Moderated',
    groups: 'Security Working Group',
    subscribers: 24,
    emailCount: 156,
    action: 'View',
  },
  {
    name: 'Community Events',
    address: 'events@groups.io',
    description: 'Event planning, meetup coordination, and conference announcements.',
    visibility: 'Public',
    posting: 'Open',
    groups: 'Community Advisory Board',
    subscribers: 892,
    emailCount: 234,
    action: 'View',
  },
  {
    name: 'Release Coordination',
    address: 'releases@groups.io',
    description: 'Release planning, testing coordination, and deployment announcements.',
    visibility: 'Public',
    posting: 'Moderated',
    groups: 'Release Management WG',
    subscribers: 167,
    emailCount: 445,
    action: 'View',
  },
  {
    name: 'Documentation Contributors',
    address: 'docs@groups.io',
    description: 'Documentation improvement discussions, writing guidelines, and tutorial feedback.',
    visibility: 'Public',
    posting: 'Open',
    groups: 'Documentation WG',
    subscribers: 203,
    emailCount: 567,
    action: 'View',
  },
  {
    name: 'Cloud Native',
    address: 'cloud-native@groups.io',
    description: 'Cloud infrastructure discussions, Kubernetes topics, and deployment strategies.',
    visibility: 'Public',
    posting: 'Open',
    groups: 'Cloud Native SIG',
    subscribers: 534,
    emailCount: 1289,
    action: 'View',
  },
];

// Sort mailing lists: Public first, then by subscriber count (descending)
const mailingListsData = [...mailingListsDataRaw].sort((a, b) => {
  // First priority: public lists first
  if (a.visibility !== b.visibility) {
    return a.visibility === 'Public' ? -1 : 1;
  }
  // Second priority: most subscribers first
  return b.subscribers - a.subscribers;
});

// =============================================================================
// TABLE CONSTRUCTION
// =============================================================================

/**
 * Column semantics for Mailing Lists table
 * 
 * Columns (semantic types):
 * 1. Name (primary) — flexible, visually dominant
 * 2. Description (secondary) — flexible, provides context
 * 3. Visibility (categorical) — intrinsic, uses Tag with variants
 * 4. Posting (categorical) — intrinsic, uses Tag
 * 5. Groups (secondary) — intrinsic, associated groups
 * 6. Subscribers (numeric) — intrinsic, right-aligned
 * 7. Emails (numeric) — intrinsic, right-aligned
 * 8. Actions (action) — intrinsic, text actions
 */
const columns: ColumnDefinition[] = [
  { key: 'name', semanticType: 'primary' },
  { key: 'description', semanticType: 'secondary' },
  { key: 'visibility', semanticType: 'categorical' },
  { key: 'posting', semanticType: 'categorical' },
  { key: 'groups', semanticType: 'secondary' },
  { key: 'subscribers', semanticType: 'numeric' },
  { key: 'emailCount', semanticType: 'numeric' },
  { key: 'actions', semanticType: 'action' },
];

function createMailingListsTable(lists: MailingListRow[], dense: boolean = false): HTMLElement {
  // Create header
  const headerCells = [
    createTableHeaderCell({ children: 'Name' }),
    createTableHeaderCell({ children: 'Description' }),
    createTableHeaderCell({ children: 'Visibility' }),
    createTableHeaderCell({ children: 'Posting' }),
    createTableHeaderCell({ children: 'Groups' }),
    createTableHeaderCell({ children: 'Subscribers', align: 'right' }),
    createTableHeaderCell({ children: 'Emails', align: 'right' }),
    createTableHeaderCell({ children: '' }), // Actions column (no header label)
  ];

  // Create rows
  const rows = lists.map(list => {
    return createTableRow({
      clickable: true,
      dense,
      children: [
        // Name — primary column
        createTableCell({ 
          children: list.name,
          contentType: 'primary',
        }),
        
        // Description — secondary text
        createTableCell({ 
          children: list.description,
          contentType: 'secondary',
        }),
        
        // Visibility — categorical (Tag with variant)
        createTableCell({ 
          children: createTag({ 
            children: list.visibility,
            variant: list.visibility === 'Public' ? 'success' : 'default',
          }),
          contentType: 'secondary',
        }),
        
        // Posting — categorical (Tag with variant)
        createTableCell({ 
          children: createTag({ 
            children: list.posting,
            variant: list.posting === 'Open' ? 'info' : 'warning',
          }),
          contentType: 'secondary',
        }),
        
        // Groups — secondary text
        createTableCell({ 
          children: list.groups,
          contentType: 'secondary',
        }),
        
        // Subscribers — numeric
        createTableCell({ 
          children: list.subscribers.toLocaleString(),
          contentType: 'numeric',
          align: 'right',
        }),
        
        // Email Count — numeric
        createTableCell({ 
          children: list.emailCount.toLocaleString(),
          contentType: 'numeric',
          align: 'right',
        }),
        
        // Actions — action column (text only, no click ownership)
        createTableCell({ 
          children: list.action,
          contentType: 'secondary',
        }),
      ],
    });
  });

  // Build table
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
// PAGE COMPOSITION
// =============================================================================

interface MailingListsTablePageArgs {
  showFilters?: boolean;
  showPagination?: boolean;
  lists?: MailingListRow[];
}

function createMailingListsTablePage(args: MailingListsTablePageArgs = {}): HTMLElement {
  const {
    showFilters = true,
    showPagination = false,
    lists = mailingListsData,
  } = args;

  // Use demo totalItems > pageSize when pagination should be visible
  // Real pages would use actual dataset count
  const effectiveTotalItems = showPagination ? 50 : lists.length;

  // Mailing Lists is now a pure configuration object
  // All composition and layout owned by Table Page pattern
  return createTablePageFromConfig({
    // Page configuration
    title: 'Mailing Lists',
    description: 'Project discussions and announcements happen here.',
    useDataTable: true,
    
    // Primary action (semantic page intent)
    primaryAction: {
      label: 'Create Mailing List',
    },
    
    // Toolbar configuration
    searchPlaceholder: 'Search mailing lists…',
    filters: [
      { label: 'All Visibility' },
      { label: 'All Posting' },
      { label: 'All Groups' },
    ],
    
    // Table configuration
    table: createMailingListsTable(lists, false),
    
    // Pagination configuration
    page: 1,
    pageSize: 10,
    totalItems: effectiveTotalItems,
    
    // Display options
    showFilters,
    showPagination,
    
    // Navigation (inherited from Table Page pattern)
    navKey: 'mailing-lists',
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<MailingListsTablePageArgs> = {
  title: 'Page Examples / Mailing Lists',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
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

## Structure Diagram

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

## Column Semantics

Column semantics are defined at the TableGrid level and configured by this page example.

| Column | Semantic Type | Purpose |
|--------|---------------|---------|
| Name | primary | Primary identifier, mailing list name |
| Description | secondary | Purpose and context |
| Visibility | categorical | Public/Private access (Tag with variant) |
| Posting | categorical | Open/Moderated permissions (Tag with variant) |
| Groups | secondary | Associated groups |
| Subscribers | numeric | Subscriber count (right-aligned) |
| Emails | numeric | Email count (right-aligned) |
| Actions | action | Entry point |

## What's Different in This Example

- **3 filters** (Visibility, Posting, Groups)
- **Visibility** shown as semantic Tags (success=Public, default=Private)
- **Posting permissions** shown as Tags (info=Open, warning=Moderated)
- **Two numeric columns** (Subscribers and Emails) for activity metrics
- **Groups** as secondary text showing associations
- **Email addresses** embedded in descriptions for reference
- **Sorting:** Public lists first, then by subscriber count

## Non-Ownership Note

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
  render: (args) => createMailingListsTablePage(args),
};

export default meta;
type Story = StoryObj<MailingListsTablePageArgs>;

/**
 * Default Mailing Lists page with search and filters
 */
export const Default: Story = {
  args: {
    showFilters: true,
    showPagination: false,
  },
};

/**
 * Mailing Lists page with pagination enabled
 */
export const WithPagination: Story = {
  args: {
    showFilters: true,
    showPagination: true,
  },
};

/**
 * Minimal Mailing Lists page (no filters or pagination)
 */
export const Minimal: Story = {
  args: {
    showFilters: false,
    showPagination: false,
  },
};
