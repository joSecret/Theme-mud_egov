---
title: Gallery Carousel
group: Content
version: 1.1.0
css_prefix: gallery
---


Galerie de imagini: viewport principal cu derulare `scroll-snap`, bandă de miniaturi sincronizată, contor și lightbox pe ecran complet cu `<dialog>` nativ. Fără biblioteci externe.

## Usage

```twig
{% include 'mud_egov:gallery-carousel' with {
  gallery_carousel_id: node.id(),
  gallery_carousel_slides: [
    { src: '/img/1.jpg', alt: 'Sala de ședințe', caption: 'Sala de ședințe', thumb_src: '/img/1-thumb.jpg' },
    { src: '/img/2.jpg', alt: 'Intrarea principală' },
  ],
  gallery_carousel_lightbox: true,
} only %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gallery_carousel_id` | string\|integer\|null | `null` | Prefix pentru id-urile slide-urilor (`gal-<id>-<n>`). Implicit o valoare aleatorie. |
| `gallery_carousel_slides` | array | `[]` | Elemente `{ src, srcset, alt, caption, thumb_src, thumb_srcset }`. Fără elemente, nu se afișează nimic. |
| `gallery_carousel_lightbox` | boolean | `true` | Deschide lightbox-ul la click pe imaginea principală. |
| `gallery_carousel_arrows` | boolean | `true` | Săgețile anterior / următor. |
| `gallery_carousel_counter` | boolean | `true` | Contorul („3 / 12”). |
| `gallery_carousel_uc` | array | `[]` | Clase utilitare suplimentare. |
| `gallery_carousel_att` | Attribute | `null` | Atribute HTML pentru elementul rădăcină. |

Săgețile, contorul și miniaturile apar numai când există cel puțin două imagini.

## CSS

Valorile implicite vin din tokenuri. Variabilele publice (goale implicit) pentru cazuri excepționale:

| Variabilă | Ce schimbă |
|-----------|------------|
| `--gallery_bg`, `--gallery_b-r`, `--gallery_gap` | Fundalul, raza colțurilor și spațiul dintre viewport și miniaturi. |
| `--gallery_main_a-r`, `--gallery_main_mx-h` | Raportul de aspect și înălțimea maximă a imaginii principale. |
| `--gallery_btn_w`, `--gallery_btn_bg`, `--gallery_btn_bg_h`, `--gallery_btn_c`, `--gallery_btn_bs`, `--gallery_btns_p-i` | Săgețile. |
| `--gallery_thumb_w`, `--gallery_thumb_a-r`, `--gallery_thumb_b-r`, `--gallery_thumb_b-c_s`, `--gallery_thumbs_gap` | Miniaturile (`_s` = selectată). |
| `--gallery_caption_bg`, `--gallery_caption_c`, `--gallery_caption_f-s`, `--gallery_caption_p-b`, `--gallery_caption_p-i` | Legenda. |
| `--gallery_counter_*`, `--gallery_lightbox_*` | Contorul și lightbox-ul (fundal, culori, spațieri). |

## Accessibility

- Viewport-ul principal are `tabindex="0"` și `aria-label`; săgețile stânga/dreapta schimbă imaginea.
- Miniaturile formează un `tablist` (`role="tab"`, `aria-selected`, `aria-controls`), iar starea se actualizează din JS.
- Lightbox-ul e un `<dialog>` modal: focusul rămâne în el, Escape îl închide, iar butoanele au `aria-label`.
- Săgețile devin `disabled` la capete; contoarele au `aria-live="polite"`; tranzițiile și derularea animată sunt dezactivate la `prefers-reduced-motion`.
