/**
 * LFX One UI Kit - TableRow Component
 * 
 * Tier 2 — Interactive Single Component
 * 
 * Represents a selectable, hoverable row used in tables and lists.
 * Does not render cell content, own cell typography, or manage table layout.
 * Does not modify child styles or pass visual props to children.
 */

import './table-row.css';

export interface TableRowProps {
  /** Row content (cells) */
  children?: HTMLElement[];
  /** Selected state */
  selected?: boolean;
  /** Disabled state - overrides all other states */
  disabled?: boolean;
  /** Whether row is clickable (shows pointer cursor, enables hover) */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Creates a TableRow element
 * 
 * State precedence:
 * 1. disabled (highest)
 * 2. selected
 * 3. hover
 * 4. default (lowest)
 * 
 * Token ownership:
 * - color.table.row.background.*
 * - color.table.row.border
 * - spacing.*
 * - button-stroke
 */
export const createTableRow = ({
  children = [],
  selected = false,
  disabled = false,
  clickable = false,
  onClick,
}: TableRowProps = {}): HTMLDivElement => {
  const row = document.createElement('div');
  
  // Build class list
  const classes = ['lfx-table-row'];
  
  if (clickable) {
    classes.push('lfx-table-row--clickable');
  }
  
  // State precedence: disabled > selected > hover > default
  if (disabled) {
    classes.push('lfx-table-row--disabled');
  } else if (selected) {
    classes.push('lfx-table-row--selected');
  }
  
  row.className = classes.join(' ');
  row.setAttribute('role', 'row');
  
  if (selected && !disabled) {
    row.setAttribute('aria-selected', 'true');
  }
  
  if (disabled) {
    row.setAttribute('aria-disabled', 'true');
  }
  
  // Append children without modifying their styles
  children.forEach((child) => {
    row.appendChild(child);
  });
  
  // Attach click handler only if clickable and not disabled
  if (onClick && clickable && !disabled) {
    row.addEventListener('click', onClick);
  }
  
  return row;
};
