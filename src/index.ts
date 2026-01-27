/**
 * LFX One UI Kit
 * 
 * Design system components built from Figma tokens.
 */

// Components
export { createButton, type ButtonProps } from './components/button/button';
export { createSearchInput, type SearchInputProps } from './components/search-input/search-input';
export { createFilterPill, type FilterPillProps } from './components/filter-pill/filter-pill';
export { createFilterDropdownTrigger, type FilterDropdownTriggerProps } from './components/filter-dropdown-trigger/filter-dropdown-trigger';
export { createTabItem, type TabItemProps } from './components/tab-item/tab-item';
export { createTabsGroup, type TabsGroupProps, type TabsGroupTab } from './components/tabs-group/tabs-group';
export { createTag, type TagProps } from './components/tag/tag';
export { createTableRow, type TableRowProps } from './components/table-row/table-row';
export { createTableCell, type TableCellProps } from './components/table-cell/table-cell';
export { createTableHeaderCell, type TableHeaderCellProps } from './components/table-header-cell/table-header-cell';
export { createTableGrid, createTableHeader, createTableBody, type TableGridProps, type ColumnDefinition, type ColumnSemanticType } from './components/table-grid/table-grid';
export { createTableToolbar, type TableToolbarProps } from './components/table-toolbar/table-toolbar';
export { createTablePagination, type TablePaginationProps } from './components/table-pagination/table-pagination';
export { createDataTable, type DataTableProps } from './components/data-table/data-table';

// DEPRECATED: Backward compatibility aliases
// TODO: Remove in next major version
/** @deprecated Use createTableGrid instead */
export { createTableGrid as createTable } from './components/table-grid/table-grid';
/** @deprecated Use TableGridProps instead */
export type { TableGridProps as TableProps } from './components/table-grid/table-grid';
export { createListItem, type ListItemProps } from './components/list-item/list-item';
export { createListGroup, type ListGroupProps } from './components/list-group/list-group';
export { createGlobalNav, createNavSection, createNavItem, type GlobalNavProps, type NavItemProps } from './components/global-nav/global-nav';
export { createAppShell, type AppShellProps } from './components/app-shell/app-shell';
export { createAppHeader, type AppHeaderProps } from './components/app-header/app-header';
export { createPageLayout, type PageLayoutProps } from './components/page-layout/page-layout';
export { createPageSection, type PageSectionProps } from './components/page-section/page-section';
export { createCard, type CardProps } from './components/card/card';
export { createMetricCard, type MetricCardProps } from './components/metric-card/metric-card';
export { createMetricsRow, type MetricsRowProps } from './components/metrics-row/metrics-row';
