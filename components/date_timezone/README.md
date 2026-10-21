# Date with timezone

A component that displays a date with optional time range and timezone information in a visually distinct format.

## Overview

The date timezone component presents date information in a compact grid layout with:

- A highlighted date block (month and day)
- Optional time range (start - end)
- Optional timezone information

## Visual Structure

The component uses a CSS grid layout with three main areas:

```
┌─────┬──────────┐
│DATE │ TIME     │
│     ├──────────┤
│     │ TIMEZONE │
└─────┴──────────┘
```

## Props

### Required Props

| Prop                       | Type   | Description               |
| -------------------------- | ------ | ------------------------- |
| `date_timezone_date_start` | string | The start date (required) |

### Optional Props

| Prop                     | Type                           | Default | Description                                        |
| ------------------------ | ------------------------------ | ------- | -------------------------------------------------- |
| `date_timezone_date_end` | string\|null                   | `null`  | End date for date ranges                           |
| `date_timezone_timezone` | string\|null                   | `null`  | Timezone label (e.g., "UTC", "EST")                |
| `date_timezone_uc`       | array                          | `[]`    | Array of utility classes for styling customization |
| `date_timezone_att`      | Drupal\Core\Template\Attribute | -       | HTML attributes for the component wrapper          |

## Slots

The component provides three slots for content customization:

### `slot_main`

Main slot containing the date block (month and day).

**Default content:**

```twig
<div class="date-short">
  <span class="month">{{ month|upper }}</span>
  <span class="day">{{ day }}</span>
</div>
```

### `slot_date`

Slot for the time display.

**Default content:**

```twig
<div class="time">
  {{ start_time }}
  {% if end_time %}- {{ end_time }}{%- endif -%}
</div>
```

### `slot_timezone`

Slot for timezone information.

**Default content:**

```twig
<div class="timezone">
  {{ timezone }}
</div>
```

## Usage Examples

### Basic Usage (Date Only)

```twig
{% include 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
} %}
```

**Output:** Displays "JAN 21" in the date block.

### With Time Range

```twig
{% include 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
  date_timezone_date_end: '2026-01-21 14:00:00',
} %}
```

**Output:** Displays "JAN 21" with "10:00 - 14:00" time range.

### With Timezone

```twig
{% include 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
  date_timezone_date_end: '2026-01-21 14:00:00',
  date_timezone_timezone: 'UTC',
} %}
```

**Output:** Complete display with date, time range, and timezone.

### With Custom Classes

```twig
{% include 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
  date_timezone_uc: ['my-custom-class', 'another-class'],
} %}
```

### With Custom Attributes

```twig
{% include 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
  date_timezone_att: create_attribute().setAttribute('data-event-id', '12345'),
} %}
```

### Using Slots for Customization

```twig
{% embed 'frontend:date_timezone' with {
  date_timezone_date_start: '2026-01-21 10:00:00',
} %}
  {% block slot_main %}
    <div class="custom-date">
      Custom date display
    </div>
  {% endblock %}
{% endembed %}
```

## Date Formats

The component automatically formats dates as follows:

- **Month:** 3-letter abbreviation, uppercase (e.g., "JAN", "FEB")
- **Day:** 2-digit format (e.g., "01", "21")
- **Time:** 24-hour format HH:mm (e.g., "10:00", "14:30")

## CSS Classes

### Main Component Class

- `.c--date-timezone` - Applied to the root element

### Sub-element Classes

- `.date-short` - Date block container
- `.month` - Month text
- `.day` - Day number
- `.time` - Time display
- `.timezone` - Timezone label

## Styling

The component includes responsive design:

- **Desktop (>1200px):** Full-size date block (20px font)
- **Tablet (455px-1200px):** Smaller date block (15px font)
- **Mobile (<455px):** Returns to 20px for better readability

### CSS Variables Used

- `--color-white` - Text and date block colors
- `--c_blue-dark` - Date block background
- `--c_gray_ultralight` - Timezone text color

## Grid Layout

The component uses CSS Grid with:

- **Columns:** `auto 1fr` (date block auto-sized, content fills remaining space)
- **Rows:** `1fr auto` (time takes available space, timezone sized to content)
- **Gap:** 4px row gap, 8px column gap

## Component Metadata

- **Version:** 1.0.0
- **Status:** stable
- **Group:** Date and time
- **Schema:** Drupal Single Directory Components (SDC)

## Notes

- The component handles date objects and formats them using Twig's `date()` filter
- If `date_timezone_date_end` is provided and equals `date_timezone_date_start`, the time range separator will be hidden
- The timezone block only renders if `date_timezone_timezone` is provided
- All dates should be provided in a format recognizable by PHP's date functions
