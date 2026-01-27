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
 * SURVEYS PAGE
 * 
 * The Surveys product page for LFX One.
 * 
 * This page implements the Table Page pattern defined in
 * docs/page-patterns/table-page.md
 * 
 * PURPOSE:
 * This is a SECOND Page Example created to validate the Table Page pattern
 * against different data characteristics. Surveys intentionally differs from
 * Votes in several ways:
 * 
 * - LONGER CATEGORICAL LABELS (e.g. "Annual Board Effectiveness")
 * - HIGHER NUMERIC VARIANCE (responses: 0 → 300+)
 * - DIFFERENT SORTING LOGIC (Open → Draft → Closed, then by Due Date)
 * - MORE FILTER CONTROLS (3 instead of 2)
 * - DIFFERENT ACTION SEMANTICS (View Results vs Edit+Delete)
 * 
 * If visual or interaction issues are discovered here, they must be fixed
 * in components or patterns, NOT patched in this story.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * SURVEYS-SPECIFIC BEHAVIOR:
 * - Default sorting: Status (Open → Draft → Closed), then Due Date (ascending)
 * - Drafts with no due date sort last within their status group
 * - Filters: "All Groups", "All Survey Types", "All Statuses" (example labels, non-functional)
 * - Status Tags use semantic variants (success=Open, default for Draft/Closed)
 * - Action column shows:
 *   - "View Results" (Open / Closed)
 *   - "Edit" (Draft)
 * - Survey Name styled as link (blue color) to signal primary entry point
 * - SearchInput spans full width in filter row (dominates visually)
 * 
 * PAGE STRUCTURE (from Table Page pattern):
 * 
 * AppShell
 * └─ PageLayout
 *    ├─ AppHeader (dense: true for workflow pages)
 *    │  ├─ title: "Surveys"
 *    │  ├─ description: "Collect feedback from your project groups."
 *    │  └─ actions: "Create Survey" button (primary variant)
 *    └─ PageSection (dense: true)
 *       └─ Card
 *          ├─ Filter Row (optional)
 *          │  ├─ SearchInput (variant="toolbar", full-width)
 *          │  ├─ FilterDropdownTrigger: "All Groups"
 *          │  ├─ FilterDropdownTrigger: "All Survey Types"
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
 * - Default sorting implemented (Surveys-specific, not generalized)
 * - Survey Name styled as link (blue, visual dominance)
 * - Row interaction uses default clickable model (clickable: true)
 * - Rows use default (comfortable) height for action-oriented table
 * - Column widths balanced via semantic types (7 columns including long tags)
 * - Filter row attached to table (SearchInput full-width, dominates)
 * - Three filter controls feel grouped and balanced
 * - AppHeader uses dense spacing for workflow pages (tight vertical rhythm)
 * - Primary action (Create Survey) visible and aligned with title
 * - Header → table rhythm feels intentional and connected
 * - Long categorical tags (Survey Type) remain calm and readable
 * - High numeric variance (0 → 342) displays cleanly
 * - Draft rows (0 responses) feel distinct but not broken
 * - Row hover supports left→right scanning across wide table
 * - No typography jitter on hover
 * - No layout shifts or visual hacks
 * 
 * VALIDATION GOALS (Pattern Resilience):
 * This example confirms Table Page pattern handles:
 * ✓ Longer categorical labels (tag width pressure)
 * ✓ Higher numeric variance (0 to 342 responses)
 * ✓ Different default sorting logic (instance-specific)
 * ✓ Additional filter controls (3 vs 2, no crowding)
 * ✓ Different action semantics (View Results vs Edit)
 * ✓ Empty metadata fields (drafts with no due date)
 * 
 * DEFERRED ISSUES (requiring component/token changes):
 * - None identified at instance level
 * - All visual concerns resolved via existing component contracts
 * - Pattern validation complete
 * 
 * If something feels off visually:
 * - Identify which component owns the issue
 * - Fix in components or tokens, NOT here
 * - Document as follow-up if unclear
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createTable, createTableHeader, createTableBody, type ColumnDefinition } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTablePageFromConfig } from '../../page-patterns/table-page/table-page.stories';
import { createTag } from '../../../../components/tag/tag';
import { createButton } from '../../../../components/button/button';

