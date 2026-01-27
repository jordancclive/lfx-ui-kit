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
 * @param props - TableToolbar properties
 * @returns HTMLElement representing the toolbar
 */
export function createTableToolbar(props: TableToolbarProps = {}): HTMLElement {
  const { search, filters = [] } = props;
  
  const toolbar = document.createElement('div');
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
