import type { Meta, StoryObj } from '@storybook/html';
import { createSearchInput, type SearchInputProps } from './search-input';

const meta: Meta<SearchInputProps> = {
  title: '1. Components / 1. Atoms / 3. SearchInput',
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
    variant: {
      control: 'select',
      options: ['form', 'toolbar'],
      description: 'Visual variant - controls shape and density',
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

/**
 * Toolbar variant for use in filter bars and table headers.
 * 
 * Visual traits:
 * - Rounded corners (rounded-lg) matching other toolbar controls
 * - Slightly reduced height for compact toolbar contexts
 * - Lighter visual weight
 * 
 * Use in: table filter bars, list headers, Groups page, Votes, Surveys.
 */
export const Toolbar: Story = {
  args: {
    placeholder: 'Search Groups…',
    disabled: false,
    showIcon: true,
    variant: 'toolbar',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Toolbar Variant**

Use the toolbar variant in table filter bars and list headers where a compact,
lightweight search control is needed.

This variant:
- Uses rounded corners (rounded-lg) to visually match FilterDropdownTrigger and other toolbar controls
- Has reduced height compared to form variant
- Provides lighter visual weight for toolbar contexts

**When to use:**
- Table filter rows (e.g., Groups, Votes, Surveys)
- List headers with search functionality
- Any toolbar or control bar context

**When NOT to use:**
- Form data entry contexts (use form variant)
- Settings or dialog inputs (use form variant)
        `,
      },
    },
  },
};
