// ¿Qué son los operadores a nivel de bits y cómo funcionan?

// Los operadores a nivel de bits en JavaScript son operadores especiales que
// operan sobre las representaciones binarias de los números. Para entender los
// operadores a nivel de bits, primero necesitamos comprender el concepto de
// bits y números binarios. En informática, un bit es la unidad de información
// más básica. Solo puede tener dos valores: 0 o 1. Binario es un sistema de
// numeración que utiliza solo estos dos dígitos para representar todos los
// números.

// Por ejemplo, la representación binaria del número decimal 10 es 1010. En este
// sistema, cada dígito representa una potencia de 2, comenzando por el dígito
// más a la derecha e incrementando a medida que nos movemos hacia la izquierda.

//   1   0   1   0
// 1·2³ 0·2² 1·2¹ 0·2⁰
//   8   0   2   0

// En la tabla anterior, la primera fila muestra el número binario 1010, la
// segunda fila muestra la potencia de 2 representada por cada posición binaria,
// y la tercera fila muestra el resultado de cada multiplicación. Si sumas todos
// los valores en la tercera fila, totalizan 10.

// Ahora, vamos a profundizar en los operadores a nivel de bits. Estos
// operadores realizan operaciones sobre las representaciones binarias de los
// números. JavaScript proporciona varios operadores bit a bit, incluyendo
// AND (&), OR (|), XOR (^), NOT (~), desplazamiento a la izquierda (<<) y
// desplazamiento a la derecha (>>).

// El operador AND a nivel de bits (&) devuelve un 1 en cada posición de bit
// para la cual los bits correspondientes de ambos operandos son 1. Aquí tienes
// un ejemplo:

let andA = 5;  // Binario: 101
let andB = 3;  // Binario: 011
console.log(andA & andB);  // 1 (Binario: 001)

// En este ejemplo, realizamos una operación AND a nivel de bits en 5 (101 en
// binario) y 3 (011 en binario). El resultado es 1 (001 en binario) porque solo
// el bit más a la derecha es 1 en ambos números.

// El operador a nivel de bits OR (|) devuelve un 1 en cada posición de bit
// para la cual los bits correspondientes de cualquiera de los operandos son 1.
// Por ejemplo:

let orA = 5;  // Binario: 101
let orB = 3;  // Binario: 011
console.log(orA | orB);  // 7 (Binario: 111)

// Aquí, el resultado es 7 (111 en binario) porque al menos uno de los bits es
// 1 en cada posición.

// El operador a nivel de bits XOR (^) devuelve un 1 en cada posición de bit
// para la cual los bits correspondientes de uno, pero no de ambos operandos
// son 1. Por ejemplo:

let xorA = 5;  // Binario: 101
let xorB = 3;  // Binario: 011
console.log(xorA ^ xorB);  // 6 (Binario: 110)

// El resultado es 6 (110 en binario) porque el primer y el segundo bit desde
// la derecha son diferentes en los dos números.

// El operador NOT a nivel de bits (~) invierte todos los bits de su operando.
// Por ejemplo:

let notA = 5;  // Binario: 101
console.log(~notA);  // -6

// Esto puede parecer sorprendente, pero se debe a cómo se representan los
// números negativos en binario usando el complemento a dos.

// El operador de desplazamiento a la izquierda (<<) mueve todos los bits hacia
// la izquierda un número especificado de posiciones. Por ejemplo:

let leftA = 5;  // Binario: 101
console.log(leftA << 1);  // 10 (Binario: 1010)

// Aquí, todos los bits se desplazan una posición hacia la izquierda,
// multiplicando efectivamente el número por 2.

// El operador de desplazamiento a la derecha (>>) mueve todos los bits hacia
// la derecha. Por ejemplo:

let rightA = 5;  // Binario: 101
console.log(rightA >> 1);  // 2 (Binario: 10)

// Aquí, todos los bits se desplazan una posición hacia la derecha, dividiendo
// efectivamente el número por 2 y redondeando hacia abajo.

// --- Conclusión ---
// Los operadores bit a bit trabajan directamente con la representación binaria
// de los números, lo que los hace extremadamente eficientes para ciertas
// operaciones a bajo nivel. Si bien no los usarás todos los días en desarrollo
// web típico, son fundamentales cuando trabajas con banderas (flags),
// máscaras de bits, protocolos de red, compresión, gráficos, o simplemente
// cuando necesitas optimizar operaciones aritméticas como multiplicar o dividir
// por potencias de 2. Entender cómo funcionan los operadores AND (&), OR (|),
// XOR (^), NOT (~) y los desplazamientos (<<, >>) te da una comprensión más
// profunda de cómo la computadora realmente maneja los números por debajo del
// capó.