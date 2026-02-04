import type { Meta, StoryObj } from '@storybook/html';
import { createMetricClusterHeader, MetricClusterHeaderProps } from './metric-cluster-header';
import { createTag } from '../tag/tag';
import { createButton } from '../button/button';

/**
 * **Tier 2 — Composition Pattern**
 * 
 * MetricClusterHeader provides consistent header structure for metric carousels.
 * It enforces a fixed two-row layout with title, filters, actions, and controls.
 * 
 * ## Purpose
 * 
 * This component standardizes the header layout above metric carousel sections
 * in dashboard examples. It ensures visual consistency and enforces the layout
 * contract defined in the Dashboard Visual Invariants document.
 * 
 * ## When to Use
 * 
 * Use MetricClusterHeader when:
 * - Building metric carousel sections in dashboards
 * - You need consistent title + filter + control layout
 * - You want to enforce the dashboard header pattern
 * - You're creating a MetricCluster section (as defined in the Dashboard Pattern)
 * 
 * ## When NOT to Use
 * 
 * Do NOT use MetricClusterHeader for:
 * - Regular page section headers — use h2 + button pattern instead
 * - Table section headers — use Card header slot instead
 * - Navigation or menu headers
 * - Headers without metric carousels below them
 * - Action Summary or Meeting Summary sections
 * 
 * ## Layout Contract
 * 
 * MetricClusterHeader enforces this exact structure:
 * - **Row 1:** Section title (h2) left, actions (Ask LFX Lens) right
 * - **Row 2:** Filter pills left, carousel controls right
 * - No wrapping, fixed spacing, consistent alignment
 * 
 * ## Ownership Boundaries
 * 
 * **MetricClusterHeader owns:**
 * - All header layout structure and spacing
 * - Filter pills container and layout
 * - Carousel controls container and layout
 * - Title typography and positioning
 * 
 * **MetricClusterHeader does NOT own:**
 * - Individual filter pill content or behavior
 * - Action button content or behavior
 * - Carousel navigation logic (wire arrow buttons externally)
 * - Carousel container itself
 * - Metric card content or styling
 * 
 * ## Important Notes
 * 
 * - **Does not manage carousel behavior:** Arrow buttons must be wired by the consumer
 * - **Does not create the carousel:** This is a header only, not a full MetricCluster
 * - **Enforces fixed layout:** Consumers cannot override the two-row structure
 * - **Pass raw elements:** Do not pre-wrap filters or controls in containers
 */
const meta: Meta<MetricClusterHeaderProps> = {
  title: '1. Components / 2. Molecules / Metric Cluster Header',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title text',
    },
  },
};

export default meta;
type Story = StoryObj<MetricClusterHeaderProps>;

/**
 * Default header with title, filters, and controls.
 * 
 * This demonstrates the complete header structure with all slots filled.
 * Note that arrow buttons are not wired in this static example.
 */
export const Default: Story = {
  render: () => {
    // Create filter pills
    const allPill = createTag({
      children: 'All',
      variant: 'info',
    });
    
    const contributorsPill = createTag({
      children: 'Contributors',
      variant: 'default',
    });
    
    const projectsPill = createTag({
      children: 'Projects',
      variant: 'default',
    });
    
    const eventsPill = createTag({
      children: 'Events',
      variant: 'default',
    });

    // Create Ask LFX Lens button
    const askLensButton = createButton({
      label: '💬 Ask LFX Lens',
      variant: 'secondary',
      size: 'small',
      onClick: () => alert('Ask LFX Lens clicked'),
    });

    // Create arrow buttons
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

    return createMetricClusterHeader({
      title: 'Foundation Health',
      filters: [allPill, contributorsPill, projectsPill, eventsPill],
      actions: askLensButton,
      controls: [leftArrow, rightArrow],
    });
  },
};

/**
 * Header with title and filters only (no actions or controls).
 * 
 * Use this variant when the metric carousel doesn't need Ask LFX Lens
 * or arrow navigation controls.
 */
