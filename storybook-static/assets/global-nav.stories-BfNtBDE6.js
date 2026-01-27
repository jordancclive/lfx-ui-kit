import{b as o,c as a,a as e}from"./global-nav-l0iysLZC.js";const Q={title:"1. Components / 3. Level 3 / GlobalNav",tags:["autodocs"],parameters:{docs:{description:{component:`
## GlobalNav

**Tier 3 — Composite Layout Component**

GlobalNav provides structural layout for application navigation. It renders vertical navigation sections with support for selected item highlighting.

### ⚠️ Important

**GlobalNav does NOT own icon or text styling.**

Those responsibilities belong to:
- **Nav items:** text styling, icon styling, click handling
- **Parent controller:** routing logic, activeItemId state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical layout structure | Text color or typography |
| Section spacing | Icon styling |
| Container background/border | Active/hover states of items |
| Selected item background | Routing logic |
| Padding and gaps | Focus management |

### Non-Goals

- Does NOT implement routing or URL management
- Does NOT style text or icons
- Does NOT manage keyboard navigation
- Does NOT implement collapsible sections
- Does NOT manage focus states
- Does NOT implement dropdown menus

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-nav-surface-background\` |
| Container border | \`--color-nav-surface-border\` |
| Selected item background | \`--color-nav-item-background-selected\` |
| Container radius | \`--radius-nav\` |
| Container padding | \`--spacing-nav-padding\` |
| Section gap | \`--spacing-nav-section-gap\` |
| Item gap | \`--spacing-nav-item-gap\` |

### Composition

GlobalNav expects:
- **Nav sections:** Containers grouping related nav items
- **Nav items:** Individual elements with \`data-nav-item-id\` attribute

Selection is controlled via the \`activeItemId\` prop.
        `}}},argTypes:{activeItemId:{control:"text",description:"ID of currently selected nav item"},withBackground:{control:"boolean",description:"Apply container background"},withBorder:{control:"boolean",description:"Apply container border"},dense:{control:"boolean",description:"Reduced spacing mode"}}};function t(n,s){const i=document.createElement("div");if(i.style.cssText="display: flex; align-items: center; gap: 12px; width: 100%;",s){const r=document.createElement("div");r.style.cssText=`
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: var(--neutral-300);
      flex-shrink: 0;
      color: var(--neutral-600);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 600;
    `,r.textContent=s.charAt(0).toUpperCase(),i.appendChild(r)}const c=document.createElement("span");return c.textContent=n,c.style.cssText=`
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
  `,i.appendChild(c),i}function d(){return[e({id:"home",children:t("Home","🏠")}),e({id:"projects",children:t("Projects","📁")}),e({id:"team",children:t("Team","👥")}),e({id:"settings",children:t("Settings","⚙️")})]}const l={render:()=>o({children:a(d())})},p={render:()=>o({activeItemId:"projects",children:a(d())}),parameters:{docs:{description:{story:"Nav with selected item (Projects). The selected background is applied by matching `activeItemId` to `data-nav-item-id`."}}}},m={render:()=>o({withBackground:!0,activeItemId:"home",children:a(d())}),parameters:{docs:{description:{story:"Nav with container background and padding."}}}},u={render:()=>o({withBorder:!0,activeItemId:"team",children:a(d())}),parameters:{docs:{description:{story:"Nav with container border."}}}},h={render:()=>o({withBorder:!0,dense:!0,activeItemId:"settings",children:a(d())}),parameters:{docs:{description:{story:"Dense variant with reduced spacing."}}}},v={render:()=>{const n=a([e({id:"home",children:t("Home","🏠")}),e({id:"projects",children:t("Projects","📁")}),e({id:"team",children:t("Team","👥")})]),s=a([e({id:"settings",children:t("Settings","⚙️")}),e({id:"help",children:t("Help","❓")}),e({id:"logout",children:t("Logout","🚪")})]);return o({withBorder:!0,activeItemId:"projects",children:[n,s]})},parameters:{docs:{description:{story:"Nav with multiple sections. Sections are spaced using `--spacing-nav-section-gap`."}}}},g={render:()=>{const n=document.createElement("div");n.style.cssText=`
      display: flex;
      gap: 24px;
      padding: 24px;
      background: var(--neutral-50);
      min-height: 400px;
    `;const s=a([e({id:"dashboard",children:t("Dashboard","📊")}),e({id:"analytics",children:t("Analytics","📈")}),e({id:"reports",children:t("Reports","📄")}),e({id:"users",children:t("Users","👤")})]),i=a([e({id:"settings",children:t("Settings","⚙️")}),e({id:"profile",children:t("Profile","👤")})]),c=o({withBackground:!0,withBorder:!0,activeItemId:"analytics",children:[s,i]});c.style.cssText="width: 240px; height: fit-content;";const r=document.createElement("div");return r.style.cssText=`
      flex: 1;
      background: var(--color-white);
      border: 1px solid var(--neutral-200);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 14px;
    `,r.textContent="Main content area",n.appendChild(c),n.appendChild(r),n},parameters:{docs:{description:{story:`
In-context example showing GlobalNav in a typical application layout.

**Component ownership:**
- **GlobalNav:** Layout structure, selected background, container styling
- **Nav items:** Icon/text styling (placeholder icons shown here)
- **Parent:** Routing logic, activeItemId management (static in this demo)

**Note:** Icons in this example are styled inline for demonstration. In a real application, icons would be styled by their own components.
        `}}}},I={render:()=>{const n=[e({id:"home",children:t("Home")}),e({id:"projects",children:t("Projects")}),e({id:"team",children:t("Team")}),e({id:"settings",children:t("Settings")})];return o({withBorder:!0,activeItemId:"projects",children:a(n)})},parameters:{docs:{description:{story:"Nav without icons. GlobalNav does not require icons — it only provides layout."}}}},N={render:()=>{const n=document.createElement("div");return n.style.cssText="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;",[{label:"Default",props:{}},{label:"With Background",props:{withBackground:!0}},{label:"With Border",props:{withBorder:!0}},{label:"Background + Border",props:{withBackground:!0,withBorder:!0}},{label:"Selected Item",props:{withBorder:!0,activeItemId:"projects"}},{label:"Dense",props:{withBorder:!0,dense:!0,activeItemId:"home"}}].forEach(({label:i,props:c})=>{const r=document.createElement("div");r.style.cssText="display: flex; flex-direction: column; gap: 8px;";const y=document.createElement("span");y.style.cssText="font-size: 12px; font-weight: 600; color: var(--neutral-500);",y.textContent=i;const J=o({...c,children:a([e({id:"home",children:t("Home","🏠")}),e({id:"projects",children:t("Projects","📁")}),e({id:"team",children:t("Team","👥")})])});r.appendChild(y),r.appendChild(J),n.appendChild(r)}),n},parameters:{docs:{description:{story:"Comparison of all GlobalNav variants."}}}};var b,x,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => createGlobalNav({
    children: createNavSection(createSampleNavItems())
  })
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,f,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => createGlobalNav({
    activeItemId: 'projects',
    children: createNavSection(createSampleNavItems())
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with selected item (Projects). The selected background is applied by matching \`activeItemId\` to \`data-nav-item-id\`.'
      }
    }
  }
}`,...(S=(f=p.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,k,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => createGlobalNav({
    withBackground: true,
    activeItemId: 'home',
    children: createNavSection(createSampleNavItems())
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with container background and padding.'
      }
    }
  }
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,G,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => createGlobalNav({
    withBorder: true,
    activeItemId: 'team',
    children: createNavSection(createSampleNavItems())
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with container border.'
      }
    }
  }
}`,...(E=(G=u.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var D,P,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => createGlobalNav({
    withBorder: true,
    dense: true,
    activeItemId: 'settings',
    children: createNavSection(createSampleNavItems())
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced spacing.'
      }
    }
  }
}`,...(O=(P=h.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var W,A,H;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const primarySection = createNavSection([createNavItem({
      id: 'home',
      children: createNavItemContent('Home', '🏠')
    }), createNavItem({
      id: 'projects',
      children: createNavItemContent('Projects', '📁')
    }), createNavItem({
      id: 'team',
      children: createNavItemContent('Team', '👥')
    })]);
    const secondarySection = createNavSection([createNavItem({
      id: 'settings',
      children: createNavItemContent('Settings', '⚙️')
    }), createNavItem({
      id: 'help',
      children: createNavItemContent('Help', '❓')
    }), createNavItem({
      id: 'logout',
      children: createNavItemContent('Logout', '🚪')
    })]);
    return createGlobalNav({
      withBorder: true,
      activeItemId: 'projects',
      children: [primarySection, secondarySection]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav with multiple sections. Sections are spaced using \`--spacing-nav-section-gap\`.'
      }
    }
  }
}`,...(H=(A=v.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,R,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      gap: 24px;
      padding: 24px;
      background: var(--neutral-50);
      min-height: 400px;
    \`;

    // Create nav
    const primaryNav = createNavSection([createNavItem({
      id: 'dashboard',
      children: createNavItemContent('Dashboard', '📊')
    }), createNavItem({
      id: 'analytics',
      children: createNavItemContent('Analytics', '📈')
    }), createNavItem({
      id: 'reports',
      children: createNavItemContent('Reports', '📄')
    }), createNavItem({
      id: 'users',
      children: createNavItemContent('Users', '👤')
    })]);
    const secondaryNav = createNavSection([createNavItem({
      id: 'settings',
      children: createNavItemContent('Settings', '⚙️')
    }), createNavItem({
      id: 'profile',
      children: createNavItemContent('Profile', '👤')
    })]);
    const nav = createGlobalNav({
      withBackground: true,
      withBorder: true,
      activeItemId: 'analytics',
      children: [primaryNav, secondaryNav]
    });
    nav.style.cssText = 'width: 240px; height: fit-content;';

    // Create main content area (placeholder)
    const content = document.createElement('div');
    content.style.cssText = \`
      flex: 1;
      background: var(--color-white);
      border: 1px solid var(--neutral-200);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 14px;
    \`;
    content.textContent = 'Main content area';
    container.appendChild(nav);
    container.appendChild(content);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: \`
In-context example showing GlobalNav in a typical application layout.

**Component ownership:**
- **GlobalNav:** Layout structure, selected background, container styling
- **Nav items:** Icon/text styling (placeholder icons shown here)
- **Parent:** Routing logic, activeItemId management (static in this demo)

**Note:** Icons in this example are styled inline for demonstration. In a real application, icons would be styled by their own components.
        \`
      }
    }
  }
}`,...(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var M,U,V;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const items = [createNavItem({
      id: 'home',
      children: createNavItemContent('Home')
    }), createNavItem({
      id: 'projects',
      children: createNavItemContent('Projects')
    }), createNavItem({
      id: 'team',
      children: createNavItemContent('Team')
    }), createNavItem({
      id: 'settings',
      children: createNavItemContent('Settings')
    })];
    return createGlobalNav({
      withBorder: true,
      activeItemId: 'projects',
      children: createNavSection(items)
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav without icons. GlobalNav does not require icons — it only provides layout.'
      }
    }
  }
}`,...(V=(U=I.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var _,q,F;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;';
    const variants: Array<{
      label: string;
      props: Partial<GlobalNavProps>;
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
      label: 'Selected Item',
      props: {
        withBorder: true,
        activeItemId: 'projects'
      }
    }, {
      label: 'Dense',
      props: {
        withBorder: true,
        dense: true,
        activeItemId: 'home'
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
      const nav = createGlobalNav({
        ...props,
        children: createNavSection([createNavItem({
          id: 'home',
          children: createNavItemContent('Home', '🏠')
        }), createNavItem({
          id: 'projects',
          children: createNavItemContent('Projects', '📁')
        }), createNavItem({
          id: 'team',
          children: createNavItemContent('Team', '👥')
        })])
      });
      wrapper.appendChild(labelEl);
      wrapper.appendChild(nav);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all GlobalNav variants.'
      }
    }
  }
}`,...(F=(q=N.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const X=["Default","SelectedItem","WithBackground","WithBorder","Dense","MultipleSections","InContext","WithoutIcons","AllVariants"];export{N as AllVariants,l as Default,h as Dense,g as InContext,v as MultipleSections,p as SelectedItem,m as WithBackground,u as WithBorder,I as WithoutIcons,X as __namedExportsOrder,Q as default};
