/**
 * LFX One UI Kit - FilterDropdownTrigger Component
 * 
 * A dropdown trigger component that uses UI Role tokens.
 * Visual component only - no open/close state management beyond props.
 * Does not include dropdown menu, popover, keyboard navigation, or portals.
 */

import './filter-dropdown-trigger.css';

export interface FilterDropdownTriggerProps {
  /** Trigger label text */
  label: string;
  /** Open state (chevron rotates, focus border applied) */
  open?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Chevron icon SVG (points down by default)
 * Uses currentColor to inherit text color
 */
const chevronDownSvg = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/**
 * Creates a FilterDropdownTrigger element
 */
export const createFilterDropdownTrigger = ({
  label,
  open = false,
  disabled = false,
  onClick,
}: FilterDropdownTriggerProps): HTMLButtonElement => {
  const button = document.createElement('button');
  
  // Build class list
  const classes = ['lfx-filter-dropdown-trigger'];
  
  if (open && !disabled) {
    classes.push('lfx-filter-dropdown-trigger--open');
  }
  
  if (disabled) {
    classes.push('lfx-filter-dropdown-trigger--disabled');
  }
  
  button.className = classes.join(' ');
  button.disabled = disabled;
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', String(open && !disabled));
  
  // Build inner content
  button.innerHTML = `
    <span class="lfx-filter-dropdown-trigger__label">${label}</span>
    <span class="lfx-filter-dropdown-trigger__chevron">${chevronDownSvg}</span>
  `;
  
  // Attach click handler only if not disabled
  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }
  
  return button;
};
