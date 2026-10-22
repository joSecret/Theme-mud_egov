/**
 * @file
 * Media component - adjusts padding based on image vs wrapper width.
 */

((Drupal, once) => {
  Drupal.behaviors.media = {
    attach(context) {
      once('media', '.c--media', context).forEach((media) => {
        const wrapper = media.closest('.field--name-field-body');
        const img = media.querySelector('img');

        if (!wrapper || !img) {
          return;
        }

        const updatePadding = () => {
          const sameWidth = wrapper.offsetWidth < img.offsetWidth + 20;
          media.classList.toggle('is-full-width', sameWidth);
        };

        const observer = new ResizeObserver(updatePadding);
        observer.observe(wrapper);
      });
    },
  };
})(Drupal, once);
