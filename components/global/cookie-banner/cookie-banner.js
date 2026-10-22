((Drupal, once) => {
  const STORAGE_KEY = 'mud_egov_cookie_consent';

  Drupal.behaviors.cookieBanner = {
    attach(context) {
      once('cookie-banner', '[data-cookie-banner]', context).forEach((el) => {
        if (localStorage.getItem(STORAGE_KEY)) {
          el.setAttribute('hidden', '');
          return;
        }

        el.querySelectorAll('[data-cookie-banner-action]').forEach((btn) => {
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
})(Drupal, once);
