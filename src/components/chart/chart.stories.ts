/**
 * Chart Component Stories
 * 
 * Demonstrates the ECharts wrapper with ported Insights sparkline defaults.
 * 
 * This is the first step toward incorporating ALL Insights charts into
 * the LFX UI kit with visual parity. Add new chart types by porting
 * configs one-by-one from Insights.
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createChart, disposeChart } from './chart';
import { createSparklineOption, createStatusSparklineOption } from './config/lineAreaSparkline';

const meta: Meta = {
  title: 'Components/2. Molecules/Chart',
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number' },
      description: 'Chart height in pixels',
      defaultValue: 120,
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default Sparkline
 * 
 * Minimal line/area chart with Insights visual defaults:
 * - No axes or labels
 * - Smooth curves
 * - Subtle area fill
 * - Clean rendering
 */
export const Sparkline: Story = {
  render: () => {
    const data = [12, 18, 15, 22, 28, 24, 30, 35, 32, 38, 42, 40, 45];
    
    const chart = createChart({
      option: createSparklineOption({
        values: data,
        labels: data.map((_, i) => `Day ${i + 1}`),
      }),
      height: 120,
    });

    // Cleanup on story unmount
    setTimeout(() => {
      const container = document.querySelector('.lfx-chart');
      if (container) {
        (container as any).__chartCleanup?.();
      }
    }, 100);

    return chart;
  },
};

/**
 * Positive Trend
 * 
 * Sparkline showing upward trend (common in metrics dashboards)
 */
export const PositiveTrend: Story = {
  render: () => {
    const data = [10, 12, 15, 14, 18, 22, 25, 28, 32, 35, 40, 45, 50];
    
    const chart = createChart({
      option: createStatusSparklineOption(
        {
          values: data,
          labels: data.map((_, i) => `Week ${i + 1}`),
        },
        'success'
      ),
      height: 100,
    });

    return chart;
  },
};

/**
 * Negative Trend
 * 
 * Sparkline showing downward trend (warning indicator)
 */
export const NegativeTrend: Story = {
  render: () => {
    const data = [50, 48, 45, 42, 38, 35, 32, 28, 25, 22, 18, 15, 12];
    
    const chart = createChart({
      option: createStatusSparklineOption(
        {
          values: data,
          labels: data.map((_, i) => `Week ${i + 1}`),
        },
        'danger'
      ),
      height: 100,
    });

    return chart;
  },
};

/**
 * Flat Trend
 * 
 * Sparkline showing stable/flat data
 */
export const FlatTrend: Story = {
  render: () => {
    const data = [20, 21, 20, 19, 20, 21, 20, 20, 19, 20, 21, 20];
    
    const chart = createChart({
      option: createStatusSparklineOption(
        {
          values: data,
          labels: data.map((_, i) => `Month ${i + 1}`),
        },
        'neutral'
      ),
      height: 100,
    });

    return chart;
  },
};

/**
 * Volatile Data
 * 
 * Sparkline showing high variance (use case: monitoring, alerts)
 */
export const VolatileData: Story = {
  render: () => {
    const data = [15, 28, 12, 35, 18, 40, 10, 32, 25, 45, 20, 38, 15];
    
    const chart = createChart({
      option: createStatusSparklineOption(
        {
          values: data,
          labels: data.map((_, i) => `Hour ${i + 1}`),
        },
        'warning'
      ),
      height: 100,
    });

    return chart;
  },
};

/**
 * Empty Data
 * 
 * Sparkline with minimal data points
 */
export const EmptyData: Story = {
  render: () => {
    const data = [0, 0, 0, 0];
    
    const chart = createChart({
      option: createSparklineOption({
        values: data,
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      }),
      height: 100,
    });

    return chart;
  },
};

/**
 * Small Height
 * 
 * Compact sparkline for dense layouts (e.g., table cells)
 */
export const SmallHeight: Story = {
  render: () => {
    const data = [12, 18, 15, 22, 28, 24, 30, 35];
    
    const chart = createChart({
      option: createSparklineOption({
        values: data,
      }),
      height: 40,
    });

    return chart;
  },
};

/**
 * In Card
 * 
 * Sparkline embedded in a card (common pattern)
 */
export const InCard: Story = {
  render: () => {
    const data = [120, 145, 138, 162, 185, 172, 198, 215, 205, 228];
    
    const container = document.createElement('div');
    container.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 400px;
    `;

    // Title
    const title = document.createElement('div');
    title.textContent = 'Active Contributors';
    title.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-8);
    `;
    container.appendChild(title);

    // Value
    const value = document.createElement('div');
    value.textContent = '1,234';
    value.style.cssText = `
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-12);
    `;
    container.appendChild(value);

    // Chart
    const chart = createChart({
      option: createStatusSparklineOption(
        {
          values: data,
          labels: data.map((_, i) => `Month ${i + 1}`),
        },
        'success'
      ),
      height: 80,
    });
    container.appendChild(chart);

    // Meta
    const meta = document.createElement('div');
    meta.textContent = '+12.5% from last month';
    meta.style.cssText = `
      font-size: var(--text-xs);
      color: var(--success-600);
      margin-top: var(--spacing-8);
    `;
    container.appendChild(meta);

    return container;
  },
};

/**
 * Multiple Charts
 * 
 * Shows multiple sparklines in a row (dashboard pattern)
 */
export const MultipleCharts: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-16);
      max-width: 900px;
    `;

    const datasets = [
      { label: 'Revenue', data: [100, 120, 115, 135, 150, 145, 165, 180], status: 'success' as const },
      { label: 'Expenses', data: [80, 85, 90, 88, 95, 100, 98, 105], status: 'warning' as const },
      { label: 'Churn', data: [15, 14, 16, 15, 13, 12, 11, 10], status: 'danger' as const },
    ];

    datasets.forEach(({ label, data, status }) => {
      const card = document.createElement('div');
      card.style.cssText = `
        background: var(--ui-surface-container);
        border: 1px solid var(--ui-surface-divider);
        border-radius: var(--ui-card-radius);
        padding: var(--spacing-12);
      `;

      const titleEl = document.createElement('div');
      titleEl.textContent = label;
      titleEl.style.cssText = `
        font-size: var(--text-xs);
        font-weight: var(--font-medium);
        color: var(--text-secondary);
        margin-bottom: var(--spacing-8);
      `;
      card.appendChild(titleEl);

      const chart = createChart({
        option: createStatusSparklineOption(
          {
            values: data,
            labels: data.map((_, i) => `Q${i + 1}`),
          },
          status
        ),
        height: 60,
      });
      card.appendChild(chart);

      container.appendChild(card);
    });

    return container;
  },
};
