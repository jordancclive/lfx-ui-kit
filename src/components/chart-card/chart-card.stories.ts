import type { Meta, StoryObj } from '@storybook/html';
import { createChartCard, type ChartCardProps } from './chart-card';

/**
 * # ChartCard
 * 
 * **Level 2 — Molecule Component**
 * 
 * ## Quick Start
 * 
 * • **What:** Minimal structural wrapper (extends Card) with named slots for dashboard chart-based metrics  
 * • **When to use:** Dashboard overviews, MetricClusters, KPI summaries with sparklines or bar charts  
 * • **When NOT to use:** Deep analytics, data tables, full-page charts, text-only displays, complex interactives  
 * • **Default interaction:** Click → opens RIGHT-SIDE DRAWER (not modal, not page). See docs/interaction-surfaces.md  
 * • **Structure:** Fixed slots (title, value, chart, meta) - all optional except title  
 * • **Slots accept:** Pre-rendered HTMLElement only (no chart rendering, metric formatting, or data logic)
 * 
 * ---
 * 
 * ## Purpose
 * 
 * ChartCard is a minimal structural wrapper around Card that provides named slots
 * for the observed dashboard chart-card pattern.
 * 
 * ChartCard exists to:
 * - **Reduce duplication** across dashboard implementations
 * - **Provide a shared structural shell** for chart-based metric displays
 * - **Encode interaction defaults** (click → drawer expectation)
 * - **Preserve future flexibility** by avoiding visual or chart-type lock-in
 * 
 * ChartCard is intentionally minimal and underpowered.
 * 
 * ---
 * 
 * ## When to Use
 * 
 * Use ChartCard when:
 * - Building **dashboard overview surfaces** with chart-based metrics
 * - Implementing **MetricCluster sections** (chart cards are typical items)
 * - Need a **structural abstraction** for observed chart-card pattern
 * - Want **consistent click affordance** and interaction expectations
 * 
 * **Typical Use Cases:**
 * - KPI summaries with sparklines
 * - Contribution activity indicators
 * - Project health metrics
 * - Resource utilization summaries
 * 
 * ---
 * 
 * ## When NOT to Use
 * 
 * Do NOT use ChartCard when:
 * - Building **deep analytical workflows** (use dedicated analytics pages)
 * - Displaying **detailed data tables** (use Table Page or DataTable)
 * - Chart is **full-page or full-section** (use embedded chart directly)
 * - Need **complex interactive charts** (use dedicated charting component)
 * - Display is **text-only** with no visual summary (use Card directly)
 * 
 * ---
 * 
 * ## Rules & Contracts (Normative)
 * 
 * ### Structure (Fixed)
 * 
 * ```
 * ChartCard (extends Card)
 * └─ Container
 *    ├─ Header (title) — required
 *    ├─ Value slot — optional
 *    ├─ Chart slot — optional
 *    └─ Meta slot — optional
 * ```
 * 
 * All slots accept pre-rendered `HTMLElement` only.
 * 
 * ### What ChartCard Owns
 * 
 * ChartCard owns:
 * - **Structural layout** (header, value, chart, meta slots)
 * - **Click affordance** (cursor, hover state)
 * - **Default interaction expectation** (→ drawer)
 * 
 * ### What ChartCard Does NOT Own
 * 
 * ChartCard does NOT own:
 * - **Chart rendering** (caller provides chart element)
 * - **Metric formatting** (caller provides value element)
 * - **Data fetching** (caller handles data)
 * - **Drawer implementation** (caller implements drawer)
 * - **Visual design opinions** (intentionally minimal)
 * - **Chart types or variants** (no sparkline vs bar logic)
 * 
 * ### Interaction Contract
 * 
 * **Default Expectation:**
 * - ChartCard is **clickable** (when `onClick` is provided)
 * - Click opens a **RIGHT-SIDE DRAWER** for detail exploration
 * - Drawer is NOT implemented by this component
 * 
 * **Interaction Surface Contract:**
 * 
 * Follows system-wide contract: `docs/interaction-surfaces.md`
 * 
 * - ChartCard click → **Drawer** (preserves dashboard context)
 * - Deep analytics → **Page** (full navigation, e.g., LFX Insights)
 * - NOT Modal (modals block context and are for short interruptions)
 * 
 * ### Token Bindings
 * 
 * ChartCard inherits all Card tokens and uses:
 * 
 * | Property | Token |
 * |----------|-------|
 * | Header font size | `--ui-text-label-font-size` |
 * | Meta font size | `--ui-text-body-secondary-font-size` |
 * | Container gap | `--spacing-12` |
 * | Text colors | `--text-secondary`, `--text-muted` |
 * 
 * No new tokens are introduced by ChartCard.
 * 
 * ---
 * 
 * ## Appendix: Relationship to Other Patterns
 * 
 * **Lives INSIDE:**
 * - **MetricCluster** (dashboard section primitive)
 * - **Dashboard Page Pattern**
 * 
 * **Extends:**
 * - **Card** (Level 2 component)
 * 
 * **Interacts WITH:**
 * - **Drawer** (detail surface for drill-down)
 * 
 * **Composition Hierarchy:**
 * ```
 * Dashboard Page
 * └─ MetricCluster (section primitive)
 *    ├─ ChartCard
 *    ├─ ChartCard
 *    └─ ChartCard
 *         └─ Drawer (on click)
 * ```
 * 
 * ---
 * 
 * ## Appendix: Non-Normative Disclaimer
 * 
 * > **This component abstracts observed structure only.**
 * >
 * > ChartCard provides a minimal structural shell based on the observed
 * > dashboard chart-card pattern documented in **Dashboard Page Pattern**.
 * >
 * > **Visual design and chart types are intentionally NOT locked.**
 * >
 * > This component exists to:
 * > - Reduce duplication
 * > - Provide shared vocabulary
 * > - Encode interaction defaults
 * >
 * > It does NOT lock:
 * > - Chart rendering approaches
 * > - Visual styling beyond structure
 * > - Metric formatting logic
 * > - Dashboard composition rules
 * >
 * > Future refinements to chart-card patterns may evolve this component
 * > or introduce specializations (e.g., SparklineCard, BarCard, etc.).
 */
