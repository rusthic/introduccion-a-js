//  Desafío de programación #1: Imprimí los números del 1 al 10
//  Resultado: 10 9 8 7 6 5 4 3 2 1

for (let i = 10; i > 0; i--) {
    console.log(i);
}

// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//  1 3 5 ... 99

for (let i = 1; i < 100; i++) {
    console.log(i);
}

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7
//  7x0 = 0
//  7x1 = 7
//  ...
//  7x9 = 63

const multiplicando = 7;
let resultado;
for (let i = 0; i <= 10; i++) {
    resultado = multiplicando * i;
    console.log(`${multiplicando} X ${i} = ${resultado}`);
}

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//  1x0 = 0
//  ...
//  1x9 = 9
//  2x0 = 0
//  ...
//  2x9 = 18
//  ...
//  ...
//  9x9 = 81
