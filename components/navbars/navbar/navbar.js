/**
 * @file
 * Navbar scroll behavior.
 */

(function (Drupal, once) {
  Drupal.behaviors.navbar = {
    attach: function (context) {
      once('navbar', '.c--navbar', context).forEach(function (navbar) {
        navbar.querySelector('.nav_mob button')?.addEventListener('click', function () {
          this.toggleAttribute('open');
          if (this.hasAttribute('open')) {
            navbar.style.setProperty('--_scroll_y', window.scrollY + 'px');
          }
        });

        const main = navbar.querySelector('.w-main');
        if (main) {
          function sumChildrenWidth(el) {
            const style = getComputedStyle(el);
            const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0;
            const children = Array.from(el.children);
            const sum = children.reduce(function (acc, c) {
              return acc + Math.max(c.offsetWidth, c.scrollWidth);
            }, 0);
            return sum + gap * Math.max(0, children.length - 1);
          }

          const ro = new ResizeObserver(scheduleCheck);
          const observed = new WeakSet();

          function observeChildren() {
            [navbar, main, navbar.querySelector('.nav_brand')]
              .concat(Array.from(main.children))
              .forEach(function (el) {
                if (el && !observed.has(el)) {
                  observed.add(el);
                  ro.observe(el);
                }
              });
          }

          let scheduled = false;
          function scheduleCheck() {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(function () {
              scheduled = false;
              checkMenuFit();
            });
          }

          function checkMenuFit() {
            observeChildren();

            const regionNavMain = navbar.querySelector('.region--nav-main');
            const navBrand = navbar.querySelector('.nav_brand');
            const menuList = main.querySelector('.nav_menu');
            const isDesktop = window.matchMedia('(min-width: 769px)').matches;

            if (regionNavMain) {
              regionNavMain.classList.remove('js_long-main-menu');

              if (isDesktop && navBrand) {
                const needed = sumChildrenWidth(main) + navBrand.offsetWidth;
                if (needed > navbar.clientWidth + 1) {
                  regionNavMain.classList.add('js_long-main-menu');
                }
              }
            }

            if (menuList) {
              navbar.removeAttribute('data-menu-wrap');
              if (menuList.scrollWidth > main.clientWidth + 1) {
                navbar.setAttribute('data-menu-wrap', '');
              }
            }
          }

          document.fonts.ready.then(scheduleCheck);
          window.addEventListener('load', scheduleCheck);

          const mo = new MutationObserver(scheduleCheck);
          mo.observe(navbar, { childList: true, subtree: true });

          scheduleCheck();
        }
      });
    }
  };
})(Drupal, once);
