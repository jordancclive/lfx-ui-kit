import{c as z}from"./search-input-CzMEtAKB.js";const U={title:"1. Components / 1. Atoms / 3. SearchInput",tags:["autodocs"],render:V=>z(V),argTypes:{placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},disabled:{control:"boolean",description:"Disabled state"},showIcon:{control:"boolean",description:"Show search icon"},variant:{control:"select",options:["form","toolbar"],description:"Visual variant - controls shape and density"}},parameters:{docs:{description:{component:"\nSearchInput component implementing the LFX One design token contract.\n\n## Token Bindings\n\n### Colors\n- **Background**: `color.white`\n- **Border (default)**: `neutral.neutral-200`\n- **Border (focus)**: `color.interactive.primary.background`\n- **Border (disabled)**: `neutral.neutral-300`\n- **Text**: `color.text.primary`\n- **Placeholder**: `color.text.secondary`\n- **Disabled text/placeholder/icon**: `color.text.disabled`\n\n### Typography\n- `font-family` → `font-family` (primitives)\n- `font-size` → `text-sm`\n- `font-weight` → `font-normal`\n- `line-height` → `leading-text-sm`\n\n### Spacing\n- Padding: `spacing-8` vertical, `spacing-12` horizontal\n- Gap: `spacing-8`\n\n### Border\n- Radius: `rounded-lg`\n- Width: `button-stroke` (1px)\n\n### Icons\n- Size derives from font-size (1em)\n- Color inherits from text color\n        "}}}},e={args:{placeholder:"Search...",disabled:!1,showIcon:!1}},r={args:{placeholder:"Click to focus...",disabled:!1,showIcon:!1},parameters:{pseudo:{focusWithin:!0}}},o={args:{placeholder:"Search...",disabled:!0,showIcon:!1}},t={args:{placeholder:"Search...",disabled:!1,showIcon:!0}},a={args:{placeholder:"Search Groups…",disabled:!1,showIcon:!0,variant:"toolbar"},parameters:{docs:{description:{story:`
**Toolbar Variant**

Use the toolbar variant in table filter bars and list headers where a compact,
lightweight search control is needed.

This variant:
- Uses rounded corners (rounded-lg) to visually match FilterDropdownTrigger and other toolbar controls
- Has reduced height compared to form variant
- Provides lighter visual weight for toolbar contexts

**When to use:**
- Table filter rows (e.g., Groups, Votes, Surveys)
- List headers with search functionality
- Any toolbar or control bar context

**When NOT to use:**
- Form data entry contexts (use form variant)
- Settings or dialog inputs (use form variant)
        `}}}};var s,n,i,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    disabled: false,
    showIcon: false
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"Default search input state.",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var d,p,h,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Click to focus...',
    disabled: false,
    showIcon: false
  },
  parameters: {
    pseudo: {
      focusWithin: true
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Focus state - click into the input to see focus styling.\n\nBorder color changes to `color.interactive.primary.background`.",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var g,f,b,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    disabled: true,
    showIcon: false
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:`Disabled state.

Uses:
- Border: \`neutral.neutral-300\`
- Text/placeholder/icon: \`color.text.disabled\`
- No focus styles`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var w,S,x,I,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    disabled: false,
    showIcon: true
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:`Search input with icon.

Icon inherits text color and size derives from font-size.`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var D,k,W,B,F;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search Groups…',
    disabled: false,
    showIcon: true,
    variant: 'toolbar'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Toolbar Variant**

Use the toolbar variant in table filter bars and list headers where a compact,
lightweight search control is needed.

This variant:
- Uses rounded corners (rounded-lg) to visually match FilterDropdownTrigger and other toolbar controls
- Has reduced height compared to form variant
- Provides lighter visual weight for toolbar contexts

**When to use:**
- Table filter rows (e.g., Groups, Votes, Surveys)
- List headers with search functionality
- Any toolbar or control bar context

**When NOT to use:**
- Form data entry contexts (use form variant)
- Settings or dialog inputs (use form variant)
        \`
      }
    }
  }
}`,...(W=(k=a.parameters)==null?void 0:k.docs)==null?void 0:W.source},description:{story:`Toolbar variant for use in filter bars and table headers.

Visual traits:
- Rounded corners (rounded-lg) matching other toolbar controls
- Slightly reduced height for compact toolbar contexts
- Lighter visual weight

Use in: table filter bars, list headers, Groups page, Votes, Surveys.`,...(F=(B=a.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const C=["Default","Focus","Disabled","WithIcon","Toolbar"];export{e as Default,o as Disabled,r as Focus,a as Toolbar,t as WithIcon,C as __namedExportsOrder,U as default};
