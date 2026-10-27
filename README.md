# MUD eGov Theme

Custom Drupal theme for the **Government of the Republic of Moldova** portal.

## Description

**MUD eGov** is a modern frontend theme built for Drupal 10/11, based on the **Single Directory Components (SDC)** architecture. The theme provides a consistent and accessible design system, tailored for government portal needs.

## Requirements

- Drupal 10 or 11
- PHP 8.1+
- `sdc` module enabled (included in Drupal core since version 10.1)

## Installation

1. Copy the `mud_egov` directory to `web/themes/custom/`
2. Enable the theme from **Appearance** or via Drush:

```bash
drush theme:enable mud_egov
drush config:set system.theme default mud_egov -y
```

## Structure

```
mud_egov/
├── components/          # SDC (Single Directory Components)
│   ├── global/          # Base UI components (button, alert, badge)
│   ├── form/            # Form elements
│   ├── navbars/         # Navigation bars
│   ├── menus/           # Menus
│   ├── layouts/         # Page layouts
│   ├── cards/           # Cards and teasers
│   └── ...              # ~46 components in total
├── css/
│   ├── foundations/     # Design tokens (colors, borders, shadows, fonts)
│   ├── vars.css         # CSS variables (semantic + primitive color system)
│   ├── reboot.css       # CSS reset
│   ├── type.css         # Typography
│   └── utils/           # Utilities (accessibility, wrapper)
├── templates/           # Twig templates (~24)
├── mud_egov.info.yml        # Theme metadata
├── mud_egov.libraries.yml   # Asset libraries
├── mud_egov.breakpoints.yml # Responsive breakpoints
└── mud_egov.theme           # PHP hooks
```

## Components

The theme includes ~46 SDC components organized by category:

| Category    | Components                                                                   |
| ----------- | ---------------------------------------------------------------------------- |
| Layout      | grid, layouts, page-layout                                                   |
| Navigation  | navbars, menus, breadcrumb, nav-scroll, pager                                |
| Content     | cards, teaser, node_details, timeline_item                                   |
| Forms       | form, input, select, checkbox, radio, textarea, fieldset                     |
| Interactive | tabs, accordion, media, section_code, table_of_contents_block, svg_animation |
| Utility     | button, badge, alert, block, field_icon                                      |
| Specialized | footer, date_range, date_timezone, media_text_section                        |

## Design System

### Fonts

The theme uses the **Onest** typeface (Google Fonts), with weights from 100 to 900.

### Colors

Colors are defined via CSS variables with support for `light` and `dark` color schemes:

- **Primitive:** full color palette (blue, gray, green, apricot, etc.)
- **Semantic:** background, text, brand, success, warning, error, etc.

### Breakpoints

Bootstrap-inspired breakpoint system:

| Breakpoint | Resolution      |
| ---------- | --------------- |
| xs         | < 576px         |
| sm         | 576px – 767px   |
| md         | 768px – 991px   |
| lg         | 992px – 1199px  |
| xl         | 1200px – 1399px |
| xxl        | ≥ 1400px        |

## Regions

The theme defines 13 regions:

- `top` — top page bar
- `branding` — site logo and branding
- `nav_main` — main navigation
- `header` — main header
- `nav_additional` — secondary navigation
- `header_notifications` — header notifications
- `help` — Drupal help messages
- `sidebar` — sidebar
- `content` — main content
- `content_bottom` — below main content
- `footer` — main footer
- `footer_middle_left` / `footer_middle_right` — footer middle columns
- `footer_bottom_left` / `footer_bottom_right` — footer bottom columns
- `bottom_fixed` — fixed element at the bottom of the page

## SDC Component Conventions

Each component follows this structure:

```
component-name/
├── component-name.component.yml   # Schema, props, slots
├── component-name.twig            # Template
├── component-name.css             # Styles
├── component-name.js              # Behavior (optional)
└── README.md                      # Documentation (optional)
```

## CKEditor 5

The theme includes dedicated styles for the CKEditor 5 editor, defined in `css/ckeditor5-stylesheets.css`.

## License

Proprietary — Government of the Republic of Moldova.

## Dezvoltare

Tema se editează doar în acest repo. Site-urile o primesc prin Composer:

```json
"repositories": [
    {"type": "vcs", "url": "https://github.com/joSecret/Theme-mud_egov", "no-api": true}
],
"require": {
    "mud/mud_egov": "^1.0"
}
```

Unelte (Node 20+): `npm install` o dată (activează hook-ul de pre-commit), apoi `npm run lint:css`, `npm run audit` și `npm run audit:check`. Regulile sunt în `CLAUDE.md`.

O versiune nouă e un tag `vX.Y.Z` pe `main`.
