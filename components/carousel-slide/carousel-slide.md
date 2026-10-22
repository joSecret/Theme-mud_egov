---
title: Carousel Slide
group: Content
version: 1.1.0
css_prefix: carousel-slide
---

Slide individual pentru `mud_egov:carousel`: titlu, descriere, imagine și un apel la acțiune (CTA) opțional.

## Usage

```twig
{% include 'mud_egov:carousel-slide' with {
  carousel_slide_heading: 'Servicii publice online',
  carousel_slide_description: '<p>Accesează serviciile guvernamentale într-un singur loc.</p>',
  carousel_slide_image: content.field_media,
  carousel_slide_cta: content.field_cta_primary.0,
} only %}
```

Vezi `templates/paragraph/paragraph--carousel-slide.html.twig`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `carousel_slide_heading` | string\|null | `null` | Titlul slide-ului. |
| `carousel_slide_heading_tag` | string | `h2` | Eticheta titlului (`h1`–`h6`). |
| `carousel_slide_description` | string\|null | `null` | Text de susținere (HTML randat). |
| `carousel_slide_image` | string\|null | `null` | Imaginea randată (de exemplu `content.field_media`). |
| `carousel_slide_image_alt` | string\|null | `''` | Rezervat; textul alternativ vine din imaginea randată. |
| `carousel_slide_image_loading` | string | `lazy` | Rezervat; `eager` \| `lazy`. |
| `carousel_slide_cta` | object\|null | `null` | Apelul la acțiune randat (de exemplu un `mud_egov:button`). |
| `carousel_slide_uc` | array | `[]` | Clase utilitare suplimentare. |
| `carousel_slide_att` | Attribute | `null` | Atribute HTML pentru elementul rădăcină. |

Dacă slide-ul are text, imaginea trece în fundal, în dreapta, cu un gradient către culoarea carusel-ului (pe ecrane înguste textul rămâne deasupra). Fără text, imaginea acoperă tot slide-ul.

## CSS

Variabilele publice sunt goale implicit; valorile implicite vin din tokenuri.

| Variabilă | Ce schimbă |
|-----------|------------|
| `--carousel-slide_bg` | Culoarea spre care se estompează gradientul (implicit fundalul carusel-ului). |
| `--carousel-slide_gap`, `--carousel-slide_g-t-c` | Spațierea și coloanele grilei. |
| `--carousel-slide_media_mx-w`, `--carousel-slide_media_h` | Lățimea maximă și înălțimea imaginii. |
| `--carousel-slide_media_gradient_w`, `--carousel-slide_media_gradient_h`, `--carousel-slide_media_gradient_bg` | Gradientul de pe imagine. |
| `--carousel-slide_text_p-i`, `--carousel-slide_text_gap` | Padding-ul orizontal și spațiul dintre elementele de text. |
| `--carousel-slide_heading_f-s`, `--carousel-slide_desc_f-s` | Mărimea fontului pentru titlu și descriere. |

## Accessibility

- Titlul folosește eticheta aleasă prin `carousel_slide_heading_tag` (implicit `h2`); alege nivelul potrivit ierarhiei paginii.
- Imaginea e decorativă în raport cu textul slide-ului; textul alternativ trebuie setat în entitatea media.
- Contrastul textului față de fundal respectă 4,5:1 pe fundalul implicit; verifică-l dacă schimbi `--carousel-slide_bg` sau imaginea de fundal.
