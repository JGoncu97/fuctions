/*
Una función es una eststructura que nos
permite organizar nuestro codigo. Nos permite 
reciclar codigo(NO REPETIR CODIGO). Nos
permite trabajar de manera más ordenada
y legible. Podemos dividir nuestro código
en módulos.
*/
//crear una función que reciba un número
//y lo retorne multiplicado por 2

//DEFINICION DE LA FUNCION
//1.las funciones deben tener un nombre
//este nombre debe concordar con lo que hace
//la funcion, también debe ser un nombre
//explícito tanto como se necesite
//ACA LA FUNCION TIENE UN PARAMETRO X
function dobleNumero(x) {
    return 2*x;
}
//hacemos el llamado a la funcion
//paando un argumento
let argumento = parseFloat(prompt("Ingrese un numero"));
let resultado = dobleNumero(argumento);
console.log(resultado);
