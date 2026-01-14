/**
 * LFX One UI Kit - TabsGroup Component
 * 
 * Layout and state coordinator only.
 * Does NOT apply visual styles to TabItem - colors and visual states are owned by TabItem.
 */

import './tabs-group.css';
import { createTabItem } from '../tab-item/tab-item';

export interface TabsGroupTab {
  /** Unique identifier for the tab */
  id: string;
  /** Tab label text */
  label: string;
  /** Left icon (SVG string or HTML string) */
  icon?: string;
}

export interface TabsGroupProps {
  /** Array of tab definitions */
  tabs: TabsGroupTab[];
  /** ID of the currently selected tab */
  selectedId?: string;
  /** Size variant - propagated to all TabItem children */
  size?: 'default' | 'small';
  /** Disabled state - propagated to all TabItem children */
  disabled?: boolean;
  /** Show neutral surface background (pill-style group) */
  withBackground?: boolean;
  /** Prevent wrapping */
  noWrap?: boolean;
  /** Callback when a tab is selected */
  onSelect?: (id: string) => void;
}

/**
 * Creates a TabsGroup element
 * 
 * Responsibilities:
 * - Render TabItem children
 * - Pass selected=true to the active tab
 * - Pass disabled=true to tabs when group is disabled
 * - Support size propagation
 * - Layout coordination only
 */
export const createTabsGroup = ({
  tabs,
  selectedId,
  size = 'default',
  disabled = false,
  withBackground = false,
  noWrap = false,
  onSelect,
}: TabsGroupProps): HTMLDivElement => {
  const container = document.createElement('div');
  
  // Build class list
  const classes = ['lfx-tabs-group'];
  
  if (withBackground) {
    classes.push('lfx-tabs-group--with-background');
  }
  
  if (noWrap) {
    classes.push('lfx-tabs-group--no-wrap');
  }
  
  container.className = classes.join(' ');
  container.setAttribute('role', 'tablist');
  
  // Create TabItem children
  tabs.forEach((tab) => {
    const isSelected = tab.id === selectedId;
    
    const tabItem = createTabItem({
      label: tab.label,
      icon: tab.icon,
      selected: isSelected,
      disabled: disabled,
      size: size,
      onClick: () => {
        if (!disabled && onSelect) {
          onSelect(tab.id);
        }
      },
    });
    
    // Add data attribute for identification
    tabItem.dataset.tabId = tab.id;
    
    container.appendChild(tabItem);
  });
  
  return container;
};
