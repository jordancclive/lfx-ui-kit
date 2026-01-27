/**
 * Design System Orientation README
 * 
 * This is a documentation-only story that appears first in the Storybook sidebar.
 * It provides human-oriented orientation to the LFX One UI Kit architecture,
 * explaining purpose, structure, patterns, and maintenance philosophy.
 * 
 * This page does NOT import or render any components.
 * It exists solely to orient humans (and agents) to the design system.
 */

import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: '0. README / Design System Orientation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => {
        const container = document.createElement('div');
        container.style.maxWidth = '800px';
        container.style.margin = '0 auto';
        container.style.padding = '2rem';
        container.style.fontFamily = 'system-ui, -apple-system, sans-serif';
        container.style.lineHeight = '1.6';
        container.style.color = '#1e293b';

        container.innerHTML = `
          <h1 style="font-size: 2.5rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
            LFX One UI Kit — Storybook Orientation
          </h1>

          <p style="font-size: 1.125rem; color: #475569; margin-bottom: 2rem; border-left: 4px solid #3b82f6; padding-left: 1rem;">
            If you are looking for what to reuse, how to build a page, or why a decision was made — start here.
          </p>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; margin-top: 2rem; color: #0f172a;">
              Purpose of This Storybook
            </h2>
            
            <p style="margin-bottom: 1rem;">
              <strong>This Storybook is NOT a component gallery.</strong>
            </p>
            
            <p style="margin-bottom: 1rem;">
              It is a <strong>living reference for a production UI system</strong> that encodes architectural intent,
              enforces consistency, and supports both human contributors and AI-assisted workflows.
            </p>

            <p style="margin-bottom: 1rem;">
              <strong>It exists to:</strong>
            </p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <li style="margin-bottom: 0.5rem;">Make architectural intent explicit</li>
              <li style="margin-bottom: 0.5rem;">Prevent drift and one-off decisions</li>
              <li style="margin-bottom: 0.5rem;">Support both human contributors and AI-assisted workflows</li>
            </ul>

            <p style="margin-bottom: 1rem;">
              <strong>It is optimized for:</strong>
            </p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <li style="margin-bottom: 0.5rem;">Engineers building new features</li>
              <li style="margin-bottom: 0.5rem;">Designers validating implementation</li>
              <li style="margin-bottom: 0.5rem;">Product managers understanding constraints</li>
              <li style="margin-bottom: 0.5rem;">Technical leadership reviewing architecture</li>
              <li style="margin-bottom: 0.5rem;">AI agents working via Cursor / MCP</li>
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              Architectural Layers
            </h2>

            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #1e293b;">
                1. Components
              </h3>
              <p style="margin-bottom: 1rem;">
                Reusable building blocks, organized by <strong>composition complexity</strong>:
              </p>

              <div style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: #475569;">
                  Level 1 — Atoms
                </h4>
                <p style="margin-bottom: 0.75rem; color: #64748b;">
                  Indivisible UI elements that cannot be broken down further.
                </p>
                <p style="margin-bottom: 1rem; font-family: 'Courier New', monospace; color: #3b82f6;">
                  Examples: Button, Tag, FilterPill, SearchInput
                </p>

                <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: #475569;">
                  Level 2 — Molecules
                </h4>
                <p style="margin-bottom: 0.75rem; color: #64748b;">
                  Structured patterns built from atoms or adding styled structure.
                </p>
                <p style="margin-bottom: 1rem; font-family: 'Courier New', monospace; color: #3b82f6;">
                  Examples: Card, TableRow, TableCell, MetricCard
                </p>

                <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: #475569;">
                  Level 3 — Organisms
                </h4>
                <p style="margin-bottom: 0.75rem; color: #64748b;">
                  Coordinated assemblies that manage multiple Level 1/2 components.
                </p>
                <p style="margin-bottom: 1rem; font-family: 'Courier New', monospace; color: #3b82f6;">
                  Examples: Table, AppHeader, AppShell, PageLayout, MetricsRow
                </p>
              </div>

              <p style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 1rem;">
                <strong>Important:</strong> Levels describe composition complexity, not importance.
                All levels are production-critical.
              </p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #1e293b;">
                2. Page Patterns
              </h3>
              <p style="margin-bottom: 1rem;">
                Reusable structural blueprints that define:
              </p>
              <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li style="margin-bottom: 0.5rem;">What appears on a page</li>
                <li style="margin-bottom: 0.5rem;">Where it appears</li>
                <li style="margin-bottom: 0.5rem;">What is allowed vs forbidden</li>
              </ul>

              <p style="margin-bottom: 1rem; font-family: 'Courier New', monospace; color: #3b82f6;">
                Examples: Table Page (canonical), Segmented Table Page (specialized)
              </p>

              <p style="background-color: #d1fae5; border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem;">
                <strong>Page Patterns ARE reusable and ARE meant to be copied.</strong>
              </p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #1e293b;">
                3. Page Examples
              </h3>
              <p style="margin-bottom: 1rem;">
                Concrete product pages showing real usage with product-specific data and logic.
              </p>

              <p style="margin-bottom: 1rem; font-family: 'Courier New', monospace; color: #3b82f6;">
                Examples: Dashboard, Votes, Groups (via Segmented Table Page)
              </p>

              <p style="background-color: #fee2e2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 1rem;">
                <strong>Page Examples are illustrative only and must NOT be copied directly.</strong>
                <br>Always reference the Page Pattern, not the Example.
              </p>
            </div>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              How to Read the Storybook Sidebar
            </h2>

            <p style="margin-bottom: 1rem;">
              The sidebar is <strong>intentionally ordered</strong> to reflect the architectural flow:
            </p>

            <ol style="margin-left: 1.5rem; margin-bottom: 1rem; font-size: 1.125rem;">
              <li style="margin-bottom: 0.75rem;">
                <strong>1. Components</strong><br>
                <span style="color: #64748b;">→ Level 1 → Level 2 → Level 3</span><br>
                <span style="color: #64748b; font-size: 0.875rem;">Simple → Complex</span>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>2. Page Patterns</strong><br>
                <span style="color: #64748b;">→ Reusable blueprints</span><br>
                <span style="color: #64748b; font-size: 0.875rem;">What to copy</span>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>3. Page Examples</strong><br>
                <span style="color: #64748b;">→ Concrete implementations</span><br>
                <span style="color: #64748b; font-size: 0.875rem;">What NOT to copy</span>
              </li>
            </ol>

            <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 1rem;">
              <p style="margin-bottom: 0.5rem;">
                <strong>Why numeric prefixes exist:</strong>
              </p>
              <ul style="margin-left: 1.5rem;">
                <li style="margin-bottom: 0.5rem;">Storybook sorts alphabetically and by insertion order</li>
                <li style="margin-bottom: 0.5rem;">Numeric prefixes enforce architectural intent</li>
                <li style="margin-bottom: 0.5rem;">Ordering is intentional and must not be removed</li>
              </ul>
            </div>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              Design System Philosophy
            </h2>

            <p style="margin-bottom: 1rem;">
              This UI Kit is built on five core principles:
            </p>

            <div style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Structure before styling</strong><br>
                <span style="color: #64748b;">Define what things are before deciding how they look.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Semantics before visuals</strong><br>
                <span style="color: #64748b;">Name things by their meaning, not their appearance.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Explicitness over inference</strong><br>
                <span style="color: #64748b;">Say what you mean. Don't make agents guess.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Reuse via patterns, not copy-paste</strong><br>
                <span style="color: #64748b;">Copy the pattern, not the implementation.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Strong constraints enable speed</strong><br>
                <span style="color: #64748b;">Clear rules reduce decisions and prevent drift.</span>
              </p>
            </div>

            <p style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 1rem; margin-top: 1rem; font-style: italic;">
              This system is intentionally more explicit than most traditional design systems
              to support agentic workflows safely.
            </p>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              The Seven-Step Process Used to Build This UI Kit
            </h2>

            <p style="margin-bottom: 1rem;">
              This design system was constructed iteratively using a seven-step process:
            </p>

            <ol style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <li style="margin-bottom: 1rem;">
                <strong>Establish token and semantic foundations</strong><br>
                <span style="color: #64748b;">
                  Define primitive values (colors, spacing, typography) and semantic aliases
                  that separate intent from implementation.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Lock component contracts and responsibilities</strong><br>
                <span style="color: #64748b;">
                  Document what each component owns, what it does NOT own, and how it binds to tokens.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Build components bottom-up (Level 1 → 3)</strong><br>
                <span style="color: #64748b;">
                  Start with atoms, compose molecules, coordinate organisms.
                  Each level builds on the previous.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Define reusable page patterns</strong><br>
                <span style="color: #64748b;">
                  Extract structural blueprints from real pages. Patterns define WHAT and WHERE,
                  not HOW or WHY.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Validate patterns using real product examples</strong><br>
                <span style="color: #64748b;">
                  Build concrete pages (Dashboard, Votes) to stress-test patterns and identify gaps.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Encode rules and boundaries as documentation</strong><br>
                <span style="color: #64748b;">
                  Write component contracts, pattern docs, and boundary definitions.
                  Documentation is part of the system, not an afterthought.
                </span>
              </li>
              <li style="margin-bottom: 1rem;">
                <strong>Enforce consistency via tooling and automation</strong><br>
                <span style="color: #64748b;">
                  Use Storybook ordering, linters, type safety, and agentic workflows
                  to prevent regressions.
                </span>
              </li>
            </ol>

            <p style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 1rem;">
              <strong>Important:</strong> These steps are iterative. Changes must respect earlier steps
              unless explicitly revisited with intention.
            </p>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              Tooling & Agentic Workflow
            </h2>

            <p style="margin-bottom: 1rem;">
              This UI Kit was built using a hybrid human-agent workflow:
            </p>

            <div style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Figma</strong><br>
                <span style="color: #64748b;">Source of visual intent and design decisions.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Tokens</strong><br>
                <span style="color: #64748b;">Single source of visual truth. All styling flows through tokens.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Cursor</strong><br>
                <span style="color: #64748b;">Implementation and refactoring environment with AI-assisted coding.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">ChatGPT</strong><br>
                <span style="color: #64748b;">Reasoning, architecture planning, and documentation generation.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Figma MCP</strong><br>
                <span style="color: #64748b;">Extracting structure and intent from design files.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Playwright MCP</strong><br>
                <span style="color: #64748b;">Automated verification and visual regression testing.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">Chrome MCP</strong><br>
                <span style="color: #64748b;">Real-world validation in production-like environments.</span>
              </p>

              <p style="margin-bottom: 0.75rem;">
                <strong style="color: #1e293b;">GitHub</strong><br>
                <span style="color: #64748b;">Versioned source of truth with commit-level documentation.</span>
              </p>
            </div>

            <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem;">
              <p style="margin-bottom: 0.5rem; font-size: 1.125rem; font-weight: 600; color: #065f46;">
                Humans make decisions.
              </p>
              <p style="margin-bottom: 0.5rem; font-size: 1.125rem; font-weight: 600; color: #065f46;">
                Agents execute within constraints.
              </p>
              <p style="font-size: 1.125rem; font-weight: 600; color: #065f46;">
                This Storybook encodes those constraints.
              </p>
            </div>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 1rem; color: #0f172a;">
              How This UI Kit Is Maintained
            </h2>

            <p style="margin-bottom: 1rem;">
              Maintenance follows strict architectural rules:
            </p>

            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <li style="margin-bottom: 0.75rem;">
                <strong>New components must declare their level</strong><br>
                <span style="color: #64748b;">
                  Is it an atom, molecule, or organism? If unclear, it may not belong.
                </span>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>New pages must choose a Page Pattern</strong><br>
                <span style="color: #64748b;">
                  If no pattern fits, create a new pattern — don't create a one-off page.
                </span>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Deviations require explicit justification</strong><br>
                <span style="color: #64748b;">
                  Breaking a rule is allowed if documented and intentional.
                </span>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Documentation is not optional — it is part of the system</strong><br>
                <span style="color: #64748b;">
                  Undocumented components are incomplete. Contracts are requirements, not nice-to-haves.
                </span>
              </li>
            </ul>

            <p style="background-color: #fef3c7; border: 2px solid #f59e0b; padding: 1.5rem; margin-top: 1.5rem; font-size: 1.125rem; text-align: center; font-weight: 600; color: #78350f;">
              If something feels unclear, that is a signal to improve the system — not to work around it.
            </p>
          </section>

          <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 3rem 0;">

          <footer style="text-align: center; color: #94a3b8; font-size: 0.875rem; padding: 2rem 0;">
            <p>
              LFX One UI Kit — Built with intention, maintained with discipline.
            </p>
          </footer>
        `;

        return container;
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => {
    // This story intentionally returns nothing for the canvas view
    // All content is rendered via the docs page above
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.textAlign = 'center';
    container.style.color = '#64748b';
    container.innerHTML = `
      <p style="font-size: 1.125rem; margin-bottom: 1rem;">
        📚 This page is documentation-only.
      </p>
      <p>
        Switch to the "Docs" tab to read the Design System Orientation.
      </p>
    `;
    return container;
  },
};
