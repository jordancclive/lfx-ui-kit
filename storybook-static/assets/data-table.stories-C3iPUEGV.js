import{c as a}from"./data-table-CzjozAYq.js";import{c as p}from"./search-input-CzMEtAKB.js";import{c as e}from"./filter-dropdown-trigger-pmZu_dAG.js";import{a as K,b as Z,c as $}from"./table-grid-CDe4dliu.js";import{c}from"./table-header-cell-DmmpqlN-.js";import{c as J}from"./table-row-DLTwFnyp.js";import{c as d}from"./table-cell-X32ALN1e.js";import{c as h}from"./tag-Di5Xs3Pg.js";import"./card-DYIIZwu_.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";const de={title:"1. Components / 3. Organisms / 3. DataTable",tags:["autodocs"],parameters:{docs:{description:{component:`
# DataTable — Canonical Single-Table Workflow Surface

DataTable is a **Level 3 (Organism)** component that represents the canonical
single-table workflow surface for LFX One.

## Purpose

DataTable bundles Card, TableToolbar, TableGrid, and TablePagination with
opinionated defaults that are VALID ONLY for single-table pages.

It exists to:
- Reduce boilerplate for common single-table pages
- Encode correct defaults by convention
- Prevent misuse through clear architectural boundaries

> **DataTable is the default table surface used by TablePage** unless explicitly disabled.
> It is not required for advanced or segmented layouts.

---

## When to Use

✅ **USE DataTable for:**
- Pages with exactly ONE dataset
- Pages with a single search + filter surface
- Pages with ONE pagination control
- Workflow-style list pages:
  - Votes
  - Surveys
  - Projects
  - Drive
  - Mailing Lists

---

## When NOT to Use

❌ **DO NOT USE DataTable for:**
- SegmentedTablePage (multiple tables)
- Pages with multiple independent tables
- Pages where filters scope only part of the data
- Comparison pages
- Dashboard pages with multiple data surfaces

> **WARNING:** Do NOT use DataTable in SegmentedTablePage or multi-table layouts.
> Use TableGrid, TableToolbar, and TablePagination directly instead.

---

## Structure (FIXED)

DataTable renders EXACTLY this structure:

\`\`\`
Card
├─ TableToolbar        (search + filters)
├─ TableGrid           (data grid only)
└─ TablePagination     (page navigation)
\`\`\`

No other structure is allowed.

⚠️ **Note:** \`Table\` is deprecated terminology.  
Use \`TableGrid\` when referring to the data grid component.  
Use \`DataTable\` when referring to the full single-table workflow.

---

## Architectural Boundaries (LOCKED)

**DataTable owns:**
- Composition ONLY
- Bundling child components into Card

**DataTable does NOT own:**
- Search + filter layout → TableToolbar
- Data grid layout → TableGrid
- Pagination controls → TablePagination
- Page placement → Page Patterns (Table Page)

**DataTable MUST NOT:**
- Style children directly
- Apply padding, margins, or flex rules
- Detect child types
- Contain conditional spacing logic

---

## Defensive Behavior

**Empty states are handled by child components:**
- If \`toolbar\` is undefined → TableToolbar renders \`display: none\`
- If \`pagination\` not needed → TablePagination renders \`display: none\`
- DataTable itself never conditionally renders children

This ensures consistent layout without phantom spacing.

---

## API

**Required:**
- \`table\` (HTMLElement) — TableGrid component

**Optional:**
- \`toolbar\` (object) — Search input and filter controls
  - \`search\` (HTMLElement) — SearchInput with variant="toolbar"
  - \`filters\` (HTMLElement[]) — FilterDropdownTrigger components
- \`pagination\` (object) — Pagination configuration
  - \`page\` (number) — Current page (1-based)
  - \`pageSize\` (number) — Items per page
  - \`totalItems\` (number) — Total items across all pages
  - \`pageSizeOptions\` (number[]) — Optional page size selector
  - \`onPageChange\` (function) — Page change callback
  - \`onPageSizeChange\` (function) — Page size change callback

---

## Composition Pattern

DataTable is a **thin composition wrapper**:
1. Creates child components (TableToolbar, TablePagination)
2. Wraps them in Card
3. Delegates ALL layout behavior to children

**Zero layout logic beyond composition.**

---

## Relationship to Page Patterns

**Table Page pattern decides:**
- WHERE DataTable is placed
- AppHeader configuration
- PageSection density
- Vertical rhythm with header

**DataTable decides:**
- Card composition
- Child component ordering

---

## Choosing Between TablePage and DataTable

Both **TablePage** and **DataTable** exist intentionally.  
They solve different problems.

### Use DataTable (Level 3) when:

- Exactly ONE dataset
- Exactly ONE search + filter surface
- Exactly ONE pagination surface
- Workflow-style list page
- Convention over configuration is desired

Typical examples:
- Votes
- Surveys
- Projects
- Drive
- Mailing Lists

**Mental model:**  
"I just want the standard LFX One table workflow."

### Use TablePage (Pattern) when:

- You need page-level control
- The table is only part of the page
- You are composing custom structures
- You expect future divergence

**Mental model:**  
"I want to assemble the page myself, but correctly."

### Do NOT use DataTable when:

- Multiple tables exist on the page
- SegmentedTablePage is used
- Filters scope only part of the data
- The page is comparative or analytical
- Layout overrides are required

In these cases, compose:
- TableGrid
- TableToolbar
- TablePagination
directly under the appropriate Page Pattern.

### Decision Shortcut

If all are true:
- One dataset
- One toolbar
- One pagination row
- Standard list workflow

→ Use **DataTable**

Otherwise:
→ Use **TablePage**

### Final Rule

> Page Examples MUST NOT invent layout.  
They either configure DataTable or configure TablePage.

Anything else is a bug.

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

## Level 3 Philosophy

DataTable is opinionated by design:
- Single-table only
- Workflow-oriented
- Convention over configuration
- No layout flags or overrides
`}}}};function t(q=5){const X=[{key:"name",semanticType:"primary"},{key:"type",semanticType:"categorical"},{key:"status",semanticType:"categorical"},{key:"count",semanticType:"numeric"}],V=K([c({children:"Name"}),c({children:"Type"}),c({children:"Status"}),c({children:"Count",align:"right"})]),b=[];for(let g=0;g<q;g++)b.push(J({clickable:!0,children:[d({children:`Item ${g+1}`,contentType:"primary"}),d({children:h({children:"Type A",variant:"info"})}),d({children:h({children:"Active",variant:"success"})}),d({children:String(Math.floor(Math.random()*100)),align:"right"})]}));const _=Z(b);return $({columns:X,children:[V,_]})}const n={render:()=>a({toolbar:{search:p({placeholder:"Search items…",variant:"toolbar"}),filters:[e({label:"All Types"}),e({label:"All Statuses"})]},table:t(10),pagination:{page:2,pageSize:10,totalItems:42,pageSizeOptions:[10,20,50]}})},r={render:()=>a({table:t(10),pagination:{page:1,pageSize:10,totalItems:42}})},o={render:()=>a({toolbar:{search:p({placeholder:"Search items…",variant:"toolbar"})},table:t(5)})},i={render:()=>a({table:t(5)})},l={render:()=>a({toolbar:{search:p({placeholder:"Search items…",variant:"toolbar"}),filters:[e({label:"All Types"})]},table:t(10),pagination:{page:1,pageSize:10,totalItems:120,pageSizeOptions:[10,25,50,100]}})},s={render:()=>a({toolbar:{search:p({placeholder:"Search items…",variant:"toolbar"}),filters:[e({label:"All Types"}),e({label:"All Statuses"}),e({label:"All Groups"})]},table:t(20),pagination:{page:15,pageSize:20,totalItems:680,pageSizeOptions:[10,20,50,100]}})};var u,m,T,f,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar'
        }),
        filters: [createFilterDropdownTrigger({
          label: 'All Types'
        }), createFilterDropdownTrigger({
          label: 'All Statuses'
        })]
      },
      table: createPlaceholderTable(10),
      pagination: {
        page: 2,
        pageSize: 10,
        totalItems: 42,
        pageSizeOptions: [10, 20, 50]
      }
    });
  }
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source},description:{story:`Default

Canonical DataTable with all features enabled:
- Toolbar (search + filters)
- TableGrid (data)
- Pagination (page navigation)

This is the most common configuration for single-table pages.`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var w,P,D,S,v;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      table: createPlaceholderTable(10),
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 42
      }
    });
  }
}`,...(D=(P=r.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:`No Toolbar

