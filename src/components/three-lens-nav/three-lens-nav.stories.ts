import type { Meta, StoryObj } from '@storybook/html';
import { createThreeLensNav, type ThreeLensNavProps } from './three-lens-nav';

// =============================================================================
// SHARED NAV ICONS
// Centralised here as the canonical reference for nav icon SVGs.
// Page examples import ThreeLensNav and pass these through — they do not
// define their own icon sets.
// =============================================================================

export const NAV_ICONS = {
  // ── Me Lens ────────────────────────────────────────────────────────────────
  home:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
  actions:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
  meetings:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>`,
  groups:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>`,
  events:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 0 .544 1.74l5.959 8.592A2.25 2.25 0 0 0 10.875 21h2.25a2.25 2.25 0 0 0 2.122-1.492l5.959-8.592a3 3 0 0 0 .544-1.74V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"/></svg>`,
  profile:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>`,
  settings:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>`,
  // ── Projects Lens ──────────────────────────────────────────────────────────
  overview:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
  mailingLists: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,
  votes:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>`,
  surveys:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"/></svg>`,
  permissions:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg>`,
  insights:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>`,
  // ── Org Lens ───────────────────────────────────────────────────────────────
  orgOverview:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>`,
  contributors:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>`,
  membership:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg>`,
  benefits:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/></svg>`,
  // ── Maintainer / Data Intelligence ────────────────────────────────────────
  projects:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"/></svg>`,
  drive:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v8.25A2.25 2.25 0 0 0 4.5 16.5h15a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/></svg>`,
  mentorship:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>`,
  engHealth:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/></svg>`,
  contribHealth:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>`,
  // ── Org Lens — additional ──────────────────────────────────────────────────
  codeContributions:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>`,
  claManagement:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`,
  orgProfile:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/></svg>`,
};

// =============================================================================
// META
// =============================================================================

const meta: Meta<ThreeLensNavProps> = {
  title: '1. Components / 3. Organisms / ThreeLensNav',
  tags: ['autodocs'],
  excludeStories: ['NAV_ICONS'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Tier 3 — Composite Layout Component**

ThreeLensNav composes the dark navy \`LensRail\` and the white \`GlobalNav\` panel
into a single element that slots directly into \`AppShell\`'s \`nav\` prop.

There are exactly **three states** — one per lens. Switching lenses changes both
the active indicator in the rail and the nav panel contents. The active nav item
within each panel is controlled by \`activeNavItemId\`.

---

### Ownership Boundaries

| Owns | Does NOT Own |
|------|--------------|
| Composition layout (rail + panel side by side) | Routing or URL management |
| Lens switching callbacks | Application state |
| Passing contextHeader, sections, activeNavItemId to GlobalNav | Icon SVG definitions (caller's responsibility) |
| Passing activeLens to LensRail | Focus management |

---

### Context Header Modes

**User mode (Me lens):** Pass \`avatarInitials\` (or \`avatarUrl\`) + \`title\` + \`roleBadge\`.
Renders a circular avatar with the user's name and a coloured role badge below.

**Project/Org mode:** Pass \`title\` + optional \`subtitle\` + \`showChevron: true\`.
Renders a square icon area, title, subtitle, and a chevron for a dropdown trigger.

---

### Nav Item Modifiers

- \`muted: true\` — renders at 40% opacity with pointer-events disabled.
  Use for features that exist in the nav structure but are not yet built.
- \`externalLink: true\` — renders a small external link icon on the right.
  Use for items that navigate outside the app (e.g. LFX Insights).

---

### Three Lens States

The three stories below are the canonical reference for each lens.
Page examples must use these configurations — they do not define their own.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ThreeLensNavProps>;

// =============================================================================
// SHARED WRAPPER
// Constrains height so the nav renders realistically in the Storybook canvas.
// =============================================================================

function inFullHeightWrapper(nav: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'height: 100vh; display: flex;';
  wrapper.appendChild(nav);
  return wrapper;
}

// =============================================================================
// STORY 1: Me Lens
// Personal activity — the user's own contributions, meetings, events, profile.
// Context header: circular avatar + name + role badge.
// =============================================================================

export const MeLens: Story = {
  name: 'Me Lens',
  parameters: {
    docs: {
      description: {
        story: `
The Me lens is personal. The context header shows the signed-in user's
avatar, name, and role badge. \`My Actions\` is muted — it exists in the
nav structure but is not yet interactive in the current build.
        `,
      },
    },
  },
  render: () => inFullHeightWrapper(
    createThreeLensNav({
      activeLens: 'me',
      contextHeader: {
        title: 'Jordan Clive',
        roleBadge: 'Contributor',
        avatarInitials: 'JC',
      },
      activeNavItemId: 'overview',
      sections: [
        {
          items: [
            { id: 'overview', label: 'Overview', icon: NAV_ICONS.overview },
          ],
        },
        {
          label: 'Engagement',
          items: [
            { id: 'my-actions',  label: 'My Actions',  icon: NAV_ICONS.actions,   muted: true },
            { id: 'my-meetings', label: 'My Meetings', icon: NAV_ICONS.meetings },
            { id: 'my-groups',   label: 'My Groups',   icon: NAV_ICONS.groups },
            { id: 'my-events',   label: 'My Events',   icon: NAV_ICONS.events },
          ],
        },
        {
          label: 'Account',
          items: [
            { id: 'my-profile', label: 'My Profile', icon: NAV_ICONS.profile },
            { id: 'settings',   label: 'Settings',   icon: NAV_ICONS.settings },
          ],
        },
      ],
    })
  ),
};

