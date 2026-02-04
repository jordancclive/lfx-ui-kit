# Dashboard Metric Content Matrix (v1)

## Purpose

This document defines the canonical mapping of metrics to dashboard roles and sections within the LFX One Dashboard Page Pattern. It establishes:

- **Metric ownership by role** - Which metrics each user role sees
- **Section placement rules** - Where each metric appears within a dashboard
- **Semantic intent** - What question each metric answers for its audience

This document explicitly does NOT define:
- User interface layout or styling
- Component implementation details
- Visual design or interaction patterns
- Token values or spacing rules

This matrix serves as the authoritative content specification that guides all dashboard implementations and validations.

## Roles Covered

This matrix documents metric assignments for the following user roles:

- **Board Member** - Foundation governance and oversight perspective
- **Maintainer** - Project health and contributor management perspective
- **Contributor** - Personal contribution tracking and project discovery
- **Executive Director** - Organization-wide operations and strategic metrics

## Section Types (Reference)

Dashboard sections are implemented using these canonical patterns:

- **Foundation Health (MetricCluster)** - Organization-wide health signals
- **My Organization (MetricCluster)** - Organization-specific participation metrics
- **Recent Progress (MetricCluster)** - Time-series project or personal activity
- **My Progress (MetricCluster)** - Personal contribution and learning activity
- **Pending Actions** - Actionable items requiring user attention
- **Upcoming Meetings** - Scheduled events and calendar items
- **My Projects (Table)** - Portfolio view of projects with multi-dimensional data

## Metric Matrix (Core Table)

| Role | Section | Metric Name | Chart Type | Scope | Primary Question Answered |
|------|---------|-------------|------------|-------|---------------------------|
| Board Member | Foundation Health | Governance Framework | Single-value | Organization | Is our governance structure active? |
| Board Member | Foundation Health | Total Value of Projects | Sparkline | Organization | What is the aggregate value trend of foundation projects? |
| Board Member | Foundation Health | Total Projects | Single-value | Organization | How many projects does the foundation steward? |
| Board Member | Foundation Health | Total Members | Sparkline | Organization | How is foundation membership growing? |
| Board Member | Foundation Health | Organization Dependency | Stacked bar | Organization | How concentrated is contribution across organizations? |
| Board Member | Foundation Health | Active Contributors | Sparkline | Organization | Is contributor engagement growing? |
| Board Member | Foundation Health | Maintainers | Single-value | Organization | How many maintainers actively steward projects? |
| Board Member | Foundation Health | Events | Sparkline | Organization | Is event activity increasing? |
| Board Member | Foundation Health | Project Health Status | Stacked bar | Organization | What proportion of projects are healthy vs at-risk? |
| Board Member | My Organization | Membership Tier | Single-value | Organization | What is our organization's membership level? |
| Board Member | My Organization | Active Contributors | Sparkline | Organization | How many of our employees contribute? |
| Board Member | My Organization | Maintainers | Single-value | Organization | How many of our employees serve as maintainers? |
| Board Member | My Organization | Event Attendees | Sparkline | Organization | Is our event participation growing? |
| Board Member | My Organization | Event Speakers | Sparkline | Organization | Are our employees speaking at foundation events? |
| Board Member | My Organization | Training Enrollments | Sparkline | Organization | Are employees engaging with training programs? |
| Board Member | My Organization | Certified Employees | Single-value | Organization | How many employees hold foundation certifications? |
| Board Member | Pending Actions | Governance Votes | Summary card | Organization | Do I have pending votes requiring attention? |
| Board Member | Pending Actions | Budget Approvals | Summary card | Organization | Are there budget items awaiting my review? |
| Board Member | Upcoming Meetings | Board Meetings | Summary card | Organization | When is my next board meeting? |
| Board Member | Upcoming Meetings | Committee Sessions | Summary card | Organization | Do I have upcoming committee obligations? |
| Maintainer | Recent Progress | Security Status | Sparkline | Project | Are security vulnerabilities under control? |
| Maintainer | Recent Progress | PR Review & Merge Velocity | Sparkline | Project | Is code review velocity healthy? |
| Maintainer | Recent Progress | Open vs Closed Issues Trend | Sparkline | Project | Is issue resolution keeping pace with creation? |
| Maintainer | Recent Progress | Contributors Mentored | Single-value | Personal | How many contributors have I mentored recently? |
| Maintainer | Recent Progress | Unique Contributors Per Week | Sparkline | Project | Is contributor diversity growing? |
| Maintainer | Recent Progress | Health Score | Single-value | Project | What is the overall project health signal? |
| Maintainer | Pending Actions | PRs Requiring Review | Summary card | Project | Which pull requests need my attention? |
| Maintainer | Pending Actions | Issues Requiring Triage | Summary card | Project | Which issues need maintainer classification? |
| Maintainer | Upcoming Meetings | Project Syncs | Summary card | Project | When is my next project team meeting? |
| Maintainer | Upcoming Meetings | Contributor Onboarding | Summary card | Project | Do I have scheduled onboarding sessions? |
| Maintainer | My Projects | Project Portfolio | Table | Personal | Which projects do I maintain and what is their status? |
| Contributor | My Progress | Code Commits | Sparkline | Personal | How much code am I contributing over time? |
| Contributor | My Progress | Pull Requests | Sparkline | Personal | How many pull requests am I opening and merging? |
| Contributor | My Progress | Issues Resolved | Sparkline | Personal | How many issues am I resolving over time? |
| Contributor | My Progress | Comments Added | Sparkline | Personal | How actively am I participating in discussions? |
| Contributor | My Progress | Active Weeks Streak | Single-value | Personal | How consistently have I been contributing? |
| Contributor | My Progress | Learning Hours | Sparkline | Personal | How much time am I investing in learning and training? |
| Contributor | Pending Actions | Assigned Issues | Summary card | Personal | Which issues are assigned to me? |
| Contributor | Pending Actions | Review Requests | Summary card | Personal | Which pull requests need my review? |
| Contributor | Upcoming Meetings | Team Standups | Summary card | Personal | When is my next team standup? |
| Contributor | Upcoming Meetings | Community Calls | Summary card | Personal | When is my next community call? |

