// Plugin Stylelint cu regulile standardului de componente MUD eGov.
//
// Severitatea depinde de componentă: o componentă e „aliniată” când își declară
// css_prefix în front-matter-ul din <nume>.md. Pentru componentele aliniate
// abaterile sunt erori (blochează commit-ul și PR-ul); pentru celelalte sunt
// avertismente, vizibile în VS Code și numărate de audit.
import path from 'node:path';
import stylelint from 'stylelint';
import {
  ABBREVIATIONS,
  ROOT,
  COLOR_RE,
  LEGACY_VAR,
  SIZES,
  STATES,
  componentForFile,
  familyFor,
  getDefinedVars,
  isDefaultsFile,
  isTokenFile,
  tokensWithValue,
} from '../lib/theme.js';
import { ALIGNED_GLOBAL } from './aligned.js';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

function fileOf(result) {
  return result.opts?.from ? path.resolve(result.opts.from) : null;
}

function isAlignedGlobal(file) {
  return ALIGNED_GLOBAL.some((p) => file.startsWith(path.resolve(ROOT, p)));
}

function severityFor(file) {
  if (!file) return 'warning';
  const c = componentForFile(file);
  if (c) return c.cssPrefix ? 'error' : 'warning';
  return isAlignedGlobal(file) ? 'error' : 'warning';
}

function make(ruleName, messages, check) {
  const rule = (primary) => (root, result) => {
    if (!validateOptions(result, ruleName, { actual: primary, possible: [true] })) return;
    const file = fileOf(result);
    const severity = severityFor(file);
    const r = (node, message, extra = {}) => report({ ruleName, result, node, message, severity, ...extra });
    check({ root, file, report: r, messages });
  };
  rule.ruleName = ruleName;
  rule.messages = ruleMessages(ruleName, messages);
  return createPlugin(ruleName, rule);
}

// 1. Culori scrise direct. Doar paleta (--palette-*) are voie la valori brute.
const noRawColor = make(
  'mud/no-raw-color',
  { rejected: (v) => `Culoare scrisă direct („${v}”). Folosește un token NDS (--color-* sau --palette-*).` },
  ({ root, file, report: r, messages }) => {
    root.walkDecls((decl) => {
      if (decl.prop.startsWith('--palette-')) return;
      // Umbrele de nivel 1 (--drop-shadow-*) își păstrează culorile rgba.
      if (file && isTokenFile(file) && decl.prop.startsWith('--drop-shadow-')) return;
      if (/^\s*(transparent|currentcolor|inherit|initial|unset|none)\s*$/i.test(decl.value)) return;
      // url(...) poate conține SVG-uri inline cu culori; nu sunt tokenuri.
      const value = decl.value.replace(/url\([^)]*\)/g, '');
      const m = value.match(COLOR_RE);
      if (m) r(decl, messages.rejected(m[0]), { word: m[0] });
    });
  },
);

// 2. Variabile din vechiul sistem sau nedefinite fără valoare de rezervă.
const noUnknownVar = make(
  'mud/no-unknown-var',
  {
    legacy: (n) => `Variabilă din vechiul sistem: ${n}. Înlocuiește-o cu un token NDS.`,
    undefined: (n) => `Variabila ${n} nu e definită nicăieri și nu are valoare de rezervă: proprietatea e ignorată de browser.`,
  },
  ({ root, report: r, messages }) => {
    const defined = getDefinedVars();
    root.walkDecls((decl) => {
      for (const m of decl.value.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
        const [, name, next] = m;
        if (LEGACY_VAR.test(name)) r(decl, messages.legacy(name), { word: name });
        else if (next === ')' && !defined.has(name)) r(decl, messages.undefined(name), { word: name });
      }
    });
  },
);

// 3. Numele variabilelor interne: --_<prefix>_<setare>_<proprietate>_<stare>.
export function checkPrivateName(name, prefix) {
  if (!name.startsWith(`--_${prefix}_`)) return `trebuie să înceapă cu --_${prefix}_ (prefixul declarat în .md)`;
  const segs = name.slice(`--_${prefix}_`.length).split('_');
  if (segs.some((s) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s))) return 'segmentele sunt în minuscule, despărțite de _, cu - doar în interiorul unui segment';
  if (segs.includes('md')) return 'mărimea md e implicită și nu se scrie';
  let end = segs.length - 1;
  if (segs.length > 1 && STATES.includes(segs[end]) && ABBREVIATIONS[segs[end - 1]]) end -= 1;
  if (!ABBREVIATIONS[segs[end]]) {
    return `„${segs[end]}” nu e o abreviere de proprietate cunoscută (vezi tools/stylelint/abbreviations.json)`;
  }
  const settings = segs.slice(0, end);
  const sizeAt = settings.findIndex((s) => SIZES.includes(s));
  if (sizeAt !== -1 && sizeAt !== settings.length - 1) return 'mărimea vine după variantă, imediat înaintea proprietății (--_btn_brand_lg_bg)';
  return null;
}

