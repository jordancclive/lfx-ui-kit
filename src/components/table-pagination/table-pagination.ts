/**
 * TablePagination Component
 * 
 * Level 2 — Molecule
 * 
 * Purpose:
 * Owns layout, spacing, and hierarchy for table pagination controls.
 * 
 * Responsibilities:
 * - Pagination control layout (info + prev/next buttons)
 * - Page number display and formatting
 * - Internal spacing and alignment
 * - Visual subordination to table rows
 * - Defensive rendering (no pagination when not needed)
 * 
 * Non-Responsibilities:
 * - Does NOT fetch data
 * - Does NOT own sorting logic
 * - Does NOT own filtering logic
 * - Does NOT own row rendering
 * - Does NOT own table grid layout
 * - Does NOT own background color (inherits from parent Card)
 */

export interface TablePaginationProps {
  /**
   * Current page number (1-based).
   */
  page: number;
  
  /**
   * Number of items per page.
   */
  pageSize: number;
  
  /**
   * Total number of items across all pages.
   */
  totalItems: number;
  
  /**
   * Optional callback when page changes.
   * Not implemented in this version (structure only).
   */
  onPageChange?: (page: number) => void;
}

/**
 * Creates a TablePagination component.
 * 
 * DEFENSIVE BEHAVIOR:
 * If pagination is not needed (totalItems <= pageSize), this function returns
 * an invisible container with NO padding, NO height, and NO visible footprint.
 * This prevents phantom spacing and layout drift.
 * 
 * @param props - TablePagination properties
 * @returns HTMLElement representing the pagination controls (or empty container if not needed)
 */
export function createTablePagination(props: TablePaginationProps): HTMLElement {
  const { page, pageSize, totalItems, onPageChange } = props;
  
  const pagination = document.createElement('div');
  
  // DEFENSIVE: If pagination not needed, render invisible container
  // This prevents phantom spacing when pagination is conditionally unnecessary
  const isPaginationNeeded = totalItems > pageSize;
  
  if (!isPaginationNeeded) {
    // Render nothing visible — no class, no padding, no height
    pagination.style.display = 'none';
    return pagination;
  }
  
  // Normal rendering: Apply class for layout styling
  pagination.className = 'lfx-table-pagination';
  
  // Calculate pagination values
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  
  // Left side: Pagination info
  const info = document.createElement('span');
  info.className = 'lfx-table-pagination__info';
  info.textContent = `Rows ${startItem}–${endItem} of ${totalItems}`;
  
  // Right side: Pagination controls
  const controls = document.createElement('div');
  controls.className = 'lfx-table-pagination__controls';
  
  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = 'lfx-table-pagination__button';
  prevButton.textContent = 'Previous';
  prevButton.disabled = page === 1;
  if (onPageChange) {
    prevButton.addEventListener('click', () => onPageChange(page - 1));
  }
  
  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = 'lfx-table-pagination__button';
  nextButton.textContent = 'Next';
  nextButton.disabled = page >= totalPages;
  if (onPageChange) {
    nextButton.addEventListener('click', () => onPageChange(page + 1));
  }
  
  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  
  pagination.appendChild(info);
  pagination.appendChild(controls);
  
  return pagination;
}
