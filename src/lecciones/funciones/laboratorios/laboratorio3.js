// Construir un convertidor de Celsius a Fahrenheit

function convertCtoF(cel){
  const fahrenheit = cel * (9/5) + 32;
    return fahrenheit;
}

console.log(convertCtoF(4));

// version con arrow function

// const convertCtoF = (cel) => cel * (9/5) + 32;

// console.log(convertCtoF(4));
