// ¿Qué es el objeto Math en JavaScript y cuáles son algunos métodos comunes?
//
// Al adentrarse en JavaScript, descubrirá rápidamente que realizar operaciones matemáticas es una tarea común. Si bien los operadores aritméticos básicos pueden manejar cálculos simples, JavaScript ofrece un objeto Math incorporado para abordar retos matemáticos más complejos.
//
// Esta herramienta útil proporciona una variedad de métodos que facilitan realizar cálculos avanzados y manipular números. Exploremos estos métodos y veamos cómo pueden simplificar tu experiencia de codificación.
//
// El método Math.random() genera un número flotante aleatorio entre 0 (incluido) y 1 (excluido). Esto significa que el resultado posible puede ser 0, pero nunca llegará a 1. Aquí hay un ejemplo trabajando con el método Math.random():

const randomFloat = Math.random();

console.log(randomFloat);
// any number between 0 and 1 – 0 inclusive and 1 exclusive
// Math.min() y Math.max() toman un conjunto de números y devuelven el valor mínimo y máximo, respectivamente. Aquí hay un ejemplo de cómo funcionan ambos métodos:

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
// La primera console.log() registrará el número 1, ya que 1 es el menor en esa lista de números. Y el segundo console.log() registrará el número 9, ya que 9 es el mayor número en esa lista.
//
// Si quieres redondear números hacia arriba o hacia abajo al entero más cercano, puedes usar los métodos Math.ceil() y Math.floor(). Aquí tienes un ejemplo de cómo trabajar con Math.ceil():

console.log(Math.ceil(4.3)); // 5
// Math.ceil() redondeará 4.3 hacia arriba al entero más cercano, que es 5 en este caso. Ahora, echemos un vistazo a redondear un número hacia abajo:

console.log(Math.floor(4.7)); // 4
// Math.floor() redondeará 4.7 hacia abajo al entero más cercano, que en este caso es 4. Math.round() es la estructura híbrida de Math.ceil() y Math.floor(). Redondea un número a su entero más cercano, tomando en cuenta el punto decimal:

console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
// Entonces, si el punto decimal es menor que 5, el número se redondea hacia abajo. Y si el punto decimal es 5 o mayor, el número se redondea hacia arriba. Un uso práctico de Math.floor() y Math.random() es generar un número aleatorio entre dos números enteros. Aquí está la sintaxis para eso:

const max = 10;
const min = 5;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange);
// Generar un número aleatorio entre 20 y 1 se vería así:

const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
// Otro método útil de Math sería el método Math.trunc(). Math.trunc() elimina la parte decimal de un número, devolviendo solo la porción entera, sin redondear:

console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
// Si necesitas obtener la raíz cuadrada o cúbica de un número, puedes usar los métodos Math.sqrt() y Math.cbrt(), respectivamente.

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
// La primera declaración de registro mostrará 9 porque la raíz cuadrada de 81 es 9, mientras que la segunda declaración de registro mostrará 3 porque la raíz cúbica de 27 es 3. Si necesitas obtener el valor absoluto de un número, puedes usar el método Math.abs():

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
// Math.abs() devuelve el valor absoluto de un número, convirtiendo negativos en positivos. El último método que veremos será el método Math.pow():

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
// Math.pow() toma dos números y eleva el primero a la potencia del segundo. Hay muchos más métodos que pertenecen al objeto Math que puedes explorar por tu cuenta. Sin embargo, estos son solo algunos de los más comúnmente utilizados en los repositorios de código de JavaScript.
