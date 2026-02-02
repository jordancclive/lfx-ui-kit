import{c as M}from"./app-header-BUQjadsZ.js";import{c as a}from"./button-CXimPVvh.js";const C={title:"1. Components / 3. Organisms / 1. AppHeader",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## AppHeader

**Tier 3 — Composite Layout Component**

AppHeader defines the top-of-page header region for LFX One pages. It provides workflow-optimized layout for page title, optional description, optional metadata, and optional actions area.

### Visual Intent

**AppHeader is optimized for workflow pages, not marketing pages:**

- ✅ **Optical alignment** — Title and action align at top edge
- ✅ **Workflow handoff** — Minimal vertical padding for clean content flow
- ✅ **Production default** — Dense mode is the primary mode for app pages
- ✅ **Not a banner** — Header feels part of page flow, not decorative

**Result:** Headers read as part of the workflow, not decorative elements floating above content.

### Spacing Strategy

**Default Mode:**
- Top padding: \`12px\` (reduced from 16px for workflow feel)
- Bottom padding: \`8px\` (minimal for clean handoff)

**Dense Mode (PRODUCTION DEFAULT):**
- Top padding: \`8px\` (tight handoff for immediate content)
- Bottom padding: \`6px\` (minimal separation)

Dense mode is optimized for Table Page, Votes, Surveys, and similar workflow pages where the header hands off directly into DataTable or content.

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
| Workflow-optimized vertical padding | Typography tokens (reuses existing) |
| Optical alignment of title + action | Styling or behavior of buttons, filters, tabs |
| Layout of title/description stack | Routing or navigation logic |
| Layout of actions slot (right-aligned) | State management or data fetching |
| Layout of meta slot (left-aligned) | Hover, selected, or disabled states |

### Production Usage

**For workflow pages (Table Page, Votes, Surveys):**
\`\`\`typescript
createAppHeader({
  title: "Votes",
  description: "Make decisions with your project groups.",
  actions: createButton({ children: "Create Vote", variant: "primary" }),
  dense: true // RECOMMENDED for workflow pages
})
\`\`\`

**For overview pages (Dashboard):**
\`\`\`typescript
createAppHeader({
  title: "Dashboard",
  description: "Overview of your project activity",
  dense: false // Standard spacing for overview content
})
\`\`\`

### Typography Bindings

AppHeader reuses existing typography tokens:
- **Title:** \`--ui-text-page-title-*\` (24px, semibold, primary color)
- **Description:** \`--ui-text-body-secondary-*\` (14px, medium, secondary color)
        `}}},argTypes:{title:{control:"text",description:"Page title (required)"},description:{control:"text",description:"Optional description/subtitle text"},withDivider:{control:"boolean",description:"Show bottom divider border (rarely used)"},dense:{control:"boolean",description:"Dense spacing mode (RECOMMENDED for workflow pages like Table Page, Votes, Surveys)"}},render:e=>M(e)},t={args:{title:"Votes",description:"Make decisions with your project groups.",dense:!0,actions:a({variant:"primary"})}},o={args:{title:"Dashboard",description:"Overview of your project activity and metrics",dense:!1}},r={args:{title:"Projects",description:"Manage your open source projects and contributors",dense:!0,actions:(()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="8px";const P=a({variant:"secondary"}),S=a({variant:"primary"});return e.appendChild(P),e.appendChild(S),e})()}},n={args:{title:"Settings",dense:!0}};var i,s,d,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Votes',
    description: 'Make decisions with your project groups.',
    dense: true,
    // RECOMMENDED for workflow pages
    actions: createButton({
      children: 'Create Vote',
      variant: 'primary'
    })
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source},description:{story:`PRODUCTION DEFAULT — Workflow page header

Dense mode with title, description, and primary action.
This is the recommended configuration for Table Page, Votes, Surveys,
and similar workflow pages.`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var l,g,m,u,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your project activity and metrics',
    dense: false
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:`Overview page header (Dashboard, Settings)

Standard spacing for overview pages that don't hand off
immediately into tables or dense content.`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var y,w,h,v,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'Manage your open source projects and contributors',
    dense: true,
    actions: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      const secondaryButton = createButton({
        children: 'Export',
        variant: 'secondary'
      });
      const primaryButton = createButton({
        children: 'New Project',
        variant: 'primary'
      });
      container.appendChild(secondaryButton);
      container.appendChild(primaryButton);
      return container;
    })()
  }
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source},description:{story:`Workflow page with multiple actions

Primary and secondary actions aligned optically with title.`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var O,T,D,k,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    dense: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:`Title only (minimal configuration)

For simple pages without description or actions.`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.description}}};const E=["WorkflowPage","OverviewPage","MultipleActions","TitleOnly"];export{r as MultipleActions,o as OverviewPage,n as TitleOnly,t as WorkflowPage,E as __namedExportsOrder,C as default};
