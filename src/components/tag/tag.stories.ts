import type { Meta, StoryObj } from '@storybook/html';
import { createTag, type TagProps } from './tag';
import { createTableCell } from '../table-cell/table-cell';
import { createTable, createTableHeader, createTableBody } from '../table/table';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createCard } from '../card/card';

const meta: Meta<TagProps> = {
  title: 'Components/Tag',
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
- **Non-semantic** — Tag does not imply status (success/warning/error)
- **Categorical** — Used for Type, Category, or similar grouping labels

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

## Token Bindings

- Surface: \`ui.tag.surface.background\` → \`ui.surface.subtle\`
- Border: \`ui.tag.surface.border\` → \`ui.surface.divider\`
- Typography: \`ui.tag.text.*\` → \`ui.text.label.*\`
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
 * Tag inside a table cell, as used in the Groups page Type column.
 * Demonstrates Tag's primary use case for categorical data in tables.
 */
export const InsideTableCell: Story = {
  render: () => {
    const headerCells = [
      createTableHeaderCell({ children: 'Name' }),
      createTableHeaderCell({ children: 'Type' }),
      createTableHeaderCell({ children: 'Members', align: 'right' }),
    ];

    const rows = [
      createTableRow({
        children: [
          createTableCell({ children: 'Security Working Group', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'Working Group' }), contentType: 'secondary' }),
          createTableCell({ children: '8', contentType: 'numeric', align: 'right' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'Technical Advisory Group', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'TAG' }), contentType: 'secondary' }),
          createTableCell({ children: '6', contentType: 'numeric', align: 'right' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'Board of Directors', contentType: 'primary' }),
          createTableCell({ children: createTag({ children: 'Other' }), contentType: 'secondary' }),
          createTableCell({ children: '8', contentType: 'numeric', align: 'right' }),
        ],
      }),
    ];

    return createCard({
      children: createTable({
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
 * Multiple Tags in a row.
 * Parent container controls spacing via flex gap.
 */
export const MultipleTags: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-8)';
    container.style.alignItems = 'center';
    container.style.padding = 'var(--spacing-16)';

    const tags = ['Open Source', 'Security', 'Cloud Native', 'Community'];
    tags.forEach(label => {
      container.appendChild(createTag({ children: label }));
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
      children: createTable({
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
