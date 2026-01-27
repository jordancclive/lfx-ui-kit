/**
 * LFX One UI Kit - SearchInput Component
 * 
 * A search input component that uses UI Role tokens.
 * Visual component only - no form logic or validation.
 */

import './search-input.css';

export interface SearchInputProps {
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Show search icon */
  showIcon?: boolean;
  /** Visual variant - controls shape and density */
  variant?: 'form' | 'toolbar';
}

/**
 * Search icon SVG
 * Uses currentColor to inherit text color
 */
const searchIconSvg = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 14L10.5 10.5M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/**
 * Creates a SearchInput element
 */
export const createSearchInput = ({
  placeholder = 'Search...',
  value = '',
  disabled = false,
  showIcon = true,
  variant = 'form',
}: SearchInputProps = {}): HTMLDivElement => {
  const wrapper = document.createElement('div');
  
  // Build class list
  const classes = ['lfx-search-input'];
  
  // Apply variant class
  if (variant === 'toolbar') {
    classes.push('lfx-search-input--toolbar');
  }
  
  if (disabled) {
    classes.push('lfx-search-input--disabled');
  }
  
  wrapper.className = classes.join(' ');
  
  // Build inner content
  const iconHtml = showIcon 
    ? `<span class="lfx-search-input__icon">${searchIconSvg}</span>` 
    : '';
  
  wrapper.innerHTML = `
    ${iconHtml}
    <input 
      type="text" 
      class="lfx-search-input__input" 
      placeholder="${placeholder}"
      value="${value}"
      ${disabled ? 'disabled' : ''}
    />
  `;
  
  return wrapper;
};
