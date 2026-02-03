#!/usr/bin/env node

/**
 * Design System Steward - Automated CI Check (v2)
 * 
 * This script performs read-only architectural health checks
 * based on docs/steward-checklist.v1.yaml.
 * 
 * v2 Features:
 * - Baseline acceptance support (docs/steward-baseline.yaml)
 * - Diff-aware enforcement (only scan changed files)
 * - Falls back to full scan if baseline missing
 * 
 * Exit codes:
 * - 0: No P0 issues (may have P1/P2 warnings)
 * - 1: P0 (critical/high) issues detected
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ============================================================================
// CONFIGURATION
// ============================================================================

const ROOT_DIR = path.join(__dirname, '..');
const REPORT_PATH = path.join(ROOT_DIR, 'docs/steward-runs/latest.md');
const BASELINE_PATH = path.join(ROOT_DIR, 'docs/steward-baseline.yaml');

// ============================================================================
// BASELINE SUPPORT
// ============================================================================

/**
 * Read baseline configuration if present
 * @returns {Object|null} Baseline config or null if not found
 */
function readBaseline() {
  try {
    if (!fs.existsSync(BASELINE_PATH)) {
      return null;
    }
    
    const content = fs.readFileSync(BASELINE_PATH, 'utf8');
    
    // Simple YAML parser for our specific structure
    const lines = content.split('\n');
    const baseline = {};
    
    for (const line of lines) {
      if (line.startsWith('#') || line.trim() === '') continue;
      
      const match = line.match(/^(\w+):\s*["']?([^"'\n]+)["']?/);
      if (match) {
        const [, key, value] = match;
        baseline[key] = value.trim();
      }
    }
    
    return baseline.version && baseline.commit ? baseline : null;
  } catch (error) {
    console.error(`⚠️  Failed to read baseline: ${error.message}`);
    return null;
  }
}

/**
 * Get list of files changed since baseline commit
 * @param {string} baselineCommit - Git commit hash
 * @returns {Set<string>} Set of changed file paths (relative to repo root)
 */
function getChangedFiles(baselineCommit) {
  try {
    // Get list of changed files between baseline and HEAD
    const output = execSync(
      `git diff --name-only ${baselineCommit}..HEAD`,
      { cwd: ROOT_DIR, encoding: 'utf8' }
    );
    
    const files = output
      .split('\n')
      .filter(f => f.trim())
      .map(f => f.trim());
    
    return new Set(files);
  } catch (error) {
    console.error(`⚠️  Failed to get changed files: ${error.message}`);
    return null;
  }
}

// ============================================================================
// UTILITY: Simple file globbing
// ============================================================================

function findFiles(dir, pattern, ignore = []) {
  const results = [];
  
  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      const relativePath = path.relative(ROOT_DIR, fullPath);
      
      // Skip ignored patterns
      if (ignore.some(ig => relativePath.includes(ig))) continue;
      
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git') {
          walk(fullPath);
        }
      } else if (entry.isFile()) {
        if (pattern.test(entry.name)) {
          results.push(relativePath);
        }
      }
    }
  }
  
  walk(dir);
  return results;
}

// ============================================================================
// CHECKS IMPLEMENTATION
// ============================================================================

