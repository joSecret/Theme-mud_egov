/**
 * @file
 * Media component - adjusts padding based on image vs wrapper width.
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.media = {
    attach: function (context) {
      const mediaElements = context.querySelectorAll('.c--media');

      mediaElements.forEach(function (media) {
        const wrapper = media.closest('.field--name-field-body');
        const img = media.querySelector('img');

        if (!wrapper || !img) {
          return;
        }

        function updatePadding() {
          const sameWidth = wrapper.offsetWidth < img.offsetWidth + 20;

          if (sameWidth) {
            media.classList.add('is-full-width');
          } else {
            media.classList.remove('is-full-width');
          }
        }

        const observer = new ResizeObserver(updatePadding);
        observer.observe(wrapper);
      });
    }
  };

})(Drupal);
