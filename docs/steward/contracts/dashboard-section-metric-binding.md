# Dashboard Section → Metric Binding Contract

**Version:** v1.0.0  
**Status:** Normative  
**Owner:** Design System Steward

---

## 1. Purpose

This contract establishes the normative binding between semantic dashboard section roles and the metrics permitted within them.

This contract ensures semantic correctness by making it mechanically impossible to place metrics that answer one class of question inside a section that answers a different class of question.

This contract answers the question: "What metrics are allowed inside each semantic dashboard section role?"

This contract does NOT define:
- How metrics are rendered visually
- How data is fetched or persisted
- How dashboards are assembled or ordered
- How sections are laid out spatially
- How charts behave or transition
- Component APIs or implementations
- Storybook organization or documentation

---

## 2. Definitions

**Section Role:** A semantic intent class defined in the Dashboard Section Roles contract that answers a specific category of user question. Section roles are implementation-agnostic.

**Metric:** A quantified data point that appears in a dashboard section. Metrics are defined in the Dashboard Metric Matrix with specified scope, chart type, and question answered.

**Metric Class:** A high-level category of metrics grouped by the semantic question they answer, independent of specific measurement or data source.

**Binding:** A normative rule that permits or prohibits specific metrics within a section role based on semantic alignment between the metric's question and the section role's primary question.

**Violation:** A binding violation occurs when a metric appears in a section role to which it is not bound. Violations constitute contract non-conformance and require correction or explicit variance approval.

---

## 3. Binding Model Overview

This contract operates at the intersection of three authoritative specifications:

**Dashboard Section Roles Contract** (Phase 5.1) defines the five semantic section roles and their primary questions:
- HealthOverview
- ParticipationContext
- AttentionRequired
- TimeCommitments
- PortfolioOverview

**Dashboard Metric Matrix** (Phase 3.x) defines the complete inventory of metrics with their scope, chart type, and question answered for each user role.

**This Contract** (Phase 5.2) binds the two by establishing which metrics from the matrix are semantically permitted in which section roles.

### 3.1 Binding Rules

A metric is permitted in a dashboard section if and only if:

1. The metric is bound to the section's role per this contract
2. The metric is assigned to the user role per the Dashboard Metric Matrix
3. The section role is appropriate for the user role's dashboard

A metric that satisfies conditions 2 and 3 but violates condition 1 produces a binding violation even if it appears visually correct.

### 3.2 Binding Authority

This contract takes precedence over visual similarity. A metric that "looks like" it belongs in a section but is not bound to that section's role MUST NOT appear in that section.

---

## 4. Canonical Section → Metric Bindings

### 4.1 HealthOverview

**Section Role Name:** HealthOverview

**Primary Question:** "What is the current state of health across my area of responsibility?"

**Allowed Metric Classes:**

- System health indicators
- Status signals with trend context
- Vulnerability and risk metrics
- Velocity and throughput indicators
- Aggregate project health scores
- Multi-dimensional health distributions
- Capacity and sustainability signals

**Explicitly Allowed Metrics:**

From Dashboard Metric Matrix, the following metrics are bound to HealthOverview:

**Foundation-Level Health (Board Member):**
- Governance Framework
- Total Value of Projects
- Total Projects
- Organization Dependency
- Project Health Status

**Project-Level Health (Maintainer):**
- Security Status
- PR Review & Merge Velocity
- Open vs Closed Issues Trend
- Health Score

**Personal-Level Health (Contributor, where applicable):**
- Personal contribution velocity metrics
- Individual health score indicators

**Explicitly Forbidden Metrics:**

The following metrics MUST NOT appear in HealthOverview sections:

- Membership Tier (answers membership status, not health)
- Event Attendees (answers participation, not health)
- Event Speakers (answers participation, not health)
- Training Enrollments (answers participation, not health)
- Certified Employees (answers participation, not health)
- Active Contributors (answers participation, not health)
- Maintainers (answers participation, not health)
- Contributors Mentored (answers participation, not health)
- Unique Contributors Per Week (answers participation, not health)
- Events (answers participation, not health)
- Total Members (answers participation, not health)

**Rationale:**

HealthOverview sections answer questions about system, project, or organizational health status. Metrics in this role measure operational integrity, risk levels, sustainability, and capacity. Metrics that measure participation levels, community size, or contributor counts answer different questions and belong in ParticipationContext.

---

### 4.2 ParticipationContext

**Section Role Name:** ParticipationContext

**Primary Question:** "What is the current state of participation in my area of responsibility?"

**Allowed Metric Classes:**

- Contributor activity indicators
- Community size and growth metrics
- Engagement level signals
- Maintainer and leadership counts
- Event participation metrics
- Training and certification engagement
- Membership status indicators
- Contributor diversity measures

**Explicitly Allowed Metrics:**

