// ELEMENTOS DEL DOM
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputAsunto = document.getElementById("asunto");
const inputMensaje = document.getElementById("mensaje");
const btn = document.getElementById("botton");

// DOMContentLoaded, Permite cargar los ELEM/Nodos del DOM antes de ejecutar JS
document.addEventListener("DOMContentLoaded", () => {
  enviarFormulario();
});

// FUNCION DE FLECHA ENCARGADA DE VALIDAR EL INPUT NOMBRE
const validarNombre = () => {
  const nombre = inputNombre.value;
  const p = document.getElementsByClassName("errorNombre");
  const regExpNombre =
    /^([A-Za-zÑñÁáÉéÍíÓóÚúÜü]+\s)?([A-Za-zÑñÁáÉéÍíÓóÚúÜü]+\s)?[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+\s[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;
  const validar = regExpNombre.test(nombre); //testea la expresion regular con el input
  let estadoInputName; // Declara una variable encargada de almacenar el estado del input con true o false

  // condicional que evalua el resultado del test(). Si el resultado no pasa el test entra al if anidado
  if (!validar) {
    // Condicional que pregunta el largo del campo input para ver si esta siendo ocupado por caracteres he imprimir el error
    if (nombre.length > 0) {
      p[0].textContent = `Ingrese un nombre valido, ej: John Robert Doe Smith`;
      estadoInputName = false; //Si el input esta en modo invalido o con errores, almacena false.
      // console.log(p)
    } else {
      p[0].textContent = ""; // Se oculta el mensaje de error
    }
  } else {
    p[0].textContent = ""; // Se oculta el mensaje de error
    estadoInputName = true; // Si el inputName pasa los filtros se almacena como true
  }
  return estadoInputName; // Retorna el ultimo estado del inputName
};

// FUNCION DE FLECHA ENCARGADA DE VALIDAR EL INPUT ASUNTO
const validarAsunto = () => {
  const asunto = inputAsunto.value;
  const p = document.getElementsByClassName("errorAsunto");
  const regExpAsunto = /^[A-Za-z\s]{0,20}$/;
  const validar = regExpAsunto.test(asunto);
  let estadoInputAsunto;

  if (!validar) {
    if (asunto.length > 0) {
      p[0].textContent = "Ingrese un asunto valido sin caracteres especiales";
      estadoInputAsunto = false;
    } else {
      p[0].textContent = "";
    }
  } else {
    p[0].textContent = "";
    estadoInputAsunto = true;
  }
  return estadoInputAsunto;
};

// FUNCION DE FLECHA ENCARGADA DE VALIDAR EL INPUT MENSAJE
const validarMensaje = () => {
  const mensaje = inputMensaje.value;
  const p = document.getElementsByClassName("errorMensaje");
  const regExpMensaje = /^[0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü.,\s]{0,500}$/;
  const validar = regExpMensaje.test(mensaje);

  let estadoInputMensaje;
  if (!validar) {
    if (mensaje.length > 0) {
      p[0].textContent =
        "Ingrese un asunto valido, maximo 500 caracteres no especiales";
      estadoInputMensaje = false;
      // console.log(p)
    } else {
      p[0].textContent = "";
    }
  } else {
    p[0].textContent = "";
    estadoInputMensaje = true;
  }
  return estadoInputMensaje;
};

// FUNCION DE FLECHA ENCARGADA DE LIMPIAR INPUTS DESPUES DE ENVIAR FORMULARIO
const limpiarInputs = () => {
  inputNombre.value = "";
  inputAsunto.value = "";
  inputMensaje.value = "";
  document.getElementsByClassName("errorNombre")[0].textContent = "";
  document.getElementsByClassName("errorAsunto")[0].textContent = "";
  document.getElementsByClassName("errorMensaje")[0].textContent = "";
};

// FUNCION DE FLECHA ENCARGADA DE ENVIAR MENSAJE DE EXITO
const mensajeExito = () => {
  const resultado = document.getElementsByClassName("resultado")[0];
  const p = document.createElement("p");
  p.innerText = "Mensaje enviado con éxito";
  resultado.appendChild(p);
  limpiarInputs();
};

// FUNCION DE FLECHA ENCARGADA DE IMPRIMIR ERRORES CUANDO LOS INPUTS ESTAN VACIOS
const validacionGeneral = () => {
  const p1 = document.getElementsByClassName("errorNombre");
  const p2 = document.getElementsByClassName("errorAsunto");
  const p3 = document.getElementsByClassName("errorMensaje");
  p1[0].innerText = "El nombre es requerido";
  p2[0].innerText = "El asunto es requerido";
  p3[0].innerText = "El mensaje es requerido";
};

// EVENTOS TIPO INPUTS QUE EJECUTAN LAS FUNCIONES CORRESPONDIENTES AL MOMENTO DE COMENZAR A ESCRIBIR EN UN INPUT
inputNombre.addEventListener("input", () => validarNombre());
inputAsunto.addEventListener("input", () => validarAsunto());
inputMensaje.addEventListener("input", () => validarMensaje());

// FUNCION DE FLECHA ENCARGADA DE EJECUTAR EL FORMULARIO TIPO SUBMIT
const enviarFormulario = (
  estadoInputNombre,
  estadoInputAsunto,
  estadoInputMensaje
) => {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // previene el comportamiento por defecto de un formulario.
    let validarForm = true; // inicializa una constante en true que servira para comparar los estados d elos inputs.
    const estadoNombre = validarNombre(estadoInputNombre); // guarda la funcion en una constante para usarla abajo
    const estadoAsunto = validarAsunto(estadoInputAsunto);
    const estadoMensaje = validarMensaje(estadoInputMensaje);
    // Compara el estado del form con el estado de cada input
    if (
      validarForm === estadoNombre &&
      validarForm === estadoAsunto &&
      validarForm === estadoMensaje
    ) {
      mensajeExito(); // Si todo es true imprime mensaje de exito.
    } else {
      console.warn("COMPLETE LOS CAMPOS");
      validacionGeneral(); // si los campos estan vacios imprime errores
    }
  });
};

// EJECUTA EL FORMULARIO AL PRESIONAR EL BOTON CON EL EVENTO CLICK
btn.addEventListener("click", (e) => enviarFormulario);