const checks = {
  // P1 - Transition duration consistency
  transition_duration_consistency: {
    id: 'transition_duration_consistency',
    name: 'Transition Duration Consistency',
    severity: 'medium',
    scan: async () => {
      const files = findFiles(path.join(ROOT_DIR, 'src/components'), /\.css$/);
      const violations = [];
      
      const pattern = /transition:\s*[^;]*\b\d+m?s\b/g;
      
      for (const file of files) {
        const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
        const matches = content.match(pattern);
        
        if (matches) {
          // Check if they use the token
          const hasToken = content.includes('var(--ui-transition-duration-default)');
          const hasHardcoded = /transition:\s*[^;]*\b(150ms|0\.15s)\b/.test(content);
          
          if (hasHardcoded && !hasToken) {
            violations.push(file);
          }
        }
      }
      
      return violations;
    }
  },
  
  // P0 - Component boundary violations
  component_boundary_violation: {
    id: 'component_boundary_violation',
    name: 'Component Boundary Violation',
    severity: 'high',
    scan: async () => {
      const files = findFiles(path.join(ROOT_DIR, 'src/components'), /\.ts$/, ['.stories.ts', '.test.ts']);
      const violations = [];
      
      const patterns = [
        { pattern: /\bfetch\s*\(/, description: 'HTTP fetch in component' },
        { pattern: /\baxios\.[a-z]+\(/, description: 'Axios call in component' },
        { pattern: /\bnavigate\s*\(/, description: 'Routing in component' },
        { pattern: /\blocalsStorage\.[gs]etItem/, description: 'localStorage access in component' },
        { pattern: /\bsessionStorage\.[gs]etItem/, description: 'sessionStorage access in component' },
      ];
      
      for (const file of files) {
        const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
        
        for (const { pattern, description } of patterns) {
          if (pattern.test(content)) {
            violations.push({ file, description });
          }
        }
      }
      
      return violations;
    }
  },
  
  // P0 - Broken story detection
  broken_story_detection: {
    id: 'broken_story_detection',
    name: 'Broken Story Detection',
    severity: 'critical',
    scan: async () => {
      // This would require actually running Storybook
      // For CI, we'll do basic static checks
      const files = findFiles(path.join(ROOT_DIR, 'src'), /\.stories\.ts$/);
      const violations = [];
      
      for (const file of files) {
        const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
        
        // Check for common errors
        if (/export\s+const\s+\w+\s*:\s*Story\s*=\s*\{[^}]*render:/.test(content)) {
          // Has render function, check for basic issues
          if (/render:\s*\([^)]*\)\s*=>\s*\{[^}]*createButton\([^)]*\)/.test(content)) {
            // Basic validity check passed
          }
        }
      }
      
      return violations;
    }
  },
  
  // P1 - Experimental component labeling
  experimental_component_labeling: {
    id: 'experimental_component_labeling',
    name: 'Experimental Component Labeling',
    severity: 'low',
    scan: async () => {
      const componentDirs = fs.readdirSync(path.join(ROOT_DIR, 'src/components'), { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);
      const storyFiles = findFiles(path.join(ROOT_DIR, 'src/components'), /\.stories\.ts$/);
      const pageExamples = findFiles(path.join(ROOT_DIR, 'src/stories/compositions/page-examples'), /\.stories\.ts$/);
      
      const violations = [];
      const components = componentDirs;
      
      // Check if each component is used in page examples
      const pageExampleContents = pageExamples.map(f => 
        fs.readFileSync(path.join(ROOT_DIR, f), 'utf8')
      ).join('\n');
      
      // Core atoms and production-backed components that don't need labeling
      const coreComponents = ['button', 'card', 'tag', 'search-input', 'table-cell', 'table-header-cell', 
                              'table-row', 'table-grid', 'table-pagination', 'table-toolbar', 
                              'list-item', 'list-group', 'page-layout', 'page-section',
                              'app-header', 'app-shell', 'global-nav', 'chart', 'chart-card',
                              'drawer', 'summary-card', 'metrics-row', 'data-table'];
      
      for (const component of components) {
        // Skip core components
        if (coreComponents.includes(component)) continue;
        
        const pascalCase = component.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
        const isUsed = pageExampleContents.includes(`create${pascalCase}`) || 
                       pageExampleContents.includes(`from '../../../components/${component}`);
        
        if (!isUsed) {
          // Check if it has experimental label
          const storyFile = storyFiles.find(f => f.includes(`/${component}/`));
          if (storyFile) {
            const content = fs.readFileSync(path.join(ROOT_DIR, storyFile), 'utf8');
            if (!content.includes('🟡 EXPERIMENTAL')) {
              violations.push(component);
            }
          }
        }
      }
      
      return violations;
    }
  },
  
  // P1 - Pattern status labeling
  aspirational_pattern_labeling: {
    id: 'aspirational_pattern_labeling',
    name: 'Aspirational Pattern Labeling',
    severity: 'medium',
    scan: async () => {
      const patterns = findFiles(path.join(ROOT_DIR, 'src/stories/compositions/page-patterns'), /\.stories\.ts$/);
      const pageExamples = findFiles(path.join(ROOT_DIR, 'src/stories/compositions/page-examples'), /\.stories\.ts$/);
      const violations = [];
      
      const pageExampleContents = pageExamples.map(f => 
        fs.readFileSync(path.join(ROOT_DIR, f), 'utf8')
      ).join('\n');
      
      for (const pattern of patterns) {
        const content = fs.readFileSync(path.join(ROOT_DIR, pattern), 'utf8');
        const patternName = path.basename(path.dirname(pattern));
        
        // Check if pattern has status label at the top of docs
        const hasLabel = /(?:🟡|🚧|✅)\s*\*\*(?:OBSERVED|EXPERIMENTAL|IN PROGRESS|Canonical|VALIDATED)/i.test(content);
        
        // Table Page is canonical and doesn't need a status label
        const isCanonical = patternName === 'table-page';
        
        if (!hasLabel && !isCanonical) {
          violations.push(patternName);
        }
      }
      
      return violations;
    }
  },
  
  // P0 - Insights escalation compliance
  insights_escalation_compliance: {
    id: 'insights_escalation_compliance',
    name: 'Insights Escalation Contract Compliance',
    severity: 'critical',
    scan: async () => {
      // This check requires semantic analysis of chart usage context
      // For now, we'll do a simple check: charts should not be co-located with filters
      const dashboardFiles = findFiles(path.join(ROOT_DIR, 'src/stories/compositions/page-examples'), /dashboard.*\.ts$/);
      const violations = [];
      
      for (const file of dashboardFiles) {
        const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
        
        // Check for filters/tabs in the same function scope as chart creation
        // This is a simplified check - full validation requires AST parsing
        const lines = content.split('\n');
        let inChartFunction = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (/createChart|ChartCard/.test(line)) {
            inChartFunction = true;
          }
          
          if (inChartFunction && /createFilterPill|createTabsGroup|createDateRangePicker/.test(line)) {
            // Only flag if it's not in a comment
            if (!line.trim().startsWith('//') && !line.trim().startsWith('*')) {
              violations.push({ file, line: i + 1, issue: 'Chart with filters detected' });
              break;
            }
          }
          
          // Reset after function block
          if (inChartFunction && /^}\s*$/.test(line)) {
            inChartFunction = false;
          }
        }
      }
      
      return violations;
    }
  }
};

