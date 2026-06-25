// ¿Cuáles son los diferentes operadores aritméticos en JavaScript?
// JavaScript proporciona herramientas para realizar operaciones aritméticas básicas en números, como la suma, la resta, la multiplicación y la división. JavaScript también incluye operadores para operaciones aritméticas más complejas, como el resto y la exponenciación.
// 
// Todas estas herramientas se llaman operadores aritméticos. Veamos estos operadores en detalle, cómo utilizarlos y cómo combinarlos.
// 
// El operador de suma es un signo más (+). El operador de suma le permite encontrar el total de dos o más números. En las operaciones de suma, el orden de los números no importa:

const sumNum1 = 10;
const sumNum2 = 5;
const sumNum3 = 15;

const sumResult1 = sumNum1 + sumNum2;
const sumResult2 = sumNum2 + sumNum1;
const sumResult3 = sumNum2 + sumNum1 + sumNum3;

console.log(sumResult1); // 15
console.log(sumResult2); // 15
console.log(sumResult3); // 30
// El operador de resta es un signo menos (-). Le permite encontrar la diferencia entre dos números. Use el signo menos cuando quiera restar un número de otro, generalmente uno más pequeño de uno más grande:

const diffDirect = 10 - 5;
console.log(diffDirect); // 5
// Si un número más pequeño va primero, obtendrá un resultado negativo:

const diffNegative = 5 - 10;
console.log(diffNegative); // -5
// También puede asignar los números a variables y hacer la resta con los nombres de las variables:

const subNum1 = 10;
const subNum2 = 5;
const subResult = subNum1 - subNum2;

console.log(subResult); // 5
// En JavaScript, el operador de multiplicación se representa con un asterisco (*) y se utiliza para encontrar el producto de dos o más números. El orden de los números que está multiplicando no importa:

const mulNum1 = 10;
const mulNum2 = 5;
const mulNum3 = 15;

const mulResult1 = mulNum1 * mulNum2;
const mulResult2 = mulNum2 * mulNum1;
const mulResult3 = mulNum2 * mulNum1 * mulNum3;

console.log(mulResult1); // 50
console.log(mulResult2); // 50
console.log(mulResult3); // 750
// En JavaScript, el operador de división es una barra (/), que difiere del símbolo de división utilizado en las matemáticas tradicionales (÷). Realiza operaciones de división con el operador de división. El orden de los números que está dividiendo importa en este caso:

const divNum1 = 10;
const divNum2 = 5;
const divNum3 = 15;

const divResult1 = divNum1 / divNum2;
const divResult2 = divNum2 / divNum1;
const divResult3 = divNum2 / divNum1 / divNum3;

console.log(divResult1); // 2
console.log(divResult2); // 0.5
console.log(divResult3); // 0.03333333333333333
// Es importante tener en cuenta que si intenta dividir por cero, JavaScript devolverá Infinity:

const divByZero = 10 / 0; 

console.log(divByZero); // Infinity
// Asegúrate de evitar esos tipos de cálculos para no terminar con resultados inesperados en tu código.

// El operador de resto, representado por un signo de porcentaje (%), devuelve el resto de una división. El resto en matemáticas es el valor sobrante después de realizar la división:

const modNum1 = 10;
const modNum2 = 3;
const modRemainder = modNum1 % modNum2;

console.log(modRemainder); // 1
// El operador de exponenciación, representado por un doble asterisco (**), eleva un número a la potencia de otro:

const expNum1 = 2;
const expNum2 = 3;

const expResult = expNum1 ** expNum2;
console.log(expResult); // 8
// Es posible mezclar operadores en una sola operación o expresión:

const mixedResult = 10 + 5 * 2 - 8 / 4;
console.log(mixedResult); // 18
// Cuando mezclas diferentes operadores en una sola expresión, el motor de JavaScript sigue un sistema llamado precedencia de operadores para determinar el orden de las operaciones. La precedencia de operadores determina el orden en el que se ejecutan las operaciones en las expresiones.
