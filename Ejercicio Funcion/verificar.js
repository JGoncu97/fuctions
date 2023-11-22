// Verificación de par:
// Desarrolla una función que determine si un número dado es par o impar.

function verificar(x){
    if(x % 2 ===0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
};


let number1=parseInt(prompt("Ingrese un numero"));

verificar(number1);