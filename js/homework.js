//Imprimir en consola la tabla del 7
//7 x 1 = 7 
let num = 7
    for(let i=0; i<11; i++){
        console.log("la table es "  + num + "*" + i + "=" + (num*i) ) 
            
    }

//imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
//3,6,7,9,12,14,15....

let datos=[3,7]
let maximo=100;
var aux=[];

for(let i =0; i<=maximo; i++){
    let cont=0
    for(let j=0; j < datos.length; j++) {
        if(i%datos[j]==0  && cont==0 ){
            aux.push(i)
            console.log(i+",")
            cont ++; 

        }
    }   

}





//imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
//“en un lugar de la mancha” -> 5

let texto = ("en un lugar de la mancha")
let result = texto.trim();
    console.log(result)
    
//imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
//“Hola mundo” -> 4