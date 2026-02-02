import{c as x}from"./table-toolbar-DcOdLZIw.js";import{c as i}from"./search-input-CzMEtAKB.js";import{c as e}from"./filter-dropdown-trigger-pmZu_dAG.js";const R={title:"1. Components / 2. Molecules / 11. TableToolbar",tags:["autodocs"],render:L=>x(L),parameters:{docs:{description:{component:`
TableToolbar is a Level 2 (Molecule) component that owns layout, spacing, 
and visual hierarchy for table search + filter controls.

## Purpose

TableToolbar exists to:
- Provide consistent, production-ready layout for search and filter controls
- Enforce search input dominance through full-width behavior and generous spacing
- Create clear visual hierarchy between primary (search) and secondary (filters) controls
- Create visual docking between controls and table header
- Remove layout responsibility from TableGrid component
- Eliminate layout drift across table page examples

## Visual Quality

TableToolbar is designed to feel **production-ready** and aligned with **LFX One design language**:
- Search clearly dominates the toolbar visually
- Filters feel secondary and naturally grouped
- Generous spacing (spacing-16) creates calm, confident horizontal rhythm
- All controls align on a single baseline
- No cramped or awkward spacing

## Architectural Role

**Level:** Level 2 — Molecule

**Owns:**
- Horizontal flex layout for controls
- Internal padding and spacing
- Search input flex: 1 behavior
- Filter intrinsic width behavior

**Does NOT Own:**
- TableGrid component rendering or logic
- Filter semantics or data logic
- Filter ordering (determined by caller)
- Pagination (separate concern)
- Background color (inherits from Card)

## When to Use

Use TableToolbar when:
- Building a table page with search and/or filters
- Implementing a filter bar above a table
- You need consistent search + filter layout

## When NOT to Use

Do NOT use TableToolbar when:
- Building a form (use form layout components)
- Creating a global search (use AppHeader)
- Implementing standalone filters (use filter components directly)
- Building a toolbar unrelated to tables

## Layout Behavior

**Search Input:**
- If provided, receives \`flex: 1\` automatically
- Spans available width
- Dominates the toolbar visually

**Filters:**
- Render at intrinsic width
- Appear after search
- Order determined by caller

**Spacing:**
- Gap between controls: \`spacing-16\` (confident, calm horizontal rhythm)
- Internal padding: \`spacing-12\` vertical, \`spacing-16\` horizontal
- No external margins (clean docking)

**Visual Hierarchy:**
- Search dominates via \`flex: 1\` + generous spacing
- Filters grouped via visual similarity + right alignment
- Spacing creates intentional separation without feeling cramped

## Usage in Table Page Pattern

\`\`\`typescript
// In Table Page pattern:
Card
├─ TableToolbar
│  ├─ SearchInput (flex: 1)
│  └─ FilterDropdownTriggers (intrinsic)
└─ Table
\`\`\`

## Component Boundaries

**TableToolbar vs TableGrid:**
- TableToolbar: Search + filter layout
- TableGrid: Grid layout for data rows

**TableToolbar vs Card:**
- TableToolbar: Control layout
- Card: Surface container

**TableToolbar vs Page Pattern:**
- TableToolbar: HOW controls are laid out
- Pattern: WHERE toolbar is placed

## Defensive Behavior

**Empty State:**

If no controls are provided (\`search\` is undefined AND \`filters\` is empty):
- TableToolbar renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint in layout

This defensive behavior prevents phantom spacing and layout drift when
toolbars are conditionally empty.

**Why this matters:**
- Page patterns can safely render TableToolbar even when filters are disabled
- No layout shifts when controls are removed
- No need for conditional rendering at pattern level

## NON-GOALS (Forbidden Usage)

**TableToolbar MUST NOT:**
- ❌ Render inside the TableGrid component
- ❌ Be passed to TableGrid as a prop
- ❌ Be rendered by TableGrid in any way
- ❌ Assume pagination ownership
- ❌ Assume page-level vertical rhythm
- ❌ Own filter data logic or semantics

**Correct Placement:**
- ✅ TableToolbar is ALWAYS placed by a Page Pattern (e.g. Table Page)
- ✅ TableToolbar sits inside Card, above TableGrid (sibling, not child)
- ✅ TableGrid remains layout-agnostic for data rows only

**Why this boundary exists:**
- TableGrid is a pure grid layout component (Level 2)
- TableToolbar is a search + filter layout component (Level 2)
- They are siblings at the same architectural level
- Neither should own or render the other

---

## Architectural Guardrails

This component is part of the **LFX One table system**.

The table system is intentionally layered to prevent layout drift and ownership confusion.

### Core Principle

> **Each layer owns exactly one responsibility.  
No component may "help" another by re-implementing layout or behavior.**

If something feels missing, it belongs in a **different layer**, not as an override.

### DO

- Use this component only for its documented responsibility
- Assume sibling components exist and will handle adjacent concerns
- Rely on defensive behavior instead of conditional rendering
- Let Page Patterns decide *where* things appear
- Let Molecules decide *how* things are laid out

### DO NOT

- Re-implement spacing, flex, or padding outside this component
- Add layout flags or overrides
- Move responsibilities up or down the stack
- Render sibling components inside this one
- Special-case page examples

### Ownership Boundaries (Locked)

| Layer | Owns |
|------|------|
| **TableGrid (Level 2)** | Grid layout for rows & cells only |
| **TableToolbar (Level 2)** | Search + filter layout only |
| **TablePagination (Level 2)** | Pagination controls only |
| **DataTable (Level 3)** | Bundling the three above into a single workflow surface |
| **Table Page (Pattern)** | Page placement, header, vertical rhythm |
| **Page Examples** | Configuration only (labels, data, callbacks) |

> **No other ownership model is valid.**

If you find yourself wanting to violate this table, stop and redesign the layer instead of patching around it.

### Agent & Contributor Warning

If you feel tempted to:
- add flex logic to a page example
- add spacing to a pattern that belongs in a component
- move toolbar or pagination into TableGrid

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.

---

## Ownership Lock

**This section defines permanent architectural boundaries.**

**TableToolbar owns (LOCKED):**
- Search + filter horizontal layout
- Internal spacing (padding, gap)
- SearchInput \`flex: 1\` behavior
- Filter intrinsic width behavior
- Empty state defensive rendering

**Table Page Pattern owns (LOCKED):**
- WHERE toolbar appears (inside Card, above Table)
- WHICH controls to render (search, filters)
- Filter ORDER (matches column semantics)
- Vertical rhythm between header, toolbar, and table

**TableGrid Component owns (LOCKED):**
- Grid layout for data rows
- Row rendering
- Cell rendering
- Column semantic width behavior

**No other component may assume these responsibilities.**

If you are modifying this component and feel it should own additional
responsibilities, you are likely introducing architectural drift.

STOP and consult the design system architecture documentation.
        `}}}},a={args:{search:i({placeholder:"Search...",variant:"toolbar",showIcon:!0})},parameters:{docs:{description:{story:`
**Search Only**

Minimal toolbar with only a search input.

The search input automatically receives \`flex: 1\` and spans the full width,
creating a clean, dominant search experience.
        `}}}},r={args:{search:i({placeholder:"Search...",variant:"toolbar",showIcon:!0}),filters:[e({label:"All Types"})]},parameters:{docs:{description:{story:`
**Search + Single Filter**

Common pattern for table pages with one categorical filter.

Visual hierarchy is clear: search dominates the left side, filter sits
comfortably to the right at intrinsic width. Generous spacing creates
intentional separation without feeling cramped.
        `}}}},t={args:{search:i({placeholder:"Search votes...",variant:"toolbar",showIcon:!0}),filters:[e({label:"All Statuses"}),e({label:"All Groups"}),e({label:"All Types"})]},parameters:{docs:{description:{story:`
**Search + Multiple Filters**

Pattern used by Votes, Surveys, and other data-heavy pages.

Search clearly dominates the left side. Filters group naturally on the right
through visual similarity and consistent spacing. The generous horizontal
rhythm (spacing-16) creates a calm, confident layout that feels production-ready.

Filter order is determined by caller (usually matching column order).
        `}}}},n={args:{filters:[e({label:"All Statuses"}),e({label:"All Types"})]},parameters:{docs:{description:{story:`
**Filters Only**

Less common pattern where search is not needed.

Filters render at intrinsic width with consistent, generous spacing (spacing-16)
that creates a calm, balanced rhythm across the toolbar.
        `}}}},o={args:{},parameters:{docs:{description:{story:`
**Empty Toolbar (Defensive Behavior)**

Demonstrates what happens when no controls are provided.

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TableToolbar even when filters are disabled
- No phantom spacing introduced
- No layout shifts when controls are conditionally removed

This is defensive behavior built into the component itself, not a story-only rule.
        `}}}};var s,l,c,d,h;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    search: createSearchInput({
      placeholder: 'Search...',
      variant: 'toolbar',
      showIcon: true
    })
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Search Only**

