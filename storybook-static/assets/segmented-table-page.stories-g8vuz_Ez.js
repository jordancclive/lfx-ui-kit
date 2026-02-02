import{c as ie}from"./app-shell-B-fH2tfM.js";import{c as le}from"./page-layout-DDkSngPm.js";import{c as ce}from"./app-header-BUQjadsZ.js";import{c as w}from"./page-section-CrtrbsFd.js";import{c as S}from"./card-DYIIZwu_.js";import{c as pe,a as de,b as ue}from"./table-grid-CDe4dliu.js";import{c}from"./table-header-cell-DmmpqlN-.js";import{c as me}from"./table-row-DLTwFnyp.js";import{c as p}from"./table-cell-X32ALN1e.js";import{c as he}from"./search-input-CzMEtAKB.js";import{c as ge}from"./filter-dropdown-trigger-pmZu_dAG.js";import{b as ye,c as fe,a as i}from"./global-nav-l0iysLZC.js";import{c as be}from"./tag-Di5Xs3Pg.js";const oe=[{name:"Security Working Group",type:"Working Group",description:"Addresses security vulnerabilities and best practices for project security.",members:8,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Technical Advisory Group",type:"TAG",description:"Provides expert guidance on technical architecture and standards.",members:6,voting:!0,lastUpdated:"Mar 14, 2025"}],re=[{name:"Board of Directors",type:"Other",description:"Provides strategic oversight and governance for the organization.",members:8,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Cloud Native SIG",type:"Special Interest",description:"Focuses on cloud-native practices and containerization strategies.",members:24,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Technical Oversight Committee",type:"TOC",description:"Oversees technical operations and cross-project coordination.",members:11,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Technical Steering Committee",type:"TSC",description:"Guides technical direction and roadmap decisions.",members:12,voting:!0,lastUpdated:"Mar 14, 2025"}],Ge=[{name:"Security Working Group",type:"Working Group",description:"Addresses security vulnerabilities and best practices for project security. This group meets weekly to review CVEs, coordinate disclosure timelines, and establish security guidelines that all projects must follow. Members include security researchers, maintainers, and industry experts.",members:8,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Technical Advisory Group",type:"TAG",description:"Provides expert guidance on technical architecture and standards. The TAG reviews proposed changes to core infrastructure, evaluates new technology adoption, and publishes recommendations for the broader community. Regular office hours are held for project maintainers.",members:6,voting:!0,lastUpdated:"Mar 14, 2025"}],we=[{name:"Board of Directors",type:"Other",description:"Provides strategic oversight and governance for the organization. The board meets quarterly to review financial reports, approve major initiatives, and ensure alignment with the organization's mission. Members are elected by the community for two-year terms.",members:8,voting:!0,lastUpdated:"Mar 14, 2025"},{name:"Cloud Native SIG",type:"Special Interest",description:"Focuses on cloud-native practices and containerization strategies. This special interest group explores Kubernetes, service mesh technologies, and cloud provider integrations. Monthly demos showcase new tools and patterns adopted by member projects.",members:24,voting:!0,lastUpdated:"Mar 14, 2025"}],Se=[oe[0]],ve=[re[0]];function a(e){const t=document.createElement("span");return t.textContent=e,t}function Pe(){const e=document.createElement("span");return e.textContent="✓",e.style.color="var(--success-500)",e}function v(e,t=!1){const r=[c({children:"Name"}),c({children:"Type"}),c({children:"Description"}),c({children:"Members",align:"right"}),c({children:"Voting"}),c({children:"Last Updated"})],n=e.map(o=>{const s=[p({children:o.name,contentType:"primary"}),p({children:be({children:o.type}),contentType:"secondary"}),p({children:o.description,contentType:"secondary"}),p({children:String(o.members),contentType:"numeric",align:"right"}),p({children:o.voting?Pe():a("—")}),p({children:o.lastUpdated,contentType:"muted"})];return me({children:s,clickable:!0})});return pe({columns:6,dense:t,children:[de(r),ue(n)]})}function P(){const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--spacing-8)",e.style.alignItems="center",e.appendChild(he({placeholder:"Search Groups…",variant:"toolbar"})),e.appendChild(ge({label:"All Types"})),e}function T(e){const t=document.createElement("div");return t.textContent=e,t.style.fontFamily="var(--ui-text-section-title-font-family)",t.style.fontSize="var(--ui-text-section-title-font-size)",t.style.fontWeight="var(--ui-text-section-title-font-weight)",t.style.lineHeight="var(--ui-text-section-title-line-height)",t.style.color="var(--text-primary)",t.style.marginBottom="var(--spacing-12)",t}function F(e=1,t=42){const r=document.createElement("div");r.style.display="flex",r.style.justifyContent="space-between",r.style.alignItems="center";const n=document.createElement("span");n.textContent=`Rows ${(e-1)*10+1}–${Math.min(e*10,t)} of ${t}`,n.style.fontFamily="var(--ui-text-body-secondary-font-family)",n.style.fontSize="var(--ui-text-body-secondary-font-size)",n.style.color="var(--text-secondary)";const o=document.createElement("div");o.style.display="flex",o.style.gap="var(--spacing-8)";const s=document.createElement("button");s.textContent="Previous",s.disabled=e===1,s.style.fontFamily="var(--ui-text-control-font-family)",s.style.fontSize="var(--ui-text-control-font-size)";const l=document.createElement("button");return l.textContent="Next",l.disabled=e*10>=t,l.style.fontFamily="var(--ui-text-control-font-family)",l.style.fontSize="var(--ui-text-control-font-size)",o.appendChild(s),o.appendChild(l),r.appendChild(n),r.appendChild(o),r}function Te(e="groups"){return ye({activeItemId:e,children:[fe([i({id:"dashboard",children:a("Dashboard")}),i({id:"mailing-lists",children:a("Mailing Lists")}),i({id:"votes",children:a("Votes")}),i({id:"surveys",children:a("Surveys")}),i({id:"drive",children:a("Drive")}),i({id:"groups",children:a("Groups")}),i({id:"projects",children:a("Projects")}),i({id:"settings",children:a("Settings")})])]})}function Fe(e){const t=document.createElement("div");return t.style.maxWidth="1280px",t.style.margin="0 auto",t.appendChild(e),t}function Ce(e={}){const{dense:t=!1,myGroups:r=oe,otherGroups:n=re,myGroupsShowFilters:o=!0,myGroupsShowPagination:s=!1,otherGroupsShowFilters:l=!1,otherGroupsShowPagination:ne=!1}=e,G=[ce({title:"Groups",description:"A group is a team of people like committees, boards, or working groups organized to collaborate across your project.",dense:t})],f=[];o&&f.push(P()),f.push(v(r,t)),s&&f.push(F(1,r.length)),G.push(w({dense:!0,children:[T("My Groups"),S({dense:t,children:f})]}));const b=[];l&&b.push(P()),b.push(v(n,t)),ne&&b.push(F(1,n.length)),G.push(w({dense:!0,children:[T("Other Groups"),S({dense:t,children:b})]}));const se=le({dense:t,children:G}),ae=ie({nav:Te(),content:se});return Fe(ae)}const Re={title:"2. Page Patterns / 2. Segmented Table Page",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Segmented Table Page Composition

**Pattern with Groups Example**

This composition demonstrates the Segmented Table Page pattern using Groups
(My Groups, Other Groups) as a concrete example.

A segmented table page is composed of multiple independent table blocks.
Each table block can independently declare filters and pagination.

### Pattern Characteristics

- **Multiple tables per page** (My Groups, Other Groups)
- **Section titles** (required per table block)
- **Independent table blocks** (each has its own optional filters/pagination)
- **No position-based assumptions** (any block can have filters/pagination)

### Table Block Structure

Each table block consists of:
1. **Section Title** (required) — sits outside Card
2. **Card** containing:
   - **(Optional)** Filter Row — SearchInput + FilterDropdownTrigger
   - **(Required)** Table — with semantic column widths
   - **(Optional)** Pagination Row — pagination controls placeholder

### Architecture

\`\`\`
AppHeader (title: "Groups")
└─ PageSection (dense: true)
   ├─ Table Block 1 ("My Groups")
   │  ├─ Section Title
   │  └─ Card
   │     ├─ (optional) Filter Row
   │     ├─ Table
   │     └─ (optional) Pagination Row
   └─ Table Block 2 ("Other Groups")
      ├─ Section Title
      └─ Card
         ├─ (optional) Filter Row
         ├─ Table
         └─ (optional) Pagination Row
\`\`\`

### Independent Block Controls

Each table block independently declares:
- \`showFilters\` — whether to render filter row
- \`showPagination\` — whether to render pagination row

No assumptions are made based on:
- Block position (top vs bottom)
- Block name (My Groups vs Other Groups)
- Table content

### Key Differences from Canonical Table Page

| Aspect | Segmented Table Page | Table Page (Canonical) |
|--------|----------------------|------------------------|
| Tables | Multiple | Single |
| Section Titles | Yes (per block) | None |
| Page Title | != Section titles | == Table title |
| Example Usage | Groups, Projects (future) | Most pages |

### What This Validates

- Multiple independent table blocks compose cleanly
- Filters can be added per table block
- Pagination can be added per table block
- Card surfaces behave consistently across blocks
- PageSection spacing scales across variants
- Tables support real product density
- Column semantics work via composition

### Composition Rules

- No styling overrides allowed
- No new tokens or props introduced
- If something looks wrong, fix in:
  - tokens
  - component contracts
  - or missing pattern components
- Never in this story
        `}}},argTypes:{dense:{control:"boolean",description:"Apply dense spacing to all components"},myGroupsShowFilters:{control:"boolean",description:"Show filter row for My Groups table block"},myGroupsShowPagination:{control:"boolean",description:"Show pagination row for My Groups table block"},otherGroupsShowFilters:{control:"boolean",description:"Show filter row for Other Groups table block"},otherGroupsShowPagination:{control:"boolean",description:"Show pagination row for Other Groups table block"}},render:e=>Ce(e)},d={args:{dense:!1,myGroupsShowFilters:!0,myGroupsShowPagination:!1,otherGroupsShowFilters:!1,otherGroupsShowPagination:!1}},u={args:{dense:!0,myGroupsShowFilters:!0,myGroupsShowPagination:!1,otherGroupsShowFilters:!1,otherGroupsShowPagination:!1}},m={args:{dense:!1,myGroupsShowFilters:!1,myGroupsShowPagination:!1,otherGroupsShowFilters:!1,otherGroupsShowPagination:!1}},h={args:{dense:!1,myGroupsShowFilters:!0,myGroupsShowPagination:!0,otherGroupsShowFilters:!1,otherGroupsShowPagination:!0}},g={args:{dense:!1,myGroupsShowFilters:!0,myGroupsShowPagination:!1,otherGroupsShowFilters:!1,otherGroupsShowPagination:!1,myGroups:Ge,otherGroups:we}},y={args:{dense:!1,myGroupsShowFilters:!0,myGroupsShowPagination:!1,otherGroupsShowFilters:!1,otherGroupsShowPagination:!1,myGroups:Se,otherGroups:ve}};var C,k,M,x,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false
  }
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:`Default Segmented Table Page composition (Groups example).

Demonstrates typical segmented table page layout:
- First table block (My Groups) has filters (typical user workflow)
- Second table block (Other Groups) has no filters (browse-only)
- No pagination (typical small dataset)`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var O,E,A,N,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dense: true,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false
  }
}`,...(A=(E=u.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:`Dense variant of Segmented Table Page.

