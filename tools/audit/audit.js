#!/usr/bin/env node
// Auditul componentelor după standardul MUD eGov.
//
//   npm run audit               scrie tools/audit/report.md și report.json
//   npm run audit -- --check    compară cu baseline.json (folosit în CI și la commit)
//   npm run audit -- --update   rescrie baseline.json după ce ai redus abaterile
//   npm run audit -- --mark     marchează cu /* nefolosit */ variabilele default nefolosite
//
// Regula de CI: nicio componentă nu are voie să aibă mai multe abateri decât în
// baseline, iar o componentă aliniată (css_prefix declarat în .md) trebuie să aibă 0.
import fs from 'node:fs';
import path from 'node:path';
import stylelint from 'stylelint';
import YAML from 'yaml';
import { GROUPS, THEME_DIR, ROOT, getComponents, listFiles } from '../lib/theme.js';
import { markedDefaults, relative } from '../lib/unused-defaults.js';

const AUDIT_DIR = path.join(ROOT, 'tools/audit');
const BASELINE = path.join(AUDIT_DIR, 'baseline.json');
const args = new Set(process.argv.slice(2));

// Lotul (PR-ul) fiecărei componente din planul de aliniere.
const LOTS = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'lots.json'), 'utf8'));

const CHECKS = {
  'css-prefix': 'css_prefix nedeclarat în .md',
  'css-prefix-duplicate': 'css_prefix folosit de altă componentă',
  'dir-kebab': 'dosar sau fișiere în afara kebab-case',
  'missing-md': 'fără .md',
  'missing-css': 'fără CSS',
  'storybook-files': 'fișiere rămase din Storybook',
  'meta-status': 'fără status',
  'meta-version': 'fără version (semver)',
  'meta-group': 'group lipsă sau în afara listei',
  'meta-description': 'descriere lipsă sau șablon',
  experimental: 'status experimental',
  'props-prefix': 'props fără prefixul componentei',
  'props-camelcase': 'props în camelCase',
  'prop-uc': 'fără prop _uc',
  'prop-att': 'fără prop _att',
  'web-component': 'folosește web component MUD (<mud-*>)',
  'js-once': 'JS fără once()',
  'js-behaviors': 'JS fără Drupal.behaviors',
  'js-jquery': 'JS cu jQuery',
  'js-once-dep': 'dependența core/once nedeclarată',
  unused: 'nefolosită în temă și absentă din showcase',
  'mud/no-raw-color': 'culori scrise direct în CSS',
  'mud/no-unknown-var': 'variabile CSS vechi sau nedefinite',
  'mud/private-vars': 'variabile interne în afara standardului',
  'mud/defaults-use-tokens': 'valori brute care au token',
  'mud/reduced-motion': 'animație fără prefers-reduced-motion',
  'mud/focus-ring': 'focus fără inelul MUD',
  'css-style': 'reguli de stil (stylelint-config-standard)',
};

const snake = (s) => s.replace(/-/g, '_');
const exists = (f) => fs.existsSync(f);
const read = (f) => fs.readFileSync(f, 'utf8');

// Componente folosite din mud-modules (mud_core), care nu e în acest repo.
const EXTERNAL_USAGE = JSON.parse(read(path.join(AUDIT_DIR, 'external-usage.json')));

function usageIndex() {
  const files = [
    ...listFiles(THEME_DIR, '.twig'),
    ...listFiles(THEME_DIR, '.theme'),
    ...listFiles(THEME_DIR, '.php'),
    ...listFiles(THEME_DIR, '.module'),
    ...listFiles(THEME_DIR, '.yml').filter((f) => !f.endsWith('.component.yml')),
  ];
  return files.map((f) => ({ f, text: read(f) }));
}

async function stylelintCounts() {
  const res = await stylelint.lint({
    files: ['components/**/*.css'],
    cwd: ROOT,
    configFile: path.join(ROOT, 'stylelint.config.js'),
  });
  const byFile = new Map();
  for (const r of res.results) {
    const counts = {};
    for (const w of r.warnings) {
      const key = w.rule.startsWith('mud/') ? w.rule : 'css-style';
      // css_prefix lipsă e raportat separat de audit.
      if (w.rule === 'mud/private-vars' && /css_prefix/.test(w.text)) continue;
      counts[key] = (counts[key] ?? 0) + 1;
    }
    byFile.set(path.resolve(r.source), counts);
  }
  return byFile;
}

