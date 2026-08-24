// Revisión de arreglos de JavaScript
// Conceptos básicos de arreglos de JavaScript
// Definición: Un arreglo en JavaScript es una colección ordenada de valores, cada uno identificado por un índice numérico. Los valores en un array de JavaScript pueden ser de diferentes tipos de datos, incluidos números, cadenas, booleanos, objetos e incluso otros arrays. Los arreglos son continuos en memoria, lo que significa que todos los elementos se almacenan en un único bloque continuo de ubicaciones de memoria, lo que permite una indexación eficiente y un acceso rápido a los elementos por su índice.
const developersRev1 = ["Jessica", "Naomi", "Tom"];
// Accediendo a Elementos de Arreglos: Para acceder a elementos de un arreglo, necesitarás hacer referencia al arreglo seguido de su número de índice dentro de corchetes. Los arreglos de JavaScript están indexados desde cero, lo que significa que el primer elemento está en el índice 0, el segundo elemento está en el índice 1, etc. Si intentas acceder a un índice que no existe para el arreglo, JavaScript devolverá undefined.
const developersRev2 = ["Jessica", "Naomi", "Tom"];
console.log(developersRev2[0]) // "Jessica"
console.log(developersRev2[1]) // "Naomi"

console.log(developersRev2[10]) // undefined
// Propiedad length: Esta propiedad se utiliza para devolver el número de elementos en un arreglo.
const developersRev3 = ["Jessica", "Naomi", "Tom"];
console.log(developersRev3.length) // 3
// Actualizando Elementos en un Arreglo: Para actualizar un elemento en un arreglo, utilizas el operador de asignación (=) para asignar un nuevo valor al elemento en un índice específico.
const fruitsRevUpdate = ['apple', 'banana', 'cherry'];
fruitsRevUpdate[1] = 'blueberry';

console.log(fruitsRevUpdate); // ['apple', 'blueberry', 'cherry']
// Arreglos bidimensionales
// Definición: Un arreglo bidimensional es esencialmente un arreglo de arreglos. Se usa para representar datos que tienen una estructura natural en forma de cuadrícula, como un tablero de ajedrez, una hoja de cálculo o los píxeles de una imagen. Para acceder a un elemento en un arreglo bidimensional, necesitas dos índices: uno para la fila y otro para la columna.
const chessboardRev = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(chessboardRev[0][3]); // "Q"
// Desestructuración de Arreglos
// Definición: La desestructuración de arreglos es una característica en JavaScript que te permite extraer valores de arreglos y asignarlos a variables de una manera más concisa y legible. Proporciona una sintaxis conveniente para desempaquetar elementos de un arreglo en variables distintas.
const fruitsRevDestruct = ["apple", "banana", "orange"];

const [firstRevD, secondRevD, thirdRevD] = fruitsRevDestruct;

console.log(firstRevD); // "apple"
console.log(secondRevD); // "banana"
console.log(thirdRevD); // "orange"
// Sintaxis de propagación: Esto te permite capturar los elementos restantes de un arreglo que no han sido desestructurados en un nuevo arreglo.
const fruitsRevRest = ["apple", "banana", "orange", "mango", "kiwi"];
const [firstRevRest, secondRevRest, ...restRev] = fruitsRevRest;

console.log(firstRevRest); // "apple"
console.log(secondRevRest); // "banana"
console.log(restRev); // ["orange", "mango", "kiwi"]
// Métodos Comunes de Arreglos
// Método push(): Este método se utiliza para agregar elementos al final del arreglo y devolverá la nueva longitud.
const dessertsRevPush = ["cake", "cookies", "pie"];
dessertsRevPush.push("ice cream");

console.log(dessertsRevPush); // ["cake", "cookies", "pie", "ice cream"];
// Método pop(): Este método se utiliza para eliminar el último elemento de un arreglo y devolverá ese elemento eliminado. Si el arreglo está vacío, entonces el valor devuelto será undefined.
const dessertsRevPop = ["cake", "cookies", "pie"];
dessertsRevPop.pop();

console.log(dessertsRevPop); // ["cake", "cookies"];
// Método shift(): Este método se utiliza para eliminar el primer elemento de un arreglo y devolver ese elemento eliminado. Si el arreglo está vacío, entonces el valor devuelto será undefined.
const dessertsRevShift = ["cake", "cookies", "pie"];
dessertsRevShift.shift();

