import type { Meta, StoryObj } from '@storybook/html';
import { createCard, CardProps } from './card';
import { createTable, createTableHeader, createTableBody } from '../table/table';
import { createTableHeaderCell } from '../table-header-cell/table-header-cell';
import { createTableRow } from '../table-row/table-row';
import { createTableCell } from '../table-cell/table-cell';
import { createListGroup } from '../list-group/list-group';
import { createListItem } from '../list-item/list-item';
import { createButton } from '../button/button';
import { createPageLayout } from '../page-layout/page-layout';
import { createPageSection } from '../page-section/page-section';

/**
 * # Card
 * 
 * **Tier 2 — Pattern / Surface Wrapper**
 * 
 * Card provides a consistent visual surface for grouping content.
 * It standardizes background, border, radius, and internal padding.
 * 
 * ## Ownership Boundaries
 * 
 * **Card owns:**
 * - Surface background
 * - Border (optional)
 * - Border radius
 * - Internal padding
 * - Header/footer slot layout
 * 
 * **Card does NOT own:**
 * - Typography
 * - Tables, lists, charts, metrics
 * - Data fetching or logic
 * - Page layout or section spacing
 * - Hover/selected state
 * 
 * ## Token Bindings
 * 
 * | Property | Token |
 * |----------|-------|
 * | Background | `--ui-card-surface-background` → `ui.surface.container` |
 * | Border | `--ui-card-surface-border` → `ui.surface.divider` |
 * | Radius | `--ui-card-radius` |
 * | Padding | `--ui-card-padding` / `--ui-card-padding-dense` |
 * 
 * ## Non-Goals
 * 
 * - Card does NOT style child typography
 * - Card does NOT impose grid or column layout
 * - Card does NOT manage interaction states
 * - Card is NOT a page or section container
 */
