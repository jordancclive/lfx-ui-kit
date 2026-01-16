/**
 * Dashboard Composition Story
 * 
 * PURPOSE:
 * This dashboard exists to validate system composition, not to define final UI.
 * All layout, spacing, and hierarchy must emerge from existing contracts.
 * No styling overrides are permitted.
 * No new tokens or props may be introduced.
 * 
 * This story is a system-level composition test for AppShell, PageLayout,
 * PageSection, and pattern components.
 * 
 * RULES:
 * - AppHeader must be the first child of PageLayout
 * - Every major block must be wrapped in PageSection
 * - Cards must only be used where surface containment is needed
 * - MetricsRow must contain only MetricCard children
 * 
 * VERIFICATION:
 * If this dashboard feels wrong, the fix must occur in tokens or contracts — never here.
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../components/app-shell/app-shell';
import { createPageLayout } from '../../components/page-layout/page-layout';
import { createAppHeader } from '../../components/app-header/app-header';
import { createPageSection } from '../../components/page-section/page-section';
import { createMetricsRow } from '../../components/metrics-row/metrics-row';
import { createMetricCard } from '../../components/metric-card/metric-card';
import { createCard } from '../../components/card/card';
import { createTable, createTableHeader, createTableBody } from '../../components/table/table';
import { createTableHeaderCell } from '../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../components/table-row/table-row';
import { createTableCell } from '../../components/table-cell/table-cell';
import { createListGroup } from '../../components/list-group/list-group';
import { createListItem } from '../../components/list-item/list-item';
import { createGlobalNav, createNavSection, createNavItem } from '../../components/global-nav/global-nav';

// =============================================================================
// HELPER: Create demo data structures
// These are neutral placeholders, not product data
// =============================================================================

function createDemoMetrics(dense = false) {
  return createMetricsRow({
    dense,
    children: [
      createMetricCard({
        label: 'Total Items',
        value: '1,234',
        meta: 'All time',
        dense,
      }),
      createMetricCard({
        label: 'Active Users',
        value: '567',
        meta: 'This month',
        dense,
      }),
      createMetricCard({
        label: 'Completion Rate',
        value: '89%',
        meta: 'Average',
        dense,
      }),
    ],
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

  return createTable({
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
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'reports', children: createTextNode('Reports') }),
        createNavItem({ id: 'settings', children: createTextNode('Settings') }),
      ]),
    ],
  });
}

// =============================================================================
// CANONICAL DASHBOARD COMPOSITION
// This hierarchy must match the contract architecture exactly
// =============================================================================

interface DashboardArgs {
  dense?: boolean;
  showNav?: boolean;
  metricsCount?: number;
  tableColumns?: number;
}

function createDashboard(args: DashboardArgs = {}) {
  const {
    dense = false,
    showNav = true,
    metricsCount = 3,
    tableColumns = 3,
  } = args;

  // Build metrics based on count
  const metricCards = [];
  const metricData = [
    { label: 'Total Items', value: '1,234', meta: 'All time' },
    { label: 'Active Users', value: '567', meta: 'This month' },
    { label: 'Completion Rate', value: '89%', meta: 'Average' },
    { label: 'Open Tasks', value: '42', meta: 'Pending' },
    { label: 'Revenue', value: '$12.5K', meta: 'This quarter' },
    { label: 'Growth', value: '15%', meta: 'Year over year' },
  ];

  for (let i = 0; i < Math.min(metricsCount, metricData.length); i++) {
    metricCards.push(
      createMetricCard({
        ...metricData[i],
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
          children: metricCards,
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

  // Full AppShell with optional nav
  return createAppShell({
    nav: showNav ? createDemoNav() : undefined,
    content: pageContent,
  });
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<DashboardArgs> = {
  title: 'Compositions/Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Dashboard Composition

This is a **system verification artifact**, not a product feature.

### Purpose

- Validates that existing components compose correctly at page scale
- Proves the contract architecture is sound
- Demonstrates the canonical layout hierarchy

### Architecture

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   ├─ PageSection → MetricsRow → MetricCard×N
   ├─ PageSection → Card → Table
   └─ PageSection → Card → ListGroup
\`\`\`

### Rules

- No styling overrides permitted
- No new tokens or props introduced
- All spacing/hierarchy emerges from contracts
- If something looks wrong, fix tokens or contracts — not this story
        `,
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Apply dense spacing to all components',
    },
    showNav: {
      control: 'boolean',
      description: 'Show navigation sidebar',
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
    showNav: true,
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
    showNav: true,
    metricsCount: 3,
    tableColumns: 3,
  },
};

/**
 * Dashboard without navigation sidebar.
 * Simulates content-focused view or narrower viewport context.
 */
export const WithoutNav: Story = {
  args: {
    dense: false,
    showNav: false,
    metricsCount: 3,
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
    showNav: true,
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
    showNav: true,
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
    showNav: true,
    metricsCount: 6,
    tableColumns: 5,
  },
};

/**
 * Minimal dashboard - single metric, minimal columns.
 * Tests composition at minimum viable content.
 */
export const Minimal: Story = {
  args: {
    dense: false,
    showNav: false,
    metricsCount: 1,
    tableColumns: 3,
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
