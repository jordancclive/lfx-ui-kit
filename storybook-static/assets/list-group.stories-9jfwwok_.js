import{c as a}from"./list-group-oA2mGORs.js";import{c as o}from"./list-item-CxESGsFY.js";const ae={title:"1. Components / 3. Level 3 / ListGroup",tags:["autodocs"],parameters:{docs:{description:{component:`
## ListGroup

**Tier 3 — Composite Layout Component**

ListGroup provides structural layout for vertical lists. It composes ListItem components and optionally applies container-level background and border styling.

### ⚠️ Important

**ListGroup does NOT own interaction states.**

Those responsibilities belong to:
- **ListItem:** hover, selected, disabled backgrounds
- **Child components:** text styling, icons, avatars
- **Parent controller:** selection logic, keyboard navigation

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing | ListItem hover/selected/disabled states |
| Container background | Text color or typography |
| Container border | Icons or avatars |
| Container radius | Selection logic |
| Container padding | Keyboard navigation |

### Non-Goals

- Does NOT manage list item state
- Does NOT implement selection logic
- Does NOT style child ListItem content
- Does NOT manage list virtualization
- Does NOT manage keyboard interactions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-list-surface-background\` |
| Container border | \`--color-list-surface-border\` |
| Container radius | \`--radius-list\` |
| Padding (with background) | \`--spacing-4\` |

### Composition

ListGroup expects \`ListItem\` children. Each ListItem manages its own:
- Hover state (when clickable)
- Selected state
- Disabled state
        `}}},argTypes:{withBackground:{control:"boolean",description:"Apply container background"},withBorder:{control:"boolean",description:"Apply container border"},dense:{control:"boolean",description:"Reduced spacing mode"}}};function x(t,e){const r=document.createElement("div");r.style.cssText="display: flex; flex-direction: column; gap: 2px;";const n=document.createElement("span");if(n.textContent=t,n.style.cssText="font-size: 14px; font-weight: 500; color: var(--text-primary);",r.appendChild(n),e){const s=document.createElement("span");s.textContent=e,s.style.cssText="font-size: 12px; color: var(--text-secondary);",r.appendChild(s)}return r}function f(t,e){const r=document.createElement("div");r.style.cssText="display: flex; align-items: center; gap: 12px;";const n=document.createElement("div");n.style.cssText=`
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
  `,n.textContent=t.charAt(0).toUpperCase(),r.appendChild(n);const s=x(t,e);return r.appendChild(s),r}function i(t=5){return["First item","Second item","Third item","Fourth item","Fifth item"].slice(0,t).map((r,n)=>o({clickable:!0,children:x(r,`Description for item ${n+1}`)}))}const d={render:()=>a({children:i(4)}),parameters:{docs:{description:{story:"Default ListGroup with no background or border. Items are stacked vertically with their own bottom borders."}}}},c={render:()=>a({withBackground:!0,children:i(4)}),parameters:{docs:{description:{story:"ListGroup with container background and padding."}}}},l={render:()=>a({withBorder:!0,children:i(4)}),parameters:{docs:{description:{story:"ListGroup with container border and rounded corners."}}}},m={render:()=>a({withBackground:!0,withBorder:!0,children:i(4)}),parameters:{docs:{description:{story:"ListGroup with both background and border for a card-like appearance."}}}},p={render:()=>a({withBackground:!0,withBorder:!0,dense:!0,children:i(4)}),parameters:{docs:{description:{story:"Dense variant with reduced padding."}}}},u={render:()=>{const t=[{name:"Alice Johnson",email:"alice@example.com"},{name:"Bob Smith",email:"bob@example.com"},{name:"Charlie Brown",email:"charlie@example.com"},{name:"Diana Prince",email:"diana@example.com"}].map(e=>o({clickable:!0,children:f(e.name,e.email)}));return a({withBorder:!0,children:t})},parameters:{docs:{description:{story:`
ListGroup composing ListItem components with rich content.

**Ownership:**
- ListGroup → container border/radius
- ListItem → hover background, bottom borders
- Content → text styling, avatar styling
        `}}}},h={render:()=>{const t=[{name:"Active User",email:"active@example.com",disabled:!1},{name:"Disabled User",email:"disabled@example.com",disabled:!0},{name:"Another Active",email:"another@example.com",disabled:!1},{name:"Also Disabled",email:"also@example.com",disabled:!0}].map(e=>o({clickable:!e.disabled,disabled:e.disabled,children:f(e.name,e.email)}));return a({withBorder:!0,children:t})},parameters:{docs:{description:{story:`
ListGroup with disabled items. 

**Important:** Disabled styling is owned by ListItem, not ListGroup.
        `}}}},b={render:()=>{const t=[{name:"Regular Item",email:"regular@example.com",selected:!1,disabled:!1},{name:"Selected Item",email:"selected@example.com",selected:!0,disabled:!1},{name:"Another Regular",email:"another@example.com",selected:!1,disabled:!1},{name:"Disabled Item",email:"disabled@example.com",selected:!1,disabled:!0},{name:"Selected + Disabled",email:"both@example.com",selected:!0,disabled:!0}].map(e=>o({clickable:!e.disabled,selected:e.selected,disabled:e.disabled,children:f(e.name,e.email)}));return a({withBorder:!0,children:t})},parameters:{docs:{description:{story:`
ListGroup showing mixed states: regular, selected, and disabled items.

**State ownership:**
- Selected background → ListItem
- Disabled styling → ListItem
- Container border → ListGroup

ListGroup does NOT control or know about these states.
        `}}}},g={render:()=>a({withBorder:!0,children:o({clickable:!0,children:x("Only item","This is the only item in the list")})}),parameters:{docs:{description:{story:"ListGroup with a single item."}}}},w={render:()=>{const t=Array.from({length:10},(e,r)=>o({clickable:!0,children:x(`Item ${r+1}`,`Description for item ${r+1}`)}));return a({withBorder:!0,children:t})},parameters:{docs:{description:{story:"ListGroup with many items. Note: ListGroup does not implement virtualization."}}}},y={render:()=>{const t=document.createElement("div");return t.style.cssText="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;",[{label:"Default",props:{}},{label:"With Background",props:{withBackground:!0}},{label:"With Border",props:{withBorder:!0}},{label:"Background + Border",props:{withBackground:!0,withBorder:!0}},{label:"Dense",props:{dense:!0,withBorder:!0}},{label:"Dense + Background",props:{dense:!0,withBackground:!0,withBorder:!0}}].forEach(({label:r,props:n})=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; gap: 8px;";const L=document.createElement("span");L.style.cssText="font-size: 12px; font-weight: 600; color: var(--neutral-500);",L.textContent=r;const te=a({...n,children:i(3)});s.appendChild(L),s.appendChild(te),t.appendChild(s)}),t},parameters:{docs:{description:{story:"Comparison of all ListGroup variants."}}}};var k,B,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => createListGroup({
    children: createSimpleItems(4)
  }),
  parameters: {
    docs: {
      description: {
        story: 'Default ListGroup with no background or border. Items are stacked vertically with their own bottom borders.'
      }
    }
  }
}`,...(v=(B=d.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var I,G,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => createListGroup({
    withBackground: true,
    children: createSimpleItems(4)
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with container background and padding.'
      }
    }
  }
}`,...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var D,S,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => createListGroup({
    withBorder: true,
    children: createSimpleItems(4)
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with container border and rounded corners.'
      }
    }
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,E,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => createListGroup({
    withBackground: true,
    withBorder: true,
    children: createSimpleItems(4)
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with both background and border for a card-like appearance.'
      }
    }
  }
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var W,N,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => createListGroup({
    withBackground: true,
    withBorder: true,
    dense: true,
    children: createSimpleItems(4)
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced padding.'
      }
    }
  }
}`,...(z=(N=p.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var P,R,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      name: 'Alice Johnson',
      email: 'alice@example.com'
    }, {
      name: 'Bob Smith',
      email: 'bob@example.com'
    }, {
      name: 'Charlie Brown',
      email: 'charlie@example.com'
    }, {
      name: 'Diana Prince',
      email: 'diana@example.com'
    }].map(data => createListItem({
      clickable: true,
      children: createContentWithAvatar(data.name, data.email)
    }));
    return createListGroup({
      withBorder: true,
      children: items
    });
  },
  parameters: {
    docs: {
      description: {
        story: \`
ListGroup composing ListItem components with rich content.

**Ownership:**
- ListGroup → container border/radius
- ListItem → hover background, bottom borders
- Content → text styling, avatar styling
        \`
      }
    }
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,M,_;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      name: 'Active User',
      email: 'active@example.com',
      disabled: false
    }, {
      name: 'Disabled User',
      email: 'disabled@example.com',
      disabled: true
    }, {
      name: 'Another Active',
      email: 'another@example.com',
      disabled: false
    }, {
      name: 'Also Disabled',
      email: 'also@example.com',
      disabled: true
    }].map(data => createListItem({
      clickable: !data.disabled,
      disabled: data.disabled,
      children: createContentWithAvatar(data.name, data.email)
    }));
    return createListGroup({
      withBorder: true,
      children: items
    });
  },
  parameters: {
    docs: {
      description: {
        story: \`
ListGroup with disabled items. 

**Important:** Disabled styling is owned by ListItem, not ListGroup.
        \`
      }
    }
  }
}`,...(_=(M=h.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var F,V,J;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      name: 'Regular Item',
      email: 'regular@example.com',
      selected: false,
      disabled: false
    }, {
      name: 'Selected Item',
      email: 'selected@example.com',
      selected: true,
      disabled: false
    }, {
      name: 'Another Regular',
      email: 'another@example.com',
      selected: false,
      disabled: false
    }, {
      name: 'Disabled Item',
      email: 'disabled@example.com',
      selected: false,
      disabled: true
    }, {
      name: 'Selected + Disabled',
      email: 'both@example.com',
      selected: true,
      disabled: true
    }].map(data => createListItem({
      clickable: !data.disabled,
      selected: data.selected,
      disabled: data.disabled,
      children: createContentWithAvatar(data.name, data.email)
    }));
    return createListGroup({
      withBorder: true,
      children: items
    });
  },
  parameters: {
    docs: {
      description: {
        story: \`
ListGroup showing mixed states: regular, selected, and disabled items.

**State ownership:**
- Selected background → ListItem
- Disabled styling → ListItem
- Container border → ListGroup

ListGroup does NOT control or know about these states.
        \`
      }
    }
  }
}`,...(J=(V=b.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var j,H,K;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => createListGroup({
    withBorder: true,
    children: createListItem({
      clickable: true,
      children: createSampleContent('Only item', 'This is the only item in the list')
    })
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with a single item.'
      }
    }
  }
}`,...(K=(H=g.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var q,Q,X;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const items = Array.from({
      length: 10
    }, (_, i) => createListItem({
      clickable: true,
      children: createSampleContent(\`Item \${i + 1}\`, \`Description for item \${i + 1}\`)
    }));
    return createListGroup({
      withBorder: true,
      children: items
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with many items. Note: ListGroup does not implement virtualization.'
      }
    }
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;';
    const variants: Array<{
      label: string;
      props: Partial<ListGroupProps>;
    }> = [{
      label: 'Default',
      props: {}
    }, {
      label: 'With Background',
      props: {
        withBackground: true
      }
    }, {
      label: 'With Border',
      props: {
        withBorder: true
      }
    }, {
      label: 'Background + Border',
      props: {
        withBackground: true,
        withBorder: true
      }
    }, {
      label: 'Dense',
      props: {
        dense: true,
        withBorder: true
      }
    }, {
      label: 'Dense + Background',
      props: {
        dense: true,
        withBackground: true,
        withBorder: true
      }
    }];
    variants.forEach(({
      label,
      props
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'font-size: 12px; font-weight: 600; color: var(--neutral-500);';
      labelEl.textContent = label;
      const group = createListGroup({
        ...props,
        children: createSimpleItems(3)
      });
      wrapper.appendChild(labelEl);
      wrapper.appendChild(group);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all ListGroup variants.'
      }
    }
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const se=["Default","WithBackground","WithBorder","WithBackgroundAndBorder","Dense","WithListItems","DisabledItems","MixedStates","SingleItem","ManyItems","AllVariants"];export{y as AllVariants,d as Default,p as Dense,h as DisabledItems,w as ManyItems,b as MixedStates,g as SingleItem,c as WithBackground,m as WithBackgroundAndBorder,l as WithBorder,u as WithListItems,se as __namedExportsOrder,ae as default};
