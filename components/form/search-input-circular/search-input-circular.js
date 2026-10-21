((Drupal) => {
  Drupal.behaviors.searchInputCircularClear = {
    attach(context) {
      context.querySelectorAll('.search-circular-clear').forEach((button) => {
        button.addEventListener('click', () => {
          const input = button.closest('.search-circular-control')?.querySelector('.search-circular-field');
          if (input) {
            input.value = '';
            input.focus();
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        });
      });
    },
  };
})(Drupal);
