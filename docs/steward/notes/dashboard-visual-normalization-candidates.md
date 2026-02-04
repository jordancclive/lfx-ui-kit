# Dashboard Visual Normalization Candidates

**Date:** 2026-02-03  
**Analysis Scope:** Board Member Dashboard, Maintainer Dashboard  
**Phase:** Step 3 - Visual Normalization Candidates (Analysis Only)

---

## Purpose

This document identifies visual patterns that appear duplicated across validated dashboard examples.

This is an observational analysis. No extraction is happening yet.

This document exists to:
- Name candidate patterns based on evidence
- Document where duplication occurs
- Group identical visual structures
- Provide evidence for future extraction decisions

This document does NOT:
- Propose component APIs
- Recommend immediate action
- Define implementation approaches
- Lock in extraction decisions

---

## Candidate Summary Table

| Candidate Name | Appears In | Instance Count | Evidence Type | Extraction Status |
|----------------|------------|----------------|---------------|-------------------|
| Section Header Pattern | Board Member, Maintainer | 6 total (3 per dashboard) | Character-for-character duplication | NOT EXTRACTED |
| Action Card Factory | Board Member, Maintainer | 2 factories (1 per dashboard) | Identical meta structure pattern | NOT EXTRACTED |
| Meeting Card Factory | Board Member, Maintainer | 2 factories (1 per dashboard) | Identical meta structure pattern | NOT EXTRACTED |
| ChartCard Value Element Construction | Board Member, Maintainer | 4 instances (2 per dashboard) | Identical manual element creation | NOT EXTRACTED |

---

## Candidate 1: Section Header Pattern

### Description

A flexbox header component with title on left and action button on right, appearing inside Card wrappers above section content.

### Where It Appears

**Board Member Dashboard:**
- Line 340-436: Pending Actions section header
- Line 554-580: Upcoming Meetings section header
- Line 670-696: Recent Activity section header

**Maintainer Dashboard:**
- Line 441-529: Pending Actions section header
- Line 636-662: Upcoming Meetings section header
- Line 804-830: Recent Activity section header

### What Is Identical

**Layout:**
- `display: flex`
- `justifyContent: space-between`
- `alignItems: center`
- `marginBottom: var(--spacing-12)`
- `padding: var(--spacing-12) var(--spacing-12) 0`

**Title styling:**
- `fontSize: var(--ui-text-section-title-font-size)`
- `fontWeight: var(--ui-text-section-title-font-weight)`
- `color: var(--text-primary)`
- `margin: 0`

**Button props:**
- `variant: 'secondary'`
- `size: 'small'`

### What Varies

**Content only:**
- Title text: "Pending Actions", "Upcoming Meetings", "Recent Activity"
- Button label: "View All", "Schedule Meeting"
- onClick behavior (content-specific)

### Why This Qualifies as a Candidate

- Pattern appears 6 times across 2 dashboards
- Implementations are character-for-character identical except for content strings
- Inline styles create maintenance burden
- No structural variations observed

### Why Extraction Is Deferred

- Requires 3rd role validation to confirm pattern stability
- Current duplication does not block dashboard functionality
- Premature extraction could introduce rigidity

---

## Candidate 2: Action Card Factory

### Description

A SummaryCard factory function that creates action summary cards with a specific meta structure: context text + priority Tag component.

### Where It Appears

**Board Member Dashboard:**
- Line 252-335: `createActionCard` function inside `createPendingActionsSection`

**Maintainer Dashboard:**
- Line 362-436: `createActionCard` function inside `createPendingActionsSection`

### What Is Identical

**Meta row structure:**
- Flexbox container with `gap: var(--spacing-8)`
- Contains text span + Tag component
- Tag variant mapping: high → danger, medium → warning, low → default

**SummaryCard props:**
- `title` (from config)
- `body` (HTMLElement with description text)
- `meta` (constructed flexbox row)
- `onClick` (opens drawer)

**Drawer integration:**
- Drawer title matches action title
- Drawer body uses innerHTML with structured h4 + p blocks
- Drawer footer uses Button with "Review Action →" label

### What Varies

**Content only:**
- Board Member: dueDate field in config
- Maintainer: context field in config
- Meta row displays different text based on role

### Why This Qualifies as a Candidate

- Factory function duplicated in both dashboards
- Meta structure pattern consistent within action card type
- SummaryCard usage pattern identical
- Drawer integration pattern identical

### Why Extraction Is Deferred