## Explicit Exclusions

### Board Member Dashboards

**Must NOT include:**
- Project-level code metrics (PRs, commits, issues)
- Personal contribution tallies
- Table-based browsing surfaces
- Contributor-level detail views
- Maintainer workload metrics

**Sections NOT used:**
- My Projects (Table) - Board Members operate at organization level only

**Rationale:**
Board Member dashboards provide high-level governance signals and organization health indicators. They answer strategic questions about foundation and member organization health, not operational or individual contributor questions.

### Maintainer Dashboards

**Must NOT include:**
- Organization-wide financial metrics
- Foundation-level governance signals
- Multi-organization aggregate totals
- Board-level decision indicators
- Cross-foundation trend comparisons

**Sections NOT used:**
- Foundation Health - Maintainers operate at project level
- My Organization - Maintainer role is project-scoped, not org-scoped

**Rationale:**
Maintainer dashboards focus on project health, contributor engagement, and personal maintainer workload. They answer operational questions about project sustainability and day-to-day maintenance activities.

### Contributor Dashboards

**Must NOT include:**
- Organization-wide aggregates
- Foundation governance metrics
- Maintainer-only workload signals (triage, security patches)
- Board-level financial indicators
- Cross-project health comparisons
- Organization membership or certification tracking

**Sections NOT used:**
- Foundation Health - Contributors focus on personal impact, not ecosystem-wide health
- My Organization - Contributors represent themselves as individuals, not employers
- My Projects (Table) - Contributors track progress through metrics, not portfolio browsing

**Rationale:**
Contributor dashboards emphasize personal contribution tracking, learning progress, and community participation. They answer questions about individual impact, skill development, and contribution consistency. Contributors monitor their own activity to understand their growth trajectory and community engagement, not to manage projects or organizations.

### Executive Director Dashboards

**Must NOT include:**
- Individual contributor attribution
- Project-level code metrics
- Personal workload indicators
- Contributor-specific recognition signals

**Sections NOT used:**
- Pending Actions - Executive Directors delegate operational tasks
- My Projects (Table) - Executive Directors oversee programs, not specific projects

**Rationale:**
Executive Director dashboards provide strategic oversight across programs, budgets, and organizational health. They answer questions about foundation operations and resource allocation, not individual contributions or project code metrics.

## Invariants (Non-Negotiable Rules)

The following rules govern all metric assignments and must be preserved across implementations:

1. **Scope Consistency Within Sections**
   - MetricClusters never mix organization-level and personal-level metrics
   - Each MetricCluster answers questions at a single scope (organization, project, or personal)

2. **Semantic Coherence**
   - Each MetricCluster section answers ONE class of question
   - Foundation Health = "Is the foundation/ecosystem healthy?"
   - My Organization = "How is our member organization participating?"
   - Recent Progress = "What has changed recently in my focus area?"

3. **Table Usage Constraints**
   - Tables are ONLY used for portfolio-style multi-dimensional views
   - Tables require browsing behavior (sort, filter, pagination)
   - Tables are prohibited in signal-focused dashboards (Board Member)

4. **Signal-Only Dashboards**
   - Board Member dashboards contain ONLY top-level health signals
   - No browsing, searching, or drilling into operational detail
   - Every metric escalates to LFX Insights for deeper analysis

5. **Chart Type Consistency**
   - Sparklines indicate trend direction only (no axis labels)
   - Stacked bars show proportional distribution
   - Single-value indicators represent current state or counts
   - Chart type must match the question being answered

6. **Time-Series Placement**
   - Metrics with time-series data belong in MetricCluster sections
   - Time-series metrics require consistent time windows (7 weeks, 90 days, etc.)
   - Summary cards (Pending Actions, Upcoming Meetings) do NOT contain charts

7. **Role Isolation**
   - Metrics assigned to one role must NOT appear in another role unless explicitly required
   - Role-specific questions must be answerable without borrowing metrics from other roles
   - Cross-role metric sharing requires explicit justification in this document

## Steward Notes

### Document Authority

This Dashboard Metric Content Matrix is the authoritative specification for:
- Dashboard content validation
- Metric placement during new role implementation
- Content consistency audits across examples

Any dashboard implementation that deviates from this matrix requires:
1. Explicit justification documented in this file
2. Steward approval
3. Corresponding update to this matrix

### Prerequisites for Future Work

This matrix is a **required input** for:
- Visual normalization across dashboard implementations
- Component extraction proposals
- Interaction pattern standardization
- Dashboard Page Pattern documentation updates

### Addition Process

When adding new metrics:
1. Add the metric to this matrix FIRST
2. Document role, section, chart type, scope, and question answered
3. Verify the metric does not violate invariants
4. Ensure the metric does not appear in exclusion lists for other roles
5. Only then proceed with implementation

### Versioning

This document follows semantic versioning:
- **Major version** changes when roles, sections, or invariants change
- **Minor version** changes when metrics are added or removed
- **Patch version** changes for clarifications or corrections

Current version: **v1.0.0**

---

**Document Status:** Canonical  
**Owner:** Design System Steward  
**Last Updated:** 2026-02-03  
**Next Review:** Prior to any dashboard visual normalization work
