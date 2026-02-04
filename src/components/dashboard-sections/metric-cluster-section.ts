/**
 * Metric Cluster Section Factory
 * 
 * Tier 3 — Dashboard Section Pattern
 * 
 * Creates a fully assembled metric cluster section for dashboards.
 * Consolidates the repeated structure: PageSection → Header → Carousel.
 * 
 * ## Purpose
 * 
 * This factory eliminates duplication across dashboard examples by
 * owning the complete assembly logic for metric cluster sections.
 * 
 * ## Ownership
 * 
 * **This factory owns:**
 * - Section container structure
 * - Header + carousel assembly order
 * - Spacing between header and carousel
 * 
 * **This factory does NOT own:**
 * - Individual metric card content
 * - Filter pill behavior
 * - Ask LFX Lens click handling
 * - Arrow button click handling (delegated to carousel)
 * 
 * ## Usage
 * 
 * Dashboards pass ONLY content:
 * - Metric cards (already created)
 * - Filter pills (already created)
 * - Ask LFX Lens context string
 * 
 * The factory handles all assembly and layout internally.
 */

import { createMetricClusterHeader } from '../metric-cluster-header/metric-cluster-header';
import { createMetricCarousel } from '../metric-cluster-header/metric-cluster-header';
import { createButton } from '../button/button';
import { createAskLfxLensTrigger } from '../ask-lfx-lens/ask-lfx-lens';

export interface MetricClusterSectionProps {
  /** Section title (e.g. "Foundation Health") */
  title: string;
  
  /** Pre-created metric cards to display in carousel */
  metrics: HTMLElement[];
  
  /** Pre-created filter pill elements */
  filters: HTMLElement[];
  
  /** Context string for Ask LFX Lens (e.g. "Foundation Health") */
  askLensContext: string;
  
  /** Optional click handler for Ask LFX Lens button */
  onAskLensClick?: () => void;
}

/**
 * Creates a fully assembled metric cluster section
 * 
 * This factory consolidates the repeated pattern used across dashboard
 * examples for creating metric cluster sections with header and carousel.
 * 
 * @param props - Configuration for the metric cluster section
 * @returns HTMLElement containing the complete section structure
 * 
 * @example
 * ```typescript
 * // Dashboard usage - just pass content
 * const section = createMetricClusterSection({
 *   title: 'Foundation Health',
 *   metrics: [card1, card2, card3],
 *   filters: [pill1, pill2, pill3],
 *   askLensContext: 'Foundation Health',
 *   onAskLensClick: () => console.log('Open Ask LFX Lens'),
 * });
 * ```
 */
export function createMetricClusterSection(props: MetricClusterSectionProps): HTMLElement {
  const { title, metrics, filters, askLensContext, onAskLensClick } = props;

  // Create Ask LFX Lens button
  const askLensButton = createAskLfxLensTrigger({
    context: askLensContext,
    onClick: onAskLensClick || (() => console.log(`Open Ask LFX Lens for ${askLensContext}`)),
  });

  // Create arrow controls (raw elements, no container)
  // Note: onClick handlers will be wired by createMetricCarousel
  const leftArrow = createButton({
    label: '←',
    variant: 'secondary',
    size: 'small',
  });

  const rightArrow = createButton({
    label: '→',
    variant: 'secondary',
    size: 'small',
  });

  // Create header - MetricClusterHeader owns all layout
  const header = createMetricClusterHeader({
    title,
    filters,
    actions: askLensButton,
    controls: [leftArrow, rightArrow],
  });

  // Create fully assembled carousel with cards and navigation
  const carousel = createMetricCarousel({
    cards: metrics,
    leftArrow,
    rightArrow,
  });

  // Create container and assemble
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = 'var(--spacing-16)';

  container.appendChild(header);
  container.appendChild(carousel);

  return container;
}
