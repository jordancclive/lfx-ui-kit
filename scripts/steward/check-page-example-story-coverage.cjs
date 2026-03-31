#!/usr/bin/env node

/**
 * Page Example Story Coverage Enforcer
 *
 * Enforces the architectural rule:
 *   Page Examples may only compose components that are documented
 *   with a Storybook story at their appropriate level.
 *
 * Rule:
 *   For every import in src/stories/compositions/page-examples/**
 *   that resolves into src/components/<name>/:
 *     - If that component directory contains a .css file
 *       (discriminator: it is a Storybook-facing UI component, not a utility)
 *     - Then it MUST also contain a .stories.ts file
 *
 * Why the .css discriminator?
 *   UI components own their visual surface and must be documented.
 *   Internal helpers, contracts, section builders, and utilities have
 *   no CSS — they fall through cleanly without false positives.
 *
 * Exit codes:
 *   0 — All page examples compose only documented components
 *   1 — One or more components are missing a story
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const ROOT_DIR         = path.join(__dirname, '..', '..');
const COMPONENTS_DIR   = path.join(ROOT_DIR, 'src', 'components');
const PAGE_EXAMPLES_DIR = path.join(ROOT_DIR, 'src', 'stories', 'compositions', 'page-examples');

// Matches relative imports pointing into src/components/
// Captures the component directory name
const IMPORT_RE = /from\s+['"]([^'"]*\/components\/([^/'"]+)[^'"]*)['"]/g;

// ============================================================================
// UTILITIES
// ============================================================================

/** Recursively find all files matching a suffix under a directory. */
function findFiles(dir, suffix) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      results.push(...findFiles(full, suffix));
    } else if (entry.isFile() && entry.name.endsWith(suffix)) {
      results.push(full);
    }
  }
  return results;
}

/** Return true if a directory contains at least one file with the given suffix. */
function dirContains(dir, suffix) {
  if (!fs.existsSync(dir)) return false;
  return fs.readdirSync(dir).some(f => f.endsWith(suffix));
}

// ============================================================================
// CHECK
// ============================================================================

function check() {
  const pageExampleFiles = findFiles(PAGE_EXAMPLES_DIR, '.stories.ts');

  // Map: componentName → { hasCss, hasStory, usedIn[] }
  const componentMap = new Map();

  for (const storyFile of pageExampleFiles) {
    const content = fs.readFileSync(storyFile, 'utf8');
    const relativeStory = path.relative(ROOT_DIR, storyFile);

    let match;
    IMPORT_RE.lastIndex = 0;

    while ((match = IMPORT_RE.exec(content)) !== null) {
      const componentName = match[2];

      if (!componentMap.has(componentName)) {
        const componentDir = path.join(COMPONENTS_DIR, componentName);
        componentMap.set(componentName, {
          dir:      componentDir,
          hasCss:   dirContains(componentDir, '.css'),
          hasStory: dirContains(componentDir, '.stories.ts'),
          usedIn:   [],
        });
      }

      componentMap.get(componentName).usedIn.push(relativeStory);
    }
  }

  // Violations: has CSS (is a UI component) but no story
  const violations = [];
  for (const [name, info] of componentMap.entries()) {
    if (info.hasCss && !info.hasStory) {
      violations.push({ name, dir: path.relative(ROOT_DIR, info.dir), usedIn: info.usedIn });
    }
  }

  return { violations, componentMap };
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log('🔍 Checking Page Example Story Coverage...\n');

  const { violations, componentMap } = check();

  // Summary of what was scanned
  const uiComponents = [...componentMap.values()].filter(c => c.hasCss);
  const covered      = uiComponents.filter(c => c.hasStory).length;
  const total        = uiComponents.length;

  console.log(`   UI components imported by page examples: ${total}`);
  console.log(`   Documented with a story:                 ${covered}`);
  console.log(`   Missing a story:                         ${violations.length}\n`);

  if (violations.length === 0) {
    console.log('✅ All page examples compose only documented components\n');
    console.log('Rule enforced:');
    console.log('  - Every UI component imported by a page example must have a .stories.ts file');
    console.log('  - Discriminator: component directory contains a .css file');
    return 0;
  }

  console.error(`❌ Found ${violations.length} component(s) used in page examples without a story:\n`);

  for (let i = 0; i < violations.length; i++) {
    const v = violations[i];
    console.error(`${i + 1}. ${v.name}`);
    console.error(`   Component dir: ${v.dir}`);
    console.error(`   Missing:       ${v.dir}/${v.name}.stories.ts`);
    console.error(`   Used in:`);
    const dedupedFiles = [...new Set(v.usedIn)];
    for (const f of dedupedFiles) {
      console.error(`     - ${f}`);
    }
    console.error('');
  }

  console.error('─────────────────────────────────────────────────────────');
  console.error('Fix: Create a .stories.ts file for each component above');
  console.error('     at the appropriate level (1. Atoms / 2. Molecules / 3. Organisms)');
  console.error('     before using it in a page example.\n');
  console.error('Rule: Page Examples may only compose documented components.');
  console.error('      See: src/stories/README.mdx\n');

  return 1;
}

process.exit(main());
