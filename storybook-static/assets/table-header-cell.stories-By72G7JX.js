import{c as b}from"./table-header-cell-BQFJGQJu.js";const Q={title:"1. Components / 2. Level 2 / TableHeaderCell",tags:["autodocs"],render:e=>b(e),parameters:{docs:{description:{component:`
## TableHeaderCell

**Tier 2 — Structural + Visual Indicator Component**

TableHeaderCell represents a single header cell in a table. It owns header text presentation and optional visual indicators (tooltip icon, sort indicator).

### Key Characteristics

- **Mostly stateless** — Visual state is derived from props only
- **Visual indicators only** — Sort and tooltip icons are purely visual
- **Does NOT perform sorting** — Sorting logic belongs to parent table/controller

### Non-Goals

- Does NOT manage sorting logic or callbacks
- Does NOT manage column widths or table layout
- Does NOT manage row or table state
- Does NOT apply row hover/selection styles
- Does NOT apply backgrounds to rows or tables
- Does NOT implement tooltip behavior (visual indicator only)

### Token Bindings

| Property | Token |
|----------|-------|
| Text (default) | \`--color-table-header-text-default\` |
| Text (muted) | \`--color-table-header-text-muted\` |
| Text (disabled) | \`--color-table-header-text-disabled\` |
| Icon (default) | \`--color-table-header-icon\` |
| Icon (active) | \`--color-table-header-icon-active\` |
| Icon (disabled) | \`--color-table-header-icon-disabled\` |
| Padding | \`--spacing-sm\`, \`--spacing-md\` |
| Typography | \`--font-button-family\`, \`--text-xs\`, \`--font-semibold\` |

### Sort Direction

The \`sortDirection\` prop controls the visual sort indicator:
- \`null\` — No sort indicator shown
- \`'asc'\` — Arrow pointing up (ascending)
- \`'desc'\` — Arrow pointing down (descending)

**Important:** This is purely visual. The component does NOT handle click events or sorting logic.
        `}}},argTypes:{align:{control:"select",options:["left","right"],description:"Text alignment"},sortDirection:{control:"select",options:[null,"asc","desc"],description:"Visual sort indicator direction (null = no indicator)"},showTooltip:{control:"boolean",description:"Show tooltip icon (visual only)"},disabled:{control:"boolean",description:"Disabled state"}}},o={args:{children:"Column Header"}},t={args:{children:"Amount",align:"right"},parameters:{docs:{description:{story:"Right-aligned header, typically used for numeric columns."}}}},s={args:{children:"Status",showTooltip:!0},parameters:{docs:{description:{story:"Header with a tooltip icon. The icon is purely visual — tooltip behavior is not implemented by this component."}}}},a={args:{children:"Name",sortDirection:"asc"},parameters:{docs:{description:{story:"Header showing ascending sort indicator. The arrow points up."}}}},i={args:{children:"Name",sortDirection:"desc"},parameters:{docs:{description:{story:"Header showing descending sort indicator. The arrow points down."}}}},l={args:{children:"Column Header",disabled:!0},parameters:{docs:{description:{story:"Disabled state affects text and icon colors."}}}},c={args:{children:"Name",sortDirection:"asc",disabled:!0},parameters:{docs:{description:{story:"Disabled header with sort indicator shows muted colors."}}}},d={args:{children:"Priority",showTooltip:!0,sortDirection:"desc"},parameters:{docs:{description:{story:"Header with both tooltip and sort indicators."}}}},p={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 12px;",[{label:"Default",props:{children:"Column Header"}},{label:"Right Aligned",props:{children:"Amount",align:"right"}},{label:"With Tooltip",props:{children:"Status",showTooltip:!0}},{label:"Sort Ascending",props:{children:"Name",sortDirection:"asc"}},{label:"Sort Descending",props:{children:"Date",sortDirection:"desc"}},{label:"Tooltip + Sort",props:{children:"Priority",showTooltip:!0,sortDirection:"asc"}},{label:"Disabled",props:{children:"Column",disabled:!0}},{label:"Disabled + Sort",props:{children:"Name",sortDirection:"desc",disabled:!0}}].forEach(({label:u,props:n})=>{const r=document.createElement("div");r.style.cssText="display: flex; align-items: center; gap: 16px;";const g=document.createElement("span");g.style.cssText="width: 120px; font-size: 12px; color: var(--neutral-500);",g.textContent=u;const y=b(n);y.style.cssText="flex: 1; border: 1px dashed var(--neutral-200); max-width: 200px;",r.appendChild(g),r.appendChild(y),e.appendChild(r)}),e},parameters:{docs:{description:{story:"Comparison of all header cell variants."}}}},m={render:()=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      gap: 0;
      background: var(--neutral-100);
      border-bottom: 1px solid var(--neutral-200);
    `;const h=[{children:"Name",sortDirection:"asc"},{children:"Status",showTooltip:!0},{children:"Date"},{children:"Amount",align:"right"}];return h.forEach((u,n)=>{const r=b(u);r.style.cssText=`
        flex: ${n===0?2:1};
        border-right: ${n<h.length-1?"1px solid var(--neutral-200)":"none"};
      `,e.appendChild(r)}),e},parameters:{docs:{description:{story:"Example showing multiple header cells in a table-like context. Note: TableHeaderCell does not manage table layout — this is for visual demonstration only."}}}};var T,x,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Column Header'
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,f,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Amount',
    align: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-aligned header, typically used for numeric columns.'
      }
    }
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,C,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Status',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a tooltip icon. The icon is purely visual — tooltip behavior is not implemented by this component.'
      }
    }
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var H,A,E;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Name',
    sortDirection: 'asc'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing ascending sort indicator. The arrow points up.'
      }
    }
  }
}`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var k,O,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Name',
    sortDirection: 'desc'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing descending sort indicator. The arrow points down.'
      }
    }
  }
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var W,P,R;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Column Header',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state affects text and icon colors.'
      }
    }
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,$,z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Name',
    sortDirection: 'asc',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled header with sort indicator shows muted colors.'
      }
    }
  }
}`,...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var _,B,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Priority',
    showTooltip: true,
    sortDirection: 'desc'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with both tooltip and sort indicators.'
      }
    }
  }
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,L,M;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    const variants: Array<{
      label: string;
      props: TableHeaderCellProps;
    }> = [{
      label: 'Default',
      props: {
        children: 'Column Header'
      }
    }, {
      label: 'Right Aligned',
      props: {
        children: 'Amount',
        align: 'right'
      }
    }, {
      label: 'With Tooltip',
      props: {
        children: 'Status',
        showTooltip: true
      }
    }, {
      label: 'Sort Ascending',
      props: {
        children: 'Name',
        sortDirection: 'asc'
      }
    }, {
      label: 'Sort Descending',
      props: {
        children: 'Date',
        sortDirection: 'desc'
      }
    }, {
      label: 'Tooltip + Sort',
      props: {
        children: 'Priority',
        showTooltip: true,
        sortDirection: 'asc'
      }
    }, {
      label: 'Disabled',
      props: {
        children: 'Column',
        disabled: true
      }
    }, {
      label: 'Disabled + Sort',
      props: {
        children: 'Name',
        sortDirection: 'desc',
        disabled: true
      }
    }];
    variants.forEach(({
      label,
      props
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'width: 120px; font-size: 12px; color: var(--neutral-500);';
      labelEl.textContent = label;
      const cell = createTableHeaderCell(props);
      cell.style.cssText = 'flex: 1; border: 1px dashed var(--neutral-200); max-width: 200px;';
      wrapper.appendChild(labelEl);
      wrapper.appendChild(cell);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all header cell variants.'
      }
    }
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,q,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: 0;
      background: var(--neutral-100);
      border-bottom: 1px solid var(--neutral-200);
    \`;
    const headers = [{
      children: 'Name',
      sortDirection: 'asc' as const
    }, {
      children: 'Status',
      showTooltip: true
    }, {
      children: 'Date'
    }, {
      children: 'Amount',
      align: 'right' as const
    }];
    headers.forEach((props, index) => {
      const cell = createTableHeaderCell(props);
      cell.style.cssText = \`
        flex: \${index === 0 ? 2 : 1};
        border-right: \${index < headers.length - 1 ? '1px solid var(--neutral-200)' : 'none'};
      \`;
      container.appendChild(cell);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple header cells in a table-like context. Note: TableHeaderCell does not manage table layout — this is for visual demonstration only.'
      }
    }
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const U=["Default","RightAligned","WithTooltip","SortAsc","SortDesc","Disabled","DisabledWithSort","WithTooltipAndSort","AllVariants","InTableContext"];export{p as AllVariants,o as Default,l as Disabled,c as DisabledWithSort,m as InTableContext,t as RightAligned,a as SortAsc,i as SortDesc,s as WithTooltip,d as WithTooltipAndSort,U as __namedExportsOrder,Q as default};
