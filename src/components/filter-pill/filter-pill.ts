/**
 * LFX One UI Kit - FilterPill Component
 * 
 * A filter pill component that uses UI Role tokens.
 * Visual component only - no grouping or toggle logic.
 */

import './filter-pill.css';

export interface FilterPillProps {
  /** Pill label text */
  label: string;
  /** Selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Left icon (SVG string or HTML string) */
  icon?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Creates a FilterPill element
 */
export const createFilterPill = ({
  label,
  selected = false,
  disabled = false,
  icon,
  onClick,
}: FilterPillProps): HTMLButtonElement => {
  const button = document.createElement('button');
  
  // Build class list
  const classes = ['lfx-filter-pill'];
  
  if (selected && !disabled) {
    classes.push('lfx-filter-pill--selected');
  }
  
  if (disabled) {
    classes.push('lfx-filter-pill--disabled');
  }
  
  button.className = classes.join(' ');
  button.disabled = disabled;
  button.type = 'button';
  
  // Build inner content
  // Icons do not appear in disabled state
  const iconHtml = icon && !disabled
    ? `<span class="lfx-filter-pill__icon">${icon}</span>` 
    : '';
  
  button.innerHTML = `
    <span class="lfx-filter-pill__content">
      ${iconHtml}
      <span class="lfx-filter-pill__text">${label}</span>
    </span>
  `;
  
  // Attach click handler only if not disabled
  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }
  
  return button;
};
