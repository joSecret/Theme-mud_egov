# Timeline Item Component

A single timeline item component that displays a chronological event with optional year, title, description, and image. Can be displayed as a normal item or highlighted with special styling.

## Features

- ✅ Single timeline item (not a list)
- ✅ Optional fields: year, title, description, image
- ✅ Highlighted variant with special styling (dark blue background with decorative graphics)
- ✅ Image support via Drupal media field (includes all image data, caption, alt text, etc.)
- ✅ Flexible utility classes and attributes for all sub-elements
- ✅ Timeline node (circular indicator)

## Usage

### Basic Timeline Item

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: '1987',
  timelineItem_title: 'Montreal Protocol on Substances that Deplete the Ozone Layer ratified',
  timelineItem_description: 'It requires countries to reduce levels of production and consumption of ozone-depleting substances (ODS) according to an agreed schedule.',
} %}
```

### Timeline Item with Image

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: '1991',
  timelineItem_title: 'Ozone hole first detected over the Antarctic',
  timelineItem_description: 'Vienna Convention for the Protection of the Ozone Layer establishes principle...',
  timelineItem_image: content.field_image,
} %}
```

### Highlighted Timeline Item

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: '1991',
  timelineItem_title: 'Interim Multilateral Fund established on 1 January',
  timelineItem_description: 'Lorem ipsum dolor sit amet consectetur. Orci elit facilisis libero platea magna ullamcorper hendrerit egestas sapien. Elifend convallis in diam morbi.',
  timelineItem_image: content.field_media,
  timelineItem_highlighted: true,
} %}
```

### Using Drupal Fields

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: content.field_year|render|striptags|trim,
  timelineItem_title: content.field_title|render|striptags|trim,
  timelineItem_description: content.field_description,
  timelineItem_image: content.field_image,
} %}
```

## Props

| Property                   | Type                | Required | Default | Description                                             |
| -------------------------- | ------------------- | -------- | ------- | ------------------------------------------------------- |
| `timelineItem_year`        | string\|null        | No       | null    | The year or date for this timeline item                 |
| `timelineItem_title`       | string\|null        | No       | null    | The title of the event                                  |
| `timelineItem_description` | string\|null        | No       | null    | Descriptive text for the event                          |
| `timelineItem_image`       | array\|object\|null | No       | null    | Drupal media field (includes image, caption, alt, etc.) |
| `timelineItem_highlighted` | boolean             | No       | false   | Display with highlighted styling                        |

## Highlighted Styling

When `timelineItem_highlighted: true`, the item displays with:

- Dark blue background
- Decorative circular graphics (yellow/lime colored)
- Year badge with yellow background
- Large white title text
- White description text
- Image displayed in a special media section
- All image styling, captions, and attributes come from the Drupal media field

## Image Handling

The `timelineItem_image` prop accepts Drupal media field objects or arrays. All image-related data (caption, alt text, title, etc.) is handled by the Drupal field itself. The component only provides the container and styling.

```twig
{# Pass the entire field render array #}
timelineItem_image: content.field_media

{# Or pass a specific media entity #}
timelineItem_image: node.field_image

{# Field formatters, captions, and attributes are preserved #}
```

## CSS Classes

### Main Container

- `.c--timelineItem` - Main timeline item container
- `.c--timelineItem--highlighted` - Highlighted item modifier

### Timeline Structure

- `.timelineItem_node` - Circular node indicator
- `.timelineItem_content` - Content wrapper

### Elements

- `.timelineItem_year` - Year display
- `.timelineItem_title` - Title heading
- `.timelineItem_description` - Description text
- `.timelineItem_image` - Image container

### Highlighted Item Specific

- `.timelineItem_highlighted_wrapper` - Wrapper for highlighted content
- `.timelineItem_highlighted_decoration` - Decorative circular graphics
- `.timelineItem_highlighted_content` - Text content area in highlighted item
- `.timelineItem_highlighted_media` - Image wrapper in highlighted item

## Customization

### Using Utility Classes

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_uc: ['custom-timeline-class'],
  timelineItem_year_uc: ['badge', 'badge-primary'],
  timelineItem_title_uc: ['h2'],
  timelineItem_year: '2024',
  timelineItem_title: 'Important Event',
} %}
```

### Using Attributes

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_att: create_attribute().setAttribute('data-year', '2024'),
  timelineItem_title_att: create_attribute().setAttribute('id', 'event-2024'),
  timelineItem_year: '2024',
  timelineItem_title: 'Important Event',
} %}
```

## Creating a Full Timeline

To create a complete timeline with multiple items, wrap multiple `timeline_item` components in a container:

```twig
<div class="timeline-container">
  <div class="timeline-line"></div>

  {% for item in content.field_timeline_items %}
    {% include 'mud_egov:timeline_item' with {
      timelineItem_year: item.field_year,
      timelineItem_title: item.field_title,
      timelineItem_description: item.field_description,
      timelineItem_image: item.field_image,
      timelineItem_highlighted: item.field_highlighted.value,
    } %}
  {% endfor %}
</div>
```

## Example from Design

Based on the Montreal Protocol timeline design:

**Normal Item:**

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: '1987',
  timelineItem_title: 'Montreal Protocol on Substances that Deplete the Ozone Layer ratified',
  timelineItem_description: 'It requires countries to reduce levels...',
} %}
```

**Highlighted Item:**

```twig
{% include 'mud_egov:timeline_item' with {
  timelineItem_year: '1991',
  timelineItem_title: 'Interim Multilateral Fund established on 1 January',
  timelineItem_description: 'Lorem ipsum dolor sit amet consectetur...',
  timelineItem_image: content.field_media,
  timelineItem_highlighted: true,
} %}
```

## Notes

- All fields are optional - display only what's provided
- The component is designed to be used multiple times on a page for a full timeline
- The timeline node and connecting line should be styled via CSS on the parent container
- Image field includes all necessary media field data (caption, alt text, etc.) from Drupal
- Highlighted styling matches the dark blue design with yellow decorative elements from the mockup
