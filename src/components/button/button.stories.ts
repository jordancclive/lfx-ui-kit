import type { Meta, StoryObj } from '@storybook/html';
import { createButton, type ButtonProps } from './button';

/**
 * Sample icon SVG - uses currentColor to inherit button text color
 */
const plusIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const meta: Meta<ButtonProps> = {
  title: '1. Components / Level 1 / Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'select',
      options: ['primary'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - only applies when loading is false',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state - takes precedence over disabled',
    },
    iconLeft: {
      control: 'text',
      description: 'Left icon (SVG string)',
    },
    iconRight: {
      control: 'text',
      description: 'Right icon (SVG string)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Primary Button component implementing the LFX One design token contract.

## Token Bindings

### Typography
- \`font-family\` → \`font.button.family\`
- \`font-size\` → \`font.button.size\`
- \`font-weight\` → \`font.button.weight\`
- \`line-height\` → \`font.button.line-height\`

### Visual States
- **Default**: background → \`color.interactive.primary.background\`, text → \`color.interactive.primary.text\`
- **Hover**: background → \`color.interactive.primary.background-hover\`
- **Disabled**: background → \`color.interactive.primary.background-disabled\`, text → \`color.interactive.primary.text-disabled\`
- **Loading**: background → \`color.interactive.primary.background\`, opacity → \`state.loading.opacity\`

### State Precedence
If \`loading === true\`, loading visuals apply even if \`disabled === true\`.
Disabled visuals only apply when \`loading === false\`.

### Icons & Spinner
- Icons inherit color from \`color.interactive.primary.text\`
- Spinner color → \`color.spinner.on-interactive\`
- Icon/spinner sizes derive from font.button.size
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

/**
 * Default primary button state.
 * 
 * Uses:
 * - background: `color.interactive.primary.background`
 * - text: `color.interactive.primary.text`
 */
export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: false,
    loading: false,
  },
};

/**
 * Hover state - interact with the button to see hover styling.
 * 
 * Uses:
 * - background: `color.interactive.primary.background-hover`
 */
export const Hover: Story = {
  args: {
    label: 'Hover Me',
    variant: 'primary',
    size: 'default',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

/**
 * Loading state with spinner replacing the label.
 * 
 * Uses:
 * - background: `color.interactive.primary.background` (NOT disabled background)
 * - opacity: `state.loading.opacity`
 * - cursor: `state.loading.cursor`
 * - pointer-events: `state.loading.pointer-events`
 * - spinner color: `color.spinner.on-interactive`
 * 
 * Note: No icons are shown during loading state.
 */
export const Loading: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    loading: true,
  },
};

/**
 * Disabled state - no spinner shown.
 * 
 * Uses:
 * - background: `color.interactive.primary.background-disabled`
 * - text: `color.interactive.primary.text-disabled`
 */
export const Disabled: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: true,
  },
};

/**
 * Demonstrates state precedence: loading takes priority over disabled.
 * 
 * When both `loading` and `disabled` are true:
 * - Loading visuals are applied (NOT disabled styling)
 * - Background stays `color.interactive.primary.background`
 * - Spinner is shown
 */
export const LoadingOverridesDisabled: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    loading: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'When both `loading` and `disabled` are true, loading state takes precedence. The button uses the primary background (not disabled gray) and shows the spinner.',
      },
    },
  },
};

/**
 * Button with icon.
 * 
 * Icon inherits color from `color.interactive.primary.text`.
 * Icon size derives from font.button.size.
 */
export const WithIcon: Story = {
  args: {
    label: 'Add Item',
    variant: 'primary',
    size: 'default',
    iconLeft: plusIcon,
  },
};
