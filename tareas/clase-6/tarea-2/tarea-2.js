/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
 menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). 
if(integrantes[i]===""continue; o sino if(integrantes[i]!==""{blablabla}))
*/
const $botonAgregar = document.querySelector("#agregar-integrante");
const $botonEliminar = document.querySelector("#eliminar-integrante");
const $botonCalcular = document.querySelector("#calcular-salarios");

$botonAgregar.onclick = function (event) {
    const div = document.createElement("div");
    div.className = "integrante";

    const label = document.createElement("label");
    label.textContent = "Ingrese sueldo anual";

    const input = document.createElement("input");
    input.type = "number";

    div.appendChild(label);
    div.appendChild(input);

    const $integrantesFamilia = document.querySelector("#integrantes-familia");
    $integrantesFamilia.appendChild(div);
    event.preventDefault();
};

$botonEliminar.onclick = function (event) {
    const integrantes = document.querySelectorAll(".integrante");
    let ultimoIntegrante = integrantes.length - 1;
    integrantes[ultimoIntegrante].remove();

    event.preventDefault();
};

function obtenerSalarios() {
    //falta verificar inputs vacios
    const listaSalarios = document.querySelectorAll(".integrante input");
    const salarios = [];
    for (let i = 0; i < listaSalarios.length; i++) {
        if (listaSalarios[i].value != 0) salarios.push(Number(listaSalarios[i].value));
    }
    return salarios;
}

function mostrarSalario(tipo, salario) {
    document.querySelector(`#${tipo}`).textContent = salario;
}

$botonCalcular.onclick = function (event) {
    const salarios = obtenerSalarios();
    mostrarSalario("mayor-anual", calcularMayorSalario(salarios));
    mostrarSalario("menor-anual", calcularMenorSalario(salarios));
    mostrarSalario("promedio-anual", calcularPromedioAnual(salarios));
    //falta mostrar promedio mensual
    event.preventDefault();
};

// $botonCalcular.onclick = function (event) {
//     const salarios = obtenerSalarios();
//     document.querySelector("#mayor-anual").textContent = calcularMayorSalario(salarios);
//     event.preventDefault();
// };
