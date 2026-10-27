# Tema mud_egov: reguli pentru lucrul în repo

Tema de bază Drupal 11 a platformei MUD pentru site-urile Guvernului Republicii Moldova. Acest repo e singura sursă a temei: se editează aici, iar site-urile (mud-egov, age, mud-docs) o primesc prin Composer ca `mud/mud_egov`. Modulul `mud_core` e în repo-ul separat [mud-modules](https://github.com/joSecret/mud-modules).

Fișierul acesta, `tools/`, `.github/`, `.githooks/`, `.vscode/` și `package.json` sunt unelte de dezvoltare și nu ajung în pachetul Composer (`export-ignore` în `.gitattributes`).

## Versiuni

- Fiecare versiune e un tag `vX.Y.Z` pe `main` (semver: patch pentru corecturi, minor pentru componente sau variante noi, major pentru props sau clase redenumite).
- Site-urile cer `^1.0` și primesc versiunea nouă prin `composer update mud/mud_egov`.

## Cum se lucrează

- Testele vizuale și funcționale le face JoCode în mud-docs (tema instalată ca git checkout în `web/themes/contrib/mud_egov`). Nu reinstala site-ul și nu rula comenzi care schimbă baza de date.
- Alinierea vizuală e numai cu MUD Storybook (mud.dev.egov.md): aceeași înfățișare și aceleași variante, implementate nativ în Drupal 11, fără biblioteca de web components MUD.
- `button` (CSS în `css/utils/button.css`) e componenta model: nu se modifică, inclusiv `color-mix()` pentru hover și active (nuanțele diferă puțin de tokenuri, e acceptat). Celelalte componente se aliniază pe baza lui.
- Câte un PR pe lot (categorie de componente). Un PR care redenumește props sau dosare actualizează în același PR toate șabloanele care apelează componentele.
- Înainte de commit: `npm install` o dată (activează hook-ul), apoi hook-ul rulează Stylelint pe CSS-ul modificat și auditul.

## Unelte

| Comandă | Ce face |
|---|---|
| `npm run lint:css` | Stylelint pe toate componentele și pe `css/` |
| `npm run audit` | scrie matricea de audit în `tools/audit/report.md` |
| `npm run audit:check` | eșuează dacă o componentă are mai multe abateri decât în `tools/audit/baseline.json`, sau dacă o componentă aliniată are vreo abatere |
| `tools/audit/external-usage.json` | componentele apelate din mud_core (alt repo); auditul nu le consideră nefolosite |
| `npm run audit -- --update` | rescrie baseline-ul după ce ai redus abaterile (obligatoriu în același commit) |

Severitatea depinde de componentă: o componentă e aliniată când își declară `css_prefix` în front-matter-ul din `<nume>.md`. Atunci toate regulile Stylelint devin erori pentru ea. Până atunci sunt avertismente.

## Standardul componentelor

### Structură
- Dosar și fișiere în kebab-case: `field-link/field-link.twig`.
- Obligatorii: `<nume>.component.yml`, `<nume>.twig`, `<nume>.css`, `<nume>.md`; `<nume>.js` doar dacă e nevoie.
- Fără fișiere din Storybook (`.stories.*`, `.pcss.css`, `.scss`, `.mdx`, `thumbnail.*`).

### `.component.yml`
- `name`, `status` (stable sau experimental), `version` (semver), `group`, `description` reală.
- `group` ∈ Globals, Feedback, Navigation, Forms, Content, Layout, Fields, Drupal.
- Props cu prefixul componentei în snake_case (`button_variant`), fără camelCase; fiecare prop are `title`, `type`, `default`, și `enum` cu `null` pentru stilul implicit.
- Fiecare componentă are `<prefix>_uc` (clase utilitare) și `<prefix>_att` (Attribute).

### CSS: trei niveluri de suprascriere
1. **Token** (`css/tokens/`: `palette.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`): schimbă toate componentele. Doar `--palette-*` (și umbrele `--drop-shadow-*`) au voie la valori brute.
2. **Default de componentă** (`css/defaults/<categorie>.css`): numele lungi vin din MUD JS și rămân neschimbate, valorile vin numai din tokenuri (`var(--color-*)`, `var(--spacing-*)` etc.). Variabilele pe care nu le folosește nicio componentă sunt marcate automat cu `/* nefolosit */` de `npm run audit -- --mark`.
3. **Override excepțional**: variabila publică `--<prefix>_...`, goală implicit, setată de developer într-un context anume.

`css/theme/vars.css` ține variabilele proprii ale temei (`--h1_font-size`, `--gutter`, `--spacer`…), care nu vin din MUD JS; rămân separate până decidem ce facem cu ele.

În CSS-ul componentei:

```css
.btn {
  --_btn_bg: var(--btn_bg, var(--button-background-primary));
  background-color: var(--_btn_bg);
}
```

- Componenta declară numai variabile interne `--_<prefix>_*`; fiecare leagă override-ul public de default: `var(--<prefix>_..., <default>)`.
- Proprietățile CSS folosesc numai variabile interne (excepție: `--focus-ring-*`).
- Fără culori hex/rgb() și fără variabile din vechiul sistem (`--c_*`, `--size_*`, `--b-*`, `--f-s_*` etc.).

### Numele variabilelor
`--_<prefix>_<variantă>_<mărime>_<proprietate>_<stare>`

- `<prefix>`: numele componentei sau o abreviere (`btn`), unică în temă, declarată ca `css_prefix: btn` în front-matter-ul din `<nume>.md`.
- `<mărime>`: xs, sm, lg, xl (md e implicit și nu se scrie), după variantă: `--_btn_brand_lg_bg`.
- `<proprietate>`: abrevieri tip Emmet din `tools/stylelint/abbreviations.json` (bg, c, f-s, b-r, p-b, p-i, b-c, l-h…). O abreviere nouă se adaugă întâi acolo și în tabelul din standard.
- `<stare>`: h (hover), a (active), f (focus-visible), d (disabled), s (selected/checked).
- Segmentele se despart cu `_`; `-` apare doar în interiorul unui segment.
- Exemple: `--_badge_bg`, `--_badge_lg_f-s`, `--_btn_brand_bg_h`; publice: `--badge_lg_bg_h`.

### JavaScript
- JS numai unde HTML nativ nu ajunge (`<details>`, `<dialog>`, popover, `:has()`).
- Tipar unic: `Drupal.behaviors.<nume>` + `once()`, cu `core/drupal` și `core/once` în `libraryOverrides.dependencies`. Fără jQuery, fără biblioteci externe.

### Accesibilitate (WCAG 2.1 AA)
- Inelul de focus MUD (`--focus-ring-*`) pe `:focus-visible`; nu se elimină conturul fără înlocuitor. `reboot.css` îl aplică implicit (outline); pentru inelul în două culori o componentă folosește `box-shadow: var(--focus-ring)` cu `outline-color: transparent`.
- Orice tranziție sau animație are alternativă în `@media (prefers-reduced-motion: reduce)` în fișierul componentei (`reboot.css` are doar o plasă de siguranță globală).
- Contrast minim 4,5:1 (3:1 pentru text mare și elemente grafice).
- Totul funcționează din tastatură; stările ARIA se actualizează din JS.

### Documentație
`<nume>.md` începe cu front-matter (`title`, `group`, `version`, `css_prefix`) și conține scopul, tabelul de props și slots, un exemplu Twig și notele de accesibilitate. Fiecare componentă stable apare în showcase (`mud_egov.sdc_showcase_collections.yml`) sau într-un șablon al temei.

## Alinierea unei componente (pașii)
1. Alege prefixul și declară-l în `.md` (`css_prefix`). Din acest moment Stylelint dă erori pentru componentă.
2. Rescrie CSS-ul pe cele trei niveluri și numele standard; mută valorile default în `css/defaults/<categorie>.css` (pe tokenuri).
3. Aliniază `.component.yml` și actualizează toate șabloanele care o apelează.
4. `npm run lint:css`, `npm run audit -- --update`, apoi verifică că `npm run audit:check` trece.
