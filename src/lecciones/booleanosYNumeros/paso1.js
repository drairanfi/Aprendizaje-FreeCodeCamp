                    // Trabajando con Números y Operadores Aritméticos

//       ¿Cuál es el tipo de Número en JavaScript, y cuáles son los diferentes tipos de números disponibles?
// El tipo Number es uno de los tipos de datos más utilizados en JavaScript y otros lenguajes de programación. Los números pueden parecer simples, pero hay mucho por explorar cuando se trata de números en JavaScript. Así que, echemos un vistazo más profundo. En JavaScript, el tipo de datos Number representa un valor numérico.

// A diferencia de muchos otros lenguajes de programación que separan enteros y números de punto flotante en diferentes tipos, JavaScript emplea un único tipo Number para contabilizar los números. Esto significa que puedes trabajar con números enteros, decimales e incluso valores numéricos especiales, todo bajo el mismo paraguas del tipo de datos Number.

// Aquí hay un ejemplo básico que muestra que enteros, números de punto flotante y números negativos son todos del tipo number:

const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

// que es lo que hace ese typeof? eso lo que hace es que nos dice el tipo de dato que es, en este caso nos dice que es un number, ya que todos los valores son del tipo number, ya sea un entero, un decimal o un negativo.

// El tipo Number de JavaScript incluye varios tipos de valores numéricos, desde enteros simples y números de punto flotante hasta casos especiales como ∞ y NaN, o "No es un Número". Desglosemos los tipos principales que te encontrarás. Los enteros son números completos sin parte fraccionaria o decimal. Pueden ser positivos, negativos o cero. Aquí hay algunos ejemplos:    

const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number

// Los números de punto flotante son números con puntos decimales. A menudo se les refiere simplemente como "floats" por los desarrolladores de JavaScript. 

const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number

// JavaScript puede representar números que están más allá del límite máximo con ∞. Te encontrarás con esto al intentar dividir un número por cero o en raras ocasiones, exceder el límite superior del tipo Number. Aquí tienes un ejemplo:

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

// A veces en JavaScript, algunas operaciones matemáticas no resultan en un número válido. Por ejemplo, si intentas realizar una operación matemática en algo que no es un número, obtendrás NaN, que significa "No es un Número":

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
// Sorprendentemente, el tipo de NaN también es Number:

const notANumber = 'hello world' / 2;
console.log(typeof notANumber); // number
// Aparte del sistema decimal estándar (base 10), JavaScript también admite números en diferentes bases como binario, octal y hexadecimal. Binario es un sistema de base 2 que sólo utiliza dígitos 1 y 0. Octal es un sistema de base 8 que usa sólo dígitos del 0 al 7. Hexadecimal es un sistema de base 16 que usa dígitos del 0 al 9 y las letras a a f, como se ve en los colores hex de CSS.