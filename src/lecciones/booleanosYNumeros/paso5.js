                        // Trabajando con el Comportamiento del Operador

// cuando se habla de precedencia de operadores en js se refiere a el orden que se va a tener a la hora de hacer operaciones aritmeticas con muchos operadores 
// Los operadores con mayor precedencia se evalúan antes que los de menor precedencia. Piensa en la precedencia de operadores como en las matemáticas, donde la división y multiplicación suceden antes que la suma y resta.

const result0 = 2 + 3 * 4;
console.log(result0); // 14

// como se dan cuenta aca la precedencia la tiene la multiplicacion, por lo que primero se hace 3 * 4 y luego se le suma 2.

// A veces, puedes querer que ciertas partes de tu expresión se ejecuten primero, independientemente de las reglas de precedencia. Puedes usar paréntesis, (), para hacerlo. Cualquier cosa dentro de los paréntesis se evalúa primero, sin importar qué. Hagamos que la parte 2 + 3 del ejemplo anterior se evalúe primero:

const result1 = (2 + 3) * 4;
console.log(result1); // 20

// El operador de división tiene más precedencia que la suma o resta también:

const result2 = 2 + 6 / 3;
console.log(result); // 4

// Si JavaScript evaluara esta expresión de izquierda a derecha, podrías esperar 2 + 6 = 8, luego 8 / 3 = 2.67. Pero como la división tiene una precedencia mayor que la suma, JavaScript evalúa primero la división: 6 / 3 = 2, y luego suma 2 + 2, dando el resultado 4.

// Entonces, en multiplicación y división, esas operaciones siempre se llevan a cabo antes que la suma y la resta, a menos que se usen paréntesis para cambiar el orden. ¿Qué pasa si los operadores tienen la misma precedencia? JavaScript utiliza asociatividad para determinar el orden de evaluación.

// La asociatividad es lo que le dice a JavaScript si debe evaluar operadores de izquierda a derecha o de derecha a izquierda. Para la mayoría de los operadores como suma y multiplicación, la asociatividad es de izquierda a derecha. Entonces, JavaScript procesa estos de izquierda a derecha de la expresión:

const result3 = 10 - 2 + 3;

console.log(result3); // 11

// Primero, 10 - 2 = 8, luego 8 + 3 = 11. JavaScript avanza de izquierda a derecha en este caso. Algunos operadores, como el de asignación (=), son asociativos de derecha a izquierda. Esto significa que el lado derecho de la expresión se evalúa primero:

let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10
// En el ejemplo anterior, JavaScript asigna 5 a b primero, luego asigna b (que ahora es 5) a a.

// El operador de exponente también es asociativo de derecha a izquierda:

const result4 = 2 ** 3 ** 2;

console.log(result4); // 512
// Primero, JavaScript evalúa 3 ** 2, que es igual a 9, luego, evalúa 2 ** 9, que es igual a 512. Si el operador de exponente tuviera asociatividad de izquierda a derecha, JavaScript habría calculado 2 ** 3 primero para obtener 8, luego 8 ** 2 para obtener 64. 

