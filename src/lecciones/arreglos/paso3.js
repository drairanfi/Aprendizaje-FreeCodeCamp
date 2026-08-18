// ¿Cómo añades y eliminas elementos desde el principio y el final de un array?
// Los arrays en JavaScript son dinámicos, lo que significa que puedes añadir o eliminar elementos fácilmente de ellos. Hay cuatro métodos principales para añadir y eliminar elementos desde el principio y el final de un array: push(), pop(), shift() y unshift(). Exploremos cada uno de estos métodos en detalle.

// El método push() se utiliza para añadir uno o más elementos al final de un array. El valor de retorno para el método push() es la nueva longitud del array. Aquí hay un ejemplo de cómo añadir una nueva fruta al array fruits existente:

// const fruits = ["apple", "banana"];
// const newLength = fruits.push("orange");
// console.log(newLength); // 3
// console.log(fruits); // ["apple", "banana", "orange"]
// En este ejemplo, comenzamos con un array llamado fruits que contiene dos elementos. Luego utilizamos el método push() para añadir la cadena orange al final del array.

// Quizás hayas notado que estamos utilizando const al declarar el array fruits. Pero, ¿por qué es posible añadir más elementos a este array fruits cuando fruits es una constante? Esto es posible porque declarar un array con la palabra clave const crea una referencia al array. Mientras que el array en sí es mutable y puede ser modificado, no puedes reasignar un nuevo valor a la constante fruits, así:

// const fruits = ["apple", "banana"];
// fruits = ["This", "will", "not", "work"];
// console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 
// El siguiente método que veremos es el método pop(). El método pop() elimina el último elemento de un array y devuelve ese elemento. También modifica el array original. A continuación te mostramos como se hace:

// let fruits = ["apple", "banana", "orange"];
// let lastFruit = fruits.pop();
// console.log(fruits); // ["apple", "banana"]
// console.log(lastFruit); // "orange"
// En este ejemplo, comenzamos con un array de tres frutas. El método pop() elimina el último elemento (orange) del array y lo devuelve. El array fruits original es modificado y contiene solamente dos elementos.

// El método unshift() añade uno o más elementos al principio de un array y devuelve su nueva longitud. Funciona de manera similar a push(), pero modifica el inicio del array en lugar del final. Aquí tienes un ejemplo:

// let numbers = [2, 3];
// let newLength = numbers.unshift(1);
// console.log(numbers); // [1, 2, 3]
// console.log(newLength); // 3
// En este ejemplo, utilizamos unshift() para añadir el número 1 al principio del array numbers. El método devuelve la nueva longitud del array, que es 3.

// Finalmente, el método shift() elimina el primer elemento de un array y devuelve ese elemento. Es similar a pop(), pero funciona al inicio del array en lugar del final. A continuación te mostramos como se hace:

// let colors = ["red", "green", "blue"];
// let firstColor = colors.shift();
// console.log(colors); // ["green", "blue"]
// console.log(firstColor); // "red"
// En este ejemplo, comenzamos con un array de tres colores. El método shift() elimina el primer elemento (red) del array y lo devuelve. El array colors original se modifica para contener solamente dos elementos.

// Observa que mientras push() y unshift() pueden añadir múltiples elementos a la vez, pop() y shift() eliminan solo un elemento a la vez.