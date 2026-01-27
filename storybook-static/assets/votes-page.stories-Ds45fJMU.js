import{c as I}from"./app-shell-CLFgneCT.js";import{c as N}from"./page-layout-DDkSngPm.js";import{c as O}from"./app-header-DeHaskNY.js";import{c as B}from"./page-section-CrtrbsFd.js";import{c as G}from"./card-20Zp1JzI.js";import{c as M,a as z,b as H}from"./table-BqFkyqaa.js";import{c as s}from"./table-header-cell-BQFJGQJu.js";import{c as j}from"./table-row-Bd8rP5kn.js";import{c}from"./table-cell-FJBY3uM0.js";import{c as J}from"./search-input-CzMEtAKB.js";import{c as g}from"./filter-dropdown-trigger-pmZu_dAG.js";import{b as L,c as W,a as l}from"./global-nav-l0iysLZC.js";import{c as h}from"./tag-Di5Xs3Pg.js";import{c as $}from"./button-CXimPVvh.js";const U=[{name:"Budget Allocation Q1 2026",group:"Board of Directors",status:"Open",responses:5,dueDate:"Jan 31, 2026",action:"Review"},{name:"Approval of Technical Charter Update",group:"Technical Steering Committee",status:"Open",responses:8,dueDate:"Feb 2, 2026",action:"Review"},{name:"New Project Proposal: Edge Computing",group:"Technical Oversight Committee",status:"Pending Review",responses:3,dueDate:"Feb 5, 2026",action:"View"},{name:"Security Policy Update",group:"Security Working Group",status:"Open",responses:12,dueDate:"Jan 28, 2026",action:"Review"},{name:"Annual Report Approval",group:"Board of Directors",status:"Closed",responses:8,dueDate:"Jan 15, 2026",action:"View"},{name:"Community Guidelines Revision",group:"Technical Advisory Group",status:"Open",responses:6,dueDate:"Feb 10, 2026",action:"Review"},{name:"Infrastructure Budget Approval",group:"Technical Steering Committee",status:"Closed",responses:11,dueDate:"Jan 20, 2026",action:"View"},{name:"Marketing Campaign Authorization",group:"Board of Directors",status:"Pending Review",responses:2,dueDate:"Feb 8, 2026",action:"View"}];function _(e){const t={Open:1,"Pending Review":2,Closed:3};return[...e].sort((i,r)=>{const n=t[i.status]-t[r.status];if(n!==0)return n;const a=new Date(i.dueDate).getTime(),o=new Date(r.dueDate).getTime();return a-o})}const A=_(U),Q=A.slice(0,3);function d(e){return document.createTextNode(e)}function q(e){const t=document.createElement("span");return t.textContent=e,t.style.color="var(--accent-600)",t.style.textDecoration="none",t}function K(){const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--spacing-8)",e.style.alignItems="center";const t=J({placeholder:"Search votes…",variant:"toolbar"});return t.style.flex="1",e.appendChild(t),e.appendChild(g({label:"All Groups"})),e.appendChild(g({label:"All Statuses"})),e}function X(e=1,t=42){const i=document.createElement("div");i.style.display="flex",i.style.justifyContent="space-between",i.style.alignItems="center";const r=document.createElement("span");r.textContent=`Rows ${(e-1)*10+1}–${Math.min(e*10,t)} of ${t}`,r.style.fontFamily="var(--ui-text-body-secondary-font-family)",r.style.fontSize="var(--ui-text-body-secondary-font-size)",r.style.color="var(--text-secondary)";const n=document.createElement("div");n.style.display="flex",n.style.gap="var(--spacing-8)";const a=document.createElement("button");a.textContent="Previous",a.disabled=e===1,a.style.fontFamily="var(--ui-text-control-font-family)",a.style.fontSize="var(--ui-text-control-font-size)";const o=document.createElement("button");return o.textContent="Next",o.disabled=e*10>=t,o.style.fontFamily="var(--ui-text-control-font-family)",o.style.fontSize="var(--ui-text-control-font-size)",n.appendChild(a),n.appendChild(o),i.appendChild(r),i.appendChild(n),i}function Y(e,t=!1){const i=[{key:"name",semanticType:"primary"},{key:"group",semanticType:"categorical"},{key:"status",semanticType:"categorical"},{key:"responses",semanticType:"numeric"},{key:"dueDate",semanticType:"meta"},{key:"actions",semanticType:"action"}],r=[s({children:"Vote Name"}),s({children:"Group"}),s({children:"Status"}),s({children:"Responses",align:"right"}),s({children:"Due Date"}),s({children:""})],n=e.map(a=>{let o="default";return a.status==="Open"?o="success":a.status==="Pending Review"?o="warning":a.status==="Closed"&&(o="default"),j({clickable:!0,children:[c({children:q(a.name),contentType:"primary"}),c({children:h({children:a.group}),contentType:"secondary"}),c({children:h({children:a.status,variant:o}),contentType:"secondary"}),c({children:a.responses.toString(),contentType:"numeric",align:"right"}),c({children:a.dueDate,contentType:"secondary"}),c({children:a.action,contentType:"secondary"})]})});return M({columns:i,dense:t,children:[z(r),H(n)]})}function Z(e="votes"){return L({activeItemId:e,children:[W([l({id:"dashboard",children:d("Dashboard")}),l({id:"projects",children:d("Projects")}),l({id:"groups",children:d("Groups")}),l({id:"votes",children:d("Votes")}),l({id:"members",children:d("Members")})])]})}function ee(e){const t=document.createElement("div");return t.style.maxWidth="1280px",t.style.margin="0 auto",t.appendChild(e),t}function te(e={}){const{showFilters:t=!0,showPagination:i=!1,votes:r=A}=e,n=[];t&&n.push(K()),n.push(Y(r,!1)),i&&n.push(X(1,r.length));const a=[O({title:"Votes",description:"Make decisions with your project groups.",actions:$({variant:"primary"}),dense:!0}),B({dense:!0,children:G({children:n})})],o=N({children:a}),E=I({nav:Z(),content:o});return ee(E)}const ye={title:"3. Page Examples / Votes",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Votes Table Page Composition

