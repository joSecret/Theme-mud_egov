// Configurația Stylelint pentru tema mud_egov.
// Regulile standardului sunt explicate în CLAUDE.md și în documentul „Standard și plan de aliniere”.
import path from 'node:path';
import { getComponents, ROOT } from './tools/lib/theme.js';
import { ALIGNED_GLOBAL } from './tools/stylelint/aligned.js';

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

// Componentele aliniate (cu css_prefix în .md) și fișierele globale aliniate:
// aici și regulile din configurația standard sunt erori.
const aligned = [
  ...getComponents().filter((c) => c.cssPrefix).map((c) => `${rel(c.dir)}/*.css`),
  ...ALIGNED_GLOBAL.map((p) => (p.endsWith('.css') ? p : `${p.replace(/\/$/, '')}/**/*.css`)),
];

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['./tools/stylelint/plugin.js'],
  // Codul încă nealiniat primește avertismente: se văd în VS Code și în audit, dar nu blochează.
  defaultSeverity: 'warning',
  ignoreFiles: ['**/node_modules/**', 'tools/**', '**/*.pcss.css'],
  rules: {
    'mud/no-raw-color': true,
    'mud/no-unknown-var': true,
    'mud/private-vars': true,
    'mud/defaults-use-tokens': true,
    'mud/reduced-motion': true,
    'mud/focus-ring': true,

    // Convențiile temei, diferite de configurația standard.
    'custom-property-pattern': null, // verificat de mud/private-vars
    'custom-property-empty-line-before': null,
    // Clasele: doar minuscule (fără camelCase); restul convenției BEM nu e impus.
    'selector-class-pattern': ['^[a-z][a-z0-9_-]*$', { message: (s) => `Clasa „${s}” conține majuscule.` }],
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true, ignoreKeywords: ['Onest'] }],
    'import-notation': 'string',
    'selector-not-notation': 'complex',
  },
  overrides: [
    {
      files: aligned.length ? aligned : ['__nimic__'],
      defaultSeverity: 'error',
    },
  ],
};
