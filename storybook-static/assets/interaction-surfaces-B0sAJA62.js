import{j as n,M as l}from"./DocsRenderer-CFRXHY34-CJnfsKmA.js";import{useMDXComponents as r}from"./index-BbsHvoKL.js";import"./index-spzdoL3x.js";import"./iframe-B9_reonA.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";import"./preview-Cg_aZdx0.js";function s(i){const e={br:"br",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"0. README / Interaction Surfaces"}),`
`,n.jsx(e.h1,{id:"drawer-vs-modal-vs-page",children:"Drawer vs Modal vs Page"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Canonical Interaction Surface Contract for LFX One"})}),`
`,n.jsxs(e.p,{children:["This document defines the ",n.jsx(e.strong,{children:"authoritative rules"}),` for when to use Drawer, Modal, or Page
as interaction surfaces in LFX One.`]}),`
`,n.jsxs(e.p,{children:["This contract is ",n.jsx(e.strong,{children:"normative"})," and applies to:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"All page patterns (Dashboard, Table Page, Creation Flow, Segmented Table Page)"}),`
`,n.jsx(e.li,{children:"All dashboard primitives (MetricCluster, ActionCard)"}),`
`,n.jsx(e.li,{children:"All future agent-generated interfaces"}),`
`,n.jsx(e.li,{children:"All human-authored components and pages"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"purpose",children:"Purpose"}),`
`,n.jsxs(e.p,{children:["LFX One deliberately uses ",n.jsx(e.strong,{children:"three distinct interaction surfaces"})," to balance:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Context preservation:"})," Keeping users oriented within their workflow"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cognitive load:"})," Managing attention and focus appropriately"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Task complexity:"})," Matching surface to task depth"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigational clarity:"})," Providing predictable interaction models"]}),`
`]}),`
`,n.jsx(e.p,{children:"Each surface exists for a specific cognitive and workflow purpose."}),`
`,n.jsx(e.p,{children:"The wrong choice creates:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ User disorientation"}),`
`,n.jsx(e.li,{children:"❌ Workflow interruption"}),`
`,n.jsx(e.li,{children:"❌ Inconsistent behavior across the system"}),`
`,n.jsx(e.li,{children:"❌ Agent drift (unpredictable generation)"}),`
`]}),`
`,n.jsx(e.p,{children:"The right choice enables:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Predictable user mental models"}),`
`,n.jsx(e.li,{children:"✅ Consistent interaction patterns"}),`
`,n.jsx(e.li,{children:"✅ Deterministic agent generation"}),`
`,n.jsx(e.li,{children:"✅ Scalable system design"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"interaction-surface-definitions",children:"Interaction Surface Definitions"}),`
`,n.jsx(e.h3,{id:"drawer",children:"Drawer"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What it is:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Slides in from the ",n.jsx(e.strong,{children:"right side"})," of the screen"]}),`
`,n.jsx(e.li,{children:"Overlays the main content without replacing it"}),`
`,n.jsx(e.li,{children:"Can be dismissed by clicking outside, ESC key, or close button"}),`
`,n.jsxs(e.li,{children:["Main content remains ",n.jsx(e.strong,{children:"visible"})," (though dimmed or inactive)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Preserves underlying page context"}),`
`,n.jsx(e.li,{children:"Non-blocking (user can see what they were doing)"}),`
`,n.jsx(e.li,{children:"Temporary, lightweight overlay"}),`
`,n.jsx(e.li,{children:"Width typically 400-600px (fixed or responsive)"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Cognitive Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:'"Let me quickly look at this detail without losing my place"'})}),`
`,n.jsx(e.li,{children:"Contextual exploration or inspection"}),`
`,n.jsx(e.li,{children:"Lightweight execution (filtering, reviewing, acting)"}),`
`,n.jsx(e.li,{children:"Supports comparison and reference back to main content"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"modal",children:"Modal"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What it is:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Centered overlay that ",n.jsx(e.strong,{children:"blocks"})," the main content"]}),`
`,n.jsx(e.li,{children:"Requires user action to dismiss (button, ESC key)"}),`
`,n.jsx(e.li,{children:"Intentionally interruptive"}),`
`,n.jsx(e.li,{children:"Background is dimmed and inactive"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Temporarily blocks background completely"}),`
`,n.jsx(e.li,{children:"Forces focus on modal content"}),`
`,n.jsx(e.li,{children:"Cannot interact with background until dismissed"}),`
`,n.jsx(e.li,{children:"Size typically small to medium (300-500px wide)"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Cognitive Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:'"I need your attention right now for this one thing"'})}),`
`,n.jsx(e.li,{children:"Short, focused, atomic tasks"}),`
`,n.jsx(e.li,{children:"Confirmations, warnings, or acknowledgments"}),`
`,n.jsx(e.li,{children:"Intentional interruption of workflow"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"page",children:"Page"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What it is:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full navigation to a new route/URL"}),`
`,n.jsxs(e.li,{children:["Replaces the ",n.jsx(e.strong,{children:"entire main content area"})]}),`
`,n.jsx(e.li,{children:"Browser back button returns to previous page"}),`
`,n.jsx(e.li,{children:"Persists in navigation history"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full viewport content replacement"}),`
`,n.jsx(e.li,{children:"Supports complex, multi-section layouts"}),`
`,n.jsx(e.li,{children:"Can have its own AppHeader, sections, and navigation"}),`
`,n.jsx(e.li,{children:'User expects to "be somewhere else"'}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Cognitive Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:`"I'm going somewhere to do something substantial"`})}),`
`,n.jsx(e.li,{children:"Deep focus workflows"}),`
`,n.jsx(e.li,{children:"Multi-step tasks"}),`
`,n.jsx(e.li,{children:"Complex creation or configuration"}),`
`,n.jsx(e.li,{children:"Full-featured data browsing"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"canonical-usage-rules-normative",children:"Canonical Usage Rules (Normative)"}),`
`,n.jsxs(e.p,{children:["These rules are ",n.jsx(e.strong,{children:"binding"})," and ",n.jsx(e.strong,{children:"non-negotiable"}),"."]}),`
`,n.jsx(e.h3,{id:"use-a-drawer-when",children:"Use a DRAWER when:"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"User is drilling into details"})," from a dashboard or table",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Inspecting or reviewing"})," items in context",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Acting on items"})," without navigation (approve, dismiss, etc.)",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Filtering or searching"})," within a constrained scope",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Task is reversible"})," or lightweight",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Context should remain visible"})," (metrics, table, dashboard)"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example Use Cases:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Metric drill-down from dashboard (expanded chart + details)"}),`
`,n.jsx(e.li,{children:'My Actions "View All" (search, filter, act on pending actions)'}),`
`,n.jsx(e.li,{children:"Inspecting a project, contributor, or organization"}),`
`,n.jsx(e.li,{children:"Viewing alert details from a monitoring dashboard"}),`
`,n.jsx(e.li,{children:"Reading notification details from a notification center"}),`
`,n.jsx(e.li,{children:"Reviewing a pull request summary from a list"}),`
`,n.jsx(e.li,{children:"Expanding a table row for detailed fields"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why Drawer:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Preserves dashboard or table context"}),`
`,n.jsx(e.li,{children:"User can reference other metrics/rows while viewing details"}),`
`,n.jsx(e.li,{children:"Encourages quick exploration without navigation commitment"}),`
`,n.jsx(e.li,{children:"Easy to dismiss and continue browsing"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"use-a-modal-when",children:"Use a MODAL when:"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"User must confirm"})," a destructive or critical action",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Task is short and atomic"})," (one decision, one input)",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Blocking is intentional"})," (user must respond before continuing)",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Action requires explicit acknowledgment"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example Use Cases:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Confirm destructive action ("Delete this item?")'}),`
`,n.jsx(e.li,{children:"Rename item (single text input + save/cancel)"}),`
`,n.jsx(e.li,{children:"Simple yes/no decisions"}),`
`,n.jsx(e.li,{children:'"Are you sure?" confirmations'}),`
`,n.jsx(e.li,{children:'Quick single-field forms (e.g., "Add tag")'}),`
`,n.jsx(e.li,{children:"Warning messages requiring acknowledgment"}),`
`,n.jsx(e.li,{children:"Permission requests"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why Modal:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Forces user to make a decision before proceeding"}),`
`,n.jsx(e.li,{children:"Prevents accidental destructive actions"}),`
`,n.jsx(e.li,{children:"Short, focused interaction"}),`
`,n.jsx(e.li,{children:"Clear call to action with explicit dismiss"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"use-a-page-when",children:"Use a PAGE when:"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"Task is multi-step"})," or long-running",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"User is creating or configuring"})," a complex entity",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"User expects deep focus"})," and dedicated navigation",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Task requires its own URL"})," (shareable, bookmarkable)",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Workflow spans multiple sections"})," or views",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"User is browsing a full dataset"})," (not a preview)"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example Use Cases:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Create Vote (multi-step creation flow)"}),`
`,n.jsx(e.li,{children:"Create Survey (multi-step creation flow)"}),`
`,n.jsx(e.li,{children:"Schedule Meeting (multi-step creation flow)"}),`
`,n.jsx(e.li,{children:"Full table views (all votes, all surveys, all projects)"}),`
`,n.jsx(e.li,{children:"Detail pages for entities (Project Details, User Profile)"}),`
`,n.jsx(e.li,{children:"Settings pages (multi-section configuration)"}),`
`,n.jsx(e.li,{children:"Edit entity workflows (complex form with multiple steps)"}),`
`,n.jsx(e.li,{children:"Analytics dashboards (dedicated focus on data exploration)"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why Page:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Complex tasks deserve dedicated space"}),`
`,n.jsx(e.li,{children:"User expects navigation (URL change, back button)"}),`
`,n.jsx(e.li,{children:"Multi-step flows need persistent state"}),`
`,n.jsx(e.li,{children:"Full dataset browsing requires dedicated layout"}),`
`,n.jsx(e.li,{children:"Shareable URLs enable collaboration"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"explicit-anti-patterns-forbidden",children:"Explicit Anti-Patterns (Forbidden)"}),`
`,n.jsxs(e.p,{children:["The following patterns are ",n.jsx(e.strong,{children:"explicitly forbidden"})," in LFX One:"]}),`
`,n.jsx(e.h3,{id:"-do-not-use-modals-for",children:"❌ Do NOT use Modals for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Multi-step workflows (use Page with Creation Flow pattern instead)"}),`
`,n.jsx(e.li,{children:"Complex forms with multiple sections (use Page)"}),`
`,n.jsx(e.li,{children:"Long content that requires scrolling (use Drawer or Page)"}),`
`,n.jsx(e.li,{children:"Content that users need to reference while working elsewhere (use Drawer)"}),`
`,n.jsx(e.li,{children:"Anything that takes more than 30 seconds to complete (use Page)"}),`
`]}),`
`,n.jsx(e.h3,{id:"-do-not-use-drawers-for",children:"❌ Do NOT use Drawers for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Creation flows (use Page with Creation Flow pattern)"}),`
`,n.jsx(e.li,{children:"Multi-step configuration wizards (use Page)"}),`
`,n.jsx(e.li,{children:"Editing complex entities with many fields (use Page)"}),`
`,n.jsx(e.li,{children:"Tasks that require URL sharing (use Page)"}),`
`,n.jsx(e.li,{children:"Stacked drawers (drawer inside drawer) — forbidden"}),`
`]}),`
`,n.jsx(e.h3,{id:"-do-not-use-pages-for",children:"❌ Do NOT use Pages for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Quick inspections or detail views (use Drawer)"}),`
`,n.jsx(e.li,{children:"Simple confirmations (use Modal)"}),`
`,n.jsx(e.li,{children:"Lightweight filtering or search (use Drawer)"}),`
`,n.jsx(e.li,{children:"Temporary context that doesn't need a URL (use Drawer or Modal)"}),`
`]}),`
`,n.jsx(e.h3,{id:"-general-forbidden-patterns",children:"❌ General Forbidden Patterns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Stacking drawers:"})," Never open a drawer from inside a drawer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal chains:"})," Never open a modal from inside a modal"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Drawer → Modal:"})," Avoid opening modals from drawers (use single surface)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Page → Drawer → Modal:"})," Minimize surface nesting complexity"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"relationship-to-page-patterns",children:"Relationship to Page Patterns"}),`
`,n.jsx(e.p,{children:"This contract applies across all LFX One page patterns:"}),`
`,n.jsx(e.h3,{id:"dashboard-page-pattern",children:"Dashboard Page Pattern"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Default Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MetricCluster drill-down:"})," DRAWER (expanded chart, not a new page)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'ActionCard "View All":'})," DRAWER (My Actions drawer with search/filter)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Meeting details:"})," DRAWER (quick inspection without navigation)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create action (from dashboard CTA):"})," PAGE (use Creation Flow pattern)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dashboard is a summary surface"}),`
`,n.jsx(e.li,{children:"Details should preserve dashboard context"}),`
`,n.jsx(e.li,{children:"Users scan multiple metrics/actions → drawers support comparison"}),`
`,n.jsx(e.li,{children:"Creation is a deep task → deserves dedicated page"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"table-page-pattern",children:"Table Page Pattern"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Default Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Row click (inspection):"})," DRAWER (view details, not navigate away)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bulk actions confirmation:"})," MODAL (confirm before executing)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create new entity:"})," PAGE (navigate to Creation Flow)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Filter/search:"})," Inline (no drawer or modal needed)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigate to full entity details:"})," PAGE (if entity is complex enough)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Table Page is for browsing datasets"}),`
`,n.jsx(e.li,{children:"Inspecting rows should preserve table context"}),`
`,n.jsx(e.li,{children:"Creating entities requires dedicated focus → page"}),`
`,n.jsx(e.li,{children:"Confirmations for bulk actions prevent mistakes → modal"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"creation-flow-page-pattern",children:"Creation Flow Page Pattern"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Default Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Entire flow:"})," PAGE (multi-step, deep focus required)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Confirm cancellation:"})," MODAL (prevent accidental loss of work)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Add participant/attachment:"})," Inline or MODAL (if simple) or PAGE (if complex search)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Creation flows are multi-step and require focus"}),`
`,n.jsx(e.li,{children:"Users expect navigation (URL change, back button)"}),`
`,n.jsx(e.li,{children:"Preserving draft state requires page-level context"}),`
`,n.jsx(e.li,{children:"Lightweight sub-actions may use modals (but avoid complexity)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"segmented-table-page-pattern",children:"Segmented Table Page Pattern"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Default Behavior:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Same as Table Page (drawers for inspection, pages for creation)"}),`
`,n.jsx(e.li,{children:"Each table segment follows Table Page rules independently"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"agent-contract-normative",children:"Agent Contract (Normative)"}),`
`,n.jsxs(e.p,{children:["This section defines ",n.jsx(e.strong,{children:"binding rules for agents"})," generating interfaces in LFX One."]}),`
`,n.jsx(e.h3,{id:"required-behavior",children:"Required Behavior"}),`
`,n.jsx(e.p,{children:"Agents MUST:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Choose the interaction surface BEFORE designing layout"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Do not design first, then choose surface"}),`
`,n.jsx(e.li,{children:"Surface choice drives layout and interaction design"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Follow the rules above without exception"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use Drawer for detail inspection"}),`
`,n.jsx(e.li,{children:"Use Modal for confirmations"}),`
`,n.jsx(e.li,{children:"Use Page for creation and complex workflows"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Default conservatively when unclear:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Drawer"})," for inspection and lightweight actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Page"})," for creation and multi-step workflows"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal"})," ONLY for explicit confirmations"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Never violate anti-patterns:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"No stacked drawers"}),`
`,n.jsx(e.li,{children:"No multi-step modals"}),`
`,n.jsx(e.li,{children:"No drawer-based creation flows"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"decision-tree-for-agents",children:"Decision Tree for Agents"}),`
`,n.jsx(e.p,{children:"When instructed to create an interface, agents MUST ask:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Step 1: Is this a creation or multi-step workflow?"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["YES → Use ",n.jsx(e.strong,{children:"PAGE"})," (with Creation Flow pattern if applicable)"]}),`
`,n.jsx(e.li,{children:"NO → Continue to Step 2"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Step 2: Is this a confirmation or single-action decision?"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["YES → Use ",n.jsx(e.strong,{children:"MODAL"})]}),`
`,n.jsx(e.li,{children:"NO → Continue to Step 3"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Step 3: Is this inspection or contextual action?"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["YES → Use ",n.jsx(e.strong,{children:"DRAWER"})]}),`
`,n.jsx(e.li,{children:"NO → Re-evaluate requirements or ask for clarification"}),`
`]}),`
`,n.jsx(e.h3,{id:"ambiguity-resolution",children:"Ambiguity Resolution"}),`
`,n.jsx(e.p,{children:"When requirements are ambiguous, agents MUST:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Prioritize context preservation:"})," Default to Drawer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Respect task complexity:"})," Multi-step → Page"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ask before inventing:"})," If unclear, ask user before choosing"]}),`
`]}),`
`,n.jsx(e.h3,{id:"forbidden-agent-behavior",children:"Forbidden Agent Behavior"}),`
`,n.jsx(e.p,{children:"Agents MUST NOT:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Invent new interaction surfaces (only Drawer, Modal, Page exist)"}),`
`,n.jsx(e.li,{children:"Mix interaction models (e.g., drawer that behaves like a page)"}),`
`,n.jsx(e.li,{children:"Create stacked surfaces (drawer → drawer, modal → modal)"}),`
`,n.jsx(e.li,{children:'Bypass this contract based on "best practices" from other systems'}),`
`,n.jsx(e.li,{children:"Use modals for convenience when drawer or page is appropriate"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"why-this-matters",children:"Why This Matters"}),`
`,n.jsx(e.p,{children:"This contract exists to:"}),`
`,n.jsx(e.h3,{id:"prevent-ui-inconsistency",children:"Prevent UI Inconsistency"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Users develop muscle memory for interaction patterns"}),`
`,n.jsx(e.li,{children:"Inconsistent surface choice breaks mental models"}),`
`,n.jsx(e.li,{children:"Predictability reduces cognitive load"}),`
`]}),`
`,n.jsx(e.h3,{id:"preserve-user-mental-models",children:"Preserve User Mental Models"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Drawer = "quick look, keep context"'}),`
`,n.jsx(e.li,{children:'Modal = "decide now, blocking"'}),`
`,n.jsx(e.li,{children:'Page = "go somewhere, do something substantial"'}),`
`]}),`
`,n.jsx(e.h3,{id:"enable-agentic-generation-without-drift",children:"Enable Agentic Generation Without Drift"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Agents need deterministic rules"}),`
`,n.jsx(e.li,{children:"Without this contract, agents guess based on training data"}),`
`,n.jsx(e.li,{children:"Guessing leads to inconsistent UX across generated interfaces"}),`
`]}),`
`,n.jsx(e.h3,{id:"align-with-real-lfx-one-behavior",children:"Align with Real LFX One Behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["This contract documents ",n.jsx(e.strong,{children:"actual LFX One patterns"})]}),`
`,n.jsx(e.li,{children:"Not speculative or aspirational"}),`
`,n.jsxs(e.li,{children:["Reflects design decisions already made in:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Board Member Dashboard"}),`
`,n.jsx(e.li,{children:"Contributor Dashboard"}),`
`,n.jsx(e.li,{children:"Maintainer Dashboard"}),`
`,n.jsx(e.li,{children:"Votes, Surveys, Groups pages"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"final-rule",children:"Final Rule"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:`If an agent or developer produces an interface that violates this contract,
the output is architecturally incorrect, regardless of visual quality.`})}),`
`,n.jsxs(e.p,{children:["This contract is ",n.jsx(e.strong,{children:"non-negotiable"})," and applies to:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"All existing pages"}),`
`,n.jsx(e.li,{children:"All future pages"}),`
`,n.jsx(e.li,{children:"All agent-generated interfaces"}),`
`,n.jsx(e.li,{children:"All human-authored components"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When in doubt:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reference this document"}),`
`,n.jsx(e.li,{children:"Choose conservatively (Drawer > Page > Modal)"}),`
`,n.jsx(e.li,{children:"Ask for clarification before violating the contract"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"revision-history",children:"Revision History"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"2026-01-28:"})," Initial canonical contract established"]}),`
`]})]})}function j(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
