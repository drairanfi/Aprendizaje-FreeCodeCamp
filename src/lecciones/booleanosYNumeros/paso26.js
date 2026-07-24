// Trabajar con lógica condicional y métodos matemáticos
// ¿Cuáles son las declaraciones condicionales y cómo funcionan las sentencias if/else if/else?
//
// Las declaraciones condicionales te permiten tomar decisiones en tu código JavaScript. Permiten que tu programa fluya de una manera particular basada en ciertas condiciones. Vamos a ver cómo funcionan las sentencias if, else if, else y el operador ternario para permitirte controlar el flujo de tu código.
//
// Una declaración if toma una condición y ejecuta un bloque de código si esa condición es verdadera. Los valores verdaderos son aquellos que resultan en true cuando se evalúan en un contexto booleano como una declaración if. Aquí hay ejemplos de valores verdaderos:
//
// cadenas de texto no vacías, por ejemplo, hello
//
// cualquier número diferente de 0 y -0, por ejemplo, 4, -5 y otros
//
// arrays
//
// objetos
//
// el booleano true
//
// Por otro lado, los valores falsos son aquellos que se evalúan como false en un contexto booleano. JavaScript tiene pocos valores falsos, lo que los hace fáciles de recordar. Aquí hay unos pocos valores falsos:
//
// booleano false
//
// 0 (cero)
//
// "" (cadena vacía)
//
// null
//
// undefined
//
// NaN (No es un Número)
//
// Ahora, que tenemos una comprensión básica de los valores verdaderos y falsos, veamos cómo funcionan con las declaraciones if. En este primer ejemplo, estamos usando un par de declaraciones if para verificar valores verdaderos y falsos:

if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}
// Dado que null es un valor falso, el mensaje dentro del bloque nunca se registrará en la consola. Pero para la segunda declaración if, la cadena freeCodeCamp es un valor verdadero y se considerará true en este contexto booleano de la declaración if. Como resultado, el mensaje This will run. se registrará en la consola.
//
// Echemos un vistazo a algunos ejemplos más sobre cómo funcionan las declaraciones if con diferentes operadores de comparación. Aquí hay un ejemplo de usar una declaración if para verificar si el usuario es elegible para votar:

const votingAge = 22;

if (votingAge >= 18) {
 console.log("You're eligible to vote"); // You're eligible to vote
}
// En este ejemplo, dado que votingAge es actualmente 22, esto significa que la condición se evaluará como true porque 22 es mayor o igual a 18. Así que el mensaje You're eligible to vote se registrará en la consola. Si cambiamos el ejemplo para que votingAge ahora sea 15, entonces la condición se evaluará como false y el mensaje no se registrará en la consola.

const underAge = 15;

if (underAge >= 18) {
 console.log("You're eligible to vote"); // Code not running because age is less than 18
}
// Cuando una condición es false, entonces puedes usar una cláusula else:

const votingAgeCheck = 15;

if (votingAgeCheck >= 18) {
 console.log("You're eligible to vote");
} else {
 console.log("You're not eligible to vote"); // You're not eligible to vote
}
// En este ejemplo, 15 no es mayor o igual a 18, por lo que la condición sería false. El código dentro del bloque else se ejecutará en este caso.
//
// Si deseas verificar múltiples condiciones, puedes usar un bloque else if. Esto le permite a tu programa elegir entre más de dos caminos.

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}
// Dado que score es actualmente 87, entonces se registrará el mensaje de You got a B en la consola.
//
// El operador ternario es una forma compacta de escribir sentencias simples de if/else. Tiene tres partes: una condición, un resultado si la condición es verdadera y un resultado si es falsa. Aquí está la sintaxis básica:
//
// condition ? expressionIfTrue : expressionIfFalse;
// Aquí hay un ejemplo que trata con temperaturas del clima en Celsius:

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
// Si temperature es mayor que 25, el código anterior registra It's a sunny day!. Si temperature es menor o igual a 25, registra It's a cool day!.
//
// Entonces, ¿cuál deberías usar entre una declaración if y un operador ternario? Usa un operador ternario al tratar con una sola condición o expresión, o cuando deseas una sintaxis compacta para lógica simple. Usa declaraciones if/else cuando estás tratando con condiciones complejas y múltiples sentencias, ya que las cosas se vuelven ilegibles si anidas ternarios.
