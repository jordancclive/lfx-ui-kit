import type { Meta, StoryObj } from '@storybook/html';
import { createDrawer, type DrawerProps } from './drawer';
import { createButton } from '../button/button';

/**
 * Helper: Creates sample body content
 */
function createSampleBody(): HTMLElement {
  const container = document.createElement('div');
  
  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is sample drawer content. The drawer slides in from the right and can be closed by clicking the X button, pressing ESC, or clicking the overlay backdrop.';
  paragraph.style.marginBottom = 'var(--spacing-16)';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Drawers are used for lightweight inspection and actions that preserve page context. They should not contain complex workflows or force navigation.';
  paragraph2.style.marginBottom = '0';
  
  container.appendChild(paragraph);
  container.appendChild(paragraph2);
  
  return container;
}

/**
 * Helper: Creates long content for scroll testing
 */
function createLongBody(): HTMLElement {
  const container = document.createElement('div');
  
  for (let i = 1; i <= 20; i++) {
    const section = document.createElement('div');
    section.style.marginBottom = 'var(--spacing-16)';
    
    const heading = document.createElement('h3');
    heading.textContent = `Section ${i}`;
    heading.style.fontSize = 'var(--ui-text-section-title-font-size)';
    heading.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
    heading.style.marginBottom = 'var(--spacing-8)';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = `This is content for section ${i}. The drawer body should scroll independently while the background page remains locked. This validates scroll containment behavior.`;
    paragraph.style.margin = '0';
    
    section.appendChild(heading);
    section.appendChild(paragraph);
    container.appendChild(section);
  }
  
  return container;
}

/**
 * Helper: Creates sample footer with actions
 */
function createSampleFooter(): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-8)';
  
  const cancelButton = createButton({
    label: 'Cancel',
    variant: 'secondary',
  });
  
  const confirmButton = createButton({
    label: 'Confirm',
    variant: 'primary',
  });
  
  container.appendChild(cancelButton);
  container.appendChild(confirmButton);
  
  return container;
}

