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

//deslizador de video 
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    slides.forEach((slides) => {
        slides.classList.remove('active');
    });
    contents.forEach((contents) => {
        contents.classList.remove('active');
    });


    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');

}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
      
    });
});

// Carrito 

  let cartCount = 0;

  const downloadButtons = document.querySelectorAll('.hero-button');

  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      cartCount++;
      document.getElementById('cart-count').innerText = cartCount;
    });
  });

