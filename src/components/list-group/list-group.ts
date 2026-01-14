/**
 * ListGroup
 * 
 * Tier 3 — Composite Layout Component
 * Provides structural layout for vertical lists.
 * Composes ListItem components.
 * 
 * OWNERSHIP BOUNDARIES:
 * - ListGroup owns: container background, border, radius, gap, padding
 * - ListItem owns: hover, selected, disabled states
 * - Child components own: text, icons, avatars
 * 
 * IMPORTANT: ListGroup does NOT manage interaction states.
 * Those responsibilities belong to ListItem.
 */

import './list-group.css';

export interface ListGroupProps {
  /** List content - expects ListItem children */
  children: HTMLElement | HTMLElement[];
  /** Apply container background */
  withBackground?: boolean;
  /** Apply container border */
  withBorder?: boolean;
  /** Reduced spacing mode */
  dense?: boolean;
}

export function createListGroup(props: ListGroupProps): HTMLElement {
  const {
    children,
    withBackground = false,
    withBorder = false,
    dense = false,
  } = props;

  const group = document.createElement('div');
  group.className = 'lfx-list-group';
  group.setAttribute('role', 'list');

  // Container variants
  if (withBackground) {
    group.classList.add('lfx-list-group--with-background');
  }

  if (withBorder) {
    group.classList.add('lfx-list-group--with-border');
  }

  if (dense) {
    group.classList.add('lfx-list-group--dense');
  }

  // Append children without modification
  if (Array.isArray(children)) {
    children.forEach(child => group.appendChild(child));
  } else {
    group.appendChild(children);
  }

  return group;
}
