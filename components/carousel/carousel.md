---
title: Carousel
group: Content
version: 1.1.0
css_prefix: carousel
---

Carusel pentru bannere (hero): slide-uri cu text și imagine, navigare prin derulare cu `scroll-snap`, săgeți, indicatori (puncte) și redare automată opțională.

## Usage

```twig
{% include 'mud_egov:carousel' with {
  carousel_id: paragraph.id(),
  carousel_slides: slides,
  carousel_autoplay: true,
  carousel_interval: 6000,
  carousel_arrows: true,
  carousel_dots: true,
} only %}
```

`carousel_slides` e un array de slide-uri deja randate (rezultatul componentei `mud_egov:carousel-slide`). Vezi `templates/paragraph/paragraph--carousel.html.twig`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `carousel_id` | string\|integer\|null | `null` | Prefix pentru id-urile slide-urilor (`cs-<id>-<n>`). Implicit o valoare aleatorie. |
| `carousel_slides` | array | `[]` | Slide-urile randate. Dacă lipsesc, componenta nu afișează nimic. |
| `carousel_autoplay` | boolean | `false` | Avansare automată; oprită la hover și focus, și când utilizatorul preferă mișcare redusă. |
| `carousel_interval` | string\|integer\|null | `5000` | Milisecunde între slide-uri. |
| `carousel_arrows` | boolean | `true` | Săgețile anterior / următor (vizibile de la 768px lățime a containerului). |
| `carousel_dots` | boolean | `true` | Indicatorii de slide. |
| `carousel_uc` | array | `[]` | Clase utilitare suplimentare. |
| `carousel_att` | Attribute | `null` | Atribute HTML pentru elementul rădăcină. |

Săgețile și indicatorii apar numai când există cel puțin două slide-uri.

## CSS

Valorile implicite vin din tokenuri. Pentru un caz excepțional, variabilele publice se setează pe componentă sau pe un părinte (sunt goale implicit):

| Variabilă | Ce schimbă |
|-----------|------------|
| `--carousel_bg`, `--carousel_b-r` | Fundalul și raza colțurilor. |
| `--carousel_m-h`, `--carousel_p-b` | Înălțimea minimă și padding-ul vertical al unui slide. |
| `--carousel_btns_d`, `--carousel_btns_p-i` | Afișarea și padding-ul orizontal al zonei de săgeți. |
| `--carousel_btn_w`, `--carousel_btn_bg`, `--carousel_btn_bg_h`, `--carousel_btn_c`, `--carousel_btn_bs` | Săgeata: lățime, fundal (normal și hover), culoare, umbră. |
| `--carousel_dot_bg`, `--carousel_dot_w`, `--carousel_dot_h`, `--carousel_dot_b-r`, `--carousel_dot_gap`, `--carousel_dots_p-b` | Indicatorii: culoare, dimensiuni, rază, spațiere. |

## Accessibility

- Săgețile sunt `<button type="button">` cu `aria-label` („Slide anterior”, „Slide următor”); la capete butonul corespunzător e `disabled`.
- Indicatorii sunt linkuri cu text ascuns vizual („Slide N”) și funcționează din tastatură.
- Redarea automată se oprește la hover și la focus în interiorul carusel-ului și nu pornește când utilizatorul preferă mișcare redusă (`prefers-reduced-motion`); în acest caz și derularea e fără animație.
- Focusul vizibil rămâne cel implicit al temei; tranzițiile butoanelor și indicatorilor sunt dezactivate la mișcare redusă.
