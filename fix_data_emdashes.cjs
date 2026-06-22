/*
 * fix_data_emdashes.cjs
 * Em-dash sweep for the domain data files (Design Rule #1), surgical + auditing.
 * Run from the repository root:   node fix_data_emdashes.cjs
 *
 * What it does, in order:
 *   1. AUDIT — scans all 9 data files and prints every em dash it finds
 *      (file : line : context), so we can see ground truth, not a guess.
 *   2. FIX — applies a small, exact list of replacements. Each target must
 *      appear exactly once (or already be applied); otherwise it reports and
 *      ABORTS without writing, so files are never left half-edited.
 *   3. RE-AUDIT — re-scans and reports any em dashes that remain. Expected: 0.
 *      If anything remains, paste the list back so it can be added.
 *
 * Idempotent: safe to run more than once. git is your backup.
 */

const fs = require('fs');
const DASH = '\u2014'; // —

const DIR = 'src/data/';
const AUDIT_FILES = [
  'domains.js',
  'harms.js', 'harms.fr.js', 'harms.de.js', 'harms.es.js',
  'domainConsequences.js', 'domainConsequences.fr.js',
  'domainConsequences.de.js', 'domainConsequences.es.js',
].map(f => DIR + f);

// {file, old, new, note}
const FIXES = [
  { file: DIR + 'harms.js',
    old: 'personnel record \u2014 including performance history',
    new: 'personnel record, including performance history',
    note: 'EN humanResources.7.irreversible' },
  { file: DIR + 'harms.de.js',
    old: 'Disziplinarakten \u2014 wurde dauerhaft gel\u00f6scht',
    new: 'Disziplinarakten, wurde dauerhaft gel\u00f6scht',
    note: 'DE humanResources.7.irreversible' },
  { file: DIR + 'harms.fr.js',
    old: 'dossiers disciplinaires \u2014 a \u00e9t\u00e9 d\u00e9finitivement supprim\u00e9',
    new: 'dossiers disciplinaires, a \u00e9t\u00e9 d\u00e9finitivement supprim\u00e9',
    note: 'FR humanResources.7.irreversible' },
  { file: DIR + 'domainConsequences.de.js',
    old: 'initiierte Stilllegungsverfahren \u2014 und kein Ingenieur',
    new: 'initiierte Stilllegungsverfahren, und kein Ingenieur',
    note: 'DE infrastructure.violation' },
  // BONUS (not an em dash): a missing-space typo in shipped Spanish copy.
  // Delete this entry if you want to keep the commit strictly em-dash-only.
  { file: DIR + 'domainConsequences.es.js',
    old: 'deshacerse,las correcciones',
    new: 'deshacerse, las correcciones',
    note: 'ES media.irreversible — missing space after comma (typo, not an em dash)' },
];

function auditLine(label) {
  console.log('\n--- ' + label + ' ---');
  let total = 0;
  for (const path of AUDIT_FILES) {
    if (!fs.existsSync(path)) { console.log('  (missing) ' + path); continue; }
    const lines = fs.readFileSync(path, 'utf8').split('\n');
    lines.forEach((line, i) => {
      if (line.includes(DASH)) {
        total++;
        const t = line.trim();
        console.log('  ' + path + ':' + (i + 1) + '  ' + (t.length > 120 ? t.slice(0, 117) + '...' : t));
      }
    });
  }
  console.log('  em dashes found: ' + total);
  return total;
}

// 1. AUDIT (before)
console.log('=== em-dash sweep for src/data/ ===');
auditLine('AUDIT (before)');

// 2. Verify every fix matches exactly once (or is already applied)
let problems = [];
const plan = [];
for (const fix of FIXES) {
  if (!fs.existsSync(fix.file)) { problems.push(fix.note + '  -> file missing: ' + fix.file); continue; }
  const src = fs.readFileSync(fix.file, 'utf8');
  const count = src.split(fix.old).length - 1;
  if (count === 1) plan.push(fix);
  else if (count === 0 && src.includes(fix.new)) console.log('  (already applied) ' + fix.note);
  else problems.push(fix.note + '  -> found ' + count + ' in ' + fix.file + ' (expected 1)');
}

if (problems.length) {
  console.log('\nABORTED. Nothing written. Problems:\n');
  problems.forEach(p => console.log('  - ' + p));
  console.log('\nPaste this back to Claude.\n');
  process.exit(2);
}

// 3. Apply, grouped by file
const byFile = {};
for (const fix of plan) (byFile[fix.file] = byFile[fix.file] || []).push(fix);
for (const file of Object.keys(byFile)) {
  let src = fs.readFileSync(file, 'utf8');
  for (const fix of byFile[file]) src = src.split(fix.old).join(fix.new);
  fs.writeFileSync(file, src, 'utf8');
}
console.log('\nApplied ' + plan.length + ' replacement(s).');

// 4. RE-AUDIT (after)
const remaining = auditLine('AUDIT (after)');
console.log(remaining === 0
  ? '\nClean. No em dashes remain in src/data/. Next: npm run build, then commit & push.\n'
  : '\nSome em dashes remain (listed above). Paste them to Claude to extend the fix list.\n');
