import{c as k,a as V,b as C}from"./table-grid-CDe4dliu.js";import{c as t}from"./table-header-cell-DmmpqlN-.js";import{c as U}from"./table-row-DLTwFnyp.js";import{c as n}from"./table-cell-X32ALN1e.js";import{createTablePageFromConfig as x}from"./table-page.stories-Cr4xBqMz.js";import{c as p}from"./tag-Di5Xs3Pg.js";import"./app-shell-B-fH2tfM.js";import"./page-layout-DDkSngPm.js";import"./app-header-BUQjadsZ.js";import"./page-section-CrtrbsFd.js";import"./card-DYIIZwu_.js";import"./search-input-CzMEtAKB.js";import"./filter-dropdown-trigger-pmZu_dAG.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";import"./data-table-CzjozAYq.js";import"./global-nav-l0iysLZC.js";import"./button-CXimPVvh.js";const A=[{name:"Technical Steering Committee",type:"Technical Committee",description:"Oversees technical direction and architecture decisions for the project.",members:12,voting:!0,lastUpdated:"Jan 15, 2026",action:"View"},{name:"Board of Directors",type:"Board of Directors",description:"Provides strategic oversight and governance for the organization.",members:8,voting:!0,lastUpdated:"Jan 20, 2026",action:"View"},{name:"Security Working Group",type:"Working Group",description:"Focuses on security best practices, vulnerability management, and incident response.",members:15,voting:!1,lastUpdated:"Jan 18, 2026",action:"View"},{name:"Cloud Native SIG",type:"Special Interest Group",description:"Explores cloud-native technologies and deployment strategies.",members:24,voting:!1,lastUpdated:"Jan 22, 2026",action:"View"},{name:"Documentation Working Group",type:"Working Group",description:"Maintains and improves project documentation, tutorials, and guides.",members:10,voting:!1,lastUpdated:"Jan 14, 2026",action:"View"},{name:"AI/ML Special Interest Group",type:"Special Interest Group",description:"Investigates applications of artificial intelligence and machine learning.",members:18,voting:!1,lastUpdated:"Jan 19, 2026",action:"View"},{name:"Community Advisory Board",type:"Advisory Board",description:"Represents community interests and provides guidance on community initiatives.",members:7,voting:!0,lastUpdated:"Jan 16, 2026",action:"View"},{name:"Release Management Working Group",type:"Working Group",description:"Manages release planning, testing, and deployment processes.",members:9,voting:!1,lastUpdated:"Jan 21, 2026",action:"View"}],F=[...A].sort((a,i)=>a.voting!==i.voting?a.voting?-1:1:new Date(i.lastUpdated).getTime()-new Date(a.lastUpdated).getTime()),M=[{key:"name",semanticType:"primary"},{key:"type",semanticType:"categorical"},{key:"description",semanticType:"secondary"},{key:"members",semanticType:"numeric"},{key:"voting",semanticType:"categorical"},{key:"lastUpdated",semanticType:"meta"},{key:"actions",semanticType:"action"}];function I(a,i=!1){const c=[t({children:"Group Name"}),t({children:"Type"}),t({children:"Description"}),t({children:"Members",align:"right"}),t({children:"Voting"}),t({children:"Last Updated"}),t({children:""})],l=a.map(e=>U({clickable:!0,children:[n({children:e.name,contentType:"primary"}),n({children:p({children:e.type,variant:"default"}),contentType:"secondary"}),n({children:e.description,contentType:"secondary"}),n({children:e.members.toString(),contentType:"numeric",align:"right"}),n({children:p({children:e.voting?"Voting":"Non-voting",variant:e.voting?"success":"default"}),contentType:"secondary"}),n({children:e.lastUpdated,contentType:"secondary"}),n({children:e.action,contentType:"secondary"})]}));return k({columns:M,dense:i,children:[V(c),C(l)]})}function N(a={}){const{showFilters:i=!0,showPagination:c=!1,groups:l=F}=a,e=c?75:l.length;return x({title:"Groups",description:"Organize people and governance for your project.",useDataTable:!0,primaryAction:{label:"Create Group"},searchPlaceholder:"Search groups…",filters:[{label:"All Types"},{label:"All Statuses"}],table:I(l,!1),page:1,pageSize:10,totalItems:e,showFilters:i,showPagination:c,navKey:"groups"})}const ee={title:"3. Page Examples / 1. Table Pages / 3. Groups",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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

## Structure Diagram

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

## Column Semantics

Column semantics are defined at the TableGrid level and configured by this page example.

| Column | Semantic Type | Purpose |
|--------|---------------|---------|
| Group Name | primary | Primary identifier, visually dominant |
| Type | categorical | Group classification (Tag) |
| Description | secondary | Context and purpose |
| Members | numeric | Member count (right-aligned) |
| Voting | categorical | Voting capability (Tag with variant) |
| Last Updated | meta | Recency signal |
| Actions | action | Entry point |

## What's Different in This Example

- **2 filters** (Type, Voting Status)
- **Type** displayed as Tags for visual categorization
- **Voting status** shown as boolean tags (Voting/Non-voting with semantic variants)
- **Member count** right-aligned (numeric data)
- **Description** provides context for each group
- **Last Updated** date for recency tracking
- **Sorting:** Voting groups first, then by most recent update

## Non-Ownership Note

> This page example does NOT own layout, spacing, or interaction behavior.
> If something feels visually incorrect, it must be fixed in:
> - DataTable
> - TableToolbar
> - TableGrid
> - TablePagination
> or the Table Page pattern — not here.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:a=>N(a)},r={args:{showFilters:!0,showPagination:!1}},o={args:{showFilters:!0,showPagination:!0}},s={args:{showFilters:!1,showPagination:!1}};var d,m,g,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"Default Groups page with search and filters",...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var y,T,b,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:"Groups page with pagination enabled",...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var w,P,G,D,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false
  }
}`,...(G=(P=s.parameters)==null?void 0:P.docs)==null?void 0:G.source},description:{story:"Minimal Groups page (no filters or pagination)",...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};const ae=["Default","WithPagination","Minimal"];export{r as Default,s as Minimal,o as WithPagination,ae as __namedExportsOrder,ee as default};
