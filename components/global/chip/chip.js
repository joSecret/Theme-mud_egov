(function (Drupal) {
  Drupal.behaviors.chip = {
    attach(context) {
      context.querySelectorAll('[data-chip]').forEach(el => {
        if (el.hasAttribute('data-chip-initialized')) return;
        el.setAttribute('data-chip-initialized', 'true');

        const control = el.querySelector('.chip__control');
        const removeBtn = el.querySelector('[data-chip-remove]');

        // Filter chip: toggle selected state on click.
        if (control && el.classList.contains('chip-filter')) {
          control.addEventListener('click', () => {
            if (control.disabled || control.getAttribute('aria-disabled') === 'true') return;

            const isSelected = el.classList.toggle('is-selected');
            control.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

            el.dispatchEvent(new CustomEvent('chip:select', {
              bubbles: true,
              detail: { selected: isSelected, chip: el },
            }));
          });
        }

        // Input chip: emit remove event and hide chip on remove button click.
        if (removeBtn) {
          removeBtn.addEventListener('click', () => {
            if (removeBtn.disabled || removeBtn.getAttribute('aria-disabled') === 'true') return;

            el.dispatchEvent(new CustomEvent('chip:remove', {
              bubbles: true,
              detail: { chip: el },
            }));

            // Default: hide the chip. Prevent default on the event to keep it.
            el.hidden = true;
          });

          removeBtn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              removeBtn.click();
            }
          });
        }
      });
    },
  };
})(Drupal);
