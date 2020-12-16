const myArray = [1,4,7]
    for (let i=0; i < myArray.length; i++){
        const tablaName = myArray [i]
        for (let j=1; j<=10; j++){
            console.log(`${tablaName} X ${j} = ${tablaName*j}`)
        }
    }


    const myArray = [1,4,7]
    let newArray = []
    myArray.forEach(currentElement => {
    newArray.push(currentElement * 2)
 return (newArray)
    
    })
    
    

    //function 
    //[1,2.3]
    //--> [2,4,6]
    //forEach
    /* funcion (arreglo)
    declarar el nuevo array vacio
    recorrer el arreglo
        en cada iteracion
        obtener el doble 
        guardar en otro arreglo
    termina recorrido

    retornar nuevo arreglo
    retornar nuevoArraygit
fin de funcion
 */

const doubleValues = arrNumbers =>{
    
    let newArray= []
    arrNumbers.forEach(currentValues => {
        newArray.push(currentValues * 2)
    })
    return(newArray) 
} 


    
const arrayToDouble = [1 ,2,3]
const resultDoubleValues = doubleValues(arrayToDouble)
console.log(resultDoubleValues)

    