/**
 * PAGE EXAMPLE — NOT A PATTERN
 * 
 * This file is a concrete product page.
 * It demonstrates usage of a page pattern, but does NOT define one.
 * 
 * Pattern used: Dashboard Page Pattern
 * 
 * Agents must NOT treat this file as reusable structure.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * BOARD MEMBER DASHBOARD
 * 
 * This page validates the Dashboard Page Pattern against a real LFX One use case.
 * 
 * Purpose:
 * - Prove Dashboard pattern works for Board Member role without new abstractions
 * - Validate chart + drawer interaction model
 * - Confirm Insights Escalation Contract compliance
 * - Surface any friction points in the pattern
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * VALIDATION NOTES (INLINE)
 * 
 * Throughout this file, you'll find comments marked with:
 * 
 * ✅ WORKS WELL — Pattern primitive worked cleanly
 * ⚠️ AWKWARD — Felt clunky but functional
 * 💡 FUTURE — May need refinement (not blocking)
 * 
 * These notes document pattern fitness without solving issues.
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
import { createChart } from '../../../../components/chart/chart';
import { createTableGrid, createTableHeader, createTableBody } from '../../../../components/table-grid/table-grid';
import { createTableHeaderCell } from '../../../../components/table-header-cell/table-header-cell';
import { createTableRow } from '../../../../components/table-row/table-row';
import { createTableCell } from '../../../../components/table-cell/table-cell';
import { createListGroup } from '../../../../components/list-group/list-group';
import { createListItem } from '../../../../components/list-item/list-item';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTag } from '../../../../components/tag/tag';
import { createButton } from '../../../../components/button/button';
import { createSummaryCard } from '../../../../components/summary-card/summary-card';

// Chart configs
import { createStackedBarOption } from '../../../../components/chart/config/stackedBar';
import { createSparklineOption } from '../../../../components/chart/config/lineAreaSparkline';

// =============================================================================
// HELPER: Text node creator
// =============================================================================

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

// =============================================================================
// SECTION 1: Governance Health (MetricCluster with Charts)
// =============================================================================

/**
 * ✅ WORKS WELL: ChartCard + createChart integration is clean
 * ✅ WORKS WELL: Chart configs (stacked bar, sparkline) work as expected
 * ⚠️ AWKWARD: Had to manually create drawer HTML - no drawer primitive yet
 * 💡 FUTURE: Consider standardized drawer component for consistency
 */
