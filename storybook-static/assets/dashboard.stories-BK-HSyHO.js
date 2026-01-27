import{c as se}from"./app-shell-CLFgneCT.js";import{c as oe}from"./page-layout-DDkSngPm.js";import{c as ne}from"./app-header-DeHaskNY.js";import{c as f}from"./page-section-CrtrbsFd.js";import{c as ce}from"./metrics-row-c_eElDzF.js";import{c as ie}from"./metric-card-Ba5amjx5.js";import{c as C}from"./card-20Zp1JzI.js";import{c as le,a as de,b as me}from"./table-BqFkyqaa.js";import{c as s}from"./table-header-cell-BQFJGQJu.js";import{c as pe}from"./table-row-Bd8rP5kn.js";import{c as o}from"./table-cell-FJBY3uM0.js";import{c as ue}from"./list-group-oA2mGORs.js";import{c as he}from"./list-item-CxESGsFY.js";import{b as ge,c as be,a as u}from"./global-nav-l0iysLZC.js";function fe(t=3){const e=[s({children:"Name"}),s({children:"Status"}),s({children:"Value",align:"right"})];t>3&&e.push(s({children:"Date"})),t>4&&e.push(s({children:"Category"}));const g=[{name:"Item Alpha",status:"Active",value:"100",date:"2024-01-15",category:"Type A"},{name:"Item Beta",status:"Pending",value:"250",date:"2024-01-14",category:"Type B"},{name:"Item Gamma",status:"Active",value:"175",date:"2024-01-13",category:"Type A"},{name:"Item Delta",status:"Inactive",value:"50",date:"2024-01-12",category:"Type C"}].map(a=>{const r=[o({children:a.name,contentType:"primary"}),o({children:a.status,contentType:"secondary"}),o({children:a.value,contentType:"numeric",align:"right"})];return t>3&&r.push(o({children:a.date,contentType:"muted"})),t>4&&r.push(o({children:a.category,contentType:"secondary"})),pe({children:r})});return le({columns:t,children:[de(e),me(g)]})}function ye(){return ue({children:["Configuration updated","New user registered","Report generated","System backup completed","Cache cleared"].map(e=>he({children:document.createTextNode(e)}))})}function h(t){const e=document.createElement("span");return e.textContent=t,e}function ve(t="dashboard"){return ge({activeItemId:t,children:[be([u({id:"dashboard",children:h("Dashboard")}),u({id:"projects",children:h("Projects")}),u({id:"reports",children:h("Reports")}),u({id:"settings",children:h("Settings")})])]})}function Ce(t){const e=document.createElement("div");return e.style.maxWidth="1280px",e.style.margin="0 auto",e.appendChild(t),e}function we(t={}){const{dense:e=!1,showNav:y=!0,metricsCount:g=3,tableColumns:a=3}=t,r=[],v=[{label:"Total Items",value:"1,234",meta:"All time"},{label:"Active Users",value:"567",meta:"This month"},{label:"Completion Rate",value:"89%",meta:"Average"},{label:"Open Tasks",value:"42",meta:"Pending"},{label:"Revenue",value:"$12.5K",meta:"This quarter"},{label:"Growth",value:"15%",meta:"Year over year"}];for(let b=0;b<Math.min(g,v.length);b++)r.push(ie({...v[b],dense:e}));const ae=oe({dense:e,children:[ne({title:"Dashboard",description:"System composition validation",dense:e}),f({dense:e,children:ce({dense:e,children:r})}),f({dense:e,children:C({dense:e,children:fe(a)})}),f({dense:e,children:C({dense:e,children:ye()})})]}),re=se({nav:y?ve():void 0,content:ae});return Ce(re)}const He={title:"3. Page Examples / Dashboard",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Dashboard Page Example

This is a **system verification artifact**, not a product feature.

### Purpose

- Validates that existing components compose correctly at page scale
- Proves the contract architecture is sound
- Demonstrates the canonical layout hierarchy

### Architecture

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   ├─ PageSection → MetricsRow → MetricCard×N
   ├─ PageSection → Card → Table
   └─ PageSection → Card → ListGroup
\`\`\`

### Rules

- No styling overrides permitted
- No new tokens or props introduced
- All spacing/hierarchy emerges from contracts
- If something looks wrong, fix tokens or contracts — not this story
        `}}},argTypes:{dense:{control:"boolean",description:"Apply dense spacing to all components"},showNav:{control:"boolean",description:"Show navigation sidebar"},metricsCount:{control:{type:"range",min:1,max:6,step:1},description:"Number of metric cards to display"},tableColumns:{control:{type:"range",min:3,max:5,step:1},description:"Number of table columns"}},render:t=>we(t)},n={args:{dense:!1,showNav:!0,metricsCount:3,tableColumns:3}},c={args:{dense:!0,showNav:!0,metricsCount:3,tableColumns:3}},i={args:{dense:!1,showNav:!1,metricsCount:3,tableColumns:3}},l={args:{dense:!1,showNav:!0,metricsCount:6,tableColumns:3}},d={args:{dense:!1,showNav:!0,metricsCount:3,tableColumns:5}},m={args:{dense:!0,showNav:!0,metricsCount:6,tableColumns:5}},p={args:{dense:!1,showNav:!1,metricsCount:1,tableColumns:3}};var w,N,T,D,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    dense: false,
    showNav: true,
    metricsCount: 3,
    tableColumns: 3
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:`Default dashboard with standard spacing.
This is the canonical composition that all other variants derive from.`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var x,A,M,P,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    dense: true,
    showNav: true,
    metricsCount: 3,
    tableColumns: 3
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:`Dense dashboard using dense props where available.
Demonstrates the system's density controls work consistently.`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var I,k,E,G,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    dense: false,
    showNav: false,
    metricsCount: 3,
    tableColumns: 3
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:`Dashboard without navigation sidebar.
Simulates content-focused view or narrower viewport context.`,...(L=(G=i.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var H,B,V,W,j;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    dense: false,
    showNav: true,
    metricsCount: 6,
    tableColumns: 3
  }
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:`Dashboard with many metrics to test MetricsRow wrapping behavior.
Validates that the flex-wrap layout handles overflow correctly.`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.description}}};var O,_,q,z,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dense: false,
    showNav: true,
    metricsCount: 3,
    tableColumns: 5
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:`Dashboard with extended table columns.
Tests table grid layout with more data density.`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};var K,U,Y,$,J;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    dense: true,
    showNav: true,
    metricsCount: 6,
    tableColumns: 5
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:`Dense dashboard with all content maximized.
Stress test for the composition system.`,...(J=($=m.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var Q,X,Z,ee,te;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dense: false,
    showNav: false,
    metricsCount: 1,
    tableColumns: 3
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`Minimal dashboard - single metric, minimal columns.
Tests composition at minimum viable content.`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const Be=["Default","Dense","WithoutNav","ManyMetrics","ExtendedTable","DenseMaxContent","Minimal"];export{n as Default,c as Dense,m as DenseMaxContent,d as ExtendedTable,l as ManyMetrics,p as Minimal,i as WithoutNav,Be as __namedExportsOrder,He as default};
