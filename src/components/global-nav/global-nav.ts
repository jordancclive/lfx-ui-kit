/**
 * GlobalNav
 *
 * Tier 3 — Composite Layout Component
 * White nav panel: context header, collapsible section labels, icon+label nav items.
 *
 * OWNERSHIP BOUNDARIES:
 * - GlobalNav owns: layout, white surface, selected item visual, context header, section labels
 * - Nav items own: text, icon, click handling
 * - Parent owns: routing logic, activeItemId state, context data
 *
 * IMPORTANT: GlobalNav does NOT implement routing.
 * It only provides visual feedback for the selected item.
 */

import './global-nav.css';

export interface GlobalNavProps {
  /** Nav sections/items — expects structured nav items with data-nav-item-id */
  children: HTMLElement | HTMLElement[];
  /** ID of currently selected nav item */
  activeItemId?: string | null;
  /** Apply right-side border */
  withBorder?: boolean;
  /**
   * @deprecated No-op — nav background is always white.
   * Kept for backward compatibility with existing stories.
   */
  withBackground?: boolean;
  /** Reduced spacing mode */
  dense?: boolean;
}

export function createGlobalNav(props: GlobalNavProps): HTMLElement {
  const {
    children,
    activeItemId = null,
    withBorder = false,
    dense = false,
  } = props;

  const nav = document.createElement('nav');
  nav.className = 'lfx-global-nav';
  nav.setAttribute('role', 'navigation');

  if (withBorder) nav.classList.add('lfx-global-nav--with-border');
  if (dense) nav.classList.add('lfx-global-nav--dense');

  if (Array.isArray(children)) {
    children.forEach(child => nav.appendChild(child));
  } else {
    nav.appendChild(children);
  }

  if (activeItemId) applySelectedState(nav, activeItemId);

  return nav;
}

function applySelectedState(nav: HTMLElement, activeItemId: string): void {
  const items = nav.querySelectorAll('[data-nav-item-id]');
  items.forEach((item) => {
    const itemId = item.getAttribute('data-nav-item-id');
    item.classList.toggle('lfx-global-nav__item--selected', itemId === activeItemId);
  });
}

// ── Context Header ──────────────────────────────────────────────────────────

export interface NavContextHeaderProps {
  /** Title text — user name, project name, or org name */
  title: string;
  /** Subtitle text — e.g. "Foundation", "CNCF Project" */
  subtitle?: string;
  /**
   * Role badge text shown below name in user mode (e.g. "Maintainer", "Board Member").
   * When provided, renders a colored badge instead of subtitle text.
   */
  roleBadge?: string;
  /**
   * Avatar image URL (user photo for Me lens).
   * When provided, renders a circular avatar instead of a square icon.
   */
  avatarUrl?: string;
  /**
   * Fallback initials shown in avatar when avatarUrl is not provided
   * or when in user mode without a photo.
   */
  avatarInitials?: string;
  /**
   * Square icon: img URL or inline SVG HTML string.
   * Used for Projects and Org lens context headers.
   */
  icon?: string;
  /** Alt text for icon or avatar image */
  iconAlt?: string;
  /**
   * Show a dropdown chevron on the right (for project/foundation selector).
   */
  showChevron?: boolean;
}

const chevronDownSvg = `<svg viewBox="0 0 20 20" class="lfx-global-nav__context-chevron" aria-hidden="true"><path d="M5 7.5L10 12.5L15 7.5" /></svg>`;

/**
 * Creates the context header at the top of the nav panel.
 *
 * Two modes:
 * 1. User mode (Me lens): circular avatar + name + role badge
 * 2. Project/Org mode: square logo + name + subtitle + optional dropdown chevron
 */
