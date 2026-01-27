import './tag.css';

/**
 * Tag Component Props
 * 
 * Tag is a stateless, non-interactive visual component for categorical data display.
 */
export interface TagProps {
  /**
   * Tag content (typically categorical text like "Working Group", "Active", "Open Source")
   */
  children: string | HTMLElement;
}

/**
 * Creates a Tag component.
 * 
 * Tag displays categorical information in a compact, non-interactive visual form.
 * It is used for visual grouping and clarity, not for interaction or status indication.
 * 
 * @example
 * // Simple text tag
 * const tag = createTag({ children: 'Working Group' });
 * 
 * @example
 * // Inside a table cell
 * createTableCell({
 *   children: createTag({ children: 'Open Source' }),
 *   contentType: 'secondary'
 * });
 * 
 * @example
 * // Multiple tags
 * const tags = ['Security', 'Cloud Native'].map(label =>
 *   createTag({ children: label })
 * );
 */
export function createTag(props: TagProps): HTMLElement {
  const { children } = props;

  const tag = document.createElement('span');
  tag.className = 'lfx-tag';

  if (typeof children === 'string') {
    tag.textContent = children;
  } else {
    tag.appendChild(children);
  }

  return tag;
}
