import{c as a}from"./chart-card-kr79obkB.js";import"./card-DYIIZwu_.js";const ue={title:"1. Components / 2. Molecules / 5. ChartCard",tags:["autodocs"],argTypes:{title:{control:"text",description:"Chart card title (required)"},dense:{control:"boolean",description:"Use dense spacing (inherited from Card)",defaultValue:!1}},parameters:{docs:{description:{component:`# ChartCard

**Level 2 — Molecule Component**

ChartCard is a minimal structural wrapper around Card that provides named slots
for the observed dashboard chart-card pattern.

---

## Purpose

ChartCard exists to:
- **Reduce duplication** across dashboard implementations
- **Provide a shared structural shell** for chart-based metric displays
- **Encode interaction defaults** (click → drawer expectation)
- **Preserve future flexibility** by avoiding visual or chart-type lock-in

ChartCard is intentionally minimal and underpowered.

---

## Structure (Fixed)

\`\`\`
ChartCard (extends Card)
└─ Container
   ├─ Header (title) — required
   ├─ Value slot — optional
   ├─ Chart slot — optional
   └─ Meta slot — optional
\`\`\`

All slots accept pre-rendered \`HTMLElement\` only.

---

## When to Use

Use ChartCard when:
- Building **dashboard overview surfaces** with chart-based metrics
- Implementing **MetricCluster sections** (chart cards are typical items)
- Need a **structural abstraction** for observed chart-card pattern
- Want **consistent click affordance** and interaction expectations

**Typical Use Cases:**
- KPI summaries with sparklines
- Contribution activity indicators
- Project health metrics
- Resource utilization summaries

---

## When NOT to Use

Do NOT use ChartCard when:
- Building **deep analytical workflows** (use dedicated analytics pages)
- Displaying **detailed data tables** (use Table Page or DataTable)
- Chart is **full-page or full-section** (use embedded chart directly)
- Need **complex interactive charts** (use dedicated charting component)
- Display is **text-only** with no visual summary (use Card directly)

---

## Interaction Model

**Default Expectation:**
- ChartCard is **clickable** (when \`onClick\` is provided)
- Click opens a **RIGHT-SIDE DRAWER** for detail exploration
- Drawer is NOT implemented by this component

**Interaction Surface Contract:**

Interaction behavior follows the system-wide contract defined in  
**0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.

- ChartCard click → **Drawer** (preserves dashboard context)
- Deep analytics → **Page** (full navigation, e.g., LFX Insights)
- NOT Modal (modals block context and are for short interruptions)

---

## Relationship to Other Patterns

**Lives INSIDE:**
- **MetricCluster** (dashboard section primitive)
- **Dashboard Page Pattern**

**Extends:**
- **Card** (Level 2 component)

**Interacts WITH:**
- **Drawer** (detail surface for drill-down)

**Composition Hierarchy:**
\`\`\`
Dashboard Page
└─ MetricCluster (section primitive)
   ├─ ChartCard
   ├─ ChartCard
   └─ ChartCard
        └─ Drawer (on click)
\`\`\`

---

## What ChartCard Owns

ChartCard owns:
- **Structural layout** (header, value, chart, meta slots)
- **Click affordance** (cursor, hover state)
- **Default interaction expectation** (→ drawer)

---

## What ChartCard Does NOT Own

ChartCard does NOT own:
- **Chart rendering** (caller provides chart element)
- **Metric formatting** (caller provides value element)
- **Data fetching** (caller handles data)
- **Drawer implementation** (caller implements drawer)
- **Visual design opinions** (intentionally minimal)
- **Chart types or variants** (no sparkline vs bar logic)

---

## Important Non-Normative Disclaimer

> **This component abstracts observed structure only.**
>
> ChartCard provides a minimal structural shell based on the observed
> dashboard chart-card pattern documented in **Dashboard Page Pattern**.
>
> **Visual design and chart types are intentionally NOT locked.**
>
> This component exists to:
> - Reduce duplication
> - Provide shared vocabulary
> - Encode interaction defaults
>
> It does NOT lock:
> - Chart rendering approaches
> - Visual styling beyond structure
> - Metric formatting logic
> - Dashboard composition rules
>
> Future refinements to chart-card patterns may evolve this component
> or introduce specializations (e.g., SparklineCard, BarCard, etc.).

---

## Token Bindings

ChartCard inherits all Card tokens and uses:

| Property | Token |
|----------|-------|
| Header font size | \`--ui-text-label-font-size\` |
| Meta font size | \`--ui-text-body-secondary-font-size\` |
| Container gap | \`--spacing-12\` |
| Text colors | \`--text-secondary\`, \`--text-muted\` |

No new tokens are introduced by ChartCard.`}}}};function o(e){const t=document.createElement("div");return t.style.fontSize="var(--ui-text-page-title-font-size)",t.style.fontWeight="var(--ui-text-page-title-font-weight)",t.style.color="var(--text-primary)",t.textContent=e,t}function s(){const e=document.createElement("div");return e.style.height="40px",e.style.background="linear-gradient(to right, var(--ui-accent-bg), var(--ui-accent-bg-hover))",e.style.borderRadius="var(--radius-sm)",e.style.opacity="0.6",e}function ie(){const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--spacing-4)",e.style.height="60px",e.style.alignItems="flex-end",["40%","70%","50%","90%","65%","80%"].forEach(r=>{const c=document.createElement("div");c.style.flex="1",c.style.height=r,c.style.background="var(--ui-accent-bg)",c.style.borderRadius="var(--radius-sm) var(--radius-sm) 0 0",e.appendChild(c)}),e}function n(e){const t=document.createElement("div");return t.textContent=e,t}const i={render:()=>a({title:"Active Contributors",chart:s(),onClick:()=>console.log("ChartCard clicked - should open drawer")})},l={render:()=>a({title:"Total Revenue",value:o("$847,293"),chart:s(),meta:n("+8.1% from last month"),onClick:()=>console.log("ChartCard clicked - should open drawer")})},d={render:()=>a({title:"Contributions by Project",value:o("1,234"),chart:ie(),meta:n("Last 7 days"),onClick:()=>console.log("ChartCard clicked - should open drawer")})},u={render:()=>a({title:"Open Issues",value:o("42"),meta:n("Across 12 repositories"),onClick:()=>console.log("ChartCard clicked - should open drawer")})},p={render:()=>a({title:"Status: Healthy",onClick:()=>console.log("ChartCard clicked - should open drawer")})},m={render:()=>a({title:"Static Metric",value:o("99.97%"),meta:n("System uptime")})},h={render:()=>a({title:"Active Users",value:o("2,847"),chart:s(),meta:n("+3.4% today"),dense:!0,onClick:()=>console.log("ChartCard clicked - should open drawer")})},C={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--spacing-16)",e.style.padding="var(--spacing-24)",e.style.background="var(--ui-surface-page)",[a({title:"Active Contributors",value:o("1,234"),chart:s(),meta:n("+8.1%"),onClick:()=>console.log("Card 1 clicked")}),a({title:"Open PRs",value:o("567"),chart:s(),meta:n("+12 today"),onClick:()=>console.log("Card 2 clicked")}),a({title:"Code Coverage",value:o("89%"),chart:ie(),meta:n("Stable"),onClick:()=>console.log("Card 3 clicked")})].forEach(r=>{r.style.flex="1",r.style.minWidth="0",e.appendChild(r)}),e}},y={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="baseline",e.style.gap="var(--spacing-8)";const t=document.createElement("span");t.style.fontSize="var(--ui-text-page-title-font-size)",t.style.fontWeight="var(--ui-text-page-title-font-weight)",t.style.color="var(--text-primary)",t.textContent="12,847";const r=document.createElement("span");return r.style.fontSize="var(--ui-text-body-font-size)",r.style.color="var(--text-secondary)",r.textContent="requests",e.appendChild(t),e.appendChild(r),a({title:"API Usage",value:e,chart:s(),meta:n("Last 24 hours"),onClick:()=>console.log("ChartCard clicked")})}};var g,v,f,k,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Active Contributors',
    chart: createSparklinePlaceholder(),
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"Default chart card with title and chart slot.",...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.description}}};var x,w,E,S,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Total Revenue',
    value: createValueElement('$847,293'),
    chart: createSparklinePlaceholder(),
    meta: createMetaElement('+8.1% from last month'),
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source},description:{story:"Chart card with value, chart, and meta slots.",...(M=(S=l.parameters)==null?void 0:S.docs)==null?void 0:M.description}}};var P,D,V,I,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Contributions by Project',
    value: createValueElement('1,234'),
    chart: createBarChartPlaceholder(),
    meta: createMetaElement('Last 7 days'),
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source},description:{story:"Chart card with bar chart.",...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var W,N,z,O,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Open Issues',
    value: createValueElement('42'),
    meta: createMetaElement('Across 12 repositories'),
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(z=(N=u.parameters)==null?void 0:N.docs)==null?void 0:z.source},description:{story:"Chart card with meta but no chart.",...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var A,B,L,U,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Status: Healthy',
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Minimal chart card with title only.",...(H=(U=p.parameters)==null?void 0:U.docs)==null?void 0:H.description}}};var q,j,F,_,$;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Static Metric',
    value: createValueElement('99.97%'),
    meta: createMetaElement('System uptime')
  })
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"Non-clickable chart card (no onClick handler).",...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.description}}};var G,K,X,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => createChartCard({
    title: 'Active Users',
    value: createValueElement('2,847'),
    chart: createSparklinePlaceholder(),
    meta: createMetaElement('+3.4% today'),
    dense: true,
    onClick: () => console.log('ChartCard clicked - should open drawer')
  })
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Dense variant.",...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,Z,ee,te,ae;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-16)';
    container.style.padding = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    const cards = [createChartCard({
      title: 'Active Contributors',
      value: createValueElement('1,234'),
      chart: createSparklinePlaceholder(),
      meta: createMetaElement('+8.1%'),
      onClick: () => console.log('Card 1 clicked')
    }), createChartCard({
      title: 'Open PRs',
      value: createValueElement('567'),
      chart: createSparklinePlaceholder(),
      meta: createMetaElement('+12 today'),
      onClick: () => console.log('Card 2 clicked')
    }), createChartCard({
      title: 'Code Coverage',
      value: createValueElement('89%'),
      chart: createBarChartPlaceholder(),
      meta: createMetaElement('Stable'),
      onClick: () => console.log('Card 3 clicked')
    })];
    cards.forEach(card => {
      card.style.flex = '1';
      card.style.minWidth = '0';
      container.appendChild(card);
    });
    return container;
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Multiple chart cards in a row (simulating MetricCluster).",...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var re,ne,oe,se,ce;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const customValue = document.createElement('div');
    customValue.style.display = 'flex';
    customValue.style.alignItems = 'baseline';
    customValue.style.gap = 'var(--spacing-8)';
    const primary = document.createElement('span');
    primary.style.fontSize = 'var(--ui-text-page-title-font-size)';
    primary.style.fontWeight = 'var(--ui-text-page-title-font-weight)';
    primary.style.color = 'var(--text-primary)';
    primary.textContent = '12,847';
    const unit = document.createElement('span');
    unit.style.fontSize = 'var(--ui-text-body-font-size)';
    unit.style.color = 'var(--text-secondary)';
    unit.textContent = 'requests';
    customValue.appendChild(primary);
    customValue.appendChild(unit);
    return createChartCard({
      title: 'API Usage',
      value: customValue,
      chart: createSparklinePlaceholder(),
      meta: createMetaElement('Last 24 hours'),
      onClick: () => console.log('ChartCard clicked')
    });
  }
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Chart card with custom value element (demonstrates flexibility).",...(ce=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ce.description}}};const pe=["Default","WithValue","WithBarChart","WithMeta","Minimal","NonClickable","Dense","InMetricCluster","CustomValue"];export{y as CustomValue,i as Default,h as Dense,C as InMetricCluster,p as Minimal,m as NonClickable,d as WithBarChart,u as WithMeta,l as WithValue,pe as __namedExportsOrder,ue as default};
