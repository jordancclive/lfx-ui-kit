import type { Meta, StoryObj } from '@storybook/html';
import README from './README.mdx';

const meta: Meta = {
  title: '0. README',
  tags: [],
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

/**
 * This story exists ONLY to satisfy Storybook routing.
 * It intentionally renders nothing.
 * All content lives in the Docs tab via README.mdx.
 */
export const Overview: StoryObj = {
  render: () => null,
};
