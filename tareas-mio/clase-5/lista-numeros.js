//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaNumeros = document.querySelectorAll('li');
let arrayNumeros = [];
for (let i = 0; i < listaNumeros.length; i++) {
    arrayNumeros.push(listaNumeros[i].textContent);

}

function calcularPromedio(){
    let promedio = 0;
    let c = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        promedio += Number(arrayNumeros[i]);
        c++;
    }
    return promedio/c;
}

function calcularMasPequeño(){
    let menor = arrayNumeros[0];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] < menor) {
            menor = arrayNumeros[i];
        }
        
    }
    return menor;
}

function calcularMasGrande(){
    let mayor = arrayNumeros[0];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > mayor) {
            mayor = arrayNumeros[i];
        }
        
    }
    return mayor;
}


document.querySelector('#promedio-em').innerText = calcularPromedio(); 
document.querySelector('#pequeño-em').innerText = calcularMasPequeño(); 
document.querySelector('#grande-em').innerText = calcularMasGrande(); 

