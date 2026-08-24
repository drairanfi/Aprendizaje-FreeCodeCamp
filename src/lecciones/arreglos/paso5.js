// ¿Qué es la desestructuración de arreglos y cómo funciona?
// La desestructuración de arreglos es una característica en JavaScript que permite extraer valores de arreglos y asignarlos a variables de una manera más concisa y legible. Proporciona una sintaxis conveniente para desempaquetar elementos de un arreglo en variables distintas.

// Esta técnica es particularmente útil al trabajar con arreglos y funciones que devuelven múltiples valores. Aquí hay un ejemplo de uso de la desestructuración de arreglos:

let fruitsPaso5A = ["apple", "banana", "orange"];

let [firstPaso5A, secondPaso5A, thirdPaso5A] = fruitsPaso5A;

console.log(firstPaso5A);  // "apple"
console.log(secondPaso5A); // "banana"
console.log(thirdPaso5A);  // "orange"
// En este ejemplo, tenemos un arreglo llamado fruits con tres elementos. Usando la desestructuración de arreglos, asignamos el primer elemento a la variable first, el segundo elemento a second, y el tercer elemento a third. Esto nos permite acceder fácilmente a elementos individuales del arreglo sin usar notación de índice.

// Aquí es cómo se vería si accediéramos a cada uno de esos elementos por su índice en lugar de usar la desestructuración de arreglos:

const fruitsPaso5B = ["apple", "banana", "orange"];

const firstPaso5B = fruitsPaso5B[0];
const secondPaso5B = fruitsPaso5B[1];
const thirdPaso5B = fruitsPaso5B[2];

console.log(firstPaso5B); // "apple"
console.log(secondPaso5B); // "banana"
console.log(thirdPaso5B); // "orange"
// La desestructuración de arreglos también te permite omitir elementos en los que no estás interesado usando comas. Por ejemplo:

let colorsPaso5 = ["red", "green", "blue", "yellow"];
let [firstColorPaso5, , thirdColorPaso5] = colorsPaso5;

console.log(firstColorPaso5); // "red"
console.log(thirdColorPaso5); // "blue"
// En este ejemplo, omitimos el segundo elemento del arreglo colors usando una coma extra. Esto asigna red a firstColor y blue a thirdColor, efectivamente ignorando green.

// Otra poderosa característica de la desestructuración de arreglos es la capacidad de usar valores por defecto. Si el arreglo tiene menos elementos de los que intentas asignar a las variables, puedes proporcionar valores por defecto:

let numbersPaso5 = [1, 2];
let [aPaso5, bPaso5, cPaso5 = 3] = numbersPaso5;

console.log(aPaso5); // 1
console.log(bPaso5); // 2
console.log(cPaso5); // 3
// Aquí, asignamos el valor por defecto 3 a c porque el arreglo numbers no tiene un tercer elemento.

// Ahora vamos a discutir sobre la sintaxis de resto, denotada por tres puntos (...). Te permite capturar los elementos restantes de un arreglo que no han sido desestructurados en un nuevo arreglo. A continuación te mostramos como se hace:

let fruitsPaso5Rest = ["apple", "banana", "orange", "mango", "kiwi"];
let [firstPaso5Rest, secondPaso5Rest, ...restPaso5] = fruitsPaso5Rest;

console.log(firstPaso5Rest);  // "apple"
console.log(secondPaso5Rest); // "banana"
console.log(restPaso5);   // ["orange", "mango", "kiwi"]
// En este ejemplo, first y second capturan los primeros dos elementos del arreglo fruits, y rest captura todos los elementos restantes como un nuevo arreglo. La sintaxis de resto debe ser el último elemento en el patrón de desestructuración.

// La desestructuración de arreglos es una característica poderosa que puede hacer tu código más conciso y fácil de leer. Es especialmente útil al trabajar con arreglos, y cuando necesitas extraer elementos específicos de un arreglo.

