var acor = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acor.length; i++) {
  acor[i].addEventListener("click", function() {
        this.classList.toggle("activo"); /* Alterna entre agregar o quitar la clase "activo", para destacar el boton que controla el panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }