/**
 * @file
 * Description.
 */

(function ($, Drupal) {
  Drupal.behaviors.tableOfContents = {
    attach: function (context) {
      const scrollSpyNav = $('.nav--scrollspy');

      // Add h2 to table of contents, set id for the h2 elements.
      $(once('table-of-contents-add-links', '.layoutFn-main h2', context)).each(function () {
        const title = $(this).text().trim();
        const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  // remove special characters
        .replace(/\s+/g, '-')      // replace spaces with dashes
        .replace(/-+/g, '-');      // collapse multiple dashes

        $(this).attr('id', id);
        // Check if window was opened with the hash.
        let hash = window.location.hash;
        let elementClasses = "nav-link";
        if (hash !== '' && `#${id}` === hash) {
          elementClasses += ' active';
        }
        if (!scrollSpyNav.find(`a[href="#${id}"]`).length) {
          scrollSpyNav.append(`<a class="${elementClasses}" href="#${id}">${title}</a>`);
        }
      })

      const titles = $('.layoutFn-main h2');
      const navLinks = scrollSpyNav.find('.nav-link');
      const displace = Drupal.displace();
      const adminToolbarHeight = displace.top;
      const headerHeight = ($('#header').outerHeight() || 0) + adminToolbarHeight;
      const offset = 20;

      // Clicking on TOC links scrolls smoothly and toggles active class.
      navLinks.on('click', function (event) {
        event.preventDefault();

        let hash = this.hash;
        if (hash === '') {
          return;
        }

        const target = $(this).attr('href');
        $('html, body').stop().animate(
          {scrollTop: $(target).offset().top - headerHeight - offset},
          500,
          function () {
            window.location.hash = hash
          }
        );
      })

      /**
       * Checks if an item is in the view relative to the header which is sticky.
       *
       * @param element
       *   The DOM element
       *
       * @returns {boolean}
       */
      function isScrolledIntoView(element) {
        const pageTop = $(window).scrollTop() + headerHeight + offset;
        const pageBottom = pageTop + $(window).height() - (headerHeight + offset);
        const elementTop = $(element).offset().top;
        const elementBottom = elementTop + $(element).height();

        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
      }

      // Scroll handler to mark links as active in TOC.
      function updateActiveTocLink() {
        let currentId = '';
        let lastActiveLink = scrollSpyNav.find('.nav-link.active');

        titles.each(function () {
          if (isScrolledIntoView($(this))) {
            currentId = $(this).attr('id');
            return false;
          }
        });

        navLinks.removeClass('active');
        if (currentId) {
          navLinks.filter(`[href="#${currentId}"]`).addClass('active');
        }
        // For big sections where a title would not always be visible
        else if (lastActiveLink.length) {
          lastActiveLink.addClass('active');
        }
      }

      $(window).on('load', updateActiveTocLink);

      $(window).on('scroll', updateActiveTocLink);
    }
  };
})(jQuery, Drupal, once);
