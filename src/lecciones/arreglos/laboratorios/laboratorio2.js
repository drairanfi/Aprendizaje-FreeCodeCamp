// Construye un Traductor de Puntuaciones de Golf
// En el juego de Golf, cada hoyo tiene un par, que significa el número promedio de strokes que se espera que un golfista haga para hundir la bola en el hoyo y completar la jugada. Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un apodo diferente.

// En este laboratorio, escribirás una función que convierte el par y los strokes a su apodo.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Debes crear una función llamada golfScore.
// golfScore debe recibir dos argumentos numéricos, que son el par del campo y la cantidad de golpes realizados.
// golfScore debería devolver una cadena.
// golfScore debería devolver "Hole-in-one!" si strokes es 1.
// golfScore debería devolver "Eagle" si strokes es menor o igual a par menos 2.
// golfScore debería devolver "Birdie" si strokes es igual a par menos 1.
// golfScore debería devolver "Par" si strokes es igual a par.
// golfScore debería devolver "Bogey" si strokes es igual a par más 1.
// golfScore debería devolver "Double Bogey" si strokes es igual a par más 2.
// golfScore debería devolver "Go Home!" si strokes es mayor o igual a par más 3.


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    } else {
        return "combinacion no posible";
    }
}

console.log(golfScore(5, 9));