Minimal toolbar with only a search input.

The search input automatically receives \\\`flex: 1\\\` and spans the full width,
creating a clean, dominant search experience.
        \`
      }
    }
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"Default TableToolbar with search only.",...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.description}}};var p,u,m,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    search: createSearchInput({
      placeholder: 'Search...',
      variant: 'toolbar',
      showIcon: true
    }),
    filters: [createFilterDropdownTrigger({
      label: 'All Types'
    })]
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Search + Single Filter**

Common pattern for table pages with one categorical filter.

Visual hierarchy is clear: search dominates the left side, filter sits
comfortably to the right at intrinsic width. Generous spacing creates
intentional separation without feeling cramped.
        \`
      }
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"TableToolbar with search and single filter.",...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var y,f,T,v,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    search: createSearchInput({
      placeholder: 'Search votes...',
      variant: 'toolbar',
      showIcon: true
    }),
    filters: [createFilterDropdownTrigger({
      label: 'All Statuses'
    }), createFilterDropdownTrigger({
      label: 'All Groups'
    }), createFilterDropdownTrigger({
      label: 'All Types'
    })]
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Search + Multiple Filters**

Pattern used by Votes, Surveys, and other data-heavy pages.

Search clearly dominates the left side. Filters group naturally on the right
through visual similarity and consistent spacing. The generous horizontal
rhythm (spacing-16) creates a calm, confident layout that feels production-ready.

Filter order is determined by caller (usually matching column order).
        \`
      }
    }
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source},description:{story:"TableToolbar with search and multiple filters.",...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var S,O,F,P,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    filters: [createFilterDropdownTrigger({
      label: 'All Statuses'
    }), createFilterDropdownTrigger({
      label: 'All Types'
    })]
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Filters Only**

Less common pattern where search is not needed.

Filters render at intrinsic width with consistent, generous spacing (spacing-16)
that creates a calm, balanced rhythm across the toolbar.
        \`
      }
    }
  }
}`,...(F=(O=n.parameters)==null?void 0:O.docs)==null?void 0:F.source},description:{story:"TableToolbar with filters only (no search).",...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};var D,A,C,I,G;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
**Empty Toolbar (Defensive Behavior)**

Demonstrates what happens when no controls are provided.

**Behavior:**
- Renders with \\\`display: none\\\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TableToolbar even when filters are disabled
- No phantom spacing introduced
- No layout shifts when controls are conditionally removed

This is defensive behavior built into the component itself, not a story-only rule.
        \`
      }
    }
  }
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"Empty toolbar — demonstrates defensive behavior.",...(G=(I=o.parameters)==null?void 0:I.docs)==null?void 0:G.description}}};const M=["Default","WithSingleFilter","WithMultipleFilters","FiltersOnly","Empty"];export{a as Default,o as Empty,n as FiltersOnly,t as WithMultipleFilters,r as WithSingleFilter,M as __namedExportsOrder,R as default};
