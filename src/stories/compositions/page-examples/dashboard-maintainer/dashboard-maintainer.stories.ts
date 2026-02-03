/**
 * 🟡 OBSERVED PAGE EXAMPLE — Maintainer Dashboard
 * 
 * This page validates the Dashboard Page Pattern for the Maintainer role.
 * Visual normalization is intentionally deferred until multiple roles are validated.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * MAINTAINER DASHBOARD
 * 
 * This page validates the Dashboard Page Pattern against a second real role (Maintainer)
 * to prove the pattern generalizes without introducing new components or abstractions.
 * 
 * Purpose:
 * - Validate Dashboard pattern works for Maintainer role using existing primitives only
 * - Confirm interaction model (chart → drawer, action → drawer) generalizes
 * - Surface structural differences vs Board Member dashboard
 * - Identify shared primitives that could be extracted (deferred until multi-role validation)
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * VALIDATION FOCUS
 * 
 * This example intentionally:
 * - Defers visual normalization (spacing, alignment, token consistency)
 * - Reuses existing components without modification
 * - Follows Dashboard Page Pattern structure exactly
 * - Uses role-specific content (project health vs governance health)
 * - Documents structural observations inline
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
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTag } from '../../../../components/tag/tag';
import { createButton } from '../../../../components/button/button';
import { createSummaryCard } from '../../../../components/summary-card/summary-card';
import { createDrawer } from '../../../../components/drawer/drawer';

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
// SECTION 1: Project Health (MetricCluster with Charts)
// =============================================================================

/**
 * ✅ PATTERN REUSE: Same MetricCluster structure as Board Member
 * ✅ CONTENT DIFFERS: Project health metrics vs governance metrics
 * ✅ INTERACTION IDENTICAL: ChartCard → Drawer → Insights CTA
 */
