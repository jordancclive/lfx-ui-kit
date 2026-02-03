#!/usr/bin/env node

/**
 * Storybook Documentation Boundaries Enforcer
 * 
 * Enforces Storybook documentation guardrails defined in docs/steward/README.md
 * 
 * Rules enforced:
 * 1. Exactly ONE canonical MDX file per Page Pattern
 * 2. Canonical docs ONLY at: src/stories/compositions/page-patterns/<pattern>/<pattern>.mdx
 * 3. No pattern rules or "When to Use" guidance in .stories.ts files
 * 
 * Exit codes:
 * - 0: All boundaries respected
 * - 1: Boundary violations detected
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const ROOT_DIR = path.join(__dirname, '..', '..');
const STORIES_DIR = path.join(ROOT_DIR, 'src/stories');
const PAGE_PATTERNS_DIR = path.join(STORIES_DIR, 'compositions/page-patterns');

// Forbidden patterns in .stories.ts files
const FORBIDDEN_PATTERNS = [
  /When to [Uu]se/,
  /When NOT to [Uu]se/,
  /Section [Aa]rchetypes?/,
  /[Cc]anonical [Ss]tructure/,
  /[Pp]attern [Rr]ules/,
  /[Pp]attern [Dd]efinition/,
  /[Ii]nteraction [Cc]ontract/,
  /[Vv]alidation [Ss]tatus/,
  /[Cc]omponent [Mm]apping/,
];

// ============================================================================
// FILE SYSTEM UTILITIES
// ============================================================================

/**
 * Recursively find all files matching a pattern
 */
function findFiles(dir, pattern, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFiles(filePath, pattern, results);
    } else if (pattern.test(file)) {
      results.push(filePath);
    }
  }

  return results;
}

/**
 * Get all page pattern directories
 */
function getPagePatternDirectories() {
  if (!fs.existsSync(PAGE_PATTERNS_DIR)) {
    return [];
  }

  return fs.readdirSync(PAGE_PATTERNS_DIR)
    .map(name => path.join(PAGE_PATTERNS_DIR, name))
    .filter(p => fs.statSync(p).isDirectory());
}

// ============================================================================
// VALIDATION RULES
// ============================================================================

/**
 * Rule 1: Exactly ONE MDX file per Page Pattern directory
 */
function checkOneCanonicalMdxPerPattern(violations) {
  const patternDirs = getPagePatternDirectories();

  for (const dir of patternDirs) {
    const patternName = path.basename(dir);
    const mdxFiles = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

    if (mdxFiles.length === 0) {
      violations.push({
        type: 'missing_canonical_mdx',
        message: `Page Pattern "${patternName}" has NO canonical MDX file`,
        location: dir,
        fix: `Create: ${path.join(dir, patternName + '.mdx')}`,
      });
    } else if (mdxFiles.length > 1) {
      violations.push({
        type: 'duplicate_mdx',
        message: `Page Pattern "${patternName}" has ${mdxFiles.length} MDX files (must have exactly 1)`,
        location: dir,
        files: mdxFiles,
        fix: 'Remove duplicate MDX files. Keep only the canonical documentation.',
      });
    } else {
      // Exactly one MDX - validate naming
      const expectedName = patternName + '.mdx';
      if (mdxFiles[0] !== expectedName) {
        violations.push({
          type: 'incorrect_mdx_name',
          message: `Page Pattern "${patternName}" has incorrectly named MDX file`,
          location: path.join(dir, mdxFiles[0]),
          expected: expectedName,
          actual: mdxFiles[0],
          fix: `Rename to: ${expectedName}`,
        });
      }
    }
  }
}

/**
 * Rule 2: No MDX files in wrong locations
 */
function checkMdxOnlyInCanonicalLocations(violations) {
  // Find all .mdx files under src/stories
  const allMdxFiles = findFiles(STORIES_DIR, /\.mdx$/);

  for (const mdxFile of allMdxFiles) {
    const relativePath = path.relative(STORIES_DIR, mdxFile);

    // Check if it's in a valid location
    const isInPagePatterns = relativePath.startsWith('compositions/page-patterns/');
    const isInRoot = !relativePath.includes('/'); // README.mdx, interaction-surfaces.mdx at root
    const isInReadmeFolder = relativePath.startsWith('README/'); // README folder allowed

    if (!isInPagePatterns && !isInRoot && !isInReadmeFolder) {
      violations.push({
        type: 'misplaced_mdx',
        message: `MDX file found in non-canonical location`,
        location: mdxFile,
        relativePath,
        fix: 'Move to appropriate page-patterns directory or remove if duplicate',
      });
    }
  }
}

/**
 * Rule 3: No pattern guidance in .stories.ts files
 */
function checkNoPatternGuidanceInStories(violations) {
  // Find all .stories.ts files in page-patterns
  const storyFiles = findFiles(PAGE_PATTERNS_DIR, /\.stories\.ts$/);

  for (const storyFile of storyFiles) {
    const content = fs.readFileSync(storyFile, 'utf8');
    const relativePath = path.relative(ROOT_DIR, storyFile);

    for (const pattern of FORBIDDEN_PATTERNS) {
      if (pattern.test(content)) {
        violations.push({
          type: 'pattern_guidance_in_story',
          message: `Story file contains forbidden pattern guidance`,
          location: storyFile,
          relativePath,
          pattern: pattern.toString(),
          fix: 'Remove pattern rules/guidance. Stories are visual demonstrations only. Move guidance to canonical MDX.',
        });
        break; // Only report once per file
      }
    }
  }
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log('🔍 Checking Storybook Documentation Boundaries...\n');

  const violations = [];

  // Run all validation rules
  checkOneCanonicalMdxPerPattern(violations);
  checkMdxOnlyInCanonicalLocations(violations);
  checkNoPatternGuidanceInStories(violations);

  // Report results
  if (violations.length === 0) {
    console.log('✅ All Storybook documentation boundaries respected\n');
    console.log('Rules enforced:');
    console.log('  - Exactly ONE canonical MDX per Page Pattern');
    console.log('  - Canonical docs only in page-patterns directories');
    console.log('  - No pattern guidance in .stories.ts files');
    console.log('\nSee: docs/steward/README.md (Storybook Documentation Guardrails)');
    return 0;
  }

  // Report violations
  console.error(`❌ Found ${violations.length} documentation boundary violation(s):\n`);

  violations.forEach((v, i) => {
    console.error(`${i + 1}. ${v.message}`);
    console.error(`   Location: ${v.relativePath || v.location}`);
    if (v.files) {
      console.error(`   Files: ${v.files.join(', ')}`);
    }
    if (v.expected) {
      console.error(`   Expected: ${v.expected}`);
      console.error(`   Actual: ${v.actual}`);
    }
    if (v.pattern) {
      console.error(`   Forbidden pattern: ${v.pattern}`);
    }
    console.error(`   Fix: ${v.fix}`);
    console.error('');
  });

  console.error('See: docs/steward/README.md (Storybook Documentation Guardrails)');
  console.error('\nDocumentation boundaries must be respected to prevent drift.\n');

  return 1;
}

// Run
process.exit(main());
