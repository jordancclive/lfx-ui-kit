/**
 * ThreeLensNav
 *
 * Tier 3 — Composite Layout Component
 * Composes LensRail (dark navy) + GlobalNav panel (white) into one nav element.
 * Pass the returned element directly to AppShell's `nav` prop.
 *
 * OWNERSHIP BOUNDARIES:
 * - ThreeLensNav owns: composition layout
 * - LensRail owns: lens switching, rail icons, active lens indicator, utility bottom icons
 * - GlobalNav owns: context header, section labels, nav item list
 * - Parent owns: active lens, active nav item, routing callbacks
 */

import './three-lens-nav.css';
import { createLensRail, type Lens, type LensRailProps } from '../lens-rail/lens-rail';
import {
  createGlobalNav,
  createNavContextHeader,
  createNavSectionLabel,
  createNavSection,
  createNavItem,
  type NavContextHeaderProps,
} from '../global-nav/global-nav';

export interface NavItemDef {
  id: string;
  label: string;
  icon?: string;
  /** Muted/disabled — feature not yet available */
  muted?: boolean;
  /** Show external link icon — opens outside the app */
  externalLink?: boolean;
}

export interface NavSectionDef {
  /** Optional section label shown above the group */
  label?: string;
  items: NavItemDef[];
}

export interface ThreeLensNavProps {
  /** Active lens in the rail */
  activeLens?: Lens;
  /** Callback when a lens button is clicked */
  onLensChange?: (lens: Lens) => void;
  /**
   * Context header at top of nav panel.
   * For Me lens: pass avatarInitials/avatarUrl + title + roleBadge.
   * For Projects/Org lens: pass icon + title + subtitle + showChevron.
   */
  contextHeader?: NavContextHeaderProps;
  /** Nav sections with items */
  sections?: NavSectionDef[];
  /** Active nav item ID */
  activeNavItemId?: string | null;
  /** Show the My LFX lens button in the rail */
  showMyLfx?: boolean;
}

export function createThreeLensNav(props: ThreeLensNavProps = {}): HTMLElement {
  const {
    activeLens = 'projects',
    onLensChange,
    contextHeader,
    sections = [],
    activeNavItemId = null,
    showMyLfx = false,
  } = props;

  // ── Wrapper ──────────────────────────────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.className = 'lfx-three-lens-nav';

  // ── Lens Rail (dark navy) ─────────────────────────────────────────────────
  const railProps: LensRailProps = {
    activeLens,
    onLensChange,
    showMyLfx,
  };
  wrapper.appendChild(createLensRail(railProps));

  // ── Nav Panel (white) ─────────────────────────────────────────────────────
  const panelChildren: HTMLElement[] = [];

  if (contextHeader) {
    panelChildren.push(createNavContextHeader(contextHeader));
  }

  sections.forEach((sectionDef) => {
    const sectionChildren: HTMLElement[] = [];

    if (sectionDef.label) {
      sectionChildren.push(createNavSectionLabel(sectionDef.label));
    }

    sectionDef.items.forEach((itemDef) => {
      sectionChildren.push(createNavItem({
        id: itemDef.id,
        label: itemDef.label,
        icon: itemDef.icon,
        muted: itemDef.muted,
        externalLink: itemDef.externalLink,
      }));
    });

    panelChildren.push(createNavSection(sectionChildren));
  });

  const panel = createGlobalNav({
    children: panelChildren,
    activeItemId: activeNavItemId,
  });

  wrapper.appendChild(panel);

  return wrapper;
}
