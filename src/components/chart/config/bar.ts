/**
 * Bar Chart Configuration
 * 
 * Ported from Insights bar chart patterns.
 * Provides vertical and horizontal bar chart builders with visual parity.
 * 
 * NOTE: These configs mirror Insights defaults and should not diverge
 * without design review.
 */

import type { EChartsOption } from 'echarts';
import { getChartColors } from './colors';
import { mergeChartOptions } from './defaults';

export interface BarChartData {
  /** Category labels */
  categories: string[];
  /** Data values */
  values: number[];
  /** Optional custom color (overrides status) */
  color?: string;
  /** Enable stacked bar mode (for multi-series) */
  stacked?: boolean;
  /** Status-based color mapping */
  status?: 'neutral' | 'success' | 'warning' | 'danger';
}

/**
 * Gets status color or default
 */
function getBarColor(
  status?: 'neutral' | 'success' | 'warning' | 'danger',
  customColor?: string
): string {
  if (customColor) return customColor;

  const colors = getChartColors();
  
  switch (status) {
    case 'success':
      return getCSSVar('--success-500');
    case 'warning':
      return getCSSVar('--warning-500');
    case 'danger':
      return getCSSVar('--danger-500');
    case 'neutral':
    default:
      return colors.primary;
  }
}

/**
 * Creates a vertical bar chart option
 * 
 * Ported from Insights vertical bar pattern:
 * - Rounded bar corners (4px)
 * - Clean category axis
 * - Minimal value axis
 * - Generous padding
 * - No legend by default
 * 
 * Use cases:
 * - Top contributors
 * - Top projects
 * - Ranking visualizations
 * 
 * @param data - Bar chart data
 * @returns ECharts option object
 * 
 * @example
 * ```ts
 * const option = createVerticalBarChartOption({
 *   categories: ['Project A', 'Project B', 'Project C'],
 *   values: [150, 120, 90],
 *   status: 'success',
 * });
 * ```
 */
export function createVerticalBarChartOption(data: BarChartData): EChartsOption {
  const colors = getChartColors();
  const { categories, values, color, stacked = false, status } = data;

  const barColor = getBarColor(status, color);

  const option: EChartsOption = {
    // Grid positioning (Insights style: generous padding)
    grid: {
      left: 60,
      right: 20,
      top: stacked ? 40 : 20,
      bottom: 60,
      containLabel: false,
    },

    // X-axis (category)
    xAxis: {
      type: 'category' as const,
      data: categories,
      show: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors.grid.line,
          width: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: colors.text.secondary,
        fontSize: 11,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        interval: 0,
        rotate: categories.length > 6 ? 45 : 0,
      },
      splitLine: {
        show: false,
      },
    } as any,

    // Y-axis (value)
    yAxis: {
      type: 'value' as const,
      show: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: colors.text.muted,
        fontSize: 11,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.grid.splitLine,
          width: 1,
          type: 'solid',
        },
      },
    } as any,

    // Series configuration
    series: [
      {
        type: 'bar',
        data: values,
        itemStyle: {
          color: barColor,
          borderRadius: [4, 4, 0, 0], // Rounded top corners (Insights style)
        },
        barWidth: '60%',
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 4,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        ...(stacked ? { stack: 'total' } : {}),
      },
    ],

    // Legend (only if stacked)
    ...(stacked ? {
      legend: {
        show: true,
        top: 0,
        left: 'center',
        textStyle: {
          color: colors.text.primary,
          fontSize: 12,
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
      },
    } : {}),

    // Tooltip configuration
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      borderColor: colors.grid.line,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: {
        color: colors.text.primary,
        fontSize: 12,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      formatter: (params: any) => {
        if (Array.isArray(params) && params[0]) {
          const { name, value } = params[0];
          return `<strong>${name}</strong><br/>${value}`;
        }
        return '';
      },
    },
  };

  // Merge with defaults
  return mergeChartOptions(option);
}

/**
 * Creates a horizontal bar chart option
 * 
 * Ported from Insights horizontal bar pattern:
 * - Rounded bar corners (4px)
 * - Category axis on left
 * - Value axis on bottom
 * - Better for long labels
 * 
 * Use cases:
 * - Dependency distribution
 * - Package usage
 * - Horizontal rankings
 * 
 * @param data - Bar chart data
 * @returns ECharts option object
 * 
 * @example
 * ```ts
 * const option = createHorizontalBarChartOption({
 *   categories: ['React', 'Vue', 'Angular', 'Svelte'],
 *   values: [450, 280, 190, 120],
 * });
 * ```
 */
export function createHorizontalBarChartOption(data: BarChartData): EChartsOption {
  const colors = getChartColors();
  const { categories, values, color, stacked = false, status } = data;

  const barColor = getBarColor(status, color);

  const option: EChartsOption = {
    // Grid positioning (Insights style: generous left padding for labels)
    grid: {
      left: 120,
      right: 20,
      top: stacked ? 40 : 20,
      bottom: 40,
      containLabel: false,
    },

    // X-axis (value)
    xAxis: {
      type: 'value' as const,
      show: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: colors.text.muted,
        fontSize: 11,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.grid.splitLine,
          width: 1,
          type: 'solid',
        },
      },
    } as any,

    // Y-axis (category)
    yAxis: {
      type: 'category' as const,
      data: categories,
      show: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors.grid.line,
          width: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: colors.text.secondary,
        fontSize: 11,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      splitLine: {
        show: false,
      },
    } as any,

    // Series configuration
    series: [
      {
        type: 'bar',
        data: values,
        itemStyle: {
          color: barColor,
          borderRadius: [0, 4, 4, 0], // Rounded right corners (Insights style)
        },
        barWidth: '60%',
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 4,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        ...(stacked ? { stack: 'total' } : {}),
      },
    ],

    // Legend (only if stacked)
    ...(stacked ? {
      legend: {
        show: true,
        top: 0,
        left: 'center',
        textStyle: {
          color: colors.text.primary,
          fontSize: 12,
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
      },
    } : {}),

    // Tooltip configuration
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      borderColor: colors.grid.line,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: {
        color: colors.text.primary,
        fontSize: 12,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      formatter: (params: any) => {
        if (Array.isArray(params) && params[0]) {
          const { name, value } = params[0];
          return `<strong>${name}</strong><br/>${value}`;
        }
        return '';
      },
    },
  };

  // Merge with defaults
  return mergeChartOptions(option);
}

/**
 * Helper to read CSS variable
 */
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