- Card type specialization requires multi-role validation
- Current factory approach provides clarity during validation phase
- API surface not yet clear (which props are universal vs role-specific)

---

## Candidate 3: Meeting Card Factory

### Description

A SummaryCard factory function that creates meeting summary cards with a specific meta structure: date/time + attendee count.

### Where It Appears

**Board Member Dashboard:**
- Line 477-548: `createMeetingCard` function inside `createMeetingSummarySection`

**Maintainer Dashboard:**
- Line 566-630: `createMeetingCard` function inside `createMeetingSummarySection`

### What Is Identical

**Meta content structure:**
- Date/time div with margin bottom: `var(--spacing-4)`
- Attendee count div below
- Both use textContent for meta values

**SummaryCard props:**
- `title` (meeting title)
- `meta` (constructed div container)
- `onClick` (opens drawer)

**Drawer integration:**
- Drawer title matches meeting title
- Drawer body uses innerHTML with h4 + p blocks for Date & Time, Expected Attendees, Agenda
- Drawer footer uses Button with "View meeting →" label

### What Varies

**Content only:**
- Meeting titles differ by role
- Date/time values differ by role
- Attendee counts differ by role

### Why This Qualifies as a Candidate

- Factory function duplicated in both dashboards
- Meta structure pattern consistent within meeting card type
- SummaryCard usage pattern identical
- Drawer integration pattern identical

### Why Extraction Is Deferred

- Meeting card semantics require multi-role validation
- Current factory approach provides clarity during validation phase
- API surface not yet clear (date formatting, attendee display options)

---

## Candidate 4: ChartCard Value Element Construction

### Description

Manual HTMLElement creation for ChartCard value and meta displays using document.createElement with inline style assignments.

### Where It Appears

**Board Member Dashboard:**
- Line 168-177: Activity Trend value + meta elements

**Maintainer Dashboard:**
- Line 86-95: Issue Backlog value + meta elements
- Line 154-163: PR Velocity value + meta elements
- Line 287-296: CI Stability value + meta elements

### What Is Identical

**Value element pattern:**
```
const valueElement = document.createElement('div');
valueElement.textContent = '<value>';
valueElement.style.fontSize = 'var(--ui-text-metric-value-font-size)';
valueElement.style.fontWeight = 'var(--ui-text-metric-value-font-weight)';
valueElement.style.color = 'var(--text-primary)' or 'var(--success-600)';
```

**Meta element pattern:**
```
const metaElement = document.createElement('div');
metaElement.textContent = '<meta text>';
metaElement.style.fontSize = 'var(--ui-text-label-font-size)';
metaElement.style.color = 'var(--text-secondary)' or 'var(--success-600)';
```

### What Varies

**Content only:**
- Value text content
- Meta text content
- Color selection based on positive/negative/neutral sentiment

### Why This Qualifies as a Candidate

- Pattern repeated 4+ times across dashboards
- Inline style assignments create verbosity
- Token references are consistent
- Structure is identical

### Why Extraction Is Deferred

- ChartCard component API may need refinement to support simpler value passing
- Current verbosity does not block functionality
- Component-level decision, not pattern-level

---

## Explicit Non-Actions

The following are intentionally NOT done in this document:

- No component APIs proposed
- No extraction implementation performed
- No token changes suggested
- No spacing normalization applied
- No refactoring of existing dashboards
- No new abstractions introduced
- No recommendations phrased as requirements

This document identifies patterns only. Extraction requires a separate, explicit step.

---

## Steward Conclusion

### Readiness Assessment

Both Board Member and Maintainer dashboards demonstrate sufficient structural consistency for visual normalization to proceed.

Evidence:
- Section header pattern duplicated 6 times with zero structural variation
- Card factory patterns consistent within card type across roles
- ChartCard value element construction consistent across all metric cards
- No visual inconsistencies that would block extraction

### Prerequisites Met

- 2 roles validated (Board Member, Maintainer)
- Pattern stability confirmed
- Duplication documented with line-level evidence
- No structural deviations observed

### Next Steps

Visual normalization candidates are documented and ready for extraction.

Extraction requires:
- Explicit decision to proceed with extraction
- Component API design phase
- Incremental extraction (one candidate at a time)
- Validation after each extraction

This document does not authorize extraction. Extraction is a separate phase.

---

## Validation Checklist

Final confirmation:

- [ ] No code was changed
- [ ] No components were added
- [ ] No APIs were designed
- [ ] This file is safe to commit
- [ ] All observations are factual
- [ ] No recommendations are prescriptive
- [ ] Extraction is clearly deferred
