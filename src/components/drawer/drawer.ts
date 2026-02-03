/**
 * Drawer Component
 * 
 * Level 2 — Molecule
 * 
 * Canonical right-side drawer interaction surface for LFX One.
 * 
 * Used for:
 * - Dashboard chart drill-downs
 * - "My Actions" → View All
 * - Table row inspection
 * - MetricCluster detail views
 * 
 * Owns:
 * - Right-side slide-in surface
 * - Overlay backdrop
 * - Open / close behavior
 * - Keyboard escape handling
 * - Scroll containment
 * - Focus trap (basic)
 * 
 * Does NOT own:
 * - Data fetching
 * - Routing
 * - Analytics logic
 * - Chart logic
 * - Escalation decisions
 * - Page navigation
 * - Modals
 * - Nested drawers
 */

import './drawer.css';

export interface DrawerProps {
  /** Optional drawer title */
  title?: string;
  /** Body content (REQUIRED) */
  body: HTMLElement;
  /** Optional footer content */
  footer?: HTMLElement;
  /** Optional close callback */
  onClose?: () => void;
}

/**
 * Creates a Drawer component
 * 
 * Right-side slide-in surface for lightweight inspection and actions.
 * Preserves page context and avoids forced navigation.
 * 
 * Interaction:
 * - Slides in from right
 * - Overlay click closes drawer
 * - ESC key closes drawer
 * - Background scroll locked while open
 * - Body scrolls independently
 * 
 * @param props - Drawer configuration
 * @returns HTMLElement - The drawer overlay container
 * 
 * @example
 * ```ts
 * import { createDrawer } from './drawer';
 * 
 * const bodyContent = document.createElement('div');
 * bodyContent.textContent = 'Drawer content here';
 * 
 * const drawer = createDrawer({
 *   title: 'Details',
 *   body: bodyContent,
 *   onClose: () => console.log('Drawer closed'),
 * });
 * 
 * document.body.appendChild(drawer);
 * ```
 */
export function createDrawer(props: DrawerProps): HTMLElement {
  const { title, body, footer, onClose } = props;

  // Create overlay container
  const overlay = document.createElement('div');
  overlay.className = 'lfx-drawer-overlay';

  // Create drawer aside
  const drawer = document.createElement('aside');
  drawer.className = 'lfx-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  if (title) {
    drawer.setAttribute('aria-label', title);
  }

  // Create header (if title provided or for close button)
  const header = document.createElement('header');
  header.className = 'lfx-drawer__header';

  if (title) {
    const titleElement = document.createElement('h2');
    titleElement.className = 'lfx-drawer__title';
    titleElement.textContent = title;
    header.appendChild(titleElement);
  }

  // Close button (always present)
  const closeButton = document.createElement('button');
  closeButton.className = 'lfx-drawer__close';
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('aria-label', 'Close drawer');
  closeButton.innerHTML = `
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
  header.appendChild(closeButton);

  // Create body section
  const bodySection = document.createElement('section');
  bodySection.className = 'lfx-drawer__body';
  bodySection.appendChild(body);

  // Append header and body to drawer
  drawer.appendChild(header);
  drawer.appendChild(bodySection);

  // Create footer (if provided)
  if (footer) {
    const footerElement = document.createElement('footer');
    footerElement.className = 'lfx-drawer__footer';
    footerElement.appendChild(footer);
    drawer.appendChild(footerElement);
  }

  // Append drawer to overlay
  overlay.appendChild(drawer);

  // Close handler
  const handleClose = () => {
    // Remove overlay from DOM
    overlay.remove();
    
    // Unlock body scroll
    document.body.style.overflow = '';
    
    // Call optional close callback
    if (onClose) {
      onClose();
    }
  };

  // Close button click handler
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    handleClose();
  });

  // Overlay click handler (close on backdrop click)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      handleClose();
    }
  });

  // Prevent clicks inside drawer from closing
  drawer.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ESC key handler
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Lock body scroll when drawer is mounted
  document.body.style.overflow = 'hidden';

  // Focus trap: Focus the drawer when mounted
  requestAnimationFrame(() => {
    drawer.focus();
  });

  return overlay;
}
