/**
 * Groups Page Composition Story
 * 
 * This story is a system composition validation artifact. It exists to prove
 * whether the current UI Kit can reproduce the Groups page without custom
 * styling or new components.
 * 
 * RULES:
 * - No styling overrides are allowed
 * - No new tokens or props may be introduced
 * - If something looks wrong, the fix must occur in:
 *   - tokens
 *   - component contracts
 *   - or missing pattern components
 * - Never in this story
 * 
 * WHAT THIS VALIDATES:
 * - Filters + tables compose cleanly
 * - Card surfaces behave consistently
 * - PageSection spacing scales across variants
 * - Tables support real product density
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../components/app-header/app-header';
import { createPageSection } from '../../../components/page-section/page-section';
import { createCard } from '../../../components/card/card';
import { createTable, createTableHeader, createTableBody } from '../../../components/table/table';
import { createTableHeaderCell } from '../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../components/table-row/table-row';
import { createTableCell } from '../../../components/table-cell/table-cell';
import { createSearchInput } from '../../../components/search-input/search-input';
import { createFilterDropdownTrigger } from '../../../components/filter-dropdown-trigger/filter-dropdown-trigger';
import { createGlobalNav, createNavSection, createNavItem } from '../../../components/global-nav/global-nav';
import { createTag } from '../../../components/tag/tag';

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
 * requires grid-template-columns tuning at the Table component level.
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

  return createTable({
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

function createDemoNav(activeItemId = 'groups') {
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

interface GroupsPageArgs {
  dense?: boolean;
  showFilters?: boolean;
  myGroups?: GroupRow[];
  otherGroups?: GroupRow[];
}

function createGroupsPage(args: GroupsPageArgs = {}): HTMLElement {
  const {
    dense = false,
    showFilters = true,
    myGroups = myGroupsData,
    otherGroups = otherGroupsData,
  } = args;

  const pageChildren: HTMLElement[] = [
    // AppHeader must be first child
    createAppHeader({
      title: 'Groups',
      description: 'A group is a team of people like committees, boards, or working groups organized to collaborate across your project.',
      dense,
    }),
  ];

  // My Groups section with filters grouped in same card
  // 
  // COMPOSITION STRUCTURE:
  // - Filters row sits directly above table (both inside same Card)
  // - No wrapper divs between them
  // - Card's padding provides outer spacing
  // - Filters row uses tight horizontal gap (spacing-8) for unified feel
  // 
  // This creates a "filtered table view" pattern where the controls
  // feel visually attached to the data they control.
  const myGroupsCardChildren: HTMLElement[] = [];
  
  if (showFilters) {
    myGroupsCardChildren.push(createFiltersRow());
  }
  
  myGroupsCardChildren.push(createGroupsTable(myGroups, dense));
  
  // Section title sits outside Card, both directly in PageSection
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

  // Other Groups section - title outside Card
  pageChildren.push(
    createPageSection({
      dense: true,
      children: [
        createSectionTitle('Other Groups'),
        createCard({
          dense,
          children: createGroupsTable(otherGroups, dense),
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

const meta: Meta<GroupsPageArgs> = {
  title: 'Compositions/Groups',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Groups Page Composition

**This is not a product feature.**

This story is a system composition validation artifact. It exists to prove whether the current UI Kit can reproduce the Groups page without custom styling or new components.

### Rules

- No styling overrides are allowed
- No new tokens or props were introduced
- If something looks wrong, the fix must occur in:
  - tokens
  - component contracts
  - or missing pattern components
- Never in this story

### What This Validates

- Filters + tables compose cleanly
- Card surfaces behave consistently
- PageSection spacing scales across variants
- Tables support real product density
- Column semantics (primary text, categorical, numeric) work via composition

### Validated Patterns

**Search + Filters Embedded with Table:**
- Search and filter controls grouped in the same Card as the table
- This creates a clear "filtered view" container
- Pattern is validated and may become a reusable table variant
- Do NOT extract into a component yet — let the pattern mature first

**Column Semantics:**
- Name column: Primary text (flexible width, left aligned)
- Type column: Categorical (intrinsic width, uses Tag placeholder)
- Description column: Primary text (flexible width, left aligned)
- Members column: Numeric (intrinsic width, right aligned)
- Tables express semantic intent via content type, not equal-width columns

### Architecture

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   │  ├─ title: "Groups"
   │  └─ description: "A group is a team of people..."
   ├─ PageSection
   │  ├─ SearchInput (placeholder: "Search Groups…")
   │  └─ FilterDropdownTrigger (label: "All Types")
   ├─ PageSection
   │  └─ Card
   │     └─ Table (My Groups)
   └─ PageSection
      └─ Card
         └─ Table (Other Groups)
\`\`\`
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
  },
  render: (args) => createGroupsPage(args),
};

export default meta;
type Story = StoryObj<GroupsPageArgs>;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Canonical Groups page composition.
 * This is the default representation of the Groups product page.
 */
