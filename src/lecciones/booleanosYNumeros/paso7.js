// ¿Qué son los operadores de asignación compuesta en JavaScript y cómo funcionan?
// En JavaScript, todos los operadores aritméticos tienen una forma de asignación compuesta. 
// Compound assignment operators provide a concise shorthand for an operation on a variable 
// followed by storing the result in that same variable. They combine the operation and assignment 
// into a shorter form like x += y, which is equivalent to writing x = x + y but without repeating 
// the variable name.

// En vez de escribir algo así:

let valorOriginal = 5;
valorOriginal = valorOriginal + 2;

console.log(valorOriginal); // 7

// Puedes escribir algo como esto:

let valorCompacto = 5;
valorCompacto += 2;

console.log(valorCompacto); // 7

// Observa cómo valorCompacto += 2 combina tanto los pasos de suma como de asignación en uno solo.
// Esto ahorra tiempo y reduce el desorden en tu código.
// Vamos a profundizar en los operadores de asignación compuesta más comunes en JavaScript.

// El operador += te permite agregar un valor a una variable existente.
// Toma el valor actual de la variable, agrega el número especificado, y luego asigna el resultado:

let totalAcumulado = 10;
totalAcumulado += 5;

console.log(totalAcumulado); // 15

// El operador de asignación de resta -= hace lo mismo, pero restando:

let puntuacion = 20;
puntuacion -= 7;

console.log(puntuacion); // 13

// Sin la asignación compuesta, tendrías que escribir:

let puntuacionBase = 20;
puntuacionBase = puntuacionBase - 7;

console.log(puntuacionBase); // 13

// El operador de asignación de multiplicación *= multiplica el valor actual y lo reasigna:

let puntosAcumulados = 5;
puntosAcumulados *= 3;

console.log(puntosAcumulados); // 15

// El operador de asignación de división /= divide el valor actual y lo reasigna:

let saldoDisponible = 100;
saldoDisponible /= 4;

console.log(saldoDisponible); // 25

// Recuerda que existe un operador de asignación compuesta para cada operador en JavaScript.
// Además de los cuatro mencionados, también tenemos:
// - Operador de asignación de residuo (%=)
// - Operador de asignación de exponente (**=)
// - Operador de asignación AND a nivel de bits (&=)
// - Operador de asignación OR a nivel de bits (|=)