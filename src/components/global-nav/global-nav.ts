/**
 * GlobalNav
 * 
 * Tier 3 — Composite Layout Component
 * Provides structural layout for application navigation.
 * 
 * OWNERSHIP BOUNDARIES:
 * - GlobalNav owns: layout, selected item background, container styling
 * - Nav items own: text styling, icon styling, click handling
 * - Parent owns: routing logic, activeItemId state
 * 
 * IMPORTANT: GlobalNav does NOT implement routing.
 * It only provides visual feedback for the selected item.
 */

import './global-nav.css';

export interface GlobalNavProps {
  /** Nav sections/items - expects structured nav items with data-nav-item-id */
  children: HTMLElement | HTMLElement[];
  /** ID of currently selected nav item */
  activeItemId?: string | null;
  /** Apply container background */
  withBackground?: boolean;
  /** Apply container border */
  withBorder?: boolean;
  /** Reduced spacing mode */
  dense?: boolean;
}

export function createGlobalNav(props: GlobalNavProps): HTMLElement {
  const {
    children,
    activeItemId = null,
    withBackground = false,
    withBorder = false,
    dense = false,
  } = props;

  const nav = document.createElement('nav');
  nav.className = 'lfx-global-nav';
  nav.setAttribute('role', 'navigation');

  // Container variants
  if (withBackground) {
    nav.classList.add('lfx-global-nav--with-background');
  }

  if (withBorder) {
    nav.classList.add('lfx-global-nav--with-border');
  }

  if (dense) {
    nav.classList.add('lfx-global-nav--dense');
  }

  // Append children
  if (Array.isArray(children)) {
    children.forEach(child => nav.appendChild(child));
  } else {
    nav.appendChild(children);
  }

  // Apply selected state to matching nav items
  if (activeItemId) {
    applySelectedState(nav, activeItemId);
  }

  return nav;
}

/**
 * Helper to apply selected state to nav items
 * Finds all elements with data-nav-item-id and applies --selected class to match
 */
function applySelectedState(nav: HTMLElement, activeItemId: string): void {
  const items = nav.querySelectorAll('[data-nav-item-id]');
  items.forEach((item) => {
    const itemId = item.getAttribute('data-nav-item-id');
    if (itemId === activeItemId) {
      item.classList.add('lfx-global-nav__item--selected');
    } else {
      item.classList.remove('lfx-global-nav__item--selected');
    }
  });
}

/**
 * Creates a nav section container
 * Use this to group related nav items
 */
export function createNavSection(children: HTMLElement | HTMLElement[]): HTMLElement {
  const section = document.createElement('div');
  section.className = 'lfx-global-nav__section';

  if (Array.isArray(children)) {
    children.forEach(child => section.appendChild(child));
  } else {
    section.appendChild(children);
  }

  return section;
}

/**
 * Creates a nav item
 * This is a minimal structural wrapper - text/icon styling is external
 */
export interface NavItemProps {
  /** Unique identifier for this nav item */
  id: string;
  /** Content - typically icon + text */
  children: HTMLElement | HTMLElement[];
}

export function createNavItem(props: NavItemProps): HTMLElement {
  const { id, children } = props;

  const item = document.createElement('div');
  item.className = 'lfx-global-nav__item';
  item.setAttribute('data-nav-item-id', id);
  item.setAttribute('role', 'link');

  if (Array.isArray(children)) {
    children.forEach(child => item.appendChild(child));
  } else {
    item.appendChild(children);
  }

  return item;
}