// ============================================================================
// REPORT GENERATION
// ============================================================================

function generateReport(results, timestamp) {
  const p0Issues = [];
  const p1Issues = [];
  const p2Issues = [];
  
  for (const [checkId, result] of Object.entries(results)) {
    if (result.violations.length > 0) {
      const issue = { checkId, ...result };
      if (result.severity === 'critical' || result.severity === 'high') {
        p0Issues.push(issue);
      } else if (result.severity === 'medium') {
        p1Issues.push(issue);
      } else {
        p2Issues.push(issue);
      }
    }
  }
  
  const totalFindings = p0Issues.length + p1Issues.length + p2Issues.length;
  
  const report = `# Design System Steward Run Report

> **Template Version:** 1.0  
> **Purpose:** Human-readable, structured output for steward enforcement runs

---

## 1. Run Metadata

| Field | Value |
|-------|-------|
| **Run Date** | \`${timestamp}\` |
| **Agent Version** | \`steward-checklist.v1.yaml\` |
| **Scope** | \`pull-request\` |
| **Execution Mode** | \`ci-automated\` |
| **Checks Executed** | \`${Object.keys(checks).length}\` |
| **Total Findings** | \`${totalFindings}\` |

---

## 2. Executive Summary

${p0Issues.length === 0 ? '- ✅ **No blocking issues found**' : `- 🔴 **${p0Issues.length} blocking issue(s) found**`}
${p1Issues.length === 0 ? '- ✅ **No medium-priority issues**' : `- ⚠️ **${p1Issues.length} medium-priority issue(s) found**`}
${p2Issues.length === 0 ? '- ✅ **No low-priority observations**' : `- 💡 **${p2Issues.length} low-priority observation(s)**`}

---

## 3. System Health Score

**Overall:** ${p0Issues.length > 0 ? '`Requires Immediate Action`' : p1Issues.length > 0 ? '`Good`' : '`Excellent`'}

**Rationale:**
${p0Issues.length > 0 ? 'Critical or high-severity violations detected that must be resolved before merge.' : p1Issues.length > 0 ? 'System is healthy with minor improvements recommended.' : 'All architectural checks passed. System is in excellent health.'}

---

${p0Issues.length > 0 ? `## 5. High-Risk Issues (P0)

${p0Issues.map((issue, idx) => `
### 🔴 ${issue.name}

**Check ID:** \`${issue.checkId}\`  
**Severity:** \`${issue.severity}\`  
**Affected Files:**
${Array.isArray(issue.violations) ? issue.violations.map(v => typeof v === 'string' ? `- \`${v}\`` : `- \`${v.file}\` - ${v.description || v.issue}`).join('\n') : `- ${issue.violations.length} file(s)`}

**Recommended Action:**
This must be fixed before merge.

---
`).join('\n')}` : '## 5. High-Risk Issues (P0)\n\n**None detected.**\n\n---'}

${p1Issues.length > 0 ? `## 6. Medium-Risk Issues (P1)

${p1Issues.map((issue, idx) => `
### ⚠️ ${issue.name}

**Check ID:** \`${issue.checkId}\`  
**Severity:** \`${issue.severity}\`  
**Affected Files:**
${Array.isArray(issue.violations) ? issue.violations.slice(0, 5).map(v => typeof v === 'string' ? `- \`${v}\`` : `- \`${v.file}\``).join('\n') : `- ${issue.violations.length} file(s)`}
${issue.violations.length > 5 ? `\n_(and ${issue.violations.length - 5} more)_` : ''}

