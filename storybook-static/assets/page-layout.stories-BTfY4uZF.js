import{c as g}from"./page-layout-DDkSngPm.js";import{c as r}from"./app-header-BUQjadsZ.js";import{c as de}from"./app-shell-B-fH2tfM.js";import{b as pe,c as me,a as h}from"./global-nav-l0iysLZC.js";import{c as ue}from"./list-group-oA2mGORs.js";import{c as y}from"./list-item-CxESGsFY.js";const be={title:"1. Components / 3. Organisms / 7. PageLayout",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## PageLayout

**Tier 3 — Composite Layout Component**

PageLayout provides a consistent content wrapper for all LFX One pages. It enforces width, padding, and vertical spacing rules inside the AppShell content area.

### ⚠️ Important

**PageLayout does NOT style child components.**

**PageLayout does NOT implement page headers or titles.**

**PageLayout does NOT manage responsive breakpoints beyond max-width.**

Those responsibilities belong to:
- **AppHeader:** page titles, descriptions, actions
- **Child components:** own their own styling and behavior
- **Parent application:** routing, data fetching

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Content max-width behavior | Typography |
| Horizontal padding | Page header (use AppHeader) |
| Vertical spacing between sections | Cards, tables, lists, charts |
| Scroll containment | Data fetching or routing |
| Dense spacing variant | Visual styling of children |

### How It Fits Together

\`\`\`
AppShell
├── nav: GlobalNav
├── header: (optional)
└── content: PageLayout ← YOU ARE HERE
    ├── AppHeader
    ├── [Section 1]
    ├── [Section 2]
    └── [Section 3]
\`\`\`

### NOT Responsible For

- Does NOT style child components
- Does NOT implement page headers (use AppHeader)
- Does NOT manage responsive breakpoints beyond layout constraints
- Does NOT apply background or surface styling by default
- Does NOT manage focus or keyboard navigation

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Max width | \`--spacing-page-max-width\` |
| Horizontal padding | \`--spacing-page-padding-x\` |
| Section gap | \`--spacing-page-section-gap\` |
| Section gap (dense) | \`--spacing-page-section-gap-dense\` |

### Usage Example

\`\`\`typescript
createAppShell({
  nav: createGlobalNav({ ... }),
  content: createPageLayout({
    children: [
      createAppHeader({ title: 'Projects', description: '...' }),
      createTableGrid({ ... }),
      createListGroup({ ... }),
    ]
  })
})
\`\`\`
        `}}},argTypes:{dense:{control:"boolean",description:"Reduced vertical spacing between sections"},fullWidth:{control:"boolean",description:"Disable max-width constraint"}},render:n=>g(n)};function e(n,t="150px"){const a=document.createElement("div");return a.style.cssText=`
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    min-height: ${t};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-size: 14px;
    color: #64748b;
  `,a.textContent=n,a}const o={args:{children:[r({title:"Dashboard",description:"Overview of your projects and activity"}),e("Content Section 1"),e("Content Section 2"),e("Content Section 3")]}},i={args:{children:[r({title:"Settings",description:"Configure your preferences"}),e("General Settings"),e("Notification Settings"),e("Security Settings"),e("Integration Settings")],dense:!0}},c={args:{children:[r({title:"Analytics",description:"Full-width data visualization"}),e("Wide Chart Area","300px"),e("Data Table")],fullWidth:!0}},s={args:{children:[r({title:"Long Page",description:"Scroll to see more content"}),e("Section 1","200px"),e("Section 2","200px"),e("Section 3","200px"),e("Section 4","200px"),e("Section 5","200px"),e("Section 6","200px"),e("Section 7","200px"),e("Section 8","200px")]},parameters:{layout:"fullscreen"}},l={args:{children:[r({title:"Project Overview",description:"Summary of project status and metrics"}),e("Key Metrics Row","100px"),e("Activity Chart","250px"),e("Recent Commits Table","200px"),e("Team Members List","150px")]}},d={render:()=>{const n=pe({activeItemId:"dashboard",sections:[me({children:[h({id:"dashboard"}),h({id:"projects"}),h({id:"team"}),h({id:"settings"})]})]}),t=g({children:[r({title:"Dashboard",description:"Welcome back! Here's what's happening with your projects."}),e("Quick Stats","120px"),e("Recent Activity","200px"),e("Project Summary","180px")]});return de({nav:n,content:t})},parameters:{layout:"fullscreen"}},p={args:{children:[e("Content Section 1"),e("Content Section 2"),e("Content Section 3")]}},m={args:{children:[r({title:"Team Members",description:"Manage your team and permissions"}),ue({children:[y({children:(()=>{const t=document.createElement("div");return t.textContent="John Doe - Admin",t.style.padding="8px 0",t})(),clickable:!0}),y({children:(()=>{const t=document.createElement("div");return t.textContent="Jane Smith - Editor",t.style.padding="8px 0",t})(),clickable:!0}),y({children:(()=>{const t=document.createElement("div");return t.textContent="Bob Wilson - Viewer",t.style.padding="8px 0",t})(),clickable:!0})],withBorder:!0,withBackground:!0}),e("Pending Invitations","120px")]}},u={render:()=>{const n=document.createElement("div");n.style.cssText=`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      padding: 24px;
      background: #f8fafc;
    `;const t=document.createElement("div");t.innerHTML='<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';const a=g({children:[e("Section 1","80px"),e("Section 2","80px"),e("Section 3","80px")]});t.appendChild(a);const S=document.createElement("div");S.innerHTML='<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';const le=g({children:[e("Section 1","80px"),e("Section 2","80px"),e("Section 3","80px")],dense:!0});return S.appendChild(le),n.appendChild(t),n.appendChild(S),n},parameters:{layout:"fullscreen"}};var x,f,b,v,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Dashboard',
      description: 'Overview of your projects and activity'
    }), createPlaceholderSection('Content Section 1'), createPlaceholderSection('Content Section 2'), createPlaceholderSection('Content Section 3')]
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Default PageLayout with standard spacing",...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var P,L,w,T,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Settings',
      description: 'Configure your preferences'
    }), createPlaceholderSection('General Settings'), createPlaceholderSection('Notification Settings'), createPlaceholderSection('Security Settings'), createPlaceholderSection('Integration Settings')],
    dense: true
  }
}`,...(w=(L=i.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:"Dense spacing mode (reduced vertical gap)",...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var D,H,N,O,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Analytics',
      description: 'Full-width data visualization'
    }), createPlaceholderSection('Wide Chart Area', '300px'), createPlaceholderSection('Data Table')],
    fullWidth: true
  }
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"Full width mode (no max-width constraint)",...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.description}}};var I,E,W,G,M;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Long Page',
      description: 'Scroll to see more content'
    }), createPlaceholderSection('Section 1', '200px'), createPlaceholderSection('Section 2', '200px'), createPlaceholderSection('Section 3', '200px'), createPlaceholderSection('Section 4', '200px'), createPlaceholderSection('Section 5', '200px'), createPlaceholderSection('Section 6', '200px'), createPlaceholderSection('Section 7', '200px'), createPlaceholderSection('Section 8', '200px')]
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:"Demonstrates scrollable content behavior",...(M=(G=s.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var j,R,z,B,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Project Overview',
      description: 'Summary of project status and metrics'
    }), createPlaceholderSection('Key Metrics Row', '100px'), createPlaceholderSection('Activity Chart', '250px'), createPlaceholderSection('Recent Commits Table', '200px'), createPlaceholderSection('Team Members List', '150px')]
  }
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"Multiple stacked sections with varied content",...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var J,V,K,Q,U;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const nav = createGlobalNav({
      activeItemId: 'dashboard',
      sections: [createNavSection({
        children: [createNavItem({
          id: 'dashboard',
          label: 'Dashboard',
          icon: '📊'
        }), createNavItem({
          id: 'projects',
          label: 'Projects',
          icon: '📁'
        }), createNavItem({
          id: 'team',
          label: 'Team',
          icon: '👥'
        }), createNavItem({
          id: 'settings',
          label: 'Settings',
          icon: '⚙️'
        })]
      })]
    });
    const pageContent = createPageLayout({
      children: [createAppHeader({
        title: 'Dashboard',
        description: 'Welcome back! Here\\'s what\\'s happening with your projects.'
      }), createPlaceholderSection('Quick Stats', '120px'), createPlaceholderSection('Recent Activity', '200px'), createPlaceholderSection('Project Summary', '180px')]
    });
    return createAppShell({
      nav,
      content: pageContent
    });
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(K=(V=d.parameters)==null?void 0:V.docs)==null?void 0:K.source},description:{story:"PageLayout in context with AppShell and GlobalNav",...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var _,X,Y,$,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [createPlaceholderSection('Content Section 1'), createPlaceholderSection('Content Section 2'), createPlaceholderSection('Content Section 3')]
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Content-only layout (no AppHeader)",...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};var Z,ee,te,ne,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: [createAppHeader({
      title: 'Team Members',
      description: 'Manage your team and permissions'
    }), (() => {
      const listGroup = createListGroup({
        children: [createListItem({
          children: (() => {
            const item = document.createElement('div');
            item.textContent = 'John Doe - Admin';
            item.style.padding = '8px 0';
            return item;
          })(),
          clickable: true
        }), createListItem({
          children: (() => {
            const item = document.createElement('div');
            item.textContent = 'Jane Smith - Editor';
            item.style.padding = '8px 0';
            return item;
          })(),
          clickable: true
        }), createListItem({
          children: (() => {
            const item = document.createElement('div');
            item.textContent = 'Bob Wilson - Viewer';
            item.style.padding = '8px 0';
            return item;
          })(),
          clickable: true
        })],
        withBorder: true,
        withBackground: true
      });
      return listGroup;
    })(), createPlaceholderSection('Pending Invitations', '120px')]
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"With real ListGroup components",...(re=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ae,oe,ie,ce,se;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      padding: 24px;
      background: #f8fafc;
    \`;

    // Default spacing
    const defaultColumn = document.createElement('div');
    defaultColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Default Spacing</h3>';
    const defaultLayout = createPageLayout({
      children: [createPlaceholderSection('Section 1', '80px'), createPlaceholderSection('Section 2', '80px'), createPlaceholderSection('Section 3', '80px')]
    });
    defaultColumn.appendChild(defaultLayout);

    // Dense spacing
    const denseColumn = document.createElement('div');
    denseColumn.innerHTML = '<h3 style="margin: 0 0 16px; font-family: var(--font-family); font-size: 14px; color: #64748b;">Dense Spacing</h3>';
    const denseLayout = createPageLayout({
      children: [createPlaceholderSection('Section 1', '80px'), createPlaceholderSection('Section 2', '80px'), createPlaceholderSection('Section 3', '80px')],
      dense: true
    });
    denseColumn.appendChild(denseLayout);
    container.appendChild(defaultColumn);
    container.appendChild(denseColumn);
    return container;
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ie=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"Comparison: Default vs Dense spacing",...(se=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:se.description}}};const ve=["Default","Dense","FullWidth","WithScrollableContent","WithMultipleSections","InContextWithAppShell","ContentOnly","WithListGroups","SpacingComparison"];export{p as ContentOnly,o as Default,i as Dense,c as FullWidth,d as InContextWithAppShell,u as SpacingComparison,m as WithListGroups,l as WithMultipleSections,s as WithScrollableContent,ve as __namedExportsOrder,be as default};
