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
 * GROUPS PAGE
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
 * - 3 filters (Type, Voting Status, All)
 * - Group Name styled as link (blue color) to signal primary entry point
 * - Type displayed as Tags for visual categorization
 * - Voting status shown as boolean tags (Voting/Non-voting)
 * - Member count right-aligned (numeric data)
 * - Last Updated date for recency tracking
 * - Description provides context for each group
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
import { createButton } from '../../../../components/button/button';

// =============================================================================
// DATA: Representative group data
// =============================================================================

interface GroupRow {
  name: string;
  type: 'Working Group' | 'Special Interest Group' | 'Board of Directors' | 'Technical Committee' | 'Advisory Board';
  description: string;
  members: number;
  voting: boolean;
  lastUpdated: string;
  action: string;
}

const groupsDataRaw: GroupRow[] = [
  {
    name: 'Technical Steering Committee',
    type: 'Technical Committee',
    description: 'Oversees technical direction and architecture decisions for the project.',
    members: 12,
    voting: true,
    lastUpdated: 'Jan 15, 2026',
    action: 'View',
  },
  {
    name: 'Board of Directors',
    type: 'Board of Directors',
    description: 'Provides strategic oversight and governance for the organization.',
    members: 8,
    voting: true,
    lastUpdated: 'Jan 20, 2026',
    action: 'View',
  },
  {
    name: 'Security Working Group',
    type: 'Working Group',
    description: 'Focuses on security best practices, vulnerability management, and incident response.',
    members: 15,
    voting: false,
    lastUpdated: 'Jan 18, 2026',
    action: 'View',
  },
  {
    name: 'Cloud Native SIG',
    type: 'Special Interest Group',
    description: 'Explores cloud-native technologies and deployment strategies.',
    members: 24,
    voting: false,
    lastUpdated: 'Jan 22, 2026',
    action: 'View',
  },
  {
    name: 'Documentation Working Group',
    type: 'Working Group',
    description: 'Maintains and improves project documentation, tutorials, and guides.',
    members: 10,
    voting: false,
    lastUpdated: 'Jan 14, 2026',
    action: 'View',
  },
  {
    name: 'AI/ML Special Interest Group',
    type: 'Special Interest Group',
    description: 'Investigates applications of artificial intelligence and machine learning.',
    members: 18,
    voting: false,
    lastUpdated: 'Jan 19, 2026',
    action: 'View',
  },
  {
    name: 'Community Advisory Board',
    type: 'Advisory Board',
    description: 'Represents community interests and provides guidance on community initiatives.',
    members: 7,
    voting: true,
    lastUpdated: 'Jan 16, 2026',
    action: 'View',
  },
  {
    name: 'Release Management Working Group',
    type: 'Working Group',
    description: 'Manages release planning, testing, and deployment processes.',
    members: 9,
    voting: false,
    lastUpdated: 'Jan 21, 2026',
    action: 'View',
  },
];

// Sort groups: Voting groups first, then by most recently updated
const groupsData = [...groupsDataRaw].sort((a, b) => {
  // First priority: voting status (voting groups first)
  if (a.voting !== b.voting) {
    return a.voting ? -1 : 1;
  }
  // Second priority: most recent first
  return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
});

// =============================================================================
// TABLE CONSTRUCTION
// =============================================================================

/**
 * Column semantics for Groups table
 * 
 * | Column | Width | Alignment | Type | Purpose |
 * |--------|-------|-----------|------|---------|
 * | Name | flex (2x) | left | text (link) | Primary identifier |
 * | Type | intrinsic | left | categorical (tag) | Group classification |
 * | Description | flex (3x) | left | text | Context and purpose |
 * | Members | intrinsic | right | numeric | Member count |
 * | Voting | intrinsic | center | boolean (tag) | Voting capability |
 * | Last Updated | intrinsic | left | date | Recency signal |
 * | Actions | intrinsic | right | action | Entry point |
 */
