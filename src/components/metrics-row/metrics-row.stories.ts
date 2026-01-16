import type { Meta, StoryObj } from '@storybook/html';
import { createMetricsRow, MetricsRowProps } from './metrics-row';
import { createMetricCard } from '../metric-card/metric-card';
import { createPageLayout } from '../page-layout/page-layout';
import { createPageSection } from '../page-section/page-section';
import { createAppHeader } from '../app-header/app-header';

/**
 * # MetricsRow
 * 
 * **Tier 3 — Layout / Composition Component**
 * 
 * MetricsRow arranges multiple MetricCard components in a horizontal row.
 * It standardizes spacing, wrapping, and alignment for metric groups.
 * 
 * ## Ownership Boundaries
 * 
 * **MetricsRow owns:**
 * - Horizontal spacing between MetricCards
 * - Wrapping behavior at smaller widths
 * - Alignment of cards within the row
 * 
 * **MetricsRow does NOT own:**
 * - Card surface (delegated to Card)
 * - Metric layout or typography (delegated to MetricCard)
 * - Data semantics or calculation
 * - Color or trend semantics
 * - Page-level spacing (delegated to PageSection)
 * 
 * ## Token Bindings
 * 
 * | Property | Token |
 * |----------|-------|
 * | Gap | `--ui-metrics-row-gap` |
 * | Gap (dense) | `--ui-metrics-row-gap-dense` |
 * 
 * ## Important Notes
 * 
 * - **MetricsRow owns layout only**
 * - **MetricCard owns content and hierarchy**
 * - **Card owns surface**
 * - **No visual semantics live here**
 */
const meta: Meta<MetricsRowProps> = {
  title: 'Components/MetricsRow',
  tags: ['autodocs'],
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Use reduced spacing between cards',
      defaultValue: false,
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'stretch'],
      description: 'Vertical alignment of cards',
      defaultValue: 'stretch',
    },
    equalWidth: {
      control: 'boolean',
      description: 'Make all cards equal width',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<MetricsRowProps>;

/**
 * Default metrics row with 3 MetricCards.
 */
export const Default: Story = {
  render: () => createMetricsRow({
    children: [
      createMetricCard({
        label: 'Revenue',
        value: '$847,293',
        meta: '+8.1% from last month',
        dense: true,
      }),
      createMetricCard({
        label: 'Orders',
        value: '12,847',
        meta: '+3.4% from last month',
        dense: true,
      }),
      createMetricCard({
        label: 'Conversion',
        value: '3.24%',
        meta: '-0.2% from last month',
        dense: true,
      }),
    ],
    equalWidth: true,
  }),
};

/**
 * Two metrics in a row.
 */
export const TwoMetrics: Story = {
  render: () => createMetricsRow({
    children: [
      createMetricCard({
        label: 'Total Users',
        value: '48,293',
        meta: 'All time',
        dense: true,
      }),
      createMetricCard({
        label: 'Active Today',
        value: '2,847',
        meta: 'Last 24 hours',
        dense: true,
      }),
    ],
    equalWidth: true,
  }),
};

/**
 * Many metrics demonstrating wrapping behavior.
 */
export const ManyMetrics: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '800px';
    
    wrapper.appendChild(createMetricsRow({
      children: [
        createMetricCard({ label: 'Revenue', value: '$847K', dense: true }),
        createMetricCard({ label: 'Orders', value: '12,847', dense: true }),
        createMetricCard({ label: 'Users', value: '48,293', dense: true }),
        createMetricCard({ label: 'Conversion', value: '3.24%', dense: true }),
        createMetricCard({ label: 'Avg. Order', value: '$127.50', dense: true }),
        createMetricCard({ label: 'Churn', value: '2.1%', dense: true }),
      ],
      equalWidth: true,
    }));
    
    return wrapper;
  },
};

/**
 * Dense spacing variant.
 */
export const Dense: Story = {
  render: () => createMetricsRow({
    children: [
      createMetricCard({
        label: 'Revenue',
        value: '$847,293',
        meta: '+8.1%',
        dense: true,
      }),
      createMetricCard({
        label: 'Orders',
        value: '12,847',
        meta: '+3.4%',
        dense: true,
      }),
      createMetricCard({
        label: 'Conversion',
        value: '3.24%',
        meta: '-0.2%',
        dense: true,
      }),
    ],
    dense: true,
    equalWidth: true,
  }),
};

/**
 * Center-aligned cards.
 */
export const CenterAligned: Story = {
  render: () => createMetricsRow({
    children: [
      createMetricCard({
        label: 'Small',
        value: '42',
        dense: true,
      }),
      createMetricCard({
        label: 'Medium Value',
        value: '$12,345',
        meta: 'Some additional context',
        dense: true,
      }),
      createMetricCard({
        label: 'Large',
        value: '999',
        dense: true,
      }),
    ],
    align: 'center',
  }),
};