function createGovernanceHealthSection(): HTMLElement {
  // Contributor Dependency Chart (Stacked Bar - Insights parity)
  const contributorDependencyChart = createChart({
    option: createStackedBarOption({
      categories: [''],
      series: [
        { name: 'Top 12 contributors', data: [53], color: '#0066CC' },
        { name: 'Remaining contributors', data: [47], color: '#E6F0FF' },
      ],
      orientation: 'horizontal',
      showLegend: true,
    }),
    height: 80,
  });

  const contributorDependencyCard = createChartCard({
    title: 'Contributor Dependency',
    chart: contributorDependencyChart,
    onClick: () => {
      // ✅ WORKS WELL: Drawer stub handler is straightforward
      // In production, this would call a drawer service/component
      console.log('[DRAWER STUB] Opening Contributor Dependency drawer...');
      console.log('Would show:');
      console.log('- Full stacked bar chart');
      console.log('- Explanatory text about concentration risk');
      console.log('- CTA: "View full analysis in LFX Insights →"');
      console.log('- NO filtering, NO drilldown, NO tables (Insights Escalation Contract)');
    },
  });

  // Activity Trend Chart (Sparkline)
  const activityTrendChart = createChart({
    option: createSparklineOption({
      values: [45, 52, 48, 55, 58, 54, 60],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  // ⚠️ AWKWARD: Creating value element manually feels verbose
  // ChartCard wants an HTMLElement for value, not a string
  // This works but feels like it could be streamlined
  const activityValueElement = document.createElement('div');
  activityValueElement.textContent = '↑ 15%';
  activityValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  activityValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  activityValueElement.style.color = 'var(--success-600)';

  const activityMetaElement = document.createElement('div');
  activityMetaElement.textContent = 'vs last month';
  activityMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  activityMetaElement.style.color = 'var(--text-secondary)';

  const activityTrendCard = createChartCard({
    title: 'Governance Activity',
    value: activityValueElement,
    meta: activityMetaElement,
    chart: activityTrendChart,
    onClick: () => {
      console.log('[DRAWER STUB] Opening Activity Trend drawer...');
      console.log('Would show:');
      console.log('- Expanded sparkline with more detail');
      console.log('- Trend explanation');
      console.log('- CTA: "View full analysis in LFX Insights →"');
    },
  });

  // ✅ WORKS WELL: MetricsRow handles multiple ChartCards cleanly
  return createMetricsRow({
    children: [contributorDependencyCard, activityTrendCard],
  });
}

// =============================================================================
// SECTION 2: Pending Actions (ActionCard summary)
// =============================================================================

/**
 * ✅ WORKS WELL: SummaryCard eliminates hand-rolled HTML
 * Clean, reusable primitive for action summaries
 * 
 * 💡 FUTURE: ActionCard may specialize from SummaryCard with action-specific semantics
 */
function createPendingActionsSection(): HTMLElement {
  // Helper: Creates action summary card using SummaryCard primitive
  function createActionCard(config: {
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
  }): HTMLElement {
    // Body content
    const body = document.createElement('div');
    body.textContent = config.description;

    // Meta row (date + priority tag)
    const meta = document.createElement('div');
    meta.style.display = 'flex';
    meta.style.gap = 'var(--spacing-8)';
    meta.style.alignItems = 'center';

    const dueDateSpan = document.createElement('span');
    dueDateSpan.textContent = `Due: ${config.dueDate}`;

    const priorityVariant = config.priority === 'high' ? 'danger' : config.priority === 'medium' ? 'warning' : 'default';
    const priorityTag = createTag({
      children: config.priority.toUpperCase(),
      variant: priorityVariant,
    });

    meta.appendChild(dueDateSpan);
    meta.appendChild(priorityTag);

    // Create SummaryCard
    return createSummaryCard({
      title: config.title,
      body,
      meta,
      onClick: () => {
        console.log(`[DRAWER STUB] Opening action detail drawer for: ${config.title}`);
        console.log('Would show:');
        console.log('- Full action details');
        console.log('- Context and history');
        console.log('- Primary CTA to execute action (routes to page)');
      },
    });
  }

  const actionsCard = createCard({
    children: [
      // Section header
      (() => {
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = 'var(--spacing-12)';
        header.style.padding = 'var(--spacing-12) var(--spacing-12) 0';

        const title = document.createElement('h3');
        title.textContent = 'Pending Actions';
        title.style.fontSize = 'var(--ui-text-section-title-font-size)';
        title.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
        title.style.color = 'var(--text-primary)';
        title.style.margin = '0';

        const viewAllBtn = createButton({
          label: 'View All',
          variant: 'secondary',
          size: 'small',
          onClick: () => {
            console.log('[DRAWER STUB] Opening "My Actions" drawer...');
            console.log('Would show:');
            console.log('- List of all pending actions');
            console.log('- Search + filter controls');
            console.log('- Click action → routes to execution page');
          },
        });

        header.appendChild(title);
        header.appendChild(viewAllBtn);
        return header;
      })(),

      // Action items
      createActionCard({
        title: 'Review Q1 Budget Proposal',
        description: 'Finance committee needs board approval',
        dueDate: 'Feb 15, 2026',
        priority: 'high',
      }),
      createActionCard({
        title: 'Approve Technical Charter Update',
        description: 'TSC submitted governance changes',
        dueDate: 'Feb 20, 2026',
        priority: 'medium',
      }),
      createActionCard({
        title: 'Sign Contributor Agreement',
        description: 'New platinum member onboarding',
        dueDate: 'Feb 28, 2026',
        priority: 'medium',
      }),
    ],
  });

  return actionsCard;
}

// =============================================================================
// SECTION 3: Meeting Summary Cluster
// =============================================================================

/**
 * ✅ WORKS WELL: SummaryCard eliminates hand-rolled HTML
 * Clean, reusable primitive for meeting summaries
 * 
 * 💡 FUTURE: MeetingCard may specialize from SummaryCard with meeting-specific semantics
 */
function createMeetingSummarySection(): HTMLElement {
  // Helper: Creates meeting summary card using SummaryCard primitive
  function createMeetingCard(config: {
    title: string;
    date: string;
    time: string;
    attendees: number;
  }): HTMLElement {
    // Meta content (date, time, attendees)
    const meta = document.createElement('div');

    const dateTime = document.createElement('div');
    dateTime.textContent = `${config.date} • ${config.time}`;
    dateTime.style.marginBottom = 'var(--spacing-4)';

    const attendeeCount = document.createElement('div');
    attendeeCount.textContent = `${config.attendees} attendees`;

    meta.appendChild(dateTime);
    meta.appendChild(attendeeCount);

    // Create SummaryCard
    return createSummaryCard({
      title: config.title,
      meta,
      onClick: () => {
        console.log(`[DRAWER STUB] Opening meeting detail drawer for: ${config.title}`);
        console.log('Would show:');
        console.log('- Meeting metadata (agenda, attendees, documents)');
        console.log('- CTA: "View meeting" → routes to full meeting page');
      },
    });
  }

  const meetingsCard = createCard({
    children: [
      // Section header
      (() => {
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = 'var(--spacing-12)';
        header.style.padding = 'var(--spacing-12) var(--spacing-12) 0';

        const title = document.createElement('h3');
        title.textContent = 'Upcoming Meetings';
        title.style.fontSize = 'var(--ui-text-section-title-font-size)';
        title.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
        title.style.color = 'var(--text-primary)';
        title.style.margin = '0';

        const viewAllBtn = createButton({
          label: 'View All',
          variant: 'secondary',
          size: 'small',
          onClick: () => {
            console.log('[DRAWER STUB] Routing to Meetings page...');
            console.log('Would navigate to: /meetings');
          },
        });

        header.appendChild(title);
        header.appendChild(viewAllBtn);
        return header;
      })(),

      // Meeting items
      createMeetingCard({
        title: 'Board of Directors Meeting',
        date: 'Feb 10, 2026',
        time: '2:00 PM PST',
        attendees: 8,
      }),
      createMeetingCard({
        title: 'Quarterly Budget Review',
        date: 'Feb 15, 2026',
        time: '10:00 AM PST',
        attendees: 12,
      }),
      createMeetingCard({
        title: 'Strategic Planning Session',
        date: 'Feb 22, 2026',
        time: '1:00 PM PST',
        attendees: 15,
      }),
    ],
  });

  return meetingsCard;
}

// =============================================================================
// SECTION 4: Recent Activity (Table Preview)
// =============================================================================

/**
 * ✅ WORKS WELL: TableGrid integration is seamless
 * ✅ WORKS WELL: Existing table primitives handle this use case perfectly
 * No issues - this is the cleanest section implementation
 */
function createRecentActivitySection(): HTMLElement {
  const activityData = [
    { action: 'Budget proposal submitted', group: 'Finance Committee', date: 'Feb 1, 2026', status: 'Pending' },
    { action: 'Charter update approved', group: 'TSC', date: 'Jan 30, 2026', status: 'Completed' },
    { action: 'New member onboarded', group: 'Membership', date: 'Jan 29, 2026', status: 'Completed' },
    { action: 'Security audit initiated', group: 'Security WG', date: 'Jan 28, 2026', status: 'In Progress' },
    { action: 'Community survey launched', group: 'Community', date: 'Jan 27, 2026', status: 'Active' },
  ];

  const headerCells = [
    createTableHeaderCell({ children: 'Action' }),
    createTableHeaderCell({ children: 'Group' }),
    createTableHeaderCell({ children: 'Date' }),
    createTableHeaderCell({ children: 'Status' }),
  ];

  const rows = activityData.map((item) => {
    const statusVariant =
      item.status === 'Completed' ? 'success' :
      item.status === 'Pending' ? 'warning' :
      item.status === 'In Progress' ? 'info' : 'default';

    return createTableRow({
      children: [
        createTableCell({ children: item.action, contentType: 'primary' }),
        createTableCell({ children: item.group, contentType: 'secondary' }),
        createTableCell({ children: item.date, contentType: 'muted' }),
        createTableCell({
          children: createTag({ children: item.status, variant: statusVariant }),
          contentType: 'secondary',
        }),
      ],
      clickable: true,
    });
  });

  const table = createTableGrid({
    columns: [
      { key: 'action', semanticType: 'primary' },
      { key: 'group', semanticType: 'categorical' },
      { key: 'date', semanticType: 'meta' },
      { key: 'status', semanticType: 'categorical' },
    ],
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });

  // Wrap table in card with header
  const activityCard = createCard({
    children: [
      // Section header
      (() => {
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = 'var(--spacing-12)';
        header.style.padding = 'var(--spacing-12) var(--spacing-12) 0';

        const title = document.createElement('h3');
        title.textContent = 'Recent Activity';
        title.style.fontSize = 'var(--ui-text-section-title-font-size)';
        title.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
        title.style.color = 'var(--text-primary)';
        title.style.margin = '0';

        const viewAllBtn = createButton({
          label: 'View All',
          variant: 'secondary',
          size: 'small',
          onClick: () => {
            console.log('[DRAWER STUB] Routing to full Activity page...');
            console.log('Would navigate to: /activity');
          },
        });

        header.appendChild(title);
        header.appendChild(viewAllBtn);
        return header;
      })(),
      table,
    ],
  });

  return activityCard;
}

// =============================================================================
// NAVIGATION
// =============================================================================

function createDemoNav(activeItemId = 'dashboard') {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'meetings', children: createTextNode('Meetings') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'activity', children: createTextNode('Activity') }),
        createNavItem({ id: 'settings', children: createTextNode('Settings') }),
      ]),
    ],
  });
}

