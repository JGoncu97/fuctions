/*
CREAR UNA FUNCION QUE DTERMINE SI UNA LETRA SE
ENCUENTRA EN UNA CADENA
*/
//includes  nos permite saber si un caracter se encuentra en 
//una cadena

function estaX(cadena) {
    let resultado = cadena.includes("x");
    if (resultado){
        console.log("La cadena incluye la x");
    }else{
        console.log("La cadena no inlcuye la x");
    }
}

//hacemos el llamado a la funcion
let cadenaUsuario = prompt("Ingrese texto");
estaX(cadenaUsuario);