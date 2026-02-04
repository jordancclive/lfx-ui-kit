/**
 * Metric Cluster Header Component
 * 
 * Tier 2 — Composition Pattern
 * 
 * Provides consistent header structure for metric carousels in dashboards.
 * Enforces fixed two-row layout: title + actions on row 1, filters + controls on row 2.
 * 
 * ## Ownership Boundaries
 * 
 * **MetricClusterHeader owns:**
 * - All header layout structure and spacing
 * - Filter pills container and layout
 * - Carousel controls container and layout
 * - Title typography and positioning
 * - Fixed two-row layout enforcement
 * 
 * **MetricClusterHeader does NOT own:**
 * - Individual filter pill content or behavior
 * - Action button content or behavior
 * - Carousel navigation logic
 * - Carousel container itself
 * - Metric card content or styling
 * 
 * ## Layout Contract
 * 
 * The component enforces this exact structure:
 * - **Row 1:** Section title (h2) left, actions (Ask LFX Lens) right
 * - **Row 2:** Filter pills left, carousel controls right
 * - No wrapping, fixed spacing, consistent alignment
 * 
 * ## When to Use
 * 
 * Use MetricClusterHeader when:
 * - Building metric carousel sections in dashboards
 * - You need consistent title + filter + control layout
 * - You want to enforce the dashboard header pattern
 * 
 * ## When NOT to Use
 * 
 * Do NOT use MetricClusterHeader for:
 * - Regular page section headers (use h2 + button pattern)
 * - Table section headers (use Card header slot)
 * - Navigation or menu headers
 * - Headers without metric carousels
 */

export interface MetricClusterHeaderProps {
  /** Section title text */
  title: string;
  /** Filter pill elements (raw Tag elements only, no containers) */
  filters: HTMLElement[];
  /** Optional actions element (e.g. Ask LFX Lens button) */
  actions?: HTMLElement;
  /** Optional carousel control elements (e.g. arrow buttons, raw, no containers) */
  controls?: HTMLElement[];
}

/**
 * Creates a standardized filter pill shell container
 * 
 * INTERNAL UTILITY - NOT EXPORTED
 * 
 * Enforces consistent filter pill layout behavior across all metric clusters.
 * Prevents pills from wrapping or drifting across different viewport sizes.
 * 
 * Enforces:
 * - Horizontal flex layout with no wrapping
 * - Fixed gap between pills (8px)
 * - Center-aligned pills
 * - Hidden overflow to prevent layout drift
 * 
 * @param pills - Array of filter pill elements (typically Tag components)
 * @returns Container element with standardized filter shell layout
 */
function createMetricFilterShell(pills: HTMLElement[]): HTMLElement {
  const shell = document.createElement('div');
  shell.style.display = 'flex';
  shell.style.flexWrap = 'nowrap';
  shell.style.gap = 'var(--spacing-8)';
  shell.style.alignItems = 'center';
  shell.style.overflow = 'hidden';
  
  pills.forEach(pill => {
    shell.appendChild(pill);
  });
  
  return shell;
}

/**
 * Creates a Metric Cluster Header component
 * 
 * Enforces consistent header layout across all metric carousel sections.
 * Accepts raw filter pills and control buttons, applies all layout styling internally.
 * 
 * The component owns the complete header structure and will not allow consumers
 * to override layout behavior. This ensures visual consistency across all dashboards.
 * 
 * @example
 * // Correct usage - pass raw elements
 * const header = createMetricClusterHeader({
 *   title: 'Foundation Health',
 *   filters: [pill1, pill2, pill3],
 *   actions: askLensButton,
 *   controls: [leftArrow, rightArrow]
 * });
 * 
 * @example
 * // WRONG - do not pre-wrap in containers
 * const filterContainer = document.createElement('div');
 * filterContainer.appendChild(pill1);
 * const header = createMetricClusterHeader({
 *   title: 'Foundation Health',
 *   filters: filterContainer, // ❌ WRONG - pass array of elements
 * });
 */
