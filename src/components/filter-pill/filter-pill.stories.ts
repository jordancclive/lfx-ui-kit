import type { Meta, StoryObj } from '@storybook/html';
import { createFilterPill, type FilterPillProps } from './filter-pill';

/**
 * Sample icon SVG - uses currentColor to inherit text color
 */
const tagIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4.5C2 3.11929 3.11929 2 4.5 2H6.17157C6.83563 2 7.47251 2.26339 7.94281 2.73223L13.2071 7.93934C14.0976 8.81579 14.0976 10.2426 13.2071 11.1213L10.1213 14.2071C9.24264 15.0976 7.81579 15.0976 6.93934 14.2071L2.73223 9.94281C2.26339 9.47251 2 8.83563 2 8.17157V4.5Z" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="5.5" cy="5.5" r="1" fill="currentColor"/>
</svg>`;

const meta: Meta<FilterPillProps> = {
  title: '1. Components / Level 1 / FilterPill',
  tags: ['autodocs'],
  render: (args) => createFilterPill(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'Pill label text',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
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
FilterPill component implementing the LFX One design token contract.

## Token Bindings

### Colors
- **Background (default)**: \`color.white\`
- **Background (hover)**: \`accent.accent-100\`
- **Background (selected)**: \`accent.accent-500\`
- **Border (default/hover)**: \`neutral.neutral-200\`
- **Border (selected)**: \`accent.accent-500\`
- **Border (disabled)**: \`neutral.neutral-300\`
- **Text (default/hover)**: \`color.text.primary\`
- **Text (selected)**: \`color.white\`
- **Text (disabled)**: \`color.text.disabled\`

### Typography
- \`font-family\` → \`font.button.family\`
- \`font-size\` → \`font.button.size\`
- \`font-weight\` → \`font.button.weight\`
- \`line-height\` → \`font.button.line-height\`

### Layout
- Radius: \`rounded-full\`
- Padding: reuses button padding tokens
- Border width: \`button-stroke\` (1px)

### Icons
- Size derives from font-size (1em)
- Color inherits from text color
- Hidden in disabled state

### State Precedence
- Selected state persists (hover does NOT override it)
- Disabled overrides all other states
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<FilterPillProps>;

/**
 * Default filter pill state.
 * 
 * Uses:
 * - Background: `color.white`
 * - Border: `neutral.neutral-200`
 * - Text: `color.text.primary`
 */
export const Default: Story = {
  args: {
    label: 'Filter',
    selected: false,
    disabled: false,
  },
};

/**
 * Hover state - interact with the pill to see hover styling.
 * 
 * Uses:
 * - Background: `accent.accent-100`
 * - Border: `neutral.neutral-200` (unchanged)
 * - Text: `color.text.primary`
 */
export const Hover: Story = {
  args: {
    label: 'Hover Me',
    selected: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

/**
 * Selected state.
 * 
 * Uses:
 * - Background: `accent.accent-500`
 * - Border: `accent.accent-500`
 * - Text: `color.white`
 * 
 * Note: Hover does NOT override selected state.
 */
export const Selected: Story = {
  args: {
    label: 'Active',
    selected: true,
    disabled: false,
  },
};

/**
 * Disabled state.
 * 
 * Uses:
 * - Background: `color.white`
 * - Border: `neutral.neutral-300`
 * - Text: `color.text.disabled`
 * - No hover or selected styles
 * - Icons hidden
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    selected: false,
    disabled: true,
  },
};

/**
 * Filter pill with icon.
 * 
 * Icon inherits text color and size derives from font-size.
 * Icon is hidden in disabled state.
 */
export const WithIcon: Story = {
  args: {
    label: 'Category',
    selected: false,
    disabled: false,
    icon: tagIcon,
  },
};
