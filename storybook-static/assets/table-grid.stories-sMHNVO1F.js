import{c as s,a as d,b as m}from"./table-grid-CDe4dliu.js";import{c as e}from"./table-header-cell-DmmpqlN-.js";import{c as u}from"./table-row-DLTwFnyp.js";import{c as n}from"./table-cell-X32ALN1e.js";import{c as Se}from"./tag-Di5Xs3Pg.js";const Ge={title:"1. Components / 2. Molecules / 7. TableGrid",tags:["autodocs"],parameters:{docs:{description:{component:`
## TableGrid — Grid Layout Component

**Level 2 — Molecule (Grid Layout ONLY)**

> **TableGrid provides grid layout for tabular data ONLY.**
> It does NOT include search, filters, pagination, or data logic.

TableGrid is a pure grid layout component that coordinates header rows and data rows using CSS Grid.

### ⚠️ Critical: What TableGrid Is NOT

**TableGrid is NOT a full table solution.**

TableGrid does NOT own:
- ❌ Search or filtering controls (owned by **TableToolbar**)
- ❌ Pagination controls (owned by **TablePagination**)
- ❌ Sorting logic (owned by parent controller)
- ❌ Selection logic (owned by parent controller)
- ❌ Row hover or interaction states (owned by **TableRow**)
- ❌ Cell styling or typography (owned by **TableCell**)
- ❌ Data fetching or management

### Architectural Boundaries (LOCKED)

\`\`\`
Card
├─ TableToolbar (search + filters)
├─ TableGrid (grid layout ONLY)
└─ TablePagination (page controls)
\`\`\`

**TableGrid = Grid layout for rows/cells**
**TableToolbar = Search + filters (sibling, above)**
**TablePagination = Pagination controls (sibling, below)**

These are separate Level 2 components with clear boundaries.

### What TableGrid DOES Own

TableGrid owns:
- ✅ CSS Grid layout for tabular data
- ✅ Column alignment (header ↔ body)
- ✅ Semantic column width behavior
- ✅ Grid spacing and structure

---

### Why This Is Called TableGrid

**TableGrid renders ONLY:**
- Columns
- Rows
- Cells

**TableGrid does NOT include:**
- Search
- Filters
- Pagination
- Card
- Workflow structure

> **If you want the standard LFX One table workflow, use \`DataTable\`, not \`TableGrid\`.**

**Naming Clarity:**
- **TableGrid** = grid layout component (Level 2)
- **DataTable** = complete table workflow surface (Level 3)

⚠️ **Note:** \`Table\` is deprecated terminology.  
Use \`TableGrid\` when referring to the data grid component.  
Use \`DataTable\` when referring to the full single-table workflow.

---

### Layout Strategy

TableGrid uses **CSS Grid** for column alignment:
- Header cells and body cells align via shared grid column definitions
- Uses \`display: contents\` on rows to allow cells to participate in grid
- Column count and semantics controlled via \`columns\` prop

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-table-surface-background\` |
| Container border | \`--color-table-surface-border\` |
| Container radius | \`--radius-table\` |

### Composition

TableGrid expects these children:
- **Header:** \`createTableHeader()\` wrapping \`TableHeaderCell\` components
- **Body:** \`createTableBody()\` wrapping \`TableRow\` components with \`TableCell\` children

---

### Architectural Guardrails

This component is part of the **LFX One table system**.

The table system is intentionally layered to prevent layout drift and ownership confusion.

#### Core Principle

> **Each layer owns exactly one responsibility.  
No component may "help" another by re-implementing layout or behavior.**

If something feels missing, it belongs in a **different layer**, not as an override.

#### DO

- Use this component only for its documented responsibility
- Assume sibling components exist and will handle adjacent concerns
- Rely on defensive behavior instead of conditional rendering
- Let Page Patterns decide *where* things appear
- Let Molecules decide *how* things are laid out

#### DO NOT

- Re-implement spacing, flex, or padding outside this component
- Add layout flags or overrides
- Move responsibilities up or down the stack
- Render sibling components inside this one
- Special-case page examples

#### Ownership Boundaries (Locked)

| Layer | Owns |
|------|------|
| **TableGrid (Level 2)** | Grid layout for rows & cells only |
| **TableToolbar (Level 2)** | Search + filter layout only |
| **TablePagination (Level 2)** | Pagination controls only |
| **DataTable (Level 3)** | Bundling the three above into a single workflow surface |
| **Table Page (Pattern)** | Page placement, header, vertical rhythm |
| **Page Examples** | Configuration only (labels, data, callbacks) |

> **No other ownership model is valid.**

If you find yourself wanting to violate this table, stop and redesign the layer instead of patching around it.

#### Agent & Contributor Warning

If you feel tempted to:
- add flex logic to a page example
- add spacing to a pattern that belongs in a component
- move toolbar or pagination into TableGrid

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.
        `}}},argTypes:{columns:{control:{type:"number",min:2,max:8},description:"Number of columns for grid layout"},withBorder:{control:"boolean",description:"Apply container border"},withBackground:{control:"boolean",description:"Apply surface background"},dense:{control:"boolean",description:"Reduced vertical spacing"}}};function i(a={}){const{columns:t=4,withBorder:r=!1,withBackground:h=!1,dense:o=!1,rowCount:p=3,withSort:c=null,selectedRow:A,disabledRow:H}=a,b=[e({children:"Name",sortDirection:c}),e({children:"Status",showTooltip:!0}),e({children:"Date"}),e({children:"Amount",align:"right"})],we=[{name:"John Doe",status:"Active",date:"Jan 15, 2026",amount:"$1,234.56"},{name:"Jane Smith",status:"Pending",date:"Jan 14, 2026",amount:"$567.89"},{name:"Bob Johnson",status:"Inactive",date:"Jan 13, 2026",amount:"$2,345.67"},{name:"Alice Brown",status:"Active",date:"Jan 12, 2026",amount:"$890.12"},{name:"Charlie Wilson",status:"Pending",date:"Jan 11, 2026",amount:"$3,456.78"}].slice(0,p).map((y,I)=>{const Ce=A===I,l=H===I,fe=[n({children:y.name,contentType:"primary",disabled:l}),n({children:y.status,contentType:"secondary",disabled:l}),n({children:y.date,contentType:"muted",disabled:l}),n({children:y.amount,contentType:"numeric",disabled:l})];return u({children:fe,selected:Ce,disabled:l,clickable:!l})});return s({columns:t,withBorder:r,withBackground:h,dense:o,children:[d(b),m(we)]})}const T={render:()=>i()},g={render:()=>i({withBorder:!0}),parameters:{docs:{description:{story:"Table with container border and rounded corners."}}}},w={render:()=>i({withBackground:!0}),parameters:{docs:{description:{story:"Table with surface background color."}}}},C={render:()=>i({withBorder:!0,withBackground:!0}),parameters:{docs:{description:{story:"Table with both border and background for a card-like appearance."}}}},f={render:()=>i({dense:!0,withBorder:!0}),parameters:{docs:{description:{story:"Dense table with reduced vertical spacing."}}}},S={render:()=>{const a=[{key:"name",semanticType:"primary"},{key:"type",semanticType:"categorical"},{key:"description",semanticType:"primary"},{key:"count",semanticType:"numeric"},{key:"updated",semanticType:"meta"}],t=[e({children:"Name"}),e({children:"Type"}),e({children:"Description"}),e({children:"Count",align:"right"}),e({children:"Updated"})],h=[{name:"Security Working Group",type:"Working Group",description:"Addresses security vulnerabilities and best practices",count:8,updated:"Mar 14, 2026"},{name:"Technical Advisory Group",type:"TAG",description:"Provides expert guidance on technical architecture",count:6,updated:"Mar 14, 2026"},{name:"Cloud Native SIG",type:"Special Interest",description:"Focuses on cloud-native practices and containerization",count:24,updated:"Mar 13, 2026"}].map(o=>{const p=[n({children:o.name,contentType:"primary"}),n({children:Se({children:o.type}),contentType:"secondary"}),n({children:o.description,contentType:"secondary"}),n({children:String(o.count),contentType:"numeric",align:"right"}),n({children:o.updated,contentType:"muted"})];return u({children:p,clickable:!0})});return s({columns:a,withBorder:!0,withBackground:!0,children:[d(t),m(h)]})},parameters:{docs:{description:{story:`
**Semantic Column Width Behavior**

This table demonstrates semantic column widths based on content type:

- **primary** columns (Name, Description): Flexible width, expand to fill available space
- **categorical** column (Type): Intrinsic width, sized to Tag content
- **numeric** column (Count): Intrinsic width, right-aligned for scannability
- **meta** column (Updated): Intrinsic width, sized to date content

Column width behavior is semantic, not visual. Primary columns share available space after intrinsic columns are sized.

This replaces equal-width columns with LFX One-aligned semantic behavior.
        `}}}},v={render:()=>i({withBorder:!0,selectedRow:1}),parameters:{docs:{description:{story:"Table showing a selected row. Selection styling is owned by TableRow, not Table."}}}},x={render:()=>i({withBorder:!0,disabledRow:2}),parameters:{docs:{description:{story:"Table showing a disabled row. Disabled styling is owned by TableRow and TableCell, not Table."}}}},B={render:()=>i({withBorder:!0,withSort:"asc"}),parameters:{docs:{description:{story:"Table showing sort indicator on header. Sort indicator is owned by TableHeaderCell. **Table does NOT implement sorting logic.**"}}}},k={render:()=>{const a=document.createElement("div");a.style.cssText="padding: 24px; background: var(--neutral-50);";const t=document.createElement("h2");t.textContent="Recent Transactions",t.style.cssText="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);",a.appendChild(t);const r=[e({children:"Transaction",sortDirection:"desc"}),e({children:"Category",showTooltip:!0}),e({children:"Date"}),e({children:"Amount",align:"right"})],o=[{name:"Coffee Shop",category:"Food & Drink",date:"Today",amount:"-$4.50"},{name:"Salary Deposit",category:"Income",date:"Yesterday",amount:"+$3,500.00"},{name:"Electric Bill",category:"Utilities",date:"Jan 12",amount:"-$125.00"},{name:"Online Purchase",category:"Shopping",date:"Jan 11",amount:"-$67.99"},{name:"Transfer from Savings",category:"Transfer",date:"Jan 10",amount:"+$500.00"}].map((c,A)=>{const H=c.amount.startsWith("+"),b=[n({children:c.name,contentType:"primary"}),n({children:c.category,contentType:"secondary"}),n({children:c.date,contentType:"muted"}),n({children:c.amount,contentType:"numeric"})],W=b[3];return H&&(W.style.color="var(--success-600)"),u({children:b,clickable:!0})}),p=s({columns:4,withBorder:!0,withBackground:!0,children:[d(r),m(o)]});return a.appendChild(p),a},parameters:{docs:{description:{story:`
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
    `,t.textContent="No data available";const r=m(t);return s({columns:4,withBorder:!0,withBackground:!0,children:[d(a),r]})},parameters:{docs:{description:{story:"Table with empty state. The empty message spans all columns using grid-column."}}}},G={render:()=>{const a=[e({children:"Product"}),e({children:"Quantity"}),e({children:"Price",align:"right"})],t=[{product:"Widget A",qty:"10",price:"$99.00"},{product:"Widget B",qty:"5",price:"$149.00"},{product:"Widget C",qty:"20",price:"$49.00"}].map(r=>u({children:[n({children:r.product,contentType:"primary"}),n({children:r.qty,contentType:"secondary"}),n({children:r.price,contentType:"numeric"})]}));return s({columns:3,withBorder:!0,children:[d(a),m(t)]})},parameters:{docs:{description:{story:"Table with 3 columns."}}}},R={render:()=>{const a=[e({children:"ID"}),e({children:"Name"}),e({children:"Email"}),e({children:"Role"}),e({children:"Status"}),e({children:"Actions",align:"right"})],t=[{id:"001",name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:"002",name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:"003",name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"}].map(r=>u({children:[n({children:r.id,contentType:"muted"}),n({children:r.name,contentType:"primary"}),n({children:r.email,contentType:"secondary"}),n({children:r.role,contentType:"secondary"}),n({children:r.status,contentType:"secondary"}),n({children:"•••",contentType:"muted",align:"right"})]}));return s({columns:6,withBorder:!0,children:[d(a),m(t)]})},parameters:{docs:{description:{story:"Table with 6 columns demonstrating wider layouts."}}}};var N,P,O;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => createSampleTable()
}`,...(O=(P=T.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var L,$,J;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var E,U,z;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(U=w.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var F,M,q;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(M=C.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var Y,j,X;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Q,_,K;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    return createTableGrid({
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
}`,...(K=(_=S.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var V,Z,ee;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ie;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,se;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    const table = createTableGrid({
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
}`,...(se=(le=k.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,me,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    return createTableGrid({
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
}`,...(pe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,he,be;G.parameters={...G.parameters,docs:{...(ue=G.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    return createTableGrid({
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
}`,...(be=(he=G.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Te,ge;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    return createTableGrid({
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
}`,...(ge=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};const Re=["Default","WithBorder","WithBackground","WithBorderAndBackground","Dense","SemanticColumnWidths","WithSelectedRow","WithDisabledRow","WithSortIndicator","InContext","EmptyState","ThreeColumns","SixColumns"];export{T as Default,f as Dense,D as EmptyState,k as InContext,S as SemanticColumnWidths,R as SixColumns,G as ThreeColumns,w as WithBackground,g as WithBorder,C as WithBorderAndBackground,x as WithDisabledRow,v as WithSelectedRow,B as WithSortIndicator,Re as __namedExportsOrder,Ge as default};
