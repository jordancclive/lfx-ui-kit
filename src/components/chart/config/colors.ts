/**
 * Chart Color Configuration
 * 
 * Ported from Insights chart styling.
 * Maps UI kit CSS variables to ECharts-compatible color values.
 * 
 * NOTE: These are NOT UI kit tokens. These are chart-specific
 * color builders that read from the design system at runtime.
 */

/**
 * Reads a CSS variable value from the document root
 */
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

/**
 * Chart color palette (ported from Insights)
 * Uses semantic colors from the UI kit
 */
export function getChartColors() {
  return {
    // Primary series colors (multi-series charts)
    series: [
      getCSSVar('--accent-500'),      // Azure
      getCSSVar('--success-500'),     // Emerald
      getCSSVar('--warning-500'),     // Amber
      getCSSVar('--danger-500'),      // Red
      getCSSVar('--discovery-500'),   // Violet
      getCSSVar('--accent-400'),
      getCSSVar('--success-400'),
    ],

    // Single series (sparklines, simple charts)
    primary: getCSSVar('--accent-500'),
    primaryArea: getCSSVar('--accent-100'),

    // Text colors
    text: {
      primary: getCSSVar('--text-primary'),
      secondary: getCSSVar('--text-secondary'),
      muted: getCSSVar('--neutral-400'),
    },

    // Grid and axis colors
    grid: {
      line: getCSSVar('--neutral-200'),
      splitLine: getCSSVar('--neutral-200'),
    },

    // Background
    background: 'transparent',
  };
}

/**
 * Status-based color mappings
 */
export function getStatusColor(status: 'success' | 'warning' | 'danger' | 'neutral'): string {
  switch (status) {
    case 'success':
      return getCSSVar('--success-500');
    case 'warning':
      return getCSSVar('--warning-500');
    case 'danger':
      return getCSSVar('--danger-500');
    case 'neutral':
    default:
      return getCSSVar('--neutral-500');
  }
}
