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

  if (nombre.value.trim().length === 0) {
    mensajesErrores.push("El nombre no puede estar vacio");
  }
  if (correo.value.trim().length === 0) {
    mensajesErrores.push("El correo no puede estar vacio");
  }

  if (mensaje.value.trim().length === 0) {
    mensajesErrores.push("El mensaje no puede estar vacio");
  }
};