/**
 * MetricsRow used in context with PageLayout.
 */
export const InContextWithPageLayout: Story = {
  render: () => {
    const metricsRow = createMetricsRow({
      children: [
        createMetricCard({
          label: 'Total Revenue',
          value: '$2,847,293',
          meta: '+12.1% YoY',
          dense: true,
        }),
        createMetricCard({
          label: 'Active Users',
          value: '48,293',
          meta: '+5.4% MoM',
          dense: true,
        }),
        createMetricCard({
          label: 'Avg. Order Value',
          value: '$127.50',
          meta: '+2.8% MoM',
          dense: true,
        }),
        createMetricCard({
          label: 'Conversion Rate',
          value: '4.32%',
          meta: '-0.3% MoM',
          dense: true,
        }),
      ],
      equalWidth: true,
    });
    
    const layout = createPageLayout({
      children: [
        createPageSection({ children: metricsRow }),
      ],
    });
    
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '300px';
    wrapper.appendChild(layout);
    
    return wrapper;
  },
};

/**
 * MetricsRow used in context with PageSection.
 */
export const InContextWithPageSection: Story = {
  render: () => {
    const header = createAppHeader({
      title: 'Dashboard',
      description: 'Overview of key metrics',
    });
    
    const metricsRow = createMetricsRow({
      children: [
        createMetricCard({
          label: 'Revenue',
          value: '$847,293',
          meta: '+8.1% from last month',
          dense: true,
        }),
        createMetricCard({
          label: 'Orders',
          value: '12,847',
          meta: '+3.4% from last month',
          dense: true,
        }),
        createMetricCard({
          label: 'Customers',
          value: '3,284',
          meta: '+12.5% from last month',
          dense: true,
        }),
      ],
      equalWidth: true,
    });
    
    const layout = createPageLayout({
      children: [
        createPageSection({ children: header }),
        createPageSection({ children: metricsRow }),
      ],
    });
    
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '400px';
    wrapper.appendChild(layout);
    
    return wrapper;
  },
};

/**
 * Mixed metric values demonstrating flexibility.
 */
export const WithMixedMetricValues: Story = {
  render: () => createMetricsRow({
    children: [
      createMetricCard({
        label: 'Response Time',
        value: '142ms',
        meta: 'P95 latency',
        dense: true,
      }),
      createMetricCard({
        label: 'Uptime',
        value: '99.97%',
        meta: 'Last 30 days',
        dense: true,
      }),
      createMetricCard({
        label: 'Requests',
        value: '1.2M',
        meta: 'This month',
        dense: true,
      }),
      createMetricCard({
        label: 'Errors',
        value: '0.03%',
        meta: 'Error rate',
        dense: true,
      }),
    ],
    equalWidth: true,
  }),
};

/**
 * Comparison: Default vs Dense spacing.
 */
export const SpacingComparison: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-32)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';
    
    // Default spacing
    const defaultSection = document.createElement('div');
    const defaultLabel = document.createElement('p');
    defaultLabel.textContent = 'Default Spacing (16px)';
    defaultLabel.style.color = 'var(--text-secondary)';
    defaultLabel.style.marginBottom = 'var(--spacing-8)';
    defaultLabel.style.fontSize = 'var(--ui-text-label-font-size)';
    defaultSection.appendChild(defaultLabel);
    defaultSection.appendChild(createMetricsRow({
      children: [
        createMetricCard({ label: 'Metric 1', value: '$100', dense: true }),
        createMetricCard({ label: 'Metric 2', value: '$200', dense: true }),
        createMetricCard({ label: 'Metric 3', value: '$300', dense: true }),
      ],
      equalWidth: true,
    }));
    container.appendChild(defaultSection);
    
    // Dense spacing
    const denseSection = document.createElement('div');
    const denseLabel = document.createElement('p');
    denseLabel.textContent = 'Dense Spacing (12px)';
    denseLabel.style.color = 'var(--text-secondary)';
    denseLabel.style.marginBottom = 'var(--spacing-8)';
    denseLabel.style.fontSize = 'var(--ui-text-label-font-size)';
    denseSection.appendChild(denseLabel);
    denseSection.appendChild(createMetricsRow({
      children: [
        createMetricCard({ label: 'Metric 1', value: '$100', dense: true }),
        createMetricCard({ label: 'Metric 2', value: '$200', dense: true }),
        createMetricCard({ label: 'Metric 3', value: '$300', dense: true }),
      ],
      dense: true,
      equalWidth: true,
    }));
    container.appendChild(denseSection);
    
    return container;
  },
};
