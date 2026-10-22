---
title: Responsive Grid
group: Layout
version: 1.1.0
css_prefix: grid
---

# Responsive Grid

Grilă CSS responsivă cu coloane care se rup pe rânduri noi când celulele devin prea înguste. Numărul maxim de coloane, lățimea minimă a unei celule și spațiul dintre celule se pot seta prin props sau prin variabile CSS.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `grid_col` | `number` | `null` (CSS: 4) | Numărul maxim de coloane. |
| `grid_min_width` | `number` | `null` (CSS: 240) | Lățimea minimă a unei celule, în px. |
| `grid_gap` | `number` | `null` (CSS: 24) | Spațiul dintre celule, în px. |
| `grid_content` | `array`, `string` | `null` | Conținutul celulelor. |
| `grid_uc` | `array` | `[]` | Clase utilitare. |
| `grid_att` | `Attribute` | `null` | Atribute HTML pentru containerul grilei. |

## Slots

| Slot | Descriere |
|---|---|
| `slot_content` | Celulele grilei (implicit `grid_content`). |

## Exemplu

```twig
{% embed 'mud_egov:grid' with { grid_col: 3, grid_gap: 32 } %}
  {% block slot_content %}
    <div>Celula 1</div>
    <div>Celula 2</div>
    <div>Celula 3</div>
  {% endblock %}
{% endembed %}
```

## Variabile CSS publice

Goale implicit; propsurile `grid_col`, `grid_min_width` și `grid_gap` le setează inline.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--grid_col` | `4` | Numărul maxim de coloane. |
| `--grid_m-w` | `240px` | Lățimea minimă a unei celule. |
| `--grid_gap` | `--spacing-24` | Spațiul dintre celule. |
| `--grid_p-b` | `34px` | Padding vertical. |
| `--grid_p-i` | `--spacing-0` | Padding orizontal. |

## Accessibility

- Grila este doar layout: nu adaugă roluri ARIA și nu schimbă semantica conținutului.
- Ordinea din DOM este ordinea vizuală; celulele nu se reordonează.
- Celulele nu depășesc lățimea containerului (`min(..., 100%)`), deci nu apare derulare orizontală la zoom 200% sau pe ecrane înguste.
