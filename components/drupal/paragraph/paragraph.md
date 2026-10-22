---
title: Paragraph
group: Drupal
version: 1.1.0
css_prefix: paragraph
---

# Paragraph

Generic paragraph entity wrapper. Generates bundle type and view mode modifier classes matching the Drupal paragraph template convention.

## Usage

```twig
{% include 'mud_egov:paragraph' with {
  paragraph_bundle: 'text',
  paragraph_view_mode: 'default',
  paragraph_published: true,
  slot_content: content,
} %}
```

## Use in paragraph template override

In `paragraph.html.twig`:

```twig
{% include 'mud_egov:paragraph' with {
  paragraph_bundle: paragraph.bundle,
  paragraph_view_mode: view_mode,
  paragraph_published: paragraph.isPublished(),
  paragraph_att: attributes,
  slot_content: content,
} %}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `paragraph_bundle` | `string\|null` | `null` | Paragraph bundle machine name. Generates `paragraph--t--{bundle}` class. |
| `paragraph_view_mode` | `string\|null` | `null` | Render view mode. Generates `paragraph--v-m--{mode}` and `paragraph--{bundle}--{mode}` classes. |
| `paragraph_published` | `boolean` | `true` | Adds `paragraph--unpublished` class when `false`. |
| `paragraph_uc` | `array` | `[]` | Extra utility classes. |
| `paragraph_att` | `Attribute` | `null` | HTML attributes object. |

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--paragraph_d` | `block` | Display value. |
| `--paragraph_unpublished_o` | `0.5` | Opacity for unpublished paragraphs. |

## Generated classes

Given `paragraph_bundle = 'image'` and `paragraph_view_mode = 'default'`:

```
paragraph paragraph--t--image paragraph--v-m--default paragraph--image--default
```

## Accessibility

- Wrapper-ul este un `div` fără rol propriu; structura semantică (titluri, liste, linkuri) vine din câmpurile randate în `slot_content`.
- Paragrafele nepublicate (`paragraph--unpublished`) sunt doar atenuate vizual (opacitate), fără a ascunde conținutul; nu transmite starea numai prin opacitate în interfața de editare.
