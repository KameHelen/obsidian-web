
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
    });

    // Deslizador de video 
    const btns = document.querySelectorAll('.nav-btn');
    const slides = document.querySelectorAll('.video-slide');
    const contents = document.querySelectorAll('.content');

    let currentIndex = 0;

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

        currentIndex = manual; // actualizar el índice actual
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sliderNav(i);
        });
    });

    // Movimiento automático del carrusel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        sliderNav(currentIndex);
    }, 5000); // cambia cada 5 segundos

