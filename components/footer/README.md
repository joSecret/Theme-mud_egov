# Footer Component

Site footer with flexible slot-based layout for navigation, content sections, and bottom bar.

## Overview

The Footer component provides a flexible site footer with multiple configurable slots:

1. **Main Navigation** (`slot_footer`) - Primary footer navigation area
2. **Middle Sections** - Left and right middle content areas (`slot_footer_middle_left`, `slot_footer_middle_right`)
3. **Bottom Sections** - Left and right bottom content areas (`slot_footer_bottom_left`, `slot_footer_bottom_right`)

The component intelligently renders sections only when content is provided, using Drupal page regions as fallbacks.

## Usage

### Basic Usage with Slots

```twig
{% embed 'mud_egov:footer' with {
  footer_uc: ['custom-footer-class'],
} %}
  {%- block slot_footer -%}
  {%- endblock -%}

  {%- block slot_footer_middle_left -%}
  {%- endblock -%}

  {%- block slot_footer_middle_right -%}
  {%- endblock -%}

  {%- block slot_footer_bottom_left -%}
  {%- endblock -%}

  {%- block slot_footer_bottom_right -%}
  {%- endblock -%}
{% endembed %}
```

### Using Drupal Page Regions (Fallback)

If no slots are provided, the component automatically falls back to Drupal page regions:

```twig
{# This will use page.footer, page.footer_middle_left, etc. #}
{% include 'mud_egov:footer' %}
```

### Minimal Footer with Only Bottom Section

```twig
{% embed 'mud_egov:footer' %}
  {% block slot_footer_bottom_left %}
    <p>© 2026 Organization Name</p>
  {% endblock %}
{% endembed %}
```

## Props

| Prop         | Type                             | Default | Description                            |
| ------------ | -------------------------------- | ------- | -------------------------------------- |
| `footer_uc`  | `array`                          | `[]`    | Utility classes for the footer element |
| `footer_att` | `Drupal\Core\Template\Attribute` | -       | HTML attributes for the footer element |

## Slots

| Slot                       | Required | Fallback                   | Description                          |
| -------------------------- | -------- | -------------------------- | ------------------------------------ |
| `slot_footer`              | No       | `page.footer`              | Main footer navigation section       |
| `slot_footer_middle_left`  | No       | `page.footer_middle_left`  | Middle left content area             |
| `slot_footer_middle_right` | No       | `page.footer_middle_right` | Middle right content area            |
| `slot_footer_bottom_left`  | No       | `page.footer_bottom_left`  | Bottom left content area (copyright) |
| `slot_footer_bottom_right` | No       | `page.footer_bottom_right` | Bottom right content area (legal)    |

**Note:** Sections are only rendered when their slot has content OR when the corresponding Drupal page region has content. Empty slots are automatically hidden.

## CSS Variables

| Variable       | Default                                                                                                                                                                                 | Description                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `--footer_f-s` | `inherit`                                                                                                                                                                               | Footer font size            |
| `--footer_l-h` | `inherit`                                                                                                                                                                               | Footer line height          |
| `--footer_bg`  | `linear-gradient(0deg, #00ABF1, #00ABF1), linear-gradient(83.85deg, #0088D6 0%, #00ABF1 33%, #00ABF1 66%, #80DAFF 100%), linear-gradient(180deg, #00ABF1 0%, rgba(0, 171, 241, 0) 25%)` | Footer background gradient  |
| `--footer_c`   | `var(--c_white)`                                                                                                                                                                        | Footer text color           |
| `--footer_p-b` | `var(--size_1600) var(--size_1300)`                                                                                                                                                     | Footer padding block        |
| `--footer_p-i` | `0px`                                                                                                                                                                                   | Footer padding inline       |
| `--footer_gap` | `var(--size_600)`                                                                                                                                                                       | Gap between footer sections |

## Accessibility

- Semantic `<footer>` element
- Proper heading hierarchy within footer sections
- Link text clearly describes destination
- Keyboard navigable
- Focus states visible

## Responsive Behavior

The footer layout is controlled via CSS and adapts to different screen sizes. Each slot can contain responsive content.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement approach

## Technical Details

### Slot Detection

The component uses `block('slot_name') is not empty` to check if a slot has content. This ensures that:

- Empty slots don't render their wrapper divs
- Only sections with actual content are displayed
- Cleaner HTML output without empty containers

### Fallback System

Each slot has a corresponding Drupal page region fallback:

- `slot_footer` → `page.footer`
- `slot_footer_middle_left` → `page.footer_middle_left`
- `slot_footer_middle_right` → `page.footer_middle_right`
- `slot_footer_bottom_left` → `page.footer_bottom_left`
- `slot_footer_bottom_right` → `page.footer_bottom_right`

This allows the component to work seamlessly with Drupal's block system.

## Examples in Use

The component can be used with `{% embed %}` for maximum flexibility with slots, or with `{% include %}` when relying on Drupal page regions.

## Related Components

- Navigation components
- Block system integration

## Changelog

### 1.0.1 (2026-02-04)

- Changed slot detection from `is defined` to `is not empty`
- Fixed issue where empty slots were rendering wrapper divs
- Improved conditional rendering logic

### 1.0.0 (2026-02-03)

- Initial release with slot-based architecture
- Five configurable slots with Drupal page region fallbacks
- Flexible layout structure
- Accessibility compliant