export const FiltersOnly: Story = {
  render: () => {
    const allPill = createTag({
      children: 'All',
      variant: 'info',
    });
    
    const contributionsPill = createTag({
      children: 'Contributions',
      variant: 'default',
    });
    
    const eventsPill = createTag({
      children: 'Events',
      variant: 'default',
    });

    return createMetricClusterHeader({
      title: 'My Organization',
      filters: [allPill, contributionsPill, eventsPill],
    });
  },
};

/**
 * Header with title, actions, and controls (no filters).
 * 
 * Use this variant when filters are not needed, but Ask LFX Lens
 * and carousel navigation are required.
 */
export const ActionsAndControlsOnly: Story = {
  render: () => {
    const askLensButton = createButton({
      label: '💬 Ask LFX Lens',
      variant: 'secondary',
      size: 'small',
      onClick: () => alert('Ask LFX Lens clicked'),
    });

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

    // Create empty filter (required but visually hidden)
    const emptyFilter = document.createElement('div');

    return createMetricClusterHeader({
      title: 'Recent Progress',
      filters: [emptyFilter],
      actions: askLensButton,
      controls: [leftArrow, rightArrow],
    });
  },
};

/**
 * Minimal header with title only.
 * 
 * This is the absolute minimum configuration. Note that filters
 * are required by the API, so we pass an empty element.
 */
export const TitleOnly: Story = {
  render: () => {
    // Create empty filter (required by API)
    const emptyFilter = document.createElement('div');

    return createMetricClusterHeader({
      title: 'Metric Cluster Title',
      filters: [emptyFilter],
    });
  },
};

/**
 * Long title with many filters to demonstrate layout behavior.
 * 
 * Note that filters will not wrap - overflow will be hidden per
 * the visual invariants. This ensures consistent layout behavior.
 */
export const LongTitleManyFilters: Story = {
  render: () => {
    const pills = [
      'All',
      'Contributors',
      'Projects',
      'Events',
      'Education',
      'Certifications',
      'Mentorship',
    ].map(label =>
      createTag({
        children: label,
        variant: label === 'All' ? 'info' : 'default',
      })
    );

    const askLensButton = createButton({
      label: '💬 Ask LFX Lens',
      variant: 'secondary',
      size: 'small',
    });

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

    return createMetricClusterHeader({
      title: 'Organization Health and Governance Framework',
      filters: pills,
      actions: askLensButton,
      controls: [leftArrow, rightArrow],
    });
  },
};

/**
 * Multiple headers stacked to demonstrate consistency.
 * 
 * This shows how MetricClusterHeader maintains visual consistency
 * across multiple metric clusters within the same dashboard.
 */
export const MultipleHeaders: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--spacing-24)';
    container.style.background = 'var(--ui-surface-page)';
    container.style.padding = 'var(--spacing-24)';

    // Foundation Health header
    const foundationFilters = ['All', 'Contributors', 'Projects', 'Events'].map(label =>
      createTag({
        children: label,
        variant: label === 'All' ? 'info' : 'default',
      })
    );

    const foundationActions = createButton({
      label: '💬 Ask LFX Lens',
      variant: 'secondary',
      size: 'small',
    });

    const foundationControls = [
      createButton({ label: '←', variant: 'secondary', size: 'small' }),
      createButton({ label: '→', variant: 'secondary', size: 'small' }),
    ];

    const foundationHeader = createMetricClusterHeader({
      title: 'Foundation Health',
      filters: foundationFilters,
      actions: foundationActions,
      controls: foundationControls,
    });

    // My Organization header
    const orgFilters = ['All', 'Contributions', 'Events', 'Education'].map(label =>
      createTag({
        children: label,
        variant: label === 'All' ? 'info' : 'default',
      })
    );

    const orgActions = createButton({
      label: '💬 Ask LFX Lens',
      variant: 'secondary',
      size: 'small',
    });

    const orgControls = [
      createButton({ label: '←', variant: 'secondary', size: 'small' }),
      createButton({ label: '→', variant: 'secondary', size: 'small' }),
    ];

    const orgHeader = createMetricClusterHeader({
      title: 'My Organization',
      filters: orgFilters,
      actions: orgActions,
      controls: orgControls,
    });

    container.appendChild(foundationHeader);
    container.appendChild(orgHeader);

    return container;
  },
};
