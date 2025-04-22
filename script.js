const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const carruselContainer = document.querySelector('.carrusel-container');
const carrusel = document.querySelector('.carrusel');

// Tamaño de un "paso" (una tarjeta + margen). Ajusta si cambias estilos.
const paso = 240 + 32; // ancho de tarjeta + gap (220 + 20 + 12 extra por si acaso)

prevBtn.addEventListener('click', () => {
  if (carruselContainer.scrollLeft <= 0) {
    // Si ya estamos al principio, salta al final
    carruselContainer.scrollTo({
      left: carrusel.scrollWidth,
      behavior: 'smooth'
    });
  } else {
    carruselContainer.scrollBy({
      left: -paso,
      behavior: 'smooth'
    });
  }
});

nextBtn.addEventListener('click', () => {
  const maxScrollLeft = carrusel.scrollWidth - carruselContainer.clientWidth;

  if (carruselContainer.scrollLeft >= maxScrollLeft) {
    // Si ya estamos al final, salta al principio
    carruselContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    carruselContainer.scrollBy({
      left: paso,
      behavior: 'smooth'
    });
  }
});
