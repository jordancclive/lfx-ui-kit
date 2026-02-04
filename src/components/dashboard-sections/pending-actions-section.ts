/**
 * Pending Actions Section Factory
 * 
 * Tier 3 — Dashboard Section Pattern
 * 
 * Creates a fully assembled Pending Actions section for dashboards.
 * Consolidates the repeated structure: header + limited card display + View All drawer.
 * 
 * ## Purpose
 * 
 * This factory eliminates duplication across dashboard examples by
 * owning the complete assembly logic for Pending Actions sections.
 * 
 * ## Ownership
 * 
 * **This factory owns:**
 * - Section header (title + View All button)
 * - Card count limiting (maxVisible)
 * - Card container layout
 * - View All drawer invocation
 * 
 * **This factory does NOT own:**
 * - Individual action card content
 * - Action card click behavior
 * - Drawer body content (passed as parameter)
 * 
 * ## Usage
 * 
 * Dashboards pass:
 * - Pre-created action cards
 * - View All drawer handler
 * - Optional title override
 * - Optional max visible count
 */

import { createButton } from '../button/button';

export interface PendingActionsSectionProps {
  /** Section title */
  title?: string;
  
  /** Pre-created action cards to display */
  actions: HTMLElement[];
  
  /** Maximum number of cards to display in preview */
  maxVisible?: number;
  
  /** Handler for "View All" button - should open drawer with all actions */
  onViewAll: () => void;
}

/**
 * Creates a fully assembled Pending Actions section
 * 
 * This factory consolidates the repeated pattern used across dashboard
 * examples for creating action summary sections with limited preview + View All.
 * 
 * @param props - Configuration for the pending actions section
 * @returns HTMLElement containing the complete section structure
 * 
 * @example
 * ```typescript
 * // Dashboard usage
 * const section = createPendingActionsSection({
 *   title: 'Pending Actions',
 *   actions: [card1, card2, card3, card4],
 *   maxVisible: 2,
 *   onViewAll: () => {
 *     // Open drawer with all actions
 *   },
 * });
 * ```
 */
export function createPendingActionsSection(props: PendingActionsSectionProps): HTMLElement {
  const { 
    title = 'Pending Actions', 
    actions, 
    maxVisible = 2, 
    onViewAll 
  } = props;

  const container = document.createElement('div');

  // Section header with title + View All button
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.gap = 'var(--spacing-8)';
  header.style.marginBottom = 'var(--spacing-12)';

  // Title group - keeps title and action together
  const titleGroup = document.createElement('div');
  titleGroup.style.display = 'inline-flex';
  titleGroup.style.alignItems = 'center';
  titleGroup.style.gap = 'var(--spacing-8)';

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  titleElement.style.fontSize = 'var(--ui-text-section-title-font-size)';
  titleElement.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
  titleElement.style.color = 'var(--text-primary)';
  titleElement.style.margin = '0';
  titleElement.style.flex = '0 0 auto';

  const viewAllBtn = createButton({
    label: 'View All',
    variant: 'secondary',
    size: 'small',
    onClick: onViewAll,
  });

  titleGroup.appendChild(titleElement);
  titleGroup.appendChild(viewAllBtn);
  header.appendChild(titleGroup);

  // Cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.style.display = 'flex';
  cardsContainer.style.flexDirection = 'column';
  cardsContainer.style.gap = 'var(--spacing-12)';

  // Render exactly maxVisible cards
  const visibleActions = actions.slice(0, maxVisible);
  visibleActions.forEach(card => {
    // Enforce minimum height for visual consistency
    card.style.minHeight = '120px';
    cardsContainer.appendChild(card);
  });

  container.appendChild(header);
  container.appendChild(cardsContainer);

  return container;
}
