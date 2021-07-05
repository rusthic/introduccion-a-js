document.querySelector("#saludar").onclick = function () {
    let primerNombre = document.querySelector("#primer-nombre").value;
    let segundoNombre = document.querySelector("#segundo-nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let edad = document.querySelector("#edad").value;

    document.querySelector("h1").innerText = "Bienvenido, " + primerNombre + "!";
    document.querySelector("#datos-usuario").innerText = `${primerNombre} ${segundoNombre} ${apellidos} ${edad}`;

    return false;
};
