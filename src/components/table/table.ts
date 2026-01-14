/**
 * Table
 * 
 * Tier 3 — Composite Layout Component
 * Provides structural layout for tabular data.
 * Coordinates header rows and data rows.
 * 
 * IMPORTANT: Table does NOT manage sorting, selection, or interaction logic.
 * Those responsibilities belong to:
 * - TableRow: hover, selected, disabled backgrounds
 * - TableCell: text color, alignment, typography
 * - TableHeaderCell: header text, sort indicators
 * - Parent controller: sorting logic, selection state
 * 
 * LAYOUT STRATEGY: CSS Grid
 * - Uses display: contents on rows to allow cells to participate in grid
 * - Column count controlled via `columns` prop
 */

import './table.css';

export interface TableProps {
  /** Table content - header row and body rows */
  children: HTMLElement | HTMLElement[];
  /** Number of columns for grid layout */
  columns?: number;
  /** Apply container border */
  withBorder?: boolean;
  /** Apply surface background */
  withBackground?: boolean;
  /** Reduced vertical spacing */
  dense?: boolean;
}

export function createTable(props: TableProps): HTMLElement {
  const {
    children,
    columns,
    withBorder = false,
    withBackground = false,
    dense = false,
  } = props;

  const table = document.createElement('div');
  table.className = 'lfx-table';
  table.setAttribute('role', 'table');

  // Column count class
  if (columns && columns >= 2 && columns <= 8) {
    table.classList.add(`lfx-table--cols-${columns}`);
  }

  // Container variants
  if (withBorder) {
    table.classList.add('lfx-table--with-border');
  }

  if (withBackground) {
    table.classList.add('lfx-table--with-background');
  }

  if (dense) {
    table.classList.add('lfx-table--dense');
  }

  // Append children without modification
  if (Array.isArray(children)) {
    children.forEach(child => table.appendChild(child));
  } else {
    table.appendChild(children);
  }

  return table;
}

/**
 * Creates a table header section wrapper
 * Use this to wrap TableHeaderCell components
 */
export function createTableHeader(children: HTMLElement | HTMLElement[]): HTMLElement {
  const header = document.createElement('div');
  header.className = 'lfx-table__header';
  header.setAttribute('role', 'rowgroup');

  const headerRow = document.createElement('div');
  headerRow.className = 'lfx-table__header-row';
  headerRow.setAttribute('role', 'row');

  if (Array.isArray(children)) {
    children.forEach(child => headerRow.appendChild(child));
  } else {
    headerRow.appendChild(children);
  }

  header.appendChild(headerRow);
  return header;
}

/**
 * Creates a table body section wrapper
 * Use this to wrap TableRow components
 */
export function createTableBody(children: HTMLElement | HTMLElement[]): HTMLElement {
  const body = document.createElement('div');
  body.className = 'lfx-table__body';
  body.setAttribute('role', 'rowgroup');

  if (Array.isArray(children)) {
    children.forEach(child => body.appendChild(child));
  } else {
    body.appendChild(children);
  }

  return body;
}
