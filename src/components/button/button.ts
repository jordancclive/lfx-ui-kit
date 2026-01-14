/**
 * LFX One UI Kit - Button Component
 * 
 * A primary button component that uses UI Role tokens.
 * No palette references, no magic numbers.
 */

import './button.css';

export interface ButtonProps {
  /** Button label text */
  label: string;
  /** Button variant */
  variant?: 'primary';
  /** Button size */
  size?: 'default' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state - takes precedence over disabled */
  loading?: boolean;
  /** Left icon (SVG string or HTML string) */
  iconLeft?: string;
  /** Right icon (SVG string or HTML string) */
  iconRight?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Spinner SVG for loading state
 * Uses currentColor to inherit from --spinner-on-interactive
 * viewBox dimensions define the aspect ratio, actual size comes from CSS
 */
const spinnerSvg = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>
  <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/**
 * Creates a Button element
 * 
 * State precedence:
 * - If loading === true, apply loading visuals (even if disabled === true)
 * - Disabled visuals apply only when loading === false
 */
export const createButton = ({
  label,
  variant = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
}: ButtonProps): HTMLButtonElement => {
  const button = document.createElement('button');
  
  // Build class list
  const classes = ['lfx-button', `lfx-button--${variant}`];
  
  if (size === 'large') {
    classes.push('lfx-button--large');
  }
  
  // State precedence: loading takes priority over disabled
  if (loading) {
    classes.push('lfx-button--loading');
  } else if (disabled) {
    classes.push('lfx-button--disabled');
  }
  
  button.className = classes.join(' ');
  
  // IMPORTANT:
  // Native disabled is NOT applied during loading.
  // Loading state always takes precedence over disabled.
  button.disabled = disabled && !loading;
  button.type = 'button';
  
  // Build inner content
  if (loading) {
    // Loading state: spinner replaces label (no icons shown)
    button.innerHTML = `
      <span class="lfx-button__content">
        <span class="lfx-button__spinner">${spinnerSvg}</span>
      </span>
    `;
  } else {
    // Normal state: show icons and label
    const leftIconHtml = iconLeft 
      ? `<span class="lfx-button__icon lfx-button__icon--left">${iconLeft}</span>` 
      : '';
    const rightIconHtml = iconRight 
      ? `<span class="lfx-button__icon lfx-button__icon--right">${iconRight}</span>` 
      : '';
    
    button.innerHTML = `
      <span class="lfx-button__content">
        ${leftIconHtml}
        <span class="lfx-button__text">${label}</span>
        ${rightIconHtml}
      </span>
    `;
  }
  
  // Attach click handler only if not disabled and not loading
  if (onClick && !disabled && !loading) {
    button.addEventListener('click', onClick);
  }
  
  return button;
};
