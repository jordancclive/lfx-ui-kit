/**
 * ✅ GENERATED FROM CONTRACTS — Contributor Dashboard
 * 
 * This dashboard was generated deterministically using the Dashboard Generation Algorithm (Phase 5.3)
 * from authoritative contracts without human design judgment.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * CONTRIBUTOR DASHBOARD
 * 
 * Purpose: Monitor personal contributions and progress over time
 * Primary Question: "How am I contributing and progressing?"
 * 
 * Generated from:
 * - Dashboard Assembly Contract (v1.0)
 * - Dashboard Section Roles Contract (v1.0.0)
 * - Dashboard Section → Metric Binding Contract (v1.0.0)
 * - Dashboard Metric Matrix (v1.0.0)
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * VALIDATION STATUS
 * 
 * Algorithm Execution: PASS
 * Section Role Binding: PASS
 * Metric Binding: PASS
 * Assembly Invariants: PASS
 * Semantic Purity: PASS
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createChartCard } from '../../../../components/chart-card/chart-card';
import { createChart } from '../../../../components/chart/chart';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';
import { createTag } from '../../../../components/tag/tag';
import { createButton } from '../../../../components/button/button';
import { createSummaryCard } from '../../../../components/summary-card/summary-card';
import { createDrawer } from '../../../../components/drawer/drawer';
import { createMetricClusterSection } from '../../../../components/dashboard-sections/metric-cluster-section';
import { createPendingActionsSection } from '../../../../components/dashboard-sections/pending-actions-section';
import { createUpcomingMeetingsSection } from '../../../../components/dashboard-sections/upcoming-meetings-section';

// Chart configs
import { createSparklineOption } from '../../../../components/chart/config/lineAreaSparkline';

// =============================================================================
// SECTION 1: My Progress (MetricCluster - ParticipationContext)
// =============================================================================

/**
 * ✅ SECTION ROLE: ParticipationContext
 * ✅ PRIMARY QUESTION: "What is the current state of participation in my area of responsibility?"
 * ✅ BOUND METRICS: Code Commits, Pull Requests, Issues Resolved, Comments Added, Active Weeks Streak, Learning Hours
 */
