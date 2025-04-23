// carrito.js

// Espera a que el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el carrito si no existe
    if (!localStorage.getItem("cartCount")) {
      localStorage.setItem("cartCount", "0");
    }
  
    // Actualiza el contador al cargar la página
    updateCartDisplay();
  
    // Maneja clicks en botones con clase "hero-button"
    document.querySelectorAll(".hero-button").forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let count = parseInt(localStorage.getItem("cartCount")) || 0;
        count++;
        localStorage.setItem("cartCount", count.toString());
        updateCartDisplay();
      });
    });
  });
  
  function updateCartDisplay() {
    const display = document.getElementById("cart-count");
    if (display) {
      display.textContent = localStorage.getItem("cartCount") || "0";
    }
  }
  