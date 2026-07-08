// ¿Cuáles son los operadores de comparación y cómo funcionan?
// Los operadores de comparación te permiten comparar dos valores y devolver un resultado true o false.
// Luego puedes usar el resultado para tomar una decisión o controlar el flujo de tu programa.
// You use comparisons in if statements, loops, and many other situations where you need to make
// decisions based on certain conditions.

// El operador mayor que (>), verifica si el valor a la izquierda es mayor que el de la derecha:

let mayorQueA = 6;
let mayorQueB = 9;

console.log(mayorQueA > mayorQueB); // false
console.log(mayorQueB > mayorQueA); // true

// El operador mayor o igual (>=), verifica si el valor a la izquierda es mayor o igual que el de la derecha:

let mayorIgualA = 6;
let mayorIgualB = 9;
let mayorIgualC = 6;

console.log(mayorIgualA >= mayorIgualB); // false
console.log(mayorIgualB >= mayorIgualA); // true
console.log(mayorIgualA >= mayorIgualC); // true

// El operador menor que (<), funciona de manera similar a >, pero al revés.
// Verifica si el valor a la izquierda es menor que el de la derecha:

let menorQueA = 6;
let menorQueB = 9;

console.log(menorQueA < menorQueB); // true
console.log(menorQueB < menorQueA); // false

// El operador menor o igual (<=), verifica si el valor a la izquierda es menor o igual que el de la derecha:

let menorIgualA = 6;
let menorIgualB = 9;
let menorIgualC = 6;

console.log(menorIgualA <= menorIgualB); // true
console.log(menorIgualB <= menorIgualA); // false
console.log(menorIgualA <= menorIgualC); // true