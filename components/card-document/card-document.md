---
title: Card Document
group: Content
version: 1.1.0
css_prefix: card-document
---

# Card Document

Card for a document node. With a single document (or just a link) the title is a stretched link and the whole card is clickable. With several items the card is not a link and lists the items under the title.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `card_document_title` | `string\|null` | `null` | Title shown on the card |
| `card_document_url` | `string\|null` | `null` | Link of the whole card (only when there is at most one item) |
| `card_document_meta` | `string\|null` | `null` | Muted line under the title, e.g. `PDF · 1.3 MB` (single mode) |
| `card_document_type` | `string` | `link` | Icon in the top circle: `link` or `document` |
| `card_document_items` | `array` | `[]` | List of `{ url, title, meta?, type }`; more than one item switches to list mode |
| `card_document_uc` | `array` | `[]` | Utility classes |
| `card_document_att` | `Attribute` | `null` | Extra attributes |

## CSS variables

Public (empty by default): `--card-document_bg`, `--card-document_b-r`, `--card-document_b-w`, `--card-document_b-c`, `--card-document_b-c_h`, `--card-document_p`, `--card-document_gap`, `--card-document_c`, `--card-document_trn`, `--card-document_meta_c`, `--card-document_meta_f-s`, `--card-document_icon_size`, `--card-document_icon_bg`, `--card-document_title_f-w`, `--card-document_title_f-s`, `--card-document_title_l-h`, `--card-document_item_f-s`.

## Example

```twig
{{ include('mud_egov:card-document', {
  card_document_title: label,
  card_document_url: file_url,
  card_document_meta: 'PDF · 1.3 MB',
  card_document_type: 'document',
}) }}
```

## Accessibility

- The icon circle is decorative (`aria-hidden="true"`); the title and meta carry the meaning.
- In single mode the title is the only link and is stretched over the card; in list mode each item is its own link with a visible underline.
- Hover and keyboard focus change the border or link colour to `--color-border-base-strong`; the link keeps the global focus ring.
- The border transition is disabled under `prefers-reduced-motion: reduce`.
