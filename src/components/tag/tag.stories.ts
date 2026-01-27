import type { Meta, StoryObj } from '@storybook/html';
import { createTag, type TagProps } from './tag';
import { createTableCell } from '../table-cell/table-cell';
import { createTableGrid, createTableHeader, createTableBody } from '../table-grid/table-grid';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createCard } from '../card/card';

const meta: Meta<TagProps> = {
  title: '1. Components / 1. Atoms / Tag',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Tag is a Tier 2 Pattern / Inline Visual Component.

## Purpose

Tag displays categorical information in a compact, non-interactive visual form.

## Key Characteristics

- **Visual only** — Tag has no click behavior or interaction
- **Stateless** — No hover, focus, selected, or disabled states
- **Intrinsic width** — Tag sizes to its content, never stretches
- **Categorical** — Used for Type, Category, or similar grouping labels
- **Semantic variants** — Visual variants for categorical meaning (info, success, warning, danger, discovery)

## Usage

Tag is used for categorical clarity in:
- Table cells (e.g., Type column in Groups table)
- Card headers or metadata rows
- List item secondary content
- Inline with text for labeling

## When NOT to Use

- **Do NOT use for interactive filtering** — Use FilterPill or Button instead
- **Do NOT use for status indication** — Use StatusIndicator or similar
- **Do NOT use for selection** — Tag is not selectable
- **Do NOT use for actions** — Tag is not clickable

## Variants

Tag supports semantic visual variants:
- \`default\` — Neutral categorical display
- \`info\` — Informational categorical data
- \`success\` — Positive categorical data
- \`warning\` — Cautionary categorical data
- \`danger\` — Critical categorical data
- \`discovery\` — New or highlighted categorical data

**Important:** Variants communicate semantic meaning only. They do NOT imply interaction or status.

## Token Bindings

- Surface: \`ui.tag.surface.background\` → \`ui.surface.subtle\`
- Border: \`ui.tag.surface.border\` → \`ui.surface.divider\`
- Typography: \`ui.tag.text.*\` → \`ui.text.label.*\`
- Variants: \`ui.tag.variant.*\` → Semantic color scales
- Radius: \`ui.tag.radius\` → \`rounded-sm\`
- Padding: \`ui.tag.padding-y/x\` → \`spacing-2\` / \`spacing-6\`

All tokens reference system-level UI roles, never primitives.
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag content (typically categorical text)',
    },
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger', 'discovery'],
      description: 'Semantic visual variant (visual only, no interaction)',
    },
  },
  render: (args) => createTag(args),
};

export default meta;
type Story = StoryObj<TagProps>;

/**
 * Default Tag with simple text content.
 * Tag uses intrinsic width and does not stretch.
 */
export const Default: Story = {
  args: {
    children: 'Working Group',
  },
};

/**
 * Info variant — Informational categorical data.
 * Visual only, no interaction or status semantics.
 */
export const Info: Story = {
  args: {
    children: 'Information',
    variant: 'info',
  },
};

/**
 * Success variant — Positive categorical data.
 * Visual only, no interaction or status semantics.
 */
export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

/**
 * Warning variant — Cautionary categorical data.
 * Visual only, no interaction or status semantics.
 */
export const Warning: Story = {
  args: {
    children: 'Review Required',
    variant: 'warning',
  },
};

/**
 * Danger variant — Critical categorical data.
 * Visual only, no interaction or status semantics.
 */
export const Danger: Story = {
  args: {
    children: 'Deprecated',
    variant: 'danger',
  },
};

/**
 * Discovery variant — New or highlighted categorical data.
 * Visual only, no interaction or status semantics.
 */
export const Discovery: Story = {
  args: {
    children: 'New Feature',
    variant: 'discovery',
  },
};

/**
 * Tag inside a table cell with variants.
 * Demonstrates Tag's primary use case for categorical data in tables,
 * showing multiple semantic variants in a tabular context.
 */
export const InsideTableCell: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Status' }),
      createTableHeaderCell({ children: 'Priority' }),
    ];

    const rows = [
      createTableRow({
        children: [
          createTableCell({ children: 'Security Audit', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'Completed', variant: 'success' }), contentType: 'secondary' }),
          createTableCell({ children: createTag({ children: 'Critical', variant: 'danger' }), contentType: 'secondary' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'UI Kit Update', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'In Progress', variant: 'info' }), contentType: 'secondary' }),
          createTableCell({ children: createTag({ children: 'High', variant: 'warning' }), contentType: 'secondary' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'New Feature Launch', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'Beta', variant: 'discovery' }), contentType: 'secondary' }),
          createTableCell({ children: createTag({ children: 'Medium', variant: 'default' }), contentType: 'secondary' }),
        ],
      }),
    ];

    return createCard({
      children: createTableGrid({
        columns: 3,
        children: [
          createTableHeader(headerCells),
          createTableBody(rows),
        ],
      }),
    });
  },
};

/**
 * Multiple Tags with mixed variants.
 * Demonstrates semantic variants used together.
 * Parent container controls spacing via flex gap.
 */
export const MultipleTags: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-8)';
    container.style.alignItems = 'center';
    container.style.padding = 'var(--spacing-16)';

    const tags = [
      { label: 'Open Source', variant: 'default' as const },
      { label: 'Active', variant: 'success' as const },
      { label: 'Beta', variant: 'discovery' as const },
      { label: 'Review Required', variant: 'warning' as const },
    ];
    
    tags.forEach(({ label, variant }) => {
      container.appendChild(createTag({ children: label, variant }));
    });

    return container;
  },
};

/**
 * Tags in Groups context — Type column categorical data.
 * This replaces the placeholder Tag helper from the Groups story.
 */
export const InGroupsContext: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Type' }),
      createTableHeaderCell({ children: 'Description' }),
    ];

    const groupTypes = [
      { name: 'Security Working Group', type: 'Working Group', description: 'Addresses security vulnerabilities' },
      { name: 'Technical Steering Committee', type: 'TSC', description: 'Guides technical direction' },
      { name: 'Cloud Native SIG', type: 'Special Interest', description: 'Focuses on cloud-native practices' },
      { name: 'Technical Oversight Committee', type: 'TOC', description: 'Oversees technical operations' },
    ];

    const rows = groupTypes.map(group =>
      createTableRow({
        children: [
          createTableCell({ children: group.name, contentType: 'primary' }),
          createTableCell({ children: createTag({ children: group.type }), contentType: 'secondary' }),
          createTableCell({ children: group.description, contentType: 'secondary' }),
        ],
        clickable: true,
      })
    );

    return createCard({
      children: createTableGrid({
        columns: 3,
        children: [
          createTableHeader(headerCells),
          createTableBody(rows),
        ],
      }),
    });
  },
};

/**
 * Inline with text content.
 * Demonstrates Tag's inline layout behavior.
 */
export const InlineWithText: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-16)';
    container.style.fontFamily = 'var(--ui-text-body-primary-font-family)';
    container.style.fontSize = 'var(--ui-text-body-primary-font-size)';
    container.style.color = 'var(--text-primary)';

    const text1 = document.createElement('span');
    text1.textContent = 'Project status: ';
    
    const tag = createTag({ children: 'Active' });
    
    const text2 = document.createElement('span');
    text2.textContent = ' — Last updated Mar 14, 2025';

    container.appendChild(text1);
    container.appendChild(tag);
    container.appendChild(text2);

    return container;
  },
};

/**
 * Various category types.
 * Shows Tag with different content lengths.
 */
export const VariousCategories: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-12)';
    container.style.padding = 'var(--spacing-16)';

    const categories = [
      'TAG',
      'TSC',
      'TOC',
      'Working Group',
      'Special Interest',
      'Technical Oversight Committee',
      'Other',
    ];

    categories.forEach(category => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--spacing-12)';

      const label = document.createElement('span');
      label.textContent = 'Category:';
      label.style.fontFamily = 'var(--ui-text-body-primary-font-family)';
      label.style.fontSize = 'var(--ui-text-body-primary-font-size)';
      label.style.color = 'var(--text-secondary)';
      label.style.minWidth = '80px';

      row.appendChild(label);
      row.appendChild(createTag({ children: category }));
      container.appendChild(row);
    });

    return container;
  },
};
