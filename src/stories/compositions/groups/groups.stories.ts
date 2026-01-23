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
      createTableCell({ children: group.name, contentType: 'primary' }),
      createTableCell({ children: group.type, contentType: 'secondary' }),
      createTableCell({ children: group.description, contentType: 'secondary' }),
      createTableCell({ children: String(group.members), contentType: 'numeric', align: 'right' }),
      createTableCell({ children: group.voting ? createCheckmark() : createTextNode('—') }),
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

function createFiltersRow(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-12)';
  container.style.alignItems = 'center';

  container.appendChild(createSearchInput({ placeholder: 'Search Groups…' }));
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

  // Filters section (conditional)
  if (showFilters) {
    pageChildren.push(
      createPageSection({
        dense,
        children: createFiltersRow(),
      })
    );
  }

  // My Groups section
  const myGroupsSection = document.createElement('div');
  myGroupsSection.appendChild(createSectionTitle('My Groups'));
  myGroupsSection.appendChild(
    createCard({
      dense,
      children: createGroupsTable(myGroups, dense),
    })
  );

  pageChildren.push(
    createPageSection({
      dense,
      children: myGroupsSection,
    })
  );

  // Other Groups section
  const otherGroupsSection = document.createElement('div');
  otherGroupsSection.appendChild(createSectionTitle('Other Groups'));
  otherGroupsSection.appendChild(
    createCard({
      dense,
      children: createGroupsTable(otherGroups, dense),
    })
  );

  pageChildren.push(
    createPageSection({
      dense,
      children: otherGroupsSection,
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
 * ✓ No tokens were added or changed
 * ✓ No new component props were introduced
 * ✓ Filters are NOT wrapped in a Card
 * ✓ Tables ARE wrapped in Cards
 * ✓ Composition uses only existing components
 * 
 * KNOWN LIMITATIONS (if any exist, document here):
 * - Section titles use inline styles for typography binding
 *   (a SectionTitle component may be needed if this pattern repeats)
 * - Filters row uses inline styles for flex layout
 *   (a FilterBar component may be needed if this pattern repeats)
 * 
 * If this page feels wrong, the fix must occur in tokens or contracts — never here.
 */
