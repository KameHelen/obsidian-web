
  const prevBtn = document.querySelector('.carrusel-btn.prev');
  const nextBtn = document.querySelector('.carrusel-btn.next');
  const carrusel = document.querySelector('.carrusel');

  prevBtn.addEventListener('click', () => {
    carrusel.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    carrusel.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });

