/**
 * Chart Default Configuration
 * 
 * Ported from Insights chart defaults.
 * Provides base ECharts options that establish the visual language
 * for all LFX charts: clean, minimal, data-focused.
 * 
 * These defaults handle:
 * - Grid padding and positioning
 * - Axis styling (hidden by default for sparklines)
 * - Tooltip styling
 * - Animation timing
 * - Text styling
 */

import type { EChartsOption } from 'echarts';
import { getChartColors } from './colors';

/**
 * Base chart defaults (ported from Insights)
 * All charts should merge these defaults with their specific configs
 */
export function getChartDefaults(): EChartsOption {
  const colors = getChartColors();

  return {
    // Color palette
    color: colors.series,

    // Background
    backgroundColor: colors.background,

    // Grid positioning (ported from Insights)
    grid: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 8,
      containLabel: false,
    },

    // Default axes (minimal styling)
    xAxis: {
      type: 'category' as const,
      show: false, // Hidden by default (sparkline style)
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
    } as any,

    yAxis: {
      type: 'value' as const,
      show: false, // Hidden by default (sparkline style)
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
    } as any,

    // Tooltip styling (Insights style: subtle, clean)
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      borderColor: colors.grid.line,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: {
        color: colors.text.primary,
        fontSize: 12,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: colors.grid.line,
          width: 1,
          type: 'solid',
        },
      },
    },

    // Animation settings (smooth but not slow)
    animation: true,
    animationDuration: 300,
    animationEasing: 'cubicOut',

    // Text style defaults
    textStyle: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      fontSize: 12,
      color: colors.text.primary,
    },
  };
}

/**
 * Merge user options with defaults
 * Deeply merges to preserve nested configurations
 */
export function mergeChartOptions(userOptions: EChartsOption): EChartsOption {
  const defaults = getChartDefaults();
  
  // Deep merge using ECharts' expected structure
  return {
    ...defaults,
    ...userOptions,
    grid: { ...defaults.grid, ...(userOptions.grid || {}) },
    xAxis: { ...(defaults.xAxis as any), ...(userOptions.xAxis || {}) } as any,
    yAxis: { ...(defaults.yAxis as any), ...(userOptions.yAxis || {}) } as any,
    tooltip: { ...defaults.tooltip, ...(userOptions.tooltip || {}) },
    textStyle: { ...defaults.textStyle, ...(userOptions.textStyle || {}) },
  };
}
