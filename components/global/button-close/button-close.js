((Drupal, once) => {
  Drupal.behaviors.mudButtonClose = {
    attach(context) {
      once('mud-button-close', '.button-close', context).forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          const target = btn.closest('[data-dismissable]');
          if (target) {
            target.remove();
          }
        });
      });
    },
  };
})(Drupal, once);
