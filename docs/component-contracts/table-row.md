# TableRow

**Component Tier:** Tier 2 — Interactive Single Component

## Purpose

Represents a selectable, hoverable row used in tables and lists.

TableRow provides a hover affordance for scannability and interactivity.

## Non-Goals

- Does not render cell content
- Does not own cell typography
- Does not manage table layout
- Does not define or constrain column structure

## Interaction Model

- **Interactive:** Yes
- **Selectable:** Yes
- **Controlled by parent:** Yes

## Supported States

- `default`
- `hover`
- `selected`
- `disabled`

## State Precedence

1. `disabled`
2. `selected`
3. `hover`
4. `default`

## State Behavior

- Hover is supported for interactive rows
- Hover is suppressed for disabled rows
- Hover does not override selected state

## Token Ownership

### Allowed

- `color.table.row.background.*`
- `color.table.row.border`
- `spacing.*`
- `button-stroke`

### Forbidden

- `color.table.cell.*`
- `color.text.*` (cells handle text)
- Any content-specific tokens

## Responsibilities

- Apply background per state
- Apply row divider/border
- Handle cursor + click affordance

## Not Responsible For

- Cell hover behavior
- Text color changes
- Sorting logic

---

## Row Interaction Semantics

**Row is the primary interactive unit, not individual cells.**

### Normative Rules

- Rows MAY be clickable when explicitly enabled via props (e.g. `clickable: true`)
- Row clickability MUST be explicit — no inferred interaction
- Hover affordance MAY appear only when the row is clickable
- Disabled rows MUST NOT respond to hover or click
- Row click behavior MUST NOT be implemented at the column or cell level

### Explicit Prohibitions

- ❌ Columns MUST NOT own navigation or click behavior
- ❌ Cells MUST NOT register click handlers for navigation
- ❌ Visual link styling inside cells does not imply click ownership

### Clarification

Primary column text MAY be styled to look like a link when the row is clickable, but **navigation is still owned by the row**.

This means:
- The row handles the click event
- The row determines navigation behavior
- Cell styling is visual only, not functional

---

## Hover & Click Affordance

**Visual affordance for clickable rows must be clear but subtle.**

### Normative Rules

- Hover affordance exists ONLY when `clickable: true`
- Hover MUST provide a clear but subtle signal of interactivity
- Hover MUST aid scanning, not compete with content
- Non-clickable rows MUST NOT display hover affordance
- Disabled rows MUST NOT display hover or click affordance

### Visual Characteristics

- Background surface change on hover (via tokens)
- Cursor change to pointer
- Optional: Subtle left-edge accent indicator
- Smooth transition (150ms)

### Lock Note

> Visual affordance strength may be tuned via tokens, but the **presence
> of hover is strictly tied to explicit clickability** (`clickable: true`).
> Hover must never be inferred or applied to non-clickable rows.

---

## Row Cohesion & Interaction Affordance

**Row is visually bound as a single interactive unit on hover.**

TableRow owns horizontal row cohesion and interaction affordance across wide column gaps.

### Core Principle

When a user hovers over a clickable row, they must **instantly and confidently** know:
1. This row is interactive (not just one cell)
2. The entire row spans horizontally as one unit
3. Clicking anywhere in the row will trigger navigation

### Cohesion Strategy (Clickable Rows Only)

**On hover, clickable rows apply multiple reinforcing cues:**

1. **Full-width background change**
   - Spans entire row width
   - Provides horizontal visual binding across column gaps
   - Helps eye track row during scanning

2. **Left-edge accent indicator**
   - 4px solid border in accent color (azure)
   - Immediate visual signal of interactivity
   - Aids vertical scanning (which rows are interactive)

3. **Strengthened primary cell text**
   - Slightly darker and medium weight on hover
   - Reinforces that entire row is actionable
   - Visual only — click handling remains at row level

4. **Cursor change**
   - Pointer cursor across entire row width
   - Standard interaction affordance

### Non-Clickable Rows

**Non-clickable rows MUST remain visually calm:**
- ❌ No hover background
- ❌ No cursor change
- ❌ No text strengthening
- ❌ No left-edge indicator
- ✅ Inert and distinguishable from clickable rows

### Disabled Rows

**Disabled rows MUST NOT respond visually:**
- ❌ No hover affordance
- ❌ No cursor change  
- ❌ No interactive signals
- ✅ Reduced emphasis (via disabled background)

### Hover Strength

Hover strength is **intentionally strong** for scanability:
- Users must not "hunt" for interactive rows
- Affordance must register within ~100ms of hover
- Wide tables require clear horizontal row binding
- Calm but unmistakable

### Lock Statement

> **Row-level affordance and cohesion are owned by TableRow and must not be
> reimplemented in TableCell, Table, or page compositions.**
>
> Interaction affordance is a row-level concern. Individual cells must not
> introduce competing hover states, click handlers, or navigation logic.
>
> This ensures consistent, predictable interaction patterns across all
> table-driven pages in LFX One.

---

## Storybook Coverage

- Default
- Hover
- Selected
- Disabled
- Clickable vs non-clickable

## Lock Statement

This contract is considered stable. Row-level interaction semantics must not be altered without explicit design system approval. Visual changes must be achieved through tokens, not by expanding component responsibilities.
