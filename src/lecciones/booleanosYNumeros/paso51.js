// Revisión de Comparaciones y Condicionales en JavaScript
// Comparaciones y los Tipos de Datos null y undefined
// Comparaciones y undefined: Una variable es undefined cuando ha sido declarada pero no se le ha asignado un valor. Es el valor predeterminado de variables no inicializadas y parámetros de función a los que no se les proporcionó un argumento. undefined se convierte en NaN en contextos numéricos, lo que hace que todas las comparaciones numéricas con undefined devuelvan false.
console.log(undefined < 0); // false (NaN < 0 is false)
console.log(undefined >= 0); // false (NaN >= 0 is false)
// Comparaciones y null: El tipo null representa la ausencia intencional de un valor. null se convierte en 0 en contextos numéricos, lo que puede resultar en un comportamiento inesperado en comparaciones numéricas:
console.log(null < 0); // false (0 < 0 is false)
console.log(null >= 0); // true (0 >= 0 is true)
// Al usar el operador de igualdad (==), null y undefined solo son iguales entre sí y a sí mismos:
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == NaN); // false
// Sin embargo, al usar el operador de igualdad estricta (===), que verifica tanto el valor como el tipo sin realizar coerción de tipos, null y undefined no son iguales:
console.log(null === undefined); // false
// Instrucciones switch
// Definición: Una instrucción switch evalúa una expresión y compara su valor con una serie de cláusulas case. Cuando se encuentra una coincidencia, se ejecuta el bloque de código asociado con ese caso. Una instrucción break debe colocarse al final de cada caso, para terminar su ejecución y continuar con el siguiente. El caso default es un caso opcional y solo se ejecuta si ninguno de los otros casos coincide. El caso default se coloca al final de una instrucción switch.
const weekDayNumber = 3; 

switch (weekDayNumber) {
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