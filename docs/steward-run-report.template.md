# Design System Steward Run Report

> **Template Version:** 1.0  
> **Purpose:** Human-readable, structured output for steward enforcement runs

---

## 1. Run Metadata

| Field | Value |
|-------|-------|
| **Run Date** | `YYYY-MM-DD HH:MM` |
| **Agent Version** | `steward-checklist.v1.yaml` |
| **Scope** | `full-repo` / `incremental` / `focused` |
| **Execution Mode** | `read-only` / `report` / `optional-refactor` |
| **Files Scanned** | `NNN` |
| **Checks Executed** | `14` |
| **Total Findings** | `NNN` |

---

## 2. Executive Summary

<!-- Maximum 6 bullets. Use this format: -->

- ✅ **System is production-ready** / ⚠️ **N blocking issues found** / 🔴 **Critical violations detected**
- Token system: `clean` / `minor drift` / `requires attention`
- Component boundaries: `respected` / `N violations`
- Documentation: `consistent` / `N labeling issues`
- Storybook: `stable` / `N broken stories`
- CI/Chromatic: `healthy` / `requires fix`

---

## 3. System Health Score

<!-- Qualitative assessment only. No numeric score. -->

**Overall:** `Excellent` / `Good` / `Needs Attention` / `Requires Immediate Action`

**Rationale:**
- [Brief 1-2 sentence explanation of the score]

---

## 4. Findings by Category

### Tokens

| Check ID | Severity | Count | Status |
|----------|----------|-------|--------|
| `token_drift_detection` | high | N | ✅ / ⚠️ / 🔴 |
| `control_size_standardization` | medium | N | ✅ / ⚠️ / 🔴 |
| `transition_duration_consistency` | medium | N | ✅ / ⚠️ / 🔴 |
| `elevation_token_usage` | high | N | ✅ / ⚠️ / 🔴 |

**Summary:** [1-2 sentences on token system health]

---

### Components

| Check ID | Severity | Count | Status |
|----------|----------|-------|--------|
| `component_boundary_violation` | high | N | ✅ / ⚠️ / 🔴 |
| `unused_component_detection` | low | N | ✅ / ⚠️ / 🔴 |

**Summary:** [1-2 sentences on component architecture health]

---

### Patterns

| Check ID | Severity | Count | Status |
|----------|----------|-------|--------|
| `pattern_usage_reality` | medium | N | ✅ / ⚠️ / 🔴 |
| `aspirational_pattern_labeling` | medium | N | ✅ / ⚠️ / 🔴 |

**Summary:** [1-2 sentences on pattern validation health]

---

### Documentation

| Check ID | Severity | Count | Status |
|----------|----------|-------|--------|
| `documentation_tiering` | low | N | ✅ / ⚠️ / 🔴 |
| `experimental_component_labeling` | low | N | ✅ / ⚠️ / 🔴 |
| `contract_conflict_detection` | high | N | ✅ / ⚠️ / 🔴 |
| `insights_escalation_compliance` | critical | N | ✅ / ⚠️ / 🔴 |
| `title_redundancy_detection` | low | N | ✅ / ⚠️ / 🔴 |

**Summary:** [1-2 sentences on documentation health]

---

### CI / Storybook

| Check ID | Severity | Count | Status |
|----------|----------|-------|--------|
| `broken_story_detection` | critical | N | ✅ / ⚠️ / 🔴 |

**Summary:** [1-2 sentences on Storybook health]

---

## 5. High-Risk Issues (P0)

<!-- Critical or High severity. Must be fixed before next release. -->

### 🔴 [Issue Title]

**Check ID:** `check_id_from_yaml`  
**Severity:** `critical` / `high`  
**Affected Files:**
- `path/to/file1.ts`
- `path/to/file2.css`

**Description:**
[1-2 sentence explanation of what is wrong and why it matters]

**Recommended Action:**
[Specific, actionable fix description]

**Cursor Prompt Reference:** See #1 in Section 8

---

<!-- Repeat for each P0 issue -->

---

## 6. Medium-Risk Issues (P1)

<!-- Medium severity. Should be fixed in next sprint/cycle. -->

### ⚠️ [Issue Title]

**Check ID:** `check_id_from_yaml`  
**Severity:** `medium`  
**Affected Files:**
- `path/to/file.ts`

**Description:**
[1-2 sentence explanation]

**Recommended Action:**
[Specific fix]

**Cursor Prompt Reference:** See #N in Section 8

---

<!-- Repeat for each P1 issue -->

---

## 7. Low-Risk Observations (P2)

