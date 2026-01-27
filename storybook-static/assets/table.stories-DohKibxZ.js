import{c as s,a as d,b as m}from"./table-BqFkyqaa.js";import{c as e}from"./table-header-cell-BQFJGQJu.js";import{c as u}from"./table-row-Bd8rP5kn.js";import{c as n}from"./table-cell-FJBY3uM0.js";import{c as xe}from"./tag-Di5Xs3Pg.js";const He={title:"1. Components / 3. Level 3 / Table",tags:["autodocs"],parameters:{docs:{description:{component:`
## Table

**Tier 3 — Composite Layout Component**

Table provides structural layout for tabular data. It coordinates header rows and data rows, establishing column alignment and spacing.

### ⚠️ Important

**Table does NOT manage sorting, selection, or interaction logic.**

Those responsibilities belong to:
- **TableRow:** hover, selected, disabled backgrounds
- **TableCell:** text color, alignment, typography
- **TableHeaderCell:** header text, sort indicators
- **Parent controller:** sorting logic, selection state

### Non-Goals

- Does NOT implement sorting logic
- Does NOT implement selection logic
- Does NOT manage hover or disabled states
- Does NOT own row or cell visual styles
- Does NOT fetch or manage data
- Does NOT implement pagination or virtualization

### Layout Strategy

Table uses **CSS Grid** for column alignment:
- Header cells and body cells align via shared grid column definitions
- Uses \`display: contents\` on rows to allow cells to participate in grid
- Column count controlled via \`columns\` prop

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-table-surface-background\` |
| Container border | \`--color-table-surface-border\` |
| Container radius | \`--radius-table\` |

### Composition

Table expects these children:
- **Header:** \`createTableHeader()\` wrapping \`TableHeaderCell\` components
- **Body:** \`createTableBody()\` wrapping \`TableRow\` components with \`TableCell\` children
        `}}},argTypes:{columns:{control:{type:"number",min:2,max:8},description:"Number of columns for grid layout"},withBorder:{control:"boolean",description:"Apply container border"},withBackground:{control:"boolean",description:"Apply surface background"},dense:{control:"boolean",description:"Reduced vertical spacing"}}};function c(a={}){const{columns:t=4,withBorder:r=!1,withBackground:h=!1,dense:o=!1,rowCount:p=3,withSort:i=null,selectedRow:W,disabledRow:A}=a,y=[e({children:"Name",sortDirection:i}),e({children:"Status",showTooltip:!0}),e({children:"Date"}),e({children:"Amount",align:"right"})],we=[{name:"John Doe",status:"Active",date:"Jan 15, 2026",amount:"$1,234.56"},{name:"Jane Smith",status:"Pending",date:"Jan 14, 2026",amount:"$567.89"},{name:"Bob Johnson",status:"Inactive",date:"Jan 13, 2026",amount:"$2,345.67"},{name:"Alice Brown",status:"Active",date:"Jan 12, 2026",amount:"$890.12"},{name:"Charlie Wilson",status:"Pending",date:"Jan 11, 2026",amount:"$3,456.78"}].slice(0,p).map((b,N)=>{const Ce=W===N,l=A===N,Se=[n({children:b.name,contentType:"primary",disabled:l}),n({children:b.status,contentType:"secondary",disabled:l}),n({children:b.date,contentType:"muted",disabled:l}),n({children:b.amount,contentType:"numeric",disabled:l})];return u({children:Se,selected:Ce,disabled:l,clickable:!l})});return s({columns:t,withBorder:r,withBackground:h,dense:o,children:[d(y),m(we)]})}const T={render:()=>c()},g={render:()=>c({withBorder:!0}),parameters:{docs:{description:{story:"Table with container border and rounded corners."}}}},w={render:()=>c({withBackground:!0}),parameters:{docs:{description:{story:"Table with surface background color."}}}},C={render:()=>c({withBorder:!0,withBackground:!0}),parameters:{docs:{description:{story:"Table with both border and background for a card-like appearance."}}}},S={render:()=>c({dense:!0,withBorder:!0}),parameters:{docs:{description:{story:"Dense table with reduced vertical spacing."}}}},x={render:()=>{const a=[{key:"name",semanticType:"primary"},{key:"type",semanticType:"categorical"},{key:"description",semanticType:"primary"},{key:"count",semanticType:"numeric"},{key:"updated",semanticType:"meta"}],t=[e({children:"Name"}),e({children:"Type"}),e({children:"Description"}),e({children:"Count",align:"right"}),e({children:"Updated"})],h=[{name:"Security Working Group",type:"Working Group",description:"Addresses security vulnerabilities and best practices",count:8,updated:"Mar 14, 2026"},{name:"Technical Advisory Group",type:"TAG",description:"Provides expert guidance on technical architecture",count:6,updated:"Mar 14, 2026"},{name:"Cloud Native SIG",type:"Special Interest",description:"Focuses on cloud-native practices and containerization",count:24,updated:"Mar 13, 2026"}].map(o=>{const p=[n({children:o.name,contentType:"primary"}),n({children:xe({children:o.type}),contentType:"secondary"}),n({children:o.description,contentType:"secondary"}),n({children:String(o.count),contentType:"numeric",align:"right"}),n({children:o.updated,contentType:"muted"})];return u({children:p,clickable:!0})});return s({columns:a,withBorder:!0,withBackground:!0,children:[d(t),m(h)]})},parameters:{docs:{description:{story:`
**Semantic Column Width Behavior**

This table demonstrates semantic column widths based on content type:

- **primary** columns (Name, Description): Flexible width, expand to fill available space
- **categorical** column (Type): Intrinsic width, sized to Tag content
- **numeric** column (Count): Intrinsic width, right-aligned for scannability
- **meta** column (Updated): Intrinsic width, sized to date content

Column width behavior is semantic, not visual. Primary columns share available space after intrinsic columns are sized.

This replaces equal-width columns with LFX One-aligned semantic behavior.
        `}}}},B={render:()=>c({withBorder:!0,selectedRow:1}),parameters:{docs:{description:{story:"Table showing a selected row. Selection styling is owned by TableRow, not Table."}}}},v={render:()=>c({withBorder:!0,disabledRow:2}),parameters:{docs:{description:{story:"Table showing a disabled row. Disabled styling is owned by TableRow and TableCell, not Table."}}}},k={render:()=>c({withBorder:!0,withSort:"asc"}),parameters:{docs:{description:{story:"Table showing sort indicator on header. Sort indicator is owned by TableHeaderCell. **Table does NOT implement sorting logic.**"}}}},f={render:()=>{const a=document.createElement("div");a.style.cssText="padding: 24px; background: var(--neutral-50);";const t=document.createElement("h2");t.textContent="Recent Transactions",t.style.cssText="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);",a.appendChild(t);const r=[e({children:"Transaction",sortDirection:"desc"}),e({children:"Category",showTooltip:!0}),e({children:"Date"}),e({children:"Amount",align:"right"})],o=[{name:"Coffee Shop",category:"Food & Drink",date:"Today",amount:"-$4.50"},{name:"Salary Deposit",category:"Income",date:"Yesterday",amount:"+$3,500.00"},{name:"Electric Bill",category:"Utilities",date:"Jan 12",amount:"-$125.00"},{name:"Online Purchase",category:"Shopping",date:"Jan 11",amount:"-$67.99"},{name:"Transfer from Savings",category:"Transfer",date:"Jan 10",amount:"+$500.00"}].map((i,W)=>{const A=i.amount.startsWith("+"),y=[n({children:i.name,contentType:"primary"}),n({children:i.category,contentType:"secondary"}),n({children:i.date,contentType:"muted"}),n({children:i.amount,contentType:"numeric"})],I=y[3];return A&&(I.style.color="var(--success-600)"),u({children:y,clickable:!0})}),p=s({columns:4,withBorder:!0,withBackground:!0,children:[d(r),m(o)]});return a.appendChild(p),a},parameters:{docs:{description:{story:`
A realistic example showing Table composing TableHeaderCell, TableRow, and TableCell.

**Component ownership:**
- **Table:** Layout grid, container border/background
- **TableHeaderCell:** Header text, sort indicator, tooltip icon
- **TableRow:** Row background, hover state, click handling
- **TableCell:** Text color, alignment, typography
        `}}}},D={render:()=>{const a=[e({children:"Name"}),e({children:"Status"}),e({children:"Date"}),e({children:"Amount",align:"right"})],t=document.createElement("div");t.style.cssText=`
      grid-column: 1 / -1;
      padding: 48px 16px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
    `,t.textContent="No data available";const r=m(t);return s({columns:4,withBorder:!0,withBackground:!0,children:[d(a),r]})},parameters:{docs:{description:{story:"Table with empty state. The empty message spans all columns using grid-column."}}}},H={render:()=>{const a=[e({children:"Product"}),e({children:"Quantity"}),e({children:"Price",align:"right"})],t=[{product:"Widget A",qty:"10",price:"$99.00"},{product:"Widget B",qty:"5",price:"$149.00"},{product:"Widget C",qty:"20",price:"$49.00"}].map(r=>u({children:[n({children:r.product,contentType:"primary"}),n({children:r.qty,contentType:"secondary"}),n({children:r.price,contentType:"numeric"})]}));return s({columns:3,withBorder:!0,children:[d(a),m(t)]})},parameters:{docs:{description:{story:"Table with 3 columns."}}}},R={render:()=>{const a=[e({children:"ID"}),e({children:"Name"}),e({children:"Email"}),e({children:"Role"}),e({children:"Status"}),e({children:"Actions",align:"right"})],t=[{id:"001",name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:"002",name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:"003",name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"}].map(r=>u({children:[n({children:r.id,contentType:"muted"}),n({children:r.name,contentType:"primary"}),n({children:r.email,contentType:"secondary"}),n({children:r.role,contentType:"secondary"}),n({children:r.status,contentType:"secondary"}),n({children:"•••",contentType:"muted",align:"right"})]}));return s({columns:6,withBorder:!0,children:[d(a),m(t)]})},parameters:{docs:{description:{story:"Table with 6 columns demonstrating wider layouts."}}}};var $,J,P;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => createSampleTable()
}`,...(P=(J=T.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var O,E,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBorder: true
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table with container border and rounded corners.'
      }
    }
  }
}`,...(z=(E=g.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var G,U,q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBackground: true
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table with surface background color.'
      }
    }
  }
}`,...(q=(U=w.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,L,M;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBorder: true,
    withBackground: true
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table with both border and background for a card-like appearance.'
      }
    }
  }
}`,...(M=(L=C.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,Q,X;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => createSampleTable({
    dense: true,
    withBorder: true
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense table with reduced vertical spacing.'
      }
    }
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,_,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    // Define column semantics
    const columns: ColumnDefinition[] = [{
      key: 'name',
      semanticType: 'primary'
    }, {
      key: 'type',
      semanticType: 'categorical'
    }, {
      key: 'description',
      semanticType: 'primary'
    }, {
      key: 'count',
      semanticType: 'numeric'
    }, {
      key: 'updated',
      semanticType: 'meta'
    }];

    // Create header cells
    const headerCells = [createTableHeaderCell({
      children: 'Name'
    }), createTableHeaderCell({
      children: 'Type'
    }), createTableHeaderCell({
      children: 'Description'
    }), createTableHeaderCell({
      children: 'Count',
      align: 'right'
    }), createTableHeaderCell({
      children: 'Updated'
    })];

    // Create data rows with semantic content
    const data = [{
      name: 'Security Working Group',
      type: 'Working Group',
      description: 'Addresses security vulnerabilities and best practices',
      count: 8,
      updated: 'Mar 14, 2026'
    }, {
      name: 'Technical Advisory Group',
      type: 'TAG',
      description: 'Provides expert guidance on technical architecture',
      count: 6,
      updated: 'Mar 14, 2026'
    }, {
      name: 'Cloud Native SIG',
      type: 'Special Interest',
      description: 'Focuses on cloud-native practices and containerization',
      count: 24,
      updated: 'Mar 13, 2026'
    }];
    const rows = data.map(item => {
      const cells = [
      // Primary text column - expands to fill space
      createTableCell({
        children: item.name,
        contentType: 'primary'
      }),
      // Categorical column - intrinsic width with Tag
      createTableCell({
        children: createTag({
          children: item.type
        }),
        contentType: 'secondary'
      }),
      // Primary text column - expands to fill space
      createTableCell({
        children: item.description,
        contentType: 'secondary'
      }),
      // Numeric column - intrinsic width, right aligned
      createTableCell({
        children: String(item.count),
        contentType: 'numeric',
        align: 'right'
      }),
      // Meta column - intrinsic width
      createTableCell({
        children: item.updated,
        contentType: 'muted'
      })];
      return createTableRow({
        children: cells,
        clickable: true
      });
    });
    return createTable({
      columns,
      withBorder: true,
      withBackground: true,
      children: [createTableHeader(headerCells), createTableBody(rows)]
    });
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Semantic Column Width Behavior**

This table demonstrates semantic column widths based on content type:

- **primary** columns (Name, Description): Flexible width, expand to fill available space
- **categorical** column (Type): Intrinsic width, sized to Tag content
- **numeric** column (Count): Intrinsic width, right-aligned for scannability
- **meta** column (Updated): Intrinsic width, sized to date content

Column width behavior is semantic, not visual. Primary columns share available space after intrinsic columns are sized.

This replaces equal-width columns with LFX One-aligned semantic behavior.
        \`
      }
    }
  }
}`,...(K=(_=x.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var V,Z,ee;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBorder: true,
    selectedRow: 1
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing a selected row. Selection styling is owned by TableRow, not Table.'
      }
    }
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBorder: true,
    disabledRow: 2
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing a disabled row. Disabled styling is owned by TableRow and TableCell, not Table.'
      }
    }
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ce;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => createSampleTable({
    withBorder: true,
    withSort: 'asc'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Table showing sort indicator on header. Sort indicator is owned by TableHeaderCell. **Table does NOT implement sorting logic.**'
      }
    }
  }
}`,...(ce=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,le,se;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 24px; background: var(--neutral-50);';

    // Title
    const title = document.createElement('h2');
    title.textContent = 'Recent Transactions';
    title.style.cssText = 'margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);';
    container.appendChild(title);

    // Create a realistic table
    const headerCells = [createTableHeaderCell({
      children: 'Transaction',
      sortDirection: 'desc'
    }), createTableHeaderCell({
      children: 'Category',
      showTooltip: true
    }), createTableHeaderCell({
      children: 'Date'
    }), createTableHeaderCell({
      children: 'Amount',
      align: 'right'
    })];
    const transactions = [{
      name: 'Coffee Shop',
      category: 'Food & Drink',
      date: 'Today',
      amount: '-$4.50'
    }, {
      name: 'Salary Deposit',
      category: 'Income',
      date: 'Yesterday',
      amount: '+$3,500.00'
    }, {
      name: 'Electric Bill',
      category: 'Utilities',
      date: 'Jan 12',
      amount: '-$125.00'
    }, {
      name: 'Online Purchase',
      category: 'Shopping',
      date: 'Jan 11',
      amount: '-$67.99'
    }, {
      name: 'Transfer from Savings',
      category: 'Transfer',
      date: 'Jan 10',
      amount: '+$500.00'
    }];
    const rows = transactions.map((tx, index) => {
      const isIncome = tx.amount.startsWith('+');
      const cells = [createTableCell({
        children: tx.name,
        contentType: 'primary'
      }), createTableCell({
        children: tx.category,
        contentType: 'secondary'
      }), createTableCell({
        children: tx.date,
        contentType: 'muted'
      }), createTableCell({
        children: tx.amount,
        contentType: 'numeric'
      })];

      // Style the amount cell based on income/expense
      const amountCell = cells[3];
      if (isIncome) {
        amountCell.style.color = 'var(--success-600)';
      }
      return createTableRow({
        children: cells,
        clickable: true
      });
    });
    const table = createTable({
      columns: 4,
      withBorder: true,
      withBackground: true,
      children: [createTableHeader(headerCells), createTableBody(rows)]
    });
    container.appendChild(table);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: \`
A realistic example showing Table composing TableHeaderCell, TableRow, and TableCell.

**Component ownership:**
- **Table:** Layout grid, container border/background
- **TableHeaderCell:** Header text, sort indicator, tooltip icon
- **TableRow:** Row background, hover state, click handling
- **TableCell:** Text color, alignment, typography
        \`
      }
    }
  }
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,me,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const headerCells = [createTableHeaderCell({
      children: 'Name'
    }), createTableHeaderCell({
      children: 'Status'
    }), createTableHeaderCell({
      children: 'Date'
    }), createTableHeaderCell({
      children: 'Amount',
      align: 'right'
    })];

    // Empty body with message
    const emptyRow = document.createElement('div');
    emptyRow.style.cssText = \`
      grid-column: 1 / -1;
      padding: 48px 16px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
    \`;
    emptyRow.textContent = 'No data available';
    const body = createTableBody(emptyRow);
    return createTable({
      columns: 4,
      withBorder: true,
      withBackground: true,
      children: [createTableHeader(headerCells), body]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with empty state. The empty message spans all columns using grid-column.'
      }
    }
  }
}`,...(pe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,he,ye;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const headerCells = [createTableHeaderCell({
      children: 'Product'
    }), createTableHeaderCell({
      children: 'Quantity'
    }), createTableHeaderCell({
      children: 'Price',
      align: 'right'
    })];
    const rows = [{
      product: 'Widget A',
      qty: '10',
      price: '$99.00'
    }, {
      product: 'Widget B',
      qty: '5',
      price: '$149.00'
    }, {
      product: 'Widget C',
      qty: '20',
      price: '$49.00'
    }].map(item => createTableRow({
      children: [createTableCell({
        children: item.product,
        contentType: 'primary'
      }), createTableCell({
        children: item.qty,
        contentType: 'secondary'
      }), createTableCell({
        children: item.price,
        contentType: 'numeric'
      })]
    }));
    return createTable({
      columns: 3,
      withBorder: true,
      children: [createTableHeader(headerCells), createTableBody(rows)]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 3 columns.'
      }
    }
  }
}`,...(ye=(he=H.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,Te,ge;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const headerCells = [createTableHeaderCell({
      children: 'ID'
    }), createTableHeaderCell({
      children: 'Name'
    }), createTableHeaderCell({
      children: 'Email'
    }), createTableHeaderCell({
      children: 'Role'
    }), createTableHeaderCell({
      children: 'Status'
    }), createTableHeaderCell({
      children: 'Actions',
      align: 'right'
    })];
    const rows = [{
      id: '001',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active'
    }, {
      id: '002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active'
    }, {
      id: '003',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive'
    }].map(item => createTableRow({
      children: [createTableCell({
        children: item.id,
        contentType: 'muted'
      }), createTableCell({
        children: item.name,
        contentType: 'primary'
      }), createTableCell({
        children: item.email,
        contentType: 'secondary'
      }), createTableCell({
        children: item.role,
        contentType: 'secondary'
      }), createTableCell({
        children: item.status,
        contentType: 'secondary'
      }), createTableCell({
        children: '•••',
        contentType: 'muted',
        align: 'right'
      })]
    }));
    return createTable({
      columns: 6,
      withBorder: true,
      children: [createTableHeader(headerCells), createTableBody(rows)]
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 6 columns demonstrating wider layouts.'
      }
    }
  }
}`,...(ge=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};const Re=["Default","WithBorder","WithBackground","WithBorderAndBackground","Dense","SemanticColumnWidths","WithSelectedRow","WithDisabledRow","WithSortIndicator","InContext","EmptyState","ThreeColumns","SixColumns"];export{T as Default,S as Dense,D as EmptyState,f as InContext,x as SemanticColumnWidths,R as SixColumns,H as ThreeColumns,w as WithBackground,g as WithBorder,C as WithBorderAndBackground,v as WithDisabledRow,B as WithSelectedRow,k as WithSortIndicator,Re as __namedExportsOrder,He as default};
