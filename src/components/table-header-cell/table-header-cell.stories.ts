import type { Meta, StoryObj } from '@storybook/html';
import { createTableHeaderCell, TableHeaderCellProps } from './table-header-cell';

const meta: Meta<TableHeaderCellProps> = {
  title: '1. Components / 2. Molecules / TableHeaderCell',
  tags: ['autodocs'],
  render: (args) => createTableHeaderCell(args),
  parameters: {
    docs: {
      description: {
        component: `
## TableHeaderCell

**Tier 2 — Structural + Visual Indicator Component**

TableHeaderCell represents a single header cell in a table. It owns header text presentation and optional visual indicators (tooltip icon, sort indicator).

### Key Characteristics

- **Mostly stateless** — Visual state is derived from props only
- **Visual indicators only** — Sort and tooltip icons are purely visual
- **Does NOT perform sorting** — Sorting logic belongs to parent table/controller

### Non-Goals

- Does NOT manage sorting logic or callbacks
- Does NOT manage column widths or table layout
- Does NOT manage row or table state
- Does NOT apply row hover/selection styles
- Does NOT apply backgrounds to rows or tables
- Does NOT implement tooltip behavior (visual indicator only)

### Token Bindings

| Property | Token |
|----------|-------|
| Text (default) | \`--color-table-header-text-default\` |
| Text (muted) | \`--color-table-header-text-muted\` |
| Text (disabled) | \`--color-table-header-text-disabled\` |
| Icon (default) | \`--color-table-header-icon\` |
| Icon (active) | \`--color-table-header-icon-active\` |
| Icon (disabled) | \`--color-table-header-icon-disabled\` |
| Padding | \`--spacing-sm\`, \`--spacing-md\` |
| Typography | \`--font-button-family\`, \`--text-xs\`, \`--font-semibold\` |

### Sort Direction

The \`sortDirection\` prop controls the visual sort indicator:
- \`null\` — No sort indicator shown
- \`'asc'\` — Arrow pointing up (ascending)
- \`'desc'\` — Arrow pointing down (descending)

**Important:** This is purely visual. The component does NOT handle click events or sorting logic.
        `,
      },
    },
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Text alignment',
    },
    sortDirection: {
      control: 'select',
      options: [null, 'asc', 'desc'],
      description: 'Visual sort indicator direction (null = no indicator)',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip icon (visual only)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<TableHeaderCellProps>;

// ========================================
// Basic States
// ========================================

export const Default: Story = {
  args: {
    children: 'Column Header',
  },
};

export const RightAligned: Story = {
  args: {
    children: 'Amount',
    align: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-aligned header, typically used for numeric columns.',
      },
    },
  },
};

// ========================================
// With Tooltip
// ========================================

export const WithTooltip: Story = {
  args: {
    children: 'Status',
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a tooltip icon. The icon is purely visual — tooltip behavior is not implemented by this component.',
      },
    },
  },
};

// ========================================
// Sort Indicators
// ========================================

export const SortAsc: Story = {
  args: {
    children: 'Name',
    sortDirection: 'asc',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing ascending sort indicator. The arrow points up.',
      },
    },
  },
};

export const SortDesc: Story = {
  args: {
    children: 'Name',
    sortDirection: 'desc',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing descending sort indicator. The arrow points down.',
      },
    },
  },
};

// ========================================
// Disabled State
// ========================================

export const Disabled: Story = {
  args: {
    children: 'Column Header',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state affects text and icon colors.',
      },
    },
  },
};

export const DisabledWithSort: Story = {
  args: {
    children: 'Name',
    sortDirection: 'asc',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled header with sort indicator shows muted colors.',
      },
    },
  },
};

// ========================================
// Combined Features
// ========================================

export const WithTooltipAndSort: Story = {
  args: {
    children: 'Priority',
    showTooltip: true,
    sortDirection: 'desc',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with both tooltip and sort indicators.',
      },
    },
  },
};

// ========================================
// All Variants Comparison
// ========================================

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    
    const variants: Array<{ label: string; props: TableHeaderCellProps }> = [
      { label: 'Default', props: { children: 'Column Header' } },
      { label: 'Right Aligned', props: { children: 'Amount', align: 'right' } },
      { label: 'With Tooltip', props: { children: 'Status', showTooltip: true } },
      { label: 'Sort Ascending', props: { children: 'Name', sortDirection: 'asc' } },
      { label: 'Sort Descending', props: { children: 'Date', sortDirection: 'desc' } },
      { label: 'Tooltip + Sort', props: { children: 'Priority', showTooltip: true, sortDirection: 'asc' } },
      { label: 'Disabled', props: { children: 'Column', disabled: true } },
      { label: 'Disabled + Sort', props: { children: 'Name', sortDirection: 'desc', disabled: true } },
    ];
    
    variants.forEach(({ label, props }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      
      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'width: 120px; font-size: 12px; color: var(--neutral-500);';
      labelEl.textContent = label;
      
      const cell = createTableHeaderCell(props);
      cell.style.cssText = 'flex: 1; border: 1px dashed var(--neutral-200); max-width: 200px;';
      
      wrapper.appendChild(labelEl);
      wrapper.appendChild(cell);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all header cell variants.',
      },
    },
  },
};

// ========================================
// Table Context Example
// ========================================

export const InTableContext: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 0;
      background: var(--neutral-100);
      border-bottom: 1px solid var(--neutral-200);
    `;
    
    const headers = [
      { children: 'Name', sortDirection: 'asc' as const },
      { children: 'Status', showTooltip: true },
      { children: 'Date' },
      { children: 'Amount', align: 'right' as const },
    ];
    
    headers.forEach((props, index) => {
      const cell = createTableHeaderCell(props);
      cell.style.cssText = `
        flex: ${index === 0 ? 2 : 1};
        border-right: ${index < headers.length - 1 ? '1px solid var(--neutral-200)' : 'none'};
      `;
      container.appendChild(cell);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple header cells in a table-like context. Note: TableHeaderCell does not manage table layout — this is for visual demonstration only.',
      },
    },
  },
};
