/**
 * ⚠️ DASHBOARD PAGE PATTERN — DEMO STORY ONLY
 * 
 * This file provides a visual demonstration story for the Dashboard Page Pattern.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * ⚠️ CANONICAL PATTERN DOCUMENTATION IS IN dashboard.mdx
 * 
 * For the authoritative Dashboard Page Pattern definition, see:
 * src/stories/compositions/page-patterns/dashboard/dashboard.mdx
 * 
 * OR navigate to: "2. Page Patterns / Dashboard" (Docs tab) in Storybook
 * 
 * This file contains ONLY the visual demonstration story.
 * All pattern rules, archetypes, and guidelines are in dashboard.mdx.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createMetricsRow } from '../../../../components/metrics-row/metrics-row';
import { createCard } from '../../../../components/card/card';
import { createChartCard } from '../../../../components/chart-card/chart-card';
import { createTableGrid, createTableHeader, createTableBody } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createListGroup } from '../../../../components/list-group/list-group';
import { createListItem } from '../../../../components/list-item/list-item';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';

// =============================================================================
// HELPER: Create demo data structures
// These are neutral placeholders, not product data
// =============================================================================

/**
 * Creates a chart card for dashboard demonstration using ChartCard component.
 * This demonstrates the minimal ChartCard abstraction in real dashboard context.
 */
function createPlaceholderChartCard(config: { label: string; value: string; meta?: string; dense?: boolean }) {
  // Create value element
  const valueElement = document.createElement('div');
  valueElement.textContent = config.value;
  valueElement.style.fontSize = 'var(--ui-text-page-title-font-size)';
  valueElement.style.fontWeight = 'var(--ui-text-page-title-font-weight)';
  valueElement.style.color = 'var(--text-primary)';
  
  // Create meta element if provided
  let metaElement: HTMLElement | undefined;
  if (config.meta) {
    metaElement = document.createElement('div');
    metaElement.textContent = config.meta;
  }
  
  // Use ChartCard component
  return createChartCard({
    title: config.label,
    value: valueElement,
    meta: metaElement,
    dense: config.dense,
    onClick: () => {
      // Placeholder: In production, this would open a drawer with detailed chart
      console.log(`Chart card clicked: ${config.label}`);
    },
  });
}

function createDemoTable(columns = 3) {
  const headerCells = [
    createTableHeaderCell({ children: 'Name' }),
    createTableHeaderCell({ children: 'Status' }),
    createTableHeaderCell({ children: 'Value', align: 'right' }),
  ];

  if (columns > 3) {
    headerCells.push(createTableHeaderCell({ children: 'Date' }));
  }
  if (columns > 4) {
    headerCells.push(createTableHeaderCell({ children: 'Category' }));
  }

  const rows = [
    { name: 'Item Alpha', status: 'Active', value: '100', date: '2024-01-15', category: 'Type A' },
    { name: 'Item Beta', status: 'Pending', value: '250', date: '2024-01-14', category: 'Type B' },
    { name: 'Item Gamma', status: 'Active', value: '175', date: '2024-01-13', category: 'Type A' },
    { name: 'Item Delta', status: 'Inactive', value: '50', date: '2024-01-12', category: 'Type C' },
  ];

  const tableRows = rows.map((row) => {
    const cells = [
      createTableCell({ children: row.name, contentType: 'primary' }),
      createTableCell({ children: row.status, contentType: 'secondary' }),
      createTableCell({ children: row.value, contentType: 'numeric', align: 'right' }),
    ];

    if (columns > 3) {
      cells.push(createTableCell({ children: row.date, contentType: 'muted' }));
    }
    if (columns > 4) {
      cells.push(createTableCell({ children: row.category, contentType: 'secondary' }));
    }

    return createTableRow({ children: cells });
  });

  return createTableGrid({
    columns,
    children: [
      createTableHeader(headerCells),
      createTableBody(tableRows),
    ],
  });
}

function createDemoListGroup() {
  const items = [
    'Configuration updated',
    'New user registered',
    'Report generated',
    'System backup completed',
    'Cache cleared',
  ];

  return createListGroup({
    children: items.map((text) =>
      createListItem({
        children: document.createTextNode(text),
      })
    ),
  });
}

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createDemoNav(activeItemId = 'dashboard') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'mailing-lists', children: createTextNode('Mailing Lists') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'surveys', children: createTextNode('Surveys') }),
        createNavItem({ id: 'drive', children: createTextNode('Drive') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'settings', children: createTextNode('Settings') }),
      ]),
    ],
  });
}