const meta: Meta<ChartCardProps> = {
  title: '1. Components / 2. Molecules / ChartCard',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Chart card title (required)',
    },
    dense: {
      control: 'boolean',
      description: 'Use dense spacing (inherited from Card)',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<ChartCardProps>;

// Helper: Create a simple value element
function createValueElement(text: string): HTMLElement {
  const value = document.createElement('div');
  value.style.fontSize = 'var(--ui-text-page-title-font-size)';
  value.style.fontWeight = 'var(--ui-text-page-title-font-weight)';
  value.style.color = 'var(--text-primary)';
  value.textContent = text;
  return value;
}

// Helper: Create a simple sparkline placeholder
function createSparklinePlaceholder(): HTMLElement {
  const sparkline = document.createElement('div');
  sparkline.style.height = '40px';
  sparkline.style.background = 'linear-gradient(to right, var(--ui-accent-bg), var(--ui-accent-bg-hover))';
  sparkline.style.borderRadius = 'var(--radius-sm)';
  sparkline.style.opacity = '0.6';
  return sparkline;
}

// Helper: Create a simple bar chart placeholder
function createBarChartPlaceholder(): HTMLElement {
  const chart = document.createElement('div');
  chart.style.display = 'flex';
  chart.style.gap = 'var(--spacing-4)';
  chart.style.height = '60px';
  chart.style.alignItems = 'flex-end';

  const heights = ['40%', '70%', '50%', '90%', '65%', '80%'];
  heights.forEach(height => {
    const bar = document.createElement('div');
    bar.style.flex = '1';
    bar.style.height = height;
    bar.style.background = 'var(--ui-accent-bg)';
    bar.style.borderRadius = 'var(--radius-sm) var(--radius-sm) 0 0';
    chart.appendChild(bar);
  });

  return chart;
}

// Helper: Create a meta element
function createMetaElement(text: string): HTMLElement {
  const meta = document.createElement('div');
  meta.textContent = text;
  return meta;
}

/**
 * Default chart card with title and chart slot.
 */
export const Default: Story = {
  render: () => createChartCard({
    title: 'Active Contributors',
    chart: createSparklinePlaceholder(),
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Chart card with value, chart, and meta slots.
 */
export const WithValue: Story = {
  render: () => createChartCard({
    title: 'Total Revenue',
    value: createValueElement('$847,293'),
    chart: createSparklinePlaceholder(),
    meta: createMetaElement('+8.1% from last month'),
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Chart card with bar chart.
 */
export const WithBarChart: Story = {
  render: () => createChartCard({
    title: 'Contributions by Project',
    value: createValueElement('1,234'),
    chart: createBarChartPlaceholder(),
    meta: createMetaElement('Last 7 days'),
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Chart card with meta but no chart.
 */
export const WithMeta: Story = {
  render: () => createChartCard({
    title: 'Open Issues',
    value: createValueElement('42'),
    meta: createMetaElement('Across 12 repositories'),
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Minimal chart card with title only.
 */
export const Minimal: Story = {
  render: () => createChartCard({
    title: 'Status: Healthy',
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Non-clickable chart card (no onClick handler).
 */
export const NonClickable: Story = {
  render: () => createChartCard({
    title: 'Static Metric',
    value: createValueElement('99.97%'),
    meta: createMetaElement('System uptime'),
  }),
};

/**
 * Dense variant.
 */
export const Dense: Story = {
  render: () => createChartCard({
    title: 'Active Users',
    value: createValueElement('2,847'),
    chart: createSparklinePlaceholder(),
    meta: createMetaElement('+3.4% today'),
    dense: true,
    onClick: () => console.log('ChartCard clicked - should open drawer'),
  }),
};

/**
 * Multiple chart cards in a row (simulating MetricCluster).
 */
export const InMetricCluster: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-16)';
    container.style.padding = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';

    const cards = [
      createChartCard({
        title: 'Active Contributors',
        value: createValueElement('1,234'),
        chart: createSparklinePlaceholder(),
        meta: createMetaElement('+8.1%'),
        onClick: () => console.log('Card 1 clicked'),
      }),
      createChartCard({
        title: 'Open PRs',
        value: createValueElement('567'),
        chart: createSparklinePlaceholder(),
        meta: createMetaElement('+12 today'),
        onClick: () => console.log('Card 2 clicked'),
      }),
      createChartCard({
        title: 'Code Coverage',
        value: createValueElement('89%'),
        chart: createBarChartPlaceholder(),
        meta: createMetaElement('Stable'),
        onClick: () => console.log('Card 3 clicked'),
      }),
    ];

    cards.forEach(card => {
      card.style.flex = '1';
      card.style.minWidth = '0';
      container.appendChild(card);
    });

    return container;
  },
};

/**
 * Chart card with custom value element (demonstrates flexibility).
 */
export const CustomValue: Story = {
  render: () => {
    const customValue = document.createElement('div');
    customValue.style.display = 'flex';
    customValue.style.alignItems = 'baseline';
    customValue.style.gap = 'var(--spacing-8)';

    const primary = document.createElement('span');
    primary.style.fontSize = 'var(--ui-text-page-title-font-size)';
    primary.style.fontWeight = 'var(--ui-text-page-title-font-weight)';
    primary.style.color = 'var(--text-primary)';
    primary.textContent = '12,847';

    const unit = document.createElement('span');
    unit.style.fontSize = 'var(--ui-text-body-font-size)';
    unit.style.color = 'var(--text-secondary)';
    unit.textContent = 'requests';

    customValue.appendChild(primary);
    customValue.appendChild(unit);

    return createChartCard({
      title: 'API Usage',
      value: customValue,
      chart: createSparklinePlaceholder(),
      meta: createMetaElement('Last 24 hours'),
      onClick: () => console.log('ChartCard clicked'),
    });
  },
};
