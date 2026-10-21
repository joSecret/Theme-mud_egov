/**
 * @file
 * Nav Scroll component behavior.
 */

((Drupal) => {
  Drupal.behaviors.navScroll = {
    attach(context) {
      context.querySelectorAll('[data-navScroll]').forEach((nav) => {
        // Skip if already initialized
        if (nav.dataset.navScrollInitialized) {
          return;
        }

        nav.dataset.navScrollInitialized = 'true';

        const track = nav.querySelector('[data-navScroll-track]');
        const prev = nav.querySelector('[data-navScroll-prev]');
        const next = nav.querySelector('[data-navScroll-next]');
        const buttons = nav.querySelector('.c--navScroll-buttons');

        // Observe changes to track items (for dynamic active class changes)
        if (track) {
          const observer = new MutationObserver(() => {
            scrollActiveIntoView();
          });

          observer.observe(track, {
            attributes: true,
            attributeFilter: ['class'],
            subtree: true,
          });
        }

        // Function to calculate average item width
        const getAverageItemWidth = () => {
          if (!track || !track.children.length) return 0;
          const items = Array.from(track.children);
          const totalWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0);
          return totalWidth / items.length;
        };

        if (track) {
          if (prev) {
            prev.addEventListener('click', () => {
              if (next) {
                next.removeAttribute('disabled');
              }

              track.scrollTo({
                left: track.scrollLeft - getAverageItemWidth(),
                behavior: 'smooth',
              });
            });
          }

          if (next) {
            next.addEventListener('click', () => {
              if (prev) {
                prev.removeAttribute('disabled');
              }

              track.scrollTo({
                left: track.scrollLeft + getAverageItemWidth(),
                behavior: 'smooth',
              });
            });
          }

          track.addEventListener('scroll', () => {
            const trackScrollWidth = track.scrollWidth;
            const trackOuterWidth = track.clientWidth;

            if (prev) {
              prev.removeAttribute('disabled');
            }
            if (next) {
              next.removeAttribute('disabled');
            }

            if (track.scrollLeft <= 0 && prev) {
              prev.setAttribute('disabled', '');
            }

            if (track.scrollLeft >= trackScrollWidth - trackOuterWidth - 1 && next) {
              next.setAttribute('disabled', '');
            }
          });

          // Handle clicks inside track to manage active class on child elements
          const trackItems = track.querySelectorAll(':scope > *');
          const hasActiveClass = Array.from(trackItems).some(item => item.classList.contains('active'));

          if (trackItems.length > 0 && hasActiveClass) {
            trackItems.forEach((item) => {
              item.addEventListener('click', () => {
                // Remove active class from all items in track
                trackItems.forEach((el) => el.classList.remove('active'));
                // Add active class to clicked item
                item.classList.add('active');
              });
            });
          }
        }

        // Function to check if buttons should be visible
        const checkButtonsVisibility = () => {
          if (track && buttons) {
            const trackScrollWidth = track.scrollWidth;
            const navWidth = nav.clientWidth;

            if (trackScrollWidth > navWidth) {
              nav.classList.remove('is-noButtons');
            } else {
              nav.classList.add('is-noButtons');
            }
          }
        };

        // Check on initial load
        checkButtonsVisibility();

        // Check on window resize
        window.addEventListener('resize', checkButtonsVisibility);

        // Function to scroll active item into view
        const scrollActiveIntoView = () => {
          if (!track) return;

          // Find active item or item with checked input
          const activeItem = track.querySelector('.active') ||
                           track.querySelector(':has(input:checked)');

          if (activeItem) {
            const trackRect = track.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();

            // Check if item is not fully visible
            const isLeftOutside = itemRect.left < trackRect.left;
            const isRightOutside = itemRect.right > trackRect.right;

            if (isLeftOutside || isRightOutside) {
              const itemOffsetLeft = activeItem.offsetLeft;
              const itemWidth = activeItem.offsetWidth;
              const trackWidth = track.clientWidth;
              const trackScrollWidth = track.scrollWidth;

              // Calculate the scroll position to center the item
              let scrollPosition = itemOffsetLeft - (trackWidth / 2) + (itemWidth / 2);

              // Ensure we don't scroll past the maximum scroll position
              const maxScroll = trackScrollWidth - trackWidth;
              scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

              // If item is near the end and scrolling to center would not show the full item,
              // scroll to the end instead
              const itemEnd = itemOffsetLeft + itemWidth;
              if (itemEnd > scrollPosition + trackWidth) {
                scrollPosition = Math.min(itemEnd - trackWidth, maxScroll);
              }

              track.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
              });
            }
          }
        };

        // Scroll active item into view on initial load
        // Use requestAnimationFrame and setTimeout to ensure layout is complete
        requestAnimationFrame(() => {
          setTimeout(() => {
            scrollActiveIntoView();
          }, 10);
        });
      });
    },
  };
})(Drupal);
