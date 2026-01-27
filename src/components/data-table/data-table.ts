/**
 * DataTable — Level 3 (Organism)
 * 
 * Canonical single-table workflow surface for LFX One.
 * 
 * ARCHITECTURAL SCOPE (LOCKED):
 * - DataTable owns COMPOSITION ONLY
 * - TableToolbar owns search + filter layout
 * - TableGrid owns data grid layout
 * - TablePagination owns pagination controls
 * - Page Patterns decide WHERE DataTable is placed
 * 
 * STRUCTURE (FIXED):
 * Card
 * ├─ TableToolbar        (search + filters)
 * ├─ TableGrid           (data grid only)
 * └─ TablePagination     (page navigation)
 * 
 * USAGE RULES:
 * - Use for pages with exactly ONE dataset
 * - Use for pages with ONE search + filter surface
 * - Use for pages with ONE pagination control
 * - Do NOT use in SegmentedTablePage
 * - Do NOT use for multi-table layouts
 * 
 * DEFENSIVE BEHAVIOR:
 * - If toolbar undefined → TableToolbar renders display: none
 * - If pagination not needed → TablePagination renders display: none
 * - DataTable never conditionally renders children
 */

import { createCard } from '../card/card';
import { createTableToolbar } from '../table-toolbar/table-toolbar';
import { createTablePagination } from '../table-pagination/table-pagination';
import './data-table.css';

/**
 * DataTable properties.
 */
export interface DataTableProps {
  /**
   * Optional toolbar configuration.
   * If undefined, TableToolbar will render with display: none.
   */
  toolbar?: {
    /** Search input element (typically SearchInput with variant="toolbar") */
    search?: HTMLElement;
    /** Filter control elements (typically FilterDropdownTrigger components) */
    filters?: HTMLElement[];
  };
  
  /**
   * Table grid element (REQUIRED).
   * This must be a TableGrid component containing header and body rows.
   */
  table: HTMLElement;
  
  /**
   * Optional pagination configuration.
   * If undefined or not needed, TablePagination will render with display: none.
   */
  pagination?: {
    /** Current page number (1-based) */
    page: number;
    /** Number of items per page */
    pageSize: number;
    /** Total number of items across all pages */
    totalItems: number;
    /** Optional page size options (e.g., [10, 20, 50]) */
    pageSizeOptions?: number[];
    /** Callback when page changes */
    onPageChange?: (page: number) => void;
    /** Callback when page size changes */
    onPageSizeChange?: (size: number) => void;
  };
}

/**
 * Creates a DataTable component.
 * 
 * DataTable is the canonical single-table workflow surface.
 * It bundles Card, TableToolbar, TableGrid, and TablePagination
 * with opinionated defaults for single-table pages.
 * 
 * COMPOSITION ONLY:
 * - DataTable contains ZERO layout logic beyond composition
 * - ALL layout behavior delegated to child components
 * - NO direct styling of children
 * - NO conditional spacing logic
 * 
 * @param props - DataTable properties
 * @returns HTMLElement representing the complete table surface
 */
export function createDataTable(props: DataTableProps): HTMLElement {
  const { toolbar, table, pagination } = props;
  
  const cardChildren: HTMLElement[] = [];
  
  // TableToolbar (optional - defensive rendering handled by TableToolbar)
  if (toolbar) {
    cardChildren.push(
      createTableToolbar({
        search: toolbar.search,
        filters: toolbar.filters,
      })
    );
  }
  
  // TableGrid (REQUIRED)
  cardChildren.push(table);
  
  // TablePagination (optional - defensive rendering handled by TablePagination)
  if (pagination) {
    cardChildren.push(
      createTablePagination({
        page: pagination.page,
        pageSize: pagination.pageSize,
        totalItems: pagination.totalItems,
        pageSizeOptions: pagination.pageSizeOptions,
        onPageChange: pagination.onPageChange,
        onPageSizeChange: pagination.onPageSizeChange,
      })
    );
  }
  
  // Compose into Card
  const dataTable = createCard({
    children: cardChildren,
  });
  
  // Apply identifying class (for potential future styling or debugging)
  dataTable.classList.add('lfx-data-table');
  
  return dataTable;
}
