                            // Trabajando con Números y Operadores Aritméticos
// Bueno aca basicamente haremos mencion a como algunas cosas extrañas que hay en js, por ejemplos la suma de un numero y una cadena:

const sumNumString = "10" + 4;
console.log(sumNumString);

// aca que sucede? en este caso la consola nos va a retornar un string con un contendido que dira o dara como resultado el 104
console.log(typeof sumNumString); // string

// Esto se conoce como coerción de tipos. La coerción de tipos es cuando un valor de un tipo de datos se convierte en otro.
const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

// En los ejemplos anteriores, JavaScript convierte con éxito la cadena '10' o '20' a un número y luego realiza el cálculo. Como resultado, '10' - 5 da 5, '10' * 2 da 20, y '20' / 2 resulta en 10.

// ¿Pero qué sucede si la cadena no se parece a un número? Veamos qué sucede en ese caso:

const subtractionResultType = 'abc' - 5;
console.log(subtractionResultType); // NaN
console.log(typeof subtractionResultType); // number

const multiplicationResultType = 'abc' * 2;
console.log(multiplicationResultType); // NaN
console.log(typeof multiplicationResultType); // number

const divisionResultType = 'abc' / 2;
console.log(divisionResultType); // NaN
console.log(typeof divisionResultType); // number

// Cuando dicha conversión falla, JavaScript devuelve NaN, que significa "Not a Number". NaN es un valor especial del tipo Number que representa un número inválido o no representable.

// ¿Qué pasa si realizas operaciones aritméticas con un booleano (true o false)? Veamos qué sucede. JavaScript trata los booleanos como números en operaciones matemáticas: true se convierte en 1, y false se convierte en 0.

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"

// En los dos primeros ejemplos, true + 1 dio como resultado 2, y false + 1 dio 1. En el tercer ejemplo, 'Hello' + true, JavaScript convirtió true a una cadena y lo concatena con 'Hello', resultando en 'Hellotrue', que es una cadena.

// Para null y undefined, JavaScript trata null como 0 y undefined como NaN en operaciones matemáticas:

const result11 = null + 5;
console.log(result11); // 5
console.log(typeof result11); // number

const result22 = undefined + 5;
console.log(result22); // NaN
console.log(typeof result22); // number