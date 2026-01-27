# LFX One Design System Architecture

**Single Source of Truth for Architectural Intent**

This document defines how the LFX One UI Kit is structured, eliminating ambiguity for humans and agents.

---

## Purpose

This architecture document exists to:
- Define the structural layers of the design system
- Establish clear boundaries between reusable and non-reusable code
- Eliminate ambiguity about what can be copied vs what cannot
- Provide explicit rules for humans and AI agents
- Lock the architectural model permanently

**This document is the authoritative source for design system organization.**

---

## The Four Layers

The LFX One UI Kit is organized into four distinct layers, each with specific responsibilities:

```
Tokens
↓
Components
↓
Page Patterns (reusable)
↓
Page Examples (product-specific)
```

### 1. Tokens

**Purpose:** Encode design decisions, not components.

**Organization:**
- **Primitive tokens** — Raw values (colors, spacing, typography scales)
- **Semantic tokens** — Meaning-based aliases (e.g., `--text-primary`, `--success-700`)
- **UI Role tokens** — Component-scoped surface/typography (e.g., `--ui-surface-page`, `--ui-text-body-primary`)

**Rules:**
- No raw values in components
- Components bind to UI Role or Semantic tokens only
- Tokens are the source of truth for all visual decisions

**Location:** `src/styles/tokens.css`

**Documentation:** `docs/token-contracts/` (if exists)

---

### 2. Components

**Purpose:** Reusable building blocks that own behavior and visuals.

**Characteristics:**
- Self-contained
- Governed by component contracts
- Bind to tokens only (no raw values)
- Can be used anywhere

**Examples:**
- `Button`
- `Table`
- `TableRow`
- `TableCell`
- `Card`
- `Tag`
- `SearchInput`

**Location:** `src/components/`

**Documentation:** `docs/component-contracts/`

**Storybook:** `Components/*`

**Rules:**
- Components must not contain page-specific logic
- Components must not know about page patterns
- Components must be reusable across all contexts

---

### 3. Page Patterns (Normative, Reusable)

**Purpose:** Reusable page-level structural blueprints.

**Definition:**
Page Patterns define WHAT appears on a page and WHERE it appears, but NOT how users interact with individual elements (that is owned by component contracts).

**Characteristics:**
- **Reusable** — Agents and humans may copy these patterns
- **Normative** — Locked by documentation in `docs/page-patterns/`
- **Structural** — Define composition, not interaction details
- **Named by structure** — Not by product (e.g., "Table Page", not "Votes Page")

**Examples:**
- **Table Page** — Single-table page pattern
- **Segmented Table Page** — Multiple-table page pattern with section titles

**Location:** `src/stories/compositions/page-patterns/`

**Documentation:** `docs/page-patterns/`

**Storybook:** `Page Patterns/*`

**What Patterns Define:**
- Page structure (AppShell → PageLayout → sections)
- Component placement (where filters, tables, headers go)
- Required vs optional elements
- Structural rules (e.g., "one table per page")

**What Patterns Do NOT Define:**
- Row-level interaction (owned by TableRow contract)
- Column semantics (owned by Table contract)
- Typography values (owned by tokens)
- Hover affordances (owned by component contracts)

**Agent Rule:**
✅ Agents MAY copy Page Patterns when creating new pages.

---

### 4. Page Examples (Non-Reusable, Product-Specific)

**Purpose:** Concrete product pages that demonstrate pattern usage.

**Definition:**
Page Examples are real product pages (Votes, Groups, etc.) that IMPLEMENT a page pattern using product-specific data and logic.

**Characteristics:**
- **Non-reusable** — Agents must NOT copy these as structure
- **Product-specific** — Contain real data, filters, actions
- **Demonstrations** — Show how to use a pattern, not how to define one
- **Named by product** — Not by structure (e.g., "Votes", not "Votes Table Page")

**Examples:**
- **Votes** — Implements Table Page pattern
- **Groups** — Demonstrates Segmented Table Page pattern (shown in pattern file)

**Location:** `src/stories/compositions/page-examples/`

**Storybook:** `Page Examples/*`

**What Examples Contain:**
- Product-specific page title, description, actions
- Real data structures (vote rows, group rows)
- Product-specific filters (e.g., "All Groups", "All Statuses")
- Concrete column definitions

**Agent Rule:**
❌ Agents must NOT treat Page Examples as reusable structure.

**Important Distinction:**
- **Pattern:** "Use this structure for single-table pages"
- **Example:** "This is what the Votes product page looks like"

---

## Naming Rules (Hard Constraints)

### Patterns Are Named by Structure, Not Product

✅ Correct:
- "Table Page"
- "Segmented Table Page"

❌ Incorrect:
- "Votes Page Pattern"
- "Groups Pattern"

### Examples Are Named by Product, Not Structure

✅ Correct:
- "Votes"
- "Groups"