From Dashboard Metric Matrix, the following metrics are bound to ParticipationContext:

**Organization-Level Participation (Board Member):**
- Total Members
- Active Contributors
- Maintainers
- Events
- Membership Tier
- Event Attendees
- Event Speakers
- Training Enrollments
- Certified Employees

**Project-Level Participation (Maintainer):**
- Active Contributors
- Maintainers
- Contributors Mentored
- Unique Contributors Per Week

**Personal-Level Participation (Contributor):**
- Code Commits
- Pull Requests
- Issues Resolved
- Comments Added
- Active Weeks Streak
- Learning Hours

**Explicitly Forbidden Metrics:**

The following metrics MUST NOT appear in ParticipationContext sections:

- Security Status (answers health, not participation)
- PR Review & Merge Velocity (answers health, not participation)
- Open vs Closed Issues Trend (answers health, not participation)
- Health Score (answers health, not participation)
- Governance Framework (answers health, not participation)
- Total Value of Projects (answers health, not participation)
- Organization Dependency (answers health, not participation)
- Project Health Status (answers health, not participation)

**Rationale:**

ParticipationContext sections answer questions about who is involved, how engaged they are, and how community dynamics are evolving. Metrics in this role measure people, activity levels, and contributor patterns. Metrics that measure system health, code quality, or project sustainability answer different questions and belong in HealthOverview.

---

### 4.3 AttentionRequired

**Section Role Name:** AttentionRequired

**Primary Question:** "What immediate actions require my attention and decision-making?"

**Allowed Metric Classes:**

AttentionRequired sections do NOT contain metrics. This section role contains discrete actionable items, not aggregated quantitative signals.

**Explicitly Allowed Content:**

From Dashboard Metric Matrix, the following action item types are bound to AttentionRequired:

**Board Member Actions:**
- Governance Votes (summary card)
- Budget Approvals (summary card)
- Charter Reviews (summary card)
- Member Agreements (summary card)
- Policy Decisions (summary card)

**Maintainer Actions:**
- PRs Requiring Review (summary card)
- Issues Requiring Triage (summary card)
- Release Approvals (summary card)
- Security Patches (summary card)
- Contributor Onboarding (summary card)

**Contributor Actions:**
- Assigned Issues (summary card)
- Review Requests (summary card)

**Explicitly Forbidden Metrics:**

ALL aggregated quantitative metrics are forbidden in AttentionRequired sections, including but not limited to:

- Any sparkline metrics
- Any stacked bar metrics
- Any single-value health indicators
- Any trend signals
- Any status aggregates

**Rationale:**

AttentionRequired sections present discrete actionable items requiring user decision or response. These are individual entities with specific context, not aggregated signals. Placing metrics in this section conflates informational signals with action requests, violating the semantic distinction between "what is the state?" and "what must I do?"

---

### 4.4 TimeCommitments

**Section Role Name:** TimeCommitments

**Primary Question:** "What scheduled events require my participation in the near term?"

**Allowed Metric Classes:**

TimeCommitments sections do NOT contain metrics. This section role contains discrete calendar events, not aggregated quantitative signals.

**Explicitly Allowed Content:**

From Dashboard Metric Matrix, the following event types are bound to TimeCommitments:

**Board Member Events:**
- Board Meetings (summary card)
- Committee Sessions (summary card)
- Governance Calls (summary card)
- Member Briefings (summary card)

**Maintainer Events:**
- Project Syncs (summary card)
- Contributor Onboarding (summary card)
- Planning Sessions (summary card)
- Working Group Meetings (summary card)

**Contributor Events:**
- Team Standups (summary card)
- Community Calls (summary card)

**Explicitly Forbidden Metrics:**

ALL aggregated quantitative metrics are forbidden in TimeCommitments sections, including but not limited to:

- Any sparkline metrics
- Any stacked bar metrics
- Any single-value indicators
- Any trend signals
- Any status aggregates
- Any event count metrics

**Rationale:**

TimeCommitments sections present discrete scheduled events requiring temporal participation. These are calendar items with specific dates, times, and attendee expectations, not aggregated signals. Event count metrics belong in ParticipationContext when measuring participation levels, not in TimeCommitments which surfaces individual upcoming commitments.

---

### 4.5 PortfolioOverview

**Section Role Name:** PortfolioOverview

**Primary Question:** "What entities am I responsible for and what is their current state?"

**Allowed Metric Classes:**

PortfolioOverview sections contain entity-level status indicators within table rows, not standalone metrics.

**Explicitly Allowed Content:**

From Dashboard Metric Matrix, the following portfolio types are bound to PortfolioOverview:

**Maintainer Portfolios:**
- Project Portfolio (table with columns: Project Name, Affiliations, Code Activities, Non-Code Activities)
- Each row contains embedded sparklines showing trends for that specific entity
- Status indicators per entity (not aggregates)

