# Nav Scroll Component

## Description

The `nav-scroll` component provides a horizontal navigation with scroll, equipped with left/right navigation buttons and automatic active element detection. It's ideal for tab menus, filters, or any type of horizontal navigation that requires scrolling.

## Features

- **Smooth horizontal scroll**: Enables fluid scrolling through elements
- **Navigation buttons**: Displays prev/next buttons for controlled scrolling
- **Auto-centering active item**: Active element is automatically centered in view
- **Responsive**: Adapts to screen size and hides buttons when not needed
- **Touch-friendly**: On touch devices, buttons are automatically hidden
- **Snap scrolling**: Elements align perfectly when scrolling
- **Disabled state management**: Buttons are disabled when reaching the ends

## Usage

### Basic example

```twig
{% embed '@frontend/nav-scroll/nav-scroll.twig' %}
  {% block slot_content %}
    <nav>
      <a href="#section1" class="active">Section 1</a>
      <a href="#section2">Section 2</a>
      <a href="#section3">Section 3</a>
      <a href="#section4">Section 4</a>
      <a href="#section5">Section 5</a>
    </nav>
  {% endblock %}
{% endembed %}
```

### Example with radio buttons (filters)

```twig
{% embed '@frontend/nav-scroll/nav-scroll.twig' %}
  {% block slot_content %}
    <div class="filter-list">
      <div class="form-item">
        <input type="radio" id="filter-all" name="filter" value="all" checked>
        <label for="filter-all">All</label>
      </div>
      <div class="form-item">
        <input type="radio" id="filter-news" name="filter" value="news">
        <label for="filter-news">News</label>
      </div>
      <div class="form-item">
        <input type="radio" id="filter-events" name="filter" value="events">
        <label for="filter-events">Events</label>
      </div>
    </div>
  {% endblock %}
{% endembed %}
```

### Without navigation buttons

```twig
{% embed '@frontend/nav-scroll/nav-scroll.twig' with {
  nav_scroll_navigation: false
} %}
  {% block slot_content %}
    <nav>
      <a href="#tab1">Tab 1</a>
      <a href="#tab2">Tab 2</a>
      <a href="#tab3">Tab 3</a>
    </nav>
  {% endblock %}
{% endembed %}
```

### With custom classes

```twig
{% embed '@frontend/nav-scroll/nav-scroll.twig' with {
  nav_scroll_uc: ['custom-nav', 'primary_nav']
} %}
  {% block slot_content %}
    {# Content here #}
  {% endblock %}
{% endembed %}
```

### Custom buttons

```twig
{% embed '@frontend/nav-scroll/nav-scroll.twig' %}
  {% block slot_content %}
    {# Your navigation items #}
  {% endblock %}

  {% block slot_btn_prev %}
    <button type="button" data-navScroll-prev disabled>
      <span>←</span>
    </button>
  {% endblock %}

  {% block slot_btn_next %}
    <button type="button" data-navScroll-next>
      <span>→</span>
    </button>
  {% endblock %}
{% endembed %}
```

## Available Parameters

### Props

| Parameter               | Type      | Default Value | Description                                     |
| ----------------------- | --------- | ------------- | ----------------------------------------------- |
| `nav_scroll_navigation` | boolean   | `true`        | Controls the display of navigation buttons      |
| `nav_scroll_uc`         | array     | `[]`          | Array of utility CSS classes for custom styling |
| `nav_scroll_att`        | Attribute | -             | Additional HTML attributes for the container    |

### Slots

| Slot            | Description                                   |
| --------------- | --------------------------------------------- |
| `slot_content`  | Main navigation content (menu, filters, etc.) |
| `slot_btn_prev` | Button for scrolling left (customizable)      |
| `slot_btn_next` | Button for scrolling right (customizable)     |

## CSS Variables

### Track Variables (scroll area)

| CSS Variable              | Default Value                    | Description                                       |
| ------------------------- | -------------------------------- | ------------------------------------------------- |
| `--_nav-scroll_track_gap` | `0px`                            | Space between elements in track                   |
| `--_nav-scroll_track_p-i` | `var(--_nav-scroll_btns_w, 0px)` | Inline padding for track (makes room for buttons) |
| `--_nav-scroll_track_b-b` | `1px solid #cccccc`              | Bottom border for track                           |

