/**
 * Chart Component Stories
 * 
 * Demonstrates the ECharts wrapper with ported Insights sparkline defaults.
 * 
 * This is the first step toward incorporating ALL Insights charts into
 * the LFX UI kit with visual parity. Add new chart types by porting
 * configs one-by-one from Insights.
 * 
 * SCOPE:
 * Charts in LFX One provide signal, not exploration.
 * See docs/insights-escalation-contract.md for boundary rules.
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createChart, disposeChart } from './chart';
import { createSparklineOption, createStatusSparklineOption } from './config/lineAreaSparkline';
import { createVerticalBarChartOption, createHorizontalBarChartOption } from './config/bar';
import { createStackedBarOption } from './config/stackedBar';

const meta: Meta = {
  title: '1. Components / 2. Molecules / Chart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Insights Escalation

Charts in LFX One provide **signal-level visualizations only**. They indicate status, risk, or trends but do NOT support filtering, drill-down, or deep exploration. Any feature requiring analytical exploration MUST escalate to LFX Insights.

**See:** \`docs/insights-escalation-contract.md\` for complete boundary rules.
        `,
      },
    },
  },
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

/**
 * Vertical Bar Chart
 * 
 * Ranking visualization with rounded top corners.
 * Ported from Insights bar chart patterns.
 * 
 * Use cases:
 * - Top contributors
 * - Top projects
 * - Rankings
 */
export const VerticalBarChart: Story = {
  render: () => {
    const data = {
      categories: ['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Preact'],
      values: [450, 320, 280, 180, 120, 90],
    };
    
    const chart = createChart({
      option: createVerticalBarChartOption(data),
      height: 300,
    });

    return chart;
  },
};

/**
 * Horizontal Bar Chart
 * 
 * Better for long category labels.
 * Ported from Insights horizontal bar pattern.
 * 
 * Use cases:
 * - Dependency distribution
 * - Package usage
 * - Horizontal rankings
 */
export const HorizontalBarChart: Story = {
  render: () => {
    const data = {
      categories: [
        'lodash',
        'react',
        'axios',
        'express',
        'moment',
        'webpack',
      ],
      values: [850, 720, 650, 580, 420, 380],
    };
    
    const chart = createChart({
      option: createHorizontalBarChartOption(data),
      height: 300,
    });

    return chart;
  },
};

/**
 * Bar Chart with Status Colors
 * 
 * Uses semantic color mapping for status indication.
 */
