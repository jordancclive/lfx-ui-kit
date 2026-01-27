import{j as e,c as r}from"./DocsRenderer-CFRXHY34-lhB6YgxI.js";import{useMDXComponents as t}from"./index-CN-8In0U.js";import"./preview-DeIN3JYX.js";import"./iframe-DzQZFUwt.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const{definePreview:p}=__STORYBOOK_MODULE_PREVIEW_API__;function s(i){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"0. README / Design System Orientation"}),`
`,e.jsx(n.h1,{id:"lfx-one-ui-kit--storybook-orientation",children:"LFX One UI Kit — Storybook Orientation"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"If you are looking for what to reuse, how to build a page, or why a decision was made — start here."})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"purpose-of-this-storybook",children:"Purpose of This Storybook"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"This Storybook is NOT a component gallery."})}),`
`,e.jsxs(n.p,{children:["It is a ",e.jsx(n.strong,{children:"living reference for a production UI system"})," that encodes architectural intent, enforces consistency, and supports both human contributors and AI-assisted workflows."]}),`
`,e.jsx(n.h3,{id:"it-exists-to",children:"It exists to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Make architectural intent explicit"}),`
`,e.jsx(n.li,{children:"Prevent drift and one-off decisions"}),`
`,e.jsx(n.li,{children:"Support both human contributors and AI-assisted workflows"}),`
`]}),`
`,e.jsx(n.h3,{id:"it-is-optimized-for",children:"It is optimized for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Engineers building new features"}),`
`,e.jsx(n.li,{children:"Designers validating implementation"}),`
`,e.jsx(n.li,{children:"Product managers understanding constraints"}),`
`,e.jsx(n.li,{children:"Technical leadership reviewing architecture"}),`
`,e.jsx(n.li,{children:"AI agents working via Cursor / MCP"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"architectural-layers",children:"Architectural Layers"}),`
`,e.jsx(n.h3,{id:"1-components",children:"1. Components"}),`
`,e.jsxs(n.p,{children:["Reusable building blocks, organized by ",e.jsx(n.strong,{children:"composition complexity"}),":"]}),`
`,e.jsx(n.h4,{id:"level-1--atoms",children:"Level 1 — Atoms"}),`
`,e.jsx(n.p,{children:"Indivisible UI elements that cannot be broken down further."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Examples:"})," ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Tag"}),", ",e.jsx(n.code,{children:"FilterPill"}),", ",e.jsx(n.code,{children:"SearchInput"})]}),`
`,e.jsx(n.h4,{id:"level-2--molecules",children:"Level 2 — Molecules"}),`
`,e.jsx(n.p,{children:"Structured patterns built from atoms or adding styled structure."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Examples:"})," ",e.jsx(n.code,{children:"Card"}),", ",e.jsx(n.code,{children:"TableRow"}),", ",e.jsx(n.code,{children:"TableCell"}),", ",e.jsx(n.code,{children:"MetricCard"})]}),`
`,e.jsx(n.h4,{id:"level-3--organisms",children:"Level 3 — Organisms"}),`
`,e.jsx(n.p,{children:"Coordinated assemblies that manage multiple Level 1/2 components."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Examples:"})," ",e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"AppHeader"}),", ",e.jsx(n.code,{children:"AppShell"}),", ",e.jsx(n.code,{children:"PageLayout"}),", ",e.jsx(n.code,{children:"MetricsRow"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Levels describe composition complexity, not importance. All levels are production-critical."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"2-page-patterns",children:"2. Page Patterns"}),`
`,e.jsx(n.p,{children:"Reusable structural blueprints that define:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What appears on a page"}),`
`,e.jsx(n.li,{children:"Where it appears"}),`
`,e.jsx(n.li,{children:"What is allowed vs forbidden"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Examples:"})," ",e.jsx(n.code,{children:"Table Page"})," (canonical), ",e.jsx(n.code,{children:"Segmented Table Page"})," (specialized)"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Page Patterns ARE reusable and ARE meant to be copied."})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"3-page-examples",children:"3. Page Examples"}),`
`,e.jsx(n.p,{children:"Concrete product pages showing real usage with product-specific data and logic."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Examples:"})," ",e.jsx(n.code,{children:"Dashboard"}),", ",e.jsx(n.code,{children:"Votes"}),", ",e.jsx(n.code,{children:"Groups"})," (via Segmented Table Page)"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"Page Examples are illustrative only and must NOT be copied directly."}),e.jsx(n.br,{}),`
`,"Always reference the Page Pattern, not the Example."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-read-the-storybook-sidebar",children:"How to Read the Storybook Sidebar"}),`
`,e.jsxs(n.p,{children:["The sidebar is ",e.jsx(n.strong,{children:"intentionally ordered"})," to reflect the architectural flow:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1. Components"}),e.jsx(n.br,{}),`
`,"→ Level 1 → Level 2 → Level 3",e.jsx(n.br,{}),`
`,e.jsx(n.em,{children:"(Simple → Complex)"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"2. Page Patterns"}),e.jsx(n.br,{}),`
`,"→ Reusable blueprints",e.jsx(n.br,{}),`
`,e.jsx(n.em,{children:"(What to copy)"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"3. Page Examples"}),e.jsx(n.br,{}),`
`,"→ Concrete implementations",e.jsx(n.br,{}),`
`,e.jsx(n.em,{children:"(What NOT to copy)"})]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"why-numeric-prefixes-exist",children:"Why numeric prefixes exist:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Storybook sorts alphabetically and by insertion order"}),`
`,e.jsx(n.li,{children:"Numeric prefixes enforce architectural intent"}),`
`,e.jsx(n.li,{children:"Ordering is intentional and must not be removed"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-system-philosophy",children:"Design System Philosophy"}),`
`,e.jsx(n.p,{children:"This UI Kit is built on five core principles:"}),`
`,e.jsx(n.h3,{id:"structure-before-styling",children:"Structure before styling"}),`
`,e.jsx(n.p,{children:"Define what things are before deciding how they look."}),`
`,e.jsx(n.h3,{id:"semantics-before-visuals",children:"Semantics before visuals"}),`
`,e.jsx(n.p,{children:"Name things by their meaning, not their appearance."}),`
`,e.jsx(n.h3,{id:"explicitness-over-inference",children:"Explicitness over inference"}),`
`,e.jsx(n.p,{children:"Say what you mean. Don't make agents guess."}),`
`,e.jsx(n.h3,{id:"reuse-via-patterns-not-copy-paste",children:"Reuse via patterns, not copy-paste"}),`
`,e.jsx(n.p,{children:"Copy the pattern, not the implementation."}),`
`,e.jsx(n.h3,{id:"strong-constraints-enable-speed",children:"Strong constraints enable speed"}),`
`,e.jsx(n.p,{children:"Clear rules reduce decisions and prevent drift."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"This system is intentionally more explicit than most traditional design systems to support agentic workflows safely."})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-seven-step-process-used-to-build-this-ui-kit",children:"The Seven-Step Process Used to Build This UI Kit"}),`
`,e.jsx(n.p,{children:"This design system was constructed iteratively using a seven-step process:"}),`
`,e.jsx(n.h3,{id:"1-establish-token-and-semantic-foundations",children:"1. Establish token and semantic foundations"}),`
`,e.jsx(n.p,{children:"Define primitive values (colors, spacing, typography) and semantic aliases that separate intent from implementation."}),`
`,e.jsx(n.h3,{id:"2-lock-component-contracts-and-responsibilities",children:"2. Lock component contracts and responsibilities"}),`
`,e.jsx(n.p,{children:"Document what each component owns, what it does NOT own, and how it binds to tokens."}),`
`,e.jsx(n.h3,{id:"3-build-components-bottom-up-level-1--3",children:"3. Build components bottom-up (Level 1 → 3)"}),`
`,e.jsx(n.p,{children:"Start with atoms, compose molecules, coordinate organisms. Each level builds on the previous."}),`
`,e.jsx(n.h3,{id:"4-define-reusable-page-patterns",children:"4. Define reusable page patterns"}),`
`,e.jsx(n.p,{children:"Extract structural blueprints from real pages. Patterns define WHAT and WHERE, not HOW or WHY."}),`
`,e.jsx(n.h3,{id:"5-validate-patterns-using-real-product-examples",children:"5. Validate patterns using real product examples"}),`
`,e.jsx(n.p,{children:"Build concrete pages (Dashboard, Votes) to stress-test patterns and identify gaps."}),`
`,e.jsx(n.h3,{id:"6-encode-rules-and-boundaries-as-documentation",children:"6. Encode rules and boundaries as documentation"}),`
`,e.jsx(n.p,{children:"Write component contracts, pattern docs, and boundary definitions. Documentation is part of the system, not an afterthought."}),`
`,e.jsx(n.h3,{id:"7-enforce-consistency-via-tooling-and-automation",children:"7. Enforce consistency via tooling and automation"}),`
`,e.jsx(n.p,{children:"Use Storybook ordering, linters, type safety, and agentic workflows to prevent regressions."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," These steps are iterative. Changes must respect earlier steps unless explicitly revisited with intention."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tooling--agentic-workflow",children:"Tooling & Agentic Workflow"}),`
`,e.jsx(n.p,{children:"This UI Kit was built using a hybrid human-agent workflow:"}),`
`,e.jsx(n.h3,{id:"figma",children:"Figma"}),`
`,e.jsx(n.p,{children:"Source of visual intent and design decisions."}),`
`,e.jsx(n.h3,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.p,{children:"Single source of visual truth. All styling flows through tokens."}),`
`,e.jsx(n.h3,{id:"cursor",children:"Cursor"}),`
`,e.jsx(n.p,{children:"Implementation and refactoring environment with AI-assisted coding."}),`
`,e.jsx(n.h3,{id:"chatgpt",children:"ChatGPT"}),`
`,e.jsx(n.p,{children:"Reasoning, architecture planning, and documentation generation."}),`
`,e.jsx(n.h3,{id:"figma-mcp",children:"Figma MCP"}),`
`,e.jsx(n.p,{children:"Extracting structure and intent from design files."}),`
`,e.jsx(n.h3,{id:"playwright-mcp",children:"Playwright MCP"}),`
`,e.jsx(n.p,{children:"Automated verification and visual regression testing."}),`
`,e.jsx(n.h3,{id:"chrome-mcp",children:"Chrome MCP"}),`
`,e.jsx(n.p,{children:"Real-world validation in production-like environments."}),`
`,e.jsx(n.h3,{id:"github",children:"GitHub"}),`
`,e.jsx(n.p,{children:"Versioned source of truth with commit-level documentation."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Humans make decisions."}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Agents execute within constraints."}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"This Storybook encodes those constraints."})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-this-ui-kit-is-maintained",children:"How This UI Kit Is Maintained"}),`
`,e.jsx(n.p,{children:"Maintenance follows strict architectural rules:"}),`
`,e.jsx(n.h3,{id:"new-components-must-declare-their-level",children:"New components must declare their level"}),`
`,e.jsx(n.p,{children:"Is it an atom, molecule, or organism? If unclear, it may not belong."}),`
`,e.jsx(n.h3,{id:"new-pages-must-choose-a-page-pattern",children:"New pages must choose a Page Pattern"}),`
`,e.jsx(n.p,{children:"If no pattern fits, create a new pattern — don't create a one-off page."}),`
`,e.jsx(n.h3,{id:"deviations-require-explicit-justification",children:"Deviations require explicit justification"}),`
`,e.jsx(n.p,{children:"Breaking a rule is allowed if documented and intentional."}),`
`,e.jsx(n.h3,{id:"documentation-is-not-optional--it-is-part-of-the-system",children:"Documentation is not optional — it is part of the system"}),`
`,e.jsx(n.p,{children:"Undocumented components are incomplete. Contracts are requirements, not nice-to-haves."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"If something feels unclear, that is a signal to improve the system — not to work around it."})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"LFX One UI Kit — Built with intention, maintained with discipline."})})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
