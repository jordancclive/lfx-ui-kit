/**
 * MetricCard Component
 * 
 * Tier 2 — Pattern Component
 * 
 * Displays a single metric value in a Card surface.
 * Standardizes metric hierarchy and layout, not data semantics.
 * 
 * Owns:
 * - Internal layout of label, value, meta, footer
 * - Typography role usage (via UI role tokens only)
 * - Spacing between metric elements
 * 
 * Does NOT own:
 * - Card surface styling (delegated to Card)
 * - Data formatting logic
 * - Color semantics of values
 */

import './metric-card.css';
import { createCard } from '../card/card';

export interface MetricCardProps {
  /** Optional label above the value */
  label?: string;
  /** The primary metric value (required) */
  value: string | number;
  /** Optional supporting text (delta, description) */
  meta?: string;
  /** Optional footer slot for actions or links */
  footer?: HTMLElement;
  /** Use reduced spacing */
  dense?: boolean;
  /** Show border around card */
  withBorder?: boolean;
}

/**
 * Creates a MetricCard component
 * 
 * MetricCard composes Card internally and provides consistent
 * layout for displaying metric values with optional label,
 * meta text, and footer.
 * 
 * @example
 * // Simple metric
 * const metric = createMetricCard({
 *   value: '$1,234,567'
 * });
 * 
 * @example
 * // Metric with label and meta
 * const metric = createMetricCard({
 *   label: 'Revenue',
 *   value: '$1,234,567',
 *   meta: '+12.5% from last month'
 * });
 */
export function createMetricCard(props: MetricCardProps): HTMLElement {
  const {
    label,
    value,
    meta,
    footer,
    dense = false,
    withBorder = true,
  } = props;

  // Create internal content layout
  const content = document.createElement('div');
  content.className = 'lfx-metric-card__content';
  if (dense) {
    content.classList.add('lfx-metric-card__content--dense');
  }

  // Render label (optional)
  if (label) {
    const labelEl = document.createElement('p');
    labelEl.className = 'lfx-metric-card__label';
    labelEl.textContent = label;
    content.appendChild(labelEl);
  }

  // Render value (required)
  const valueEl = document.createElement('p');
  valueEl.className = 'lfx-metric-card__value';
  valueEl.textContent = String(value);
  content.appendChild(valueEl);

  // Render meta (optional)
  if (meta) {
    const metaEl = document.createElement('p');
    metaEl.className = 'lfx-metric-card__meta';
    metaEl.textContent = meta;
    content.appendChild(metaEl);
  }

  // Render footer (optional)
  if (footer) {
    const footerEl = document.createElement('div');
    footerEl.className = 'lfx-metric-card__footer';
    footerEl.appendChild(footer);
    content.appendChild(footerEl);
  }

  // Wrap in Card (composition)
  return createCard({
    children: content,
    dense,
    withBorder,
  });
}
