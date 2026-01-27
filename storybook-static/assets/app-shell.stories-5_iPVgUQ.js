import{c as i}from"./app-shell-CLFgneCT.js";import{c as E,a as o,b as ae}from"./global-nav-l0iysLZC.js";const ce={title:"1. Components / 3. Level 3 / AppShell",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## AppShell

**Tier 3 — Composite Layout Component**

AppShell defines the high-level page layout for LFX One. It composes major regions (navigation, header, content, optional aside) and establishes spacing, scrolling, and containment rules.

### ⚠️ Important

**AppShell does NOT own styling of children.**

**AppShell does NOT implement routing.**

**AppShell does NOT manage navigation state.**

Those responsibilities belong to:
- **Child components:** own their own styling, interaction, and state
- **Parent application:** routing logic, data fetching, state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Page layout structure | Text styling |
| Region positioning | Icon styling |
| Container padding/gaps | GlobalNav logic |
| Scroll containment | ProjectSelector logic |
| | Routing or URL state |

### Non-Goals

- Does NOT implement routing
- Does NOT style child components
- Does NOT manage active navigation state
- Does NOT implement responsiveness beyond layout rules
- Does NOT implement animations or transitions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-app-shell-surface-background\` |
| Container border | \`--color-app-shell-surface-border\` |
| Container radius | \`--radius-app-shell\` |
| Container padding | \`--spacing-app-shell-padding\` |
| Region gap | \`--spacing-app-shell-region-gap\` |
| Nav width | \`--spacing-app-shell-nav-width\` |

### Composition

AppShell exposes named slots:
- **nav** (optional) — Navigation region
- **header** (optional) — Header region
- **content** (required) — Main content region
- **aside** (optional) — Aside region
        `}}},argTypes:{withBorder:{control:"boolean",description:"Apply container border"},withBackground:{control:"boolean",description:"Apply surface background"},dense:{control:"boolean",description:"Reduced spacing mode"}}};function s(r,e){const t=document.createElement("div");t.style.cssText="display: flex; align-items: center; gap: 12px;";const n=document.createElement("span");n.textContent=e,n.style.cssText="font-size: 18px;",t.appendChild(n);const a=document.createElement("span");return a.textContent=r,a.style.cssText="font-size: 14px; font-weight: 500; color: var(--text-primary);",t.appendChild(a),t}function d(r="dashboard"){const e=[o({id:"dashboard",children:s("Dashboard","📊")}),o({id:"projects",children:s("Projects","📁")}),o({id:"team",children:s("Team","👥")}),o({id:"settings",children:s("Settings","⚙️")})];return ae({withBackground:!0,activeItemId:r,children:E(e)})}function l(r="Application Header"){const e=document.createElement("div");e.style.cssText=`
    padding: 16px 24px;
    background: var(--color-white);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const t=document.createElement("h1");t.textContent=r,t.style.cssText="margin: 0; font-size: 20px; font-weight: 600; color: var(--text-primary);",e.appendChild(t);const n=document.createElement("div");return n.style.cssText="display: flex; gap: 12px;",n.innerHTML='<span style="color: var(--text-secondary); font-size: 14px;">Actions</span>',e.appendChild(n),e}function c(r="Main Content Area"){const e=document.createElement("div");e.style.cssText=`
    padding: 24px;
    background: var(--color-white);
  `;const t=document.createElement("h2");t.textContent=r,t.style.cssText="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);",e.appendChild(t);for(let n=0;n<20;n++){const a=document.createElement("p");a.textContent=`Sample paragraph ${n+1}. This demonstrates scrollable content in the main region.`,a.style.cssText="margin: 0 0 12px 0; color: var(--text-secondary); line-height: 1.5;",e.appendChild(a)}return e}function oe(r="Aside Panel"){const e=document.createElement("div");e.style.cssText=`
    width: 280px;
    padding: 24px;
    background: var(--color-white);
    border-left: 1px solid var(--neutral-200);
  `;const t=document.createElement("h3");t.textContent=r,t.style.cssText="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: var(--text-primary);",e.appendChild(t);const n=document.createElement("p");return n.textContent="Aside content goes here. This might be a sidebar with additional information or actions.",n.style.cssText="margin: 0; color: var(--text-secondary); font-size: 14px; line-height: 1.5;",e.appendChild(n),e}const h={render:()=>i({nav:d(),content:c()}),parameters:{docs:{description:{story:"Default AppShell with navigation and content regions."}}}},m={render:()=>i({nav:d(),header:l(),content:c()}),parameters:{docs:{description:{story:"AppShell with navigation, header, and content regions."}}}},g={render:()=>i({nav:d(),header:l(),content:c(),aside:oe()}),parameters:{docs:{description:{story:"AppShell with all four regions: navigation, header, content, and aside."}}}},u={render:()=>i({withBackground:!0,nav:d(),header:l(),content:c()}),parameters:{docs:{description:{story:"AppShell with surface background applied."}}}},v={render:()=>i({withBorder:!0,nav:d(),header:l(),content:c()}),parameters:{docs:{description:{story:"AppShell with container border applied."}}}},y={render:()=>i({dense:!0,nav:d(),header:l(),content:c()}),parameters:{docs:{description:{story:"Dense variant with reduced spacing between regions."}}}},x={render:()=>i({content:c("Content Only - No Navigation or Header")}),parameters:{docs:{description:{story:"AppShell with only the content region (no nav or header)."}}}},S={render:()=>i({header:l("No Navigation"),content:c("Content spans full width without navigation")}),parameters:{docs:{description:{story:"AppShell without navigation. Content expands to fill the space."}}}},b={render:()=>i({nav:d(),content:c("Content without header")}),parameters:{docs:{description:{story:"AppShell without header region."}}}},w={render:()=>{const r=E([o({id:"home",children:s("Home","🏠")}),o({id:"dashboard",children:s("Dashboard","📊")}),o({id:"projects",children:s("Projects","📁")}),o({id:"analytics",children:s("Analytics","📈")})]),e=E([o({id:"settings",children:s("Settings","⚙️")}),o({id:"help",children:s("Help","❓")})]),t=ae({withBackground:!0,activeItemId:"dashboard",children:[r,e]}),n=document.createElement("div");n.style.cssText=`
      padding: 16px 24px;
      background: var(--color-white);
      border-bottom: 1px solid var(--neutral-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;const a=document.createElement("div");a.innerHTML=`
      <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary);">
        <span style="color: var(--text-primary); font-weight: 600;">Dashboard</span>
        <span>/</span>
        <span>Overview</span>
      </div>
    `,n.appendChild(a);const C=document.createElement("div");C.textContent="User Menu",C.style.cssText="font-size: 14px; color: var(--text-secondary);",n.appendChild(C);const p=document.createElement("div");p.style.cssText="padding: 24px; background: var(--neutral-50);";const f=document.createElement("h1");f.textContent="Dashboard Overview",f.style.cssText="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: var(--text-primary);",p.appendChild(f);const N=document.createElement("div");N.style.cssText="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;";for(let A=0;A<6;A++){const T=document.createElement("div");T.style.cssText=`
        padding: 20px;
        background: var(--color-white);
        border: 1px solid var(--neutral-200);
        border-radius: 8px;
      `,T.innerHTML=`
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: var(--text-primary);">Metric ${A+1}</h3>
        <p style="margin: 0; font-size: 24px; font-weight: 700; color: var(--accent-600);">1,234</p>
      `,N.appendChild(T)}return p.appendChild(N),i({nav:t,header:n,content:p})},parameters:{docs:{description:{story:`
In-context example showing a realistic application layout with GlobalNav, header with breadcrumb, and dashboard content.

**Component ownership:**
- **AppShell:** Page layout structure, region positioning, scroll behavior
- **GlobalNav:** Navigation styling, selected item highlight
- **Header:** Header content styling (breadcrumb, user menu)
- **Content:** Main content styling (cards, typography)

**Note:** AppShell does NOT style these children. It only provides the layout structure.
        `}}}};var I,H,O;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => createAppShell({
    nav: createSampleNav(),
    content: createSampleContent()
  }),
  parameters: {
    docs: {
      description: {
        story: 'Default AppShell with navigation and content regions.'
      }
    }
  }
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var k,D,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => createAppShell({
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent()
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with navigation, header, and content regions.'
      }
    }
  }
}`,...(z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var B,G,M;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => createAppShell({
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
    aside: createSampleAside()
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with all four regions: navigation, header, content, and aside.'
      }
    }
  }
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var j,L,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => createAppShell({
    withBackground: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent()
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with surface background applied.'
      }
    }
  }
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,R,U;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => createAppShell({
    withBorder: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent()
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with container border applied.'
      }
    }
  }
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,_,q;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => createAppShell({
    dense: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent()
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced spacing between regions.'
      }
    }
  }
}`,...(q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var F,X,J;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => createAppShell({
    content: createSampleContent('Content Only - No Navigation or Header')
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with only the content region (no nav or header).'
      }
    }
  }
}`,...(J=(X=x.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,V;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => createAppShell({
    header: createSampleHeader('No Navigation'),
    content: createSampleContent('Content spans full width without navigation')
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell without navigation. Content expands to fill the space.'
      }
    }
  }
}`,...(V=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => createAppShell({
    nav: createSampleNav(),
    content: createSampleContent('Content without header')
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell without header region.'
      }
    }
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    // Create realistic navigation
    const primarySection = createNavSection([createNavItem({
      id: 'home',
      children: createNavItemContent('Home', '🏠')
    }), createNavItem({
      id: 'dashboard',
      children: createNavItemContent('Dashboard', '📊')
    }), createNavItem({
      id: 'projects',
      children: createNavItemContent('Projects', '📁')
    }), createNavItem({
      id: 'analytics',
      children: createNavItemContent('Analytics', '📈')
    })]);
    const secondarySection = createNavSection([createNavItem({
      id: 'settings',
      children: createNavItemContent('Settings', '⚙️')
    }), createNavItem({
      id: 'help',
      children: createNavItemContent('Help', '❓')
    })]);
    const nav = createGlobalNav({
      withBackground: true,
      activeItemId: 'dashboard',
      children: [primarySection, secondarySection]
    });

    // Create header with breadcrumb
    const header = document.createElement('div');
    header.style.cssText = \`
      padding: 16px 24px;
      background: var(--color-white);
      border-bottom: 1px solid var(--neutral-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
    \`;
    const breadcrumb = document.createElement('div');
    breadcrumb.innerHTML = \`
      <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary);">
        <span style="color: var(--text-primary); font-weight: 600;">Dashboard</span>
        <span>/</span>
        <span>Overview</span>
      </div>
    \`;
    header.appendChild(breadcrumb);
    const user = document.createElement('div');
    user.textContent = 'User Menu';
    user.style.cssText = 'font-size: 14px; color: var(--text-secondary);';
    header.appendChild(user);

    // Create content
    const content = document.createElement('div');
    content.style.cssText = 'padding: 24px; background: var(--neutral-50);';
    const title = document.createElement('h1');
    title.textContent = 'Dashboard Overview';
    title.style.cssText = 'margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: var(--text-primary);';
    content.appendChild(title);

    // Add cards grid
    const cardsGrid = document.createElement('div');
    cardsGrid.style.cssText = 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;';
    for (let i = 0; i < 6; i++) {
      const card = document.createElement('div');
      card.style.cssText = \`
        padding: 20px;
        background: var(--color-white);
        border: 1px solid var(--neutral-200);
        border-radius: 8px;
      \`;
      card.innerHTML = \`
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: var(--text-primary);">Metric \${i + 1}</h3>
        <p style="margin: 0; font-size: 24px; font-weight: 700; color: var(--accent-600);">1,234</p>
      \`;
      cardsGrid.appendChild(card);
    }
    content.appendChild(cardsGrid);
    return createAppShell({
      nav,
      header,
      content
    });
  },
  parameters: {
    docs: {
      description: {
        story: \`
In-context example showing a realistic application layout with GlobalNav, header with breadcrumb, and dashboard content.

**Component ownership:**
- **AppShell:** Page layout structure, region positioning, scroll behavior
- **GlobalNav:** Navigation styling, selected item highlight
- **Header:** Header content styling (breadcrumb, user menu)
- **Content:** Main content styling (cards, typography)

**Note:** AppShell does NOT style these children. It only provides the layout structure.
        \`
      }
    }
  }
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const de=["Default","WithHeader","WithAside","WithBackground","WithBorder","Dense","ContentOnly","NoNavigation","NoHeader","InContext"];export{x as ContentOnly,h as Default,y as Dense,w as InContext,b as NoHeader,S as NoNavigation,g as WithAside,u as WithBackground,v as WithBorder,m as WithHeader,de as __namedExportsOrder,ce as default};
