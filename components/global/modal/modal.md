# Modal

Overlay dialog component built on the native `<dialog>` element. Provides focus trapping, Escape handling, backdrop dimming, and ARIA semantics out of the box.

## Usage

```twig
{% include 'mud_egov:modal' with {
  modal_id: 'confirm-delete',
  modal_title: 'Delete account',
  modal_size: 'md',
  modal_destructive: true,
  modal_open: false,
  slot_trigger: '<button type="button" data-modal-trigger="confirm-delete" class="button button-destructive button-filled">Delete</button>',
  slot_content: '<p>This action cannot be undone. Are you sure?</p>',
  slot_footer: '<button type="button" class="button button-secondary button-outlined" data-modal-close>Cancel</button>
                <button type="button" class="button button-destructive button-filled">Confirm</button>',
} only %}
```

## Props

| Prop                   | Type              | Default    | Description                                              |
|------------------------|-------------------|------------|----------------------------------------------------------|
| `modal_title`          | `string\|null`    | `null`     | Dialog title text.                                       |
| `modal_id`             | `string\|null`    | auto       | Unique ID for the `<dialog>` element.                    |
| `modal_size`           | `string\|null`    | `null`     | `sm` / `md` / `lg` / `xl` / `fullscreen`                |
| `modal_variant`        | `string\|null`    | `null`     | `default` / `with-image` / `with-icon`                   |
| `modal_actions_layout` | `string\|null`    | `null`     | `inline` (default) / `stacked`                           |
| `modal_close_label`    | `string`          | `Închide`  | Accessible label for the × button.                       |
| `modal_open`           | `boolean`         | `false`    | Server-side initial open state.                          |
| `modal_closable`       | `boolean`         | `true`     | Show the × close button.                                 |
| `modal_close_on_backdrop` | `boolean`     | `true`     | Close when clicking the backdrop.                        |
| `modal_close_on_escape` | `boolean`        | `true`     | Close on Escape key.                                     |
| `modal_destructive`    | `boolean`         | `false`    | Red top-border accent for destructive actions.           |
| `modal_uc`             | `array`           | `[]`       | Extra utility classes.                                   |
| `modal_att`            | `Attribute\|null` | `null`     | Additional HTML attributes.                              |

## Slots

| Slot           | Description                                  |
|----------------|----------------------------------------------|
| `slot_trigger` | Element that opens the modal on click.       |
| `slot_header`  | Custom header content (overrides `modal_title`). |
| `slot_content` | Main body content.                           |
| `slot_footer`  | Footer action buttons.                       |

## CSS Custom Properties

| Property                  | Default          | Description            |
|---------------------------|------------------|------------------------|
| `--modal_backdrop-bg`     | `rgb(0 0 0/0.5)` | Backdrop color.        |
| `--modal_bg`              | `#fff`           | Surface background.    |
| `--modal_border-radius`   | `8px`            | Surface border radius. |
| `--modal_max-width-sm`    | `400px`          | Max-width for `sm`.    |
| `--modal_max-width-md`    | `560px`          | Max-width for `md`.    |
| `--modal_max-width-lg`    | `760px`          | Max-width for `lg`.    |
| `--modal_footer-gap`      | `12px`           | Gap between footer buttons. |
