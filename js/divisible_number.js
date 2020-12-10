// Exercise 2// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo


const NUMBER_ONE = prompt('ingresa un numero del 1 al 100')
    
    if(NUMBER_ONE % 2 === 0 || NUMBER_ONE % 11 === 0){
        console.log('Es divisible por 2, 11');
    } else{
        console.log('No es divisible por 2,11');

    }
    
    /* else if(NUMBER_ONE % 11 ===0){
        console.log('Es divisile de 11')
    }else if( NUMBER_ONE % 11 === 1){
        console.log('No es divisible entre 11')  
    
    }
    
     */