const meta: Meta<DrawerProps> = {
  title: '1. Components / 2. Molecules / Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Drawer — Canonical Interaction Surface

**Level 2 — Molecule**

Right-side slide-in surface for lightweight inspection and actions.

## Purpose

Drawer preserves page context while providing supplemental detail or quick actions.
It avoids forced navigation and modal interruption.

## When to Use

Use Drawer when:
- **Inspecting details** — Chart drill-down, metric explanation, row details
- **Quick actions** — "View All" expansions, action summaries
- **Supplemental context** — Additional information without leaving the page
- **Lightweight workflows** — Simple forms or confirmations

## When NOT to Use

Do NOT use Drawer for:
- **Complex workflows** — Use a dedicated Page instead
- **Forced decisions** — Use Modal for critical interruptions
- **Multiple steps** — Use Page with proper navigation
- **Nested content** — Drawers do NOT support nesting
- **Primary navigation** — Use Page routing

## Drawer vs Modal vs Page

**Drawer:**
- Preserves page context (slides from side)
- For inspection and lightweight actions
- Background remains visible but locked
- Non-blocking (ESC and overlay close)

**Modal:**
- Blocks page context (centered overlay)
- For critical decisions requiring attention
- Background dimmed and inaccessible
- Blocking (must interact to dismiss)

**Page:**
- Full page navigation
- For complex workflows and primary content
- URL changes, back button works
- Full context switch

**See:** \`docs/interaction-surfaces.md\` for complete decision tree

## Insights Escalation

Drawers in LFX One often contain charts with CTAs to escalate to LFX Insights.
Charts in drawers remain **signal-only** and MUST NOT include filtering, drilldown, or analytics UI.

**See:** \`docs/insights-escalation-contract.md\`

## Interaction Rules (Normative)

**Opening:**
- Drawer slides in from RIGHT
- Background scroll locks immediately
- Focus moves to drawer

**Closing:**
- ESC key closes drawer
- Overlay click closes drawer
- Close button (X) closes drawer
- Background scroll unlocks on close

**Scrolling:**
- Drawer body scrolls independently
- Background page does NOT scroll while open
- Scroll is contained (no body overflow)

**Focus:**
- Drawer receives focus on mount
- Keyboard navigation works inside drawer
- Focus returns to trigger element on close (browser default)

## Accessibility

- \`role="dialog"\` and \`aria-modal="true"\`
- ESC key support (always)
- Focus trap (basic)
- Close button has \`aria-label\`
- Title used for \`aria-label\` when provided

## Component API

### Props

- **\`body\`** (HTMLElement) — REQUIRED
  - Main content area
  - Scrollable if content overflows

- **\`title?\`** (string) — Optional
  - Drawer header title
  - Omit for minimal headers

- **\`footer?\`** (HTMLElement) — Optional
  - Footer content (typically action buttons)
  - Fixed at bottom with top border

- **\`onClose?\`** (() => void) — Optional
  - Callback when drawer closes
  - Called for all close methods (ESC, overlay, button)

### Explicit Non-Goals

- ❌ No size variants (fixed width)
- ❌ No position variants (right-side only)
- ❌ No nested drawers
- ❌ No routing logic
- ❌ No data fetching
- ❌ No analytics hooks
- ❌ No animation customization

## Token Bindings

Uses existing surface and card tokens:
- \`--ui-surface-container\` — Drawer background
- \`--ui-surface-divider\` — Borders
- \`--ui-surface-hover\` — Close button hover
- \`--ui-card-elevation-default\` — Shadow
- \`--ui-transition-duration-default\` — Transitions
- Spacing tokens for padding and gaps

## Usage Example

\`\`\`typescript
import { createDrawer } from './drawer';
import { createButton } from '../button/button';

// Create body content
const body = document.createElement('div');
body.textContent = 'Drawer content here';

// Create footer with actions
const footer = document.createElement('div');
footer.appendChild(createButton({ label: 'Close', variant: 'secondary' }));

// Create and mount drawer
const drawer = createDrawer({
  title: 'Details',
  body,
  footer,
  onClose: () => console.log('Drawer closed'),
});

document.body.appendChild(drawer);
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default drawer with title and body content.
 * 
 * Demonstrates standard drawer with header title and simple body content.
 * Click the "Open Drawer" button to see the drawer in action.
 */
export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    
    const button = createButton({
      label: 'Open Drawer',
      variant: 'primary',
      onClick: () => {
        const drawer = createDrawer({
          title: 'Drawer Title',
          body: createSampleBody(),
          onClose: () => console.log('Drawer closed'),
        });
        document.body.appendChild(drawer);
      },
    });
    
    container.appendChild(button);
    return container;
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Drawer with footer actions.
 * 
 * Demonstrates drawer with footer containing action buttons.
 * Footer is fixed at bottom with top border.
 */
export const WithFooter: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    
    const button = createButton({
      label: 'Open Drawer with Footer',
      variant: 'primary',
      onClick: () => {
        const drawer = createDrawer({
          title: 'Confirm Action',
          body: createSampleBody(),
          footer: createSampleFooter(),
          onClose: () => console.log('Drawer closed'),
        });
        document.body.appendChild(drawer);
      },
    });
    
    container.appendChild(button);
    return container;
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Drawer with long scrolling content.
 * 
 * Validates scroll containment behavior:
 * - Drawer body scrolls independently
 * - Background page scroll is locked
 * - Scroll is contained within drawer
 */
export const LongContent: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    
    const button = createButton({
      label: 'Open Drawer with Long Content',
      variant: 'primary',
      onClick: () => {
        const drawer = createDrawer({
          title: 'Scrollable Content',
          body: createLongBody(),
          onClose: () => console.log('Drawer closed'),
        });
        document.body.appendChild(drawer);
      },
    });
    
    container.appendChild(button);
    return container;
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Drawer without title.
 * 
 * Demonstrates minimal drawer with no header title.
 * Close button remains visible in header.
 */
export const NoTitle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    
    const button = createButton({
      label: 'Open Drawer without Title',
      variant: 'primary',
      onClick: () => {
        const drawer = createDrawer({
          body: createSampleBody(),
          onClose: () => console.log('Drawer closed'),
        });
        document.body.appendChild(drawer);
      },
    });
    
    container.appendChild(button);
    return container;
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Interactive demo showing all interaction methods.
 * 
 * Demonstrates:
 * - ESC key closes drawer
 * - Overlay click closes drawer
 * - Close button closes drawer
 * - onClose callback fires for all methods
 */
export const InteractionDemo: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    
    // Instructions
    const instructions = document.createElement('div');
    instructions.style.marginBottom = 'var(--spacing-16)';
    instructions.innerHTML = `
      <h3 style="margin: 0 0 var(--spacing-8) 0; font-size: 18px;">Interaction Demo</h3>
      <p style="margin: 0 0 var(--spacing-8) 0;">Open the drawer and try these interactions:</p>
      <ul style="margin: 0; padding-left: var(--spacing-20);">
        <li>Press <kbd>ESC</kbd> to close</li>
        <li>Click the overlay backdrop to close</li>
        <li>Click the X button to close</li>
        <li>Check console for onClose callback</li>
      </ul>
    `;
    
    const button = createButton({
      label: 'Open Interactive Drawer',
      variant: 'primary',
      onClick: () => {
        const bodyContent = document.createElement('div');
        bodyContent.innerHTML = `
          <p style="margin: 0 0 var(--spacing-16) 0;">
            <strong>Try closing this drawer using any of these methods:</strong>
          </p>
          <ol style="margin: 0; padding-left: var(--spacing-20);">
            <li style="margin-bottom: var(--spacing-8);">Press ESC key</li>
            <li style="margin-bottom: var(--spacing-8);">Click the overlay backdrop (outside this drawer)</li>
            <li style="margin-bottom: var(--spacing-8);">Click the X button in the header</li>
          </ol>
          <p style="margin: var(--spacing-16) 0 0; color: var(--text-secondary); font-size: 14px;">
            All methods trigger the onClose callback (check console).
          </p>
        `;
        
        const drawer = createDrawer({
          title: 'Interaction Test',
          body: bodyContent,
          onClose: () => {
            console.log('✅ Drawer closed via onClose callback');
          },
        });
        document.body.appendChild(drawer);
      },
    });
    
    container.appendChild(instructions);
    container.appendChild(button);
    return container;
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
