import{c as ue}from"./app-shell-B-fH2tfM.js";import{c as ge}from"./page-layout-DDkSngPm.js";import{c as me}from"./app-header-BUQjadsZ.js";import{c as C}from"./page-section-CrtrbsFd.js";import{c as he}from"./card-DYIIZwu_.js";import{c as Me,a as Oe,b as Fe}from"./table-grid-CDe4dliu.js";import{c as g}from"./table-header-cell-DmmpqlN-.js";import{c as xe}from"./table-row-DLTwFnyp.js";import{c as m}from"./table-cell-X32ALN1e.js";import{c as A}from"./search-input-CzMEtAKB.js";import{c as P}from"./filter-dropdown-trigger-pmZu_dAG.js";import{c as be}from"./table-toolbar-DcOdLZIw.js";import{c as fe}from"./table-pagination-D695YPKq.js";import{c as Ne}from"./data-table-CzjozAYq.js";import{b as ke,c as je,a as o}from"./global-nav-l0iysLZC.js";import{c as L}from"./tag-Di5Xs3Pg.js";import{c as Le}from"./button-CXimPVvh.js";const c=[{name:"Cloud Native Platform",status:"Active",category:"Infrastructure",maintainers:12,lastActivity:"Today"},{name:"Security Toolkit",status:"Active",category:"Security",maintainers:8,lastActivity:"Yesterday"},{name:"Developer Portal",status:"Active",category:"Documentation",maintainers:5,lastActivity:"Jan 24, 2026"},{name:"API Gateway",status:"Incubating",category:"Infrastructure",maintainers:15,lastActivity:"Jan 23, 2026"},{name:"Data Pipeline",status:"Active",category:"Data",maintainers:10,lastActivity:"Jan 22, 2026"},{name:"Monitoring Dashboard",status:"Active",category:"Operations",maintainers:6,lastActivity:"Jan 21, 2026"},{name:"Authentication Service",status:"Archived",category:"Security",maintainers:3,lastActivity:"Jan 15, 2026"},{name:"Message Queue",status:"Active",category:"Infrastructure",maintainers:9,lastActivity:"Jan 20, 2026"}],Ue=[c[0],c[1],c[2]];function s(e){const a=document.createElement("span");return a.textContent=e,a}function Ee(){const e=A({placeholder:"Search projects…",variant:"toolbar"}),a=[P({label:"All Categories"}),P({label:"All Statuses"})];return be({search:e,filters:a})}function Ge(e){return fe({page:1,pageSize:10,totalItems:e})}function I(e,a=!1){const d=[{key:"name",semanticType:"primary"},{key:"status",semanticType:"categorical"},{key:"category",semanticType:"categorical"},{key:"maintainers",semanticType:"numeric"},{key:"lastActivity",semanticType:"meta"}],r=[g({children:"Name"}),g({children:"Status"}),g({children:"Category"}),g({children:"Maintainers",align:"right"}),g({children:"Last Activity"})],i=e.map(t=>{const n=[m({children:t.name,contentType:"primary"}),m({children:L({children:t.status}),contentType:"secondary"}),m({children:L({children:t.category}),contentType:"secondary"}),m({children:String(t.maintainers),contentType:"numeric",align:"right"}),m({children:t.lastActivity,contentType:"muted"})];return xe({children:n,clickable:!0})});return Me({columns:d,dense:a,children:[Oe(r),Fe(i)]})}function Te(e){return ke({activeItemId:e,children:[je([o({id:"dashboard",children:s("Dashboard")}),o({id:"mailing-lists",children:s("Mailing Lists")}),o({id:"votes",children:s("Votes")}),o({id:"surveys",children:s("Surveys")}),o({id:"drive",children:s("Drive")}),o({id:"groups",children:s("Groups")}),o({id:"projects",children:s("Projects")}),o({id:"settings",children:s("Settings")})])]})}function ye(e){const a=document.createElement("div");return a.style.maxWidth="1280px",a.style.margin="0 auto",a.appendChild(e),a}function ve(e){const{title:a,description:d,primaryAction:r,searchPlaceholder:i,filters:t=[],table:n,page:p=1,pageSize:w=10,totalItems:u=0,pageSizeOptions:M,onPageChange:O,onPageSizeChange:F,dense:we=!1,showFilters:x=!1,showPagination:N=!1,useDataTable:Pe=!0,navKey:De}=e;let k;r&&(k=Le({label:r.label,variant:"primary",onClick:r.onClick}));const D=[me({title:a,description:d,actions:k,dense:!0})];if(Pe){const l=Ne({toolbar:x&&i?{search:A({placeholder:i,variant:"toolbar"}),filters:t.map(S=>P({label:S.label}))}:void 0,table:n,pagination:N?{page:p,pageSize:w,totalItems:u,pageSizeOptions:M,onPageChange:O,onPageSizeChange:F}:void 0});D.push(C({dense:!0,children:[l]}))}else{const l=[];if(x&&i){const S=A({placeholder:i,variant:"toolbar"}),Ae=t.map(Ie=>P({label:Ie.label}));l.push(be({search:S,filters:Ae}))}l.push(n),N&&u>0&&l.push(fe({page:p,pageSize:w,totalItems:u,pageSizeOptions:M,onPageChange:O,onPageSizeChange:F})),D.push(C({dense:!0,children:[he({dense:we,children:l})]}))}const j=ge({dense:!0,children:D});j.style.gap="var(--spacing-8)";const Se=Te(De),Ce=ue({nav:Se,content:j});return ye(Ce)}function Re(e={}){const{dense:a=!1,showFilters:d=!1,showPagination:r=!1,projectsData:i=c}=e,t=[me({title:"Projects",description:"Active projects and initiatives across the organization.",dense:!0})],n=[];d&&n.push(Ee()),n.push(I(i,a)),r&&n.push(Ge(42)),t.push(C({dense:!0,children:[he({dense:a,children:n})]}));const p=ge({dense:!0,children:t});p.style.gap="var(--spacing-8)";const w=Te("projects"),u=ue({nav:w,content:p});return ye(u)}const na={title:"2. Page Patterns / 3. Table Page",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Table Page Composition

**This is the canonical table-driven page pattern for LFX One.**

### Pattern Characteristics

- **Single table per page**
- **Page title == Table title** (no section titles)
- **Optional search + filters** inside the Card, above the table
- **Semantic column widths** (flexible vs intrinsic)
- **Clean vertical rhythm**
- **Compact, scan-friendly density**

⚠️ **Note:** \`Table\` is deprecated terminology.  
Use \`TableGrid\` when referring to the data grid component.  
Use \`DataTable\` when referring to the full single-table workflow.

### Used By

This pattern is used for:
- Votes
- Surveys
- Projects
- Drive
- Mailing Lists

### NOT Used By

- **Groups** (Groups uses a segmented variant with multiple tables and section titles)

### Composition Structure

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   │  ├─ title: "Projects" (page title == table title)
   │  └─ description: "Active projects..."
   └─ PageSection (dense: true)
      └─ Card
         ├─ Search + Filter row (optional)
         └─ TableGrid (semantic columns)
\`\`\`

### Toolbar Placement Pattern

When filters are present:
- Use **TableToolbar** component (Level 2) to contain search + filters
- TableToolbar sits inside the Card, directly above the table
- TableToolbar owns layout, spacing, and flex behavior
- SearchInput automatically receives \`flex: 1\` (full-width)
- Pattern defines WHICH controls and their ORDER
- No section titles or intermediate wrappers

### Column Semantics

Tables use semantic column definitions:
- **Primary text columns** (Name): Flexible width, expand to fill space
- **Categorical columns** (Status, Category): Intrinsic width, use Tags
- **Numeric columns** (Maintainers): Intrinsic width, right-aligned
- **Meta columns** (Last Activity): Intrinsic width, dates/times

### Key Differences from Groups

| Aspect | Table Page (Canonical) | Groups (Segmented) |
|--------|------------------------|-------------------|
| Tables per page | One | Multiple |
| Section titles | None | Yes (My Groups, Other Groups) |
| Page title | == Table title | != Section titles |
| Pattern usage | Most pages | Groups only |

### Architecture Notes

This composition is considered **stable and normative**.

If something feels off visually:
1. Identify which component owns the issue
2. Fix in component contracts or tokens
3. Do NOT patch in this composition

### Validation Points

✓ Page reads as a single, focused workflow  
✓ Table feels dense but readable  
✓ Column widths match semantic intent  
✓ Filters feel attached, not floating  
✓ No section titles clutter the page  
✓ Scanability is optimal

---

## Agent Contract (Normative)

This section defines the **authoritative contract** for agents generating pages
using the **Table Page** pattern.

This is not an example.
This is not guidance.
This is a binding contract.

### Purpose

The Table Page pattern exists to produce **deterministic, production-ready,
single-table pages** using a stable hierarchy of components and tokens.

Agents must follow this contract exactly.

### Required Behavior

When instructed to create a Table Page, an agent MUST:

- Use the **Table Page pattern** as the page-level composition authority
- Place the table inside a **Card**
- Use **TableToolbar** for search + filter controls
- Use **TableGrid** for the data grid (rows + cells only)
- Use **TablePagination** for pagination when applicable
- Treat the page as a **single workflow surface**
- Prefer defaults over customization

### Defaults (Must Be Preserved)

Unless explicitly instructed otherwise, agents MUST assume:

- Rows are clickable by default
- The first column is the primary entry point
- Search is full-width
- Filters are ordered to match column semantics
- Toolbar sits directly above the table
- Pagination sits directly below the table
- Spacing, density, and hover behavior come from tokens and components
- No page-level spacing overrides are applied

### Forbidden Actions

Agents MUST NOT:

- Re-implement layout inside page examples
- Add margins, padding, or flex rules at the page level
- Render search, filters, or pagination inside TableGrid
- Modify TableToolbar or TablePagination responsibilities
- Invent new variants or flags
- Reorder components for visual preference
- Add logic to "improve" the design
- Bypass the pattern to get a similar result

If a requirement cannot be met within this contract,
the agent MUST stop and ask for clarification.

### Ambiguity Resolution Rule

When instructions are ambiguous, agents MUST:

1. Choose the most conservative interpretation
2. Prefer existing defaults
3. Preserve architectural boundaries
4. Avoid adding new structure or behavior

### Relationship to Other Patterns

- **Use Table Page** when the page contains a single primary table
- **Use DataTable** when you want a fully bundled, opinionated table workflow
- **Do NOT use Table Page** for segmented or multi-table layouts

### Final Rule

If an agent produces output that differs visually or structurally from the
Table Page pattern without explicit instruction, the output is incorrect.

This contract exists to prevent drift, preserve consistency, and ensure that
agent-generated pages remain production-ready.

---

## TablePage × DataTable Relationship

**TablePage uses DataTable by default** for single-table workflows.

### Default Behavior (useDataTable = true)

TablePage renders DataTable internally, which bundles:
- TableToolbar (search + filters)
- TableGrid (data grid)
- TablePagination (page navigation)

This is the preferred approach for:
- One dataset
- One toolbar
- One pagination row
- Standard list workflows (Votes, Surveys, Projects, Drive, Mailing Lists)

**Mental model:** "I want the standard LFX One table workflow with minimal configuration."

### Manual Composition (useDataTable = false)

TablePage can opt out of DataTable for advanced layouts by setting \`useDataTable: false\`.

In this mode, TablePage manually composes:
- Card → TableToolbar → TableGrid → TablePagination

Use manual composition for:
- Multiple tables on one page
- SegmentedTablePage
- Partial filter scoping
- Custom layout requirements

**Mental model:** "I need full control over component placement."

### Decision Table

| Situation | Configuration |
|---------|-----|
| One dataset, standard workflow | \`useDataTable: true\` (default) |
| Multiple tables | \`useDataTable: false\` |
| SegmentedTablePage | \`useDataTable: false\` |
| Partial filter scoping | \`useDataTable: false\` |
| Custom composition | \`useDataTable: false\` |

### Important Notes

- DataTable is OPTIONAL inside TablePage, but used by default
- Setting \`useDataTable: false\` does NOT change visual output
- Both modes produce identical page layouts
- The choice affects composition strategy, not appearance

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

## Interaction Behavior

Interaction behavior in Table Page follows the system-wide contract defined in  
**0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.

- Row inspection → Drawer
- Bulk action confirmation → Modal
- Create new entity → Page (Creation Flow pattern)

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
        `}}},argTypes:{dense:{control:"boolean",description:"Apply dense spacing to all components"},showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination row below table"}},render:e=>Re(e)},h={args:{dense:!1,showFilters:!1}},b={args:{dense:!1,showFilters:!0,showPagination:!0}},f={args:{dense:!0,showFilters:!0}},T={args:{dense:!1,showFilters:!1,projectsData:Ue}},y={render:()=>ve({title:"Projects",description:"Active projects and initiatives across the organization.",searchPlaceholder:"Search projects…",filters:[{label:"All Categories"},{label:"All Statuses"}],table:I(c,!1),page:1,pageSize:10,totalItems:42,pageSizeOptions:[10,20,50],showFilters:!0,showPagination:!0,useDataTable:!0})},v={render:()=>ve({title:"Projects",description:"Active projects and initiatives across the organization.",searchPlaceholder:"Search projects…",filters:[{label:"All Categories"},{label:"All Statuses"}],table:I(c,!1),page:1,pageSize:10,totalItems:42,pageSizeOptions:[10,20,50],showFilters:!0,showPagination:!0,useDataTable:!1})};var U,E,G,R,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: false
  }
}`,...(G=(E=h.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:`Default Table Page composition.

