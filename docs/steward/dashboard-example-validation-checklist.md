# Dashboard Example Validation Checklist (v1)

**Owned by the Design System Steward Agent**

---

## Purpose

This checklist validates that a dashboard page example is structurally and behaviorally correct according to the Dashboard Page Pattern.

**Important:** This checklist does NOT validate visual polish, spacing precision, or token consistency. Those concerns are addressed separately after structural validation passes.

Visual normalization happens ONLY AFTER this checklist passes. Premature visual lock-in is explicitly discouraged.

---

## Validation Checklist

### Structural Composition

- [ ] Page uses `AppShell` as root container
- [ ] Page uses `PageLayout` inside `AppShell`
- [ ] Page includes `AppHeader` component
- [ ] All content is wrapped in `PageSection` components
- [ ] No content exists outside of `PageSection`
- [ ] Each section uses only allowed section archetypes from Dashboard Pattern
- [ ] No custom or ad-hoc layout containers are introduced

### Section Ordering (Priority-Based)

- [ ] Metric Carousel sections appear before Action/Meeting sections (when both present)
- [ ] Action Summary and Meeting Summary sections are adjacent (when both present)
- [ ] Table Preview sections appear after Action/Meeting sections (when present)
- [ ] Strategic Alert sections appear at top (Executive Director only)
- [ ] Section ordering matches role expectations from Dashboard Pattern

### Interaction Contract Compliance

- [ ] All metric cards (`ChartCard`) are clickable
- [ ] Clicking a metric card triggers drawer open (not navigation)
- [ ] All summary cards (`SummaryCard`) are clickable (when applicable)
- [ ] Clicking a summary card triggers drawer open (not navigation)
- [ ] "View All" links escalate to drawer or page as specified by pattern
- [ ] No summary cards navigate directly to full pages
- [ ] Drawer interactions follow Interaction Surface Contract (`docs/interaction-surfaces.md`)
- [ ] Charts follow Insights Escalation Contract (`docs/insights-escalation-contract.md`)

### Card Semantics & Reuse

- [ ] All metric cards use `ChartCard` component
- [ ] All action/meeting cards use `SummaryCard` component
- [ ] Cards use only slots defined by component APIs
- [ ] No custom card variants are introduced
- [ ] Card click handlers are attached at card level (not nested elements)
- [ ] Cards do not contain nested interactive elements beyond component contract

### Role Alignment

- [ ] Dashboard role is explicitly identified (Board Member, Contributor, Maintainer, Executive Director)
- [ ] All sections present are allowed for that role per Dashboard Pattern
- [ ] No forbidden section types are included for the role
- [ ] Section content aligns with role responsibilities
- [ ] Metric and action semantics match role context

### Known & Accepted Gaps

- [ ] Missing real data is acknowledged (placeholder data acceptable)
- [ ] Missing drawer implementations are documented (stubs acceptable)
- [ ] Missing chart rendering is noted (placeholder charts acceptable)
- [ ] Any deferred features are explicitly listed
- [ ] No gaps are hidden or glossed over

### Validation Outcome

- [ ] All structural requirements pass
- [ ] All interaction contracts are followed
- [ ] All role-specific rules are satisfied
- [ ] All known gaps are documented
- [ ] Example is ready for visual normalization phase

---

## Validation Notes

Use this section to document findings, blockers, or clarifications during validation.

**Example entry format:**
```
- [PASS] Structural Composition — All sections use allowed archetypes
- [FAIL] Interaction Contract — ChartCard #3 navigates instead of opening drawer
- [NOTED] Missing drawer implementation for "My Actions" — stub present
```

---

## Post-Validation Next Steps

Once this checklist passes:

1. Visual normalization may begin (spacing, alignment, token consistency)
2. Interaction polish may be applied (transitions, loading states)
3. Real data integration may proceed
4. Drawer implementations may be completed

Do NOT begin these steps until structural validation passes.

---

## Version History

- **v1** (2026-02-03) — Initial checklist based on Dashboard Pattern documentation
