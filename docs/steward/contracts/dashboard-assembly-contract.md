# Dashboard Assembly Contract

**Version:** 1.0  
**Status:** Canonical  
**Authority:** Design System Steward

---

## 1. Purpose

This contract defines the rules for assembling role-based dashboards from validated section factories.

Dashboards are **composed**, not designed. This contract governs assembly logic, not visual styling, data fetching, or routing.

An agent or developer following this contract MUST be able to construct a valid dashboard deterministically without ambiguity or decision-making.

---

## 2. Allowed Section Types

Dashboards MUST be assembled using only the following section factories:

1. **createMetricClusterSection** — Horizontal-scrolling metric card carousel with filters and Ask LFX Lens integration
2. **createPendingActionsSection** — Limited preview of pending actions with View All drawer
3. **createUpcomingMeetingsSection** — Limited preview of upcoming meetings with View All navigation
4. **createTablePreviewSection** — (Future) Portfolio-style table preview with row inspection

No other section types are allowed. Dashboards MUST NOT introduce ad-hoc section structures or layout containers beyond these factories.

---

## 3. Assembly Order Rules

The vertical ordering of sections within a dashboard MUST conform to the following rules:

### Rule 3.1: Metric Clusters Precede All Other Sections

All metric cluster sections MUST appear before any non-metric-cluster sections.

### Rule 3.2: Paired Section Ordering

Pending Actions and Upcoming Meetings sections MUST appear as a horizontal pair within the same parent container.

The pair MUST use a two-column grid layout with equal column widths.

Pending Actions MUST appear in the left column. Upcoming Meetings MUST appear in the right column.

### Rule 3.3: Table Previews Appear Last

If a table preview section is present, it MUST appear after all metric clusters and after the paired Actions + Meetings section.

### Rule 3.4: Non-Negotiable Sequence

The only valid vertical ordering is:

1. Zero or more metric cluster sections
2. Exactly one paired Actions + Meetings section
3. Zero or one table preview section

No other ordering is permitted.

---

## 4. Role to Section Mapping

The following table defines which sections are REQUIRED, OPTIONAL, or FORBIDDEN for each role:

| Role                | Metric Clusters       | Pending Actions | Upcoming Meetings | Table Preview |
|---------------------|-----------------------|-----------------|-------------------|---------------|
| **Board Member**    | REQUIRED (2)          | REQUIRED        | REQUIRED          | FORBIDDEN     |
| **Maintainer**      | REQUIRED (1)          | REQUIRED        | REQUIRED          | OPTIONAL (1)  |
| **Contributor**     | OPTIONAL (0-1)        | OPTIONAL        | OPTIONAL          | FORBIDDEN     |
| **Executive Director** | REQUIRED (1-2)     | REQUIRED        | REQUIRED          | OPTIONAL (1)  |

### Role-Specific Constraints

#### Board Member

- MUST include exactly two metric cluster sections
- MUST include the paired Actions + Meetings section
- MUST NOT include any table preview sections
- First metric cluster represents foundation-level health
- Second metric cluster represents organization-specific metrics

#### Maintainer

- MUST include exactly one metric cluster section
- MUST include the paired Actions + Meetings section
- MAY include one table preview section (project portfolio)
- Metric cluster represents project-level health

#### Contributor

- MAY include zero or one metric cluster section
- MAY include the paired Actions + Meetings section
- MUST NOT include any table preview sections
- If metric cluster is present, it represents personal contribution health

#### Executive Director

- MUST include one or two metric cluster sections
- MUST include the paired Actions + Meetings section
- MAY include one table preview section
- Metric clusters represent foundation-level and cross-organizational health

---

## 5. Section Count Constraints

### Maximum Occurrences Per Section Type

- **Metric Cluster Sections:** Maximum 2 per dashboard
- **Pending Actions Section:** Exactly 1 per dashboard
- **Upcoming Meetings Section:** Exactly 1 per dashboard
- **Table Preview Section:** Maximum 1 per dashboard

### Prohibitions

- Board Member dashboards MUST NOT include table previews
- Contributor dashboards MUST NOT include table previews
- All dashboards MUST include exactly one paired Actions + Meetings section

