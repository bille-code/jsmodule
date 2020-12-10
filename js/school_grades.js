// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"

const school_grades = prompt('Ingresa tu calificación ')

const A = 90
const B = 80
const C = 70
const D = 60
const E = 50


    if(school_grades>=A) {
        console.log('Tu calificación es  A')
    } else if (school_grades>=B){
        console.log('Tu calificación es B')
        }else if(school_grades>=C){
            console.log('Tu calificación es C')
        }else if(school_grades>=D){
            console.log('Tu calificación es D')
        }else if(school_grades>=E){
            console.log('Tu calificación es E')
        }else if(school_grades<=E){
            console.log('Tu calificación es F')
        }