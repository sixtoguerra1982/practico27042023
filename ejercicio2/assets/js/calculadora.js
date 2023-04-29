// LINEA 2 a 8: El evento DOMContentLoaded espera a que se carguen los elemtos del DOM para ejecutar los Listeners.
document.addEventListener("DOMContentLoaded", () => {
  const btnSumar = document.getElementById("btn-sumar"); // Obtenemos los elementos buttons.
  const btnRestar = document.getElementById("btn-restar");

  btnSumar.addEventListener("click", () => resultado(sumar())); // Al presionar el boton Sumar, se gatilla la funcion resultado.
  btnRestar.addEventListener("click", () => resultado(restar())); // Utilizamos los eventos Click
});

// LINEA 10 a 18: Funcion de flecha encargada de sumar
const sumar = () => {
  const primerInput = document.getElementById("valor1"); // Obtenemos el elemento input
  const segundoInput = document.getElementById("valor2");
  const num1 = parseInt(primerInput.value); // parseamos el elemento input y lo convertimos a un NUMERO ENTERO
  const num2 = parseInt(segundoInput.value);
  const suma = num1 + num2; // Sumamos los inputs y guardamos el resultado en 'suma'
  return suma; // retornamos el valor de la suma
};

// LINEA 21 a 30: Funcion de flecha encargada de restar
const restar = () => {
  const primerInput = document.getElementById("valor1"); // ...
  const segundoInput = document.getElementById("valor2"); // ...
  const num1 = parseInt(primerInput.value); // ...
  const num2 = parseInt(segundoInput.value); // ...
  const resta = num1 - num2; // ...
  // Operador Ternario (codifion if() de una linea).
  let total = resta < 0 ? 0 : resta; // Esta linea pregunta si la resta es menor a 0 y si lo es retorna 0 y sino retorna la resta
  return total; // retorna el resultado de la condicion de la linea 28
};

// Funcion encargada de pintar el resultado, obtiene una funcion como parametro (suma() o resta()). La cual se gatilla en la linea 6 y 7.
const resultado = (funcion) => {
  const resultado = document.querySelector(".resultado"); // Accede al elemento que pinta el resultado en el HTML.
  resultado.innerText = funcion; // La palabra funcion es reemplazada por la funcion sumar() o restar() de las lineas 6 y 7
};
