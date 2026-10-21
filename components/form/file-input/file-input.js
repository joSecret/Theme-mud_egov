(function (Drupal) {
  Drupal.behaviors.fileInput = {
    attach(context) {
      context.querySelectorAll('[data-file-input]').forEach(el => {
        if (el.hasAttribute('data-file-input-initialized')) return;
        el.setAttribute('data-file-input-initialized', 'true');

        const native = el.querySelector('.file-input-native');
        const dropzone = el.querySelector('[data-file-input-dropzone]');
        const browseBtn = el.querySelector('[data-file-input-browse]');
        const browseLink = el.querySelector('.file-input-browse-link');
        const list = el.querySelector('.file-input-list');

        function openPicker(e) {
          e.stopPropagation();
          native && native.click();
        }

        function renderFiles(files) {
          if (!list) return;
          list.innerHTML = '';
          [...files].forEach(file => {
            const li = document.createElement('li');
            const size = file.size > 1048576
              ? (file.size / 1048576).toFixed(1) + ' MB'
              : (file.size / 1024).toFixed(0) + ' KB';
            li.innerHTML = `
              <div class="file-item">
                <span class="file-item-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </span>
                <div class="file-item-info">
                  <span class="file-item-name">${file.name}</span>
                  <span class="file-item-meta">${size}</span>
                </div>
                <button type="button" class="file-item-remove" aria-label="Elimină ${file.name}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            `;
            li.querySelector('.file-item-remove').addEventListener('click', () => li.remove());
            list.appendChild(li);
          });
        }

        if (native) {
          native.addEventListener('change', () => renderFiles(native.files));
        }

        if (dropzone) {
          dropzone.addEventListener('click', openPicker);
          dropzone.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPicker(e); }
          });

          let dragDepth = 0;
          dropzone.addEventListener('dragenter', e => { e.preventDefault(); dragDepth++; dropzone.classList.add('is-dragover'); });
          dropzone.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; dropzone.classList.remove('is-dragover'); } });
          dropzone.addEventListener('dragover', e => e.preventDefault());
          dropzone.addEventListener('drop', e => {
            e.preventDefault();
            dragDepth = 0;
            dropzone.classList.remove('is-dragover');
            const files = e.dataTransfer && e.dataTransfer.files;
            if (files) renderFiles(files);
          });
        }

        if (browseLink) browseLink.addEventListener('click', openPicker);
        if (browseBtn) browseBtn.addEventListener('click', openPicker);
      });
    },
  };
})(Drupal);
