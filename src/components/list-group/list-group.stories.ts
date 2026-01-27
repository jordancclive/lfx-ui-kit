import type { Meta, StoryObj } from '@storybook/html';
import { createListGroup, ListGroupProps } from './list-group';
import { createListItem } from '../list-item/list-item';

const meta: Meta<ListGroupProps> = {
  title: '1. Components / Level 3 / ListGroup',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## ListGroup

**Tier 3 — Composite Layout Component**

ListGroup provides structural layout for vertical lists. It composes ListItem components and optionally applies container-level background and border styling.

### ⚠️ Important

**ListGroup does NOT own interaction states.**

Those responsibilities belong to:
- **ListItem:** hover, selected, disabled backgrounds
- **Child components:** text styling, icons, avatars
- **Parent controller:** selection logic, keyboard navigation

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Vertical spacing | ListItem hover/selected/disabled states |
| Container background | Text color or typography |
| Container border | Icons or avatars |
| Container radius | Selection logic |
| Container padding | Keyboard navigation |

### Non-Goals

- Does NOT manage list item state
- Does NOT implement selection logic
- Does NOT style child ListItem content
- Does NOT manage list virtualization
- Does NOT manage keyboard interactions

### Token Bindings (Layout Only)

| Property | Token |
|----------|-------|
| Container background | \`--color-list-surface-background\` |
| Container border | \`--color-list-surface-border\` |
| Container radius | \`--radius-list\` |
| Padding (with background) | \`--spacing-4\` |

### Composition

ListGroup expects \`ListItem\` children. Each ListItem manages its own:
- Hover state (when clickable)
- Selected state
- Disabled state
        `,
      },
    },
  },
  argTypes: {
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
type Story = StoryObj<ListGroupProps>;

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

  const textContainer = createSampleContent(name, description);
  container.appendChild(textContainer);

  return container;
}

function createSimpleItems(count: number = 5): HTMLElement[] {
  const items = [
    'First item',
    'Second item',
    'Third item',
    'Fourth item',
    'Fifth item',
  ];

  return items.slice(0, count).map((text, index) => 
    createListItem({
      clickable: true,
      children: createSampleContent(text, `Description for item ${index + 1}`),
    })
  );
}

// ========================================
// Basic Container Variants
// ========================================

export const Default: Story = {
  render: () => createListGroup({
    children: createSimpleItems(4),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Default ListGroup with no background or border. Items are stacked vertically with their own bottom borders.',
      },
    },
  },
};

export const WithBackground: Story = {
  render: () => createListGroup({
    withBackground: true,
    children: createSimpleItems(4),
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with container background and padding.',
      },
    },
  },
};

export const WithBorder: Story = {
  render: () => createListGroup({
    withBorder: true,
    children: createSimpleItems(4),
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with container border and rounded corners.',
      },
    },
  },
};

export const WithBackgroundAndBorder: Story = {
  render: () => createListGroup({
    withBackground: true,
    withBorder: true,
    children: createSimpleItems(4),
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with both background and border for a card-like appearance.',
      },
    },
  },
};

export const Dense: Story = {
  render: () => createListGroup({
    withBackground: true,
    withBorder: true,
    dense: true,
    children: createSimpleItems(4),
  }),
  parameters: {
    docs: {
      description: {
        story: 'Dense variant with reduced padding.',
      },
    },
  },
};

// ========================================
// Composition Examples
// ========================================

export const WithListItems: Story = {
  render: () => {
    const items = [
      { name: 'Alice Johnson', email: 'alice@example.com' },
      { name: 'Bob Smith', email: 'bob@example.com' },
      { name: 'Charlie Brown', email: 'charlie@example.com' },
      { name: 'Diana Prince', email: 'diana@example.com' },
    ].map(data => createListItem({
      clickable: true,
      children: createContentWithAvatar(data.name, data.email),
    }));

    return createListGroup({
      withBorder: true,
      children: items,
    });
  },
  parameters: {
    docs: {
      description: {
        story: `
ListGroup composing ListItem components with rich content.

**Ownership:**
- ListGroup → container border/radius
- ListItem → hover background, bottom borders
- Content → text styling, avatar styling
        `,
      },
    },
  },
};

export const DisabledItems: Story = {
  render: () => {
    const items = [
      { name: 'Active User', email: 'active@example.com', disabled: false },
      { name: 'Disabled User', email: 'disabled@example.com', disabled: true },
      { name: 'Another Active', email: 'another@example.com', disabled: false },
      { name: 'Also Disabled', email: 'also@example.com', disabled: true },
    ].map(data => createListItem({
      clickable: !data.disabled,
      disabled: data.disabled,
      children: createContentWithAvatar(data.name, data.email),
    }));

    return createListGroup({
      withBorder: true,
      children: items,
    });
  },
  parameters: {
    docs: {
      description: {
        story: `
ListGroup with disabled items. 

**Important:** Disabled styling is owned by ListItem, not ListGroup.
        `,
      },
    },
  },
};

export const MixedStates: Story = {
  render: () => {
    const items = [
      { name: 'Regular Item', email: 'regular@example.com', selected: false, disabled: false },
      { name: 'Selected Item', email: 'selected@example.com', selected: true, disabled: false },
      { name: 'Another Regular', email: 'another@example.com', selected: false, disabled: false },
      { name: 'Disabled Item', email: 'disabled@example.com', selected: false, disabled: true },
      { name: 'Selected + Disabled', email: 'both@example.com', selected: true, disabled: true },
    ].map(data => createListItem({
      clickable: !data.disabled,
      selected: data.selected,
      disabled: data.disabled,
      children: createContentWithAvatar(data.name, data.email),
    }));

    return createListGroup({
      withBorder: true,
      children: items,
    });
  },
  parameters: {
    docs: {
      description: {
        story: `
ListGroup showing mixed states: regular, selected, and disabled items.

**State ownership:**
- Selected background → ListItem
- Disabled styling → ListItem
- Container border → ListGroup

ListGroup does NOT control or know about these states.
        `,
      },
    },
  },
};

// ========================================
// Empty and Edge Cases
// ========================================

export const SingleItem: Story = {
  render: () => createListGroup({
    withBorder: true,
    children: createListItem({
      clickable: true,
      children: createSampleContent('Only item', 'This is the only item in the list'),
    }),
  }),
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with a single item.',
      },
    },
  },
};

export const ManyItems: Story = {
  render: () => {
    const items = Array.from({ length: 10 }, (_, i) => 
      createListItem({
        clickable: true,
        children: createSampleContent(`Item ${i + 1}`, `Description for item ${i + 1}`),
      })
    );

    return createListGroup({
      withBorder: true,
      children: items,
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'ListGroup with many items. Note: ListGroup does not implement virtualization.',
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
    container.style.cssText = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;';

    const variants: Array<{ label: string; props: Partial<ListGroupProps> }> = [
      { label: 'Default', props: {} },
      { label: 'With Background', props: { withBackground: true } },
      { label: 'With Border', props: { withBorder: true } },
      { label: 'Background + Border', props: { withBackground: true, withBorder: true } },
      { label: 'Dense', props: { dense: true, withBorder: true } },
      { label: 'Dense + Background', props: { dense: true, withBackground: true, withBorder: true } },
    ];

    variants.forEach(({ label, props }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'font-size: 12px; font-weight: 600; color: var(--neutral-500);';
      labelEl.textContent = label;

      const group = createListGroup({
        ...props,
        children: createSimpleItems(3),
      });

      wrapper.appendChild(labelEl);
      wrapper.appendChild(group);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all ListGroup variants.',
      },
    },
  },
};
