import{c as v}from"./filter-dropdown-trigger-pmZu_dAG.js";const w={title:"1. Components / 2. Molecules / 2. FilterDropdownTrigger",tags:["autodocs"],render:x=>v(x),argTypes:{label:{control:"text",description:"Trigger label text"},open:{control:"boolean",description:"Open state (chevron rotates, focus border applied)"},disabled:{control:"boolean",description:"Disabled state"}},parameters:{docs:{description:{component:"\nFilterDropdownTrigger component implementing the LFX One design token contract.\n\nThis component represents only the closed dropdown trigger.\nIt does not include dropdown menu items, popovers, keyboard navigation, or portals.\n\n## Token Bindings\n\n### Colors\n- **Background**: `color.white`\n- **Border (default)**: `neutral.neutral-200`\n- **Border (focus/open)**: `color.interactive.primary.background`\n- **Border (disabled)**: `neutral.neutral-300`\n- **Text (default)**: `color.text.primary`\n- **Text (disabled)**: `color.text.disabled`\n- **Chevron**: inherits text color\n\n### Typography (same as SearchInput)\n- `font-family` → `font-family` (primitives)\n- `font-size` → `text-sm`\n- `font-weight` → `font-normal`\n- `line-height` → `leading-text-sm`\n\n### Layout (same as SearchInput)\n- Padding: `spacing-8` vertical, `spacing-12` horizontal\n- Gap: `spacing-8`\n- Radius: `rounded-lg`\n- Border width: `button-stroke` (1px)\n\n### Icons\n- Chevron size derives from font-size (1em)\n- Chevron color inherits from text color\n- Chevron rotates 180° when open\n\n### States\n- **Default**: White background, neutral border, chevron down\n- **Focus/Open**: Accent border, chevron up (rotated 180°)\n- **Disabled**: Muted border/text, no focus or open styling\n        "}}}},e={args:{label:"Select option",open:!1,disabled:!1}},o={args:{label:"Select option",open:!0,disabled:!1}},r={args:{label:"Select option",open:!1,disabled:!0}};var t,n,a,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    open: false,
    disabled: false
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source},description:{story:"Default dropdown trigger state.\n\nUses:\n- Background: `color.white`\n- Border: `neutral.neutral-200`\n- Text: `color.text.primary`\n- Chevron points down",...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.description}}};var l,d,c,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    open: true,
    disabled: false
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:`Focus / Open state.

Focus and open share the same visuals:
- Border: \`color.interactive.primary.background\`
- Chevron rotates 180° (points up)`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var g,m,b,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    open: false,
    disabled: true
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:"Disabled state.\n\nUses:\n- Background: `color.white`\n- Border: `neutral.neutral-300`\n- Text: `color.text.disabled`\n- Chevron: `color.text.disabled`\n- No focus or open styling",...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const D=["Default","Focus","Disabled"];export{e as Default,r as Disabled,o as Focus,D as __namedExportsOrder,w as default};
