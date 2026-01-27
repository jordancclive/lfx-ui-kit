import{c as p}from"./table-row-Bd8rP5kn.js";const K=()=>[{text:"John Doe",width:"150px"},{text:"john@example.com",width:"200px"},{text:"Active",width:"100px"}].map(({text:m,width:d})=>{const t=document.createElement("div");return t.textContent=m,t.style.width=d,t.style.flexShrink="0",t}),re={title:"1. Components / 2. Level 2 / TableRow",tags:["autodocs"],render:e=>p({...e,children:K()}),argTypes:{selected:{control:"boolean",description:"Selected state"},disabled:{control:"boolean",description:"Disabled state - overrides all other states"},clickable:{control:"boolean",description:"Whether row is clickable (shows pointer cursor, enables hover)"}},parameters:{docs:{description:{component:`
TableRow component implementing the LFX One design system contract.

**Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable, hoverable row used in tables and lists.

## Non-Goals

- Does not render cell content
- Does not own cell typography
- Does not manage table layout
- Does not define or constrain column structure

## Token Bindings

### Background
- **Default**: \`color.table.row.background.default\`
- **Hover**: \`color.table.row.background.hover\`
- **Selected**: \`color.table.row.background.selected\`
- **Disabled**: \`color.table.row.background.disabled\`

### Border
- Bottom divider: \`color.table.row.border\`
- Border width: \`button-stroke\`

### Layout
- Padding: \`spacing-12\` vertical, \`spacing-16\` horizontal

## State Precedence

1. \`disabled\` (highest) — overrides all
2. \`selected\` — overrides hover
3. \`hover\` — applies only when not selected or disabled
4. \`default\` (lowest)

## Behavior

- Applies cursor pointer when clickable
- Does not modify child styles
- Passes no visual props to children
        `}}}},s={args:{selected:!1,disabled:!1,clickable:!1}},r={args:{selected:!1,disabled:!1,clickable:!0},parameters:{pseudo:{hover:!0}}},o={args:{selected:!0,disabled:!1,clickable:!0}},a={args:{selected:!1,disabled:!0,clickable:!1}},n={args:{selected:!1,disabled:!1,clickable:!0},render:e=>p({...e,children:K(),onClick:()=>console.log("Row clicked")})},l={args:{selected:!1,disabled:!1,clickable:!1}},c={render:()=>{const e=document.createElement("div");return[{name:"Alice Smith",email:"alice@example.com",status:"Active",selected:!1},{name:"Bob Johnson",email:"bob@example.com",status:"Active",selected:!0},{name:"Carol White",email:"carol@example.com",status:"Inactive",selected:!1},{name:"David Brown",email:"david@example.com",status:"Disabled",selected:!1,disabled:!0}].forEach(({name:d,email:t,status:Q,selected:V,disabled:u})=>{const Y=[{text:d,width:"150px"},{text:t,width:"200px"},{text:Q,width:"100px"}].map(({text:ee,width:te})=>{const i=document.createElement("div");return i.textContent=ee,i.style.width=te,i.style.flexShrink="0",i}),Z=p({children:Y,selected:V,disabled:u,clickable:!u,onClick:()=>console.log(`Clicked: ${d}`)});e.appendChild(Z)}),e},parameters:{docs:{description:{story:"Demonstrates multiple rows with different states stacked together."}}}};var b,h,w,f,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    clickable: false
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:"Default table row state.\n\nUses:\n- Background: `color.table.row.background.default`\n- Border: `color.table.row.border`",...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var k,v,x,y,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    clickable: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`Hover state - interact with the row to see hover styling.

Uses:
- Background: \`color.table.row.background.hover\`

Note: Hover only applies when clickable and not selected or disabled.`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var C,D,B,R,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    clickable: true
  }
}`,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:`Selected state.

Uses:
- Background: \`color.table.row.background.selected\`

Note: Selected overrides hover.`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var A,E,H,N,P;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: true,
    clickable: false
  }
}`,...(H=(E=a.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:`Disabled state.

Uses:
- Background: \`color.table.row.background.disabled\`
- Cursor: not-allowed

Note: Disabled overrides all other states (including selected).`,...(P=(N=a.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var U,I,J,L,M;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    clickable: true
  },
  render: args => {
    return createTableRow({
      ...args,
      children: createSampleCells(),
      onClick: () => console.log('Row clicked')
    });
  }
}`,...(J=(I=n.parameters)==null?void 0:I.docs)==null?void 0:J.source},description:{story:`Clickable row - shows pointer cursor and enables hover.
Click the row and check the console.`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var W,O,_,$,j;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    clickable: false
  }
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:"Static (non-clickable) row - no pointer cursor, no hover effect.",...(j=($=l.parameters)==null?void 0:$.docs)==null?void 0:j.description}}};var z,F,G,X,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    const rows = [{
      name: 'Alice Smith',
      email: 'alice@example.com',
      status: 'Active',
      selected: false
    }, {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Active',
      selected: true
    }, {
      name: 'Carol White',
      email: 'carol@example.com',
      status: 'Inactive',
      selected: false
    }, {
      name: 'David Brown',
      email: 'david@example.com',
      status: 'Disabled',
      selected: false,
      disabled: true
    }];
    rows.forEach(({
      name,
      email,
      status,
      selected,
      disabled
    }) => {
      const cells = [{
        text: name,
        width: '150px'
      }, {
        text: email,
        width: '200px'
      }, {
        text: status,
        width: '100px'
      }].map(({
        text,
        width
      }) => {
        const cell = document.createElement('div');
        cell.textContent = text;
        cell.style.width = width;
        cell.style.flexShrink = '0';
        return cell;
      });
      const row = createTableRow({
        children: cells,
        selected,
        disabled,
        clickable: !disabled,
        onClick: () => console.log(\`Clicked: \${name}\`)
      });
      container.appendChild(row);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates multiple rows with different states stacked together.'
      }
    }
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:"Multiple rows demo - shows how rows stack with dividers.",...(q=(X=c.parameters)==null?void 0:X.docs)==null?void 0:q.description}}};const oe=["Default","Hover","Selected","Disabled","Clickable","Static","MultipleRows"];export{n as Clickable,s as Default,a as Disabled,r as Hover,c as MultipleRows,o as Selected,l as Static,oe as __namedExportsOrder,re as default};
