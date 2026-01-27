import type { Meta, StoryObj } from '@storybook/html';
import { createAppShell, AppShellProps } from './app-shell';
import { createGlobalNav, createNavSection, createNavItem } from '../global-nav/global-nav';

const meta: Meta<AppShellProps> = {
  title: '1. Components / 3. Organisms / AppShell',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## AppShell

**Tier 3 — Composite Layout Component**

AppShell defines the high-level page layout for LFX One. It composes major regions (navigation, header, content, optional aside) and establishes spacing, scrolling, and containment rules.

### ⚠️ Important

**AppShell does NOT own styling of children.**

**AppShell does NOT implement routing.**

**AppShell does NOT manage navigation state.**

Those responsibilities belong to:
- **Child components:** own their own styling, interaction, and state
- **Parent application:** routing logic, data fetching, state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Page layout structure | Text styling |
| Region positioning | Icon styling |
| Container padding/gaps | GlobalNav logic |
| Scroll containment | ProjectSelector logic |
| | Routing or URL state |

### Non-Goals

- Does NOT implement routing
- Does NOT style child components
- Does NOT manage active navigation state
- Does NOT implement responsiveness beyond layout rules
- Does NOT implement animations or transitions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-app-shell-surface-background\` |
| Container border | \`--color-app-shell-surface-border\` |
| Container radius | \`--radius-app-shell\` |
| Container padding | \`--spacing-app-shell-padding\` |
| Region gap | \`--spacing-app-shell-region-gap\` |
| Nav width | \`--spacing-app-shell-nav-width\` |

### Composition

AppShell exposes named slots:
- **nav** (optional) — Navigation region
- **header** (optional) — Header region
- **content** (required) — Main content region
- **aside** (optional) — Aside region
        `,
      },
    },
  },
  argTypes: {
    withBorder: {
      control: 'boolean',
      description: 'Apply container border',
    },
    withBackground: {
      control: 'boolean',
      description: 'Apply surface background',
    },
    dense: {
      control: 'boolean',
      description: 'Reduced spacing mode',
    },
  },
};

export default meta;
type Story = StoryObj<AppShellProps>;

// ========================================
// Helper functions for demo content
// ========================================

function createNavItemContent(label: string, icon: string): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; align-items: center; gap: 12px;';

  const iconEl = document.createElement('span');
  iconEl.textContent = icon;
  iconEl.style.cssText = 'font-size: 18px;';
  container.appendChild(iconEl);

  const labelEl = document.createElement('span');
  labelEl.textContent = label;
  labelEl.style.cssText = 'font-size: 14px; font-weight: 500; color: var(--text-primary);';
  container.appendChild(labelEl);

  return container;
}

function createSampleNav(activeId: string = 'dashboard'): HTMLElement {
  const items = [
    createNavItem({ id: 'dashboard', children: createNavItemContent('Dashboard', '📊') }),
    createNavItem({ id: 'projects', children: createNavItemContent('Projects', '📁') }),
    createNavItem({ id: 'team', children: createNavItemContent('Team', '👥') }),
    createNavItem({ id: 'settings', children: createNavItemContent('Settings', '⚙️') }),
  ];

  return createGlobalNav({
    withBackground: true,
    activeItemId: activeId,
    children: createNavSection(items),
  });
}

