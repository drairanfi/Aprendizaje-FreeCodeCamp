// ¿Cuál es la diferencia entre tipos de datos primitivos y no primitivos?
// En JavaScript, entender la diferencia entre tipos de datos primitivos y no primitivos es importante para escribir código eficiente y libre de errores.
//
// Estas dos categorías de tipos de datos se comportan de manera diferente en términos de cómo se almacenan en memoria y cómo se manejan en tus programas.
//
// Los tipos de datos primitivos son la forma más simple de datos en JavaScript. Incluyen number, bigint, string, boolean, null, undefined y symbol. Estos tipos se llaman "primitivos" porque representan valores únicos y no son objetos.
//
// Cuando trabajas con tipos de datos primitivos, estás tratando directamente con sus valores. Por ejemplo, cuando creas una variable con un valor primitivo, ese valor se almacena directamente en la variable.
//
// Los valores primitivos son inmutables, lo que significa que una vez creados, su valor no puede cambiarse. Sin embargo, puedes reasignar un nuevo valor a la variable. Aquí tienes un ejemplo de trabajo con tipos de datos primitivos:

let num1Paso5 = 5;
let num2Paso5 = num1Paso5;
num1Paso5 = 10;

console.log(num2Paso5); // 5
// En este ejemplo, estamos asignando un valor primitivo (5) de num1 a num2. Esto crea una copia independiente del valor. Como resultado, cualquier cambio realizado en la variable original (num1) no afecta la copia (num2).

// Los tipos de datos no primitivos, por otro lado, son más complejos. En JavaScript, estos son objetos, que incluyen objetos regulares, arreglos y funciones. A diferencia de los primitivos, los tipos no primitivos pueden contener múltiples valores como propiedades o elementos.
//
// Cuando creas una variable con un valor no primitivo, lo que se almacena en la variable es en realidad una referencia a la ubicación en memoria donde se almacena el objeto, no el objeto en sí. Esto lleva a algunas diferencias importantes en el comportamiento. Aquí tienes un ejemplo con tipos no primitivos:

const originalPersonPaso5 = { name: "John", age: 30 };
const copiedPersonPaso5 = originalPersonPaso5;

originalPersonPaso5.age = 31;

console.log(copiedPersonPaso5.age); // 31
// En este ejemplo tenemos un objeto llamado originalPerson con dos propiedades de name y age. Luego asignamos el objeto originalPerson a una variable llamada copiedPerson.
//
// Luego actualizamos el valor de age para el objeto originalPerson. Cuando registramos la propiedad age del objeto copiedPerson muestra el valor actualizado.
//
// Pero, ¿por qué está sucediendo eso? Esto ocurre porque tanto originalPerson como copiedPerson están haciendo referencia al mismo objeto en memoria.
//
// En JavaScript, cuando asignas un objeto a otra variable, estás copiando la referencia al objeto, no el objeto en sí. Esto se conoce como copia superficial por referencia. Como resultado, cualquier cambio realizado en el objeto a través de una referencia se refleja en todas las referencias a ese objeto.
//
// A medida que continúes trabajando con JavaScript, te encontrarás con muchas situaciones donde entender la diferencia entre tipos primitivos y no primitivos es importante. Es un concepto fundamental que subyace en muchos aspectos del lenguaje y es clave para escribir código eficiente y correcto.