function createMyProgressSection(): HTMLElement {
  // 1. Code Commits (Sparkline)
  const commitsChart = createChart({
    option: createSparklineOption({
      values: [12, 15, 18, 14, 20, 16, 22],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const commitsValueElement = document.createElement('div');
  commitsValueElement.textContent = '22';
  commitsValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  commitsValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  commitsValueElement.style.color = 'var(--text-primary)';

  const commitsMetaElement = document.createElement('div');
  commitsMetaElement.textContent = 'This week';
  commitsMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  commitsMetaElement.style.color = 'var(--text-secondary)';

  const commitsCard = createChartCard({
    title: 'Code Commits',
    value: commitsValueElement,
    meta: commitsMetaElement,
    chart: commitsChart,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Code Commits',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>22 commits this week. Trending upward. Your most active week yet!</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // 2. Pull Requests (Sparkline)
  const prChart = createChart({
    option: createSparklineOption({
      values: [3, 5, 4, 6, 5, 7, 8],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const prValueElement = document.createElement('div');
  prValueElement.textContent = '8';
  prValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  prValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  prValueElement.style.color = 'var(--text-primary)';

  const prMetaElement = document.createElement('div');
  prMetaElement.textContent = 'This week';
  prMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  prMetaElement.style.color = 'var(--text-secondary)';

  const prCard = createChartCard({
    title: 'Pull Requests',
    value: prValueElement,
    meta: prMetaElement,
    chart: prChart,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Pull Requests',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>8 pull requests opened and merged this week. Steady increase in contribution velocity.</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // 3. Issues Resolved (Sparkline)
  const issuesChart = createChart({
    option: createSparklineOption({
      values: [4, 6, 5, 8, 7, 9, 11],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const issuesValueElement = document.createElement('div');
  issuesValueElement.textContent = '11';
  issuesValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  issuesValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  issuesValueElement.style.color = 'var(--text-primary)';

  const issuesMetaElement = document.createElement('div');
  issuesMetaElement.textContent = 'This week';
  issuesMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  issuesMetaElement.style.color = 'var(--text-secondary)';

  const issuesCard = createChartCard({
    title: 'Issues Resolved',
    value: issuesValueElement,
    meta: issuesMetaElement,
    chart: issuesChart,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Issues Resolved',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>11 issues resolved this week. Strong problem-solving momentum!</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // 4. Comments Added (Sparkline)
  const commentsChart = createChart({
    option: createSparklineOption({
      values: [18, 22, 20, 25, 28, 24, 30],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const commentsValueElement = document.createElement('div');
  commentsValueElement.textContent = '30';
  commentsValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  commentsValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  commentsValueElement.style.color = 'var(--text-primary)';

  const commentsMetaElement = document.createElement('div');
  commentsMetaElement.textContent = 'This week';
  commentsMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  commentsMetaElement.style.color = 'var(--text-secondary)';

  const commentsCard = createChartCard({
    title: 'Comments Added',
    value: commentsValueElement,
    meta: commentsMetaElement,
    chart: commentsChart,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Comments Added',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>30 comments added this week. Active participation in code reviews and discussions!</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // 5. Active Weeks Streak (Single-value)
  const streakValueElement = document.createElement('div');
  streakValueElement.textContent = '7';
  streakValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  streakValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  streakValueElement.style.color = 'var(--text-primary)';

  const streakMetaElement = document.createElement('div');
  streakMetaElement.textContent = 'Consecutive weeks';
  streakMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  streakMetaElement.style.color = 'var(--text-secondary)';

  const streakCard = createChartCard({
    title: 'Active Weeks Streak',
    value: streakValueElement,
    meta: streakMetaElement,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Active Weeks Streak',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>7 consecutive weeks of active contributions. Keep up the consistency!</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // 6. Learning Hours (Sparkline)
  const learningChart = createChart({
    option: createSparklineOption({
      values: [2, 3, 2.5, 4, 3, 5, 4.5],
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
    }),
    height: 80,
  });

  const learningValueElement = document.createElement('div');
  learningValueElement.textContent = '4.5';
  learningValueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
  learningValueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
  learningValueElement.style.color = 'var(--text-primary)';

  const learningMetaElement = document.createElement('div');
  learningMetaElement.textContent = 'Hours this week';
  learningMetaElement.style.fontSize = 'var(--ui-text-label-font-size)';
  learningMetaElement.style.color = 'var(--text-secondary)';

  const learningCard = createChartCard({
    title: 'Learning Hours',
    value: learningValueElement,
    meta: learningMetaElement,
    chart: learningChart,
    onClick: () => {
      const drawer = createDrawer({
        title: 'Learning Hours',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>4.5 hours invested in training and learning this week. Skill development is on track!</p>';
          return body;
        })(),
        footer: createButton({ label: 'View full analysis in LFX Insights →', variant: 'primary', onClick: () => console.log('Navigate to Insights') }),
      });
      document.body.appendChild(drawer);
    },
  });

  // Collect all cards for carousel
  const cards = [commitsCard, prCard, issuesCard, commentsCard, streakCard, learningCard];

  // Build filter pills (raw elements, no container)
  const filterOptions = ['All', 'Code', 'Issues', 'Learning'];
  const filterPills = filterOptions.map((label, index) => {
    const pill = createTag({
      children: label,
      variant: index === 0 ? 'primary' : 'default',
    });
    pill.style.cursor = 'pointer';
    pill.style.padding = 'var(--spacing-6) var(--spacing-12)';
    pill.addEventListener('click', () => {
      console.log(`Filter: ${label}`);
    });
    return pill;
  });

  // Create fully assembled metric cluster section
  return createMetricClusterSection({
    title: 'My Progress',
    metrics: cards,
    filters: filterPills,
    askLensContext: 'My Progress',
    onAskLensClick: () => {
      const drawer = createDrawer({
        title: 'Ask LFX Lens',
        body: (() => {
          const body = document.createElement('div');
          body.innerHTML = '<p>Ask questions about your contribution data using AI. (Gen-AI chat stub)</p>';
          return body;
        })(),
        footer: createButton({ label: 'Close', variant: 'secondary', onClick: () => console.log('Close drawer') }),
      });
      document.body.appendChild(drawer);
    },
  });
}

// =============================================================================
// SECTION 2: Pending Actions (AttentionRequired)
// =============================================================================

/**
 * ✅ SECTION ROLE: AttentionRequired
 * ✅ PRIMARY QUESTION: "What immediate actions require my attention and decision-making?"
 * ✅ BOUND CONTENT: Assigned Issues, Review Requests
 */
function createContributorPendingActions(): HTMLElement {
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

    const card = createSummaryCard({
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
              ${config.priority.toUpperCase()}
            </p>
          </div>
        `;
        
        const footer = createButton({
          label: 'View Action →',
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
    
    card.style.minHeight = '120px';
    return card;
  }

  // Create action cards
  const actionCards = [
    createActionCard({
      title: 'Fix authentication bug in login flow',
      description: 'Assigned issue requiring investigation and fix',
      context: 'api-gateway repo',
      priority: 'high',
    }),
    createActionCard({
      title: 'Review PR #342: Add dark mode support',
      description: 'Code review requested by maintainer',
      context: 'ui-components repo',
      priority: 'medium',
    }),
  ];

  // Create fully assembled section with View All drawer
  return createPendingActionsSection({
    title: 'Pending Actions',
    actions: actionCards,
    maxVisible: 2,
    onViewAll: () => {
      const drawerBody = document.createElement('div');
      const intro = document.createElement('p');
      intro.textContent = 'All pending actions requiring your attention:';
      intro.style.marginBottom = 'var(--spacing-16)';
      intro.style.color = 'var(--text-secondary)';
      drawerBody.appendChild(intro);
      
      const allActions = [
        { title: 'Fix authentication bug in login flow', description: 'Assigned issue requiring investigation', context: 'api-gateway repo', priority: 'high' as const },
        { title: 'Review PR #342: Add dark mode support', description: 'Code review requested', context: 'ui-components repo', priority: 'medium' as const },
        { title: 'Update documentation for API v2', description: 'Assigned documentation task', context: 'docs repo', priority: 'low' as const },
        { title: 'Review PR #289: Optimize database queries', description: 'Performance improvement review', context: 'backend repo', priority: 'medium' as const },
      ];
      
      allActions.forEach((action) => {
        const actionCard = createActionCard(action);
        drawerBody.appendChild(actionCard);
      });
      
      const drawer = createDrawer({
        title: 'All Pending Actions',
        body: drawerBody,
        footer: createButton({ label: 'Close', variant: 'secondary', onClick: () => console.log('Close drawer') }),
      });
      
      document.body.appendChild(drawer);
    },
  });
}

// =============================================================================
// SECTION 3: Upcoming Meetings (TimeCommitments)
// =============================================================================

/**
 * ✅ SECTION ROLE: TimeCommitments
 * ✅ PRIMARY QUESTION: "What scheduled events require my participation in the near term?"
 * ✅ BOUND CONTENT: Team Standups, Community Calls
 */
function createContributorUpcomingMeetings(): HTMLElement {
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

    const card = createSummaryCard({
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
    
    card.style.minHeight = '120px';
    return card;
  }

  // Create meeting cards
  const meetingCards = [
    createMeetingCard({
      title: 'Team Standup',
      date: 'Feb 4, 2026',
      time: '9:00 AM PST',
      attendees: 8,
    }),
    createMeetingCard({
      title: 'Community Open Office Hours',
      date: 'Feb 6, 2026',
      time: '3:00 PM PST',
      attendees: 25,
    }),
  ];

  // Create fully assembled section with View All navigation
  return createUpcomingMeetingsSection({
    title: 'Upcoming Meetings',
    meetings: meetingCards,
    maxVisible: 2,
    onViewAll: () => {
      console.log('[ROUTE] Navigate to Meetings page');
    },
  });
}

// =============================================================================
// DEMO NAV
// =============================================================================

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createDemoNav(activeId = 'dashboard'): HTMLElement {
  return createGlobalNav({
    activeItemId: activeId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'projects', children: createTextNode('My Projects') }),
        createNavItem({ id: 'discover', children: createTextNode('Discover Projects') }),
        createNavItem({ id: 'meetings', children: createTextNode('Meetings') }),
        createNavItem({ id: 'learning', children: createTextNode('Learning') }),
      ]),
    ],
  });
}

// =============================================================================
// STORYBOOK WRAPPER
// =============================================================================

function wrapForStorybook(element: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.width = '100vw';
  wrapper.style.height = '100vh';
  wrapper.style.overflow = 'hidden';
  wrapper.appendChild(element);
  return wrapper;
}

// =============================================================================
// DASHBOARD ASSEMBLY (Per Dashboard Assembly Contract v1.0)
// =============================================================================

function createContributorDashboard(): HTMLElement {
  // Paired Actions + Meetings (Grid Layout per Assembly Invariant 6.2)
  const pairedSection = document.createElement('div');
  pairedSection.style.display = 'grid';
  pairedSection.style.gridTemplateColumns = '1fr 1fr';
  pairedSection.style.gap = 'var(--spacing-16)';
  pairedSection.style.width = '100%';

  const actionsColumn = document.createElement('div');
  actionsColumn.appendChild(createContributorPendingActions());

  const meetingsColumn = document.createElement('div');
  meetingsColumn.appendChild(createContributorUpcomingMeetings());

  pairedSection.appendChild(actionsColumn);
  pairedSection.appendChild(meetingsColumn);

  // Assembly per Dashboard Assembly Contract Rule 3.4:
  // 1. Metric cluster section (My Progress)
  // 2. Paired Actions + Meetings section
  const pageContent = createPageLayout({
    dense: true,
    children: [
      // AppHeader (Assembly Invariant 6.6)
      createAppHeader({
        title: 'Contributor Dashboard',
        description: 'Monitor your impact within project communities',
        dense: true,
      }),

      // Section 1: My Progress (MetricCluster)
      createPageSection({
        dense: true,
        children: createMyProgressSection(),
      }),

      // Section 2 + 3: Pending Actions + Meetings (Paired)
      createPageSection({
        dense: true,
        children: pairedSection,
      }),
    ],
  });

  const nav = createDemoNav();

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
  title: 'Page Examples / Contributor Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**✅ GENERATED FROM CONTRACTS — Contributor Dashboard**

**Algorithm-Driven Dashboard Generation**

This dashboard was generated deterministically using the Dashboard Generation Algorithm (Phase 5.3)
from authoritative design system contracts without human design judgment.

## Generation Inputs

**Contracts Used:**
- Dashboard Assembly Contract (v1.0)
- Dashboard Section Roles Contract (v1.0.0)
- Dashboard Section → Metric Binding Contract (v1.0.0)
- Dashboard Metric Matrix (v1.0.0)

**User Role:** Contributor  
**Primary Question:** "How am I contributing and progressing over time?"

## Validation Status

✅ **Algorithm Execution:** PASS  
✅ **Section Role Binding:** PASS  
✅ **Metric Binding:** PASS  
✅ **Assembly Invariants:** PASS  
✅ **Semantic Purity:** PASS

## Dashboard Structure

### 1. My Progress (MetricCluster)
**Section Role:** ParticipationContext  
**Primary Question:** "What is the current state of participation in my area of responsibility?"

**Bound Metrics:**
- Code Commits (Sparkline) — Personal contribution volume
- Pull Requests (Sparkline) — Code contribution rate
- Issues Resolved (Sparkline) — Problem-solving activity
- Comments Added (Sparkline) — Discussion participation
- Active Weeks Streak (Single-value) — Contribution consistency
- Learning Hours (Sparkline) — Skill development investment

**Filters:** All, Code, Issues, Learning

### 2. Pending Actions (AttentionRequired)
**Section Role:** AttentionRequired  
**Primary Question:** "What immediate actions require my attention and decision-making?"

**Bound Content:**
- Assigned Issues — Tasks requiring contributor action
- Review Requests — PRs requiring contributor review

**Max Visible:** 2 cards  
**View All:** Opens drawer with full action list

### 3. Upcoming Meetings (TimeCommitments)
**Section Role:** TimeCommitments  
**Primary Question:** "What scheduled events require my participation in the near term?"

**Bound Content:**
- Team Standups — Regular team synchronization
- Community Calls — Open community participation

**Max Visible:** 2 cards  
**View All:** Navigates to Meetings page

## Assembly Rules Applied

Per Dashboard Assembly Contract:
- ✅ Metric cluster appears before paired section (Rule 3.1)
- ✅ Actions + Meetings use two-column grid (Rule 3.2 + Invariant 6.2)
- ✅ All sections wrapped in PageSection with dense mode (Invariant 6.1)
- ✅ AppHeader present with role-specific content (Invariant 6.6)
- ✅ No table preview section (Contributor role constraint)
- ✅ Section factories used exclusively (Invariant 6.3, 6.4, 6.5)

## Semantic Correctness

All metrics answer questions aligned with their section role:
- **My Progress metrics** answer participation questions (not health questions)
- **Pending Actions** contains discrete actionable items (not aggregated metrics)
- **Upcoming Meetings** contains scheduled events (not event count metrics)

## For Agents

This dashboard demonstrates deterministic generation from contracts.

To generate similar dashboards:
1. Execute Dashboard Generation Algorithm (Phase 5.3)
2. Use Dashboard Assembly Contract for structure
3. Use Section → Metric Binding Contract for content eligibility
4. Use Dashboard Metric Matrix for role-specific metrics
5. Validate semantic purity per Section Roles Contract
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
 * Default Contributor Dashboard.
 * 
 * Generated deterministically from contracts to answer:
 * "How am I contributing and progressing over time?"
 * 
 * Demonstrates:
 * - Personal progress tracking (6 metrics)
 * - Action awareness (assigned issues, review requests)
 * - Time commitment visibility (standups, community calls)
 */
export const Default: Story = {
  render: () => createContributorDashboard(),
};
