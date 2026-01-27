import type { Meta, StoryObj } from '@storybook/html';
import { createMetricCard, MetricCardProps } from './metric-card';
import { createButton } from '../button/button';
import { createPageLayout } from '../page-layout/page-layout';
import { createPageSection } from '../page-section/page-section';

/**
 * # MetricCard
 * 
 * **Tier 2 — Pattern Component**
 * 
 * MetricCard displays a single metric value in a Card surface.
 * It standardizes metric hierarchy and layout, not data semantics.
 * 
 * ## Ownership Boundaries
 * 
 * **MetricCard owns:**
 * - Internal layout of label, value, meta, footer
 * - Typography role usage (via UI role tokens only)
 * - Spacing between metric elements
 * 
 * **MetricCard does NOT own:**
 * - Card surface styling (delegated to Card)
 * - Data formatting logic
 * - Color semantics of values (positive/negative)
 * - Icons beyond layout placement
 * 
 * ## Token Bindings
 * 
 * | Element | Token | Rationale |
 * |---------|-------|-----------|
 * | Label | `ui.text.label.*` | Labels are metadata |
 * | Value | `ui.text.page-title.*` | Values are the primary visual element |
 * | Meta | `ui.text.body-secondary.*` | Supporting text, subordinate |
 * 
 * ## Important Notes
 * 
 * - **No trend semantics yet** — Positive/negative colors are not implemented
 * - **No color meaning yet** — All text uses neutral colors
 * - **Card owns surface** — MetricCard delegates surface styling to Card
 */
const meta: Meta<MetricCardProps> = {
  title: 'Components / Level 2 / MetricCard',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional label above the value',
    },
    value: {
      control: 'text',
      description: 'The primary metric value (required)',
    },
    meta: {
      control: 'text',
      description: 'Optional supporting text (delta, description)',
    },
    dense: {
      control: 'boolean',
      description: 'Use reduced spacing',
      defaultValue: false,
    },
    withBorder: {
      control: 'boolean',
      description: 'Show border around card',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<MetricCardProps>;

/**
 * Default metric card with just a value.
 */
export const Default: Story = {
  render: () => createMetricCard({
    value: '$1,234,567',
  }),
};

/**
 * Metric card with a label.
 */
export const WithLabel: Story = {
  render: () => createMetricCard({
    label: 'Total Revenue',
    value: '$1,234,567',
  }),
};

/**
 * Metric card with meta text (e.g., delta or description).
 */
export const WithMeta: Story = {
  render: () => createMetricCard({
    label: 'Monthly Revenue',
    value: '$1,234,567',
    meta: '+12.5% from last month',
  }),
};

/**
 * Metric card with a footer action.
 */
export const WithFooter: Story = {
  render: () => {
    const footer = document.createElement('div');
    footer.appendChild(createButton({ label: 'View Details', size: 'default' }));
    
    return createMetricCard({
      label: 'Active Users',
      value: '8,432',
      meta: 'Updated 5 minutes ago',
      footer,
    });
  },
};

/**
 * Dense variant with reduced spacing.
 */
export const Dense: Story = {
  render: () => createMetricCard({
    label: 'Orders',
    value: '12,847',
    meta: '+3.4% this week',
    dense: true,
  }),
};

/**
 * Numeric value (demonstrating tabular-nums).
 */
export const NumericValue: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-16)';
    
    container.appendChild(createMetricCard({
      label: 'Response Time',
      value: '142ms',
      meta: 'P95 latency',
    }));
    
    container.appendChild(createMetricCard({
      label: 'Uptime',
      value: '99.97%',
      meta: 'Last 30 days',
    }));
    
    container.appendChild(createMetricCard({
      label: 'Requests/sec',
      value: '1,847',
      meta: 'Current rate',
    }));
    
    return container;
  },
};

/**
 * Multiple cards side-by-side (common dashboard pattern).
 */
export const MultipleCards: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = 'var(--spacing-16)';
    
    container.appendChild(createMetricCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1% from last month',
      dense: true,
    }));
    
    container.appendChild(createMetricCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4% from last month',
      dense: true,
    }));
    
    container.appendChild(createMetricCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2% from last month',
      dense: true,
    }));
    
    return container;
  },
};