// =============================================================================
// STORY 2: Projects Lens
// Foundation / project view — the user's open source work in project context.
// Context header: foundation name with chevron (project switcher).
// =============================================================================

export const ProjectsLens: Story = {
  name: 'Projects Lens',
  parameters: {
    docs: {
      description: {
        story: `
The Projects lens shows foundation and project-scoped information.
The context header has a chevron to indicate a project/foundation switcher dropdown.
Insights opens externally (LFX Insights) — note the external link icon.
        `,
      },
    },
  },
  render: () => inFullHeightWrapper(
    createThreeLensNav({
      activeLens: 'projects',
      contextHeader: {
        title: 'The Linux Foundation',
        showChevron: true,
      },
      activeNavItemId: 'overview',
      sections: [
        {
          items: [
            { id: 'overview', label: 'Overview', icon: NAV_ICONS.overview },
          ],
        },
        {
          label: 'Community',
          items: [
            { id: 'meetings',      label: 'Meetings',      icon: NAV_ICONS.meetings },
            { id: 'mailing-lists', label: 'Mailing Lists', icon: NAV_ICONS.mailingLists },
            { id: 'groups',        label: 'Groups',        icon: NAV_ICONS.groups },
            { id: 'drive',         label: 'Drive',         icon: NAV_ICONS.drive },
          ],
        },
        {
          label: 'Governance',
          items: [
            { id: 'votes',       label: 'Votes',       icon: NAV_ICONS.votes },
            { id: 'surveys',     label: 'Surveys',     icon: NAV_ICONS.surveys },
            { id: 'permissions', label: 'Permissions', icon: NAV_ICONS.permissions },
            { id: 'insights',    label: 'Insights',    icon: NAV_ICONS.insights, externalLink: true },
          ],
        },
      ],
    })
  ),
};

// =============================================================================
// STORY 3: Org Lens
// Employer / OSPO view — the user's open source work in org context.
// Context header: org name with chevron (org switcher).
// NOTE: Org lens is a placeholder in the current build. Items reflect
// the intended structure — none are interactive yet.
// =============================================================================

export const OrgLens: Story = {
  name: 'Org Lens',
  parameters: {
    docs: {
      description: {
        story: `
The Org lens shows open source work in the context of the user's employer.
This lens is a placeholder in the current build — no items are interactive yet.
The structure reflects design intent for the eventual Org Dashboard replacement.
        `,
      },
    },
  },
  render: () => inFullHeightWrapper(
    createThreeLensNav({
      activeLens: 'org',
      contextHeader: {
        title: 'The Linux Foundation',
        subtitle: 'Organization',
        showChevron: true,
      },
      activeNavItemId: 'org-overview',
      sections: [
        {
          items: [
            { id: 'org-overview', label: 'Overview', icon: NAV_ICONS.orgOverview },
          ],
        },
        {
          label: 'Portfolio',
          items: [
            { id: 'key-projects',        label: 'Key Projects',        icon: NAV_ICONS.projects },
            { id: 'code-contributions',  label: 'Code Contributions',  icon: NAV_ICONS.codeContributions },
          ],
        },
        {
          label: 'Membership',
          items: [
            { id: 'membership', label: 'Membership', icon: NAV_ICONS.membership },
            { id: 'benefits',   label: 'Benefits',   icon: NAV_ICONS.benefits },
          ],
        },
        {
          label: 'Administration',
          items: [
            { id: 'groups',              label: 'Groups',               icon: NAV_ICONS.groups },
            { id: 'cla-management',      label: 'CLA Management',       icon: NAV_ICONS.claManagement },
            { id: 'access-permissions',  label: 'Access & Permissions', icon: NAV_ICONS.permissions },
            { id: 'org-profile',         label: 'Org Profile',          icon: NAV_ICONS.orgProfile },
          ],
        },
      ],
    })
  ),
};