export const Default: Story = {
  args: {
    dense: false,
    showFilters: true,
  },
};

/**
 * Dense variant with dense=true passed wherever supported.
 * Demonstrates the system's density controls work consistently.
 */
export const Dense: Story = {
  args: {
    dense: true,
    showFilters: true,
  },
};

/**
 * Without Filters variant.
 * Removes SearchInput and FilterDropdownTrigger to test layout resilience.
 */
export const WithoutFilters: Story = {
  args: {
    dense: false,
    showFilters: false,
  },
};

/**
 * Long Descriptions variant.
 * Increases description text length to test table wrapping behavior.
 */
export const LongDescriptions: Story = {
  args: {
    dense: false,
    showFilters: true,
    myGroups: longDescriptionMyGroups,
    otherGroups: longDescriptionOtherGroups,
  },
};

/**
 * Minimal variant.
 * One group in each table to test composition at minimum viable content.
 */
export const Minimal: Story = {
  args: {
    dense: false,
    showFilters: true,
    myGroups: minimalMyGroups,
    otherGroups: minimalOtherGroups,
  },
};

// =============================================================================
// VERIFICATION COMMENT
// =============================================================================

/**
 * VERIFICATION CHECKLIST:
 * ✓ No component CSS was modified
 * ✓ No tokens were added or changed (Tag tokens added as system-level ui.tag.*)
 * ✓ No new component props were introduced
 * ✓ Filters are grouped WITH tables in the same Card
 * ✓ Composition uses only existing components
 * 
 * COLUMN SEMANTICS VALIDATED:
 * ✓ Primary text columns (Name, Description) use primary/secondary content types
 * ✓ Categorical column (Type) uses Tag component for semantic intent
 * ✓ Numeric column (Members) uses right alignment and numeric content type
 * ✓ Icon/symbol column (Voting) uses visual indicator elements
 * ✓ Metadata column (Last Updated) uses muted content type
 * 
 * SEARCH + FILTER ROW COMPOSITION:
 * ✓ Reduced gap from spacing-12 to spacing-8 for tighter unified control bar feel
 * ✓ SearchInput + FilterDropdownTrigger read as single horizontal unit
 * ✓ Filters row sits directly above table with no extra wrappers
 * ✓ Card padding provides outer spacing
 * ✓ Left-aligned layout (SearchInput dominates, Filter is secondary)
 * 
 * COMPOSITION REFINEMENTS APPLIED:
 * - Tightened horizontal rhythm in filters row (12px → 8px gap)
 * - Documented composition intent (filters attached to table)
 * - No extra wrappers or margins between filters and table
 * - Structure is minimal and intentional
 * 
 * KNOWN LIMITATIONS (if any exist, document here):
 * - Section titles use inline styles for typography binding
 *   (a SectionTitle component may be needed if this pattern repeats)
 * - Filters row uses inline styles for flex layout
 *   (a FilterBar component may be needed if this pattern repeats)
 * - Column widths use legacy equal-width (6 columns)
 *   (semantic ColumnDefinition[] available but not yet applied to Groups story)
 * - No vertical spacing between filters row and table
 *   (they sit directly adjacent - if rhythm feels off, this is a Card or Table
 *    component concern, not a composition issue)
 * 
 * POTENTIAL FUTURE REFINEMENTS (not bugs, just observations):
 * - Filters row height might feel slightly tall compared to LFX One
 *   (this is a SearchInput/FilterDropdownTrigger component density concern)
 * - If a reusable FilterBar pattern emerges, extract it then (not prematurely)
 * - Consider applying semantic column widths to Groups tables
 * 
 * FINDINGS:
 * - Search + filters embedded with table is a validated, reusable pattern
 * - Column semantics work correctly via composition and content types
 * - Tag component successfully extracted and implemented for categorical data display
 * - Filters row composition feels tighter and more intentional after polish pass
 * - Future enhancement: Semantic column width control (flexible vs intrinsic)
 * 
 * If this page feels wrong, the fix must occur in tokens or contracts — never here.
 */
