import type { Meta, StoryObj } from '@storybook/html';
import { createTableRow, type TableRowProps } from './table-row';

/**
 * Helper to create sample cell content
 * TableRow does NOT own cell styling - this is just for demo purposes
 */
const createSampleCells = (): HTMLElement[] => {
  const cells = [
    { text: 'John Doe', width: '150px' },
    { text: 'john@example.com', width: '200px' },
    { text: 'Active', width: '100px' },
  ];
  
  return cells.map(({ text, width }) => {
    const cell = document.createElement('div');
    cell.textContent = text;
    cell.style.width = width;
    cell.style.flexShrink = '0';
    return cell;
  });
};

const meta: Meta<TableRowProps> = {
  title: '1. Components / 2. Level 2 / TableRow',
  tags: ['autodocs'],
  render: (args) => createTableRow({ ...args, children: createSampleCells() }),
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - overrides all other states',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether row is clickable (shows pointer cursor, enables hover)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
TableRow component implementing the LFX One design system contract.

**Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable, hoverable row used in tables and lists.

## Non-Goals

- Does not render cell content
- Does not own cell typography
- Does not manage table layout
- Does not define or constrain column structure

## Token Bindings

### Background
- **Default**: \`color.table.row.background.default\`
- **Hover**: \`color.table.row.background.hover\`
- **Selected**: \`color.table.row.background.selected\`
- **Disabled**: \`color.table.row.background.disabled\`

### Border
- Bottom divider: \`color.table.row.border\`
- Border width: \`button-stroke\`

### Layout
- Padding: \`spacing-12\` vertical, \`spacing-16\` horizontal

## State Precedence

1. \`disabled\` (highest) — overrides all
2. \`selected\` — overrides hover
3. \`hover\` — applies only when not selected or disabled
4. \`default\` (lowest)

## Behavior

- Applies cursor pointer when clickable
- Does not modify child styles
- Passes no visual props to children
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TableRowProps>;

/**
 * Default table row state.
 * 
 * Uses:
 * - Background: `color.table.row.background.default`
 * - Border: `color.table.row.border`
 */
export const Default: Story = {
  args: {
    selected: false,
    disabled: false,
    clickable: false,
  },
};

/**
 * Hover state - interact with the row to see hover styling.
 * 
 * Uses:
 * - Background: `color.table.row.background.hover`
 * 
 * Note: Hover only applies when clickable and not selected or disabled.
 */
export const Hover: Story = {
  args: {
    selected: false,
    disabled: false,
    clickable: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

/**
 * Selected state.
 * 
 * Uses:
 * - Background: `color.table.row.background.selected`
 * 
 * Note: Selected overrides hover.
 */
export const Selected: Story = {
  args: {
    selected: true,
    disabled: false,
    clickable: true,
  },
};

/**
 * Disabled state.
 * 
 * Uses:
 * - Background: `color.table.row.background.disabled`
 * - Cursor: not-allowed
 * 
 * Note: Disabled overrides all other states (including selected).
 */
export const Disabled: Story = {
  args: {
    selected: false,
    disabled: true,
    clickable: false,
  },
};

/**
 * Clickable row - shows pointer cursor and enables hover.
 * Click the row and check the console.
 */
export const Clickable: Story = {
  args: {
    selected: false,
    disabled: false,
    clickable: true,
  },
  render: (args) => {
    return createTableRow({
      ...args,
      children: createSampleCells(),
      onClick: () => console.log('Row clicked'),
    });
  },
};

/**
 * Static (non-clickable) row - no pointer cursor, no hover effect.
 */
export const Static: Story = {
  args: {
    selected: false,
    disabled: false,
    clickable: false,
  },
};

/**
 * Multiple rows demo - shows how rows stack with dividers.
 */
export const MultipleRows: Story = {
  render: () => {
    const container = document.createElement('div');
    
    const rows = [
      { name: 'Alice Smith', email: 'alice@example.com', status: 'Active', selected: false },
      { name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', selected: true },
      { name: 'Carol White', email: 'carol@example.com', status: 'Inactive', selected: false },
      { name: 'David Brown', email: 'david@example.com', status: 'Disabled', selected: false, disabled: true },
    ];
    
    rows.forEach(({ name, email, status, selected, disabled }) => {
      const cells = [
        { text: name, width: '150px' },
        { text: email, width: '200px' },
        { text: status, width: '100px' },
      ].map(({ text, width }) => {
        const cell = document.createElement('div');
        cell.textContent = text;
        cell.style.width = width;
        cell.style.flexShrink = '0';
        return cell;
      });
      
      const row = createTableRow({
        children: cells,
        selected,
        disabled,
        clickable: !disabled,
        onClick: () => console.log(`Clicked: ${name}`),
      });
      
      container.appendChild(row);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates multiple rows with different states stacked together.',
      },
    },
  },
};
