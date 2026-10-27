// Importă din MUD JS (@egov-moldova/mud, dist/collection/tokens/core.tokens.css)
// variabilele care lipsesc din css/tokens și css/defaults. Valorile sunt legate de
// tokenurile temei când există unul cu aceeași valoare; altfel rămân brute.
//
//   node tools/lib/mud-import.js <core.tokens.css>          listează ce lipsește
//   node tools/lib/mud-import.js <core.tokens.css> --write  adaugă în fișierele de categorie
import fs from 'node:fs';
import path from 'node:path';
import { DEFAULTS_DIR, TOKENS_DIR, getTokens, familyFor, normalizeValue, stripComments } from './theme.js';

const [src, flag] = process.argv.slice(2);
if (!src) {
  console.error('Folosire: node tools/lib/mud-import.js <core.tokens.css> [--write]');
  process.exit(1);
}

// Componenta MUD → fișierul de categorie din css/defaults.
const CATEGORY = {
  button: 'actions', 'button-group': 'actions',
  banner: 'feedback', toast: 'feedback', modal: 'feedback', 'info-box': 'feedback', tooltip: 'feedback',
  'inline-message': 'links', link: 'links',
  'accordion-item': 'content', badge: 'content', separator: 'content', tag: 'content',
  table: 'data',
  breadcrumb: 'navigation', menu: 'navigation', pagination: 'navigation', sidebar: 'navigation',
  stepper: 'navigation', tabs: 'navigation', 'segmented-control': 'navigation',
};
const FORMS = ['checkbox', 'chip', 'date-input', 'date-picker', 'file-input', 'file-item', 'numeric-input',
  'phone-input', 'radio', 'radio-group', 'search-input', 'select', 'time-input', 'time-picker'];
for (const c of FORMS) CATEGORY[c] = 'forms';
const COMPONENTS = Object.keys(CATEGORY).sort((a, b) => b.length - a.length);

const parse = (css) => [...stripComments(css).matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]);

const existing = new Set();
for (const dir of [TOKENS_DIR, DEFAULTS_DIR]) {
  for (const f of fs.readdirSync(dir)) for (const [n] of parse(fs.readFileSync(path.join(dir, f), 'utf8'))) existing.add(n);
}

// Rolul culorii după ultimul cuvânt de rol din nume (label/text/color → text).
function role(name) {
  const words = name.slice(2).split('-');
  for (let i = words.length - 1; i >= 0; i--) {
    const w = words[i];
    if (w === 'background' || w === 'bg' || w === 'fill' || w === 'track' || w === 'backdrop') return 'background';
    if (w === 'border' || w === 'separator' || w === 'divider' || w === 'outline') return 'border';
    if (w === 'icon' || w === 'glyph' || w === 'chevron') return 'icon';
    if (w === 'label' || w === 'text' || w === 'title' || w === 'caption' || w === 'color') return 'text';
  }
  return null;
}

const tokens = getTokens();

function colorToken(name, value) {
  const v = normalizeValue(value);
  const all = [...tokens].filter(([, tv]) => tv === v).map(([n]) => n);
  if (!all.length) return null;
  // Tokenurile de nivel 1 se leagă de paletă, nu de alte tokenuri semantice.
  if (/^--(color|focus-ring)-/.test(name)) return all.find((t) => t.startsWith('--palette-')) ?? all[0];
  const r = role(name);
  const words = new Set(name.slice(2).split('-'));
  const score = (t) => {
    const tw = t.slice(2).split('-');
    let s = 0;
    if (t.startsWith('--color-') && r && tw[1] === r) s += 100;
    else if (t.startsWith('--color-')) s += 10;
    for (const w of tw) if (words.has(w)) s += 5;
    if (tw.includes('default')) s += 2;
    return s - tw.length;
  };
  return all.sort((a, b) => score(b) - score(a))[0];
}

function convert(name, value) {
  if (/^#[0-9a-f]{3,8}$/i.test(value)) {
    if (/^#[0-9a-f]{6}00$/i.test(value)) return 'transparent';
    const t = colorToken(name, value);
    return t ? `var(${t})` : value;
  }
  if (/^Onest$/.test(value)) return 'var(--font-family-primary)';
  const fam = familyFor(name);
  if (fam && /^-?[\d.]+(px|rem)?$/.test(value) && !/^0(px)?$/.test(value)) {
    const v = normalizeValue(value);
    const t = [...tokens].find(([n, tv]) => tv === v && fam.token.test(n));
    if (t) return `var(${t[0]})`;
  }
  return value;
}

const out = {};
for (const [name, value] of parse(fs.readFileSync(src, 'utf8'))) {
  if (existing.has(name)) continue;
  const comp = COMPONENTS.find((c) => name.startsWith(`--${c}-`));
  const file = comp ? path.join(DEFAULTS_DIR, `${CATEGORY[comp]}.css`) : path.join(TOKENS_DIR, name.startsWith('--focus-ring') ? 'effects.css' : 'colors.css');
  (out[file] ??= []).push(`  ${name}: ${convert(name, value)};`);
}

for (const [file, lines] of Object.entries(out)) {
  console.log(`${path.relative(process.cwd(), file)}: ${lines.length}`);
  if (flag !== '--write') continue;
  const block = `\n  /* Din MUD JS 1.2.1 (@egov-moldova/mud), lipseau din temă. */\n${lines.join('\n')}\n`;
  if (fs.existsSync(file)) {
    const css = fs.readFileSync(file, 'utf8');
    const i = css.lastIndexOf('}');
    fs.writeFileSync(file, css.slice(0, i).replace(/\n*$/, '\n') + block + '}\n');
  } else {
    fs.writeFileSync(file, `/**\n * Nivel 2: default-urile componentelor de acțiune (button, button-group).\n * Numele vin din MUD JS și nu se schimbă; valorile vin numai din tokenuri.\n */\n:root {${block}}\n`);
  }
}
