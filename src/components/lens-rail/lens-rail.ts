/**
 * LensRail
 *
 * Tier 3 — Composite Layout Component
 * Factory for the dark navy lens-switcher rail (leftmost nav column).
 *
 * OWNERSHIP BOUNDARIES:
 * - LensRail owns: layout, icon rendering, active indicator, hover style, tooltip
 * - Parent owns: activeLens state, routing, onLensChange callback
 * - Does NOT own: nav panel content, user avatar (avatar is in panel context header)
 */

import './lens-rail.css';

export type Lens = 'me' | 'projects' | 'org';

export interface LensRailProps {
  /** Currently active lens */
  activeLens?: Lens;
  /** Callback when a lens button is clicked */
  onLensChange?: (lens: Lens) => void;
  /** Show "My LFX" lens button (optional, for multi-context roles) */
  showMyLfx?: boolean;
}

// ── SVG Icons ──────────────────────────────────────────────────────────────

function iconMe(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
  </svg>`;
}

function iconProjects(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"/>
  </svg>`;
}

function iconOrg(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
  </svg>`;
}

function iconMyLfx(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
  </svg>`;
}

/** LFX Insights — bar chart */
function iconInsights(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
  </svg>`;
}

/** Changelog — clock / history */
function iconChangelog(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`;
}

/** Support — question mark circle */
function iconSupport(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
  </svg>`;
}

/** Log Out — arrow right-from-bracket */
function iconLogOut(): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/>
  </svg>`;
}

/** LFX logo mark — white version of the official two-path LFX SVG */
function iconLogoMark(): string {
  return `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.96369 15.9789V7.98987H0V19.9504H11.9372V15.9789H3.96369Z" fill="white"/>
    <path d="M19.8645 0H0V6.00333H3.96369V4.01761H15.9009V15.9781H13.919V19.9495H19.8645V0Z" fill="white"/>
  </svg>`;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function createLensButton(
  lens: Lens,
  label: string,
  svgHtml: string,
  isActive: boolean,
  onLensChange?: (lens: Lens) => void
): HTMLElement {
  const btn = document.createElement('button');
  btn.className = 'lfx-lens-rail__lens-btn';
  if (isActive) btn.classList.add('lfx-lens-rail__lens-btn--active');
  btn.setAttribute('data-lens', lens);
  btn.setAttribute('data-lens-label', label);
  btn.setAttribute('aria-label', label);
  btn.setAttribute('aria-pressed', String(isActive));
  btn.setAttribute('type', 'button');
  btn.innerHTML = svgHtml;

  if (onLensChange) {
    btn.addEventListener('click', () => onLensChange(lens));
  }

  return btn;
}

function createUtilityButton(svgHtml: string, label: string): HTMLElement {
  const btn = document.createElement('button');
  btn.className = 'lfx-lens-rail__utility-btn';
  btn.setAttribute('data-lens-label', label);
  btn.setAttribute('aria-label', label);
  btn.setAttribute('type', 'button');
  btn.innerHTML = svgHtml;
  return btn;
}

function createDivider(): HTMLElement {
  const div = document.createElement('div');
  div.className = 'lfx-lens-rail__divider';
  div.setAttribute('role', 'separator');
  return div;
}

// ── Main Factory ───────────────────────────────────────────────────────────

export function createLensRail(props: LensRailProps = {}): HTMLElement {
  const {
    activeLens = 'projects',
    onLensChange,
    showMyLfx = false,
  } = props;

  const rail = document.createElement('div');
  rail.className = 'lfx-lens-rail';
  rail.setAttribute('role', 'navigation');
  rail.setAttribute('aria-label', 'Lens navigation');

  // ── Logo ─────────────────────────────────────────────────────────────────
  const logoArea = document.createElement('div');
  logoArea.className = 'lfx-lens-rail__logo';
  const logoMark = document.createElement('div');
  logoMark.className = 'lfx-lens-rail__logo-mark';
  logoMark.innerHTML = iconLogoMark();
  logoArea.appendChild(logoMark);
  rail.appendChild(logoArea);

  // ── Lens Buttons ──────────────────────────────────────────────────────────
  const lensesContainer = document.createElement('div');
  lensesContainer.className = 'lfx-lens-rail__lenses';

  if (showMyLfx) {
    lensesContainer.appendChild(
      createLensButton('me' as Lens, 'My LFX', iconMyLfx(), false, onLensChange)
    );
  }

  const lensDefinitions: Array<{ lens: Lens; label: string; icon: string }> = [
    { lens: 'me',       label: 'Me',       icon: iconMe() },
    { lens: 'projects', label: 'Projects', icon: iconProjects() },
    { lens: 'org',      label: 'My Org',   icon: iconOrg() },
  ];

  lensDefinitions.forEach(({ lens, label, icon }) => {
    lensesContainer.appendChild(
      createLensButton(lens, label, icon, lens === activeLens, onLensChange)
    );
  });

  rail.appendChild(lensesContainer);

  // ── Divider ───────────────────────────────────────────────────────────────
  rail.appendChild(createDivider());

  // ── Utility Buttons (bottom) ──────────────────────────────────────────────
  // Matches Nuno's design: LFX Insights, Changelog, Support, Log Out
  const utilitiesContainer = document.createElement('div');
  utilitiesContainer.className = 'lfx-lens-rail__utilities';

  utilitiesContainer.appendChild(createUtilityButton(iconInsights(),  'LFX Insights'));
  utilitiesContainer.appendChild(createUtilityButton(iconChangelog(),  'Changelog'));
  utilitiesContainer.appendChild(createUtilityButton(iconSupport(),    'Support'));
  utilitiesContainer.appendChild(createUtilityButton(iconLogOut(),     'Log Out'));

  rail.appendChild(utilitiesContainer);

  return rail;
}

/**
 * Update the active lens on an existing LensRail element.
 */
export function setActiveLens(rail: HTMLElement, newActiveLens: Lens): void {
  const buttons = rail.querySelectorAll<HTMLElement>('[data-lens]');
  buttons.forEach((btn) => {
    const btnLens = btn.getAttribute('data-lens') as Lens;
    const isActive = btnLens === newActiveLens;
    btn.classList.toggle('lfx-lens-rail__lens-btn--active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}
