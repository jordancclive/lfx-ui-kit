/**
 * MetricsRow Component
 * 
 * Tier 3 — Layout / Composition Component
 * 
 * Arranges multiple MetricCard components in a horizontal row.
 * Standardizes spacing, wrapping, and alignment for metric groups.
 * Provides layout only, not visual styling.
 * 
 * Owns:
 * - Horizontal spacing between MetricCards
 * - Wrapping behavior at smaller widths
 * - Alignment of cards within the row
 * 
 * Does NOT own:
 * - Card surface (delegated to Card)
 * - Metric layout or typography (delegated to MetricCard)
 * - Color or trend semantics
 */

import './metrics-row.css';

export interface MetricsRowProps {
  /** MetricCard children */
  children: HTMLElement | HTMLElement[];
  /** Use reduced spacing between cards */
  dense?: boolean;
  /** Vertical alignment of cards */
  align?: 'start' | 'center' | 'stretch';
  /** Make all cards equal width */
  equalWidth?: boolean;
}

/**
 * Creates a MetricsRow component
 * 
 * MetricsRow is a pure layout component that arranges MetricCard
 * children in a horizontal row with consistent spacing and wrapping.
 * 
 * @example
 * // Basic metrics row
 * const row = createMetricsRow({
 *   children: [
 *     createMetricCard({ label: 'Revenue', value: '$1,234' }),
 *     createMetricCard({ label: 'Users', value: '8,432' }),
 *   ]
 * });
 * 
 * @example
 * // Dense spacing with equal widths
 * const row = createMetricsRow({
 *   children: metrics,
 *   dense: true,
 *   equalWidth: true,
 * });
 */
export function createMetricsRow(props: MetricsRowProps): HTMLElement {
  const {
    children,
    dense = false,
    align = 'stretch',
    equalWidth = false,
  } = props;

  // Create row container
  const row = document.createElement('div');
  row.className = 'lfx-metrics-row';

  // Apply alignment
  row.classList.add(`lfx-metrics-row--align-${align}`);

  // Apply dense variant
  if (dense) {
    row.classList.add('lfx-metrics-row--dense');
  }

  // Apply equal width variant
  if (equalWidth) {
    row.classList.add('lfx-metrics-row--equal-width');
  }

  // Append children
  if (Array.isArray(children)) {
    children.forEach(child => row.appendChild(child));
  } else {
    row.appendChild(children);
  }

  return row;
}
