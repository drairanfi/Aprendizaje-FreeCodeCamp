// ¿Cómo puedes verificar si un arreglo contiene un cierto valor?
// En JavaScript, el método includes() es una forma simple y eficiente de verificar si un arreglo contiene un valor específico. Este método devuelve un valor booleano: true si el arreglo contiene el elemento especificado, y false en caso contrario.

// El método includes() es particularmente útil cuando necesitas verificar rápidamente la presencia de un elemento en un arreglo sin necesidad de conocer su posición exacta. Comencemos con un ejemplo de cómo usar el método includes():

let fruitsPaso31A = ["apple", "banana", "orange", "mango"];
console.log(fruitsPaso31A.includes("banana")); // true
console.log(fruitsPaso31A.includes("grape"));  // false
// En este ejemplo, tenemos un arreglo de frutas. Usamos el método includes() para verificar si banana está en el arreglo. Devuelve true porque banana está presente. Luego comprobamos grape, lo que devuelve false porque no está en el arreglo.

// El método includes() distingue entre mayúsculas y minúsculas cuando se trata de cadenas. Esto significa que Banana con una B mayúscula y banana con todas las letras en minúscula se consideran valores diferentes. Aquí tienes un ejemplo que ilustra esto:

let fruitsPaso31B = ["apple", "banana", "orange"];
console.log(fruitsPaso31B.includes("banana")); // true
console.log(fruitsPaso31B.includes("Banana")); // false
// En este caso, banana (todas en minúsculas) se encuentra en el arreglo, pero Banana (con la primera letra en mayúscula) no, por lo que la segunda llamada a includes() devuelve false.

// El método includes() también puede aceptar un segundo parámetro opcional que especifica la posición en el arreglo para iniciar la búsqueda. Esto es útil si quieres verificar la presencia de un elemento en una parte específica del arreglo. Así es como puedes usar esta característica:

let numbersPaso31 = [10, 20, 30, 40, 50, 30, 60];
console.log(numbersPaso31.includes(30, 3)); // true
console.log(numbersPaso31.includes(30, 4)); // true
// Para el primer console.log, estamos buscando el número 30 comenzando en el índice 3. En este caso, hay un número 30 que aparece después del índice 3, por lo que el método includes() devuelve true.

// Lo mismo sucede con el segundo console.log. Estamos buscando el número 30 comenzando en el índice 4. Dado que el número 30 aparece después de ese índice, retornará true.

// Vale la pena señalar que includes() usa la comparación de igualdad estricta (===), lo que significa que puede distinguir entre diferentes tipos. Por ejemplo:

let mixedArrayPaso31 = [1, "2", 3, "4", 5];
console.log(mixedArrayPaso31.includes(2));  // false
console.log(mixedArrayPaso31.includes("2")); // true
// En este caso, el número 2 y la cadena "2" se consideran diferentes tipos de datos. Por lo tanto, el primer console.log devolverá false, mientras que el segundo console.log devolverá true.

// El método includes() es una herramienta poderosa para verificar la presencia de elementos en arreglos. Es simple de usar, eficiente y puede ahorrarte de escribir bucles más complejos o condiciones para buscar en los arreglos. Ya sea que estés trabajando con cadenas, números o tipos de datos mixtos, includes() proporciona una manera directa de verificar si un valor existe en tu arreglo.