DataTable without search or filters.

Use when:
- Dataset is small and does not require filtering
- Search and filters are handled externally
- Minimal workflow pages

TableToolbar will render with display: none (no phantom spacing).`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var O,I,N,L,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar'
        })
      },
      table: createPlaceholderTable(5)
    });
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`No Pagination

DataTable without pagination controls.

Use when:
- Dataset is small (fits on one page)
- Pagination is handled externally
- Infinite scroll is used instead

TablePagination will render with display: none (no phantom spacing).`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var A,z,E,x,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      table: createPlaceholderTable(5)
    });
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source},description:{story:`Minimal

DataTable with ONLY the table (no toolbar, no pagination).

Use when:
- Dataset is simple and self-contained
- No search, filter, or pagination required
- Read-only data display

Both TableToolbar and TablePagination will render with display: none.

**Note:** This is the absolute minimum configuration.
If you need more control over layout, consider using TableGrid directly.`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var U,M,G,F,W;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar'
        }),
        filters: [createFilterDropdownTrigger({
          label: 'All Types'
        })]
      },
      table: createPlaceholderTable(10),
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 120,
        pageSizeOptions: [10, 25, 50, 100]
      }
    });
  }
}`,...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source},description:{story:`With Page Size Selector

DataTable with page size options enabled.

Use when:
- Users need to control results per page
- Dataset size varies significantly
- Power users benefit from density control

Page size selector appears on right side of pagination row.`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var R,B,Y,H,j;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return createDataTable({
      toolbar: {
        search: createSearchInput({
          placeholder: 'Search items…',
          variant: 'toolbar'
        }),
        filters: [createFilterDropdownTrigger({
          label: 'All Types'
        }), createFilterDropdownTrigger({
          label: 'All Statuses'
        }), createFilterDropdownTrigger({
          label: 'All Groups'
        })]
      },
      table: createPlaceholderTable(20),
      pagination: {
        page: 15,
        pageSize: 20,
        totalItems: 680,
        pageSizeOptions: [10, 20, 50, 100]
      }
    });
  }
}`,...(Y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:Y.source},description:{story:`Large Dataset

DataTable with a large dataset requiring pagination windowing.

Demonstrates:
- Ellipsis in page navigation
- Page windowing (max 7 visible pages)
- Page size selector with multiple options

This configuration is common for high-volume data pages.`,...(j=(H=s.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};const pe=["Default","NoToolbar","NoPagination","Minimal","WithPageSizeSelector","LargeDataset"];export{n as Default,s as LargeDataset,i as Minimal,o as NoPagination,r as NoToolbar,l as WithPageSizeSelector,pe as __namedExportsOrder,de as default};
