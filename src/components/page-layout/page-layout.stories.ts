import type { Meta, StoryObj } from '@storybook/html';
import { createPageLayout, PageLayoutProps } from './page-layout';
import { createAppHeader } from '../app-header/app-header';
import { createAppShell } from '../app-shell/app-shell';
import { createGlobalNav, createNavSection, createNavItem } from '../global-nav/global-nav';
import { createListGroup } from '../list-group/list-group';
import { createListItem } from '../list-item/list-item';

const meta: Meta<PageLayoutProps> = {
  title: '1. Components / 3. Organisms / PageLayout',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## PageLayout

**Tier 3 — Composite Layout Component**

PageLayout provides a consistent content wrapper for all LFX One pages. It enforces width, padding, and vertical spacing rules inside the AppShell content area.

### ⚠️ Important

**PageLayout does NOT style child components.**

**PageLayout does NOT implement page headers or titles.**

**PageLayout does NOT manage responsive breakpoints beyond max-width.**

Those responsibilities belong to:
- **AppHeader:** page titles, descriptions, actions
- **Child components:** own their own styling and behavior
- **Parent application:** routing, data fetching

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Content max-width behavior | Typography |
| Horizontal padding | Page header (use AppHeader) |
| Vertical spacing between sections | Cards, tables, lists, charts |
| Scroll containment | Data fetching or routing |
| Dense spacing variant | Visual styling of children |

### How It Fits Together

\`\`\`
AppShell
├── nav: GlobalNav
├── header: (optional)
└── content: PageLayout ← YOU ARE HERE
    ├── AppHeader
    ├── [Section 1]
    ├── [Section 2]
    └── [Section 3]
\`\`\`

### NOT Responsible For

- Does NOT style child components
- Does NOT implement page headers (use AppHeader)
- Does NOT manage responsive breakpoints beyond layout constraints
- Does NOT apply background or surface styling by default
- Does NOT manage focus or keyboard navigation

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Max width | \`--spacing-page-max-width\` |
| Horizontal padding | \`--spacing-page-padding-x\` |
| Section gap | \`--spacing-page-section-gap\` |
| Section gap (dense) | \`--spacing-page-section-gap-dense\` |

### Usage Example

\`\`\`typescript
createAppShell({
  nav: createGlobalNav({ ... }),
  content: createPageLayout({
    children: [
      createAppHeader({ title: 'Projects', description: '...' }),
      createTable({ ... }),
      createListGroup({ ... }),
    ]
  })
})
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Reduced vertical spacing between sections',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Disable max-width constraint',
    },
  },
  render: (args) => {
    return createPageLayout(args);
  },
};

export default meta;
type Story = StoryObj<PageLayoutProps>;

// Helper to create placeholder sections
function createPlaceholderSection(title: string, height: string = '150px'): HTMLElement {
  const section = document.createElement('div');
  section.style.cssText = `
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    min-height: ${height};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-size: 14px;
    color: #64748b;
  `;
  section.textContent = title;
  return section;
}

/**
 * Default PageLayout with standard spacing
 */
export const Default: Story = {
  args: {
    children: [
      createAppHeader({ title: 'Dashboard', description: 'Overview of your projects and activity' }),
      createPlaceholderSection('Content Section 1'),
      createPlaceholderSection('Content Section 2'),
      createPlaceholderSection('Content Section 3'),
    ],
  },
};

/**
 * Dense spacing mode (reduced vertical gap)
 */
export const Dense: Story = {
  args: {
    children: [
      createAppHeader({ title: 'Settings', description: 'Configure your preferences' }),
      createPlaceholderSection('General Settings'),
      createPlaceholderSection('Notification Settings'),
      createPlaceholderSection('Security Settings'),
      createPlaceholderSection('Integration Settings'),
    ],
    dense: true,
  },
};

/**
 * Full width mode (no max-width constraint)
 */
export const FullWidth: Story = {
  args: {
    children: [
      createAppHeader({ title: 'Analytics', description: 'Full-width data visualization' }),
      createPlaceholderSection('Wide Chart Area', '300px'),
      createPlaceholderSection('Data Table'),
    ],
    fullWidth: true,
  },
};

/**
 * Demonstrates scrollable content behavior
 */
export const WithScrollableContent: Story = {
  args: {
    children: [
      createAppHeader({ title: 'Long Page', description: 'Scroll to see more content' }),
      createPlaceholderSection('Section 1', '200px'),
      createPlaceholderSection('Section 2', '200px'),
      createPlaceholderSection('Section 3', '200px'),
      createPlaceholderSection('Section 4', '200px'),
      createPlaceholderSection('Section 5', '200px'),
      createPlaceholderSection('Section 6', '200px'),
      createPlaceholderSection('Section 7', '200px'),
      createPlaceholderSection('Section 8', '200px'),
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Multiple stacked sections with varied content
 */
export const WithMultipleSections: Story = {
  args: {
    children: [
      createAppHeader({ 
        title: 'Project Overview', 
        description: 'Summary of project status and metrics' 
      }),
      createPlaceholderSection('Key Metrics Row', '100px'),
      createPlaceholderSection('Activity Chart', '250px'),
      createPlaceholderSection('Recent Commits Table', '200px'),
      createPlaceholderSection('Team Members List', '150px'),
    ],
  },
};

/**
 * PageLayout in context with AppShell and GlobalNav
 */
export const InContextWithAppShell: Story = {
  render: () => {
    const nav = createGlobalNav({
      activeItemId: 'dashboard',
      sections: [
        createNavSection({
          children: [
            createNavItem({ id: 'dashboard', label: 'Dashboard', icon: '📊' }),
            createNavItem({ id: 'projects', label: 'Projects', icon: '📁' }),
            createNavItem({ id: 'team', label: 'Team', icon: '👥' }),
            createNavItem({ id: 'settings', label: 'Settings', icon: '⚙️' }),
          ],
        }),
      ],
    });

    const pageContent = createPageLayout({
      children: [
        createAppHeader({ 
          title: 'Dashboard', 
          description: 'Welcome back! Here\'s what\'s happening with your projects.' 
        }),
        createPlaceholderSection('Quick Stats', '120px'),
        createPlaceholderSection('Recent Activity', '200px'),
        createPlaceholderSection('Project Summary', '180px'),
      ],
    });

    return createAppShell({
      nav,
      content: pageContent,
    });
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Content-only layout (no AppHeader)
 */
export const ContentOnly: Story = {
  args: {
    children: [
      createPlaceholderSection('Content Section 1'),
      createPlaceholderSection('Content Section 2'),
      createPlaceholderSection('Content Section 3'),
    ],
  },
};

/**
 * With real ListGroup components
 */
export const WithListGroups: Story = {
  args: {
    children: [
      createAppHeader({ 
        title: 'Team Members', 
        description: 'Manage your team and permissions' 
      }),
      (() => {
        const listGroup = createListGroup({
          children: [
            createListItem({ 
              children: (() => {
                const item = document.createElement('div');
                item.textContent = 'John Doe - Admin';
                item.style.padding = '8px 0';
                return item;
              })(),
              clickable: true,
            }),
            createListItem({ 
              children: (() => {
                const item = document.createElement('div');
                item.textContent = 'Jane Smith - Editor';
                item.style.padding = '8px 0';
                return item;
              })(),
              clickable: true,
            }),
            createListItem({ 
              children: (() => {
                const item = document.createElement('div');
                item.textContent = 'Bob Wilson - Viewer';
                item.style.padding = '8px 0';
                return item;
              })(),
              clickable: true,
            }),
          ],
          withBorder: true,
          withBackground: true,
        });
        return listGroup;
      })(),
      createPlaceholderSection('Pending Invitations', '120px'),
    ],
  },
};

/**
 * Comparison: Default vs Dense spacing
 */
export const SpacingComparison: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      padding: 24px;
      background: #f8fafc;
    `;

    // Default spacing
    const defaultColumn = document.createElement('div');
    defaultColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';
    const defaultLayout = createPageLayout({
      children: [
        createPlaceholderSection('Section 1', '80px'),
        createPlaceholderSection('Section 2', '80px'),
        createPlaceholderSection('Section 3', '80px'),
      ],
    });
    defaultColumn.appendChild(defaultLayout);

    // Dense spacing
    const denseColumn = document.createElement('div');
    denseColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';
    const denseLayout = createPageLayout({
      children: [
        createPlaceholderSection('Section 1', '80px'),
        createPlaceholderSection('Section 2', '80px'),
        createPlaceholderSection('Section 3', '80px'),
      ],
      dense: true,
    });
    denseColumn.appendChild(denseLayout);

    container.appendChild(defaultColumn);
    container.appendChild(denseColumn);

    return container;
  },
  parameters: {
    layout: 'fullscreen',
  },
};
