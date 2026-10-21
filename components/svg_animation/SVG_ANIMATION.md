# SVG Animation Component

A component for animated SVG elements, typically used for icon transitions (e.g., search to close, hamburger to X).

## Usage

### Basic usage with default icons

```twig
{% include "holcim_new:svg_animation" %}
```

This renders with default search and close icons that can be animated between.

### Custom icons using slots

```twig
{% embed "holcim_new:svg_animation" %}
  {% block slot_icon %}
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
      <!-- Custom icon 1 -->
    </svg>
  {% endblock %}

  {% block slot_icon_2 %}
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
      <!-- Custom icon 2 -->
    </svg>
  {% endblock %}
{% endembed %}
```

### With custom classes

```twig
{% include "holcim_new:svg_animation" with {
  svg_animation_uc: ['icon-large', 'icon-primary'],
} %}
```

### With custom attributes

```twig
{% include "holcim_new:svg_animation" with {
  svg_animation_att: create_attribute().setAttribute('data-animation', 'fade'),
} %}
```

## Props

### Utility Classes

- **svg_animation_uc** (array, optional, default: [])
  - Array of utility classes for customization
  - Use to add extra or custom CSS classes
  - Example: `['icon-lg', 'text-primary']`

### Attributes

- **svg_animation_att** (Drupal\Core\Template\Attribute, optional)
  - HTML attributes for the component wrapper
  - Example: `create_attribute().setAttribute('role', 'img')`

## Slots

- **slot_icon**: The first SVG icon to be animated

  - Default: Search icon (magnifying glass)
  - Should be an SVG element with `fill="currentColor"` for proper theming

- **slot_icon_2**: The second SVG icon to be animated
  - Default: Close icon (X)
  - Should be an SVG element with `fill="currentColor"` for proper theming

## Default Icons

### First Icon (Search)

- Magnifying glass icon
- 16x16 viewBox
- Uses `currentColor` for fill

### Second Icon (Close)

- X/Close icon
- 16x16 viewBox
- Uses `currentColor` for fill

## Features

- Smooth transitions between two icon states
- CSS-based animations
- Color inheritance via `currentColor`
- Flexible slot-based customization
- Responsive sizing

## CSS Classes

- `.comp--svg_animation`: Main component wrapper

## Common Use Cases

- Toggle buttons (open/close)
- Search button (search icon to close icon)
- Menu buttons (hamburger to X)
- Play/pause buttons
- Expand/collapse indicators

## JavaScript Integration

This component is typically used with JavaScript to toggle between icon states by:

- Adding/removing active classes
- Changing opacity of icon layers
- Transitioning between the two SVG elements

## Accessibility

When using in buttons:

- Ensure parent button has proper `aria-label`
- Use `aria-expanded` for toggle buttons
- SVG should have `aria-hidden="true"` if button has text label