// =============================================================================
// STORY-ONLY PAGE WIDTH WRAPPER
// =============================================================================

function wrapForStorybook(content: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '1280px';
  wrapper.style.margin = '0 auto';
  wrapper.appendChild(content);
  return wrapper;
}

// =============================================================================
// MAIN COMPOSITION FUNCTION
// =============================================================================

/**
 * Creates the Board Member Dashboard page
 * 
 * VALIDATION SUMMARY:
 * 
 * ✅ PATTERN WORKS: Dashboard structure handles real use case cleanly
 * ✅ CHART INTEGRATION: ChartCard + Chart configs work as expected
 * ✅ TABLE INTEGRATION: TableGrid primitives are perfect for preview tables
 * ✅ SECTION RHYTHM: PageSection + Card composition feels natural
 * ✅ SUMMARY CARDS: SummaryCard eliminates hand-rolled HTML for actions/meetings
 * 
 * ⚠️ VALUE ELEMENTS: ChartCard value prop is verbose (requires manual HTMLElement creation)
 * 
 * 💡 INSIGHTS ESCALATION: Compliant - charts are signal-only with clear CTAs
 * 💡 INTERACTION MODEL: Drawer + SummaryCard work together cleanly
 * 💡 OVERALL FIT: Pattern is production-ready for dashboard use cases
 * 
 * RECOMMENDATION: Dashboard pattern is VALIDATED and ready for broader use.
 * SummaryCard provides clean abstraction for action/meeting cards.
 * ActionCard/MeetingCard may specialize later for domain semantics.
 */
