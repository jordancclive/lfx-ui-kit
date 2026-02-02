# Insights Escalation Contract

**Status:** Normative  
**Version:** 1.0  
**Last Updated:** 2026-02-02

---

## Purpose

LFX One and LFX Insights are intentionally separate products with distinct purposes:

- **LFX One** is a decision and action surface for governance, operations, and management workflows.
- **LFX Insights** is an analytics and exploration product for understanding contribution patterns, dependencies, and trends.

This contract explicitly defines the boundary between these products to:

1. Prevent analytics duplication inside LFX One
2. Maintain clear product boundaries
3. Prevent architectural drift and bloat
4. Make escalation rules explicit for humans and AI agents
5. Ensure each product serves its intended purpose

This contract is **binding** for all LFX One implementations.

---

## Core Principle (Normative)

**LFX One stops at signal.**

LFX One MAY display summary metrics and visualizations that indicate **status**, **risk**, or **priority**.

LFX One MUST NOT replicate the exploration, filtering, or analytical capabilities of LFX Insights.

**LFX Insights owns exploration.**

When a user needs to:
- Filter or segment data
- Compare time periods
- Drill into details
- Explore patterns or trends
- Analyze distributions or correlations

They MUST be escalated to LFX Insights.

---

## Escalation Rule (Normative)

LFX One MUST escalate to LFX Insights when ANY of the following conditions are met:

1. **User needs filtering**  
   If the user wants to narrow, segment, or compare data beyond what is shown.

2. **User needs time-based exploration**  
   If the user wants to view historical trends, compare time periods, or adjust date ranges.

3. **User needs drill-down**  
   If the user wants to explore underlying data, view detailed breakdowns, or investigate specific segments.

4. **User needs alternative visualizations**  
   If the user wants to toggle chart types, adjust axes, or change aggregation methods.

5. **User needs export or reporting**  
   If the user wants to download data, generate reports, or share analysis.

6. **User needs context outside governance workflows**  
   If the user wants to understand contribution patterns, dependency health, or project trends that are not immediately actionable within LFX One.

**If any of these conditions apply, escalate to Insights. Do not build the feature in LFX One.**

---

## Approved Escalation Surfaces

LFX One MAY escalate to LFX Insights using the following surfaces:

### 1. Link in Card or Drawer (Preferred)

A contextual link that opens LFX Insights in a new tab or window.

**Example:**
```
"View full contributor analysis in LFX Insights →"
```

**Location:** Footer of a ChartCard or Drawer.

### 2. CTA in Drawer Footer

A call-to-action button or link at the bottom of a drawer that provides additional context.

**Example:**
```
[Button: "Explore in LFX Insights"]
```

### 3. Contextual Link Only

A text link embedded in explanatory content, providing escalation without disrupting the workflow.

**Prohibited:**
- Forced navigation or redirects
- Modal overlays that require dismissal
- Inline Insights UI embedded in LFX One

---

## Prohibited Patterns (Forbidden)

The following patterns are **FORBIDDEN** in LFX One when displaying analytics or charts:

### ❌ MUST NOT: Add Filters

LFX One MUST NOT provide UI for filtering, segmenting, or narrowing analytical data.

**Forbidden:**
- Dropdown filters (date range, contributor type, etc.)
- Checkboxes or toggles for data segments
- Search or query inputs for analytics

**Reason:** Filtering belongs to Insights. If a user needs filtering, escalate.

---

### ❌ MUST NOT: Add Toggles

LFX One MUST NOT provide UI for toggling chart types, axes, or aggregation methods.

**Forbidden:**
- "View as bar chart / line chart" toggles
- "Show percentage / absolute values" switches
- "Group by X / Y / Z" options

**Reason:** Exploration belongs to Insights. If a user needs alternate views, escalate.

---

### ❌ MUST NOT: Add Tables for Exploration

LFX One MUST NOT display sortable, paginated, or filterable data tables for analytical exploration.

**Allowed:**
- Action-oriented tables (e.g., "Pending approvals", "Recent activity")

**Forbidden:**
- Analytical drill-down tables (e.g., "Top 100 contributors with sortable columns")

**Reason:** Drill-down and exploration belong to Insights.

---

### ❌ MUST NOT: Duplicate Insights UI

LFX One MUST NOT replicate navigation, filters, tabs, or layouts from LFX Insights.

**Forbidden:**
- Insights-style tabs ("Overview / Contributors / Dependencies")
- Insights-style filters or date pickers
- Insights-style detailed breakdowns

