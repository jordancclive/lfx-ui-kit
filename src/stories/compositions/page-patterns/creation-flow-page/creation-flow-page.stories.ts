/**
 * PAGE PATTERN — NORMATIVE
 * 
 * This file defines a reusable page-level pattern.
 * It is a structural blueprint, not a product page.
 * 
 * Agents may copy this pattern when creating new pages.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * CREATION FLOW PAGE PATTERN
 * 
 * The canonical progressive disclosure creation flow pattern for LFX One.
 * 
 * Used by:
 * - Create Vote
 * - Create Survey
 * - Create Group
 * - Add Mailing List
 * - Schedule Meeting (canonical reference implementation)
 * 
 * NOT used by:
 * - Quick actions (use modals or inline forms)
 * - Simple single-field additions
 * - Bulk operations
 * 
 * Key characteristics:
 * - Progressive disclosure (stacked steps)
 * - Each step remains visible after completion
 * - Linear, enforced step order
 * - Final review step before submission
 * - Clear "Create" / "Schedule" primary action
 * - Single-page flow (NOT multi-page wizard)
 * 
 * CANONICAL STRUCTURE:
 * 
 * AppShell
 * └─ PageLayout
 *    ├─ AppHeader
 *    │  ├─ title: "Create [Entity]" or "Schedule [Entity]"
 *    │  └─ description (optional)
 *    └─ PageSection
 *       ├─ Step 1: Core Details (always visible)
 *       │  └─ Card (form fields)
 *       ├─ Step 2: Configuration (revealed after Step 1 complete)
 *       │  └─ Card (form fields)
 *       ├─ Step 3: Participants / Permissions (revealed after Step 2 complete)
 *       │  └─ Card (form fields)
 *       ├─ Step 4: Review & Confirm (revealed after Step 3 complete)
 *       │  └─ Card (summary of all inputs)
 *       └─ Primary Action Bar
 *          └─ Button: "Create [Entity]" or "Schedule [Entity]"
 * 
 * INTERACTION MODEL:
 * - Steps are revealed sequentially as prior steps complete
 * - Completed steps remain visible (collapsed or expanded)
 * - Users can edit prior steps without losing downstream context
 * - "Complete" state is indicated per-step (validation + visual confirmation)
 * - Final action is singular and irreversible
 * 
 * VISUAL GOALS:
 * - Flow reads top-to-bottom as a single page
 * - Progress is always visible
 * - Context is preserved (no hidden information)
 * - Clear state: incomplete → in-progress → complete
 * - Single focal point per step
 * 
 * ARCHITECTURAL LAYERING:
 * - Card component: Contains each step's form fields
 * - PageSection: Contains all steps + action bar
 * - Creation Flow pattern: Defines step sequence, validation order, and action placement
 * - Form components: (Future) Input fields, validation, state management
 * 
 * If something feels off visually:
 * - Identify which component owns the issue
 * - Fix in components or tokens
 * - Do NOT patch in this pattern
 */

import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell } from '../../../../components/app-shell/app-shell';
import { createPageLayout } from '../../../../components/page-layout/page-layout';
import { createAppHeader } from '../../../../components/app-header/app-header';
import { createPageSection } from '../../../../components/page-section/page-section';
import { createCard } from '../../../../components/card/card';
import { createButton } from '../../../../components/button/button';
import { createGlobalNav, createNavSection, createNavItem } from '../../../../components/global-nav/global-nav';

// =============================================================================
// HELPERS: Placeholder content for demonstration
// =============================================================================