---

## 6. Assembly Invariants

The following rules MUST hold for all dashboards regardless of role:

### Invariant 6.1: Section Containment

Each section MUST be wrapped in a PageSection component with dense mode enabled.

### Invariant 6.2: Paired Section Layout

The paired Actions + Meetings section MUST use a grid container with:
- Two equal-width columns
- Gap of `var(--spacing-16)`
- Full width (`width: 100%`)

### Invariant 6.3: No Manual Header Assembly

Dashboards MUST NOT manually assemble section headers. All headers are owned by section factories.

### Invariant 6.4: No Ad-Hoc Metric Cards

Dashboards MUST NOT create metric cards outside of metric cluster sections. All metric display logic is owned by createMetricClusterSection.

### Invariant 6.5: Factory Encapsulation

Dashboards MUST pass only content to factories. Dashboards MUST NOT override layout, styling, or structural decisions made by factories.

### Invariant 6.6: AppHeader Presence

All dashboards MUST include an AppHeader component with:
- Role-specific title
- Role-specific description
- Dense mode enabled

---

## 7. Agent Assembly Algorithm

An agent assembling a dashboard MUST follow this algorithm:

```
FUNCTION assembleDashboard(role: Role) -> HTMLElement

  1. Determine section requirements from Role to Section Mapping table
  
  2. Validate that required sections can be created
     IF any required section cannot be created THEN
       HALT with error: "Cannot assemble dashboard for {role}: missing required sections"
     END IF
  
  3. Create metric cluster sections (if required/optional for role)
     FOR EACH metric cluster configuration
       metricSection = createMetricClusterSection(config)
       Wrap in PageSection with dense=true
       Add to children array
     END FOR
  
  4. Create paired Actions + Meetings section
     pairContainer = createGridContainer(columns=2, gap=16)
     actionsSection = createPendingActionsSection(actionsConfig)
     meetingsSection = createUpcomingMeetingsSection(meetingsConfig)
     Append actionsSection to pairContainer (left column)
     Append meetingsSection to pairContainer (right column)
     Wrap pairContainer in PageSection with dense=true
     Add to children array
  
  5. IF role allows table preview AND table preview is needed THEN
       tableSection = createTablePreviewSection(tableConfig)
       Wrap in PageSection with dense=true
       Add to children array
     END IF
  
  6. Create AppHeader with role-specific title and description
     Add AppHeader to beginning of children array
  
  7. Create PageLayout with dense=true and children array
  
  8. Create GlobalNav (not governed by this contract)
  
  9. Create AppShell with nav and pageLayout content
  
  10. RETURN AppShell

END FUNCTION
```

---

## 8. Explicit Non-Goals

This contract does NOT define:

- Visual styling (colors, spacing, typography)
- Data fetching or state management
- Routing or navigation behavior
- Drawer content or interaction logic
- Chart rendering or configuration
- Filter pill behavior
- Ask LFX Lens integration behavior
- Section factory internal implementation
- Component-level APIs
- Storybook organization

---

## 9. Steward Authority

### Violation Handling

Any deviation from this contract requires explicit Design System Steward approval.

Unapproved violations are considered defects and MUST be corrected.

### Contract Changes

Changes to this contract MUST be:
- Versioned
- Documented with rationale
- Approved by Design System Steward
- Validated against all existing dashboard implementations

### Backward Compatibility

Contract changes MUST NOT break existing conforming dashboards without an explicit migration plan.

---

## 10. Validation Checklist

A dashboard conforms to this contract if and only if:

- [ ] All sections are created using allowed section factories only
- [ ] Section ordering follows Rule 3.4 exactly
- [ ] Role-specific section requirements are met per Section 4
- [ ] Section count constraints per Section 5 are satisfied
- [ ] All assembly invariants per Section 6 hold
- [ ] No manual header assembly exists
- [ ] No ad-hoc layout containers exist outside factories
- [ ] AppHeader is present with role-specific content
- [ ] Paired Actions + Meetings section uses correct grid layout

---

**End of Contract**
