// Entender comparaciones y condicionales
//
//
// ¿Cómo funcionan las comparaciones con los tipos de datos nulos y no definidos?
// En JavaScript, null y undefined son dos tipos de datos distintos que representan la ausencia de un valor, pero se comportan de manera diferente en las comparaciones. Entender cómo interactúan estos tipos en varios escenarios de comparación es crucial para escribir código robusto y sin errores.
//
// Comencemos con el tipo undefined. Una variable es undefined cuando ha sido declarada pero no ha sido asignada un valor. Es el valor por defecto de variables no inicializadas y parámetros de función a los que no se les proporcionó un argumento.
//
// El tipo null, por otro lado, es un valor de asignación que representa una no-valía deliberada. A menudo se usa para indicar que una variable intencionalmente no tiene valor.
//
// Al comparar null y undefined usando el operador de igualdad (==), JavaScript realiza una coerción de tipos. Esto significa que intenta convertir los operandos al mismo tipo antes de realizar la comparación. En este caso, null y undefined se consideran iguales:

console.log(null == undefined); // true
// Sin embargo, al usar el operador de igualdad estricta (===), que verifica tanto el valor como el tipo sin realizar coerción de tipos, null y undefined no son iguales:

console.log(null === undefined); // false
// Esta diferencia es importante tenerla en cuenta al escribir declaraciones condicionales o realizar verificaciones de igualdad en el código. Al comparar null o undefined con otros valores usando el operador de igualdad (==), el comportamiento puede ser inesperado. Por ejemplo:

console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
// Estas comparaciones devuelven false porque null y undefined solo son iguales entre sí (y consigo mismos) al usar el operador de igualdad. El comportamiento de null en otras comparaciones es particularmente complicado:

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
// undefined, por otro lado, siempre se convierte en NaN en contextos numéricos, lo que hace que todas las comparaciones numéricas con undefined devuelvan false:

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
// Dadas estas diferencias, generalmente se recomienda usar el operador de igualdad estricta al comparar valores, especialmente al tratar con null y undefined. Este enfoque ayuda a evitar coerciones de tipo inesperadas y hace que el comportamiento de su código sea más predecible.
//
// En resumen, aunque null y undefined se utilizan para representar la ausencia de un valor, se comportan de manera diferente en las comparaciones. Entender estas diferencias es clave para escribir código JavaScript claro y sin errores.