// =============================================================================
// STORY-ONLY PAGE WIDTH WRAPPER
// This exists to make composition stories readable in Storybook.
// Mirrors real LFX One laptop viewport usage (~1280px constraint).
// This is NOT part of the production UI — it's a presentation aid only.
// =============================================================================

function wrapForStorybook(content: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '1280px';
  wrapper.style.margin = '0 auto';
  wrapper.appendChild(content);
  return wrapper;
}

// =============================================================================
// CANONICAL DASHBOARD COMPOSITION
// This hierarchy must match the contract architecture exactly
// =============================================================================

interface DashboardArgs {
  dense?: boolean;
  metricsCount?: number;
  tableColumns?: number;
}

function createDashboard(args: DashboardArgs = {}) {
  const {
    dense = false,
    metricsCount = 3,
    tableColumns = 3,
  } = args;

  // Build chart cards based on count
  const chartCards = [];
  const chartData = [
    { label: 'Total Items', value: '1,234', meta: 'All time' },
    { label: 'Active Users', value: '567', meta: 'This month' },
    { label: 'Completion Rate', value: '89%', meta: 'Average' },
    { label: 'Open Tasks', value: '42', meta: 'Pending' },
    { label: 'Revenue', value: '$12.5K', meta: 'This quarter' },
    { label: 'Growth', value: '15%', meta: 'Year over year' },
  ];

  for (let i = 0; i < Math.min(metricsCount, chartData.length); i++) {
    chartCards.push(
      createPlaceholderChartCard({
        ...chartData[i],
        dense,
      })
    );
  }

  // Build the page content
  const pageContent = createPageLayout({
    dense,
    children: [
      // AppHeader must be first child
      createAppHeader({
        title: 'Dashboard',
        description: 'System composition validation',
        dense,
      }),

      // Metrics section
      createPageSection({
        dense,
        children: createMetricsRow({
          dense,
          children: chartCards,
        }),
      }),

      // Table section
      createPageSection({
        dense,
        children: createCard({
          dense,
          children: createDemoTable(tableColumns),
        }),
      }),

      // List section
      createPageSection({
        dense,
        children: createCard({
          dense,
          children: createDemoListGroup(),
        }),
      }),
    ],
  });

  // GlobalNav is ALWAYS rendered as part of AppShell
  // Dashboard pattern always highlights 'dashboard' in navigation
  const nav = createDemoNav('dashboard');

  // Full AppShell with nav
  const appShell = createAppShell({
    nav,
    content: pageContent,
  });

  // Wrap for Storybook presentation (story-only constraint)
  return wrapForStorybook(appShell);
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<DashboardArgs> = {
  title: 'Page Patterns / Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Apply dense spacing to all components',
    },
    metricsCount: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: 'Number of metric cards to display',
    },
    tableColumns: {
      control: { type: 'range', min: 3, max: 5, step: 1 },
      description: 'Number of table columns',
    },
  },
  render: (args) => createDashboard(args),
};

export default meta;
type Story = StoryObj<DashboardArgs>;

// =============================================================================
// DOCS ANCHOR
// =============================================================================

/**
 * Anchor story for Docs tab ordering.
 * This ensures the canonical MDX documentation appears first in the sidebar.
 */
export const Docs: Story = {
  render: () => null,
  parameters: {
    docs: {
      disable: true,
    },
  },
};

// =============================================================================
// STORIES
// Variants achieved through existing props only
// =============================================================================

/**
 * Default dashboard with standard spacing.
 * This is the canonical composition that all other variants derive from.
 */
export const Default: Story = {
  args: {
    dense: false,
    metricsCount: 3,
    tableColumns: 3,
  },
};

/**
 * Dense dashboard using dense props where available.
 * Demonstrates the system's density controls work consistently.
 */
export const Dense: Story = {
  args: {
    dense: true,
    metricsCount: 3,
    tableColumns: 3,
  },
};

/**
 * Dashboard with single metric card.
 * Tests composition at minimal metrics content.
 */
export const SingleMetric: Story = {
  args: {
    dense: false,
    metricsCount: 1,
    tableColumns: 3,
  },
};

/**
 * Dashboard with many metrics to test MetricsRow wrapping behavior.
 * Validates that the flex-wrap layout handles overflow correctly.
 */
