// Función para cambiar la imagen principal cuando se hace clic en una miniatura
function toExchangeImage(imgElement) {
  const mainImage = document.getElementById('img_main');
  if (mainImage && imgElement) {
    mainImage.src = imgElement.src;
    mainImage.alt = imgElement.alt;
  }
}

// Función para abrir el modal con la imagen ampliada
function viewImage(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  if (modal && modalImage) {
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restaurar scroll del body
  }
}

// Cerrar modal al hacer clic fuera de la imagen
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Cerrar modal con la tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Funcionalidad de cambio de pestañas
  const productTab = document.getElementById('product-tab');
  const imagesTab = document.getElementById('images-tab');
  const informationSection = document.getElementById('information-section');
  const imagesSection = document.getElementById('images-section');

  if (productTab && imagesTab && informationSection && imagesSection) {
    productTab.addEventListener('click', function() {
      informationSection.classList.remove('hidden');
      imagesSection.classList.add('hidden');
      productTab.classList.add('bg-blue-600', 'text-white');
      productTab.classList.remove('bg-gray-100', 'text-gray-700');
      imagesTab.classList.remove('bg-blue-600', 'text-white');
      imagesTab.classList.add('bg-gray-100', 'text-gray-700');
    });

    imagesTab.addEventListener('click', function() {
      informationSection.classList.add('hidden');
      imagesSection.classList.remove('hidden');
      imagesTab.classList.add('bg-blue-600', 'text-white');
      imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
      productTab.classList.remove('bg-blue-600', 'text-white');
      productTab.classList.add('bg-gray-100', 'text-gray-700');
    });
  }
});