console.log(dessertsRevShift); // ["cookies", "pie"];
// Método unshift(): Este método se utiliza para agregar elementos al inicio del arreglo y devolverá la nueva longitud.
const dessertsRevUnshift = ["cake", "cookies", "pie"];
dessertsRevUnshift.unshift("ice cream");

console.log(dessertsRevUnshift); // ["ice cream", "cake", "cookies", "pie"];
// Método indexOf(): Este método es útil para encontrar el primer índice de un elemento específico dentro de un arreglo. Si no se puede encontrar el elemento, entonces devolverá -1.
const fruitsRevIndexOf = ["apple", "banana", "orange", "banana"];
const indexRev = fruitsRevIndexOf.indexOf("banana");

console.log(indexRev); // 1
console.log(fruitsRevIndexOf.indexOf("not found")); // -1
// Método splice(): Este método se utiliza para agregar o eliminar elementos desde cualquier posición en un arreglo. El valor de retorno para el método splice() será un arreglo de los elementos eliminados del arreglo. Si no se elimina nada, entonces se devolverá un arreglo vacío. Este método modificará el arreglo original, alterándolo en su lugar en vez de crear uno nuevo. El primer argumento especifica el índice en el que se comenzará a modificar el arreglo. El segundo argumento es el número de elementos que deseas eliminar. Los siguientes argumentos son los elementos que deseas agregar.
const colorsRevSplice = ["red", "green", "blue"];
colorsRevSplice.splice(1, 0, "yellow", "purple");

console.log(colorsRevSplice); // ["red", "yellow", "purple", "green", "blue"]
// Método includes(): Este método se utiliza para verificar si un arreglo contiene un valor específico. Este método devuelve true si el arreglo contiene el elemento especificado, y false de lo contrario.
const programmingLanguagesRev1 = ["JavaScript", "Python", "C++"];

console.log(programmingLanguagesRev1.includes("Python")); // true
console.log(programmingLanguagesRev1.includes("Perl")); // false
// Método concat(): Este método crea un nuevo arreglo fusionando dos o más arreglos.
const programmingLanguagesRev2 = ["JavaScript", "Python", "C++"];
const newListRevConcat = programmingLanguagesRev2.concat("Perl");

console.log(newListRevConcat); // ["JavaScript", "Python", "C++", "Perl"]
// Método slice(): Este método devuelve un nuevo array que contiene una copia superficial de una porción del array original, especificada por los índices de inicio y fin. El nuevo array contiene referencias a los mismos elementos que el array original (no duplicados). Esto significa que si los elementos son primitivos (como números o cadenas), los valores se copian; pero si los elementos son objetos o arrays, se copian las referencias, no los objetos en sí.
const programmingLanguagesRev3 = ["JavaScript", "Python", "C++"];
const newListRevSlice = programmingLanguagesRev3.slice(1);

console.log(newListRevSlice); // ["Python", "C++"]
// Sintaxis de Propagación: La sintaxis de propagación se utiliza para crear copias superficiales de un arreglo.
const originalArrayRev = [1, 2, 3];
const shallowCopiedArrayRev = [...originalArrayRev];

shallowCopiedArrayRev.push(4);

console.log(originalArrayRev); // [1, 2, 3]
console.log(shallowCopiedArrayRev); // [1, 2, 3, 4]
// Método split(): Este método divide una cadena en un arreglo de subcadenas y especifica dónde debe ocurrir cada división según un separador dado. Si no se proporciona un separador, el método devuelve un arreglo que contiene la cadena original como un único elemento.
const strRevSplit = "hello";
const charArrayRevSplit = strRevSplit.split("");

console.log(charArrayRevSplit); // ["h", "e", "l", "l", "o"]
// Método reverse(): Este método invierte un arreglo en su lugar.
const dessertsRevReverse = ["cake", "cookies", "pie"];
console.log(dessertsRevReverse.reverse()); // ["pie", "cookies", "cake"]
// Método join(): Este método concatena todos los elementos de un arreglo en una sola cadena, con cada elemento separado por un separador especificado. Si no se proporciona un separador, o se usa una cadena vacía (""), los elementos se unirán sin ningún separador.
const reversedArrayRevJoin = ["o", "l", "l", "e", "h"];
const reversedStringRevJoin = reversedArrayRevJoin.join("");

console.log(reversedStringRevJoin); // "olleh"