const meta: Meta<CardProps> = {
  title: '1. Components / Level 2 / Card',
  tags: ['autodocs'],
  argTypes: {
    withBorder: {
      control: 'boolean',
      description: 'Show border around card',
      defaultValue: true,
    },
    dense: {
      control: 'boolean',
      description: 'Use reduced padding',
      defaultValue: false,
    },
    headerDivider: {
      control: 'boolean',
      description: 'Show divider below header',
      defaultValue: false,
    },
    footerDivider: {
      control: 'boolean',
      description: 'Show divider above footer',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

// Helper to create simple text content
function createText(text: string, style?: Partial<CSSStyleDeclaration>): HTMLElement {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.margin = '0';
  p.style.color = 'var(--text-primary)';
  if (style) {
    Object.assign(p.style, style);
  }
  return p;
}

// Helper to create a heading
function createHeading(text: string, level: 'h2' | 'h3' = 'h3'): HTMLElement {
  const h = document.createElement(level);
  h.textContent = text;
  h.style.margin = '0';
  h.style.fontFamily = 'var(--ui-text-section-title-font-family)';
  h.style.fontSize = 'var(--ui-text-section-title-font-size)';
  h.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
  h.style.lineHeight = 'var(--ui-text-section-title-line-height)';
  h.style.color = 'var(--text-primary)';
  return h;
}

// Helper to create a metric display
function createMetric(value: string, label: string, trend?: string): HTMLElement {
  const container = document.createElement('div');
  
  const valueEl = document.createElement('div');
  valueEl.textContent = value;
  valueEl.style.fontFamily = 'var(--font-family)';
  valueEl.style.fontSize = 'var(--text-2xl)';
  valueEl.style.fontWeight = 'var(--font-semibold)';
  valueEl.style.color = 'var(--text-primary)';
  valueEl.style.marginBottom = 'var(--spacing-4)';
  container.appendChild(valueEl);
  
  const labelEl = document.createElement('div');
  labelEl.textContent = label;
  labelEl.style.fontFamily = 'var(--ui-text-body-secondary-font-family)';
  labelEl.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
  labelEl.style.color = 'var(--text-secondary)';
  container.appendChild(labelEl);
  
  if (trend) {
    const trendEl = document.createElement('div');
    trendEl.textContent = trend;
    trendEl.style.fontFamily = 'var(--ui-text-body-secondary-font-family)';
    trendEl.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
    trendEl.style.color = trend.startsWith('+') ? 'var(--success-600)' : 'var(--danger-600)';
    trendEl.style.marginTop = 'var(--spacing-4)';
    container.appendChild(trendEl);
  }
  
  return container;
}

// Helper to create empty state
function createEmptyState(message: string, actionLabel?: string): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.padding = 'var(--spacing-32)';
  container.style.textAlign = 'center';
  
  // Icon placeholder
  const icon = document.createElement('div');
  icon.textContent = '📭';
  icon.style.fontSize = '48px';
  icon.style.marginBottom = 'var(--spacing-16)';
  container.appendChild(icon);
  
  // Message
  const text = document.createElement('p');
  text.textContent = message;
  text.style.margin = '0';
  text.style.color = 'var(--text-secondary)';
  text.style.fontFamily = 'var(--ui-text-body-primary-font-family)';
  text.style.fontSize = 'var(--ui-text-body-primary-font-size)';
  container.appendChild(text);
  
  // Action button
  if (actionLabel) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.marginTop = 'var(--spacing-16)';
    buttonWrapper.appendChild(createButton({ label: actionLabel }));
    container.appendChild(buttonWrapper);
  }
  
  return container;
}

/**
 * Default card with simple content.
 */
export const Default: Story = {
  render: () => createCard({
    children: createText('This is a basic card with default styling. Cards provide a consistent surface for grouping content.'),
  }),
};

/**
 * Card with a header slot.
 */
export const WithHeader: Story = {
  render: () => createCard({
    header: createHeading('Card Title'),
    children: createText('Card content goes here. The header provides a consistent title area.'),
  }),
};

/**
 * Card with a footer slot.
 */
export const WithFooter: Story = {
  render: () => {
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'flex-end';
    footer.style.gap = 'var(--spacing-8)';
    footer.appendChild(createButton({ label: 'Cancel', variant: 'secondary' }));
    footer.appendChild(createButton({ label: 'Save' }));
    
    return createCard({
      children: createText('Card with a footer containing action buttons.'),
      footer,
    });
  },
};

/**
 * Card with both header and footer slots.
 */
export const WithHeaderAndFooter: Story = {
  render: () => {
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.alignItems = 'center';
    
    const timestamp = document.createElement('span');
    timestamp.textContent = 'Last updated: 2 hours ago';
    timestamp.style.color = 'var(--text-secondary)';
    timestamp.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
    footer.appendChild(timestamp);
    
    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = 'var(--spacing-8)';
    actions.appendChild(createButton({ label: 'Edit' }));
    footer.appendChild(actions);
    
    return createCard({
      header: createHeading('Project Details'),
      children: createText('This card demonstrates a complete layout with header, body, and footer areas. Each slot is layout-only — typography is owned by the content.'),
      footer,
      headerDivider: true,
      footerDivider: true,
    });
  },
};

/**
 * Dense variant with reduced padding.
 */
export const Dense: Story = {
  render: () => createCard({
    header: createHeading('Compact Card'),
    children: createText('Dense cards use less padding, suitable for dashboard layouts with many cards.'),
    dense: true,
  }),
};

/**
 * Card wrapping a table component.
 */
export const WithTable: Story = {
  render: () => {
    const headerRow = createTableRow({
      children: [
        createTableHeaderCell({ children: 'Name' }),
        createTableHeaderCell({ children: 'Status' }),
        createTableHeaderCell({ children: 'Amount', align: 'right' }),
      ],
    });
    
    const rows = [
      createTableRow({
        children: [
          createTableCell({ children: 'Project Alpha' }),
          createTableCell({ children: 'Active', contentType: 'secondary' }),
          createTableCell({ children: '$12,500', align: 'right' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'Project Beta' }),
          createTableCell({ children: 'Pending', contentType: 'secondary' }),
          createTableCell({ children: '$8,200', align: 'right' }),
        ],
      }),
      createTableRow({
        children: [
          createTableCell({ children: 'Project Gamma' }),
          createTableCell({ children: 'Complete', contentType: 'secondary' }),
          createTableCell({ children: '$24,100', align: 'right' }),
        ],
      }),
    ];
    
    const table = createTable({
      columns: 3,
      children: [
        createTableHeader([headerRow]),
        createTableBody(rows),
      ],
    });
    
    return createCard({
      header: createHeading('Recent Projects'),
      children: table,
      headerDivider: true,
    });
  },
};

/**
 * Card wrapping a ListGroup component.
 */
export const WithListGroup: Story = {
  render: () => {
    const items = [
      createListItem({
        children: createText('Design system review'),
        clickable: true,
      }),
      createListItem({
        children: createText('Token architecture update'),
        clickable: true,
      }),
      createListItem({
        children: createText('Component documentation'),
        clickable: true,
        selected: true,
      }),
      createListItem({
        children: createText('Storybook coverage'),
        clickable: true,
      }),
    ];
    
    const list = createListGroup({ children: items });
    
    return createCard({
      header: createHeading('Tasks'),
      children: list,
      headerDivider: true,
    });
  },
};

/**
 * Card displaying metrics.
 */
export const WithMetrics: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = 'var(--spacing-24)';
    
    const card1 = createCard({
      children: createMetric('$1,234,567', 'Total Revenue', '+12.5%'),
      dense: true,
    });
    
    const card2 = createCard({
      children: createMetric('8,432', 'Active Users', '+5.2%'),
      dense: true,
    });
    
    const card3 = createCard({
      children: createMetric('94.2%', 'Uptime', '-0.3%'),
      dense: true,
    });
    
    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    
    return container;
  },
};

