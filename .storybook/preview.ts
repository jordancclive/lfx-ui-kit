import type { Preview } from '@storybook/html';
import '../src/styles/tokens.css';

const customViewports = {
  macbookAir: {
    name: 'MacBook Air',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop' as const,
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#0f172b' },
      ],
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'macbookAir',
    },
    options: {
      storySort: {
        order: [
          '0. README',
          '1. Components',
          [
            '1. Level 1',
            '2. Level 2',
            '3. Level 3',
          ],
          '2. Page Patterns',
          '3. Page Examples',
        ],
      },
    },
  },
};

export default preview;
