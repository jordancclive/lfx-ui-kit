import type { Meta, StoryObj } from '@storybook/html';
import { createSummaryCard, type SummaryCardProps } from './summary-card';
import { createTag } from '../tag/tag';
import { createButton } from '../button/button';

/**
 * Helper: Creates sample body content
 */
function createSampleBody(text: string): HTMLElement {
  const div = document.createElement('div');
  div.textContent = text;
  return div;
}

/**
 * Helper: Creates meta row with date and tag
 */
function createSampleMeta(date: string, priority: 'high' | 'medium' | 'low'): HTMLElement {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = 'var(--spacing-8)';
  container.style.alignItems = 'center';
  
  const dateSpan = document.createElement('span');
  dateSpan.textContent = `Due: ${date}`;
  
  const priorityVariant = priority === 'high' ? 'danger' : priority === 'medium' ? 'warning' : 'default';
  const priorityTag = createTag({
    children: priority.toUpperCase(),
    variant: priorityVariant,
  });
  
  container.appendChild(dateSpan);
  container.appendChild(priorityTag);
  
  return container;
}

/**
 * Helper: Creates meeting meta row
 */
function createMeetingMeta(date: string, time: string, attendees: number): HTMLElement {
  const container = document.createElement('div');
  
  const dateTime = document.createElement('div');
  dateTime.textContent = `${date} • ${time}`;
  dateTime.style.marginBottom = 'var(--spacing-4)';
  
  const attendeeCount = document.createElement('div');
  attendeeCount.textContent = `${attendees} attendees`;
  
  container.appendChild(dateTime);
  container.appendChild(attendeeCount);
  
  return container;
}

