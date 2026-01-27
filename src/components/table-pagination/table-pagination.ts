/**
 * TablePagination Component
 * 
 * Level 2 — Molecule
 * 
 * Purpose:
 * Owns layout, spacing, and hierarchy for table pagination controls.
 * 
 * Responsibilities:
 * - Pagination control layout (info + numbered pages + prev/next buttons)
 * - Page number display and formatting
 * - Page windowing (ellipsis for large datasets)
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
   */
  onPageChange?: (page: number) => void;
  
  /**
   * Optional array of page size options for "Results per page" selector.
   * 
   * If undefined or empty, no page size selector is rendered.
   * If only one option is provided, no selector is rendered (no choice to make).
   * 
   * Example: [10, 20, 50]
   */
  pageSizeOptions?: number[];
  
  /**
   * Optional callback when page size changes.
   * 
   * Called when user selects a different page size.
   */
  onPageSizeChange?: (pageSize: number) => void;
}

/**
 * Page marker types for pagination windowing.
 * - number: A clickable page number
 * - 'ellipsis': A non-clickable ellipsis marker (…)
 */
type PageMarker = number | 'ellipsis';

/**
 * Calculates which page numbers to display with ellipsis for large datasets.
 * 
 * Strategy:
 * - Always show first and last page
 * - Show current page and 2 pages on each side
 * - Insert ellipsis when pages are skipped
 * - Maximum 7 visible page numbers in the window
 * 
 * Examples:
 * - Page 1 of 5: [1] 2 3 4 5
 * - Page 3 of 10: 1 2 [3] 4 5 … 10
 * - Page 10 of 42: 1 … 8 9 [10] 11 12 … 42
 * - Page 40 of 42: 1 … 38 39 [40] 41 42
 * 
 * @param currentPage - Current page (1-based)
 * @param totalPages - Total number of pages
 * @returns Array of page numbers and ellipsis markers
 */
function getVisiblePages(currentPage: number, totalPages: number): PageMarker[] {
  // If 7 or fewer pages, show all pages
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  const markers: PageMarker[] = [];
  
  // Always include first page
  markers.push(1);
  
  // Calculate window around current page
  const windowStart = Math.max(2, currentPage - 1);
  const windowEnd = Math.min(totalPages - 1, currentPage + 1);
  
  // Add ellipsis if there's a gap after first page
  if (windowStart > 2) {
    markers.push('ellipsis');
  }
  
  // Add pages in the window around current page
  for (let i = windowStart; i <= windowEnd; i++) {
    markers.push(i);
  }
  
  // Add ellipsis if there's a gap before last page
  if (windowEnd < totalPages - 1) {
    markers.push('ellipsis');
  }
  
  // Always include last page (if not already included)
  if (totalPages > 1) {
    markers.push(totalPages);
  }
  
  return markers;
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
  const { page, pageSize, totalItems, onPageChange, pageSizeOptions, onPageSizeChange } = props;
  
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
  
  // Optional: Page size selector (if enabled and has multiple options)
  const shouldRenderPageSizeSelector = 
    pageSizeOptions && 
    pageSizeOptions.length > 1;
  
  if (shouldRenderPageSizeSelector) {
    const pageSizeSelector = document.createElement('div');
    pageSizeSelector.className = 'lfx-table-pagination__page-size';
    
    // Label
    const label = document.createElement('span');
    label.className = 'lfx-table-pagination__page-size-label';
    label.textContent = 'Results per page:';
    pageSizeSelector.appendChild(label);
    
    // Options container
    const options = document.createElement('div');
    options.className = 'lfx-table-pagination__page-size-options';
    
    pageSizeOptions.forEach((size, index) => {
      // Option button
      const option = document.createElement('button');
      option.className = 'lfx-table-pagination__page-size-option';
      option.textContent = String(size);
      
      // Mark current page size as active
      if (size === pageSize) {
        option.classList.add('lfx-table-pagination__page-size-option--active');
        option.setAttribute('aria-current', 'true');
      }
      
      // Add click handler
      if (onPageSizeChange && size !== pageSize) {
        option.addEventListener('click', () => onPageSizeChange(size));
      }
      
      options.appendChild(option);
      
      // Add separator between options (but not after last)
      if (index < pageSizeOptions.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'lfx-table-pagination__page-size-separator';
        separator.textContent = '/';
        options.appendChild(separator);
      }
    });
    
    pageSizeSelector.appendChild(options);
    controls.appendChild(pageSizeSelector);
  }
  
  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = 'lfx-table-pagination__button';
  prevButton.textContent = 'Previous';
  prevButton.disabled = page === 1;
  if (onPageChange) {
    prevButton.addEventListener('click', () => onPageChange(page - 1));
  }
  controls.appendChild(prevButton);
  
  // Numbered page buttons
  const visiblePages = getVisiblePages(page, totalPages);
  
  visiblePages.forEach((marker) => {
    if (marker === 'ellipsis') {
      // Render ellipsis (non-clickable)
      const ellipsis = document.createElement('span');
      ellipsis.className = 'lfx-table-pagination__ellipsis';
      ellipsis.textContent = '…';
      controls.appendChild(ellipsis);
    } else {
      // Render page number button
      const pageButton = document.createElement('button');
      pageButton.className = 'lfx-table-pagination__page';
      pageButton.textContent = String(marker);
      
      // Highlight current page
      if (marker === page) {
        pageButton.classList.add('lfx-table-pagination__page--active');
        pageButton.setAttribute('aria-current', 'page');
      }
      
      // Add click handler
      if (onPageChange && marker !== page) {
        pageButton.addEventListener('click', () => onPageChange(marker));
      }
      
      controls.appendChild(pageButton);
    }
  });
  
  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = 'lfx-table-pagination__button';
  nextButton.textContent = 'Next';
  nextButton.disabled = page >= totalPages;
  if (onPageChange) {
    nextButton.addEventListener('click', () => onPageChange(page + 1));
  }
  controls.appendChild(nextButton);
  
  pagination.appendChild(info);
  pagination.appendChild(controls);
  
  return pagination;
}
