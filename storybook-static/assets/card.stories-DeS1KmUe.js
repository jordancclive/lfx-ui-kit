import{c as t}from"./card-DYIIZwu_.js";import{c as Re,a as Pe,b as Be}from"./table-grid-CDe4dliu.js";import{c as p}from"./table-header-cell-DmmpqlN-.js";import{c as h}from"./table-row-DLTwFnyp.js";import{c}from"./table-cell-X32ALN1e.js";import{c as We}from"./list-group-oA2mGORs.js";import{c as E}from"./list-item-CxESGsFY.js";import{c as D}from"./button-CXimPVvh.js";import{c as Ae}from"./page-layout-DDkSngPm.js";import{c as H}from"./page-section-CrtrbsFd.js";const Ue={title:"1. Components / 2. Molecules / 1. Card",tags:["autodocs"],argTypes:{withBorder:{control:"boolean",description:"Show border around card",defaultValue:!0},dense:{control:"boolean",description:"Use reduced padding",defaultValue:!1},headerDivider:{control:"boolean",description:"Show divider below header",defaultValue:!1},footerDivider:{control:"boolean",description:"Show divider above footer",defaultValue:!1}},parameters:{docs:{description:{component:`# Card

**Tier 2 — Pattern / Surface Wrapper**

Card provides a consistent visual surface for grouping content.
It standardizes background, border, radius, and internal padding.

## Ownership Boundaries

**Card owns:**
- Surface background
- Border (optional)
- Border radius
- Internal padding
- Header/footer slot layout

**Card does NOT own:**
- Typography
- Tables, lists, charts, metrics
- Data fetching or logic
- Page layout or section spacing
- Hover/selected state

## Token Bindings

| Property | Token |
|----------|-------|
| Background | \`--ui-card-surface-background\` → \`ui.surface.container\` |
| Border | \`--ui-card-surface-border\` → \`ui.surface.divider\` |
| Radius | \`--ui-card-radius\` |
| Padding | \`--ui-card-padding\` / \`--ui-card-padding-dense\` |

## Non-Goals

- Card does NOT style child typography
- Card does NOT impose grid or column layout
- Card does NOT manage interaction states
- Card is NOT a page or section container`}}}};function d(e,n){const r=document.createElement("p");return r.textContent=e,r.style.margin="0",r.style.color="var(--text-primary)",r}function l(e,n="h3"){const r=document.createElement(n);return r.textContent=e,r.style.margin="0",r.style.fontFamily="var(--ui-text-section-title-font-family)",r.style.fontSize="var(--ui-text-section-title-font-size)",r.style.fontWeight="var(--ui-text-section-title-font-weight)",r.style.lineHeight="var(--ui-text-section-title-line-height)",r.style.color="var(--text-primary)",r}function u(e,n,r){const o=document.createElement("div"),a=document.createElement("div");a.textContent=e,a.style.fontFamily="var(--font-family)",a.style.fontSize="var(--text-2xl)",a.style.fontWeight="var(--font-semibold)",a.style.color="var(--text-primary)",a.style.marginBottom="var(--spacing-4)",o.appendChild(a);const s=document.createElement("div");if(s.textContent=n,s.style.fontFamily="var(--ui-text-body-secondary-font-family)",s.style.fontSize="var(--ui-text-body-secondary-font-size)",s.style.color="var(--text-secondary)",o.appendChild(s),r){const i=document.createElement("div");i.textContent=r,i.style.fontFamily="var(--ui-text-body-secondary-font-family)",i.style.fontSize="var(--ui-text-body-secondary-font-size)",i.style.color=r.startsWith("+")?"var(--success-600)":"var(--danger-600)",i.style.marginTop="var(--spacing-4)",o.appendChild(i)}return o}function Le(e,n){const r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="center",r.style.justifyContent="center",r.style.padding="var(--spacing-32)",r.style.textAlign="center";const o=document.createElement("div");o.textContent="📭",o.style.fontSize="48px",o.style.marginBottom="var(--spacing-16)",r.appendChild(o);const a=document.createElement("p");a.textContent=e,a.style.margin="0",a.style.color="var(--text-secondary)",a.style.fontFamily="var(--ui-text-body-primary-font-family)",a.style.fontSize="var(--ui-text-body-primary-font-size)",r.appendChild(a);{const s=document.createElement("div");s.style.marginTop="var(--spacing-16)",s.appendChild(D({label:n})),r.appendChild(s)}return r}const m={render:()=>t({children:d("This is a basic card with default styling. Cards provide a consistent surface for grouping content.")})},y={render:()=>t({header:l("Card Title"),children:d("Card content goes here. The header provides a consistent title area.")})},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.justifyContent="flex-end",e.style.gap="var(--spacing-8)",e.appendChild(D({label:"Cancel",variant:"secondary"})),e.appendChild(D({label:"Save"})),t({children:d("Card with a footer containing action buttons."),footer:e})}},C={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center";const n=document.createElement("span");n.textContent="Last updated: 2 hours ago",n.style.color="var(--text-secondary)",n.style.fontSize="var(--ui-text-body-secondary-font-size)",e.appendChild(n);const r=document.createElement("div");return r.style.display="flex",r.style.gap="var(--spacing-8)",r.appendChild(D({label:"Edit"})),e.appendChild(r),t({header:l("Project Details"),children:d("This card demonstrates a complete layout with header, body, and footer areas. Each slot is layout-only — typography is owned by the content."),footer:e,headerDivider:!0,footerDivider:!0})}},f={render:()=>t({header:l("Compact Card"),children:d("Dense cards use less padding, suitable for dashboard layouts with many cards."),dense:!0})},b={render:()=>{const e=h({children:[p({children:"Name"}),p({children:"Status"}),p({children:"Amount",align:"right"})]}),n=[h({children:[c({children:"Project Alpha"}),c({children:"Active",contentType:"secondary"}),c({children:"$12,500",align:"right"})]}),h({children:[c({children:"Project Beta"}),c({children:"Pending",contentType:"secondary"}),c({children:"$8,200",align:"right"})]}),h({children:[c({children:"Project Gamma"}),c({children:"Complete",contentType:"secondary"}),c({children:"$24,100",align:"right"})]})],r=Re({columns:3,children:[Pe([e]),Be(n)]});return t({header:l("Recent Projects"),children:r,headerDivider:!0})}},v={render:()=>{const e=[E({children:d("Design system review"),clickable:!0}),E({children:d("Token architecture update"),clickable:!0}),E({children:d("Component documentation"),clickable:!0,selected:!0}),E({children:d("Storybook coverage"),clickable:!0})],n=We({children:e});return t({header:l("Tasks"),children:n,headerDivider:!0})}},T={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="var(--spacing-24)";const n=t({children:u("$1,234,567","Total Revenue","+12.5%"),dense:!0}),r=t({children:u("8,432","Active Users","+5.2%"),dense:!0}),o=t({children:u("94.2%","Uptime","-0.3%"),dense:!0});return e.appendChild(n),e.appendChild(r),e.appendChild(o),e}},x={render:()=>t({header:l("Notifications"),children:Le("No new notifications","Refresh"),headerDivider:!0})},w={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="var(--spacing-16)",e.appendChild(t({children:u("$847,293","Monthly Revenue","+8.1%"),dense:!0})),e.appendChild(t({children:u("12,847","Total Orders","+3.4%"),dense:!0})),e.appendChild(t({children:u("98.7%","Success Rate","+0.2%"),dense:!0}));const n=h({children:[p({children:"Order ID"}),p({children:"Customer"}),p({children:"Status"}),p({children:"Total",align:"right"})]}),r=[h({clickable:!0,children:[c({children:"#12345"}),c({children:"Acme Corp"}),c({children:"Processing",contentType:"secondary"}),c({children:"$2,450.00",align:"right"})]}),h({clickable:!0,children:[c({children:"#12344"}),c({children:"Globex Inc"}),c({children:"Shipped",contentType:"secondary"}),c({children:"$1,875.00",align:"right"})]})],o=Re({columns:4,children:[Pe([n]),Be(r)]}),a=t({header:l("Recent Orders"),children:o,headerDivider:!0}),s=Ae({children:[H({children:e}),H({children:a})]}),i=document.createElement("div");return i.style.background="var(--ui-surface-page)",i.style.padding="var(--spacing-24)",i.style.minHeight="400px",i.appendChild(s),i}},S={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--spacing-24)",e.style.background="var(--ui-surface-page)",e.style.padding="var(--spacing-24)";const n=t({header:l("Default Card"),children:d("Standard padding and border.")});e.appendChild(n);const r=t({header:l("Dense Card"),children:d("Reduced padding for compact layouts."),dense:!0});e.appendChild(r);const o=t({header:l("No Border"),children:d("Card without border, useful on colored backgrounds."),withBorder:!1});e.appendChild(o);const a=t({header:l("With Dividers"),children:d("Header and footer have visual separators."),footer:D({label:"Action"}),headerDivider:!0,footerDivider:!0});return e.appendChild(a),e}};var k,R,P,B,W;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => createCard({
    children: createText('This is a basic card with default styling. Cards provide a consistent surface for grouping content.')
  })
}`,...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"Default card with simple content.",...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};var A,L,I,j,z;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => createCard({
    header: createHeading('Card Title'),
    children: createText('Card content goes here. The header provides a consistent title area.')
  })
}`,...(I=(L=y.parameters)==null?void 0:L.docs)==null?void 0:I.source},description:{story:"Card with a header slot.",...(z=(j=y.parameters)==null?void 0:j.docs)==null?void 0:z.description}}};var N,$,G,M,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'flex-end';
    footer.style.gap = 'var(--spacing-8)';
    footer.appendChild(createButton({
      label: 'Cancel',
      variant: 'secondary'
    }));
    footer.appendChild(createButton({
      label: 'Save'
    }));
    return createCard({
      children: createText('Card with a footer containing action buttons.'),
      footer
    });
  }
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"Card with a footer slot.",...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var F,V,U,_,q;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.alignItems = 'center';
    const timestamp = document.createElement('span');
    timestamp.textContent = 'Last updated: 2 hours ago';
    timestamp.style.color = 'var(--text-secondary)';
    timestamp.style.fontSize = 'var(--ui-text-body-secondary-font-size)';
    footer.appendChild(timestamp);
    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = 'var(--spacing-8)';
    actions.appendChild(createButton({
      label: 'Edit'
    }));
    footer.appendChild(actions);
    return createCard({
      header: createHeading('Project Details'),
      children: createText('This card demonstrates a complete layout with header, body, and footer areas. Each slot is layout-only — typography is owned by the content.'),
      footer,
      headerDivider: true,
      footerDivider: true
    });
  }
}`,...(U=(V=C.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"Card with both header and footer slots.",...(q=(_=C.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var J,K,Q,X,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => createCard({
    header: createHeading('Compact Card'),
    children: createText('Dense cards use less padding, suitable for dashboard layouts with many cards.'),
    dense: true
  })
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Dense variant with reduced padding.",...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,re,ne,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const headerRow = createTableRow({
      children: [createTableHeaderCell({
        children: 'Name'
      }), createTableHeaderCell({
        children: 'Status'
      }), createTableHeaderCell({
        children: 'Amount',
        align: 'right'
      })]
    });
    const rows = [createTableRow({
      children: [createTableCell({
        children: 'Project Alpha'
      }), createTableCell({
        children: 'Active',
        contentType: 'secondary'
      }), createTableCell({
        children: '$12,500',
        align: 'right'
      })]
    }), createTableRow({
      children: [createTableCell({
        children: 'Project Beta'
      }), createTableCell({
        children: 'Pending',
        contentType: 'secondary'
      }), createTableCell({
        children: '$8,200',
        align: 'right'
      })]
    }), createTableRow({
      children: [createTableCell({
        children: 'Project Gamma'
      }), createTableCell({
        children: 'Complete',
        contentType: 'secondary'
      }), createTableCell({
        children: '$24,100',
        align: 'right'
      })]
    })];
    const table = createTableGrid({
      columns: 3,
      children: [createTableHeader([headerRow]), createTableBody(rows)]
    });
    return createCard({
      header: createHeading('Recent Projects'),
      children: table,
      headerDivider: true
    });
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Card wrapping a table component.",...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};var ae,ce,oe,de,ie;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const items = [createListItem({
      children: createText('Design system review'),
      clickable: true
    }), createListItem({
      children: createText('Token architecture update'),
      clickable: true
    }), createListItem({
      children: createText('Component documentation'),
      clickable: true,
      selected: true
    }), createListItem({
      children: createText('Storybook coverage'),
      clickable: true
    })];
    const list = createListGroup({
      children: items
    });
    return createCard({
      header: createHeading('Tasks'),
      children: list,
      headerDivider: true
    });
  }
}`,...(oe=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:oe.source},description:{story:"Card wrapping a ListGroup component.",...(ie=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ie.description}}};var se,le,pe,he,ue;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = 'var(--spacing-24)';
    const card1 = createCard({
      children: createMetric('$1,234,567', 'Total Revenue', '+12.5%'),
      dense: true
    });
    const card2 = createCard({
      children: createMetric('8,432', 'Active Users', '+5.2%'),
      dense: true
    });
    const card3 = createCard({
      children: createMetric('94.2%', 'Uptime', '-0.3%'),
      dense: true
    });
    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
    return container;
  }
}`,...(pe=(le=T.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"Card displaying metrics.",...(ue=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ue.description}}};var me,ye,ge,Ce,fe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => createCard({
    header: createHeading('Notifications'),
    children: createEmptyState('No new notifications', 'Refresh'),
    headerDivider: true
  })
}`,...(ge=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ge.source},description:{story:"Card with empty state content.",...(fe=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:fe.description}}};var be,ve,Te,xe,we;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    // Metrics row
    const metricsContainer = document.createElement('div');
    metricsContainer.style.display = 'grid';
    metricsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    metricsContainer.style.gap = 'var(--spacing-16)';
    metricsContainer.appendChild(createCard({
      children: createMetric('$847,293', 'Monthly Revenue', '+8.1%'),
      dense: true
    }));
    metricsContainer.appendChild(createCard({
      children: createMetric('12,847', 'Total Orders', '+3.4%'),
      dense: true
    }));
    metricsContainer.appendChild(createCard({
      children: createMetric('98.7%', 'Success Rate', '+0.2%'),
      dense: true
    }));

    // Table card
    const headerRow = createTableRow({
      children: [createTableHeaderCell({
        children: 'Order ID'
      }), createTableHeaderCell({
        children: 'Customer'
      }), createTableHeaderCell({
        children: 'Status'
      }), createTableHeaderCell({
        children: 'Total',
        align: 'right'
      })]
    });
    const rows = [createTableRow({
      clickable: true,
      children: [createTableCell({
        children: '#12345'
      }), createTableCell({
        children: 'Acme Corp'
      }), createTableCell({
        children: 'Processing',
        contentType: 'secondary'
      }), createTableCell({
        children: '$2,450.00',
        align: 'right'
      })]
    }), createTableRow({
      clickable: true,
      children: [createTableCell({
        children: '#12344'
      }), createTableCell({
        children: 'Globex Inc'
      }), createTableCell({
        children: 'Shipped',
        contentType: 'secondary'
      }), createTableCell({
        children: '$1,875.00',
        align: 'right'
      })]
    })];
    const table = createTableGrid({
      columns: 4,
      children: [createTableHeader([headerRow]), createTableBody(rows)]
    });
    const tableCard = createCard({
      header: createHeading('Recent Orders'),
      children: table,
      headerDivider: true
    });

    // Page layout
    const layout = createPageLayout({
      children: [createPageSection({
        children: metricsContainer
      }), createPageSection({
        children: tableCard
      })]
    });

    // Wrapper with page background
    const wrapper = document.createElement('div');
    wrapper.style.background = 'var(--ui-surface-page)';
    wrapper.style.padding = 'var(--spacing-24)';
    wrapper.style.minHeight = '400px';
    wrapper.appendChild(layout);
    return wrapper;
  }
}`,...(Te=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Te.source},description:{story:"Card used in context with PageLayout.",...(we=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:we.description}}};var Se,De,Ee,He,ke;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';

    // Default
    const defaultCard = createCard({
      header: createHeading('Default Card'),
      children: createText('Standard padding and border.')
    });
    container.appendChild(defaultCard);

    // Dense
    const denseCard = createCard({
      header: createHeading('Dense Card'),
      children: createText('Reduced padding for compact layouts.'),
      dense: true
    });
    container.appendChild(denseCard);

    // No border
    const noBorderCard = createCard({
      header: createHeading('No Border'),
      children: createText('Card without border, useful on colored backgrounds.'),
      withBorder: false
    });
    container.appendChild(noBorderCard);

    // With dividers
    const dividersCard = createCard({
      header: createHeading('With Dividers'),
      children: createText('Header and footer have visual separators.'),
      footer: createButton({
        label: 'Action'
      }),
      headerDivider: true,
      footerDivider: true
    });
    container.appendChild(dividersCard);
    return container;
  }
}`,...(Ee=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ee.source},description:{story:"All card variants for comparison.",...(ke=(He=S.parameters)==null?void 0:He.docs)==null?void 0:ke.description}}};const _e=["Default","WithHeader","WithFooter","WithHeaderAndFooter","Dense","WithTable","WithListGroup","WithMetrics","EmptyState","InContextWithPageLayout","AllVariants"];export{S as AllVariants,m as Default,f as Dense,x as EmptyState,w as InContextWithPageLayout,g as WithFooter,y as WithHeader,C as WithHeaderAndFooter,v as WithListGroup,T as WithMetrics,b as WithTable,_e as __namedExportsOrder,Ue as default};
