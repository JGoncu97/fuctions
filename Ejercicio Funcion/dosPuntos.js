// Calcular distancia entre dos puntos:
// Desarrolla una función que calcule la distancia entre 
//dos puntos en un plano cartesiano.


function distanciaxy(x1,x2,y1,y2){
    return Math.sqrt((x2-x1)**2+(y2-y1)**2);
};

let puntox1=parseFloat(prompt("Ingrese el punto x1"));
let puntox2=parseFloat(prompt("Ingrese el punto x2"));
let puntoy1=parseFloat(prompt("Ingrese el punto y1"));
let puntoy2=parseFloat(prompt("Ingrese el punto y2"));

console.log(distanciaxy(puntox1,puntox2,puntoy1,puntoy2));