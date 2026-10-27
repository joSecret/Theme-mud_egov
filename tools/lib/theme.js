// Cunoștințe comune despre temă, folosite de pluginul Stylelint și de audit.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
// Repo-ul e chiar tema: rădăcina repo-ului e dosarul temei.
export const THEME_DIR = ROOT;
export const THEME_NAME = 'mud_egov';

// Fișierele de nivel 1 (tokenuri). Aici trăiesc paleta și tokenurile semantice.
export const TOKENS_DIR = path.join(THEME_DIR, 'css/tokens');
export const TOKEN_FILES = ['palette', 'colors', 'typography', 'spacing', 'effects'].map((f) =>
  path.join(TOKENS_DIR, `${f}.css`),
);

// Fișierele de nivel 2 (default de componentă): numele lungi rămân, valorile vin din tokenuri.
export const DEFAULTS_DIR = path.join(THEME_DIR, 'css/defaults');

// Variabile din vechiul sistem; interzise chiar și cu valoare de rezervă.
export const LEGACY_VAR = /^--(c_(primary|danger|warning|success|info|white|gray|bray|blue|muted|fg|neutral|border|highlight|hover)|c-white|size_\d|b-[wcr]$|f-s_|f-w_|f-f-)/;

export const STATES = ['h', 'a', 'f', 'd', 's'];
export const SIZES = ['xs', 'sm', 'lg', 'xl'];
export const GROUPS = ['Globals', 'Feedback', 'Navigation', 'Forms', 'Content', 'Layout', 'Fields', 'Drupal'];

const abbrPath = path.join(ROOT, 'tools/stylelint/abbreviations.json');
export const ABBREVIATIONS = JSON.parse(fs.readFileSync(abbrPath, 'utf8')).abbreviations;

export function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

export function listFiles(dir, ext) {
  return walk(dir).filter((f) => f.endsWith(ext));
}

export function readFrontMatter(mdFile) {
  if (!fs.existsSync(mdFile)) return null;
  const m = fs.readFileSync(mdFile, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  try {
    return YAML.parse(m[1]) ?? {};
  } catch {
    return {};
  }
}

let componentsCache;

// Toate componentele SDC ale temei: dosarul, numele mașină și prefixul CSS declarat.
export function getComponents() {
  if (componentsCache) return componentsCache;
  componentsCache = listFiles(THEME_DIR, '.component.yml').map((ymlFile) => {
    const dir = path.dirname(ymlFile);
    const name = path.basename(ymlFile, '.component.yml');
    const md = path.join(dir, `${name}.md`);
    const front = readFrontMatter(md);
    return {
      name,
      dir,
      package: THEME_NAME,
      ymlFile,
      mdFile: md,
      cssPrefix: front?.css_prefix ?? null,
    };
  });
  return componentsCache;
}

export function componentForFile(file) {
  const abs = path.resolve(file);
  // Dosarul cel mai adânc câștigă (cards/card-teaser față de cards).
  return getComponents()
    .filter((c) => abs === c.dir || abs.startsWith(c.dir + path.sep))
    .sort((a, b) => b.dir.length - a.dir.length)[0] ?? null;
}

export function isTokenFile(file) {
  return TOKEN_FILES.includes(path.resolve(file));
}

export function isDefaultsFile(file) {
  const abs = path.resolve(file);
  return abs.startsWith(DEFAULTS_DIR + path.sep);
}

let definedCache;

// Toate proprietățile CSS personalizate declarate oriunde în pachete.
export function getDefinedVars() {
  if (definedCache) return definedCache;
  definedCache = new Set();
  for (const f of listFiles(THEME_DIR, '.css')) {
    const css = stripComments(fs.readFileSync(f, 'utf8'));
    for (const m of css.matchAll(/(--[\w-]+)\s*:/g)) definedCache.add(m[1]);
  }
  return definedCache;
}

let tokensCache;

// Tokenurile de nivel 1 cu valoarea lor rezolvată: Map<nume, valoare>.
export function getTokens() {
  if (tokensCache) return tokensCache;
  const raw = new Map();
  for (const f of TOKEN_FILES) {
    if (!fs.existsSync(f)) continue;
    const css = stripComments(fs.readFileSync(f, 'utf8'));
    for (const m of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) raw.set(m[1], m[2].trim());
  }
  const resolve = (v, depth = 0) =>
    depth > 10 ? v : v.replace(/var\(\s*(--[\w-]+)\s*\)/g, (s, n) => (raw.has(n) ? resolve(raw.get(n), depth + 1) : s));
  tokensCache = new Map([...raw].map(([k, v]) => [k, normalizeValue(resolve(v))]));
  return tokensCache;
}

export function normalizeValue(v) {
  v = v.trim().toLowerCase();
  const hex = v.match(/^#([0-9a-f]{3})$/);
  if (hex) v = '#' + [...hex[1]].map((c) => c + c).join('');
  if (v === 'white') v = '#ffffff';
  if (v === 'black') v = '#000000';
  return v.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
}

// Familii de tokenuri: după numele proprietății (sau al variabilei de nivel 2) alegem familia potrivită.
export const FAMILIES = [
  { name: 'font-size', prop: /font-size|(^|[-_])f-s($|[-_])/, token: /^--font-size-\d+$/ },
  { name: 'line-height', prop: /line-height|(^|[-_])l-h($|[-_])/, token: /^--line-height-\d+$/ },
  { name: 'font-weight', prop: /font-weight|(^|[-_])f-w($|[-_])/, token: /^--font-weight-/ },
  { name: 'font-family', prop: /font-family|(^|[-_])f-f($|[-_])/, token: /^--font-family-/ },
  { name: 'border-radius', prop: /radius|(^|[-_])b-r($|[-_])/, token: /^--border-radius-/ },
  { name: 'border-width', prop: /border-width|(^|[-_])b-w($|[-_])/, token: /^--border-width-/ },
  {
    name: 'spacing',
    prop: /padding|margin|gap|spacing|inset|offset|(^|[-_])(p|m)(-[bi])?($|[-_])/,
    token: /^--spacing-\d+$/,
  },
];

export function familyFor(prop) {
  return FAMILIES.find((f) => f.prop.test(prop)) ?? null;
}

// Tokenurile din familia dată care au exact valoarea dată.
export function tokensWithValue(value, family) {
  const v = normalizeValue(value);
  const out = [];
  for (const [name, val] of getTokens()) {
    if (val === v && (!family || family.token.test(name))) out.push(name);
  }
  return out;
}

export const COLOR_RE = /#[0-9a-fA-F]{3,8}\b|(?<![\w-])(rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(|(?<![\w-])(white|black)(?![\w-])/;
