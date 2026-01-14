import type { Meta, StoryObj } from '@storybook/html';
import { createGlobalNav, createNavSection, createNavItem, GlobalNavProps } from './global-nav';

const meta: Meta<GlobalNavProps> = {
  title: 'Components/GlobalNav',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## GlobalNav

**Tier 3 — Composite Layout Component**

GlobalNav provides structural layout for application navigation. It renders vertical navigation sections with support for selected item highlighting.

### ⚠️ Important

**GlobalNav does NOT own icon or text styling.**

Those responsibilities belong to:
- **Nav items:** text styling, icon styling, click handling
- **Parent controller:** routing logic, activeItemId state management

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical layout structure | Text color or typography |
| Section spacing | Icon styling |
| Container background/border | Active/hover states of items |
| Selected item background | Routing logic |
| Padding and gaps | Focus management |

### Non-Goals

- Does NOT implement routing or URL management
- Does NOT style text or icons
- Does NOT manage keyboard navigation
- Does NOT implement collapsible sections
- Does NOT manage focus states
- Does NOT implement dropdown menus

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-nav-surface-background\` |
| Container border | \`--color-nav-surface-border\` |
| Selected item background | \`--color-nav-item-background-selected\` |
| Container radius | \`--radius-nav\` |
| Container padding | \`--spacing-nav-padding\` |
| Section gap | \`--spacing-nav-section-gap\` |
| Item gap | \`--spacing-nav-item-gap\` |

### Composition

GlobalNav expects:
- **Nav sections:** Containers grouping related nav items
- **Nav items:** Individual elements with \`data-nav-item-id\` attribute

Selection is controlled via the \`activeItemId\` prop.
        `,
      },
    },
  },
  argTypes: {
    activeItemId: {
      control: 'text',
      description: 'ID of currently selected nav item',
    },
    withBackground: {
      control: 'boolean',
      description: 'Apply container background',
    },
    withBorder: {
      control: 'boolean',
      description: 'Apply container border',
    },
    dense: {
      control: 'boolean',
      description: 'Reduced spacing mode',
    },
  },
};

export default meta;
type Story = StoryObj<GlobalNavProps>;

// ========================================
// Helper to create sample nav item content
// ========================================

function createNavItemContent(label: string, iconName?: string): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; align-items: center; gap: 12px; width: 100%;';

  // Icon placeholder (if provided)
  if (iconName) {
    const icon = document.createElement('div');
    icon.style.cssText = `
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: var(--neutral-300);
      flex-shrink: 0;
      color: var(--neutral-600);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 600;
    `;
    icon.textContent = iconName.charAt(0).toUpperCase();
    container.appendChild(icon);
  }

  // Text label
  const label_el = document.createElement('span');
  label_el.textContent = label;
  label_el.style.cssText = `
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
  `;
  container.appendChild(label_el);

  return container;
}

function createSampleNavItems() {
  return [
    createNavItem({ id: 'home', children: createNavItemContent('Home', '🏠') }),
    createNavItem({ id: 'projects', children: createNavItemContent('Projects', '📁') }),
    createNavItem({ id: 'team', children: createNavItemContent('Team', '👥') }),
    createNavItem({ id: 'settings', children: createNavItemContent('Settings', '⚙️') }),
  ];
}

// ========================================
// Basic States
// ========================================

export const Default: Story = {
  render: () => createGlobalNav({
    children: createNavSection(createSampleNavItems()),
  }),
};

export const SelectedItem: Story = {
  render: () => createGlobalNav({
    activeItemId: 'projects',
    children: createNavSection(createSampleNavItems()),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with selected item (Projects). The selected background is applied by matching `activeItemId` to `data-nav-item-id`.',
      },
    },
  },
};

export const WithBackground: Story = {
  render: () => createGlobalNav({
    withBackground: true,
    activeItemId: 'home',
    children: createNavSection(createSampleNavItems()),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with container background and padding.',
      },
    },
  },
};

export const WithBorder: Story = {
  render: () => createGlobalNav({
    withBorder: true,
    activeItemId: 'team',
    children: createNavSection(createSampleNavItems()),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Nav with container border.',
      },
    },
  },
};

export const Dense: Story = {
  render: () => createGlobalNav({
    withBorder: true,
    dense: true,
    activeItemId: 'settings',
    children: createNavSection(createSampleNavItems()),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced spacing.',
      },
    },
  },
};

// ========================================
// Multiple Sections
// ========================================

