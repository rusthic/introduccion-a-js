// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function calcularEdadUsuario(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento;
}

const anioNacimiento = Number(prompt("¿En que año naciste?"));
const anioActual = Number(prompt("¿En que año estamos?"));

console.log("Tu edad es: " + calcularEdadUsuario(anioNacimiento, anioActual) + " años.");

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioAnual = Number(prompt("¿Cual es tu salario anual?"));
const salarioMensual = Number(prompt("¿Cual es tu salario mensual?"));
const mesesEnUnAnio = 12;
const semanansEnUnAnio = 52;
const diasEnUnAnio = 365;
const horasEnUnAnio = 8760;

function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / mesesEnUnAnio;
}

function calcularSalarioAnual(salarioMensual) {
    return salarioMensual * mesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    return salarioAnual / semanansEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    return salarioAnual / diasEnUnAnio;
}

function calcularSalarioPorHora(salarioAnual) {
    return salarioAnual / horasEnUnAnio;
}

console.log("Tu salario anual es de: $" + calcularSalarioAnual(salarioMensual));
console.log("Tu salario mensual es de: $" + calcularSalarioMensual(salarioAnual));
console.log("Tu salario diario es de: $" + calcularSalarioDiario(salarioAnual));
console.log("Tu salario por hora es de: $" + calcularSalarioPorHora(salarioAnual));
