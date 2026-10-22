((Drupal, once) => {
  Drupal.behaviors.switch = {
    attach(context) {
      once('switch', '[data-switch]', context).forEach((el) => {
        const input = el.querySelector('[data-switch-input]');
        if (!input) return;

        // Sync visual state from native input on change.
        input.addEventListener('change', () => {
          const isChecked = input.checked;
          el.classList.toggle('is-checked', isChecked);

          el.dispatchEvent(new CustomEvent('switch:change', {
            bubbles: true,
            detail: { checked: isChecked, value: input.value, switch: el },
          }));
        });

        // Sync initial server-rendered state (checked attr may differ from JS default).
        el.classList.toggle('is-checked', input.checked);
      });
    },
  };
})(Drupal, once);
