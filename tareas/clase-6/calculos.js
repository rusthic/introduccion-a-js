function obtenerMayorEdad(edades) {
    let mayorEdad = edades[0];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > mayorEdad) {
            mayorEdad = edades[i];
        }
    }
    return mayorEdad;
}

function obtenerMenorEdad(edades) {
    let menorEdad = edades[0];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < menorEdad) {
            menorEdad = edades[i];
        }
    }
    return menorEdad;
}

function obtenerPromedioEdad(edades) {
    let promedioEdad = 0;
    for (let i = 0; i < edades.length; i++) {
        promedioEdad += edades[i];
    }
    return promedioEdad / edades.length.toFixed(2);
}
