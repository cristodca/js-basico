// CLASE 1 - ¿Qué es Javascript?
console.log(2 + "7")    //27
console.log(2 * "7")    //14
console.log(2 + true)  //3
console.log(false - 2)  //-2


// CLASE 2 - Variables, funciones y sintaxis *********

// Valores primitivos =========
// Valores numéricos
20          // Esto es un número

// Textos
// cristodca   // Esto NO es texto
"cristodca" // Esto SÍ es texto

// Booleanos
true    //Verdadero 
false   //Falso

// Valores vacíos
null    // Sin registro
undefined   // Espacio reservado sin valor

// Puedes saber el tipo de dato con la función: 
console.log(typeof 20)  // number
console.log(typeof cristodca)   // undefined
console.log(typeof "cristodca") // string
console.log(typeof true)    // boolean
console.log(typeof false)   // boolean
console.log(typeof null)    // object
console.log(typeof undefined)   // undefined

// Valores no primitivos =========
// Arrays
// [1, 2, 3]
// {"cristo", "dca"}

// VARIABLES
var nombre = "Cristo"   // Reserva espacio de memoria para guardar un valor.

// Declarar variable
var edad    // Se reserva el espacio en memoria.

// Inicializar variable
edad = 20   // Se le asigna valor.

// Declaración e inicialización
var galletas = ["Chispas", "Vainilla"]

var persona = {
    nombre: "Cristo",
    edad: 20,
    galletasFavs: "Vainilla"
}


// Funciones declarativas
function sumar (a, b) {
    return a + b
}

// Funciones de expresión
var myExpressiveFunction = function (nombre) {
    return `Hola, ${nombre}`
}