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
 * DRIVE PAGE
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
 * - 2 filters (File Type, Tags)
 * - File Type displayed as Tags
 * - Multiple user-defined tags per file (flexible taxonomy)
 * - Tags can represent meeting series, working groups, or any custom categorization
 * - Last Modified date for recency tracking
 * - Sorting: Most recently modified first
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
// DATA: Representative drive data
// =============================================================================

interface DriveRow {
  title: string;
  fileType: 'PDF' | 'Document' | 'Spreadsheet' | 'Link' | 'Presentation' | 'Image';
  tags: string[];
  lastModified: string;
  action: string;
}

const driveDataRaw: DriveRow[] = [
  {
    title: '2026 Q1 Board Meeting Minutes',
    fileType: 'Document',
    tags: ['Board', 'Meeting Minutes', 'Q1 2026'],
    lastModified: 'Jan 22, 2026',
    action: 'View',
  },
  {
    title: 'Technical Charter v2.0',
    fileType: 'PDF',
    tags: ['TSC', 'Governance', 'Charter'],
    lastModified: 'Jan 21, 2026',
    action: 'View',
  },
  {
    title: 'Cloud Migration Strategy',
    fileType: 'Presentation',
    tags: ['Cloud Native SIG', 'Architecture', 'Strategy'],
    lastModified: 'Jan 20, 2026',
    action: 'View',
  },
  {
    title: 'Security Incident Response Plan',
    fileType: 'PDF',
    tags: ['Security WG', 'Incident Response', 'Policy'],
    lastModified: 'Jan 19, 2026',
    action: 'View',
  },
  {
    title: 'Community Event Calendar',
    fileType: 'Spreadsheet',
    tags: ['Community', 'Events', 'Planning'],
    lastModified: 'Jan 18, 2026',
    action: 'View',
  },
  {
    title: 'Contributor Guidelines',
    fileType: 'Link',
    tags: ['Documentation', 'Onboarding', 'Contributors'],
    lastModified: 'Jan 17, 2026',
    action: 'View',
  },
  {
    title: 'Architecture Diagram',
    fileType: 'Image',
    tags: ['TSC', 'Architecture', 'Documentation'],
    lastModified: 'Jan 16, 2026',
    action: 'View',
  },
  {
    title: 'Release 2.0 Planning',
    fileType: 'Spreadsheet',
    tags: ['Release Management', 'Planning', 'Roadmap'],
    lastModified: 'Jan 15, 2026',
    action: 'View',
  },
  {
    title: 'Budget Allocation 2026',
    fileType: 'Spreadsheet',
    tags: ['Board', 'Finance', 'Budget'],
    lastModified: 'Jan 14, 2026',
    action: 'View',
  },
  {
    title: 'AI/ML Working Session Notes',
    fileType: 'Document',
    tags: ['AI/ML SIG', 'Meeting Notes', 'Research'],
    lastModified: 'Jan 13, 2026',
    action: 'View',
  },
];

// Sort by most recently modified
const driveData = [...driveDataRaw].sort((a, b) => {
  return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
});

// =============================================================================
// TABLE CONSTRUCTION
// =============================================================================

/**
 * Column semantics for Drive table
 * 
 * Columns (semantic types):
 * 1. Title (primary) — flexible, visually dominant
 * 2. Type (categorical) — intrinsic, uses Tag
 * 3. Tags (categorical) — flexible, multiple user-defined tags
 * 4. Last Modified (meta) — intrinsic, muted
 * 5. Actions (action) — intrinsic, text actions
 */
const columns: ColumnDefinition[] = [
  { key: 'title', semanticType: 'primary' },
  { key: 'fileType', semanticType: 'categorical' },
  { key: 'tags', semanticType: 'categorical' },
  { key: 'lastModified', semanticType: 'meta' },
  { key: 'actions', semanticType: 'action' },
];

