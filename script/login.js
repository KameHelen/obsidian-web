document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();  // Evitar que el formulario se envíe de la forma tradicional.

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;

    // Guardar los datos en sessionStorage
    sessionStorage.setItem("nombre", nombre);


    // Redirigir a la página de resultado de compra
    window.location.href = "index.html";

});


