/**
 * SummaryCard Component
 * 
 * Level 2 — Molecule
 * 
 * Canonical structural wrapper for dashboard summary cards.
 * Used for "summary → drawer" interaction pattern in dashboards.
 * 
 * Provides:
 * - Consistent card structure for dashboard summaries
 * - Slot-based content injection
 * - Optional click affordance for drawer usage
 * 
 * Does NOT provide:
 * - Drawer logic
 * - Navigation or routing
 * - Business semantics (actions vs meetings)
 * - Date/priority formatting
 * - Workflow logic
 * 
 * Note: ActionCard and MeetingCard may specialize from this primitive later.
 */

import { createCard } from '../card/card';
import './summary-card.css';

export interface SummaryCardProps {
  /** Card title (REQUIRED) */
  title: string;
  /** Optional main content */
  body?: HTMLElement;
  /** Optional footer/meta row */
  meta?: HTMLElement;
  /** Optional click handler (typically opens drawer) */
  onClick?: () => void;
}

/**
 * Creates a SummaryCard component
 * 
 * Structural primitive for dashboard summary cards.
 * Composes Card internally with semantic slot structure.
 * 
 * Structure:
 * - __header: Title (required)
 * - __body: Main content (optional)
 * - __meta: Footer metadata (optional)
 * 
 * Interaction:
 * - If onClick provided, adds click affordance (hover state)
 * - Typically used to open Drawer for details
 * 
 * @param props - SummaryCard configuration
 * @returns HTMLElement - The summary card container
 * 
 * @example
 * ```ts
 * import { createSummaryCard } from './summary-card';
 * 
 * const bodyContent = document.createElement('div');
 * bodyContent.textContent = 'Action description';
 * 
 * const card = createSummaryCard({
 *   title: 'Review Budget Proposal',
 *   body: bodyContent,
 *   onClick: () => console.log('Open drawer'),
 * });
 * ```
 */
export function createSummaryCard(props: SummaryCardProps): HTMLElement {
  const { title, body, meta, onClick } = props;

  // Create slot container
  const container = document.createElement('div');
  container.className = 'lfx-summary-card';

  // Header (title - always present)
  const header = document.createElement('div');
  header.className = 'lfx-summary-card__header';
  header.textContent = title;
  container.appendChild(header);

  // Body (optional)
  if (body) {
    const bodySection = document.createElement('div');
    bodySection.className = 'lfx-summary-card__body';
    bodySection.appendChild(body);
    container.appendChild(bodySection);
  }

  // Meta (optional)
  if (meta) {
    const metaSection = document.createElement('div');
    metaSection.className = 'lfx-summary-card__meta';
    metaSection.appendChild(meta);
    container.appendChild(metaSection);
  }

  // Add click handler if provided
  if (onClick) {
    container.classList.add('lfx-summary-card--clickable');
    container.style.cursor = 'pointer';
    container.addEventListener('click', onClick);
  }

  // Compose with Card
  return createCard({
    children: [container],
  });
}
