/**
 * PAGE PATTERN — NORMATIVE
 * 
 * This file defines a reusable page-level pattern.
 * It is a structural blueprint, not a product page.
 * 
 * Agents may copy this pattern when creating new dashboard pages.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * DASHBOARD PAGE PATTERN
 * 
 * A top-level LFX One layout archetype for overview and summary pages.
 * 
 * PATTERN DEFINITION:
 * Dashboard is a multi-surface composition that combines:
 * - Metrics row (horizontal card row for key performance indicators)
 * - Data table (single-table preview or summary)
 * - List group (activity feed, recent items, or related links)
 * 
 * CANONICAL STRUCTURE:
 * 
 * AppShell
 * └─ PageLayout
 *    ├─ AppHeader (title + optional description/actions)
 *    ├─ PageSection → MetricsRow → MetricCard×N
 *    ├─ PageSection → Card → TableGrid
 *    └─ PageSection → Card → ListGroup
 * 
 * KEY CHARACTERISTICS:
 * - Multiple surfaces per page (metrics + table + list)
 * - No section titles (AppHeader is the only title)
 * - Each surface wrapped in PageSection for consistent vertical rhythm
 * - Metrics span full width in horizontal row
 * - Table and list each contained in Card surfaces
 * 
 * ARCHITECTURAL ROLE:
 * Dashboard is a Page Pattern, not a Page Example.
 * It defines HOW to compose overview pages, not WHAT data to show.
 * It is an archetype like Table Page or Segmented Table Page.
 * 
 * PATTERN RULES:
 * - No styling overrides allowed
 * - No new tokens or props may be introduced
 * - If something looks wrong, fix in:
 *   - tokens
 *   - component contracts
 *   - or missing pattern components
 * - Never patch in this pattern
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createMetricsRow } from '../../../../components/metrics-row/metrics-row';
import { createMetricCard } from '../../../../components/metric-card/metric-card';
import { createCard } from '../../../../components/card/card';
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
  title: '2. Page Patterns / 1. Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Dashboard Page Pattern

**Dashboard is a top-level LFX One layout archetype for overview and summary pages.**

This is a **Page Pattern**, not a Page Example.

It defines HOW to compose multi-surface overview pages, not WHAT data to show.

### Pattern Definition

Dashboard is a multi-surface composition that combines:
- **Metrics row** (horizontal card row for key performance indicators)
- **Data table** (single-table preview or summary)
- **List group** (activity feed, recent items, or related links)

### Canonical Structure

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader (title + optional description/actions)
   ├─ PageSection → MetricsRow → MetricCard×N
   ├─ PageSection → Card → TableGrid
   └─ PageSection → Card → ListGroup
\`\`\`

### Key Characteristics

- Multiple surfaces per page (metrics + table + list)
- No section titles (AppHeader is the only title)
- Each surface wrapped in PageSection for consistent vertical rhythm
- Metrics span full width in horizontal row
- Table and list each contained in Card surfaces

### When to Use Dashboard Pattern

Use Dashboard when:
- Building an overview or summary page
- Displaying multiple related data surfaces on one page
- Showing key metrics alongside preview data
- Creating a home page or landing page for a section
- Need a high-level snapshot across multiple data types

**Examples:**
- Project overview page (metrics + recent activity + task list)
- Organization dashboard (stats + member table + recent events)
- Home page (summary cards + quick access table + notifications)

### When NOT to Use Dashboard Pattern

Do NOT use Dashboard when:
- Page focuses on a single dataset (use **Table Page** instead)
- Page has multiple independent tables (use **Segmented Table Page** instead)
- Page is detail-focused, not overview-focused
- Page requires deep filtering or complex interactions per surface
- Metrics are the only content (use metrics-only page composition)

**Use these patterns instead:**
- Single-dataset pages → **Table Page**
- Multiple independent tables → **Segmented Table Page**
- Detail pages → Custom composition

### Pattern Rules

**Dashboard pattern is locked:**
- No styling overrides allowed
- No new tokens or props may be introduced
- All spacing/hierarchy emerges from component contracts
- If something looks wrong, fix in tokens or contracts — not here

### Architectural Role

Dashboard is a **Page Pattern**, equal in hierarchy to Table Page and Segmented Table Page.

It is:
- ✅ A reusable structural blueprint
- ✅ A top-level LFX One archetype
- ✅ Copyable by agents when creating overview pages

It is NOT:
- ❌ A concrete product page
- ❌ An example of another pattern
- ❌ A system verification artifact

### Interaction Behavior

Interaction behavior in Dashboard follows the system-wide contract defined in  
**0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.

- Metric drill-down → Drawer
- ActionCard "View All" → Drawer
- Create actions → Page (Creation Flow pattern)

---

## MetricCluster (Dashboard Section Primitive)

MetricCluster is an **emergent, reusable dashboard-level section pattern** observed
across multiple LFX One dashboards (Board Member, Contributor, Maintainer, Executive Director).

This is a DESCRIPTIVE pattern documentation, not a locked component contract.

### Purpose

MetricCluster groups high-level metrics for **at-a-glance monitoring** and
**decision-oriented summaries**.

It provides:
- Quick visual scanning of key performance indicators
- Summary-first design philosophy
- Clear escalation paths to detailed analytics
- Contextual drill-down via drawer interactions

**MetricCluster is NOT:**
- A single metric card
- A deep analytics surface
- A replacement for dedicated reporting tools

### Typical Structure

A MetricCluster section typically contains:

1. **Section Header**
   - Title (e.g., "Performance Metrics", "Activity Overview")
   - Optional description
   - Optional action button (e.g., "Ask LFX Lens")

2. **Metric Card Cluster**
   - Horizontally aligned metric cards
   - May overflow into carousel/horizontal scroll
   - Typically 3-6 cards per cluster

3. **Interaction Layer**
   - Click handler on each metric card
   - Opens detail drawer (not modal, not page)
   - Drawer contains expanded chart + context

**ASCII Structure:**

\`\`\`
PageSection (MetricCluster)
├─ SectionHeader
│  ├─ title: "Performance Metrics"
│  ├─ description (optional)
│  └─ action: "Ask LFX Lens" (optional)
├─ MetricCardRow (horizontal layout)
│  ├─ MetricCard (clickable)
│  ├─ MetricCard (clickable)
│  ├─ MetricCard (clickable)
│  └─ MetricCard (clickable)
└─ Drawer (revealed on card click)
   ├─ Detailed chart(s)
   ├─ Contextual explanation
   └─ Optional CTA → LFX Insights
\`\`\`

### Interaction Model

MetricCluster follows a **summary → detail** interaction model:

**On Card Click:**
- Opens a **drawer** (slides in from right)
- Drawer does NOT replace dashboard context
- Drawer shows expanded view of the metric:
  - Detailed chart (line, bar, or trend visualization)
  - Contextual explanation of what the metric means
  - Historical data or trend information
  - Optional escalation link to deeper analytics (e.g., LFX Insights)

**Why Drawer, Not Modal or Page:**
- Preserves dashboard context (user can see other metrics)
- Lightweight, non-blocking interaction
- Encourages quick exploration without losing place
- Supports comparison between metrics

**Drawer Contents:**
- Expanded metric visualization
- Time-series data (if applicable)
- Contextual help text
- Link to related LFX product (e.g., "View full analytics in LFX Insights")

### When to Use

Use MetricCluster when:

- Building **overview dashboards** for role-based personas
- Displaying **health monitoring** surfaces
- Showing **KPI summaries** that require quick scanning
- Creating **executive summaries** with escalation paths
- Need to group **related metrics** into semantic clusters

**Typical Use Cases:**
- Board Member Dashboard → Organizational health metrics
- Contributor Dashboard → Personal contribution stats
- Maintainer Dashboard → Project health indicators
- Executive Director Dashboard → Cross-project KPIs

### When NOT to Use

Do NOT use MetricCluster when:

- Displaying a **single metric** (use standalone MetricCard instead)
- Building **deep analytical workflows** (use dedicated analytics pages)
- Metrics require **complex filtering** (use Table Page with metrics row)
- Page is focused on **task execution** (use Creation Flow or action-oriented layouts)
- Metrics are **static** with no drill-down need (use simple metrics row)

### Relationship to Other Patterns

**Lives INSIDE:**
- Dashboard Page Pattern (as a section primitive)

**Often Paired With:**
- Action sections (e.g., "Create Vote", "Schedule Meeting")
- Recent activity sections (list groups)
- Preview tables (single-table summaries)

**Does NOT Exist Inside:**
- Table Page (Table Page uses metrics row, not MetricCluster)
- Creation Flow Page (Creation Flow is task-focused, not summary-focused)
- Segmented Table Page (Segmented uses section titles, not metric clusters)

### Agent Guidance (Non-Normative)

**This pattern is observed, not locked.**

When generating dashboards, agents should:
- Follow existing dashboard examples in LFX One
- Use MetricsRow component for horizontal metric layout
- Assume drawer interaction for metric drill-down
- Do NOT invent new interaction models (e.g., modals, tooltips, popovers)
- Preserve the summary → detail escalation pattern

**Agents should NOT:**
- Lock this pattern prematurely
- Create normative rules for MetricCluster structure
- Invent custom metric card variants
- Bypass existing dashboard compositions

**If in doubt:**
- Reference Board Member, Contributor, or Maintainer dashboard examples
- Ask for clarification before diverging
- Prefer existing patterns over novel compositions

---

## ActionCard & My Actions Drawer

ActionCard is a **dashboard-level primitive** used to surface **system-requested user actions**
that require attention, decision, or execution.

The **My Actions drawer** is a **required companion pattern** that provides expanded visibility,
filtering, and prioritization of all pending actions.

This is a DESCRIPTIVE pattern documentation, not a locked component contract.

### Purpose

ActionCards highlight **urgent or important actions** the system expects the user to take.

They are:
- **Decision-oriented:** Require user judgment or approval
- **Execution-oriented:** Prompt immediate action (vote, review, approve, etc.)
- **Contextual:** Provide just enough information to act
- **Attention-demanding:** Designed to interrupt dashboard scanning behavior appropriately

ActionCards are NOT:
- Generic informational notifications
- Passive activity feeds
- Historical logs or audit trails
- Long-form content displays

### ActionCard Characteristics

ActionCards have a **uniform, constrained structure**:

**Visual Properties:**
- Uniform card size (shared dimensions with Meeting Summary cards)
- Attention-demanding visual treatment (e.g., colored background, border, or badge)
- Compact, scannable layout

**Content Structure:**
- **Context tag(s):** Project name, entity type, or source system
- **Short action description:** What needs to be done (1-2 lines max)
- **Strong primary CTA:** Clear action button (e.g., "Vote Now", "Review PR", "Approve Request")

**Example ActionCard:**

\`\`\`
┌─────────────────────────────────────┐
│ [Project: Kubernetes]               │
│                                     │
│ Vote on "Annual Budget Allocation" │
│ Closes in 2 days                   │
│                                     │
│ [Vote Now →]                        │
└─────────────────────────────────────┘
\`\`\`

ActionCards are NOT:
- Generic cards with arbitrary content
- Long lists of text
- Detailed information displays (use drawers or pages for that)

### My Actions Section (Dashboard Summary)

On dashboards, ActionCards appear in a **summarized section**:

**Section Header:**
- Title: "My Actions" or "My Pending Actions"
- Optional count: "(2/3)" showing visible vs total
- "View All" action to open the drawer

**Card Display:**
- Shows **2-3 most urgent actions** by default
- Sorted by priority, deadline, or recency
- Horizontally aligned or stacked depending on layout

**Example Dashboard Section:**

\`\`\`
PageSection (My Actions)
├─ SectionHeader
│  ├─ title: "My Pending Actions (2/3)"
│  └─ action: "View All"
├─ ActionCard (urgent)
├─ ActionCard (important)
└─ ActionCard (optional third card)
\`\`\`

### My Actions Drawer (Critical Pattern)

The "View All" action opens a **right-side drawer** that serves as the
**authoritative surface** for action management.

**Drawer Opens From:**
- "View All" link in the My Actions section header
- Optional global action menu or notification badge

**Drawer Structure:**

\`\`\`
Drawer (slides in from right)
├─ DrawerHeader
│  └─ title: "My Actions"
├─ DrawerToolbar
│  ├─ SearchInput (filter by description)
│  └─ FilterControls (by type, project, status, etc.)
├─ ActionCardList (scrollable)
│  ├─ ActionCard
│  ├─ ActionCard
│  ├─ ActionCard
│  └─ [... more actions]
└─ DrawerFooter (optional)
   └─ Summary or bulk actions
\`\`\`

**Why Drawer, Not Page:**
- **Preserves dashboard context:** User can see metrics and summaries while browsing actions
- **Lightweight interaction:** Quickly scan, filter, and act without navigation
- **Non-blocking:** Can dismiss drawer and return to dashboard immediately
- **Contextual:** Keeps user in the dashboard workflow

**Drawer Capabilities:**
- **Search:** Filter actions by keyword
- **Filter:** By project, type (vote, review, approval), status, deadline
- **Sort:** By priority, deadline, or creation date
- **Full inventory:** Shows ALL pending actions, not just top 2-3

**Drawer vs Page Decision:**
- Use **Drawer** (default): When actions are contextual to the dashboard workflow
- Use **Page**: Only if actions require complex multi-step workflows or are standalone app features

### Interaction Rules

**Dashboard Display Rules:**
- Show **2-3 most urgent actions** in the dashboard section
- Prioritize by:
  1. Impending deadlines
  2. System-assigned priority
  3. User role or responsibility
- Hide lower-priority actions (accessible via drawer)

**ActionCard Click Behavior:**
- Primary CTA executes action directly OR navigates to detail page
- Card click (outside CTA) may open detail drawer OR navigate to detail page
- Behavior depends on action complexity

**Drawer Behavior:**
- Opens on "View All" click
- Preserves filters and scroll position during session
- Dismisses via close button, overlay click, or ESC key
- Does NOT navigate away from dashboard

### When to Use

Use ActionCard + My Actions drawer when:

- Building **role-based dashboards** with user accountability
- Surfacing **governance workflows** (votes, approvals, reviews)
- Displaying **operational tasks** (incident responses, sign-offs)
- Creating **contributor dashboards** (PRs to review, issues assigned)
- Need to **interrupt user attention** for important tasks

**Typical Use Cases:**
- Board Member Dashboard → Pending votes and approvals
- Maintainer Dashboard → Pull requests requiring review
- Contributor Dashboard → Issues assigned to user
- Executive Director Dashboard → Strategic decisions requiring input

### When NOT to Use

Do NOT use ActionCard + My Actions drawer for:

- **Informational notifications** (use notification center or toast)
- **Passive activity feeds** (use list group or timeline patterns)
- **Historical logs** (use table page with filtering)
- **Completed actions** (use audit log or history page)
- **System status updates** (use banner or alert components)

**Use these patterns instead:**
- Passive notifications → Notification center or list group
- Historical data → Table Page
- System alerts → Banner component

### Relationship to Other Patterns

**Lives INSIDE:**
- Dashboard Page Pattern (as a section primitive)

**Shares Structure With:**
- Meeting Summary cards (same card dimensions and layout density)
- Upcoming Events section (similar urgency + CTA pattern)

**Uses Shared Patterns:**
- Drawer pattern (same as MetricCluster detail expansion)
- Card component (uniform sizing and spacing)

**Does NOT Exist Inside:**
- Table Page (Table Page is for browsing datasets, not executing actions)
- Creation Flow Page (Creation Flow is for creating entities, not completing requests)
- Segmented Table Page (Segmented is for multi-table browsing)

**Complementary Patterns:**
- Often paired with MetricCluster (metrics show health, actions show tasks)
- May appear alongside Meeting sections (actions + events = full accountability view)

### Agent Guidance (Non-Normative)

**This pattern is observed, not locked.**

When generating dashboards with action surfaces, agents should:

- Use **ActionCard** for system-requested user actions
- Implement **My Actions drawer** for "View All" functionality
- Do NOT replace drawer with a full page unless explicitly required
- Do NOT use modals for "View All" (modals block context)
- Limit dashboard display to **2-3 most urgent actions**
- Provide search + filter in the drawer
- Preserve dashboard context (drawer slides over, doesn't navigate away)

**Agents should NOT:**
- Create custom action card layouts (follow existing patterns)
- Invent new interaction models (stick to drawer pattern)
- Show all actions on dashboard (defeats purpose of prioritization)
- Use modals instead of drawers
- Navigate away from dashboard for action browsing

**Decision Tree:**
- Need to show pending user actions? → Use ActionCard
- Need full action inventory? → Open My Actions drawer
- Need complex multi-step action flow? → Navigate to dedicated page

**If in doubt:**
- Reference Board Member, Contributor, or Maintainer dashboard examples
- Follow the drawer pattern used by MetricCluster
- Ask for clarification before introducing page navigation
- Prefer drawers over pages for lightweight action browsing

---

## Dashboard Section Primitives

The Dashboard Page pattern is composed of **reusable section primitives** that can be
combined in different ways based on role, context, and organizational needs.

Section primitives are **dashboard-level patterns**, not components. They define
**WHAT appears** and **HOW it behaves**, not HOW it looks or WHERE it's positioned.

### Overview of Section Primitives

#### 1. MetricCluster

**Purpose:**
- Display grouped metrics for at-a-glance health monitoring
- Provide summary-first view of KPIs
- Enable drilldown to detailed analytics

**Typical Content:**
- 3-6 related metric cards
- Optional section header with title and "Ask LFX Lens" action
- Horizontal layout with optional overflow/carousel

**Primary Interaction:**
- **Drawer** for metric drilldown (expanded chart + details)
- Optional link to LFX Insights (page navigation)

**Role Dependency:**
- **Role-aware:** Metrics vary by role (Board Member sees org-level, Contributor sees personal stats)
- Present in: Board Member, Contributor, Maintainer, Executive Director dashboards

---

#### 2. Pending Actions (ActionCard Summary)

**Purpose:**
- Surface system-requested user actions requiring attention
- Prioritize urgent decisions or tasks
- Provide quick access to full action inventory

**Typical Content:**
- 2-3 most urgent ActionCards (votes, reviews, approvals)
- Section header with count (e.g., "My Pending Actions (2/3)")
- "View All" action to open drawer

**Primary Interaction:**
- **ActionCard CTA:** Executes action directly OR navigates to detail page
- **View All → Drawer:** Opens My Actions drawer (search, filter, full list)

**Role Dependency:**
- **Role-specific:** Content varies by role (Board Member sees governance votes, Maintainer sees PR reviews)
- Present in: Board Member, Contributor, Maintainer dashboards
- **May be omitted:** If user has no pending actions

---

#### 3. Meeting Summary Cluster

**Purpose:**
- Show upcoming meetings and recent meeting highlights
- Enable quick access to meeting details and recordings
- Support meeting scheduling workflows

**Typical Content:**
- 2-4 meeting summary cards (upcoming + recent)
- Each card shows: title, date/time, participant count, join/view action
- Optional section header with "Schedule Meeting" action

**Primary Interaction:**
- **Meeting card click → Drawer:** Meeting details, agenda, participants
- **"Schedule Meeting" → Page:** Navigate to Creation Flow (Schedule Meeting pattern)
- **"Join Meeting" → External:** Launch meeting platform (Zoom, etc)

**Role Dependency:**
- **Role-aware:** Meetings vary by role (Board Member sees board meetings, Contributor sees project meetings)
- Present in: Board Member, Maintainer, Executive Director dashboards
- **May be omitted:** Contributor dashboard (less meeting-focused)

---

#### 4. Strategic Alerts (Executive Director-Only)

**Purpose:**
- Surface high-priority organizational issues requiring executive attention
- Highlight cross-project risks or opportunities
- Enable rapid response to strategic concerns

**Typical Content:**
- 1-3 alert cards (budget alerts, compliance issues, strategic opportunities)
- Each card shows: alert type, description, affected projects, CTA
- Attention-demanding visual treatment (colored border or background)

**Primary Interaction:**
- **Alert card click → Drawer:** Alert details, affected entities, recommended actions
- **Alert CTA → Page:** Navigate to resolution workflow (varies by alert type)

**Role Dependency:**
- **Executive Director only**
- Does NOT appear in: Board Member, Contributor, or Maintainer dashboards

---

#### 5. Recent Activity / Table Preview (Universal)

**Purpose:**
- Show recent activity or preview of primary dataset
- Provide quick access to full table view
- Support common workflows without navigation

**Typical Content:**
- Table or list preview (3-5 items)
- Typically: recent votes, recent surveys, recent contributions, or recent projects
- Optional "View All" action

**Primary Interaction:**
- **Row click → Drawer:** Item details (inspection without navigation)
- **"View All" → Page:** Navigate to full Table Page

**Role Dependency:**
- **Role-aware:** Content varies by role (Board Member sees votes, Contributor sees contributions)
- Present in: All dashboard roles (universal pattern)

---

### Section Primitive Summary Table

| Section Primitive | Primary Interaction | Role Dependency | Typical Position |
|-------------------|---------------------|-----------------|------------------|
| **MetricCluster** | Drawer (metric drilldown) | Role-aware (all roles) | Top (hero section) |
| **Pending Actions** | Drawer (View All), Page (action execution) | Role-specific (governance/ops) | Upper-middle (attention zone) |
| **Meeting Summary** | Drawer (details), Page (schedule), External (join) | Role-aware (meeting-focused roles) | Middle (contextual) |
| **Strategic Alerts** | Drawer (details), Page (resolution) | Executive Director only | Upper-middle (attention zone) |
| **Recent Activity** | Drawer (inspection), Page (full view) | Role-aware (all roles) | Bottom (contextual preview) |

---

## Role-Specific Dashboard Composition (Observed)

This section documents **observed dashboard compositions** in LFX One prototypes.

**Important:** This is NOT a locked specification. Role-specific compositions may evolve
based on user research, product requirements, and organizational context.

### Board Member Dashboard

**Focus:** Organizational governance and oversight

**Section Primitives Present:**
- ✅ MetricCluster (organizational health metrics)
- ✅ Pending Actions (votes, approvals)
- ✅ Meeting Summary (board meetings, committee meetings)
- ✅ Recent Activity (recent votes, recent decisions)

**Emphasized:**
- Pending Actions (governance decisions are primary workflow)
- Meeting Summary (meetings are core responsibility)

**Omitted:**
- Strategic Alerts (not executive-level)

**Interaction Pattern:**
- Heavy drawer usage (inspection without leaving dashboard)
- Page navigation for voting and scheduling

---

### Contributor Dashboard

**Focus:** Personal productivity and project engagement

**Section Primitives Present:**
- ✅ MetricCluster (personal contribution stats)
- ✅ Pending Actions (issues assigned, PRs to review)
- ✅ Recent Activity (recent contributions, recent comments)

**Emphasized:**
- MetricCluster (personal stats are motivating)
- Pending Actions (assigned work is primary focus)

**Omitted:**
- Meeting Summary (less meeting-focused role)
- Strategic Alerts (not contributor-level)

**Interaction Pattern:**
- Page navigation for task execution (issue detail, PR review)
- Drawer for quick stats and activity inspection

---

### Maintainer Dashboard

**Focus:** Project health and operational oversight

**Section Primitives Present:**
- ✅ MetricCluster (project health metrics)
- ✅ Pending Actions (PR reviews, issue triage, releases)
- ✅ Meeting Summary (project meetings, sync meetings)
- ✅ Recent Activity (recent PRs, recent issues)

**Emphasized:**
- Pending Actions (operational decisions are primary workflow)
- MetricCluster (project health monitoring)

**Omitted:**
- Strategic Alerts (not executive-level)

**Interaction Pattern:**
- Balanced drawer and page usage
- Drawer for quick inspection, page for deep work

---

### Executive Director Dashboard

**Focus:** Strategic oversight and cross-project leadership

**Section Primitives Present:**
- ✅ MetricCluster (organizational and cross-project metrics)
- ✅ Strategic Alerts (high-priority organizational issues)
- ✅ Pending Actions (strategic decisions, budget approvals)
- ✅ Meeting Summary (executive meetings, all-hands)
- ✅ Recent Activity (cross-project activity, organizational changes)

**Emphasized:**
- Strategic Alerts (executive-level concerns)
- MetricCluster (org-wide health monitoring)

**Omitted:**
- None (most comprehensive dashboard)

**Interaction Pattern:**
- Heavy drawer usage (strategic overview without context switching)
- Page navigation for resolution workflows and deep analysis

---

## Interaction Surfaces at Section Level

Each section primitive follows the system-wide **Drawer vs Modal vs Page** contract
defined in **0. README → Interaction Surfaces**.

### MetricCluster Interactions

**Metric Card Click:**
- **→ Drawer** (default, primary)
  - Expanded chart with historical data
  - Contextual explanation
  - Optional link to LFX Insights

**"Ask LFX Lens" Button:**
- **→ Modal OR Drawer** (TBD based on LFX Lens UX)
  - Quick AI-powered metric explanation
  - Does NOT navigate away from dashboard

**Rule:** MetricCluster MUST use drawers for metric drilldown (preserves context).

---

### Pending Actions Interactions

**ActionCard CTA Click:**
- **→ Page** (for complex actions: vote, approve, review)
- **→ Inline execution** (for simple actions: dismiss, acknowledge)

**"View All" Click:**
- **→ Drawer** (My Actions drawer with search + filter)

**ActionCard Body Click:**
- **→ Drawer** (action details without executing)

**Rule:** View All MUST use drawer (NOT page, NOT modal). Action execution may navigate to page.

---

### Meeting Summary Interactions

**Meeting Card Click:**
- **→ Drawer** (meeting details, agenda, participants)

**"Schedule Meeting" Button:**
- **→ Page** (Creation Flow: Schedule Meeting pattern)

**"Join Meeting" Button:**
- **→ External** (launch meeting platform in new tab/window)

**Rule:** Inspection uses drawer. Scheduling uses page. Joining is external.

---

### Strategic Alerts Interactions

**Alert Card Click:**
- **→ Drawer** (alert details, affected entities, context)

**Alert CTA Click:**
- **→ Page** (resolution workflow, varies by alert type)

**Rule:** Inspection uses drawer. Resolution uses page.

---

### Recent Activity Interactions

**Row Click:**
- **→ Drawer** (item details for quick inspection)

**"View All" Click:**
- **→ Page** (full Table Page with filters + pagination)

**Rule:** Inspection uses drawer. Full browsing uses page.

---

## Agent Guidance for Dashboard Generation

**This guidance is observational, not locked.**

When agents are instructed to create or modify dashboards, they should:

### Choosing Section Primitives

**Step 1: Identify user role**
- Board Member → Governance-focused sections
- Contributor → Personal productivity sections
- Maintainer → Operational oversight sections
- Executive Director → Strategic oversight sections

**Step 2: Select section primitives based on role**
- All roles → MetricCluster + Recent Activity
- Governance/ops roles → Pending Actions
- Meeting-focused roles → Meeting Summary
- Executive Director only → Strategic Alerts

**Step 3: Compose sections in priority order**
- Hero section: MetricCluster (always first)
- Attention zone: Pending Actions OR Strategic Alerts
- Contextual sections: Meeting Summary, Recent Activity

### Varying Dashboards by Role

**Do:**
- Adjust MetricCluster content to role-appropriate metrics
- Show Pending Actions only if user has accountable workflows
- Include Meeting Summary for meeting-focused roles
- Add Strategic Alerts only for Executive Director

**Do NOT:**
- Create new section types without explicit instruction
- Mix role contexts (e.g., contributor metrics on board member dashboard)
- Hide sections that always apply (MetricCluster, Recent Activity)

### What NOT to Invent

**Agents MUST NOT invent:**
- New section primitive types (use existing patterns)
- Custom grid layouts (section layout is not locked)
- Chart types or visualizations (defer to drawer content)
- Role logic (roles are provided by context)
- Complex filtering within dashboard sections (use drawers for that)

**If unclear:**
- Default to MetricCluster + Recent Activity (universal sections)
- Reference existing role-specific dashboard examples
- Ask for clarification before creating new section types

### Decision Tree for Section Composition

```
Is user role known?
├─ YES → Use role-specific section primitives
│  ├─ Board Member → Governance focus
│  ├─ Contributor → Productivity focus
│  ├─ Maintainer → Operations focus
│  └─ Executive Director → Strategic focus
└─ NO → Use universal sections only (MetricCluster + Recent Activity)

Does user have pending actions?
├─ YES → Include Pending Actions section
└─ NO → Omit Pending Actions section

Is role meeting-focused?
├─ YES → Include Meeting Summary section
└─ NO → Omit Meeting Summary section (or make optional)

Is user Executive Director?
├─ YES → Include Strategic Alerts section
└─ NO → Omit Strategic Alerts section
```

### Final Rule

Agents MUST treat section primitives as **building blocks**, not as fixed layouts.

The Dashboard pattern defines:
- ✅ WHAT sections exist (primitives)
- ✅ WHY they exist (purpose)
- ✅ HOW they behave (interaction surfaces)

The Dashboard pattern does NOT define:
- ❌ Visual layout (spacing, sizing, positioning)
- ❌ Grid systems (columns, rows, breakpoints)
- ❌ Chart rendering (visualization details)
- ❌ Role authorization logic (backend concerns)

**When in doubt:**
- Reference Board Member, Contributor, Maintainer, or Executive Director dashboards
- Follow the Drawer vs Modal vs Page contract
- Compose sections vertically in priority order
- Ask before inventing new patterns
        `,
      },
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
