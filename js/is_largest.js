console.log('is largest')

/* const NUMBER_ONE = parseInt( prompt('ingresa un número'))
const NUMBER_TWO = parseInt( prompt('ingresa otro numero'))

if (NUMBER_ONE > NUMBER_TWO) {
        console.log(`El ${NUMBER_ONE} es el mayor`)

} else if (NUMBER_TWO === NUMBER_TWO){
    console.log(`El ${NUMBER_ONE} es igual al ${NUMBER_TWO}`)
} else {
    console.log(`El $NUMBER_TWO es el mayor`)
} */

//expresion ? si true : si false
//pedir dos numeros
//comparar si el primer nuemero es mayor que el segundo
//imprimir el primero 
// si no 
//imprimir el segundo 

const NUMBER_ONE = parseInt(prompt('agrega un numero'))
const NUMBER_TWO = parseInt(prompt('agrega otro numero'))

NUMBER_ONE > NUMBER_TWO ? 
    console.log(`El numero ${NUMBER_ONE} es el mayor`)
    :
    console.log(`El numero ${NUMBER_TWO} es el mayor`)