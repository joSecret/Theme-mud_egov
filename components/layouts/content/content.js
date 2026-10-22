/**
 * @file
 * Content layout: toggles the sidebar on small screens.
 */

((Drupal, once) => {
  Drupal.behaviors.content = {
    attach(context) {
      once('content-sidebar', '.js--show-sidebar', context).forEach((button) => {
        button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', !isExpanded);
        });
      });
    },
  };
})(Drupal, once);
