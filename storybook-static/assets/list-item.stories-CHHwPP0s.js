import{c as n}from"./list-item-CxESGsFY.js";const oe={title:"1. Components / 2. Molecules / 3. ListItem",tags:["autodocs"],render:e=>n(e),parameters:{docs:{description:{component:`
## ListItem

**Tier 2 — Interactive Single Component**

ListItem represents a single row in a list. It can be selectable, hoverable, clickable, or static. Used in list views, menus, and simple collections.

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Background colors | Text color |
| Hover state | Typography |
| Selected state | Icons |
| Disabled state | Avatars |
| Bottom border | List layout |
| Padding | Selection logic |

### Non-Goals

- Does NOT own text color or typography
- Does NOT manage icons or avatars
- Does NOT manage list layout or grouping
- Does NOT implement selection logic (visual only)
- Does NOT manage keyboard navigation

### State Precedence

From highest to lowest priority:

1. **disabled** — Overrides all other states
2. **selected** — Overrides hover
3. **hover** — Only applies when clickable and not selected/disabled
4. **default** — Base state

### Token Bindings

| Property | Token |
|----------|-------|
| Background (default) | \`--color-list-item-background-default\` |
| Background (hover) | \`--color-list-item-background-hover\` |
| Background (selected) | \`--color-list-item-background-selected\` |
| Background (disabled) | \`--color-list-item-background-disabled\` |
| Border | \`--color-list-item-border\` |
| Padding | \`--spacing-12\` (vertical), \`--spacing-16\` (horizontal) |
        `}}},argTypes:{selected:{control:"boolean",description:"Visual selection state"},disabled:{control:"boolean",description:"Disabled state - overrides all other states"},clickable:{control:"boolean",description:"Enable hover state and pointer cursor"}}};function o(e,a){const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 2px;";const s=document.createElement("span");if(s.textContent=e,s.style.cssText="font-size: 14px; font-weight: 500; color: var(--text-primary);",t.appendChild(s),a){const r=document.createElement("span");r.textContent=a,r.style.cssText="font-size: 12px; color: var(--text-secondary);",t.appendChild(r)}return t}function ae(e,a){const t=document.createElement("div");t.style.cssText="display: flex; align-items: center; gap: 12px;";const s=document.createElement("div");s.style.cssText=`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--neutral-300);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-600);
  `,s.textContent=e.charAt(0).toUpperCase(),t.appendChild(s);const r=o(e,a);return t.appendChild(r),t}const i={render:()=>n({children:o("Default list item","This is a static item")})},c={render:()=>{const e=n({clickable:!0,children:o("Hover over me","Clickable items show hover state")});return e.style.backgroundColor="var(--color-list-item-background-hover)",e},parameters:{docs:{description:{story:"Hover state only applies when `clickable` is true. This example shows the hover background color."}}}},l={render:()=>n({selected:!0,children:o("Selected item","Selection overrides hover")}),parameters:{docs:{description:{story:"Selected state overrides hover. Selection is visual only — logic is managed by parent."}}}},d={render:()=>n({disabled:!0,children:o("Disabled item","Cannot be interacted with")}),parameters:{docs:{description:{story:"Disabled state overrides all other states including selected."}}}},p={render:()=>n({clickable:!0,children:o("Clickable item","Hover to see background change")}),parameters:{docs:{description:{story:"Clickable items show hover state and pointer cursor."}}}},m={render:()=>n({children:o("Static item","No hover or click interaction")}),parameters:{docs:{description:{story:"Static items have no hover state or pointer cursor."}}}},u={render:()=>n({selected:!0,clickable:!0,children:o("Selected + Clickable","Selected overrides hover")}),parameters:{docs:{description:{story:"When both selected and clickable, selected background takes precedence over hover."}}}},h={render:()=>n({disabled:!0,selected:!0,children:o("Disabled + Selected","Disabled overrides selected")}),parameters:{docs:{description:{story:"Disabled state overrides selected state."}}}},b={render:()=>n({clickable:!0,children:ae("John Doe","john.doe@example.com")}),parameters:{docs:{description:{story:"ListItem with avatar content. **Note:** ListItem does not style the avatar — that is owned by the avatar component."}}}},v={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; align-items: center; gap: 12px;";const a=document.createElement("span");a.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
    </svg>`,a.style.cssText="display: flex; color: var(--neutral-500);",e.appendChild(a);const t=o("Item with icon","Icons are styled by their own component");return e.appendChild(t),n({clickable:!0,children:e})},parameters:{docs:{description:{story:"ListItem with icon content. **Note:** ListItem does not style the icon — that is owned by the icon component."}}}},y={render:()=>{const e=document.createElement("div");e.style.cssText="border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;",e.setAttribute("role","list");const a=[{name:"Alice Johnson",email:"alice@example.com",selected:!1},{name:"Bob Smith",email:"bob@example.com",selected:!0},{name:"Charlie Brown",email:"charlie@example.com",selected:!1},{name:"Diana Prince",email:"diana@example.com",disabled:!0},{name:"Edward Norton",email:"edward@example.com",selected:!1}];return a.forEach((t,s)=>{const r=n({clickable:!t.disabled,selected:t.selected,disabled:t.disabled,children:ae(t.name,t.email)});s===a.length-1&&(r.style.borderBottom="none"),e.appendChild(r)}),e},parameters:{docs:{description:{story:`
Multiple list items demonstrating various states:
- Default clickable items
- One selected item (Bob Smith)
- One disabled item (Diana Prince)

**Note:** List container styling is NOT owned by ListItem. The border/radius wrapper is for demo purposes only.
        `}}}},x={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 16px;",[{label:"Default (static)",props:{}},{label:"Clickable",props:{clickable:!0}},{label:"Selected",props:{selected:!0}},{label:"Selected + Clickable",props:{selected:!0,clickable:!0}},{label:"Disabled",props:{disabled:!0}},{label:"Disabled + Selected",props:{disabled:!0,selected:!0}}].forEach(({label:t,props:s})=>{const r=document.createElement("div");r.style.cssText="display: flex; flex-direction: column; gap: 4px;";const g=document.createElement("span");g.style.cssText="font-size: 12px; color: var(--neutral-500); padding-left: 4px;",g.textContent=t;const k=document.createElement("div");k.style.cssText="border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;";const f=n({...s,children:o("List item","Supporting text")});f.style.borderBottom="none",k.appendChild(f),r.appendChild(g),r.appendChild(k),e.appendChild(r)}),e},parameters:{docs:{description:{story:"Comparison of all ListItem states showing the visual hierarchy."}}}};var C,S,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => createListItem({
    children: createSampleContent('Default list item', 'This is a static item')
  })
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,I,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const item = createListItem({
      clickable: true,
      children: createSampleContent('Hover over me', 'Clickable items show hover state')
    });
    // Force hover state for demo
    item.style.backgroundColor = 'var(--color-list-item-background-hover)';
    return item;
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover state only applies when \`clickable\` is true. This example shows the hover background color.'
      }
    }
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,E,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => createListItem({
    selected: true,
    children: createSampleContent('Selected item', 'Selection overrides hover')
  }),
  parameters: {
    docs: {
      description: {
        story: 'Selected state overrides hover. Selection is visual only — logic is managed by parent.'
      }
    }
  }
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var N,O,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => createListItem({
    disabled: true,
    children: createSampleContent('Disabled item', 'Cannot be interacted with')
  }),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state overrides all other states including selected.'
      }
    }
  }
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var W,H,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => createListItem({
    clickable: true,
    children: createSampleContent('Clickable item', 'Hover to see background change')
  }),
  parameters: {
    docs: {
      description: {
        story: 'Clickable items show hover state and pointer cursor.'
      }
    }
  }
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var M,P,J;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => createListItem({
    children: createSampleContent('Static item', 'No hover or click interaction')
  }),
  parameters: {
    docs: {
      description: {
        story: 'Static items have no hover state or pointer cursor.'
      }
    }
  }
}`,...(J=(P=m.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var j,F,U;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => createListItem({
    selected: true,
    clickable: true,
    children: createSampleContent('Selected + Clickable', 'Selected overrides hover')
  }),
  parameters: {
    docs: {
      description: {
        story: 'When both selected and clickable, selected background takes precedence over hover.'
      }
    }
  }
}`,...(U=(F=u.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var _,G,R;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => createListItem({
    disabled: true,
    selected: true,
    children: createSampleContent('Disabled + Selected', 'Disabled overrides selected')
  }),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state overrides selected state.'
      }
    }
  }
}`,...(R=(G=h.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var V,q,K;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => createListItem({
    clickable: true,
    children: createContentWithAvatar('John Doe', 'john.doe@example.com')
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListItem with avatar content. **Note:** ListItem does not style the avatar — that is owned by the avatar component.'
      }
    }
  }
}`,...(K=(q=b.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; align-items: center; gap: 12px;';

    // Icon placeholder
    const icon = document.createElement('span');
    icon.innerHTML = \`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
    </svg>\`;
    icon.style.cssText = 'display: flex; color: var(--neutral-500);';
    container.appendChild(icon);

    // Text
    const text = createSampleContent('Item with icon', 'Icons are styled by their own component');
    container.appendChild(text);
    return createListItem({
      clickable: true,
      children: container
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'ListItem with icon content. **Note:** ListItem does not style the icon — that is owned by the icon component.'
      }
    }
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;';
    container.setAttribute('role', 'list');
    const items = [{
      name: 'Alice Johnson',
      email: 'alice@example.com',
      selected: false
    }, {
      name: 'Bob Smith',
      email: 'bob@example.com',
      selected: true
    }, {
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      selected: false
    }, {
      name: 'Diana Prince',
      email: 'diana@example.com',
      disabled: true
    }, {
      name: 'Edward Norton',
      email: 'edward@example.com',
      selected: false
    }];
    items.forEach((data, index) => {
      const item = createListItem({
        clickable: !data.disabled,
        selected: data.selected,
        disabled: data.disabled,
        children: createContentWithAvatar(data.name, data.email)
      });

      // Remove bottom border from last item
      if (index === items.length - 1) {
        item.style.borderBottom = 'none';
      }
      container.appendChild(item);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Multiple list items demonstrating various states:
- Default clickable items
- One selected item (Bob Smith)
- One disabled item (Diana Prince)

**Note:** List container styling is NOT owned by ListItem. The border/radius wrapper is for demo purposes only.
        \`
      }
    }
  }
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    const states: Array<{
      label: string;
      props: ListItemProps;
    }> = [{
      label: 'Default (static)',
      props: {}
    }, {
      label: 'Clickable',
      props: {
        clickable: true
      }
    }, {
      label: 'Selected',
      props: {
        selected: true
      }
    }, {
      label: 'Selected + Clickable',
      props: {
        selected: true,
        clickable: true
      }
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }, {
      label: 'Disabled + Selected',
      props: {
        disabled: true,
        selected: true
      }
    }];
    states.forEach(({
      label,
      props
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'font-size: 12px; color: var(--neutral-500); padding-left: 4px;';
      labelEl.textContent = label;
      const itemWrapper = document.createElement('div');
      itemWrapper.style.cssText = 'border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;';
      const item = createListItem({
        ...props,
        children: createSampleContent('List item', 'Supporting text')
      });
      item.style.borderBottom = 'none';
      itemWrapper.appendChild(item);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(itemWrapper);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all ListItem states showing the visual hierarchy.'
      }
    }
  }
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const ie=["Default","Hover","Selected","Disabled","Clickable","Static","SelectedAndClickable","DisabledAndSelected","WithAvatar","WithIcon","MultipleItems","AllStates"];export{x as AllStates,p as Clickable,i as Default,d as Disabled,h as DisabledAndSelected,c as Hover,y as MultipleItems,l as Selected,u as SelectedAndClickable,m as Static,b as WithAvatar,v as WithIcon,ie as __namedExportsOrder,oe as default};