function createProjectHealthSection(): HTMLElement {
  // Issue Backlog Trend (Sparkline)
  const issueBacklogChart = createChart({
    option: createSparklineOption({
      values: [42, 38, 45, 39, 35, 32, 28],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const issueBacklogValueElement = document.createElement('div');
  issueBacklogValueElement.textContent = '28';
  issueBacklogValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  issueBacklogValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  issueBacklogValueElement.style.color = 'var(--text-primary)';

  const issueBacklogMetaElement = document.createElement('div');
  issueBacklogMetaElement.textContent = '↓ 33% from last month';
  issueBacklogMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  issueBacklogMetaElement.style.color = 'var(--success-600)';

  const issueBacklogCard = createChartCard({
    title: 'Open Issues',
    value: issueBacklogValueElement,
    meta: issueBacklogMetaElement,
    chart: issueBacklogChart,
    onClick: () => {
      const drawerBody = document.createElement('div');
      
      const explanation = document.createElement('div');
      explanation.style.marginBottom = 'var(--spacing-16)';
      explanation.innerHTML = `
        <p style="margin: 0 0 var(--spacing-12) 0;">
          Open issues have decreased <strong style="color: var(--success-600);">33%</strong> over the past month,
          indicating healthy issue triage and resolution velocity.
        </p>
        <p style="margin: 0; color: var(--text-secondary); font-size: var(--ui-text-label-font-size);">
          <strong>Signal only:</strong> This chart shows a 7-week trend. For detailed issue breakdowns,
          priority distribution, and repository-level analysis, use LFX Insights.
        </p>
      `;
      
      const detailChart = createChart({
        option: createSparklineOption({
          values: [42, 38, 45, 39, 35, 32, 28],
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
        }),
        height: 150,
      });
      
      drawerBody.appendChild(explanation);
      drawerBody.appendChild(detailChart);
      
      const footer = createButton({
        label: 'View full analysis in LFX Insights →',
        variant: 'primary',
        onClick: () => console.log('Navigate to LFX Insights'),
      });
      
      const drawer = createDrawer({
        title: 'Open Issues Trend',
        body: drawerBody,
        footer,
      });
      
      document.body.appendChild(drawer);
    },
  });

  // PR Merge Velocity (Sparkline)
  const prVelocityChart = createChart({
    option: createSparklineOption({
      values: [12, 15, 13, 18, 16, 20, 19],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const prVelocityValueElement = document.createElement('div');
  prVelocityValueElement.textContent = '19';
  prVelocityValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  prVelocityValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  prVelocityValueElement.style.color = 'var(--text-primary)';

  const prVelocityMetaElement = document.createElement('div');
  prVelocityMetaElement.textContent = 'PRs merged this week';
  prVelocityMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  prVelocityMetaElement.style.color = 'var(--text-secondary)';

  const prVelocityCard = createChartCard({
    title: 'PR Merge Velocity',
    value: prVelocityValueElement,
    meta: prVelocityMetaElement,
    chart: prVelocityChart,
    onClick: () => {
      const drawerBody = document.createElement('div');
      
      const explanation = document.createElement('div');
      explanation.style.marginBottom = 'var(--spacing-16)';
      explanation.innerHTML = `
        <p style="margin: 0 0 var(--spacing-12) 0;">
          PR merge velocity has increased steadily over the past 7 weeks, with <strong>19 PRs merged</strong> this week.
          This indicates healthy review throughput and contributor engagement.
        </p>
        <p style="margin: 0; color: var(--text-secondary); font-size: var(--ui-text-label-font-size);">
          <strong>Signal only:</strong> This chart shows merge count trends. For PR cycle time, review latency,
          and contributor-level analysis, use LFX Insights.
        </p>
      `;
      
      const detailChart = createChart({
        option: createSparklineOption({
          values: [12, 15, 13, 18, 16, 20, 19],
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
        }),
        height: 150,
      });
      
      drawerBody.appendChild(explanation);
      drawerBody.appendChild(detailChart);
      
      const footer = createButton({
        label: 'View full analysis in LFX Insights →',
        variant: 'primary',
        onClick: () => console.log('Navigate to LFX Insights'),
      });
      
      const drawer = createDrawer({
        title: 'PR Merge Velocity',
        body: drawerBody,
        footer,
      });
      
      document.body.appendChild(drawer);
    },
  });

  // Contributor Activity (Stacked Bar)
  const contributorActivityChart = createChart({
    option: createStackedBarOption({
      categories: [''],
      series: [
        { name: 'Active contributors', data: [24], color: '#0066CC' },
        { name: 'Inactive (30+ days)', data: [11], color: '#E6F0FF' },
      ],
      orientation: 'horizontal',
      showLegend: true,
    }),
    height: 80,
  });

  const contributorActivityCard = createChartCard({
    title: 'Contributor Activity',
    chart: contributorActivityChart,
    onClick: () => {
      const drawerBody = document.createElement('div');
      
      const explanation = document.createElement('div');
      explanation.style.marginBottom = 'var(--spacing-16)';
      explanation.innerHTML = `
        <p style="margin: 0 0 var(--spacing-12) 0;">
          <strong>24 contributors</strong> have been active in the past 30 days, with 11 contributors
          inactive for more than 30 days. This distribution indicates healthy core contributor retention.
        </p>
        <p style="margin: 0; color: var(--text-secondary); font-size: var(--ui-text-label-font-size);">
          <strong>Signal only:</strong> This chart shows active vs inactive contributor distribution.
          For individual contributor activity, retention analysis, and onboarding metrics, use LFX Insights.
        </p>
      `;
      
      const detailChart = createChart({
        option: createStackedBarOption({
          categories: [''],
          series: [
            { name: 'Active contributors', data: [24], color: '#0066CC' },
            { name: 'Inactive (30+ days)', data: [11], color: '#E6F0FF' },
          ],
          orientation: 'horizontal',
          showLegend: true,
        }),
        height: 120,
      });
      
      drawerBody.appendChild(explanation);
      drawerBody.appendChild(detailChart);
      
      const footer = createButton({
        label: 'View full analysis in LFX Insights →',
        variant: 'primary',
        onClick: () => console.log('Navigate to LFX Insights'),
      });
      
      const drawer = createDrawer({
        title: 'Contributor Activity Distribution',
        body: drawerBody,
        footer,
      });
      
      document.body.appendChild(drawer);
    },
  });

  // CI Stability (Sparkline)
  const ciStabilityChart = createChart({
    option: createSparklineOption({
      values: [92, 94, 88, 91, 95, 96, 97],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const ciStabilityValueElement = document.createElement('div');
  ciStabilityValueElement.textContent = '97%';
  ciStabilityValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  ciStabilityValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  ciStabilityValueElement.style.color = 'var(--text-primary)';

  const ciStabilityMetaElement = document.createElement('div');
  ciStabilityMetaElement.textContent = 'Pass rate this week';
  ciStabilityMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  ciStabilityMetaElement.style.color = 'var(--text-secondary)';

  const ciStabilityCard = createChartCard({
    title: 'CI Stability',
    value: ciStabilityValueElement,
    meta: ciStabilityMetaElement,
    chart: ciStabilityChart,
    onClick: () => {
      const drawerBody = document.createElement('div');
      
      const explanation = document.createElement('div');
      explanation.style.marginBottom = 'var(--spacing-16)';
      explanation.innerHTML = `
        <p style="margin: 0 0 var(--spacing-12) 0;">
          CI pass rate is <strong style="color: var(--success-600);">97%</strong> this week,
          up from 92% seven weeks ago. This indicates improving test reliability and build stability.
        </p>
        <p style="margin: 0; color: var(--text-secondary); font-size: var(--ui-text-label-font-size);">
          <strong>Signal only:</strong> This chart shows overall pass rate trends. For test suite breakdowns,
          flaky test identification, and build time analysis, use LFX Insights.
        </p>
      `;
      
      const detailChart = createChart({
        option: createSparklineOption({
          values: [92, 94, 88, 91, 95, 96, 97],
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
        }),
        height: 150,
      });
      
      drawerBody.appendChild(explanation);
      drawerBody.appendChild(detailChart);
      
      const footer = createButton({
        label: 'View full analysis in LFX Insights →',
        variant: 'primary',
        onClick: () => console.log('Navigate to LFX Insights'),
      });
      
      const drawer = createDrawer({
        title: 'CI Stability Trend',
        body: drawerBody,
        footer,
      });
      
      document.body.appendChild(drawer);
    },
  });

  return createMetricsRow({
    children: [issueBacklogCard, prVelocityCard, contributorActivityCard, ciStabilityCard],
  });
}

// =============================================================================
// SECTION 2: Pending Actions (Maintainer Workload)
// =============================================================================

/**
 * ✅ PATTERN REUSE: Same action card structure as Board Member
 * ✅ CONTENT DIFFERS: Maintainer workload (PR review, triage) vs governance actions
 * ✅ SECTION HEADER DUPLICATION: Same manual header construction pattern
 * 💡 OBSERVATION: Section header pattern appears in both roles — extraction candidate
 */
function createPendingActionsSection(): HTMLElement {
  function createActionCard(config: {
    title: string;
    description: string;
    context: string;
    priority: 'high' | 'medium' | 'low';
  }): HTMLElement {
    const body = document.createElement('div');
    body.textContent = config.description;

    const meta = document.createElement('div');
    meta.style.display = 'flex';
    meta.style.gap = 'var(--spacing-8)';
    meta.style.alignItems = 'center';

    const contextSpan = document.createElement('span');
    contextSpan.textContent = config.context;

    const priorityVariant = config.priority === 'high' ? 'danger' : config.priority === 'medium' ? 'warning' : 'default';
    const priorityTag = createTag({
      children: config.priority.toUpperCase(),
      variant: priorityVariant,
    });

    meta.appendChild(contextSpan);
    meta.appendChild(priorityTag);

    return createSummaryCard({
      title: config.title,
      body,
      meta,
      onClick: () => {
        const drawerBody = document.createElement('div');
        drawerBody.innerHTML = `
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Description
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${config.description}
            </p>
          </div>
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Context
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${config.context}
            </p>
          </div>
          <div>
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Priority
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${config.priority.toUpperCase()} — Requires maintainer attention
            </p>
          </div>
        `;
        
        const footer = createButton({
          label: 'Review Action →',
          variant: 'primary',
          onClick: () => console.log(`Navigate to action: ${config.title}`),
        });
        
        const drawer = createDrawer({
          title: config.title,
          body: drawerBody,
          footer,
        });
        
        document.body.appendChild(drawer);
      },
    });
  }

  const actionsCard = createCard({
    children: [
      // Section header (duplicated pattern from Board Member)
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
            const drawerBody = document.createElement('div');
            
            const intro = document.createElement('p');
            intro.textContent = 'All pending actions requiring your attention:';
            intro.style.marginBottom = 'var(--spacing-16)';
            intro.style.color = 'var(--text-secondary)';
            
            drawerBody.appendChild(intro);
            
            const allActions = [
              { title: 'Review security vulnerability fix', description: 'Critical security patch needs review', context: 'api-gateway repo', priority: 'high' as const },
              { title: 'Triage 12 new issues', description: 'Weekly triage backlog', context: 'multiple repos', priority: 'medium' as const },
              { title: 'Approve v2.1.0 release', description: 'Release candidate ready for approval', context: 'core repo', priority: 'high' as const },
              { title: 'Review contributor onboarding PR', description: 'First-time contributor submission', context: 'docs repo', priority: 'low' as const },
            ];
            
            allActions.forEach((action, index) => {
              const actionCard = document.createElement('div');
              actionCard.style.padding = 'var(--spacing-12)';
              actionCard.style.marginBottom = index < allActions.length - 1 ? 'var(--spacing-12)' : '0';
              actionCard.style.border = '1px solid var(--ui-surface-divider)';
              actionCard.style.borderRadius = 'var(--rounded-md)';
              actionCard.style.cursor = 'pointer';
              actionCard.style.transition = 'background-color var(--ui-transition-duration-default) ease';
              
              actionCard.innerHTML = `
                <div style="font-weight: var(--font-semibold); margin-bottom: var(--spacing-4);">
                  ${action.title}
                </div>
                <div style="font-size: var(--ui-text-label-font-size); color: var(--text-secondary); margin-bottom: var(--spacing-8);">
                  ${action.description}
                </div>
                <div style="font-size: var(--ui-text-label-font-size); color: var(--text-muted);">
                  ${action.context} • Priority: ${action.priority.toUpperCase()}
                </div>
              `;
              
              actionCard.addEventListener('mouseenter', () => {
                actionCard.style.backgroundColor = 'var(--ui-surface-hover)';
              });
              actionCard.addEventListener('mouseleave', () => {
                actionCard.style.backgroundColor = 'transparent';
              });
              actionCard.addEventListener('click', () => {
                console.log(`Navigate to action: ${action.title}`);
              });
              
              drawerBody.appendChild(actionCard);
            });
            
            const footer = createButton({
              label: 'Go to Actions page →',
              variant: 'primary',
              onClick: () => console.log('Navigate to Actions page'),
            });
            
            const drawer = createDrawer({
              title: 'My Actions',
              body: drawerBody,
              footer,
            });
            
            document.body.appendChild(drawer);
          },
        });

        header.appendChild(title);
        header.appendChild(viewAllBtn);
        return header;
      })(),

      createActionCard({
        title: 'Review security vulnerability fix',
        description: 'Critical security patch needs review and approval',
        context: 'api-gateway repo',
        priority: 'high',
      }),
      createActionCard({
        title: 'Triage 12 new issues',
        description: 'Weekly triage backlog across project repositories',
        context: 'multiple repos',
        priority: 'medium',
      }),
      createActionCard({
        title: 'Approve v2.1.0 release',
        description: 'Release candidate ready for final approval',
        context: 'core repo',
        priority: 'high',
      }),
    ],
  });

  return actionsCard;
}

// =============================================================================
// SECTION 3: Meeting Summary (Project Syncs)
// =============================================================================

/**
 * ✅ PATTERN REUSE: Same meeting card structure as Board Member
 * ✅ CONTENT DIFFERS: Project syncs vs board meetings
 * ✅ SECTION HEADER DUPLICATION: Same manual header construction pattern
 */
function createMeetingSummarySection(): HTMLElement {
  function createMeetingCard(config: {
    title: string;
    date: string;
    time: string;
    attendees: number;
  }): HTMLElement {
    const meta = document.createElement('div');

    const dateTime = document.createElement('div');
    dateTime.textContent = `${config.date} • ${config.time}`;
    dateTime.style.marginBottom = 'var(--spacing-4)';

    const attendeeCount = document.createElement('div');
    attendeeCount.textContent = `${config.attendees} attendees`;

    meta.appendChild(dateTime);
    meta.appendChild(attendeeCount);

    return createSummaryCard({
      title: config.title,
      meta,
      onClick: () => {
        const drawerBody = document.createElement('div');
        drawerBody.innerHTML = `
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Date & Time
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${config.date} at ${config.time}
            </p>
          </div>
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Expected Attendees
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${config.attendees} participants
            </p>
          </div>
          <div>
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Agenda
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              Agenda and documents will be available in the full meeting page.
            </p>
          </div>
        `;
        
        const footer = createButton({
          label: 'View meeting →',
          variant: 'primary',
          onClick: () => console.log(`Navigate to meeting: ${config.title}`),
        });
        
        const drawer = createDrawer({
          title: config.title,
          body: drawerBody,
          footer,
        });
        
        document.body.appendChild(drawer);
      },
    });
  }

  const meetingsCard = createCard({
    children: [
      // Section header (duplicated pattern)
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

        const scheduleBtn = createButton({
          label: 'Schedule Meeting',
          variant: 'secondary',
          size: 'small',
          onClick: () => {
            console.log('[ROUTE] Navigate to Meeting Creation Flow');
          },
        });

        header.appendChild(title);
        header.appendChild(scheduleBtn);
        return header;
      })(),

      createMeetingCard({
        title: 'Weekly Maintainer Sync',
        date: 'Feb 5, 2026',
        time: '10:00 AM PST',
        attendees: 6,
      }),
      createMeetingCard({
        title: 'Release Planning (v2.1.0)',
        date: 'Feb 8, 2026',
        time: '2:00 PM PST',
        attendees: 8,
      }),
    ],
  });

  return meetingsCard;
}

// =============================================================================
// SECTION 4: Recent Activity (Project Events)
// =============================================================================

/**
 * ✅ PATTERN REUSE: Same table preview structure as Board Member
 * ✅ CONTENT DIFFERS: Project events vs governance activity
 * ✅ ROW INTERACTION: Row click opens drawer (inspection pattern)
 */
function createRecentActivitySection(): HTMLElement {
  const activityData = [
    { type: 'PR', title: 'Fix authentication edge case', project: 'api-gateway', date: 'Feb 2, 2026', status: 'Merged' },
    { type: 'Issue', title: 'Memory leak in cache layer', project: 'core', date: 'Feb 2, 2026', status: 'Open' },
    { type: 'Release', title: 'v2.0.5 hotfix release', project: 'core', date: 'Feb 1, 2026', status: 'Published' },
    { type: 'PR', title: 'Add rate limiting middleware', project: 'api-gateway', date: 'Feb 1, 2026', status: 'In Review' },
    { type: 'Issue', title: 'Documentation outdated for v2.x', project: 'docs', date: 'Jan 31, 2026', status: 'Triaged' },
  ];

  const headerCells = [
    createTableHeaderCell({ children: 'Type' }),
    createTableHeaderCell({ children: 'Title' }),
    createTableHeaderCell({ children: 'Project' }),
    createTableHeaderCell({ children: 'Date' }),
    createTableHeaderCell({ children: 'Status' }),
  ];

  const rows = activityData.map((item) => {
    const statusVariant =
      item.status === 'Merged' || item.status === 'Published' ? 'success' :
      item.status === 'Open' ? 'warning' :
      item.status === 'In Review' || item.status === 'Triaged' ? 'info' : 'default';

    const typeTag = createTag({
      children: item.type,
      variant: item.type === 'Release' ? 'success' : 'default',
    });

    return createTableRow({
      children: [
        createTableCell({ children: typeTag, contentType: 'secondary' }),
        createTableCell({ children: item.title, contentType: 'primary' }),
        createTableCell({ children: item.project, contentType: 'secondary' }),
        createTableCell({ children: item.date, contentType: 'muted' }),
        createTableCell({
          children: createTag({ children: item.status, variant: statusVariant }),
          contentType: 'secondary',
        }),
      ],
      clickable: true,
      onClick: () => {
        // Row click opens drawer with inspection details
        const drawerBody = document.createElement('div');
        drawerBody.innerHTML = `
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              ${item.type}
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${item.title}
            </p>
          </div>
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Project
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${item.project}
            </p>
          </div>
          <div style="margin-bottom: var(--spacing-16);">
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Date
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${item.date}
            </p>
          </div>
          <div>
            <h4 style="margin: 0 0 var(--spacing-8) 0; font-size: 15px; font-weight: var(--font-semibold);">
              Status
            </h4>
            <p style="margin: 0; color: var(--text-secondary);">
              ${item.status}
            </p>
          </div>
        `;
        
        const footer = createButton({
          label: `View ${item.type.toLowerCase()} →`,
          variant: 'primary',
          onClick: () => console.log(`Navigate to ${item.type}: ${item.title}`),
        });
        
        const drawer = createDrawer({
          title: item.title,
          body: drawerBody,
          footer,
        });
        
        document.body.appendChild(drawer);
      },
    });
  });

  const table = createTableGrid({
    columns: [
      { key: 'type', semanticType: 'categorical' },
      { key: 'title', semanticType: 'primary' },
      { key: 'project', semanticType: 'categorical' },
      { key: 'date', semanticType: 'meta' },
      { key: 'status', semanticType: 'categorical' },
    ],
    children: [
      createTableHeader(headerCells),
      createTableBody(rows),
    ],
  });

  const activityCard = createCard({
    children: [
      // Section header (duplicated pattern)
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
            console.log('[ROUTE] Navigate to Activity page (Table Page pattern)');
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
        createNavItem({ id: 'projects', children: createTextNode('Projects') }),
        createNavItem({ id: 'issues', children: createTextNode('Issues') }),
        createNavItem({ id: 'prs', children: createTextNode('Pull Requests') }),
        createNavItem({ id: 'releases', children: createTextNode('Releases') }),
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
 * Creates the Maintainer Dashboard page
 * 
 * VALIDATION NOTES:
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * DIFFERENCES VS BOARD MEMBER DASHBOARD:
 * 
 * ✅ CONTENT LAYER ONLY:
 * - Project health metrics vs governance metrics
 * - Maintainer workload (PR review, triage) vs board approvals
 * - Project syncs vs board meetings
 * - Project events vs governance activity
 * 
 * ✅ STRUCTURE IDENTICAL:
 * - Same 4-section pattern
 * - Same section ordering (Metrics → Actions → Meetings → Table)
 * - Same interaction model (ChartCard → Drawer, SummaryCard → Drawer)
 * - Same component primitives (no new abstractions)
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * SHARED SECTION PRIMITIVES:
 * 
 * 🔍 EXTRACTION CANDIDATES (after multi-role validation):
 * 
 * 1. Section Header Pattern:
 *    - Title + Action button (View All / Schedule / etc.)
 *    - Appears in Pending Actions, Meeting Summary, Recent Activity
 *    - Duplicated between Board Member and Maintainer dashboards
 *    - Could become: SectionHeader({ title, actionLabel, onActionClick })
 * 
 * 2. Action Card Factory:
 *    - SummaryCard with specific meta structure (context + priority tag)
 *    - Appears in Pending Actions sections
 *    - Could become: ActionCard (specialized from SummaryCard)
 * 
 * 3. Meeting Card Factory:
 *    - SummaryCard with specific meta structure (date/time + attendee count)
 *    - Appears in Meeting Summary sections
 *    - Could become: MeetingCard (specialized from SummaryCard)
 * 
 * ⏸️ DEFERRED: Extraction deferred until 3rd role dashboard validates patterns
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * AWKWARD OR VERBOSE AREAS:
 * 
 * ⚠️ ChartCard Value Elements:
 * - Same verbosity as Board Member dashboard
 * - Requires manual HTMLElement creation with inline styles
 * - Not blocking, but DX improvement opportunity
 * 
 * ⚠️ Section Header Construction:
 * - Repeated IIFE pattern for header creation
 * - 3 occurrences in this file alone
 * - Clear extraction signal, but deferred pending multi-role validation
 * 
 * ⚠️ Drawer Body HTML Construction:
 * - Using innerHTML for drawer content is verbose
 * - Trade-off: verbosity vs creating many small helper functions
 * - Acceptable for validation phase
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * DEFERRED VISUAL DECISIONS:
 * 
 * ⏸️ Spacing and Alignment:
 * - No spacing normalization between Board Member and Maintainer dashboards
 * - Card gaps, section padding, internal spacing not standardized
 * - Intentionally deferred until multi-role patterns emerge
 * 
 * ⏸️ Section Header Styling:
 * - Button size/variant choices not standardized
 * - "View All" vs "Schedule Meeting" button treatment varies
 * - Intentionally deferred
 * 
 * ⏸️ MetricsRow Layout:
 * - 4 cards in Maintainer vs 2 cards in Board Member
 * - Scrolling behavior, card width, gap spacing not standardized
 * - Intentionally deferred
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * PATTERN VALIDATION SUMMARY:
 * 
 * ✅ Dashboard Page Pattern VALIDATED for second role (Maintainer)
 * ✅ No new components introduced
 * ✅ All sections use existing primitives
 * ✅ Interaction model generalizes cleanly (chart → drawer, action → drawer)
 * ✅ Insights Escalation Contract respected
 * ✅ Structure mirrors Board Member dashboard
 * ✅ Role differences are content-only
 * 
 * 🟢 RECOMMENDATION: Dashboard pattern is stable and production-ready
 * 🟡 NEXT STEP: Consider 3rd role validation (Contributor) to finalize extraction candidates
 * 🔵 VISUAL NORMALIZATION: Now unblocked (2 roles validated)
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
function createMaintainerDashboard(): HTMLElement {
  const pageContent = createPageLayout({
    dense: true,
    children: [
      // AppHeader
      createAppHeader({
        title: 'Maintainer Dashboard',
        description: 'Project health and maintainer workload at a glance',
        dense: true,
      }),

      // Section 1: Project Health (MetricCluster)
      createPageSection({
        dense: true,
        children: createProjectHealthSection(),
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

      // Section 4: Recent Activity
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
  title: '3. Page Examples / Maintainer Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**🟡 OBSERVED PAGE EXAMPLE — Maintainer Dashboard**

**Pattern Validation (Second Role)**

This page validates the Dashboard Page Pattern for the Maintainer role,
proving the pattern generalizes without introducing new components or abstractions.

## Purpose

This example proves that the Dashboard pattern:
- ✅ Works for Maintainer role using existing primitives only
- ✅ Maintains structural consistency with Board Member dashboard
- ✅ Role differences are content-only (no structural deviations)
- ✅ Interaction model (chart → drawer, action → drawer) generalizes cleanly

## Pattern Used

Uses **Dashboard Page Pattern** structure:
- AppShell → PageLayout → AppHeader → PageSection (× 4)
- MetricsRow for project health charts
- Card + SummaryCard for actions and meetings
- TableGrid for activity preview

## Sections

1. **Project Health (MetricCluster)**
   - Open Issues (sparkline)
   - PR Merge Velocity (sparkline)
   - Contributor Activity (stacked bar)
   - CI Stability (sparkline)
   - Click opens drawer with Insights escalation CTA

2. **Pending Actions**
   - PR review requests
   - Issue triage backlog
   - Release approvals
   - "View All" opens drawer with full list

3. **Upcoming Meetings**
   - Weekly maintainer sync
   - Release planning meetings
   - Click opens drawer with meeting details

4. **Recent Activity (Table Preview)**
   - PRs, Issues, Releases
   - Row click opens drawer for inspection
   - "View All" routes to full Activity page

## Validation Findings

### ✅ Pattern Generalizes

- Dashboard structure identical to Board Member
- Component reuse is clean
- No new abstractions needed
- Role differences are content-only

### 🔍 Extraction Candidates (Deferred)

After multi-role validation, consider extracting:
- SectionHeader (title + action button pattern)
- ActionCard (specialized SummaryCard)
- MeetingCard (specialized SummaryCard)

### 💡 Recommendation

Dashboard pattern is **VALIDATED** for multiple roles and production-ready.
Visual normalization is now unblocked (2 roles validated).

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
 * Default Maintainer Dashboard.
 * 
 * Demonstrates full dashboard composition with all 4 sections:
 * - Project Health metrics
 * - Pending Actions (maintainer workload)
 * - Upcoming Meetings (project syncs)
 * - Recent Activity (project events)
 */
export const Default: Story = {
  render: () => createMaintainerDashboard(),
};
