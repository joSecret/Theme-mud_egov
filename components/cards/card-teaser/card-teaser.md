---
title: Card Teaser
group: Content
version: 1.1.0
css_prefix: card-teaser
---


Card teaser cu imagine, categorie (bundle) și dată. La hover imaginea acoperă tot cardul, iar titlul și linkul devin deschise; cardurile cu video păstrează imaginea și afișează o pictogramă de redare.

## Usage

```twig
{% include 'mud_egov:card-teaser' with {
  card_teaser_title: node.label,
  card_teaser_description: summary,
  card_teaser_img: content.field_image,
  card_teaser_bundle: 'Articol',
  card_teaser_date: '09 Nov 2024',
  card_teaser_link: path('entity.node.canonical', {node: node.id}),
  card_teaser_link_text: 'Citește mai mult',
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card_teaser_title_heading` | string\|null | `h3` | Eticheta titlului (`h2`–`h6` sau `div`). |
| `card_teaser_title` | string\|null | `null` | Titlul. |
| `card_teaser_description` | string\|null | `null` | Descrierea (maximum 4 rânduri). |
| `card_teaser_img` | string\|array\|null | `null` | Imaginea randată. |
| `card_teaser_bundle` | string\|null | `null` | Categoria, afișată peste imagine. |
| `card_teaser_date` | string\|null | `null` | Data, afișată sub categorie. |
| `card_teaser_link` | string\|null | `null` | URL-ul cardului (linkul se extinde peste tot cardul). |
| `card_teaser_link_text` | string\|null | `Read more` | Textul linkului. |
| `card_teaser_link_icon` | string\|null | `null` | Markup pentru pictogramă; implicit o săgeată. |
| `card_teaser_video_link` | string\|null | `null` | URL-ul videoclipului, când `card_teaser_has_video` e activ. |
| `card_teaser_has_video` | boolean | `false` | Card cu video: imaginea devine link, apare pictograma de redare, iar categoria și data se ascund. |
| `card_teaser_uc` | array | `[]` | Clase utilitare suplimentare. |
| `card_teaser_att` | Attribute | `null` | Atribute HTML pentru elementul rădăcină. |

Sloturi (blocuri Twig): `slot_card_image_top`, `slot_details`, `slot_content`, `slot_title`, `slot_description`, `slot_link`.

## CSS

Variabilele publice sunt goale implicit; valorile implicite vin din tokenuri.

| Variabilă | Ce schimbă |
|-----------|------------|
| `--card-teaser_bs`, `--card-teaser_b-r`, `--card-teaser_gap`, `--card-teaser_trn` | Umbra, raza colțurilor, spațierea și durata tranzițiilor. |
| `--card-teaser_img_h`, `--card-teaser_img_bg` | Înălțimea imaginii și gradientul de pe ea. |
| `--card-teaser_info_*`, `--card-teaser_bundle_*`, `--card-teaser_date_*` | Zona cu categorie și dată. |
| `--card-teaser_title_c`, `--card-teaser_title_c_h` | Culoarea titlului (normal și la hover). |
| `--card-teaser_content_*` | Descrierea și spațierile conținutului. |
| `--card-teaser_icon_c`, `--card-teaser_icon_c_h` | Pictograma de redare. |
| `--card-teaser_link_*` | Linkul: culoare (și `_h` la hover), gap, font, subliniere. |

## Accessibility

- Cardul e un `<article>` cu titlu de nivel configurabil; alege nivelul potrivit ierarhiei paginii.
- Linkul „Citește mai mult” se extinde peste card (`stretched-link`) și are focus vizibil; hover-ul nu e singura cale către conținut.
- Elementele duplicate folosite doar pentru dimensionare (`*-hidden-*`) sunt ascunse cu `visibility: hidden`, deci nu sunt citite de cititoarele de ecran.
- Tranzițiile hover sunt dezactivate la `prefers-reduced-motion`. Pentru contrast, textul alb de pe imagine se bazează pe gradientul întunecat al imaginii.