<!-- Low severity. Nice to fix when convenient. -->

### 💡 [Observation Title]

**Check ID:** `check_id_from_yaml`  
**Severity:** `low`  
**Affected Files:**
- `path/to/file.ts`

**Description:**
[1-2 sentence explanation]

**Recommended Action:**
[Specific fix]

**Cursor Prompt Reference:** See #N in Section 8

---

<!-- Repeat for each P2 observation -->

---

## 8. Recommended Cursor Prompts (Ordered)

<!-- Ordered by priority (P0 → P1 → P2). Each prompt should be copy-pasteable. -->

### Prompt #1: [Short Title]

**Priority:** P0 / P1 / P2  
**Related Check:** `check_id_from_yaml`  
**Estimated Effort:** Small / Medium / Large  
**Dependencies:** None / "Must complete Prompt #N first"

**Cursor Prompt:**
```
GOAL
[Clear, specific goal statement]

STRICT SCOPE
✅ MAY MODIFY
- [Specific files]

❌ MUST NOT MODIFY
- [Everything else]

REQUIREMENTS
1. [Specific requirement]
2. [Specific requirement]

OUTPUT
- Commit message: "type(scope): description"
```

---

### Prompt #2: [Short Title]

<!-- Repeat structure for each recommended prompt -->

---

## 9. Deferred Items (Explicitly Non-Blocking)

<!-- Items intentionally not fixed. Document why. -->

| Item | Check ID | Reason Deferred | Revisit When |
|------|----------|-----------------|--------------|
| [Description] | `check_id` | [Why it's okay to defer] | [Milestone / Date / "Never"] |

**Examples:**
- "Unused experimental component FilterPill" / `unused_component_detection` / "Waiting for AppHeader usage pattern to solidify" / "Q2 2026"
- "Minor token drift in ECharts config" / `token_drift_detection` / "Library requires direct values" / "Never"

---

## 10. Steward Notes (Optional)

<!-- Agent-level observations not tied to specific checks. Use sparingly. -->

- [Optional architectural observation]
- [Optional trend observation]
- [Optional meta-comment about system maturity]

**Example:**
- "Dashboard pattern has been validated and is ready to graduate from OBSERVED to Canonical"
- "Component boundary discipline is excellent; no violations in 6 months"

---

## Appendix: Check Reference

<!-- Quick lookup table for all checks -->

| Check ID | Severity | Category | Status This Run |
|----------|----------|----------|-----------------|
| `token_drift_detection` | high | Tokens | ✅ / ⚠️ / 🔴 |
| `control_size_standardization` | medium | Tokens | ✅ / ⚠️ / 🔴 |
| `transition_duration_consistency` | medium | Tokens | ✅ / ⚠️ / 🔴 |
| `elevation_token_usage` | high | Tokens | ✅ / ⚠️ / 🔴 |
| `component_boundary_violation` | high | Components | ✅ / ⚠️ / 🔴 |
| `unused_component_detection` | low | Components | ✅ / ⚠️ / 🔴 |
| `pattern_usage_reality` | medium | Patterns | ✅ / ⚠️ / 🔴 |
| `aspirational_pattern_labeling` | medium | Patterns | ✅ / ⚠️ / 🔴 |
| `documentation_tiering` | low | Documentation | ✅ / ⚠️ / 🔴 |
| `experimental_component_labeling` | low | Documentation | ✅ / ⚠️ / 🔴 |
| `contract_conflict_detection` | high | Documentation | ✅ / ⚠️ / 🔴 |
| `insights_escalation_compliance` | critical | Documentation | ✅ / ⚠️ / 🔴 |
| `title_redundancy_detection` | low | Documentation | ✅ / ⚠️ / 🔴 |
| `broken_story_detection` | critical | CI/Storybook | ✅ / ⚠️ / 🔴 |

---

## Template Usage Notes

### For Agents

1. Load `docs/steward-checklist.v1.yaml`
2. Execute all checks
3. Fill this template with findings
4. Order Cursor prompts by priority
5. Present report to user

### For Humans

1. Scan Executive Summary first
2. Jump to High-Risk Issues if any
3. Review ordered Cursor prompts
4. Execute prompts in sequence
5. Re-run steward to verify fixes

### Report Retention

- Store completed reports in: `docs/steward-runs/YYYY-MM-DD.md`
- Keep last 6 reports for trend analysis
- Archive older reports annually

---

**Template Version:** 1.0  
**Last Updated:** 2026-02-02  
**Maintained By:** Design System Steward Agent
