/**
 * AppShell
 * 
 * Tier 3 — Composite Layout Component
 * Defines the high-level page layout for LFX One.
 * 
 * OWNERSHIP BOUNDARIES:
 * - AppShell owns: layout structure, region positioning, scroll behavior
 * - Children own: their own styling, interaction, state
 * - Parent owns: routing, data, application state
 * 
 * IMPORTANT: AppShell does NOT implement routing or style children.
 */

import './app-shell.css';

export interface AppShellProps {
  /** Navigation region (typically GlobalNav) */
  nav?: HTMLElement;
  /** Header region (typically app header) */
  header?: HTMLElement;
  /** Main content region - REQUIRED */
  content: HTMLElement;
  /** Aside region (typically sidebar) */
  aside?: HTMLElement;
  /** Apply container border */
  withBorder?: boolean;
  /** Apply surface background */
  withBackground?: boolean;
  /** Reduced spacing mode */
  dense?: boolean;
}

export function createAppShell(props: AppShellProps): HTMLElement {
  const {
    nav,
    header,
    content,
    aside,
    withBorder = false,
    withBackground = false,
    dense = false,
  } = props;

  const shell = document.createElement('div');
  shell.className = 'lfx-app-shell';

  // Container variants
  if (withBackground) {
    shell.classList.add('lfx-app-shell--with-background');
  }

  if (withBorder) {
    shell.classList.add('lfx-app-shell--with-border');
  }

  if (dense) {
    shell.classList.add('lfx-app-shell--dense');
  }

  // Nav region (optional)
  if (nav) {
    const navRegion = document.createElement('div');
    navRegion.className = 'lfx-app-shell__nav';
    navRegion.appendChild(nav);
    shell.appendChild(navRegion);
  }

  // Header region (optional)
  if (header) {
    const headerRegion = document.createElement('div');
    headerRegion.className = 'lfx-app-shell__header';
    headerRegion.appendChild(header);
    shell.appendChild(headerRegion);
  }

  // Content region (required)
  const contentRegion = document.createElement('div');
  contentRegion.className = 'lfx-app-shell__content';
  contentRegion.appendChild(content);
  shell.appendChild(contentRegion);

  // Aside region (optional)
  if (aside) {
    const asideRegion = document.createElement('div');
    asideRegion.className = 'lfx-app-shell__aside';
    asideRegion.appendChild(aside);
    shell.appendChild(asideRegion);
  }

  return shell;
}
