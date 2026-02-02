import{c as q}from"./table-pagination-D695YPKq.js";const Q={title:"1. Components / 2. Molecules / 9. TablePagination",tags:["autodocs"],render:X=>q(X),parameters:{docs:{description:{component:`
TablePagination is a Level 2 (Molecule) component that owns layout, spacing, 
and hierarchy for table pagination controls.

## Purpose

TablePagination exists to:
- Provide consistent pagination layout for table pages
- Display current page range and total items
- Render numbered page navigation with intelligent windowing
- Render Previous/Next navigation controls
- Optionally render "Results per page" selector
- Create visual subordination to table content
- Eliminate pagination layout drift across table page examples

## Architectural Role

**Level:** Level 2 — Molecule

**Owns:**
- Pagination control layout (info + optional page size + numbered pages + prev/next buttons)
- Page number display and formatting
- Page windowing with ellipsis for large datasets
- Optional "Results per page" selector
- Internal spacing and alignment
- Visual subordination to table rows
- Defensive rendering (no pagination when not needed)

**Does NOT Own:**
- Data fetching logic
- Sorting logic
- Filtering logic
- Row rendering
- Table grid layout
- Background color (inherits from Card)

## When to Use

Use TablePagination when:
- Building a table page with more items than fit on one page
- Dataset size exceeds reasonable single-page display
- User needs to navigate between pages of data

## When NOT to Use

Do NOT use TablePagination when:
- Dataset is small enough to display on one page
- Implementing infinite scroll (different pattern)
- Building a form (use form navigation)
- Creating a wizard (use wizard navigation)

## Page Size Selection (Optional)

**When to Enable:**

The "Results per page" selector is OPTIONAL and should only be enabled when:
- Users would benefit from adjusting page density
- Multiple page size options make semantic sense (e.g., 10, 20, 50)
- The dataset size varies significantly

**When NOT to Enable:**

Do NOT enable page size selection when:
- Default page size is sufficient for all use cases
- Dataset is always small
- Adding complexity without user benefit

**Visual Pattern:**

Single-row layout with page size selector on right:
\`< 1 2 3 ... 10 >   Results per page: 10 25 50 100\`

**How to Enable:**

Pass \`pageSizeOptions\` prop with array of page sizes:

\`\`\`typescript
createTablePagination({
  page: 1,
  pageSize: 10,
  totalItems: 120,
  pageSizeOptions: [10, 20, 50],
  onPageSizeChange: (newSize) => {
    // Handle page size change
  },
})
\`\`\`

**Defensive Behavior:**
- If \`pageSizeOptions\` is undefined → no selector rendered
- If \`pageSizeOptions\` has ≤1 option → no selector rendered
- No layout shift when enabled/disabled

## Defensive Behavior

**Automatic Hiding:**

If pagination is not needed (\`totalItems <= pageSize\`):
- TablePagination renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint in layout

This defensive behavior prevents phantom spacing when pagination
is conditionally unnecessary.

**Why this matters:**
- Page patterns can safely render TablePagination even when not needed
- No layout shifts when pagination becomes unnecessary
- No need for conditional rendering at pattern level

## Layout Behavior

**SINGLE-ROW LAYOUT (Production Standard)**

TablePagination renders as a **SINGLE unified horizontal row** with two visual clusters:

\`\`\`
< 1 2 3 ... 10 >                       Results per page: 10 25 50 100

Left cluster: page navigation          Right cluster: page size selector
\`\`\`

**LEFT CLUSTER: Page Navigation**
- Arrow buttons: < (Previous) and > (Next)
- Numbered page buttons: 1, 2, 3, ...
- Current page highlighted with border and background
- Ellipsis (...) for skipped pages in large datasets
- Maximum 7 visible page numbers in window
- Always shows first and last page
- Previous disabled at first page, Next disabled at last page

**RIGHT CLUSTER: Page Size Selector (optional)**
- Format: "Results per page: 10 25 50 100"
- Only rendered when \`pageSizeOptions\` prop provided with multiple options
- Active option highlighted with background
- Pinned to right edge of pagination row
- No dividers or borders between clusters

**Structural Rules:**
- ONE row, ONE baseline, calm confident spacing
- Left and right clusters are siblings (NOT nested)
- Uses \`justify-content: space-between\` to separate clusters
- \`flex-wrap: nowrap\` prevents vertical stacking
- \`white-space: nowrap\` prevents text wrapping
- Everything aligns on one baseline
- This is the ONLY layout mode (NOT a variant)
- No multi-row or stacked layouts supported

**Visual Design:**
- Minimal visual weight (subordinate to table content)
- Arrow symbols (< >) for visual economy
- Consistent 32px button heights across all controls
- Matches standard LFX One pagination pattern

**Page Windowing Examples:**
- Page 1 of 5: \`< [1] 2 3 4 5 >\`
- Page 3 of 10: \`< 1 2 [3] 4 5 ... 10 >\`
- Page 10 of 42: \`< 1 ... 8 9 [10] 11 12 ... 42 >\`
- Page 40 of 42: \`< 1 ... 38 39 [40] 41 42 >\`

**Spacing:**
- Top padding: \`spacing-16\` (extra space above to distinguish from rows)
- Bottom padding: \`spacing-4\` (minimal, keeps subordinate)
- Left/Right padding: \`spacing-16\` (aligns with table content)
- No external margins (clean placement)

## Usage in Table Page Pattern

\`\`\`typescript
// In Table Page pattern:
Card
├─ TableToolbar (search + filters)
├─ TableGrid (data grid)
└─ TablePagination (page navigation)
\`\`\`

## Component Boundaries

**TablePagination vs TableGrid:**
- TablePagination: Pagination controls
- TableGrid: Grid layout for data rows

**TablePagination vs TableToolbar:**
- TablePagination: Page navigation (bottom)
- TableToolbar: Search + filters (top)

**TablePagination vs Card:**
- TablePagination: Control layout
- Card: Surface container

**TablePagination vs Page Pattern:**
- TablePagination: HOW pagination is displayed
- Pattern: WHERE pagination is placed

## NON-GOALS (Forbidden Usage)

**TablePagination MUST NOT:**
- ❌ Render inside the TableGrid component
- ❌ Be passed to TableGrid as a prop
- ❌ Be rendered by TableGrid in any way
- ❌ Assume data fetching ownership
- ❌ Assume sorting ownership
- ❌ Assume filtering ownership
- ❌ Own page-level vertical rhythm

**Correct Placement:**
- ✅ TablePagination is ALWAYS placed by a Page Pattern (e.g. Table Page)
- ✅ TablePagination sits inside Card, below TableGrid (sibling, not child)
- ✅ TableGrid remains layout-agnostic for data rows only

**Why this boundary exists:**
- TableGrid is a pure grid layout component (Level 2)
- TablePagination is a pagination control component (Level 2)
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

**TablePagination owns (LOCKED):**
- Pagination control layout
- Page number display and formatting
- Numbered page button rendering
- Page windowing with ellipsis
- Optional page size selector rendering
- Prev/Next button rendering
- Internal spacing (padding, gap)
- Visual subordination styling
- Defensive empty state rendering

**Table Page Pattern owns (LOCKED):**
- WHERE pagination appears (inside Card, below Table)
- WHICH page number to display (current page state)
- Total items count (from data)
- Page size configuration

**Table Component owns (LOCKED):**
- Grid layout for data rows
- Row rendering
- Cell rendering
- Column semantic width behavior

**TableToolbar Component owns (LOCKED):**
- Search + filter layout (top of table)
- Does NOT own pagination

**No other component may assume these responsibilities.**

If you are modifying this component and feel it should own additional
responsibilities, you are likely introducing architectural drift.

STOP and consult the design system architecture documentation.

## Relationship to TableToolbar

TablePagination and TableToolbar are **sibling components** at the same
architectural level (Level 2 — Molecule).

**Similarities:**
- Both are Level 2 components
- Both are placed by Page Pattern (not by Table)
- Both sit inside Card as siblings to Table
- Both have defensive empty behavior
- Both have locked ownership boundaries

**Differences:**
- TableToolbar: Top of table (search + filters)
- TablePagination: Bottom of table (page navigation)

**Neither owns the other. Neither renders the other.**
        `}}},argTypes:{page:{control:"number",description:"Current page number (1-based)"},pageSize:{control:"number",description:"Number of items per page"},totalItems:{control:"number",description:"Total number of items across all pages"},pageSizeOptions:{control:"object",description:"Optional array of page size options (e.g., [10, 20, 50]). If undefined or has ≤1 option, no selector is rendered."}}},e={args:{page:2,pageSize:10,totalItems:42},parameters:{docs:{description:{story:`
**Default Pagination**

Demonstrates pagination in a typical middle page state with numbered page buttons.

- Current page: 2 (highlighted)
- Total pages: 5
- Display: \`< 1 [2] 3 4 5 >\`
- Both Previous (<) and Next (>) are enabled
        `}}}},a={args:{page:1,pageSize:10,totalItems:42},parameters:{docs:{description:{story:`
**First Page**

Demonstrates pagination at the first page with numbered navigation.

- Current page: 1 (highlighted)
- Total pages: 5
- Display: \`< [1] 2 3 4 5 >\`
- Previous button (<) is disabled
- Next button (>) is enabled
        `}}}},n={args:{page:5,pageSize:10,totalItems:42},parameters:{docs:{description:{story:`
**Last Page**

Demonstrates pagination at the last page with numbered navigation.

- Current page: 5 (highlighted)
- Total pages: 5
- Display: \`< 1 2 3 4 [5] >\`
- Previous button (<) is enabled
- Next button (>) is disabled
        `}}}},t={args:{page:1,pageSize:10,totalItems:5},parameters:{docs:{description:{story:`
**Single Page (Defensive Behavior)**

Demonstrates what happens when pagination is not needed.

**Scenario:**
- Total items: 5
- Page size: 10
- Only 1 page needed

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TablePagination even when not needed
- No phantom spacing introduced
- No layout shifts when data size changes

This is defensive behavior built into the component itself, not a story-only rule.
        `}}}},i={args:{page:1,pageSize:10,totalItems:0},parameters:{docs:{description:{story:`
**Empty Dataset (Defensive Behavior)**

Demonstrates pagination with no items.

**Behavior:**
- Renders with \`display: none\`
- NO padding applied
- NO height generated
- NO visible footprint

This prevents phantom spacing when table has no data.
        `}}}},s={args:{page:2,pageSize:10,totalItems:120,pageSizeOptions:[10,20,50]},parameters:{docs:{description:{story:`
**Page Size Selector (Optional Feature)**

Demonstrates optional "Results per page" selector on right side.

- Current page: 2 (highlighted)
- Current page size: 10 (highlighted)
- Total pages: 12
- Left side: \`< 1 [2] 3 4 ... 12 >\`
- Right side: \`Results per page: [10] 20 50\`

**How to Enable:**
- Pass \`pageSizeOptions: [10, 20, 50]\` prop
- Provide \`onPageSizeChange\` callback

**Defensive Behavior:**
- If \`pageSizeOptions\` is undefined → no selector rendered
- If only 1 option → no selector rendered (no choice)
- Existing pagination remains unchanged

**Visual Design:**
- Selector appears in right cluster (sibling to left cluster)
- Pinned to right edge via \`justify-content: space-between\`
- Active page size highlighted with background
- Visually subordinate to page navigation
- No dividers or separators between clusters
- Everything aligns on one baseline

**Structural Implementation:**
- Right cluster always uses \`.lfx-table-pagination__right\` wrapper
- Left cluster always uses \`.lfx-table-pagination__left\` wrapper
- Both are direct children of \`.lfx-table-pagination\`
- This ensures true left/right alignment without nesting
        `}}}},o={args:{page:3,pageSize:10,totalItems:120},parameters:{docs:{description:{story:`
**Medium Dataset (Ellipsis on Right)**

Demonstrates pagination windowing when near the beginning of many pages.

- Current page: 3 (highlighted)
- Total pages: 12
- Display: \`< 1 2 [3] 4 ... 12 >\`
- Both Previous (<) and Next (>) are enabled

**Windowing Strategy:**
- Show pages 1-4 (window around page 3)
- Skip pages 5-11 (ellipsis)
- Always show last page (12)
        `}}}},r={args:{page:15,pageSize:10,totalItems:342},parameters:{docs:{description:{story:`
**Large Dataset (Ellipsis on Both Sides)**

Demonstrates pagination windowing in the middle of many pages.

- Current page: 15 (highlighted)
- Total pages: 35
- Display: \`< 1 ... 14 [15] 16 ... 35 >\`
- Both Previous (<) and Next (>) are enabled

**Windowing Strategy:**
- Always show first page (1)
- Skip pages 2-13 (ellipsis)
- Show pages 14-16 (window around page 15)
- Skip pages 17-34 (ellipsis)
- Always show last page (35)

**Maximum 7 visible page numbers prevents UI clutter.**
        `}}}};var l,p,g,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageSize: 10,
    totalItems: 42
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Default Pagination**

