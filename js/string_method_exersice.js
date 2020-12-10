/**
 * ejercicio 1
    1. Asignar un string a una variable
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
let hello = "Hola Mundo"
let helloNew = hello.length
console.log(helloNew)
/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
let hello_two = "Hola"
let world = "Mundo"
let newResult = hello_two.concat(world)
console.log(newResult)
/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */let characteres = "characteres"
let result = characteres.slice(4, 6)
console.log(result)
/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
let new_word = "hello world"
let new_result = new_word.replace(" ", "-")
console.log(new_result)
/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */
let word_new = "hola koders"
let res = word_new.charAt(1)
console.log(res)
/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
let email_user = "koders@gmail.com"
let new_res = email_user.replace("koders", "******")
console.log(new_res)
/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
let two_words = "dos palabras otra palabra"
let res_new = two_words.split(" ")
console.log(res_new)

for(let i = 0;  i<=10;  i++){
    console.log(i)
}