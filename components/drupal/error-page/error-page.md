# Error Page

Full-page error display used for HTTP error states (404, 403, 500). Renders a title, optional description, error code, CTA actions, and an optional illustration on the right.

## Usage

```twig
{% include 'mud_egov:error-page' with {
  title: 'Pagina nu a fost găsită',
  description: 'Se pare că linkul nu funcționează sau pagina nu mai există. Dacă problema persistă, vă rugăm să ne contactați.',
  code: 404,
  primary_label: 'Pagina principală',
  primary_url: '/',
  secondary_label: 'Contactați-ne',
  secondary_url: '/contact',
} only %}
```

## With illustration slot

```twig
{% embed 'mud_egov:error-page' with {
  title: 'Pagina nu a fost găsită',
  code: 404,
  primary_label: 'Pagina principală',
  primary_url: '/',
} %}
  {% block slot_illustration %}
    <img src="/themes/custom/egov/images/404.png" alt="" width="320" height="320">
  {% endblock %}
{% endembed %}
```
