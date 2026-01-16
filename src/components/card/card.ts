/**
 * Card Component
 * 
 * Tier 2 — Pattern / Surface Wrapper
 * 
 * Provides a consistent visual surface for grouping content.
 * Standardizes background, border, radius, and internal padding.
 * 
 * Owns:
 * - Surface background
 * - Border (optional)
 * - Border radius
 * - Internal padding
 * - Header/footer slot layout
 * 
 * Does NOT own:
 * - Typography
 * - Child content styling
 * - Hover/selected states
 */

import './card.css';

export interface CardProps {
  /** Main content (required) */
  children: HTMLElement | HTMLElement[];
  /** Optional header slot */
  header?: HTMLElement;
  /** Optional footer slot */
  footer?: HTMLElement;
  /** Show border around card */
  withBorder?: boolean;
  /** Use reduced padding */
  dense?: boolean;
  /** Show divider below header */
  headerDivider?: boolean;
  /** Show divider above footer */
  footerDivider?: boolean;
}

/**
 * Creates a Card component
 * 
 * Card is a stateless surface wrapper. It provides consistent
 * background, border, radius, and padding for grouping content.
 * 
 * @example
 * // Basic card
 * const card = createCard({
 *   children: content
 * });
 * 
 * @example
 * // Card with header and footer
 * const card = createCard({
 *   header: headerElement,
 *   children: content,
 *   footer: footerElement,
 *   withBorder: true
 * });
 */
export function createCard(props: CardProps): HTMLElement {
  const {
    children,
    header,
    footer,
    withBorder = true,
    dense = false,
    headerDivider = false,
    footerDivider = false,
  } = props;

  // Create card container
  const card = document.createElement('div');
  card.className = 'lfx-card';

  // Apply variant classes
  if (withBorder) {
    card.classList.add('lfx-card--with-border');
  }
  if (dense) {
    card.classList.add('lfx-card--dense');
  }

  // Render header slot (if provided)
  if (header) {
    const headerSlot = document.createElement('div');
    headerSlot.className = 'lfx-card__header';
    if (headerDivider) {
      headerSlot.classList.add('lfx-card__header--with-divider');
    }
    headerSlot.appendChild(header);
    card.appendChild(headerSlot);
  }

  // Render body slot (required)
  const bodySlot = document.createElement('div');
  bodySlot.className = 'lfx-card__body';
  
  if (Array.isArray(children)) {
    children.forEach(child => bodySlot.appendChild(child));
  } else {
    bodySlot.appendChild(children);
  }
  card.appendChild(bodySlot);

  // Render footer slot (if provided)
  if (footer) {
    const footerSlot = document.createElement('div');
    footerSlot.className = 'lfx-card__footer';
    if (footerDivider) {
      footerSlot.classList.add('lfx-card__footer--with-divider');
    }
    footerSlot.appendChild(footer);
    card.appendChild(footerSlot);
  }

  return card;
}
