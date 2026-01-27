/**
 * TableToolbar Component
 * 
 * Level 2 — Molecule
 * 
 * Purpose:
 * Owns layout, spacing, and hierarchy for table search + filter controls.
 * 
 * Responsibilities:
 * - Horizontal flex layout for search and filter controls
 * - Internal padding and spacing
 * - Search input full-width behavior
 * - Filter intrinsic width behavior
 * 
 * Non-Responsibilities:
 * - Does NOT know about Table component
 * - Does NOT own filter semantics or data logic
 * - Does NOT reorder filters
 * - Does NOT own pagination
 * - Does NOT own background color (inherits from parent Card)
 */

export interface TableToolbarProps {
  /**
   * Optional search input element.
   * If provided, will be rendered with flex: 1 to span available width.
   */
  search?: HTMLElement;
  
  /**
   * Optional array of filter control elements.
   * Rendered at intrinsic width after search.
   * Order is determined by caller.
   */
  filters?: HTMLElement[];
}

/**
 * Creates a TableToolbar component.
 * 
 * DEFENSIVE BEHAVIOR:
 * If no controls are provided (no search, no filters), this function returns
 * an empty container with NO padding, NO height, and NO visible footprint.
 * This prevents phantom spacing and layout drift.
 * 
 * @param props - TableToolbar properties
 * @returns HTMLElement representing the toolbar (or empty container if no controls)
 */
export function createTableToolbar(props: TableToolbarProps = {}): HTMLElement {
  const { search, filters = [] } = props;
  
  const toolbar = document.createElement('div');
  
  // DEFENSIVE: If no controls provided, render invisible container
  // This prevents phantom spacing when toolbar is conditionally empty
  const hasControls = search || filters.length > 0;
  
  if (!hasControls) {
    // Render nothing visible — no class, no padding, no height
    toolbar.style.display = 'none';
    return toolbar;
  }
  
  // Normal rendering: Apply class for layout styling
  toolbar.className = 'lfx-table-toolbar';
  
  // Render search input if provided
  if (search) {
    // Ensure search input spans available width
    search.style.flex = '1';
    toolbar.appendChild(search);
  }
  
  // Render filters if provided
  filters.forEach(filter => {
    toolbar.appendChild(filter);
  });
  
  return toolbar;
}