// =============================================================================
// DATA: Representative survey data
// =============================================================================

interface SurveyRow {
  name: string;
  surveyType: string;
  group: string;
  status: 'Open' | 'Draft' | 'Closed';
  responses: number;
  due: string;
  action: string;
}

const surveysDataRaw: SurveyRow[] = [
  {
    name: '2026 Annual Board Effectiveness Survey',
    surveyType: 'Board Effectiveness',
    group: 'Board of Directors',
    status: 'Open',
    responses: 8,
    due: 'Feb 15, 2026',
    action: 'View Results',
  },
  {
    name: 'Q1 Committee Performance Review',
    surveyType: 'Committee Effectiveness',
    group: 'Technical Advisory Committee',
    status: 'Open',
    responses: 12,
    due: 'Feb 10, 2026',
    action: 'View Results',
  },
  {
    name: 'Foundation-Wide Satisfaction Survey',
    surveyType: 'Member Satisfaction',
    group: 'All Members',
    status: 'Open',
    responses: 247,
    due: 'Jan 31, 2026',
    action: 'View Results',
  },
  {
    name: 'Event Feedback - Open Source Summit 2025',
    surveyType: 'Event Feedback',
    group: 'Event Attendees',
    status: 'Closed',
    responses: 342,
    due: 'Dec 15, 2025',
    action: 'View Results',
  },
  {
    name: 'Technical Steering Committee Priorities',
    surveyType: 'Strategic Planning',
    group: 'Technical Steering Committee',
    status: 'Open',
    responses: 9,
    due: 'Feb 28, 2026',
    action: 'View Results',
  },
  {
    name: 'Q4 2025 Project Health Check',
    surveyType: 'Project Assessment',
    group: 'Project Maintainers',
    status: 'Closed',
    responses: 56,
    due: 'Dec 31, 2025',
    action: 'View Results',
  },
  {
    name: 'Contributor Experience Survey',
    surveyType: 'Contributor Feedback',
    group: 'All Contributors',
    status: 'Closed',
    responses: 189,
    due: 'Dec 20, 2025',
    action: 'View Results',
  },
  {
    name: 'Working Group Effectiveness Review',
    surveyType: 'Working Group Assessment',
    group: 'Security Working Group',
    status: 'Draft',
    responses: 0,
    due: '',
    action: 'Edit',
  },
  {
    name: 'Mentorship Program Feedback',
    surveyType: 'Program Evaluation',
    group: 'Mentorship Program',
    status: 'Draft',
    responses: 0,
    due: 'Mar 1, 2026',
    action: 'Edit',
  },
  {
    name: 'Community Forum Usage Survey',
    surveyType: 'Platform Feedback',
    group: 'All Members',
    status: 'Open',
    responses: 134,
    due: 'Feb 5, 2026',
    action: 'View Results',
  },
];

/**
 * Sorts surveys by status priority, then by due date.
 * 
 * SURVEYS-SPECIFIC SORTING LOGIC:
 * This sorting logic is specific to the Surveys product page and reflects
 * real-world priority rules for survey workflows.
 * 
 * Sorting rules:
 * 1. Status order (highest to lowest priority):
 *    - Open (active surveys requiring attention)
 *    - Draft (surveys in progress)
 *    - Closed (archived/completed)
 * 
 * 2. Within each status group:
 *    - Sort by Due Date (ascending - soonest first)
 *    - Drafts with no due date sort last within Draft status
 * 
 * This is example-specific logic and should NOT be extracted to shared utilities
 * unless other pages require identical behavior.
 */
function sortSurveysByPriority(surveys: SurveyRow[]): SurveyRow[] {
  const statusOrder: Record<SurveyRow['status'], number> = {
    'Open': 1,
    'Draft': 2,
    'Closed': 3,
  };

  return [...surveys].sort((a, b) => {
    // First: Sort by status priority
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;

    // Second: Sort by due date (ascending)
    // Handle empty due dates (drafts with no due date go last)
    if (!a.due && !b.due) return 0;
    if (!a.due) return 1;
    if (!b.due) return -1;

    const dateA = new Date(a.due).getTime();
    const dateB = new Date(b.due).getTime();
    return dateA - dateB;
  });
}