**Concrete instance of canonical Table Page pattern**

This composition demonstrates the canonical Table Page pattern (defined in
\`docs/page-patterns/table-page.md\`) using Votes as a concrete example.

### Pattern Characteristics

- **Page title == Table title** — "Votes" (no section titles)
- **One table per page** — Single votes table
- **Filters inside Card** — SearchInput + FilterDropdownTriggers above table
- **Pagination inside Card** — Optional pagination below table
- **Semantic columns** — Primary, categorical, numeric, meta, action
- **Row-level navigation** — Rows are clickable, hover affordance enabled

### Page-Level Action

AppHeader includes a primary action button: "Create Vote"

This is a page-level action, not a table-level action.

### Column Semantics

| Column | Semantic Type | Characteristics |
|--------|---------------|-----------------|
| Vote Name | primary | Flexible width, visually dominant |
| Group | categorical | Intrinsic width, uses Tag |
| Status | categorical | Intrinsic width, uses Tag with variants |
| Responses | numeric | Intrinsic width, right-aligned |
| Due Date | meta | Intrinsic width, muted text |
| Actions | action | Intrinsic width, text actions |

### Row Interaction

- Rows are clickable via \`TableRow\` props
- Row owns navigation (not columns or cells)
- Hover affordance appears only when row is clickable
- Primary column text may be styled visually like a link, but row handles navigation

### Structure (from pattern)

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader (with primary action)
   └─ PageSection (dense: true)
      └─ Card
         ├─ (optional) Filter Row
         ├─ Table
         └─ (optional) Pagination
\`\`\`

### Structural Rules

- ✅ Exactly ONE table
- ✅ NO section titles
- ✅ Filters and pagination INSIDE Card
- ✅ Semantic column definitions (ColumnDefinition[])
- ✅ Row-level navigation

If something feels off visually, fix in components or tokens, not here.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:e=>te(e)},p={args:{showFilters:!0,showPagination:!1}},u={args:{showFilters:!0,showPagination:!0}},m={args:{showFilters:!1,showPagination:!1,votes:Q}};var y,f,w,b,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:`Default Votes Table Page composition.

Demonstrates typical table page layout:
- Filters enabled (search + filter dropdowns)
- Pagination disabled (typical small dataset)
- Rows clickable (hover affordance enabled)`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var T,C,P,D,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(P=(C=u.parameters)==null?void 0:C.docs)==null?void 0:P.source},description:{story:`Votes Table Page with pagination.

Demonstrates:
- Pagination row below table
- Pagination inside Card (canonical placement)
- Filters enabled`,...(S=(D=u.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var x,F,R,V,k;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false,
    votes: minimalVotesData
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:`Minimal Votes Table Page.

Demonstrates:
- Minimum viable content (3 rows)
- Filters disabled
- Pagination disabled
- Clean baseline composition`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.description}}};const fe=["Default","WithPagination","Minimal"];export{p as Default,m as Minimal,u as WithPagination,fe as __namedExportsOrder,ye as default};
