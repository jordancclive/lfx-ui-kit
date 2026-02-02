import{c as k,a as R,b as x}from"./table-grid-CDe4dliu.js";import{c as r}from"./table-header-cell-DmmpqlN-.js";import{c as O}from"./table-row-DLTwFnyp.js";import{c as l}from"./table-cell-X32ALN1e.js";import{createTablePageFromConfig as G}from"./table-page.stories-Cr4xBqMz.js";import{c as u}from"./tag-Di5Xs3Pg.js";import"./app-shell-B-fH2tfM.js";import"./page-layout-DDkSngPm.js";import"./app-header-BUQjadsZ.js";import"./page-section-CrtrbsFd.js";import"./card-DYIIZwu_.js";import"./search-input-CzMEtAKB.js";import"./filter-dropdown-trigger-pmZu_dAG.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";import"./data-table-CzjozAYq.js";import"./global-nav-l0iysLZC.js";import"./button-CXimPVvh.js";const I=[{name:"Budget Allocation Q1 2026",group:"Board of Directors",status:"Open",responses:5,dueDate:"Jan 31, 2026",action:"Review"},{name:"Approval of Technical Charter Update",group:"Technical Steering Committee",status:"Open",responses:8,dueDate:"Feb 2, 2026",action:"Review"},{name:"New Project Proposal: Edge Computing",group:"Technical Oversight Committee",status:"Pending Review",responses:3,dueDate:"Feb 5, 2026",action:"View"},{name:"Security Policy Update",group:"Security Working Group",status:"Open",responses:12,dueDate:"Jan 28, 2026",action:"Review"},{name:"Annual Report Approval",group:"Board of Directors",status:"Closed",responses:8,dueDate:"Jan 15, 2026",action:"View"},{name:"Community Guidelines Revision",group:"Technical Advisory Group",status:"Open",responses:6,dueDate:"Feb 10, 2026",action:"Review"},{name:"Infrastructure Budget Approval",group:"Technical Steering Committee",status:"Closed",responses:11,dueDate:"Jan 20, 2026",action:"View"},{name:"Marketing Campaign Authorization",group:"Board of Directors",status:"Pending Review",responses:2,dueDate:"Feb 8, 2026",action:"View"}];function B(t){const e={Open:1,"Pending Review":2,Closed:3};return[...t].sort((n,s)=>{const o=e[n.status]-e[s.status];if(o!==0)return o;const a=new Date(n.dueDate).getTime(),i=new Date(s.dueDate).getTime();return a-i})}const A=B(I),E=A.slice(0,3);function N(t){const e=document.createElement("span");return e.textContent=t,e.style.color="var(--accent-600)",e.style.textDecoration="none",e}function M(t,e=!1){const n=[{key:"name",semanticType:"primary"},{key:"group",semanticType:"categorical"},{key:"status",semanticType:"categorical"},{key:"responses",semanticType:"numeric"},{key:"dueDate",semanticType:"meta"},{key:"actions",semanticType:"action"}],s=[r({children:"Vote Name"}),r({children:"Group"}),r({children:"Status"}),r({children:"Responses",align:"right"}),r({children:"Due Date"}),r({children:""})],o=t.map(a=>{let i="default";return a.status==="Open"?i="success":a.status==="Pending Review"?i="warning":a.status==="Closed"&&(i="default"),O({clickable:!0,children:[l({children:N(a.name),contentType:"primary"}),l({children:u({children:a.group}),contentType:"secondary"}),l({children:u({children:a.status,variant:i}),contentType:"secondary"}),l({children:a.responses.toString(),contentType:"numeric",align:"right"}),l({children:a.dueDate,contentType:"secondary"}),l({children:a.action,contentType:"secondary"})]})});return k({columns:n,dense:e,children:[R(s),x(o)]})}function H(t={}){const{showFilters:e=!0,showPagination:n=!1,votes:s=A}=t,o=n?42:s.length;return G({title:"Votes",description:"Make decisions with your project groups.",useDataTable:!0,primaryAction:{label:"Create Vote"},searchPlaceholder:"Search votes…",filters:[{label:"All Groups"},{label:"All Statuses"}],table:M(s,!1),page:1,pageSize:10,totalItems:o,showFilters:e,showPagination:n,navKey:"votes"})}const se={title:"3. Page Examples / 1. Table Pages / 2. Votes",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Votes Table Page Composition

**Concrete instance of the canonical Table Page pattern using DataTable.**

This page demonstrates a configuration-only usage of the standard
single-table workflow surface. All layout, spacing, and interaction
behavior are inherited from the Table Page pattern and DataTable component.

## Canonical Structure

This page uses the standard **Table Page + DataTable** workflow:

- Exactly ONE DataTable per page
- DataTable bundles:
  - TableToolbar (search + filters)
  - TableGrid (rows + columns only)
  - TablePagination (page navigation)
- Page-level actions live in AppHeader
- Page examples provide configuration only (labels, filters, data)

For full architectural rules, see:
- Table Page documentation
- DataTable documentation

### Structure Diagram

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader (page-level actions)
   └─ PageSection (dense)
      └─ DataTable
         ├─ TableToolbar
         ├─ TableGrid
         └─ TablePagination
\`\`\`

## What's Different in This Example

- 2 filters instead of 3
- Action column uses Review / View semantics
- Sorting prioritizes Open → Pending → Closed
- Status Tags use semantic variants (success=Open, warning=Pending, default=Closed)
- Vote Name styled as link (blue color) to signal primary entry point

## Column Semantics

Column semantics are defined at the TableGrid level and configured
by this page example.

| Column | Semantic Type | Characteristics |
|--------|---------------|-----------------|
| Vote Name | primary | Flexible width, visually dominant |
| Group | categorical | Intrinsic width, uses Tag |
| Status | categorical | Intrinsic width, uses Tag with variants |
| Responses | numeric | Intrinsic width, right-aligned |
| Due Date | meta | Intrinsic width, muted text |
| Actions | action | Intrinsic width, text actions |

---

> This page example does NOT own layout, spacing, or interaction behavior.
> If something feels visually incorrect, it must be fixed in:
> - DataTable
> - TableToolbar
> - TableGrid
> - TablePagination
> or the Table Page pattern — not here.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:t=>H(t)},c={args:{showFilters:!0,showPagination:!1}},p={args:{showFilters:!0,showPagination:!0}},d={args:{showFilters:!1,showPagination:!1,votes:E}};var m,g,h,b,T;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`Default Votes Table Page composition.

Demonstrates typical table page layout:
- Filters enabled (search + filter dropdowns)
- Pagination disabled (typical small dataset)
- Rows clickable (hover affordance enabled)`,...(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var f,w,y,P,D;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:`Votes Table Page with pagination.

Demonstrates:
- Pagination row below table
- Pagination inside Card (canonical placement)
- Filters enabled`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.description}}};var v,C,S,V,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false,
    votes: minimalVotesData
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`Minimal Votes Table Page.

Demonstrates:
- Minimum viable content (3 rows)
- Filters disabled
- Pagination disabled
- Clean baseline composition`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};const oe=["Default","WithPagination","Minimal"];export{c as Default,d as Minimal,p as WithPagination,oe as __namedExportsOrder,se as default};
