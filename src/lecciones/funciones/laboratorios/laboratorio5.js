// Construye una Calculadora de Año Bisiesto
// Un año bisiesto es un año que es divisible por 4, excepto años que son divisibles por 100 y no divisible por 400. Por ejemplo, 2000 es un año bisiesto, pero 1900 no lo es. Además, un año bisiesto tiene un día extra en febrero, que es el día 29 del mes.


// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Define una función llamada isLeapYear que tome un número como argumento.
// Fuera de la función, declara una variable year que almacene el valor del año que deseas comprobar.
// Dentro de la función, usa una sentencia if/ else o un operador ternario para comprobar si el año es bisiesto.
// Para verificar si el año es bisiesto, cumple con las siguientes condiciones:
// Si el año es divisible por 4, entonces es un año bisiesto.
// A menos que el año también sea divisible por 100, entonces no es un año bisiesto.
// A menos que el año también sea divisible por 400, entonces es un año bisiesto.
// Si el año es bisiesto, devuelve [year] is a leap year.. De lo contrario, devuelve [year] is not a leap year.. Reemplazarás [year] con el parámetro definido en la función isLeapYear.
// Debes llamar a la función isLeapYear con year como argumento y asignar el resultado a una variable llamada result.
// Debes mostrar la variable result en la consola usando console.log().

function isLeapYear(num){
  return num % 4 == 0 && num % 100 !== 0 || num % 400 == 0  ? `${num} is a leap year.` : `${num} is not a leap year.`;
}
const year = 1900;
const result = isLeapYear(year);
console.log(result);

// version con el if normal

// function isLeapYear(num) {
//   if (num % 4 == 0 && num % 100 !== 0 || num % 400 == 0) {
//     return `${num} is a leap year.`;
//   } else {
//     return `${num} is not a leap year.`;
//   }
// }

// const year = 1900;
// const result = isLeapYear(year);
// console.log(result);