// Variabilele default (nivel 2) pe care nu le folosește nimic din pachete.
// Sunt marcate cu /* nefolosit */ la capătul liniei, ca să se vadă direct în fișier.
import fs from 'node:fs';
import path from 'node:path';
import { DEFAULTS_DIR, THEME_DIR, listFiles } from './theme.js';

export const MARK = '/* nefolosit */';
const DECL = /^(\s*)(--[\w-]+)(\s*:[^;]*;)(.*)$/;

// Toate numele --x folosite (nu declarate) în CSS, Twig, JS, PHP și YAML din pachete.
function usedNames() {
  const exts = ['.css', '.twig', '.js', '.theme', '.php', '.module', '.yml'];
  const used = new Set();
  for (const f of exts.flatMap((e) => listFiles(THEME_DIR, e))) {
    const text = fs.readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    for (const m of text.matchAll(/--[\w-]+(?![\w-])(?!\s*:)/g)) used.add(m[0]);
  }
  return used;
}

// Pentru fiecare fișier din css/defaults: conținutul cu marcajele la zi și numărul de nefolosite.
export function markedDefaults() {
  const used = usedNames();
  return listFiles(DEFAULTS_DIR, '.css').map((file) => {
    let unused = 0;
    const lines = fs.readFileSync(file, 'utf8').split('\n').map((line) => {
      const m = line.match(DECL);
      if (!m) return line;
      const [, indent, name, decl, rest] = m;
      const tail = rest.replace(` ${MARK}`, '').replace(MARK, '');
      if (used.has(name)) return `${indent}${name}${decl}${tail}`;
      unused += 1;
      return `${indent}${name}${decl}${tail} ${MARK}`;
    });
    return { file, content: lines.join('\n'), unused };
  });
}

export function relative(file) {
  return path.relative(THEME_DIR, file);
}
