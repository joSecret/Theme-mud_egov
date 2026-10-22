---
title: Cookie Banner
group: Globals
version: 1.1.0
css_prefix: cookie-banner
---

# Cookie Banner

GDPR cookie consent banner anchored to the top or bottom of the viewport. Persists the citizen's decision in `localStorage` under `mud_egov_cookie_consent` and hides the banner on acceptance, decline, or settings choice. Emits a `cookie-banner:consent` custom event with `detail.action`.

## Usage

```twig
{% include 'mud_egov:cookie-banner' with {
  cookie_banner_title: 'Folosim cookie-uri',
  cookie_banner_description: 'Acest site folosește cookie-uri pentru a funcționa.',
  cookie_banner_accept_label: 'Accept toate',
  cookie_banner_decline_label: 'Refuză toate',
  cookie_banner_settings_label: 'Personalizează',
  cookie_banner_policy_url: '/politica-cookie',
  cookie_banner_position: 'bottom',
} %}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cookie_banner_title` | string\|null | null | Heading text (defaults to "Folosim cookie-uri") |
| `cookie_banner_description` | string\|null | null | Body copy |
| `cookie_banner_accept_label` | string\|null | null | Accept button label |
| `cookie_banner_decline_label` | string\|null | null | Decline button label |
| `cookie_banner_settings_label` | string\|null | null | Settings button label |
| `cookie_banner_policy_url` | string\|null | null | Privacy policy link href |
| `cookie_banner_policy_label` | string\|null | null | Privacy policy link label |
| `cookie_banner_position` | string\|null | null | `bottom` (default) \| `top` |
| `cookie_banner_uc` | array | [] | Additional CSS classes |
| `cookie_banner_att` | Attribute | null | HTML attributes |

## CSS variables

Valorile implicite vin din `--cookie-banner-*` (MUD, `css/defaults/feedback.css`) și din tokenuri. Variabilele publice sunt goale implicit; se setează într-un context anume.

| Variable | Description |
|----------|-------------|
| `--cookie-banner_mx-w`, `--cookie-banner_bg`, `--cookie-banner_bs`, `--cookie-banner_z` | Lățimea maximă, fundalul, umbra și z-index-ul cardului |
| `--cookie-banner_b` | Chenarul cardului (implicit `none`; MUD definește 1,5px solid) |
| `--cookie-banner_b-r`, `--cookie-banner_bottom_sm_b-r`, `--cookie-banner_top_sm_b-r` | Rotunjirea cardului și varianta sub 540px, după poziție |
| `--cookie-banner_p`, `--cookie-banner_p-i`, `--cookie-banner_sm_p-i` | Marginea față de ecran și padding-ul inline (desktop, mobil) |
| `--cookie-banner_header_p-b`, `--cookie-banner_body_p-b`, `--cookie-banner_footer_p-b`, `--cookie-banner_footer_sm_p-b`, `--cookie-banner_footer_gap` | Spațierea secțiunilor (valorile pe bloc primesc două numere: sus și jos) |
| `--cookie-banner_title_f-f`, `_f-s`, `_sm_f-s`, `_l-h`, `_f-w`, `_l-s`, `_c` | Titlul (prefix `--cookie-banner_title`) |
| `--cookie-banner_body_f-f`, `_f-s`, `_sm_f-s`, `_l-h`, `_f-w`, `_c` | Descrierea (prefix `--cookie-banner_body`) |
| `--cookie-banner_link_c` | Culoarea linkului către politică |
| `--cookie-banner_btn_p-b`, `_p-i`, `_b-w`, `_b-r`, `_f-s`, `_f-w`, `_l-h`, `_trn` | Butoanele (prefix `--cookie-banner_btn`) |
| `--cookie-banner_settings_*`, `--cookie-banner_decline_*`, `--cookie-banner_accept_*` | Culorile fiecărui buton: `c`, `b-c`, `bg_h` (setări, refuz) și `c`, `bg`, `b-c`, `bg_h`, `b-c_h` (acceptă) |

## Accessibility

- Containerul are `role="dialog"`, `aria-modal="false"` și `aria-labelledby` către titlu; nu blochează restul paginii.
- Toate acțiunile sunt `<button type="button">`, accesibile din tastatură, cu inelul de focus implicit al temei.
- Linkul către politică este subliniat (nu se bazează doar pe culoare); se deschide în fereastră nouă cu `rel="noopener noreferrer"`.
- Tranziția butoanelor este oprită la `prefers-reduced-motion: reduce`.
- JavaScript: `Drupal.behaviors.cookieBanner` cu `once()`; ascunde bannerul dacă există deja un consimțământ.
