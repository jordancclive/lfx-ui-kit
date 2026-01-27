import{c as H}from"./app-shell-CLFgneCT.js";import{c as E}from"./page-layout-DDkSngPm.js";import{c as U}from"./app-header-DeHaskNY.js";import{c as W}from"./page-section-CrtrbsFd.js";import{c as B}from"./card-20Zp1JzI.js";import{c as V,a as R,b as Y}from"./table-BqFkyqaa.js";import{c as s}from"./table-header-cell-BQFJGQJu.js";import{c as _}from"./table-row-Bd8rP5kn.js";import{c as r}from"./table-cell-FJBY3uM0.js";import{c as z}from"./search-input-CzMEtAKB.js";import{c as K}from"./filter-dropdown-trigger-pmZu_dAG.js";import{b as Q,c as X,a as n}from"./global-nav-l0iysLZC.js";import{c as g}from"./tag-Di5Xs3Pg.js";const p=[{name:"Cloud Native Platform",status:"Active",category:"Infrastructure",maintainers:12,lastActivity:"Today"},{name:"Security Toolkit",status:"Active",category:"Security",maintainers:8,lastActivity:"Yesterday"},{name:"Developer Portal",status:"Active",category:"Documentation",maintainers:5,lastActivity:"Jan 24, 2026"},{name:"API Gateway",status:"Incubating",category:"Infrastructure",maintainers:15,lastActivity:"Jan 23, 2026"},{name:"Data Pipeline",status:"Active",category:"Data",maintainers:10,lastActivity:"Jan 22, 2026"},{name:"Monitoring Dashboard",status:"Active",category:"Operations",maintainers:6,lastActivity:"Jan 21, 2026"},{name:"Authentication Service",status:"Archived",category:"Security",maintainers:3,lastActivity:"Jan 15, 2026"},{name:"Message Queue",status:"Active",category:"Infrastructure",maintainers:9,lastActivity:"Jan 20, 2026"}],q=[p[0],p[1],p[2]];function i(e){const t=document.createElement("span");return t.textContent=e,t}function Z(){const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--spacing-8)",e.style.alignItems="center",e.appendChild(z({placeholder:"Search projects…",variant:"toolbar"})),e.appendChild(K({label:"All Categories"})),e}function $(e,t=!1){const u=[{key:"name",semanticType:"primary"},{key:"status",semanticType:"categorical"},{key:"category",semanticType:"categorical"},{key:"maintainers",semanticType:"numeric"},{key:"lastActivity",semanticType:"meta"}],h=[s({children:"Name"}),s({children:"Status"}),s({children:"Category"}),s({children:"Maintainers",align:"right"}),s({children:"Last Activity"})],m=e.map(a=>{const y=[r({children:a.name,contentType:"primary"}),r({children:g({children:a.status}),contentType:"secondary"}),r({children:g({children:a.category}),contentType:"secondary"}),r({children:String(a.maintainers),contentType:"numeric",align:"right"}),r({children:a.lastActivity,contentType:"muted"})];return _({children:y,clickable:!0})});return V({columns:u,dense:t,children:[R(h),Y(m)]})}function ee(e="projects"){return Q({activeItemId:e,children:[X([n({id:"dashboard",children:i("Dashboard")}),n({id:"projects",children:i("Projects")}),n({id:"groups",children:i("Groups")}),n({id:"members",children:i("Members")}),n({id:"settings",children:i("Settings")})])]})}function te(e){const t=document.createElement("div");return t.style.maxWidth="1280px",t.style.margin="0 auto",t.appendChild(e),t}function ae(e={}){const{dense:t=!1,showFilters:u=!1,projectsData:h=p}=e,m=[U({title:"Projects",description:"Active projects and initiatives across the organization.",dense:t})],a=[];u&&a.push(Z()),a.push($(h,t)),m.push(W({dense:!0,children:[B({dense:t,children:a})]}));const y=E({dense:t,children:m}),L=H({nav:ee(),content:y});return te(L)}const ge={title:"2. Page Patterns / Table Page",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Table Page Composition

**This is the canonical table-driven page pattern for LFX One.**

### Pattern Characteristics

- **Single table per page**
- **Page title == Table title** (no section titles)
- **Optional search + filters** inside the Card, above the table
- **Semantic column widths** (flexible vs intrinsic)
- **Clean vertical rhythm**
- **Compact, scan-friendly density**

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
         └─ Table (semantic columns)
\`\`\`

### Filter Placement Pattern

When filters are present:
- Search + filter controls sit inside the Card
- Positioned directly above the table
- Use SearchInput with \`variant='toolbar'\`
- Filters apply to the entire table
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
        `}}},argTypes:{dense:{control:"boolean",description:"Apply dense spacing to all components"},showFilters:{control:"boolean",description:"Show search and filter controls"}},render:e=>ae(e)},o={args:{dense:!1,showFilters:!1}},c={args:{dense:!1,showFilters:!0}},l={args:{dense:!0,showFilters:!0}},d={args:{dense:!1,showFilters:!1,projectsData:q}};var f,b,v,T,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: false
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`Default Table Page composition.

Canonical representation:
- Page title == Table title
- No section titles
- No filters (clean baseline)
- Semantic column widths
- Compact, scannable density`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var S,P,C,A,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: true
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:`Table Page with search + filter controls.

Demonstrates canonical filter placement:
- Filters inside Card, above table
- SearchInput uses toolbar variant
- Filters apply to entire table
- No floating or detached controls`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var F,N,I,M,j;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    dense: true,
    showFilters: true
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source},description:{story:`Dense variant with compact spacing.

Demonstrates:
- Dense mode across all components
- Scanability maintained at higher density
- Useful for data-heavy views
- Headers remain distinguishable`,...(j=(M=l.parameters)==null?void 0:M.docs)==null?void 0:j.description}}};var x,k,G,O,J;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    dense: false,
    showFilters: false,
    projectsData: minimalProjectsData
  }
}`,...(G=(k=d.parameters)==null?void 0:k.docs)==null?void 0:G.source},description:{story:`Minimal dataset (3 rows).

Demonstrates:
- Clean baseline with minimal content
- Table structure clarity
- Vertical rhythm at low density
- Column semantics visibility`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};const fe=["Default","WithFilters","Dense","Minimal"];export{o as Default,l as Dense,d as Minimal,c as WithFilters,fe as __namedExportsOrder,ge as default};