const columns: ColumnDefinition[] = [
  { 
    key: 'name', 
    label: 'Group Name', 
    width: 'flex',
    align: 'left',
  },
  { 
    key: 'type', 
    label: 'Type', 
    width: 'intrinsic',
    align: 'left',
  },
  { 
    key: 'description', 
    label: 'Description', 
    width: 'flex',
    align: 'left',
  },
  { 
    key: 'members', 
    label: 'Members', 
    width: 'intrinsic',
    align: 'right',
  },
  { 
    key: 'voting', 
    label: 'Voting', 
    width: 'intrinsic',
    align: 'center',
  },
  { 
    key: 'lastUpdated', 
    label: 'Last Updated', 
    width: 'intrinsic',
    align: 'left',
  },
  { 
    key: 'action', 
    label: '', 
    width: 'intrinsic',
    align: 'right',
  },
];

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createGroupsTable(groups: GroupRow[], dense: boolean = false): HTMLElement {
  // Create header
  const headerCells = columns.map(col => 
    createTableHeaderCell({ 
      children: createTextNode(col.label),
      align: col.align,
    })
  );

  // Create rows
  const rows = groups.map(group => {
    // Name cell (styled as link)
    const nameCell = createTableCell({
      children: createTextNode(group.name),
      align: 'left',
    });
    nameCell.style.color = 'var(--interactive-primary-text)';
    nameCell.style.fontWeight = 'var(--font-medium)';

    // Type cell (tag)
    const typeTag = createTag({ 
      label: group.type,
      variant: 'default',
    });
    const typeCell = createTableCell({
      children: typeTag,
      align: 'left',
    });

    // Description cell
    const descriptionCell = createTableCell({
      children: createTextNode(group.description),
      align: 'left',
    });
    descriptionCell.style.color = 'var(--text-secondary)';

    // Members cell (numeric)
    const membersCell = createTableCell({
      children: createTextNode(group.members.toString()),
      align: 'right',
    });

    // Voting cell (boolean tag)
    const votingTag = createTag({
      label: group.voting ? 'Voting' : 'Non-voting',
      variant: group.voting ? 'success' : 'default',
    });
    const votingCell = createTableCell({
      children: votingTag,
      align: 'center',
    });

    // Last Updated cell
    const lastUpdatedCell = createTableCell({
      children: createTextNode(group.lastUpdated),
      align: 'left',
    });

    // Action cell
    const actionButton = createButton({
      label: group.action,
      variant: 'primary',
    });
    const actionCell = createTableCell({
      children: actionButton,
      align: 'right',
    });

    return createTableRow({
      children: [
        nameCell,
        typeCell,
        descriptionCell,
        membersCell,
        votingCell,
        lastUpdatedCell,
        actionCell,
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

interface GroupsTablePageArgs {
  showFilters?: boolean;
  showPagination?: boolean;
  groups?: GroupRow[];
}

function createGroupsTablePage(args: GroupsTablePageArgs = {}): HTMLElement {
  const {
    showFilters = true,
    showPagination = false,
    groups = groupsData,
  } = args;

  // Use demo totalItems > pageSize when pagination should be visible
  // Real pages would use actual dataset count
  const effectiveTotalItems = showPagination ? 75 : groups.length;

  // Groups is now a pure configuration object
  // All composition and layout owned by Table Page pattern
  return createTablePageFromConfig({
    // Page configuration
    title: 'Groups',
    description: 'Organize people and governance for your project.',
    useDataTable: true,
    
    // Primary action (semantic page intent)
    primaryAction: {
      label: 'Create Group',
    },
    
    // Toolbar configuration
    searchPlaceholder: 'Search groups…',
    filters: [
      { label: 'All Types' },
      { label: 'All Statuses' },
    ],
    
    // Table configuration
    table: createGroupsTable(groups, false),
    
    // Pagination configuration
    page: 1,
    pageSize: 10,
    totalItems: effectiveTotalItems,
    
    // Display options
    showFilters,
    showPagination,
    
    // Navigation (inherited from Table Page pattern)
    navKey: 'groups',
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<GroupsTablePageArgs> = {
  title: '3. Page Examples / 2. Groups',
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

| Column | Width | Alignment | Type | Purpose |
|--------|-------|-----------|------|---------|
| Group Name | flex (2x) | left | text (link) | Primary identifier |
| Type | intrinsic | left | categorical (tag) | Group classification |
| Description | flex (3x) | left | text | Context and purpose |
| Members | intrinsic | right | numeric | Member count |
| Voting | intrinsic | center | boolean (tag) | Voting capability |
| Last Updated | intrinsic | left | date | Recency signal |
| Actions | intrinsic | right | action | Entry point |

## What's Different in This Example

- **3 filters** (Type, Voting Status, All)
- **Group Name** styled as link to signal primary entry point
- **Type** displayed as Tags for visual categorization
- **Voting status** shown as boolean tags (Voting/Non-voting)
- **Member count** right-aligned (numeric data)
- **Last Updated** date for recency tracking
- **Description** provides context for each group

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
  render: (args) => createGroupsTablePage(args),
};

export default meta;
type Story = StoryObj<GroupsTablePageArgs>;

/**
 * Default Groups page with search and filters
 */
export const Default: Story = {
  args: {
    showFilters: true,
    showPagination: false,
  },
};

/**
 * Groups page with pagination enabled
 */
export const WithPagination: Story = {
  args: {
    showFilters: true,
    showPagination: true,
  },
};

/**
 * Minimal Groups page (no filters or pagination)
 */
export const Minimal: Story = {
  args: {
    showFilters: false,
    showPagination: false,
  },
};