**Executive Director Portfolios (where applicable):**
- Program Portfolio (table with program-level status)
- Initiative Portfolio (table with initiative-level metrics)

**Explicitly Allowed In-Table Metrics:**

Within PortfolioOverview tables, individual rows MAY contain:
- Entity-specific sparklines (showing trend for that entity only)
- Entity-specific status indicators (showing state for that entity only)
- Entity-specific health scores (showing score for that entity only)

**Explicitly Forbidden Metrics:**

The following MUST NOT appear in PortfolioOverview sections:

- Aggregated metrics summarizing across all entities
- Standalone sparklines not associated with specific entities
- Health overview metrics not scoped to individual entities
- Participation metrics aggregated across entities

**Explicitly Forbidden User Roles:**

The following user roles MUST NOT have PortfolioOverview sections:

- Board Member (operates at organization level, not entity portfolio level)
- Contributor (limited portfolio scope does not warrant table view)

**Rationale:**

PortfolioOverview sections present entity lists with per-entity status. Metrics within this role are entity-scoped, not aggregated. Aggregated metrics that summarize across entities belong in HealthOverview or ParticipationContext, not in portfolio tables which serve browsing and entity inspection purposes.

---

## 5. Cross-Binding Invariants

The following rules apply to all section role bindings regardless of user role or dashboard context:

**Invariant 5.1: Exclusive Binding**

A metric MUST NOT appear in a section role to which it is not bound per this contract. Metrics violating this invariant constitute binding violations.

**Invariant 5.2: Semantic Purity**

A section role MUST NOT contain metrics answering multiple primary questions. All metrics within a section MUST answer the section role's primary question.

**Invariant 5.3: Single Appearance**

A metric MUST NOT appear in multiple section roles within the same dashboard. If a metric appears in both HealthOverview and ParticipationContext sections, the implementation violates semantic coherence.

**Invariant 5.4: Binding Transitivity**

If metric M is bound to section role R, and section role R answers primary question Q, then metric M MUST answer question Q or a subordinate question within Q's domain.

**Invariant 5.5: Non-Metric Content Boundaries**

Section roles that contain non-metric content (AttentionRequired, TimeCommitments, PortfolioOverview) MUST NOT contain standalone aggregated metrics. Entity-scoped metrics within portfolio rows are permitted per section 4.5.

**Invariant 5.6: Binding Violation Authority**

A binding violation is a contract violation. Implementations containing binding violations MUST be corrected or receive explicit variance approval from the Design System Steward.

**Invariant 5.7: Question Alignment Requirement**

For every metric M in section role R, the question answered by M per the Dashboard Metric Matrix MUST semantically align with the primary question of R per the Dashboard Section Roles contract.

**Invariant 5.8: Chart Type Independence**

Bindings are independent of chart type. A metric's chart type (sparkline, stacked bar, single-value) does NOT determine binding eligibility. Semantic question alignment determines binding.

---

## 6. Relationship to Other Contracts

### 6.1 Dashboard Section Roles Contract

**Nature of Relationship:** This contract implements the section role definitions established in the Dashboard Section Roles contract (v1.0.0).

**Functional Dependency:** The Dashboard Section Roles contract defines the five section roles and their primary questions. This contract binds specific metrics to those roles based on semantic alignment between metric questions and role questions.

**Change Propagation:** Changes to section role primary questions in the Dashboard Section Roles contract MAY require rebinding metrics in this contract.

**Boundary:** The Dashboard Section Roles contract defines intent. This contract defines content eligibility within that intent.

---

### 6.2 Dashboard Metric Matrix

**Nature of Relationship:** This contract references and binds to the metrics defined in the Dashboard Metric Matrix (v1.0.0).

**Functional Dependency:** The Dashboard Metric Matrix defines the complete metric inventory with scope, chart type, and question answered. This contract determines which metrics from that inventory are permitted in which section roles.

**Change Propagation:** Addition of new metrics to the Dashboard Metric Matrix requires explicit binding decision in this contract. Metrics without binding decisions default to unbound (not permitted in any section role).

**Boundary:** The Dashboard Metric Matrix defines what metrics exist and what questions they answer. This contract defines where those metrics are permitted based on question alignment.

---

### 6.3 Dashboard Assembly Contract

**Nature of Relationship:** This contract operates independently of but compatible with the Dashboard Assembly Contract (v1.0.0).

**Functional Dependency:** The Dashboard Assembly Contract defines where sections appear and in what order. This contract defines what metrics appear inside those sections. Both contracts must be satisfied for a conforming implementation.

**Change Propagation:** Changes to section ordering or assembly rules do NOT affect metric bindings. Metric bindings are semantic, not positional.

