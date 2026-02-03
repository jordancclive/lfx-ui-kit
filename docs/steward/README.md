# Design System Steward

This directory contains artifacts owned by the Design System Steward Agent.

## Storybook Documentation Guardrails

These rules prevent documentation drift and duplication across Page Patterns in Storybook.

### Canonical Documentation Rule

Each Page Pattern has exactly ONE canonical MDX file.

Canonical documentation lives at:

```
src/stories/compositions/page-patterns/<pattern>/<pattern>.mdx
```

Examples:
- src/stories/compositions/page-patterns/dashboard/dashboard.mdx
- src/stories/compositions/page-patterns/table-page/table-page.mdx
- src/stories/compositions/page-patterns/creation-flow-page/creation-flow-page.mdx

### Stories Are Demonstrations Only

Stories files (.stories.ts) provide visual demonstrations.

Stories files MUST NOT contain:
- Pattern rules or contracts
- "When to use" or "When NOT to use" guidance
- Section archetypes or composition rules
- Component mapping tables
- Validation status or criteria

All pattern guidance belongs in the canonical MDX file.

### Multiple Docs Surfaces Are Acceptable

Storybook may generate multiple Docs surfaces (MDX + autodocs) for the same pattern.

This is a tooling artifact and NOT an error.

Contributors MUST NOT:
- Create duplicate MDX files to fix sidebar appearance
- Copy pattern rules into stories files
- Add parallel documentation in other locations

To prevent autodocs generation, stories files should include:

```
parameters: {
  docs: {
    disable: true,
  },
}
```

### Enforcement

Agents and contributors must verify:
- Exactly one MDX file exists per Page Pattern
- Stories files do not contain pattern guidance
- Changes to pattern rules happen in the canonical MDX only

Violations of these guardrails introduce documentation drift and must be reverted.
