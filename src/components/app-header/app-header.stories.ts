import type { Meta, StoryObj } from '@storybook/html';
import { createAppHeader, AppHeaderProps } from './app-header';
import { createButton } from '../button/button';
import { createFilterPill } from '../filter-pill/filter-pill';
import { createTabsGroup } from '../tabs-group/tabs-group';

const meta: Meta<AppHeaderProps> = {
  title: '1. Components / 3. Organisms / AppHeader',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Tier 3 — Composite Layout Component**

AppHeader defines the top-of-page header region for LFX One pages. It provides workflow-optimized layout for page title, optional description, optional metadata, and optional actions area.

### Visual Intent

**AppHeader is optimized for workflow pages, not marketing pages:**

- ✅ **Optical alignment** — Title and action align at top edge
- ✅ **Workflow handoff** — Minimal vertical padding for clean content flow
- ✅ **Production default** — Dense mode is the primary mode for app pages
- ✅ **Not a banner** — Header feels part of page flow, not decorative

**Result:** Headers read as part of the workflow, not decorative elements floating above content.

### Spacing Strategy

**Default Mode:**
- Top padding: \`12px\` (reduced from 16px for workflow feel)
- Bottom padding: \`8px\` (minimal for clean handoff)

**Dense Mode (PRODUCTION DEFAULT):**
- Top padding: \`8px\` (tight handoff for immediate content)
- Bottom padding: \`6px\` (minimal separation)

Dense mode is optimized for Table Page, Votes, Surveys, and similar workflow pages where the header hands off directly into DataTable or content.

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
| Workflow-optimized vertical padding | Typography tokens (reuses existing) |
| Optical alignment of title + action | Styling or behavior of buttons, filters, tabs |
| Layout of title/description stack | Routing or navigation logic |
| Layout of actions slot (right-aligned) | State management or data fetching |
| Layout of meta slot (left-aligned) | Hover, selected, or disabled states |

### Production Usage

**For workflow pages (Table Page, Votes, Surveys):**
\`\`\`typescript
createAppHeader({
  title: "Votes",
  description: "Make decisions with your project groups.",
  actions: createButton({ children: "Create Vote", variant: "primary" }),
  dense: true // RECOMMENDED for workflow pages
})
\`\`\`

**For overview pages (Dashboard):**
\`\`\`typescript
createAppHeader({
  title: "Dashboard",
  description: "Overview of your project activity",
  dense: false // Standard spacing for overview content
})
\`\`\`

### Typography Bindings

AppHeader reuses existing typography tokens:
- **Title:** \`--ui-text-page-title-*\` (24px, semibold, primary color)
- **Description:** \`--ui-text-body-secondary-*\` (14px, medium, secondary color)
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
      description: 'Show bottom divider border (rarely used)',
    },
    dense: {
      control: 'boolean',
      description: 'Dense spacing mode (RECOMMENDED for workflow pages like Table Page, Votes, Surveys)',
    },
  },
  render: (args) => {
    return createAppHeader(args);
  },
};

export default meta;
type Story = StoryObj<AppHeaderProps>;

/**
 * PRODUCTION DEFAULT — Workflow page header
 * 
 * Dense mode with title, description, and primary action.
 * This is the recommended configuration for Table Page, Votes, Surveys,
 * and similar workflow pages.
 */
export const WorkflowPage: Story = {
  args: {
    title: 'Votes',
    description: 'Make decisions with your project groups.',
    dense: true, // RECOMMENDED for workflow pages
    actions: createButton({
      children: 'Create Vote',
      variant: 'primary',
    }),
  },
};

/**
 * Overview page header (Dashboard, Settings)
 * 
 * Standard spacing for overview pages that don't hand off
 * immediately into tables or dense content.
 */
export const OverviewPage: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your project activity and metrics',
    dense: false,
  },
};

/**
 * Workflow page with multiple actions
 * 
 * Primary and secondary actions aligned optically with title.
 */
export const MultipleActions: Story = {
  args: {
    title: 'Projects',
    description: 'Manage your open source projects and contributors',
    dense: true,
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      
      const secondaryButton = createButton({
        children: 'Export',
        variant: 'secondary',
      });
      
      const primaryButton = createButton({
        children: 'New Project',
        variant: 'primary',
      });
      
      container.appendChild(secondaryButton);
      container.appendChild(primaryButton);
      return container;
    })(),
  },
};

/**
 * Title only (minimal configuration)
 * 
 * For simple pages without description or actions.
 */
export const TitleOnly: Story = {
  args: {
    title: 'Settings',
    dense: true,
  },
};