/**
 * Card with empty state content.
 */
export const EmptyState: Story = {
  render: () => createCard({
    header: createHeading('Notifications'),
    children: createEmptyState('No new notifications', 'Refresh'),
    headerDivider: true,
  }),
};

/**
 * Card used in context with PageLayout.
 */
export const InContextWithPageLayout: Story = {
  render: () => {
    // Metrics row
    const metricsContainer = document.createElement('div');
    metricsContainer.style.display = 'grid';
    metricsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    metricsContainer.style.gap = 'var(--spacing-16)';
    
    metricsContainer.appendChild(createCard({
      children: createMetric('$847,293', 'Monthly Revenue', '+8.1%'),
      dense: true,
    }));
    metricsContainer.appendChild(createCard({
      children: createMetric('12,847', 'Total Orders', '+3.4%'),
      dense: true,
    }));
    metricsContainer.appendChild(createCard({
      children: createMetric('98.7%', 'Success Rate', '+0.2%'),
      dense: true,
    }));
    
    // Table card
    const headerRow = createTableRow({
      children: [
        createTableHeaderCell({ children: 'Order ID' }),
        createTableHeaderCell({ children: 'Customer' }),
        createTableHeaderCell({ children: 'Status' }),
        createTableHeaderCell({ children: 'Total', align: 'right' }),
      ],
    });
    
    const rows = [
      createTableRow({
        clickable: true,
        children: [
          createTableCell({ children: '#12345' }),
          createTableCell({ children: 'Acme Corp' }),
          createTableCell({ children: 'Processing', contentType: 'secondary' }),
          createTableCell({ children: '$2,450.00', align: 'right' }),
        ],
      }),
      createTableRow({
        clickable: true,
        children: [
          createTableCell({ children: '#12344' }),
          createTableCell({ children: 'Globex Inc' }),
          createTableCell({ children: 'Shipped', contentType: 'secondary' }),
          createTableCell({ children: '$1,875.00', align: 'right' }),
        ],
      }),
    ];
    
    const table = createTable({
      columns: 4,
      children: [
        createTableHeader([headerRow]),
        createTableBody(rows),
      ],
    });
    
    const tableCard = createCard({
      header: createHeading('Recent Orders'),
      children: table,
      headerDivider: true,
    });
    
    // Page layout
    const layout = createPageLayout({
      children: [
        createPageSection({ children: metricsContainer }),
        createPageSection({ children: tableCard }),
      ],
    });
    
    // Wrapper with page background
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '400px';
    wrapper.appendChild(layout);
    
    return wrapper;
  },
};

/**
 * All card variants for comparison.
 */
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';
    
    // Default
    const defaultCard = createCard({
      header: createHeading('Default Card'),
      children: createText('Standard padding and border.'),
    });
    container.appendChild(defaultCard);
    
    // Dense
    const denseCard = createCard({
      header: createHeading('Dense Card'),
      children: createText('Reduced padding for compact layouts.'),
      dense: true,
    });
    container.appendChild(denseCard);
    
    // No border
    const noBorderCard = createCard({
      header: createHeading('No Border'),
      children: createText('Card without border, useful on colored backgrounds.'),
      withBorder: false,
    });
    container.appendChild(noBorderCard);
    
    // With dividers
    const dividersCard = createCard({
      header: createHeading('With Dividers'),
      children: createText('Header and footer have visual separators.'),
      footer: createButton({ label: 'Action' }),
      headerDivider: true,
      footerDivider: true,
    });
    container.appendChild(dividersCard);
    
    return container;
  },
};
