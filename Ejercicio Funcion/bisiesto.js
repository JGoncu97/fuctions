// Comprobar año bisiesto:
// Escribe una función que determine si un año dado es bisiesto.

function bisiesto(año){
   if((año%4==0 && año%100 !==0)||(año%100 ==0 && año%400 ==0)){
    console.log("Es bisiesto");
   }else{
    console.log("No es bisiesto");
   }
};

let año1=prompt("Ingrese el año a consultar");
bisiesto(año1);
