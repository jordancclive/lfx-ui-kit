import type { Meta, StoryObj } from '@storybook/html';
import { createAppHeader, AppHeaderProps } from './app-header';
import { createButton } from '../button/button';
import { createFilterPill } from '../filter-pill/filter-pill';
import { createTabsGroup } from '../tabs-group/tabs-group';

const meta: Meta<AppHeaderProps> = {
  title: '1. Components / 3. Level 3 / AppHeader',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## AppHeader

**Tier 3 — Composite Layout Component**

AppHeader defines the top-of-page header region for LFX One pages. It provides structured layout for page title, optional description, optional metadata (breadcrumbs, status pills), and optional actions area (buttons, filters, tabs, search).

### ⚠️ Important

**AppHeader does NOT own styling of children.**

**AppHeader does NOT implement routing or navigation logic.**

**AppHeader does NOT manage state or handle interactions.**

Those responsibilities belong to:
- **Child components:** own their own styling, interaction, and state
- **Parent application:** routing logic, data fetching, state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Layout of title/description stack | Typography tokens (reuses existing) |
| Layout of actions slot (right-aligned) | Styling or behavior of buttons, filters, tabs |
| Layout of meta slot (left-aligned) | Routing or navigation logic |
| Optional bottom divider | State management or data fetching |
| Dense spacing mode | Hover, selected, or disabled states |

### NOT Responsible For

- Does NOT implement breadcrumb navigation
- Does NOT manage page state or URL routing
- Does NOT style buttons, pills, tabs, or dropdowns
- Does NOT implement responsive breakpoints beyond layout wrapping
- Does NOT manage focus or keyboard navigation
- Does NOT implement animations or transitions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Background | \`--color-app-header-surface-background\` |
| Bottom divider | \`--color-app-header-surface-border\` |
| Horizontal padding | \`--spacing-app-header-padding-x\` |
| Vertical padding | \`--spacing-app-header-padding-y\` |
| Vertical padding (dense) | \`--spacing-app-header-padding-y-dense\` |
| Gap between regions | \`--spacing-app-header-gap\` |
| Gap between regions (dense) | \`--spacing-app-header-gap-dense\` |
| Gap between title/description | \`--spacing-app-header-title-gap\` |
| Gap between title/description (dense) | \`--spacing-app-header-title-gap-dense\` |
| Gap between meta/title | \`--spacing-app-header-meta-gap\` |
| Gap between action children | \`--spacing-app-header-actions-gap\` |

### Typography Bindings

AppHeader reuses existing typography tokens:
- **Title:** \`--text-2xl\`, \`--font-semibold\`, \`--text-primary\`
- **Description:** \`--text-sm\`, \`--font-medium\`, \`--text-secondary\`

### Composition Examples

#### Title Only
\`\`\`typescript
createAppHeader({ title: "Projects" })
\`\`\`

#### Title + Description
\`\`\`typescript
createAppHeader({
  title: "Projects",
  description: "Manage your open source projects and contributors"
})
\`\`\`

#### Title + Actions
\`\`\`typescript
createAppHeader({
  title: "Projects",
  actions: createButton({ label: "New Project", variant: "primary" })
})
\`\`\`

#### Meta + Title + Actions
\`\`\`typescript
createAppHeader({
  meta: createFilterPill({ label: "Active", selected: true }),
  title: "Project Settings",
  actions: createButton({ label: "Save", variant: "primary" })
})
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Page title (required)',
    },
    description: {
      control: 'text',
      description: 'Optional description/subtitle text',
    },
    withDivider: {
      control: 'boolean',
      description: 'Show bottom divider border',
    },
    dense: {
      control: 'boolean',
      description: 'Dense spacing mode',
    },
  },
  render: (args) => {
    return createAppHeader(args);
  },
};

export default meta;
type Story = StoryObj<AppHeaderProps>;

/**
 * Basic header with title only
 */
export const TitleOnly: Story = {
  args: {
    title: 'Projects',
  },
};

/**
 * Header with title and description text
 */
export const TitleAndDescription: Story = {
  args: {
    title: 'Team Members',
    description: 'Invite and manage team member access and permissions',
  },
};

/**
 * Header with action button on the right
 */
export const WithActions: Story = {
  args: {
    title: 'Projects',
    description: 'Manage your open source projects and contributors',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      
      const secondaryButton = createButton({
        label: 'Export',
        variant: 'secondary',
      });
      
      const primaryButton = createButton({
        label: 'New Project',
        variant: 'primary',
      });
      
      container.appendChild(secondaryButton);
      container.appendChild(primaryButton);
      return container;
    })(),
  },
};

/**
 * Dense spacing mode (reduced vertical padding and gaps)
 */
export const Dense: Story = {
  args: {
    title: 'Projects',
    description: 'Manage your open source projects',
    dense: true,
    actions: createButton({
      label: 'New Project',
      variant: 'primary',
    }),
  },
};

/**
 * Responsive wrapping behavior (narrow container)
 */
export const ResponsiveWrap: Story = {
  args: {
    title: 'Very Long Project Title That Might Wrap',
    description: 'This demonstrates how the header handles narrow viewports and wrapping behavior',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      
      container.appendChild(createButton({
        label: 'Cancel',
        variant: 'secondary',
      }));
      
      container.appendChild(createButton({
        label: 'Save',
        variant: 'primary',
      }));
      
      return container;
    })(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Header with tabs as actions
 */
export const WithTabs: Story = {
  args: {
    title: 'Projects',
    description: 'View and manage all your projects',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '4px';
      
      const tabsGroup = createTabsGroup({
        tabs: [
          { id: 'all', label: 'All' },
          { id: 'active', label: 'Active' },
          { id: 'archived', label: 'Archived' },
        ],
        selectedId: 'all',
      });
      
      container.appendChild(tabsGroup);
      return container;
    })(),
  },
};