Demonstrates pagination in a typical middle page state with numbered page buttons.

- Current page: 2 (highlighted)
- Total pages: 5
- Display: \\\`< 1 [2] 3 4 5 >\\\`
- Both Previous (<) and Next (>) are enabled
        \`
      }
    }
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"Default pagination state (middle page with numbered navigation).",...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};var h,u,m,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 42
  },
  parameters: {
    docs: {
      description: {
        story: \`
**First Page**

Demonstrates pagination at the first page with numbered navigation.

- Current page: 1 (highlighted)
- Total pages: 5
- Display: \\\`< [1] 2 3 4 5 >\\\`
- Previous button (<) is disabled
- Next button (>) is enabled
        \`
      }
    }
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"First page state with numbered navigation.",...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var w,f,v,P,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageSize: 10,
    totalItems: 42
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Last Page**

Demonstrates pagination at the last page with numbered navigation.

- Current page: 5 (highlighted)
- Total pages: 5
- Display: \\\`< 1 2 3 4 [5] >\\\`
- Previous button (<) is enabled
- Next button (>) is disabled
        \`
      }
    }
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Last page state with numbered navigation.",...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var S,O,D,N,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 5
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Single Page (Defensive Behavior)**

Demonstrates what happens when pagination is not needed.

**Scenario:**
- Total items: 5
- Page size: 10
- Only 1 page needed

**Behavior:**
- Renders with \\\`display: none\\\`
- NO padding applied
- NO height generated
- NO visible footprint

**Why this matters:**
- Page patterns can safely render TablePagination even when not needed
- No phantom spacing introduced
- No layout shifts when data size changes

This is defensive behavior built into the component itself, not a story-only rule.
        \`
      }
    }
  }
}`,...(D=(O=t.parameters)==null?void 0:O.docs)==null?void 0:D.source},description:{story:"Single page (no pagination needed).",...(z=(N=t.parameters)==null?void 0:N.docs)==null?void 0:z.description}}};var L,C,x,I,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 0
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Empty Dataset (Defensive Behavior)**