export const BarChartStatusVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-16);
      max-width: 900px;
    `;

    const variants = [
      { label: 'Success', status: 'success' as const, values: [120, 150, 180, 210] },
      { label: 'Warning', status: 'warning' as const, values: [100, 130, 110, 140] },
      { label: 'Danger', status: 'danger' as const, values: [80, 90, 70, 60] },
      { label: 'Neutral', status: 'neutral' as const, values: [50, 60, 55, 65] },
    ];

    variants.forEach(({ label, status, values }) => {
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
        option: createVerticalBarChartOption({
          categories: ['Q1', 'Q2', 'Q3', 'Q4'],
          values,
          status,
        }),
        height: 180,
      });
      card.appendChild(chart);

      container.appendChild(card);
    });

    return container;
  },
};

/**
 * Bar Chart in Card (Common Pattern)
 * 
 * Shows vertical bar chart with title and description.
 * Matches Insights card pattern.
 */
export const VerticalBarInCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 500px;
    `;

    // Title
    const title = document.createElement('div');
    title.textContent = 'Top Contributors';
    title.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-4);
    `;
    container.appendChild(title);

    // Description
    const desc = document.createElement('div');
    desc.textContent = 'Most active contributors this month';
    desc.style.cssText = `
      font-size: var(--text-xs);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-16);
    `;
    container.appendChild(desc);

    // Chart
    const chart = createChart({
      option: createVerticalBarChartOption({
        categories: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
        values: [45, 38, 32, 28, 22],
        status: 'success',
      }),
      height: 280,
    });
    container.appendChild(chart);

    return container;
  },
};

/**
 * Horizontal Bar in Card
 * 
 * Shows horizontal bar chart for dependency visualization.
 * Better for longer labels.
 */
export const HorizontalBarInCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 500px;
    `;

    // Title
    const title = document.createElement('div');
    title.textContent = 'Package Dependencies';
    title.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-4);
    `;
    container.appendChild(title);

    // Description
    const desc = document.createElement('div');
    desc.textContent = 'Most used packages across repositories';
    desc.style.cssText = `
      font-size: var(--text-xs);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-16);
    `;
    container.appendChild(desc);

    // Chart
    const chart = createChart({
      option: createHorizontalBarChartOption({
        categories: [
          'express',
          'lodash',
          'axios',
          'react',
          'typescript',
        ],
        values: [320, 280, 245, 210, 190],
      }),
      height: 260,
    });
    container.appendChild(chart);

    return container;
  },
};

/**
 * Small Bar Chart
 * 
 * Compact bar chart for dense layouts.
 */
export const SmallBarChart: Story = {
  render: () => {
    const data = {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      values: [12, 19, 15, 23, 18],
    };
    
    const chart = createChart({
      option: createVerticalBarChartOption(data),
      height: 150,
    });

    return chart;
  },
};

/**
 * Vertical Stacked Bar Chart
 * 
 * Composition visualization with multiple series stacked.
 * Ported from Insights dependency distribution patterns.
 * 
 * Visual characteristics:
 * - Rounded corners on topmost segment only
 * - Square edges on internal segments
 * - Legend shows all series
 * - Tooltip aggregates and shows percentages
 * 
 * Use cases:
 * - Dependency composition (direct, transitive, dev)
 * - Organization distribution
 * - Package breakdown
 */
export const VerticalStackedBarChart: Story = {
  render: () => {
    const option = createStackedBarOption({
      categories: ['Repo A', 'Repo B', 'Repo C', 'Repo D', 'Repo E'],
      series: [
        { name: 'Direct', data: [45, 38, 50, 42, 35] },
        { name: 'Transitive', data: [30, 25, 28, 32, 30] },
        { name: 'Dev', data: [15, 12, 10, 8, 15] },
      ],
    });
    
    const chart = createChart({
      option,
      height: 350,
    });

    return chart;
  },
};

/**
 * Horizontal Stacked Bar Chart
 * 
 * Better for longer category labels.
 * Same stacking behavior as vertical.
 */
export const HorizontalStackedBarChart: Story = {
  render: () => {
    const option = createStackedBarOption({
      categories: [
        '@angular/core',
        'react',
        'vue',
        '@types/node',
        'typescript',
      ],
      series: [
        { name: 'Production', data: [85, 120, 95, 60, 110] },
        { name: 'Development', data: [45, 60, 50, 90, 70] },
        { name: 'Peer', data: [20, 30, 25, 40, 35] },
      ],
      orientation: 'horizontal',
    });
    
    const chart = createChart({
      option,
      height: 350,
    });

    return chart;
  },
};

/**
 * Stacked Bar Status Variants
 * 
 * Shows status-based color theming for stacked bars.
 */
export const StackedBarStatusVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-16);
      max-width: 900px;
    `;

    const variants = [
      { label: 'Success', status: 'success' as const },
      { label: 'Warning', status: 'warning' as const },
      { label: 'Danger', status: 'danger' as const },
      { label: 'Neutral', status: 'neutral' as const },
    ];

    variants.forEach(({ label, status }) => {
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
        option: createStackedBarOption({
          categories: ['Q1', 'Q2', 'Q3', 'Q4'],
          series: [
            { name: 'Series A', data: [30, 35, 40, 38] },
            { name: 'Series B', data: [20, 25, 22, 28] },
            { name: 'Series C', data: [10, 15, 18, 14] },
          ],
          statusVariant: status,
          showLegend: false,
        }),
        height: 200,
      });
      card.appendChild(chart);

      container.appendChild(card);
    });

    return container;
  },
};

