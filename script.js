//alert("Hola este es mi Javascript");

//let nombre = "Nicolas";

//console.log(nombre);

//FUNCIONES

let cambio0 = "herramienta";
let cambio1 = "tegnologicos";
let cambio2 = "labores";

let parrafo = document.querySelector(".parrafoi");

function cambiartexto(cambio0, cambio1, cambio2) {
    let contenido = `La inteligencia artificial (IA) es la ${cambio0} de las máquinas o los sistemas ${cambio1} de realizar ${cambio2} que normalmente requieren inteligencia humana, como el reconocimiento de imágenes, el procesamiento del lenguaje natural, la toma de decisiones o el aprendizaje.`;

    return contenido
}

parrafo.innerText = cambiartexto(cambio0, cambio1, cambio2);

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

