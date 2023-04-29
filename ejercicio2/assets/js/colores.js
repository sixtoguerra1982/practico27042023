// const btnRojo = document.getElementById("btn-1");
// const btnNaranja = document.getElementById("btn-2");
// const btnAmarillo = document.getElementById("btn-3");
// const btnVerde = document.getElementById("btn-4");
// const btnVerdeClaroXD = document.getElementById("btn-5");
// const vetePurpura = document.getElementById("btn-6");
const paletaColores = document.getElementById("caja-colores");
const caja = document.getElementById("caja");

// Delegacion de eventos, escucha el evento click en todo el document o al elemento que se limite (paletaColores).
// con target accede a las propiedades de lo que toca.
paletaColores.addEventListener("click", (event) => {
  console.log(event.target.style.backgroundColor);
  caja.style.backgroundColor = event.target.style.backgroundColor;
});
