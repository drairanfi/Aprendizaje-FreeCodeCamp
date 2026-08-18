// Construye una herramienta para confirmar el final
// En este laboratorio, implementarás una función que verifica si una cadena termina con la cadena objetivo dada.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Debes crear una función llamada confirmEnding que tome dos parámetros: la cadena a verificar y la cadena con la que se verifica.
// La función debe devolver true si la primera cadena termina con la segunda cadena, y false en caso contrario.
// No debes usar el método .endsWith(); en su lugar, usa uno de los métodos de subcadena de JavaScript para lograr esto.

function confirmEnding(text, word) {

    const numsWord = word.length;
    const getText = text.slice(-numsWord);

    return getText === word;
}

console.log(confirmEnding("connor", "or"));