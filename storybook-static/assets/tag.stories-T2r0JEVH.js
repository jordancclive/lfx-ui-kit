import{c as r}from"./tag-Di5Xs3Pg.js";import{c as a}from"./table-cell-X32ALN1e.js";import{c as be,a as xe,b as we}from"./table-grid-CDe4dliu.js";import{c as s}from"./table-header-cell-DmmpqlN-.js";import{c as C}from"./table-row-DLTwFnyp.js";import{c as Se}from"./card-DYIIZwu_.js";const We={title:"1. Components / 1. Atoms / 4. Tag",tags:["autodocs"],parameters:{docs:{description:{component:`
Tag is a Tier 2 Pattern / Inline Visual Component.

## Purpose

Tag displays categorical information in a compact, non-interactive visual form.

## Key Characteristics

- **Visual only** — Tag has no click behavior or interaction
- **Stateless** — No hover, focus, selected, or disabled states
- **Intrinsic width** — Tag sizes to its content, never stretches
- **Categorical** — Used for Type, Category, or similar grouping labels
- **Semantic variants** — Visual variants for categorical meaning (info, success, warning, danger, discovery)

## Usage

Tag is used for categorical clarity in:
- Table cells (e.g., Type column in Groups table)
- Card headers or metadata rows
- List item secondary content
- Inline with text for labeling

## When NOT to Use

- **Do NOT use for interactive filtering** — Use FilterPill or Button instead
- **Do NOT use for status indication** — Use StatusIndicator or similar
- **Do NOT use for selection** — Tag is not selectable
- **Do NOT use for actions** — Tag is not clickable

## Variants

Tag supports semantic visual variants:
- \`default\` — Neutral categorical display
- \`info\` — Informational categorical data
- \`success\` — Positive categorical data
- \`warning\` — Cautionary categorical data
- \`danger\` — Critical categorical data
- \`discovery\` — New or highlighted categorical data

**Important:** Variants communicate semantic meaning only. They do NOT imply interaction or status.

## Token Bindings

- Surface: \`ui.tag.surface.background\` → \`ui.surface.subtle\`
- Border: \`ui.tag.surface.border\` → \`ui.surface.divider\`
- Typography: \`ui.tag.text.*\` → \`ui.text.label.*\`
- Variants: \`ui.tag.variant.*\` → Semantic color scales
- Radius: \`ui.tag.radius\` → \`rounded-sm\`
- Padding: \`ui.tag.padding-y/x\` → \`spacing-2\` / \`spacing-6\`

All tokens reference system-level UI roles, never primitives.
        `}}},argTypes:{children:{control:"text",description:"Tag content (typically categorical text)"},variant:{control:"select",options:["default","info","success","warning","danger","discovery"],description:"Semantic visual variant (visual only, no interaction)"}},render:e=>r(e)},o={args:{children:"Working Group"}},l={args:{children:"Information",variant:"info"}},d={args:{children:"Completed",variant:"success"}},p={args:{children:"Review Required",variant:"warning"}},u={args:{children:"Deprecated",variant:"danger"}},m={args:{children:"New Feature",variant:"discovery"}},y={render:()=>{const e=[s({children:"Name"}),s({children:"Status"}),s({children:"Priority"})],t=[C({children:[a({children:"Security Audit",contentType:"primary"}),a({children:r({children:"Completed",variant:"success"}),contentType:"secondary"}),a({children:r({children:"Critical",variant:"danger"}),contentType:"secondary"})]}),C({children:[a({children:"UI Kit Update",contentType:"primary"}),a({children:r({children:"In Progress",variant:"info"}),contentType:"secondary"}),a({children:r({children:"High",variant:"warning"}),contentType:"secondary"})]}),C({children:[a({children:"New Feature Launch",contentType:"primary"}),a({children:r({children:"Beta",variant:"discovery"}),contentType:"secondary"}),a({children:r({children:"Medium",variant:"default"}),contentType:"secondary"})]})];return Se({children:be({columns:3,children:[xe(e),we(t)]})})}},g={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="var(--spacing-8)",e.style.alignItems="center",e.style.padding="var(--spacing-16)",[{label:"Open Source",variant:"default"},{label:"Active",variant:"success"},{label:"Beta",variant:"discovery"},{label:"Review Required",variant:"warning"}].forEach(({label:i,variant:n})=>{e.appendChild(r({children:i,variant:n}))}),e}},h={render:()=>{const e=[s({children:"Name"}),s({children:"Type"}),s({children:"Description"})],i=[{name:"Security Working Group",type:"Working Group",description:"Addresses security vulnerabilities"},{name:"Technical Steering Committee",type:"TSC",description:"Guides technical direction"},{name:"Cloud Native SIG",type:"Special Interest",description:"Focuses on cloud-native practices"},{name:"Technical Oversight Committee",type:"TOC",description:"Oversees technical operations"}].map(n=>C({children:[a({children:n.name,contentType:"primary"}),a({children:r({children:n.type}),contentType:"secondary"}),a({children:n.description,contentType:"secondary"})],clickable:!0}));return Se({children:be({columns:3,children:[xe(e),we(i)]})})}},T={render:()=>{const e=document.createElement("div");e.style.padding="var(--spacing-16)",e.style.fontFamily="var(--ui-text-body-primary-font-family)",e.style.fontSize="var(--ui-text-body-primary-font-size)",e.style.color="var(--text-primary)";const t=document.createElement("span");t.textContent="Project status: ";const i=r({children:"Active"}),n=document.createElement("span");return n.textContent=" — Last updated Mar 14, 2025",e.appendChild(t),e.appendChild(i),e.appendChild(n),e}},v={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--spacing-12)",e.style.padding="var(--spacing-16)",["TAG","TSC","TOC","Working Group","Special Interest","Technical Oversight Committee","Other"].forEach(i=>{const n=document.createElement("div");n.style.display="flex",n.style.alignItems="center",n.style.gap="var(--spacing-12)";const c=document.createElement("span");c.textContent="Category:",c.style.fontFamily="var(--ui-text-body-primary-font-family)",c.style.fontSize="var(--ui-text-body-primary-font-size)",c.style.color="var(--text-secondary)",c.style.minWidth="80px",n.appendChild(c),n.appendChild(r({children:i})),e.appendChild(n)}),e}};var f,b,x,w,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Working Group'
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:`Default Tag with simple text content.
Tag uses intrinsic width and does not stretch.`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var I,D,G,O,N;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Information',
    variant: 'info'
  }
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source},description:{story:`Info variant — Informational categorical data.
Visual only, no interaction or status semantics.`,...(N=(O=l.parameters)==null?void 0:O.docs)==null?void 0:N.description}}};var E,W,k,R,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Completed',
    variant: 'success'
  }
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:`Success variant — Positive categorical data.
Visual only, no interaction or status semantics.`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var P,A,H,F,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Review Required',
    variant: 'warning'
  }
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source},description:{story:`Warning variant — Cautionary categorical data.
Visual only, no interaction or status semantics.`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var U,z,M,L,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Deprecated',
    variant: 'danger'
  }
}`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:`Danger variant — Critical categorical data.
Visual only, no interaction or status semantics.`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.description}}};var K,j,_,J,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'New Feature',
    variant: 'discovery'
  }
}`,...(_=(j=m.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:`Discovery variant — New or highlighted categorical data.
Visual only, no interaction or status semantics.`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Y,Z,$,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const headerCells = [createTableHeaderCell({
      children: 'Name'
    }), createTableHeaderCell({
      children: 'Status'
    }), createTableHeaderCell({
      children: 'Priority'
    })];
    const rows = [createTableRow({
      children: [createTableCell({
        children: 'Security Audit',
        contentType: 'primary'
      }), createTableCell({
        children: createTag({
          children: 'Completed',
          variant: 'success'
        }),
        contentType: 'secondary'
      }), createTableCell({
        children: createTag({
          children: 'Critical',
          variant: 'danger'
        }),
        contentType: 'secondary'
      })]
    }), createTableRow({
      children: [createTableCell({
        children: 'UI Kit Update',
        contentType: 'primary'
      }), createTableCell({
        children: createTag({
          children: 'In Progress',
          variant: 'info'
        }),
        contentType: 'secondary'
      }), createTableCell({
        children: createTag({
          children: 'High',
          variant: 'warning'
        }),
        contentType: 'secondary'
      })]
    }), createTableRow({
      children: [createTableCell({
        children: 'New Feature Launch',
        contentType: 'primary'
      }), createTableCell({
        children: createTag({
          children: 'Beta',
          variant: 'discovery'
        }),
        contentType: 'secondary'
      }), createTableCell({
        children: createTag({
          children: 'Medium',
          variant: 'default'
        }),
        contentType: 'secondary'
      })]
    })];
    return createCard({
      children: createTableGrid({
        columns: 3,
        children: [createTableHeader(headerCells), createTableBody(rows)]
      })
    });
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Tag inside a table cell with variants.
Demonstrates Tag's primary use case for categorical data in tables,
showing multiple semantic variants in a tabular context.`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ne,ae,re,te,ie;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-8)';
    container.style.alignItems = 'center';
    container.style.padding = 'var(--spacing-16)';
    const tags = [{
      label: 'Open Source',
      variant: 'default' as const
    }, {
      label: 'Active',
      variant: 'success' as const
    }, {
      label: 'Beta',
      variant: 'discovery' as const
    }, {
      label: 'Review Required',
      variant: 'warning' as const
    }];
    tags.forEach(({
      label,
      variant
    }) => {
      container.appendChild(createTag({
        children: label,
        variant
      }));
    });
    return container;
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:`Multiple Tags with mixed variants.
Demonstrates semantic variants used together.
Parent container controls spacing via flex gap.`,...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.description}}};var ce,se,oe,le,de;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const headerCells = [createTableHeaderCell({
      children: 'Name'
    }), createTableHeaderCell({
      children: 'Type'
    }), createTableHeaderCell({
      children: 'Description'
    })];
    const groupTypes = [{
      name: 'Security Working Group',
      type: 'Working Group',
      description: 'Addresses security vulnerabilities'
    }, {
      name: 'Technical Steering Committee',
      type: 'TSC',
      description: 'Guides technical direction'
    }, {
      name: 'Cloud Native SIG',
      type: 'Special Interest',
      description: 'Focuses on cloud-native practices'
    }, {
      name: 'Technical Oversight Committee',
      type: 'TOC',
      description: 'Oversees technical operations'
    }];
    const rows = groupTypes.map(group => createTableRow({
      children: [createTableCell({
        children: group.name,
        contentType: 'primary'
      }), createTableCell({
        children: createTag({
          children: group.type
        }),
        contentType: 'secondary'
      }), createTableCell({
        children: group.description,
        contentType: 'secondary'
      })],
      clickable: true
    }));
    return createCard({
      children: createTableGrid({
        columns: 3,
        children: [createTableHeader(headerCells), createTableBody(rows)]
      })
    });
  }
}`,...(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:`Tags in Groups context — Type column categorical data.
This replaces the placeholder Tag helper from the Groups story.`,...(de=(le=h.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var pe,ue,me,ye,ge;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-16)';
    container.style.fontFamily = 'var(--ui-text-body-primary-font-family)';
    container.style.fontSize = 'var(--ui-text-body-primary-font-size)';
    container.style.color = 'var(--text-primary)';
    const text1 = document.createElement('span');
    text1.textContent = 'Project status: ';
    const tag = createTag({
      children: 'Active'
    });
    const text2 = document.createElement('span');
    text2.textContent = ' — Last updated Mar 14, 2025';
    container.appendChild(text1);
    container.appendChild(tag);
    container.appendChild(text2);
    return container;
  }
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:`Inline with text content.
Demonstrates Tag's inline layout behavior.`,...(ge=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:ge.description}}};var he,Te,ve,Ce,fe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-12)';
    container.style.padding = 'var(--spacing-16)';
    const categories = ['TAG', 'TSC', 'TOC', 'Working Group', 'Special Interest', 'Technical Oversight Committee', 'Other'];
    categories.forEach(category => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--spacing-12)';
      const label = document.createElement('span');
      label.textContent = 'Category:';
      label.style.fontFamily = 'var(--ui-text-body-primary-font-family)';
      label.style.fontSize = 'var(--ui-text-body-primary-font-size)';
      label.style.color = 'var(--text-secondary)';
      label.style.minWidth = '80px';
      row.appendChild(label);
      row.appendChild(createTag({
        children: category
      }));
      container.appendChild(row);
    });
    return container;
  }
}`,...(ve=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:ve.source},description:{story:`Various category types.
Shows Tag with different content lengths.`,...(fe=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:fe.description}}};const ke=["Default","Info","Success","Warning","Danger","Discovery","InsideTableCell","MultipleTags","InGroupsContext","InlineWithText","VariousCategories"];export{u as Danger,o as Default,m as Discovery,h as InGroupsContext,l as Info,T as InlineWithText,y as InsideTableCell,g as MultipleTags,d as Success,v as VariousCategories,p as Warning,ke as __namedExportsOrder,We as default};
