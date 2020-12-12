console.log("Tabla del 8 reverse")
    for(let i=10; i>=1; i--){
        console.log (`8 X ${i} = ${8*i}`)
    }

    //imprimar numeros pares entre 1 y 100

    console.log("numeros pares entre 1 y 100")
        for(let i= 1; i<=100; i++){
            if(i % 2 === 0){
                console.log(i)
            }
        }
        //imprimir numeros pares con while
        let countfake = 1
        while(countfake<=100){
            if (countfake%2===0)
            console.log(countfake)
            countfake++
        }

        //dado un string
        //"reverse"
        //--> esrever
        //invertir el orden e imprimir en consola

        console.log("reversa")

        const stringToReverse = "hola Mundo"
        let stringReversed = ''
        for(let i = stringToReverse.length -1; i>=0; i--){
            stringReversed += stringToReverse[i]

        }

        console.log(stringReversed )

        // reversa 
        /*
        let fraseReversa = "reverse"
        let strReversa = ''
        let count = fraseReversa.length - 1
        console.log(count)

        while( count >= 0)
        {
        strReversa += fraseReversa[count]
        count --
    }
        console.log(strReversa)
        */



        //tablas del 7 con While
        let counter =1
        while(counter<=10){
            console.log(`7 X ${counter} = ${7 * counter}`)
            counter = counter + 1

        }
        //tabla del 7 con do while
        let counterDo = 1
        do {
            console.log(`7 X ${counterDo} = ${7 * counterDo}`)
            counterDo++
        } while(counterDo < 10)

        //Funciones
        
        function getName (){
            const name = prompt('¿ Cual es tu nombre')
                    console.log(name)
            return(name)
        }

