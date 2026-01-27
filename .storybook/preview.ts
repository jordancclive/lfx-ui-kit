import type { Preview } from '@storybook/html';
import '../src/styles/tokens.css';
import '../src/styles/components.css';

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
            '1. Atoms',
            '2. Molecules',
            '3. Organisms',
          ],
          '2. Page Patterns',
          [
            '1. Dashboard',
            '2. Segmented Table Page',
            '3. Table Page',
          ],
          '3. Page Examples',
        ],
      },
    },
  },
};

export default preview;
