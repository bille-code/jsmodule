// función que realiza la tabla del 7 con 

function tabla(){
    let counter =1
        while(counter<=10){
            console.log(`7 X ${counter} = ${7 * counter}`)
            counter = counter + 1

        }return
}

// tabla del 8 al reves
function tabla_reverse(){
    console.log("Tabla del 8 reverse")
    for(let i=10; i>=1; i--){
        console.log (`8 X ${i} = ${8*i}`)
    }return(tabla_reverse)
}

// regresa el string al reves

function reverse (addstring){

    console.log("reversa")

        const stringToReverse = addstring
        let stringReversed = ''
        for(let i = stringToReverse.length -1; i>=0; i--){
            stringReversed += stringToReverse[i]

        }

        return(stringReversed )

}
    
    // weather 
    function weather (){

        const addweather = prompt ('¿ Como está el clima el día de hoy')
    
    if ('lluvioso' === addweather ) {
            console.log('El día esta lluvioso y hay muchos charcos')
    }
            else if ('soleado' === addweather ) {
                console.log ('El día está muy caluroso')
            }
            else if ('nevando' === addweather ){
                console.log ('El día esta para no salir de casa')
            }
            else if ('nublado' === addweather ) {
                console.log ('El día esta para tomar cafe')
            }
        else {
            const other_climate = prompt('Describe el clima en tu localidad ')
            console.log (other_climate)
    }
    return
}

//función divisible entre 2 y 11

    function divide (numOne){
         const NUMBER = numOne /* prompt('ingresa un numero del 1 al 100') */
        if(NUMBER% 2 === 0 || NUMBER % 11 === 0){
            console.log(`Es divisible por 2, 11`);
        } else{
            console.log(`No es divisible por 2,11`);
        }
    } return

// function Month
function month(num_mes){

    const NUMBER = num_mes /* prompt('Introduce un numero entre 1 y 7') */
    
    const LUNES = 1
    const MARTES = 2
    const MIERCOLES = 3
    const JUEVES = 4
    const VIERNES = 5
    const SABADO = 6
    const DOMINGO = 7
    
        if(NUMBER == LUNES){
            console.log ('El día es LUNES')
        } else if(  NUMBER == MARTES){
            console.log('El día es MARTES')
    
        }else if(  NUMBER == MIERCOLES){
            console.log('El día es MIERCOLES')
    
        }else if(  NUMBER == JUEVES){
            console.log('El día es JUEVES')
    
        }else if(  NUMBER == VIERNES){
            console.log('El día es VIERNES')
    
        }else if(  NUMBER == SABADO){
            console.log('El día es SABADO')
    
        }else if(  NUMBER == DOMINGO){
            console.log('El día es DOMINGO')
        }else{
            console.log ('Ingresa un numero valido')
        }
            
    
        //number par impar
        function numberPar (num){
            const NUMBER = num
            if(NUMBER % 2 === 0 ){
            console.log('El numero es par')
        }else{
            console.log ('El numero es impar')
        }
    
        }
}

    //school grades
    function schoolGradre(numone){
        const school_grades = numone /* prompt('Ingresa tu calificación ') */

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

        return
    } 

    
