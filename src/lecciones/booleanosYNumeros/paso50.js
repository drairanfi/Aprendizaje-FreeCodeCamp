// ¿Qué son las sentencias de switch y cómo difieren de las cadenas de if/else?
// Las sentencias de switch y las de if/else if/else son ambas estructuras de control de flujo en programación que nos permiten ejecutar diferentes bloques de código en base a ciertas condiciones. Sin embargo, tienen características y casos de uso distintos.
//
// Una sentencia de switch evalúa una expresión y compara su valor con una serie de cláusulas case. Cuando se encuentra una coincidencia, se ejecuta el bloque de código asociado con ese case. Aquí es una estructura básica de una sentencia de switch:
//
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   default:
//     // code to be executed if expression doesn't match any case
// }
// La sentencia break al final de cada case es crucial. Informa al programa que debe salir del bloque switch una vez que se haya ejecutado un case coincidente. Sin ella, el programa continuaría ejecutando los casos subsiguientes, un comportamiento conocido como "fall-through".
//
// Las sentencias de switch se utilizan por lo general cuando se está comparando una sola variable con múltiples valores posibles. Son especialmente útiles cuando se tienen muchas condiciones potenciales para verificar contra una sola variable. Aquí hay un ejemplo usando una sentencia de switch para los días de la semana:

let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}
// Las sentencias de switch pueden ser más legibles y concisas al manejar muchos valores posibles para una sola variable.
//
// Las sentencias if/else if, por otro lado, son más flexibles. Pueden evaluar condiciones complejas y diferentes variables en cada cláusula. Esto las hace adecuadas para un rango más amplio de escenarios. Aquí hay un ejemplo de cuándo podrías usar una sentencia de if/else sobre una de switch:

let creditScoreNum = 720; 
let annualIncomeNum = 60000; 
let loanAmountNum = 200000; 

let eligibilityStatus;

if (creditScoreNum >= 750 && annualIncomeNum >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScoreNum >= 700 && annualIncomeNum >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScoreNum >= 650 && annualIncomeNum >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScoreNum < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
// En este ejemplo, tenemos el ingreso anual de una persona y su puntuación de crédito y estamos viendo qué tipos de préstamos calificarían. Dado que estamos manejando evaluaciones lógicas más complejas y múltiples variables, es mejor usar una sentencia de if/else aquí en lugar de una switch.
//
// Vale la pena señalar que las sentencias de switch en JavaScript utilizan comparación estricta (===), lo que significa que no realizan conversión de tipos. Esto puede ser una ventaja en términos de previsibilidad y evitar errores sutiles.
//
// En resumen, aunque tanto las sentencias switch como las cadenas de if/else if permiten lógica de múltiples ramas en tu código, tienen diferentes fortalezas. Las sentencias switch sobresalen en manejar múltiples valores posibles para una sola variable, mientras que las cadenas de if/else if ofrecen más flexibilidad para condiciones complejas. La elección entre ellas suele depender de los requisitos específicos de tu código y de las preferencias personales o del equipo en el estilo de programación.