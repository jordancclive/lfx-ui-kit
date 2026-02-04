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
  title: 'Page Patterns / Creation Flow Page',
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
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
