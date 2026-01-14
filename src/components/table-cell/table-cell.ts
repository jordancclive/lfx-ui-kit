/**
 * TableCell
 * 
 * Tier 2 — Structural Content Component
 * Represents a single cell within a table row.
 * Owns text presentation, alignment, and optional leading/trailing content.
 * 
 * Stateless component — visual state comes ONLY from parent TableRow.
 */

import './table-cell.css';

export interface TableCellProps {
  /** Text presentation style */
  contentType?: 'primary' | 'secondary' | 'muted' | 'numeric';
  /** Text alignment */
  align?: 'left' | 'right';
  /** Size variant */
  size?: 'default' | 'small';
  /** Whether the parent row is disabled (affects text color only) */
  disabled?: boolean;
  /** Cell content - can be text, icons, avatars, etc. */
  children?: string | HTMLElement | HTMLElement[];
}

export function createTableCell(props: TableCellProps = {}): HTMLElement {
  const {
    contentType = 'primary',
    align = 'left',
    size = 'default',
    disabled = false,
    children = '',
  } = props;

  const cell = document.createElement('div');
  cell.className = 'lfx-table-cell';

  // Content type class
  cell.classList.add(`lfx-table-cell--${contentType}`);

  // Alignment class (numeric already handles alignment)
  if (contentType !== 'numeric') {
    cell.classList.add(`lfx-table-cell--align-${align}`);
  }

  // Size class
  if (size === 'small') {
    cell.classList.add('lfx-table-cell--small');
  }

  // Disabled class (text color only, inherited from parent row state)
  if (disabled) {
    cell.classList.add('lfx-table-cell--disabled');
  }

  // Render children
  if (typeof children === 'string') {
    cell.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => cell.appendChild(child));
  } else if (children instanceof HTMLElement) {
    cell.appendChild(children);
  }

  return cell;
}
