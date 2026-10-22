((Drupal, once) => {
  Drupal.behaviors.inputChip = {
    attach(context) {
      once('input-chip', '[data-input-chip]', context).forEach(el => {
        const field = el.querySelector('.input-chip-field');
        const input = el.querySelector('.input-chip-input');
        const hidden = el.querySelector('.input-chip-hidden');
        const maxAttr = field ? field.getAttribute('data-max') : null;
        const max = maxAttr ? parseInt(maxAttr, 10) : null;

        const getChips = () => [...el.querySelectorAll('.input-chip-chip')];

        const syncHidden = () => {
          if (!hidden) return;
          const values = getChips().map(c => c.getAttribute('data-chip-value'));
          hidden.value = JSON.stringify(values);
        };

        const addChip = (value) => {
          const trimmed = value.trim();
          if (!trimmed) return;
          if (max && getChips().length >= max) return;
          if (getChips().some(c => c.getAttribute('data-chip-value') === trimmed)) return;

          const chip = document.createElement('span');
          chip.className = 'input-chip-chip';
          chip.setAttribute('data-chip-value', trimmed);
          chip.innerHTML = `
            <span class="input-chip-chip-label">${trimmed}</span>
            <button type="button" class="input-chip-chip-remove" aria-label="Elimină ${trimmed}" tabindex="-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          `;

          chip.querySelector('.input-chip-chip-remove').addEventListener('click', () => {
            chip.remove();
            syncHidden();
            el.dispatchEvent(new CustomEvent('input-chip:remove', { bubbles: true, detail: { value: trimmed } }));
          });

          field.insertBefore(chip, input);
          syncHidden();
          el.dispatchEvent(new CustomEvent('input-chip:add', { bubbles: true, detail: { value: trimmed } }));
        };

        if (input) {
          input.addEventListener('keydown', e => {
            if ((e.key === 'Enter' || e.key === ',') && input.value) {
              e.preventDefault();
              addChip(input.value.replace(/,$/, ''));
              input.value = '';
            }
            if (e.key === 'Backspace' && !input.value) {
              const chips = getChips();
              if (chips.length) {
                const last = chips[chips.length - 1];
                const val = last.getAttribute('data-chip-value');
                last.remove();
                syncHidden();
                el.dispatchEvent(new CustomEvent('input-chip:remove', { bubbles: true, detail: { value: val } }));
              }
            }
          });

          input.addEventListener('blur', () => {
            if (input.value.trim()) {
              addChip(input.value);
              input.value = '';
            }
          });
        }

        if (field) {
          field.addEventListener('click', () => input && input.focus());
        }

        el.querySelectorAll('.input-chip-chip-remove').forEach(btn => {
          btn.addEventListener('click', () => {
            const chip = btn.closest('.input-chip-chip');
            const val = chip.getAttribute('data-chip-value');
            chip.remove();
            syncHidden();
            el.dispatchEvent(new CustomEvent('input-chip:remove', { bubbles: true, detail: { value: val } }));
          });
        });
      });
    },
  };
})(Drupal, once);
