// Contador de vocales:
// Implementa una función que muestre las vocales en una cadena de texto.


function vocalesX(cadena){
    let resultadoA=cadena.includes("a");
    let resultadoE=cadena.includes("e");
    let resultadoI=cadena.includes("i");
    let resultadoO=cadena.includes("o");
    let resultadoU=cadena.includes("u");
    if(resultadoA){
        console.log("La cadena incluye a");
        }if(resultadoE){
            console.log("La cadena incluye e");
        } if(resultadoI){
            console.log("La cadena incluye i");
        }if(resultadoO){
            console.log("La cadena incluye o");
        }if(resultadoU){
            console.log("La cadena incluye u");
  
        }if(!resultadoA && !resultadoE && !resultadoI && !resultadoO && !resultadoU){
            console.log("La cadena no incluye vocales");
        }
    }
 


let cadenaVocales=prompt("Ingrese un texto")
vocalesX(cadenaVocales);