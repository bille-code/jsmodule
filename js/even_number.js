// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola

const NUMBER = prompt( 'ingresa un numero del 1 al 100')

    
    if(NUMBER % 2 === 0 ){
        console.log('El numero es par')
    }else{
        console.log ('El numero es impar')
    }