❌ Incorrect:
- "Votes Table Page Pattern"
- "Example Table Page"

### Storybook "Composition" Is Presentation Only

The term "composition" is a Storybook organizational concept. It does NOT indicate whether something is a pattern or an example.

**Location determines meaning:**
- `page-patterns/` = Reusable pattern
- `page-examples/` = Non-reusable example

---

## Agent Rules (Critical for AI Systems)

### Agents MUST:

1. **Reuse Page Patterns only**
   - Copy pattern structure when creating new pages
   - Follow pattern documentation in `docs/page-patterns/`

2. **Treat Page Examples as read-only demonstrations**
   - Use examples to understand pattern usage
   - Do NOT copy example structure directly

3. **Look to component contracts for interaction rules**
   - Row-level navigation → `docs/component-contracts/table-row.md`
   - Column semantics → `docs/component-contracts/table.md`
   - Typography → `docs/component-contracts/table-cell.md`

4. **Look to tokens for visual decisions**
   - Spacing → `src/styles/tokens.css`
   - Colors → `src/styles/tokens.css`
   - Typography → `src/styles/tokens.css`

### Agents MUST NOT:

1. **Infer patterns from examples**
   - Examples show usage, not structure
   - Always reference the pattern, not the example

2. **Modify structure inside examples**
   - Examples are product-specific
   - Changes belong in patterns or components

3. **Introduce visual hacks at story level**
   - Fix in components or tokens
   - Story files must remain composition-only

4. **Guess reuse intent from naming**
   - Location determines reusability
   - `page-patterns/` = reusable
   - `page-examples/` = non-reusable

---

## Documentation Hierarchy

```
docs/
├─ DESIGN_SYSTEM_ARCHITECTURE.md  ← This file (architectural intent)
├─ component-contracts/            ← Component behavior and responsibilities
├─ page-patterns/                  ← Normative pattern rules
├─ pattern-boundaries/             ← Component semantic boundaries
└─ token-contracts/                ← Token organization (if exists)
```

**No duplication:** Each rule lives in one place only.

---

## Examples Explained

### Example 1: Creating a New Votes-Like Page

**❌ WRONG:**
1. Copy `page-examples/votes-page/`
2. Change data to your page

**✅ CORRECT:**
1. Reference `page-patterns/table-page/`
2. Copy pattern structure
3. Replace with your data
4. Follow `docs/page-patterns/table-page.md`

### Example 2: Creating a New Multi-Table Page

**❌ WRONG:**
1. Look at Groups page example
2. Copy structure

**✅ CORRECT:**
1. Reference `page-patterns/segmented-table-page/`
2. Copy pattern structure (which uses Groups as example data)
3. Replace with your data
4. Follow `docs/page-patterns/segmented-table-page.md`

### Example 3: Modifying Row Interaction

**❌ WRONG:**
1. Look at Votes page
2. Copy row click logic

**✅ CORRECT:**
1. Read `docs/component-contracts/table-row.md`
2. Use TableRow `clickable` prop
3. Follow row interaction rules

---

## Storybook Organization

### Sidebar Structure

```
Components/
├─ Button
├─ Card
├─ Table
├─ TableRow
├─ TableCell
├─ Tag
└─ ...

Page Patterns/
├─ Table Page
└─ Segmented Table Page

Page Examples/
├─ Votes
└─ Groups (README, no duplicate story)
```

### Why This Organization?

1. **Clear separation** — Patterns vs Examples are visually distinct
2. **No ambiguity** — Location determines reusability
3. **Agent-safe** — AI systems can navigate by folder structure
4. **Human-friendly** — Developers understand boundaries immediately

---

## Groups Page Special Case

**Q: Why is there no separate Groups story file?**

**A:** Groups is the canonical demonstration of the Segmented Table Page pattern.

**Pattern:** `page-patterns/segmented-table-page/` (uses Groups as example data)  
**Example:** `page-examples/groups-page/README.md` (explains relationship)

This prevents duplication and makes clear that Groups is an instance of a reusable pattern, not a unique page structure.

**For agents:** Reference the Segmented Table Page pattern, not the Groups page.

---

## Lock Statement

**This document is normative.**

Changes to this architecture require explicit design system approval.

Humans and agents must treat these boundaries as hard constraints.

Any violation of these rules (e.g., copying examples as patterns, introducing visual hacks at story level) is considered a design system bug and must be corrected.

---

## Questions?

If the boundary between patterns and examples is unclear:

1. **Is it reusable across multiple products?** → Pattern
2. **Is it specific to one product?** → Example
3. **Does it define structure?** → Pattern
4. **Does it show usage?** → Example

**When in doubt, ask a human. Do not guess.**

---

**Last Updated:** January 2026  
**Status:** Locked  
**Applies To:** All LFX One UI Kit code and documentation