export const MultipleSections: Story = {
  render: () => {
    const primarySection = createNavSection([
      createNavItem({ id: 'home', children: createNavItemContent('Home', '🏠') }),
      createNavItem({ id: 'projects', children: createNavItemContent('Projects', '📁') }),
      createNavItem({ id: 'team', children: createNavItemContent('Team', '👥') }),
    ]);

    const secondarySection = createNavSection([
      createNavItem({ id: 'settings', children: createNavItemContent('Settings', '⚙️') }),
      createNavItem({ id: 'help', children: createNavItemContent('Help', '❓') }),
      createNavItem({ id: 'logout', children: createNavItemContent('Logout', '🚪') }),
    ]);

    return createGlobalNav({
      withBorder: true,
      activeItemId: 'projects',
      children: [primarySection, secondarySection],
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav with multiple sections. Sections are spaced using `--spacing-nav-section-gap`.',
      },
    },
  },
};

// ========================================
// In Context Example
// ========================================

export const InContext: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      gap: 24px;
      padding: 24px;
      background: var(--neutral-50);
      min-height: 400px;
    `;

    // Create nav
    const primaryNav = createNavSection([
      createNavItem({ id: 'dashboard', children: createNavItemContent('Dashboard', '📊') }),
      createNavItem({ id: 'analytics', children: createNavItemContent('Analytics', '📈') }),
      createNavItem({ id: 'reports', children: createNavItemContent('Reports', '📄') }),
      createNavItem({ id: 'users', children: createNavItemContent('Users', '👤') }),
    ]);

    const secondaryNav = createNavSection([
      createNavItem({ id: 'settings', children: createNavItemContent('Settings', '⚙️') }),
      createNavItem({ id: 'profile', children: createNavItemContent('Profile', '👤') }),
    ]);

    const nav = createGlobalNav({
      withBackground: true,
      withBorder: true,
      activeItemId: 'analytics',
      children: [primaryNav, secondaryNav],
    });
    nav.style.cssText = 'width: 240px; height: fit-content;';

    // Create main content area (placeholder)
    const content = document.createElement('div');
    content.style.cssText = `
      flex: 1;
      background: var(--color-white);
      border: 1px solid var(--neutral-200);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 14px;
    `;
    content.textContent = 'Main content area';

    container.appendChild(nav);
    container.appendChild(content);

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
In-context example showing GlobalNav in a typical application layout.

**Component ownership:**
- **GlobalNav:** Layout structure, selected background, container styling
- **Nav items:** Icon/text styling (placeholder icons shown here)
- **Parent:** Routing logic, activeItemId management (static in this demo)

**Note:** Icons in this example are styled inline for demonstration. In a real application, icons would be styled by their own components.
        `,
      },
    },
  },
};

// ========================================
// Without Icons
// ========================================

export const WithoutIcons: Story = {
  render: () => {
    const items = [
      createNavItem({ id: 'home', children: createNavItemContent('Home') }),
      createNavItem({ id: 'projects', children: createNavItemContent('Projects') }),
      createNavItem({ id: 'team', children: createNavItemContent('Team') }),
      createNavItem({ id: 'settings', children: createNavItemContent('Settings') }),
    ];

    return createGlobalNav({
      withBorder: true,
      activeItemId: 'projects',
      children: createNavSection(items),
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav without icons. GlobalNav does not require icons — it only provides layout.',
      },
    },
  },
};

// ========================================
// All Variants Comparison
// ========================================

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;';

    const variants: Array<{ label: string; props: Partial<GlobalNavProps> }> = [
      { label: 'Default', props: {} },
      { label: 'With Background', props: { withBackground: true } },
      { label: 'With Border', props: { withBorder: true } },
      { label: 'Background + Border', props: { withBackground: true, withBorder: true } },
      { label: 'Selected Item', props: { withBorder: true, activeItemId: 'projects' } },
      { label: 'Dense', props: { withBorder: true, dense: true, activeItemId: 'home' } },
    ];

    variants.forEach(({ label, props }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'font-size: 12px; font-weight: 600; color: var(--neutral-500);';
      labelEl.textContent = label;

      const nav = createGlobalNav({
        ...props,
        children: createNavSection([
          createNavItem({ id: 'home', children: createNavItemContent('Home', '🏠') }),
          createNavItem({ id: 'projects', children: createNavItemContent('Projects', '📁') }),
          createNavItem({ id: 'team', children: createNavItemContent('Team', '👥') }),
        ]),
      });

      wrapper.appendChild(labelEl);
      wrapper.appendChild(nav);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all GlobalNav variants.',
      },
    },
  },
};
