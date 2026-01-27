import{c as Y}from"./tabs-group-Buso1gXc.js";import"./tab-item-6b0QOFow.js";const t=[{id:"all",label:"All"},{id:"active",label:"Active"},{id:"completed",label:"Completed"},{id:"archived",label:"Archived"}],$=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Notifications"},{id:"tab5",label:"Settings"},{id:"tab6",label:"Integrations"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Team"}],ee=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L9.79611 5.52786L13.6085 6.11114L10.8043 8.97214L11.5922 12.8889L8 11.0279L4.40783 12.8889L5.19577 8.97214L2.39155 6.11114L6.20389 5.52786L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`,ae=[{id:"favorites",label:"Favorites",icon:ee},{id:"recent",label:"Recent"},{id:"shared",label:"Shared"}],ne={title:"1. Components / 3. Level 3 / TabsGroup",tags:["autodocs"],render:e=>Y(e),argTypes:{selectedId:{control:"text",description:"ID of the currently selected tab"},size:{control:"select",options:["default","small"],description:"Size variant - propagated to all TabItem children"},disabled:{control:"boolean",description:"Disabled state - propagated to all TabItem children"},withBackground:{control:"boolean",description:"Show neutral surface background (pill-style group)"},noWrap:{control:"boolean",description:"Prevent wrapping"}},parameters:{docs:{description:{component:'\nTabsGroup component - layout and state coordinator only.\n\n## Responsibilities\n- Render TabItem children\n- Pass `selected=true` to the active tab\n- Pass `disabled=true` to tabs when group is disabled\n- Support size propagation: `"default"` | `"small"`\n- Support wrapping via CSS\n\n## NOT Responsible For\n- Visual styles (colors, borders, text styles) - owned by TabItem\n- Color tokens - no `color.tabs.item.*` references\n\n## Layout Tokens\n- Gap: `spacing-4`\n- Background (with-background variant): `neutral-100`\n- Padding (with-background variant): `spacing-4`\n- Border radius (with-background variant): `rounded-xl`\n\n## State Propagation\n- `selectedId` → `selected=true` on matching TabItem\n- `disabled` → `disabled=true` on all TabItem children\n- `size` → `size` prop on all TabItem children\n        '}}}},s={args:{tabs:t,selectedId:"all",size:"default",disabled:!1,withBackground:!1}},r={args:{tabs:t,selectedId:"active",size:"default",disabled:!1,withBackground:!0}},n={args:{tabs:$,selectedId:"tab1",size:"default",disabled:!1,withBackground:!1},decorators:[e=>{const a=document.createElement("div");return a.style.maxWidth="400px",a.appendChild(e()),a}]},o={args:{tabs:t,selectedId:"completed",size:"small",disabled:!1,withBackground:!1}},d={args:{tabs:t,selectedId:"active",size:"small",disabled:!1,withBackground:!0}},l={args:{tabs:t,selectedId:"all",size:"default",disabled:!0,withBackground:!1}},i={args:{tabs:ae,selectedId:"favorites",size:"default",disabled:!1,withBackground:!1}},c={args:{tabs:t,selectedId:"all",size:"default",disabled:!1,withBackground:!0},render:e=>{let a=e.selectedId||"all";return Y({...e,selectedId:a,onSelect:p=>{a=p,console.log("Selected tab:",p)}})},parameters:{docs:{description:{story:"Click tabs and check the console to see selection callback. In a real app, you would update state and re-render."}}}};var b,u,m,g,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: false,
    withBackground: false
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Default tabs group with first tab selected.",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var f,w,I,k,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'default',
    disabled: false,
    withBackground: true
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source},description:{story:"Tabs group with background (pill-style).",...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var y,S,T,z,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    selectedId: 'tab1',
    size: 'default',
    disabled: false,
    withBackground: false
  },
  decorators: [story => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.appendChild(story());
    return container;
  }]
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:`Wrapped tabs group - tabs wrap to next line when container is narrow.
Resize the viewport to see wrapping behavior.`,...(B=(z=n.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};var W,x,L,C,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'completed',
    size: 'small',
    disabled: false,
    withBackground: false
  }
}`,...(L=(x=o.parameters)==null?void 0:x.docs)==null?void 0:L.source},description:{story:"Small size variant - size is propagated to all TabItem children.",...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var R,G,P,A,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'small',
    disabled: false,
    withBackground: true
  }
}`,...(P=(G=d.parameters)==null?void 0:G.docs)==null?void 0:P.source},description:{story:"Small size with background.",...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var N,O,F,_,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: true,
    withBackground: false
  }
}`,...(F=(O=l.parameters)==null?void 0:O.docs)==null?void 0:F.source},description:{story:"Disabled tabs group - disabled state is propagated to all TabItem children.",...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var M,V,Z,q,H;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithIcons,
    selectedId: 'favorites',
    size: 'default',
    disabled: false,
    withBackground: false
  }
}`,...(Z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:Z.source},description:{story:"Tabs with icons.",...(H=(q=i.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var J,K,Q,U,X;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: false,
    withBackground: true
  },
  render: args => {
    let currentSelected = args.selectedId || 'all';
    const render = () => {
      return createTabsGroup({
        ...args,
        selectedId: currentSelected,
        onSelect: id => {
          currentSelected = id;
          // In Storybook, we can't re-render easily
          // This demonstrates the callback works
          console.log('Selected tab:', id);
        }
      });
    };
    return render();
  },
  parameters: {
    docs: {
      description: {
        story: 'Click tabs and check the console to see selection callback. In a real app, you would update state and re-render.'
      }
    }
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`Interactive demo - click tabs to see selection change.
Note: In Storybook, state doesn't persist between renders.
In a real app, you would manage selectedId in state.`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};const oe=["Default","WithBackground","Wrapped","Small","SmallWithBackground","Disabled","WithIcons","Interactive"];export{s as Default,l as Disabled,c as Interactive,o as Small,d as SmallWithBackground,r as WithBackground,i as WithIcons,n as Wrapped,oe as __namedExportsOrder,ne as default};
