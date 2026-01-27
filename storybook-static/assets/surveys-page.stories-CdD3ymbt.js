import{c as M}from"./app-shell-CLFgneCT.js";import{c as V}from"./page-layout-DDkSngPm.js";import{c as B}from"./app-header-DeHaskNY.js";import{c as N}from"./page-section-CrtrbsFd.js";import{c as G}from"./card-20Zp1JzI.js";import{c as W,a as z,b as H}from"./table-BqFkyqaa.js";import{c}from"./table-header-cell-BQFJGQJu.js";import{c as j}from"./table-row-Bd8rP5kn.js";import{c as l}from"./table-cell-FJBY3uM0.js";import{c as I}from"./search-input-CzMEtAKB.js";import{c as f}from"./filter-dropdown-trigger-pmZu_dAG.js";import{b as L,c as $,a as y}from"./global-nav-l0iysLZC.js";import{c as g}from"./tag-Di5Xs3Pg.js";import{c as Q}from"./button-CXimPVvh.js";const _=[{name:"2026 Annual Board Effectiveness Survey",surveyType:"Board Effectiveness",group:"Board of Directors",status:"Open",responses:8,due:"Feb 15, 2026",action:"View Results"},{name:"Q1 Committee Performance Review",surveyType:"Committee Effectiveness",group:"Technical Advisory Committee",status:"Open",responses:12,due:"Feb 10, 2026",action:"View Results"},{name:"Foundation-Wide Satisfaction Survey",surveyType:"Member Satisfaction",group:"All Members",status:"Open",responses:247,due:"Jan 31, 2026",action:"View Results"},{name:"Event Feedback - Open Source Summit 2025",surveyType:"Event Feedback",group:"Event Attendees",status:"Closed",responses:342,due:"Dec 15, 2025",action:"View Results"},{name:"Technical Steering Committee Priorities",surveyType:"Strategic Planning",group:"Technical Steering Committee",status:"Open",responses:9,due:"Feb 28, 2026",action:"View Results"},{name:"Q4 2025 Project Health Check",surveyType:"Project Assessment",group:"Project Maintainers",status:"Closed",responses:56,due:"Dec 31, 2025",action:"View Results"},{name:"Contributor Experience Survey",surveyType:"Contributor Feedback",group:"All Contributors",status:"Closed",responses:189,due:"Dec 20, 2025",action:"View Results"},{name:"Working Group Effectiveness Review",surveyType:"Working Group Assessment",group:"Security Working Group",status:"Draft",responses:0,due:"",action:"Edit"},{name:"Mentorship Program Feedback",surveyType:"Program Evaluation",group:"Mentorship Program",status:"Draft",responses:0,due:"Mar 1, 2026",action:"Edit"},{name:"Community Forum Usage Survey",surveyType:"Platform Feedback",group:"All Members",status:"Open",responses:134,due:"Feb 5, 2026",action:"View Results"}];function J(e){const t={Open:1,Draft:2,Closed:3};return[...e].sort((n,s)=>{const a=t[n.status]-t[s.status];if(a!==0)return a;if(!n.due&&!s.due)return 0;if(!n.due)return 1;if(!s.due)return-1;const r=new Date(n.due).getTime(),o=new Date(s.due).getTime();return r-o})}const O=J(_),U=O.slice(0,3);function q(e){const t=document.createElement("span");return t.textContent=e,t.style.color="var(--accent-600)",t.style.textDecoration="none",t}function K(){const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--spacing-8)",e.style.alignItems="center";const t=I({placeholder:"Search surveys…",variant:"toolbar"});return t.style.flex="1",e.appendChild(t),e.appendChild(f({label:"All Groups"})),e.appendChild(f({label:"All Survey Types"})),e.appendChild(f({label:"All Statuses"})),e}function X(e,t){const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.alignItems="center",n.style.padding="var(--spacing-12) 0",n.style.borderTop="1px solid var(--ui-surface-divider)";const s=document.createElement("div"),a=(e-1)*10+1,r=Math.min(e*10,t);s.textContent=`Rows ${a}–${r} of ${t}`,s.style.fontSize="var(--ui-text-body-secondary-font-size)",s.style.color="var(--text-secondary)";const o=document.createElement("div");o.style.display="flex",o.style.gap="var(--spacing-8)";const i=document.createElement("button");i.textContent="Previous",i.disabled=e===1,i.style.fontFamily="var(--ui-text-control-font-family)",i.style.fontSize="var(--ui-text-control-font-size)";const d=document.createElement("button");return d.textContent="Next",d.disabled=e*10>=t,d.style.fontFamily="var(--ui-text-control-font-family)",d.style.fontSize="var(--ui-text-control-font-size)",o.appendChild(i),o.appendChild(d),n.appendChild(s),n.appendChild(o),n}function Y(e){const t=[{key:"name",semanticType:"primary"},{key:"surveyType",semanticType:"categorical"},{key:"group",semanticType:"categorical"},{key:"status",semanticType:"categorical"},{key:"responses",semanticType:"numeric"},{key:"due",semanticType:"meta"},{key:"actions",semanticType:"action"}],n=[c({children:"Survey Name"}),c({children:"Survey Type"}),c({children:"Group"}),c({children:"Status"}),c({children:"Responses",align:"right"}),c({children:"Due"}),c({children:""})],s=e.map(a=>{let r="default";return a.status==="Open"?r="success":(a.status==="Draft"||a.status==="Closed")&&(r="default"),j({clickable:!0,children:[l({children:q(a.name),contentType:"primary"}),l({children:g({children:a.surveyType}),contentType:"secondary"}),l({children:g({children:a.group}),contentType:"secondary"}),l({children:g({children:a.status,variant:r}),contentType:"secondary"}),l({children:a.responses.toString(),contentType:"numeric",align:"right"}),l({children:a.due||"—",contentType:"secondary"}),l({children:a.action,contentType:"action"})]})});return W({columns:t,children:[z(n),H(s)]})}function Z(){return L({children:[$({title:"Product",children:[y({}),y({}),y({}),y({})]})]})}function ee(e){const t=document.createElement("div");return t.style.maxWidth="1280px",t.style.margin="0 auto",t.appendChild(e),t}function te(e={}){const{showFilters:t=!0,showPagination:n=!1,surveys:s=O}=e,a=[];t&&a.push(K()),a.push(Y(s)),n&&a.push(X(1,s.length));const r=[B({title:"Surveys",description:"Collect feedback from your project groups.",actions:Q({variant:"primary"}),dense:!0}),N({dense:!0,children:G({children:a})})],o=V({children:r}),i=M({nav:Z(),content:o});return ee(i)}const ge={title:"3. Page Examples / Surveys",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Surveys Table Page Composition

