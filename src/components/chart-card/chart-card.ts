/**
 * ChartCard Component
 * 
 * Level 2 — Molecule
 * 
 * ChartCard is a minimal structural wrapper around Card that provides
 * named slots for the observed dashboard chart-card pattern.
 * 
 * It owns STRUCTURE ONLY:
 * - Header (title)
 * - Value slot (optional)
 * - Chart slot (optional)
 * - Meta slot (optional)
 * - Click affordance
 * 
 * It does NOT own:
 * - Chart rendering
 * - Metric formatting
 * - Data fetching
 * - Drawer implementation
 * - Visual design opinions
 */

import { createCard } from '../card/card';

export interface ChartCardProps {
  /**
   * Chart card title (required).
   * Displayed at the top of the card.
   */
  title: string;

  /**
   * Optional primary value element.
   * Typically a large, prominent metric display.
   */
  value?: HTMLElement;

  /**
   * Optional chart element.
   * Contains the visual representation (sparkline, bar, etc.).
   */
  chart?: HTMLElement;

  /**
   * Optional metadata element.
   * Typically shows trend, delta, or timeframe information.
   */
  meta?: HTMLElement;

  /**
   * Optional click handler.
   * Default expectation: opens a right-side drawer for detail view.
   * 
   * Note: This component does NOT implement the drawer.
   * See: "0. README → Interaction Surfaces (Drawer vs Modal vs Page)"
   */
  onClick?: () => void;

  /**
   * Optional dense mode (inherited from Card).
   */
  dense?: boolean;
}

/**
 * Creates a ChartCard component.
 * 
 * ChartCard is a structural abstraction of the observed dashboard chart-card pattern.
 * It provides named slots without enforcing visual design or chart types.
 * 
 * @param props - ChartCard configuration
 * @returns HTMLElement - The rendered chart card
 * 
 * @example
 * ```ts
 * const chartCard = createChartCard({
 *   title: 'Active Contributors',
 *   value: createValueElement('1,234'),
 *   chart: createSparkline(data),
 *   meta: createMetaElement('+8.1% from last month'),
 *   onClick: () => openDrawer('contributor-details'),
 * });
 * ```
 */
export function createChartCard(props: ChartCardProps): HTMLElement {
  const {
    title,
    value,
    chart,
    meta,
    onClick,
    dense = false,
  } = props;

  // Build internal structure first
  const container = document.createElement('div');
  container.className = 'lfx-chart-card__container';

  // Header (title)
  const header = document.createElement('div');
  header.className = 'lfx-chart-card__header';
  header.textContent = title;
  container.appendChild(header);

  // Value slot (optional)
  if (value) {
    const valueWrapper = document.createElement('div');
    valueWrapper.className = 'lfx-chart-card__value';
    valueWrapper.appendChild(value);
    container.appendChild(valueWrapper);
  }

  // Chart slot (optional)
  if (chart) {
    const chartWrapper = document.createElement('div');
    chartWrapper.className = 'lfx-chart-card__chart';
    chartWrapper.appendChild(chart);
    container.appendChild(chartWrapper);
  }

  // Meta slot (optional)
  if (meta) {
    const metaWrapper = document.createElement('div');
    metaWrapper.className = 'lfx-chart-card__meta';
    metaWrapper.appendChild(meta);
    container.appendChild(metaWrapper);
  }

  // Create Card with container as children
  const card = createCard({ dense, children: container });
  card.classList.add('lfx-chart-card');

  // Add click handler and affordance if provided
  if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', onClick);
  }

  return card;
}
