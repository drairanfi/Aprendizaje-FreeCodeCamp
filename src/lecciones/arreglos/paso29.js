// ¿Cómo obtienes el índice de un elemento en un arreglo usando el método indexOf?
// En JavaScript, el método indexOf() es útil para encontrar el primer índice de un elemento específico dentro de un arreglo. Si no se puede encontrar el elemento, entonces devolverá -1. Esta es la sintáxis básica:

// array.indexOf(element, fromIndex)
// element representa el valor que quieres buscar dentro del arreglo, y el parámetro fromIndex es la posición desde la cual debe empezar la búsqueda. El parámetro fromIndex es opcional. Si no se proporciona fromIndex, la búsqueda comienza desde el inicio del arreglo. Veamos un ejemplo:

let fruitsPaso29A = ["apple", "banana", "orange", "banana"];
let indexPaso29A = fruitsPaso29A.indexOf("banana");
console.log(indexPaso29A); // 1
// En este ejemplo, tenemos un arreglo fruits que contiene varios nombres de frutas. Usamos el método indexOf() para encontrar el índice de la cadena banana dentro del arreglo fruits. Dado que banana está presente en el índice 1, el método devuelve 1, que se almacena en la variable index y se registra en la consola.

// Si el elemento que buscas no se encuentra en el arreglo, indexOf() devuelve -1. Por ejemplo:

let fruitsPaso29B = ["apple", "banana", "orange"];
let indexPaso29B = fruitsPaso29B.indexOf("grape");
console.log(indexPaso29B); // -1
// Aquí, buscamos la cadena grape en el arreglo de frutas usando indexOf(). Dado que grape no está presente en el arreglo, el método devuelve -1, que se almacena en la variable index y se registra en la consola.

// Si deseas comenzar a buscar un elemento después de un número de índice específico, puedes pasar un segundo argumento como en este ejemplo:

let colorsPaso29 = ["red", "green", "blue", "yellow", "green"];
let indexPaso29C = colorsPaso29.indexOf("green", 3);
console.log(indexPaso29C); // 4
// En este ejemplo, la búsqueda no comienza desde el inicio de un arreglo, sino desde el número de índice 3, que es yellow y obtiene el resultado de 4.