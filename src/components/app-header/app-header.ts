/**
 * AppHeader Component
 * Tier 3 — Composite Layout Component
 * 
 * Purpose:
 * Defines the top-of-page header region for LFX One pages.
 * Provides structured layout for page title, optional description,
 * optional metadata, and optional actions area.
 * 
 * Ownership:
 * - Layout of title/description stack
 * - Layout of actions slot (right-aligned)
 * - Layout of meta slot (left-aligned, before title)
 * - Optional bottom divider
 * - Dense spacing mode
 * 
 * Does NOT own:
 * - Typography tokens (reuses existing)
 * - Styling or behavior of buttons, filters, tabs, etc.
 * - Routing, state management, or data fetching
 */

import './app-header.css';

export interface AppHeaderProps {
  /**
   * Page title (required)
   */
  title: string;
  
  /**
   * Optional description/subtitle text
   */
  description?: string;
  
  /**
   * Optional metadata slot (breadcrumbs, status pills, etc.)
   * Renders to the left of the title
   */
  meta?: HTMLElement;
  
  /**
   * Optional actions slot (buttons, tabs, filters, search, etc.)
   * Renders on the right side
   */
  actions?: HTMLElement;
  
  /**
   * Whether to show a bottom divider border
   * @default false
   */
  withDivider?: boolean;
  
  /**
   * Dense spacing mode (reduced vertical padding and gaps)
   * @default false
   */
  dense?: boolean;
}

/**
 * Creates an AppHeader component
 * 
 * @param props - AppHeader configuration
 * @returns HTMLElement representing the page header
 * 
 * @example
 * ```typescript
 * // Title only
 * createAppHeader({ title: "Projects" })
 * 
 * // Title + Description
 * createAppHeader({
 *   title: "Projects",
 *   description: "Manage your open source projects"
 * })
 * 
 * // Title + Actions
 * createAppHeader({
 *   title: "Projects",
 *   actions: createButton({ label: "New Project", variant: "primary" })
 * })
 * 
 * // Full example
 * createAppHeader({
 *   meta: createFilterPill({ label: "Active", selected: true }),
 *   title: "Team Members",
 *   description: "Invite and manage team member access",
 *   actions: createButton({ label: "Invite Member", variant: "primary" }),
 *   withDivider: true,
 *   dense: false
 * })
 * ```
 */
export function createAppHeader(props: AppHeaderProps): HTMLElement {
  const {
    title,
    description,
    meta,
    actions,
    withDivider = false,
    dense = false,
  } = props;

  // Root container
  const header = document.createElement('div');
  header.className = 'lfx-app-header';
  
  if (withDivider) {
    header.classList.add('lfx-app-header--with-divider');
  }
  
  if (dense) {
    header.classList.add('lfx-app-header--dense');
  }

  // Left region: meta + title stack
  const leftRegion = document.createElement('div');
  leftRegion.className = 'lfx-app-header__left';

  // Meta slot (optional)
  if (meta) {
    const metaWrapper = document.createElement('div');
    metaWrapper.className = 'lfx-app-header__meta';
    metaWrapper.appendChild(meta);
    leftRegion.appendChild(metaWrapper);
  }

  // Title stack
  const titleStack = document.createElement('div');
  titleStack.className = 'lfx-app-header__title-stack';

  // Title (required)
  const titleElement = document.createElement('div');
  titleElement.className = 'lfx-app-header__title';
  titleElement.textContent = title;
  titleStack.appendChild(titleElement);

  // Description (optional)
  if (description) {
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'lfx-app-header__description';
    descriptionElement.textContent = description;
    titleStack.appendChild(descriptionElement);
  }

  leftRegion.appendChild(titleStack);
  header.appendChild(leftRegion);

  // Actions slot (optional)
  if (actions) {
    const actionsWrapper = document.createElement('div');
    actionsWrapper.className = 'lfx-app-header__actions';
    actionsWrapper.appendChild(actions);
    header.appendChild(actionsWrapper);
  }

  return header;
}