/**
 * Stacked Bar in Card (Common Pattern)
 * 
 * Shows stacked bar chart with title and description.
 * Matches Insights dependency card pattern.
 */
export const StackedBarInCard: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 600px;
    `;

    // Title
    const title = document.createElement('div');
    title.textContent = 'Dependency Distribution';
    title.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-4);
    `;
    container.appendChild(title);

    // Description
    const desc = document.createElement('div');
    desc.textContent = 'Package dependency breakdown by type';
    desc.style.cssText = `
      font-size: var(--text-xs);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-16);
    `;
    container.appendChild(desc);

    // Chart
    const chart = createChart({
      option: createStackedBarOption({
        categories: ['express', 'lodash', 'axios', 'react', 'typescript'],
        series: [
          { name: 'Direct Dependencies', data: [25, 18, 30, 42, 35] },
          { name: 'Transitive Dependencies', data: [15, 22, 18, 28, 25] },
          { name: 'Dev Dependencies', data: [8, 10, 12, 15, 20] },
        ],
      }),
      height: 320,
    });
    container.appendChild(chart);

    return container;
  },
};

/**
 * Dense Stacked Bar Chart
 * 
 * Compact version for dashboard tiles or small spaces.
 */
export const DenseStackedBarChart: Story = {
  render: () => {
    const option = createStackedBarOption({
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      series: [
        { name: 'Type A', data: [20, 25, 22, 28, 30, 26] },
        { name: 'Type B', data: [15, 18, 20, 22, 25, 23] },
        { name: 'Type C', data: [10, 12, 15, 18, 20, 22] },
      ],
      showLegend: false,
    });
    
    const chart = createChart({
      option,
      height: 180,
    });

    return chart;
  },
};

/**
 * Contributor Dependency (Insights Parity)
 * 
 * VALIDATION: Confirms that Insights-grade stacked bar charts
 * can be hosted inside LFX One interaction surfaces without
 * becoming an Insights page.
 * 
 * This chart shows contribution distribution:
 * - Top 12 contributors = ~53% of activity
 * - Remaining contributors = ~47% of activity
 * 
 * Visual characteristics match Insights:
 * - Horizontal stacked bar
 * - Minimal grid
 * - No axis titles
 * - Clean, focused presentation
 * - Appropriate for drawer context
 * 
 * Purpose: Validate that the chart system is extensible
 * and that Insights-grade visualizations fit naturally
 * into LFX One's interaction surfaces.
 */
export const ContributorDependencyInsightsParity: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 700px;
    `;

    // Title
    const title = document.createElement('div');
    title.textContent = 'Contributor Dependency';
    title.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-4);
    `;
    container.appendChild(title);

    // Description
    const desc = document.createElement('div');
    desc.textContent = 'A small group of contributors accounts for a majority of activity';
    desc.style.cssText = `
      font-size: var(--text-xs);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-16);
    `;
    container.appendChild(desc);

    // Chart (Insights parity: horizontal stacked bar)
    const chart = createChart({
      option: createStackedBarOption({
        categories: ['Contributions'],
        series: [
          { 
            name: 'Top 12 contributors', 
            data: [53],
          },
          { 
            name: 'Remaining contributors', 
            data: [47],
          },
        ],
        orientation: 'horizontal',
        showLegend: true,
      }),
      height: 200,
    });
    container.appendChild(chart);

    // Explanatory note
    const note = document.createElement('div');
    note.style.cssText = `
      margin-top: var(--spacing-16);
      padding-top: var(--spacing-16);
      border-top: 1px solid var(--ui-surface-divider);
      font-size: var(--text-xs);
      color: var(--text-secondary);
      line-height: var(--leading-text-xs);
    `;
    note.innerHTML = `
      This visualization demonstrates concentration risk in contributor activity.
      <br/><br/>
      <a href="#" style="color: var(--accent-600); text-decoration: none;">
        View full analysis in LFX Insights →
      </a>
    `;
    container.appendChild(note);

    return container;
  },
};
