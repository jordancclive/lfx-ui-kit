/**
 * PageSection Component
 * Tier 2 — Structural Content Wrapper
 * 
 * Purpose:
 * PageSection represents a single vertical section within a page.
 * It provides consistent vertical spacing, optional dividers, and
 * optional section-level padding, without styling its children.
 * 
 * Ownership:
 * - Vertical spacing between sections
 * - Optional section divider
 * - Optional section-level padding
 * 
 * Does NOT own:
 * - Typography
 * - Backgrounds or surfaces
 * - Cards, tables, lists, charts
 * - Page titles or descriptions
 * - Visual styling of children
 */

import './page-section.css';

export interface PageSectionProps {
  /**
   * Section content (required)
   * Rendered unchanged — no styling applied
   */
  children: HTMLElement | HTMLElement[];
  
  /**
   * Dense spacing mode (reduced vertical padding)
   * @default false
   */
  dense?: boolean;
  
  /**
   * Show bottom divider
   * @default false
   */
  withDivider?: boolean;
}

/**
 * Creates a PageSection component
 * 
 * @param props - PageSection configuration
 * @returns HTMLElement representing the page section wrapper
 * 
 * @example
 * ```typescript
 * // Basic usage
 * createPageSection({
 *   children: createTable({ ... })
 * })
 * 
 * // With divider
 * createPageSection({
 *   children: createListGroup({ ... }),
 *   withDivider: true
 * })
 * 
 * // Dense spacing
 * createPageSection({
 *   children: [...],
 *   dense: true
 * })
 * 
 * // In PageLayout context
 * createPageLayout({
 *   children: [
 *     createAppHeader({ title: 'Settings' }),
 *     createPageSection({
 *       children: generalSettings,
 *       withDivider: true
 *     }),
 *     createPageSection({
 *       children: notificationSettings
 *     }),
 *   ]
 * })
 * ```
 */
export function createPageSection(props: PageSectionProps): HTMLElement {
  const {
    children,
    dense = false,
    withDivider = false,
  } = props;

  // Root container
  const section = document.createElement('div');
  section.className = 'lfx-page-section';
  
  if (dense) {
    section.classList.add('lfx-page-section--dense');
  }
  
  if (withDivider) {
    section.classList.add('lfx-page-section--with-divider');
  }

  // Append children
  if (Array.isArray(children)) {
    children.forEach(child => {
      section.appendChild(child);
    });
  } else {
    section.appendChild(children);
  }

  return section;
}
