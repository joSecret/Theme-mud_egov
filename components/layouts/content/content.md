---
title: Content layout
group: Layout
version: 1.1.0
css_prefix: content
---

# Content layout

Zona de conținut a paginii pe grila `grid-container`, cu sidebar opțional. De la 992px (62rem) sidebarul stă în coloanele 2-4, iar conținutul în coloanele 5 până la penultima. Sub 992px sidebarul devine un panou lateral deschis cu butonul „Show sidebar”.

## Props

| Prop | Tip | Implicit | Descriere |
|---|---|---|---|
| `content_layout_type` | `string` | `null` (`col_1`) | `col_1`, `col_1_full`, `col_2_sidebar`, `full`. Sidebarul se randează numai pentru `col_2_sidebar`. |
| `content_uc` | `array` | `[]` | Clase utilitare pentru rădăcină. |
| `content_sidebar_uc` | `array` | `[]` | Clase utilitare pentru containerul sidebarului. |
| `content_main_uc` | `array` | `[]` | Clase utilitare pentru containerul conținutului. |
| `content_att` | `Attribute` | `null` | Atribute pentru rădăcină. |
| `content_sidebar_att` | `Attribute` | `null` | Atribute pentru containerul sidebarului. |
| `content_main_att` | `Attribute` | `null` | Atribute pentru containerul conținutului. |

## Slots

| Slot | Descriere |
|---|---|
| `cls_addons` | Prefix sau sufix de titlu și alte informații auxiliare. |
| `sidebar` | Conținutul sidebarului (numai pentru `col_2_sidebar`). |
| `content` | Conținutul principal. |

## Exemplu

```twig
{% embed 'mud_egov:content' with { content_layout_type: 'col_2_sidebar' } %}
  {% block sidebar %}{{ page.sidebar }}{% endblock %}
  {% block content %}{{ page.content }}{% endblock %}
{% endembed %}
```

## Comportament

`content.js` comută `aria-expanded` pe butonul `.js--show-sidebar` la click; CSS-ul deschide sau închide panoul pe baza acestei stări (`:has()`).

## Variabile CSS publice

Goale implicit.

| Variabilă | Implicit | Descriere |
|---|---|---|
| `--content_sidebar_bg` | `--color-background-base-default` | Fundalul panoului sidebar pe ecrane mici. |
| `--content_sidebar_p` | `--spacing-20` | Padding-ul panoului sidebar pe ecrane mici. |
| `--content_toggle_p-i` | `--spacing-48 --spacing-10` | Padding orizontal al butonului „Show sidebar” (început, sfârșit). |
| `--content_toggle_p-i_s` | `--spacing-10` | Padding orizontal al butonului când panoul e deschis. |
| `--content_sidebar_bs_s` | `0 0 0 100vmax --palette-gray-500` | Umbra care acoperă pagina când panoul e deschis. |

## Accessibility

- Butonul „Show sidebar” este un `<button>` nativ, accesibil din tastatură, cu `aria-expanded` actualizat din JS.
- Starea deschis/închis este redată numai prin `aria-expanded`; focusul folosește inelul MUD al butonului.
- Panoul închis este doar mutat în afara ecranului și transparent; conținutul lui rămâne în ordinea DOM înaintea conținutului principal.
- Pe ecrane late butonul dispare, iar sidebarul rămâne în fluxul normal de citire.
