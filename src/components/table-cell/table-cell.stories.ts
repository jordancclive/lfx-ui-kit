import type { Meta, StoryObj } from '@storybook/html';
import { createTableCell, TableCellProps } from './table-cell';

const meta: Meta<TableCellProps> = {
  title: '1. Components / Level 2 / TableCell',
  tags: ['autodocs'],
  render: (args) => createTableCell(args),
  parameters: {
    docs: {
      description: {
        component: `
## TableCell

**Tier 2 — Structural Content Component**

TableCell represents a single cell within a table row. It owns text presentation, alignment, and optional leading/trailing content.

### Key Characteristics

- **Stateless** — TableCell has no internal state
- **Visual state comes from parent** — Background, borders, and row-level interactions are owned by TableRow
- **Typography and alignment only** — TableCell manages text color, alignment, and spacing

### Non-Goals

- Does NOT handle row background, hover, selection, or click behavior
- Does NOT manage table layout or column sizing
- Does NOT define borders between rows
- Does NOT apply hover, selected, or disabled styles (except text color inheritance)
- Does NOT manage sorting or header behavior

### Token Bindings

| Property | Token |
|----------|-------|
| Text (primary) | \`--color-table-cell-text-primary\` |
| Text (secondary) | \`--color-table-cell-text-secondary\` |
| Text (muted) | \`--color-table-cell-text-muted\` |
| Text (disabled) | \`--color-table-cell-text-disabled\` |
| Padding | \`--spacing-sm\`, \`--spacing-md\` |
| Typography | \`--font-button-family\`, \`--font-button-size\`, \`--font-button-weight\`, \`--font-button-line-height\` |

### Content Types

- **Primary** — Default text color, standard content
- **Secondary** — Subdued text color, supporting information
- **Muted** — Lowest contrast, de-emphasized content
- **Numeric** — Right-aligned, same typography as primary
        `,
      },
    },
  },
  argTypes: {
    contentType: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'numeric'],
      description: 'Text presentation style',
    },
    align: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Text alignment',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the parent row is disabled (affects text color only)',
    },
  },
};

export default meta;
type Story = StoryObj<TableCellProps>;

// ========================================
// Content Types
// ========================================

export const Primary: Story = {
  args: {
    contentType: 'primary',
    children: 'Primary cell content',
  },
};

export const Secondary: Story = {
  args: {
    contentType: 'secondary',
    children: 'Secondary cell content',
  },
};

export const Muted: Story = {
  args: {
    contentType: 'muted',
    children: 'Muted cell content',
  },
};

export const Numeric: Story = {
  args: {
    contentType: 'numeric',
    children: '$1,234.56',
  },
  parameters: {
    docs: {
      description: {
        story: 'Numeric content type is automatically right-aligned.',
      },
    },
  },
};

// ========================================
// Sizes
// ========================================

export const Small: Story = {
  args: {
    contentType: 'primary',
    size: 'small',
    children: 'Small cell content',
  },
};

// ========================================
// Alignment
// ========================================

export const RightAligned: Story = {
  args: {
    contentType: 'primary',
    align: 'right',
    children: 'Right-aligned content',
  },
};

// ========================================
// Disabled State
// ========================================

export const Disabled: Story = {
  args: {
    contentType: 'primary',
    disabled: true,
    children: 'Disabled cell content',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state affects text color only. This state is inherited from the parent TableRow.',
      },
    },
  },
};

// ========================================
// With Composed Content
// ========================================

export const WithAvatar: Story = {
  render: () => {
    // Create avatar placeholder
    const avatar = document.createElement('div');
    avatar.style.cssText = `
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--neutral-300);
      flex-shrink: 0;
    `;
    
    const text = document.createElement('span');
    text.textContent = 'John Doe';
    
    return createTableCell({
      contentType: 'primary',
      children: [avatar, text],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'TableCell can contain composed content like avatars. The cell provides layout (flexbox with gap) but does not style the avatar itself.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => {
    // Create icon placeholder
    const icon = document.createElement('span');
    icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`;
    icon.style.cssText = `
      display: flex;
      align-items: center;
      flex-shrink: 0;
    `;
    
    const text = document.createElement('span');
    text.textContent = 'Item with icon';
    
    return createTableCell({
      contentType: 'primary',
      children: [icon, text],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons inherit the cell text color through currentColor.',
      },
    },
  },
};

// ========================================
// All Content Types Comparison
// ========================================

export const AllContentTypes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    
    const types: Array<'primary' | 'secondary' | 'muted' | 'numeric'> = [
      'primary',
      'secondary',
      'muted',
      'numeric',
    ];
    
    types.forEach(type => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      
      const label = document.createElement('span');
      label.style.cssText = 'width: 80px; font-size: 12px; color: var(--neutral-500);';
      label.textContent = type;
      
      const cell = createTableCell({
        contentType: type,
        children: type === 'numeric' ? '$1,234.56' : `${type.charAt(0).toUpperCase() + type.slice(1)} content`,
      });
      cell.style.cssText = 'flex: 1; border: 1px dashed var(--neutral-200);';
      
      wrapper.appendChild(label);
      wrapper.appendChild(cell);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all content types showing their visual hierarchy.',
      },
    },
  },
};
