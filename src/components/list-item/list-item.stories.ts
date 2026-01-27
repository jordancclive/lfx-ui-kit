import type { Meta, StoryObj } from '@storybook/html';
import { createListItem, ListItemProps } from './list-item';

const meta: Meta<ListItemProps> = {
  title: '1. Components / 2. Molecules / 3. ListItem',
  tags: ['autodocs'],
  render: (args) => createListItem(args),
  parameters: {
    docs: {
      description: {
        component: `
## ListItem

**Tier 2 — Interactive Single Component**

ListItem represents a single row in a list. It can be selectable, hoverable, clickable, or static. Used in list views, menus, and simple collections.

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Background colors | Text color |
| Hover state | Typography |
| Selected state | Icons |
| Disabled state | Avatars |
| Bottom border | List layout |
| Padding | Selection logic |

### Non-Goals

- Does NOT own text color or typography
- Does NOT manage icons or avatars
- Does NOT manage list layout or grouping
- Does NOT implement selection logic (visual only)
- Does NOT manage keyboard navigation

### State Precedence

From highest to lowest priority:

1. **disabled** — Overrides all other states
2. **selected** — Overrides hover
3. **hover** — Only applies when clickable and not selected/disabled
4. **default** — Base state

### Token Bindings

| Property | Token |
|----------|-------|
| Background (default) | \`--color-list-item-background-default\` |
| Background (hover) | \`--color-list-item-background-hover\` |
| Background (selected) | \`--color-list-item-background-selected\` |
| Background (disabled) | \`--color-list-item-background-disabled\` |
| Border | \`--color-list-item-border\` |
| Padding | \`--spacing-12\` (vertical), \`--spacing-16\` (horizontal) |
        `,
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Visual selection state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - overrides all other states',
    },
    clickable: {
      control: 'boolean',
      description: 'Enable hover state and pointer cursor',
    },
  },
};

export default meta;
type Story = StoryObj<ListItemProps>;

// ========================================
// Helper to create sample content
// ========================================

function createSampleContent(text: string, subtitle?: string): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; gap: 2px;';

  const title = document.createElement('span');
  title.textContent = text;
  title.style.cssText = 'font-size: 14px; font-weight: 500; color: var(--text-primary);';
  container.appendChild(title);

  if (subtitle) {
    const sub = document.createElement('span');
    sub.textContent = subtitle;
    sub.style.cssText = 'font-size: 12px; color: var(--text-secondary);';
    container.appendChild(sub);
  }

  return container;
}

function createContentWithAvatar(name: string, description: string): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; align-items: center; gap: 12px;';

  // Avatar placeholder
  const avatar = document.createElement('div');
  avatar.style.cssText = `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--neutral-300);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-600);
  `;
  avatar.textContent = name.charAt(0).toUpperCase();
  container.appendChild(avatar);

  // Text content
  const textContainer = createSampleContent(name, description);
  container.appendChild(textContainer);

  return container;
}

// ========================================
// Basic States
// ========================================

export const Default: Story = {
  render: () => createListItem({
    children: createSampleContent('Default list item', 'This is a static item'),
  }),
};

export const Hover: Story = {
  render: () => {
    const item = createListItem({
      clickable: true,
      children: createSampleContent('Hover over me', 'Clickable items show hover state'),
    });
    // Force hover state for demo
    item.style.backgroundColor = 'var(--color-list-item-background-hover)';
    return item;
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover state only applies when `clickable` is true. This example shows the hover background color.',
      },
    },
  },
};

