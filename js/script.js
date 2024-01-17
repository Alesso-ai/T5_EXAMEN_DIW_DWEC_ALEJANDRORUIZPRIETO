/**
 * @author: Alejandro Ruiz Prieto
 * @github:
 */

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajesErrores = [];

//Funciones
const validar = (e) => {
  e.preventDefault();
  mensajesErrores = [];

  nombre.value.trim().length === 0 &&
    mensajesErrores.push("El nombre es un campo obligatorio");
  //Validar el correo electronico
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(correo.value.trim())
    ? mensajesErrores.push("El correo electrónico no es válido")
    : null;

  //Validar el mensaje
  mensaje.value.trim().length < 10 &&
    mensajesErrores.push("Mensaje demasiado corto");
  //Validar el nombre
  !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) &&
    mensajesErrores.push("El nombre no tiene caracteres válidos");
  //Validar email
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    correo.value.trim()
  ) &&
    mensajesErrores.push(
      "Introduce una dirección de correo electrónico válida"
    );

  //ENVIAR O MOSTRAR MENSAJES DE ERROR

  if (
    mensajesErrores.length === 0 &&
    confirm("¿Estás seguro de enviar el formulario?")
  ) {
    formulario.submit();
  } else if (mensajesErrores.length > 0) {
    errores.textContent = "";
    console.log(mensajesErrores);
    mensajesErrores.forEach(function (mensaje) {
      const miLi = document.createElement("li");
      miLi.textContent = mensaje;
      errores.appendChild(miLi);
    });
  }
};

formulario.addEventListener("submit", validar);
