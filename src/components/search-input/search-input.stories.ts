import type { Meta, StoryObj } from '@storybook/html';
import { createSearchInput, type SearchInputProps } from './search-input';

const meta: Meta<SearchInputProps> = {
  title: 'Components/SearchInput',
  tags: ['autodocs'],
  render: (args) => createSearchInput(args),
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show search icon',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
SearchInput component implementing the LFX One design token contract.

## Token Bindings

### Colors
- **Background**: \`color.white\`
- **Border (default)**: \`neutral.neutral-200\`
- **Border (focus)**: \`color.interactive.primary.background\`
- **Border (disabled)**: \`neutral.neutral-300\`
- **Text**: \`color.text.primary\`
- **Placeholder**: \`color.text.secondary\`
- **Disabled text/placeholder/icon**: \`color.text.disabled\`

### Typography
- \`font-family\` → \`font-family\` (primitives)
- \`font-size\` → \`text-sm\`
- \`font-weight\` → \`font-normal\`
- \`line-height\` → \`leading-text-sm\`

### Spacing
- Padding: \`spacing-8\` vertical, \`spacing-12\` horizontal
- Gap: \`spacing-8\`

### Border
- Radius: \`rounded-lg\`
- Width: \`button-stroke\` (1px)

### Icons
- Size derives from font-size (1em)
- Color inherits from text color
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<SearchInputProps>;

/**
 * Default search input state.
 */
export const Default: Story = {
  args: {
    placeholder: 'Search...',
    disabled: false,
    showIcon: false,
  },
};

/**
 * Focus state - click into the input to see focus styling.
 * 
 * Border color changes to `color.interactive.primary.background`.
 */
export const Focus: Story = {
  args: {
    placeholder: 'Click to focus...',
    disabled: false,
    showIcon: false,
  },
  parameters: {
    pseudo: { focusWithin: true },
  },
};

/**
 * Disabled state.
 * 
 * Uses:
 * - Border: `neutral.neutral-300`
 * - Text/placeholder/icon: `color.text.disabled`
 * - No focus styles
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Search...',
    disabled: true,
    showIcon: false,
  },
};

/**
 * Search input with icon.
 * 
 * Icon inherits text color and size derives from font-size.
 */
export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    disabled: false,
    showIcon: true,
  },
};
