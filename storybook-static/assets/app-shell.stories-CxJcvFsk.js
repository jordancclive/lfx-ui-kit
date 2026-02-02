import{c as s}from"./app-shell-B-fH2tfM.js";import{c as E,a as o,b as re}from"./global-nav-l0iysLZC.js";const ce={title:"1. Components / 3. Organisms / 2. AppShell",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## AppShell

**Tier 3 — Composite Layout Component**

AppShell defines the high-level page layout for LFX One. It composes major regions (navigation, header, content, optional aside) and establishes the application frame structure.

### Visual Structure

**AppShell establishes the production application frame:**

- ✅ **Application background** (always present, not optional)
- ✅ **Content inset** from viewport edges (creates visual structure)
- ✅ **Structural connection** between navigation and content
- ✅ **Vertical rhythm** locked at top edge

**Result:** Pages feel anchored inside the application, not floating on canvas.

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
| Application background | GlobalNav logic |
| Content inset (horizontal padding) | ProjectSelector logic |
| Scroll containment | Routing or URL state |

### Visual Rules

1. **Background is always present** — AppShell uses \`--color-app-shell-surface-background\` by default
2. **Content is inset** — Horizontal padding (\`spacing-24\`) prevents content from touching viewport edges
3. **Nav aligns with content** — Top padding (\`spacing-16\`) locks vertical rhythm
4. **Gap separates regions** — Horizontal gap (\`spacing-16\`) between nav and content

### Token Bindings (Layout Only)

| Property | Token | Default |
|----------|-------|---------|
| Container background | \`--color-app-shell-surface-background\` | Always applied |
| Container border | \`--color-app-shell-surface-border\` | Via \`withBorder\` prop |
| Horizontal inset | \`spacing-24\` | Always applied |
| Vertical top padding | \`spacing-16\` | Always applied |
| Region gap | \`spacing-16\` | Always applied |
| Nav width | \`--spacing-app-shell-nav-width\` | 240px |

### Composition

AppShell exposes named slots:
- **nav** (optional) — Navigation region
- **header** (optional) — Header region
- **content** (required) — Main content region
- **aside** (optional) — Aside region
        `}}},argTypes:{withBorder:{control:"boolean",description:"Apply container border"},withBackground:{control:"boolean",description:"⚠️ DEPRECATED: Background is now always applied. This prop has no effect."},dense:{control:"boolean",description:"Reduced horizontal inset and region gap (from 24px/16px to 16px/8px)"}}};function i(a,e){const n=document.createElement("div");n.style.cssText="display: flex; align-items: center; gap: 12px;";const t=document.createElement("span");t.textContent=e,t.style.cssText="font-size: 18px;",n.appendChild(t);const r=document.createElement("span");return r.textContent=a,r.style.cssText="font-size: 14px; font-weight: 500; color: var(--text-primary);",n.appendChild(r),n}function d(a="dashboard"){const e=[o({id:"dashboard",children:i("Dashboard","📊")}),o({id:"projects",children:i("Projects","📁")}),o({id:"team",children:i("Team","👥")}),o({id:"settings",children:i("Settings","⚙️")})];return re({withBackground:!0,activeItemId:a,children:E(e)})}function p(a="Application Header"){const e=document.createElement("div");e.style.cssText=`
    padding: 16px 24px;
    background: var(--color-white);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;const n=document.createElement("h1");n.textContent=a,n.style.cssText="margin: 0; font-size: 20px; font-weight: 600; color: var(--text-primary);",e.appendChild(n);const t=document.createElement("div");return t.style.cssText="display: flex; gap: 12px;",t.innerHTML='<span style="color: var(--text-secondary); font-size: 14px;">Actions</span>',e.appendChild(t),e}function c(a="Main Content Area"){const e=document.createElement("div");e.style.cssText=`
    padding: 24px;
    background: var(--color-white);
  `;const n=document.createElement("h2");n.textContent=a,n.style.cssText="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);",e.appendChild(n);for(let t=0;t<20;t++){const r=document.createElement("p");r.textContent=`Sample paragraph ${t+1}. This demonstrates scrollable content in the main region.`,r.style.cssText="margin: 0 0 12px 0; color: var(--text-secondary); line-height: 1.5;",e.appendChild(r)}return e}function oe(a="Aside Panel"){const e=document.createElement("div");e.style.cssText=`
    width: 280px;
    padding: 24px;
    background: var(--color-white);
    border-left: 1px solid var(--neutral-200);
  `;const n=document.createElement("h3");n.textContent=a,n.style.cssText="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: var(--text-primary);",e.appendChild(n);const t=document.createElement("p");return t.textContent="Aside content goes here. This might be a sidebar with additional information or actions.",t.style.cssText="margin: 0; color: var(--text-secondary); font-size: 14px; line-height: 1.5;",e.appendChild(t),e}const h={render:()=>s({nav:d(),content:c()}),parameters:{docs:{description:{story:"Default AppShell with navigation and content regions."}}}},m={render:()=>s({nav:d(),header:p(),content:c()}),parameters:{docs:{description:{story:"AppShell with navigation, header, and content regions."}}}},u={render:()=>s({nav:d(),header:p(),content:c(),aside:oe()}),parameters:{docs:{description:{story:"AppShell with all four regions: navigation, header, content, and aside."}}}},g={render:()=>s({withBackground:!0,nav:d(),header:p(),content:c()}),parameters:{docs:{description:{story:"AppShell with surface background applied."}}}},v={render:()=>s({withBorder:!0,nav:d(),header:p(),content:c()}),parameters:{docs:{description:{story:"AppShell with container border applied."}}}},y={render:()=>s({dense:!0,nav:d(),header:p(),content:c()}),parameters:{docs:{description:{story:"Dense variant with reduced spacing between regions."}}}},x={render:()=>s({content:c("Content Only - No Navigation or Header")}),parameters:{docs:{description:{story:"AppShell with only the content region (no nav or header)."}}}},b={render:()=>s({header:p("No Navigation"),content:c("Content spans full width without navigation")}),parameters:{docs:{description:{story:"AppShell without navigation. Content expands to fill the space."}}}},w={render:()=>s({nav:d(),content:c("Content without header")}),parameters:{docs:{description:{story:"AppShell without header region."}}}},S={render:()=>{const a=E([o({id:"home",children:i("Home","🏠")}),o({id:"dashboard",children:i("Dashboard","📊")}),o({id:"projects",children:i("Projects","📁")}),o({id:"analytics",children:i("Analytics","📈")})]),e=E([o({id:"settings",children:i("Settings","⚙️")}),o({id:"help",children:i("Help","❓")})]),n=re({withBackground:!0,activeItemId:"dashboard",children:[a,e]}),t=document.createElement("div");t.style.cssText=`
      padding: 16px 24px;
      background: var(--color-white);
      border-bottom: 1px solid var(--neutral-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;const r=document.createElement("div");r.innerHTML=`
      <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary);">
        <span style="color: var(--text-primary); font-weight: 600;">Dashboard</span>
        <span>/</span>
        <span>Overview</span>
      </div>
    `,t.appendChild(r);const f=document.createElement("div");f.textContent="User Menu",f.style.cssText="font-size: 14px; color: var(--text-secondary);",t.appendChild(f);const l=document.createElement("div");l.style.cssText="padding: 24px; background: var(--neutral-50);";const C=document.createElement("h1");C.textContent="Dashboard Overview",C.style.cssText="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: var(--text-primary);",l.appendChild(C);const A=document.createElement("div");A.style.cssText="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;";for(let N=0;N<6;N++){const T=document.createElement("div");T.style.cssText=`
        padding: 20px;
        background: var(--color-white);
        border: 1px solid var(--neutral-200);
        border-radius: 8px;
      `,T.innerHTML=`
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: var(--text-primary);">Metric ${N+1}</h3>
        <p style="margin: 0; font-size: 24px; font-weight: 700; color: var(--accent-600);">1,234</p>
      `,A.appendChild(T)}return l.appendChild(A),s({nav:n,header:t,content:l})},parameters:{docs:{description:{story:`
In-context example showing a realistic application layout with GlobalNav, header with breadcrumb, and dashboard content.

**Component ownership:**
- **AppShell:** Page layout structure, region positioning, scroll behavior
- **GlobalNav:** Navigation styling, selected item highlight
- **Header:** Header content styling (breadcrumb, user menu)
- **Content:** Main content styling (cards, typography)

**Note:** AppShell does NOT style these children. It only provides the layout structure.
        `}}}};var H,k,I;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(k=h.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var z,O,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var B,G,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var P,j,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var R,W,V;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(W=v.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var U,$,_;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=($=y.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,F,X;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(F=x.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const de=["Default","WithHeader","WithAside","WithBackground","WithBorder","Dense","ContentOnly","NoNavigation","NoHeader","InContext"];export{x as ContentOnly,h as Default,y as Dense,S as InContext,w as NoHeader,b as NoNavigation,u as WithAside,g as WithBackground,v as WithBorder,m as WithHeader,de as __namedExportsOrder,ce as default};
