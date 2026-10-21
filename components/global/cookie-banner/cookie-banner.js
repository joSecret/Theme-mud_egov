(function (Drupal) {
  Drupal.behaviors.cookieBanner = {
    attach(context) {
      context.querySelectorAll('[data-cookie-banner]').forEach(el => {
        if (el.hasAttribute('data-cookie-banner-initialized')) return;
        el.setAttribute('data-cookie-banner-initialized', 'true');

        const STORAGE_KEY = 'mud_egov_cookie_consent';

        if (localStorage.getItem(STORAGE_KEY)) {
          el.setAttribute('hidden', '');
          return;
        }

        el.querySelectorAll('[data-cookie-banner-action]').forEach(btn => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-cookie-banner-action');
            localStorage.setItem(STORAGE_KEY, action);
            el.setAttribute('hidden', '');
            el.dispatchEvent(new CustomEvent('cookie-banner:consent', {
              bubbles: true,
              detail: { action },
            }));
          });
        });
      });
    },
  };
})(Drupal);
