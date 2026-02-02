import{c as E,a as R,b as x}from"./table-grid-CDe4dliu.js";import{c as n}from"./table-header-cell-DmmpqlN-.js";import{c as O}from"./table-row-DLTwFnyp.js";import{c as i}from"./table-cell-X32ALN1e.js";import{createTablePageFromConfig as G}from"./table-page.stories-Cr4xBqMz.js";import{c as p}from"./tag-Di5Xs3Pg.js";import"./app-shell-B-fH2tfM.js";import"./page-layout-DDkSngPm.js";import"./app-header-BUQjadsZ.js";import"./page-section-CrtrbsFd.js";import"./card-DYIIZwu_.js";import"./search-input-CzMEtAKB.js";import"./filter-dropdown-trigger-pmZu_dAG.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";import"./data-table-CzjozAYq.js";import"./global-nav-l0iysLZC.js";import"./button-CXimPVvh.js";const M=[{name:"2026 Annual Board Effectiveness Survey",surveyType:"Board Effectiveness",group:"Board of Directors",status:"Open",responses:8,due:"Feb 15, 2026",action:"View Results"},{name:"Q1 Committee Performance Review",surveyType:"Committee Effectiveness",group:"Technical Advisory Committee",status:"Open",responses:12,due:"Feb 10, 2026",action:"View Results"},{name:"Foundation-Wide Satisfaction Survey",surveyType:"Member Satisfaction",group:"All Members",status:"Open",responses:247,due:"Jan 31, 2026",action:"View Results"},{name:"Event Feedback - Open Source Summit 2025",surveyType:"Event Feedback",group:"Event Attendees",status:"Closed",responses:342,due:"Dec 15, 2025",action:"View Results"},{name:"Technical Steering Committee Priorities",surveyType:"Strategic Planning",group:"Technical Steering Committee",status:"Open",responses:9,due:"Feb 28, 2026",action:"View Results"},{name:"Q4 2025 Project Health Check",surveyType:"Project Assessment",group:"Project Maintainers",status:"Closed",responses:56,due:"Dec 31, 2025",action:"View Results"},{name:"Contributor Experience Survey",surveyType:"Contributor Feedback",group:"All Contributors",status:"Closed",responses:189,due:"Dec 20, 2025",action:"View Results"},{name:"Working Group Effectiveness Review",surveyType:"Working Group Assessment",group:"Security Working Group",status:"Draft",responses:0,due:"",action:"Edit"},{name:"Mentorship Program Feedback",surveyType:"Program Evaluation",group:"Mentorship Program",status:"Draft",responses:0,due:"Mar 1, 2026",action:"Edit"},{name:"Community Forum Usage Survey",surveyType:"Platform Feedback",group:"All Members",status:"Open",responses:134,due:"Feb 5, 2026",action:"View Results"}];function V(a){const t={Open:1,Draft:2,Closed:3};return[...a].sort((r,s)=>{const e=t[r.status]-t[s.status];if(e!==0)return e;if(!r.due&&!s.due)return 0;if(!r.due)return 1;if(!s.due)return-1;const o=new Date(r.due).getTime(),A=new Date(s.due).getTime();return o-A})}const k=V(M),I=k.slice(0,3);function W(a){const t=document.createElement("span");return t.textContent=a,t.style.color="var(--accent-600)",t.style.textDecoration="none",t}function B(a){const t=[{key:"name",semanticType:"primary"},{key:"surveyType",semanticType:"categorical"},{key:"group",semanticType:"categorical"},{key:"status",semanticType:"categorical"},{key:"responses",semanticType:"numeric"},{key:"due",semanticType:"meta"},{key:"actions",semanticType:"action"}],r=[n({children:"Survey Name"}),n({children:"Survey Type"}),n({children:"Group"}),n({children:"Status"}),n({children:"Responses",align:"right"}),n({children:"Due"}),n({children:""})],s=a.map(e=>{let o="default";return e.status==="Open"?o="success":(e.status==="Draft"||e.status==="Closed")&&(o="default"),O({clickable:!0,children:[i({children:W(e.name),contentType:"primary"}),i({children:p({children:e.surveyType}),contentType:"secondary"}),i({children:p({children:e.group}),contentType:"secondary"}),i({children:p({children:e.status,variant:o}),contentType:"secondary"}),i({children:e.responses.toString(),contentType:"numeric",align:"right"}),i({children:e.due||"—",contentType:"secondary"}),i({children:e.action,contentType:"action"})]})});return E({columns:t,children:[R(r),x(s)]})}function H(a={}){const{showFilters:t=!0,showPagination:r=!1,surveys:s=k}=a,e=r?120:s.length;return G({title:"Surveys",description:"Collect feedback from your project groups.",useDataTable:!0,primaryAction:{label:"Create Survey"},searchPlaceholder:"Search surveys…",filters:[{label:"All Survey Types"},{label:"All Groups"},{label:"All Statuses"}],table:B(s),page:1,pageSize:10,totalItems:e,showFilters:t,showPagination:r,navKey:"surveys"})}const se={title:"3. Page Examples / 1. Table Pages / 1. Surveys",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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

- 3 filters instead of 2
- Longer categorical labels (tag width pressure)
- Higher numeric variance (0 → 300+)
- Different action semantics (View Results vs Edit)
- Different default sorting logic

## Column Semantics

Column semantics are defined at the TableGrid level and configured
by this page example.

| Column | Semantic Type | Characteristics |
|--------|---------------|-----------------|
| Survey Name | primary | Flexible width, visually dominant |
| Survey Type | categorical | Intrinsic width, uses Tag |
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
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:a=>H(a)},l={args:{showFilters:!0,showPagination:!1}},c={args:{showFilters:!0,showPagination:!0}},u={args:{showFilters:!1,showPagination:!1,surveys:I}};var d,m,g,y,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:`Default Surveys Table Page composition.

Demonstrates typical table page layout:
- Filters enabled (search + 3 filter dropdowns)
- Pagination disabled (typical small dataset)
- Rows clickable (hover affordance enabled)`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var f,T,b,v,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(b=(T=c.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:`Surveys Table Page with pagination.

Demonstrates:
- Pagination row below table
- Pagination inside Card (canonical placement)
- Filters enabled`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var S,P,D,C,F;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false,
    surveys: minimalSurveysData
  }
}`,...(D=(P=u.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:`Minimal Surveys Table Page.

Demonstrates:
- Minimum viable content (3 rows)
- Filters disabled
- Pagination disabled
- Clean baseline composition`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};const ne=["Default","WithPagination","Minimal"];export{l as Default,u as Minimal,c as WithPagination,ne as __namedExportsOrder,se as default};
