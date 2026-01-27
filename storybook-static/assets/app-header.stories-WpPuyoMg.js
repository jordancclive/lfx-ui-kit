import{c as me}from"./app-header-DeHaskNY.js";import{c as t}from"./button-CXimPVvh.js";import{c as g}from"./filter-pill-CmlVG6i5.js";import{c as de}from"./tabs-group-Buso1gXc.js";import"./tab-item-6b0QOFow.js";const ve={title:"1. Components / 3. Level 3 / AppHeader",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## AppHeader

**Tier 3 — Composite Layout Component**

AppHeader defines the top-of-page header region for LFX One pages. It provides structured layout for page title, optional description, optional metadata (breadcrumbs, status pills), and optional actions area (buttons, filters, tabs, search).

### ⚠️ Important

**AppHeader does NOT own styling of children.**

**AppHeader does NOT implement routing or navigation logic.**

**AppHeader does NOT manage state or handle interactions.**

Those responsibilities belong to:
- **Child components:** own their own styling, interaction, and state
- **Parent application:** routing logic, data fetching, state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Layout of title/description stack | Typography tokens (reuses existing) |
| Layout of actions slot (right-aligned) | Styling or behavior of buttons, filters, tabs |
| Layout of meta slot (left-aligned) | Routing or navigation logic |
| Optional bottom divider | State management or data fetching |
| Dense spacing mode | Hover, selected, or disabled states |

### NOT Responsible For

- Does NOT implement breadcrumb navigation
- Does NOT manage page state or URL routing
- Does NOT style buttons, pills, tabs, or dropdowns
- Does NOT implement responsive breakpoints beyond layout wrapping
- Does NOT manage focus or keyboard navigation
- Does NOT implement animations or transitions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Background | \`--color-app-header-surface-background\` |
| Bottom divider | \`--color-app-header-surface-border\` |
| Horizontal padding | \`--spacing-app-header-padding-x\` |
| Vertical padding | \`--spacing-app-header-padding-y\` |
| Vertical padding (dense) | \`--spacing-app-header-padding-y-dense\` |
| Gap between regions | \`--spacing-app-header-gap\` |
| Gap between regions (dense) | \`--spacing-app-header-gap-dense\` |
| Gap between title/description | \`--spacing-app-header-title-gap\` |
| Gap between title/description (dense) | \`--spacing-app-header-title-gap-dense\` |
| Gap between meta/title | \`--spacing-app-header-meta-gap\` |
| Gap between action children | \`--spacing-app-header-actions-gap\` |

### Typography Bindings

AppHeader reuses existing typography tokens:
- **Title:** \`--text-2xl\`, \`--font-semibold\`, \`--text-primary\`
- **Description:** \`--text-sm\`, \`--font-medium\`, \`--text-secondary\`

### Composition Examples

#### Title Only
\`\`\`typescript
createAppHeader({ title: "Projects" })
\`\`\`

#### Title + Description
\`\`\`typescript
createAppHeader({
  title: "Projects",
  description: "Manage your open source projects and contributors"
})
\`\`\`

#### Title + Actions
\`\`\`typescript
createAppHeader({
  title: "Projects",
  actions: createButton({ label: "New Project", variant: "primary" })
})
\`\`\`

#### Meta + Title + Actions
\`\`\`typescript
createAppHeader({
  meta: createFilterPill({ label: "Active", selected: true }),
  title: "Project Settings",
  actions: createButton({ label: "Save", variant: "primary" })
})
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Page title (required)"},description:{control:"text",description:"Optional description/subtitle text"},withDivider:{control:"boolean",description:"Show bottom divider border"},dense:{control:"boolean",description:"Dense spacing mode"}},render:e=>me(e)},r={args:{title:"Projects"}},i={args:{title:"Team Members",description:"Invite and manage team member access and permissions"}},o={args:{title:"Projects",description:"Manage your open source projects and contributors",actions:(()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="8px";const a=t({label:"Export",variant:"secondary"}),n=t({label:"New Project",variant:"primary"});return e.appendChild(a),e.appendChild(n),e})()}},s={args:{title:"Project Settings",description:"Configure project details and permissions",meta:g({label:"Active",selected:!0})}},c={args:{title:"Dashboard",description:"Overview of your projects, contributors, and recent activity",meta:(()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="8px",e.appendChild(g({label:"Active",selected:!0})),e.appendChild(g({label:"Archived",selected:!1})),e})(),actions:(()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="8px",e.appendChild(t({label:"Export",variant:"secondary"})),e.appendChild(t({label:"New Project",variant:"primary"})),e})()}},p={args:{title:"Settings",description:"Manage your account preferences and integrations",withDivider:!0}},l={args:{title:"Projects",description:"Manage your open source projects",dense:!0,actions:t({label:"New Project",variant:"primary"})}},d={args:{title:"Very Long Project Title That Might Wrap",description:"This demonstrates how the header handles narrow viewports and wrapping behavior",actions:(()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="8px",e.appendChild(t({label:"Cancel",variant:"secondary"})),e.appendChild(t({label:"Save",variant:"primary"})),e})()},parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{title:"Projects",description:"View and manage all your projects",actions:(()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="4px";const a=de({tabs:[{id:"all",label:"All"},{id:"active",label:"Active"},{id:"archived",label:"Archived"}],selectedId:"all"});return e.appendChild(a),e})()}},u={args:{title:"Contributors",description:"Manage contributor access and permissions across projects",meta:g({label:"127 Active",selected:!0}),actions:(()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="16px";const a=de({tabs:[{id:"all",label:"All"},{id:"pending",label:"Pending"},{id:"inactive",label:"Inactive"}],selectedId:"all"}),n=document.createElement("div");return n.style.display="flex",n.style.gap="8px",n.appendChild(t({label:"Export",variant:"secondary"})),n.appendChild(t({label:"Invite",variant:"primary"})),e.appendChild(a),e.appendChild(n),e})(),withDivider:!0}};var y,b,h,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Projects'
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Basic header with title only",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var w,f,C,T,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Team Members',
    description: 'Invite and manage team member access and permissions'
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:"Header with title and description text",...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var A,P,B,D,O;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'Manage your open source projects and contributors',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      const secondaryButton = createButton({
        label: 'Export',
        variant: 'secondary'
      });
      const primaryButton = createButton({
        label: 'New Project',
        variant: 'primary'
      });
      container.appendChild(secondaryButton);
      container.appendChild(primaryButton);
      return container;
    })()
  }
}`,...(B=(P=o.parameters)==null?void 0:P.docs)==null?void 0:B.source},description:{story:"Header with action button on the right",...(O=(D=o.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var E,G,S,H,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Project Settings',
    description: 'Configure project details and permissions',
    meta: createFilterPill({
      label: 'Active',
      selected: true
    })
  }
}`,...(S=(G=s.parameters)==null?void 0:G.docs)==null?void 0:S.source},description:{story:"Header with metadata slot (e.g., status pill) before title",...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var M,I,W,F,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your projects, contributors, and recent activity',
    meta: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      container.appendChild(createFilterPill({
        label: 'Active',
        selected: true
      }));
      container.appendChild(createFilterPill({
        label: 'Archived',
        selected: false
      }));
      return container;
    })(),
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      container.appendChild(createButton({
        label: 'Export',
        variant: 'secondary'
      }));
      container.appendChild(createButton({
        label: 'New Project',
        variant: 'primary'
      }));
      return container;
    })()
  }
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"Full example: meta + title + description + actions",...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var k,V,R,_,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: 'Manage your account preferences and integrations',
    withDivider: true
  }
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source},description:{story:"Header with bottom divider border",...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var z,U,X,J,K;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'Manage your open source projects',
    dense: true,
    actions: createButton({
      label: 'New Project',
      variant: 'primary'
    })
  }
}`,...(X=(U=l.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"Dense spacing mode (reduced vertical padding and gaps)",...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Y,Z,$,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Very Long Project Title That Might Wrap',
    description: 'This demonstrates how the header handles narrow viewports and wrapping behavior',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      container.appendChild(createButton({
        label: 'Cancel',
        variant: 'secondary'
      }));
      container.appendChild(createButton({
        label: 'Save',
        variant: 'primary'
      }));
      return container;
    })()
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Responsive wrapping behavior (narrow container)",...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ne,ae,re,ie;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'View and manage all your projects',
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '4px';
      const tabsGroup = createTabsGroup({
        tabs: [{
          id: 'all',
          label: 'All'
        }, {
          id: 'active',
          label: 'Active'
        }, {
          id: 'archived',
          label: 'Archived'
        }],
        selectedId: 'all'
      });
      container.appendChild(tabsGroup);
      return container;
    })()
  }
}`,...(ae=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"Header with tabs as actions",...(ie=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ie.description}}};var oe,se,ce,pe,le;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: 'Contributors',
    description: 'Manage contributor access and permissions across projects',
    meta: createFilterPill({
      label: '127 Active',
      selected: true
    }),
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.gap = '16px';

      // Tabs group
      const tabsGroup = createTabsGroup({
        tabs: [{
          id: 'all',
          label: 'All'
        }, {
          id: 'pending',
          label: 'Pending'
        }, {
          id: 'inactive',
          label: 'Inactive'
        }],
        selectedId: 'all'
      });

      // Buttons
      const buttonGroup = document.createElement('div');
      buttonGroup.style.display = 'flex';
      buttonGroup.style.gap = '8px';
      buttonGroup.appendChild(createButton({
        label: 'Export',
        variant: 'secondary'
      }));
      buttonGroup.appendChild(createButton({
        label: 'Invite',
        variant: 'primary'
      }));
      container.appendChild(tabsGroup);
      container.appendChild(buttonGroup);
      return container;
    })(),
    withDivider: true
  }
}`,...(ce=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ce.source},description:{story:"Complex composition: meta + tabs + buttons",...(le=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:le.description}}};const xe=["TitleOnly","TitleAndDescription","WithActions","WithMeta","Full","WithDivider","Dense","ResponsiveWrap","WithTabs","ComplexComposition"];export{u as ComplexComposition,l as Dense,c as Full,d as ResponsiveWrap,i as TitleAndDescription,r as TitleOnly,o as WithActions,p as WithDivider,s as WithMeta,m as WithTabs,xe as __namedExportsOrder,ve as default};