function createTextNode(text: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

/**
 * Creates a placeholder step card.
 * 
 * This is a DOCUMENTATION PLACEHOLDER only.
 * Real implementations will use form components when available.
 */
function createStepCard(config: {
  stepNumber: number;
  title: string;
  description?: string;
  state: 'incomplete' | 'in-progress' | 'complete';
}): HTMLElement {
  const { stepNumber, title, description, state } = config;
  
  const content = document.createElement('div');
  content.style.padding = 'var(--spacing-16)';
  
  const header = document.createElement('div');
  header.style.marginBottom = 'var(--spacing-12)';
  
  const stepLabel = document.createElement('div');
  stepLabel.textContent = `Step ${stepNumber}`;
  stepLabel.style.fontSize = '12px';
  stepLabel.style.fontWeight = '600';
  stepLabel.style.textTransform = 'uppercase';
  stepLabel.style.color = 'var(--text-muted)';
  stepLabel.style.marginBottom = 'var(--spacing-4)';
  
  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.style.fontSize = '18px';
  titleEl.style.fontWeight = '600';
  titleEl.style.margin = '0';
  titleEl.style.marginBottom = description ? 'var(--spacing-4)' : '0';
  
  header.appendChild(stepLabel);
  header.appendChild(titleEl);
  
  if (description) {
    const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.style.fontSize = '14px';
    descEl.style.color = 'var(--text-secondary)';
    descEl.style.margin = '0';
    header.appendChild(descEl);
  }
  
  content.appendChild(header);
  
  // State indicator
  const stateIndicator = document.createElement('div');
  stateIndicator.style.padding = 'var(--spacing-8)';
  stateIndicator.style.borderRadius = 'var(--border-radius-4)';
  stateIndicator.style.fontSize = '13px';
  stateIndicator.style.fontStyle = 'italic';
  
  switch (state) {
    case 'incomplete':
      stateIndicator.textContent = '[Form fields would appear here]';
      stateIndicator.style.backgroundColor = 'var(--surface-secondary)';
      stateIndicator.style.color = 'var(--text-muted)';
      break;
    case 'in-progress':
      stateIndicator.textContent = '[User is filling out this step]';
      stateIndicator.style.backgroundColor = 'var(--surface-info)';
      stateIndicator.style.color = 'var(--text-primary)';
      break;
    case 'complete':
      stateIndicator.textContent = '✓ Step complete';
      stateIndicator.style.backgroundColor = 'var(--surface-success)';
      stateIndicator.style.color = 'var(--text-primary)';
      break;
  }
  
  content.appendChild(stateIndicator);
  
  return createCard({ children: [content] });
}

/**
 * Creates the primary action bar at the bottom of the flow.
 */
function createActionBar(config: {
  label: string;
  enabled: boolean;
}): HTMLElement {
  const { label, enabled } = config;
  
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.justifyContent = 'flex-end';
  container.style.gap = 'var(--spacing-8)';
  container.style.paddingTop = 'var(--spacing-16)';
  
  const cancelButton = createButton({
    label: 'Cancel',
    variant: 'secondary',
  });
  
  const primaryButton = createButton({
    label,
    variant: 'primary',
    disabled: !enabled,
  });
  
  container.appendChild(cancelButton);
  container.appendChild(primaryButton);
  
  return container;
}

function createDemoNav(activeItemId?: string) {
  return createGlobalNav({
    activeItemId,
    children: [
      createNavSection([
        createNavItem({ id: 'dashboard', children: createTextNode('Dashboard') }),
        createNavItem({ id: 'meetings', children: createTextNode('Meetings') }),
        createNavItem({ id: 'votes', children: createTextNode('Votes') }),
        createNavItem({ id: 'surveys', children: createTextNode('Surveys') }),
        createNavItem({ id: 'groups', children: createTextNode('Groups') }),
        createNavItem({ id: 'settings', children: createTextNode('Settings') }),
      ]),
    ],
  });
}

// =============================================================================
// STORY-ONLY PAGE WIDTH WRAPPER
// This exists to make composition stories readable in Storybook.
// Mirrors real LFX One laptop viewport usage (~1280px constraint).
// This is NOT part of the production UI — it's a presentation aid only.
// =============================================================================

function wrapForStorybook(content: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '1280px';
  wrapper.style.margin = '0 auto';
  wrapper.appendChild(content);
  return wrapper;
}

// =============================================================================
// MAIN COMPOSITION FUNCTION
// =============================================================================

interface CreationFlowPageArgs {
  flowState: 'initial' | 'step-2-revealed' | 'step-3-revealed' | 'ready-to-submit';
}

/**
 * Creates a canonical Creation Flow Page composition.
 * 
 * This is a DOCUMENTATION PLACEHOLDER only.
 * Real implementations will use actual form components.
 * 
 * Structure:
 * - AppHeader with "Create [Entity]" or "Schedule [Entity]" title
 * - Progressive disclosure: steps reveal sequentially
 * - Each step remains visible after completion
 * - Final action bar at bottom
 * 
 * Visual goals:
 * - Single-page flow (not multi-page wizard)
 * - Clear progress indication
 * - Preserved context (no hidden steps)
 * - Obvious next action
 */
function createCreationFlowPage(args: CreationFlowPageArgs): HTMLElement {
  const { flowState } = args;
  
  const steps: HTMLElement[] = [];
  
  // Step 1: Always visible
  steps.push(createStepCard({
    stepNumber: 1,
    title: 'Meeting Details',
    description: 'Provide basic information about the meeting',
    state: flowState === 'initial' ? 'in-progress' : 'complete',
  }));
  
  // Step 2: Revealed after Step 1 complete
  if (flowState !== 'initial') {
    steps.push(createStepCard({
      stepNumber: 2,
      title: 'Date & Time',
      description: 'Schedule when the meeting will occur',
      state: flowState === 'step-2-revealed' ? 'in-progress' : 'complete',
    }));
  }
  
  // Step 3: Revealed after Step 2 complete
  if (flowState === 'step-3-revealed' || flowState === 'ready-to-submit') {
    steps.push(createStepCard({
      stepNumber: 3,
      title: 'Participants',
      description: 'Add attendees and set permissions',
      state: flowState === 'step-3-revealed' ? 'in-progress' : 'complete',
    }));
  }
  
  // Step 4: Review (revealed after Step 3 complete)
  if (flowState === 'ready-to-submit') {
    steps.push(createStepCard({
      stepNumber: 4,
      title: 'Review & Confirm',
      description: 'Verify all details before scheduling',
      state: 'in-progress',
    }));
  }
  
  // Action bar
  const actionBar = createActionBar({
    label: 'Schedule Meeting',
    enabled: flowState === 'ready-to-submit',
  });
  
  const pageContent = createPageLayout({
    children: [
      createAppHeader({
        title: 'Schedule Meeting',
        description: 'Create a new meeting and invite participants.',
      }),
      createPageSection({
        children: [...steps, actionBar],
      }),
    ],
  });
  
  const nav = createDemoNav('meetings');
  
  const appShell = createAppShell({
    nav,
    content: pageContent,
  });
  
  return wrapForStorybook(appShell);
}

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<CreationFlowPageArgs> = {
  title: '2. Page Patterns / 4. Creation Flow Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Creation Flow Page Pattern

**This is the canonical progressive disclosure creation flow pattern for LFX One.**

This pattern defines the standard workflow for creating or scheduling entities
in LFX One (Votes, Surveys, Groups, Mailing Lists, Meetings, etc).

This is a PATTERN, not an implementation.
This is DOCUMENTATION, not a component.

---

## Purpose

The Creation Flow Page pattern exists to provide a **consistent, predictable
creation experience** across all LFX One entity types.

It defines:
- How steps are sequenced and revealed
- Where form fields and validation appear
- How progress is communicated
- Where actions are placed

---

## When to Use

Use Creation Flow Page when:

- **Creating a new entity** that requires multiple pieces of information
- **The entity has natural logical steps** (e.g., Details → Configuration → Participants)
- **Validation is required** before proceeding to the next step
- **The creation action is irreversible** (e.g., scheduling a meeting, publishing a vote)
- **Users benefit from seeing their progress** through the workflow

Typical examples:
- Create Vote
- Create Survey
- Schedule Meeting (canonical example)
- Create Group
- Add Mailing List

---

## When NOT to Use

Do NOT use Creation Flow Page for:

- **Simple single-field additions** (use inline forms or quick-add buttons)
- **Quick actions** that don't require multiple steps (use modals)
- **Bulk operations** (use specialized bulk editing interfaces)
- **Editing existing entities** (use edit forms or detail pages)
- **Workflows with branching logic** (Creation Flow is linear only)

---

## Default Interaction Model: Progressive Disclosure

The Creation Flow Page uses **progressive disclosure** as its core interaction model.

### What is Progressive Disclosure?

Progressive disclosure means:
- Steps appear **sequentially** as prior steps are completed
- Completed steps remain **visible** (not hidden or collapsed)
- Users can **edit prior steps** without losing downstream work
- The next step is **revealed below** the current step
- The flow is **linear** (no skipping, no branching)

### Why Progressive Disclosure?

Progressive disclosure provides:
- ✅ **Clear focus:** One step at a time
- ✅ **Visible progress:** Users can see how far they've come
- ✅ **Preserved context:** Completed steps remain visible for reference
- ✅ **Easy correction:** Users can go back and edit without starting over
- ✅ **Predictable flow:** Always top-to-bottom, never hidden

### NOT: Multi-Page Wizards

Creation Flow is **NOT** a multi-page wizard.

Multi-page wizards:
- ❌ Hide prior steps
- ❌ Require navigation between pages
- ❌ Lose context between steps
- ❌ Make correction difficult

Creation Flow:
- ✅ Shows all completed steps
- ✅ Single-page experience
- ✅ Preserved context
- ✅ Easy editing

---

## Canonical Structure

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   │  ├─ title: "Create [Entity]" or "Schedule [Entity]"
   │  └─ description (optional)
   └─ PageSection
      ├─ Step 1: Core Details (always visible)
      │  └─ Card (form fields)
      ├─ Step 2: Configuration (revealed after Step 1 complete)
      │  └─ Card (form fields)
      ├─ Step 3: Participants / Permissions (revealed after Step 2 complete)
      │  └─ Card (form fields)
      ├─ Step 4: Review & Confirm (revealed after Step 3 complete)
      │  └─ Card (summary of all inputs)
      └─ Primary Action Bar
         └─ Button: "Create [Entity]" or "Schedule [Entity]"
\`\`\`

---

## Required Elements

Every Creation Flow Page MUST include:

### 1. AppHeader with Clear Title

- Title format: "Create [Entity]" or "Schedule [Entity]"
- Example: "Schedule Meeting", "Create Vote", "Create Survey"
- Optional description to provide context

### 2. Sequential Steps in Cards

- Each step is wrapped in a **Card** component
- Steps appear in **PageSection**
- Steps are numbered (Step 1, Step 2, etc)
- Each step has a clear title and optional description

### 3. Step State Indication

Each step must clearly show its state:
- **Incomplete:** Not yet accessible
- **In Progress:** Currently being filled out
- **Complete:** Filled out and validated

### 4. Final Review Step

- **Always include a review step** as the final step
- Shows summary of all user inputs
- Allows users to verify before submission
- No new data entry in this step

### 5. Primary Action Bar

- Positioned **below all steps** at the bottom of the flow
- Contains primary action button: "Create [Entity]" or "Schedule [Entity]"
- Contains "Cancel" button as secondary action
- Primary action is **disabled** until all steps are complete

---

## Forbidden Patterns

The following patterns are **explicitly forbidden** in Creation Flow Pages:

### ❌ Multi-Page Wizards

Do NOT split steps across multiple pages with "Next" / "Previous" navigation.

### ❌ Collapsing Completed Steps

Do NOT hide or collapse completed steps entirely.
Users must be able to see and edit prior steps.

### ❌ Skipping Steps

Do NOT allow users to skip steps.
The flow is linear and enforced.

### ❌ Branch Logic

Do NOT introduce conditional branching based on user input.
Creation Flow is linear only.

### ❌ Inline Step Editing

Do NOT allow editing a prior step inline without visual indication.
If a user edits Step 1 after completing Step 3, this must be visually clear.

### ❌ Floating Action Buttons

Do NOT place the primary action button in a floating position.
It must be at the bottom of the flow, below all steps.

---

## Relationship to Other Page Patterns

### vs Table Page

- **Table Page:** Displays and manages existing entities
- **Creation Flow Page:** Creates new entities

Use Table Page to show lists.
Use Creation Flow Page to add items to those lists.

### vs Detail Page (Future)

- **Detail Page:** Shows details of a single existing entity
- **Creation Flow Page:** Creates a new entity

Use Detail Page to view/edit existing items.
Use Creation Flow Page to create new items.

### vs Modal Forms

- **Modal Forms:** Quick, single-purpose actions
- **Creation Flow Page:** Multi-step, complex creation workflows

Use Modal Forms for simple additions.
Use Creation Flow Page for structured, multi-step workflows.

---

## Canonical Example: Schedule Meeting

The **Schedule Meeting** flow is the canonical reference implementation:

### Step 1: Meeting Details
- Meeting title (required)
- Description (optional)
- Meeting type (dropdown)

### Step 2: Date & Time
- Date picker (required)
- Start time (required)
- End time (required)
- Timezone (required)
- Recurrence options (optional)

### Step 3: Participants
- Add attendees (search/select)
- Set permissions (host, participant, viewer)
- Optional: Add groups

### Step 4: Review & Confirm
- Summary of all inputs
- Meeting details
- Date & time display
- List of participants
- Confirmation message

### Primary Action
- Button: "Schedule Meeting"
- Enabled only when all steps complete
- Irreversible action

---

## Agent Contract (Normative)

This section defines the **authoritative contract** for agents generating pages
using the **Creation Flow Page** pattern.

This is not an example.
This is not guidance.
This is a binding contract.

### Purpose

The Creation Flow Page pattern exists to produce **deterministic, production-ready,
multi-step creation workflows** using a stable hierarchy of components, progressive
disclosure, and clear action placement.

Agents must follow this contract exactly.

### Required Behavior

When instructed to create a Creation Flow Page, an agent MUST:

- Use **progressive disclosure** as the default interaction model
- Reveal steps **sequentially** as prior steps are completed
- Keep completed steps **visible** (not hidden or collapsed)
- Wrap each step in a **Card** component
- Place all steps inside a **PageSection**
- Include a **final review step** before submission
- Place the primary action button **below all steps** at the bottom
- **Disable** the primary action button until all steps are complete
- Use title format: "Create [Entity]" or "Schedule [Entity]"
- Treat the creation action as **irreversible**

### Defaults (Must Be Preserved)

Unless explicitly instructed otherwise, agents MUST assume:

- **4 steps is the default** (Details, Configuration, Participants, Review)
- Steps are **numbered** (Step 1, Step 2, etc)
- Each step has a **title** and optional **description**
- Steps appear in **vertical sequence** (top to bottom)
- Step state is **visually indicated** (incomplete, in-progress, complete)
- Primary action is **at the bottom**, not floating
- Cancel button is **secondary action**, positioned left of primary action
- No branching logic (linear flow only)

### Forbidden Actions

Agents MUST NOT:

- Create multi-page wizards with "Next" / "Previous" navigation
- Hide or collapse completed steps entirely
- Allow users to skip steps
- Add branching logic based on user input
- Float the primary action button
- Enable the primary action button before all steps are complete
- Invent new flow variants without explicit instruction
- Place actions inside individual step cards
- Create single-step flows (use simple forms instead)
- Remove the final review step

If a requirement cannot be met within this contract,
the agent MUST stop and ask for clarification.

### Ambiguity Resolution Rule

When instructions are ambiguous, agents MUST:

1. Choose the most **conservative** interpretation
2. Prefer **progressive disclosure** over multi-page wizards
3. Preserve **linear step order** (no branching)
4. Include **all standard steps** (Details, Configuration, Participants, Review)
5. Keep completed steps **visible**

### Step Naming Conventions

When naming steps, agents SHOULD use these conventions:

- **Step 1:** Core Details, Basic Information, [Entity] Details
- **Step 2:** Configuration, Settings, Options
- **Step 3:** Participants, Permissions, Access, Recipients
- **Step 4:** Review & Confirm, Review, Summary

Agents MAY adjust names for domain specificity, but MUST maintain semantic clarity.

### Validation Requirements

Agents MUST enforce:

- **Step-level validation:** Each step must be valid before revealing the next
- **Field-level validation:** Required fields must be filled
- **Cross-step validation:** (Future) Dependencies between steps must be validated
- **Final validation:** Review step must validate all inputs before enabling action

### Action Placement

The primary action button MUST be:

- Positioned **below all steps** at the bottom of the PageSection
- Labeled "Create [Entity]" or "Schedule [Entity]"
- **Disabled** until all steps are complete and validated
- The **only way** to submit the flow

### Final Rule

If an agent produces output that differs structurally from the
Creation Flow Page pattern without explicit instruction, the output is incorrect.

This contract exists to prevent drift, preserve consistency, and ensure that
agent-generated creation flows remain production-ready.

---

## Interaction Behavior

Interaction behavior in Creation Flow follows the system-wide contract defined in  
**0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.

- Entire creation flow → Page (this pattern)
- Confirmation before cancel → Modal
- Sub-actions within steps → Inline or Modal (keep simple)

---

## Future Extensibility Notes

This pattern is designed to be extended in the future with:

### Form System Integration (Future)

When the form system is implemented:
- Step Cards will contain actual form field components
- Validation will be automatic and declarative
- State management will be centralized
- Error handling will be consistent

### Step Editing Affordances (Future)

Future enhancements may include:
- Edit buttons on completed steps
- Visual indication when editing prior steps
- Automatic re-validation of downstream steps
- Warning when edits invalidate later steps

### Progress Indicators (Future)

Future enhancements may include:
- Progress bar showing % complete
- Step numbers in a vertical timeline
- Visual connection between steps

### Save Draft Functionality (Future)

Future enhancements may include:
- Auto-save draft state
- "Save Draft" button
- Resume incomplete flows
- Draft management

### What Will NOT Change

The following are **locked** and will not change:

- Progressive disclosure as the core interaction model
- Linear, non-branching flow
- Single-page experience (not multi-page wizard)
- Visible completed steps
- Final review step requirement
- Action placement at the bottom

---

## Architectural Guardrails

This pattern is part of the **LFX One page pattern system**.

### Core Principle

> **Each pattern owns exactly one structural concern.  
No pattern may re-implement layout or behavior owned by components.**

If something feels missing, it belongs in a **different layer**, not as an override.

### DO

- Use this pattern only for multi-step creation workflows
- Assume form components will exist in the future
- Rely on Card components for step containment
- Let components define spacing and layout
- Preserve the linear, progressive disclosure model

### DO NOT

- Re-implement form fields in the pattern itself
- Add custom validation logic in the pattern
- Create branching or conditional flows
- Remove required steps
- Change the action placement
- Invent new interaction models

### Ownership Boundaries (Locked)

| Layer | Owns |
|------|------|
| **Card (Level 2)** | Step containment, spacing |
| **Form Components (Future)** | Input fields, validation, state |
| **PageSection (Level 2)** | Vertical stacking of steps |
| **Creation Flow Pattern** | Step sequence, revelation order, action placement |
| **Page Examples** | Entity-specific field configuration |

> **No other ownership model is valid.**

If you find yourself wanting to violate this table, stop and redesign the layer instead of patching around it.

### Agent & Contributor Warning

If you feel tempted to:
- Add branching logic to a creation flow
- Hide completed steps
- Move the action button to a floating position
- Create a multi-page wizard

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.
        `,
      },
    },
  },
  argTypes: {
    flowState: {
      control: 'select',
      options: ['initial', 'step-2-revealed', 'step-3-revealed', 'ready-to-submit'],
      description: 'Current state of the creation flow',
    },
  },
  render: (args) => createCreationFlowPage(args),
};