Demonstrates pagination with no items.

**Behavior:**
- Renders with \\\`display: none\\\`
- NO padding applied
- NO height generated
- NO visible footprint

This prevents phantom spacing when table has no data.
        \`
      }
    }
  }
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source},description:{story:"Empty dataset (no pagination needed).",...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var R,B,A,k,W;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageSize: 10,
    totalItems: 120,
    pageSizeOptions: [10, 20, 50]
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Page Size Selector (Optional Feature)**

Demonstrates optional "Results per page" selector on right side.

- Current page: 2 (highlighted)
- Current page size: 10 (highlighted)
- Total pages: 12
- Left side: \\\`< 1 [2] 3 4 ... 12 >\\\`
- Right side: \\\`Results per page: [10] 20 50\\\`

**How to Enable:**
- Pass \\\`pageSizeOptions: [10, 20, 50]\\\` prop
- Provide \\\`onPageSizeChange\\\` callback

**Defensive Behavior:**
- If \\\`pageSizeOptions\\\` is undefined → no selector rendered
- If only 1 option → no selector rendered (no choice)
- Existing pagination remains unchanged

**Visual Design:**
- Selector appears in right cluster (sibling to left cluster)
- Pinned to right edge via \\\`justify-content: space-between\\\`
- Active page size highlighted with background
- Visually subordinate to page navigation
- No dividers or separators between clusters
- Everything aligns on one baseline

**Structural Implementation:**
- Right cluster always uses \\\`.lfx-table-pagination__right\\\` wrapper
- Left cluster always uses \\\`.lfx-table-pagination__left\\\` wrapper
- Both are direct children of \\\`.lfx-table-pagination\\\`
- This ensures true left/right alignment without nesting
        \`
      }
    }
  }
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:"With page size selector (optional feature).",...(W=(k=s.parameters)==null?void 0:k.docs)==null?void 0:W.description}}};var G,M,U,F,H;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageSize: 10,
    totalItems: 120
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Medium Dataset (Ellipsis on Right)**

Demonstrates pagination windowing when near the beginning of many pages.

- Current page: 3 (highlighted)
- Total pages: 12
- Display: \\\`< 1 2 [3] 4 ... 12 >\\\`
- Both Previous (<) and Next (>) are enabled

**Windowing Strategy:**
- Show pages 1-4 (window around page 3)
- Skip pages 5-11 (ellipsis)
- Always show last page (12)
        \`
      }
    }
  }
}`,...(U=(M=o.parameters)==null?void 0:M.docs)==null?void 0:U.source},description:{story:"Medium dataset showing ellipsis on right side.",...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var _,V,j,K,Y;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    page: 15,
    pageSize: 10,
    totalItems: 342
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Large Dataset (Ellipsis on Both Sides)**

Demonstrates pagination windowing in the middle of many pages.

- Current page: 15 (highlighted)
- Total pages: 35
- Display: \\\`< 1 ... 14 [15] 16 ... 35 >\\\`
- Both Previous (<) and Next (>) are enabled

**Windowing Strategy:**
- Always show first page (1)
- Skip pages 2-13 (ellipsis)
- Show pages 14-16 (window around page 15)
- Skip pages 17-34 (ellipsis)
- Always show last page (35)

**Maximum 7 visible page numbers prevents UI clutter.**
        \`
      }
    }
  }
}`,...(j=(V=r.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"Large dataset with ellipsis on both sides.",...(Y=(K=r.parameters)==null?void 0:K.docs)==null?void 0:Y.description}}};const Z=["Default","FirstPage","LastPage","SinglePage","Empty","WithPageSizeSelector","MediumDataset","LargeDataset"];export{e as Default,i as Empty,a as FirstPage,r as LargeDataset,n as LastPage,o as MediumDataset,t as SinglePage,s as WithPageSizeSelector,Z as __namedExportsOrder,Q as default};