const meta: Meta<SummaryCardProps> = {
  title: '1. Components / 2. Molecules / SummaryCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# SummaryCard — Dashboard Summary Primitive

**Level 2 — Molecule**

Canonical structural wrapper for dashboard summary cards.

## Purpose

SummaryCard provides consistent structure for "summary → drawer" cards in dashboards.
It eliminates hand-rolled Card + HTML patterns and makes dashboards feel production-real.

This is a **structural primitive**, not a workflow component.

## When to Use

Use SummaryCard when:
- **Dashboard summaries** — Pending actions, recent meetings, notifications
- **Drawer trigger cards** — Summary click opens detail drawer
- **Consistent card structure** — Multiple cards with identical layout patterns
- **Slot-based content** — Title + body + meta structure fits your use case

## When NOT to Use

Do NOT use SummaryCard for:
- **Metric displays** — Use ChartCard or MetricCard instead
- **Complex workflows** — Use dedicated Page with proper navigation
- **Table previews** — Use TableGrid directly
- **Charts or visualizations** — Use Chart + ChartCard
- **Forms or inputs** — Use dedicated form components

## Canonical Structure

\`\`\`
┌─────────────────────────┐
│ __header (title)        │  ← Required
├─────────────────────────┤
│ __body (content)        │  ← Optional
├─────────────────────────┤
│ __meta (footer)         │  ← Optional
└─────────────────────────┘
\`\`\`

All slots accept HTMLElement for maximum flexibility.

## Interaction Model

**Drawer Pattern (Typical):**
1. User clicks SummaryCard
2. Drawer opens with full details
3. Drawer includes CTA or actions
4. User closes drawer to return

**No Drawer (Alternative):**
- Card displays summary only
- No onClick handler
- Not clickable

SummaryCard does NOT own Drawer logic.
Consumer provides onClick handler.

## Relationship to Dashboard Pattern

SummaryCard is used within Dashboard Page Pattern sections:
- Pending Actions section → Multiple SummaryCards
- Meeting Summary section → Multiple SummaryCards
- Notifications section → Multiple SummaryCards

Dashboard pattern defines layout.
SummaryCard defines card structure.

**See:** Dashboard Page Pattern documentation

## Future Specialization

ActionCard and MeetingCard may specialize from SummaryCard later:

- **ActionCard** — Adds action-specific semantics (priority, assignee)
- **MeetingCard** — Adds meeting-specific semantics (agenda, participants)

For now, SummaryCard remains neutral and structural.

## Component API

### Props

- **\`title\`** (string) — REQUIRED
  - Card title (prominent display)
  - Always visible

- **\`body?\`** (HTMLElement) — Optional
  - Main content area
  - Flexible content injection

- **\`meta?\`** (HTMLElement) — Optional
  - Footer metadata area
  - Typically dates, tags, counts

- **\`onClick?\`** (() => void) — Optional
  - Click handler (typically opens drawer)
  - Adds hover affordance automatically

### Explicit Non-Goals

- ❌ No variants (size, color, style)
- ❌ No business semantics (action vs meeting)
- ❌ No date/priority formatting
- ❌ No workflow logic
- ❌ No nested cards
- ❌ No routing or navigation

## Token Bindings

Uses existing tokens only:
- \`--font-semibold\` — Title weight
- \`--text-primary\` — Title color
- \`--text-secondary\` — Body color
- \`--text-muted\` — Meta color
- \`--ui-surface-hover\` — Hover background
- \`--ui-transition-duration-default\` — Transitions
- \`--spacing-*\` — Padding and gaps
- \`--rounded-md\` — Border radius

No new tokens introduced.

## Usage Example

\`\`\`typescript
import { createSummaryCard } from './summary-card';
import { createTag } from '../tag/tag';

// Create body content
const body = document.createElement('div');
body.textContent = 'Finance committee needs board approval';

// Create meta row
const meta = document.createElement('div');
meta.appendChild(document.createTextNode('Due: Feb 15, 2026'));
meta.appendChild(createTag({ children: 'HIGH', variant: 'danger' }));

// Create card
const card = createSummaryCard({
  title: 'Review Q1 Budget Proposal',
  body,
  meta,
  onClick: () => {
    // Open drawer with full details
    console.log('Open budget proposal drawer');
  },
});
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
 * Default summary card with title only.
 * 
 * Demonstrates minimal card structure with just a title.
 * No body or meta content.
 */
export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const card = createSummaryCard({
      title: 'Simple Summary Card',
    });
    
    container.appendChild(card);
    return container;
  },
};

/**
 * Summary card with body content.
 * 
 * Demonstrates card with title and main content area.
 */
export const WithBody: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const card = createSummaryCard({
      title: 'Budget Proposal Review',
      body: createSampleBody('Finance committee needs board approval for Q1 budget allocation.'),
    });
    
    container.appendChild(card);
    return container;
  },
};

/**
 * Summary card with meta row.
 * 
 * Demonstrates card with footer metadata (date and tag).
 */
export const WithMeta: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const card = createSummaryCard({
      title: 'Technical Charter Update',
      body: createSampleBody('TSC submitted governance changes for board review.'),
      meta: createSampleMeta('Feb 20, 2026', 'medium'),
    });
    
    container.appendChild(card);
    return container;
  },
};

/**
 * Clickable summary card with drawer stub.
 * 
 * Demonstrates click affordance (hover state).
 * Click logs to console (drawer stub).
 */
export const Clickable: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const instructions = document.createElement('p');
    instructions.textContent = 'Hover and click the card below:';
    instructions.style.marginBottom = 'var(--spacing-16)';
    instructions.style.color = 'var(--text-secondary)';
    
    const card = createSummaryCard({
      title: 'Sign Contributor Agreement',
      body: createSampleBody('New platinum member onboarding requires signature.'),
      meta: createSampleMeta('Feb 28, 2026', 'medium'),
      onClick: () => {
        console.log('✅ Card clicked — would open drawer with details');
      },
    });
    
    container.appendChild(instructions);
    container.appendChild(card);
    return container;
  },
};

/**
 * Action example — Pending action card.
 * 
 * Demonstrates typical "Pending Action" use case.
 * Shows how SummaryCard works for action summaries.
 */
export const ActionExample: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const title = document.createElement('h3');
    title.textContent = 'Pending Actions Example';
    title.style.marginBottom = 'var(--spacing-16)';
    
    const cards = [
      createSummaryCard({
        title: 'Review Q1 Budget Proposal',
        body: createSampleBody('Finance committee needs board approval'),
        meta: createSampleMeta('Feb 15, 2026', 'high'),
        onClick: () => console.log('Open budget proposal drawer'),
      }),
      createSummaryCard({
        title: 'Approve Technical Charter Update',
        body: createSampleBody('TSC submitted governance changes'),
        meta: createSampleMeta('Feb 20, 2026', 'medium'),
        onClick: () => console.log('Open charter update drawer'),
      }),
      createSummaryCard({
        title: 'Sign Contributor Agreement',
        body: createSampleBody('New platinum member onboarding'),
        meta: createSampleMeta('Feb 28, 2026', 'medium'),
        onClick: () => console.log('Open agreement drawer'),
      }),
    ];
    
    container.appendChild(title);
    cards.forEach(card => {
      card.style.marginBottom = 'var(--spacing-12)';
      container.appendChild(card);
    });
    
    return container;
  },
};

/**
 * Meeting example — Meeting summary cards.
 * 
 * Demonstrates typical "Meeting Summary" use case.
 * Shows how SummaryCard works for meeting summaries.
 */
export const MeetingExample: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.maxWidth = '400px';
    
    const title = document.createElement('h3');
    title.textContent = 'Upcoming Meetings Example';
    title.style.marginBottom = 'var(--spacing-16)';
    
    const cards = [
      createSummaryCard({
        title: 'Board of Directors Meeting',
        meta: createMeetingMeta('Feb 10, 2026', '2:00 PM PST', 8),
        onClick: () => console.log('Open meeting details drawer'),
      }),
      createSummaryCard({
        title: 'Quarterly Budget Review',
        meta: createMeetingMeta('Feb 15, 2026', '10:00 AM PST', 12),
        onClick: () => console.log('Open meeting details drawer'),
      }),
      createSummaryCard({
        title: 'Strategic Planning Session',
        meta: createMeetingMeta('Feb 22, 2026', '1:00 PM PST', 15),
        onClick: () => console.log('Open meeting details drawer'),
      }),
    ];
    
    container.appendChild(title);
    cards.forEach(card => {
      card.style.marginBottom = 'var(--spacing-12)';
      container.appendChild(card);
    });
    
    return container;
  },
};

/**
 * Grid layout example.
 * 
 * Demonstrates multiple summary cards in a grid layout.
 * Shows how cards compose in dashboard contexts.
 */
export const GridLayout: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = 'var(--spacing-24)';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    container.style.gap = 'var(--spacing-16)';
    container.style.maxWidth = '1000px';
    
    const cards = [
      createSummaryCard({
        title: 'Action Item 1',
        body: createSampleBody('Description of first action'),
        meta: createSampleMeta('Feb 15, 2026', 'high'),
        onClick: () => console.log('Card 1 clicked'),
      }),
      createSummaryCard({
        title: 'Action Item 2',
        body: createSampleBody('Description of second action'),
        meta: createSampleMeta('Feb 20, 2026', 'medium'),
        onClick: () => console.log('Card 2 clicked'),
      }),
      createSummaryCard({
        title: 'Action Item 3',
        body: createSampleBody('Description of third action'),
        meta: createSampleMeta('Feb 25, 2026', 'low'),
        onClick: () => console.log('Card 3 clicked'),
      }),
      createSummaryCard({
        title: 'Action Item 4',
        body: createSampleBody('Description of fourth action'),
        meta: createSampleMeta('Mar 1, 2026', 'medium'),
        onClick: () => console.log('Card 4 clicked'),
      }),
    ];
    
    cards.forEach(card => container.appendChild(card));
    
    return container;
  },
};
