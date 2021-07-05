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

// function promedio(numeros) {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i];
//     }
//     return suma / numeros.length;
// }

// let numeros = [1, 2, 3, 4, 5];
// console.log(promedio(numeros));

// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

// function listaNumPositivos(numeros) {
//     let numPositivos = [];
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] >= 0) {
//             numPositivos.push(numeros[i]);
//         }
//     }
//     return numPositivos;
// }
// let numeros = [0, 1, 2, -3, 4, -5, 6, -0.75];
// console.log(listaNumPositivos(numeros));

// Desafío de programación #13: Find the maximum number in an array of numbers

// function maxNum(numeros) {
//     let maxNum = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] > maxNum) {
//             maxNum = numeros[i];
//         }
//     }
//     return maxNum;
// }

// let numeros = [0, 2, 1, -1, 15, -2];
// console.log(maxNum(numeros));

// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

// let n = 0;
// let m = 1;
// let fi = 0;
// for (let i = 0; i < 10; i++) {
//     console.log(n);
//     fi = n + m;
//     n = m;
//     m = fi;
// }

// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// console.log(fibonacci(10));

// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function isPrime(num) {
    // falta 1 y 0
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            return false;
        } else return true;
    }
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(0));
console.log(isPrime(1));