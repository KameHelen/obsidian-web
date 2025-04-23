
    function aceptarCookies() {
      localStorage.setItem("cookiesAceptadas", "true");
      document.getElementById("cookieBanner").style.display = "none";
    }

    window.onload = function() {
      if (localStorage.getItem("cookiesAceptadas") === "true") {
        document.getElementById("cookieBanner").style.display = "none";
      }
    };
  