// ¿Qué es el método toFixed() y cómo funciona?
// El método .toFixed() es una función incorporada de JavaScript que formatea un número usando notación de punto fijo. Es particularmente útil cuando se necesita controlar el número de decimales en un número, especialmente para mostrar valores de moneda o al trabajar con mediciones precisas.
//
// El método .toFixed() se llama en un número y toma un argumento opcional, que es el número de dígitos que aparecerán después del punto decimal. Devuelve una representación en cadena del número con el número especificado de decimales. Aquí hay un ejemplo básico de cómo funciona .toFixed():

let floatNum = 3.14159;
console.log(floatNum.toFixed(2)); // "3.14"
// En este caso, estamos limitando el número de decimales a dos. Por lo tanto, 3.14159 se convierte en 3.14. Es importante notar que .toFixed() devuelve una cadena, no un número. Esto se debe a que el método está principalmente destinado a formatear números para mostrar, no para cálculos posteriores.
//
// El método .toFixed() redondea el número al valor más cercano que se pueda representar con el número especificado de decimales. Este comportamiento de redondeo es importante de entender:

console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
// Como puede ver, .toFixed() redondea hacia arriba cuando el siguiente dígito es 5 o mayor, y redondea hacia abajo de otro modo. Si llamas a .toFixed() sin argumentos, por defecto tiene 0 decimales:

let defaultDecimals = 3.14159;
console.log(defaultDecimals.toFixed()); // "3"
// El método .toFixed() puede ser particularmente útil al trabajar con cálculos financieros o mostrar precios:

let itemPrice = 19.99;
let taxRateNum = 0.08;
let totalWithTax = itemPrice + (itemPrice * taxRateNum);

console.log("Total: $" + totalWithTax.toFixed(2)); // "Total: $21.59"
// En este ejemplo, .toFixed(2) asegura que el total siempre se muestre con dos decimales, lo cual es estándar para moneda en muchos países.
//
// En conclusión, el método .toFixed() es una herramienta poderosa para formatear números en JavaScript, particularmente cuando necesitas controlar la visualización de decimales. Aunque principalmente se utiliza para formatear salida, recuerde su comportamiento, especialmente cuando se necesitan cálculos precisos.

