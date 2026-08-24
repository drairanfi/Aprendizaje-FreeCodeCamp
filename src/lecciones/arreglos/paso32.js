// ¿Qué es una copia superficial de un array, y cuáles son algunas formas de crear estas copias?
// Una copia superficial de un arreglo es un nuevo arreglo que tiene los mismos elementos que el original. Si el arreglo solo contiene valores primitivos como números o cadenas, el nuevo arreglo es completamente independiente. Pero si el arreglo contiene otros arreglos dentro, tanto el original como la copia tienen referencias a los mismos arreglos internos. Esto significa que si cambias algo dentro de un arreglo interno compartido, verás ese cambio en ambos arreglos.

// Las copias superficiales son útiles cuando necesitas modificar la estructura de nivel superior, como agregar, eliminar o reordenar elementos, sin modificar el arreglo original ni el arreglo interno.

// Hay varios métodos para crear copias superficiales de arrays, y exploraremos algunos de los más comunes: concat(), slice() y el operador de propagación.

// Comencemos con el método concat(). Este método crea un nuevo array al fusionar dos o más arrays. Cuando se utiliza con un solo array, efectivamente crea una copia superficial. Aquí tienes un ejemplo:

const originalArrayPaso32A = [1, 2, 3];
const copyArrayPaso32A = [].concat(originalArrayPaso32A);

console.log(copyArrayPaso32A); // [1, 2, 3]
console.log(copyArrayPaso32A === originalArrayPaso32A); // false
// En este ejemplo, estamos utilizando el método concat() para concatenar un array vacío al originalArray. Esto creará un nuevo array que es una copia superficial de originalArray.

// El copyArray contiene los mismos elementos que originalArray, pero es un objeto array diferente, por lo que la verificación de igualdad estricta (===) devuelve false.

// Otro método para crear una copia superficial es el método slice(). Cuando se llama sin argumentos, slice() devuelve una copia superficial de todo el array. A continuación te mostramos como se hace:

const originalArrayPaso32B = [1, 2, 3];
const copyArrayPaso32B = originalArrayPaso32B.slice();

console.log(copyArrayPaso32B); // [1, 2, 3]
console.log(copyArrayPaso32B === originalArrayPaso32B); // false
// En este caso, originalArray.slice() crea un nuevo array que es una copia superficial de originalArray. Nuevamente, el copyArray contiene los mismos elementos pero es un objeto array diferente.

// El operador de propagación (...), introducido en ES6, proporciona una forma concisa de crear copias superficiales de arrays. Aquí tienes un ejemplo:

const originalArrayPaso32C = [1, 2, 3];
const copyArrayPaso32C = [...originalArrayPaso32C];

console.log(copyArrayPaso32C); // [1, 2, 3]
console.log(copyArrayPaso32C === originalArrayPaso32C); // false
// El operador de propagación (...) expande los elementos de originalArray en un nuevo array, creando efectivamente una copia superficial. Es importante observar que todos estos métodos crean nuevos objetos array, lo que significa que puedes modificar la copia sin afectar al array original. Por ejemplo:

const originalArrayPaso32D = [1, 2, 3];
const copyArrayPaso32D = [...originalArrayPaso32D];

copyArrayPaso32D.push(4);
console.log(originalArrayPaso32D); // [1, 2, 3]
console.log(copyArrayPaso32D);     // [1, 2, 3, 4]
// En este ejemplo, añadir un elemento a copyArray no afecta a originalArray.

// En resumen, las copias superficiales de arrays pueden crearse fácilmente usando métodos como concat(), slice() o el operador de propagación. Estos métodos son útiles para crear nuevos arrays que pueden manipularse de manera independiente del array original.