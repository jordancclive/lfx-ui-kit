/**
 * PageLayout Component
 * Tier 3 — Composite Layout Component
 * 
 * Purpose:
 * PageLayout provides a consistent content wrapper for all LFX One pages.
 * It enforces width, padding, and vertical spacing rules inside the AppShell content area.
 * 
 * Ownership:
 * - Content max-width behavior
 * - Horizontal padding
 * - Vertical spacing between page sections
 * - Scroll containment for page content
 * 
 * Does NOT own:
 * - Typography
 * - Page header (owned by AppHeader)
 * - Cards, tables, lists, charts
 * - Data fetching or routing
 * - Visual styling of child components
 */

import './page-layout.css';

export interface PageLayoutProps {
  /**
   * Page content (required)
   * Expects arbitrary child elements - typically page sections
   */
  children: HTMLElement | HTMLElement[];
  
  /**
   * Dense spacing mode (reduced vertical gap between sections)
   * @default false
   */
  dense?: boolean;
  
  /**
   * Full width mode (disables max-width constraint)
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * Creates a PageLayout component
 * 
 * @param props - PageLayout configuration
 * @returns HTMLElement representing the page layout wrapper
 * 
 * @example
 * ```typescript
 * // Basic usage
 * createPageLayout({
 *   children: [
 *     createAppHeader({ title: 'Dashboard' }),
 *     createTable({ ... }),
 *   ]
 * })
 * 
 * // Dense spacing
 * createPageLayout({
 *   children: [...],
 *   dense: true
 * })
 * 
 * // Full width (no max-width)
 * createPageLayout({
 *   children: [...],
 *   fullWidth: true
 * })
 * 
 * // With AppShell
 * createAppShell({
 *   nav: createGlobalNav({ ... }),
 *   content: createPageLayout({
 *     children: [
 *       createAppHeader({ title: 'Projects' }),
 *       // Page content
 *     ]
 *   })
 * })
 * ```
 */
export function createPageLayout(props: PageLayoutProps): HTMLElement {
  const {
    children,
    dense = false,
    fullWidth = false,
  } = props;

  // Root container
  const layout = document.createElement('div');
  layout.className = 'lfx-page-layout';
  
  if (dense) {
    layout.classList.add('lfx-page-layout--dense');
  }
  
  if (fullWidth) {
    layout.classList.add('lfx-page-layout--full-width');
  }

  // Append children
  if (Array.isArray(children)) {
    children.forEach(child => {
      layout.appendChild(child);
    });
  } else {
    layout.appendChild(children);
  }

  return layout;
}
