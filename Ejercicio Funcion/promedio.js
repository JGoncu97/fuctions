//Calcular promedio:
//Crea una función que calcule el promedio de tres de números.

function promedio(x,y,z){
    let resultado=(x+y+z)/3;
    if(resultado){
    console.log(resultado);
    }else{
        console.log("Ingrese un valor correcto");
    }
};

let number1=parseInt(prompt("Ingrese el primer numero"));
let number2=parseInt(prompt("Ingrese el segundo numero"));
let number3=parseInt(prompt("Ingrese el tercero numero"));
promedio(number1,number2,number3)
