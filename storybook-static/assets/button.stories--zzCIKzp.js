import{c as A}from"./button-CXimPVvh.js";const C=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,P={title:"1. Components / 1. Level 1 / Button",tags:["autodocs"],render:V=>A(V),argTypes:{label:{control:"text",description:"Button label text"},variant:{control:"select",options:["primary"],description:"Button variant"},size:{control:"select",options:["default","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state - only applies when loading is false"},loading:{control:"boolean",description:"Loading state - takes precedence over disabled"},iconLeft:{control:"text",description:"Left icon (SVG string)"},iconRight:{control:"text",description:"Right icon (SVG string)"}},parameters:{docs:{description:{component:"\nPrimary Button component implementing the LFX One design token contract.\n\n## Token Bindings\n\n### Typography\n- `font-family` → `font.button.family`\n- `font-size` → `font.button.size`\n- `font-weight` → `font.button.weight`\n- `line-height` → `font.button.line-height`\n\n### Visual States\n- **Default**: background → `color.interactive.primary.background`, text → `color.interactive.primary.text`\n- **Hover**: background → `color.interactive.primary.background-hover`\n- **Disabled**: background → `color.interactive.primary.background-disabled`, text → `color.interactive.primary.text-disabled`\n- **Loading**: background → `color.interactive.primary.background`, opacity → `state.loading.opacity`\n\n### State Precedence\nIf `loading === true`, loading visuals apply even if `disabled === true`.\nDisabled visuals only apply when `loading === false`.\n\n### Icons & Spinner\n- Icons inherit color from `color.interactive.primary.text`\n- Spinner color → `color.spinner.on-interactive`\n- Icon/spinner sizes derive from font.button.size\n        "}}}},e={args:{label:"Button",variant:"primary",size:"default",disabled:!1,loading:!1}},r={args:{label:"Hover Me",variant:"primary",size:"default"},parameters:{pseudo:{hover:!0}}},t={args:{label:"Button",variant:"primary",size:"default",loading:!0}},n={args:{label:"Button",variant:"primary",size:"default",disabled:!0}},a={args:{label:"Button",variant:"primary",size:"default",loading:!0,disabled:!0},parameters:{docs:{description:{story:"When both `loading` and `disabled` are true, loading state takes precedence. The button uses the primary background (not disabled gray) and shows the spinner."}}}},o={args:{label:"Add Item",variant:"primary",size:"default",iconLeft:C}};var i,s,d,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: false,
    loading: false
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source},description:{story:"Default primary button state.\n\nUses:\n- background: `color.interactive.primary.background`\n- text: `color.interactive.primary.text`",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var p,u,g,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Hover Me',
    variant: 'primary',
    size: 'default'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:`Hover state - interact with the button to see hover styling.

Uses:
- background: \`color.interactive.primary.background-hover\``,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.description}}};var v,y,f,h,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    loading: true
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Loading state with spinner replacing the label.\n\nUses:\n- background: `color.interactive.primary.background` (NOT disabled background)\n- opacity: `state.loading.opacity`\n- cursor: `state.loading.cursor`\n- pointer-events: `state.loading.pointer-events`\n- spinner color: `color.spinner.on-interactive`\n\nNote: No icons are shown during loading state.",...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};var z,w,x,B,L;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: true
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"Disabled state - no spinner shown.\n\nUses:\n- background: `color.interactive.primary.background-disabled`\n- text: `color.interactive.primary.text-disabled`",...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var D,S,I,T,H;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    loading: true,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When both \`loading\` and \`disabled\` are true, loading state takes precedence. The button uses the primary background (not disabled gray) and shows the spinner.'
      }
    }
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:"Demonstrates state precedence: loading takes priority over disabled.\n\nWhen both `loading` and `disabled` are true:\n- Loading visuals are applied (NOT disabled styling)\n- Background stays `color.interactive.primary.background`\n- Spinner is shown",...(H=(T=a.parameters)==null?void 0:T.docs)==null?void 0:H.description}}};var O,W,M,N,U;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    variant: 'primary',
    size: 'default',
    iconLeft: plusIcon
  }
}`,...(M=(W=o.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:`Button with icon.

Icon inherits color from \`color.interactive.primary.text\`.
Icon size derives from font.button.size.`,...(U=(N=o.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};const R=["Default","Hover","Loading","Disabled","LoadingOverridesDisabled","WithIcon"];export{e as Default,n as Disabled,r as Hover,t as Loading,a as LoadingOverridesDisabled,o as WithIcon,R as __namedExportsOrder,P as default};
