const carruselContainer = document.querySelector('.carrusel-container');
const carrusel = document.querySelector('.carrusel');
const nextBtn = document.querySelector('.carrusel-btn.next');
const prevBtn = document.querySelector('.carrusel-btn.prev');

let cardWidth = 0;
let cardsPerView = 0;
let totalCards = 0;
let currentIndex = 0;

// Calcular ancho de tarjeta y cuántas caben en pantalla
function calcularCardWidth() {
  const card = carrusel.querySelector('.juego-card');
  if (card) {
    cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    cardsPerView = Math.floor(carruselContainer.offsetWidth / cardWidth);
  }
}

// Inicializa el carrusel
function initCarousel() {
  const cards = carrusel.querySelectorAll('.juego-card');
  totalCards = cards.length;
  calcularCardWidth();
  currentIndex = 0;
  updateCarousel();
}

// Actualiza la posición del carrusel
function updateCarousel() {
  carruselContainer.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
}

// Mover el carrusel
function moveCarousel(direction) {
  currentIndex += direction;

  // Ajustar índices para bucle continuo
  if (currentIndex >= totalCards - cardsPerView + 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalCards - cardsPerView;
  }

  updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', () => moveCarousel(1));
prevBtn.addEventListener('click', () => moveCarousel(-1));

window.addEventListener('resize', () => {
  calcularCardWidth();
  updateCarousel();
});

// Inicializar cuando todo esté cargado
window.addEventListener('load', () => {
  initCarousel();
  // Forzar un recálculo después de un breve retraso para asegurarse
  setTimeout(initCarousel, 100);
});


const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
    });

    // Deslizador de video 
    const btns = document.querySelectorAll('.nav-btn');
    const slides = document.querySelectorAll('.video-slide');
    const contents = document.querySelectorAll('.content');

    let currentIndex1 = 0;

    var sliderNav = function(manual) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        contents.forEach((content) => {
            content.classList.remove('active');
        });

        btns[manual].classList.add('active');
        slides[manual].classList.add('active');
        contents[manual].classList.add('active');

        currentIndex1 = manual; // actualizar el índice actual
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sliderNav(i);
        });
    });

    // Movimiento automático del carrusel
    setInterval(() => {
        currentIndex1 = (currentIndex1 + 1) % slides.length;
        sliderNav(currentIndex1);
    }, 5000); // cambia cada 5 segundos