Demonstrates:
- Dense mode across all components
- First table block (My Groups) has filters
- Scanability maintained at higher density`,...(z=(N=u.parameters)==null?void 0:N.docs)==null?void 0:z.description}}};var B,U,j,I,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    dense: false,
    myGroupsShowFilters: false,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false
  }
}`,...(j=(U=m.parameters)==null?void 0:U.docs)==null?void 0:j.source},description:{story:`Segmented Table Page without filters.

Demonstrates:
- Clean baseline with no filter rows
- Both table blocks filter-free
- Layout resilience without controls`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.description}}};var W,L,H,q,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: true,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: true
  }
}`,...(H=(L=h.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:`Segmented Table Page with pagination.

Demonstrates:
- Pagination row below each table
- Independent pagination per table block
- Pagination placeholder sits directly below table`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var $,K,_,Y,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
    myGroups: longDescriptionMyGroups,
    otherGroups: longDescriptionOtherGroups
  }
}`,...(_=(K=g.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:`Segmented Table Page with long descriptions.

Demonstrates:
- Increased description text length
- Table wrapping behavior
- First table block (My Groups) has filters`,...(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var Q,X,Z,ee,te;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dense: false,
    myGroupsShowFilters: true,
    myGroupsShowPagination: false,
    otherGroupsShowFilters: false,
    otherGroupsShowPagination: false,
    myGroups: minimalMyGroups,
    otherGroups: minimalOtherGroups
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`Minimal Segmented Table Page.

Demonstrates:
- Minimum viable content (one row per table)
- First table block (My Groups) has filters
- Clean baseline composition`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const We=["Default","Dense","WithoutFilters","WithPagination","LongDescriptions","Minimal"];export{d as Default,u as Dense,g as LongDescriptions,y as Minimal,h as WithPagination,m as WithoutFilters,We as __namedExportsOrder,Re as default};
