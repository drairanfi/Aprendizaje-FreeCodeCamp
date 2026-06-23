                            // ¿Cómo puedes repetir una cadena x número de veces?


// en esta leccion se habla del metodo repeat() el cual permite repetir una cadena un número especificado de veces. Esta es la sintáxis básica:

// string.repeat(count);

// un ejemplo de como se puede utilizar este metodo es asi:

const text = "Hola, probaremos el metodo repeat()";
console.log(text.repeat(5));

// el parametro que esta como valor o numero que indica la cantidad de veces que se repetira no puede ser negativo ya que va a generar un RangeError. De igual forma al poner un valor infinito como lo es Infinity

const textNegative = "Hola, texto negativo";
console.log(textNegative.repeat(-1));

const textInfinity = "Hola, texto infinito";
console.log(textInfinity.repeat(Infinity));

// ahora en este caso veremos si el parametro es un numero decimal, por le general el metodo reduce() va a tomar el valor y lo redondeara de forma descendente
const textDecimal = "Hola, texto decimal";
console.log(textDecimal.repeat(4.5)); // HolaHolaHolaHola, devolvera eso, solo 4 veces ya que es el valor redondeado

// y ahora algo curioso es que si el valor es 0 devolvera una cadena vacia

const textVoid = "Hola, texto vacio";
console.log(textVoid.repeat(0));

// También puedes pasar una variable que almacene un valor numérico.

let count = 4;
let word = "Test";
let repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest