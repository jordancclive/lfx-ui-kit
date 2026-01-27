/**
 * Design System Orientation README - CSF Registration Wrapper
 * 
 * This file exists ONLY to register the README.mdx in the Storybook sidebar.
 * It does NOT render any content in Canvas.
 * All documentation content lives in README.mdx.
 * 
 * This follows Storybook best practices for docs-only entries.
 */

import type { Meta, StoryObj } from '@storybook/html';
import README from './README.mdx';

const meta: Meta = {
  title: '0. README',
  tags: [],
  parameters: {
    docs: {
      page: README,
      disable: false,
    },
    previewTabs: {
      'storybook/docs/panel': { index: 0 },
      canvas: { hidden: false },
    },
  },
};

export default meta;

type Story = StoryObj;

/**
 * Overview story - renders a simple placeholder in Canvas.
 * This entry is docs-only. Click the "Docs" tab to read the full orientation.
 */
export const Overview: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '3rem';
    container.style.textAlign = 'center';
    container.style.color = '#64748b';
    container.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    container.style.fontSize = '1rem';
    container.style.lineHeight = '1.6';
    
    const title = document.createElement('div');
    title.style.fontSize = '1.5rem';
    title.style.fontWeight = '600';
    title.style.marginBottom = '1rem';
    title.style.color = '#1e293b';
    title.textContent = '📚 Design System Orientation';
    
    const message = document.createElement('div');
    message.textContent = 'This is a docs-only entry. Click the "Docs" tab above to read the full orientation.';
    
    container.appendChild(title);
    container.appendChild(message);
    
    return container;
  },
};
