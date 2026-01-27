import{c as t}from"./metrics-row-c_eElDzF.js";import{c as e}from"./metric-card-Ba5amjx5.js";import{c as oe}from"./page-layout-DDkSngPm.js";import{c as g}from"./page-section-CrtrbsFd.js";import{c as ie}from"./app-header-DeHaskNY.js";import"./card-20Zp1JzI.js";const ge={title:"1. Components / 3. Level 3 / MetricsRow",tags:["autodocs"],argTypes:{dense:{control:"boolean",description:"Use reduced spacing between cards",defaultValue:!1},align:{control:"select",options:["start","center","stretch"],description:"Vertical alignment of cards",defaultValue:"stretch"},equalWidth:{control:"boolean",description:"Make all cards equal width",defaultValue:!1}},parameters:{docs:{description:{component:`# MetricsRow

**Tier 3 — Layout / Composition Component**

MetricsRow arranges multiple MetricCard components in a horizontal row.
It standardizes spacing, wrapping, and alignment for metric groups.

## Ownership Boundaries

**MetricsRow owns:**
- Horizontal spacing between MetricCards
- Wrapping behavior at smaller widths
- Alignment of cards within the row

**MetricsRow does NOT own:**
- Card surface (delegated to Card)
- Metric layout or typography (delegated to MetricCard)
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
- **MetricCard owns content and hierarchy**
- **Card owns surface**
- **No visual semantics live here**`}}}},c={render:()=>t({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1% from last month",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4% from last month",dense:!0}),e({label:"Conversion",value:"3.24%",meta:"-0.2% from last month",dense:!0})],equalWidth:!0})},o={render:()=>t({children:[e({label:"Total Users",value:"48,293",meta:"All time",dense:!0}),e({label:"Active Today",value:"2,847",meta:"Last 24 hours",dense:!0})],equalWidth:!0})},i={render:()=>{const n=document.createElement("div");return n.style.maxWidth="800px",n.appendChild(t({children:[e({label:"Revenue",value:"$847K",dense:!0}),e({label:"Orders",value:"12,847",dense:!0}),e({label:"Users",value:"48,293",dense:!0}),e({label:"Conversion",value:"3.24%",dense:!0}),e({label:"Avg. Order",value:"$127.50",dense:!0}),e({label:"Churn",value:"2.1%",dense:!0})],equalWidth:!0})),n}},d={render:()=>t({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1%",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4%",dense:!0}),e({label:"Conversion",value:"3.24%",meta:"-0.2%",dense:!0})],dense:!0,equalWidth:!0})},u={render:()=>t({children:[e({label:"Small",value:"42",dense:!0}),e({label:"Medium Value",value:"$12,345",meta:"Some additional context",dense:!0}),e({label:"Large",value:"999",dense:!0})],align:"center"})},p={render:()=>{const n=t({children:[e({label:"Total Revenue",value:"$2,847,293",meta:"+12.1% YoY",dense:!0}),e({label:"Active Users",value:"48,293",meta:"+5.4% MoM",dense:!0}),e({label:"Avg. Order Value",value:"$127.50",meta:"+2.8% MoM",dense:!0}),e({label:"Conversion Rate",value:"4.32%",meta:"-0.3% MoM",dense:!0})],equalWidth:!0}),s=oe({children:[g({children:n})]}),r=document.createElement("div");return r.style.background="var(--ui-surface-page)",r.style.padding="var(--spacing-24)",r.style.minHeight="300px",r.appendChild(s),r}},m={render:()=>{const n=ie({title:"Dashboard",description:"Overview of key metrics"}),s=t({children:[e({label:"Revenue",value:"$847,293",meta:"+8.1% from last month",dense:!0}),e({label:"Orders",value:"12,847",meta:"+3.4% from last month",dense:!0}),e({label:"Customers",value:"3,284",meta:"+12.5% from last month",dense:!0})],equalWidth:!0}),r=oe({children:[g({children:n}),g({children:s})]}),a=document.createElement("div");return a.style.background="var(--ui-surface-page)",a.style.padding="var(--spacing-24)",a.style.minHeight="400px",a.appendChild(r),a}},v={render:()=>t({children:[e({label:"Response Time",value:"142ms",meta:"P95 latency",dense:!0}),e({label:"Uptime",value:"99.97%",meta:"Last 30 days",dense:!0}),e({label:"Requests",value:"1.2M",meta:"This month",dense:!0}),e({label:"Errors",value:"0.03%",meta:"Error rate",dense:!0})],equalWidth:!0})},h={render:()=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="var(--spacing-32)",n.style.background="var(--ui-surface-page)",n.style.padding="var(--spacing-24)";const s=document.createElement("div"),r=document.createElement("p");r.textContent="Default Spacing (16px)",r.style.color="var(--text-secondary)",r.style.marginBottom="var(--spacing-8)",r.style.fontSize="var(--ui-text-label-font-size)",s.appendChild(r),s.appendChild(t({children:[e({label:"Metric 1",value:"$100",dense:!0}),e({label:"Metric 2",value:"$200",dense:!0}),e({label:"Metric 3",value:"$300",dense:!0})],equalWidth:!0})),n.appendChild(s);const a=document.createElement("div"),l=document.createElement("p");return l.textContent="Dense Spacing (12px)",l.style.color="var(--text-secondary)",l.style.marginBottom="var(--spacing-8)",l.style.fontSize="var(--ui-text-label-font-size)",a.appendChild(l),a.appendChild(t({children:[e({label:"Metric 1",value:"$100",dense:!0}),e({label:"Metric 2",value:"$200",dense:!0}),e({label:"Metric 3",value:"$300",dense:!0})],dense:!0,equalWidth:!0})),n.appendChild(a),n}};var b,M,C,y,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createMetricCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1% from last month',
      dense: true
    }), createMetricCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4% from last month',
      dense: true
    }), createMetricCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2% from last month',
      dense: true
    })],
    equalWidth: true
  })
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source},description:{story:"Default metrics row with 3 MetricCards.",...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var f,x,R,S,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createMetricCard({
      label: 'Total Users',
      value: '48,293',
      meta: 'All time',
      dense: true
    }), createMetricCard({
      label: 'Active Today',
      value: '2,847',
      meta: 'Last 24 hours',
      dense: true
    })],
    equalWidth: true
  })
}`,...(R=(x=o.parameters)==null?void 0:x.docs)==null?void 0:R.source},description:{story:"Two metrics in a row.",...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.description}}};var W,$,q,E,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '800px';
    wrapper.appendChild(createMetricsRow({
      children: [createMetricCard({
        label: 'Revenue',
        value: '$847K',
        dense: true
      }), createMetricCard({
        label: 'Orders',
        value: '12,847',
        dense: true
      }), createMetricCard({
        label: 'Users',
        value: '48,293',
        dense: true
      }), createMetricCard({
        label: 'Conversion',
        value: '3.24%',
        dense: true
      }), createMetricCard({
        label: 'Avg. Order',
        value: '$127.50',
        dense: true
      }), createMetricCard({
        label: 'Churn',
        value: '2.1%',
        dense: true
      })],
      equalWidth: true
    }));
    return wrapper;
  }
}`,...(q=($=i.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Many metrics demonstrating wrapping behavior.",...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var P,T,O,A,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createMetricCard({
      label: 'Revenue',
      value: '$847,293',
      meta: '+8.1%',
      dense: true
    }), createMetricCard({
      label: 'Orders',
      value: '12,847',
      meta: '+3.4%',
      dense: true
    }), createMetricCard({
      label: 'Conversion',
      value: '3.24%',
      meta: '-0.2%',
      dense: true
    })],
    dense: true,
    equalWidth: true
  })
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:"Dense spacing variant.",...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.description}}};var z,V,U,H,B;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createMetricCard({
      label: 'Small',
      value: '42',
      dense: true
    }), createMetricCard({
      label: 'Medium Value',
      value: '$12,345',
      meta: 'Some additional context',
      dense: true
    }), createMetricCard({
      label: 'Large',
      value: '999',
      dense: true
    })],
    align: 'center'
  })
}`,...(U=(V=u.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"Center-aligned cards.",...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var I,Y,N,G,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const metricsRow = createMetricsRow({
      children: [createMetricCard({
        label: 'Total Revenue',
        value: '$2,847,293',
        meta: '+12.1% YoY',
        dense: true
      }), createMetricCard({
        label: 'Active Users',
        value: '48,293',
        meta: '+5.4% MoM',
        dense: true
      }), createMetricCard({
        label: 'Avg. Order Value',
        value: '$127.50',
        meta: '+2.8% MoM',
        dense: true
      }), createMetricCard({
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
      children: [createMetricCard({
        label: 'Revenue',
        value: '$847,293',
        meta: '+8.1% from last month',
        dense: true
      }), createMetricCard({
        label: 'Orders',
        value: '12,847',
        meta: '+3.4% from last month',
        dense: true
      }), createMetricCard({
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
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"MetricsRow used in context with PageSection.",...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee,ne,re;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => createMetricsRow({
    children: [createMetricCard({
      label: 'Response Time',
      value: '142ms',
      meta: 'P95 latency',
      dense: true
    }), createMetricCard({
      label: 'Uptime',
      value: '99.97%',
      meta: 'Last 30 days',
      dense: true
    }), createMetricCard({
      label: 'Requests',
      value: '1.2M',
      meta: 'This month',
      dense: true
    }), createMetricCard({
      label: 'Errors',
      value: '0.03%',
      meta: 'Error rate',
      dense: true
    })],
    equalWidth: true
  })
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Mixed metric values demonstrating flexibility.",...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var te,ae,se,le,ce;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
      children: [createMetricCard({
        label: 'Metric 1',
        value: '$100',
        dense: true
      }), createMetricCard({
        label: 'Metric 2',
        value: '$200',
        dense: true
      }), createMetricCard({
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
      children: [createMetricCard({
        label: 'Metric 1',
        value: '$100',
        dense: true
      }), createMetricCard({
        label: 'Metric 2',
        value: '$200',
        dense: true
      }), createMetricCard({
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
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Comparison: Default vs Dense spacing.",...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};const be=["Default","TwoMetrics","ManyMetrics","Dense","CenterAligned","InContextWithPageLayout","InContextWithPageSection","WithMixedMetricValues","SpacingComparison"];export{u as CenterAligned,c as Default,d as Dense,p as InContextWithPageLayout,m as InContextWithPageSection,i as ManyMetrics,h as SpacingComparison,o as TwoMetrics,v as WithMixedMetricValues,be as __namedExportsOrder,ge as default};
