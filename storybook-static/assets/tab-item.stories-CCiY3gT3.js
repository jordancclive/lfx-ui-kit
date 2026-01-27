import{c as se}from"./tab-item-6b0QOFow.js";const ee=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L9.79611 5.52786L13.6085 6.11114L10.8043 8.97214L11.5922 12.8889L8 11.0279L4.40783 12.8889L5.19577 8.97214L2.39155 6.11114L6.20389 5.52786L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`,re={title:"1. Components / 2. Level 2 / TabItem",tags:["autodocs"],render:te=>se(te),argTypes:{label:{control:"text",description:"Tab label text"},selected:{control:"boolean",description:"Selected state"},disabled:{control:"boolean",description:"Disabled state - overrides all other states"},size:{control:"select",options:["default","small"],description:"Size variant"},icon:{control:"text",description:"Left icon (SVG string)"}},parameters:{docs:{description:{component:"\nTabItem component implementing the LFX One design token contract.\n\n## Token Bindings\n\n### Background\n- **Default**: `color.tabs.item.background.default` (transparent)\n- **Hover**: `color.tabs.item.background.hover`\n- **Selected**: `color.tabs.item.background.selected`\n- **Disabled**: `color.tabs.item.background.disabled` (transparent)\n\n### Border\n- **Default**: `color.tabs.item.border.default` (transparent)\n- **Selected**: `color.tabs.item.border.selected`\n- **Disabled**: `color.tabs.item.border.disabled` (transparent)\n\n### Text\n- **Default**: `color.tabs.item.text.default`\n- **Hover**: `color.tabs.item.text.hover`\n- **Selected**: `color.tabs.item.text.selected`\n- **Disabled**: `color.tabs.item.text.disabled`\n\n### Typography\n- `font-family` → `font.button.family`\n- `font-size` → `font.button.size` (default) / `text-xs` (small)\n- `font-weight` → `font.button.weight`\n- `line-height` → `font.button.line-height` (default) / `leading-text-xs` (small)\n\n### Layout\n- Radius: `rounded-full`\n- Padding: reuses button padding tokens (default) / smaller padding (small)\n- Border width: `button-stroke` (1px)\n\n### Icons\n- Size derives from font-size (1em)\n- Color inherits from text color\n- Hidden in disabled state\n\n### State Precedence\n- Disabled overrides all states (including selected)\n- Selected overrides hover\n        "}}}},e={args:{label:"Tab",selected:!1,disabled:!1,size:"default"}},t={args:{label:"Hover Me",selected:!1,disabled:!1,size:"default"},parameters:{pseudo:{hover:!0}}},s={args:{label:"Active Tab",selected:!0,disabled:!1,size:"default"}},a={args:{label:"Disabled",selected:!1,disabled:!0,size:"default"}},r={args:{label:"Small Tab",selected:!1,disabled:!1,size:"small"}},o={args:{label:"Small Active",selected:!0,disabled:!1,size:"small"}},l={args:{label:"Small Disabled",selected:!1,disabled:!0,size:"small"}},n={args:{label:"Favorites",selected:!1,disabled:!1,size:"default",icon:ee}},d={args:{label:"Favorites",selected:!0,disabled:!1,size:"default",icon:ee}};var i,c,b,m,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Tab',
    selected: false,
    disabled: false,
    size: 'default'
  }
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source},description:{story:"Default tab item state.\n\nUses:\n- Background: \\`color.tabs.item.background.default\\` (transparent)\n- Border: \\`color.tabs.item.border.default\\` (transparent)\n- Text: \\`color.tabs.item.text.default\\`",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var p,f,g,S,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Hover Me',
    selected: false,
    disabled: false,
    size: 'default'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Hover state - interact with the tab to see hover styling.\n\nUses:\n- Background: \\`color.tabs.item.background.hover\\`\n- Text: \\`color.tabs.item.text.hover\\`",...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var h,z,x,D,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Active Tab',
    selected: true,
    disabled: false,
    size: 'default'
  }
}`,...(x=(z=s.parameters)==null?void 0:z.docs)==null?void 0:x.source},description:{story:`Selected state.

Uses:
- Background: \\\`color.tabs.item.background.selected\\\`
- Border: \\\`color.tabs.item.border.selected\\\`
- Text: \\\`color.tabs.item.text.selected\\\`

Note: Selected state overrides hover.`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.description}}};var T,y,I,L,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    selected: false,
    disabled: true,
    size: 'default'
  }
}`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source},description:{story:`Disabled state.

Uses:
- Background: \\\`color.tabs.item.background.disabled\\\` (transparent)
- Border: \\\`color.tabs.item.border.disabled\\\` (transparent)
- Text: \\\`color.tabs.item.text.disabled\\\`
- No hover or selected styles
- Icons hidden`,...(w=(L=a.parameters)==null?void 0:L.docs)==null?void 0:w.description}}};var B,H,F,A,U;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Small Tab',
    selected: false,
    disabled: false,
    size: 'small'
  }
}`,...(F=(H=r.parameters)==null?void 0:H.docs)==null?void 0:F.source},description:{story:"Small size variant - default state.",...(U=(A=r.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};var W,C,M,N,O;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Small Active',
    selected: true,
    disabled: false,
    size: 'small'
  }
}`,...(M=(C=o.parameters)==null?void 0:C.docs)==null?void 0:M.source},description:{story:"Small size variant - selected state.",...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var P,_,j,E,G;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Small Disabled',
    selected: false,
    disabled: true,
    size: 'small'
  }
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"Small size variant - disabled state.",...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var R,V,X,Z,q;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Favorites',
    selected: false,
    disabled: false,
    size: 'default',
    icon: starIcon
  }
}`,...(X=(V=n.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:`Tab item with icon.

Icon inherits text color and size derives from font-size.
Icon is hidden in disabled state.`,...(q=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var J,K,Q,Y,$;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Favorites',
    selected: true,
    disabled: false,
    size: 'default',
    icon: starIcon
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Selected tab with icon.",...($=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};const oe=["Default","Hover","Selected","Disabled","SmallDefault","SmallSelected","SmallDisabled","WithIcon","WithIconSelected"];export{e as Default,a as Disabled,t as Hover,s as Selected,r as SmallDefault,l as SmallDisabled,o as SmallSelected,n as WithIcon,d as WithIconSelected,oe as __namedExportsOrder,re as default};