/**
 * MetricCard used in context with PageLayout.
 */
export const InContextWithPageLayout: Story = {
  render: () => {
    // Metrics row
    const metricsContainer = document.createElement('div');
    metricsContainer.style.display = 'grid';
    metricsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    metricsContainer.style.gap = 'var(--spacing-16)';
    
    metricsContainer.appendChild(createMetricCard({
      label: 'Total Revenue',
      value: '$2,847,293',
      meta: '+12.1% YoY',
      dense: true,
    }));
    
    metricsContainer.appendChild(createMetricCard({
      label: 'Active Users',
      value: '48,293',
      meta: '+5.4% MoM',
      dense: true,
    }));
    
    metricsContainer.appendChild(createMetricCard({
      label: 'Avg. Order Value',
      value: '$127.50',
      meta: '+2.8% MoM',
      dense: true,
    }));
    
    metricsContainer.appendChild(createMetricCard({
      label: 'Conversion Rate',
      value: '4.32%',
      meta: '-0.3% MoM',
      dense: true,
    }));
    
    // Page layout
    const layout = createPageLayout({
      children: [
        createPageSection({ children: metricsContainer }),
      ],
    });
    
    // Wrapper with page background
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '300px';
    wrapper.appendChild(layout);
    
    return wrapper;
  },
};

/**
 * All variants for comparison.
 */
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';
    
    // Value only
    const section1 = document.createElement('div');
    const label1 = document.createElement('p');
    label1.textContent = 'Value Only';
    label1.style.color = 'var(--text-secondary)';
    label1.style.marginBottom = 'var(--spacing-8)';
    label1.style.fontSize = 'var(--ui-text-label-font-size)';
    section1.appendChild(label1);
    section1.appendChild(createMetricCard({ value: '$1,234,567' }));
    container.appendChild(section1);
    
    // With label
    const section2 = document.createElement('div');
    const label2 = document.createElement('p');
    label2.textContent = 'With Label';
    label2.style.color = 'var(--text-secondary)';
    label2.style.marginBottom = 'var(--spacing-8)';
    label2.style.fontSize = 'var(--ui-text-label-font-size)';
    section2.appendChild(label2);
    section2.appendChild(createMetricCard({
      label: 'Total Revenue',
      value: '$1,234,567',
    }));
    container.appendChild(section2);
    
    // With meta
    const section3 = document.createElement('div');
    const label3 = document.createElement('p');
    label3.textContent = 'With Label + Meta';
    label3.style.color = 'var(--text-secondary)';
    label3.style.marginBottom = 'var(--spacing-8)';
    label3.style.fontSize = 'var(--ui-text-label-font-size)';
    section3.appendChild(label3);
    section3.appendChild(createMetricCard({
      label: 'Monthly Revenue',
      value: '$1,234,567',
      meta: '+12.5% from last month',
    }));
    container.appendChild(section3);
    
    // Dense
    const section4 = document.createElement('div');
    const label4 = document.createElement('p');
    label4.textContent = 'Dense';
    label4.style.color = 'var(--text-secondary)';
    label4.style.marginBottom = 'var(--spacing-8)';
    label4.style.fontSize = 'var(--ui-text-label-font-size)';
    section4.appendChild(label4);
    section4.appendChild(createMetricCard({
      label: 'Active Users',
      value: '8,432',
      meta: '+5.2% this week',
      dense: true,
    }));
    container.appendChild(section4);
    
    // With footer
    const section5 = document.createElement('div');
    const label5 = document.createElement('p');
    label5.textContent = 'With Footer';
    label5.style.color = 'var(--text-secondary)';
    label5.style.marginBottom = 'var(--spacing-8)';
    label5.style.fontSize = 'var(--ui-text-label-font-size)';
    section5.appendChild(label5);
    const footer = document.createElement('div');
    footer.appendChild(createButton({ label: 'View Report' }));
    section5.appendChild(createMetricCard({
      label: 'Monthly Sales',
      value: '$847,293',
      meta: 'Updated just now',
      footer,
    }));
    container.appendChild(section5);
    
    return container;
  },
};
