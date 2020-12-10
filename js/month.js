// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

const MONTH = prompt('Introduce un numero del 1 al 12')

    switch(MONTH){
        case 1:
        case 3:
        case 5:
        case 7:        
        case 8:
        case 10:
        case 12:
            break
            console.log("Mes tiene 31 días")
        case 4:
        case 6:
        case 9:
        case 11:
            break
            console.log("Mes tiene 30 días")
        case 2:
            break
            console.log("Mes tiene 28 0 29 días")
        default:
            console.log("Numero invalido debes introducir numero entre 1 y 12")
    }

        