import{c as l}from"./metrics-row-c_eElDzF.js";import{c as ce}from"./card-DYIIZwu_.js";import{c as de}from"./page-layout-DDkSngPm.js";import{c as C}from"./page-section-CrtrbsFd.js";import{c as ie}from"./app-header-BUQjadsZ.js";function e(a){const r=ce({dense:a.dense});if(r.style.padding=a.dense?"var(--spacing-12)":"var(--spacing-16)",r.style.minHeight="120px",r.style.display="flex",r.style.flexDirection="column",r.style.gap="var(--spacing-8)",a.label){const n=document.createElement("div");n.textContent=a.label,n.style.fontSize="var(--ui-text-label-font-size)",n.style.color="var(--text-secondary)",n.style.fontWeight="600",r.appendChild(n)}const t=document.createElement("div");if(t.textContent=a.value,t.style.fontSize="var(--ui-text-page-title-font-size)",t.style.fontWeight="var(--ui-text-page-title-font-weight)",t.style.color="var(--text-primary)",r.appendChild(t),a.meta){const n=document.createElement("div");n.textContent=a.meta,n.style.fontSize="var(--ui-text-body-secondary-font-size)",n.style.color="var(--text-muted)",r.appendChild(n)}return r}const Ce={title:"1. Components / 3. Organisms / 6. MetricsRow",tags:["autodocs"],argTypes:{dense:{control:"boolean",description:"Use reduced spacing between cards",defaultValue:!1},align:{control:"select",options:["start","center","stretch"],description:"Vertical alignment of cards",defaultValue:"stretch"},equalWidth:{control:"boolean",description:"Make all cards equal width",defaultValue:!1}},parameters:{docs:{description:{component:`# MetricsRow

**Tier 3 — Layout / Composition Component**

MetricsRow arranges multiple chart cards in a horizontal row.
It standardizes spacing, wrapping, and alignment for metric groups.

## Ownership Boundaries

**MetricsRow owns:**
- Horizontal spacing between chart cards
- Wrapping behavior at smaller widths
- Alignment of cards within the row

**MetricsRow does NOT own:**
- Card surface (delegated to Card)
- Chart card layout or typography (delegated to ChartCard in future)
- Data semantics or calculation
- Color or trend semantics
- Page-level spacing (delegated to PageSection)

## Token Bindings

| Property | Token |
|----------|-------|
| Gap | \`--ui-metrics-row-gap\` |
| Gap (dense) | \`--ui-metrics-row-gap-dense\` |

## Important Notes

- **MetricsRow owns layout only**
- **Chart cards own content and hierarchy**
- **Card owns surface**
- **No visual semantics live here**`}}}},o={render:()=>l({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1% from last month",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4% from last month",dense:!0}),e({label:"Conversion",value:"3.24%",meta:"-0.2% from last month",dense:!0})],equalWidth:!0})},d={render:()=>l({children:[e({label:"Total Users",value:"48,293",meta:"All time",dense:!0}),e({label:"Active Today",value:"2,847",meta:"Last 24 hours",dense:!0})],equalWidth:!0})},c={render:()=>{const a=document.createElement("div");return a.style.maxWidth="800px",a.appendChild(l({children:[e({label:"Revenue",value:"$847K",dense:!0}),e({label:"Orders",value:"12,847",dense:!0}),e({label:"Users",value:"48,293",dense:!0}),e({label:"Conversion",value:"3.24%",dense:!0}),e({label:"Avg. Order",value:"$127.50",dense:!0}),e({label:"Churn",value:"2.1%",dense:!0})],equalWidth:!0})),a}},i={render:()=>l({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1%",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4%",dense:!0}),e({label:"Conversion",value:"3.24%",meta:"-0.2%",dense:!0})],dense:!0,equalWidth:!0})},u={render:()=>l({children:[e({label:"Small",value:"42",dense:!0}),e({label:"Medium Value",value:"$12,345",meta:"Some additional context",dense:!0}),e({label:"Large",value:"999",dense:!0})],align:"center"})},p={render:()=>{const a=l({children:[e({label:"Total Revenue",value:"$2,847,293",meta:"+12.1% YoY",dense:!0}),e({label:"Active Users",value:"48,293",meta:"+5.4% MoM",dense:!0}),e({label:"Avg. Order Value",value:"$127.50",meta:"+2.8% MoM",dense:!0}),e({label:"Conversion Rate",value:"4.32%",meta:"-0.3% MoM",dense:!0})],equalWidth:!0}),r=de({children:[C({children:a})]}),t=document.createElement("div");return t.style.background="var(--ui-surface-page)",t.style.padding="var(--spacing-24)",t.style.minHeight="300px",t.appendChild(r),t}},m={render:()=>{const a=ie({title:"Dashboard",description:"Overview of key metrics"}),r=l({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1% from last month",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4% from last month",dense:!0}),e({label:"Customers",value:"3,284",meta:"+12.5% from last month",dense:!0})],equalWidth:!0}),t=de({children:[C({children:a}),C({children:r})]}),n=document.createElement("div");return n.style.background="var(--ui-surface-page)",n.style.padding="var(--spacing-24)",n.style.minHeight="400px",n.appendChild(t),n}},h={render:()=>l({children:[e({label:"Response Time",value:"142ms",meta:"P95 latency",dense:!0}),e({label:"Uptime",value:"99.97%",meta:"Last 30 days",dense:!0}),e({label:"Requests",value:"1.2M",meta:"This month",dense:!0}),e({label:"Errors",value:"0.03%",meta:"Error rate",dense:!0})],equalWidth:!0})},v={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--spacing-32)",a.style.background="var(--ui-surface-page)",a.style.padding="var(--spacing-24)";const r=document.createElement("div"),t=document.createElement("p");t.textContent="Default Spacing (16px)",t.style.color="var(--text-secondary)",t.style.marginBottom="var(--spacing-8)",t.style.fontSize="var(--ui-text-label-font-size)",r.appendChild(t),r.appendChild(l({children:[e({label:"Metric 1",value:"$100",dense:!0}),e({label:"Metric 2",value:"$200",dense:!0}),e({label:"Metric 3",value:"$300",dense:!0})],equalWidth:!0})),a.appendChild(r);const n=document.createElement("div"),s=document.createElement("p");return s.textContent="Dense Spacing (12px)",s.style.color="var(--text-secondary)",s.style.marginBottom="var(--spacing-8)",s.style.fontSize="var(--ui-text-label-font-size)",n.appendChild(s),n.appendChild(l({children:[e({label:"Metric 1",value:"$100",dense:!0}),e({label:"Metric 2",value:"$200",dense:!0}),e({label:"Metric 3",value:"$300",dense:!0})],dense:!0,equalWidth:!0})),a.appendChild(n),a}};var g,b,y,f,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createPlaceholderChartCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1% from last month',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4% from last month',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2% from last month',
      dense: true
    })],
    equalWidth: true
  })
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Default metrics row with 3 chart cards.",...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var M,x,P,S,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createPlaceholderChartCard({
      label: 'Total Users',
      value: '48,293',
      meta: 'All time',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Active Today',
      value: '2,847',
      meta: 'Last 24 hours',
      dense: true
    })],
    equalWidth: true
  })
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source},description:{story:"Two metrics in a row.",...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var W,$,L,E,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '800px';
    wrapper.appendChild(createMetricsRow({
      children: [createPlaceholderChartCard({
        label: 'Revenue',
        value: '$847K',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Orders',
        value: '12,847',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Users',
        value: '48,293',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Conversion',
        value: '3.24%',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Avg. Order',
        value: '$127.50',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Churn',
        value: '2.1%',
        dense: true
      })],
      equalWidth: true
    }));
    return wrapper;
  }
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source},description:{story:"Many metrics demonstrating wrapping behavior.",...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.description}}};var D,O,T,z,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createPlaceholderChartCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1%',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4%',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2%',
      dense: true
    })],
    dense: true,
    equalWidth: true
  })
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:"Dense spacing variant.",...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var k,V,U,H,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createPlaceholderChartCard({
      label: 'Small',
      value: '42',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Medium Value',
      value: '$12,345',
      meta: 'Some additional context',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Large',
      value: '999',
      dense: true
    })],
    align: 'center'
  })
}`,...(U=(V=u.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"Center-aligned cards.",...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var I,Y,N,G,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const metricsRow = createMetricsRow({
      children: [createPlaceholderChartCard({
        label: 'Total Revenue',
        value: '$2,847,293',
        meta: '+12.1% YoY',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Active Users',
        value: '48,293',
        meta: '+5.4% MoM',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Avg. Order Value',
        value: '$127.50',
        meta: '+2.8% MoM',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Conversion Rate',
        value: '4.32%',
        meta: '-0.3% MoM',
        dense: true
      })],
      equalWidth: true
    });
    const layout = createPageLayout({
      children: [createPageSection({
        children: metricsRow
      })]
    });
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '300px';
    wrapper.appendChild(layout);
    return wrapper;
  }
}`,...(N=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:N.source},description:{story:"MetricsRow used in context with PageLayout.",...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var _,j,F,J,Q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const header = createAppHeader({
      title: 'Dashboard',
      description: 'Overview of key metrics'
    });
    const metricsRow = createMetricsRow({
      children: [createPlaceholderChartCard({
        label: 'Revenue',
        value: '$847,293',
        meta: '+8.1% from last month',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Orders',
        value: '12,847',
        meta: '+3.4% from last month',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Customers',
        value: '3,284',
        meta: '+12.5% from last month',
        dense: true
      })],
      equalWidth: true
    });
    const layout = createPageLayout({
      children: [createPageSection({
        children: header
      }), createPageSection({
        children: metricsRow
      })]
    });
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '400px';
    wrapper.appendChild(layout);
    return wrapper;
  }
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"MetricsRow used in context with PageSection.",...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee,ae,ne;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createPlaceholderChartCard({
      label: 'Response Time',
      value: '142ms',
      meta: 'P95 latency',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Uptime',
      value: '99.97%',
      meta: 'Last 30 days',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Requests',
      value: '1.2M',
      meta: 'This month',
      dense: true
    }), createPlaceholderChartCard({
      label: 'Errors',
      value: '0.03%',
      meta: 'Error rate',
      dense: true
    })],
    equalWidth: true
  })
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Mixed metric values demonstrating flexibility.",...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var te,re,le,se,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-32)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';

    // Default spacing
    const defaultSection = document.createElement('div');
    const defaultLabel = document.createElement('p');
    defaultLabel.textContent = 'Default Spacing (16px)';
    defaultLabel.style.color = 'var(--text-secondary)';
    defaultLabel.style.marginBottom = 'var(--spacing-8)';
    defaultLabel.style.fontSize = 'var(--ui-text-label-font-size)';
    defaultSection.appendChild(defaultLabel);
    defaultSection.appendChild(createMetricsRow({
      children: [createPlaceholderChartCard({
        label: 'Metric 1',
        value: '$100',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Metric 2',
        value: '$200',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Metric 3',
        value: '$300',
        dense: true
      })],
      equalWidth: true
    }));
    container.appendChild(defaultSection);

    // Dense spacing
    const denseSection = document.createElement('div');
    const denseLabel = document.createElement('p');
    denseLabel.textContent = 'Dense Spacing (12px)';
    denseLabel.style.color = 'var(--text-secondary)';
    denseLabel.style.marginBottom = 'var(--spacing-8)';
    denseLabel.style.fontSize = 'var(--ui-text-label-font-size)';
    denseSection.appendChild(denseLabel);
    denseSection.appendChild(createMetricsRow({
      children: [createPlaceholderChartCard({
        label: 'Metric 1',
        value: '$100',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Metric 2',
        value: '$200',
        dense: true
      }), createPlaceholderChartCard({
        label: 'Metric 3',
        value: '$300',
        dense: true
      })],
      dense: true,
      equalWidth: true
    }));
    container.appendChild(denseSection);
    return container;
  }
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"Comparison: Default vs Dense spacing.",...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};const ge=["Default","TwoMetrics","ManyMetrics","Dense","CenterAligned","InContextWithPageLayout","InContextWithPageSection","WithMixedMetricValues","SpacingComparison"];export{u as CenterAligned,o as Default,i as Dense,p as InContextWithPageLayout,m as InContextWithPageSection,c as ManyMetrics,v as SpacingComparison,d as TwoMetrics,h as WithMixedMetricValues,ge as __namedExportsOrder,Ce as default};
