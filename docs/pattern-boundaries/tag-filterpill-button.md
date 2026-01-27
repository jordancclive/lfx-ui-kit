# Tag vs FilterPill vs Button — Interaction Boundaries

## Purpose

This document defines the non-overlapping responsibilities of Tag, FilterPill, and Button components in the LFX One UI Kit.

These components are intentionally similar in appearance but semantically distinct. Blurring their responsibilities leads to inconsistent UX, broken accessibility expectations, and agent hallucination.

This document exists to lock those boundaries.

## Component Comparison

| Aspect | Tag | FilterPill | Button |
|--------|-----|------------|--------|
| **Role** | Visual label for categorical information | Toggleable filter control | Action trigger |
| **Interactivity** | None (never clickable) | Yes (clickable) | Yes (clickable) |
| **State** | Stateless | Selected / unselected | Enabled / disabled / loading |
| **Width Behavior** | Intrinsic (content-sized) | Intrinsic (content-sized) | Flexible or intrinsic |
| **Used For** | Type, Category, Status labels | Filtering datasets | Submitting, navigating, confirming actions |
| **Must NOT** | Trigger actions, toggle state, act as filters | Represent static data, appear inside table cells as labels | Represent categories or passive metadata |

## Decision Rules (Do Not Debate These)

These rules are absolute and non-negotiable:

- **If it displays data, it is a Tag.**
- **If it toggles a filter, it is a FilterPill.**
- **If it performs an action, it is a Button.**

Corollaries:

- If you want a Tag to be clickable, you are choosing the wrong component.
- If a FilterPill is not interactive, it should be a Tag.
- If something "looks like a pill" but submits or navigates, it is a Button.

### Critical Principle

**Visual similarity does NOT imply interchangeable usage.**

Components that look similar may have completely different semantic roles. Appearance is a design decision; behavior is a system constraint.

## Common Anti-Patterns (Forbidden)

The following patterns are considered **bugs**, not stylistic differences:

### ❌ Clickable Tag Used as a Filter

**Wrong:**
```typescript
// BAD: Tag with click handler
createTag({ 
  children: 'Open Source',
  onClick: () => applyFilter('open-source')  // FORBIDDEN
})
```

**Correct:**
```typescript
// GOOD: Use FilterPill for interactive filtering
createFilterPill({ 
  label: 'Open Source',
  selected: false
})
```

### ❌ FilterPill Used to Display Static Status

**Wrong:**
```typescript
// BAD: FilterPill in table cell showing static category
createTableCell({
  children: createFilterPill({ label: 'Working Group', selected: false })
})
```

**Correct:**
```typescript
// GOOD: Use Tag for static categorical data
createTableCell({
  children: createTag({ children: 'Working Group' })
})
```

### ❌ Button Styled to Look Like a Tag

**Wrong:**
```typescript
// BAD: Button masquerading as a category label
createButton({ 
  label: 'Active',
  variant: 'tag-styled'  // NO SUCH VARIANT
})
```

**Correct:**
```typescript
// GOOD: If it's a label, use Tag; if it's an action, use Button
createTag({ children: 'Active' })
// OR
createButton({ label: 'Mark as Active' })
```

### ❌ Table Cell Using FilterPill to Display Categorical Data

**Wrong:**
```typescript
// BAD: FilterPill in Type column
createTableCell({
  children: createFilterPill({ label: group.type, selected: false })
})
```

**Correct:**
```typescript
// GOOD: Tag for categorical display in tables
createTableCell({
  children: createTag({ children: group.type })
})
```

### ❌ Adding Hover or Focus States to Tag

**Wrong:**
```css
/* BAD: Making Tag interactive via CSS */
.lfx-tag:hover {
  background-color: var(--interactive-hover);
  cursor: pointer;
}
```

**Correct:**
```css
/* GOOD: Tag remains non-interactive */
.lfx-tag {
  cursor: default;
  /* No hover, focus, or active states */
}
```

## Interaction Matrix

This matrix defines what states and interactions are allowed for each component:

| Interaction/State | Tag | FilterPill | Button |
|-------------------|-----|------------|--------|
| Click handler | ❌ Never | ✅ Required | ✅ Required |
| Hover state | ❌ No | ✅ Yes | ✅ Yes |
| Focus state | ❌ No | ✅ Yes | ✅ Yes |
| Selected state | ❌ No | ✅ Yes | ❌ No |
| Disabled state | ❌ No | ✅ Yes | ✅ Yes |
| Loading state | ❌ No | ❌ No | ✅ Yes |
| Keyboard navigation | ❌ No | ✅ Yes | ✅ Yes |
| ARIA role | `none` or `text` | `button` | `button` |