Canonical representation:
- Page title == Table title
- No section titles
- No filters (clean baseline)
- Semantic column widths
- Compact, scannable density`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var B,W,H,q,V;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: true,
    showPagination: true
  }
}`,...(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:`Table Page with search + filter controls + pagination.

Demonstrates canonical pattern with all standard elements:
- Filters inside Card, above table
- SearchInput full-width by default
- Pagination below table, aligned with content
- Complete workflow page structure`,...(V=(q=b.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var Y,J,X,K,_;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    dense: true,
    showFilters: true
  }
}`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:`Dense variant with compact spacing.

Demonstrates:
- Dense mode across all components
- Scanability maintained at higher density
- Useful for data-heavy views
- Headers remain distinguishable`,...(_=(K=f.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var Q,Z,$,ee,ae;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: false,
    projectsData: minimalProjectsData
  }
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:`Minimal dataset (3 rows).

Demonstrates:
- Clean baseline with minimal content
- Table structure clarity
- Vertical rhythm at low density
- Column semantics visibility`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,ne,ie,oe,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    return createTablePageFromConfig({
      title: 'Projects',
      description: 'Active projects and initiatives across the organization.',
      searchPlaceholder: 'Search projects…',
      filters: [{
        label: 'All Categories'
      }, {
        label: 'All Statuses'
      }],
      table: createProjectsTable(projectsData, false),
      page: 1,
      pageSize: 10,
      totalItems: 42,
      // Demo value > pageSize to show pagination
      pageSizeOptions: [10, 20, 50],
      showFilters: true,
      showPagination: true,
      useDataTable: true // EXPLICIT: Use DataTable (this is the default)
    });
  }
}`,...(ie=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:`DEFAULT MODE: Uses DataTable Internally

Demonstrates TablePage's default behavior:
- useDataTable = true (default, not shown)
- DataTable bundles TableToolbar + TableGrid + TablePagination automatically
- Preferred for single-table workflows
- Most common configuration

This is the CANONICAL single-table workflow.
Use this mode for:
- Votes, Surveys, Projects, Drive, Mailing Lists
- Any page with one dataset, one toolbar, one pagination row

DataTable provides:
- ✅ Automatic composition of table surface components
- ✅ Defensive rendering (empty states handled)
- ✅ Convention over configuration
- ✅ Reduced boilerplate`,...(se=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var re,le,ce,de,pe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    return createTablePageFromConfig({
      title: 'Projects',
      description: 'Active projects and initiatives across the organization.',
      searchPlaceholder: 'Search projects…',
      filters: [{
        label: 'All Categories'
      }, {
        label: 'All Statuses'
      }],
      table: createProjectsTable(projectsData, false),
      page: 1,
      pageSize: 10,
      totalItems: 42,
      // Demo value > pageSize to show pagination
      pageSizeOptions: [10, 20, 50],
      showFilters: true,
      showPagination: true,
      useDataTable: false // EXPLICIT: Manual composition (escape hatch)
    });
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:`ESCAPE HATCH: Manual Composition Without DataTable

Demonstrates TablePage's manual composition mode:
- useDataTable = false
- Manually composes TableToolbar + TableGrid + TablePagination
- Required for advanced layouts

Use this mode ONLY when:
- Building segmented table pages (multiple tables)
- Custom composition requirements
- Advanced layout scenarios

For standard single-table workflows, use DEFAULT MODE instead.

Manual composition provides:
- ✅ Full control over component placement
- ✅ Support for multiple tables
- ✅ Custom layout patterns
- ⚠️ More boilerplate required
- ⚠️ Must manage defensive rendering manually`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};const ia=["Default","WithFilters","Dense","Minimal","DefaultWithDataTable","AdvancedComposition","createTablePageFromConfig"];export{v as AdvancedComposition,h as Default,y as DefaultWithDataTable,f as Dense,T as Minimal,b as WithFilters,ia as __namedExportsOrder,ve as createTablePageFromConfig,na as default};
