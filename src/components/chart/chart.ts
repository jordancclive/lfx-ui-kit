/**
 * Chart Component
 * 
 * Level 2 — Molecule
 * 
 * Minimal, non-opinionated ECharts wrapper for the LFX UI Kit.
 * Provides lifecycle management (init, resize, dispose) without
 * imposing chart-specific opinions.
 * 
 * Owns:
 * - Container rendering
 * - ECharts instance initialization
 * - Resize handling (ResizeObserver)
 * - Cleanup on disposal
 * 
 * Does NOT own:
 * - Chart configuration/options (consumer decides)
 * - Hover/click behavior (consumer decides)
 * - Data fetching
 * - Visual styling (use config helpers)
 */

import * as echarts from 'echarts/core';
import type { EChartsOption } from 'echarts';

// Import required ECharts components (tree-shaken)
// Ported from Insights setup/echarts.ts pattern
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Register components
echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer,
]);

import './chart.css';

export interface ChartProps {
  /** ECharts option object */
  option: EChartsOption;
  /** Chart height (default: 120) */
  height?: number | string;
  /** Chart width (default: '100%') */
  width?: number | string;
  /** Optional class name */
  className?: string;
}

/**
 * Creates a Chart component
 * 
 * Minimal ECharts wrapper with lifecycle management.
 * Consumer provides the full ECharts option object.
 * 
 * The chart automatically:
 * - Initializes on mount (via requestAnimationFrame)
 * - Responds to container resize (ResizeObserver)
 * - Cleans up on removal (dispose)
 * 
 * @param props - Chart configuration
 * @returns HTMLElement - The chart container
 * 
 * @example
 * ```ts
 * import { createChart } from './chart';
 * import { createSparklineOption } from './config/lineAreaSparkline';
 * 
 * const chart = createChart({
 *   option: createSparklineOption({ values: [10, 15, 13, 17, 21] }),
 *   height: 120,
 * });
 * ```
 */
export function createChart(props: ChartProps): HTMLElement {
  const {
    option,
    height = 120,
    width = '100%',
    className = '',
  } = props;

  // Create container
  const container = document.createElement('div');
  container.className = `lfx-chart ${className}`.trim();

  // Apply dimensions
  container.style.height = typeof height === 'number' ? `${height}px` : height;
  container.style.width = typeof width === 'number' ? `${width}px` : width;

  // Store chart instance reference
  let chartInstance: echarts.ECharts | null = null;
  let resizeObserver: ResizeObserver | null = null;

  // Initialize chart (deferred to next frame for DOM readiness)
  requestAnimationFrame(() => {
    // Initialize ECharts instance
    chartInstance = echarts.init(container, undefined, {
      renderer: 'canvas',
    });

    // Set option with notMerge for clean initial render
    if (chartInstance) {
      chartInstance.setOption(option, {
        notMerge: true,
        lazyUpdate: true,
      });

      // Setup resize observer for responsive behavior
      resizeObserver = new ResizeObserver(() => {
        if (chartInstance) {
          chartInstance.resize();
        }
      });

      resizeObserver.observe(container);
    }
  });

  // Store cleanup function on element for consumer access
  (container as any).__chartCleanup = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
  };

  // Store instance accessor for advanced use cases
  (container as any).__chartInstance = () => chartInstance;

  return container;
}

/**
 * Updates an existing chart's option
 * Useful for data refreshes without recreating the component
 * 
 * @param container - Chart container element
 * @param option - New ECharts option
 * @param notMerge - Whether to merge with existing option (default: false)
 */
export function updateChart(
  container: HTMLElement,
  option: EChartsOption,
  notMerge = false
): void {
  const getInstance = (container as any).__chartInstance;
  if (getInstance) {
    const instance = getInstance();
    if (instance) {
      instance.setOption(option, { notMerge, lazyUpdate: true });
    }
  }
}

/**
 * Disposes a chart instance and cleans up resources
 * Call this when removing the chart from the DOM
 * 
 * @param container - Chart container element
 */
export function disposeChart(container: HTMLElement): void {
  const cleanup = (container as any).__chartCleanup;
  if (cleanup) {
    cleanup();
  }
}
