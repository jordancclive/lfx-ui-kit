import type { Meta, StoryObj } from '@storybook/html';
import { createTabsGroup, type TabsGroupProps } from './tabs-group';

const sampleTabs = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
  { id: 'archived', label: 'Archived' },
];

const manyTabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Analytics' },
  { id: 'tab3', label: 'Reports' },
  { id: 'tab4', label: 'Notifications' },
  { id: 'tab5', label: 'Settings' },
  { id: 'tab6', label: 'Integrations' },
  { id: 'tab7', label: 'Billing' },
  { id: 'tab8', label: 'Team' },
];

const starIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L9.79611 5.52786L13.6085 6.11114L10.8043 8.97214L11.5922 12.8889L8 11.0279L4.40783 12.8889L5.19577 8.97214L2.39155 6.11114L6.20389 5.52786L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`;

const tabsWithIcons = [
  { id: 'favorites', label: 'Favorites', icon: starIcon },
  { id: 'recent', label: 'Recent' },
  { id: 'shared', label: 'Shared' },
];

const meta: Meta<TabsGroupProps> = {
  title: '1. Components / 3. Organisms / TabsGroup',
  tags: ['autodocs'],
  render: (args) => createTabsGroup(args),
  argTypes: {
    selectedId: {
      control: 'text',
      description: 'ID of the currently selected tab',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant - propagated to all TabItem children',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - propagated to all TabItem children',
    },
    withBackground: {
      control: 'boolean',
      description: 'Show neutral surface background (pill-style group)',
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent wrapping',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
TabsGroup component - layout and state coordinator only.

## Responsibilities
- Render TabItem children
- Pass \`selected=true\` to the active tab
- Pass \`disabled=true\` to tabs when group is disabled
- Support size propagation: \`"default"\` | \`"small"\`
- Support wrapping via CSS

## NOT Responsible For
- Visual styles (colors, borders, text styles) - owned by TabItem
- Color tokens - no \`color.tabs.item.*\` references

## Layout Tokens
- Gap: \`spacing-4\`
- Background (with-background variant): \`neutral-100\`
- Padding (with-background variant): \`spacing-4\`
- Border radius (with-background variant): \`rounded-xl\`

## State Propagation
- \`selectedId\` → \`selected=true\` on matching TabItem
- \`disabled\` → \`disabled=true\` on all TabItem children
- \`size\` → \`size\` prop on all TabItem children
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TabsGroupProps>;

/**
 * Default tabs group with first tab selected.
 */
export const Default: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: false,
    withBackground: false,
  },
};

/**
 * Tabs group with background (pill-style).
 */
export const WithBackground: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'default',
    disabled: false,
    withBackground: true,
  },
};

/**
 * Wrapped tabs group - tabs wrap to next line when container is narrow.
 * Resize the viewport to see wrapping behavior.
 */
export const Wrapped: Story = {
  args: {
    tabs: manyTabs,
    selectedId: 'tab1',
    size: 'default',
    disabled: false,
    withBackground: false,
  },
  decorators: [
    (story) => {
      const container = document.createElement('div');
      container.style.maxWidth = '400px';
      container.appendChild(story());
      return container;
    },
  ],
};

/**
 * Small size variant - size is propagated to all TabItem children.
 */
export const Small: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'completed',
    size: 'small',
    disabled: false,
    withBackground: false,
  },
};

/**
 * Small size with background.
 */
export const SmallWithBackground: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'small',
    disabled: false,
    withBackground: true,
  },
};

/**
 * Disabled tabs group - disabled state is propagated to all TabItem children.
 */
export const Disabled: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: true,
    withBackground: false,
  },
};

/**
 * Tabs with icons.
 */
export const WithIcons: Story = {
  args: {
    tabs: tabsWithIcons,
    selectedId: 'favorites',
    size: 'default',
    disabled: false,
    withBackground: false,
  },
};

/**
 * Interactive demo - click tabs to see selection change.
 * Note: In Storybook, state doesn't persist between renders.
 * In a real app, you would manage selectedId in state.
 */
export const Interactive: Story = {
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: false,
    withBackground: true,
  },
  render: (args) => {
    let currentSelected = args.selectedId || 'all';
    
    const render = () => {
      return createTabsGroup({
        ...args,
        selectedId: currentSelected,
        onSelect: (id) => {
          currentSelected = id;
          // In Storybook, we can't re-render easily
          // This demonstrates the callback works
          console.log('Selected tab:', id);
        },
      });
    };
    
    return render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Click tabs and check the console to see selection callback. In a real app, you would update state and re-render.',
      },
    },
  },
};
