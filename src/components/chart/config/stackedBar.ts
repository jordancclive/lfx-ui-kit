/**
 * Stacked Bar Chart Configuration
 * 
 * Ported from Insights stacked bar chart patterns.
 * Used for composition visualizations: dependencies, distributions, breakdowns.
 * 
 * Visual characteristics from Insights:
 * - Bars are stacked (stack: 'total')
 * - Rounded corners ONLY on topmost stack segment
 * - Internal segments have square edges
 * - Legend reflects series order and colors
 * - Tooltip shows segment value, percentage, and total
 * 
 * Use cases (from Insights):
 * - Contributor dependency distribution
 * - Organization dependency breakdown
 * - Package dependency composition
 * - Security & best practices distributions
 */

import type { EChartsOption } from 'echarts';
import { getChartColors } from './colors';
import { mergeChartOptions } from './defaults';

export interface StackedBarSeries {
  /** Series name (shown in legend) */
  name: string;
  /** Data values for each category */
  data: number[];
  /** Optional custom color (overrides default palette) */
  color?: string;
}

export interface StackedBarOptions {
  /** Category labels */
  categories: string[];
  /** Series data (stacked in order provided) */
  series: StackedBarSeries[];
  /** Chart orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Status-based color override for all series */
  statusVariant?: 'neutral' | 'success' | 'warning' | 'danger';
  /** Show legend (default: true) */
  showLegend?: boolean;
}

/**
 * Creates a stacked bar chart option
 * 
 * Ported from Insights stacked bar pattern:
 * - Multiple series stacked on same axis
 * - Rounded corners on topmost segment only
 * - Square edges on internal segments
 * - Legend shows all series
 * - Tooltip aggregates and shows percentages
 * 
 * @param options - Stacked bar configuration
 * @returns ECharts option object
 * 
 * @example
 * ```ts
 * const option = createStackedBarOption({
 *   categories: ['Repo A', 'Repo B', 'Repo C'],
 *   series: [
 *     { name: 'Direct', data: [45, 30, 25] },
 *     { name: 'Transitive', data: [20, 15, 10] },
 *     { name: 'Dev', data: [10, 5, 8] },
 *   ],
 * });
 * ```
 */
export function createStackedBarOption(options: StackedBarOptions): EChartsOption {
  const colors = getChartColors();
  const {
    categories,
    series,
    orientation = 'vertical',
    statusVariant,
    showLegend = true,
  } = options;

  const isVertical = orientation === 'vertical';

  // Build series configs with stacking
  const seriesConfigs = series.map((s, index) => {
    // Determine if this is the last (topmost) series
    const isTopSeries = index === series.length - 1;

    // Use custom color, status color, or palette color
    let itemColor: string;
    if (s.color) {
      itemColor = s.color;
    } else if (statusVariant) {
      itemColor = getStatusColor(statusVariant);
    } else {
      itemColor = colors.series[index % colors.series.length];
    }

    return {
      name: s.name,
      type: 'bar',
      stack: 'total',
      data: s.data,
      itemStyle: {
        color: itemColor,
        // Rounded corners ONLY on topmost series
        borderRadius: isVertical
          ? isTopSeries ? [4, 4, 0, 0] : [0, 0, 0, 0]
          : isTopSeries ? [0, 4, 4, 0] : [0, 0, 0, 0],
      },
      barWidth: '60%',
      emphasis: {
        focus: 'series',
        itemStyle: {
          shadowBlur: 4,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
    };
  });

  const option: EChartsOption = {
    // Grid positioning
    grid: {
      left: isVertical ? 60 : 120,
      right: 20,
      top: showLegend ? 60 : 20,
      bottom: isVertical ? 60 : 40,
      containLabel: false,
    },

    // Legend
    ...(showLegend ? {
      legend: {
        show: true,
        top: 10,
        left: 'center',
        textStyle: {
          color: colors.text.primary,
          fontSize: 12,
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        },
        itemWidth: 14,
        itemHeight: 14,
      },
    } : {}),

    // X-axis configuration
    xAxis: isVertical ? {
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
    } as any : {
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

    // Y-axis configuration
    yAxis: isVertical ? {
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
    } as any : {
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

    // Series data
    series: seriesConfigs as any,

    // Tooltip with aggregation (Insights style)
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
        if (!Array.isArray(params) || params.length === 0) return '';

        const categoryName = params[0].name;
        
        // Calculate total for percentage
        const total = params.reduce((sum: number, item: any) => sum + (item.value || 0), 0);

        // Build tooltip content
        let content = `<strong>${categoryName}</strong><br/>`;
        
        params.forEach((item: any) => {
          const value = item.value || 0;
          const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
          const marker = item.marker || '';
          
          content += `${marker} ${item.seriesName}: <strong>${value}</strong> (${percentage}%)<br/>`;
        });

        content += `<div style="margin-top: 4px; padding-top: 4px; border-top: 1px solid ${colors.grid.line};">`;
        content += `Total: <strong>${total}</strong>`;
        content += `</div>`;

        return content;
      },
    },
  };

  // Merge with defaults
  return mergeChartOptions(option);
}

/**
 * Helper to get status color
 */
function getStatusColor(status: 'neutral' | 'success' | 'warning' | 'danger'): string {
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

/**
 * Helper to read CSS variable
 */
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
