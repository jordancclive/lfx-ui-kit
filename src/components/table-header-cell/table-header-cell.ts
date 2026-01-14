/**
 * TableHeaderCell
 * 
 * Tier 2 — Structural + Visual Indicator Component
 * Represents a single header cell in a table.
 * Owns header text presentation and optional visual indicators.
 * 
 * This component does NOT perform sorting.
 * Sorting logic belongs to parent table/controller.
 */

import './table-header-cell.css';

export interface TableHeaderCellProps {
  /** Header content - can be text or elements */
  children?: string | HTMLElement | HTMLElement[];
  /** Text alignment */
  align?: 'left' | 'right';
  /** Visual sort indicator direction (null = no sort indicator) */
  sortDirection?: 'asc' | 'desc' | null;
  /** Show tooltip icon (visual indicator only, no tooltip logic) */
  showTooltip?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Creates a sort arrow icon SVG element
 */
function createSortIcon(): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('fill', 'none');
  svg.innerHTML = `<path d="M8 4L12 10H4L8 4Z" fill="currentColor"/>`;
  return svg;
}

/**
 * Creates a tooltip/info icon SVG element
 */
function createTooltipIcon(): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('fill', 'none');
  svg.innerHTML = `
    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 7V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
  `;
  return svg;
}

export function createTableHeaderCell(props: TableHeaderCellProps = {}): HTMLElement {
  const {
    children = '',
    align = 'left',
    sortDirection = null,
    showTooltip = false,
    disabled = false,
  } = props;

  const cell = document.createElement('div');
  cell.className = 'lfx-table-header-cell';

  // Alignment class
  cell.classList.add(`lfx-table-header-cell--align-${align}`);

  // Disabled class
  if (disabled) {
    cell.classList.add('lfx-table-header-cell--disabled');
  }

  // Content wrapper
  const contentWrapper = document.createElement('span');
  contentWrapper.className = 'lfx-table-header-cell__content';

  // Render children
  if (typeof children === 'string') {
    contentWrapper.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => contentWrapper.appendChild(child));
  } else if (children instanceof HTMLElement) {
    contentWrapper.appendChild(children);
  }

  cell.appendChild(contentWrapper);

  // Tooltip icon (if enabled)
  if (showTooltip && !disabled) {
    const tooltipIconWrapper = document.createElement('span');
    tooltipIconWrapper.className = 'lfx-table-header-cell__icon lfx-table-header-cell__tooltip-icon';
    tooltipIconWrapper.appendChild(createTooltipIcon());
    cell.appendChild(tooltipIconWrapper);
  }

  // Sort icon (if sortDirection is set)
  if (sortDirection !== null) {
    const sortIconWrapper = document.createElement('span');
    sortIconWrapper.className = 'lfx-table-header-cell__icon lfx-table-header-cell__sort-icon';
    
    // Add active state
    sortIconWrapper.classList.add('lfx-table-header-cell__sort-icon--active');
    
    // Add direction class for rotation
    sortIconWrapper.classList.add(`lfx-table-header-cell__sort-icon--${sortDirection}`);
    
    sortIconWrapper.appendChild(createSortIcon());
    cell.appendChild(sortIconWrapper);
  }

  return cell;
}
