---
title: FAQ
group: Content
version: 1.1.0
css_prefix: faq
---

# FAQ

Section with an optional heading and description, an accordion of questions and optional call-to-action cards at the bottom. The section has a full-bleed secondary background; on wide containers (above 528px) the intro and the accordion sit side by side and the CTA cards span the full width.

## Props and slots

| Name              | Kind  | Type         | Default | Description                                     |
|-------------------|-------|--------------|---------|-------------------------------------------------|
| `faq_title`       | prop  | string, null | `null`  | Heading text.                                   |
| `faq_title_level` | prop  | integer 1-6  | `2`     | Heading level (the template falls back to 3 when empty). |
| `faq_description` | prop  | string, null | `null`  | Description under the heading.                  |
| `faq_uc`          | prop  | array        | `[]`    | Extra utility classes on the wrapper.           |
| `faq_att`         | prop  | Attribute    | `null`  | HTML attributes on the wrapper.                 |
| `faq_items`       | slot  | render       |         | Rendered accordion items (`accordion-item`), wrapped by `accordion` (size small). |
| `faq_cta`         | slot  | render       |         | CTA cards (`.c--cta-card`, see `paragraph--cta-card.html.twig`). |

## Public CSS variables (level 3, empty by default)

| Variable                                   | Default (level 2)                  |
|--------------------------------------------|------------------------------------|
| `--faq_bg`                                 | `--color-background-base-secondary`|
| `--faq_p-b`, `--faq_p-i`                   | `--spacing-64`, inherited          |
| `--faq_gap`                                | `--spacing-80 --spacing-32`        |
| `--faq_intro_gap`                          | `--spacing-24`                     |
| `--faq_description_c`                      | `--color-text-base-secondary`      |
| `--faq_cta_gap`                            | `--spacing-32`                     |
| `--faq_cta_card_bg`, `_b-r`, `_p`, `_gap`  | white, `--border-radius-16`, `--spacing-24`, `--spacing-16` |
| `--faq_cta_card_title_mx-w`, `_f-s`, `_l-h`, `_f-w` | `340px`, 24px, 32px, semibold |

## Usage

```twig
{% include 'mud_egov:faq' with {
  faq_title: paragraph.field_title.value,
  faq_description: paragraph.field_body.processed,
  faq_items: content.field_paragraphs,
  faq_cta: content.field_paragraphs2,
} only %}
```

## Accessibility

- The title is a real heading (`faq_title_level`); choose the level that fits the page outline.
- Questions are native `<details>`/`<summary>` elements (see `accordion-item`), operable from the keyboard without extra ARIA.
- Text colors use tokens that keep at least 4.5:1 contrast on the secondary background.
- No motion of its own; the accordion transitions respect `prefers-reduced-motion`.
