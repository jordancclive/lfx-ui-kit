import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'README / How to Navigate This Storybook',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A quick reference for finding what you need.

---

## Purpose

This Storybook is a production reference that maps architectural intent.  
It shows how the LFX UI Kit is structured and how components, patterns, and pages relate.  
It is designed for both humans and AI agents working on the system.

**This is not a component gallery.**

---

## High-Level Navigation Map

### 1. Components

**Reusable building blocks.**

Organized by composition level:

- **1. Atoms** — Indivisible UI elements (Button, Tag, SearchInput)
- **2. Molecules** — Structured patterns (Card, TableRow, Chart)
- **3. Organisms** — Coordinated assemblies (DataTable, AppHeader, GlobalNav)

Components are sorted alphabetically within each level.

---

### 2. Page Patterns

**Canonical page-level blueprints.**

Define HOW pages are composed, not WHAT data they show.

**Examples:**
- Table Page (canonical workflow pattern)
- Segmented Table Page (tabs + tables)
- Dashboard (metrics + cards grid)
- Creation Flow Page (multi-step forms)

Page Patterns are sorted alphabetically.

✅ **These are meant to be copied and adapted.**

---

### 3. Page Examples

**Concrete instances of Page Patterns.**

Used to validate patterns against real product scenarios.

**Examples:**
- Surveys (uses Table Page)
- Votes (uses Table Page)
- Groups (uses Segmented Table Page)
- Drive (uses Table Page)

Page Examples are sorted alphabetically.

⚠️ **These are illustrative only — reference the pattern, not the example.**

---

## How to Find What You Need

- **"I need a reusable UI piece"** → Components
- **"I need to build a page correctly"** → Page Patterns
- **"I want to see a real example"** → Page Examples

---

## Important Rules

- **Components do not own layout beyond their scope.**  
  Layout is defined by patterns, not components.

- **Page Examples must not invent layout.**  
  They implement patterns exactly as defined.

- **If something feels off, fix components or patterns — not examples.**  
  Examples validate. They don't invent.

---

## Closing Note

If you are unsure where something belongs, start at Page Patterns.

---

_For deeper architectural context, see "0. README / Design System Orientation"._
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Navigation Quick Reference
 * 
 * This page provides a high-level map of the Storybook structure
 * to help you quickly find components, patterns, and examples.
 */
export const NavigationGuide: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      max-width: 800px;
      margin: 0 auto;
      padding: var(--spacing-24);
      font-family: var(--font-family);
      color: var(--text-primary);
    `;

    container.innerHTML = `
      <div style="
        background: var(--ui-surface-container);
        border: 1px solid var(--ui-surface-divider);
        border-radius: var(--ui-card-radius);
        padding: var(--spacing-16);
        margin-bottom: var(--spacing-24);
      ">
        <h3 style="
          margin: 0 0 var(--spacing-8) 0;
          font-size: var(--text-base);
          font-weight: var(--font-semibold);
          color: var(--text-primary);
        ">📍 Quick Navigation</h3>
        <p style="
          margin: 0;
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-text-sm);
        ">
          Use the sidebar to explore. Start with Components for building blocks,
          Page Patterns for page structure, or Page Examples to see real usage.
        </p>
      </div>

      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: var(--spacing-16);
      ">
        <div style="
          background: var(--ui-surface-container);
          border: 1px solid var(--ui-surface-divider);
          border-radius: var(--ui-card-radius);
          padding: var(--spacing-16);
        ">
          <div style="
            font-size: var(--text-2xl);
            margin-bottom: var(--spacing-8);
          ">🧱</div>
          <h4 style="
            margin: 0 0 var(--spacing-4) 0;
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            color: var(--text-primary);
          ">Components</h4>
          <p style="
            margin: 0;
            font-size: var(--text-xs);
            color: var(--text-secondary);
            line-height: var(--leading-text-xs);
          ">
            Reusable UI elements.<br/>
            Atoms → Molecules → Organisms
          </p>
        </div>

        <div style="
          background: var(--ui-surface-container);
          border: 1px solid var(--ui-surface-divider);
          border-radius: var(--ui-card-radius);
          padding: var(--spacing-16);
        ">
          <div style="
            font-size: var(--text-2xl);
            margin-bottom: var(--spacing-8);
          ">📐</div>
          <h4 style="
            margin: 0 0 var(--spacing-4) 0;
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            color: var(--text-primary);
          ">Page Patterns</h4>
          <p style="
            margin: 0;
            font-size: var(--text-xs);
            color: var(--text-secondary);
            line-height: var(--leading-text-xs);
          ">
            Canonical blueprints.<br/>
            Copy these to build pages.
          </p>
        </div>

        <div style="
          background: var(--ui-surface-container);
          border: 1px solid var(--ui-surface-divider);
          border-radius: var(--ui-card-radius);
          padding: var(--spacing-16);
        ">
          <div style="
            font-size: var(--text-2xl);
            margin-bottom: var(--spacing-8);
          ">📄</div>
          <h4 style="
            margin: 0 0 var(--spacing-4) 0;
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            color: var(--text-primary);
          ">Page Examples</h4>
          <p style="
            margin: 0;
            font-size: var(--text-xs);
            color: var(--text-secondary);
            line-height: var(--leading-text-xs);
          ">
            Real product pages.<br/>
            Validate patterns, don't copy.
          </p>
        </div>
      </div>
    `;

    return container;
  },
};
