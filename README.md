# LFX One UI Kit

A governed design system and component library for LFX One, built from tokenized design decisions and enforced through documented component contracts.

## Getting Started

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook
```

## Components

- **PrimaryButton** — Primary action button with loading/disabled states
- **SearchInput** — Text input for search/filter operations
- **FilterPill** — Selectable filter toggle
- **FilterDropdownTrigger** — Dropdown trigger with chevron
- **TabItem** — Individual tab within a group
- **TabsGroup** — Layout coordinator for tabs

## Design System Governance

This repository is governed by an explicit design system contract.

- **System-wide rules** are defined in:
  - [`docs/system-contract.md`](docs/system-contract.md)

- **Component-specific contracts** live in:
  - [`docs/component-contracts/`](docs/component-contracts/)

All components in this repository must:
- Conform to the system contract
- Have an explicit component contract
- Be validated via Storybook

Storybook documents **what exists and how it behaves**.  
Contracts define **what is allowed and what is not**.

## Project Structure

```
lfx-ui-kit/
├── docs/
│   ├── system-contract.md
│   └── component-contracts/
├── tokens/
│   ├── primitives.json
│   ├── semantic.json
│   └── ui-role.json
├── src/
│   ├── components/
│   ├── styles/
│   └── index.ts
└── .storybook/
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build static Storybook |

## License

MIT