export function createNavContextHeader(props: NavContextHeaderProps): HTMLElement {
  const {
    title,
    subtitle,
    roleBadge,
    avatarUrl,
    avatarInitials = '',
    icon,
    iconAlt = '',
    showChevron = false,
  } = props;

  const header = document.createElement('div');
  header.className = 'lfx-global-nav__context-header';

  const isUserMode = !!(avatarUrl || avatarInitials) && !icon;

  // ── Left: avatar (user) or icon (project/org) ───────────────────────────
  if (isUserMode) {
    const avatar = document.createElement('div');
    avatar.className = 'lfx-global-nav__context-avatar';

    if (avatarUrl) {
      const img = document.createElement('img');
      img.src = avatarUrl;
      img.alt = title;
      avatar.appendChild(img);
    } else {
      const initials = document.createElement('span');
      initials.className = 'lfx-global-nav__context-avatar-initials';
      initials.textContent = avatarInitials;
      avatar.appendChild(initials);
    }

    header.appendChild(avatar);
  } else if (icon) {
    const iconContainer = document.createElement('div');
    iconContainer.className = 'lfx-global-nav__context-icon';

    if (icon.trim().startsWith('<')) {
      iconContainer.innerHTML = icon;
    } else {
      const img = document.createElement('img');
      img.src = icon;
      img.alt = iconAlt;
      iconContainer.appendChild(img);
    }

    header.appendChild(iconContainer);
  }

  // ── Middle: text block ──────────────────────────────────────────────────
  const textBlock = document.createElement('div');
  textBlock.className = 'lfx-global-nav__context-text';

  const titleEl = document.createElement('div');
  titleEl.className = 'lfx-global-nav__context-title';
  titleEl.textContent = title;
  textBlock.appendChild(titleEl);

  if (roleBadge) {
    // User mode: colored role badge
    const badge = document.createElement('span');
    badge.className = 'lfx-global-nav__context-role-badge';
    badge.textContent = roleBadge;
    textBlock.appendChild(badge);
  } else if (subtitle) {
    // Project/Org mode: plain subtitle
    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'lfx-global-nav__context-subtitle';
    subtitleEl.textContent = subtitle;
    textBlock.appendChild(subtitleEl);
  }

  header.appendChild(textBlock);

  // ── Right: dropdown chevron (project/org selector) ──────────────────────
  if (showChevron) {
    const chevronWrapper = document.createElement('span');
    chevronWrapper.innerHTML = chevronDownSvg;
    header.appendChild(chevronWrapper);
  }

  return header;
}

// ── Section Label ───────────────────────────────────────────────────────────

/**
 * Creates a section label: small-caps, muted grey text.
 * No chevron — matches the live production nav.
 */
export function createNavSectionLabel(text: string): HTMLElement {
  const label = document.createElement('div');
  label.className = 'lfx-global-nav__section-label';
  label.setAttribute('aria-hidden', 'true');

  const textEl = document.createElement('span');
  textEl.className = 'lfx-global-nav__section-label-text';
  textEl.textContent = text;
  label.appendChild(textEl);

  return label;
}

// ── Nav Section ────────────────────────────────────────────────────────────

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

// ── Nav Item ───────────────────────────────────────────────────────────────

export interface NavItemProps {
  /** Unique identifier for this nav item */
  id: string;
  /** Label text (new API — preferred) */
  label?: string;
  /** SVG HTML string for the icon (new API) */
  icon?: string;
  /**
   * Muted/disabled appearance — item is visible but not interactive.
   * Used for features not yet available.
   */
  muted?: boolean;
  /**
   * Show an external link icon on the right — item opens outside the app.
   */
  externalLink?: boolean;
  /**
   * @deprecated Use `label` and `icon` instead.
   * Legacy API: pass an HTMLElement or array as direct children.
   */
  children?: HTMLElement | HTMLElement[];
}

const externalLinkSvg = `<svg viewBox="0 0 13 13" class="lfx-global-nav__item-external-icon" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8M8 1h4m0 0v4m0-4L5.5 7.5"/>
</svg>`;

export function createNavItem(props: NavItemProps): HTMLElement {
  const { id, label, icon, muted = false, externalLink = false, children } = props;

  const item = document.createElement('div');
  item.className = 'lfx-global-nav__item';
  item.setAttribute('data-nav-item-id', id);
  item.setAttribute('role', 'link');
  if (label) item.setAttribute('aria-label', label);
  if (muted) item.classList.add('lfx-global-nav__item--muted');
  if (externalLink) item.classList.add('lfx-global-nav__item--external');

  // New API: icon + label
  if (label || icon) {
    if (icon) {
      const iconWrapper = document.createElement('span');
      iconWrapper.innerHTML = icon;
      iconWrapper.setAttribute('aria-hidden', 'true');
      item.appendChild(iconWrapper);
    }
    if (label) {
      const labelEl = document.createElement('span');
      labelEl.textContent = label;
      item.appendChild(labelEl);
    }
    if (externalLink) {
      const extWrapper = document.createElement('span');
      extWrapper.innerHTML = externalLinkSvg;
      item.appendChild(extWrapper);
    }
  }

  // Legacy API
  if (children && !label) {
    if (Array.isArray(children)) {
      children.forEach(child => item.appendChild(child));
    } else {
      item.appendChild(children);
    }
  }

  return item;
}
