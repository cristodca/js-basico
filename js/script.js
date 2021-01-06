// CLASE 1 - ¿Qué es Javascript?
2 + "7"    //27
2 * "7"    //14
2 + true  //3
false - 2  //-2


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
typeof 20  // number
typeof cristodca   // undefined
typeof "cristodca" // string
typeof true    // boolean
typeof false   // boolean
typeof null    // object
typeof undefined   // undefined

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


// Funciones de expresión o anónimas

var myExpressiveFunction = function (nombre) {
    return `Hola, ${nombre}`
}


// Clase 4

// Scope Global

var nombre = "cristo"

function fullName() {      // Scope Local
    var apellido = "dca"
    return `${nombre}${apellido}`
}


// Clase 5

// Hoisting

// console.log(myFavorytePet)

functHoisting()

function functHoisting() {
    // console.log(`Hola, ${myFavorytePet}`)
}

var myFavorytePet = "Brasca"


// Clase 6

// Coersión
// Cambio de tipo de dato

// Implícita 
var a = 5 + "20"
// console.log(`${a} = ${typeof a}`)

var b = 5 * "20"
// console.log(`${b} = ${typeof b}`)


// Explícita
var c = String(b)
// console.log(`${c} = ${typeof c}`)

var d = Number(a)
// console.log(`${d} = ${typeof d}`)


// Clase 7
// Truthy & Falsy

