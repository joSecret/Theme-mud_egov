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

| Variable | Default | Description |
|----------|---------|-------------|
| `--cookie-banner_max-width` | 960px | Max width of the inner card |
| `--cookie-banner_bg` | white | Card background |
| `--cookie-banner_z` | 1000 | z-index |
