// Trabajar con operadores unarios y bit a bit

// ¿Qué son los operadores unarios y cómo funcionan?

// Los operadores unarios actúan sobre un solo operando para realizar operaciones
// como conversión de tipo, manipulación de valores o verificación de ciertas
// condiciones. Veamos algunos operadores unarios comunes y cómo funcionan.

// El operador unario de suma convierte su operando en un número. Si el operando
// ya es un número, permanece sin cambios.

const strValue = '42';
const strToNum = +strValue;

console.log(strToNum); // 42
console.log(typeof strValue); // string
console.log(typeof strToNum); // number

// El operador unario de suma es útil cuando deseas asegurarte de trabajar con
// un valor numérico. Como podrías adivinar, existe un operador de negación
// unario. Niega el valor del operando. Funciona de manera similar al unario de
// suma, excepto que invierte el signo.

const anotherStr = '42';
const strToNegativeNum = -anotherStr;

console.log(strToNegativeNum); // -42
console.log(typeof anotherStr); // string
console.log(typeof strToNegativeNum); // number

// El operador lógico NOT, representado por un signo de exclamación (!), es otro
// operador unario. Invierte el valor booleano de su operando. Por lo tanto, si
// el operando es true, se convierte en false, y si es false, se convierte en true.

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true

// El operador bitwise NOT es un operador unario menos común. Representado por
// una tilde, ~, invierte la representación binaria de un número. Las computadoras
// almacenan números en formato binario (1s y 0s). El operador ~ invierte cada
// bit, es decir, cambia todos los 1s a 0s y todos los 0s a 1s. Aprenderás más
// sobre binario y bits en una lección futura.

const bitwiseNum = 5; // El binario de 5 es 00000101

console.log(~bitwiseNum); // -6

// En este ejemplo, 5 se convirtió en -6 porque al aplicar el operador ~ a 5,
// obtienes -(5 + 1), que equivale a -6 debido a la representación en complemento
// a dos. El complemento a dos es una forma en que las computadoras representan
// números negativos en binario. Probablemente no uses el bitwise NOT a menudo a
// menos que trabajes en tareas de programación de bajo nivel como manipulación
// directa de bits.

// La palabra clave void es un operador unario que evalúa una expresión y
// devuelve undefined.

const voidResult = void (2 + 2);

console.log(voidResult); // undefined

// void también se utiliza comúnmente en hipervínculos para evitar la navegación.

// <a href="javascript:void(0);">Click Me</a>

// Finalmente, está el operador typeof que aprendiste en lecciones anteriores.
// Este devuelve el tipo de su operando como una cadena.

const typeofValue = 'Hello world';

console.log(typeof typeofValue); // string