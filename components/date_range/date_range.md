# Date Range Component

A flexible and intelligent date range display component that formats date ranges with smart condensing based on whether dates share the same year, month, or day.

## Overview

The Date Range component automatically formats date ranges in an optimal way:

- If dates are in different years: "01 Jan 2024 - 15 Feb 2025"
- If dates are in the same year but different months: "01 Jan - 15 Feb 2024"
- If dates are in the same month but different days: "01 - 15 Jan 2024"
- If dates are the same: "01 Jan 2024"

## Props

### Required Props

| Prop               | Type   | Description                                                                         |
| ------------------ | ------ | ----------------------------------------------------------------------------------- |
| `date_range_start` | string | The start date of the range (accepts various formats including Drupal field arrays) |
| `date_range_end`   | string | The end date of the range (accepts various formats including Drupal field arrays)   |

### Optional Props

| Prop                        | Type      | Default | Description                                             |
| --------------------------- | --------- | ------- | ------------------------------------------------------- |
| `date_range_delimiter`      | string    | `' - '` | Character(s) used to separate start and end dates       |
| `date_range_remove_wrapper` | boolean   | `true`  | Whether to include the wrapper div element              |
| `date_range_uc`             | array     | `[]`    | Array of utility classes to add to the component        |
| `date_range_att`            | Attribute | `null`  | Drupal attributes object for additional HTML attributes |

### Delimiter Options

The component supports various delimiter styles:

- `'-'` - Simple dash
- `'to'` - Word "to"
- `'until'` - Word "until"
- `'through'` - Word "through"
- `'and'` - Word "and"
- `'/'` - Forward slash
- `'|'` - Pipe character

## Usage Examples

### Basic Usage

```twig
{% include 'cms:date_range' with {
  date_range_start: '2024-01-15',
  date_range_end: '2024-02-20'
} %}
```

### With Custom Delimiter

```twig
{% include 'cms:date_range' with {
  date_range_start: '2024-01-15',
  date_range_end: '2024-02-20',
  date_range_delimiter: 'to',
} %}
```

### With Wrapper Element

```twig
{% include 'cms:date_range' with {
  date_range_start: '2024-01-15',
  date_range_end: '2024-02-20',
  date_range_remove_wrapper: false,
  date_range_uc: ['my-custom-class'],
  date_range_att: attributes,
} %}
```

### With Drupal Field Data

```twig
{% include 'cms:date_range' with {
  date_range_start: content.field_start_date,
  date_range_end: content.field_end_date,
} %}
```

## Data Format Support

The component intelligently handles different date data formats:

1. **Simple strings**: `'2024-01-15'`
2. **Drupal render arrays**: `{'#text': '2024-01-15'}`
3. **Field arrays with value**: `{'value': '2024-01-15'}`

## CSS Classes

The component adds the following CSS class:

- `.comp--date_range` - Base component class

Additional classes can be added via the `date_range_uc` prop.

**Important:** CSS classes are only applied when `date_range_remove_wrapper` is set to `false`. When the wrapper is removed (default behavior), no CSS classes are added to the output.

## CSS Customization

Target the component in your CSS:

```css
[data-component-id="cms:date_range"] {
  /* Your custom styles */
}

.comp--date_range {
  /* Alternative targeting */
}
```

### CSS Custom Properties

The component supports the following CSS custom properties for easy theming:

```css
.comp--date_range {
  --c_dr-c: #333; /* Text color */
  --c_dr-bg: transparent; /* Background color */
  --c_dr-f-s: 1rem; /* Font size */
}
```

## Accessibility

- The component outputs semantic HTML with proper date formatting
- Screen readers will announce the full date range clearly
- No additional ARIA attributes are needed for basic date display

## Technical Notes

- Dates are formatted using Twig's `date()` filter
- The component uses PHP date format strings ('d', 'M', 'Y')
- Smart formatting reduces redundancy while maintaining clarity
- Wrapper element can be removed for inline usage