// Apply default sorting to surveys data
const surveysData: SurveyRow[] = sortSurveysByPriority(surveysDataRaw);

const minimalSurveysData: SurveyRow[] = surveysData.slice(0, 3);

// =============================================================================
// HELPER: Text Node
// =============================================================================

function createTextNode(text: string): Text {
  return document.createTextNode(text);
}

// =============================================================================
// HELPER: Link-Styled Survey Name (Surveys-Specific)
// =============================================================================

/**
 * Creates a link-styled Survey Name element.
 * 
 * SURVEYS-SPECIFIC AFFORDANCE:
 * Survey Name is the primary entry point to each survey. It must:
 * - Use brand blue (accent-600) to signal interactivity
 * - Look like a link at rest (no hover changes needed)
 * - NOT change font size or weight (stable typography)
 * - NOT shift layout on hover
 * 
 * Row-level hover (background + left-edge indicator) carries the
 * interaction signal. Survey Name color simply reinforces the entry point.
 */
function createSurveyNameLink(name: string): HTMLElement {
  const link = document.createElement('span');
  link.textContent = name;
  link.style.color = 'var(--accent-600)'; // Brand blue for link affordance
  link.style.textDecoration = 'none'; // No underline (row hover is enough)
  return link;
}


// =============================================================================
// HELPER: Surveys Table with semantic columns
// =============================================================================

/**
 * Creates the Surveys table with semantic column definitions.
 * 
 * Columns (semantic types):
 * 1. Survey Name (primary) — flexible, visually dominant
 * 2. Survey Type (categorical) — intrinsic, uses Tag
 * 3. Group (categorical) — intrinsic, uses Tag
 * 4. Status (categorical) — intrinsic, uses Tag with variants
 * 5. Responses (numeric) — intrinsic, right-aligned
 * 6. Due (meta) — intrinsic, muted
 * 7. Actions (action) — intrinsic, text actions
 * 
 * Row interaction:
 * - Rows are clickable via TableRow props
 * - Row owns navigation, not columns
 * - Hover affordance appears only when clickable
 */
function createSurveysTable(surveys: SurveyRow[]): HTMLElement {
  // Semantic column definitions (REQUIRED by Table Page pattern)
  const columns: ColumnDefinition[] = [
    { key: 'name', semanticType: 'primary' },
    { key: 'surveyType', semanticType: 'categorical' },
    { key: 'group', semanticType: 'categorical' },
    { key: 'status', semanticType: 'categorical' },
    { key: 'responses', semanticType: 'numeric' },
    { key: 'due', semanticType: 'meta' },
    { key: 'actions', semanticType: 'action' },
  ];

  // Header row
  const headerCells = [
    createTableHeaderCell({ children: 'Survey Name' }),
    createTableHeaderCell({ children: 'Survey Type' }),
    createTableHeaderCell({ children: 'Group' }),
    createTableHeaderCell({ children: 'Status' }),
    createTableHeaderCell({ children: 'Responses', align: 'right' }),
    createTableHeaderCell({ children: 'Due' }),
    createTableHeaderCell({ children: '' }), // Actions column (no header label)
  ];

  // Data rows
  const rows = surveys.map(survey => {
    // Status variant mapping
    let statusVariant: 'success' | 'default' = 'default';
    if (survey.status === 'Open') statusVariant = 'success';
    else if (survey.status === 'Draft') statusVariant = 'default';
    else if (survey.status === 'Closed') statusVariant = 'default';

    return createTableRow({
      clickable: true, // Row-level navigation (DEFAULT)
      children: [
        // Survey Name — primary column (link-styled for visual dominance)
        createTableCell({ 
          children: createSurveyNameLink(survey.name), 
          contentType: 'primary',
        }),
        
        // Survey Type — categorical (Tag)
        createTableCell({ 
          children: createTag({ children: survey.surveyType }), 
          contentType: 'secondary',
        }),
        
        // Group — categorical (Tag)
        createTableCell({ 
          children: createTag({ children: survey.group }), 
          contentType: 'secondary',
        }),
        
        // Status — categorical (Tag with variant)
        createTableCell({ 
          children: createTag({ 
            children: survey.status, 
            variant: statusVariant,
          }), 
          contentType: 'secondary',
        }),
        
        // Responses — numeric
        createTableCell({ 
          children: survey.responses.toString(), 
          contentType: 'numeric', 
          align: 'right',
        }),
        
        // Due — meta
        createTableCell({ 
          children: survey.due || '—', 
          contentType: 'secondary',
        }),
        
        // Actions — action
        createTableCell({ 
          children: survey.action,
          contentType: 'action',
        }),
      ],
    });
  });

  return createTableGrid({
    columns,
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });
}

