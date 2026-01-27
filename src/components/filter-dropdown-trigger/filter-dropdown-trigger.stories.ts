import type { Meta, StoryObj } from '@storybook/html';
import { createFilterDropdownTrigger, type FilterDropdownTriggerProps } from './filter-dropdown-trigger';

const meta: Meta<FilterDropdownTriggerProps> = {
  title: '1. Components / 2. Level 2 / FilterDropdownTrigger',
  tags: ['autodocs'],
  render: (args) => createFilterDropdownTrigger(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'Trigger label text',
    },
    open: {
      control: 'boolean',
      description: 'Open state (chevron rotates, focus border applied)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
FilterDropdownTrigger component implementing the LFX One design token contract.

This component represents only the closed dropdown trigger.
It does not include dropdown menu items, popovers, keyboard navigation, or portals.

## Token Bindings

### Colors
- **Background**: \`color.white\`
- **Border (default)**: \`neutral.neutral-200\`
- **Border (focus/open)**: \`color.interactive.primary.background\`
- **Border (disabled)**: \`neutral.neutral-300\`
- **Text (default)**: \`color.text.primary\`
- **Text (disabled)**: \`color.text.disabled\`
- **Chevron**: inherits text color

### Typography (same as SearchInput)
- \`font-family\` → \`font-family\` (primitives)
- \`font-size\` → \`text-sm\`
- \`font-weight\` → \`font-normal\`
- \`line-height\` → \`leading-text-sm\`

### Layout (same as SearchInput)
- Padding: \`spacing-8\` vertical, \`spacing-12\` horizontal
- Gap: \`spacing-8\`
- Radius: \`rounded-lg\`
- Border width: \`button-stroke\` (1px)

### Icons
- Chevron size derives from font-size (1em)
- Chevron color inherits from text color
- Chevron rotates 180° when open

### States
- **Default**: White background, neutral border, chevron down
- **Focus/Open**: Accent border, chevron up (rotated 180°)
- **Disabled**: Muted border/text, no focus or open styling
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<FilterDropdownTriggerProps>;

/**
 * Default dropdown trigger state.
 * 
 * Uses:
 * - Background: `color.white`
 * - Border: `neutral.neutral-200`
 * - Text: `color.text.primary`
 * - Chevron points down
 */
export const Default: Story = {
  args: {
    label: 'Select option',
    open: false,
    disabled: false,
  },
};

/**
 * Focus / Open state.
 * 
 * Focus and open share the same visuals:
 * - Border: `color.interactive.primary.background`
 * - Chevron rotates 180° (points up)
 */
export const Focus: Story = {
  args: {
    label: 'Select option',
    open: true,
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
 * - Chevron: `color.text.disabled`
 * - No focus or open styling
 */
export const Disabled: Story = {
  args: {
    label: 'Select option',
    open: false,
    disabled: true,
  },
};
