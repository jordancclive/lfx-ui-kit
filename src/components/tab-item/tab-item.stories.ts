import type { Meta, StoryObj } from '@storybook/html';
import { createTabItem, type TabItemProps } from './tab-item';

/**
 * Sample icon SVG - uses currentColor to inherit text color
 */
const starIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L9.79611 5.52786L13.6085 6.11114L10.8043 8.97214L11.5922 12.8889L8 11.0279L4.40783 12.8889L5.19577 8.97214L2.39155 6.11114L6.20389 5.52786L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`;

const meta: Meta<TabItemProps> = {
  title: '1. Components / 2. Molecules / 5. TabItem',
  tags: ['autodocs'],
  render: (args) => createTabItem(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'Tab label text',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - overrides all other states',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant',
    },
    icon: {
      control: 'text',
      description: 'Left icon (SVG string)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
TabItem component implementing the LFX One design token contract.

## Token Bindings

### Background
- **Default**: \`color.tabs.item.background.default\` (transparent)
- **Hover**: \`color.tabs.item.background.hover\`
- **Selected**: \`color.tabs.item.background.selected\`
- **Disabled**: \`color.tabs.item.background.disabled\` (transparent)

### Border
- **Default**: \`color.tabs.item.border.default\` (transparent)
- **Selected**: \`color.tabs.item.border.selected\`
- **Disabled**: \`color.tabs.item.border.disabled\` (transparent)

### Text
- **Default**: \`color.tabs.item.text.default\`
- **Hover**: \`color.tabs.item.text.hover\`
- **Selected**: \`color.tabs.item.text.selected\`
- **Disabled**: \`color.tabs.item.text.disabled\`

### Typography
- \`font-family\` → \`font.button.family\`
- \`font-size\` → \`font.button.size\` (default) / \`text-xs\` (small)
- \`font-weight\` → \`font.button.weight\`
- \`line-height\` → \`font.button.line-height\` (default) / \`leading-text-xs\` (small)

### Layout
- Radius: \`rounded-full\`
- Padding: reuses button padding tokens (default) / smaller padding (small)
- Border width: \`button-stroke\` (1px)

### Icons
- Size derives from font-size (1em)
- Color inherits from text color
- Hidden in disabled state

### State Precedence
- Disabled overrides all states (including selected)
- Selected overrides hover
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TabItemProps>;

/**
 * Default tab item state.
 * 
 * Uses:
 * - Background: \`color.tabs.item.background.default\` (transparent)
 * - Border: \`color.tabs.item.border.default\` (transparent)
 * - Text: \`color.tabs.item.text.default\`
 */
export const Default: Story = {
  args: {
    label: 'Tab',
    selected: false,
    disabled: false,
    size: 'default',
  },
};

/**
 * Hover state - interact with the tab to see hover styling.
 * 
 * Uses:
 * - Background: \`color.tabs.item.background.hover\`
 * - Text: \`color.tabs.item.text.hover\`
 */
export const Hover: Story = {
  args: {
    label: 'Hover Me',
    selected: false,
    disabled: false,
    size: 'default',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

/**
 * Selected state.
 * 
 * Uses:
 * - Background: \`color.tabs.item.background.selected\`
 * - Border: \`color.tabs.item.border.selected\`
 * - Text: \`color.tabs.item.text.selected\`
 * 
 * Note: Selected state overrides hover.
 */
export const Selected: Story = {
  args: {
    label: 'Active Tab',
    selected: true,
    disabled: false,
    size: 'default',
  },
};

/**
 * Disabled state.
 * 
 * Uses:
 * - Background: \`color.tabs.item.background.disabled\` (transparent)
 * - Border: \`color.tabs.item.border.disabled\` (transparent)
 * - Text: \`color.tabs.item.text.disabled\`
 * - No hover or selected styles
 * - Icons hidden
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    selected: false,
    disabled: true,
    size: 'default',
  },
};

/**
 * Small size variant - default state.
 */
export const SmallDefault: Story = {
  args: {
    label: 'Small Tab',
    selected: false,
    disabled: false,
    size: 'small',
  },
};

/**
 * Small size variant - selected state.
 */
export const SmallSelected: Story = {
  args: {
    label: 'Small Active',
    selected: true,
    disabled: false,
    size: 'small',
  },
};

/**
 * Small size variant - disabled state.
 */
export const SmallDisabled: Story = {
  args: {
    label: 'Small Disabled',
    selected: false,
    disabled: true,
    size: 'small',
  },
};

/**
 * Tab item with icon.
 * 
 * Icon inherits text color and size derives from font-size.
 * Icon is hidden in disabled state.
 */
export const WithIcon: Story = {
  args: {
    label: 'Favorites',
    selected: false,
    disabled: false,
    size: 'default',
    icon: starIcon,
  },
};

/**
 * Selected tab with icon.
 */
export const WithIconSelected: Story = {
  args: {
    label: 'Favorites',
    selected: true,
    disabled: false,
    size: 'default',
    icon: starIcon,
  },
};
