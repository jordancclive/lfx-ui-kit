# Dashboard Visual Observations

**Date:** 2026-02-03  
**Dashboards Compared:** Board Member Dashboard, Maintainer Dashboard  
**Purpose:** Visual normalization prep — observation only, no recommendations

---

## 1. Section Headers

### Where Section Headers Appear

- Board Member Dashboard: Section headers appear above Pending Actions, Upcoming Meetings, and Recent Activity sections
- Maintainer Dashboard: Section headers appear above Pending Actions, Upcoming Meetings, and Recent Activity sections

### Where Section Headers Do Not Appear

- Board Member Dashboard: No section header above Governance Health (MetricCluster)
- Maintainer Dashboard: No section header above Project Health (MetricCluster)

### Section Header Structure

- Both dashboards use identical header construction pattern
- Header structure: flexbox container with title on left, action button on right
- Header appears as first child inside Card wrapper
- Header uses inline styles for layout (display: flex, justifyContent: space-between)
- Title styling: `--ui-text-section-title-font-size`, `--ui-text-section-title-font-weight`, `--text-primary`
- Padding: `var(--spacing-12) var(--spacing-12) 0`
- Margin bottom: `var(--spacing-12)`

### Action Button Variations

- Pending Actions sections: "View All" button (secondary, small) in both dashboards
- Meeting Summary section in Board Member: "View All" button (secondary, small)
- Meeting Summary section in Maintainer: "Schedule Meeting" button (secondary, small)
- Recent Activity sections: "View All" button (secondary, small) in both dashboards

### Cross-Dashboard Consistency

- Section header construction pattern duplicated exactly between dashboards
- Each dashboard contains 3 instances of this pattern
- No structural differences observed between Board Member and Maintainer implementations

---

## 2. Card Dimensions & Density

### ChartCard Dimensions

- Board Member: 2 ChartCards in MetricsRow
- Maintainer: 4 ChartCards in MetricsRow
- Chart height for summary views: 80px in both dashboards
- Chart height for drawer detail views: 120-150px in both dashboards

### SummaryCard Usage

- Both dashboards use SummaryCard for action items and meeting items
- SummaryCard receives title, body, meta, and onClick props
- No explicit height constraints observed on SummaryCard instances
- Cards appear to size based on content

### Action Card Structure

- Board Member: 3 action cards displayed
- Maintainer: 3 action cards displayed
- Meta row uses flexbox with gap: `var(--spacing-8)`
- Meta row contains text span + priority Tag component

### Meeting Card Structure

- Board Member: 3 meeting cards displayed
- Maintainer: 2 meeting cards displayed
- Meta content: date/time text with margin bottom, attendee count below

### Dense Mode Application

- Both dashboards apply `dense: true` to PageLayout
- Both dashboards apply `dense: true` to AppHeader
- Both dashboards apply `dense: true` to all PageSection instances
- No differences in dense mode application observed

---

## 3. Metric Cluster Visual Consistency

### Card Count Difference

- Board Member dashboard: 2 ChartCards in MetricsRow
- Maintainer dashboard: 4 ChartCards in MetricsRow

### Chart Configuration

- Both use createChart with createSparklineOption or createStackedBarOption
- Chart heights consistent at 80px for summary cards
- Both include onClick handlers that open drawers

### Value Element Construction

- Board Member: Manual HTMLElement creation for value and meta elements
- Maintainer: Manual HTMLElement creation for value and meta elements
- Both use inline styles for fontSize, fontWeight, color
- Both reference token variables: `--ui-text-metric-value-font-size`, `--ui-text-metric-value-font-weight`

### MetricsRow Wrapping

- Both dashboards wrap ChartCards in MetricsRow component
- No additional container observed besides MetricsRow
- No section header above MetricsRow in either dashboard

### Title and Spacing

- No visible title or header above metric sections in either dashboard
- Metrics section directly follows AppHeader in both page structures

---

## 4. Table Preview Presentation

### Row Count

- Board Member dashboard: 5 rows of activity data
- Maintainer dashboard: 5 rows of activity data

### Table Structure

- Both use createTableGrid with columns array, createTableHeader, and createTableBody
- Board Member: 4 columns (Action, Group, Date, Status)
- Maintainer: 5 columns (Type, Title, Project, Date, Status)

### Header Presence

- Both dashboards include TableHeader with createTableHeaderCell instances
- Headers appear directly above table rows in both cases

### CTA Placement

- Both dashboards place "View All" button in section header above table
- Section header follows same construction pattern as action/meeting sections
- "View All" button positioned on right side of header in both dashboards

### Card Wrapping

- Both tables wrapped in Card component
- Section header appears as first child inside Card
- Table appears as second child inside Card

### Row Interaction

- Both dashboards set `clickable: true` on table rows
- Board Member: Row click logs route navigation
- Maintainer: Row click opens drawer with inspection details

---

## 5. Cross-Role Consistency

### Identical Structural Patterns

- Page structure: AppShell → PageLayout → AppHeader → 4 PageSections
- Section ordering: MetricCluster → Actions → Meetings → Table Preview
- Dense mode application: Consistent across all PageLayout, AppHeader, PageSection
- Drawer integration: ChartCard onClick and SummaryCard onClick both open drawers
- Drawer footer: Both use createButton with "primary" variant for CTA

### Section Header Duplication

- Section header construction pattern appears 3 times in Board Member dashboard
- Section header construction pattern appears 3 times in Maintainer dashboard
- Patterns are character-for-character identical except for content (title text, button label)

### ChartCard Value Element Construction

- Both dashboards create HTMLElement manually for value display
- Both use document.createElement with inline style assignments
- Both reference same token variables
- Pattern appears verbose but consistent across roles

### SummaryCard Meta Construction

- Action cards: Both use flexbox container with context/date + priority Tag
- Meeting cards: Both use stacked date/time + attendee count
- Meta structure differs by card type, but consistent within type across roles

### Component Reuse

- No new components introduced in Maintainer dashboard
- All primitives match Board Member dashboard: ChartCard, SummaryCard, Drawer, MetricsRow, TableGrid, Card, Button, Tag
- Content differs (governance vs project metrics), structure identical

### Visual Differences Without Structural Reason

- MetricCluster card count: 2 in Board Member, 4 in Maintainer (content-driven, not structural)
- Meeting card count: 3 in Board Member, 2 in Maintainer (content-driven, not structural)
- Button labels: "View All" vs "Schedule Meeting" in meeting sections (content-driven, not structural)

---

## Summary

Both dashboards demonstrate structural consistency with content-level variations. Section header construction pattern appears duplicated. ChartCard value element construction appears verbose but consistent. No structural inconsistencies observed that would prevent visual normalization.
