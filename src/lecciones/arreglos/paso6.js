// ¿Cómo puedes utilizar métodos de cadenas y matrices para invertir una cadena?
// Invertir una cadena es una tarea común de programación que se puede lograr en JavaScript usando una combinación de métodos de cadena y arreglo. El proceso involucra tres pasos principales:

// Dividir la cadena en un arreglo de caracteres.
// Invertir el arreglo.
// Unir de nuevo los caracteres en una cadena.
// Exploremos cada uno de estos pasos usando los métodos split(), reverse(), y join().

// El primer paso para invertir una cadena es convertirla en un arreglo de caracteres individuales. Podemos hacerlo usando el método split(). El método split() divide una cadena en un arreglo de subcadenas y especifica dónde debe ocurrir cada división según un separador dado. Si no se proporciona un separador, el método devuelve un arreglo que contiene la cadena original como un único elemento. Ejemplos de separadores comunes incluyen:

// Una cadena vacía (""), que divide la cadena en caracteres individuales.

// Un espacio único (" "), que divide la cadena donde ocurren los espacios.

// Un guion ("-"), que divide la cadena en cada guion.

// Aquí hay un ejemplo de cómo usar el método split() para crear un arreglo de caracteres:

let strPaso6 = "hello";
let charArrayPaso6 = strPaso6.split("");
console.log(charArrayPaso6); // ["h", "e", "l", "l", "o"]
// En este ejemplo, usamos split("") (con una cadena vacía como argumento) para convertir la cadena hello en un arreglo de sus caracteres individuales. Una vez que tenemos un arreglo de caracteres, podemos usar el método reverse() para invertir el orden de los elementos en el arreglo.

// El método reverse() es un método de arreglo que invierte los elementos de un arreglo en su lugar. Esto significa que modifica el arreglo original en lugar de crear uno nuevo. Así es como podemos usarlo:

let charArrayPaso6Rev = ["h", "e", "l", "l", "o"];
charArrayPaso6Rev.reverse();
console.log(charArrayPaso6Rev); // ["o", "l", "l", "e", "h"]
// En este ejemplo, reverse() cambia el orden de los elementos en charArray, invirtiéndolo de ["h", "e", "l", "l", "o"] a ["o", "l", "l", "e", "h"].

// El paso final es convertir el arreglo invertido de caracteres de nuevo en una cadena. Podemos lograr esto usando el método join(). El método join() crea y devuelve una nueva cadena al concatenar todos los elementos de un arreglo, separados por un separador de cadena especificado. Si deseas unir los caracteres sin ningún separador, puedes usar una cadena vacía como argumento. Aquí tienes un ejemplo:

let reversedArrayPaso6 = ["o", "l", "l", "e", "h"];
let reversedStringPaso6 = reversedArrayPaso6.join("");
console.log(reversedStringPaso6); // "olleh"
// En este ejemplo, join("") (con una cadena vacía pasada como argumento) combina todos los caracteres en el arreglo en una sola cadena sin ningún separador entre ellos.

// Recuerda que las cadenas en JavaScript son inmutables, lo que significa que no puedes invertir una cadena directamente modificándola. Es por eso que necesitamos convertirla en un arreglo, invertir el arreglo, y luego convertirla de nuevo en una cadena. Esta combinación de métodos de cadenas y arreglos proporciona una manera potente y flexible de manipular cadenas en JavaScript.
