// Calculadora de potencia:
// Crea una función que tome dos números como argumentos y devuelva el resultado de elevar el primero al segundo.


function potencia(x,y){
    return x**y;
}


let number1=parseInt(prompt("Ingrese el primer numero"));
let number2=parseInt(prompt("Ingrese el segundo numero"));

console.log(potencia(number1,number2));