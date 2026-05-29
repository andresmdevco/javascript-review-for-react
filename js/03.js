// Tipos de Datos

// Undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

// Strings o Cadenas de Texto
let alumno = "Juan"
console.log(alumno)
console.log(typeof alumno)

const producto = 'Monitor 49 Pulgadas'
console.log(producto)
console.log(typeof producto)

// Numbers
const numero = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero)
console.log(typeof numero2)
console.log(typeof numero3)

// BigInt
const numeroGrande = BigInt(2836597436579816779647832946472367)
console.log(typeof numeroGrande)

// Boolean
const descuento = true
console.log(typeof descuento)

// Null 
const descuento2 = null
console.log(descuento2)

// Symbol (Son unicos, no se repite ninguno)
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)