
// Construye una función de verificación booleana
// En este laboratorio, construirás una función que verifica si un valor está clasificado como un primitivo booleano.

// Booleanos primitivos son true y false.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Debes tener una función llamada booWho que reciba un argumento.
// Si el argumento recibido es un primitivo booleano, la función debe devolver true.
// Si el argumento es cualquier otro valor, la función debe devolver false.


function booWho(arg) {
  return typeof arg === "boolean";
}