import{c as M,a as A,b as G}from"./table-grid-CDe4dliu.js";import{c as a}from"./table-header-cell-DmmpqlN-.js";import{c as k}from"./table-row-DLTwFnyp.js";import{c as n}from"./table-cell-X32ALN1e.js";import{createTablePageFromConfig as E}from"./table-page.stories-Cr4xBqMz.js";import{c as p}from"./tag-Di5Xs3Pg.js";import"./app-shell-B-fH2tfM.js";import"./page-layout-DDkSngPm.js";import"./app-header-BUQjadsZ.js";import"./page-section-CrtrbsFd.js";import"./card-DYIIZwu_.js";import"./search-input-CzMEtAKB.js";import"./filter-dropdown-trigger-pmZu_dAG.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";import"./data-table-CzjozAYq.js";import"./global-nav-l0iysLZC.js";import"./button-CXimPVvh.js";const L=[{name:"Announcements",address:"announcements@groups.io",description:"Official project announcements and important updates for all community members.",visibility:"Public",posting:"Moderated",groups:"All Members",subscribers:1247,emailCount:89,action:"View"},{name:"Technical Discussion",address:"technical@groups.io",description:"Technical architecture discussions, design proposals, and implementation questions.",visibility:"Public",posting:"Open",groups:"Technical Committee",subscribers:456,emailCount:1823,action:"View"},{name:"Board of Directors",address:"board@groups.io",description:"Private board communications, governance decisions, and strategic planning.",visibility:"Private",posting:"Moderated",groups:"Board of Directors",subscribers:8,emailCount:342,action:"View"},{name:"Security Advisories",address:"security@groups.io",description:"Security vulnerability reports, incident response, and security best practices.",visibility:"Private",posting:"Moderated",groups:"Security Working Group",subscribers:24,emailCount:156,action:"View"},{name:"Community Events",address:"events@groups.io",description:"Event planning, meetup coordination, and conference announcements.",visibility:"Public",posting:"Open",groups:"Community Advisory Board",subscribers:892,emailCount:234,action:"View"},{name:"Release Coordination",address:"releases@groups.io",description:"Release planning, testing coordination, and deployment announcements.",visibility:"Public",posting:"Moderated",groups:"Release Management WG",subscribers:167,emailCount:445,action:"View"},{name:"Documentation Contributors",address:"docs@groups.io",description:"Documentation improvement discussions, writing guidelines, and tutorial feedback.",visibility:"Public",posting:"Open",groups:"Documentation WG",subscribers:203,emailCount:567,action:"View"},{name:"Cloud Native",address:"cloud-native@groups.io",description:"Cloud infrastructure discussions, Kubernetes topics, and deployment strategies.",visibility:"Public",posting:"Open",groups:"Cloud Native SIG",subscribers:534,emailCount:1289,action:"View"}],V=[...L].sort((i,s)=>i.visibility!==s.visibility?i.visibility==="Public"?-1:1:s.subscribers-i.subscribers),O=[{key:"name",semanticType:"primary"},{key:"description",semanticType:"secondary"},{key:"visibility",semanticType:"categorical"},{key:"posting",semanticType:"categorical"},{key:"groups",semanticType:"secondary"},{key:"subscribers",semanticType:"numeric"},{key:"emailCount",semanticType:"numeric"},{key:"actions",semanticType:"action"}];function x(i,s=!1){const c=[a({children:"Name"}),a({children:"Description"}),a({children:"Visibility"}),a({children:"Posting"}),a({children:"Groups"}),a({children:"Subscribers",align:"right"}),a({children:"Emails",align:"right"}),a({children:""})],l=i.map(e=>k({clickable:!0,children:[n({children:e.name,contentType:"primary"}),n({children:e.description,contentType:"secondary"}),n({children:p({children:e.visibility,variant:e.visibility==="Public"?"success":"default"}),contentType:"secondary"}),n({children:p({children:e.posting,variant:e.posting==="Open"?"info":"warning"}),contentType:"secondary"}),n({children:e.groups,contentType:"secondary"}),n({children:e.subscribers.toLocaleString(),contentType:"numeric",align:"right"}),n({children:e.emailCount.toLocaleString(),contentType:"numeric",align:"right"}),n({children:e.action,contentType:"secondary"})]}));return M({columns:O,dense:s,children:[A(c),G(l)]})}function F(i={}){const{showFilters:s=!0,showPagination:c=!1,lists:l=V}=i,e=c?50:l.length;return E({title:"Mailing Lists",description:"Project discussions and announcements happen here.",useDataTable:!0,primaryAction:{label:"Create Mailing List"},searchPlaceholder:"Search mailing lists…",filters:[{label:"All Visibility"},{label:"All Posting"},{label:"All Groups"}],table:x(l,!1),page:1,pageSize:10,totalItems:e,showFilters:s,showPagination:c,navKey:"mailing-lists"})}const ee={title:"3. Page Examples / 1. Table Pages / 4. Mailing Lists",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
| Name | primary | Primary identifier, mailing list name |
| Description | secondary | Purpose and context |
| Visibility | categorical | Public/Private access (Tag with variant) |
| Posting | categorical | Open/Moderated permissions (Tag with variant) |
| Groups | secondary | Associated groups |
| Subscribers | numeric | Subscriber count (right-aligned) |
| Emails | numeric | Email count (right-aligned) |
| Actions | action | Entry point |

## What's Different in This Example

- **3 filters** (Visibility, Posting, Groups)
- **Visibility** shown as semantic Tags (success=Public, default=Private)
- **Posting permissions** shown as Tags (info=Open, warning=Moderated)
- **Two numeric columns** (Subscribers and Emails) for activity metrics
- **Groups** as secondary text showing associations
- **Email addresses** embedded in descriptions for reference
- **Sorting:** Public lists first, then by subscriber count

## Non-Ownership Note

> This page example does NOT own layout, spacing, or interaction behavior.
> If something feels visually incorrect, it must be fixed in:
> - DataTable
> - TableToolbar
> - TableGrid
> - TablePagination
> or the Table Page pattern — not here.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:i=>F(i)},t={args:{showFilters:!0,showPagination:!1}},r={args:{showFilters:!0,showPagination:!0}},o={args:{showFilters:!1,showPagination:!1}};var d,u,m,g,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Default Mailing Lists page with search and filters",...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var y,h,T,f,P;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source},description:{story:"Mailing Lists page with pagination enabled",...(P=(f=r.parameters)==null?void 0:f.docs)==null?void 0:P.description}}};var w,v,C,D,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:"Minimal Mailing Lists page (no filters or pagination)",...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};const ie=["Default","WithPagination","Minimal"];export{t as Default,o as Minimal,r as WithPagination,ie as __namedExportsOrder,ee as default};
