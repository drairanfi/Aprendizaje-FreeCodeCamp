// Construye un asistente para contar cartas

// En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama cuenta de tarjetas.

// Tener más cartas altas en la baraja es una ventaja para el jugador. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

// Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

// Historias de usuario:

// Debes usar let para declarar una variable global llamada count y asignarle el valor 0.
// Debes tener una función llamada cardCounter.
// La función cardCounter debe recibir un parámetro card que puede ser un número o una cadena.
// Para valores entre 2 y 10, el parámetro card será un número.
// Para todos los demás valores, el parámetro card será una cadena.
// La función cardCounter debe modificar la variable global count según ciertos criterios.
// La variable global count debe incrementarse en 1 para las cartas 2, 3, 4, 5 o 6.
// La variable global count debe permanecer sin cambios para las cartas 7, 8, 9.
// La variable global count debe disminuir en 1 para las cartas 10, "J", "Q", "K", "A".
// La función cardCounter debe devolver una cadena con el conteo actual y la palabra Bet si el conteo es positivo.
// La función cardCounter debe devolver una cadena con el conteo actual y la palabra Hold si el conteo es menor o igual a 0.
// En la salida de la función, el conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un espacio. Por ejemplo, -3 Hold.

let count = 0;

const nums = [2, 3, 4, 5, 6];
const nums1 = [7, 8, 9];
const text = [10, "J", "Q", "K", "A",];

function cardCounter(card) {
    if (nums.includes(card)) {
        count += 1;
    } else if
        (nums1.includes(card)) {
        count;
    } else if
        (text.includes(card)) {
        count -= 1;
    } else return "malo"

    if (count >= 1) {
        return `${count} Bet`;
    } else return `${count} Hold`;
    return count;
}




