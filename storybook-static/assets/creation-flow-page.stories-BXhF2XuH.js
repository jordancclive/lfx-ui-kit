import{c as B}from"./app-shell-B-fH2tfM.js";import{c as L}from"./page-layout-DDkSngPm.js";import{c as z}from"./app-header-BUQjadsZ.js";import{c as V}from"./page-section-CrtrbsFd.js";import{c as H}from"./card-DYIIZwu_.js";import{c as y}from"./button-CXimPVvh.js";import{b as G,c as X,a as c}from"./global-nav-l0iysLZC.js";function p(i){const e=document.createElement("span");return e.textContent=i,e}function v(i){const{stepNumber:e,title:n,description:a,state:d}=i,s=document.createElement("div");s.style.padding="var(--spacing-16)";const o=document.createElement("div");o.style.marginBottom="var(--spacing-12)";const r=document.createElement("div");r.textContent=`Step ${e}`,r.style.fontSize="12px",r.style.fontWeight="600",r.style.textTransform="uppercase",r.style.color="var(--text-muted)",r.style.marginBottom="var(--spacing-4)";const l=document.createElement("h3");if(l.textContent=n,l.style.fontSize="18px",l.style.fontWeight="600",l.style.margin="0",l.style.marginBottom=a?"var(--spacing-4)":"0",o.appendChild(r),o.appendChild(l),a){const u=document.createElement("p");u.textContent=a,u.style.fontSize="14px",u.style.color="var(--text-secondary)",u.style.margin="0",o.appendChild(u)}s.appendChild(o);const t=document.createElement("div");switch(t.style.padding="var(--spacing-8)",t.style.borderRadius="var(--border-radius-4)",t.style.fontSize="13px",t.style.fontStyle="italic",d){case"incomplete":t.textContent="[Form fields would appear here]",t.style.backgroundColor="var(--surface-secondary)",t.style.color="var(--text-muted)";break;case"in-progress":t.textContent="[User is filling out this step]",t.style.backgroundColor="var(--surface-info)",t.style.color="var(--text-primary)";break;case"complete":t.textContent="✓ Step complete",t.style.backgroundColor="var(--surface-success)",t.style.color="var(--text-primary)";break}return s.appendChild(t),H({children:[s]})}function j(i){const{label:e,enabled:n}=i,a=document.createElement("div");a.style.display="flex",a.style.justifyContent="flex-end",a.style.gap="var(--spacing-8)",a.style.paddingTop="var(--spacing-16)";const d=y({label:"Cancel",variant:"secondary"}),s=y({label:e,variant:"primary",disabled:!n});return a.appendChild(d),a.appendChild(s),a}function K(i){return G({activeItemId:i,children:[X([c({id:"dashboard",children:p("Dashboard")}),c({id:"meetings",children:p("Meetings")}),c({id:"votes",children:p("Votes")}),c({id:"surveys",children:p("Surveys")}),c({id:"groups",children:p("Groups")}),c({id:"settings",children:p("Settings")})])]})}function Q(i){const e=document.createElement("div");return e.style.maxWidth="1280px",e.style.margin="0 auto",e.appendChild(i),e}function Y(i){const{flowState:e}=i,n=[];n.push(v({stepNumber:1,title:"Meeting Details",description:"Provide basic information about the meeting",state:e==="initial"?"in-progress":"complete"})),e!=="initial"&&n.push(v({stepNumber:2,title:"Date & Time",description:"Schedule when the meeting will occur",state:e==="step-2-revealed"?"in-progress":"complete"})),(e==="step-3-revealed"||e==="ready-to-submit")&&n.push(v({stepNumber:3,title:"Participants",description:"Add attendees and set permissions",state:e==="step-3-revealed"?"in-progress":"complete"})),e==="ready-to-submit"&&n.push(v({stepNumber:4,title:"Review & Confirm",description:"Verify all details before scheduling",state:"in-progress"}));const a=j({label:"Schedule Meeting",enabled:e==="ready-to-submit"}),d=L({children:[z({title:"Schedule Meeting",description:"Create a new meeting and invite participants."}),V({children:[...n,a]})]}),s=K("meetings"),o=B({nav:s,content:d});return Q(o)}const ae={title:"2. Page Patterns / 4. Creation Flow Page",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## Creation Flow Page Pattern

**This is the canonical progressive disclosure creation flow pattern for LFX One.**

This pattern defines the standard workflow for creating or scheduling entities
in LFX One (Votes, Surveys, Groups, Mailing Lists, Meetings, etc).

This is a PATTERN, not an implementation.
This is DOCUMENTATION, not a component.

---

## Purpose

The Creation Flow Page pattern exists to provide a **consistent, predictable
creation experience** across all LFX One entity types.

It defines:
- How steps are sequenced and revealed
- Where form fields and validation appear
- How progress is communicated
- Where actions are placed

---

## When to Use

Use Creation Flow Page when:

- **Creating a new entity** that requires multiple pieces of information
- **The entity has natural logical steps** (e.g., Details → Configuration → Participants)
- **Validation is required** before proceeding to the next step
- **The creation action is irreversible** (e.g., scheduling a meeting, publishing a vote)
- **Users benefit from seeing their progress** through the workflow

Typical examples:
- Create Vote
- Create Survey
- Schedule Meeting (canonical example)
- Create Group
- Add Mailing List

---

## When NOT to Use

Do NOT use Creation Flow Page for:

- **Simple single-field additions** (use inline forms or quick-add buttons)
- **Quick actions** that don't require multiple steps (use modals)
- **Bulk operations** (use specialized bulk editing interfaces)
- **Editing existing entities** (use edit forms or detail pages)
- **Workflows with branching logic** (Creation Flow is linear only)

---

## Default Interaction Model: Progressive Disclosure

The Creation Flow Page uses **progressive disclosure** as its core interaction model.

### What is Progressive Disclosure?

Progressive disclosure means:
- Steps appear **sequentially** as prior steps are completed
- Completed steps remain **visible** (not hidden or collapsed)
- Users can **edit prior steps** without losing downstream work
- The next step is **revealed below** the current step
- The flow is **linear** (no skipping, no branching)

### Why Progressive Disclosure?

Progressive disclosure provides:
- ✅ **Clear focus:** One step at a time
- ✅ **Visible progress:** Users can see how far they've come
- ✅ **Preserved context:** Completed steps remain visible for reference
- ✅ **Easy correction:** Users can go back and edit without starting over
- ✅ **Predictable flow:** Always top-to-bottom, never hidden

### NOT: Multi-Page Wizards

Creation Flow is **NOT** a multi-page wizard.

Multi-page wizards:
- ❌ Hide prior steps
- ❌ Require navigation between pages
- ❌ Lose context between steps
- ❌ Make correction difficult

Creation Flow:
- ✅ Shows all completed steps
- ✅ Single-page experience
- ✅ Preserved context
- ✅ Easy editing

---

## Canonical Structure

\`\`\`
AppShell
└─ PageLayout
   ├─ AppHeader
   │  ├─ title: "Create [Entity]" or "Schedule [Entity]"
   │  └─ description (optional)
   └─ PageSection
      ├─ Step 1: Core Details (always visible)
      │  └─ Card (form fields)
      ├─ Step 2: Configuration (revealed after Step 1 complete)
      │  └─ Card (form fields)
      ├─ Step 3: Participants / Permissions (revealed after Step 2 complete)
      │  └─ Card (form fields)
      ├─ Step 4: Review & Confirm (revealed after Step 3 complete)
      │  └─ Card (summary of all inputs)
      └─ Primary Action Bar
         └─ Button: "Create [Entity]" or "Schedule [Entity]"
\`\`\`

---

## Required Elements

Every Creation Flow Page MUST include:

### 1. AppHeader with Clear Title

- Title format: "Create [Entity]" or "Schedule [Entity]"
- Example: "Schedule Meeting", "Create Vote", "Create Survey"
- Optional description to provide context

### 2. Sequential Steps in Cards

- Each step is wrapped in a **Card** component
- Steps appear in **PageSection**
- Steps are numbered (Step 1, Step 2, etc)
- Each step has a clear title and optional description

### 3. Step State Indication

Each step must clearly show its state:
- **Incomplete:** Not yet accessible
- **In Progress:** Currently being filled out
- **Complete:** Filled out and validated

### 4. Final Review Step

- **Always include a review step** as the final step
- Shows summary of all user inputs
- Allows users to verify before submission
- No new data entry in this step

### 5. Primary Action Bar

- Positioned **below all steps** at the bottom of the flow
- Contains primary action button: "Create [Entity]" or "Schedule [Entity]"
- Contains "Cancel" button as secondary action
- Primary action is **disabled** until all steps are complete

---

## Forbidden Patterns

The following patterns are **explicitly forbidden** in Creation Flow Pages:

### ❌ Multi-Page Wizards

Do NOT split steps across multiple pages with "Next" / "Previous" navigation.

### ❌ Collapsing Completed Steps

Do NOT hide or collapse completed steps entirely.
Users must be able to see and edit prior steps.

### ❌ Skipping Steps

Do NOT allow users to skip steps.
The flow is linear and enforced.

### ❌ Branch Logic

Do NOT introduce conditional branching based on user input.
Creation Flow is linear only.

### ❌ Inline Step Editing

Do NOT allow editing a prior step inline without visual indication.
If a user edits Step 1 after completing Step 3, this must be visually clear.

### ❌ Floating Action Buttons

Do NOT place the primary action button in a floating position.
It must be at the bottom of the flow, below all steps.

---

## Relationship to Other Page Patterns

### vs Table Page

- **Table Page:** Displays and manages existing entities
- **Creation Flow Page:** Creates new entities

Use Table Page to show lists.
Use Creation Flow Page to add items to those lists.

### vs Detail Page (Future)

- **Detail Page:** Shows details of a single existing entity
- **Creation Flow Page:** Creates a new entity

Use Detail Page to view/edit existing items.
Use Creation Flow Page to create new items.

### vs Modal Forms

- **Modal Forms:** Quick, single-purpose actions
- **Creation Flow Page:** Multi-step, complex creation workflows

Use Modal Forms for simple additions.
Use Creation Flow Page for structured, multi-step workflows.

---

## Canonical Example: Schedule Meeting

The **Schedule Meeting** flow is the canonical reference implementation:

### Step 1: Meeting Details
- Meeting title (required)
- Description (optional)
- Meeting type (dropdown)

### Step 2: Date & Time
- Date picker (required)
- Start time (required)
- End time (required)
- Timezone (required)
- Recurrence options (optional)

### Step 3: Participants
- Add attendees (search/select)
- Set permissions (host, participant, viewer)
- Optional: Add groups

### Step 4: Review & Confirm
- Summary of all inputs
- Meeting details
- Date & time display
- List of participants
- Confirmation message

### Primary Action
- Button: "Schedule Meeting"
- Enabled only when all steps complete
- Irreversible action

---

## Agent Contract (Normative)

This section defines the **authoritative contract** for agents generating pages
using the **Creation Flow Page** pattern.

This is not an example.
This is not guidance.
This is a binding contract.

### Purpose

The Creation Flow Page pattern exists to produce **deterministic, production-ready,
multi-step creation workflows** using a stable hierarchy of components, progressive
disclosure, and clear action placement.

Agents must follow this contract exactly.

### Required Behavior

When instructed to create a Creation Flow Page, an agent MUST:

- Use **progressive disclosure** as the default interaction model
- Reveal steps **sequentially** as prior steps are completed
- Keep completed steps **visible** (not hidden or collapsed)
- Wrap each step in a **Card** component
- Place all steps inside a **PageSection**
- Include a **final review step** before submission
- Place the primary action button **below all steps** at the bottom
- **Disable** the primary action button until all steps are complete
- Use title format: "Create [Entity]" or "Schedule [Entity]"
- Treat the creation action as **irreversible**

### Defaults (Must Be Preserved)

Unless explicitly instructed otherwise, agents MUST assume:

- **4 steps is the default** (Details, Configuration, Participants, Review)
- Steps are **numbered** (Step 1, Step 2, etc)
- Each step has a **title** and optional **description**
- Steps appear in **vertical sequence** (top to bottom)
- Step state is **visually indicated** (incomplete, in-progress, complete)
- Primary action is **at the bottom**, not floating
- Cancel button is **secondary action**, positioned left of primary action
- No branching logic (linear flow only)

### Forbidden Actions

Agents MUST NOT:

- Create multi-page wizards with "Next" / "Previous" navigation
- Hide or collapse completed steps entirely
- Allow users to skip steps
- Add branching logic based on user input
- Float the primary action button
- Enable the primary action button before all steps are complete
- Invent new flow variants without explicit instruction
- Place actions inside individual step cards
- Create single-step flows (use simple forms instead)
- Remove the final review step

If a requirement cannot be met within this contract,
the agent MUST stop and ask for clarification.

### Ambiguity Resolution Rule

When instructions are ambiguous, agents MUST:

1. Choose the most **conservative** interpretation
2. Prefer **progressive disclosure** over multi-page wizards
3. Preserve **linear step order** (no branching)
4. Include **all standard steps** (Details, Configuration, Participants, Review)
5. Keep completed steps **visible**

### Step Naming Conventions

When naming steps, agents SHOULD use these conventions:

- **Step 1:** Core Details, Basic Information, [Entity] Details
- **Step 2:** Configuration, Settings, Options
- **Step 3:** Participants, Permissions, Access, Recipients
- **Step 4:** Review & Confirm, Review, Summary

Agents MAY adjust names for domain specificity, but MUST maintain semantic clarity.

### Validation Requirements

Agents MUST enforce:

- **Step-level validation:** Each step must be valid before revealing the next
- **Field-level validation:** Required fields must be filled
- **Cross-step validation:** (Future) Dependencies between steps must be validated
- **Final validation:** Review step must validate all inputs before enabling action

### Action Placement

The primary action button MUST be:

- Positioned **below all steps** at the bottom of the PageSection
- Labeled "Create [Entity]" or "Schedule [Entity]"
- **Disabled** until all steps are complete and validated
- The **only way** to submit the flow

### Final Rule

If an agent produces output that differs structurally from the
Creation Flow Page pattern without explicit instruction, the output is incorrect.

This contract exists to prevent drift, preserve consistency, and ensure that
agent-generated creation flows remain production-ready.

---

## Interaction Behavior

Interaction behavior in Creation Flow follows the system-wide contract defined in  
**0. README → Interaction Surfaces (Drawer vs Modal vs Page)**.

- Entire creation flow → Page (this pattern)
- Confirmation before cancel → Modal
- Sub-actions within steps → Inline or Modal (keep simple)

---

## Future Extensibility Notes

This pattern is designed to be extended in the future with:

### Form System Integration (Future)

When the form system is implemented:
- Step Cards will contain actual form field components
- Validation will be automatic and declarative
- State management will be centralized
- Error handling will be consistent

### Step Editing Affordances (Future)

Future enhancements may include:
- Edit buttons on completed steps
- Visual indication when editing prior steps
- Automatic re-validation of downstream steps
- Warning when edits invalidate later steps

### Progress Indicators (Future)

Future enhancements may include:
- Progress bar showing % complete
- Step numbers in a vertical timeline
- Visual connection between steps

### Save Draft Functionality (Future)

Future enhancements may include:
- Auto-save draft state
- "Save Draft" button
- Resume incomplete flows
- Draft management

### What Will NOT Change

The following are **locked** and will not change:

- Progressive disclosure as the core interaction model
- Linear, non-branching flow
- Single-page experience (not multi-page wizard)
- Visible completed steps
- Final review step requirement
- Action placement at the bottom

---

## Architectural Guardrails

This pattern is part of the **LFX One page pattern system**.

### Core Principle

> **Each pattern owns exactly one structural concern.  
No pattern may re-implement layout or behavior owned by components.**

If something feels missing, it belongs in a **different layer**, not as an override.

### DO

- Use this pattern only for multi-step creation workflows
- Assume form components will exist in the future
- Rely on Card components for step containment
- Let components define spacing and layout
- Preserve the linear, progressive disclosure model

### DO NOT

- Re-implement form fields in the pattern itself
- Add custom validation logic in the pattern
- Create branching or conditional flows
- Remove required steps
- Change the action placement
- Invent new interaction models

### Ownership Boundaries (Locked)

| Layer | Owns |
|------|------|
| **Card (Level 2)** | Step containment, spacing |
| **Form Components (Future)** | Input fields, validation, state |
| **PageSection (Level 2)** | Vertical stacking of steps |
| **Creation Flow Pattern** | Step sequence, revelation order, action placement |
| **Page Examples** | Entity-specific field configuration |

> **No other ownership model is valid.**

If you find yourself wanting to violate this table, stop and redesign the layer instead of patching around it.

### Agent & Contributor Warning

If you feel tempted to:
- Add branching logic to a creation flow
- Hide completed steps
- Move the action button to a floating position
- Create a multi-page wizard

You are introducing architectural drift.

Consult the Design System Orientation before proceeding.
        `}}},argTypes:{flowState:{control:"select",options:["initial","step-2-revealed","step-3-revealed","ready-to-submit"],description:"Current state of the creation flow"}},render:i=>Y(i)},m={args:{flowState:"initial"}},g={args:{flowState:"step-2-revealed"}},h={args:{flowState:"step-3-revealed"}},f={args:{flowState:"ready-to-submit"}};var w,b,S,C,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    flowState: 'initial'
  }
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:`Initial state: Only Step 1 visible.

Demonstrates:
- First step is always visible
- User begins filling out core details
- Subsequent steps are not yet revealed
- Primary action is disabled`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};var T,x,F,E,D;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    flowState: 'step-2-revealed'
  }
}`,...(F=(x=g.parameters)==null?void 0:x.docs)==null?void 0:F.source},description:{story:`Step 2 revealed: User completed Step 1.

Demonstrates:
- Step 1 marked as complete
- Step 2 revealed below Step 1
- Progressive disclosure in action
- Primary action still disabled`,...(D=(E=g.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var A,M,N,R,k;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    flowState: 'step-3-revealed'
  }
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:`Step 3 revealed: User completed Steps 1 & 2.

Demonstrates:
- Steps 1 & 2 marked as complete
- Step 3 revealed below Step 2
- Context preserved (prior steps visible)
- Primary action still disabled`,...(k=(R=h.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};var U,O,I,q,W;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    flowState: 'ready-to-submit'
  }
}`,...(I=(O=f.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`Ready to submit: All steps complete, review step visible.

Demonstrates:
- All prior steps marked as complete
- Final review step visible
- User can verify all inputs
- Primary action NOW ENABLED
- Complete flow visible on single page`,...(W=(q=f.parameters)==null?void 0:q.docs)==null?void 0:W.description}}};const ne=["InitialState","Step2Revealed","Step3Revealed","ReadyToSubmit"];export{m as InitialState,f as ReadyToSubmit,g as Step2Revealed,h as Step3Revealed,ne as __namedExportsOrder,ae as default};
