// // // recuerden que le taller 1 seria como el paso 70 pero tuvo 16 lecciones o pasos, por eso aca en estos archivos se ve el cambio de paso 69 a 86

                              // Trabajando con Métodos de Modificación de Cadenas

// ¿Cómo puedes reemplazar partes de una cadena con otra?

// en esta leccion se habla de replace(), es un metodo un poco confuso, aca su sintaxis:

// string.replace(searchValue, replaceValue);

// searchValue es el valor que quieres buscar en la cadena.
// replaceValue es el nuevo valor con el que deseas reemplazar el valor encontrado.

const text = "Vamos a probar una parte sensiya del metodo replace()";
console.log(text);
const textReplace = text.replace("sensiya", "sencilla");
console.log(textReplace);

// algo a tener en cuenta y es que el metodo replace() es sensible a mayusculas y minusculas.

const textUpper = "Vamos a probar una parte SENSIYA del metodo replace()";
console.log(textUpper);
const textReplaceUpper = textUpper.replace("sensiya", "sencilla");
console.log(textReplaceUpper);

// como ven y si prueban desde la consola saldra el valor que hay por defecto en la cadena ya que al ser sensible a mayusculas y minusculas no se realiza el cambio

// ahora el metodo replace() solo modificara el primer valor que coincida con el que se va a reemplazar, si no es claro mira el ejemplo:

const textMultiple = "Pongamos a prueba esta vuelta del metodo replace(), me da dolor de cabeza el metodo replace()";
console.log(textMultiple);
const textMultipleReplace = textMultiple.replace("replace()", "hablado");
console.log(textMultipleReplace);

// en este caso solo se modifica la primera coincidencia de "replace()" por "hablado".
// recuerden que este metodo tiene muchas mas formas de uso, como por ejemplo:

// - Reemplazar todas las coincidencias utilizando expresiones regulares.
// - Usar funciones de callback para determinar el nuevo valor dinámicamente. 