function createBoardMemberDashboard(): HTMLElement {
  // ✅ WORKS WELL: Standard Dashboard pattern structure
  const pageContent = createPageLayout({
    dense: true,
    children: [
      // AppHeader
      createAppHeader({
        title: 'Board Member Dashboard',
        description: 'Governance health and key actions at a glance',
        dense: true,
      }),

      // Section 1: Governance Health (MetricCluster with Charts)
      createPageSection({
        dense: true,
        children: createGovernanceHealthSection(),
      }),

      // Section 2: Pending Actions
      createPageSection({
        dense: true,
        children: createPendingActionsSection(),
      }),

      // Section 3: Meeting Summary
      createPageSection({
        dense: true,
        children: createMeetingSummarySection(),
      }),

      // Section 4: Recent Activity (Table Preview)
      createPageSection({
        dense: true,
        children: createRecentActivitySection(),
      }),
    ],
  });

  const nav = createDemoNav('dashboard');

  const appShell = createAppShell({
    nav,
    content: pageContent,
  });

  return wrapForStorybook(appShell);
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta = {
  title: '3. Page Examples / Board Member Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Board Member Dashboard — Pattern Validation

**PAGE EXAMPLE — NOT A PATTERN**

This page validates the Dashboard Page Pattern against a real LFX One Board Member use case.

## Purpose

This example proves that the Dashboard pattern:
- ✅ Works for real governance workflows without new abstractions
- ✅ Supports chart + drawer interaction model
- ✅ Complies with Insights Escalation Contract
- ✅ Handles multiple surface types (charts, actions, meetings, tables)

## Pattern Used

Uses **Dashboard Page Pattern** structure:
- AppShell → PageLayout → AppHeader → PageSection (multiple)
- MetricsRow for charts
- Card for action summaries and meetings
- TableGrid for activity preview

## Sections

1. **Governance Health (MetricCluster)**
   - Contributor Dependency (stacked bar, Insights parity)
   - Activity Trend (sparkline)
   - Click opens drawer with escalation CTA

2. **Pending Actions**
   - ActionCard-style summary items
   - "View All" opens drawer
   - Action click routes to execution page

3. **Upcoming Meetings**
   - Meeting summary cards
   - Click opens drawer with metadata
   - "View All" routes to Meetings page

4. **Recent Activity (Table Preview)**
   - TableGrid with 5 rows
   - "View All" routes to full Activity page

## Validation Findings

### ✅ Works Well
- Dashboard pattern structure is solid
- Chart integration is seamless
- Table primitives are perfect for previews
- Section rhythm feels natural

### ⚠️ Gaps (Not Blocking)
- No Drawer primitive yet (stubs used)
- No ActionCard component (manual HTML)
- ChartCard value prop is verbose

### 💡 Recommendation
Dashboard pattern is **VALIDATED** and production-ready.
Future enhancements (Drawer, ActionCard) would improve DX but are not required.

## For Agents

**Do NOT copy this structure directly.**

Instead:
1. Reference the Dashboard Page Pattern
2. Use documented Dashboard section primitives
3. Follow Insights Escalation Contract for charts
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default Board Member Dashboard.
 * 
 * Demonstrates full dashboard composition with all 4 sections:
 * - Governance Health charts
 * - Pending Actions
 * - Upcoming Meetings
 * - Recent Activity table
 */
export const Default: Story = {
  render: () => createBoardMemberDashboard(),
};
