// Objetos - Manipulación

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: false
}

// Hacer que un objeto no se pueda modificar
// Object.freeze(producto)
//Solo permite modificar las propiedades existentes
// Object.seal(producto)

// Reescribir un valor
producto.disponible = true

// Si no existe, lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio

console.log(producto)