/*
CREAR UN AFUNCION QUE RETORNE SI UNA PERSONA
ES MAYOR DE EDAD O NO
*/
function mayorEdad(edad) {
    if (edad >= 18){
        return true;
    }
    return false;
}

function mostrarMayor(resultado) {
    if (resultado){
        console.log("Ud es mayor de edad");
    }else{
        console.log("Ud es menor de edad");
    }
}

//hacemo el llamado a la funcion
let edadUsuario = parseInt(prompt("Ingrese edad"));
let resultado = mayorEdad(edadUsuario);
mostrarMayor(resultado);