**Boundary:** The Dashboard Assembly Contract defines structure. This contract defines content eligibility within that structure.

---

## 7. Non-Goals

This contract explicitly does NOT define:

**Visual Design:** This contract does not specify how metrics are rendered, styled, colored, or animated. Visual presentation is outside scope.

**Component APIs:** This contract does not define component props, interfaces, or implementation details. Components are implementation concerns.

**Chart Types:** This contract does not mandate sparklines, stacked bars, or other chart types. Chart type selection is a visual concern, not a semantic binding concern.

**Layout Decisions:** This contract does not specify metric positioning, spacing, or arrangement within sections. Layout is outside scope.

**Routing or Navigation:** This contract does not define how users navigate from metrics to detail views. Navigation is outside scope.

**Data Fetching:** This contract does not specify APIs, data sources, or fetching strategies. Data concerns are outside scope.

**Storybook Organization:** This contract does not define story structure, MDX documentation, or Storybook navigation. Tooling concerns are outside scope.

**User Role Definitions:** This contract does not define organizational roles or responsibilities. User roles are referenced but not defined here.

**Metric Calculations:** This contract does not define how metrics are computed or aggregated. Calculation logic is outside scope.

---

## 8. Conformance and Validation

### 8.1 Conformance Definition

An implementation conforms to this contract if and only if:

1. Every metric in every dashboard section is bound to that section's role per section 4
2. No metric appears in a section role to which it is not bound
3. All cross-binding invariants per section 5 are satisfied
4. No binding violations exist per section 2 definitions

### 8.2 Validation Inputs

Validating an implementation against this contract requires:

1. Inventory of all metrics in all dashboard sections
2. Identification of section role for each section per Dashboard Section Roles contract
3. Identification of user role for dashboard being validated
4. Dashboard Metric Matrix reference for metric definitions

### 8.3 Failure Conditions

An implementation fails conformance validation if:

**Condition F1:** A metric appears in a section whose role does not bind that metric per section 4

**Condition F2:** A metric answering question Q appears in section role R whose primary question is not Q

**Condition F3:** Aggregated metrics appear in AttentionRequired or TimeCommitments sections

**Condition F4:** Standalone aggregated metrics (not entity-scoped) appear in PortfolioOverview sections

**Condition F5:** A metric appears in multiple section roles within the same dashboard

**Condition F6:** A section contains metrics answering multiple primary questions

**Condition F7:** Any cross-binding invariant per section 5 is violated

### 8.4 Steward Authority

The Design System Steward has sole authority to:

1. Approve or reject variance requests for binding violations
2. Amend bindings through contract updates
3. Add new metrics to bindings
4. Determine semantic alignment for ambiguous cases
5. Interpret this contract in disputed implementations

Binding disputes MUST be escalated to the Design System Steward for resolution.

---

## 9. Versioning and Change Control

### 9.1 Semantic Versioning

This contract follows semantic versioning (MAJOR.MINOR.PATCH):

**MAJOR version increment** when:
- Section role definitions change (requires Dashboard Section Roles contract update)
- Binding rules fundamentally change
- Cross-binding invariants are added or modified
- Backward-incompatible changes occur

**MINOR version increment** when:
- New metrics are bound to existing section roles
- Existing bindings are clarified without semantic change
- New user roles are added with bindings
- Backward-compatible additions occur

**PATCH version increment** when:
- Typographical corrections are made
- Non-semantic clarifications are added
- Examples are updated
- Documentation improvements occur

### 9.2 Amendment Requirements

Amendments to this contract MUST:

1. Be proposed in writing with rationale
2. Include version increment per section 9.1
3. Identify all affected implementations
4. Receive Design System Steward approval
5. Include backward compatibility assessment
6. Be synchronized with Dashboard Metric Matrix updates

Amendments MUST NOT:
- Repurpose existing bindings to answer different questions
- Remove bindings without migration path
- Create binding conflicts with other contracts

### 9.3 Backward Compatibility

**MAJOR version changes** are not required to maintain backward compatibility. Implementations conforming to v1.x.x MAY NOT conform to v2.0.0.

**MINOR version changes** MUST maintain backward compatibility. Implementations conforming to v1.0.x MUST conform to v1.1.0.

**PATCH version changes** MUST maintain full compatibility. Implementations conforming to v1.0.0 MUST conform to v1.0.1.

### 9.4 Metric Addition Protocol

When adding new metrics to the Dashboard Metric Matrix:

1. Identify section role alignment based on metric's primary question
2. Verify metric does not answer multiple primary questions
3. Add metric to appropriate binding in section 4
4. Verify no cross-binding invariants are violated
5. Increment MINOR version of this contract
6. Document addition in contract change log

Metrics added to the Dashboard Metric Matrix without corresponding binding additions to this contract default to unbound and are not permitted in any section role.

---

**End of Contract**
