/**
 * Ask LFX Lens Trigger (INTERNAL HELPER)
 * 
 * INTERNAL UTILITY - NOT A PUBLIC COMPONENT
 * 
 * Provides a centralized way to create "Ask LFX Lens" trigger buttons
 * across dashboards and metric clusters. Enforces consistent styling,
 * labeling, and accessibility without exposing implementation details.
 * 
 * This helper:
 * - Creates a standard button element with consistent styling
 * - Enforces the 💬 icon + label pattern
 * - Sets appropriate ARIA labels for accessibility
 * - Delegates behavior via onClick (no drawer/AI logic here)
 * 
 * This helper does NOT:
 * - Position itself (parent owns placement)
 * - Open drawers (delegates via onClick)
 * - Implement chat UI or AI logic
 * - Export publicly (internal use only)
 */

import { createButton } from '../button/button';

export interface AskLfxLensTriggerOptions {
  /** Optional custom label (default: "Ask LFX Lens") */
  label?: string;
  /** Context string for accessibility (e.g., "Foundation Health") */
  context: string;
  /** Click handler - dashboard provides drawer/action logic */
  onClick: () => void;
}

/**
 * Creates a standardized "Ask LFX Lens" trigger button
 * 
 * INTERNAL HELPER - Use only within dashboard examples and metric clusters
 * 
 * Enforces consistent button styling, icon usage, and accessibility
 * across all Ask LFX Lens invocations.
 * 
 * @param options - Configuration for the trigger button
 * @returns Button element ready for placement in header
 * 
 * @example
 * // Basic usage in metric cluster header
 * const trigger = createAskLfxLensTrigger({
 *   context: 'Foundation Health',
 *   onClick: () => {
 *     console.log('Open drawer for Foundation Health');
 *   }
 * });
 * 
 * @example
 * // Custom label
 * const trigger = createAskLfxLensTrigger({
 *   label: '💬 Ask AI',
 *   context: 'Recent Progress',
 *   onClick: () => openDrawer()
 * });
 */
export function createAskLfxLensTrigger(options: AskLfxLensTriggerOptions): HTMLElement {
  const { label = '💬 Ask LFX Lens', context, onClick } = options;

  const button = createButton({
    label,
    variant: 'secondary',
    size: 'small',
    onClick,
  });

  // Set ARIA label for accessibility with context
  button.setAttribute('aria-label', `Ask LFX Lens about ${context}`);

  return button;
}
