// Objetos

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

console.log(producto)
console.table(producto)
console.log(producto.nombre)

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhancement
// Cuando la clave y el valor se llaman igual
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)