# Breadcrumb Component

A navigation component that displays a breadcrumb trail showing the user's location within the site hierarchy.

## Usage

### Basic usage

```twig
{% include 'mud_egov:breadcrumb' with {
  breadcrumb_items: [
    { text: 'Home', url: '/' },
    { text: 'Blog', url: '/blog' },
    { text: 'Current Page', url: null }
  ]
} %}
```

### With custom title

```twig
{% include 'mud_egov:breadcrumb' with {
  breadcrumb_title: 'You are here',
  breadcrumb_items: [
    { text: 'Home', url: '/' },
    { text: 'About', url: null }
  ]
} %}
```

### With utility classes

```twig
{% include 'mud_egov:breadcrumb' with {
  breadcrumb_items: breadcrumb,
  breadcrumb_uc: ['container'],
  breadcrumb_item_uc: ['text-sm']
} %}
```

### Without icons

```twig
{% include 'mud_egov:breadcrumb' with {
  breadcrumb_items: [
    { text: 'Home', url: '/' },
    { text: 'Blog', url: '/blog' },
    { text: 'Current Page', url: null }
  ],
  breadcrumb_hide_icons: true
} %}
```

## Properties

- `breadcrumb_tag` (string|null): Wrapper tag (default: 'nav')
- `breadcrumb_title` (string|null): Screen reader title (default: 'Breadcrumb')
- `breadcrumb_items` (array): Array of items with `text` and optional `url`
- `breadcrumb_hide_icons` (boolean): Whether to hide icons in breadcrumb items (default: false)
- `breadcrumb_uc` (array): Utility classes for the wrapper
- `breadcrumb_list_uc` (array): Utility classes for the list
- `breadcrumb_item_uc` (array): Utility classes for items
- `breadcrumb_att` (Attribute): Additional attributes for the wrapper
- `breadcrumb_list_att` (Attribute): Additional attributes for the list

## Slots

- `breadcrumb_content`: Override the default breadcrumb content