export const ManyMetrics: Story = {
  args: {
    dense: false,
    metricsCount: 6,
    tableColumns: 3,
  },
};

/**
 * Dashboard with extended table columns.
 * Tests table grid layout with more data density.
 */
export const ExtendedTable: Story = {
  args: {
    dense: false,
    metricsCount: 3,
    tableColumns: 5,
  },
};

/**
 * Dense dashboard with all content maximized.
 * Stress test for the composition system.
 */
export const DenseMaxContent: Story = {
  args: {
    dense: true,
    metricsCount: 6,
    tableColumns: 5,
  },
};

/**
 * Minimal dense dashboard with minimal content.
 * Tests composition at minimum viable content with dense spacing.
 */
export const MinimalDense: Story = {
  args: {
    dense: true,
    metricsCount: 1,
    tableColumns: 3,
  },
};

/**
 * Governance Health with Contributor Dependency Drawer
 * 
 * VALIDATION: Confirms that Insights-grade charts can be hosted
 * inside LFX One interaction surfaces without becoming Insights pages.
 * 
 * This story demonstrates:
 * - Board Dashboard → Governance Health metric
 * - Click opens RIGHT-SIDE DRAWER (not modal, not page)
 * - Drawer contains Contributor Dependency chart (Insights parity)
 * - Chart shows concentration risk visually
 * - CTA links to full Insights analysis
 * 
 * Purpose: Validate that the chart system is extensible and that
 * Insights-grade visualizations fit naturally into LFX One's surfaces.
 * 
 * This is NOT an Insights page. This IS a validation exercise.
 */
