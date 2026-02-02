import{c as le}from"./tab-item-6b0QOFow.js";const re=({tabs:e,selectedId:a,size:g="default",disabled:s=!1,withBackground:ne=!1,noWrap:oe=!1,onSelect:h})=>{const b=document.createElement("div"),m=["lfx-tabs-group"];return ne&&m.push("lfx-tabs-group--with-background"),oe&&m.push("lfx-tabs-group--no-wrap"),b.className=m.join(" "),b.setAttribute("role","tablist"),e.forEach(r=>{const de=r.id===a,f=le({label:r.label,icon:r.icon,selected:de,disabled:s,size:g,onClick:()=>{!s&&h&&h(r.id)}});f.dataset.tabId=r.id,b.appendChild(f)}),b},t=[{id:"all",label:"All"},{id:"active",label:"Active"},{id:"completed",label:"Completed"},{id:"archived",label:"Archived"}],ie=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Notifications"},{id:"tab5",label:"Settings"},{id:"tab6",label:"Integrations"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Team"}],ce=`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L9.79611 5.52786L13.6085 6.11114L10.8043 8.97214L11.5922 12.8889L8 11.0279L4.40783 12.8889L5.19577 8.97214L2.39155 6.11114L6.20389 5.52786L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`,pe=[{id:"favorites",label:"Favorites",icon:ce},{id:"recent",label:"Recent"},{id:"shared",label:"Shared"}],be={title:"1. Components / 3. Organisms / 9. TabsGroup",tags:["autodocs"],render:e=>re(e),argTypes:{selectedId:{control:"text",description:"ID of the currently selected tab"},size:{control:"select",options:["default","small"],description:"Size variant - propagated to all TabItem children"},disabled:{control:"boolean",description:"Disabled state - propagated to all TabItem children"},withBackground:{control:"boolean",description:"Show neutral surface background (pill-style group)"},noWrap:{control:"boolean",description:"Prevent wrapping"}},parameters:{docs:{description:{component:'\nTabsGroup component - layout and state coordinator only.\n\n## Responsibilities\n- Render TabItem children\n- Pass `selected=true` to the active tab\n- Pass `disabled=true` to tabs when group is disabled\n- Support size propagation: `"default"` | `"small"`\n- Support wrapping via CSS\n\n## NOT Responsible For\n- Visual styles (colors, borders, text styles) - owned by TabItem\n- Color tokens - no `color.tabs.item.*` references\n\n## Layout Tokens\n- Gap: `spacing-4`\n- Background (with-background variant): `neutral-100`\n- Padding (with-background variant): `spacing-4`\n- Border radius (with-background variant): `rounded-xl`\n\n## State Propagation\n- `selectedId` → `selected=true` on matching TabItem\n- `disabled` → `disabled=true` on all TabItem children\n- `size` → `size` prop on all TabItem children\n        '}}}},n={args:{tabs:t,selectedId:"all",size:"default",disabled:!1,withBackground:!1}},o={args:{tabs:t,selectedId:"active",size:"default",disabled:!1,withBackground:!0}},d={args:{tabs:ie,selectedId:"tab1",size:"default",disabled:!1,withBackground:!1},decorators:[e=>{const a=document.createElement("div");return a.style.maxWidth="400px",a.appendChild(e()),a}]},l={args:{tabs:t,selectedId:"completed",size:"small",disabled:!1,withBackground:!1}},i={args:{tabs:t,selectedId:"active",size:"small",disabled:!1,withBackground:!0}},c={args:{tabs:t,selectedId:"all",size:"default",disabled:!0,withBackground:!1}},p={args:{tabs:pe,selectedId:"favorites",size:"default",disabled:!1,withBackground:!1}},u={args:{tabs:t,selectedId:"all",size:"default",disabled:!1,withBackground:!0},render:e=>{let a=e.selectedId||"all";return re({...e,selectedId:a,onSelect:s=>{a=s,console.log("Selected tab:",s)}})},parameters:{docs:{description:{story:"Click tabs and check the console to see selection callback. In a real app, you would update state and re-render."}}}};var I,w,k,v,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: false,
    withBackground: false
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"Default tabs group with first tab selected.",...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var S,T,z,B,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'default',
    disabled: false,
    withBackground: true
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:"Tabs group with background (pill-style).",...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.description}}};var W,C,L,D,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:`Wrapped tabs group - tabs wrap to next line when container is narrow.
Resize the viewport to see wrapping behavior.`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var A,E,G,P,N;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'completed',
    size: 'small',
    disabled: false,
    withBackground: false
  }
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:"Small size variant - size is propagated to all TabItem children.",...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};var O,j,F,_,M;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'active',
    size: 'small',
    disabled: false,
    withBackground: true
  }
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"Small size with background.",...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var V,Z,q,H,J;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    selectedId: 'all',
    size: 'default',
    disabled: true,
    withBackground: false
  }
}`,...(q=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:q.source},description:{story:"Disabled tabs group - disabled state is propagated to all TabItem children.",...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,U,X,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithIcons,
    selectedId: 'favorites',
    size: 'default',
    disabled: false,
    withBackground: false
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"Tabs with icons.",...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var $,ee,ae,te,se;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:`Interactive demo - click tabs to see selection change.
Note: In Storybook, state doesn't persist between renders.
In a real app, you would manage selectedId in state.`,...(se=(te=u.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};const me=["Default","WithBackground","Wrapped","Small","SmallWithBackground","Disabled","WithIcons","Interactive"];export{n as Default,c as Disabled,u as Interactive,l as Small,i as SmallWithBackground,o as WithBackground,p as WithIcons,d as Wrapped,me as __namedExportsOrder,be as default};
