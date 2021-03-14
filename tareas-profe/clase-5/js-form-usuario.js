document.querySelector('#submit').onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    
    document.querySelector('h1').innerText ="¡Bienvenido " + nombreUsuario + "!"; 
    document.querySelector('#info-usuario').innerText = "Su nombre es " + nombreUsuario + " " + apellidoUsuario + " y tiene " + edadUsuario + " años."

    return false;
}