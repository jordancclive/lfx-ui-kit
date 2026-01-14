/**
 * ListItem
 * 
 * Tier 2 — Interactive Single Component
 * Represents a single row in a list.
 * Can be selectable, hoverable, clickable, or static.
 * 
 * OWNERSHIP BOUNDARIES:
 * - ListItem owns: background, interaction states, bottom border
 * - Child components own: text styling, icons, avatars
 * 
 * STATE PRECEDENCE (highest → lowest):
 * 1. disabled — overrides all
 * 2. selected — overrides hover
 * 3. hover — only when clickable
 * 4. default
 */

import './list-item.css';

export interface ListItemProps {
  /** Visual selection state */
  selected?: boolean;
  /** Disabled state - overrides all other states */
  disabled?: boolean;
  /** Enable hover state and pointer cursor */
  clickable?: boolean;
  /** Content to render - not modified by ListItem */
  children?: HTMLElement | HTMLElement[];
}

export function createListItem(props: ListItemProps = {}): HTMLElement {
  const {
    selected = false,
    disabled = false,
    clickable = false,
    children,
  } = props;

  const item = document.createElement('div');
  item.className = 'lfx-list-item';
  item.setAttribute('role', 'listitem');

  // Clickable state (enables hover)
  if (clickable) {
    item.classList.add('lfx-list-item--clickable');
  }

  // Selected state (overrides hover)
  if (selected) {
    item.classList.add('lfx-list-item--selected');
    item.setAttribute('aria-selected', 'true');
  }

  // Disabled state (overrides all)
  if (disabled) {
    item.classList.add('lfx-list-item--disabled');
    item.setAttribute('aria-disabled', 'true');
  }

  // Render children without modification
  if (children) {
    if (Array.isArray(children)) {
      children.forEach(child => item.appendChild(child));
    } else {
      item.appendChild(children);
    }
  }

  return item;
}