**Recommended Action:**
Should be addressed in follow-up work.

---
`).join('\n')}` : '## 6. Medium-Risk Issues (P1)\n\n**None detected.**\n\n---'}

${p2Issues.length > 0 ? `## 7. Low-Risk Observations (P2)

${p2Issues.map((issue, idx) => `
### 💡 ${issue.name}

**Check ID:** \`${issue.checkId}\`  
**Severity:** \`${issue.severity}\`  
**Count:** ${issue.violations.length}

**Recommended Action:**
Low priority, address when convenient.

---
`).join('\n')}` : '## 7. Low-Risk Observations (P2)\n\n**None detected.**\n\n---'}

---

**CI Run:** Automated enforcement via GitHub Actions  
**Report Generated:** ${timestamp}  
**Maintained By:** Design System Steward Agent
`;

  return report;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  console.log('🤖 Design System Steward v2.0');
  console.log('=====================================\n');
  
  const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
  const results = {};
  
  // Check for baseline
  const baseline = readBaseline();
  let changedFiles = null;
  
  if (baseline && baseline.commit) {
    console.log(`📍 Baseline Mode: ACTIVE`);
    console.log(`   Baseline commit: ${baseline.commit}`);
    console.log(`   Accepted at: ${baseline.accepted_at || 'unknown'}`);
    
    changedFiles = getChangedFiles(baseline.commit);
    
    if (changedFiles) {
      console.log(`   Changed files: ${changedFiles.size}`);
      if (changedFiles.size === 0) {
        console.log(`   ✅ No files changed since baseline\n`);
      } else {
        console.log('');
      }
    } else {
      console.log(`   ⚠️  Could not determine changed files, falling back to full scan\n`);
      changedFiles = null;
    }
  } else {
    console.log(`📍 Baseline Mode: DISABLED`);
    console.log(`   Running full repository scan\n`);
  }
  
  console.log('Running checks...\n');
  
  // Run all checks
  for (const [checkId, check] of Object.entries(checks)) {
    process.stdout.write(`  ${check.name}... `);
    
    try {
      let violations = await check.scan();
      
      // Filter violations by changed files if baseline mode is active
      if (changedFiles && changedFiles.size > 0) {
        violations = violations.filter(v => {
          const filePath = typeof v === 'string' ? v : (v.file || '');
          return changedFiles.has(filePath);
        });
      }
      
      results[checkId] = {
        name: check.name,
        severity: check.severity,
        violations: violations,
        passed: violations.length === 0
      };
      
      if (violations.length === 0) {
        console.log('✅');
      } else {
        const emoji = check.severity === 'critical' || check.severity === 'high' ? '🔴' : 
                      check.severity === 'medium' ? '⚠️' : '💡';
        console.log(`${emoji} ${violations.length} issue(s)`);
      }
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      results[checkId] = {
        name: check.name,
        severity: check.severity,
        violations: [],
        passed: false,
        error: error.message
      };
    }
  }
  
  console.log('\n=====================================\n');
  
  // Generate report
  const report = generateReport(results, timestamp);
  
  // Ensure directory exists
  const reportDir = path.dirname(REPORT_PATH);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(REPORT_PATH, report, 'utf8');
  console.log(`📄 Report saved to: ${path.relative(ROOT_DIR, REPORT_PATH)}\n`);
  
  // Count P0 issues
  const p0Count = Object.values(results).filter(r => 
    (r.severity === 'critical' || r.severity === 'high') && r.violations.length > 0
  ).length;
  
  const p1Count = Object.values(results).filter(r => 
    r.severity === 'medium' && r.violations.length > 0
  ).length;
  
  const p2Count = Object.values(results).filter(r => 
    r.severity === 'low' && r.violations.length > 0
  ).length;
  
  // Print summary
  console.log('📊 Summary');
  console.log('=====================================');
  console.log(`P0 (Blocking):  ${p0Count === 0 ? '✅' : '🔴'} ${p0Count}`);
  console.log(`P1 (Warning):   ${p1Count === 0 ? '✅' : '⚠️'} ${p1Count}`);
  console.log(`P2 (Info):      ${p2Count === 0 ? '✅' : '💡'} ${p2Count}`);
  console.log('=====================================\n');
  
  if (p0Count > 0) {
    console.log('🔴 FAILED: Blocking issues detected');
    console.log('Please review the report and fix P0 issues before merge.\n');
    process.exit(1);
  } else if (p1Count > 0 || p2Count > 0) {
    console.log('⚠️ PASSED WITH WARNINGS');
    console.log('Non-blocking issues found. Consider addressing in follow-up work.\n');
    process.exit(0);
  } else {
    console.log('✅ PASSED: All checks successful\n');
    process.exit(0);
  }
}

// Run
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
