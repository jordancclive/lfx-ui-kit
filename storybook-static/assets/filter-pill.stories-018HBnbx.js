const U=({label:l,selected:M=!1,disabled:t=!1,icon:i,onClick:d})=>{const e=document.createElement("button"),c=["lfx-filter-pill"];M&&!t&&c.push("lfx-filter-pill--selected"),t&&c.push("lfx-filter-pill--disabled"),e.className=c.join(" "),e.disabled=t,e.type="button";const O=i&&!t?`<span class="lfx-filter-pill__icon">${i}</span>`:"";return e.innerHTML=`
    <span class="lfx-filter-pill__content">
      ${O}
      <span class="lfx-filter-pill__text">${l}</span>
    </span>
  `,d&&!t&&e.addEventListener("click",d),e},A=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4.5C2 3.11929 3.11929 2 4.5 2H6.17157C6.83563 2 7.47251 2.26339 7.94281 2.73223L13.2071 7.93934C14.0976 8.81579 14.0976 10.2426 13.2071 11.1213L10.1213 14.2071C9.24264 15.0976 7.81579 15.0976 6.93934 14.2071L2.73223 9.94281C2.26339 9.47251 2 8.83563 2 8.17157V4.5Z" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="5.5" cy="5.5" r="1" fill="currentColor"/>
</svg>`,E={title:"1. Components / 1. Atoms / 2. FilterPill",tags:["autodocs"],render:l=>U(l),argTypes:{label:{control:"text",description:"Pill label text"},selected:{control:"boolean",description:"Selected state"},disabled:{control:"boolean",description:"Disabled state"},icon:{control:"text",description:"Left icon (SVG string)"}},parameters:{docs:{description:{component:"\nFilterPill component implementing the LFX One design token contract.\n\n## Token Bindings\n\n### Colors\n- **Background (default)**: `color.white`\n- **Background (hover)**: `accent.accent-100`\n- **Background (selected)**: `accent.accent-500`\n- **Border (default/hover)**: `neutral.neutral-200`\n- **Border (selected)**: `accent.accent-500`\n- **Border (disabled)**: `neutral.neutral-300`\n- **Text (default/hover)**: `color.text.primary`\n- **Text (selected)**: `color.white`\n- **Text (disabled)**: `color.text.disabled`\n\n### Typography\n- `font-family` → `font.button.family`\n- `font-size` → `font.button.size`\n- `font-weight` → `font.button.weight`\n- `line-height` → `font.button.line-height`\n\n### Layout\n- Radius: `rounded-full`\n- Padding: reuses button padding tokens\n- Border width: `button-stroke` (1px)\n\n### Icons\n- Size derives from font-size (1em)\n- Color inherits from text color\n- Hidden in disabled state\n\n### State Precedence\n- Selected state persists (hover does NOT override it)\n- Disabled overrides all other states\n        "}}}},r={args:{label:"Filter",selected:!1,disabled:!1}},s={args:{label:"Hover Me",selected:!1,disabled:!1},parameters:{pseudo:{hover:!0}}},o={args:{label:"Active",selected:!0,disabled:!1}},n={args:{label:"Disabled",selected:!1,disabled:!0}},a={args:{label:"Category",selected:!1,disabled:!1,icon:A}};var p,u,f,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Filter',
    selected: false,
    disabled: false
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"Default filter pill state.\n\nUses:\n- Background: `color.white`\n- Border: `neutral.neutral-200`\n- Text: `color.text.primary`",...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.description}}};var g,h,x,v,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Hover state - interact with the pill to see hover styling.\n\nUses:\n- Background: `accent.accent-100`\n- Border: `neutral.neutral-200` (unchanged)\n- Text: `color.text.primary`",...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var B,w,k,S,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    selected: true,
    disabled: false
  }
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`Selected state.

Uses:
- Background: \`accent.accent-500\`
- Border: \`accent.accent-500\`
- Text: \`color.white\`

Note: Hover does NOT override selected state.`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var C,D,H,I,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    selected: false,
    disabled: true
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:`Disabled state.

Uses:
- Background: \`color.white\`
- Border: \`neutral.neutral-300\`
- Text: \`color.text.disabled\`
- No hover or selected styles
- Icons hidden`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var _,F,z,P,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    selected: false,
    disabled: false,
    icon: tagIcon
  }
}`,...(z=(F=a.parameters)==null?void 0:F.docs)==null?void 0:z.source},description:{story:`Filter pill with icon.

Icon inherits text color and size derives from font-size.
Icon is hidden in disabled state.`,...(N=(P=a.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};const $=["Default","Hover","Selected","Disabled","WithIcon"];export{r as Default,n as Disabled,s as Hover,o as Selected,a as WithIcon,$ as __namedExportsOrder,E as default};
