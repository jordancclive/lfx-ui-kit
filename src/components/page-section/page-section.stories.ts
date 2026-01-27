import type { Meta, StoryObj } from '@storybook/html';
import { createPageSection, PageSectionProps } from './page-section';
import { createPageLayout } from '../page-layout/page-layout';
import { createAppHeader } from '../app-header/app-header';
import { createListGroup } from '../list-group/list-group';
import { createListItem } from '../list-item/list-item';
import { createTable, createTableHeader, createTableBody } from '../table/table';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createTableCell } from '../table-cell/table-cell';

const meta: Meta<PageSectionProps> = {
  title: 'Components / Level 3 / PageSection',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## PageSection

**Tier 2 — Structural Content Wrapper**

PageSection represents a single vertical section within a page. It provides consistent vertical spacing, optional dividers, and optional section-level padding, without styling its children.

### ⚠️ Important

**PageSection does NOT style children.**

**PageSection does NOT replace cards or surfaces.**

**PageSection exists to enforce vertical rhythm only.**

### How It Fits

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   ├─ PageSection  ← YOU ARE HERE
   ├─ PageSection
   └─ PageSection
\`\`\`

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing | Typography |
| Optional divider | Backgrounds or surfaces |
| Dense spacing variant | Cards, tables, lists |
| | Visual styling of children |

### NOT Responsible For

- Does NOT style child components
- Does NOT implement backgrounds or surfaces
- Does NOT replace cards or containers
- Does NOT handle page layout (use PageLayout)
- Does NOT implement page headers (use AppHeader)

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Vertical padding | \`--spacing-page-section-padding-y\` |
| Vertical padding (dense) | \`--spacing-page-section-padding-y-dense\` |
| Divider color | \`--color-page-section-divider\` |

### Usage Example

\`\`\`typescript
createPageLayout({
  children: [
    createAppHeader({ title: 'Settings' }),
    createPageSection({
      children: generalSettings,
      withDivider: true,
    }),
    createPageSection({
      children: notificationSettings,
    }),
  ]
})
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Reduced vertical padding',
    },
    withDivider: {
      control: 'boolean',
      description: 'Show bottom divider',
    },
  },
  render: (args) => {
    return createPageSection(args);
  },
};

export default meta;
type Story = StoryObj<PageSectionProps>;

// Helper to create placeholder content
function createPlaceholderContent(title: string, height: string = '100px'): HTMLElement {
  const content = document.createElement('div');
  content.style.cssText = `
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    min-height: ${height};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-size: 14px;
    color: #64748b;
  `;
  content.textContent = title;
  return content;
}

/**
 * Default PageSection with standard spacing
 */
export const Default: Story = {
  args: {
    children: createPlaceholderContent('Section Content'),
  },
};

/**
 * Dense spacing mode (reduced vertical padding)
 */
export const Dense: Story = {
  args: {
    children: createPlaceholderContent('Dense Section Content'),
    dense: true,
  },
};

/**
 * Section with bottom divider
 */
export const WithDivider: Story = {
  args: {
    children: createPlaceholderContent('Section with Divider'),
    withDivider: true,
  },
};

/**
 * Multiple PageSections stacked together
 */
export const MultipleSections: Story = {
  render: () => {
    const container = document.createElement('div');
    
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1: Overview'),
      withDivider: true,
    }));
    
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2: Details'),
      withDivider: true,
    }));
    
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3: Actions'),
    }));
    
    return container;
  },
};

/**
 * PageSection with real content components
 */
export const WithRealContent: Story = {
  render: () => {
    const container = document.createElement('div');
    
    // Helper to create list item content
    const createListItemContent = (text: string) => {
      const item = document.createElement('div');
      item.textContent = text;
      item.style.padding = '8px 0';
      return item;
    };
    
    // Section with ListGroup
    const listSection = createPageSection({
      children: createListGroup({
        children: [
          createListItem({
            children: createListItemContent('List Item 1'),
            clickable: true,
          }),
          createListItem({
            children: createListItemContent('List Item 2'),
            clickable: true,
          }),
          createListItem({
            children: createListItemContent('List Item 3'),
            clickable: true,
          }),
        ],
        withBorder: true,
        withBackground: true,
      }),
      withDivider: true,
    });
    
    // Section with Table
    const tableSection = createPageSection({
      children: createTable({
        columns: 3,
        children: [
          createTableHeader([
            createTableHeaderCell({ children: 'Name' }),
            createTableHeaderCell({ children: 'Status' }),
            createTableHeaderCell({ children: 'Actions', align: 'right' }),
          ]),
          createTableBody([
            createTableRow({
              children: [
                createTableCell({ children: 'Project Alpha', contentType: 'primary' }),
                createTableCell({ children: 'Active', contentType: 'secondary' }),
                createTableCell({ children: 'Edit', align: 'right' }),
              ],
            }),
            createTableRow({
              children: [
                createTableCell({ children: 'Project Beta', contentType: 'primary' }),
                createTableCell({ children: 'Pending', contentType: 'secondary' }),
                createTableCell({ children: 'Edit', align: 'right' }),
              ],
            }),
          ]),
        ],
        withBorder: true,
      }),
    });
    
    container.appendChild(listSection);
    container.appendChild(tableSection);
    
    return container;
  },
};

/**
 * PageSection in context with PageLayout
 */
export const InContextWithPageLayout: Story = {
  render: () => {
    return createPageLayout({
      children: [
        createAppHeader({
          title: 'Settings',
          description: 'Manage your account preferences',
        }),
        createPageSection({
          children: createPlaceholderContent('General Settings', '150px'),
          withDivider: true,
        }),
        createPageSection({
          children: createPlaceholderContent('Notification Settings', '150px'),
          withDivider: true,
        }),
        createPageSection({
          children: createPlaceholderContent('Security Settings', '150px'),
        }),
      ],
    });
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Comparison: Default vs Dense spacing
 */
export const SpacingComparison: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      padding: 24px;
      background: #f8fafc;
    `;

    // Default spacing column
    const defaultColumn = document.createElement('div');
    defaultColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';
    
    const defaultSections = document.createElement('div');
    defaultSections.style.background = '#fff';
    defaultSections.style.border = '1px solid #e2e8f0';
    defaultSections.style.borderRadius = '8px';
    
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1', '60px'),
      withDivider: true,
    }));
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2', '60px'),
      withDivider: true,
    }));
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3', '60px'),
    }));
    
    defaultColumn.appendChild(defaultSections);

    // Dense spacing column
    const denseColumn = document.createElement('div');
    denseColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';
    
    const denseSections = document.createElement('div');
    denseSections.style.background = '#fff';
    denseSections.style.border = '1px solid #e2e8f0';
    denseSections.style.borderRadius = '8px';
    
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1', '60px'),
      withDivider: true,
      dense: true,
    }));
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2', '60px'),
      withDivider: true,
      dense: true,
    }));
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3', '60px'),
      dense: true,
    }));
    
    denseColumn.appendChild(denseSections);

    container.appendChild(defaultColumn);
    container.appendChild(denseColumn);

    return container;
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 24px;
    `;

    // Default
    const defaultSection = document.createElement('div');
    defaultSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Default</h4>';
    defaultSection.appendChild(createPageSection({
      children: createPlaceholderContent('Default spacing'),
    }));

    // Dense
    const denseSection = document.createElement('div');
    denseSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense</h4>';
    denseSection.appendChild(createPageSection({
      children: createPlaceholderContent('Dense spacing'),
      dense: true,
    }));

    // With Divider
    const dividerSection = document.createElement('div');
    dividerSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">With Divider</h4>';
    dividerSection.appendChild(createPageSection({
      children: createPlaceholderContent('With bottom divider'),
      withDivider: true,
    }));

    // Dense + Divider
    const combinedSection = document.createElement('div');
    combinedSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense + Divider</h4>';
    combinedSection.appendChild(createPageSection({
      children: createPlaceholderContent('Dense with divider'),
      dense: true,
      withDivider: true,
    }));

    container.appendChild(defaultSection);
    container.appendChild(denseSection);
    container.appendChild(dividerSection);
    container.appendChild(combinedSection);

    return container;
  },
};
