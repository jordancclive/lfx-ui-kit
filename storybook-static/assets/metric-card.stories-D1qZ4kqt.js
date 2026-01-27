import{c as t}from"./metric-card-Ba5amjx5.js";import{c as ue}from"./button-CXimPVvh.js";import{c as ve}from"./page-layout-DDkSngPm.js";import{c as ye}from"./page-section-CrtrbsFd.js";import"./card-20Zp1JzI.js";const Me={title:"1. Components / 2. Level 2 / MetricCard",tags:["autodocs"],argTypes:{label:{control:"text",description:"Optional label above the value"},value:{control:"text",description:"The primary metric value (required)"},meta:{control:"text",description:"Optional supporting text (delta, description)"},dense:{control:"boolean",description:"Use reduced spacing",defaultValue:!1},withBorder:{control:"boolean",description:"Show border around card",defaultValue:!0}},parameters:{docs:{description:{component:`# MetricCard

**Tier 2 — Pattern Component**

MetricCard displays a single metric value in a Card surface.
It standardizes metric hierarchy and layout, not data semantics.

## Ownership Boundaries

**MetricCard owns:**
- Internal layout of label, value, meta, footer
- Typography role usage (via UI role tokens only)
- Spacing between metric elements

**MetricCard does NOT own:**
- Card surface styling (delegated to Card)
- Data formatting logic
- Color semantics of values (positive/negative)
- Icons beyond layout placement

## Token Bindings

| Element | Token | Rationale |
|---------|-------|-----------|
| Label | \`ui.text.label.*\` | Labels are metadata |
| Value | \`ui.text.page-title.*\` | Values are the primary visual element |
| Meta | \`ui.text.body-secondary.*\` | Supporting text, subordinate |

## Important Notes

- **No trend semantics yet** — Positive/negative colors are not implemented
- **No color meaning yet** — All text uses neutral colors
- **Card owns surface** — MetricCard delegates surface styling to Card`}}}},i={render:()=>t({value:"$1,234,567"})},c={render:()=>t({label:"Total Revenue",value:"$1,234,567"})},d={render:()=>t({label:"Monthly Revenue",value:"$1,234,567",meta:"+12.5% from last month"})},p={render:()=>{const e=document.createElement("div");return e.appendChild(ue({label:"View Details",size:"default"})),t({label:"Active Users",value:"8,432",meta:"Updated 5 minutes ago",footer:e})}},m={render:()=>t({label:"Orders",value:"12,847",meta:"+3.4% this week",dense:!0})},u={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--spacing-16)",e.appendChild(t({label:"Response Time",value:"142ms",meta:"P95 latency"})),e.appendChild(t({label:"Uptime",value:"99.97%",meta:"Last 30 days"})),e.appendChild(t({label:"Requests/sec",value:"1,847",meta:"Current rate"})),e}},v={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="var(--spacing-16)",e.appendChild(t({label:"Revenue",value:"$847,293",meta:"+8.1% from last month",dense:!0})),e.appendChild(t({label:"Orders",value:"12,847",meta:"+3.4% from last month",dense:!0})),e.appendChild(t({label:"Conversion",value:"3.24%",meta:"-0.2% from last month",dense:!0})),e}},y={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(4, 1fr)",e.style.gap="var(--spacing-16)",e.appendChild(t({label:"Total Revenue",value:"$2,847,293",meta:"+12.1% YoY",dense:!0})),e.appendChild(t({label:"Active Users",value:"48,293",meta:"+5.4% MoM",dense:!0})),e.appendChild(t({label:"Avg. Order Value",value:"$127.50",meta:"+2.8% MoM",dense:!0})),e.appendChild(t({label:"Conversion Rate",value:"4.32%",meta:"-0.3% MoM",dense:!0}));const a=ve({children:[ye({children:e})]}),n=document.createElement("div");return n.style.background="var(--ui-surface-page)",n.style.padding="var(--spacing-24)",n.style.minHeight="300px",n.appendChild(a),n}},C={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--spacing-24)",e.style.background="var(--ui-surface-page)",e.style.padding="var(--spacing-24)";const a=document.createElement("div"),n=document.createElement("p");n.textContent="Value Only",n.style.color="var(--text-secondary)",n.style.marginBottom="var(--spacing-8)",n.style.fontSize="var(--ui-text-label-font-size)",a.appendChild(n),a.appendChild(t({value:"$1,234,567"})),e.appendChild(a);const h=document.createElement("div"),r=document.createElement("p");r.textContent="With Label",r.style.color="var(--text-secondary)",r.style.marginBottom="var(--spacing-8)",r.style.fontSize="var(--ui-text-label-font-size)",h.appendChild(r),h.appendChild(t({label:"Total Revenue",value:"$1,234,567"})),e.appendChild(h);const b=document.createElement("div"),l=document.createElement("p");l.textContent="With Label + Meta",l.style.color="var(--text-secondary)",l.style.marginBottom="var(--spacing-8)",l.style.fontSize="var(--ui-text-label-font-size)",b.appendChild(l),b.appendChild(t({label:"Monthly Revenue",value:"$1,234,567",meta:"+12.5% from last month"})),e.appendChild(b);const g=document.createElement("div"),o=document.createElement("p");o.textContent="Dense",o.style.color="var(--text-secondary)",o.style.marginBottom="var(--spacing-8)",o.style.fontSize="var(--ui-text-label-font-size)",g.appendChild(o),g.appendChild(t({label:"Active Users",value:"8,432",meta:"+5.2% this week",dense:!0})),e.appendChild(g);const f=document.createElement("div"),s=document.createElement("p");s.textContent="With Footer",s.style.color="var(--text-secondary)",s.style.marginBottom="var(--spacing-8)",s.style.fontSize="var(--ui-text-label-font-size)",f.appendChild(s);const M=document.createElement("div");return M.appendChild(ue({label:"View Report"})),f.appendChild(t({label:"Monthly Sales",value:"$847,293",meta:"Updated just now",footer:M})),e.appendChild(f),e}};var x,E,w,S,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => createMetricCard({
    value: '$1,234,567'
  })
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source},description:{story:"Default metric card with just a value.",...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};var R,$,T,W,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => createMetricCard({
    label: 'Total Revenue',
    value: '$1,234,567'
  })
}`,...(T=($=c.parameters)==null?void 0:$.docs)==null?void 0:T.source},description:{story:"Metric card with a label.",...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.description}}};var B,D,L,U,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => createMetricCard({
    label: 'Monthly Revenue',
    value: '$1,234,567',
    meta: '+12.5% from last month'
  })
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Metric card with meta text (e.g., delta or description).",...(O=(U=d.parameters)==null?void 0:U.docs)==null?void 0:O.description}}};var k,A,P,I,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const footer = document.createElement('div');
    footer.appendChild(createButton({
      label: 'View Details',
      size: 'default'
    }));
    return createMetricCard({
      label: 'Active Users',
      value: '8,432',
      meta: 'Updated 5 minutes ago',
      footer
    });
  }
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:"Metric card with a footer action.",...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var F,Y,j,q,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => createMetricCard({
    label: 'Orders',
    value: '12,847',
    meta: '+3.4% this week',
    dense: true
  })
}`,...(j=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:j.source},description:{story:"Dense variant with reduced spacing.",...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var _,G,J,K,Q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-16)';
    container.appendChild(createMetricCard({
      label: 'Response Time',
      value: '142ms',
      meta: 'P95 latency'
    }));
    container.appendChild(createMetricCard({
      label: 'Uptime',
      value: '99.97%',
      meta: 'Last 30 days'
    }));
    container.appendChild(createMetricCard({
      label: 'Requests/sec',
      value: '1,847',
      meta: 'Current rate'
    }));
    return container;
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Numeric value (demonstrating tabular-nums).",...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Z,ee,te,ne;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = 'var(--spacing-16)';
    container.appendChild(createMetricCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1% from last month',
      dense: true
    }));
    container.appendChild(createMetricCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4% from last month',
      dense: true
    }));
    container.appendChild(createMetricCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2% from last month',
      dense: true
    }));
    return container;
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Multiple cards side-by-side (common dashboard pattern).",...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ae,re,le,oe,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    // Metrics row
    const metricsContainer = document.createElement('div');
    metricsContainer.style.display = 'grid';
    metricsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    metricsContainer.style.gap = 'var(--spacing-16)';
    metricsContainer.appendChild(createMetricCard({
      label: 'Total Revenue',
      value: '$2,847,293',
      meta: '+12.1% YoY',
      dense: true
    }));
    metricsContainer.appendChild(createMetricCard({
      label: 'Active Users',
      value: '48,293',
      meta: '+5.4% MoM',
      dense: true
    }));
    metricsContainer.appendChild(createMetricCard({
      label: 'Avg. Order Value',
      value: '$127.50',
      meta: '+2.8% MoM',
      dense: true
    }));
    metricsContainer.appendChild(createMetricCard({
      label: 'Conversion Rate',
      value: '4.32%',
      meta: '-0.3% MoM',
      dense: true
    }));

    // Page layout
    const layout = createPageLayout({
      children: [createPageSection({
        children: metricsContainer
      })]
    });

    // Wrapper with page background
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '300px';
    wrapper.appendChild(layout);
    return wrapper;
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"MetricCard used in context with PageLayout.",...(se=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var ie,ce,de,pe,me;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';

    // Value only
    const section1 = document.createElement('div');
    const label1 = document.createElement('p');
    label1.textContent = 'Value Only';
    label1.style.color = 'var(--text-secondary)';
    label1.style.marginBottom = 'var(--spacing-8)';
    label1.style.fontSize = 'var(--ui-text-label-font-size)';
    section1.appendChild(label1);
    section1.appendChild(createMetricCard({
      value: '$1,234,567'
    }));
    container.appendChild(section1);

    // With label
    const section2 = document.createElement('div');
    const label2 = document.createElement('p');
    label2.textContent = 'With Label';
    label2.style.color = 'var(--text-secondary)';
    label2.style.marginBottom = 'var(--spacing-8)';
    label2.style.fontSize = 'var(--ui-text-label-font-size)';
    section2.appendChild(label2);
    section2.appendChild(createMetricCard({
      label: 'Total Revenue',
      value: '$1,234,567'
    }));
    container.appendChild(section2);

    // With meta
    const section3 = document.createElement('div');
    const label3 = document.createElement('p');
    label3.textContent = 'With Label + Meta';
    label3.style.color = 'var(--text-secondary)';
    label3.style.marginBottom = 'var(--spacing-8)';
    label3.style.fontSize = 'var(--ui-text-label-font-size)';
    section3.appendChild(label3);
    section3.appendChild(createMetricCard({
      label: 'Monthly Revenue',
      value: '$1,234,567',
      meta: '+12.5% from last month'
    }));
    container.appendChild(section3);

    // Dense
    const section4 = document.createElement('div');
    const label4 = document.createElement('p');
    label4.textContent = 'Dense';
    label4.style.color = 'var(--text-secondary)';
    label4.style.marginBottom = 'var(--spacing-8)';
    label4.style.fontSize = 'var(--ui-text-label-font-size)';
    section4.appendChild(label4);
    section4.appendChild(createMetricCard({
      label: 'Active Users',
      value: '8,432',
      meta: '+5.2% this week',
      dense: true
    }));
    container.appendChild(section4);

    // With footer
    const section5 = document.createElement('div');
    const label5 = document.createElement('p');
    label5.textContent = 'With Footer';
    label5.style.color = 'var(--text-secondary)';
    label5.style.marginBottom = 'var(--spacing-8)';
    label5.style.fontSize = 'var(--ui-text-label-font-size)';
    section5.appendChild(label5);
    const footer = document.createElement('div');
    footer.appendChild(createButton({
      label: 'View Report'
    }));
    section5.appendChild(createMetricCard({
      label: 'Monthly Sales',
      value: '$847,293',
      meta: 'Updated just now',
      footer
    }));
    container.appendChild(section5);
    return container;
  }
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"All variants for comparison.",...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};const xe=["Default","WithLabel","WithMeta","WithFooter","Dense","NumericValue","MultipleCards","InContextWithPageLayout","AllVariants"];export{C as AllVariants,i as Default,m as Dense,y as InContextWithPageLayout,v as MultipleCards,u as NumericValue,p as WithFooter,c as WithLabel,d as WithMeta,xe as __namedExportsOrder,Me as default};