### Button Variables

| CSS Variable                         | Default Value    | Description                                      |
| ------------------------------------ | ---------------- | ------------------------------------------------ |
| `--nav-scroll_btn_d`                 | `flex`           | Display for buttons (changes to `none` on touch) |
| `--_nav-scroll_btns_w`               | `40px`           | Width of navigation buttons                      |
| `--_nav-scroll_btns_b-r`             | `0px`            | Border radius for buttons                        |
| `--_nav-scroll_btn_bg`               | `var(--c_white)` | Background color for buttons                     |
| `--_nav-scroll_btn_b`                | `none`           | Border for buttons                               |
| `--_nav-scroll_btn_disabled-opacity` | `0.5`            | Opacity when button is disabled                  |

### Item Variables (track elements)

| CSS Variable                    | Default Value    | Description                        |
| ------------------------------- | ---------------- | ---------------------------------- |
| `--_nav-scroll_item_p`          | `8px 16px`       | Padding for each item              |
| `--_nav-scroll_item_bg`         | `var(--c_white)` | Background color for items         |
| `--_nav-scroll_item_c`          | `var(--body_c)`  | Text color for items               |
| `--_nav-scroll_item_f-s`        | `16px`           | Font size for items                |
| `--_nav-scroll_item_f-w`        | `500`            | Font weight for items              |
| `--_nav-scroll_item_transition` | `all 0.2s ease`  | Transition for hover/active states |
| `--_nav-scroll_item_b-r`        | `0px`            | Border radius for items            |

### Active Item Variables

| CSS Variable              | Default Value          | Description                      |
| ------------------------- | ---------------------- | -------------------------------- |
| `--_nav-scroll_item_bg_a` | `var(--c_primary_500)` | Background color for active item |
| `--_nav-scroll_item_c_a`  | `var(--c_white)`       | Text color for active item       |

## CSS Customization Examples

### Custom Styling - Items with Border

```css
.custom-nav-scroll {
  --_nav-scroll_item_p: 12px 24px;
  --_nav-scroll_item_bg: transparent;
  --_nav-scroll_item_c: var(--c_dark);
  --_nav-scroll_item_b-r: 8px;
  --_nav-scroll_track_gap: 12px;

  --_nav-scroll_item_bg_a: var(--c_primary);
  --_nav-scroll_item_c_a: white;
}
```

### Buttons with Border and Shadow

```css
.nav-with-shadow {
  --_nav-scroll_btns_w: 48px;
  --_nav-scroll_btns_b-r: 50%;
  --_nav-scroll_btn_bg: white;
  --_nav-scroll_btn_b: 1px solid #e0e0e0;
}

.nav-with-shadow .c--nav-scroll__buttons button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Track without Border

```css
.nav-no-border {
  --_nav-scroll_track_b-b: none;
}
```

## JavaScript Features

The component includes automatic JavaScript behaviors:

1. **Auto-scroll to active element**: When an element has the `.active` class or contains an `input:checked`, it will be automatically centered in view
2. **Button management**: Prev/next buttons are automatically enabled/disabled when reaching the ends
3. **Auto-hide buttons**: Buttons are automatically hidden when content doesn't require scrolling
4. **Responsive**: On touch devices (pointer: coarse), buttons are automatically hidden
5. **Mutation Observer**: Monitors class changes to keep the active element visible

## Data Attributes

| Attribute                    | Description                             |
| ---------------------------- | --------------------------------------- |
| `data-navScroll`             | Marker for the main container           |
| `data-navScroll-track`       | Marker for the scrollable area          |
| `data-navScroll-prev`        | Marker for the previous button          |
| `data-navScroll-next`        | Marker for the next button              |
| `data-navScroll-initialized` | Initialization flag (set automatically) |

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Works on all modern browsers with support for:

- CSS Custom Properties
- `scrollTo` API
- MutationObserver
- `scroll-snap-type`