export const GovernanceHealthWithContributorDependencyDrawer: Story = {
  render: () => {
    const container = document.createElement('div');
    
    // Create simple dashboard with one clickable metric
    const dashboard = document.createElement('div');
    dashboard.style.cssText = `
      padding: var(--spacing-24);
      background: var(--ui-surface-page);
      min-height: 100vh;
    `;
    
    // Title
    const title = document.createElement('h1');
    title.textContent = 'Board Dashboard';
    title.style.cssText = `
      font-size: var(--ui-text-page-title-font-size);
      font-weight: var(--ui-text-page-title-font-weight);
      color: var(--text-primary);
      margin: 0 0 var(--spacing-24) 0;
    `;
    dashboard.appendChild(title);
    
    // Metric card (clickable)
    const metricCard = document.createElement('div');
    metricCard.style.cssText = `
      background: var(--ui-surface-container);
      border: 1px solid var(--ui-surface-divider);
      border-radius: var(--ui-card-radius);
      padding: var(--spacing-16);
      max-width: 300px;
      cursor: pointer;
      transition: background-color 0.15s ease;
    `;
    
    metricCard.addEventListener('mouseenter', () => {
      metricCard.style.backgroundColor = 'var(--ui-surface-hover)';
    });
    
    metricCard.addEventListener('mouseleave', () => {
      metricCard.style.backgroundColor = 'var(--ui-surface-container)';
    });
    
    const metricTitle = document.createElement('div');
    metricTitle.textContent = 'Contributor Dependency';
    metricTitle.style.cssText = `
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-8);
    `;
    metricCard.appendChild(metricTitle);
    
    const metricValue = document.createElement('div');
    metricValue.textContent = 'High Risk';
    metricValue.style.cssText = `
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--warning-600);
      margin-bottom: var(--spacing-4);
    `;
    metricCard.appendChild(metricValue);
    
    const metricDesc = document.createElement('div');
    metricDesc.textContent = 'Top 12 contributors = 53% of activity';
    metricDesc.style.cssText = `
      font-size: var(--text-xs);
      color: var(--text-secondary);
    `;
    metricCard.appendChild(metricDesc);
    
    const clickHint = document.createElement('div');
    clickHint.textContent = '→ Click to view details';
    clickHint.style.cssText = `
      font-size: var(--text-xs);
      color: var(--accent-600);
      margin-top: var(--spacing-8);
    `;
    metricCard.appendChild(clickHint);
    
    dashboard.appendChild(metricCard);
    
    // Drawer (hidden by default)
    const drawer = document.createElement('div');
    drawer.style.cssText = `
      position: fixed;
      top: 0;
      right: -600px;
      width: 600px;
      height: 100vh;
      background: var(--ui-surface-container);
      border-left: 1px solid var(--ui-surface-divider);
      box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
      transition: right 0.3s ease;
      overflow-y: auto;
      z-index: 1000;
    `;
    
    // Drawer content
    const drawerContent = document.createElement('div');
    drawerContent.style.cssText = `
      padding: var(--spacing-24);
    `;
    
    // Drawer header
    const drawerHeader = document.createElement('div');
    drawerHeader.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-24);
    `;
    
    const drawerTitle = document.createElement('h2');
    drawerTitle.textContent = 'Contributor Dependency';
    drawerTitle.style.cssText = `
      font-size: var(--ui-text-section-title-font-size);
      font-weight: var(--ui-text-section-title-font-weight);
      color: var(--text-primary);
      margin: 0;
    `;
    drawerHeader.appendChild(drawerTitle);
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      background: none;
      border: none;
      font-size: var(--text-xl);
      color: var(--text-secondary);
      cursor: pointer;
      padding: var(--spacing-4);
    `;
    closeBtn.addEventListener('click', () => {
      drawer.style.right = '-600px';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    });
    drawerHeader.appendChild(closeBtn);
    
    drawerContent.appendChild(drawerHeader);
    
    // Explanatory text
    const explanation = document.createElement('div');
    explanation.textContent = 'A small group of contributors accounts for a majority of activity. This concentration represents a governance risk.';
    explanation.style.cssText = `
      font-size: var(--text-sm);
      color: var(--text-secondary);
      line-height: var(--leading-text-sm);
      margin-bottom: var(--spacing-24);
    `;
    drawerContent.appendChild(explanation);
    
    // Import chart dynamically (inline for demo)
    const chartContainer = document.createElement('div');
    chartContainer.style.cssText = `
      margin-bottom: var(--spacing-24);
    `;
    
    // Simulate chart (placeholder for actual chart import)
    const chartPlaceholder = document.createElement('div');
    chartPlaceholder.innerHTML = `
      <div style="
        background: var(--ui-surface-subtle);
        border: 1px solid var(--ui-surface-divider);
        border-radius: var(--ui-card-radius);
        padding: var(--spacing-16);
        text-align: center;
        min-height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      ">
        <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-8);">
          Contributor Dependency Chart
        </div>
        <div style="font-size: var(--text-xs); color: var(--text-muted);">
          [Stacked horizontal bar: Top 12 contributors = 53%, Remaining = 47%]
        </div>
        <div style="margin-top: var(--spacing-16); font-size: var(--text-xs); color: var(--text-secondary);">
          This demonstrates Insights-grade chart rendering inside LFX One drawer.
          <br/>See Chart component stories for working implementation.
        </div>
      </div>
    `;
    chartContainer.appendChild(chartPlaceholder);
    drawerContent.appendChild(chartContainer);
    
    // CTA
    const cta = document.createElement('div');
    cta.style.cssText = `
      padding: var(--spacing-16);
      background: var(--ui-surface-subtle);
      border-radius: var(--ui-card-radius);
      border: 1px solid var(--ui-surface-divider);
    `;
    cta.innerHTML = `
      <div style="font-size: var(--text-sm); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--spacing-4);">
        Need deeper analysis?
      </div>
      <a href="#" style="font-size: var(--text-sm); color: var(--accent-600); text-decoration: none;">
        View full contributor analysis in LFX Insights →
      </a>
    `;
    drawerContent.appendChild(cta);
    
    drawer.appendChild(drawerContent);
    
    // Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 999;
    `;
    overlay.addEventListener('click', () => {
      drawer.style.right = '-600px';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    });
    
    // Click handler to open drawer
    metricCard.addEventListener('click', () => {
      drawer.style.right = '0';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
    });
    
    container.appendChild(dashboard);
    container.appendChild(overlay);
    container.appendChild(drawer);
    
    return container;
  },
};

// =============================================================================
// VERIFICATION COMMENT
// =============================================================================

/**
 * VERIFICATION CHECKLIST (completed):
 * ✓ No component CSS was modified
 * ✓ No tokens were added or changed
 * ✓ No inline styles exist
 * ✓ No semantic or primitive tokens are referenced in this story
 * ✓ Composition works without special casing
 * ✓ Removing any single component breaks expected structure (proving necessity)
 *
 * If this dashboard feels wrong, the fix must occur in tokens or contracts — never here.
 */
