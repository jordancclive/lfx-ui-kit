import type { Meta, StoryObj } from '@storybook/html';
import { createMetricCard, MetricCardProps } from './metric-card';
import { createButton } from '../button/button';
import { createPageLayout } from '../page-layout/page-layout';
import { createPageSection } from '../page-section/page-section';

/**
 * # MetricCard
 * 
 * **Level 2 — Molecule Component**
 * 
 * MetricCard is a reusable component for displaying a single metric value with optional
 * context (label, meta, footer). It is used across dashboards, table pages, and summary surfaces.
 * 
 * This documentation establishes MetricCard's boundaries, responsibilities, and relationships
 * within the LFX One design system.
 * 
 * ---
 * 
 * ## Purpose
 * 
 * MetricCard exists to provide a **consistent, reusable structure** for displaying metrics
 * across the LFX One system.
 * 
 * It standardizes:
 * - Metric value hierarchy (label → value → meta)
 * - Spacing and typography
 * - Visual treatment and containment
 * - Interactive behavior (clickability, drawer drilldown)
 * 
 * MetricCard is NOT:
 * - A charting system (it displays values, not visualizations)
 * - A dashboard section (it's a single-metric component)
 * - An action surface (actions go in footer or drawer)
 * - A data fetching mechanism
 * 
 * ---
 * 
 * ## Core Responsibilities (Locked)
 * 
 * **MetricCard MUST:**
 * - Display a primary metric value prominently
 * - Support optional label, meta text, and footer
 * - Delegate surface styling to Card component
 * - Use UI role tokens for typography (not primitives)
 * - Support dense spacing variant
 * 
 * **MetricCard MUST NOT:**
 * - Own Card surface styling (Card component owns this)
 * - Implement data formatting logic (consumers format data)
 * - Implement color semantics for trend direction (not yet defined)
 * - Render charts or visualizations (use drawer for that)
 * - Manage click handlers directly (consumers provide click behavior)
 * 
 * **Ownership Boundaries:**
 * 
 * | Owns | Does NOT Own |
 * |------|--------------|
 * | Internal layout of label, value, meta, footer | Card surface styling |
 * | Typography role usage (via UI tokens) | Data formatting logic |
 * | Spacing between metric elements | Color semantics of values (positive/negative) |
 * | Click event delegation | Click handler implementation |
 * 
 * ---
 * 
 * ## Canonical Structure
 * 
 * MetricCard has a simple, fixed hierarchy:
 * 
 * ```
 * MetricCard (wraps Card)
 * └─ Card
 *    ├─ Label (optional)
 *    ├─ Value (required)
 *    ├─ Meta (optional)
 *    └─ Footer (optional)
 * ```
 * 
 * **Typography Hierarchy:**
 * - Label: Small, secondary (metadata)
 * - Value: Large, primary (focal point)
 * - Meta: Small, muted (supporting context)
 * 
 * **Visual Hierarchy:**
 * - Value is the primary visual element (largest, boldest)
 * - Label provides context (what is this metric?)
 * - Meta provides additional context (time period, trend, etc)
 * - Footer provides actions (view details, ask LFX Lens, etc)
 * 
 * ---
 * 
 * ## Supported Variants (Conceptual)
 * 
 * MetricCard may support the following conceptual variants in the future:
 * 
 * ### 1. Sparkline Summary
 * - Value + small inline sparkline
 * - Provides quick trend visualization
 * - Does NOT replace full chart in drawer
 * 
 * ### 2. Vertical Bar Summary
 * - Value + small vertical bar chart
 * - Shows categorical breakdown at a glance
 * - Does NOT replace full chart in drawer
 * 
 * ### 3. Status / Indicator
 * - Value + status badge (e.g., "Healthy", "Warning", "Critical")
 * - Color-coded based on thresholds
 * - Does NOT implement logic (consumer provides status)
 * 
 * **Important:** These variants are **conceptual only** and not yet implemented.
 * Future additions must respect the Core Responsibilities above.
 * 
 * ---
 * 
 * ## Interaction Model
 * 
 * MetricCard supports click-based drilldown behavior following the system-wide
 * **Drawer vs Modal vs Page** contract.
 * 
 * ### Default Behavior (Non-Interactive)
 * 
 * By default, MetricCard is **non-interactive** (no click behavior).
 * It displays a metric value for at-a-glance scanning.
 * 
 * ### Clickable MetricCard (Drawer Drilldown)
 * 
 * When MetricCard is clickable, it MUST follow these rules:
 * 
 * **On Click:**
 * - Opens a **Drawer** (slides in from right)
 * - Drawer shows expanded metric visualization (chart, table, details)
 * - Drawer preserves dashboard/page context
 * 
 * **Drawer Contents (Typical):**
 * - Expanded chart (line, bar, trend)
 * - Historical data or time-series view
 * - Contextual explanation of the metric
 * - Optional link to deeper analytics (e.g., LFX Insights)
 * 
 * **Why Drawer (Not Modal or Page):**
 * - Preserves context (user can see other metrics)
 * - Lightweight, non-blocking interaction
 * - Supports quick exploration and comparison
 * 
 * **Rules:**
 * - MetricCard MUST NOT open modals (modals are for confirmations only)
 * - MetricCard MUST NOT navigate to pages (pages are for complex workflows)
 * - MetricCard click behavior MUST be provided by consumer (not component default)
 * 
 * ---
 * 
 * ## Drawer vs Modal vs Page
 * 
 * MetricCard interaction behavior follows the system-wide contract defined in  
 * **0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.
 * 
 * - **Metric drill-down → DRAWER** (expanded visualization, preserves context)
 * - **Confirmation actions → MODAL** (if metric has destructive actions)
 * - **Complex workflows → PAGE** (if metric requires multi-step interaction)
 * 
 * In practice, **Drawer is the default** for MetricCard interactions.
 * 
 * ---
 * 
 * ## When to Use MetricCard
 * 
 * Use MetricCard when:
 * 
 * ✅ Displaying a **single metric value** with optional context  
 * ✅ Building **dashboard metric rows** (via MetricsRow or MetricCluster)  
 * ✅ Showing **KPI summaries** on table pages or detail pages  
 * ✅ Need **consistent metric presentation** across the system  
 * ✅ Metric may have **optional drilldown** to expanded view  
 * 
 * **Typical Use Cases:**
 * - Dashboard metric displays (Board Member, Contributor, Maintainer dashboards)
 * - Table page summaries (total count, active items, etc)
 * - Project overview pages (contribution stats, health metrics)
 * - Organization pages (member count, activity metrics)
 * 
 * ---
 * 
 * ## When NOT to Use MetricCard
 * 
 * Do NOT use MetricCard when:
 * 
 * ❌ Displaying **multiple metrics in one card** (break into separate MetricCards)  
 * ❌ Building **complex charts or visualizations** (use drawer with chart component)  
 * ❌ Creating **action surfaces** (use ActionCard or Button instead)  
 * ❌ Displaying **non-metric content** (use Card or other components)  
 * ❌ Need **custom layout logic** (MetricCard structure is fixed)  
 * 
 * **Use these instead:**
 * - Multiple metrics → Multiple MetricCards in MetricsRow or MetricCluster
 * - Charts → Drawer with chart component
 * - Actions → ActionCard (for user tasks) or Button (for simple CTAs)
 * - Custom content → Card or custom component
 * 
 * ---
 * 
 * ## Relationship to Other Patterns
 * 
 * ### MetricCluster (Dashboard Primitive)
 * 
 * **MetricCluster** is a dashboard-level section pattern that uses MetricCard.
 * 
 * - MetricCluster defines WHERE metrics appear on a dashboard
 * - MetricCluster defines HOW metrics are grouped semantically
 * - MetricCard defines WHAT a single metric looks like
 * 
 * **Mental model:**
 * - MetricCluster = section (e.g., "Performance Metrics")
 * - MetricCard = single metric (e.g., "Response Time: 142ms")
 * 
 * ### Dashboard Page Pattern
 * 
 * MetricCard is used extensively in Dashboard Page Pattern via:
 * - MetricsRow (horizontal row of metrics)
 * - MetricCluster (semantically grouped metrics with header)
 * 
 * Dashboard pattern defines page-level composition.
 * MetricCard defines component-level structure.
 * 
 * ### Table Page Pattern
 * 
 * MetricCard may appear in Table Page as:
 * - Summary metrics above table (e.g., "Total Items: 1,234")
 * - Section summaries in segmented table pages
 * 
 * Table Page uses MetricCard for summaries, not as primary content.
 * 
 * ### MetricsRow (Level 3 Component)
 * 
 * MetricsRow is a horizontal layout container for MetricCards.
 * 
 * - MetricsRow owns horizontal layout and spacing
 * - MetricCard owns individual metric structure
 * - They are complementary, not overlapping
 * 
 * ---
 * 
 * ## Accessibility & Semantics (High-Level Intent)
 * 
 * MetricCard should follow these accessibility principles:
 * 
 * ### Semantic Structure
 * - Use appropriate heading levels for label (if label is a heading)
 * - Use `<figure>` and `<figcaption>` semantics where appropriate
 * - Ensure value is programmatically associated with label
 * 
 * ### Interactive Behavior
 * - If clickable, MetricCard MUST be keyboard accessible (focusable, Enter/Space to activate)
 * - Provide clear focus indicators
 * - Announce drilldown availability to screen readers
 * 
 * ### Color & Contrast
 * - Do NOT rely on color alone to convey meaning
 * - Ensure sufficient contrast for all text elements
 * - Use supplementary indicators (icons, text) for trend direction
 * 
 * **Note:** Detailed implementation will be specified when accessibility audit is complete.
 * 
 * ---
 * 
 * ## Agent Guidance (Non-Normative)
 * 
 * **This guidance is observational, not locked.**
 * 
 * When generating pages or dashboards with metrics, agents should:
 * 
 * - Use **MetricCard** for individual metric displays
 * - Group MetricCards in **MetricsRow** for horizontal layout
 * - Use **MetricCluster** (dashboard primitive) for semantically grouped metrics with headers
 * - Assume **Drawer drilldown** for metric exploration
 * - Do NOT invent custom metric layouts (use MetricCard consistently)
 * 
 * **Agents should NOT:**
 * - Create custom metric card components (reuse MetricCard)
 * - Implement chart rendering inside MetricCard (use drawer)
 * - Add navigation to pages from MetricCard (use drawer)
 * - Bypass MetricCard for dashboard metrics (breaks consistency)
 * 
 * **Decision Tree:**
 * - Single metric? → Use MetricCard
 * - Multiple metrics in a row? → Use MetricsRow with multiple MetricCards
 * - Grouped metrics with header? → Use MetricCluster with MetricCards
 * - Need drilldown? → Add click handler that opens Drawer
 * 
 * ---
 * 
 * ## Future Extensions (Explicitly Not Locked)
 * 
 * The following extensions are **under consideration** but NOT yet implemented:
 * 
 * ### Visual Enhancements
 * - Sparkline integration (small inline chart)
 * - Status badges (health indicators)
 * - Trend arrows (up/down with color semantics)
 * - Comparison mode (e.g., current vs previous period)
 * 
 * ### Interaction Enhancements
 * - Hover preview (tooltip with additional context)
 * - Keyboard shortcuts for drilldown
 * - Multi-select mode (for comparison)
 * 
 * ### Data Integration
 * - Live update indicators (real-time data)
 * - Loading states (skeleton, spinner)
 * - Error states (failed to load)
 * 
 * **Important:** These are NOT commitments. Future additions must:
 * - Respect Core Responsibilities above
 * - Follow Drawer vs Modal vs Page contract
 * - Maintain backwards compatibility
 * - Be documented before implementation
 * 
 * ---
 * 
 * ## Summary
 * 
 * MetricCard is a **Level 2 Molecule component** for displaying single metric values
 * with consistent structure, typography, and interaction behavior.
 * 
 * **Key Takeaways:**
 * - Use MetricCard for single metric displays
 * - Delegate surface styling to Card component
 * - Follow Drawer drilldown pattern for interactions
 * - Use within MetricsRow or MetricCluster for layout
 * - Do NOT invent custom metric structures
 * 
 * **Relationship Summary:**
 * - MetricCard (this component) = single metric structure
 * - MetricsRow (Level 3) = horizontal layout container
 * - MetricCluster (dashboard primitive) = dashboard section pattern
 * - Dashboard Page Pattern = page-level composition
 * 
 * **For Implementation Details:**
 * - See existing stories below for visual examples
 * - See component implementation for prop definitions
 * - See Dashboard pattern docs for usage in context
 */
const meta: Meta<MetricCardProps> = {
  title: '1. Components / 2. Molecules / 4. MetricCard',
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
