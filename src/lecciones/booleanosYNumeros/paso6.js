                    // ¿Cómo funcionan los operadores de incremento y decremento?


// aca hablaremos de los opedarodores para aumentar y disminuir el valor de una variable. En JavaScript, existen dos operadores principales para esto: el operador de incremento (++) y el operador de decremento (--).

// El operador de incremento (++) se utiliza para aumentar el valor de una variable en 1. Por ejemplo, si tenemos una variable llamada "contador" con un valor inicial de 5, al aplicar el operador de incremento, el valor de "contador" se incrementará a 6.
// Los operadores de incremento y decremento están representados por ++ y --, respectivamente. Ambos te permiten ajustar el valor de una variable en 1.
// En lugar de escribir algo como x = x + 1 o x = x - 1, puedes simplemente usar x++ para sumar 1, o x-- para restar 1. Es más rápido, limpio y fácil de leer.

// Hay un giro en la forma en que funcionan los operadores de incremento y decremento: vienen en dos formas, prefijo y postfijo, con la diferencia siendo cuándo se actualiza el valor. Para el operador de incremento, el prefijo es ++x y el postfijo es x++.

// El prefijo (++x) incrementa el valor de la variable primero, luego devuelve un nuevo valor. El postfijo (x++) devuelve primero el valor actual de la variable, luego lo incrementa:

let x = 5;

console.log(++x); // 6
console.log(x); // 6
// En el código anterior, ++x significa "incrementa x primero, luego úsalo". Así que cuando registras ++x, obtienes inmediatamente el valor incrementado, que es 6.

// Ahora, echemos un vistazo a un ejemplo usando el postfijo:

let y = 5;

console.log(y++); // 5
console.log(y); // 6
// En este ejemplo, y++ significa "usa y primero, luego increméntalo". Cuando registras y++, obtienes 5, pero y se convierte en 6 después de esa línea de código.

// El operador de decremento hace lo mismo que incrementar, excepto que disminuye el valor en 1. De nuevo, hay dos formas: prefijo (--x) disminuye primero el valor de la variable, luego devuelve el nuevo valor. Y el postfijo (x--) devuelve primero el valor actual, luego lo reduce:

let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4
    // Entonces, ¿cuál deberías usar: prefijo o postfijo? En muchos casos, no importa cuál uses. Ambos hacen el trabajo. Sin embargo, si estás usando el valor inmediatamente en una expresión, la diferencia se vuelve importante. Veamos este ejemplo:

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)
// Entonces, si necesitas el valor actualizado de inmediato, usa prefijo. Si quieres el valor actual primero y no te importa el incremento hasta más tarde, utiliza postfijo.