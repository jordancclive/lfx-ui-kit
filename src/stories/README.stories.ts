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
import ReadmeMDX from './README.mdx';

const meta: Meta = {
  title: '0. README / Design System Orientation',
  parameters: {
    docs: {
      page: ReadmeMDX,
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
 * Overview story - intentionally renders nothing in Canvas.
 * This entry is docs-only. Click the "Docs" tab to read the full orientation.
 */
export const Overview: Story = {
  render: () => {
    // Intentionally return null - this is a docs-only entry
    return null;
  },
};
