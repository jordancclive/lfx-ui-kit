import{c as L}from"./filter-pill-CmlVG6i5.js";const z=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4.5C2 3.11929 3.11929 2 4.5 2H6.17157C6.83563 2 7.47251 2.26339 7.94281 2.73223L13.2071 7.93934C14.0976 8.81579 14.0976 10.2426 13.2071 11.1213L10.1213 14.2071C9.24264 15.0976 7.81579 15.0976 6.93934 14.2071L2.73223 9.94281C2.26339 9.47251 2 8.83563 2 8.17157V4.5Z" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="5.5" cy="5.5" r="1" fill="currentColor"/>
</svg>`,N={title:"1. Components / 1. Level 1 / FilterPill",tags:["autodocs"],render:F=>L(F),argTypes:{label:{control:"text",description:"Pill label text"},selected:{control:"boolean",description:"Selected state"},disabled:{control:"boolean",description:"Disabled state"},icon:{control:"text",description:"Left icon (SVG string)"}},parameters:{docs:{description:{component:"\nFilterPill component implementing the LFX One design token contract.\n\n## Token Bindings\n\n### Colors\n- **Background (default)**: `color.white`\n- **Background (hover)**: `accent.accent-100`\n- **Background (selected)**: `accent.accent-500`\n- **Border (default/hover)**: `neutral.neutral-200`\n- **Border (selected)**: `accent.accent-500`\n- **Border (disabled)**: `neutral.neutral-300`\n- **Text (default/hover)**: `color.text.primary`\n- **Text (selected)**: `color.white`\n- **Text (disabled)**: `color.text.disabled`\n\n### Typography\n- `font-family` → `font.button.family`\n- `font-size` → `font.button.size`\n- `font-weight` → `font.button.weight`\n- `line-height` → `font.button.line-height`\n\n### Layout\n- Radius: `rounded-full`\n- Padding: reuses button padding tokens\n- Border width: `button-stroke` (1px)\n\n### Icons\n- Size derives from font-size (1em)\n- Color inherits from text color\n- Hidden in disabled state\n\n### State Precedence\n- Selected state persists (hover does NOT override it)\n- Disabled overrides all other states\n        "}}}},e={args:{label:"Filter",selected:!1,disabled:!1}},t={args:{label:"Hover Me",selected:!1,disabled:!1},parameters:{pseudo:{hover:!0}}},r={args:{label:"Active",selected:!0,disabled:!1}},s={args:{label:"Disabled",selected:!1,disabled:!0}},o={args:{label:"Category",selected:!1,disabled:!1,icon:z}};var a,n,l,c,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Filter',
    selected: false,
    disabled: false
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"Default filter pill state.\n\nUses:\n- Background: `color.white`\n- Border: `neutral.neutral-200`\n- Text: `color.text.primary`",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var i,p,u,m,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Hover Me',
    selected: false,
    disabled: false
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"Hover state - interact with the pill to see hover styling.\n\nUses:\n- Background: `accent.accent-100`\n- Border: `neutral.neutral-200` (unchanged)\n- Text: `color.text.primary`",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var b,f,h,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    selected: true,
    disabled: false
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:`Selected state.

Uses:
- Background: \`accent.accent-500\`
- Border: \`accent.accent-500\`
- Text: \`color.white\`

Note: Hover does NOT override selected state.`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var y,B,w,k,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    selected: false,
    disabled: true
  }
}`,...(w=(B=s.parameters)==null?void 0:B.docs)==null?void 0:w.source},description:{story:`Disabled state.

Uses:
- Background: \`color.white\`
- Border: \`neutral.neutral-300\`
- Text: \`color.text.disabled\`
- No hover or selected styles
- Icons hidden`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var C,T,D,H,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    selected: false,
    disabled: false,
    icon: tagIcon
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:`Filter pill with icon.

Icon inherits text color and size derives from font-size.
Icon is hidden in disabled state.`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const O=["Default","Hover","Selected","Disabled","WithIcon"];export{e as Default,s as Disabled,t as Hover,r as Selected,o as WithIcon,O as __namedExportsOrder,N as default};
