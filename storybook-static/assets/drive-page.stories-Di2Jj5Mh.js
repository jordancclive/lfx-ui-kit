import{c as A,a as k,b as G}from"./table-grid-CDe4dliu.js";import{c as n}from"./table-header-cell-DmmpqlN-.js";import{c as E}from"./table-row-DLTwFnyp.js";import{c as r}from"./table-cell-X32ALN1e.js";import{createTablePageFromConfig as I}from"./table-page.stories-Cr4xBqMz.js";import{c as p}from"./tag-Di5Xs3Pg.js";import"./app-shell-B-fH2tfM.js";import"./page-layout-DDkSngPm.js";import"./app-header-BUQjadsZ.js";import"./page-section-CrtrbsFd.js";import"./card-DYIIZwu_.js";import"./search-input-CzMEtAKB.js";import"./filter-dropdown-trigger-pmZu_dAG.js";import"./table-toolbar-DcOdLZIw.js";import"./table-pagination-D695YPKq.js";import"./data-table-CzjozAYq.js";import"./global-nav-l0iysLZC.js";import"./button-CXimPVvh.js";const J=[{title:"2026 Q1 Board Meeting Minutes",fileType:"Document",tags:["Board","Meeting Minutes","Q1 2026"],lastModified:"Jan 22, 2026",action:"View"},{title:"Technical Charter v2.0",fileType:"PDF",tags:["TSC","Governance","Charter"],lastModified:"Jan 21, 2026",action:"View"},{title:"Cloud Migration Strategy",fileType:"Presentation",tags:["Cloud Native SIG","Architecture","Strategy"],lastModified:"Jan 20, 2026",action:"View"},{title:"Security Incident Response Plan",fileType:"PDF",tags:["Security WG","Incident Response","Policy"],lastModified:"Jan 19, 2026",action:"View"},{title:"Community Event Calendar",fileType:"Spreadsheet",tags:["Community","Events","Planning"],lastModified:"Jan 18, 2026",action:"View"},{title:"Contributor Guidelines",fileType:"Link",tags:["Documentation","Onboarding","Contributors"],lastModified:"Jan 17, 2026",action:"View"},{title:"Architecture Diagram",fileType:"Image",tags:["TSC","Architecture","Documentation"],lastModified:"Jan 16, 2026",action:"View"},{title:"Release 2.0 Planning",fileType:"Spreadsheet",tags:["Release Management","Planning","Roadmap"],lastModified:"Jan 15, 2026",action:"View"},{title:"Budget Allocation 2026",fileType:"Spreadsheet",tags:["Board","Finance","Budget"],lastModified:"Jan 14, 2026",action:"View"},{title:"AI/ML Working Session Notes",fileType:"Document",tags:["AI/ML SIG","Meeting Notes","Research"],lastModified:"Jan 13, 2026",action:"View"}],V=[...J].sort((e,t)=>new Date(t.lastModified).getTime()-new Date(e.lastModified).getTime()),R=[{key:"title",semanticType:"primary"},{key:"fileType",semanticType:"categorical"},{key:"tags",semanticType:"categorical"},{key:"lastModified",semanticType:"meta"},{key:"actions",semanticType:"action"}];function N(e,t=!1){const c=[n({children:"Title"}),n({children:"Type"}),n({children:"Tags"}),n({children:"Last Modified"}),n({children:""})],d=e.map(a=>{const i=document.createElement("div");return i.style.display="flex",i.style.flexWrap="wrap",i.style.gap="var(--spacing-4)",a.tags.forEach(F=>{const x=p({children:F,variant:"default"});i.appendChild(x)}),E({clickable:!0,children:[r({children:a.title,contentType:"primary"}),r({children:p({children:a.fileType,variant:"info"}),contentType:"secondary"}),r({children:i,contentType:"secondary"}),r({children:a.lastModified,contentType:"secondary"}),r({children:a.action,contentType:"secondary"})]})});return A({columns:R,dense:t,children:[k(c),G(d)]})}function W(e={}){const{showFilters:t=!0,showPagination:c=!1,files:d=V}=e,a=c?85:d.length;return I({title:"Drive",description:"Access documents and links associated with your project.",useDataTable:!0,primaryAction:{label:"Upload File"},searchPlaceholder:"Search files…",filters:[{label:"All Types"},{label:"All Tags"}],table:N(d,!1),page:1,pageSize:10,totalItems:a,showFilters:t,showPagination:c,navKey:"drive"})}const ie={title:"3. Page Examples / 1. Table Pages / 5. Drive",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
| Title | primary | File/document name (primary identifier) |
| Type | categorical | File type classification (Tag) |
| Tags | categorical | User-defined taxonomy (multiple Tags) |
| Last Modified | meta | Recency signal |
| Actions | action | Entry point |

## What's Different in This Example

- **2 filters** (File Type, Tags)
- **File Type** displayed as info-variant Tags
- **Multiple tags per file** showing flexible, user-defined taxonomy
- **Tags** can represent: meeting series, working groups, topics, or any custom categorization
- **Flexible tagging system** supports open-ended community-driven organization
- **Sorting:** Most recently modified first

## Tag Flexibility

The Tags column demonstrates how Drive supports **open-ended taxonomies**:
- Communities define their own tag vocabularies
- Tags can represent meeting series (e.g., "Q1 2026")
- Tags can represent working groups (e.g., "Security WG")
- Tags can represent topics (e.g., "Architecture", "Policy")
- No predefined tag structure is enforced

## Non-Ownership Note

> This page example does NOT own layout, spacing, or interaction behavior.
> If something feels visually incorrect, it must be fixed in:
> - DataTable
> - TableToolbar
> - TableGrid
> - TablePagination
> or the Table Page pattern — not here.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:e=>W(e)},o={args:{showFilters:!0,showPagination:!1}},s={args:{showFilters:!0,showPagination:!0}},l={args:{showFilters:!1,showPagination:!1}};var g,m,u,T,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Default Drive page with search and filters",...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};var y,h,b,w,P;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Drive page with pagination enabled",...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var v,D,M,S,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Minimal Drive page (no filters or pagination)",...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};const ne=["Default","WithPagination","Minimal"];export{o as Default,l as Minimal,s as WithPagination,ne as __namedExportsOrder,ie as default};