## Usage Examples by Context

### In a Table Cell (Categorical Data)

```typescript
// ✅ CORRECT: Tag for displaying category
createTableCell({
  children: createTag({ children: 'Working Group' }),
  contentType: 'secondary'
})

// ❌ WRONG: FilterPill in table cell
createTableCell({
  children: createFilterPill({ label: 'Working Group', selected: false })
})
```

### Above a Table (Filter Controls)

```typescript
// ✅ CORRECT: FilterPill for filtering
const filterBar = [
  createFilterPill({ label: 'Open Source', selected: true }),
  createFilterPill({ label: 'Security', selected: false }),
  createFilterPill({ label: 'Cloud Native', selected: false })
];

// ❌ WRONG: Tag for filtering
const filterBar = [
  createTag({ children: 'Open Source' })  // Not interactive!
];
```

### In a Card Header (Metadata Display)

```typescript
// ✅ CORRECT: Tag for status display
createCard({
  children: [
    createTag({ children: 'Active' }),
    createTextNode('Last updated Mar 14, 2025')
  ]
})

// ❌ WRONG: Button for status display
createCard({
  children: [
    createButton({ label: 'Active' })  // Implies action, not status
  ]
})
```

### Action Trigger

```typescript
// ✅ CORRECT: Button for action
createButton({ 
  label: 'Apply Filters',
  variant: 'primary'
})

// ❌ WRONG: FilterPill for action
createFilterPill({ 
  label: 'Apply Filters',  // This is an action, not a filter!
  selected: false
})
```

## Agent Enforcement Rules

When implementing features or modifying components, agents must adhere to these constraints:

1. **Agents must never introduce interactivity to Tag**
   - No click handlers
   - No hover states
   - No focus styles
   - No keyboard navigation

2. **Agents must not replace Tag with FilterPill unless filtering behavior is explicitly requested**
   - If the user says "make this clickable," ask what action it should perform
   - If the answer is "filter data," use FilterPill
   - If the answer is "navigate" or "submit," use Button
   - If the answer is unclear, ask for clarification

3. **Agents must not infer click behavior from visual style**
   - "Make it look like a pill" ≠ "make it a FilterPill"
   - "Make it compact" ≠ "make it a Tag"
   - Visual style and semantic role are independent concerns

4. **When uncertain, agents must ask rather than guessing**
   - Do not assume intent from appearance
   - Do not generalize from one use case to another
   - Do not "improve" by adding interactivity

## Accessibility Implications

Violating these boundaries has direct accessibility consequences:

| Anti-Pattern | Accessibility Issue |
|--------------|---------------------|
| Clickable Tag | Screen readers announce as text, not interactive element |
| Non-interactive FilterPill | Announces as button but doesn't respond to activation |
| Button as category label | Implies action where none exists, confusing users |
| Missing focus states | Keyboard users cannot navigate or activate |

**Screen Reader Impact:**

- **Tag:** Announced as text content or ignored (correct for non-interactive elements)
- **FilterPill:** Announced as "button, [label], [selected/not selected]" (requires interactive role)
- **Button:** Announced as "button, [label]" (requires interactive role)

Mixing these roles breaks user expectations and creates confusion for assistive technology users.

## Component Selection Flowchart

```
START: I need to display/trigger something

│
├─ Does it represent static data or a category?
│  ├─ YES → Use Tag
│  └─ NO → Continue
│
├─ Does it toggle a filter for a dataset?
│  ├─ YES → Use FilterPill
│  └─ NO → Continue
│
├─ Does it perform an action (submit, navigate, confirm)?
│  ├─ YES → Use Button
│  └─ NO → Re-examine requirements (you may need Tag)
```

## Maintenance Rules

1. **Adding variants:** Variants can change appearance, never behavior
   - Tag can have visual variants (e.g., colors for categories)
   - Tag variants must never add interactivity

2. **Refactoring:** When refactoring component usage:
   - Audit for anti-patterns
   - Replace with correct component
   - Do not preserve incorrect behavior "for consistency"

3. **Code review:** Reviewers must reject:
   - Interactive Tags
   - Non-interactive FilterPills in filter contexts
   - Buttons used as labels

## Lock Statement

**This document is considered normative. Changes to these boundaries require explicit design system approval. Components and agents must treat these distinctions as hard constraints, not suggestions.**