**Reason:** This creates duplication, confusion, and architectural drift.

---

## Chart-Specific Rules

### What Charts in LFX One MAY Do

LFX One charts MAY:

1. **Display summary metrics**  
   Example: "Top 12 contributors = 53% of activity"

2. **Indicate status or risk**  
   Example: A stacked bar showing concentration risk

3. **Provide minimal context**  
   Example: A short explanation: "A small group accounts for majority of activity"

4. **Show single-point or trend-only visualizations**  
   Example: A sparkline showing recent activity trends

5. **Link to Insights for deeper analysis**  
   Example: "View full analysis in LFX Insights →"

---

### What Charts in LFX One MUST NOT Do

LFX One charts MUST NOT:

1. **Provide interactive filtering**  
   No dropdowns, checkboxes, or segmentation controls

2. **Allow drill-down**  
   No clickable chart segments that reveal deeper data

3. **Enable time-range selection**  
   No date pickers or "Last 7 days / 30 days / 90 days" toggles

4. **Show detailed breakdowns**  
   No paginated lists of individual contributors, commits, or projects

5. **Replicate Insights visualizations**  
   No multi-axis charts, complex correlations, or exploratory dashboards

**If a user needs any of the above, escalate to Insights.**

---

## Concrete Example: Contributor Dependency

### ✅ What is Allowed in LFX One

**Context:** Board Dashboard → Governance Health → Drawer

**Allowed:**
1. A stacked bar chart showing: "Top 12 contributors = 53%, Remaining = 47%"
2. A short explanation: "A small group of contributors accounts for a majority of activity. This represents a governance risk."
3. A CTA: "View full contributor analysis in LFX Insights →"

**Why this is allowed:**
- It provides **signal** (concentration risk)
- It does NOT provide filtering, drill-down, or exploration
- It clearly escalates to Insights for deeper analysis

---

### ❌ What MUST Escalate to Insights

**The following are FORBIDDEN in LFX One:**

1. **A table of individual contributors with commit counts**  
   → Escalate to Insights

2. **Filters to segment by contributor type, date range, or project**  
   → Escalate to Insights

3. **Drill-down to see individual contributor profiles**  
   → Escalate to Insights

4. **Time-series chart showing contributor trends over 12 months**  
   → Escalate to Insights

5. **Comparison of contributor dependency across multiple projects**  
   → Escalate to Insights

**Reason:** These are exploration features. They belong in LFX Insights.

---

## Agent Contract (Normative)

AI agents working on LFX One MUST follow these decision rules:

### Rule 1: Identify the User's Intent

Ask: "Is the user trying to **act** or **explore**?"

- **Act:** Fix, approve, escalate, assign, configure → LFX One
- **Explore:** Understand, analyze, compare, filter, drill-down → LFX Insights

### Rule 2: Apply the Escalation Rule

If the user's request matches ANY condition in the **Escalation Rule** section, do NOT implement it in LFX One.

Instead:
1. Add a link or CTA to LFX Insights
2. Explain that the feature belongs in Insights
3. Do NOT build a lightweight version in LFX One

### Rule 3: Fallback Rule

**If you are uncertain whether a feature belongs in LFX One or Insights, escalate to Insights.**

It is better to under-provision LFX One than to duplicate Insights.

---

## Why This Matters

### Prevents Bloat

LFX One is a decision surface, not an analytics product. Adding exploration features bloats LFX One and creates maintenance burden.

### Prevents Duplication

If LFX One replicates Insights, users will encounter:
- Inconsistent data or visualizations
- Confusion about which product to use
- Duplicate effort in maintaining two analytics surfaces

### Prevents Drift

If LFX One and Insights both implement filtering, drill-down, or exploration, they will drift apart over time. This contract ensures they remain distinct and focused.

### Maintains Focus

LFX One's value is in **governance workflows and actions**, not in analytics. By escalating exploration to Insights, LFX One remains fast, focused, and purpose-built.

---

## Summary

**LFX One = Signal + Action**

- Summary metrics
- Status indicators
- Risk signals
- Actionable workflows
- Clear escalation to Insights

**LFX Insights = Explore + Analyze**

- Filtering and segmentation
- Time-series exploration
- Drill-down and breakdowns
- Detailed visualizations
- Export and reporting

---

## Binding Rule

This contract is **normative** and **binding**.

If a feature request violates this contract:
1. Reject the feature for LFX One
2. Escalate the user to LFX Insights
3. Do NOT implement a "lightweight version" in LFX One

**When in doubt, escalate to Insights.**

---

**End of Contract**
