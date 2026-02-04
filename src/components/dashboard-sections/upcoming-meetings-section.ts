/**
 * Upcoming Meetings Section Factory
 * 
 * Tier 3 — Dashboard Section Pattern
 * 
 * Creates a fully assembled Upcoming Meetings section for dashboards.
 * Consolidates the repeated structure: header + limited card display + View All navigation.
 * 
 * ## Purpose
 * 
 * This factory eliminates duplication across dashboard examples by
 * owning the complete assembly logic for Upcoming Meetings sections.
 * 
 * ## Ownership
 * 
 * **This factory owns:**
 * - Section header (title + View All button)
 * - Card count limiting (maxVisible)
 * - Card container layout
 * - View All navigation callback
 * 
 * **This factory does NOT own:**
 * - Individual meeting card content
 * - Meeting card click behavior
 * - Navigation routing logic (passed as parameter)
 * 
 * ## Usage
 * 
 * Dashboards pass:
 * - Pre-created meeting cards
 * - View All navigation handler
 * - Optional title override
 * - Optional max visible count
 */

import { createButton } from '../button/button';

export interface UpcomingMeetingsSectionProps {
  /** Section title */
  title?: string;
  
  /** Pre-created meeting cards to display */
  meetings: HTMLElement[];
  
  /** Maximum number of cards to display in preview */
  maxVisible?: number;
  
  /** Handler for "View All" button - should navigate to Meetings page */
  onViewAll: () => void;
}

/**
 * Creates a fully assembled Upcoming Meetings section
 * 
 * This factory consolidates the repeated pattern used across dashboard
 * examples for creating meeting summary sections with limited preview + View All.
 * 
 * @param props - Configuration for the upcoming meetings section
 * @returns HTMLElement containing the complete section structure
 * 
 * @example
 * ```typescript
 * // Dashboard usage
 * const section = createUpcomingMeetingsSection({
 *   title: 'Upcoming Meetings',
 *   meetings: [card1, card2, card3, card4],
 *   maxVisible: 2,
 *   onViewAll: () => {
 *     console.log('[ROUTE] Navigate to Meetings page');
 *   },
 * });
 * ```
 */
export function createUpcomingMeetingsSection(props: UpcomingMeetingsSectionProps): HTMLElement {
  const { 
    title = 'Upcoming Meetings', 
    meetings, 
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
  const visibleMeetings = meetings.slice(0, maxVisible);
  visibleMeetings.forEach(card => {
    // Enforce minimum height for visual consistency
    card.style.minHeight = '120px';
    cardsContainer.appendChild(card);
  });

  container.appendChild(header);
  container.appendChild(cardsContainer);

  return container;
}
