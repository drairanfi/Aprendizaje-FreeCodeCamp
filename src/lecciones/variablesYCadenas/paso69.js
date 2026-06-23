//                                 // Trabajando con Métodos de Formateo de Cadenas

// // ¿Cómo puedes eliminar los espacios en blanco de una cadena de texto?                                


// okay, en esta leccion se hablara de como se podran eliminar los espacios en blanco que hayan en una cadena de texto con los metodos de trim(), trimStart() y trimEnd() 

// ejemplo de espacios en blanco

let fullName = "  Daniel  ";
console.log(fullName);

// ejemplo sin espacios en blanco

fullName = fullName.trim();
console.log(fullName);

// A veces, puede que solo quieras eliminar espacios en blanco del principio o del final de una cadena, pero no de ambos lados. Aquí es donde entran trimStart() y trimEnd().

fullName = fullName.trimStart();
console.log(fullName);

fullName = fullName.trimEnd();
console.log(fullName);