function auditComponent(c, usage, cssCounts, prefixes) {
  const v = {};
  const add = (k, n = 1) => n && (v[k] = (v[k] ?? 0) + n);
  const files = fs.readdirSync(c.dir).filter((f) => fs.statSync(path.join(c.dir, f)).isFile());
  let yml = {};
  try {
    yml = YAML.parse(read(c.ymlFile)) ?? {};
  } catch {
    add('meta-status');
  }

  if (!c.cssPrefix) add('css-prefix');
  else if (prefixes.get(c.cssPrefix) > 1) add('css-prefix-duplicate');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.name)) add('dir-kebab');
  if (!exists(c.mdFile)) add('missing-md');
  const css = files.filter((f) => f.endsWith('.css') && !f.endsWith('.pcss.css'));
  if (!css.length) add('missing-css');
  add('storybook-files', files.filter((f) => /\.(stories\.\w+|pcss\.css|scss|mdx)$|^thumbnail\./.test(f)).length);

  if (!['stable', 'experimental'].includes(yml.status)) add('meta-status');
  if (yml.status === 'experimental') add('experimental');
  if (!/^\d+\.\d+\.\d+$/.test(String(yml.version ?? ''))) add('meta-version');
  if (!GROUPS.includes(yml.group)) add('meta-group');
  const desc = String(yml.description ?? '').trim();
  if (desc.length < 15 || /\[.*description.*\]|^todo|lorem/i.test(desc)) add('meta-description');

  const prefix = snake(c.name);
  const props = Object.keys(yml.props?.properties ?? {});
  add('props-prefix', props.filter((p) => !p.startsWith(`${prefix}_`)).length);
  add('props-camelcase', props.filter((p) => /[A-Z]/.test(p)).length);
  if (!props.includes(`${prefix}_uc`)) add('prop-uc');
  if (!props.includes(`${prefix}_att`)) add('prop-att');

  for (const f of files.filter((f) => f.endsWith('.twig'))) {
    if (/<mud-[a-z]/.test(read(path.join(c.dir, f)))) add('web-component');
  }

  const deps = yml.libraryOverrides?.dependencies ?? [];
  for (const f of files.filter((f) => f.endsWith('.js'))) {
    const js = read(path.join(c.dir, f));
    if (!/\bonce\(/.test(js)) add('js-once');
    if (!/Drupal\.behaviors\./.test(js)) add('js-behaviors');
    if (/\bjQuery\b|\$\(/.test(js)) add('js-jquery');
    if (/\bonce\(/.test(js) && !deps.includes('core/once')) add('js-once-dep');
  }

  const id = new RegExp(`['"](${c.package}|mud_egov|mud_core):${c.name}['"]`);
  const usedOutside = `${c.package}:${c.name}` in EXTERNAL_USAGE;
  if (!usedOutside && !usage.some(({ f, text }) => !f.startsWith(c.dir + path.sep) && id.test(text))) add('unused');

  for (const f of css) {
    for (const [k, n] of Object.entries(cssCounts.get(path.join(c.dir, f)) ?? {})) add(k, n);
  }
  return v;
}

function table(rows) {
  return rows.map((r) => `| ${r.join(' | ')} |`).join('\n');
}

function renderReport(results, defaults) {
  const total = Object.keys(results).length;
  const clean = Object.values(results).filter((r) => r.total === 0).length;
  const totals = {};
  for (const r of Object.values(results)) {
    for (const k of Object.keys(r.violations)) totals[k] = (totals[k] ?? 0) + 1;
  }
  let md = `# Auditul componentelor\n\nGenerat de \`npm run audit\`. Nu edita manual.\n\n`;
  md += `Componente conforme: **${clean} din ${total}**.\n\n`;
  const unused = defaults.reduce((a, d) => a + d.unused, 0);
  md += `Variabile default nefolosite (marcate \`/* nefolosit */\`): **${unused}**`;
  md += ` (${defaults.map((d) => `${path.basename(d.file, '.css')} ${d.unused}`).join(', ')}).\n\n## Abateri pe tip\n\n`;
  md += table([['Abatere', 'Componente'], ['---', '---:'], ...Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([k, n]) => [CHECKS[k] ?? k, n])]);
  const lots = [...new Set(Object.values(results).map((r) => r.lot))].sort();
  for (const lot of lots) {
    const rows = Object.entries(results).filter(([, r]) => r.lot === lot).sort();
    md += `\n\n## ${lot} (${rows.length})\n\n`;
    md += table([
      ['Componentă', 'css_prefix', 'Abateri', 'Detalii'],
      ['---', '---', '---:', '---'],
      ...rows.map(([name, r]) => [
        name,
        r.cssPrefix ?? '',
        Object.keys(r.violations).length,
        Object.entries(r.violations).map(([k, n]) => (n > 1 ? `${CHECKS[k] ?? k} (${n})` : CHECKS[k] ?? k)).join('; ') || 'conformă',
      ]),
    ]);
  }
  return md + '\n';
}

const components = getComponents();
const prefixes = new Map();
for (const c of components) if (c.cssPrefix) prefixes.set(c.cssPrefix, (prefixes.get(c.cssPrefix) ?? 0) + 1);
const usage = usageIndex();
const cssCounts = await stylelintCounts();

const results = {};
for (const c of components) {
  const key = `${c.package}:${c.name}`;
  const violations = auditComponent(c, usage, cssCounts, prefixes);
  results[key] = {
    lot: LOTS[key] ?? 'Fără lot',
    cssPrefix: c.cssPrefix,
    violations,
    total: Object.values(violations).reduce((a, b) => a + b, 0),
  };
}
const sorted = Object.fromEntries(Object.entries(results).sort());
const defaults = markedDefaults();

if (args.has('--mark')) {
  for (const d of defaults) fs.writeFileSync(d.file, d.content);
  console.log(`Marcaj /* nefolosit */ actualizat: ${defaults.reduce((a, d) => a + d.unused, 0)} variabile.`);
}

if (args.has('--update')) {
  const baseline = Object.fromEntries(Object.entries(sorted).map(([k, r]) => [k, r.violations]));
  fs.writeFileSync(BASELINE, JSON.stringify(baseline, null, 2) + '\n');
  console.log(`baseline.json actualizat (${Object.keys(baseline).length} componente).`);
}

if (args.has('--check')) {
  const baseline = exists(BASELINE) ? JSON.parse(read(BASELINE)) : {};
  const errors = [];
  const improved = [];
  for (const [k, r] of Object.entries(sorted)) {
    if (r.cssPrefix && r.total > 0) {
      errors.push(`${k}: componenta e aliniată (css_prefix: ${r.cssPrefix}), dar are abateri: ${JSON.stringify(r.violations)}`);
      continue;
    }
    const base = baseline[k];
    if (!base) {
      if (r.total > 0) errors.push(`${k}: componentă nouă cu abateri: ${JSON.stringify(r.violations)}`);
      continue;
    }
    for (const [check, n] of Object.entries(r.violations)) {
      if (n > (base[check] ?? 0)) errors.push(`${k}: ${CHECKS[check] ?? check}: ${base[check] ?? 0} → ${n}`);
    }
    for (const [check, n] of Object.entries(base)) {
      if ((r.violations[check] ?? 0) < n) improved.push(`${k}: ${CHECKS[check] ?? check}: ${n} → ${r.violations[check] ?? 0}`);
    }
  }
  const stale = defaults.filter((d) => d.content !== read(d.file)).map((d) => relative(d.file));
  if (stale.length) {
    errors.push(`Marcajul /* nefolosit */ nu e la zi în ${stale.join(', ')}. Rulează „npm run audit -- --mark”.`);
  }
  if (improved.length) {
    errors.push(
      `Abateri reduse față de baseline. Rulează „npm run audit -- --update” și include baseline.json în commit:\n  ${improved.join('\n  ')}`,
    );
  }
  if (errors.length) {
    console.error(`Auditul a eșuat:\n- ${errors.join('\n- ')}`);
    process.exitCode = 1;
  } else {
    console.log('Auditul a trecut: nicio abatere nouă față de baseline.');
  }
} else {
  fs.writeFileSync(path.join(AUDIT_DIR, 'report.md'), renderReport(sorted, defaults));
  fs.writeFileSync(path.join(AUDIT_DIR, 'report.json'), JSON.stringify(sorted, null, 2) + '\n');
  const clean = Object.values(sorted).filter((r) => r.total === 0).length;
  console.log(`Raport scris în tools/audit/report.md: ${clean} din ${components.length} componente conforme.`);
}
