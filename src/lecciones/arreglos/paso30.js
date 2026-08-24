// ¿Cómo se agregan y eliminan elementos del medio de un arreglo?
// El método splice() en JavaScript es una forma poderosa de modificar arreglos. Permite agregar o eliminar elementos de cualquier posición en un arreglo, incluido el medio. El valor de retorno para el método splice() será un arreglo de los elementos eliminados del arreglo. Si no se eliminó nada, entonces se devolverá un arreglo vacío.

// Es importante notar que este método mutará el arreglo original, modificándolo en el lugar en lugar de crear un nuevo arreglo. Esto es algo que tener en cuenta al trabajar con splice(). Esta es la sintáxis básica:

// array.splice(startIndex, itemsToRemove, item1, item2)
// startIndex especifica el índice en el que comenzar a modificar el arreglo, mientras que itemsToRemove es un parámetro opcional que indica cuántos elementos eliminar. Si itemsToRemove se omite, splice() eliminará todos los elementos del startIndex hasta el final del arreglo. Los parámetros subsecuentes (item1, item2, etc.) son los elementos a añadir al arreglo, comenzando en el índice de inicio.

// Comencemos con un ejemplo de eliminación de elementos del medio de un arreglo:

let fruitsPaso30A = ["apple", "banana", "orange", "mango", "kiwi"];
let removedPaso30A = fruitsPaso30A.splice(2, 2);

console.log(fruitsPaso30A);  // ["apple", "banana", "kiwi"]
console.log(removedPaso30A); // ["orange", "mango"]
// En este ejemplo, splice(2, 2) comienza en el índice 2 y elimina 2 elementos. El arreglo modificado ahora consistirá de solo apple, banana y kiwi. Ahora veamos cómo agregar elementos al medio de un arreglo:

let colorsPaso30 = ["red", "green", "blue"];
colorsPaso30.splice(1, 0, "yellow", "purple");

console.log(colorsPaso30); // ["red", "yellow", "purple", "green", "blue"]
// Aquí, splice(1, 0, "yellow", "purple") comienza en el índice 1, elimina 0 elementos e inserta yellow y purple. El segundo parámetro (0) indica que no se eliminan elementos antes de la inserción. También puedes usar splice() para eliminar y agregar elementos simultáneamente:

let numbersPaso30 = [1, 2, 3, 4, 5];
numbersPaso30.splice(1, 2, 6, 7, 8);

console.log(numbersPaso30); // [1, 6, 7, 8, 4, 5]
// En este caso, splice(1, 2, 6, 7, 8) comienza en el índice 1, elimina 2 elementos (2 y 3) e inserta 6, 7 y 8. Si necesitas mantener el arreglo original sin cambios, debes crear una copia antes de usar splice():

let originalPaso30 = [1, 2, 3, 4, 5];
let copyPaso30 = [...originalPaso30];
copyPaso30.splice(2, 1, 6);

console.log(originalPaso30); // [1, 2, 3, 4, 5]
console.log(copyPaso30);     // [1, 2, 6, 4, 5]
// En este ejemplo, para crear una copia del arreglo original sin modificarlo, usamos el operador spread (...). El operador spread creará una copia superficial de los elementos del arreglo original en un nuevo arreglo. Aprenderás más sobre esto en lecciones futuras.

// Cuando usamos copy.splice(2, 1, 6), modifica el arreglo copia eliminando el elemento en el índice 2 (que es 3) e insertando el nuevo elemento 6 en esa posición.

// Un caso de uso común para splice() es eliminar un solo elemento de un arreglo cuando conoces su índice:

let fruitsPaso30B = ["apple", "banana", "orange", "mango"];
let indexToRemovePaso30 = fruitsPaso30B.indexOf("orange");
if (indexToRemovePaso30 !== -1) {
    fruitsPaso30B.splice(indexToRemovePaso30, 1);
}

console.log(fruitsPaso30B); // ["apple", "banana", "mango"]
// En este ejemplo, primero usamos el método indexOf() para encontrar el índice del elemento orange en el arreglo fruits. El método indexOf() devuelve el índice de la primera aparición del elemento dado o -1 si el elemento no se encuentra en el arreglo.

// Luego comparamos indexToRemove con -1 para asegurarnos de que el elemento existe en el arreglo antes de intentar eliminarlo. Si indexToRemove no es igual a -1 (lo que significa que se encontró el elemento), usamos splice() para eliminar un elemento comenzando desde la posición indexToRemove.

// También puedes usar splice() para vaciar un arreglo eliminando todos los elementos:

let arrayPaso30 = [1, 2, 3, 4, 5];
arrayPaso30.splice(0);

console.log(arrayPaso30); // []
// Aunque splice() es poderoso, vale la pena señalar que para arreglos muy grandes, puede ser menos eficiente que otros métodos, especialmente al modificar el inicio del arreglo. Esto se debe a que splice() podría necesitar desplazar todos los elementos posteriores. En tales casos, si solo estás añadiendo o eliminando elementos al final del arreglo, métodos como push(), pop(), unshift() y shift() podrían ser más apropiados.

// En conclusión, el método splice() es una forma versátil de modificar arreglos en JavaScript. Permite un control preciso sobre la adición y eliminación de elementos de cualquier posición en un arreglo. Comprender cómo usar splice() eficazmente puede mejorar en gran medida tu capacidad para manipular arreglos en tu código JavaScript.