//  Desafío de programación #1: Imprimí los números del 1 al 10

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// Desafìo de programación  #2: Imprimí los números impares del 1 al 100

// for (let i = 1; i < 100; i++) {
//     console.log(i);
// }

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7

// const multiplicando = 7;
// let resultado;
// for (let i = 0; i <= 10; i++) {
//     resultado = multiplicando * i;
//     console.log(`${multiplicando} X ${i} = ${resultado}`);
// }

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

// let resultado = 0;
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         resultado = i * j;
//         console.log(`${i} X ${j} = ${resultado}`);
//     }
// }

// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumaNumsArray(numeros) {
//     let resultado = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         resultado += numeros[i];
//     }
//     return resultado;
// }

// console.log(sumaNumsArray(numeros));

// Desafío de programación #6: Calcula 10! (10 factorial) - 10 * 9 * 8 * ... * 1
// function factorial10() {
//     let resultado = 1;
//     for (let i = 10; i > 0; i--) {
//         resultado = resultado * i;
//     }
//     return resultado;
// }
// console.log(factorial10());

// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

// let suma = 0;

// for (let i = 11; i < 30; i += 2) {
//     suma += i;
// }

// console.log(sum);

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
//  (°C * 1.8) + 32 = °F

// function celciusToFahrenheit(celcius) {
//     let conversion = celcius * 1.8 + 32;
//     return conversion;
// }

// console.log(celciusToFahrenheit(40));

// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
// (°F - 32) / 1.8 = °C

// function fahreheitToCelcius(fahrenheit) {
//     let conversion;
//     return (conversion = (fahrenheit - 32) / 1.8);
// }
// console.log(fahreheitToCelcius(104));

// Desafío de programación #10: Calcula la suma de todos los números en un array de números

// function sumaNumerosArray(numeros) {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i];
//     }
//     return suma;
// }
// let numeros = [1, 2, 3, 4, 5];
// console.log(sumaNumerosArray(numeros));

// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

let numeros = [1, 2, 3, 4, 5];
console.log(promedio(numeros));