**Concrete instance of canonical Table Page pattern**

This composition demonstrates the canonical Table Page pattern (defined in
\`docs/page-patterns/table-page.md\`) using Surveys as a concrete example.

### Purpose

This is a SECOND Page Example created to validate the Table Page pattern
against different data characteristics. Surveys intentionally differs from
Votes to test pattern resilience:

- **Longer categorical labels** (e.g. "Annual Board Effectiveness Survey")
- **Higher numeric variance** (responses: 0 → 300+)
- **Different sorting logic** (Open → Draft → Closed, then by Due Date)
- **More filter controls** (3 instead of 2)
- **Different action semantics** (View Results vs Edit)

### Pattern Characteristics

- **Page title == Table title** — "Surveys" (no section titles)
- **One table per page** — canonical constraint
- **Filters inside Card** — above the table
- **Pagination inside Card** — below the table (optional)
- **Semantic column widths** — flexible vs intrinsic
- **Row-level navigation** — clickable by default

### Validation Goals

This example tests whether Table Page handles:
- ✓ Longer categorical labels (tag width pressure)
- ✓ Higher numeric variance (0 → 300+)
- ✓ Different default sorting logic (instance-specific)
- ✓ Additional filter controls (3 vs 2)
- ✓ Different action column semantics

If visual or interaction issues are discovered here, they must be fixed
in components or patterns, NOT patched in this story.
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show search and filter controls"},showPagination:{control:"boolean",description:"Show pagination controls"}},render:e=>te(e)},u={args:{showFilters:!0,showPagination:!1}},p={args:{showFilters:!0,showPagination:!0}},m={args:{showFilters:!1,showPagination:!1,surveys:U}};var h,v,b,T,w;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: false
  }
}`,...(b=(v=u.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:`Default Surveys Table Page composition.

Demonstrates typical table page layout:
- Filters enabled (search + 3 filter dropdowns)
- Pagination disabled (typical small dataset)
- Rows clickable (hover affordance enabled)`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var S,C,P,D,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showPagination: true
  }
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source},description:{story:`Surveys Table Page with pagination.

Demonstrates:
- Pagination row below table
- Pagination inside Card (canonical placement)
- Filters enabled`,...(x=(D=p.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var F,E,k,R,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showPagination: false,
    surveys: minimalSurveysData
  }
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source},description:{story:`Minimal Surveys Table Page.

Demonstrates:
- Minimum viable content (3 rows)
- Filters disabled
- Pagination disabled
- Clean baseline composition`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};const he=["Default","WithPagination","Minimal"];export{u as Default,m as Minimal,p as WithPagination,he as __namedExportsOrder,ge as default};
