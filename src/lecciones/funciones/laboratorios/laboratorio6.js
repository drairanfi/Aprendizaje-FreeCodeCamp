// Implementar el algoritmo de truncamiento de una cadena
// En este laboratorio, practicarás truncar una cadena a una cierta longitud.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Debe tener una función truncateString que acepte dos argumentos, el primero es una cadena y el segundo es un número.
// Si la longitud de la cadena es mayor que el número dado, la cadena debe truncarse para reducir la longitud de modo que sea igual al número dado, y ... debe colocarse al final de la cadena truncada.
// Si la longitud de la cadena es igual o menor que el número dado, la cadena debe devolverse sin cambios.

function truncateString(text, num){
  return text.length > num ? text.slice(0, num) + "..." : text;
}

console.log(truncateString("hola como estas", 2));

// sin funcion flecha 

// function truncateString(text, num){
//   if (text.length > num){
//     return text.slice(0, num) + "...";
//   } else {
//     return text;
//   }
// }