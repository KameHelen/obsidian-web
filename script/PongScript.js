const miDiv2 = document.getElementById('miDiv2');
const coordenadas = document.getElementById('coordenadas');
const puntaje1 = document.getElementById('puntuacion1');
const puntaje2 = document.getElementById('puntuacion2');

const bloque = document.getElementById("pj");
const bloque2 = document.getElementById("pj2");

// OTRO EVENTO
miDiv2.addEventListener('mousemove', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // coordenadas.textContent = `X: ${x}, Y: ${y}`;

    bloque.style.left = 900 + "px";
    if (y<=485&&y>=15){
        bloque.style.top = y-15 + "px";
    }


    

});
const pj2 = document.getElementById("pj2");
const contenedor = document.getElementById("miDiv");
pj2.style.left = 90 + "px";
function moverAleatoriamente() {
    const maxY = contenedor.clientHeight - pj2.clientHeight;

    const newY = Math.floor(Math.random() * maxY);
    const duracion = Math.random(1)+1;

    pj2.style.transition = `all ${duracion}s ease-in-out`;
    pj2.style.top = `${newY}px`;

    setTimeout(moverAleatoriamente, duracion * 1000);
}

moverAleatoriamente();

const bola = document.getElementById("bola");
bola.style.left = `500px`;
bola.style.top = `250px`;
let puntuacion1 = 0
let puntuacion2 = 0
let velocidadX = 4;
let velocidadY = 3;

function moverBola() {
    let posX = bola.offsetLeft;
    let posY = bola.offsetTop;

    let nuevaX = posX + velocidadX;
    let nuevaY = posY + velocidadY;

    const maxX = contenedor.clientWidth - bola.clientWidth;
    const maxY = contenedor.clientHeight - bola.clientHeight;

    if (nuevaY <= 0 || nuevaY >= maxY) {
        velocidadY *= -1;

    }


    if (nuevaX <= pj2.offsetLeft + pj2.offsetWidth && 
        nuevaY + bola.offsetHeight >= pj2.offsetTop && 
        nuevaY <= pj2.offsetTop + pj2.offsetHeight) {
        velocidadX *= -1.1;
        nuevaX = pj2.offsetLeft + pj2.offsetWidth;
    }

    if (nuevaX + bola.offsetWidth >= pj.offsetLeft &&
        nuevaY + bola.offsetHeight >= pj.offsetTop &&
        nuevaY <= pj.offsetTop + pj.offsetHeight) {

        velocidadX *= -1.1;
        nuevaX = pj.offsetLeft - bola.offsetWidth;
    }

    if (nuevaX <= 90 || nuevaX >= maxX-90) { //GOL
        if(nuevaX >= maxX-90){
            puntuacion1 += 1;
            puntaje1.textContent = `${puntuacion1}`;

        }
        if(nuevaX <= 90){
            puntuacion2 += 1;
            puntaje2.textContent = `${puntuacion2}`;

        }
        bola.style.left = `500px`;
        bola.style.top = `250px`;
        velocidadX =4;


    }else{
        bola.style.left = `${nuevaX}px`;
        bola.style.top = `${nuevaY}px`;
    }    

    requestAnimationFrame(moverBola);
}

moverBola();