function createDriveTable(files: DriveRow[], dense: boolean = false): HTMLElement {
  // Create header
  const headerCells = [
    createTableHeaderCell({ children: 'Title' }),
    createTableHeaderCell({ children: 'Type' }),
    createTableHeaderCell({ children: 'Tags' }),
    createTableHeaderCell({ children: 'Last Modified' }),
    createTableHeaderCell({ children: '' }), // Actions column (no header label)
  ];

  // Create rows
  const rows = files.map(file => {
    // Create tags container for multiple tags
    const tagsContainer = document.createElement('div');
    tagsContainer.style.display = 'flex';
    tagsContainer.style.flexWrap = 'wrap';
    tagsContainer.style.gap = 'var(--spacing-4)';
    
    file.tags.forEach(tagLabel => {
      const tag = createTag({ 
        children: tagLabel,
        variant: 'default',
      });
      tagsContainer.appendChild(tag);
    });

    return createTableRow({
      clickable: true,
      dense,
      children: [
        // Title — primary column
        createTableCell({ 
          children: file.title,
          contentType: 'primary',
        }),
        
        // File Type — categorical (Tag)
        createTableCell({ 
          children: createTag({ 
            children: file.fileType,
            variant: 'info',
          }),
          contentType: 'secondary',
        }),
        
        // Tags — multiple tags (flexible taxonomy)
        createTableCell({ 
          children: tagsContainer,
          contentType: 'secondary',
        }),
        
        // Last Modified — meta
        createTableCell({ 
          children: file.lastModified,
          contentType: 'secondary',
        }),
        
        // Actions — action column (text only, no click ownership)
        createTableCell({ 
          children: file.action,
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

interface DriveTablePageArgs {
  showFilters?: boolean;
  showPagination?: boolean;
  files?: DriveRow[];
}

function createDriveTablePage(args: DriveTablePageArgs = {}): HTMLElement {
  const {
    showFilters = true,
    showPagination = false,
    files = driveData,
  } = args;

  // Use demo totalItems > pageSize when pagination should be visible
  // Real pages would use actual dataset count
  const effectiveTotalItems = showPagination ? 85 : files.length;

  // Drive is now a pure configuration object
  // All composition and layout owned by Table Page pattern
  return createTablePageFromConfig({
    // Page configuration
    title: 'Drive',
    description: 'Access documents and links associated with your project.',
    useDataTable: true,
    
    // Primary action (semantic page intent)
    primaryAction: {
      label: 'Upload File',
    },
    
    // Toolbar configuration
    searchPlaceholder: 'Search files…',
    filters: [
      { label: 'All Types' },
      { label: 'All Tags' },
    ],
    
    // Table configuration
    table: createDriveTable(files, false),
    
    // Pagination configuration
    page: 1,
    pageSize: 10,
    totalItems: effectiveTotalItems,
    
    // Display options
    showFilters,
    showPagination,
    
    // Navigation (inherited from Table Page pattern)
    navKey: 'drive',
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<DriveTablePageArgs> = {
  title: '3. Page Examples / 1. Table Pages / 5. Drive',
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
| Title | primary | File/document name (primary identifier) |
| Type | categorical | File type classification (Tag) |
| Tags | categorical | User-defined taxonomy (multiple Tags) |
| Last Modified | meta | Recency signal |
| Actions | action | Entry point |

## What's Different in This Example

- **2 filters** (File Type, Tags)
- **File Type** displayed as info-variant Tags
- **Multiple tags per file** showing flexible, user-defined taxonomy
- **Tags** can represent: meeting series, working groups, topics, or any custom categorization
- **Flexible tagging system** supports open-ended community-driven organization
- **Sorting:** Most recently modified first

## Tag Flexibility

The Tags column demonstrates how Drive supports **open-ended taxonomies**:
- Communities define their own tag vocabularies
- Tags can represent meeting series (e.g., "Q1 2026")
- Tags can represent working groups (e.g., "Security WG")
- Tags can represent topics (e.g., "Architecture", "Policy")
- No predefined tag structure is enforced

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
  render: (args) => createDriveTablePage(args),
};

export default meta;
type Story = StoryObj<DriveTablePageArgs>;

/**
 * Default Drive page with search and filters
 */
export const Default: Story = {
  args: {
    showFilters: true,
    showPagination: false,
  },
};

/**
 * Drive page with pagination enabled
 */
export const WithPagination: Story = {
  args: {
    showFilters: true,
    showPagination: true,
  },
};

/**
 * Minimal Drive page (no filters or pagination)
 */
export const Minimal: Story = {
  args: {
    showFilters: false,
    showPagination: false,
  },
};