function createSampleHeader(title: string = 'Application Header'): HTMLElement {
  const header = document.createElement('div');
  header.style.cssText = `
    padding: 16px 24px;
    background: var(--color-white);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const titleEl = document.createElement('h1');
  titleEl.textContent = title;
  titleEl.style.cssText = 'margin: 0; font-size: 20px; font-weight: 600; color: var(--text-primary);';
  header.appendChild(titleEl);

  const actionsEl = document.createElement('div');
  actionsEl.style.cssText = 'display: flex; gap: 12px;';
  actionsEl.innerHTML = '<span style="color: var(--text-secondary); font-size: 14px;">Actions</span>';
  header.appendChild(actionsEl);

  return header;
}

function createSampleContent(text: string = 'Main Content Area'): HTMLElement {
  const content = document.createElement('div');
  content.style.cssText = `
    padding: 24px;
    background: var(--color-white);
  `;

  const titleEl = document.createElement('h2');
  titleEl.textContent = text;
  titleEl.style.cssText = 'margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: var(--text-primary);';
  content.appendChild(titleEl);

  // Add some sample content
  for (let i = 0; i < 20; i++) {
    const para = document.createElement('p');
    para.textContent = `Sample paragraph ${i + 1}. This demonstrates scrollable content in the main region.`;
    para.style.cssText = 'margin: 0 0 12px 0; color: var(--text-secondary); line-height: 1.5;';
    content.appendChild(para);
  }

  return content;
}

function createSampleAside(title: string = 'Aside Panel'): HTMLElement {
  const aside = document.createElement('div');
  aside.style.cssText = `
    width: 280px;
    padding: 24px;
    background: var(--color-white);
    border-left: 1px solid var(--neutral-200);
  `;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.style.cssText = 'margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: var(--text-primary);';
  aside.appendChild(titleEl);

  const para = document.createElement('p');
  para.textContent = 'Aside content goes here. This might be a sidebar with additional information or actions.';
  para.style.cssText = 'margin: 0; color: var(--text-secondary); font-size: 14px; line-height: 1.5;';
  aside.appendChild(para);

  return aside;
}

// ========================================
// Basic Stories
// ========================================

export const Default: Story = {
  render: () => createAppShell({
    nav: createSampleNav(),
    content: createSampleContent(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Default AppShell with navigation and content regions.',
      },
    },
  },
};

export const WithHeader: Story = {
  render: () => createAppShell({
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with navigation, header, and content regions.',
      },
    },
  },
};

export const WithAside: Story = {
  render: () => createAppShell({
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
    aside: createSampleAside(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with all four regions: navigation, header, content, and aside.',
      },
    },
  },
};

export const WithBackground: Story = {
  render: () => createAppShell({
    withBackground: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with surface background applied.',
      },
    },
  },
};

export const WithBorder: Story = {
  render: () => createAppShell({
    withBorder: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with container border applied.',
      },
    },
  },
};

export const Dense: Story = {
  render: () => createAppShell({
    dense: true,
    nav: createSampleNav(),
    header: createSampleHeader(),
    content: createSampleContent(),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced spacing between regions.',
      },
    },
  },
};

// ========================================
// Edge Cases
// ========================================

export const ContentOnly: Story = {
  render: () => createAppShell({
    content: createSampleContent('Content Only - No Navigation or Header'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell with only the content region (no nav or header).',
      },
    },
  },
};

export const NoNavigation: Story = {
  render: () => createAppShell({
    header: createSampleHeader('No Navigation'),
    content: createSampleContent('Content spans full width without navigation'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell without navigation. Content expands to fill the space.',
      },
    },
  },
};

export const NoHeader: Story = {
  render: () => createAppShell({
    nav: createSampleNav(),
    content: createSampleContent('Content without header'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'AppShell without header region.',
      },
    },
  },
};

// ========================================
// In Context Example
// ========================================

export const InContext: Story = {
  render: () => {
    // Create realistic navigation
    const primarySection = createNavSection([
      createNavItem({ id: 'home', children: createNavItemContent('Home', '🏠') }),
      createNavItem({ id: 'dashboard', children: createNavItemContent('Dashboard', '📊') }),
      createNavItem({ id: 'projects', children: createNavItemContent('Projects', '📁') }),
      createNavItem({ id: 'analytics', children: createNavItemContent('Analytics', '📈') }),
    ]);

    const secondarySection = createNavSection([
      createNavItem({ id: 'settings', children: createNavItemContent('Settings', '⚙️') }),
      createNavItem({ id: 'help', children: createNavItemContent('Help', '❓') }),
    ]);

    const nav = createGlobalNav({
      withBackground: true,
      activeItemId: 'dashboard',
      children: [primarySection, secondarySection],
    });

    // Create header with breadcrumb
    const header = document.createElement('div');
    header.style.cssText = `
      padding: 16px 24px;
      background: var(--color-white);
      border-bottom: 1px solid var(--neutral-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const breadcrumb = document.createElement('div');
    breadcrumb.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary);">
        <span style="color: var(--text-primary); font-weight: 600;">Dashboard</span>
        <span>/</span>
        <span>Overview</span>
      </div>
    `;
    header.appendChild(breadcrumb);

    const user = document.createElement('div');
    user.textContent = 'User Menu';
    user.style.cssText = 'font-size: 14px; color: var(--text-secondary);';
    header.appendChild(user);

    // Create content
    const content = document.createElement('div');
    content.style.cssText = 'padding: 24px; background: var(--neutral-50);';

    const title = document.createElement('h1');
    title.textContent = 'Dashboard Overview';
    title.style.cssText = 'margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: var(--text-primary);';
    content.appendChild(title);

    // Add cards grid
    const cardsGrid = document.createElement('div');
    cardsGrid.style.cssText = 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;';
    
    for (let i = 0; i < 6; i++) {
      const card = document.createElement('div');
      card.style.cssText = `
        padding: 20px;
        background: var(--color-white);
        border: 1px solid var(--neutral-200);
        border-radius: 8px;
      `;
      card.innerHTML = `
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: var(--text-primary);">Metric ${i + 1}</h3>
        <p style="margin: 0; font-size: 24px; font-weight: 700; color: var(--accent-600);">1,234</p>
      `;
      cardsGrid.appendChild(card);
    }
    content.appendChild(cardsGrid);

    return createAppShell({
      nav,
      header,
      content,
    });
  },
  parameters: {
    docs: {
      description: {
        story: `
In-context example showing a realistic application layout with GlobalNav, header with breadcrumb, and dashboard content.

**Component ownership:**
- **AppShell:** Page layout structure, region positioning, scroll behavior
- **GlobalNav:** Navigation styling, selected item highlight
- **Header:** Header content styling (breadcrumb, user menu)
- **Content:** Main content styling (cards, typography)

**Note:** AppShell does NOT style these children. It only provides the layout structure.
        `,
      },
    },
  },
};