export function createMetricClusterHeader(props: MetricClusterHeaderProps): HTMLElement {
  const { title, filters, actions, controls } = props;

  // Main container - enforce fixed structure
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = 'var(--spacing-12)';

  // Row 1: Title + Actions (Ask LFX Lens)
  const titleRow = document.createElement('div');
  titleRow.style.display = 'flex';
  titleRow.style.alignItems = 'center';
  titleRow.style.justifyContent = 'space-between';
  titleRow.style.flexWrap = 'nowrap';

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  titleElement.style.fontSize = 'var(--ui-text-section-title-font-size)';
  titleElement.style.fontWeight = 'var(--ui-text-section-title-font-weight)';
  titleElement.style.color = 'var(--text-primary)';
  titleElement.style.margin = '0';
  titleElement.style.flexShrink = '0';

  titleRow.appendChild(titleElement);
  
  if (actions) {
    const actionsWrapper = document.createElement('div');
    actionsWrapper.style.display = 'flex';
    actionsWrapper.style.gap = 'var(--spacing-8)';
    actionsWrapper.style.flexShrink = '0';
    actionsWrapper.appendChild(actions);
    titleRow.appendChild(actionsWrapper);
  }

  container.appendChild(titleRow);

  // Row 2: Filters (left) + Carousel Controls (right)
  const controlsRow = document.createElement('div');
  controlsRow.style.display = 'flex';
  controlsRow.style.justifyContent = 'space-between';
  controlsRow.style.alignItems = 'center';
  controlsRow.style.flexWrap = 'nowrap';

  // Filters shell - standardized filter pill layout
  const filtersShell = createMetricFilterShell(filters);
  controlsRow.appendChild(filtersShell);

  // Controls container - owns all carousel control layout
  if (controls && controls.length > 0) {
    const controlsContainer = document.createElement('div');
    controlsContainer.style.display = 'flex';
    controlsContainer.style.gap = 'var(--spacing-8)';
    controlsContainer.style.alignItems = 'center';
    controlsContainer.style.flexShrink = '0';
    controlsContainer.style.flexWrap = 'nowrap';
    controls.forEach(control => {
      controlsContainer.appendChild(control);
    });
    controlsRow.appendChild(controlsContainer);
  }

  container.appendChild(controlsRow);

  return container;
}

// =============================================================================
// CAROUSEL UTILITIES (Re-exported for dashboard use)
// =============================================================================

/**
 * Metric carousel sizing constants
 * These values enforce consistent card dimensions and spacing across all carousels
 */
const METRIC_CARD_WIDTH = 280; // Fixed card width in pixels
const METRIC_CAROUSEL_GAP = 16; // Gap between cards (--spacing-16)

/**
 * Applies standardized carousel styling to a container element
 * 
 * Enforces:
 * - Horizontal flex layout with no wrapping
 * - Smooth horizontal scrolling
 * - Fixed gap between cards
 * - Hidden vertical overflow
 * 
 * @param container - The carousel container element to style
 */
function applyMetricCarouselStyle(container: HTMLElement): void {
  container.style.display = 'flex';
  container.style.flexWrap = 'nowrap';
  container.style.gap = 'var(--spacing-16)';
  container.style.overflowX = 'auto';
  container.style.overflowY = 'hidden';
  container.style.scrollbarWidth = 'thin';
  container.style.scrollBehavior = 'smooth';
}

/**
 * Applies fixed sizing to metric cards for carousel behavior
 * 
 * Enforces:
 * - Fixed width (280px) - cards cannot grow or shrink
 * - No wrapping - cards stay in single row
 * 
 * @param cards - Array of card elements to size
 */
function applyMetricCardSizing(cards: HTMLElement[]): void {
  cards.forEach(card => {
    card.style.minWidth = `${METRIC_CARD_WIDTH}px`;
    card.style.maxWidth = `${METRIC_CARD_WIDTH}px`;
    card.style.flex = '0 0 auto';
  });
}

/**
 * Calculates the scroll distance for carousel navigation
 * 
 * Returns the exact distance to scroll for one card + gap.
 * Used by arrow button onClick handlers.
 * 
 * @returns Scroll distance in pixels (card width + gap)
 */
function getCarouselScrollDistance(): number {
  return METRIC_CARD_WIDTH + METRIC_CAROUSEL_GAP;
}

/**
 * Creates a fully assembled metric carousel with cards and navigation
 * 
 * This helper centralizes all carousel assembly logic to eliminate duplication
 * across dashboard examples. It creates the container, applies all styles,
 * enforces card sizing, and wires arrow button navigation.
 * 
 * Enforces:
 * - Fixed card dimensions (280px)
 * - Horizontal scrolling with no wrapping
 * - Smooth scroll behavior
 * - Arrow buttons scroll exactly one card + gap
 * 
 * @param options - Configuration object
 * @param options.cards - Array of metric card elements to display
 * @param options.leftArrow - Left navigation button (will be wired automatically)
 * @param options.rightArrow - Right navigation button (will be wired automatically)
 * @returns Fully assembled and styled carousel container
 * 
 * @example
 * const carousel = createMetricCarousel({
 *   cards: [card1, card2, card3],
 *   leftArrow: leftButton,
 *   rightArrow: rightButton
 * });
 */
export function createMetricCarousel(options: {
  cards: HTMLElement[];
  leftArrow: HTMLElement;
  rightArrow: HTMLElement;
}): HTMLElement {
  const { cards, leftArrow, rightArrow } = options;

  // Apply fixed card sizing
  applyMetricCardSizing(cards);

  // Create carousel container
  const carousel = document.createElement('div');
  cards.forEach(card => carousel.appendChild(card));

  // Apply all carousel styles
  applyMetricCarouselStyle(carousel);

  // Wire arrow buttons with scroll behavior
  const scrollDistance = getCarouselScrollDistance();
  
  leftArrow.onclick = () => {
    carousel.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  };
  
  rightArrow.onclick = () => {
    carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  };

  return carousel;
}

// Export carousel utilities for use in dashboards
export { applyMetricCarouselStyle, applyMetricCardSizing, getCarouselScrollDistance };
