import{c as u}from"./table-cell-X32ALN1e.js";const q={title:"1. Components / 2. Molecules / 6. TableCell",tags:["autodocs"],render:e=>u(e),parameters:{docs:{description:{component:`
## TableCell

**Tier 2 — Structural Content Component**

TableCell represents a single cell within a table row. It owns text presentation, alignment, and optional leading/trailing content.

### Key Characteristics

- **Stateless** — TableCell has no internal state
- **Visual state comes from parent** — Background, borders, and row-level interactions are owned by TableRow
- **Typography and alignment only** — TableCell manages text color, alignment, and spacing

### Non-Goals

- Does NOT handle row background, hover, selection, or click behavior
- Does NOT manage table layout or column sizing
- Does NOT define borders between rows
- Does NOT apply hover, selected, or disabled styles (except text color inheritance)
- Does NOT manage sorting or header behavior

### Token Bindings

| Property | Token |
|----------|-------|
| Text (primary) | \`--color-table-cell-text-primary\` |
| Text (secondary) | \`--color-table-cell-text-secondary\` |
| Text (muted) | \`--color-table-cell-text-muted\` |
| Text (disabled) | \`--color-table-cell-text-disabled\` |
| Padding | \`--spacing-sm\`, \`--spacing-md\` |
| Typography | \`--font-button-family\`, \`--font-button-size\`, \`--font-button-weight\`, \`--font-button-line-height\` |

### Content Types

- **Primary** — Default text color, standard content
- **Secondary** — Subdued text color, supporting information
- **Muted** — Lowest contrast, de-emphasized content
- **Numeric** — Right-aligned, same typography as primary
        `}}},argTypes:{contentType:{control:"select",options:["primary","secondary","muted","numeric"],description:"Text presentation style"},align:{control:"select",options:["left","right"],description:"Text alignment"},size:{control:"select",options:["default","small"],description:"Size variant"},disabled:{control:"boolean",description:"Whether the parent row is disabled (affects text color only)"}}},a={args:{contentType:"primary",children:"Primary cell content"}},o={args:{contentType:"secondary",children:"Secondary cell content"}},s={args:{contentType:"muted",children:"Muted cell content"}},c={args:{contentType:"numeric",children:"$1,234.56"},parameters:{docs:{description:{story:"Numeric content type is automatically right-aligned."}}}},l={args:{contentType:"primary",size:"small",children:"Small cell content"}},i={args:{contentType:"primary",align:"right",children:"Right-aligned content"}},d={args:{contentType:"primary",disabled:!0,children:"Disabled cell content"},parameters:{docs:{description:{story:"Disabled state affects text color only. This state is inherited from the parent TableRow."}}}},p={render:()=>{const e=document.createElement("div");e.style.cssText=`
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--neutral-300);
      flex-shrink: 0;
    `;const t=document.createElement("span");return t.textContent="John Doe",u({contentType:"primary",children:[e,t]})},parameters:{docs:{description:{story:"TableCell can contain composed content like avatars. The cell provides layout (flexbox with gap) but does not style the avatar itself."}}}},m={render:()=>{const e=document.createElement("span");e.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>`,e.style.cssText=`
      display: flex;
      align-items: center;
      flex-shrink: 0;
    `;const t=document.createElement("span");return t.textContent="Item with icon",u({contentType:"primary",children:[e,t]})},parameters:{docs:{description:{story:"Icons inherit the cell text color through currentColor."}}}},y={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 8px;",["primary","secondary","muted","numeric"].forEach(n=>{const r=document.createElement("div");r.style.cssText="display: flex; align-items: center; gap: 16px;";const h=document.createElement("span");h.style.cssText="width: 80px; font-size: 12px; color: var(--neutral-500);",h.textContent=n;const g=u({contentType:n,children:n==="numeric"?"$1,234.56":`${n.charAt(0).toUpperCase()+n.slice(1)} content`});g.style.cssText="flex: 1; border: 1px dashed var(--neutral-200);",r.appendChild(h),r.appendChild(g),e.appendChild(r)}),e},parameters:{docs:{description:{story:"Comparison of all content types showing their visual hierarchy."}}}};var x,T,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    contentType: 'primary',
    children: 'Primary cell content'
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var f,C,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    contentType: 'secondary',
    children: 'Secondary cell content'
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,S,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    contentType: 'muted',
    children: 'Muted cell content'
  }
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,D,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    contentType: 'numeric',
    children: '$1,234.56'
  },
  parameters: {
    docs: {
      description: {
        story: 'Numeric content type is automatically right-aligned.'
      }
    }
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,A,M;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    contentType: 'primary',
    size: 'small',
    children: 'Small cell content'
  }
}`,...(M=(A=l.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var R,I,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    contentType: 'primary',
    align: 'right',
    children: 'Right-aligned content'
  }
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,$,W;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    contentType: 'primary',
    disabled: true,
    children: 'Disabled cell content'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state affects text color only. This state is inherited from the parent TableRow.'
      }
    }
  }
}`,...(W=($=d.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var B,L,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    // Create avatar placeholder
    const avatar = document.createElement('div');
    avatar.style.cssText = \`
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--neutral-300);
      flex-shrink: 0;
    \`;
    const text = document.createElement('span');
    text.textContent = 'John Doe';
    return createTableCell({
      contentType: 'primary',
      children: [avatar, text]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'TableCell can contain composed content like avatars. The cell provides layout (flexbox with gap) but does not style the avatar itself.'
      }
    }
  }
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var J,U,_;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    // Create icon placeholder
    const icon = document.createElement('span');
    icon.innerHTML = \`<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>\`;
    icon.style.cssText = \`
      display: flex;
      align-items: center;
      flex-shrink: 0;
    \`;
    const text = document.createElement('span');
    text.textContent = 'Item with icon';
    return createTableCell({
      contentType: 'primary',
      children: [icon, text]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons inherit the cell text color through currentColor.'
      }
    }
  }
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,K,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    const types: Array<'primary' | 'secondary' | 'muted' | 'numeric'> = ['primary', 'secondary', 'muted', 'numeric'];
    types.forEach(type => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      const label = document.createElement('span');
      label.style.cssText = 'width: 80px; font-size: 12px; color: var(--neutral-500);';
      label.textContent = type;
      const cell = createTableCell({
        contentType: type,
        children: type === 'numeric' ? '$1,234.56' : \`\${type.charAt(0).toUpperCase() + type.slice(1)} content\`
      });
      cell.style.cssText = 'flex: 1; border: 1px dashed var(--neutral-200);';
      wrapper.appendChild(label);
      wrapper.appendChild(cell);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all content types showing their visual hierarchy.'
      }
    }
  }
}`,...(V=(K=y.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const F=["Primary","Secondary","Muted","Numeric","Small","RightAligned","Disabled","WithAvatar","WithIcon","AllContentTypes"];export{y as AllContentTypes,d as Disabled,s as Muted,c as Numeric,a as Primary,i as RightAligned,o as Secondary,l as Small,p as WithAvatar,m as WithIcon,F as __namedExportsOrder,q as default};