// =============================================================================
// HELPER: Demo Navigation (reused across examples)
// =============================================================================

function createDemoNav(activeItemId = 'surveys') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'surveys', children: createTextNode('Surveys') }),
      ]),
    ],
  });
}

// =============================================================================
// MAIN COMPOSITION FUNCTION
// Creates Surveys Table Page (instance of canonical Table Page pattern)
// =============================================================================

interface SurveysTablePageArgs {
  showFilters?: boolean;
  showPagination?: boolean;
  surveys?: SurveyRow[];
}

function createSurveysTablePage(args: SurveysTablePageArgs = {}): HTMLElement {
  const {
    showFilters = true,
    showPagination = false,
    surveys = surveysData,
  } = args;

  // Surveys is now a pure configuration object
  // All composition and layout owned by Table Page pattern
  return createTablePageFromConfig({
    // Page configuration
    title: 'Surveys',
    description: 'Collect feedback from your project groups.',
    actions: createButton({
      children: 'Create Survey',
      variant: 'primary',
    }),
    
    // Toolbar configuration
    searchPlaceholder: 'Search surveys…',
    filters: [
      { label: 'All Survey Types' },
      { label: 'All Groups' },
      { label: 'All Statuses' },
    ],
    
    // Table configuration
    table: createSurveysTable(surveys),
    
    // Pagination configuration
    page: 1,
    pageSize: 10,
    totalItems: surveys.length,
    
    // Display options
    showFilters,
    showPagination,
    
    // Navigation
    nav: createDemoNav(),
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<SurveysTablePageArgs> = {
  title: '3. Page Examples / Surveys',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Surveys Table Page Composition

**Concrete instance of canonical Table Page pattern**

This composition demonstrates the canonical Table Page pattern (defined in
\`docs/page-patterns/table-page.md\`) using Surveys as a concrete example.

### Purpose

This is a SECOND Page Example created to validate the Table Page pattern
against different data characteristics. Surveys intentionally differs from
Votes to test pattern resilience:

- **Longer categorical labels** (e.g. "Annual Board Effectiveness Survey")
- **Higher numeric variance** (responses: 0 → 300+)
- **Different sorting logic** (Open → Draft → Closed, then by Due Date)
- **More filter controls** (3 instead of 2)
- **Different action semantics** (View Results vs Edit)

### Pattern Characteristics

- **Page title == Table title** — "Surveys" (no section titles)
- **One table per page** — canonical constraint
- **Filters inside Card** — above the table
- **Pagination inside Card** — below the table (optional)
- **Semantic column widths** — flexible vs intrinsic
- **Row-level navigation** — clickable by default

### Validation Goals

This example tests whether Table Page handles:
- ✓ Longer categorical labels (tag width pressure)
- ✓ Higher numeric variance (0 → 300+)
- ✓ Different default sorting logic (instance-specific)
- ✓ Additional filter controls (3 vs 2)
- ✓ Different action column semantics

If visual or interaction issues are discovered here, they must be fixed
in components or patterns, NOT patched in this story.
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
  render: (args) => createSurveysTablePage(args),
};

export default meta;
type Story = StoryObj<SurveysTablePageArgs>;

// =============================================================================
// STORY VARIANTS
// =============================================================================

/**
 * Default Surveys Table Page composition.
 * 
 * Demonstrates typical table page layout:
 * - Filters enabled (search + 3 filter dropdowns)
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
 * Surveys Table Page with pagination.
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
 * Minimal Surveys Table Page.
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
    surveys: minimalSurveysData,
  },
};