export const Selected: Story = {
  render: () => createListItem({
    selected: true,
    children: createSampleContent('Selected item', 'Selection overrides hover'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Selected state overrides hover. Selection is visual only — logic is managed by parent.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => createListItem({
    disabled: true,
    children: createSampleContent('Disabled item', 'Cannot be interacted with'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state overrides all other states including selected.',
      },
    },
  },
};

// ========================================
// Interaction Modes
// ========================================

export const Clickable: Story = {
  render: () => createListItem({
    clickable: true,
    children: createSampleContent('Clickable item', 'Hover to see background change'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Clickable items show hover state and pointer cursor.',
      },
    },
  },
};

export const Static: Story = {
  render: () => createListItem({
    children: createSampleContent('Static item', 'No hover or click interaction'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Static items have no hover state or pointer cursor.',
      },
    },
  },
};

// ========================================
// State Combinations
// ========================================

export const SelectedAndClickable: Story = {
  render: () => createListItem({
    selected: true,
    clickable: true,
    children: createSampleContent('Selected + Clickable', 'Selected overrides hover'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'When both selected and clickable, selected background takes precedence over hover.',
      },
    },
  },
};

export const DisabledAndSelected: Story = {
  render: () => createListItem({
    disabled: true,
    selected: true,
    children: createSampleContent('Disabled + Selected', 'Disabled overrides selected'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state overrides selected state.',
      },
    },
  },
};

// ========================================
// With Rich Content
// ========================================

export const WithAvatar: Story = {
  render: () => createListItem({
    clickable: true,
    children: createContentWithAvatar('John Doe', 'john.doe@example.com'),
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListItem with avatar content. **Note:** ListItem does not style the avatar — that is owned by the avatar component.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; align-items: center; gap: 12px;';

    // Icon placeholder
    const icon = document.createElement('span');
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
    </svg>`;
    icon.style.cssText = 'display: flex; color: var(--neutral-500);';
    container.appendChild(icon);

    // Text
    const text = createSampleContent('Item with icon', 'Icons are styled by their own component');
    container.appendChild(text);

    return createListItem({
      clickable: true,
      children: container,
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'ListItem with icon content. **Note:** ListItem does not style the icon — that is owned by the icon component.',
      },
    },
  },
};

// ========================================
// Multiple Items Demo
// ========================================

export const MultipleItems: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;';
    container.setAttribute('role', 'list');

    const items = [
      { name: 'Alice Johnson', email: 'alice@example.com', selected: false },
      { name: 'Bob Smith', email: 'bob@example.com', selected: true },
      { name: 'Charlie Brown', email: 'charlie@example.com', selected: false },
      { name: 'Diana Prince', email: 'diana@example.com', disabled: true },
      { name: 'Edward Norton', email: 'edward@example.com', selected: false },
    ];

    items.forEach((data, index) => {
      const item = createListItem({
        clickable: !data.disabled,
        selected: data.selected,
        disabled: data.disabled,
        children: createContentWithAvatar(data.name, data.email),
      });

      // Remove bottom border from last item
      if (index === items.length - 1) {
        item.style.borderBottom = 'none';
      }

      container.appendChild(item);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
Multiple list items demonstrating various states:
- Default clickable items
- One selected item (Bob Smith)
- One disabled item (Diana Prince)

**Note:** List container styling is NOT owned by ListItem. The border/radius wrapper is for demo purposes only.
        `,
      },
    },
  },
};

// ========================================
// All States Comparison
// ========================================

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';

    const states: Array<{ label: string; props: ListItemProps }> = [
      { label: 'Default (static)', props: {} },
      { label: 'Clickable', props: { clickable: true } },
      { label: 'Selected', props: { selected: true } },
      { label: 'Selected + Clickable', props: { selected: true, clickable: true } },
      { label: 'Disabled', props: { disabled: true } },
      { label: 'Disabled + Selected', props: { disabled: true, selected: true } },
    ];

    states.forEach(({ label, props }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'font-size: 12px; color: var(--neutral-500); padding-left: 4px;';
      labelEl.textContent = label;

      const itemWrapper = document.createElement('div');
      itemWrapper.style.cssText = 'border: 1px solid var(--neutral-200); border-radius: 8px; overflow: hidden;';

      const item = createListItem({
        ...props,
        children: createSampleContent('List item', 'Supporting text'),
      });
      item.style.borderBottom = 'none';

      itemWrapper.appendChild(item);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(itemWrapper);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all ListItem states showing the visual hierarchy.',
      },
    },
  },
};