const privateVars = make(
  'mud/private-vars',
  {
    noPrefix: () => 'Componenta nu își declară css_prefix în front-matter-ul din .md.',
    name: (n, why) => `Nume de variabilă invalid: ${n}: ${why}.`,
    publicDecl: (n) => `Componenta declară variabila publică ${n}. Variabilele publice rămân goale; declară doar --_<prefix>_*.`,
    fallback: (n) => `${n} trebuie să lege nivelurile: var(--<prefix>_..., <default din css/defaults sau token>).`,
    directUse: (n) => `Proprietatea folosește direct ${n}. În CSS-ul componentei proprietățile folosesc numai variabile interne --_<prefix>_*.`,
  },
  ({ root, file, report: r, messages }) => {
    const c = file && componentForFile(file);
    if (!c) return;
    if (!c.cssPrefix) {
      r(root.first ?? root, messages.noPrefix());
      return;
    }
    const prefix = c.cssPrefix;
    root.walkDecls((decl) => {
      if (decl.prop.startsWith('--_')) {
        const why = checkPrivateName(decl.prop, prefix);
        if (why) r(decl, messages.name(decl.prop, why), { word: decl.prop });
        const v = decl.value.trim();
        const linksPublic = new RegExp(`^var\\(\\s*--${prefix}_[\\w-]+\\s*,\\s*\\S`).test(v);
        const linksPrivate = new RegExp(`^var\\(\\s*--_${prefix}_[\\w-]+\\s*\\)$`).test(v);
        if (!linksPublic && !linksPrivate) r(decl, messages.fallback(decl.prop), { word: decl.prop });
        const pub = v.match(/^var\(\s*--([\w-]+)/)?.[1];
        const pubWhy = linksPublic && checkPrivateName(`--_${pub}`, prefix);
        if (pubWhy) r(decl, messages.name(`--${pub}`, pubWhy), { word: `--${pub}` });
        return;
      }
      if (decl.prop.startsWith('--')) {
        r(decl, messages.publicDecl(decl.prop), { word: decl.prop });
        return;
      }
      for (const m of decl.value.matchAll(/var\(\s*(--[\w-]+)/g)) {
        if (!m[1].startsWith(`--_${prefix}_`) && !m[1].startsWith('--focus-ring')) {
          r(decl, messages.directUse(m[1]), { word: m[1] });
        }
      }
    });
  },
);

// 4. Valorile de nivel 2 (css/defaults/<categorie>.css) vin numai din tokenuri.
const defaultsUseTokens = make(
  'mud/defaults-use-tokens',
  {
    raw: (prop, v, tokens) => `${prop}: „${v}” are token${tokens.length > 1 ? 'uri' : ''}: ${tokens.join(', ')}. Folosește var(...).`,
  },
  ({ root, file, report: r, messages }) => {
    if (!file || !(isDefaultsFile(file) || componentForFile(file))) return;
    root.walkDecls((decl) => {
      const family = familyFor(decl.prop);
      if (!family) return;
      const v = decl.value.trim();
      if (v.includes('var(') || v.includes('(')) return;
      for (const part of v.split(/\s+/)) {
        if (part === '0' || part === '0px') continue;
        const tokens = tokensWithValue(part, family);
        if (tokens.length) {
          r(decl, messages.raw(decl.prop, part, tokens), { word: part });
          return;
        }
      }
    });
  },
);

// 5. Orice animație sau tranziție are alternativă în prefers-reduced-motion.
const reducedMotion = make(
  'mud/reduced-motion',
  { missing: () => 'Animație sau tranziție fără @media (prefers-reduced-motion: reduce) în același fișier.' },
  ({ root, file, report: r, messages }) => {
    if (file && isTokenFile(file)) return;
    let first = null;
    root.walkDecls(/^(transition|animation)(-name|-duration)?$/, (decl) => {
      if (decl.parent?.type === 'atrule' || /^\s*(none|0s?)\s*$/.test(decl.value)) return;
      first ??= decl;
    });
    if (!first) return;
    let has = false;
    root.walkAtRules('media', (at) => {
      if (/prefers-reduced-motion/.test(at.params)) has = true;
    });
    if (!has) r(first, messages.missing());
  },
);

// 6. Focus: :focus-visible, iar conturul eliminat e înlocuit cu inelul MUD.
const focusRing = make(
  'mud/focus-ring',
  {
    focus: () => 'Folosește :focus-visible în loc de :focus pentru stilul de focus.',
    removed: () => 'Conturul de focus e eliminat fără inelul MUD (--focus-ring-*).',
  },
  ({ root, report: r, messages }) => {
    root.walkRules((rule) => {
      // :focus:not(:focus-visible) e tiparul corect pentru focusul de la mouse.
      if (/:not\(:focus-visible\)/.test(rule.selector)) return;
      if (/:focus(?![-\w])/.test(rule.selector.replace(/:not\([^)]*\)/g, ''))) r(rule, messages.focus());
      if (!/:focus/.test(rule.selector)) return;
      let removes = false;
      let ring = false;
      rule.walkDecls((d) => {
        if (/^outline(-style)?$/.test(d.prop) && /^(none|0)$/.test(d.value.trim())) removes = true;
        if (/--focus-ring|--_[\w-]+_(f|ol)\b/.test(d.value)) ring = true;
      });
      if (removes && !ring) r(rule, messages.removed());
    });
  },
);

export default [noRawColor, noUnknownVar, privateVars, defaultsUseTokens, reducedMotion, focusRing];
