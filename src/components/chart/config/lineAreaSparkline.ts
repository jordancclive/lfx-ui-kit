/**
 * Line/Area Sparkline Configuration
 * 
 * Ported from Insights line/area chart configs.
 * Creates minimal sparkline charts suitable for dashboard cards.
 * 
 * Visual characteristics (from Insights):
 * - No axes or labels (pure visualization)
 * - Smooth curves
 * - Subtle area fill
 * - Clean line rendering
 * - Minimal padding
 */

import type { EChartsOption } from 'echarts';
import { getChartColors } from './colors';
import { mergeChartOptions } from './defaults';

export interface SparklineData {
  /** Data values */
  values: number[];
  /** Optional labels for tooltip (defaults to indices) */
  labels?: string[];
}

/**
 * Creates a line/area sparkline option
 * 
 * Ported from Insights sparkline pattern:
 * - Hidden axes
 * - Smooth line rendering
 * - Subtle area gradient
 * - Tooltip on hover
 * - No symbols by default
 * 
 * @param data - Sparkline data
 * @returns ECharts option object
 * 
 * @example
 * ```ts
 * const option = createSparklineOption({
 *   values: [10, 15, 13, 17, 21, 18, 22],
 * });
 * ```
 */
export function createSparklineOption(data: SparklineData): EChartsOption {
  const colors = getChartColors();
  const { values, labels } = data;

  // Use provided labels or generate indices
  const xAxisData = labels || values.map((_, i) => String(i));

  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: xAxisData,
      show: false,
      boundaryGap: false, // Start line at edge (Insights style)
    },

    yAxis: {
      type: 'value',
      show: false,
    },

    series: [
      {
        type: 'line',
        data: values,
        smooth: true, // Smooth curves (Insights style)
        symbol: 'none', // No data point symbols (clean sparkline)
        lineStyle: {
          width: 2,
          color: colors.primary,
        },
        areaStyle: {
          // Subtle gradient fill (Insights style)
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: colors.primaryArea, // Top: light fill
              },
              {
                offset: 1,
                color: 'rgba(0, 154, 255, 0.01)', // Bottom: nearly transparent
              },
            ],
          },
        },
        emphasis: {
          // Show symbol on hover
          focus: 'series',
          scale: true,
        },
      },
    ],

    // Tooltip configuration
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        if (Array.isArray(params) && params[0]) {
          const { name, value } = params[0];
          return `${name}<br/><strong>${value}</strong>`;
        }
        return '';
      },
    },
  };

  // Merge with defaults
  return mergeChartOptions(option);
}

/**
 * Creates a status-colored sparkline (success/warning/danger)
 * Useful for trend indicators with semantic meaning
 */
export function createStatusSparklineOption(
  data: SparklineData,
  status: 'success' | 'warning' | 'danger' | 'neutral' = 'neutral'
): EChartsOption {
  const option = createSparklineOption(data);
  const colors = getChartColors();
  
  // Override colors based on status
  let statusColor: string;
  let statusAreaColor: string;

  switch (status) {
    case 'success':
      statusColor = getCSSVar('--success-500');
      statusAreaColor = getCSSVar('--success-100');
      break;
    case 'warning':
      statusColor = getCSSVar('--warning-500');
      statusAreaColor = getCSSVar('--warning-100');
      break;
    case 'danger':
      statusColor = getCSSVar('--danger-500');
      statusAreaColor = getCSSVar('--danger-100');
      break;
    case 'neutral':
    default:
      statusColor = getCSSVar('--neutral-500');
      statusAreaColor = getCSSVar('--neutral-100');
  }

  // Update series colors
  if (option.series && Array.isArray(option.series) && option.series[0]) {
    const series = option.series[0] as any;
    series.lineStyle = { ...series.lineStyle, color: statusColor };
    series.areaStyle = {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: statusAreaColor },
          { offset: 1, color: 'rgba(0, 0, 0, 0.01)' },
        ],
      },
    };
  }

  return option;
}

/**
 * Helper to read CSS variable
 */
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