export default meta;
type Story = StoryObj<CreationFlowPageArgs>;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Initial state: Only Step 1 visible.
 * 
 * Demonstrates:
 * - First step is always visible
 * - User begins filling out core details
 * - Subsequent steps are not yet revealed
 * - Primary action is disabled
 */
export const InitialState: Story = {
  args: {
    flowState: 'initial',
  },
};

/**
 * Step 2 revealed: User completed Step 1.
 * 
 * Demonstrates:
 * - Step 1 marked as complete
 * - Step 2 revealed below Step 1
 * - Progressive disclosure in action
 * - Primary action still disabled
 */
export const Step2Revealed: Story = {
  args: {
    flowState: 'step-2-revealed',
  },
};

/**
 * Step 3 revealed: User completed Steps 1 & 2.
 * 
 * Demonstrates:
 * - Steps 1 & 2 marked as complete
 * - Step 3 revealed below Step 2
 * - Context preserved (prior steps visible)
 * - Primary action still disabled
 */
export const Step3Revealed: Story = {
  args: {
    flowState: 'step-3-revealed',
  },
};

/**
 * Ready to submit: All steps complete, review step visible.
 * 
 * Demonstrates:
 * - All prior steps marked as complete
 * - Final review step visible
 * - User can verify all inputs
 * - Primary action NOW ENABLED
 * - Complete flow visible on single page
 */
export const ReadyToSubmit: Story = {
  args: {
    flowState: 'ready-to-submit',
  },
};

// =============================================================================
// VALIDATION CHECKLIST
// =============================================================================

/**
 * PATTERN VALIDATION:
 * ✓ Progressive disclosure model (steps reveal sequentially)
 * ✓ Completed steps remain visible
 * ✓ Linear flow (no branching)
 * ✓ Final review step included
 * ✓ Primary action at bottom, disabled until complete
 * ✓ Single-page experience (not multi-page wizard)
 * ✓ Clear step state indication
 * ✓ Consistent with other page patterns
 * 
 * DOCUMENTATION VALIDATED:
 * ✓ Purpose clearly stated
 * ✓ When to use / when not to use
 * ✓ Default interaction model explained
 * ✓ Required elements listed
 * ✓ Forbidden patterns explicit
 * ✓ Relationship to other patterns
 * ✓ Canonical example provided
 * ✓ Agent Contract (Normative) included
 * ✓ Future extensibility noted
 * 
 * If this pattern feels wrong, fix in the pattern definition — not in implementations.
 */
