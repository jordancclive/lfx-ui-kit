import{c as t}from"./page-section-CrtrbsFd.js";import{c as ce}from"./page-layout-DDkSngPm.js";import{c as oe}from"./app-header-BUQjadsZ.js";import{c as de}from"./list-group-oA2mGORs.js";import{c as S}from"./list-item-CxESGsFY.js";import{c as le,a as se,b as pe}from"./table-grid-CDe4dliu.js";import{c as y}from"./table-header-cell-DmmpqlN-.js";import{c as C}from"./table-row-DLTwFnyp.js";import{c as o}from"./table-cell-X32ALN1e.js";const xe={title:"1. Components / 3. Organisms / 8. PageSection",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## PageSection

**Tier 2 — Structural Content Wrapper**

PageSection represents a single vertical section within a page. It provides consistent vertical spacing, optional dividers, and optional section-level padding, without styling its children.

### ⚠️ Important

**PageSection does NOT style children.**

**PageSection does NOT replace cards or surfaces.**

**PageSection exists to enforce vertical rhythm only.**

### How It Fits

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   ├─ PageSection  ← YOU ARE HERE
   ├─ PageSection
   └─ PageSection
\`\`\`

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing | Typography |
| Optional divider | Backgrounds or surfaces |
| Dense spacing variant | Cards, tables, lists |
| | Visual styling of children |

### NOT Responsible For

- Does NOT style child components
- Does NOT implement backgrounds or surfaces
- Does NOT replace cards or containers
- Does NOT handle page layout (use PageLayout)
- Does NOT implement page headers (use AppHeader)

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Vertical padding | \`--spacing-page-section-padding-y\` |
| Vertical padding (dense) | \`--spacing-page-section-padding-y-dense\` |
| Divider color | \`--color-page-section-divider\` |

### Usage Example

\`\`\`typescript
createPageLayout({
  children: [
    createAppHeader({ title: 'Settings' }),
    createPageSection({
      children: generalSettings,
      withDivider: true,
    }),
    createPageSection({
      children: notificationSettings,
    }),
  ]
})
\`\`\`
        `}}},argTypes:{dense:{control:"boolean",description:"Reduced vertical padding"},withDivider:{control:"boolean",description:"Show bottom divider"}},render:e=>t(e)};function n(e,i="100px"){const r=document.createElement("div");return r.style.cssText=`
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    min-height: ${i};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-size: 14px;
    color: #64748b;
  `,r.textContent=e,r}const d={args:{children:n("Section Content")}},l={args:{children:n("Dense Section Content"),dense:!0}},s={args:{children:n("Section with Divider"),withDivider:!0}},p={render:()=>{const e=document.createElement("div");return e.appendChild(t({children:n("Section 1: Overview"),withDivider:!0})),e.appendChild(t({children:n("Section 2: Details"),withDivider:!0})),e.appendChild(t({children:n("Section 3: Actions")})),e}},h={render:()=>{const e=document.createElement("div"),i=a=>{const f=document.createElement("div");return f.textContent=a,f.style.padding="8px 0",f},r=t({children:de({children:[S({children:i("List Item 1"),clickable:!0}),S({children:i("List Item 2"),clickable:!0}),S({children:i("List Item 3"),clickable:!0})],withBorder:!0,withBackground:!0}),withDivider:!0}),c=t({children:le({columns:3,children:[se([y({children:"Name"}),y({children:"Status"}),y({children:"Actions",align:"right"})]),pe([C({children:[o({children:"Project Alpha",contentType:"primary"}),o({children:"Active",contentType:"secondary"}),o({children:"Edit",align:"right"})]}),C({children:[o({children:"Project Beta",contentType:"primary"}),o({children:"Pending",contentType:"secondary"}),o({children:"Edit",align:"right"})]})])],withBorder:!0})});return e.appendChild(r),e.appendChild(c),e}},m={render:()=>ce({children:[oe({title:"Settings",description:"Manage your account preferences"}),t({children:n("General Settings","150px"),withDivider:!0}),t({children:n("Notification Settings","150px"),withDivider:!0}),t({children:n("Security Settings","150px")})]}),parameters:{layout:"fullscreen"}},u={render:()=>{const e=document.createElement("div");e.style.cssText=`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      padding: 24px;
      background: #f8fafc;
    `;const i=document.createElement("div");i.innerHTML='<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';const r=document.createElement("div");r.style.background="#fff",r.style.border="1px solid #e2e8f0",r.style.borderRadius="8px",r.appendChild(t({children:n("Section 1","60px"),withDivider:!0})),r.appendChild(t({children:n("Section 2","60px"),withDivider:!0})),r.appendChild(t({children:n("Section 3","60px")})),i.appendChild(r);const c=document.createElement("div");c.innerHTML='<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';const a=document.createElement("div");return a.style.background="#fff",a.style.border="1px solid #e2e8f0",a.style.borderRadius="8px",a.appendChild(t({children:n("Section 1","60px"),withDivider:!0,dense:!0})),a.appendChild(t({children:n("Section 2","60px"),withDivider:!0,dense:!0})),a.appendChild(t({children:n("Section 3","60px"),dense:!0})),c.appendChild(a),e.appendChild(i),e.appendChild(c),e},parameters:{layout:"fullscreen"}},g={render:()=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 24px;
    `;const i=document.createElement("div");i.innerHTML='<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Default</h4>',i.appendChild(t({children:n("Default spacing")}));const r=document.createElement("div");r.innerHTML='<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense</h4>',r.appendChild(t({children:n("Dense spacing"),dense:!0}));const c=document.createElement("div");c.innerHTML='<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">With Divider</h4>',c.appendChild(t({children:n("With bottom divider"),withDivider:!0}));const a=document.createElement("div");return a.innerHTML='<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense + Divider</h4>',a.appendChild(t({children:n("Dense with divider"),dense:!0,withDivider:!0})),e.appendChild(i),e.appendChild(r),e.appendChild(c),e.appendChild(a),e}};var v,x,D,b,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: createPlaceholderContent('Section Content')
  }
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source},description:{story:"Default PageSection with standard spacing",...(P=(b=d.parameters)==null?void 0:b.docs)==null?void 0:P.description}}};var T,w,L,E,H;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: createPlaceholderContent('Dense Section Content'),
    dense: true
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source},description:{story:"Dense spacing mode (reduced vertical padding)",...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};var k,I,O,A,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: createPlaceholderContent('Section with Divider'),
    withDivider: true
  }
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Section with bottom divider",...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.description}}};var z,B,N,R,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1: Overview'),
      withDivider: true
    }));
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2: Details'),
      withDivider: true
    }));
    container.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3: Actions')
    }));
    return container;
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source},description:{story:"Multiple PageSections stacked together",...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.description}}};var G,V,j,F,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');

    // Helper to create list item content
    const createListItemContent = (text: string) => {
      const item = document.createElement('div');
      item.textContent = text;
      item.style.padding = '8px 0';
      return item;
    };

    // Section with ListGroup
    const listSection = createPageSection({
      children: createListGroup({
        children: [createListItem({
          children: createListItemContent('List Item 1'),
          clickable: true
        }), createListItem({
          children: createListItemContent('List Item 2'),
          clickable: true
        }), createListItem({
          children: createListItemContent('List Item 3'),
          clickable: true
        })],
        withBorder: true,
        withBackground: true
      }),
      withDivider: true
    });

    // Section with Table
    const tableSection = createPageSection({
      children: createTableGrid({
        columns: 3,
        children: [createTableHeader([createTableHeaderCell({
          children: 'Name'
        }), createTableHeaderCell({
          children: 'Status'
        }), createTableHeaderCell({
          children: 'Actions',
          align: 'right'
        })]), createTableBody([createTableRow({
          children: [createTableCell({
            children: 'Project Alpha',
            contentType: 'primary'
          }), createTableCell({
            children: 'Active',
            contentType: 'secondary'
          }), createTableCell({
            children: 'Edit',
            align: 'right'
          })]
        }), createTableRow({
          children: [createTableCell({
            children: 'Project Beta',
            contentType: 'primary'
          }), createTableCell({
            children: 'Pending',
            contentType: 'secondary'
          }), createTableCell({
            children: 'Edit',
            align: 'right'
          })]
        })])],
        withBorder: true
      })
    });
    container.appendChild(listSection);
    container.appendChild(tableSection);
    return container;
  }
}`,...(j=(V=h.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"PageSection with real content components",...(U=(F=h.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};var _,Y,$,q,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return createPageLayout({
      children: [createAppHeader({
        title: 'Settings',
        description: 'Manage your account preferences'
      }), createPageSection({
        children: createPlaceholderContent('General Settings', '150px'),
        withDivider: true
      }), createPageSection({
        children: createPlaceholderContent('Notification Settings', '150px'),
        withDivider: true
      }), createPageSection({
        children: createPlaceholderContent('Security Settings', '150px')
      })]
    });
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...($=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:$.source},description:{story:"PageSection in context with PageLayout",...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,Q,X,Z,ee;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      padding: 24px;
      background: #f8fafc;
    \`;

    // Default spacing column
    const defaultColumn = document.createElement('div');
    defaultColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';
    const defaultSections = document.createElement('div');
    defaultSections.style.background = '#fff';
    defaultSections.style.border = '1px solid #e2e8f0';
    defaultSections.style.borderRadius = '8px';
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1', '60px'),
      withDivider: true
    }));
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2', '60px'),
      withDivider: true
    }));
    defaultSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3', '60px')
    }));
    defaultColumn.appendChild(defaultSections);

    // Dense spacing column
    const denseColumn = document.createElement('div');
    denseColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';
    const denseSections = document.createElement('div');
    denseSections.style.background = '#fff';
    denseSections.style.border = '1px solid #e2e8f0';
    denseSections.style.borderRadius = '8px';
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 1', '60px'),
      withDivider: true,
      dense: true
    }));
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 2', '60px'),
      withDivider: true,
      dense: true
    }));
    denseSections.appendChild(createPageSection({
      children: createPlaceholderContent('Section 3', '60px'),
      dense: true
    }));
    denseColumn.appendChild(denseSections);
    container.appendChild(defaultColumn);
    container.appendChild(denseColumn);
    return container;
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Comparison: Default vs Dense spacing",...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ne,re,ie,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 24px;
    \`;

    // Default
    const defaultSection = document.createElement('div');
    defaultSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Default</h4>';
    defaultSection.appendChild(createPageSection({
      children: createPlaceholderContent('Default spacing')
    }));

    // Dense
    const denseSection = document.createElement('div');
    denseSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense</h4>';
    denseSection.appendChild(createPageSection({
      children: createPlaceholderContent('Dense spacing'),
      dense: true
    }));

    // With Divider
    const dividerSection = document.createElement('div');
    dividerSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">With Divider</h4>';
    dividerSection.appendChild(createPageSection({
      children: createPlaceholderContent('With bottom divider'),
      withDivider: true
    }));

    // Dense + Divider
    const combinedSection = document.createElement('div');
    combinedSection.innerHTML = '<h4 style="margin: 0 0 8px; font-family: var(--font-family); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Dense + Divider</h4>';
    combinedSection.appendChild(createPageSection({
      children: createPlaceholderContent('Dense with divider'),
      dense: true,
      withDivider: true
    }));
    container.appendChild(defaultSection);
    container.appendChild(denseSection);
    container.appendChild(dividerSection);
    container.appendChild(combinedSection);
    return container;
  }
}`,...(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"All variants displayed together",...(ae=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ae.description}}};const De=["Default","Dense","WithDivider","MultipleSections","WithRealContent","InContextWithPageLayout","SpacingComparison","AllVariants"];export{g as AllVariants,d as Default,l as Dense,m as InContextWithPageLayout,p as MultipleSections,u as SpacingComparison,s as WithDivider,h as WithRealContent,De as __namedExportsOrder,xe as default};
