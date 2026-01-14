/**
 * LFX One UI Kit - TabItem Component
 * 
 * A tab item component that uses UI Role tokens.
 * Visual component only - no tab panel management.
 */

import './tab-item.css';

export interface TabItemProps {
  /** Tab label text */
  label: string;
  /** Selected state */
  selected?: boolean;
  /** Disabled state - overrides all other states */
  disabled?: boolean;
  /** Size variant */
  size?: 'default' | 'small';
  /** Left icon (SVG string or HTML string) */
  icon?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Creates a TabItem element
 * 
 * State precedence:
 * - Disabled overrides all states (including selected)
 * - Selected overrides hover
 */
export const createTabItem = ({
  label,
  selected = false,
  disabled = false,
  size = 'default',
  icon,
  onClick,
}: TabItemProps): HTMLButtonElement => {
  const button = document.createElement('button');
  
  // Build class list
  const classes = ['lfx-tab-item'];
  
  if (size === 'small') {
    classes.push('lfx-tab-item--small');
  }
  
  if (selected && !disabled) {
    classes.push('lfx-tab-item--selected');
  }
  
  if (disabled) {
    classes.push('lfx-tab-item--disabled');
  }
  
  button.className = classes.join(' ');
  button.disabled = disabled;
  button.type = 'button';
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(selected && !disabled));
  
  // Build inner content
  // Icons are hidden in disabled state (handled via CSS)
  const iconHtml = icon && !disabled
    ? `<span class="lfx-tab-item__icon">${icon}</span>` 
    : '';
  
  button.innerHTML = `
    <span class="lfx-tab-item__content">
      ${iconHtml}
      <span class="lfx-tab-item__text">${label}</span>
    </span>
  `;
  
  // Attach click handler only if not disabled
  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }
  
  return button;
};
